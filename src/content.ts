export type ModuleCard = {
  slug: string;
  badge: string;
  title: string;
  emoji: string;
  description: string;
  accent?: boolean;
  wide?: boolean;
  points?: string[];
};

export const modules: ModuleCard[] = [
  {
    slug: "rehaid",
    badge: "Identita oboru",
    title: "RehaID",
    emoji: "🧬",
    description:
      "Identita a role rehabilitačního lékaře, kdo jsme jako obor, vhled do oboru a přehled dat a statistik.",
    wide: true,
    points: [
      "Identita oboru a jeho postavení ve zdravotním systému.",
      "Role rehabilitačního lékaře v mezioborové péči.",
      "Data, outcomes a měřitelné výsledky péče."
    ]
  },
  {
    slug: "rehacast",
    badge: "Podcast",
    title: "RehaCast",
    emoji: "🎙️",
    description:
      "Rozhovory s experty a inspirativními osobnostmi, praktické tipy z klinické praxe a obsah zaměřený na přípravu na atestaci.",
    wide: true,
    points: [
      "Rozhovory s českými i zahraničními hosty.",
      "Epizody nad kazuistikami a klinickými rozhodnutími.",
      "Stručné takeaways použitelné v běžné praxi."
    ]
  },
  {
    slug: "rehatube",
    badge: "YouTube",
    title: "RehaTube",
    emoji: "📺",
    description:
      "Edukační videa, odborné ukázky a reportáže z konferencí, které přinášejí aktuální trendy srozumitelně a prakticky.",
    accent: true,
    points: ["Technické demonstrace terapeutických postupů.", "Rozbory trendů v rehabilitaci.", "Reportáže z workshopů a konferencí."]
  },
  {
    slug: "rehaedu",
    badge: "Vzdělávání",
    title: "RehaEdu",
    emoji: "📘",
    description:
      "Strukturované kurzy, odborné články a studijní materiály uspořádané tak, aby podporovaly systematický profesní rozvoj."
  },
  {
    slug: "rehagram",
    badge: "Sociální sítě",
    title: "RehaGram",
    emoji: "📸",
    description:
      "Krátký, dynamický obsah pro popularizaci oboru rehabilitace, osvětu veřejnosti a rychlý přenos užitečných informací.",
    points: ["Popularizace oboru a osvěta veřejnosti.", "Rychlé klinické tipy a mini-edukace.", "Komunitní sdílení případů a zkušeností."]
  },
  {
    slug: "rehaexp",
    badge: "Mentoring",
    title: "RehaExp",
    emoji: "🧑‍⚕️",
    description:
      "Stáže, mentoring a sdílení zkušeností mezi kolegy, kteří chtějí rozšiřovat své kompetence pod vedením zkušených profesionálů.",
    accent: true,
    wide: true,
    points: [
      "Párování mentor-mentee podle odborného zaměření.",
      "Stážové příležitosti v partnerských pracovištích.",
      "Kazuistiky a supervizní setkání."
    ]
  },
  {
    slug: "rehawork",
    badge: "Kariéra",
    title: "RehaWork",
    emoji: "💼",
    description:
      "Nabídka pracovních míst a kariérních příležitostí pro fyzioterapeuty a další odborníky v rehabilitační péči.",
    points: ["Aktuální pracovní pozice z klinik a center.", "Filtrování podle specializace a lokality.", "Podpora při profesním směřování."]
  },
  {
    slug: "rehaevent",
    badge: "Akce",
    title: "RehaEvent",
    emoji: "🎤",
    description:
      "Přehled odborných akcí, workshopů a konferencí, které propojují komunitu a podporují sdílení nejnovějších poznatků.",
    points: [
      "Kalendář nejbližších odborných akcí.",
      "Detailní informace o tématech a přednášejících.",
      "Plánování účasti v komunitě ReHuB."
    ]
  },
  {
    slug: "rehamission",
    badge: "Směr a strategie",
    title: "RehaMission",
    emoji: "🎯",
    description: "Cíle oboru jako směr a orientace, dlouhodobá strategie, rozvoj, růst a posun rehabilitace do dalších let.",
    accent: true,
    wide: true,
    points: [
      "Sjednocení dlouhodobého směru oboru.",
      "Jasný rámec klinické, vzdělávací a organizační praxe.",
      "Přenos nových poznatků do každodenní péče."
    ]
  }
];

