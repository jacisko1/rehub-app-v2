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

type QuestionStatusMap = Record<string, boolean>;
const QUESTION_STATUS_STORAGE_KEY = "rehaedu-question-status-v1";

function getQuestionKey(topicId: string, questionIndex: number): string {
  return `${topicId}:${questionIndex}`;
}

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

      {moduleData.points && moduleData.slug !== "rehaevent" && (
        <section className="page-block">
          <h2>Klíčová témata</h2>
          <ul>
            {moduleData.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
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
                        {event.isCzech ? "🇨🇿" : "🌍"} {formatEventDate(event)}:
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
  const [preparedQuestions, setPreparedQuestions] = useState<QuestionStatusMap>(() => {
    try {
      const raw = window.localStorage.getItem(QUESTION_STATUS_STORAGE_KEY);
      if (!raw) {
        return {};
      }
      const parsed: unknown = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") {
        return {};
      }
      const result: QuestionStatusMap = {};
      for (const [key, value] of Object.entries(parsed)) {
        result[key] = Boolean(value);
      }
      return result;
    } catch {
      return {};
    }
  });

  useEffect(() => {
    window.localStorage.setItem(QUESTION_STATUS_STORAGE_KEY, JSON.stringify(preparedQuestions));
  }, [preparedQuestions]);

  const togglePrepared = (topicId: string, questionIndex: number) => {
    const questionKey = getQuestionKey(topicId, questionIndex);
    setPreparedQuestions((prev) => ({ ...prev, [questionKey]: !prev[questionKey] }));
  };

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
                const questionKey = getQuestionKey(topic.id, questionIndex);
                const isPrepared = Boolean(preparedQuestions[questionKey]);

                return (
                  <li key={questionKey} className="question-item">
                    <button
                      type="button"
                      className={`question-number ${isPrepared ? "prepared" : "pending"}`}
                      onClick={() => togglePrepared(topic.id, questionIndex)}
                      aria-pressed={isPrepared}
                      title={isPrepared ? "Otázka připravená" : "Otázka nepřipravená"}
                    >
                      {questionIndex + 1}
                    </button>
                    <span>{question}</span>
                  </li>
                );
              })}
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
