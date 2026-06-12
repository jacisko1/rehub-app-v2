import { useEffect, useMemo, useState } from "react";
import { eduTopics, modules } from "./content";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

type RouteState = {
  slug: string | null;
  sectionId: string | null;
};

const WEEKDAY_LABELS = ["Po", "Ut", "St", "Ct", "Pa", "So", "Ne"];
const MONTH_FORMATTER = new Intl.DateTimeFormat("cs-CZ", { month: "long" });

type CalendarEvent = {
  title: string;
  url: string;
  startDate: Date;
  endDate: Date;
  isCzech: boolean;
};

type QuestionChapter = {
  title: string;
  points: string[];
};

type PreparedQuestion = {
  chapters: QuestionChapter[];
  flashcards?: Flashcard[];
  quizQuestions?: QuizQuestion[];
};

type Flashcard = {
  id: string;
  prompt: string;
  answer: string;
};

type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  correctOptionIndexes: number[];
  explanation: string;
};

type YouTubeVideo = {
  id: string;
  title: string;
  url: string;
};

type InstagramPost = {
  url: string;
  title: string;
};

const ROMAN_CHAPTERS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
const REHAEDU_TOPIC_IDS = new Set(eduTopics.map((topic) => topic.id));
const REHAGRAM_URL = "https://www.instagram.com/rehubproject/";
const REHATUBE_CHANNEL_URL = "https://www.youtube.com/@ReHuBproject";
const REHAGRAM_POSTS: InstagramPost[] = [
  {
    url: "https://www.instagram.com/p/DZIDDeKq2K7/",
    title: "Instagram příspěvek 1"
  },
  {
    url: "https://www.instagram.com/p/DZPLTDsK3UV/",
    title: "Instagram příspěvek 2"
  },
  {
    url: "https://www.instagram.com/p/DZU0r5cqnjH/",
    title: "Instagram příspěvek 3"
  }
];
const REHATUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: "uQbd3mzGMVc",
    title: "RehaTube video 1",
    url: "https://youtu.be/uQbd3mzGMVc?si=hEHm45xCaRMJnDLX"
  },
  {
    id: "TUeMnBy80IM",
    title: "RehaTube video 2",
    url: "https://youtu.be/TUeMnBy80IM?si=BSX6RbI_JYYyRh2a"
  }
];

function hasOwnMarker(text: string): boolean {
  return /^(\d+[\.\)]|[A-Z][\.\)]|[IVXLCDM]+\.)\s/.test(text.trim());
}

function normalizeQuestionPointText(text: string): string {
  return text.replace(/^([A-Z])\)\s/, "$1. ");
}

function getPreparedQuestionLabel(questionKey: string): string | null {
  const [topicId, rawIndex] = questionKey.split(":");
  const questionIndex = Number(rawIndex);
  const topic = eduTopics.find((entry) => entry.id === topicId);
  if (!topic || Number.isNaN(questionIndex)) {
    return null;
  }
  return `${questionIndex + 1}. ${topic.questions[questionIndex] ?? ""}`;
}

