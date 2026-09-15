type PreparedQuestionData = {
  chapters: {
    title: string;
    points: string[];
  }[];
  flashcards: {
    id: string;
    prompt: string;
    answer: string;
  }[];
  quizQuestions: {
    id: string;
    prompt: string;
    options: string[];
    correctOptionIndexes: number[];
    explanation: string;
  }[];
};

export const physicalTherapyPreparedQuestions = ({
  "ix-fyzikalni-terapie:0": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: praktické uplatnění fyzikálních léčebných postupů a metod na živých organizmech s cílem benefitu pro pacienta",
        ]
      },
      {
        title: "Indikace",
        points: [
          "analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
          "myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
          "trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
          "antiedematózní",
          "placebo - nezpochybňovat metodu",
          "časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
        ]
      },
      {
        title: "Rozdělení fyzikální terapie",
        points: [
          "mechanoterapie",
          "masáže",
          "polohování, trakce, extenze, TMT, mobilizace",
          "ultrazvuk",
          "termoterapie",
          "pozitivní",
          "negativní",
          "kombinovaná",
          "fototerapie (světelné vlnění)",
        ]
      },
      {
        title: "UV",
        points: [
          "viditelné světlo",
        ]
      },
      {
        title: "IR",
        points: [
          "elektroterapie (elektrické proudění)",
          "stejnosměrný",
          "nízkofrekvenční",
          "vysokofrekvenční",
          "magnetoterapie",
          "hydroterapie",
          "kombinované",
          "Kontraindikace - lokální/celkové - obecné/speciální- relativní/absolutní",
          "horečnaté stavy - nelze předpovídat reakci pacienta na léčbu",
          "kardiostimulátor - možnost narušit funkce všech elektronických zařízení",
          "kachexie - mění se kožní odpor, reaktivita organizmu",
          "hemoragické diatézy - zvyšuje se lokální prokrvení a tím riziko vzniku hematomu",
          "kovový implantáty - riziko zahřátí implantátu",
          "trofické změny v místě aplikace",
          "jizvy, čerstvé léze kožního krytu - vše, co narušuje kontinuitu kůže",
          "gravidita - žádná FT do míst Lp a břicha",
          "larynx a štítná žláza (nemělo by se ozařovat) - vedla by ke změně funkce ŠŽ, porucha polykacího aktu (sousta do DC)",
          "ložiska TBC a tumorů - stimulace rozsevu maligního procesu",
          "oblasti velkých sympatických plexů (sinus caroticus - náhlá srdeční zástava, plexus solaris - akutní obtíže břicha)",
          "manifestace respirační/kardiální insuficience",
          "porucha čití v místě aplikace (vede k riziku poškození kůže) - absence kontroly dějů v místě aplikace FT",
          "snížené duševní funkce - nelze se spolehnout na údaje pacienta",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:0:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: praktické uplatnění fyzikálních léčebných postupů a metod na živých organizmech s cílem benefitu pro pacienta",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:2",
        prompt: "Vysvetli pojem: analgezie",
        answer: "analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:3",
        prompt: "Vysvetli pojem: myorelaxace",
        answer: "myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:4",
        prompt: "Vysvetli pojem: trofotropní účinek",
        answer: "trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:5",
        prompt: "Co je dulezite k tematu: Indikace?",
        answer: "antiedematózní",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:6",
        prompt: "Vysvetli pojem: placebo",
        answer: "placebo - nezpochybňovat metodu",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:7",
        prompt: "Vysvetli pojem: časový faktor",
        answer: "časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:8",
        prompt: "Co je dulezite k tematu: Rozdělení fyzikální terapie?",
        answer: "mechanoterapie",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:9",
        prompt: "Co je dulezite k tematu: Rozdělení fyzikální terapie?",
        answer: "masáže",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:10",
        prompt: "Co je dulezite k tematu: Rozdělení fyzikální terapie?",
        answer: "polohování, trakce, extenze, TMT, mobilizace",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:11",
        prompt: "Co je dulezite k tematu: Rozdělení fyzikální terapie?",
        answer: "ultrazvuk",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:12",
        prompt: "Co je dulezite k tematu: Rozdělení fyzikální terapie?",
        answer: "termoterapie",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:13",
        prompt: "Co je dulezite k tematu: Rozdělení fyzikální terapie?",
        answer: "pozitivní",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:14",
        prompt: "Co je dulezite k tematu: Rozdělení fyzikální terapie?",
        answer: "negativní",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:15",
        prompt: "Co je dulezite k tematu: Rozdělení fyzikální terapie?",
        answer: "kombinovaná",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:16",
        prompt: "Co je dulezite k tematu: Rozdělení fyzikální terapie?",
        answer: "fototerapie (světelné vlnění)",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:17",
        prompt: "Co je dulezite k tematu: UV?",
        answer: "viditelné světlo",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:18",
        prompt: "Co je dulezite k tematu: IR?",
        answer: "elektroterapie (elektrické proudění)",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:19",
        prompt: "Co je dulezite k tematu: IR?",
        answer: "stejnosměrný",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:20",
        prompt: "Co je dulezite k tematu: IR?",
        answer: "nízkofrekvenční",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:0:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: praktické uplatnění fyzikálních léčebných postupů a metod na živých organizmech s cílem benefitu pro pacienta",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: praktické uplatnění fyzikálních léčebných postupů a metod na živých organizmech s cílem benefitu pro pacienta",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "placebo - nezpochybňovat metodu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "placebo - nezpochybňovat metodu",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "polohování, trakce, extenze, TMT, mobilizace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "polohování, trakce, extenze, TMT, mobilizace",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "fototerapie (světelné vlnění)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "fototerapie (světelné vlnění)",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "elektroterapie (elektrické proudění)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "elektroterapie (elektrické proudění)",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Kontraindikace - lokální/celkové - obecné/speciální- relativní/absolutní",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Kontraindikace - lokální/celkové - obecné/speciální- relativní/absolutní",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "horečnaté stavy - nelze předpovídat reakci pacienta na léčbu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "horečnaté stavy - nelze předpovídat reakci pacienta na léčbu",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "kardiostimulátor - možnost narušit funkce všech elektronických zařízení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "kardiostimulátor - možnost narušit funkce všech elektronických zařízení",
      },
    ],
  },
  "ix-fyzikalni-terapie:1": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: terapeutické využití elektrického proudu",
          "Co lze ovlivnit elektrickým proudem - nervový, svalový, cévní systém, vnímání bolesti, trofiku, metabolismus tkání",
          "Elektrická vodivost tkání- dobře vodivé: krev, sval, nervová tkáň- hůře vodivé: tuk, kůže, kost (odpor kůže klesá zvlhčením, zvýšení kontaktní plochy elektrody)",
          "Elektrický proud: tok elektricky nabitých částic (ionty - kationt/aniont nebo elektrony - záporně nabité částice ), dobře prochází tkáněmi s velkým obsahem vody a bílkovin - největší odpor průchodu klade kůže, kost, chrupavka, šlacha (malý obsah vody) - směr od katody (mínus) k anodě (plus), jednotka Ampér- účinek - analgetický, trofický, antiedematózní, myostimulační",
          "Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek- iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
          "Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění)- indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
          "nízkofrekvenční - do 1kHz, povrchové",
          "kontaktní - DD, TENS, Trabert",
          "bezkontaktní - magnet, distanční elektroterapie",
          "středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
          "vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
          "Elektrody - velikost, vzájemná vzdálenost, polarita, intenzita proudu, délka aplikace, stav kůže- čím menší elektroda, tím vyšší hustota proudu (roste riziko popálení)",
        ]
      },
      {
        title: "Parametry",
        points: [
          "frekvence - počet kmitů za vteřinu",
          "intenzita",
          "modulace - je řízená změna některého parametru elektrického proudu v čase, nejčastěji amplitudy, frekvence nebo délky pulzu, za účelem dosažení požadovaného terapeutického účinku",
          "N.Ú. elektroterapie - podráždění kůže, bolestivé pocity, popálení, elektrochemické poškození kůže",
        ]
      },
      {
        title: "KI elektroterapie",
        points: [
          "kardiostimulátor",
          "závažné poruchy srdečního rytmu",
          "aplikace přes srdce",
          "porucha kožní integrity",
          "nespolupráce",
          "těhotenství",
          "malignita",
          "akutní trombóza",
          "infekce/zánět v místě aplikace",
          "Impulsoterapie - aplikace v impulzech (přerušovaně) - přesně tvarované impulsy nízkofrekvenčních proudů",
          "pravoúhlé - elektrogymnastika",
          "šikmé - elektrostimulace",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:1:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: terapeutické využití elektrického proudu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:2",
        prompt: "Vysvetli pojem: Co lze ovlivnit elektrickým proudem",
        answer: "Co lze ovlivnit elektrickým proudem - nervový, svalový, cévní systém, vnímání bolesti, trofiku, metabolismus tkání",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:3",
        prompt: "Vysvetli pojem: Elektrická vodivost tkání",
        answer: "Elektrická vodivost tkání- dobře vodivé: krev, sval, nervová tkáň- hůře vodivé: tuk, kůže, kost (odpor kůže klesá zvlhčením, zvýšení kontaktní plochy elektrody)",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:4",
        prompt: "Vysvetli pojem: Elektrický proud",
        answer: "Elektrický proud: tok elektricky nabitých částic (ionty - kationt/aniont nebo elektrony - záporně nabité částice ), dobře prochází tkáněmi s velkým obsahem vody a bílkovin - největší odpor průchodu klade kůže, kost, chrupavka, šlacha (malý obsah vody) - směr od katody (mínus) k anodě (plus), jednotka Ampér- účinek - analgetický, trofický, antiedematózní, myostimulační",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:5",
        prompt: "Vysvetli pojem: Stejnosměrný",
        answer: "Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek- iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:6",
        prompt: "Vysvetli pojem: Střídavý",
        answer: "Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění)- indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:7",
        prompt: "Vysvetli pojem: nízkofrekvenční",
        answer: "nízkofrekvenční - do 1kHz, povrchové",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:8",
        prompt: "Vysvetli pojem: kontaktní",
        answer: "kontaktní - DD, TENS, Trabert",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:9",
        prompt: "Vysvetli pojem: bezkontaktní",
        answer: "bezkontaktní - magnet, distanční elektroterapie",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:10",
        prompt: "Vysvetli pojem: středně frekvenční",
        answer: "středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:11",
        prompt: "Vysvetli pojem: vysokofrekvenční",
        answer: "vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:12",
        prompt: "Vysvetli pojem: Elektrody",
        answer: "Elektrody - velikost, vzájemná vzdálenost, polarita, intenzita proudu, délka aplikace, stav kůže- čím menší elektroda, tím vyšší hustota proudu (roste riziko popálení)",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:13",
        prompt: "Vysvetli pojem: frekvence",
        answer: "frekvence - počet kmitů za vteřinu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:14",
        prompt: "Co je dulezite k tematu: Parametry?",
        answer: "intenzita",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:15",
        prompt: "Vysvetli pojem: modulace",
        answer: "modulace - je řízená změna některého parametru elektrického proudu v čase, nejčastěji amplitudy, frekvence nebo délky pulzu, za účelem dosažení požadovaného terapeutického účinku",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:16",
        prompt: "Vysvetli pojem: N.Ú. elektroterapie",
        answer: "N.Ú. elektroterapie - podráždění kůže, bolestivé pocity, popálení, elektrochemické poškození kůže",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:17",
        prompt: "Co je dulezite k tematu: KI elektroterapie?",
        answer: "kardiostimulátor",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:18",
        prompt: "Co je dulezite k tematu: KI elektroterapie?",
        answer: "závažné poruchy srdečního rytmu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:19",
        prompt: "Co je dulezite k tematu: KI elektroterapie?",
        answer: "aplikace přes srdce",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:20",
        prompt: "Co je dulezite k tematu: KI elektroterapie?",
        answer: "porucha kožní integrity",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:1:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: terapeutické využití elektrického proudu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: terapeutické využití elektrického proudu",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Co lze ovlivnit elektrickým proudem - nervový, svalový, cévní systém, vnímání bolesti, trofiku, metabolismus tkání",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Co lze ovlivnit elektrickým proudem - nervový, svalový, cévní systém, vnímání bolesti, trofiku, metabolismus tkání",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrická vodivost tkání- dobře vodivé: krev, sval, nervová tkáň- hůře vodivé: tuk, kůže, kost (odpor kůže klesá zvlhčením, zvýšení kontaktní plochy elektrody)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrická vodivost tkání- dobře vodivé: krev, sval, nervová tkáň- hůře vodivé: tuk, kůže, kost (odpor kůže klesá zvlhčením, zvýšení kontaktní plochy elektrody)",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrický proud: tok elektricky nabitých částic (ionty - kationt/aniont nebo elektrony - záporně nabité částice ), dobře prochází tkáněmi s velkým obsahem vody a bílkovin - největší odpor průchodu klade kůže, kost, chrupavka, šlacha (malý obsah vody) - směr od katody (mínus) k anodě (plus), jednotka Ampér- účinek - analgetický, trofický, antiedematózní, myostimulační",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrický proud: tok elektricky nabitých částic (ionty - kationt/aniont nebo elektrony - záporně nabité částice ), dobře prochází tkáněmi s velkým obsahem vody a bílkovin - největší odpor průchodu klade kůže, kost, chrupavka, šlacha (malý obsah vody) - směr od katody (mínus) k anodě (plus), jednotka Ampér- účinek - analgetický, trofický, antiedematózní, myostimulační",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek- iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek- iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění)- indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění)- indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "nízkofrekvenční - do 1kHz, povrchové",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "nízkofrekvenční - do 1kHz, povrchové",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "kontaktní - DD, TENS, Trabert",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "kontaktní - DD, TENS, Trabert",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "bezkontaktní - magnet, distanční elektroterapie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "bezkontaktní - magnet, distanční elektroterapie",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrody - velikost, vzájemná vzdálenost, polarita, intenzita proudu, délka aplikace, stav kůže- čím menší elektroda, tím vyšší hustota proudu (roste riziko popálení)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrody - velikost, vzájemná vzdálenost, polarita, intenzita proudu, délka aplikace, stav kůže- čím menší elektroda, tím vyšší hustota proudu (roste riziko popálení)",
      },
    ],
  },
  "ix-fyzikalni-terapie:2": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: terapeutické působení stejnosměrného (galvanického) proudu na organizmus - akutní 3x denně- chronický 1x týdne (aplikace až 60 minut) - minimální délka terapie 30 minut, běžný počet procedur 6, u perakutních stavů 4-5 procedur prvních 48 hod po úrazu - max.",
          "proudová hustota je 0,1 mA/cm2, prahově senzitivní (pacient vnímá proud, ale není to bolestivé, protože jednosměrný proud působí senzitivně a vegetativně)",
          "Indikace: chronické bolestivé stavy, artralgie, myalgie, neuralgie",
          "Účinky: analgezie, prokrvení, ovlivnění trofiky tkáně",
          "Mechanizmus účinky: polarizace všech tkání a buněk v proudové dráze - vyžaduje čas min. 30 minut, v případě pozitivní odezvy zvyšujeme step 5 min.",
          "na 40-60 minut - předpis na 10 minut je non lege artis - proudová hustota je intenzita proudu (mA) procházející určitým průřezem (elektrody) v cm2- max.",
          "proudová hustota je 0,1mA/cm2,- nahromadění iontů na membráně, zvýší se propustnost pro Na+, což vede ke kapilární hyperémii- zlepšení trofiky, imunity, urychlení regenerace (více kyslíku, zvýší se syntéza kolagenu) - zrychlené vstřebávání výronů exsudátů a otoků, snížení bolesti, snížení spasticity,- eutonizace cévního řečiště (správný tonus)- ovlivnění nervové dráždivosti - nevyvolává svalovou kontrakci, proto je možné aplikovat i u perakutních stavů",
          "Pod elektrodami odlišné elektrochemické reakce:",
          "katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
          "anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
          "ochranné roztoky: slabé kyseliny a zásady (vzniká elektrolytická disociace H2O na H +, OH-, na kůži je NaCl, které disociuje na Na plus na katodě, kde je OH minus a vznikne NaOH, Cl minus k anodě a vznikne HCl (riziko poleptání) - proto ochranné roztoky",
          "katoda - kyselý, anoda - zásaditý roztok",
          "při odlepení elektrody - rána (přerušený elektrický okruh)",
          "mezi pokožku a elektrodu se dává podložka, která musí přesahovat přes okraj elektrody",
          "upozornit pacienta na možné začervenání kůže pod elektrodami, adaptaci (brnění el. proudu může po chvíli ustat)",
        ]
      },
      {
        title: "Způsob aplikace",
        points: [
          "Transregionálně (příčná) - elektrony umístěné na opačné strany postižené oblasti, proud prochází napříč oblasti- distorze, kontuze - do 24-36h po úrazu",
          "Podélná galvanizace - entezopatie, funkční porucha prokrvení (akrocyanóza, Raynaudův syndrom)..- elektrody jsou umístěné za sebou podél končetiny/jiné části těla, proud prochází podélně",
          "sestupná - anoda proximálně, katoda distálně (orientace elektrod)",
          "vzestupná - katoda proximálně, anoda distálně",
          "radikulární (segmentální) - proud působí na míšní kořen, indikace: neuralgie, KRBS",
          "paravertebtrální - elektrody jsou umístěné po stranách páteře - postherpeticka a interkostální neuralgie",
          "gangliotropní - působení na vegetativní (autonomní) ganglie",
          "neurální - elektrody umístěné podél průběhu konkrétního nervu, katoda distálně - mononeuritidy, lokalizované neuralgie",
        ]
      },
      {
        title: "Intenzita procedury- je limitovaná 2 hledisky",
        points: [
          "max. proudovou hustotou",
          "subj. pocit pacienta - nastavení max. prahově senzitivní (pacient cítí jemné brnění)",
          "Iontoforéza= transport ionizované léčivé látky přes kůži pomocí stejnosměrného elektrického proudu- dopravení iontů přes kůži - spíše do kůže, průchod léku 3-20 mm (diskuze) - galvanický proud s ionizovanou léčivou látkou (kortikoidy, lokální anestetika, analgetika) - lokální aplikace bez injekce, sterilní aplikace, do přesného místa, ale do hloubky těžko definovaná - ion aplikujeme pod elektrodu stejné polarity (odpuzuje léčivo směrem do tkáně) - indikace: kožní onemocnění, kožní anestezie, adheze, záněty - například k aplikaci dexamethazonu, mesocainu, hyaluronidázy, …",
          "4komorová galvanizace - hydrogalvan - podélná galvanizace - přenos elektrického proudu zprostředkovává voda - 4 nebo 2 vaničky pro HK, DK, řada schémat - rovnoměrné vpravování elektrického proudu - teplota vody ve vaničkách dle základního onemocnění (perakutní hypotermní, neuritidy izotermní, hypertermní - porucha cirkulace) - v celém rozsahu el.",
          "pole - depolarizace tkáně s následnou hyperémií, v končetinách na katodě zvýšení nervové dráždivosti, na anodě snížení - indikace: neuritidy, neuralgie, neuropatie, poruchy prokrvení, poruchy inervace, spasticita, periatritida - max. 40 mA u čtyřkomorové, 20 mA u dvojkomorové",
          "Elektroléčebná vana - celá ponořená část těla je jedna velká elektroda - nelze odhadnout celkové množství proudu procházejí pacientem - intenzita podle pocitu pacienta, max. 30 mA",
        ]
      },
      {
        title: "Předpis",
        points: [
          "Galvanoterapie na oblast pravého hlezna, anoda na laterální kotník, velikost 5x8 cm, katoda transregionálně, ochranné roztoky, v intenzitě prahově senzitivní, max. do 4 mA, aplikace 20-40 min., step 10 min, 3x denně.",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:2:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: terapeutické působení stejnosměrného (galvanického) proudu na organizmus - akutní 3x denně- chronický 1x týdne (aplikace až 60 minut) - minimální délka terapie 30 minut, běžný počet procedur 6, u perakutních stavů 4-5 procedur prvních 48 hod po úrazu - max.",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:2",
        prompt: "Co je dulezite k tematu: Prehled?",
        answer: "proudová hustota je 0,1 mA/cm2, prahově senzitivní (pacient vnímá proud, ale není to bolestivé, protože jednosměrný proud působí senzitivně a vegetativně)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:3",
        prompt: "Vysvetli pojem: Indikace",
        answer: "Indikace: chronické bolestivé stavy, artralgie, myalgie, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:4",
        prompt: "Vysvetli pojem: Účinky",
        answer: "Účinky: analgezie, prokrvení, ovlivnění trofiky tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:5",
        prompt: "Vysvetli pojem: Mechanizmus účinky",
        answer: "Mechanizmus účinky: polarizace všech tkání a buněk v proudové dráze - vyžaduje čas min. 30 minut, v případě pozitivní odezvy zvyšujeme step 5 min.",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:6",
        prompt: "Vysvetli pojem: na 40",
        answer: "na 40-60 minut - předpis na 10 minut je non lege artis - proudová hustota je intenzita proudu (mA) procházející určitým průřezem (elektrody) v cm2- max.",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:7",
        prompt: "Vysvetli pojem: proudová hustota je 0,1mA/cm2,",
        answer: "proudová hustota je 0,1mA/cm2,- nahromadění iontů na membráně, zvýší se propustnost pro Na+, což vede ke kapilární hyperémii- zlepšení trofiky, imunity, urychlení regenerace (více kyslíku, zvýší se syntéza kolagenu) - zrychlené vstřebávání výronů exsudátů a otoků, snížení bolesti, snížení spasticity,- eutonizace cévního řečiště (správný tonus)- ovlivnění nervové dráždivosti - nevyvolává svalovou kontrakci, proto je možné aplikovat i u perakutních stavů",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:8",
        prompt: "Co je dulezite k tematu: Prehled?",
        answer: "Pod elektrodami odlišné elektrochemické reakce:",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:9",
        prompt: "Vysvetli pojem: katelektrotonus",
        answer: "katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:10",
        prompt: "Vysvetli pojem: anelektotonus",
        answer: "anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:11",
        prompt: "Vysvetli pojem: ochranné roztoky",
        answer: "ochranné roztoky: slabé kyseliny a zásady (vzniká elektrolytická disociace H2O na H +, OH-, na kůži je NaCl, které disociuje na Na plus na katodě, kde je OH minus a vznikne NaOH, Cl minus k anodě a vznikne HCl (riziko poleptání) - proto ochranné roztoky",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:12",
        prompt: "Vysvetli pojem: katoda",
        answer: "katoda - kyselý, anoda - zásaditý roztok",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:13",
        prompt: "Vysvetli pojem: při odlepení elektrody",
        answer: "při odlepení elektrody - rána (přerušený elektrický okruh)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:14",
        prompt: "Co je dulezite k tematu: Prehled?",
        answer: "mezi pokožku a elektrodu se dává podložka, která musí přesahovat přes okraj elektrody",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:15",
        prompt: "Co je dulezite k tematu: Prehled?",
        answer: "upozornit pacienta na možné začervenání kůže pod elektrodami, adaptaci (brnění el. proudu může po chvíli ustat)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:16",
        prompt: "Vysvetli pojem: Transregionálně (příčná)",
        answer: "Transregionálně (příčná) - elektrony umístěné na opačné strany postižené oblasti, proud prochází napříč oblasti- distorze, kontuze - do 24-36h po úrazu",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:17",
        prompt: "Vysvetli pojem: Podélná galvanizace",
        answer: "Podélná galvanizace - entezopatie, funkční porucha prokrvení (akrocyanóza, Raynaudův syndrom)..- elektrody jsou umístěné za sebou podél končetiny/jiné části těla, proud prochází podélně",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:18",
        prompt: "Vysvetli pojem: sestupná",
        answer: "sestupná - anoda proximálně, katoda distálně (orientace elektrod)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:19",
        prompt: "Vysvetli pojem: vzestupná",
        answer: "vzestupná - katoda proximálně, anoda distálně",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:20",
        prompt: "Vysvetli pojem: radikulární (segmentální)",
        answer: "radikulární (segmentální) - proud působí na míšní kořen, indikace: neuralgie, KRBS",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:2:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: terapeutické působení stejnosměrného (galvanického) proudu na organizmus - akutní 3x denně- chronický 1x týdne (aplikace až 60 minut) - minimální délka terapie 30 minut, běžný počet procedur 6, u perakutních stavů 4-5 procedur prvních 48 hod po úrazu - max.",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: terapeutické působení stejnosměrného (galvanického) proudu na organizmus - akutní 3x denně- chronický 1x týdne (aplikace až 60 minut) - minimální délka terapie 30 minut, běžný počet procedur 6, u perakutních stavů 4-5 procedur prvních 48 hod po úrazu - max.",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "proudová hustota je 0,1 mA/cm2, prahově senzitivní (pacient vnímá proud, ale není to bolestivé, protože jednosměrný proud působí senzitivně a vegetativně)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "proudová hustota je 0,1 mA/cm2, prahově senzitivní (pacient vnímá proud, ale není to bolestivé, protože jednosměrný proud působí senzitivně a vegetativně)",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Indikace: chronické bolestivé stavy, artralgie, myalgie, neuralgie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Indikace: chronické bolestivé stavy, artralgie, myalgie, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Účinky: analgezie, prokrvení, ovlivnění trofiky tkáně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Účinky: analgezie, prokrvení, ovlivnění trofiky tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Mechanizmus účinky: polarizace všech tkání a buněk v proudové dráze - vyžaduje čas min. 30 minut, v případě pozitivní odezvy zvyšujeme step 5 min.",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Mechanizmus účinky: polarizace všech tkání a buněk v proudové dráze - vyžaduje čas min. 30 minut, v případě pozitivní odezvy zvyšujeme step 5 min.",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "na 40-60 minut - předpis na 10 minut je non lege artis - proudová hustota je intenzita proudu (mA) procházející určitým průřezem (elektrody) v cm2- max.",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "na 40-60 minut - předpis na 10 minut je non lege artis - proudová hustota je intenzita proudu (mA) procházející určitým průřezem (elektrody) v cm2- max.",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "proudová hustota je 0,1mA/cm2,- nahromadění iontů na membráně, zvýší se propustnost pro Na+, což vede ke kapilární hyperémii- zlepšení trofiky, imunity, urychlení regenerace (více kyslíku, zvýší se syntéza kolagenu) - zrychlené vstřebávání výronů exsudátů a otoků, snížení bolesti, snížení spasticity,- eutonizace cévního řečiště (správný tonus)- ovlivnění nervové dráždivosti - nevyvolává svalovou kontrakci, proto je možné aplikovat i u perakutních stavů",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "proudová hustota je 0,1mA/cm2,- nahromadění iontů na membráně, zvýší se propustnost pro Na+, což vede ke kapilární hyperémii- zlepšení trofiky, imunity, urychlení regenerace (více kyslíku, zvýší se syntéza kolagenu) - zrychlené vstřebávání výronů exsudátů a otoků, snížení bolesti, snížení spasticity,- eutonizace cévního řečiště (správný tonus)- ovlivnění nervové dráždivosti - nevyvolává svalovou kontrakci, proto je možné aplikovat i u perakutních stavů",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Pod elektrodami odlišné elektrochemické reakce:",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Pod elektrodami odlišné elektrochemické reakce:",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "ochranné roztoky: slabé kyseliny a zásady (vzniká elektrolytická disociace H2O na H +, OH-, na kůži je NaCl, které disociuje na Na plus na katodě, kde je OH minus a vznikne NaOH, Cl minus k anodě a vznikne HCl (riziko poleptání) - proto ochranné roztoky",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "ochranné roztoky: slabé kyseliny a zásady (vzniká elektrolytická disociace H2O na H +, OH-, na kůži je NaCl, které disociuje na Na plus na katodě, kde je OH minus a vznikne NaOH, Cl minus k anodě a vznikne HCl (riziko poleptání) - proto ochranné roztoky",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "katoda - kyselý, anoda - zásaditý roztok",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "katoda - kyselý, anoda - zásaditý roztok",
      },
    ],
  },
  "ix-fyzikalni-terapie:3": {
    chapters: [
      {
        title: "TENS",
        points: [
          "interference",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:3:flashcard:1",
        prompt: "Co je dulezite k tematu: TENS?",
        answer: "interference",
      },
    ],
    quizQuestions: [
    ],
  },
  "ix-fyzikalni-terapie:4": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: léčebné využití elektrického proudu za účelem snížení bolesti- nejpoužívanější metody jsou Traber, TENS, interference - bolest je nepříjemnou senzorickou a emocionální zkušeností, která se vztahuje ke skutečné/možné poruše tkáně - akutní x chronická bolest - vodiče: primární - I. řád - pevné vodiče - kovy II. řád - tekuté - tkáně lidského těla",
          "Myorelaxační efekt - ovlivnění TrP",
        ]
      },
      {
        title: "UZ",
        points: [
          "Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly- UZ v kombinaci s Traber/IF na hluboké struktury",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:4:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: léčebné využití elektrického proudu za účelem snížení bolesti- nejpoužívanější metody jsou Traber, TENS, interference - bolest je nepříjemnou senzorickou a emocionální zkušeností, která se vztahuje ke skutečné/možné poruše tkáně - akutní x chronická bolest - vodiče: primární - I. řád - pevné vodiče - kovy II. řád - tekuté - tkáně lidského těla",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:2",
        prompt: "Vysvetli pojem: Myorelaxační efekt",
        answer: "Myorelaxační efekt - ovlivnění TrP",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:3",
        prompt: "Vysvetli pojem: Kombinovaná terapie",
        answer: "Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly- UZ v kombinaci s Traber/IF na hluboké struktury",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:4:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: léčebné využití elektrického proudu za účelem snížení bolesti- nejpoužívanější metody jsou Traber, TENS, interference - bolest je nepříjemnou senzorickou a emocionální zkušeností, která se vztahuje ke skutečné/možné poruše tkáně - akutní x chronická bolest - vodiče: primární - I. řád - pevné vodiče - kovy II. řád - tekuté - tkáně lidského těla",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: léčebné využití elektrického proudu za účelem snížení bolesti- nejpoužívanější metody jsou Traber, TENS, interference - bolest je nepříjemnou senzorickou a emocionální zkušeností, která se vztahuje ke skutečné/možné poruše tkáně - akutní x chronická bolest - vodiče: primární - I. řád - pevné vodiče - kovy II. řád - tekuté - tkáně lidského těla",
      },
      {
        id: "ix-fyzikalni-terapie:4:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Myorelaxační efekt - ovlivnění TrP",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Myorelaxační efekt - ovlivnění TrP",
      },
      {
        id: "ix-fyzikalni-terapie:4:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly- UZ v kombinaci s Traber/IF na hluboké struktury",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly- UZ v kombinaci s Traber/IF na hluboké struktury",
      },
    ],
  },
  "ix-fyzikalni-terapie:5": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: jsou elektrické proudy o frekvencí 1-100 kHz- nejčastěji využívané v rehabilitaci jsou interferenční proudy- střední frekvence má menší odpor, pacient ji lépe toleruje a proto lze působit hlouběji - je terapeutické využití dvou středněfrekvenčních proudových okruhů, které se v hloubi tkáně kříží a vzniká tam proud, jehož frekvence je rovna vektorovému součtu frekvencí v obou kruzích- jdou hlouběji do tkání, tam se transformují na NF proudy 90 - 130 Hz (modulace amplitudy) - 4 lístek - interferenční proud: vzniká ze dvou středněfrekvenčních proudů o mírně odlišné frekvenci, které se vzájemně interferují, výsledkem je amplitudově modulovaný proud o f 100 Hz",
          "Indikace- chronické nociceptivní bolest 10-20 min, 9-12 procedur, podprahově motorická",
          "nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
          "svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
          "kloubní - RA, bursitidy, synovitidy, capsulitidy",
          "poúrazové - podpora hojení",
        ]
      },
      {
        title: "Kontraindikace",
        points: [
          "funkční i orgnanické poruchy v akutní fázi",
          "hyperanxieta",
          "absces",
          "ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
        ]
      },
      {
        title: "Způsob aplikace",
        points: [
          "Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace- jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
          "Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
          "klasické - obsolentní, nejhlubší",
          "izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
          "dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
          "Aplikace- subakutní 1x denně, chronická 2-3 x týdně, po 6. aplikaci zhodnotit efekt terapie, obvykle 9-12 procedur - po 1.",
          "aplikaci může dojít ke zhoršení obtíží - délka aplikace 3-20 minut - intenzita minimálně podprahově senzitivní - transregionálně/segmentálně/reflexní (ovlivněním Headových zón můžeme ovlivnit vnitřní orgány, který reflexní změnu vyvolali)",
        ]
      },
      {
        title: "Účinky- závisí na modulační frekvenci a intenzitě",
        points: [
          "analgetický - tlumení bolesti",
          "motorický - stimulace motorických nervů, vyvolání svalové kontrakce",
          "vazomotrický - zvýšení lokálního prokrvení, sekundárně podpora metabolismu a reparace",
          "podpora resorpce edému",
          "nižší modulační frekvence - výraznější motorická stimulace",
          "střední frekvence - zejména analgetický účinek",
          "vyšší frekvence - analgetický/senzorický účinek, menší motorická odpověď",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:5:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: jsou elektrické proudy o frekvencí 1-100 kHz- nejčastěji využívané v rehabilitaci jsou interferenční proudy- střední frekvence má menší odpor, pacient ji lépe toleruje a proto lze působit hlouběji - je terapeutické využití dvou středněfrekvenčních proudových okruhů, které se v hloubi tkáně kříží a vzniká tam proud, jehož frekvence je rovna vektorovému součtu frekvencí v obou kruzích- jdou hlouběji do tkání, tam se transformují na NF proudy 90 - 130 Hz (modulace amplitudy) - 4 lístek - interferenční proud: vzniká ze dvou středněfrekvenčních proudů o mírně odlišné frekvenci, které se vzájemně interferují, výsledkem je amplitudově modulovaný proud o f 100 Hz",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:2",
        prompt: "Vysvetli pojem: Indikace",
        answer: "Indikace- chronické nociceptivní bolest 10-20 min, 9-12 procedur, podprahově motorická",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:3",
        prompt: "Vysvetli pojem: nervové",
        answer: "nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:4",
        prompt: "Vysvetli pojem: svalové",
        answer: "svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:5",
        prompt: "Vysvetli pojem: kloubní",
        answer: "kloubní - RA, bursitidy, synovitidy, capsulitidy",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:6",
        prompt: "Vysvetli pojem: poúrazové",
        answer: "poúrazové - podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:7",
        prompt: "Co je dulezite k tematu: Kontraindikace?",
        answer: "funkční i orgnanické poruchy v akutní fázi",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:8",
        prompt: "Co je dulezite k tematu: Kontraindikace?",
        answer: "hyperanxieta",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:9",
        prompt: "Co je dulezite k tematu: Kontraindikace?",
        answer: "absces",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:10",
        prompt: "Co je dulezite k tematu: Kontraindikace?",
        answer: "ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:11",
        prompt: "Co je dulezite k tematu: Způsob aplikace?",
        answer: "Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace- jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:12",
        prompt: "Vysvetli pojem: Čtyčpolová interference",
        answer: "Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:13",
        prompt: "Vysvetli pojem: klasické",
        answer: "klasické - obsolentní, nejhlubší",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:14",
        prompt: "Vysvetli pojem: izoplanární vektorové pole",
        answer: "izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:15",
        prompt: "Vysvetli pojem: dipólový vektorové pole",
        answer: "dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:16",
        prompt: "Vysvetli pojem: Aplikace",
        answer: "Aplikace- subakutní 1x denně, chronická 2-3 x týdně, po 6. aplikaci zhodnotit efekt terapie, obvykle 9-12 procedur - po 1.",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:17",
        prompt: "Vysvetli pojem: aplikaci může dojít ke zhoršení obtíží",
        answer: "aplikaci může dojít ke zhoršení obtíží - délka aplikace 3-20 minut - intenzita minimálně podprahově senzitivní - transregionálně/segmentálně/reflexní (ovlivněním Headových zón můžeme ovlivnit vnitřní orgány, který reflexní změnu vyvolali)",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:18",
        prompt: "Vysvetli pojem: analgetický",
        answer: "analgetický - tlumení bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:19",
        prompt: "Vysvetli pojem: motorický",
        answer: "motorický - stimulace motorických nervů, vyvolání svalové kontrakce",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:20",
        prompt: "Vysvetli pojem: vazomotrický",
        answer: "vazomotrický - zvýšení lokálního prokrvení, sekundárně podpora metabolismu a reparace",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:5:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: jsou elektrické proudy o frekvencí 1-100 kHz- nejčastěji využívané v rehabilitaci jsou interferenční proudy- střední frekvence má menší odpor, pacient ji lépe toleruje a proto lze působit hlouběji - je terapeutické využití dvou středněfrekvenčních proudových okruhů, které se v hloubi tkáně kříží a vzniká tam proud, jehož frekvence je rovna vektorovému součtu frekvencí v obou kruzích- jdou hlouběji do tkání, tam se transformují na NF proudy 90 - 130 Hz (modulace amplitudy) - 4 lístek - interferenční proud: vzniká ze dvou středněfrekvenčních proudů o mírně odlišné frekvenci, které se vzájemně interferují, výsledkem je amplitudově modulovaný proud o f 100 Hz",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: jsou elektrické proudy o frekvencí 1-100 kHz- nejčastěji využívané v rehabilitaci jsou interferenční proudy- střední frekvence má menší odpor, pacient ji lépe toleruje a proto lze působit hlouběji - je terapeutické využití dvou středněfrekvenčních proudových okruhů, které se v hloubi tkáně kříží a vzniká tam proud, jehož frekvence je rovna vektorovému součtu frekvencí v obou kruzích- jdou hlouběji do tkání, tam se transformují na NF proudy 90 - 130 Hz (modulace amplitudy) - 4 lístek - interferenční proud: vzniká ze dvou středněfrekvenčních proudů o mírně odlišné frekvenci, které se vzájemně interferují, výsledkem je amplitudově modulovaný proud o f 100 Hz",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Indikace- chronické nociceptivní bolest 10-20 min, 9-12 procedur, podprahově motorická",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Indikace- chronické nociceptivní bolest 10-20 min, 9-12 procedur, podprahově motorická",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "kloubní - RA, bursitidy, synovitidy, capsulitidy",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "kloubní - RA, bursitidy, synovitidy, capsulitidy",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "poúrazové - podpora hojení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "poúrazové - podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "funkční i orgnanické poruchy v akutní fázi",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "funkční i orgnanické poruchy v akutní fázi",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace- jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace- jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "klasické - obsolentní, nejhlubší",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "klasické - obsolentní, nejhlubší",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
      },
    ],
  },
  "ix-fyzikalni-terapie:6": {
    chapters: [
      {
        title: "Ultrazvuk",
        points: [
          "Definice: podélné mechanické vlnění o frekvenci nad hranicí slyšitelného zvuku (20 000Hz), zj.",
          "0,5-3 MHz, které se generuje rozkmitáním piezoelektrického krystalu v hlavici vysokofrekvenčním proudem - zřeďování a zhušťování prostředí (ve své dráze rozkmitá částice i celé buňky)- ERA - efektivní kmitající oblast 1-10 cm2 (vyzařovací plocha hlavice) - akustická impedance: odraz v místě tkání s různou intenzitou - hloubková termoterapie- zdroj tepelné energie",
        ]
      },
      {
        title: "Účinky",
        points: [
          "fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
          "chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
          "biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému)- porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
        ]
      },
      {
        title: "Frekvence",
        points: [
          "1MHz - hluboké partie",
          "3 MHz - povrchové partie",
          "Intenzita - Watt/cm2- 0,5 W/cm2 do 2 W/cm2 u akutního 3 minuty- 0,8 - 1 do 3 W/cm2 u chronická 5 min- step 10 min max",
          "Forma aplikace- přímý x podvodní - dynamické (stálý pohyb po celém rozsahu léčené tkáně) x semistatické (pohyb po obvodu ERA) x statické (zřídka)- lokální/segmentální/neurální/radikulární",
          "kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
          "pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
        ]
      },
      {
        title: "Indikace",
        points: [
          "posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
          "revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
          "onemocnění periferních nervů - neuropatie, Fantomové bolesti",
          "poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace)",
          "jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura",
          "epikondylalgie, kalcifikace",
        ]
      },
      {
        title: "Kontraindikace",
        points: [
          "epifýzy rostoucích kostí",
          "stav po laminektomii - do jizvy",
          "gonády",
          "oči, krvácení, susp. embolus",
          "mozek",
          "srdce",
          "periferní nervy pod povrchem kostí",
          "menses",
        ]
      },
      {
        title: "Rázová vlna",
        points: [
          "Definice: je neinvazivní fyzikální terapie využívající mechanické akustické vlnění s vysokou amplitudou a krátkou dobou trvání - využití zj. u chronických bolestivých stavů pohybového aparátu (tendinopatie, entezopatie)- cílem rázové vlny je ovlivnění patologických změn tkáně a stimulace reparace",
        ]
      },
      {
        title: "Typy",
        points: [
          "fokusová - energie se soustředí do určité hloubky, přesné zacílení patologického ložiska",
          "radiální - tlaková vlna se šíří radiálně od aplikátoru, zj. na povrchové struktury",
        ]
      },
      {
        title: "Účinky",
        points: [
          "mechanické - mechanické podráždění tkáně, mikrostimulace patologické tkáně, fragmentace kalcifikací",
          "biologické - stimulace angiogeneze a neovaskularizace, regenerace buněk, podpora hojení šlach",
          "analgetické - snížení bolesti, modulace nociceptivního přenosu",
        ]
      },
      {
        title: "Indikace",
        points: [
          "laterální epikondylalgie",
          "mediální epikondylalgie",
          "tendinopatie rotátorové manžety",
          "kalcifikující tendinopatie ramene",
          "plantární fascitida",
          "patelární tendinopatie",
          "některé formy kalcifikací měkkých tkání",
        ]
      },
      {
        title: "Kontraindikace",
        points: [
          "absolutní",
          "těhotenství (neaplikovat přes plod)",
          "maligní tumor v místě aplikace",
          "infekce v místě aplikace",
          "porucha krevní srážlivost/významná koagulupatie",
          "aplikace přes: oblast velkých cév, plíce, mozek, míchu, růstové ploténky",
          "relativní",
          "antikoagulancia",
          "výrazná neuropatie/porucha citlivosti",
          "čerstvé poranění kůže v místě aplikace",
          "respektovat lokalizaci kardiostimulátoru",
          "N.Ú.",
          "bolest během aplikace",
          "zarudnutí",
          "otok",
          "hematom",
          "petechie",
          "přechodně zvýšená bolestivost po terapii",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:6:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: podélné mechanické vlnění o frekvenci nad hranicí slyšitelného zvuku (20 000Hz), zj.",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:2",
        prompt: "Co je dulezite k tematu: Ultrazvuk?",
        answer: "0,5-3 MHz, které se generuje rozkmitáním piezoelektrického krystalu v hlavici vysokofrekvenčním proudem - zřeďování a zhušťování prostředí (ve své dráze rozkmitá částice i celé buňky)- ERA - efektivní kmitající oblast 1-10 cm2 (vyzařovací plocha hlavice) - akustická impedance: odraz v místě tkání s různou intenzitou - hloubková termoterapie- zdroj tepelné energie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:3",
        prompt: "Vysvetli pojem: fyzikální",
        answer: "fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:4",
        prompt: "Vysvetli pojem: chemické",
        answer: "chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:5",
        prompt: "Vysvetli pojem: biologické",
        answer: "biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému)- porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:6",
        prompt: "Vysvetli pojem: 1MHz",
        answer: "1MHz - hluboké partie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:7",
        prompt: "Vysvetli pojem: 3 MHz",
        answer: "3 MHz - povrchové partie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:8",
        prompt: "Vysvetli pojem: Intenzita",
        answer: "Intenzita - Watt/cm2- 0,5 W/cm2 do 2 W/cm2 u akutního 3 minuty- 0,8 - 1 do 3 W/cm2 u chronická 5 min- step 10 min max",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:9",
        prompt: "Vysvetli pojem: Forma aplikace",
        answer: "Forma aplikace- přímý x podvodní - dynamické (stálý pohyb po celém rozsahu léčené tkáně) x semistatické (pohyb po obvodu ERA) x statické (zřídka)- lokální/segmentální/neurální/radikulární",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:10",
        prompt: "Vysvetli pojem: kontinuální",
        answer: "kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:11",
        prompt: "Vysvetli pojem: pulzní",
        answer: "pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:12",
        prompt: "Vysvetli pojem: posttraumatické stavy",
        answer: "posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:13",
        prompt: "Vysvetli pojem: revmatoidní artritidy, artrózy",
        answer: "revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:14",
        prompt: "Vysvetli pojem: onemocnění periferních nervů",
        answer: "onemocnění periferních nervů - neuropatie, Fantomové bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:15",
        prompt: "Vysvetli pojem: poruchy cirkulace",
        answer: "poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace)",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:16",
        prompt: "Co je dulezite k tematu: Indikace?",
        answer: "jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:17",
        prompt: "Co je dulezite k tematu: Indikace?",
        answer: "epikondylalgie, kalcifikace",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:18",
        prompt: "Co je dulezite k tematu: Kontraindikace?",
        answer: "epifýzy rostoucích kostí",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:19",
        prompt: "Vysvetli pojem: stav po laminektomii",
        answer: "stav po laminektomii - do jizvy",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:20",
        prompt: "Co je dulezite k tematu: Kontraindikace?",
        answer: "gonády",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:6:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: podélné mechanické vlnění o frekvenci nad hranicí slyšitelného zvuku (20 000Hz), zj.",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: podélné mechanické vlnění o frekvenci nad hranicí slyšitelného zvuku (20 000Hz), zj.",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "0,5-3 MHz, které se generuje rozkmitáním piezoelektrického krystalu v hlavici vysokofrekvenčním proudem - zřeďování a zhušťování prostředí (ve své dráze rozkmitá částice i celé buňky)- ERA - efektivní kmitající oblast 1-10 cm2 (vyzařovací plocha hlavice) - akustická impedance: odraz v místě tkání s různou intenzitou - hloubková termoterapie- zdroj tepelné energie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "0,5-3 MHz, které se generuje rozkmitáním piezoelektrického krystalu v hlavici vysokofrekvenčním proudem - zřeďování a zhušťování prostředí (ve své dráze rozkmitá částice i celé buňky)- ERA - efektivní kmitající oblast 1-10 cm2 (vyzařovací plocha hlavice) - akustická impedance: odraz v místě tkání s různou intenzitou - hloubková termoterapie- zdroj tepelné energie",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému)- porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému)- porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Intenzita - Watt/cm2- 0,5 W/cm2 do 2 W/cm2 u akutního 3 minuty- 0,8 - 1 do 3 W/cm2 u chronická 5 min- step 10 min max",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Intenzita - Watt/cm2- 0,5 W/cm2 do 2 W/cm2 u akutního 3 minuty- 0,8 - 1 do 3 W/cm2 u chronická 5 min- step 10 min max",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Forma aplikace- přímý x podvodní - dynamické (stálý pohyb po celém rozsahu léčené tkáně) x semistatické (pohyb po obvodu ERA) x statické (zřídka)- lokální/segmentální/neurální/radikulární",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Forma aplikace- přímý x podvodní - dynamické (stálý pohyb po celém rozsahu léčené tkáně) x semistatické (pohyb po obvodu ERA) x statické (zřídka)- lokální/segmentální/neurální/radikulární",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "onemocnění periferních nervů - neuropatie, Fantomové bolesti",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "onemocnění periferních nervů - neuropatie, Fantomové bolesti",
      },
    ],
  },
  "ix-fyzikalni-terapie:7": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: je léčebná výměna tepelné energie mezi okolím a organizmem - teplo = kinetická energie",
        ]
      },
      {
        title: "Dělení",
        points: [
          "pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
          "negativní - odebírání tepla, ochlazujeme",
          "kombinované",
        ]
      },
      {
        title: "Účinky",
        points: [
          "lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
          "celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení- vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
        ]
      },
      {
        title: "Přenos tepla mezi tělem a okolí",
        points: [
          "kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
          "konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
          "iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
          "evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
        ]
      },
      {
        title: "Formy termoterapie",
        points: [
          "kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
          "bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
          "vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
          "sálavé teplo - infračervené záření",
          "hloubkové prohřátí - krátkovlnná diatermie",
        ]
      },
      {
        title: "Pozitivní",
        points: [
          "částečná - obklady, peloidy, parafín (vyšší teploty, malé povrchové svaly)",
          "celková - lázně",
        ]
      },
      {
        title: "Negativní",
        points: [
          "částečná - obklady, ledování, kryoterapie",
          "celková - řízená, neřízená kryosauna",
        ]
      },
      {
        title: "Kombinované",
        points: [
          "konstatní - sauna, střídavé koupele",
          "kombinovaná s jiným druhem podmětů - podvodní masáž, vířivé koupele, skotské střiky (střídavě se aplikují pod tlakem proudy studené a teplé vody)",
          "Indikace- hyperémie: chronické nemoci pojiva, kloubů, m. Bechtěrev, artrózy, polyneuropatie - svalové spasmy, chronické bolesti zad- aplikace tepla před cvičením/protahování/mobilizací",
        ]
      },
      {
        title: "Kontraindikace",
        points: [
          "kardinální a renální insuficience",
          "lokální poruchy prokrvení",
        ]
      },
      {
        title: "ICHS",
        points: [
          "akutní zánětlivé procesy, akutní tendinitis, artritis",
          "krvácení",
          "porucha čití",
          "neaplikujeme přímo přes známý maligní proces",
          "celková horečka",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:7:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: je léčebná výměna tepelné energie mezi okolím a organizmem - teplo = kinetická energie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:2",
        prompt: "Vysvetli pojem: pozitivní",
        answer: "pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:3",
        prompt: "Vysvetli pojem: negativní",
        answer: "negativní - odebírání tepla, ochlazujeme",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:4",
        prompt: "Co je dulezite k tematu: Dělení?",
        answer: "kombinované",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:5",
        prompt: "Vysvetli pojem: lokální",
        answer: "lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:6",
        prompt: "Vysvetli pojem: celkové",
        answer: "celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení- vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:7",
        prompt: "Vysvetli pojem: kondukce",
        answer: "kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:8",
        prompt: "Vysvetli pojem: konvekce",
        answer: "konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:9",
        prompt: "Vysvetli pojem: iradiace",
        answer: "iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:10",
        prompt: "Vysvetli pojem: evaporace",
        answer: "evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:11",
        prompt: "Vysvetli pojem: kontaktní teplo",
        answer: "kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:12",
        prompt: "Vysvetli pojem: bezkontaktní (distanční)",
        answer: "bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:13",
        prompt: "Vysvetli pojem: vodní termoterapie",
        answer: "vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:14",
        prompt: "Vysvetli pojem: sálavé teplo",
        answer: "sálavé teplo - infračervené záření",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:15",
        prompt: "Vysvetli pojem: hloubkové prohřátí",
        answer: "hloubkové prohřátí - krátkovlnná diatermie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:16",
        prompt: "Vysvetli pojem: částečná",
        answer: "částečná - obklady, peloidy, parafín (vyšší teploty, malé povrchové svaly)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:17",
        prompt: "Vysvetli pojem: celková",
        answer: "celková - lázně",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:18",
        prompt: "Vysvetli pojem: částečná",
        answer: "částečná - obklady, ledování, kryoterapie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:19",
        prompt: "Vysvetli pojem: celková",
        answer: "celková - řízená, neřízená kryosauna",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:20",
        prompt: "Vysvetli pojem: konstatní",
        answer: "konstatní - sauna, střídavé koupele",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:7:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: je léčebná výměna tepelné energie mezi okolím a organizmem - teplo = kinetická energie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: je léčebná výměna tepelné energie mezi okolím a organizmem - teplo = kinetická energie",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "negativní - odebírání tepla, ochlazujeme",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "negativní - odebírání tepla, ochlazujeme",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení- vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení- vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
      },
    ],
  },
  "ix-fyzikalni-terapie:8": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: je odmítání tepla z organizmu s terapeutickým cílem- teplota kolem 0°C a méně - cryo: řecky chlad - chlad je subjektivní vjem, není fyzikální veličina",
          "Efekt kryoterapie- analgezie, snížení otoku, ovlivnění zánětlivé reakce, snížení svalového tonu, omezení metabolické aktivity tkání",
          "Účinky- chlad → vazokonstrikce → ↓ prokrvení → ↓ metabolismus → ↓ edém + ↓ bolest",
          "Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
          "Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
          "Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
          "Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
          "Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
          "Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
          "protiklad ostatních procedur: vazokonstrikce, snížena permeabilita a diapedéza, zhoršuje buněčnou imunitu, zhoršuje spasmy",
          "aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí",
          "analgetické účinky",
        ]
      },
      {
        title: "Indikace",
        points: [
          "akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
          "chronické bolestivé stavy - artróza, revmatoidní artritida",
          "reflexní svalové změny - po krátkém kryostimulu intenzivní hyperémie",
          "spasticita - snižuje dráždivost",
        ]
      },
      {
        title: "RA, hemeroidy",
        points: [
          "Kontraindikace - nestabilní hypertenze, IM méně než půl rok, srdeční/respirační dekompenzace, angina pectoris- poruchy prokrvení, citlivosti, chladová alergie, anémie, záchvatovité onemocnění - Raynaudova choroba, kryoglubulinémie, paroyxysmální chladová hemoglobinurie",
          "N.Ú. kryoterapie: poškození kůže, omrzliny, poškození periferního nervu, paradoxní reakce na chlad",
          "Používají se: - aplikace několikrát denně/kontinuálně s přestávkami - použití vnitřní izolace (mezivrstva tkaniny) - při lokálních obkladech - led, těkavé látky (ethylchlorid, metylchlorid), chladné plyny",
          "Lokální: ledové obklady, gelové sáčky, studená voda, kryosprej, ledové masáže, ledové komprese",
          "Celkové: kryokomora (chránit akra, poté následuje lehké cvičení a protažení, teplota mínus 180 st.C, max. 3 minuty)",
          "Pomůcka:",
          "BOMP - bolest, otok, metabolismus, prokrvení (KRYO=4 hlavní účinky)",
          "- KI: chlad nesmí tam, kde cévy nebo nervy neumí správně reagovat",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:8:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: je odmítání tepla z organizmu s terapeutickým cílem- teplota kolem 0°C a méně - cryo: řecky chlad - chlad je subjektivní vjem, není fyzikální veličina",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:2",
        prompt: "Vysvetli pojem: Efekt kryoterapie",
        answer: "Efekt kryoterapie- analgezie, snížení otoku, ovlivnění zánětlivé reakce, snížení svalového tonu, omezení metabolické aktivity tkání",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:3",
        prompt: "Vysvetli pojem: Účinky",
        answer: "Účinky- chlad → vazokonstrikce → ↓ prokrvení → ↓ metabolismus → ↓ edém + ↓ bolest",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:4",
        prompt: "Vysvetli pojem: Vazokonstrikce a antiedematózní",
        answer: "Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:5",
        prompt: "Vysvetli pojem: Analgetický efekt",
        answer: "Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:6",
        prompt: "Vysvetli pojem: Metabolický účinek",
        answer: "Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:7",
        prompt: "Vysvetli pojem: Protizánětlivý účinek",
        answer: "Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:8",
        prompt: "Vysvetli pojem: Lokální",
        answer: "Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:9",
        prompt: "Vysvetli pojem: Celkové",
        answer: "Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:10",
        prompt: "Vysvetli pojem: protiklad ostatních procedur",
        answer: "protiklad ostatních procedur: vazokonstrikce, snížena permeabilita a diapedéza, zhoršuje buněčnou imunitu, zhoršuje spasmy",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:11",
        prompt: "Co je dulezite k tematu: Prehled?",
        answer: "aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:12",
        prompt: "Co je dulezite k tematu: Prehled?",
        answer: "analgetické účinky",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:13",
        prompt: "Vysvetli pojem: akutní traumata a záněty",
        answer: "akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:14",
        prompt: "Vysvetli pojem: chronické bolestivé stavy",
        answer: "chronické bolestivé stavy - artróza, revmatoidní artritida",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:15",
        prompt: "Vysvetli pojem: reflexní svalové změny",
        answer: "reflexní svalové změny - po krátkém kryostimulu intenzivní hyperémie",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:16",
        prompt: "Vysvetli pojem: spasticita",
        answer: "spasticita - snižuje dráždivost",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:17",
        prompt: "Vysvetli pojem: Kontraindikace",
        answer: "Kontraindikace - nestabilní hypertenze, IM méně než půl rok, srdeční/respirační dekompenzace, angina pectoris- poruchy prokrvení, citlivosti, chladová alergie, anémie, záchvatovité onemocnění - Raynaudova choroba, kryoglubulinémie, paroyxysmální chladová hemoglobinurie",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:18",
        prompt: "Vysvetli pojem: N.Ú. kryoterapie",
        answer: "N.Ú. kryoterapie: poškození kůže, omrzliny, poškození periferního nervu, paradoxní reakce na chlad",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:19",
        prompt: "Vysvetli pojem: Používají se",
        answer: "Používají se: - aplikace několikrát denně/kontinuálně s přestávkami - použití vnitřní izolace (mezivrstva tkaniny) - při lokálních obkladech - led, těkavé látky (ethylchlorid, metylchlorid), chladné plyny",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:20",
        prompt: "Vysvetli pojem: Lokální",
        answer: "Lokální: ledové obklady, gelové sáčky, studená voda, kryosprej, ledové masáže, ledové komprese",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:8:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: je odmítání tepla z organizmu s terapeutickým cílem- teplota kolem 0°C a méně - cryo: řecky chlad - chlad je subjektivní vjem, není fyzikální veličina",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: je odmítání tepla z organizmu s terapeutickým cílem- teplota kolem 0°C a méně - cryo: řecky chlad - chlad je subjektivní vjem, není fyzikální veličina",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Efekt kryoterapie- analgezie, snížení otoku, ovlivnění zánětlivé reakce, snížení svalového tonu, omezení metabolické aktivity tkání",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Efekt kryoterapie- analgezie, snížení otoku, ovlivnění zánětlivé reakce, snížení svalového tonu, omezení metabolické aktivity tkání",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Účinky- chlad → vazokonstrikce → ↓ prokrvení → ↓ metabolismus → ↓ edém + ↓ bolest",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Účinky- chlad → vazokonstrikce → ↓ prokrvení → ↓ metabolismus → ↓ edém + ↓ bolest",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "protiklad ostatních procedur: vazokonstrikce, snížena permeabilita a diapedéza, zhoršuje buněčnou imunitu, zhoršuje spasmy",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "protiklad ostatních procedur: vazokonstrikce, snížena permeabilita a diapedéza, zhoršuje buněčnou imunitu, zhoršuje spasmy",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
      },
    ],
  },
  "ix-fyzikalni-terapie:9": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: je terapeutické využívání elektromagnetického vlnění s vlnovou délkou 10⁻⁴ až 10⁻⁹ m",
        ]
      },
      {
        title: "Rozdělení",
        points: [
          "dle vlnové délky",
        ]
      },
      {
        title: "UV \u003c 400 nm",
        points: [
          "viditelné světlo 400 - 760 nm",
        ]
      },
      {
        title: "IR \u003e 760 nm",
        points: [
          "dle polarizace",
          "polarizované - laser, biolampa- kmitá uspořádaně",
          "nepolarizované - kmitá v mnoha různých rovinách",
          "UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření",
          "UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
          "UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
        ]
      },
      {
        title: "UVC \u003c 280 nm karcinogenní, desinfekce sálů",
        points: [
          "Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
          "Viditelné světlo - klimatoterapi, vliv na růst, regeneraci, psychický vliv",
          "Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu- indikace: hojení ran, popáleniny, kožních defektů- minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min.",
          "3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
          "Laser - light amplification by stimulated emission of light - ochrana očí!",
          "- monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1.",
          "do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4.",
          "nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2- pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace- KI: malignita, st.p.",
          "radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická- indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
        ]
      },
      {
        title: "IR (infračervené záření)",
        points: [
          "A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace",
          "B 1000 °C - působí povrchně - ohřívá kůži, při delší aplikaci tepelně zatěžuje kožní povrch - navození celkové relaxace před další FT",
        ]
      },
      {
        title: "C radiátory",
        points: [
          "fyziologické účinky: analogické aplikaci tepla, stimulace lokální cirkulace s následnou hyperemií",
          "v krátké době kůže začervená, pacient cítí teplo, tepelný erytém vzniká v průběhu ozařování vlivem lokální vazodilatace, do 2 jod zmizí, nezanechává pigmentaci",
          "relaxace, celkové zklidnění, uvolnění spazmů, zvýšení absorpce exsudátů, mírná analgezie, zvyšuje permeabilitu kapilár, diapedéza leukocytů",
          "KI: febrilie, hypertenze, těhotenství, dekompenzovaná arteriální hypertenze, srdeční selhání",
        ]
      },
      {
        title: "1-8 min. vzdálenost 20 cm IR-A",
        points: [
          "indikace: posttraumatické stavy od 2.-3. dne, chronické bolestivé stavy pohybové ústrojí (před zahájení fyzioterapie), kloubní ztuhlost, tendinitidy, spasmy,",
          "součást jiných terapeutických postupů",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:9:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: je terapeutické využívání elektromagnetického vlnění s vlnovou délkou 10⁻⁴ až 10⁻⁹ m",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:2",
        prompt: "Co je dulezite k tematu: Rozdělení?",
        answer: "dle vlnové délky",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:3",
        prompt: "Vysvetli pojem: viditelné světlo 400",
        answer: "viditelné světlo 400 - 760 nm",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:4",
        prompt: "Co je dulezite k tematu: IR \u003e 760 nm?",
        answer: "dle polarizace",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:5",
        prompt: "Vysvetli pojem: polarizované",
        answer: "polarizované - laser, biolampa- kmitá uspořádaně",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:6",
        prompt: "Vysvetli pojem: nepolarizované",
        answer: "nepolarizované - kmitá v mnoha různých rovinách",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:7",
        prompt: "Co je dulezite k tematu: IR \u003e 760 nm?",
        answer: "UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:8",
        prompt: "Vysvetli pojem: UVA 315",
        answer: "UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:9",
        prompt: "Vysvetli pojem: UVB 280",
        answer: "UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:10",
        prompt: "Vysvetli pojem: Prahová erytémová dávka UV",
        answer: "Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:11",
        prompt: "Vysvetli pojem: Viditelné světlo",
        answer: "Viditelné světlo - klimatoterapi, vliv na růst, regeneraci, psychický vliv",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:12",
        prompt: "Vysvetli pojem: Biolampa",
        answer: "Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu- indikace: hojení ran, popáleniny, kožních defektů- minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min.",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:13",
        prompt: "Co je dulezite k tematu: UVC \u003c 280 nm karcinogenní, desinfekce sálů?",
        answer: "3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:14",
        prompt: "Vysvetli pojem: Laser",
        answer: "Laser - light amplification by stimulated emission of light - ochrana očí!",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:15",
        prompt: "Co je dulezite k tematu: UVC \u003c 280 nm karcinogenní, desinfekce sálů?",
        answer: "- monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1.",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:16",
        prompt: "Co je dulezite k tematu: UVC \u003c 280 nm karcinogenní, desinfekce sálů?",
        answer: "do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4.",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:17",
        prompt: "Vysvetli pojem: nad 500 mW (nebezpečný, využití v chirurgii)",
        answer: "nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2- pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace- KI: malignita, st.p.",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:18",
        prompt: "Vysvetli pojem: radioterapii 4",
        answer: "radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická- indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:19",
        prompt: "Vysvetli pojem: A Wolfram, 2500 °C (solux)",
        answer: "A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:20",
        prompt: "Vysvetli pojem: B 1000 °C",
        answer: "B 1000 °C - působí povrchně - ohřívá kůži, při delší aplikaci tepelně zatěžuje kožní povrch - navození celkové relaxace před další FT",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:9:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: je terapeutické využívání elektromagnetického vlnění s vlnovou délkou 10⁻⁴ až 10⁻⁹ m",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: je terapeutické využívání elektromagnetického vlnění s vlnovou délkou 10⁻⁴ až 10⁻⁹ m",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "viditelné světlo 400 - 760 nm",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "viditelné světlo 400 - 760 nm",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "polarizované - laser, biolampa- kmitá uspořádaně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "polarizované - laser, biolampa- kmitá uspořádaně",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "nepolarizované - kmitá v mnoha různých rovinách",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "nepolarizované - kmitá v mnoha různých rovinách",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Viditelné světlo - klimatoterapi, vliv na růst, regeneraci, psychický vliv",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Viditelné světlo - klimatoterapi, vliv na růst, regeneraci, psychický vliv",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu- indikace: hojení ran, popáleniny, kožních defektů- minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min.",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu- indikace: hojení ran, popáleniny, kožních defektů- minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min.",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Laser - light amplification by stimulated emission of light - ochrana očí!",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Laser - light amplification by stimulated emission of light - ochrana očí!",
      },
    ],
  },
  "ix-fyzikalni-terapie:10": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: terapeutické využití elektromagnetických oscilací s frekvencí \u003e 100 (300) kHz- elektromagnetické vlny při takové frekvenci nestačí vyvolat depolarizaci membrány nervového vlákna, ale jsou v normální tkáni konvertované na teplo - terapeutické využití kondenzátorového, indukčního nebo zářivého vysokofrekvenčního pole- bezkontaktní elektroterapii- synonymum je diatermie - převážně termický efekt Diatermie = je fyzikální terapeutická metoda využívající vysokofrekvenční magnetické pole- nestačí se vyvolat depolarizaci nervových vláken, ale přenáší se na teplo",
        ]
      },
      {
        title: "Diatermie dělení (liší se hloubkou účinku)",
        points: [
          "krátkovlnná - metrové vlny, proniká hlouběji",
          "ultrakrátkovlnná - decimetrové vlny",
          "mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
          "Způsob aplikace a zásady provozu - opatření nápisem - 2 m odstup od přístroje- zákaz gravidní ženy (nízká porodní hmotnost, VVV) - pravidelná revize technikem",
        ]
      },
      {
        title: "Krátkovlnná diatermie",
        points: [
          "aplikace",
          "kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
          "indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
          "účinky",
          "termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
          "krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
          "metabolické - aktivace metabolických procesů",
          "nervový systém - analgetické",
          "aplikace",
          "kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
          "pulzní - 20-50 Hz atermická procedura, 50-100 Hz hyperémie, zvýšená resorpce, 100-200 Hz blíží se kontinuální diatermii",
          "elektrody (součástí předpisu druh elektrody) - kondenzátorové, distanční, speciálně tvarované, indukční kabel, speciální (cirkuploda)",
          "intenzita - řídit se výrobcem přístroje a subjektivními pocity pacienta",
          "délka aplikace- subchronické a chronické procesy 15-20 minut - akutní stavy (furunkl, karbunkl, panaritium) 3 minuty a dále podle reakce pacienta",
          "frekvence procedur- účinek správně indikované a provedené diatermie je prolongovaný a přetrvává 48 hod- optimálně 3x týdně - počet procedur 9, během 3 týdnů",
          "KI: růstová zóna, akutní záněty, st.p.laminectomii (oblast jizvy), psychické poruchy, kochleární implantát, kardiostimulátor, přes sádru/dlahy/leukoplast, osteomyelitis, čerstvé zlomeniny, kovy, vředy, scrotum, žlázy, terapie kortikoidy, pacient na kovové posteli, žaludeční vředy",
          "indikace: neuritis brachiálního plesu, bursitidy, dislokace, epikondylitis, facetový syndrom, kořenové syndromy, lumbalgie, RA",
          "Ultrakrátkovlnné diatermie - absorpce a přeměna energie vysokofrekvenčního pole na energii tepelnou dochází k vnitřní tvorbě tepla, toto teplo je odváděno krví (konvekcí), dochází k vazodilataci, zvýšení permeabilitě kapilár, diatézy leukocytů, zvýšená resorbce extravazálních tekutin- svaly: prohřívání svalových spasmů, termický účinek - aplikace: speciální zářič 5-15 min, intenzita termicky senzitivní (první pocit tepla pacienta)",
          "Mikrovlnná diatermie - vysokofrekvenční elektromagnetické pole s f 2,45 GHz a vlnovou délkou (centimetrové vlny)- maximum tvorby tepla ve svalové tkání- předepisování a provádění procedury dle údaji výrobce",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:10:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: terapeutické využití elektromagnetických oscilací s frekvencí \u003e 100 (300) kHz- elektromagnetické vlny při takové frekvenci nestačí vyvolat depolarizaci membrány nervového vlákna, ale jsou v normální tkáni konvertované na teplo - terapeutické využití kondenzátorového, indukčního nebo zářivého vysokofrekvenčního pole- bezkontaktní elektroterapii- synonymum je diatermie - převážně termický efekt Diatermie = je fyzikální terapeutická metoda využívající vysokofrekvenční magnetické pole- nestačí se vyvolat depolarizaci nervových vláken, ale přenáší se na teplo",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:2",
        prompt: "Vysvetli pojem: krátkovlnná",
        answer: "krátkovlnná - metrové vlny, proniká hlouběji",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:3",
        prompt: "Vysvetli pojem: ultrakrátkovlnná",
        answer: "ultrakrátkovlnná - decimetrové vlny",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:4",
        prompt: "Vysvetli pojem: mikrovlnná",
        answer: "mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:5",
        prompt: "Vysvetli pojem: Způsob aplikace a zásady provozu",
        answer: "Způsob aplikace a zásady provozu - opatření nápisem - 2 m odstup od přístroje- zákaz gravidní ženy (nízká porodní hmotnost, VVV) - pravidelná revize technikem",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:6",
        prompt: "Co je dulezite k tematu: Krátkovlnná diatermie?",
        answer: "aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:7",
        prompt: "Vysvetli pojem: kondenzátorové pole",
        answer: "kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:8",
        prompt: "Vysvetli pojem: indukční pole",
        answer: "indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:9",
        prompt: "Co je dulezite k tematu: Krátkovlnná diatermie?",
        answer: "účinky",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:10",
        prompt: "Vysvetli pojem: termální",
        answer: "termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:11",
        prompt: "Vysvetli pojem: krevní změny",
        answer: "krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:12",
        prompt: "Vysvetli pojem: metabolické",
        answer: "metabolické - aktivace metabolických procesů",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:13",
        prompt: "Vysvetli pojem: nervový systém",
        answer: "nervový systém - analgetické",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:14",
        prompt: "Co je dulezite k tematu: Krátkovlnná diatermie?",
        answer: "aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:15",
        prompt: "Vysvetli pojem: kontinuální",
        answer: "kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:16",
        prompt: "Vysvetli pojem: pulzní",
        answer: "pulzní - 20-50 Hz atermická procedura, 50-100 Hz hyperémie, zvýšená resorpce, 100-200 Hz blíží se kontinuální diatermii",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:17",
        prompt: "Vysvetli pojem: elektrody (součástí předpisu druh elektrody)",
        answer: "elektrody (součástí předpisu druh elektrody) - kondenzátorové, distanční, speciálně tvarované, indukční kabel, speciální (cirkuploda)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:18",
        prompt: "Vysvetli pojem: intenzita",
        answer: "intenzita - řídit se výrobcem přístroje a subjektivními pocity pacienta",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:19",
        prompt: "Vysvetli pojem: délka aplikace",
        answer: "délka aplikace- subchronické a chronické procesy 15-20 minut - akutní stavy (furunkl, karbunkl, panaritium) 3 minuty a dále podle reakce pacienta",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:20",
        prompt: "Vysvetli pojem: frekvence procedur",
        answer: "frekvence procedur- účinek správně indikované a provedené diatermie je prolongovaný a přetrvává 48 hod- optimálně 3x týdně - počet procedur 9, během 3 týdnů",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:10:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: terapeutické využití elektromagnetických oscilací s frekvencí \u003e 100 (300) kHz- elektromagnetické vlny při takové frekvenci nestačí vyvolat depolarizaci membrány nervového vlákna, ale jsou v normální tkáni konvertované na teplo - terapeutické využití kondenzátorového, indukčního nebo zářivého vysokofrekvenčního pole- bezkontaktní elektroterapii- synonymum je diatermie - převážně termický efekt Diatermie = je fyzikální terapeutická metoda využívající vysokofrekvenční magnetické pole- nestačí se vyvolat depolarizaci nervových vláken, ale přenáší se na teplo",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: terapeutické využití elektromagnetických oscilací s frekvencí \u003e 100 (300) kHz- elektromagnetické vlny při takové frekvenci nestačí vyvolat depolarizaci membrány nervového vlákna, ale jsou v normální tkáni konvertované na teplo - terapeutické využití kondenzátorového, indukčního nebo zářivého vysokofrekvenčního pole- bezkontaktní elektroterapii- synonymum je diatermie - převážně termický efekt Diatermie = je fyzikální terapeutická metoda využívající vysokofrekvenční magnetické pole- nestačí se vyvolat depolarizaci nervových vláken, ale přenáší se na teplo",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "krátkovlnná - metrové vlny, proniká hlouběji",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "krátkovlnná - metrové vlny, proniká hlouběji",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "ultrakrátkovlnná - decimetrové vlny",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "ultrakrátkovlnná - decimetrové vlny",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Způsob aplikace a zásady provozu - opatření nápisem - 2 m odstup od přístroje- zákaz gravidní ženy (nízká porodní hmotnost, VVV) - pravidelná revize technikem",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Způsob aplikace a zásady provozu - opatření nápisem - 2 m odstup od přístroje- zákaz gravidní ženy (nízká porodní hmotnost, VVV) - pravidelná revize technikem",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "metabolické - aktivace metabolických procesů",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "metabolické - aktivace metabolických procesů",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "nervový systém - analgetické",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "nervový systém - analgetické",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
      },
    ],
  },
  "ix-fyzikalni-terapie:11": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: elektrostimulace je metoda elektroterapie, při které elektrickým proudem vyvoláme depolarizaci nervu nebo přímo svalového vlákna s následnou svalovou kontrakcí- při poškození periferního nervu pro udržení trofiky svalů a zabránění fibroblastické přestavbě než dojde k reinervaci poškozeného nervu",
          "Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů- využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
          "Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje- NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
          "Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2- kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
        ]
      },
      {
        title: "Cíl elektrostimulace",
        points: [
          "zachovat/obnovit svalovou funkci",
          "zabránit/zmírnit svalovou atrofii",
          "zlepšit svalovou sílu",
          "podpořit motorickou reedukaci",
          "Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný- elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce- používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např.",
          "foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)",
        ]
      },
      {
        title: "Indikace",
        points: [
          "svalová slabost",
          "svalová atrofie při imobilizaci",
          "poruchy svalové aktivace",
          "Elektrogymnastika denervovaného svalu- jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu!",
          "- dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)",
        ]
      },
      {
        title: "Indikace",
        points: [
          "poškození periferního nervu",
          "periferní paréza",
          "léze nervového kořene",
        ]
      },
      {
        title: "Kontraindikace elektrostimulace",
        points: [
          "kardiostimulátor",
          "aplikace přes srdce",
          "maligní nádor v místě aplikace",
          "akutní krvácení/tromboza",
          "těhotenství (neaplikovat přes pánev, břicho)",
          "poškození v místě elektrod",
          "akutní infekce a zánět v místě aplikace",
          "I/T křivka- nejpřesnější ED pro léčbu periferních paréz, komplexní forma hodnocení dráždivosti - stanovení optimálních impulzů pro dráždění denervovaných svalů- komplexní forma hodnocení dráždivosti - graficky znázorňuje závislost intenzity potřebné k vyvolání prahového podráždění při postupném zkracování doby trvání impulzu - dříve se využívala reobáze a chronaxie, dnes Hoorweg-Weissova I/T křivka a z ní výpočitaný AQ kvocient - reobáze - nejmenší intenzita proudu, která při dostatečně dlouhém impulzu vyvolá minimální kontrakci (jak silný proud) - chronaxie - nejkratší doba impulzu (čas), která při intenzitě 2x reobáze vyvolá minimální kontrakci (jak dlouho musí působit) - u denervovaného svalu musíme dráždit přímo svalové vlákno a potřebujeme výrazně delší impulzy a vyšší intenzitu (charakteristicky se mění I/T křivka) - cíl: snažíme se o odpověď, co nejnižší intenzitou- čím delší délka impulzu, tím větší poškození, při zkrácení délky impulsu známka reinervace",
          "Akomodační kvocietn AQ - kvantitativně vyjadřuje změny svalové dráždivosti - zdravý sval: NS ploténky mají schopnost akomodace na pozvolný nástup šikmých impulzů, intenzita je 3-6x větší oproti pravoúhlému impulzu - denervovaný sval: ztrácí schopnost akomodace, kontrakci vyvolá šikmý impulz s intenzitou téměř stejnou jako má pravoúhlý impulz - při stimulaci denervovaných svalů šikmými proudy se zdravé svaly nezapojují, tudíž nevznikají nežádoucí svalové synkinézy - vypočítá se jako podíl minimální intenzity vyvolávající kontrakci šikmým a pravoúhlým impulzem při délce impulzu 1000 ms - hodnoty AQ: zdravý sval 2,7-6, částečně denervovaný pod 2,7, denervovaný kolem 1, nad 6 vegetativní dystonie",
        ]
      },
      {
        title: "Provedení",
        points: [
          "Elektrostimulace: předcházíme energetickému vyčerpání, 1-3 min., 5-15 kontrakcí- I/T křivka časově náročné, nepříjemné pro pacienta (testování zdravých i nemocných svalů), erudice terapeuta, zaznamenávání naměření hodnot",
          "technika monopolární - přímá (motorický bod) x nepřímá (nerv), - stimulační katoda, anoda proximálně - motorický bod - místo vstupu do svalu, největší nakupení NS plotének, nejčastěji prox. 1/3 svalu, u denervovaného svalu se posouvá distálně",
          "technika bipolární - na začátek a konec svalu, anoda proximálně - předcházíme energetickému vyčerpání, 1-3 min., 5-15 kontrakcí",
          "Elektrogymnastika- NF proudy (DD, Fanatický proud, Trabert, TENS), SF (Kotzovy proudy) - intenzita nadprahově motorická (vyvolá záškub) - aplikace nejčastěji bipolární - doba kontrakce a relaxace (K,R) 1. fázické svaly K 3-6 s, R 2-3x delší, trvání 1-3 min. (max. 15 min.)2. tonické svaly K 10-40 s, R minimálně stejně jako K, trvání 5-15 min. (max. 30 min.)",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:11:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: elektrostimulace je metoda elektroterapie, při které elektrickým proudem vyvoláme depolarizaci nervu nebo přímo svalového vlákna s následnou svalovou kontrakcí- při poškození periferního nervu pro udržení trofiky svalů a zabránění fibroblastické přestavbě než dojde k reinervaci poškozeného nervu",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:2",
        prompt: "Vysvetli pojem: Elektrodiagnostika",
        answer: "Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů- využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:3",
        prompt: "Vysvetli pojem: Elektrostimulace",
        answer: "Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje- NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:4",
        prompt: "Vysvetli pojem: Elektrogymnastika",
        answer: "Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2- kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:5",
        prompt: "Co je dulezite k tematu: Cíl elektrostimulace?",
        answer: "zachovat/obnovit svalovou funkci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:6",
        prompt: "Co je dulezite k tematu: Cíl elektrostimulace?",
        answer: "zabránit/zmírnit svalovou atrofii",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:7",
        prompt: "Co je dulezite k tematu: Cíl elektrostimulace?",
        answer: "zlepšit svalovou sílu",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:8",
        prompt: "Co je dulezite k tematu: Cíl elektrostimulace?",
        answer: "podpořit motorickou reedukaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:9",
        prompt: "Vysvetli pojem: Elektrostimualce inervovaného svalu",
        answer: "Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný- elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce- používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např.",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:10",
        prompt: "Vysvetli pojem: foot drop",
        answer: "foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:11",
        prompt: "Co je dulezite k tematu: Indikace?",
        answer: "svalová slabost",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:12",
        prompt: "Co je dulezite k tematu: Indikace?",
        answer: "svalová atrofie při imobilizaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:13",
        prompt: "Co je dulezite k tematu: Indikace?",
        answer: "poruchy svalové aktivace",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:14",
        prompt: "Vysvetli pojem: Elektrogymnastika denervovaného svalu",
        answer: "Elektrogymnastika denervovaného svalu- jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu!",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:15",
        prompt: "Co je dulezite k tematu: Indikace?",
        answer: "- dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:16",
        prompt: "Co je dulezite k tematu: Indikace?",
        answer: "poškození periferního nervu",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:17",
        prompt: "Co je dulezite k tematu: Indikace?",
        answer: "periferní paréza",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:18",
        prompt: "Co je dulezite k tematu: Indikace?",
        answer: "léze nervového kořene",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:19",
        prompt: "Co je dulezite k tematu: Kontraindikace elektrostimulace?",
        answer: "kardiostimulátor",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:20",
        prompt: "Co je dulezite k tematu: Kontraindikace elektrostimulace?",
        answer: "aplikace přes srdce",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:11:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: elektrostimulace je metoda elektroterapie, při které elektrickým proudem vyvoláme depolarizaci nervu nebo přímo svalového vlákna s následnou svalovou kontrakcí- při poškození periferního nervu pro udržení trofiky svalů a zabránění fibroblastické přestavbě než dojde k reinervaci poškozeného nervu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: elektrostimulace je metoda elektroterapie, při které elektrickým proudem vyvoláme depolarizaci nervu nebo přímo svalového vlákna s následnou svalovou kontrakcí- při poškození periferního nervu pro udržení trofiky svalů a zabránění fibroblastické přestavbě než dojde k reinervaci poškozeného nervu",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů- využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů- využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje- NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje- NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2- kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2- kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "zachovat/obnovit svalovou funkci",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "zachovat/obnovit svalovou funkci",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "zabránit/zmírnit svalovou atrofii",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "zabránit/zmírnit svalovou atrofii",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "podpořit motorickou reedukaci",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "podpořit motorickou reedukaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný- elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce- používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např.",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný- elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce- používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např.",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "svalová atrofie při imobilizaci",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "svalová atrofie při imobilizaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrogymnastika denervovaného svalu- jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu!",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrogymnastika denervovaného svalu- jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu!",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "- dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "- dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)",
      },
    ],
  },
  "ix-fyzikalni-terapie:12": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: terapeutické využívání vody s využitím jejích termických, mechanických a chemických vlastností k ovlivnění organizmu - vhodné pro všechny věkové kategorie pro udržení zdraví a prevenci nemoci- benefit: zvýšení kondice a výkonnosti, nespecifická odolnost - hranice celkové 42 °C, částečné 46°C",
        ]
      },
      {
        title: "Dělení",
        points: [
          "zevní",
          "vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
          "prosté - použitá pouze voda, neupravená, bez přísad",
          "s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
          "klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
          "voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
          "částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
          "celkové - vany, sprchy, bazény, chodníky",
          "jednoduché - samostatná jedna procedura",
          "složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
          "střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
          "skotské střiky - střídání teplých a studených proudů vody pod tlakem",
          "hypotermní - pod 35 °C",
          "izotermní 35-37°C",
          "hypertermní 38-42°C- 42°C bod tolerance pro celkovou vodní koupel (nevhodná pro cvičení)- 46°C bod tolerance pro kůži pro částečné koupele (od kolen/loktů distálně)",
        ]
      },
      {
        title: "Fyzikální energie vodních procedur jsou",
        points: [
          "energie tepla (chlad, teplo, střídání podmětů)",
          "mechanická energie (tlak, vztlak, trakce)",
          "kinetická energie (pasivně, aktivně, odporově)",
          "ve vodě odpadává vliv gravitace",
          "Mechanizmus účinku - působení vody: teplotou, hydrostatickým tlakem, vztlakem, odporem vody (CHAT)",
          "vztlak - snižuje efektivní hmotnost těla, odlehčuje klouby, páteř (Archimedův zákon)- dle mineralizace je pacient různě nadlehčovaný - způsobuje změnu propriorecepce, umožní pohyb, který je na suchu nemožný, mizí strach z pádů, ovlivní ANS (mírné krátké zrychlení TF a zvýšení TK, prohloubí se dýchání)",
          "hydrostatický tlak - tlak na povrch těla, podporuje žilní návrat, zlepšuje cirkulaci, působí na periferní otok, ovlivňuje propriorecepci - zužuje obvod hrudníku, komprimuje obvod břicha, stoupá nitrobřišní tlak, zvyšuje se funkce ledvin",
          "odpor vody - posilování svalů, čím rychlejší pohyb, tím větší odpor",
          "teplota - teplá (snížuje sv. tonus, podpora relaxace, snížení bolesti, zvyšuje protažizelnost), chladná (působí stimulačně, snižuje bolest, vazokonstrikce)",
          "Hydrokinezioterapie = léčebné cvičení ve vodě- kondice, posílení, dechové cvičení - skupinové - individuální - Hubbardův tank, malé bazénky, bazény, bazénový chodník - plavání - rekreační, léčebné, řízené",
          "Indikace- chronické onemocnění vaziva, kloubů- neurologické onemocnění - parézy, poruchy rovnováhy, RS, Parkinson, porucha chůze- po operacích TEP, rekonstruuje vazů - m. Bechtěrev - spasmy- parézy- gynekologie- obezita",
          "Kontraindikace - kardinální dekompenzace, maligní hypertenze, St. p. 6 měsíců po IM - akutní TBC, infekční choroby, akutní stádia psychózy, alergie na chlor, atd., dekubity- přenosné kožní infekce- inkontinence - dekompenzovaná epilepsie - závažné poruchy vědomí - gravidita- kachexie",
          "Vodoléčba x hydrokinezioterapievodoléčba: účinek samotné vody (teplota, vztlak, hydrostatický tlak, mechanické působení)hydrokinezioterapie: aktivní cvičení ve vodě, při kterém využíváme vlastnosti vody",
          "Pomůcka:",
          "VODA 4 VHOT (vztlak, hydrostatický tlak, odpor, teplota)",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:12:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: terapeutické využívání vody s využitím jejích termických, mechanických a chemických vlastností k ovlivnění organizmu - vhodné pro všechny věkové kategorie pro udržení zdraví a prevenci nemoci- benefit: zvýšení kondice a výkonnosti, nespecifická odolnost - hranice celkové 42 °C, částečné 46°C",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:2",
        prompt: "Co je dulezite k tematu: Dělení?",
        answer: "zevní",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:3",
        prompt: "Vysvetli pojem: vnitřní",
        answer: "vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:4",
        prompt: "Vysvetli pojem: prosté",
        answer: "prosté - použitá pouze voda, neupravená, bez přísad",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:5",
        prompt: "Vysvetli pojem: s přírodní minerální vodou",
        answer: "s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:6",
        prompt: "Co je dulezite k tematu: Dělení?",
        answer: "klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:7",
        prompt: "Vysvetli pojem: voda s uměle přidanými přísady (organické",
        answer: "voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:8",
        prompt: "Vysvetli pojem: částečné",
        answer: "částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:9",
        prompt: "Vysvetli pojem: celkové",
        answer: "celkové - vany, sprchy, bazény, chodníky",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:10",
        prompt: "Vysvetli pojem: jednoduché",
        answer: "jednoduché - samostatná jedna procedura",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:11",
        prompt: "Vysvetli pojem: složité",
        answer: "složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:12",
        prompt: "Vysvetli pojem: střídavé",
        answer: "střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:13",
        prompt: "Vysvetli pojem: skotské střiky",
        answer: "skotské střiky - střídání teplých a studených proudů vody pod tlakem",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:14",
        prompt: "Vysvetli pojem: hypotermní",
        answer: "hypotermní - pod 35 °C",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:15",
        prompt: "Vysvetli pojem: izotermní 35",
        answer: "izotermní 35-37°C",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:16",
        prompt: "Vysvetli pojem: hypertermní 38",
        answer: "hypertermní 38-42°C- 42°C bod tolerance pro celkovou vodní koupel (nevhodná pro cvičení)- 46°C bod tolerance pro kůži pro částečné koupele (od kolen/loktů distálně)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:17",
        prompt: "Co je dulezite k tematu: Fyzikální energie vodních procedur jsou?",
        answer: "energie tepla (chlad, teplo, střídání podmětů)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:18",
        prompt: "Co je dulezite k tematu: Fyzikální energie vodních procedur jsou?",
        answer: "mechanická energie (tlak, vztlak, trakce)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:19",
        prompt: "Co je dulezite k tematu: Fyzikální energie vodních procedur jsou?",
        answer: "kinetická energie (pasivně, aktivně, odporově)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:20",
        prompt: "Co je dulezite k tematu: Fyzikální energie vodních procedur jsou?",
        answer: "ve vodě odpadává vliv gravitace",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:12:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: terapeutické využívání vody s využitím jejích termických, mechanických a chemických vlastností k ovlivnění organizmu - vhodné pro všechny věkové kategorie pro udržení zdraví a prevenci nemoci- benefit: zvýšení kondice a výkonnosti, nespecifická odolnost - hranice celkové 42 °C, částečné 46°C",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: terapeutické využívání vody s využitím jejích termických, mechanických a chemických vlastností k ovlivnění organizmu - vhodné pro všechny věkové kategorie pro udržení zdraví a prevenci nemoci- benefit: zvýšení kondice a výkonnosti, nespecifická odolnost - hranice celkové 42 °C, částečné 46°C",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "prosté - použitá pouze voda, neupravená, bez přísad",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "prosté - použitá pouze voda, neupravená, bez přísad",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "celkové - vany, sprchy, bazény, chodníky",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "celkové - vany, sprchy, bazény, chodníky",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "jednoduché - samostatná jedna procedura",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "jednoduché - samostatná jedna procedura",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "skotské střiky - střídání teplých a studených proudů vody pod tlakem",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "skotské střiky - střídání teplých a studených proudů vody pod tlakem",
      },
    ],
  },
  "ix-fyzikalni-terapie:13": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: je fyzikální terapie, která vzniká průchodem el.",
          "proudu o nízké frekvenci (10-70 Hz) vodičem nebo cívkou- protéka-li cívkou pulzní proud, vzniká pulzní magnetické pole - distanční terapie, která využívá k terapii biologické účinky elektromagnetického pole - v rehabilitaci se využívá nízkofrekvenční pulzní magnetické pole - magnetická indukce: je fyzikální veličiny, popisuje sílu a směr magnetického pole, jednotka Tesla, magnetické pole vzniká kolem každého vodiče, kterým teče proud- frekvence: jak často se impulzy opakují (Hz)",
          "Dělení- pulzní magnetické pole se ovlivňuje indukcí a frekvencí a jejich různou kombinací- frekvence - jak rychle se pouští proud (kolikrát za sekundu) - indukce - jak silné je magnetické pole",
          "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé)",
          "Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek- nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
          "Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
          "Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
        ]
      },
      {
        title: "Účinky",
        points: [
          "analgetické",
          "myorelaxační a myotonizační",
          "vazodilatační a tím podpora výživy všech tkání",
          "trofický - podpora metabolismu, reparace tkání, podpora hojení",
          "imunostimulační a protizánětlivý",
          "vagotropní - pokles TF, TK, periferní vazodilatace",
          "sedativní",
          "snižuje srážlivost (neaplikovat u warfarinizovaných)",
          "osteogenní - podpora osteogeneze, proto se používají při opožděném hojení/paklouby, ovlivňuje výměnu vápníku mezi buňkami a okolím",
          "Vlastnosti magnetoterapie - magnetická indukce - ovlivňuje membránové receptory, nemá tepelný účinek - spíše trofotropní - myorelaxace, spamolyza, analgezie- frekvence: do 10 Hz protizánětlivá, 25-50 Hz trofotropní, 70 Hz revaskularizace - magnetické pole prochází přes oděv i sádrovou fixaci - magnetická pole: statická (stálá)/dynamická - střídavá/pulzní)",
        ]
      },
      {
        title: "Dělení magnetoterapie",
        points: [
          "léčba statickými magnetickými poli (na akupunkturní body)",
          "léčba nízkofrekvenčními magnetickými poli",
          "Aplikátory (cívka vytvářející pulzní magnetické pole) - solenoid (cívka), deskové (plošné), prstencové - 10 - 40 min., alespoň 10x, jednotka mT",
          "Indikace- porucha trofiky - bolestivé stavy známé etiologie - fraktury- myotonizace/relaxace- artrózy- hojení tkání - aseptické záněty",
          "Kontraindikace (i personálu a každé osoby v prostoru magnetoterapie) - gravidita - celé období - pace-maker- kardiostimulátor, ICD - tumory- krvácivé stavy - nebezpečí krvácení do vnitřních orgánů (zvýší krvácení při menstruaci) - hyperfunkce/dysfunkce endokrinních žláz- myastenia gravis- akutní onemocnění - TBC, těžké virové, bakteriální, mykotické onemocnění - těžký stupeň ICHS, ICHDK- záchvatovité onemocnění (psychiatrické/neurologické)",
          "Vedlejší účinky: - zklidnění až usínání - bolest hlavy, závratě během procedury, kolapsové stavy, nauzea/průjem po ukončení - vyvolání epileptického záchvatu",
          "Zásady provozu- manipulace pouze s vypnutým přístrojem - pozor na mobilní telefon, kovové předměty citlivé na magnetické pole- pohyb 1 m od přístroje, když je vchodu a omezit dobu u přístroje (personál)",
          "Předpis:",
          "Jméno, RČ, dg. číslem i slovem, místo aplikace, druh aplikátoru, intenzita pole mT, frekvence, pulzů, trvání, frekvence procedury, kolikrát a kontrola.",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:13:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: je fyzikální terapie, která vzniká průchodem el.",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:2",
        prompt: "Vysvetli pojem: proudu o nízké frekvenci (10",
        answer: "proudu o nízké frekvenci (10-70 Hz) vodičem nebo cívkou- protéka-li cívkou pulzní proud, vzniká pulzní magnetické pole - distanční terapie, která využívá k terapii biologické účinky elektromagnetického pole - v rehabilitaci se využívá nízkofrekvenční pulzní magnetické pole - magnetická indukce: je fyzikální veličiny, popisuje sílu a směr magnetického pole, jednotka Tesla, magnetické pole vzniká kolem každého vodiče, kterým teče proud- frekvence: jak často se impulzy opakují (Hz)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:3",
        prompt: "Vysvetli pojem: Dělení",
        answer: "Dělení- pulzní magnetické pole se ovlivňuje indukcí a frekvencí a jejich různou kombinací- frekvence - jak rychle se pouští proud (kolikrát za sekundu) - indukce - jak silné je magnetické pole",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:4",
        prompt: "Vysvetli pojem: Magnetická pole",
        answer: "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:5",
        prompt: "Vysvetli pojem: Nízkofrekvenční pulzní magnetické pole 100",
        answer: "Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek- nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:6",
        prompt: "Vysvetli pojem: Vysokofrekvenční elektromagnetické pole",
        answer: "Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:7",
        prompt: "Vysvetli pojem: Vysokointenzivní pulzní magnetické pole",
        answer: "Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:8",
        prompt: "Co je dulezite k tematu: Účinky?",
        answer: "analgetické",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:9",
        prompt: "Co je dulezite k tematu: Účinky?",
        answer: "myorelaxační a myotonizační",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:10",
        prompt: "Co je dulezite k tematu: Účinky?",
        answer: "vazodilatační a tím podpora výživy všech tkání",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:11",
        prompt: "Vysvetli pojem: trofický",
        answer: "trofický - podpora metabolismu, reparace tkání, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:12",
        prompt: "Co je dulezite k tematu: Účinky?",
        answer: "imunostimulační a protizánětlivý",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:13",
        prompt: "Vysvetli pojem: vagotropní",
        answer: "vagotropní - pokles TF, TK, periferní vazodilatace",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:14",
        prompt: "Co je dulezite k tematu: Účinky?",
        answer: "sedativní",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:15",
        prompt: "Co je dulezite k tematu: Účinky?",
        answer: "snižuje srážlivost (neaplikovat u warfarinizovaných)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:16",
        prompt: "Vysvetli pojem: osteogenní",
        answer: "osteogenní - podpora osteogeneze, proto se používají při opožděném hojení/paklouby, ovlivňuje výměnu vápníku mezi buňkami a okolím",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:17",
        prompt: "Vysvetli pojem: Vlastnosti magnetoterapie",
        answer: "Vlastnosti magnetoterapie - magnetická indukce - ovlivňuje membránové receptory, nemá tepelný účinek - spíše trofotropní - myorelaxace, spamolyza, analgezie- frekvence: do 10 Hz protizánětlivá, 25-50 Hz trofotropní, 70 Hz revaskularizace - magnetické pole prochází přes oděv i sádrovou fixaci - magnetická pole: statická (stálá)/dynamická - střídavá/pulzní)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:18",
        prompt: "Co je dulezite k tematu: Dělení magnetoterapie?",
        answer: "léčba statickými magnetickými poli (na akupunkturní body)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:19",
        prompt: "Co je dulezite k tematu: Dělení magnetoterapie?",
        answer: "léčba nízkofrekvenčními magnetickými poli",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:20",
        prompt: "Vysvetli pojem: Aplikátory (cívka vytvářející pulzní magnetické pole)",
        answer: "Aplikátory (cívka vytvářející pulzní magnetické pole) - solenoid (cívka), deskové (plošné), prstencové - 10 - 40 min., alespoň 10x, jednotka mT",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:13:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: je fyzikální terapie, která vzniká průchodem el.",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: je fyzikální terapie, která vzniká průchodem el.",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "proudu o nízké frekvenci (10-70 Hz) vodičem nebo cívkou- protéka-li cívkou pulzní proud, vzniká pulzní magnetické pole - distanční terapie, která využívá k terapii biologické účinky elektromagnetického pole - v rehabilitaci se využívá nízkofrekvenční pulzní magnetické pole - magnetická indukce: je fyzikální veličiny, popisuje sílu a směr magnetického pole, jednotka Tesla, magnetické pole vzniká kolem každého vodiče, kterým teče proud- frekvence: jak často se impulzy opakují (Hz)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "proudu o nízké frekvenci (10-70 Hz) vodičem nebo cívkou- protéka-li cívkou pulzní proud, vzniká pulzní magnetické pole - distanční terapie, která využívá k terapii biologické účinky elektromagnetického pole - v rehabilitaci se využívá nízkofrekvenční pulzní magnetické pole - magnetická indukce: je fyzikální veličiny, popisuje sílu a směr magnetického pole, jednotka Tesla, magnetické pole vzniká kolem každého vodiče, kterým teče proud- frekvence: jak často se impulzy opakují (Hz)",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Dělení- pulzní magnetické pole se ovlivňuje indukcí a frekvencí a jejich různou kombinací- frekvence - jak rychle se pouští proud (kolikrát za sekundu) - indukce - jak silné je magnetické pole",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Dělení- pulzní magnetické pole se ovlivňuje indukcí a frekvencí a jejich různou kombinací- frekvence - jak rychle se pouští proud (kolikrát za sekundu) - indukce - jak silné je magnetické pole",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé)",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek- nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek- nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "myorelaxační a myotonizační",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "myorelaxační a myotonizační",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "vazodilatační a tím podpora výživy všech tkání",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "vazodilatační a tím podpora výživy všech tkání",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "trofický - podpora metabolismu, reparace tkání, podpora hojení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "trofický - podpora metabolismu, reparace tkání, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "imunostimulační a protizánětlivý",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "imunostimulační a protizánětlivý",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "vagotropní - pokles TF, TK, periferní vazodilatace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "vagotropní - pokles TF, TK, periferní vazodilatace",
      },
    ],
  },
  "ix-fyzikalni-terapie:14": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: je léčebné využití mechanické energie k ovlivnění pohybového aparátu, měkkých tkáních a některých poruch cirkulace. - využívá se se pohyb, tlak, tah, komprese, podtlak, mechanická vibrace",
          "Cíl- obnovení nebo zvýšení ROM - snížení bolesti - ovlivnění svalového tonu - zlepšení cirkulace - redukce otoku",
          "Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb) - přístroj provádí opakovaný pasivní pohyb v předem nastaveném rozsahu, pacient pohyb aktivně nevykonává - doplňková terapie k aktivní rehabilitaci - nastavení: ROM (postupně se zvětšuje), rychlost, počet cyklů, délka terapie - účinky: prevence kontraktury, udržení/zvětšení ROM, snížení bolesti, usnadnění časné mobilizace, redukce pooperační ztuhlosti- indikace: TEP koleno, kyčel, rameno, artroskopie, imobilizace vedoucí k omezení ROM - KI: nestabilní osteosyntéza, čerstvá fraktura, akutní infekce v kloubu, nestabilita v kloubu",
          "Vakuum-kompresivní terapie- přístroj založený na střídání přetlaku a podtlaku v uzavřeném prostoru - KI: akutní trombozy, tromboflebitidy, rozsáhlé varixy, rozsáhlé gangrény (nebezpečí toxemie), aneurysma, akutně vzniklé rány, lokální purulentní stavy, edémy kardinálního původu - indikace: porucha prokrvení končetiny (organické i funkční), algodystrofický syndrom, chronické otoky, lymfedémy, trofické poruchy kůže, posttraumatické stavy - doba aplikace 25 min., pozitivní step 5 min.",
          "do 45-60 min., Sudek 12 minut - prodlužuje se délka aplikace, tlaky se nezvedají - limitem terapie je subjektivní vnímání pacienta a změna barvy končetiny, komprese končetiny",
          "Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese- končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně- účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
          "Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
          "Trakce - pasivní procedura, neměla by bolet - mechanická síla působí tah v ose končetiny nebo páteře či kořenového kloubu - dle zdroje síly: přístrojová/manuální, dle průběhu: kontinuální/přerušované - mechanismus účinku: při dostatečné relaxaci okolního svalstva dochází k oddálení obratlů/kloubních ploch, zvětšení rozměru foramen intervertebrale, odlehčení podrážděných kloubních ploch, snížení tlaku na ncl.",
          "pulposus v disku, protažení kloubních pouzder a okolních ligament - základním předpokladem je negativní výsledek ručního trakčního testu (trakce přinese úlevu) - KI: pozitivní trakční test (zhoršení potíží při/po trakčním testu), hypertenze II a III dle WHO, neurovegetativní dystonie, sklon k ortostatickým kolapsům, nepříznivý účinek při předchozí trakci- provedení: po trakci pacient musí zůstat ležet stejně dlouho jako trvala trakce, vhodné před trakcí aplikovat relaxační FT (UZ, solux, parafin), trakční poloha: Fowler pozice kyčle a kolena ve flexi 90 st./polohovací stolek (škubnutí, špatně se dozoruje síla), zátěž 5-60 kg, trvání 10-20 minut, frekvence 2-3 týdně chronický, 1x denně akutně",
          "trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
          "periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
          "Vibrační terapie- mechanické vibrace ovlivňují svalový tonus, propriorecepci, cirkulaci, vnímání bolesti",
          "Mechanické masážní přístroje - relaxační, cirkulační, analgetický účinek - využívají tlaku, vibrace, mechanické hnětení",
          "Robotická/mechanicky asistovaná terapie- podporuje motorické učení, umožňuje vysoký počet opakování pohybu - např.: mechanicky asistovaný nácvik chůze, robotická rehabilitace HK",
          "Vždy respektovat typ výkonu a pokyny operatéra.",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:14:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: je léčebné využití mechanické energie k ovlivnění pohybového aparátu, měkkých tkáních a některých poruch cirkulace. - využívá se se pohyb, tlak, tah, komprese, podtlak, mechanická vibrace",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:2",
        prompt: "Co je dulezite k tematu: Prehled?",
        answer: "Cíl- obnovení nebo zvýšení ROM - snížení bolesti - ovlivnění svalového tonu - zlepšení cirkulace - redukce otoku",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:3",
        prompt: "Vysvetli pojem: Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb)",
        answer: "Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb) - přístroj provádí opakovaný pasivní pohyb v předem nastaveném rozsahu, pacient pohyb aktivně nevykonává - doplňková terapie k aktivní rehabilitaci - nastavení: ROM (postupně se zvětšuje), rychlost, počet cyklů, délka terapie - účinky: prevence kontraktury, udržení/zvětšení ROM, snížení bolesti, usnadnění časné mobilizace, redukce pooperační ztuhlosti- indikace: TEP koleno, kyčel, rameno, artroskopie, imobilizace vedoucí k omezení ROM - KI: nestabilní osteosyntéza, čerstvá fraktura, akutní infekce v kloubu, nestabilita v kloubu",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:4",
        prompt: "Vysvetli pojem: Vakuum",
        answer: "Vakuum-kompresivní terapie- přístroj založený na střídání přetlaku a podtlaku v uzavřeném prostoru - KI: akutní trombozy, tromboflebitidy, rozsáhlé varixy, rozsáhlé gangrény (nebezpečí toxemie), aneurysma, akutně vzniklé rány, lokální purulentní stavy, edémy kardinálního původu - indikace: porucha prokrvení končetiny (organické i funkční), algodystrofický syndrom, chronické otoky, lymfedémy, trofické poruchy kůže, posttraumatické stavy - doba aplikace 25 min., pozitivní step 5 min.",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:5",
        prompt: "Vysvetli pojem: do 45",
        answer: "do 45-60 min., Sudek 12 minut - prodlužuje se délka aplikace, tlaky se nezvedají - limitem terapie je subjektivní vnímání pacienta a změna barvy končetiny, komprese končetiny",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:6",
        prompt: "Vysvetli pojem: Přetlak",
        answer: "Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese- končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně- účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:7",
        prompt: "Vysvetli pojem: Podtlak",
        answer: "Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:8",
        prompt: "Vysvetli pojem: Trakce",
        answer: "Trakce - pasivní procedura, neměla by bolet - mechanická síla působí tah v ose končetiny nebo páteře či kořenového kloubu - dle zdroje síly: přístrojová/manuální, dle průběhu: kontinuální/přerušované - mechanismus účinku: při dostatečné relaxaci okolního svalstva dochází k oddálení obratlů/kloubních ploch, zvětšení rozměru foramen intervertebrale, odlehčení podrážděných kloubních ploch, snížení tlaku na ncl.",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:9",
        prompt: "Vysvetli pojem: pulposus v disku, protažení kloubních pouzder a okolních ligament",
        answer: "pulposus v disku, protažení kloubních pouzder a okolních ligament - základním předpokladem je negativní výsledek ručního trakčního testu (trakce přinese úlevu) - KI: pozitivní trakční test (zhoršení potíží při/po trakčním testu), hypertenze II a III dle WHO, neurovegetativní dystonie, sklon k ortostatickým kolapsům, nepříznivý účinek při předchozí trakci- provedení: po trakci pacient musí zůstat ležet stejně dlouho jako trvala trakce, vhodné před trakcí aplikovat relaxační FT (UZ, solux, parafin), trakční poloha: Fowler pozice kyčle a kolena ve flexi 90 st./polohovací stolek (škubnutí, špatně se dozoruje síla), zátěž 5-60 kg, trvání 10-20 minut, frekvence 2-3 týdně chronický, 1x denně akutně",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:10",
        prompt: "Vysvetli pojem: trakce páteře",
        answer: "trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:11",
        prompt: "Vysvetli pojem: periferních kloubů",
        answer: "periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:12",
        prompt: "Vysvetli pojem: Vibrační terapie",
        answer: "Vibrační terapie- mechanické vibrace ovlivňují svalový tonus, propriorecepci, cirkulaci, vnímání bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:13",
        prompt: "Vysvetli pojem: Mechanické masážní přístroje",
        answer: "Mechanické masážní přístroje - relaxační, cirkulační, analgetický účinek - využívají tlaku, vibrace, mechanické hnětení",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:14",
        prompt: "Vysvetli pojem: Robotická/mechanicky asistovaná terapie",
        answer: "Robotická/mechanicky asistovaná terapie- podporuje motorické učení, umožňuje vysoký počet opakování pohybu - např.: mechanicky asistovaný nácvik chůze, robotická rehabilitace HK",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:15",
        prompt: "Co je dulezite k tematu: Prehled?",
        answer: "Vždy respektovat typ výkonu a pokyny operatéra.",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:14:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: je léčebné využití mechanické energie k ovlivnění pohybového aparátu, měkkých tkáních a některých poruch cirkulace. - využívá se se pohyb, tlak, tah, komprese, podtlak, mechanická vibrace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: je léčebné využití mechanické energie k ovlivnění pohybového aparátu, měkkých tkáních a některých poruch cirkulace. - využívá se se pohyb, tlak, tah, komprese, podtlak, mechanická vibrace",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Cíl- obnovení nebo zvýšení ROM - snížení bolesti - ovlivnění svalového tonu - zlepšení cirkulace - redukce otoku",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Cíl- obnovení nebo zvýšení ROM - snížení bolesti - ovlivnění svalového tonu - zlepšení cirkulace - redukce otoku",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb) - přístroj provádí opakovaný pasivní pohyb v předem nastaveném rozsahu, pacient pohyb aktivně nevykonává - doplňková terapie k aktivní rehabilitaci - nastavení: ROM (postupně se zvětšuje), rychlost, počet cyklů, délka terapie - účinky: prevence kontraktury, udržení/zvětšení ROM, snížení bolesti, usnadnění časné mobilizace, redukce pooperační ztuhlosti- indikace: TEP koleno, kyčel, rameno, artroskopie, imobilizace vedoucí k omezení ROM - KI: nestabilní osteosyntéza, čerstvá fraktura, akutní infekce v kloubu, nestabilita v kloubu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb) - přístroj provádí opakovaný pasivní pohyb v předem nastaveném rozsahu, pacient pohyb aktivně nevykonává - doplňková terapie k aktivní rehabilitaci - nastavení: ROM (postupně se zvětšuje), rychlost, počet cyklů, délka terapie - účinky: prevence kontraktury, udržení/zvětšení ROM, snížení bolesti, usnadnění časné mobilizace, redukce pooperační ztuhlosti- indikace: TEP koleno, kyčel, rameno, artroskopie, imobilizace vedoucí k omezení ROM - KI: nestabilní osteosyntéza, čerstvá fraktura, akutní infekce v kloubu, nestabilita v kloubu",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Vakuum-kompresivní terapie- přístroj založený na střídání přetlaku a podtlaku v uzavřeném prostoru - KI: akutní trombozy, tromboflebitidy, rozsáhlé varixy, rozsáhlé gangrény (nebezpečí toxemie), aneurysma, akutně vzniklé rány, lokální purulentní stavy, edémy kardinálního původu - indikace: porucha prokrvení končetiny (organické i funkční), algodystrofický syndrom, chronické otoky, lymfedémy, trofické poruchy kůže, posttraumatické stavy - doba aplikace 25 min., pozitivní step 5 min.",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Vakuum-kompresivní terapie- přístroj založený na střídání přetlaku a podtlaku v uzavřeném prostoru - KI: akutní trombozy, tromboflebitidy, rozsáhlé varixy, rozsáhlé gangrény (nebezpečí toxemie), aneurysma, akutně vzniklé rány, lokální purulentní stavy, edémy kardinálního původu - indikace: porucha prokrvení končetiny (organické i funkční), algodystrofický syndrom, chronické otoky, lymfedémy, trofické poruchy kůže, posttraumatické stavy - doba aplikace 25 min., pozitivní step 5 min.",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "do 45-60 min., Sudek 12 minut - prodlužuje se délka aplikace, tlaky se nezvedají - limitem terapie je subjektivní vnímání pacienta a změna barvy končetiny, komprese končetiny",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "do 45-60 min., Sudek 12 minut - prodlužuje se délka aplikace, tlaky se nezvedají - limitem terapie je subjektivní vnímání pacienta a změna barvy končetiny, komprese končetiny",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese- končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně- účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese- končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně- účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Trakce - pasivní procedura, neměla by bolet - mechanická síla působí tah v ose končetiny nebo páteře či kořenového kloubu - dle zdroje síly: přístrojová/manuální, dle průběhu: kontinuální/přerušované - mechanismus účinku: při dostatečné relaxaci okolního svalstva dochází k oddálení obratlů/kloubních ploch, zvětšení rozměru foramen intervertebrale, odlehčení podrážděných kloubních ploch, snížení tlaku na ncl.",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Trakce - pasivní procedura, neměla by bolet - mechanická síla působí tah v ose končetiny nebo páteře či kořenového kloubu - dle zdroje síly: přístrojová/manuální, dle průběhu: kontinuální/přerušované - mechanismus účinku: při dostatečné relaxaci okolního svalstva dochází k oddálení obratlů/kloubních ploch, zvětšení rozměru foramen intervertebrale, odlehčení podrážděných kloubních ploch, snížení tlaku na ncl.",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "pulposus v disku, protažení kloubních pouzder a okolních ligament - základním předpokladem je negativní výsledek ručního trakčního testu (trakce přinese úlevu) - KI: pozitivní trakční test (zhoršení potíží při/po trakčním testu), hypertenze II a III dle WHO, neurovegetativní dystonie, sklon k ortostatickým kolapsům, nepříznivý účinek při předchozí trakci- provedení: po trakci pacient musí zůstat ležet stejně dlouho jako trvala trakce, vhodné před trakcí aplikovat relaxační FT (UZ, solux, parafin), trakční poloha: Fowler pozice kyčle a kolena ve flexi 90 st./polohovací stolek (škubnutí, špatně se dozoruje síla), zátěž 5-60 kg, trvání 10-20 minut, frekvence 2-3 týdně chronický, 1x denně akutně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "pulposus v disku, protažení kloubních pouzder a okolních ligament - základním předpokladem je negativní výsledek ručního trakčního testu (trakce přinese úlevu) - KI: pozitivní trakční test (zhoršení potíží při/po trakčním testu), hypertenze II a III dle WHO, neurovegetativní dystonie, sklon k ortostatickým kolapsům, nepříznivý účinek při předchozí trakci- provedení: po trakci pacient musí zůstat ležet stejně dlouho jako trvala trakce, vhodné před trakcí aplikovat relaxační FT (UZ, solux, parafin), trakční poloha: Fowler pozice kyčle a kolena ve flexi 90 st./polohovací stolek (škubnutí, špatně se dozoruje síla), zátěž 5-60 kg, trvání 10-20 minut, frekvence 2-3 týdně chronický, 1x denně akutně",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Vibrační terapie- mechanické vibrace ovlivňují svalový tonus, propriorecepci, cirkulaci, vnímání bolesti",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Vibrační terapie- mechanické vibrace ovlivňují svalový tonus, propriorecepci, cirkulaci, vnímání bolesti",
      },
    ],
  },
  "ix-fyzikalni-terapie:15": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Definice: soubor mechanizmů, kterými organizmus udržuje stálou tělesnou teplotu navzdory změnám okolního prostředí - centrální regulační orgán - hypotalamus - termogeneze - tvorba tepla - termolýza - výdej tepla",
          "Tělesná teplota: výslednice mezi tvorbou a ztrátou",
          "Teplo: kinetická energie kmitajících molekul",
          "Řízení termoregulace - regulace autonomním nervovým systémem",
          "Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
          "Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
          "Termogeneze - teplo vniká metabolickou aktivitou- termogeneze obligátní (bazální metabolismus)/fakultativní (sv. třes, zvýšený metabolismus) - zdroje: svalová práce, svalový třes, metabolismus bazálních orgánů, tukové tkáně - při chladu: stresová termogeneze (svalová kontrakce vede k tvorbě tepla)/netřesová termogeneze(novorozenci, hnědá tuková tkáň)",
          "Termolýza - ztáta tepla 4 mechanizmy",
          "kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
          "konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
          "radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
          "evaporace - odpařování",
          "Reakce organizmu na chlad - vazokonstrikce, snížení průtoku krve kůží, omezení tepelných ztrát- třes, zvýšení svalový tonus, metabolická aktivita, behaviorální reakce - vyhledání teplo",
          "Reakce organizmu na teplo- vazodilatace, zvýšení průtoku krve kůží, zvýšení výdaje tepla, pocení, evaporace",
          "Hyperémie - zvýšení prokrvení tkáně",
          "aktivní hyperémie - vazodilatace arteriol a zvýšení průtoku krve vede ke zvýšení přísunu O2, živin, odvodu metabolitů, podpoře regenerace, snížení tonu - teplo využíváme před mobilizací, protahováním, cvičením, manuální terapií",
          "reaktivní hyperémie - vzniká po krátkodobém přerušení nebo výrazným omezení průtoku krve",
          "pasivní hyperémie - městnání - venózní kongesce, není žádoucí",
          "Terapeutický význam hyperémie - zvýšení metabolismu - více krve (trofický) - odvod metabolitů - zvýšený průtok (resorbční) - reparace - lepší cirkulace- analgezie (analgetický) - snížení svalového tonu (spasmolytický)",
        ]
      },
      {
        title: "Typy hyperémie",
        points: [
          "tepelná - parafín, peloid, teplé koupele, infračervené záření",
          "mechanickými metodami - masáž",
          "pohybem - aktivní cvičení, svalová práce",
          "Vhodná hyperémie: chronické bolestivé stavy, svalová ztuhlost, chronické degenerativní změny, podpora hojení, příprava tkání před cvičením",
          "Nevhodná hyperémie: otok, překrvení, bolest, zánětliví reakce",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:15:flashcard:1",
        prompt: "Vysvetli pojem: Definice",
        answer: "Definice: soubor mechanizmů, kterými organizmus udržuje stálou tělesnou teplotu navzdory změnám okolního prostředí - centrální regulační orgán - hypotalamus - termogeneze - tvorba tepla - termolýza - výdej tepla",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:2",
        prompt: "Vysvetli pojem: Tělesná teplota",
        answer: "Tělesná teplota: výslednice mezi tvorbou a ztrátou",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:3",
        prompt: "Vysvetli pojem: Teplo",
        answer: "Teplo: kinetická energie kmitajících molekul",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:4",
        prompt: "Vysvetli pojem: Řízení termoregulace",
        answer: "Řízení termoregulace - regulace autonomním nervovým systémem",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:5",
        prompt: "Vysvetli pojem: Termoreceptory",
        answer: "Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:6",
        prompt: "Vysvetli pojem: Hypotalamus",
        answer: "Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:7",
        prompt: "Vysvetli pojem: Termogeneze",
        answer: "Termogeneze - teplo vniká metabolickou aktivitou- termogeneze obligátní (bazální metabolismus)/fakultativní (sv. třes, zvýšený metabolismus) - zdroje: svalová práce, svalový třes, metabolismus bazálních orgánů, tukové tkáně - při chladu: stresová termogeneze (svalová kontrakce vede k tvorbě tepla)/netřesová termogeneze(novorozenci, hnědá tuková tkáň)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:8",
        prompt: "Vysvetli pojem: Termolýza",
        answer: "Termolýza - ztáta tepla 4 mechanizmy",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:9",
        prompt: "Vysvetli pojem: kondukce",
        answer: "kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:10",
        prompt: "Vysvetli pojem: konvekce",
        answer: "konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:11",
        prompt: "Vysvetli pojem: radiace",
        answer: "radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:12",
        prompt: "Vysvetli pojem: evaporace",
        answer: "evaporace - odpařování",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:13",
        prompt: "Vysvetli pojem: Reakce organizmu na chlad",
        answer: "Reakce organizmu na chlad - vazokonstrikce, snížení průtoku krve kůží, omezení tepelných ztrát- třes, zvýšení svalový tonus, metabolická aktivita, behaviorální reakce - vyhledání teplo",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:14",
        prompt: "Vysvetli pojem: Reakce organizmu na teplo",
        answer: "Reakce organizmu na teplo- vazodilatace, zvýšení průtoku krve kůží, zvýšení výdaje tepla, pocení, evaporace",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:15",
        prompt: "Vysvetli pojem: Hyperémie",
        answer: "Hyperémie - zvýšení prokrvení tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:16",
        prompt: "Vysvetli pojem: aktivní hyperémie",
        answer: "aktivní hyperémie - vazodilatace arteriol a zvýšení průtoku krve vede ke zvýšení přísunu O2, živin, odvodu metabolitů, podpoře regenerace, snížení tonu - teplo využíváme před mobilizací, protahováním, cvičením, manuální terapií",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:17",
        prompt: "Vysvetli pojem: reaktivní hyperémie",
        answer: "reaktivní hyperémie - vzniká po krátkodobém přerušení nebo výrazným omezení průtoku krve",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:18",
        prompt: "Vysvetli pojem: pasivní hyperémie",
        answer: "pasivní hyperémie - městnání - venózní kongesce, není žádoucí",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:19",
        prompt: "Vysvetli pojem: Terapeutický význam hyperémie",
        answer: "Terapeutický význam hyperémie - zvýšení metabolismu - více krve (trofický) - odvod metabolitů - zvýšený průtok (resorbční) - reparace - lepší cirkulace- analgezie (analgetický) - snížení svalového tonu (spasmolytický)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:20",
        prompt: "Vysvetli pojem: tepelná",
        answer: "tepelná - parafín, peloid, teplé koupele, infračervené záření",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:15:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: soubor mechanizmů, kterými organizmus udržuje stálou tělesnou teplotu navzdory změnám okolního prostředí - centrální regulační orgán - hypotalamus - termogeneze - tvorba tepla - termolýza - výdej tepla",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: soubor mechanizmů, kterými organizmus udržuje stálou tělesnou teplotu navzdory změnám okolního prostředí - centrální regulační orgán - hypotalamus - termogeneze - tvorba tepla - termolýza - výdej tepla",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Tělesná teplota: výslednice mezi tvorbou a ztrátou",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Tělesná teplota: výslednice mezi tvorbou a ztrátou",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Teplo: kinetická energie kmitajících molekul",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Teplo: kinetická energie kmitajících molekul",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Řízení termoregulace - regulace autonomním nervovým systémem",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Řízení termoregulace - regulace autonomním nervovým systémem",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Termogeneze - teplo vniká metabolickou aktivitou- termogeneze obligátní (bazální metabolismus)/fakultativní (sv. třes, zvýšený metabolismus) - zdroje: svalová práce, svalový třes, metabolismus bazálních orgánů, tukové tkáně - při chladu: stresová termogeneze (svalová kontrakce vede k tvorbě tepla)/netřesová termogeneze(novorozenci, hnědá tuková tkáň)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Termogeneze - teplo vniká metabolickou aktivitou- termogeneze obligátní (bazální metabolismus)/fakultativní (sv. třes, zvýšený metabolismus) - zdroje: svalová práce, svalový třes, metabolismus bazálních orgánů, tukové tkáně - při chladu: stresová termogeneze (svalová kontrakce vede k tvorbě tepla)/netřesová termogeneze(novorozenci, hnědá tuková tkáň)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Termolýza - ztáta tepla 4 mechanizmy",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Termolýza - ztáta tepla 4 mechanizmy",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Reakce organizmu na chlad - vazokonstrikce, snížení průtoku krve kůží, omezení tepelných ztrát- třes, zvýšení svalový tonus, metabolická aktivita, behaviorální reakce - vyhledání teplo",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Reakce organizmu na chlad - vazokonstrikce, snížení průtoku krve kůží, omezení tepelných ztrát- třes, zvýšení svalový tonus, metabolická aktivita, behaviorální reakce - vyhledání teplo",
      },
    ],
  },
}
) satisfies Record<string, PreparedQuestionData>;
