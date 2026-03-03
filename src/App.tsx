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
};

const ROMAN_CHAPTERS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

function hasOwnMarker(text: string): boolean {
  return /^(\d+[\.\)]|[A-Z][\.\)]|[IVXLCDM]+\.)\s/.test(text.trim());
}

const PREPARED_QUESTIONS: Record<string, PreparedQuestion> = {
  "v-neurologie:10": {
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

  const activePreparedQuestion = openQuestionKey ? PREPARED_QUESTIONS[openQuestionKey] : null;
  const activeQuestionLabel = useMemo(() => {
    if (!openQuestionKey) {
      return null;
    }
    const [topicId, rawIndex] = openQuestionKey.split(":");
    const questionIndex = Number(rawIndex);
    const topic = eduTopics.find((entry) => entry.id === topicId);
    if (!topic || Number.isNaN(questionIndex)) {
      return null;
    }
    return `${questionIndex + 1}. ${topic.questions[questionIndex] ?? ""}`;
  }, [openQuestionKey]);

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

  const toggleChapter = (chapterKey: string) => {
    setOpenChapters((prev) => ({ ...prev, [chapterKey]: !prev[chapterKey] }));
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
                      <button type="button" className="question-toggle" onClick={() => setOpenQuestionKey(isOpen ? null : questionKey)}>
                        {question}
                      </button>
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
                          {point}
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
