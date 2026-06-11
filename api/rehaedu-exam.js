const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const DEFAULT_MODEL = process.env.OPENAI_EXAM_MODEL || "gpt-5.5";

function extractOutputText(data) {
  if (typeof data?.output_text === "string" && data.output_text) {
    return data.output_text;
  }

  const text = data?.output
    ?.flatMap((item) => item?.content ?? [])
    ?.find((contentItem) => contentItem?.type === "output_text")?.text;

  return typeof text === "string" ? text : null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    res.status(503).json({ error: "OPENAI_API_KEY is not configured." });
    return;
  }

  const { questionLabel, sourceText, currentPrompt, expectedAnswer, studentAnswer, nextPrompt } = req.body ?? {};
  if (!questionLabel || !sourceText || !currentPrompt || !expectedAnswer || !studentAnswer) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const systemPrompt = [
    "Jsi zkoušející u atestace z rehabilitačního lékařství.",
    "Hodnotíš pouze podle podkladového textu otázky, nic si nevymýšlej mimo něj.",
    "Piš vždy česky.",
    "Když je odpověď mimo téma nebo nesmyslná, řekni to jasně.",
    "Když je odpověď částečně správně, stručně pochval správné části a řekni, co chybí.",
    "Buď věcný, přirozený a stručný."
  ].join(" ");

  const schema = {
    name: "rehaedu_exam_feedback",
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        feedback: { type: "string" },
        nextPrompt: { type: ["string", "null"] },
        finish: { type: "boolean" }
      },
      required: ["feedback", "nextPrompt", "finish"]
    },
    strict: true
  };

  const userPrompt = [
    `Otázka: ${questionLabel}`,
    "",
    "Podkladový text otázky:",
    sourceText,
    "",
    `Aktuální podotázka: ${currentPrompt}`,
    `Očekávaný obsah pro hodnocení: ${expectedAnswer}`,
    `Odpověď studenta: ${studentAnswer}`,
    "",
    `Další připravená podotázka: ${nextPrompt ?? "žádná"}`,
    "",
    "Vrať JSON se stručným hodnocením odpovědi, případně další otázkou. Pokud další otázka není, nastav finish na true."
  ].join("\n");

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        input: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        text: {
          format: {
            type: "json_schema",
            ...schema
          }
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      res.status(502).json({ error: errorText || "OpenAI request failed." });
      return;
    }

    const data = await response.json();
    const outputText = extractOutputText(data);
    if (!outputText) {
      res.status(502).json({ error: "Missing model output." });
      return;
    }

    const parsed = JSON.parse(outputText);
    res.status(200).json(parsed);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : "Unknown server error." });
  }
}