function createSafeFilenamePart(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function getPreparedQuestionDocumentName(questionKey: string): string | null {
  const [topicId, rawIndex] = questionKey.split(":");
  const questionIndex = Number(rawIndex);
  const topic = eduTopics.find((entry) => entry.id === topicId);
  if (!topic || Number.isNaN(questionIndex)) {
    return null;
  }

  const categoryLabel = topic.heading.replace(/\.$/, "").trim();
  const questionLabel = topic.questions[questionIndex] ?? "";
  const filename = [categoryLabel, `${questionIndex + 1}`, questionLabel]
    .map(createSafeFilenamePart)
    .filter(Boolean)
    .join("_");

  return filename ? `${filename}.doc` : null;
}

function getPreparedQuestionRoute(topicId: string, questionIndex: number): string {
  return `#/rehaedu/otazka/${topicId}/${questionIndex}`;
}

function getQuestionKeyFromRoute(sectionId: string | null): string | null {
  if (!sectionId?.startsWith("otazka/")) {
    return null;
  }

  const parts = sectionId.split("/");
  if (parts.length !== 3) {
    return null;
  }

  const [, topicId, rawIndex] = parts;
  const questionIndex = Number(rawIndex);
  if (!topicId || Number.isNaN(questionIndex)) {
    return null;
  }

  return `${topicId}:${questionIndex}`;
}

function createFlashcards(questionKey: string, preparedQuestion: PreparedQuestion): Flashcard[] {
  if (preparedQuestion.flashcards?.length) {
    return preparedQuestion.flashcards;
  }

  return preparedQuestion.chapters.flatMap((chapter, chapterIndex) =>
    chapter.points.map((point, pointIndex) => ({
      id: `${questionKey}:${chapterIndex}:${pointIndex}`,
      prompt: `${ROMAN_CHAPTERS[chapterIndex] ?? chapterIndex + 1}. ${chapter.title}`,
      answer: point
    }))
  );
}

function areOptionSetsEqual(left: number[], right: number[]): boolean {
  if (left.length !== right.length) {
    return false;
  }

  return left.every((value, index) => value === right[index]);
}


const PREPARED_QUESTIONS: Record<string, PreparedQuestion> = {
  "v-neurologie:10": {
    flashcards: [
      {
        id: "v-neurologie:10:flashcard:1",
        prompt: "Co je dětská mozková obrna a jaký je její základní charakter?",
        answer: "DMO je neprogresivní neurologický syndrom vznikající na podkladě léze nezralého mozku. Jde o poruchu vývoje pohybu a postury."
      },
      {
        id: "v-neurologie:10:flashcard:2",
        prompt: "V jakém období nejčastěji vzniká léze vedoucí k DMO?",
        answer: "V prenatálním, perinatálním nebo časně postnatálním období."
      },
      {
        id: "v-neurologie:10:flashcard:3",
        prompt: "Jaká je přibližná prevalence DMO?",
        answer: "Přibližně 2 až 3 případy na 1000 živě narozených dětí, častěji u nedonošených."
      },
      {
        id: "v-neurologie:10:flashcard:4",
        prompt: "Jaké hlavní skupiny etiologie DMO rozlišujeme?",
        answer: "Prenatální, perinatální a postnatální."
      },
      {
        id: "v-neurologie:10:flashcard:5",
        prompt: "Jaký typ DMO je nejčastější?",
        answer: "Spastický typ."
      },
      {
        id: "v-neurologie:10:flashcard:6",
        prompt: "Jaké základní formy spastické DMO znáš?",
        answer: "Spastická diparéza, kvadruparéza a hemiparéza."
      },
      {
        id: "v-neurologie:10:flashcard:7",
        prompt: "Co je typické pro dyskinetický typ DMO?",
        answer: "Dystonické nebo choreo-atetotické mimovolní pohyby, ztráta kontroly pohybu a časté poruchy orofaciální motoriky."
      },
      {
        id: "v-neurologie:10:flashcard:8",
        prompt: "Co je typické pro ataktický typ DMO?",
        answer: "Centrální hypotonie, ataxie, hypermetrie, intenční tremor a porucha koordinace."
      },
      {
        id: "v-neurologie:10:flashcard:9",
        prompt: "Jaké zobrazovací metody se používají v diagnostice DMO?",
        answer: "Nejčastěji ultrazvuk a MRI."
      },
      {
        id: "v-neurologie:10:flashcard:10",
        prompt: "K čemu slouží GMFCS?",
        answer: "Ke klasifikaci hrubé motoriky a funkčních schopností pacienta v pěti stupních."
      },
      {
        id: "v-neurologie:10:flashcard:11",
        prompt: "K čemu slouží GMFM?",
        answer: "Ke kvantifikaci hrubé motoriky a ke sledování efektu terapie."
      },
      {
        id: "v-neurologie:10:flashcard:12",
        prompt: "Jaké jsou hlavní cíle komplexní rehabilitační léčby u DMO?",
        answer: "Maximální nezávislost, zlepšení funkce, prevence komplikací, podpora participace a kvality života."
      },
      {
        id: "v-neurologie:10:flashcard:13",
        prompt: "Jaké přístupy se používají v pohybové terapii u DMO?",
        answer: "Například Vojtův princip, Bobath koncept, funkční trénink chůze, práce s vozíkem a sportovní aktivity."
      },
      {
        id: "v-neurologie:10:flashcard:14",
        prompt: "Jaké komplikace je potřeba u DMO aktivně sledovat?",
        answer: "Luxace kyčlí, skoliózu, deformity dolních končetin, osteoporózu, epilepsii, poruchy příjmu potravy a neurogenní močový měchýř či střevo."
      },
      {
        id: "v-neurologie:10:flashcard:15",
        prompt: "Co patří mezi limity rehabilitační terapie u DMO?",
        answer: "Mentální deficit, poruchy senzorického zpracování, PAS, nedostatečná motivace a nízká spolupráce rodiny."
      },
      {
        id: "v-neurologie:10:flashcard:16",
        prompt: "Na čem je založeno posudkové hodnocení pacienta s DMO?",
        answer: "Na funkčním dopadu onemocnění, zejména na soběstačnosti, mobilitě, mentálním stavu a potřebě asistence."
      },
      {
        id: "v-neurologie:10:flashcard:17",
        prompt: "Kdy b\u00fdv\u00e1 v \u010cR diagn\u00f3za DMO \u010dasto stanovena?",
        answer: "V \u010cR b\u00fdv\u00e1 diagnostika DMO \u010dasto mezi 1. a 2. rokem v\u011bku."
      },
      {
        id: "v-neurologie:10:flashcard:18",
        prompt: "Jak\u00e9 testy lze pou\u017e\u00edt k objektivizaci efektu terapie u DMO?",
        answer: "Nap\u0159\u00edklad 6MWT, 10MWT, TUG, 9HPT a Box and Block test."
      },
      {
        id: "v-neurologie:10:flashcard:19",
        prompt: "Co je typick\u00e9 pro dlouhodob\u00fd rehabilita\u010dn\u00ed program ve v\u011bku 0\u20133 roky?",
        answer: "Pohybov\u00e1 terapie, n\u00e1vaznost na ranou p\u00e9\u010di, logopedie, ergoterapie a \u0159e\u0161en\u00ed intern\u00edch komplikac\u00ed."
      },
      {
        id: "v-neurologie:10:flashcard:20",
        prompt: "Jak\u00e9 jsou mo\u017enosti pracovn\u00edho za\u0159azen\u00ed podle t\u00ed\u017ee DMO?",
        answer: "Lehk\u00e9 formy mohou pracovat na b\u011b\u017en\u00e9m trhu s \u00fapravou podm\u00ednek, st\u0159edn\u00ed formy v chr\u00e1n\u011bn\u00e9m zam\u011bstn\u00e1n\u00ed a t\u011b\u017ek\u00e9 formy odpov\u00eddaj\u00ed zpravidla pln\u00e9 invalidit\u011b."
      }
    ],
    quizQuestions: [
      {
        id: "v-neurologie:10:quiz:1",
        prompt: "Kter\u00e1 tvrzen\u00ed odpov\u00eddaj\u00ed definici DMO?",
        options: [
          "Jde o neprogresivn\u00ed neurologick\u00fd syndrom.",
          "Vznik\u00e1 na podklad\u011b l\u00e9ze nezral\u00e9ho mozku.",
          "Jde p\u0159edev\u0161\u00edm o poruchu r\u016fstu kost\u00ed bez neurologick\u00e9 slo\u017eky.",
          "Porucha se t\u00fdk\u00e1 v\u00fdvoje pohybu a postury."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "DMO je neprogresivn\u00ed syndrom z l\u00e9ze nezral\u00e9ho mozku a vede k poru\u0161e v\u00fdvoje pohybu a postury."
      },
      {
        id: "v-neurologie:10:quiz:2",
        prompt: "Ve kter\u00fdch obdob\u00edch m\u016f\u017ee vzniknout l\u00e9ze vedouc\u00ed k DMO?",
        options: [
          "Prenat\u00e1ln\u011b.",
          "Perinat\u00e1ln\u011b.",
          "\u010casn\u011b postnat\u00e1ln\u011b.",
          "Pouze v dosp\u011blosti."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Text uv\u00e1d\u00ed prenat\u00e1ln\u00ed, perinat\u00e1ln\u00ed i \u010dasn\u011b postnat\u00e1ln\u00ed obdob\u00ed."
      },
      {
        id: "v-neurologie:10:quiz:3",
        prompt: "Kter\u00e1 tvrzen\u00ed o prevalenci DMO jsou spr\u00e1vn\u00e1?",
        options: [
          "Prevalence je p\u0159ibli\u017en\u011b 2\u20133 na 1000 \u017eiv\u011b narozen\u00fdch d\u011bt\u00ed.",
          "V\u00fdskyt je vy\u0161\u0161\u00ed u nedono\u0161en\u00fdch d\u011bt\u00ed.",
          "Jde o velmi vz\u00e1cn\u00e9 onemocn\u011bn\u00ed s prevalenc\u00ed pod 0,1 na 1000.",
          "DMO je nej\u010dast\u011bj\u0161\u00ed onemocn\u011bn\u00ed pohybov\u00e9ho apar\u00e1tu v d\u011btsk\u00e9m v\u011bku."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Text uv\u00e1d\u00ed prevalenci 2\u20133/1000, vy\u0161\u0161\u00ed v\u00fdskyt u nedono\u0161en\u00fdch a ozna\u010duje DMO za nej\u010dast\u011bj\u0161\u00ed onemocn\u011bn\u00ed pohybov\u00e9ho apar\u00e1tu v d\u011btsk\u00e9m v\u011bku."
      },
      {
        id: "v-neurologie:10:quiz:4",
        prompt: "Co m\u016f\u017ee motorickou poruchu u DMO doprov\u00e1zet?",
        options: [
          "Kognitivn\u00ed poruchy.",
          "Senzorick\u00e9 poruchy zraku nebo sluchu.",
          "Epilepsie.",
          "Sekund\u00e1rn\u00ed muskuloskelet\u00e1ln\u00ed zm\u011bny."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "V\u0161echny uveden\u00e9 mo\u017enosti text u DMO zmi\u0148uje jako mo\u017en\u00fd doprovod."
      },
      {
        id: "v-neurologie:10:quiz:5",
        prompt: "Kter\u00e9 polo\u017eky pat\u0159\u00ed mezi prenat\u00e1ln\u00ed etiologick\u00e9 faktory?",
        options: [
          "IUGR.",
          "Preeklampsie.",
          "Kongenit\u00e1ln\u00ed infekce.",
          "Ventrikuloperitone\u00e1ln\u00ed shunt."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Text mezi prenat\u00e1ln\u00ed faktory uv\u00e1d\u00ed IUGR, preeklampsii i kongenit\u00e1ln\u00ed infekce."
      },
      {
        id: "v-neurologie:10:quiz:6",
        prompt: "Co text \u0159ad\u00ed mezi perinat\u00e1ln\u00ed p\u0159\u00ed\u010diny DMO?",
        options: [
          "Hypoxii.",
          "Porodn\u00ed trauma.",
          "Intraventrikul\u00e1rn\u00ed hemoragii.",
          "Chronickou artritidu."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Perinat\u00e1ln\u011b jsou v textu uvedeny hypoxie, porodn\u00ed trauma a IVH."
      },
      {
        id: "v-neurologie:10:quiz:7",
        prompt: "Kter\u00e9 tvrzen\u00ed o spastick\u00e9m typu DMO jsou spr\u00e1vn\u00e9?",
        options: [
          "Je nej\u010dast\u011bj\u0161\u00ed.",
          "Je spojen s po\u0161kozen\u00edm pyramidov\u00e9 dr\u00e1hy.",
          "Pat\u0159\u00ed sem dipar\u00e9za, kvadrupar\u00e9za a hemipar\u00e9za.",
          "V\u017edy je bez posti\u017een\u00ed horn\u00edch kon\u010detin."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Spastick\u00fd typ je nej\u010dast\u011bj\u0161\u00ed, souvis\u00ed s pyramidovou dr\u00e1hou a zahrnuje dipar\u00e9zu, kvadrupar\u00e9zu i hemipar\u00e9zu."
      },
      {
        id: "v-neurologie:10:quiz:8",
        prompt: "Co je v textu typick\u00e9 pro spastickou dipar\u00e9zu?",
        options: [
          "Horn\u00ed kon\u010detiny b\u00fdvaj\u00ed funk\u010dn\u011b lep\u0161\u00ed.",
          "\u010casto je riziko luxace ky\u010dl\u00ed.",
          "\u010casto se objevuje pes equinus.",
          "Jde o \u010dist\u011b unilater\u00e1ln\u00ed posti\u017een\u00ed."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Dipar\u00e9za m\u00e1 lep\u0161\u00ed funkci HK, riziko luxace ky\u010dl\u00ed a pes equinus; unilater\u00e1ln\u00ed je hemipar\u00e9za."
      },
      {
        id: "v-neurologie:10:quiz:9",
        prompt: "Kter\u00e9 znaky odpov\u00eddaj\u00ed spastick\u00e9 kvadrupar\u00e9ze?",
        options: [
          "T\u011b\u017ek\u00e1 l\u00e9ze CNS.",
          "Bulb\u00e1rn\u00ed symptomatika.",
          "Respira\u010dn\u00ed komplikace.",
          "V\u017edy zachovan\u00e1 pln\u00e1 sob\u011bsta\u010dnost."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Text popisuje t\u011b\u017ekou l\u00e9zi CNS, bulb\u00e1rn\u00ed symptomatiku i respira\u010dn\u00ed komplikace."
      },
      {
        id: "v-neurologie:10:quiz:10",
        prompt: "Co je v textu typick\u00e9 pro spastickou hemipar\u00e9zu?",
        options: [
          "Unilater\u00e1ln\u00ed posti\u017een\u00ed.",
          "\u010cast\u00e1 \u010dasn\u00e1 vertikalizace.",
          "Equinovar\u00f3zn\u00ed postaven\u00ed.",
          "Epilepsie se m\u016f\u017ee vyskytovat asi ve 27\u201344 %."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "V\u0161echny \u010dty\u0159i body jsou v textu p\u0159\u00edmo uvedeny u spastick\u00e9 hemipar\u00e9zy."
      },
      {
        id: "v-neurologie:10:quiz:11",
        prompt: "Co charakterizuje dyskinetick\u00fd typ DMO?",
        options: [
          "Dystonick\u00e9 nebo choreo-atetotick\u00e9 projevy.",
          "Ztr\u00e1tu kontroly pohybu.",
          "Labilitu trupu.",
          "Poruchy orofaci\u00e1ln\u00ed motoriky."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Text uv\u00e1d\u00ed v\u0161echny tyto projevy jako typick\u00e9 pro dyskinetick\u00fd typ."
      },
      {
        id: "v-neurologie:10:quiz:12",
        prompt: "Kter\u00e9 projevy pat\u0159\u00ed k ataktick\u00e9mu typu DMO?",
        options: [
          "Centra\u0301ln\u00ed hypotonie.",
          "Ataxie trupu a kon\u010detin.",
          "Hypermetrie a inten\u010dn\u00ed tremor.",
          "Porucha koordinace o\u010dn\u00edch bulb\u016f."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "V\u0161echny uveden\u00e9 projevy jsou v textu u ataktick\u00e9ho typu p\u0159\u00edmo zm\u00edn\u011bny."
      },
      {
        id: "v-neurologie:10:quiz:13",
        prompt: "Kter\u00e1 tvrzen\u00ed o diagnostice DMO jsou spr\u00e1vn\u00e1?",
        options: [
          "Sou\u010d\u00e1st\u00ed je klinick\u00e9 a neurologick\u00e9 vy\u0161et\u0159en\u00ed.",
          "Vyu\u017e\u00edvaj\u00ed se SONO a MRI.",
          "Lze doplnit EEG, metabolick\u00e9 a genetick\u00e9 vy\u0161et\u0159en\u00ed.",
          "Diagn\u00f3zu lze stanovit pouze podle jednoho laboratorn\u00edho markeru."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Text stav\u00ed diagnostiku na klinice, zobrazovac\u00edch metod\u00e1ch a dopl\u0148uj\u00edc\u00edch vy\u0161et\u0159en\u00edch, ne na jednom markeru."
      },
      {
        id: "v-neurologie:10:quiz:14",
        prompt: "Kter\u00e1 tvrzen\u00ed o hodnocen\u00ed t\u00ed\u017ee posti\u017een\u00ed jsou spr\u00e1vn\u00e1?",
        options: [
          "GMFCS klasifikuje hrubou motoriku a funk\u010dn\u00ed schopnosti.",
          "GMFM slou\u017e\u00ed ke kvantifikaci hrub\u00e9 motoriky.",
          "6MWT, 10MWT, TUG, 9HPT a Box and Block lze pou\u017e\u00edt k objektivizaci efektu terapie.",
          "GMFCS m\u00e1 12 stup\u0148\u016f."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "GMFCS je p\u011btistup\u0148ov\u00fd syst\u00e9m, GMFM kvantifikuje motoriku a text uv\u00e1d\u00ed i standardizovan\u00e9 testy."
      },
      {
        id: "v-neurologie:10:quiz:15",
        prompt: "Co pat\u0159\u00ed do komplexn\u00ed rehabilita\u010dn\u00ed l\u00e9\u010dby u DMO?",
        options: [
          "Interdisciplin\u00e1rn\u00ed p\u0159\u00edstup zam\u011b\u0159en\u00fd na nez\u00e1vislost a kvalitu \u017eivota.",
          "L\u00e9\u010dba spasticity nap\u0159\u00edklad elektrostimulac\u00ed, botulotoxinem a ort\u00e9zami.",
          "Pohybov\u00e1 terapie v\u010detn\u011b Vojtova principu, Bobath konceptu a funk\u010dn\u00edho tr\u00e9ninku.",
          "Ignorov\u00e1n\u00ed komplikac\u00ed, proto\u017ee nejsou pro funkci podstatn\u00e9."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Komplexn\u00ed rehabilitace zahrnuje interdisciplin\u00e1rn\u00ed p\u0159\u00edstup, l\u00e9\u010dbu spasticity, pohybovou terapii i aktivn\u00ed \u0159e\u0161en\u00ed komplikac\u00ed."
      },
      {
        id: "v-neurologie:10:quiz:16",
        prompt: "Kter\u00e9 c\u00edle nebo obsahy odpov\u00eddaj\u00ed kr\u00e1tkodob\u00e9mu rehabilita\u010dn\u00edmu programu?",
        options: [
          "Stanoven\u00ed hlavn\u00edho probl\u00e9mu a konkr\u00e9tn\u00edho kr\u00e1tkodob\u00e9ho c\u00edle.",
          "V\u00fdb\u011br vhodn\u00e9 terapeutick\u00e9 techniky.",
          "Objektivn\u00ed kontrola efektu standardizovan\u00fdm testov\u00e1n\u00edm.",
          "Nap\u0159\u00edklad zlep\u0161en\u00ed stability sedu nebo prevence kontraktur."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "V\u0161echny \u010dty\u0159i body text v kr\u00e1tkodob\u00e9m programu zmi\u0148uje."
      },
      {
        id: "v-neurologie:10:quiz:17",
        prompt: "Co je podle textu typick\u00e9 pro dlouhodob\u00fd program ve v\u011bku 0\u20133 roky?",
        options: [
          "Pohybov\u00e1 terapie a dozr\u00e1v\u00e1n\u00ed hrub\u00e9 motoriky.",
          "N\u00e1vaznost na ranou p\u00e9\u010di.",
          "Logopedie, ergoterapie a \u0159e\u0161en\u00ed intern\u00edch komplikac\u00ed.",
          "D\u016fraz hlavn\u011b na pracovn\u00ed za\u0159azen\u00ed na b\u011b\u017en\u00e9m trhu."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Pracovn\u00ed za\u0159azen\u00ed pat\u0159\u00ed a\u017e do pozd\u011bj\u0161\u00edho \u017eivota, ne do programu 0\u20133 roky."
      },
      {
        id: "v-neurologie:10:quiz:18",
        prompt: "Kter\u00e9 polo\u017eky text \u0159ad\u00ed mezi limity rehabilita\u010dn\u00ed terapie?",
        options: [
          "Ment\u00e1ln\u00ed deficit.",
          "Poruchy senzorick\u00e9ho zpracov\u00e1n\u00ed a PAS.",
          "Nedostate\u010dnou motivaci a nespolupr\u00e1ci rodiny.",
          "Nutnost respektovat hranice motorick\u00fdch a ment\u00e1ln\u00edch mo\u017enost\u00ed pacienta."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Text mezi limity uv\u00e1d\u00ed v\u0161echny \u010dty\u0159i polo\u017eky."
      },
      {
        id: "v-neurologie:10:quiz:19",
        prompt: "Kter\u00e1 tvrzen\u00ed o posudkov\u00e9m \u0159e\u0161en\u00ed a pracovn\u00edm za\u0159azen\u00ed jsou spr\u00e1vn\u00e1?",
        options: [
          "Rozhoduj\u00edc\u00ed je funk\u010dn\u00ed dopad onemocn\u011bn\u00ed, ne samotn\u00e1 diagn\u00f3za.",
          "Mezi mo\u017enosti pat\u0159\u00ed p\u0159\u00edsp\u011bvek na p\u00e9\u010di, ZTP/ZTP-P, pom\u016fcky a invalidn\u00ed d\u016fchod.",
          "Lehk\u00e9 formy mohou pracovat na b\u011b\u017en\u00e9m trhu s \u00fapravou podm\u00ednek.",
          "T\u011b\u017ek\u00e9 formy odpov\u00eddaj\u00ed zpravidla pln\u00e9 invalidit\u011b."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "V\u0161echna tvrzen\u00ed odpov\u00eddaj\u00ed textu o posudkov\u00e9m \u0159e\u0161en\u00ed a pracovn\u00edm za\u0159azen\u00ed."
      },
      {
        id: "v-neurologie:10:quiz:20",
        prompt: "Kter\u00e9 z n\u00e1sleduj\u00edc\u00edch tvrzen\u00ed je podle vypracovan\u00e9ho textu spr\u00e1vn\u00e9?",
        options: [
          "DMO je progresivn\u00ed degenerativn\u00ed onemocn\u011bn\u00ed perifern\u00edho nervu.",
          "MRI je v\u017edy norm\u00e1ln\u00ed a diagnosticky nepou\u017eiteln\u00e1.",
          "GMFM slou\u017e\u00ed k hodnocen\u00ed sluchov\u00fdch funkc\u00ed.",
          "Spastick\u00fd typ je v\u017edy m\u00e9n\u011b \u010dast\u00fd ne\u017e ataktick\u00fd."
        ],
        correctOptionIndexes: [],
        explanation: "Ani jedno z tvrzen\u00ed neodpov\u00edd\u00e1 textu. DMO je neprogresivn\u00ed, MRI m\u00e1 v diagnostice m\u00edsto, GMFM hodnot\u00ed hrubou motoriku a spastick\u00fd typ je nej\u010dast\u011bj\u0161\u00ed."
      }
    ],
    chapters: [
      {
        title: "Definice a charakteristika",
        points: [
          "Dětská mozková obrna (DMO) je neprogresivní neurologický syndrom vznikající na podkladě léze nezralého mozku v prenatálním, perinatálním nebo časně postnatálním období.",
          "Jedná se o poruchu vývoje pohybu a postury. Léze samotná je uzavřený děj, avšak klinická manifestace se mění v průběhu růstu a vývoje dítěte.",
          "DMO je nejčastější onemocnění pohybového aparátu v dětském věku, prevalence je přibližně 2-3/1000 živě narozených dětí a výrazně vyšší u nedonošených.",
          "Motorická porucha je často doprovázena poruchami kognitivními, senzorickými (zrak, sluch), komunikačními, percepčními, poruchami chování a PAS, epilepsií a sekundárními muskuloskeletálními změnami."
        ]
      },
      {
        title: "Etiologie",
        points: [
          "1. Prenatální: IUGR, chronická hypoxie, preeklampsie, vícečetná těhotenství, kongenitální infekce, intoxikace, VVV CNS.",
          "2. Perinatální: hypoxie, porodní trauma, intraventrikulární hemoragie (IVH).",
          "3. Postnatální: infekce CNS, hyperbilirubinémie (riziko dyskineticko-dystonické formy, cca 10 %).",
          "Významnou roli hraje vulnerabilita germinální matrix u nedonošených dětí (křehká cévní síť, nezralá regulace průtoku, ischemie a krvácení)."
        ]
      },
      {
        title: "Klasifikace dle typu postižení",
        points: [
          "1. Spastický typ: poškozena pyramidová dráha, chudá stereotypní motorika; formy di-/kvadruparéza a hemiparéza (HK často horší než DK).",
          "A) Spastická diparéza: HK bývají funkčně lepší, často hypoplazie pletence pánevního, DK kratší a drobnější, riziko luxace kyčlí a pes equinus.",
          "B) Spastická kvadruparéza: těžká léze CNS, těžké postižení HK i DK, častá mentální retardace, bulbární symptomatika, skolióza, poruchy příjmu p.o., respirační komplikace a poruchy vyprazdňování.",
          "C) Spastická hemiparéza: unilaterální postižení, často časná vertikalizace, equinovarózní postavení, epilepsie cca 27-44 %.",
          "2. Dyskinetický typ (cca 10 %): dystonický a choreo-atetotický, ztráta kontroly pohybu, labilita trupu, poruchy orofaciální motoriky; epilepsie méně častá.",
          "3. Ataktický typ (4-15 %): centrální hypotonie, ataxie trupu a končetin, hypermetrie, intenční tremor, porucha koordinace očních bulbů, často nestabilní sed a pozdní chůze.",
          "4. Smíšený typ: kombinace spastického a dyskinetického typu."
        ]
      },
      {
        title: "Diagnostika",
        points: [
          "1. Klinické a neurologické vyšetření, Vojtův diagnosticko-terapeutický koncept (spontánní motorika, milníky vývoje, polohové reakce, dynamika reflexů).",
          "2. Zobrazovací metody: SONO, MRI; poranění mozku nemusí být vždy na MRI, ale většina dětí s DMO má abnormální nález.",
          "3. Doplňující vyšetření: EEG, metabolické vady, genetické vyšetření.",
          "4. V ČR bývá diagnostika často mezi 1.-2. rokem věku."
        ]
      },
      {
        title: "Hodnocení tíže postižení",
        points: [
          "GMFCS (I-V): Gross Motor Function Classification System pro klasifikaci hrubé motoriky a funkčních schopností.",
          "GMFM: Gross Motor Function Measure pro kvantifikaci hrubé motoriky.",
          "Objektivizace efektu terapie: 6MWT, 10MWT, TUG, 9HPT, Box and Block test."
        ]
      },
      {
        title: "Komplexní rehabilitační léčba",
        points: [
          "Interdisciplinární proces se zaměřením na maximální nezávislost, kvalitu života a sociální integraci.",
          "Nutné zohlednit typ a tíži postižení, věk pacienta, milníky vývoje a individuální potřeby.",
          "Léčba spasticity: funkční elektrostimulace, aplikace botulotoxinu, ortézování.",
          "Pohybová terapie: Vojtův princip, Bobath koncept, funkční trénink (chůze, vozík), sportovní aktivity.",
          "Řešení komplikací: luxace kyčlí, skolióza, deformity DK, osteoporóza, epilepsie, poruchy příjmu potravy (NG sonda, PEG), neurogenní měchýř a střevo."
        ]
      },
      {
        title: "Krátkodobý rehabilitační program",
        points: [
          "Stanovení hlavního problému a definice konkrétního krátkodobého cíle.",
          "Výběr vhodné terapeutické techniky.",
          "Objektivní kontrola efektu standardizovaným testováním.",
          "Cíle mohou být např. zlepšení stability sedu, nácvik asistované chůze, prevence kontraktur a edukace rodiny."
        ]
      },
      {
        title: "Dlouhodobý rehabilitační program dle věku",
        points: [
          "0-3 roky: pohybová terapie (dozrávání hrubé motoriky), návaznost na ranou péči, logopedie (p.o. příjem, polykání), ergoterapie a řešení interních komplikací.",
          "3-6/8 let: rozvoj jemné motoriky a koordinace, trénink ADL, předškolní příprava, pomůcky, komunikace verbální i alternativní, řešení spasticity a deformit.",
          "6-12 let (zlatý věk motorického učení): funkční trénink, školní integrace (SPC, IVP, asistent), kompenzační strategie.",
          "12 let až dospělost: riziko zhoršení mobility při snížené motivaci a růstové akceleraci, potřeba intenzivnější pohybové terapie, důraz na kvalitu i kvantitu pohybu."
        ]
      },
      {
        title: "Limity rehabilitační terapie",
        points: [
          "Mentální deficit, poruchy senzorického zpracování, PAS.",
          "Nedostatečná motivace, nespolupráce rodiny.",
          "Nutnost respektovat hranice motorických a mentálních možností pacienta."
        ]
      },
      {
        title: "Posudkové řešení",
        points: [
          "1. Hodnocení funkční schopnosti (GMFCS), soběstačnosti (ADL), mobility, mentálního stavu a potřeby asistence.",
          "2. Možnosti: příspěvek na péči, průkaz ZTP/ZTP-P, kompenzační pomůcky, invalidní důchod.",
          "Rozhodující je funkční dopad onemocnění, nikoli samotná diagnóza."
        ]
      },
      {
        title: "Pracovní zařazení",
        points: [
          "1. Lehké formy (GMFCS I-II): běžný pracovní trh s případnou úpravou podmínek.",
          "2. Střední formy: chráněné zaměstnání, sociální podniky.",
          "3. Těžké formy (GMFCS IV-V): zpravidla plná invalidita.",
          "Cílem je maximální možná nezávislost, participace a sociální integrace."
        ]
      }
    ]
  }
};

PREPARED_QUESTIONS["v-neurologie:10"] = {
  flashcards: [
    {
      id: "v-neurologie:10:flashcard:1",
      prompt: "Co je DMO a jaký je její základní charakter?",
      answer: "Dětská mozková obrna je neprogresivní neurologický syndrom z léze nezralého mozku. Jde o skupinu poruch vývoje pohybu a postury; léze je uzavřený děj, ale klinická manifestace se mění s růstem a vývojem dítěte."
    },
    {
      id: "v-neurologie:10:flashcard:2",
      prompt: "Kdy může vzniknout léze vedoucí k DMO?",
      answer: "V prenatálním, perinatálním nebo časně postnatálním období, tedy ve vyvíjejícím se fetálním nebo dětském mozku."
    },
    {
      id: "v-neurologie:10:flashcard:3",
      prompt: "Jaká je prevalence DMO a u koho je vyšší?",
      answer: "Přibližně 2-3/1000 živě narozených dětí. U nedonošených, zejména extrémně nezralých dětí, je výskyt výrazně vyšší."
    },
    {
      id: "v-neurologie:10:flashcard:4",
      prompt: "Co může doprovázet motorickou poruchu u DMO?",
      answer: "Kognitivní deficit, poruchy zraku a sluchu, komunikační a percepční poruchy, poruchy chování a PAS, epilepsie a sekundární muskuloskeletální změny."
    },
    {
      id: "v-neurologie:10:flashcard:5",
      prompt: "Jaké etiologické skupiny DMO rozlišujeme?",
      answer: "Prenatální, perinatální a postnatální. Všechny představují neprogresivní změny ve vyvíjejícím se mozku."
    },
    {
      id: "v-neurologie:10:flashcard:6",
      prompt: "Proč je u nedonošených významná germinální matrix?",
      answer: "Periventrikulární germinální matrix má křehkou cévní síť a nezralou regulaci průtoku, proto je náchylná k ischemii a krvácení."
    },
    {
      id: "v-neurologie:10:flashcard:7",
      prompt: "Co charakterizuje spastický typ DMO?",
      answer: "Je nejčastější, vzniká při postižení pyramidové dráhy a projevuje se chudou, stereotypní, generalizovanou motorikou s omezenou cílenou hybností."
    },
    {
      id: "v-neurologie:10:flashcard:8",
      prompt: "Jaké formy spastické DMO znáš?",
      answer: "Spastickou diparézu, triparézu, kvadruparézu a hemiparézu."
    },
    {
      id: "v-neurologie:10:flashcard:9",
      prompt: "Co je typické pro spastickou diparézu?",
      answer: "HK bývají funkčně lepší, DK jsou často kratší a drobnější, bývá hypoplazie pletence pánevního, riziko luxace kyčlí a pes equinus. Epilepsie se uvádí asi u 16-27 %."
    },
    {
      id: "v-neurologie:10:flashcard:10",
      prompt: "Co je typické pro spastickou kvadruparézu?",
      answer: "Těžká léze CNS, často po IVH a komplikacích hydrocefalu, těžké postižení HK i DK, mentální retardace, bulbární symptomatika, senzorické odchylky, poruchy p.o. příjmu, respirační komplikace, skolióza a poruchy vyprazdňování."
    },
    {
      id: "v-neurologie:10:flashcard:11",
      prompt: "Co je typické pro spastickou hemiparézu?",
      answer: "Unilaterální postižení, HK bývá funkčně horší než DK, častá časná vertikalizace, equinovarózní postavení, kyčel obvykle není riziková pro luxaci a epilepsie se uvádí asi u 27-44 %."
    },
    {
      id: "v-neurologie:10:flashcard:12",
      prompt: "Co charakterizuje dyskinetický typ DMO?",
      answer: "Tvoří asi 10 %, vzniká při postižení extrapyramidové dráhy a může být dystonický nebo choreo-atetotický. Dítě má představu pohybu, ale nedokáže ji dobře realizovat; chybí opora a trup je labilní."
    },
    {
      id: "v-neurologie:10:flashcard:13",
      prompt: "Jaké orofaciální souvislosti má dyskinetický typ?",
      answer: "Časté jsou slinění, podvýživa, vytlačování jídla jazykem, rozdíl mezi p.o. příjmem a energetickým výdejem, dystonické ataky při krmení a často potřeba PEG."
    },
    {
      id: "v-neurologie:10:flashcard:14",
      prompt: "Co je důležité v terapii dyskinetické formy?",
      answer: "Metodou volby je nabídnout oporu. Sádrová fixace může negativně zasáhnout posturální funkce a bývá špatně tolerovaná."
    },
    {
      id: "v-neurologie:10:flashcard:15",
      prompt: "Co je typické pro ataktický typ DMO?",
      answer: "Tvoří asi 4-15 %, je mozečkový, s centrální hypotonií, ataxií trupu a končetin, hypermetrií, intenčním tremorem, poruchou koordinace očních bulbů, nestabilním sedem a chůzí často až ve 3.-4. roce."
    },
    {
      id: "v-neurologie:10:flashcard:16",
      prompt: "Jaké riziko má terapie u ataktické formy s mentálním deficitem?",
      answer: "Hrozí přetížení terapií, stagnace nebo zhoršení vývoje; někdy je vhodná terapeutická pauza."
    },
    {
      id: "v-neurologie:10:flashcard:17",
      prompt: "Jaké nálezy na MRI lze u DMO čekat?",
      answer: "Asi 86 % dětí s DMO má abnormální MRI nález, ale přibližně 14 % klinicky diagnostikovaných dětí nález na MRI nemá; nejčastěji jde o děti s ataktickou formou."
    },
    {
      id: "v-neurologie:10:flashcard:18",
      prompt: "Kdy bývá v ČR stanovena diagnóza DMO?",
      answer: "Často mezi 1. a 2. rokem věku. Do 1 roku se spíše mluví o centrální koordinační poruše."
    },
    {
      id: "v-neurologie:10:flashcard:19",
      prompt: "K čemu slouží GMFCS, GMFM a standardizované testy?",
      answer: "GMFCS klasifikuje hrubou motoriku a funkční schopnosti v pěti stupních, GMFM kvantifikuje hrubou motoriku. Efekt terapie lze objektivizovat testy 6MWT, 10MWT, TUG, 9HPT a Box and Block."
    },
    {
      id: "v-neurologie:10:flashcard:20",
      prompt: "Jaké věkové mezníky se zohledňují v rehabilitaci DMO?",
      answer: "Hrubá motorika dozrává zhruba do 3 let, jemná motorika a koordinace mezi 3.-6./7. rokem, 8.-12. rok je zlatý věk motorického učení a po 12. roce často klesá spontánní chuť k pohybu."
    },
    {
      id: "v-neurologie:10:flashcard:21",
      prompt: "Jaké přístupy se používají v pohybové terapii?",
      answer: "Vojtův princip pro kvalitu motoriky, Bobath koncept se stimulací ve vývojové řadě a kvantitu, funkční trénink chůze nebo práce s vozíkem a sportovní aktivity."
    },
    {
      id: "v-neurologie:10:flashcard:22",
      prompt: "Jaké komplikace je potřeba u DMO aktivně sledovat?",
      answer: "Luxace kyčlí, skoliózu, deformity DK, osteoporózu, epilepsii, poruchy příjmu potravy včetně NG sondy nebo PEG a neurogenní měchýř a střevo."
    },
    {
      id: "v-neurologie:10:flashcard:23",
      prompt: "Co je typické pro dlouhodobý program ve věku 0-3 roky?",
      answer: "Pohybová terapie včetně VRL, návaznost na ranou péči, logopedie pro p.o. příjem a polykání, ergoterapie včetně kompenzačních a polohovacích pomůcek a řešení interních komplikací."
    },
    {
      id: "v-neurologie:10:flashcard:24",
      prompt: "Co patří mezi limity rehabilitační terapie?",
      answer: "Mentální deficit, poruchy senzorického zpracování, PAS, nedostatečná motivace, nespolupráce rodiny a nutnost respektovat hranice motorických a mentálních možností pacienta."
    },
    {
      id: "v-neurologie:10:flashcard:25",
      prompt: "Na čem stojí posudkové hodnocení a pracovní zařazení?",
      answer: "Rozhoduje funkční dopad: GMFCS, ADL, mobilita, mentální stav a potřeba asistence. Lehké formy mohou na běžný pracovní trh, střední do chráněného zaměstnání a těžké formy zpravidla odpovídají plné invaliditě."
    }
  ],
  quizQuestions: [
    {
      id: "v-neurologie:10:quiz:1",
      prompt: "Která tvrzení odpovídají definici DMO?",
      options: [
        "Jde o neprogresivní neurologický syndrom.",
        "Vzniká na podkladě léze nezralého mozku.",
        "Popisuje skupinu poruch vývoje pohybu a postury.",
        "Jde o primárně progresivní degenerativní onemocnění periferního nervu."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "DMO je neprogresivní syndrom z léze nezralého mozku a týká se vývoje pohybu a postury."
    },
    {
      id: "v-neurologie:10:quiz:2",
      prompt: "Co je správně o prevalenci a doprovodných projevech DMO?",
      options: [
        "Prevalence je přibližně 2-3/1000 živě narozených dětí.",
        "Výskyt je výrazně vyšší u nedonošených dětí.",
        "Kognitivní deficit může být významný až asi u poloviny dětí.",
        "DMO nikdy není doprovázena epilepsií."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Zdroj uvádí prevalenci 2-3/1000, vyšší výskyt u nedonošených a možné kognitivní, senzorické i epileptické doprovody."
    },
    {
      id: "v-neurologie:10:quiz:3",
      prompt: "Které položky patří mezi prenatální etiologické faktory?",
      options: [
        "IUGR a chronická hypoxie.",
        "Preeklampsie a vícečetné těhotenství.",
        "Kongenitální infekce, intoxikace a VVV CNS.",
        "Pouze úraz v dospělosti."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Prenatální skupina zahrnuje IUGR, chronickou hypoxii, preeklampsii, vícečetné těhotenství, infekce, intoxikace a VVV CNS."
    },
    {
      id: "v-neurologie:10:quiz:4",
      prompt: "Co text řadí mezi perinatální a postnatální příčiny DMO?",
      options: [
        "Perinatálně hypoxii, porodní trauma a IVH.",
        "Postnatálně infekce CNS.",
        "Postnatálně hyperbilirubinémii s rizikem dyskineticko-dystonické formy.",
        "Chronickou artritidu jako hlavní perinatální příčinu."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Perinatálně jsou uvedeny hypoxie, trauma a IVH; postnatálně infekce CNS a hyperbilirubinémie."
    },
    {
      id: "v-neurologie:10:quiz:5",
      prompt: "Která tvrzení o germinální matrix jsou správná?",
      options: [
        "Je významná hlavně u nedonošených dětí.",
        "Nachází se v periventrikulární oblasti.",
        "Je zranitelná kvůli křehké cévní síti a nezralé regulaci průtoku.",
        "Je vždy plně vyzrálá a odolná vůči ischemii."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Vulnerabilita germinální matrix u nedonošených zvyšuje riziko ischemie a krvácení."
    },
    {
      id: "v-neurologie:10:quiz:6",
      prompt: "Co charakterizuje spastický typ DMO?",
      options: [
        "Postižení pyramidové dráhy.",
        "Chudá, stereotypní a redukovaná motorika.",
        "Omezená schopnost diferencované cílené hybnosti.",
        "Výhradně mozečkové postižení."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Spastický typ souvisí s pyramidovou dráhou a chudou stereotypní motorikou."
    },
    {
      id: "v-neurologie:10:quiz:7",
      prompt: "Co je typické pro spastickou diparézu?",
      options: [
        "HK jsou často funkčně lepší než DK.",
        "Bývá hypoplazie pletence pánevního a DK mohou být kratší a drobnější.",
        "Je riziko luxace kyčlí a pes equinus.",
        "Jde o čistě jednostranné postižení."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Diparéza je bilaterální forma s lepší funkcí HK, změnami pletence a rizikem kyčelní luxace i pes equinus."
    },
    {
      id: "v-neurologie:10:quiz:8",
      prompt: "Které znaky odpovídají spastické kvadruparéze?",
      options: [
        "Těžká léze CNS, často po IVH a komplikacích hydrocefalu.",
        "Těžké postižení HK i DK.",
        "Bulbární symptomatika, poruchy p.o. příjmu, respirační komplikace a skolióza.",
        "Vždy plně zachovaná soběstačnost bez senzorických odchylek."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Kvadruparéza je těžká forma s postižením všech končetin a četnými systémovými komplikacemi."
    },
    {
      id: "v-neurologie:10:quiz:9",
      prompt: "Co je typické pro spastickou hemiparézu?",
      options: [
        "Unilaterální postižení.",
        "HK bývá funkčně horší než DK.",
        "Častá časná vertikalizace a equinovarózní postavení.",
        "Kyčelní kloub je typicky nejrizikovější pro luxaci."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Hemiparéza je jednostranná, s horší funkcí HK, časnou vertikalizací a equinovarózním postavením; kyčel nebývá riziková pro luxaci."
    },
    {
      id: "v-neurologie:10:quiz:10",
      prompt: "Co charakterizuje dyskinetický typ DMO?",
      options: [
        "Postižení extrapyramidové dráhy.",
        "Dystonický nebo choreo-atetotický typ.",
        "Ztráta kontroly pohybu, chybění opory a labilita trupu.",
        "Epilepsie je u něj častější než u všech ostatních forem."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Dyskinetický typ je extrapyramidový, dystonický nebo choreo-atetotický; epilepsie je podle textu méně častá až vzácná."
    },
    {
      id: "v-neurologie:10:quiz:11",
      prompt: "Které projevy a souvislosti patří k dyskinetickému typu?",
      options: [
        "Dítě může mít představu pohybu, ale nedokáže ji realizovat.",
        "Na podněty reaguje generalizovanou, energeticky náročnou hybností.",
        "Může být porucha orofaciální motoriky, slinění, podvýživa a potřeba PEG.",
        "Sádrová fixace je vždy metodou první volby bez rizika."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Zdroj zdůrazňuje energeticky náročnou generalizovanou hybnost a orofaciální obtíže; na sádrovou fixaci upozorňuje jako na rizikovou."
    },
    {
      id: "v-neurologie:10:quiz:12",
      prompt: "Které projevy patří k ataktickému typu DMO?",
      options: [
        "Centrální hypotonie.",
        "Ataxie trupu a končetin, hypermetrie a intenční tremor.",
        "Porucha koordinace očních bulbů a nestabilní sed.",
        "Vždy časná samostatná chůze před 1. rokem."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Ataktický typ je mozečkový, s hypotonií, ataxií, tremorem a často pozdní chůzí ve 3.-4. roce."
    },
    {
      id: "v-neurologie:10:quiz:13",
      prompt: "Co je správně o diagnostice DMO?",
      options: [
        "Součástí je klinické a neurologické vyšetření.",
        "Vojtův diagnosticko-terapeutický koncept sleduje spontánní motoriku, milníky, polohové reakce a dynamiku reflexů.",
        "Používá se SONO a MRI.",
        "Diagnózu lze spolehlivě stanovit jediným laboratorním markerem."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Diagnostika stojí na klinice, neurologii, vývojovém vyšetření a zobrazovacích či doplňujících metodách."
    },
    {
      id: "v-neurologie:10:quiz:14",
      prompt: "Která tvrzení o MRI u DMO jsou správná?",
      options: [
        "Asi 86 % dětí s DMO má abnormální MRI nález.",
        "Asi 14 % klinicky diagnostikovaných dětí nemusí mít nález na MRI.",
        "Bez normálního MRI nelze DMO klinicky zvažovat.",
        "Chybějící MRI nález se často týká ataktické formy."
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "MRI je důležité, ale normální nález DMO nevylučuje, zejména u části ataktických forem."
    },
    {
      id: "v-neurologie:10:quiz:15",
      prompt: "Která tvrzení o hodnocení tíže postižení jsou správná?",
      options: [
        "GMFCS má stupně I-V.",
        "GMFM kvantifikuje hrubou motoriku.",
        "6MWT, 10MWT, TUG, 9HPT a Box and Block lze použít k objektivizaci efektu terapie.",
        "GMFCS hodnotí pouze sluch."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "GMFCS a GMFM se týkají motoriky, další testy slouží k objektivizaci funkčního efektu."
    },
    {
      id: "v-neurologie:10:quiz:16",
      prompt: "Co patří do komplexní rehabilitační léčby DMO?",
      options: [
        "Interdisciplinární proces se zaměřením na nezávislost, kvalitu života a sociální integraci.",
        "Zohlednění typu a tíže postižení, věku, milníků vývoje a individuálních potřeb.",
        "Léčba spasticity elektrostimulací, botulotoxinem a ortézováním.",
        "Ignorování komplikací, protože pro funkci nejsou významné."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Komplexní rehabilitace je interdisciplinární, individualizovaná a zahrnuje i léčbu spasticity a komplikací."
    },
    {
      id: "v-neurologie:10:quiz:17",
      prompt: "Které věkové mezníky zdroj uvádí?",
      options: [
        "Hrubá motorika zhruba do 3 let.",
        "Jemná motorika a koordinace přibližně 3-6/7 let.",
        "Zlatý věk motorického učení 8-12 let.",
        "Po 12. roce se vždy spontánní pohybová motivace výrazně zvyšuje."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Po 12. roce text naopak upozorňuje na riziko poklesu spontánní chuti k pohybu."
    },
    {
      id: "v-neurologie:10:quiz:18",
      prompt: "Co odpovídá krátkodobému rehabilitačnímu programu?",
      options: [
        "Stanovení hlavního problému.",
        "Definice konkrétního krátkodobého cíle.",
        "Výběr vhodné terapeutické techniky.",
        "Objektivní kontrola efektu standardizovaným testováním."
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "Všechny uvedené body jsou součástí krátkodobého rehabilitačního programu."
    },
    {
      id: "v-neurologie:10:quiz:19",
      prompt: "Co je typické pro dlouhodobý program ve věku 0-3 roky?",
      options: [
        "Pohybová terapie včetně VRL a dozrávání hrubé motoriky.",
        "Návaznost na ranou péči.",
        "Logopedie pro p.o. příjem a polykání.",
        "Primární řešení pracovního zařazení na běžný trh."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Pracovní zařazení patří až do pozdějších fází života."
    },
    {
      id: "v-neurologie:10:quiz:20",
      prompt: "Co je typické pro program 3-6/8 let?",
      options: [
        "Rozvoj jemné motoriky, koordinace a senzorického vnímání.",
        "Trénink ADL a předškolní příprava.",
        "Kompenzační pomůcky, komunikace verbální či alternativní.",
        "Řešení spasticity a deformit."
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "Tato fáze pracuje s jemnou motorikou, ADL, předškolní přípravou, komunikací, pomůckami i spasticitou."
    },
    {
      id: "v-neurologie:10:quiz:21",
      prompt: "Co patří k programu 12 let až dospělost?",
      options: [
        "Riziko zhoršení mobility při nižší motivaci a růstové akceleraci.",
        "U GMFCS IV riziko usednutí na vozík.",
        "Zaměření na kvalitu pohybových vzorů a udržení kvantity pohybu.",
        "Úplné ukončení pohybové terapie."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "V adolescenci je naopak potřeba pohybovou terapii zintenzivnit a udržet kvalitu i kvantitu pohybu."
    },
    {
      id: "v-neurologie:10:quiz:22",
      prompt: "Které položky patří mezi limity rehabilitační terapie?",
      options: [
        "Mentální deficit.",
        "Poruchy senzorického zpracování a PAS.",
        "Nedostatečná motivace a nespolupráce rodiny.",
        "Nutnost respektovat hranice motorických a mentálních možností pacienta."
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "Všechny uvedené body zdroj řadí mezi limity terapie."
    },
    {
      id: "v-neurologie:10:quiz:23",
      prompt: "Která tvrzení o posudkovém řešení jsou správná?",
      options: [
        "Hodnotí se funkční schopnosti, ADL, mobilita, mentální stav a potřeba asistence.",
        "Možnosti zahrnují příspěvek na péči, ZTP/ZTP-P, kompenzační pomůcky a invalidní důchod.",
        "Rozhodující je funkční dopad, nikoli samotná diagnóza.",
        "Samotný název diagnózy automaticky určuje všechny dávky a pomůcky."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Posudkové řešení vychází z funkčního dopadu a konkrétních potřeb."
    },
    {
      id: "v-neurologie:10:quiz:24",
      prompt: "Která tvrzení o pracovním zařazení jsou správná?",
      options: [
        "Lehké formy GMFCS I-II mohou pracovat na běžném trhu s úpravou podmínek.",
        "Střední formy mohou směřovat do chráněného zaměstnání nebo sociálních podniků.",
        "Těžké formy GMFCS IV-V zpravidla odpovídají plné invaliditě.",
        "Cílem je maximální možná nezávislost, participace a sociální integrace."
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "Všechna tvrzení odpovídají zdroji."
    },
    {
      id: "v-neurologie:10:quiz:25",
      prompt: "Která tvrzení jsou podle zdroje nesprávná?",
      options: [
        "DMO je progresivní degenerativní onemocnění periferního nervu.",
        "GMFCS má 12 stupňů a hodnotí sluch.",
        "MRI je vždy normální a u DMO nepoužitelná.",
        "Spastický typ je nejčastější typ DMO."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "První tři tvrzení jsou chybná. Spastický typ je podle zdroje nejčastější."
    }
  ],
  chapters: [
    {
      title: "Definice a charakteristika",
      points: [
        "Dětská mozková obrna (DMO) je neprogresivní neurologický syndrom vznikající na podkladě léze nezralého mozku v prenatálním, perinatálním nebo časně postnatálním období.",
        "Popisuje skupinu onemocnění s poruchou vývoje pohybu a postury. Léze je uzavřený děj, ale klinická manifestace se mění v průběhu růstu a vývoje dítěte.",
        "DMO je nejčastější onemocnění pohybového aparátu v dětském věku. Prevalence je přibližně 2-3/1000 živě narozených dětí a výrazně vyšší u nedonošených, u extrémně nezralých dětí až desítky na 1000.",
        "Motorická porucha je často doprovázena kognitivními poruchami, významný kognitivní deficit může být až u 50 %, dále poruchami zraku a sluchu, komunikačními a percepčními poruchami, poruchami chování a PAS, epilepsií a sekundárními muskuloskeletálními změnami."
      ]
    },
    {
      title: "Etiologie",
      points: [
        "1. Prenatální: IUGR, chronická hypoxie, preeklampsie, vícečetné těhotenství, kongenitální infekce, intoxikace a VVV CNS.",
        "2. Perinatální: hypoxie, porodní trauma a intraventrikulární hemoragie (IVH).",
        "3. Postnatální: infekce CNS a hyperbilirubinémie, která je spojena s rizikem dyskineticko-dystonické, často závažnější formy DMO.",
        "Příčinou jsou neprogresivní změny ve vyvíjejícím se fetálním nebo dětském mozku.",
        "U nedonošených je významná vulnerabilita periventrikulární germinální matrix: křehká cévní síť a nezralá regulace průtoku zvyšují riziko ischemie a krvácení."
      ]
    },
    {
      title: "Klasifikace dle typu postižení",
      points: [
        "1. Spastický typ: nejčastější typ DMO. Je postižena pyramidová dráha, dítě nedokáže dobře diferencovaně reagovat ani opustit generalizovanou hybnost, cílená hybnost je omezená a motorika je chudá, stereotypní a redukovaná.",
        "A) Spastická diparéza: HK jsou funkčně lepší pro fázickou, úchopovou i opěrnou funkci, DK bývají kratší a drobnější, často je hypoplazie pletence pánevního, diskrepance horní a dolní části těla, riziko luxace kyčlí, pes equinus a epilepsie asi u 16-27 %.",
        "B) Spastická triparéza: jedna HK je funkční pro fázickou, úchopovou a opěrnou funkci.",
        "C) Spastická kvadruparéza: těžká léze CNS, často po IVH a komplikacích hydrocefalu. Typické je těžké postižení HK i DK, mentální retardace, bulbární symptomatika, senzorické odchylky, menší hlava, poruchy p.o. příjmu s možností PEG, respirační komplikace, neurogenní deformity, skolióza a poruchy vyprazdňování.",
        "D) Spastická hemiparéza: unilaterální postižení, často mentálně intaktní, HK je funkčně horší než DK, častá je časná vertikalizace, equinovarózní postavení a epilepsie asi u 27-44 %. Kyčelní kloub nebývá rizikový pro luxaci.",
        "2. Dyskinetický typ (cca 10 %): postižení extrapyramidové dráhy. Rozlišuje se dystonický a choreo-atetotický typ. Typická je spousta fázické motoriky, chybění opory, ztráta kontroly pohybu, labilní držení trupu a vysoká energetická náročnost pohybu.",
        "U dyskinetického typu má dítě představu pohybu, ale nedokáže ji realizovat. Na podněty reaguje generalizovanou nediferencovanou hybností, rychle se vyčerpá, epilepsie je méně častá, mentálně může být intaktní. Časté jsou poruchy orofaciální motoriky, slinění, podvýživa, vytlačování jídla jazykem a potřeba PEG.",
        "Metodou volby u dyskinetické formy je nabídnout oporu. Pozor na sádrovou fixaci, může negativně zasáhnout posturální funkce a bývá špatně tolerována.",
        "3. Ataktický typ (4-15 %): mozečkový typ s centrální hypotonií, ataxií trupu a končetin, hypermetrií, intenčním tremorem, poruchou koordinace očních bulbů, nestabilním sedem a chůzí často až ve 3.-4. roce.",
        "U ataktického typu se může vyskytovat mentální retardace a PAS. Při mentálním deficitu hrozí přetížení terapií, stagnace nebo zhoršení vývoje, někdy je indikovaná terapeutická pauza. Posturu si dítě často zajišťuje přes sakrum a může došlapovat na zevní hranu.",
        "4. Smíšený typ: kombinace spastického a dyskinetického typu."
      ]
    },
    {
      title: "Diagnostika",
      points: [
        "1. Klinické a neurologické vyšetření, včetně Vojtova diagnosticko-terapeutického konceptu: spontánní motorika, milníky vývoje, polohové reakce a dynamika reflexů.",
        "2. Zobrazovací metody: SONO a MRI. Poranění mozku nemusí být vždy patrné na MRI, ale přibližně 86 % dětí s DMO má abnormální MRI nález.",
        "Přibližně 14 % dětí klinicky diagnostikovaných jako DMO nemá nález na MRI; nejčastěji se jedná o děti s ataktickou formou.",
        "3. Doplňující vyšetření: EEG, vyšetření metabolických vad a genetické vyšetření.",
        "V ČR bývá diagnóza často stanovena mezi 1. a 2. rokem věku; do 1 roku se spíše používá pojem centrální koordinační porucha."
      ]
    },
    {
      title: "Hodnocení tíže postižení",
      points: [
        "GMFCS (I-V): Gross Motor Function Classification System pro klasifikaci hrubé motoriky a funkčních schopností.",
        "GMFM: Gross Motor Function Measure pro kvantifikaci hrubé motoriky.",
        "Objektivizace efektu terapie: 6MWT, 10MWT, TUG, 9HPT a Box and Block test."
      ]
    },
    {
      title: "Komplexní rehabilitační léčba",
      points: [
        "Rehabilitace je interdisciplinární proces směřující k maximální možné nezávislosti, kvalitě života a sociální integraci.",
        "Zohledňuje se typ a tíže postižení, věk pacienta, milníky vývoje a individuální potřeby.",
        "Věkové mezníky: hrubá motorika dozrává zhruba do 3 let, jemná motorika a koordinace mezi 3.-6./7. rokem, 8.-12. rok je zlatý věk motorického učení a po 12. roce může klesat spontánní chuť k pohybu.",
        "Do 6 let dítě sbírá informace přes senzorické systémy: zrak, sluch, hmat, propriocepci a vestibulární systém. Nad 6 let se tyto informace více integrují a propojují do souvislostí.",
        "Léčba spasticity: funkční elektrostimulace, aplikace botulotoxinu a ortézování.",
        "Pohybová terapie: Vojtův princip pro kvalitu motoriky, Bobath koncept se stimulací ve vývojové řadě a kvantitu, funkční trénink chůze nebo práce s vozíkem a sportovní aktivity.",
        "Řešení komplikací: luxace kyčelních kloubů, skolióza, deformity DK, osteoporóza, epilepsie, poruchy příjmu potravy včetně NG sondy nebo PEG a neurogenní měchýř a střevo."
      ]
    },
    {
      title: "Krátkodobý rehabilitační program",
      points: [
        "Stanovení hlavního problému.",
        "Definice konkrétního krátkodobého cíle.",
        "Výběr vhodné terapeutické techniky.",
        "Objektivní kontrola efektu standardizovaným testováním.",
        "Cílem může být například zlepšení stability sedu, nácvik asistované chůze, prevence kontraktur nebo edukace rodiny."
      ]
    },
    {
      title: "Dlouhodobý rehabilitační program dle věku",
      points: [
        "0-3 roky: pohybová terapie včetně VRL, dozrávání hrubé motoriky, návaznost na ranou péči, logopedie pro p.o. příjem a polykání, ergoterapie včetně kompenzačních a polohovacích pomůcek a řešení interních komplikací.",
        "3-6/8 let: rozvoj jemné motoriky, koordinace a senzorického vnímání, ergoterapie a trénink ADL, práce se senzomotorickými odchylkami, předškolní příprava, kompenzační pomůcky a pomůcky pro lokomoci, verbální i alternativní komunikace, řešení spasticity a deformit a zařazení dítěte přes SPC.",
        "6-12 let: zlatý věk motorického učení, funkční trénink, školní integrace přes SPC, IVP a asistenta a kompenzační strategie.",
        "12 let až dospělost: v pubertě a adolescenci je riziko zhoršení mobility při nižší motivaci a růstové akceleraci, u GMFCS IV riziko usednutí na vozík. Terapie se zaměřuje na kvalitu pohybových vzorů a udržení kvantity pohybu."
      ]
    },
    {
      title: "Limity rehabilitační terapie",
      points: [
        "Mentální deficit, poruchy senzorického zpracování a PAS.",
        "Nedostatečná motivace a nespolupráce rodiny.",
        "Nutnost respektovat hranice motorických a mentálních možností pacienta."
      ]
    },
    {
      title: "Posudkové řešení",
      points: [
        "Hodnotí se funkční schopnosti podle GMFCS, soběstačnost podle ADL, mobilita, mentální stav a potřeba asistence.",
        "Možnosti zahrnují příspěvek na péči, průkaz ZTP/ZTP-P, kompenzační pomůcky a invalidní důchod.",
        "Rozhodující je funkční dopad onemocnění, nikoli samotná diagnóza."
      ]
    },
    {
      title: "Pracovní zařazení",
      points: [
        "Lehké formy (GMFCS I-II): běžný pracovní trh s případnou úpravou podmínek.",
        "Střední formy: chráněné zaměstnání a sociální podniky.",
        "Těžké formy (GMFCS IV-V): zpravidla plná invalidita.",
        "Cílem je maximální možná nezávislost, participace a sociální integrace."
      ]
    }
  ]
};

const calendarEvents: CalendarEvent[] = [
  {
    title: "Neuromuskulární sonografie (Tábor)",
    url: "https://mhconsulting.cz/kongres/328-neuromuskularni-sonografie-22-23-ledna-2026/poplatky",
    startDate: new Date(2026, 0, 22),
    endDate: new Date(2026, 0, 23),
    isCzech: true
  },
  {
    title: "Sympozium sportovní medicíny (Dříteč)",
    url: "https://www.sport-sympozium.cz/",
    startDate: new Date(2026, 2, 26),
    endDate: new Date(2026, 2, 28),
    isCzech: true
  },
  {
    title: "15. Severočeské algeziologické dny (Ústí nad Labem)",
    url: "https://www.bos-congress.cz/sad2026",
    startDate: new Date(2026, 2, 27),
    endDate: new Date(2026, 2, 28),
    isCzech: true
  },
  {
    title: "Den myoskeletální medicíny (Praha)",
    url: "https://www.csmm.cz/event/den-myoskeletalni-mediciny/",
    startDate: new Date(2026, 3, 23),
    endDate: new Date(2026, 3, 23),
    isCzech: true
  },
  {
    title: "XXXI. sjezd SRFM a 38. konference ČAE (Luhačovice)",
    url: "https://www.srfm.cz/aktuality/xxxi-sjezd-srfm-a-38-konference-cae-13824",
    startDate: new Date(2026, 4, 28),
    endDate: new Date(2026, 4, 30),
    isCzech: true
  },
  {
    title: "ESPRM 2026 (Krakow, Poland)",
    url: "https://esprm2026.com/",
    startDate: new Date(2026, 2, 23),
    endDate: new Date(2026, 2, 26),
    isCzech: false
  },
  {
    title: "ISPRM 2026 (Vancouver, Canada)",
    url: "https://www.isprm2026.com/",
    startDate: new Date(2026, 4, 17),
    endDate: new Date(2026, 4, 21),
    isCzech: false
  }
];

function getCalendarDays(date: Date): Array<number | null> {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const mondayStartOffset = (firstDay.getDay() + 6) % 7;
  const days: Array<number | null> = Array.from({ length: mondayStartOffset }, () => null);

  for (let day = 1; day <= totalDays; day += 1) {
    days.push(day);
  }

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return days;
}

function isSameMonth(date: Date, monthDate: Date): boolean {
  return date.getFullYear() === monthDate.getFullYear() && date.getMonth() === monthDate.getMonth();
}

function eventIntersectsMonth(event: CalendarEvent, monthDate: Date): boolean {
  const monthStart = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const monthEnd = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0, 23, 59, 59, 999);
  return event.startDate <= monthEnd && event.endDate >= monthStart;
}

function eventIncludesDay(event: CalendarEvent, year: number, month: number, day: number): boolean {
  const dayDate = new Date(year, month, day);
  const start = new Date(event.startDate.getFullYear(), event.startDate.getMonth(), event.startDate.getDate());
  const end = new Date(event.endDate.getFullYear(), event.endDate.getMonth(), event.endDate.getDate());
  return dayDate >= start && dayDate <= end;
}

function formatEventDate(event: CalendarEvent): string {
  const sameDay = event.startDate.getTime() === event.endDate.getTime();
  if (sameDay) {
    return `${event.startDate.getDate()}. ${MONTH_FORMATTER.format(event.startDate)} ${event.startDate.getFullYear()}`;
  }
  if (isSameMonth(event.startDate, event.endDate)) {
    return `${event.startDate.getDate()}.–${event.endDate.getDate()}. ${MONTH_FORMATTER.format(event.startDate)} ${event.startDate.getFullYear()}`;
  }
  return `${event.startDate.getDate()}. ${MONTH_FORMATTER.format(event.startDate)} ${event.startDate.getFullYear()} – ${event.endDate.getDate()}. ${MONTH_FORMATTER.format(event.endDate)} ${event.endDate.getFullYear()}`;
}

function EventRegionIcon({ isCzech }: { isCzech: boolean }) {
  if (isCzech) {
    return (
      <svg
        className="event-flag-icon"
        viewBox="0 0 3 2"
        aria-label="Česká republika"
        role="img"
      >
        <rect width="3" height="2" fill="#D7141A" />
        <rect width="3" height="1" fill="#FFFFFF" />
        <polygon points="0,0 1.2,1 0,2" fill="#11457E" />
      </svg>
    );
  }

  return <span className="event-flag-globe" aria-hidden="true">🌍</span>;
}

function getRouteFromHash(): RouteState {
  const raw = window.location.hash.replace(/^#/, "");
  const clean = raw.startsWith("/") ? raw.slice(1) : raw;
  if (!clean) {
    return { slug: null, sectionId: null };
  }

  const parts = clean.split("/").filter(Boolean);
  return {
    slug: parts[0] ?? null,
    sectionId: parts.length > 1 ? parts.slice(1).join("/") : null
  };
}

function HomePage({ onInstall, installHint }: { onInstall: () => void; installHint: string | null }) {
  return (
    <>
      <section className="hero">
        <span className="eyebrow">ReHuB platforma</span>
        <h1>Vzdělávání, komunita a růst v rehabilitaci na jednom místě</h1>
        <p className="lead">
          ReHuB propojuje odborníky, studenty i zkušené kliniky. Vytváříme prostor pro sdílení know-how, moderní vzdělávání
          a profesní příležitosti, které posouvají obor rehabilitačního lékařství dopředu.
        </p>
        <div className="actions">
          <button className="btn primary" type="button" onClick={onInstall}>
            Nainstalovat aplikaci
          </button>
        </div>
        {installHint && <p className="install-hint">{installHint}</p>}
      </section>

      <h2 className="section-title">Co v ReHuB najdete</h2>
      <section className="grid" aria-label="Přehled projektů ReHuB">
        {modules.map((item) => (
          <a key={item.slug} className={`card ${item.wide ? "wide" : ""} ${item.accent ? "accent" : ""}`.trim()} href={`#/${item.slug}`}>
            <span className="badge">{item.badge}</span>
            <h3>
              {item.emoji} {item.title}
            </h3>
            <p>{item.description}</p>
          </a>
        ))}
      </section>
    </>
  );
}

function ModulePage({ slug, sectionId }: { slug: string; sectionId: string | null }) {
  const moduleData = modules.find((item) => item.slug === slug);
  const [calendarDate, setCalendarDate] = useState(() => new Date());

  if (!moduleData) {
    return null;
  }

  if (moduleData.slug === "rehaedu") {
    return <RehaEduPage sectionId={sectionId} />;
  }

  const days = getCalendarDays(calendarDate);
  const now = new Date();
  const isCurrentMonth =
    now.getFullYear() === calendarDate.getFullYear() && now.getMonth() === calendarDate.getMonth();

  function changeMonth(step: number) {
    setCalendarDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + step, 1));
  }

  return (
    <>
      <section className="hero">
        <span className="eyebrow">{moduleData.badge}</span>
        <h1>
          {moduleData.emoji} {moduleData.title}
        </h1>
        <p className="lead">{moduleData.description}</p>
        <div className="actions">
          <a className="btn primary" href="#/">
            Zpět na přehled
          </a>
        </div>
      </section>

      {moduleData.points && moduleData.slug !== "rehaevent" && moduleData.slug !== "rehaexp" && (
        <section className="page-block">
          <h2>Klíčová témata</h2>
          <ul>
            {moduleData.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      {moduleData.slug === "rehatube" && (
        <section className="page-block video-block" aria-label="RehaTube videa">
          <a className="channel-card" href={REHATUBE_CHANNEL_URL} target="_blank" rel="noreferrer">
            <div className="channel-mark" aria-hidden="true">
              <span className="channel-play" />
            </div>
            <div className="channel-copy">
              <span className="badge">YouTube kanál</span>
              <h2>ReHuBproject</h2>
              <p className="video-block-copy">Otevřete si celý kanál. Pod ním si můžete pustit vybraná videa přímo v aplikaci.</p>
            </div>
            <span className="channel-cta">Otevřít kanál</span>
          </a>

          <div className="video-grid">
            {REHATUBE_VIDEOS.map((video) => (
              <article key={video.id} className="video-card">
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {moduleData.slug === "rehagram" && (
        <section className="page-block instagram-block" aria-label="RehaGram Instagram">
          <div className="instagram-card">
            <div className="instagram-copy">
              <span className="badge">Instagram</span>
              <h2>@rehubproject</h2>
              <p className="video-block-copy">Kratší obsah, novinky z projektu a sdílení z rehabilitační komunity najdete na jednom místě.</p>
              <a className="instagram-cta" href={REHAGRAM_URL} target="_blank" rel="noreferrer">
                Otevřít Instagram
              </a>
            </div>

            <div className="instagram-preview">
              {REHAGRAM_POSTS.map((post) => (
                <article
                  key={post.url}
                  className="instagram-post"
                >
                  <div className="instagram-post-frame">
                    <iframe
                      src={`${post.url}embed/captioned/`}
                      title={post.title}
                      loading="lazy"
                      allowTransparency={true}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {moduleData.slug === "rehaexp" && (
        <section className="page-block internship-offer" aria-label="Nabidka staze">
          <div className="internship-media">
            <img src="/Jakub.png" alt="MUDr. Jakub Jačisko, Ph.D." loading="lazy" />
          </div>
          <div className="internship-content">
            <span className="badge">Stáž</span>
            <h2>Muskuloskeletální ultrasonografie</h2>
            <p>
              Prakticky orientovaná stáž zaměřená na vyšetření pohybového aparátu pod odborným vedením se zpětnou vazbou
              ke klinickému rozhodování.
            </p>
            <p className="internship-meta">
              <strong>Garant:</strong> MUDr. Jakub Jačisko, Ph.D.
            </p>
            <p className="internship-meta">
              <strong>Místo:</strong> FN Motol
            </p>
          </div>
        </section>
      )}

      {moduleData.slug === "rehaevent" && (
        <section className="page-block calendar-block" aria-label="Kalendar udalosti">
          <div className="calendar-head">
            <h3 className="calendar-month">
              {MONTH_FORMATTER.format(calendarDate)} {calendarDate.getFullYear()}
            </h3>
          </div>

          <div className="calendar-layout">
            <button className="calendar-nav side left" type="button" onClick={() => changeMonth(-1)} aria-label="Predchozi mesic">
              ←
            </button>

            <div>
              <div className="calendar-grid calendar-weekdays">
                {WEEKDAY_LABELS.map((label) => (
                  <span key={label} className="calendar-weekday">
                    {label}
                  </span>
                ))}
              </div>

              <div className="calendar-grid calendar-days">
                {days.map((day, index) => {
                  const isToday = isCurrentMonth && day === now.getDate();
                  const hasEvent =
                    day !== null &&
                    calendarEvents.some((event) =>
                      eventIncludesDay(event, calendarDate.getFullYear(), calendarDate.getMonth(), day)
                    );
                  return (
                    <div
                      key={`${index}-${day ?? "empty"}`}
                      className={`calendar-day ${day ? "" : "is-empty"} ${isToday ? "is-today" : ""} ${hasEvent ? "has-event" : ""}`.trim()}
                    >
                      {day ?? ""}
                    </div>
                  );
                })}
              </div>
            </div>

            <button className="calendar-nav side right" type="button" onClick={() => changeMonth(1)} aria-label="Dalsi mesic">
              →
            </button>
          </div>

          <div className="calendar-events">
            <h4>Události v tomto měsíci</h4>
            {calendarEvents.filter((event) => eventIntersectsMonth(event, calendarDate)).length === 0 ? (
              <p className="calendar-events-empty">Zatím bez naplánovaných událostí.</p>
            ) : (
              <ul>
                {calendarEvents
                  .filter((event) => eventIntersectsMonth(event, calendarDate))
                  .map((event) => (
                    <li key={event.url}>
                      <strong>
                        <EventRegionIcon isCzech={event.isCzech} /> {formatEventDate(event)}:
                      </strong>{" "}
                      <a href={event.url} target="_blank" rel="noreferrer">
                        {event.title}
                      </a>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </section>
      )}
    </>
  );
}

function RehaEduPage({ sectionId }: { sectionId: string | null }) {
  const [openQuestionKey, setOpenQuestionKey] = useState<string | null>(null);
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});
  const [revealedFlashcards, setRevealedFlashcards] = useState<Record<string, boolean>>({});
  const [activeFlashcardIndex, setActiveFlashcardIndex] = useState(0);
  const [quizSelections, setQuizSelections] = useState<Record<string, number[]>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const questionRouteKey = getQuestionKeyFromRoute(sectionId);
  const activeSection =
    questionRouteKey
      ? "detail-otazky"
      : sectionId === "atestacni-otazky" || (sectionId && REHAEDU_TOPIC_IDS.has(sectionId))
      ? "atestacni-otazky"
      : sectionId === "klinicke-vysetreni" || sectionId === "neurologicke-vysetreni" || sectionId === "ortopedicke-vysetreni"
        ? sectionId
        : null;

  const activePreparedQuestion = openQuestionKey ? PREPARED_QUESTIONS[openQuestionKey] : null;
  const activeQuestionLabel = useMemo(() => (openQuestionKey ? getPreparedQuestionLabel(openQuestionKey) : null), [openQuestionKey]);
  const activeQuestionPage = questionRouteKey ? PREPARED_QUESTIONS[questionRouteKey] : null;
  const activeQuestionPageLabel = useMemo(
    () => (questionRouteKey ? getPreparedQuestionLabel(questionRouteKey) : null),
    [questionRouteKey]
  );
  const activeFlashcards = useMemo(
    () => (questionRouteKey && activeQuestionPage ? createFlashcards(questionRouteKey, activeQuestionPage) : []),
    [questionRouteKey, activeQuestionPage]
  );
  const activeQuizQuestions = activeQuestionPage?.quizQuestions ?? [];
  const quizScore = activeQuizQuestions.reduce((score, question) => {
    const selected = quizSelections[question.id] ?? [];
    return score + (areOptionSetsEqual(selected, question.correctOptionIndexes) ? 1 : 0);
  }, 0);

  useEffect(() => {
    if (!openQuestionKey) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenQuestionKey(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openQuestionKey]);

  useEffect(() => {
    if (!openQuestionKey) {
      return;
    }
    setOpenChapters({});
  }, [openQuestionKey]);

  useEffect(() => {
    setRevealedFlashcards({});
    setActiveFlashcardIndex(0);
    setQuizSelections({});
    setQuizSubmitted(false);
  }, [questionRouteKey]);

  const toggleChapter = (chapterKey: string) => {
    setOpenChapters((prev) => ({ ...prev, [chapterKey]: !prev[chapterKey] }));
  };

  const toggleFlashcard = (cardId: string) => {
    setRevealedFlashcards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const toggleQuizOption = (questionId: string, optionIndex: number) => {
    setQuizSelections((prev) => {
      const current = prev[questionId] ?? [];
      const next = current.includes(optionIndex)
        ? current.filter((value) => value !== optionIndex)
        : [...current, optionIndex].sort((a, b) => a - b);
      return { ...prev, [questionId]: next };
    });
  };

  const downloadQuestionDoc = () => {
    if (!questionRouteKey || !activeQuestionPage || !activeQuestionPageLabel) {
      return;
    }

    const documentName = getPreparedQuestionDocumentName(questionRouteKey) ?? `${questionRouteKey.replace(/[:/]/g, "-")}.doc`;

    const html = `<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="utf-8" />
  <title>${activeQuestionPageLabel}</title>
  <style>
    body {
      margin: 0;
      padding: 40px 48px 56px;
      font-family: Calibri, "Segoe UI", Arial, sans-serif;
      color: #1f2a2a;
      line-height: 1.6;
      background: #ffffff;
    }

    .document-shell {
      max-width: 820px;
      margin: 0 auto;
    }

    .document-eyebrow {
      margin: 0 0 10px;
      color: #0e8f7d;
      font-size: 11pt;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    h1 {
      margin: 0 0 24px;
      font-size: 24pt;
      line-height: 1.2;
      color: #163433;
    }

    h2 {
      margin: 28px 0 12px;
      font-size: 15pt;
      line-height: 1.3;
      color: #163433;
      page-break-after: avoid;
    }

    p {
      margin: 0 0 10px;
      font-size: 11.5pt;
      text-align: justify;
    }

    .chapter {
      padding-top: 14px;
      border-top: 1px solid #d9e4e3;
      page-break-inside: avoid;
    }

    .chapter:first-of-type {
      border-top: 0;
      padding-top: 0;
    }
  </style>
</head>
<body>
  <div class="document-shell">
    <p class="document-eyebrow">ReHuB</p>
    <h1>${activeQuestionPageLabel}</h1>
    ${activeQuestionPage.chapters
    .map(
      (chapter, chapterIndex) => `
    <section class="chapter">
      <h2>${ROMAN_CHAPTERS[chapterIndex] ?? chapterIndex + 1}. ${chapter.title}</h2>
      ${chapter.points.map((point) => `<p>${normalizeQuestionPointText(point)}</p>`).join("")}
    </section>
  `
    )
    .join("")}
  </div>
</body>
</html>`;

    const blob = new Blob([html], { type: "application/msword;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = documentName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  };

  if (!activeSection) {
    return (
      <>
        <section className="hero">
          <span className="eyebrow">{"Vzd\u011bl\u00e1v\u00e1n\u00ed"}</span>
          <h1>{"\ud83d\udcd8 RehaEdu"}</h1>
          <p className="lead">{"Rozcestn\u00edk pro atesta\u010dn\u00ed p\u0159\u00edpravu a klinick\u00e9 vy\u0161et\u0159en\u00ed v r\u00e1mci RehaEdu."}</p>
          <div className="actions">
            <a className="btn primary" href="#/">
              {"Zp\u011bt na p\u0159ehled"}
            </a>
          </div>
        </section>

        <section className="edu-hub" aria-label="Rozcestnik RehaEdu">
          <a className="edu-card edu-card-large" href="#/rehaedu/atestacni-otazky">
            <span className="badge">Studium</span>
            <h2>{"Atesta\u010dn\u00ed ot\u00e1zky"}</h2>
            <p>{"Kompletn\u00ed p\u0159ehled tematick\u00fdch oblast\u00ed, ot\u00e1zek a rozpracovan\u00fdch odpov\u011bd\u00ed pro systematickou p\u0159\u00edpravu."}</p>
          </a>
          <a className="edu-card edu-card-accent" href="#/rehaedu/klinicke-vysetreni">
            <span className="badge">Praxe</span>
            <h2>{"Klinick\u00e9 vy\u0161et\u0159en\u00ed"}</h2>
            <p>{"Postupn\u011b budovan\u00e1 sekce klinick\u00fdch vy\u0161et\u0159en\u00ed s odd\u011blen\u00fdmi podsekcemi podle zam\u011b\u0159en\u00ed."}</p>
          </a>
        </section>
      </>
    );
  }

  if (activeSection === "klinicke-vysetreni") {
    return (
      <>
        <section className="hero">
          <span className="eyebrow">{"Vzd\u011bl\u00e1v\u00e1n\u00ed"}</span>
          <h1>{"\ud83d\udcd8 RehaEdu"}</h1>
          <p className="lead">{"Klinick\u00e9 vy\u0161et\u0159en\u00ed jako samostatn\u00e1 v\u011btev RehaEdu."}</p>
          <div className="actions">
            <a className="btn primary" href="#/">
              {"Zp\u011bt na p\u0159ehled"}
            </a>
            <a className="btn" href="#/rehaedu">
              {"Zp\u011bt na rozcestn\u00edk"}
            </a>
          </div>
        </section>

        <section className="edu-hub" aria-label="Klinicke vysetreni">
          <a className="edu-card" href="#/rehaedu/neurologicke-vysetreni">
            <span className="badge">Podsekce</span>
            <h2>{"Neurologick\u00e9 vy\u0161et\u0159en\u00ed"}</h2>
            <p>{"Z\u00e1kladn\u00ed struktura a budouc\u00ed obsah neurologick\u00e9ho klinick\u00e9ho vy\u0161et\u0159en\u00ed."}</p>
          </a>
          <a className="edu-card" href="#/rehaedu/ortopedicke-vysetreni">
            <span className="badge">Podsekce</span>
            <h2>{"Ortopedick\u00e9 vy\u0161et\u0159en\u00ed"}</h2>
            <p>{"Z\u00e1kladn\u00ed struktura a budouc\u00ed obsah ortopedick\u00e9ho klinick\u00e9ho vy\u0161et\u0159en\u00ed."}</p>
          </a>
        </section>
      </>
    );
  }

  if (activeSection === "neurologicke-vysetreni" || activeSection === "ortopedicke-vysetreni") {
    const isNeuro = activeSection === "neurologicke-vysetreni";
    return (
      <>
        <section className="hero">
          <span className="eyebrow">{"Vzd\u011bl\u00e1v\u00e1n\u00ed"}</span>
          <h1>{"\ud83d\udcd8 RehaEdu"}</h1>
          <p className="lead">{isNeuro ? "Neurologick\u00e9" : "Ortopedick\u00e9"}{" vy\u0161et\u0159en\u00ed jako samostatn\u00e1 podsekce RehaEdu."}</p>
          <div className="actions">
            <a className="btn primary" href="#/">
              {"Zp\u011bt na p\u0159ehled"}
            </a>
            <a className="btn" href="#/rehaedu/klinicke-vysetreni">
              {"Zp\u011bt na klinick\u00e9 vy\u0161et\u0159en\u00ed"}
            </a>
          </div>
        </section>

        <section className="page-block">
          <h2>{isNeuro ? "Neurologick\u00e9 vy\u0161et\u0159en\u00ed" : "Ortopedick\u00e9 vy\u0161et\u0159en\u00ed"}</h2>
          <p className="section-copy">
            {"Tato podsekce je p\u0159ipravena pro budouc\u00ed dopln\u011bn\u00ed obsahu "}
            {isNeuro ? "neurologick\u00e9ho" : "ortopedick\u00e9ho"}
            {" vy\u0161et\u0159en\u00ed."}
          </p>
        </section>
      </>
    );
  }

  if (activeSection === "detail-otazky" && questionRouteKey && activeQuestionPage && activeQuestionPageLabel) {
    return (
      <>
        <section className="hero">
          <span className="eyebrow">{"Vzd\u011bl\u00e1v\u00e1n\u00ed"}</span>
          <h1>{"\ud83d\udcd8 RehaEdu"}</h1>
          <p className="lead">{activeQuestionPageLabel}</p>
          <div className="actions question-actions">
            <a className="btn primary" href="#/rehaedu/atestacni-otazky">
              {"Zp\u011bt na atesta\u010dn\u00ed ot\u00e1zky"}
            </a>
            <button className="btn" type="button" onClick={downloadQuestionDoc}>
              {"St\u00e1hnout Word dokument"}
            </button>
          </div>
        </section>

        <section className="page-block question-article">
          <h2>{"Vypracovan\u00e1 ot\u00e1zka"}</h2>
          {activeQuestionPage.chapters.map((chapter, chapterIndex) => (
            <section key={`${questionRouteKey}:${chapterIndex}`} className="question-chapter">
              <h3>
                {ROMAN_CHAPTERS[chapterIndex] ?? `${chapterIndex + 1}`}. {chapter.title}
              </h3>
              <div className="question-chapter-points">
                {chapter.points.map((point) => (
                  <p key={point} className={`chapter-point ${hasOwnMarker(point) ? "with-marker" : "with-bullet"}`}>
                    {normalizeQuestionPointText(point)}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="page-block study-hub">
          <h2>{"Studijn\u00ed re\u017eimy"}</h2>
          <p className="section-copy">{"Vyberte si, jestli se chcete u\u010dit pomoc\u00ed flashcards nebo si rovnou vyzkou\u0161et test."}</p>

          {activeFlashcards.length > 0 && (
            <details className="study-panel">
              <summary className="study-panel-summary">
                <span className="study-panel-title">{"U\u010dit se pomoc\u00ed flashcards"}</span>
                <span className="study-panel-meta">{`${activeFlashcards.length} karet`}</span>
              </summary>
              <div className="study-panel-body">
                <p className="section-copy">{"Kliknut\u00edm na karti\u010dku zobraz\u00edte odpov\u011b\u010f. Flashcards se zobrazuj\u00ed po jedn\u00e9."}</p>
                <button
                  type="button"
                  className={`flashcard flashcard-single ${revealedFlashcards[activeFlashcards[activeFlashcardIndex].id] ? "revealed" : ""}`}
                  onClick={() => toggleFlashcard(activeFlashcards[activeFlashcardIndex].id)}
                >
                  <span className="flashcard-index">{activeFlashcardIndex + 1}</span>
                  <span className="flashcard-label">{activeFlashcards[activeFlashcardIndex].prompt}</span>
                  <span className="flashcard-body">
                    {revealedFlashcards[activeFlashcards[activeFlashcardIndex].id]
                      ? activeFlashcards[activeFlashcardIndex].answer
                      : "Klikni pro zobrazen\u00ed odpov\u011bdi"}
                  </span>
                </button>

                <div className="flashcard-nav">
                  <button
                    className="btn"
                    type="button"
                    onClick={() => setActiveFlashcardIndex((prev) => Math.max(0, prev - 1))}
                    disabled={activeFlashcardIndex === 0}
                  >
                    {"P\u0159edchoz\u00ed"}
                  </button>
                  <span className="flashcard-progress">
                    {activeFlashcardIndex + 1} / {activeFlashcards.length}
                  </span>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => setActiveFlashcardIndex((prev) => Math.min(activeFlashcards.length - 1, prev + 1))}
                    disabled={activeFlashcardIndex === activeFlashcards.length - 1}
                  >
                    {"Dal\u0161\u00ed"}
                  </button>
                </div>
              </div>
            </details>
          )}

          {activeQuizQuestions.length > 0 && (
            <details className="study-panel">
              <summary className="study-panel-summary">
                <span className="study-panel-title">{"U\u010dit se pomoc\u00ed testu"}</span>
                <span className="study-panel-meta">{`${activeQuizQuestions.length} ot\u00e1zek`}</span>
              </summary>
              <div className="study-panel-body">
                <div className="flashcards-head">
                  <div>
                    <p className="section-copy">
                      {"Ka\u017ed\u00e1 ot\u00e1zka m\u00e1 4 mo\u017enosti a spr\u00e1vn\u00fdch odpov\u011bd\u00ed m\u016f\u017ee b\u00fdt 0 a\u017e 4. Test vych\u00e1z\u00ed pouze z vypracovan\u00e9ho textu."}
                    </p>
                  </div>
                  <button className="btn primary" type="button" onClick={() => setQuizSubmitted(true)}>
                    {"Vyhodnotit test"}
                  </button>
                </div>

                {quizSubmitted && (
                  <p className="quiz-summary">
                    {"Sk\u00f3re: "}
                    <strong>
                      {quizScore} / {activeQuizQuestions.length}
                    </strong>
                  </p>
                )}

                <div className="quiz-list">
                  {activeQuizQuestions.map((question, questionIndex) => {
                    const selected = quizSelections[question.id] ?? [];
                    const isCorrect = areOptionSetsEqual(selected, question.correctOptionIndexes);

                    return (
                      <article
                        key={question.id}
                        className={`quiz-card ${quizSubmitted ? (isCorrect ? "correct" : "incorrect") : ""}`.trim()}
                      >
                        <h3>
                          {questionIndex + 1}. {question.prompt}
                        </h3>

                        <div className="quiz-options">
                          {question.options.map((option, optionIndex) => {
                            const isSelected = selected.includes(optionIndex);
                            const isCorrectOption = question.correctOptionIndexes.includes(optionIndex);
                            const optionClassName = quizSubmitted
                              ? `quiz-option ${isCorrectOption ? "is-correct" : isSelected ? "is-wrong" : ""}`.trim()
                              : "quiz-option";

                            return (
                              <label key={`${question.id}:${optionIndex}`} className={optionClassName}>
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  onChange={() => toggleQuizOption(question.id, optionIndex)}
                                  disabled={quizSubmitted}
                                />
                                <span>{option}</span>
                              </label>
                            );
                          })}
                        </div>

                        {quizSubmitted && (
                          <p className="quiz-explanation">
                            {isCorrect ? "Spr\u00e1vn\u011b." : "Nespr\u00e1vn\u011b."} {question.explanation}
                          </p>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            </details>
          )}
        </section>
      </>
    );
  }

  return (
    <>
      <section className="hero">
        <span className="eyebrow">Vzdělávání</span>
        <h1>📘 RehaEdu</h1>
        <p className="lead">Seznam atestačních otázek pro rychlou orientaci a systematickou přípravu podle tematických oblastí RFM.</p>
        <div className="actions">
          <a className="btn primary" href="#/">
            Zpět na přehled
          </a>
        </div>
      </section>

      <section className="page-block">
        <h2>Přehled oblastí</h2>
        <ol className="topics-index">
          {eduTopics.map((topic) => (
            <li key={topic.id}>
              <a href={`#/rehaedu/${topic.id}`}>{topic.heading.replace(/^[IVXLCDM]+\.\s/, "")}</a>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-block">
        <h2>Atestační otázky</h2>
        {eduTopics.map((topic) => (
          <div className="topic-section" id={topic.id} key={topic.id}>
            <h3>{topic.heading}</h3>
            <ol className="questions-list">
              {topic.questions.map((question, questionIndex) => {
                const questionKey = `${topic.id}:${questionIndex}`;
                const preparedQuestion = PREPARED_QUESTIONS[questionKey];
                const isPrepared = Boolean(preparedQuestion);
                const isOpen = openQuestionKey === questionKey;

                return (
                  <li key={questionKey} className={`question-item ${isOpen ? "open" : ""}`}>
                    <span className={`question-number ${isPrepared ? "prepared" : "pending"}`} aria-hidden="true">
                      {questionIndex + 1}.
                    </span>
                    {isPrepared ? (
                      <a className="question-toggle question-link" href={getPreparedQuestionRoute(topic.id, questionIndex)}>
                        {question}
                      </a>
                    ) : (
                    <span>{question}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </section>

      <div className={`rehaedu-drawer-backdrop ${activePreparedQuestion ? "open" : ""}`} onClick={() => setOpenQuestionKey(null)} />
      <aside className={`rehaedu-drawer ${activePreparedQuestion ? "open" : ""}`} aria-hidden={!activePreparedQuestion}>
        <div className="rehaedu-drawer-head">
          <button type="button" className="rehaedu-drawer-close" onClick={() => setOpenQuestionKey(null)} aria-label="Zavrit detail otazky">
            ×
          </button>
        </div>
        {activePreparedQuestion && activeQuestionLabel ? (
          <>
            <h3 className="rehaedu-drawer-title">{activeQuestionLabel}</h3>
            <div className="rehaedu-drawer-content">
              {activePreparedQuestion.chapters.map((chapter, chapterIndex) => {
                const chapterKey = `${openQuestionKey}:chapter:${chapterIndex}`;
                const isChapterOpen = Boolean(openChapters[chapterKey]);
                return (
                  <details key={chapterKey} className="chapter-details" open={isChapterOpen}>
                    <summary onClick={(event) => {
                      event.preventDefault();
                      toggleChapter(chapterKey);
                    }}>
                      <span className="chapter-roman">{ROMAN_CHAPTERS[chapterIndex] ?? `${chapterIndex + 1}`}</span>
                      {chapter.title}
                    </summary>
                    <div className="chapter-points">
                      {chapter.points.map((point) => (
                        <p key={point} className={`chapter-point ${hasOwnMarker(point) ? "with-marker" : "with-bullet"}`}>
                          {normalizeQuestionPointText(point)}
                        </p>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          </>
        ) : null}
      </aside>

    </>
  );
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(getRouteFromHash);
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [installHint, setInstallHint] = useState<string | null>(null);

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }, []);

  useEffect(() => {
    if (!route.sectionId) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const el = document.getElementById(route.sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [route.slug, route.sectionId]);

  async function handleInstall() {
    if (!installPrompt) {
      const ua = navigator.userAgent.toLowerCase();
      const isIos = /iphone|ipad|ipod/.test(ua);
      if (isIos) {
        setInstallHint("Na iPhone otevři Sdílet a zvol Přidat na plochu.");
      } else {
        setInstallHint("Instalace zatím není dostupná. Otevři aplikaci v Chrome na HTTPS a chvíli ji používej.");
      }
      return;
    }
    await installPrompt.prompt();
    const result = await installPrompt.userChoice;
    if (result.outcome === "dismissed") {
      setInstallHint("Instalace byla zrušena. Můžeš ji kdykoliv spustit znovu.");
    } else {
      setInstallHint("Aplikace byla přidána na plochu.");
    }
    setInstallPrompt(null);
  }

  const activeModule = useMemo(() => {
    if (!route.slug) {
      return null;
    }
    return modules.find((item) => item.slug === route.slug) ?? null;
  }, [route.slug]);

  return (
    <main className="wrap">
      {!activeModule ? (
        <HomePage onInstall={handleInstall} installHint={installHint} />
      ) : (
        <ModulePage slug={activeModule.slug} sectionId={route.sectionId} />
      )}
      <footer className="foot">ReHuB: platforma, která spojuje vzdělávání, komunitu a profesní příležitosti v rehabilitačním lékařství.</footer>
    </main>
  );
}
