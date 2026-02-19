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

function getRouteFromHash(): RouteState {
  const raw = window.location.hash.replace(/^#/, "");
  const clean = raw.startsWith("/") ? raw.slice(1) : raw;
  if (!clean) {
    return { slug: null, sectionId: null };
  }

  const parts = clean.split("/").filter(Boolean);
  return {
    slug: parts[0] ?? null,
    sectionId: parts[1] ?? null
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

  if (!moduleData) {
    return null;
  }

  if (moduleData.slug === "rehaedu") {
    return <RehaEduPage sectionId={sectionId} />;
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

      {moduleData.points && (
        <section className="page-block">
          <h2>Klíčová témata</h2>
          <ul>
            {moduleData.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

function RehaEduPage({ sectionId }: { sectionId: string | null }) {
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
            <ol>
              {topic.questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ol>
          </div>
        ))}
      </section>

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