export type EduTopic = {
  id: string;
  heading: string;
  questions: string[];
};

export const eduTopics: EduTopic[] = [
  {
    id: "i-obecne",
    heading: "I. Obecné",
    questions: [
      "Podstata rehabilitace, definice rehabilitace, cíle rehabilitace, rehabilitační tým",
      "Posudková problematika (ZTP, TP, ZTP/P, invalidní důchod)",
      "Sociální rehabilitace a pracovní rehabilitace",
      "Bariéry, mobilita, soběstačnost a funkční nezávislost pacientů s disabilitou",
      "Ergonomie",
      "Ergodiagnostika a ergoterapie",
      "Testování a hodnocení v rehabilitaci (škály motorického postižení, bolesti, omezení ADL)",
      "Principy rehabilitačního ošetřovatelství",
      "Vliv imobilizace na pohybový aparát"
    ]
  },
  {
    id: "ii-kineziologie",
    heading: "II. Kineziologie",
    questions: [
      "Trup a trupové svalstvo (břišní stěna, bránice, pánevní dno), postura",
      "Krční a hrudní páteř",
      "Bederní páteř",
      "Kyčelní kloub",
      "Kolenní kloub",
      "Hlezno a noha",
      "Chůze",
      "Rameno",
      "Loket",
      "Ruka - úchop, druhy úchopu",
      "Dýchání - kineziologie, poruchy dechového stereotypu",
      "Posturální stabilita"
    ]
  },
  {
    id: "iii-bolestive-stavy-hybneho-systemu",
    heading: "III. Bolestivé stavy hybného systému",
    questions: [
      "Diferenciální diagnostika bolestí v rameni",
      "Diferenciální diagnostika bolestí v kříži",
      "Cervikobrachiální syndrom, syndrom horní hrudní apertury",
      "Cervikokraniální syndrom",
      "Poranění krční páteře, wiplash syndrom",
      "Hypermobilita, diagnostika, možnosti léčby",
      "Vertebrogenní algický syndrom, specifické a nespecifické bolesti zad, dif. dg, red and yellow flags, strategie a taktika terapie",
      "Teorie blokád, podstata mobilizačních technik",
      "Entezopatie, podstata vzniku, klinické projevy, nejčastější typy, léčebně rehabilitační postupy",
      "Funkční a strukturální poruchy, řetězení poruch funkce pohybového systému",
      "Svalové dysbalance - nejčastější formy, význam a terapie",
      "Stabilizace páteře a možnosti jejího ovlivnění",
      "Úžinové syndromy",
      "Vertebroviscerální a viscerovertebrální bolest",
      "Neurofyziologie bolesti a možnosti jejího ovlivnění prostředky RFM",
      "Farmakologické možnosti ovlivnění bolesti",
      "Fascie a jejich úloha v etiopatogenezi bolestivých stavů pohybového systému"
    ]
  },
  {
    id: "iv-neurofyziologie",
    heading: "IV. Neurofyziologie",
    questions: [
      "Fyziologie a patofyziologie svalové kontrakce, druhy kontrakce, typy svalových vláken, sarkopenie",
      "Kosterní sval, způsoby posilování a jejich místo v LTV, regenerace a reparace svalu",
      "Únava - podstata periferní a centrální únavy, význam pro rehabilitační terapii",
      "Elektrodiagnostika - I/t křivka, EMG, polyelektromyografie",
      "Sval jako bolestivý faktor hybného systému, svalový tonus, svalový spasmus, spoušťový bod, relaxační techniky",
      "Základy řízení motoriky - řízení na spinální úrovni, bazální ganglia, mozeček, mozková kůra",
      "Motorické učení - proces formování motorických stereotypů - fáze motorického učení, úloha fyzioterapeuta v jednotlivých fázích",
      "Spastická paréza - příčiny, vyšetřovací a terapeutické postupy v rámci rehabilitace",
      "Neurofyziologické principy stability a chůze",
      "Stres a jeho význam v rehabilitační terapii",
      "Inervace močového měchýře: fyziologie a patofyziologie",
      "Neuroplasticita, možnosti jejího ovlivnění"
    ]
  },
  {
    id: "v-neurologie",
    heading: "V. Neurologie",
    questions: [
      "CMP - příčiny, etiopatogeneze, klinická manifestace, primární a sekundární prevence",
      "CMP zásady ošetřování pacientů v akutní a subakutní fázi, péče o chroniky, metodiky léčebné rehabilitace, fatické poruchy a jejich řešení, krátkodobý a dlouhodobý rehabilitační program, posudkové řešení, sociální řešení",
      "Traumatické poškození mozku, permanentní vegetativní stav a další stavy poruch vědomí - charakteristika, prognóza a přístupy k rehabilitaci",
      "Svalové dystrofie",
      "Poruchy periferního motoneuronu",
      "Sclerosis multiplex",
      "Míšní léze - urologická problematika, dekubity, metabolické důsledky paraplegie, LTV postupy, ergodiagnostika, ergoterapie, sport vozíčkářů, sociální řešení",
      "Postižení periferních nervů - úrazy, jiné druhy poškození, diagnostika, terapie",
      "Paréza n. facialis - příčiny, klinický obraz, funkční diagnostika a terapie",
      "Polyneuropatie a možnosti rehabilitační léčby",
      "DMO - formy, léčba, krátkodobý a dlouhodobý rehabilitační program, posudkové řešení, pracovní zařazení",
      "Radikulární a pseudoradikulární syndromy, etiologie, klinika, terapie",
      "Parkinsonova choroba, extrapyramidová onemocnění",
      "Dif. dg. závratí a jejich terapie",
      "Post-Intensive Care Syndrom (PICS), Critical illness polyneuropathy (CIP) a Critical illness myopathy (CIM)"
    ]
  },
  {
    id: "vi-interni-lekarstvi",
    heading: "VI. Interní lékařství",
    questions: [
      "Ischemická choroba srdeční, infarkt myokardu, stavy po kardiochirurgických výkonech, rehabilitační a lázeňská léčba, zátěžové testy. Vliv pohybové zátěže na kardiovaskulární aparát, druhy cvičení a KV zátěž.",
      "Diabetes mellitus - léčba prostředky RFM. Komplikace diabetu - prevence a terapie.",
      "ICHDK - rozdělení, pohybová léčba, lázeňská léčba, fyzikální terapie",
      "Plicní a dechová rehabilitace",
      "Rehabilitační léčba u revmatických chorob a systémových nemocí pojiva",
      "Rehabilitace v onkologii",
      "Rehabilitace v geriatrii",
      "Lymfologie",
      "Osteoporóza, poruchy metabolismu kalcia - možnosti léčebné rehabilitace"
    ]
  },
  {
    id: "vii-ortopedie-a-tramatologie",
    heading: "VII. Ortopedie a tramatologie",
    questions: [
      "Skoliózy, rozdělení, chirurgické a konzervativní řešení, programy LTV, korzetoterapie",
      "Koxartróza: příčiny, změny kineziologie kloubu, možnosti konzervativní terapie, TEP kyčelního kloubu - léčebně rehabilitační postupy před a po operaci, lázeňská léčba",
      "Gonartróza: příčiny, změny kineziologie kloubu, TEP kolenního kloubu a terapie před a po operaci, lázeňská léčba",
      "Úrazy kolenního kloubu s lézí měkkých tkání, diferenciální diagnostika, terapie prostředky oboru RFM",
      "Pomůcky pro lokomoci - indikace, správné použití a prevence komplikací spojených s jejich používáním",
      "Změny architektoniky nohy - ovlivnění funkce pohybového aparátu",
      "Zlomeniny krčku femuru, cévní zásobení, rozdělení zlomenin, léčebně rehabilitační postupy po operačním i konzervativním řešení",
      "Zlomeniny horní končetiny - horní humerus, loket, předloktí, zápěstí - terapie, rehabilitace",
      "Komplexní regionální bolestivý syndrom: klasifikace, etiologie, terapie",
      "Amputace, principy rehabilitace po amputacích na DK, kriteria výběru protézy",
      "Operace ruky, stavy po úrazech, terapie prostředky oboru RFM"
    ]
  },
  {
    id: "viii-chirurgicke-obory",
    heading: "VIII. Chirurgické obory",
    questions: [
      "Rehabilitace po operacích plic a hrudníku, respirační fyzioterapie",
      "Rehabilitace po abdominálních operacích",
      "Rehabilitace v gynekologii",
      "Rehabilitace u popálenin"
    ]
  },
  {
    id: "ix-fyzikalni-terapie",
    heading: "IX. Fyzikální terapie",
    questions: [
      "Indikace a obecné kontraindikace fyzikální terapie, rozdělení FT",
      "Elektroterapie, základní údaje o terapii jednosměrným a střídavým proudem",
      "Galvanoterapie, iontoforéza: účinky, indikace, kontraindikace",
      "Nízkofrekvenční terapie: účinky, indikace, kontraindikace",
      "Elektroanalgezie",
      "Středněfrekvenční terapie: interferenční proudy: účinky, indikace, kontraindikace",
      "Ultrazvuk a rázová vlna: účinky, indikace, kontraindikace",
      "Termoterapie: účinky, indikace, kontraindikace",
      "Kryoterapie: účinky, indikace, kontraindikace",
      "Fototerapie, rozdělení, laser. speciální indikace a kontraindikace, zásady provozu",
      "Vysokofrekvenční terapie, speciální indikace a kontraindikace, zásady provozu",
      "Elektrostimulace inervovaného a denervovaného svalu",
      "Vodoléčba, hydrokinezioterapie, speciální indikace a kontraindikace",
      "Pulzní magnetické pole, speciální indikace a kontraindikace,zásady provozu",
      "Mechanoterapie (motodlaha, přetlakově-podtlaková terapie, trakce, atd.)",
      "Termoregulace, terapeutický význam hyperémie, typy hyperémie"
    ]
  },
  {
    id: "x-balneologie",
    heading: "X. Balneologie",
    questions: [
      "Přírodní léčebné lázně a lázeňská místa - přírodní léčebné zdroje, indikační seznam, postup odeslání pacienta do lázní a kontraindikace lázeňské léčby.",
      "Léčivé minerální vody - klasifikace, chemické složení, fyziologické účinky, indikace a kontraindikace.",
      "Inhalace a pitné kúry - druhy minerálních vod využívaných pro tyto procedury, mechanismus účinku, indikace, kontraindikace a specifika aplikace.",
      "Koupele a jiné vodoléčebné procedury s využitím léčivých vod - fyziologické účinky, způsob aplikace, indikace a kontraindikace CO2, radonových, jodových a sirných vod.",
      "Peloidy a zřídelní plyn - složení, mechanismus účinku, indikace, kontraindikace a terapeutické využití (včetně plynových obálek a suchých CO2 koupelí)",
      "Klimatoterapie a klimatické lázně - typy klimatu, jejich léčebné využití, indikace, kontraindikace a principy klimatických léčebných režimů."
    ]
  },
  {
    id: "xi-postupy-kinezioterapie",
    heading: "XI. Postupy kinezioterapie",
    questions: [
      "Principy a indikace PNF",
      "Neurofyziologická podstata a indikace postupů kinezioterapie u dětí",
      "Bobath koncept - podstata, indikace",
      "Senzomotorika - podstata, indikace",
      "Brügger koncept - podstata, indikace",
      "Kinezioterapie skolióz",
      "Mechanická diagnostika a terapie - podstata, indikace",
      "Reflexní lokomoce - principy, indikace",
      "Myoskeletální/manuální medicína - principy",
      "Masáže",
      "Dynamická neuromuskulární stabilizace",
      "Suchá jehla a další tzv. reflexní techniky",
      "Analytické cvičení dle svalového testu"
    ]
  },
  {
    id: "xii-nove-trendy-v-rehabilitaci",
    heading: "XII. Nové trendy v rehabilitaci",
    questions: [
      "Telerehabilitace a využití technologií (např. wearables, senzory, aplikace).",
      "Pokročilé přístrojové techniky v rehabilitaci (např. roboticky asistovaná terapie, VR, pohyblivé pásy pro trénink chůze, posturografie, exoskelety atd)",
      "Moderní zobrazovací metody v rehabilitaci",
      "Intervenční metody v rehabilitaci",
      "Ultrazvuková diagnostika patologií pohybového aparátu",
      "Ultrazvukem navigované intervence pohybového aparátu",
      "Rehabilitace v paliativní péči"
    ]
  }
];
