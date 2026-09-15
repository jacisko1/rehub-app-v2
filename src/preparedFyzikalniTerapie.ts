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
        title: "I. Definice: praktické uplatnění fyzikálních léčebných postupů a metod na živých organizmech s cílem benefitu pro pacienta",
        points: [
        ]
      },
      {
        title: "II. Indikace",
        points: [
          "1. analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
          "2. myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
          "3. trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
          "4. antiedematózní",
          "5. placebo - nezpochybňovat metodu",
          "6. časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
        ]
      },
      {
        title: "III. Rozdělení fyzikální terapie",
        points: [
          "1. mechanoterapie",
          "A. masáže",
          "B. polohování, trakce, extenze, TMT, mobilizace",
          "C. ultrazvuk",
          "2. termoterapie",
          "A. pozitivní",
          "B. negativní",
          "C. kombinovaná",
          "3. fototerapie (světelné vlnění)",
          "A. UV",
          "B. viditelné světlo",
          "C. IR",
          "4. elektroterapie (elektrické proudění)",
          "A. stejnosměrný",
          "B. nízkofrekvenční",
          "C. vysokofrekvenční",
          "5. magnetoterapie",
          "6. hydroterapie",
          "7. kombinované",
        ]
      },
      {
        title: "IV. Kontraindikace - lokální/celkové - obecné/speciální - relativní/absolutní",
        points: [
          "1. horečnaté stavy - nelze předpovídat reakci pacienta na léčbu",
          "2. kardiostimulátor - možnost narušit funkce všech elektronických zařízení",
          "3. kachexie - mění se kožní odpor, reaktivita organizmu",
          "4. hemoragické diatézy - zvyšuje se lokální prokrvení a tím riziko vzniku hematomu",
          "5. kovový implantáty - riziko zahřátí implantátu",
          "6. trofické změny v místě aplikace",
          "7. jizvy, čerstvé léze kožního krytu - vše, co narušuje kontinuitu kůže",
          "8. gravidita - žádná FT do míst Lp a břicha",
          "9. larynx a štítná žláza (nemělo by se ozařovat) - vedla by ke změně funkce ŠŽ, porucha polykacího aktu (sousta do DC)",
          "10. ložiska TBC a tumorů - stimulace rozsevu maligního procesu",
          "11. oblasti velkých sympatických plexů (sinus caroticus - náhlá srdeční zástava, plexus solaris - akutní obtíže břicha)",
          "12. manifestace respirační/kardiální insuficience",
          "13. porucha čití v místě aplikace (vede k riziku poškození kůže) - absence kontroly dějů v místě aplikace FT",
          "14. snížené duševní funkce - nelze se spolehnout na údaje pacienta",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:0:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: praktické uplatnění fyzikálních léčebných postupů a metod na živých organizmech s cílem benefitu pro pacienta",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:2",
        prompt: "Shrn cast: II. Indikace",
        answer: "1. analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje 2. myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt 3. trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus 4. antiedematózní 5. placebo - nezpochybňovat metodu",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:3",
        prompt: "Vysvetli pojem: 1. analgezie",
        answer: "1. analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:4",
        prompt: "Vysvetli pojem: 2. myorelaxace",
        answer: "2. myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:5",
        prompt: "Vysvetli pojem: 3. trofotropní účinek",
        answer: "3. trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:6",
        prompt: "Co je dulezite k tematu: II. Indikace?",
        answer: "4. antiedematózní",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:7",
        prompt: "Vysvetli pojem: 5. placebo",
        answer: "5. placebo - nezpochybňovat metodu",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:8",
        prompt: "Vysvetli pojem: 6. časový faktor",
        answer: "6. časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:9",
        prompt: "Shrn cast: III. Rozdělení fyzikální terapie",
        answer: "1. mechanoterapie A. masáže B. polohování, trakce, extenze, TMT, mobilizace C. ultrazvuk 2. termoterapie",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:10",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "1. mechanoterapie",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:11",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "A. masáže",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:12",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "B. polohování, trakce, extenze, TMT, mobilizace",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:13",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "C. ultrazvuk",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:14",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "2. termoterapie",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:15",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "A. pozitivní",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:16",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "B. negativní",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:17",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "C. kombinovaná",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:18",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "3. fototerapie (světelné vlnění)",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:19",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "A. UV",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:20",
        prompt: "Co je dulezite k tematu: III. Rozdělení fyzikální terapie?",
        answer: "B. viditelné světlo",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:0:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "5. placebo - nezpochybňovat metodu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "5. placebo - nezpochybňovat metodu",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "6. časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "6. časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. polohování, trakce, extenze, TMT, mobilizace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. polohování, trakce, extenze, TMT, mobilizace",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. fototerapie (světelné vlnění)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. fototerapie (světelné vlnění)",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. elektroterapie (elektrické proudění)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. elektroterapie (elektrické proudění)",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. horečnaté stavy - nelze předpovídat reakci pacienta na léčbu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. horečnaté stavy - nelze předpovídat reakci pacienta na léčbu",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. kardiostimulátor - možnost narušit funkce všech elektronických zařízení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. kardiostimulátor - možnost narušit funkce všech elektronických zařízení",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. kachexie - mění se kožní odpor, reaktivita organizmu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. kachexie - mění se kožní odpor, reaktivita organizmu",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. hemoragické diatézy - zvyšuje se lokální prokrvení a tím riziko vzniku hematomu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. hemoragické diatézy - zvyšuje se lokální prokrvení a tím riziko vzniku hematomu",
      },
    ],
  },
  "ix-fyzikalni-terapie:1": {
    chapters: [
      {
        title: "I. Definice: terapeutické využití elektrického proudu",
        points: [
        ]
      },
      {
        title: "II. Co lze ovlivnit elektrickým proudem - nervový, svalový, cévní systém, vnímání bolesti, trofiku, metabolismus tkání",
        points: [
        ]
      },
      {
        title: "III. Elektrická vodivost tkání - dobře vodivé: krev, sval, nervová tkáň - hůře vodivé: tuk, kůže, kost (odpor kůže klesá zvlhčením, zvýšení kontaktní plochy elektrody)",
        points: [
        ]
      },
      {
        title: "IV. Elektrický proud: tok elektricky nabitých částic (ionty - kationt/aniont nebo elektrony - záporně nabité částice ), dobře prochází tkáněmi s velkým obsahem vody a bílkovin - největší odpor průchodu klade kůže, kost, chrupavka, šlacha (malý obsah vody) - směr od katody (mínus) k anodě (plus), jednotka Ampér - účinek - analgetický, trofický, antiedematózní, myostimulační",
        points: [
          "1. Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek - iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
          "2. Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění) - indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
          "A. nízkofrekvenční - do 1kHz, povrchové",
          "a. kontaktní - DD, TENS, Trabert",
          "b. bezkontaktní - magnet, distanční elektroterapie",
          "B. středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
          "C. vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
        ]
      },
      {
        title: "V. Elektrody - velikost, vzájemná vzdálenost, polarita, intenzita proudu, délka aplikace, stav kůže - čím menší elektroda, tím vyšší hustota proudu (roste riziko popálení)",
        points: [
        ]
      },
      {
        title: "VI. Parametry",
        points: [
          "1. frekvence - počet kmitů za vteřinu",
          "2. intenzita",
          "3. modulace - je řízená změna některého parametru elektrického proudu v čase, nejčastěji amplitudy, frekvence nebo délky pulzu, za účelem dosažení požadovaného terapeutického účinku",
        ]
      },
      {
        title: "VII. N.Ú. elektroterapie - podráždění kůže, bolestivé pocity, popálení, elektrochemické poškození kůže",
        points: [
        ]
      },
      {
        title: "VIII. KI elektroterapie",
        points: [
          "A. kardiostimulátor",
          "B. závažné poruchy srdečního rytmu",
          "C. aplikace přes srdce",
          "D. porucha kožní integrity",
          "E. nespolupráce",
          "F. těhotenství",
          "G. malignita",
          "H. akutní trombóza",
          "I. infekce/zánět v místě aplikace",
        ]
      },
      {
        title: "IX. Impulsoterapie - aplikace v impulzech (přerušovaně) - přesně tvarované impulsy nízkofrekvenčních proudů",
        points: [
          "1. pravoúhlé - elektrogymnastika",
          "2. šikmé - elektrostimulace",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:1:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: terapeutické využití elektrického proudu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:2",
        prompt: "Shrn cast: II. Co lze ovlivnit elektrickým proudem",
        answer: "II. Co lze ovlivnit elektrickým proudem - nervový, svalový, cévní systém, vnímání bolesti, trofiku, metabolismus tkání",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:3",
        prompt: "Shrn cast: III. Elektrická vodivost tkání",
        answer: "III. Elektrická vodivost tkání - dobře vodivé: krev, sval, nervová tkáň - hůře vodivé: tuk, kůže, kost (odpor kůže klesá zvlhčením, zvýšení kontaktní plochy elektrody)",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:4",
        prompt: "Shrn cast: IV. Elektrický proud",
        answer: "1. Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek - iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí 2. Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění) - indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu A. nízkofrekvenční - do 1kHz, povrchové a. kontaktní - DD, TENS, Trabert b. bezkontaktní - magnet, distanční elektroterapie",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:5",
        prompt: "Vysvetli pojem: 1. Stejnosměrný",
        answer: "1. Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek - iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:6",
        prompt: "Vysvetli pojem: 2. Střídavý",
        answer: "2. Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění) - indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:7",
        prompt: "Vysvetli pojem: A. nízkofrekvenční",
        answer: "A. nízkofrekvenční - do 1kHz, povrchové",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:8",
        prompt: "Vysvetli pojem: a. kontaktní",
        answer: "a. kontaktní - DD, TENS, Trabert",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:9",
        prompt: "Vysvetli pojem: b. bezkontaktní",
        answer: "b. bezkontaktní - magnet, distanční elektroterapie",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:10",
        prompt: "Vysvetli pojem: B. středně frekvenční",
        answer: "B. středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:11",
        prompt: "Vysvetli pojem: C. vysokofrekvenční",
        answer: "C. vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:12",
        prompt: "Shrn cast: V. Elektrody",
        answer: "V. Elektrody - velikost, vzájemná vzdálenost, polarita, intenzita proudu, délka aplikace, stav kůže - čím menší elektroda, tím vyšší hustota proudu (roste riziko popálení)",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:13",
        prompt: "Shrn cast: VI. Parametry",
        answer: "1. frekvence - počet kmitů za vteřinu 2. intenzita 3. modulace - je řízená změna některého parametru elektrického proudu v čase, nejčastěji amplitudy, frekvence nebo délky pulzu, za účelem dosažení požadovaného terapeutického účinku",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:14",
        prompt: "Vysvetli pojem: 1. frekvence",
        answer: "1. frekvence - počet kmitů za vteřinu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:15",
        prompt: "Co je dulezite k tematu: VI. Parametry?",
        answer: "2. intenzita",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:16",
        prompt: "Vysvetli pojem: 3. modulace",
        answer: "3. modulace - je řízená změna některého parametru elektrického proudu v čase, nejčastěji amplitudy, frekvence nebo délky pulzu, za účelem dosažení požadovaného terapeutického účinku",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:17",
        prompt: "Shrn cast: VII. N.Ú. elektroterapie",
        answer: "VII. N.Ú. elektroterapie - podráždění kůže, bolestivé pocity, popálení, elektrochemické poškození kůže",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:18",
        prompt: "Shrn cast: VIII. KI elektroterapie",
        answer: "A. kardiostimulátor B. závažné poruchy srdečního rytmu C. aplikace přes srdce D. porucha kožní integrity E. nespolupráce",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:19",
        prompt: "Co je dulezite k tematu: VIII. KI elektroterapie?",
        answer: "A. kardiostimulátor",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:20",
        prompt: "Co je dulezite k tematu: VIII. KI elektroterapie?",
        answer: "B. závažné poruchy srdečního rytmu",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:1:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek - iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek - iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění) - indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění) - indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. nízkofrekvenční - do 1kHz, povrchové",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. nízkofrekvenční - do 1kHz, povrchové",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "a. kontaktní - DD, TENS, Trabert",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "a. kontaktní - DD, TENS, Trabert",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "b. bezkontaktní - magnet, distanční elektroterapie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "b. bezkontaktní - magnet, distanční elektroterapie",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. frekvence - počet kmitů za vteřinu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. frekvence - počet kmitů za vteřinu",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. modulace - je řízená změna některého parametru elektrického proudu v čase, nejčastěji amplitudy, frekvence nebo délky pulzu, za účelem dosažení požadovaného terapeutického účinku",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. modulace - je řízená změna některého parametru elektrického proudu v čase, nejčastěji amplitudy, frekvence nebo délky pulzu, za účelem dosažení požadovaného terapeutického účinku",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. závažné poruchy srdečního rytmu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. závažné poruchy srdečního rytmu",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "D. porucha kožní integrity",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "D. porucha kožní integrity",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "I. infekce/zánět v místě aplikace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "I. infekce/zánět v místě aplikace",
      },
    ],
  },
  "ix-fyzikalni-terapie:2": {
    chapters: [
      {
        title: "I. Definice: terapeutické působení stejnosměrného (galvanického) proudu na organizmus - akutní 3x denně - chronický 1x týdne (aplikace až 60 minut) - minimální délka terapie 30 minut, běžný počet procedur 6, u perakutních stavů 4-5 procedur prvních 48 hod po úrazu - max. proudová hustota je 0,1 mA/cm2, prahově senzitivní (pacient vnímá proud, ale není to bolestivé, protože jednosměrný proud působí senzitivně a vegetativně)",
        points: [
        ]
      },
      {
        title: "II. Indikace: chronické bolestivé stavy, artralgie, myalgie, neuralgie",
        points: [
        ]
      },
      {
        title: "III. Účinky: analgezie, prokrvení, ovlivnění trofiky tkáně",
        points: [
        ]
      },
      {
        title: "IV. Mechanizmus účinky: polarizace všech tkání a buněk v proudové dráze - vyžaduje čas min. 30 minut, v případě pozitivní odezvy zvyšujeme step 5 min. na 40-60 minut - předpis na 10 minut je non lege artis - proudová hustota je intenzita proudu (mA) procházející určitým průřezem (elektrody) v cm2 - max. proudová hustota je 0,1mA/cm2, - nahromadění iontů na membráně, zvýší se propustnost pro Na+, což vede ke kapilární hyperémii - zlepšení trofiky, imunity, urychlení regenerace (více kyslíku, zvýší se syntéza kolagenu) - zrychlené vstřebávání výronů exsudátů a otoků, snížení bolesti, snížení spasticity, - eutonizace cévního řečiště (správný tonus) - ovlivnění nervové dráždivosti - nevyvolává svalovou kontrakci, proto je možné aplikovat i u perakutních stavů",
        points: [
        ]
      },
      {
        title: "V. Pod elektrodami odlišné elektrochemické reakce:",
        points: [
          "1. katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
          "2. anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
        ]
      },
      {
        title: "VI. ochranné roztoky: slabé kyseliny a zásady (vzniká elektrolytická disociace H2O na H +, OH-, na kůži je NaCl, které disociuje na Na plus na katodě, kde je OH minus a vznikne NaOH, Cl minus k anodě a vznikne HCl (riziko poleptání) - proto ochranné roztoky",
        points: [
        ]
      },
      {
        title: "VII. katoda - kyselý, anoda - zásaditý roztok",
        points: [
        ]
      },
      {
        title: "VIII. při odlepení elektrody - rána (přerušený elektrický okruh)",
        points: [
        ]
      },
      {
        title: "IX. mezi pokožku a elektrodu se dává podložka, která musí přesahovat přes okraj elektrody",
        points: [
        ]
      },
      {
        title: "X. upozornit pacienta na možné začervenání kůže pod elektrodami, adaptaci (brnění el. proudu může po chvíli ustat)",
        points: [
        ]
      },
      {
        title: "XI. Způsob aplikace",
        points: [
          "1. Transregionálně (příčná) - elektrony umístěné na opačné strany postižené oblasti, proud prochází napříč oblasti - distorze, kontuze - do 24-36h po úrazu",
          "2. Podélná galvanizace - entezopatie, funkční porucha prokrvení (akrocyanóza, Raynaudův syndrom).. - elektrody jsou umístěné za sebou podél končetiny/jiné části těla, proud prochází podélně",
          "A. sestupná - anoda proximálně, katoda distálně (orientace elektrod)",
          "B. vzestupná - katoda proximálně, anoda distálně",
          "C. radikulární (segmentální) - proud působí na míšní kořen, indikace: neuralgie, KRBS",
          "D. paravertebtrální - elektrody jsou umístěné po stranách páteře - postherpeticka a interkostální neuralgie",
          "E. gangliotropní - působení na vegetativní (autonomní) ganglie",
          "F. neurální - elektrody umístěné podél průběhu konkrétního nervu, katoda distálně - mononeuritidy, lokalizované neuralgie",
        ]
      },
      {
        title: "XII. Intenzita procedury - je limitovaná 2 hledisky",
        points: [
          "1. max. proudovou hustotou",
          "2. subj. pocit pacienta - nastavení max. prahově senzitivní (pacient cítí jemné brnění)",
        ]
      },
      {
        title: "XIII. Iontoforéza = transport ionizované léčivé látky přes kůži pomocí stejnosměrného elektrického proudu - dopravení iontů přes kůži - spíše do kůže, průchod léku 3-20 mm (diskuze) - galvanický proud s ionizovanou léčivou látkou (kortikoidy, lokální anestetika, analgetika) - lokální aplikace bez injekce, sterilní aplikace, do přesného místa, ale do hloubky těžko definovaná - ion aplikujeme pod elektrodu stejné polarity (odpuzuje léčivo směrem do tkáně) - indikace: kožní onemocnění, kožní anestezie, adheze, záněty - například k aplikaci dexamethazonu, mesocainu, hyaluronidázy, …",
        points: [
        ]
      },
      {
        title: "XIV. 4komorová galvanizace - hydrogalvan - podélná galvanizace - přenos elektrického proudu zprostředkovává voda - 4 nebo 2 vaničky pro HK, DK, řada schémat - rovnoměrné vpravování elektrického proudu - teplota vody ve vaničkách dle základního onemocnění (perakutní hypotermní, neuritidy izotermní, hypertermní - porucha cirkulace) - v celém rozsahu el. pole - depolarizace tkáně s následnou hyperémií, v končetinách na katodě zvýšení nervové dráždivosti, na anodě snížení - indikace: neuritidy, neuralgie, neuropatie, poruchy prokrvení, poruchy inervace, spasticita, periatritida - max. 40 mA u čtyřkomorové, 20 mA u dvojkomorové",
        points: [
        ]
      },
      {
        title: "XV. Elektroléčebná vana - celá ponořená část těla je jedna velká elektroda - nelze odhadnout celkové množství proudu procházejí pacientem - intenzita podle pocitu pacienta, max. 30 mA",
        points: [
          "Předpis",
          "Galvanoterapie na oblast pravého hlezna, anoda na laterální kotník, velikost 5x8 cm, katoda transregionálně, ochranné roztoky, v intenzitě prahově senzitivní, max. do 4 mA, aplikace 20-40 min., step 10 min, 3x denně.",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:2:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: terapeutické působení stejnosměrného (galvanického) proudu na organizmus - akutní 3x denně - chronický 1x týdne (aplikace až 60 minut) - minimální délka terapie 30 minut, běžný počet procedur 6, u perakutních stavů 4-5 procedur prvních 48 hod po úrazu - max. proudová hustota je 0,1 mA/cm2, prahově senzitivní (pacient vnímá proud, ale není to bolestivé, protože jednosměrný proud působí senzitivně a vegetativně)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:2",
        prompt: "Shrn cast: II. Indikace",
        answer: "II. Indikace: chronické bolestivé stavy, artralgie, myalgie, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:3",
        prompt: "Shrn cast: III. Účinky",
        answer: "III. Účinky: analgezie, prokrvení, ovlivnění trofiky tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:4",
        prompt: "Shrn cast: IV. Mechanizmus účinky",
        answer: "IV. Mechanizmus účinky: polarizace všech tkání a buněk v proudové dráze - vyžaduje čas min. 30 minut, v případě pozitivní odezvy zvyšujeme step 5 min. na 40-60 minut - předpis na 10 minut je non lege artis - proudová hustota je intenzita proudu (mA) procházející určitým průřezem (elektrody) v cm2 - max. proudová hustota je 0,1mA/cm2, - nahromadění iontů na membráně, zvýší se propustnost pro Na+, což vede ke kapilární hyperémii - zlepšení trofiky, imunity, urychlení regenerace (více kyslíku, zvýší se syntéza kolagenu) - zrychlené vstřebávání výronů exsudátů a otoků, snížení bolesti, snížení spasticity, - eutonizace cévního řečiště (správný tonus) - ovlivnění nervové dráždivosti - nevyvolává svalovou kontrakci, proto je možné aplikovat i u perakutních stavů",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:5",
        prompt: "Shrn cast: V. Pod elektrodami odlišné elektrochemické reakce",
        answer: "1. katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie 2. anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:6",
        prompt: "Vysvetli pojem: 1. katelektrotonus",
        answer: "1. katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:7",
        prompt: "Vysvetli pojem: 2. anelektotonus",
        answer: "2. anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:8",
        prompt: "Shrn cast: VI. ochranné roztoky",
        answer: "VI. ochranné roztoky: slabé kyseliny a zásady (vzniká elektrolytická disociace H2O na H +, OH-, na kůži je NaCl, které disociuje na Na plus na katodě, kde je OH minus a vznikne NaOH, Cl minus k anodě a vznikne HCl (riziko poleptání) - proto ochranné roztoky",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:9",
        prompt: "Shrn cast: VII. katoda",
        answer: "VII. katoda - kyselý, anoda - zásaditý roztok",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:10",
        prompt: "Shrn cast: VIII. při odlepení elektrody",
        answer: "VIII. při odlepení elektrody - rána (přerušený elektrický okruh)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:11",
        prompt: "Shrn cast: IX. mezi pokožku a elektrodu se dává podložka, která musí přesahovat přes okraj elek",
        answer: "IX. mezi pokožku a elektrodu se dává podložka, která musí přesahovat přes okraj elektrody",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:12",
        prompt: "Shrn cast: X. upozornit pacienta na možné začervenání kůže pod elektrodami, adaptaci (brnění e",
        answer: "X. upozornit pacienta na možné začervenání kůže pod elektrodami, adaptaci (brnění el. proudu může po chvíli ustat)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:13",
        prompt: "Shrn cast: XI. Způsob aplikace",
        answer: "1. Transregionálně (příčná) - elektrony umístěné na opačné strany postižené oblasti, proud prochází napříč oblasti - distorze, kontuze - do 24-36h po úrazu 2. Podélná galvanizace - entezopatie, funkční porucha prokrvení (akrocyanóza, Raynaudův syndrom).. - elektrody jsou umístěné za sebou podél končetiny/jiné části těla, proud prochází podélně A. sestupná - anoda proximálně, katoda distálně (orientace elektrod) B. vzestupná - katoda proximálně, anoda distálně C. radikulární (segmentální) - proud působí na míšní kořen, indikace: neuralgie, KRBS",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:14",
        prompt: "Vysvetli pojem: 1. Transregionálně (příčná)",
        answer: "1. Transregionálně (příčná) - elektrony umístěné na opačné strany postižené oblasti, proud prochází napříč oblasti - distorze, kontuze - do 24-36h po úrazu",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:15",
        prompt: "Vysvetli pojem: 2. Podélná galvanizace",
        answer: "2. Podélná galvanizace - entezopatie, funkční porucha prokrvení (akrocyanóza, Raynaudův syndrom).. - elektrody jsou umístěné za sebou podél končetiny/jiné části těla, proud prochází podélně",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:16",
        prompt: "Vysvetli pojem: A. sestupná",
        answer: "A. sestupná - anoda proximálně, katoda distálně (orientace elektrod)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:17",
        prompt: "Vysvetli pojem: B. vzestupná",
        answer: "B. vzestupná - katoda proximálně, anoda distálně",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:18",
        prompt: "Vysvetli pojem: C. radikulární (segmentální)",
        answer: "C. radikulární (segmentální) - proud působí na míšní kořen, indikace: neuralgie, KRBS",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:19",
        prompt: "Vysvetli pojem: D. paravertebtrální",
        answer: "D. paravertebtrální - elektrody jsou umístěné po stranách páteře - postherpeticka a interkostální neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:20",
        prompt: "Vysvetli pojem: E. gangliotropní",
        answer: "E. gangliotropní - působení na vegetativní (autonomní) ganglie",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:2:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Transregionálně (příčná) - elektrony umístěné na opačné strany postižené oblasti, proud prochází napříč oblasti - distorze, kontuze - do 24-36h po úrazu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Transregionálně (příčná) - elektrony umístěné na opačné strany postižené oblasti, proud prochází napříč oblasti - distorze, kontuze - do 24-36h po úrazu",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Podélná galvanizace - entezopatie, funkční porucha prokrvení (akrocyanóza, Raynaudův syndrom).. - elektrody jsou umístěné za sebou podél končetiny/jiné části těla, proud prochází podélně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Podélná galvanizace - entezopatie, funkční porucha prokrvení (akrocyanóza, Raynaudův syndrom).. - elektrody jsou umístěné za sebou podél končetiny/jiné části těla, proud prochází podélně",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. sestupná - anoda proximálně, katoda distálně (orientace elektrod)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. sestupná - anoda proximálně, katoda distálně (orientace elektrod)",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. vzestupná - katoda proximálně, anoda distálně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. vzestupná - katoda proximálně, anoda distálně",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. radikulární (segmentální) - proud působí na míšní kořen, indikace: neuralgie, KRBS",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. radikulární (segmentální) - proud působí na míšní kořen, indikace: neuralgie, KRBS",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "D. paravertebtrální - elektrody jsou umístěné po stranách páteře - postherpeticka a interkostální neuralgie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "D. paravertebtrální - elektrody jsou umístěné po stranách páteře - postherpeticka a interkostální neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "E. gangliotropní - působení na vegetativní (autonomní) ganglie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "E. gangliotropní - působení na vegetativní (autonomní) ganglie",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "F. neurální - elektrody umístěné podél průběhu konkrétního nervu, katoda distálně - mononeuritidy, lokalizované neuralgie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "F. neurální - elektrody umístěné podél průběhu konkrétního nervu, katoda distálně - mononeuritidy, lokalizované neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. max. proudovou hustotou",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. max. proudovou hustotou",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. subj. pocit pacienta - nastavení max. prahově senzitivní (pacient cítí jemné brnění)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. subj. pocit pacienta - nastavení max. prahově senzitivní (pacient cítí jemné brnění)",
      },
    ],
  },
  "ix-fyzikalni-terapie:3": {
    chapters: [
      {
        title: "I. Definice: terapeutická aplikace proudů s frekvencí do 1000 Hz (přerušovaný galvan x modifikace střídavého síťového proudu) - proudy: monofázické, bifázické, střídavé, pulzní Monofázický - proud teče stále jedním směrem, má jednosměrné impulzy, typicky přerušovaný stejnosměrný proud Bifázický - proud mění směr, má kladnou i zápornou fázi, každá elektroda dosahuje kladných i záporných hodnot Střídavé - směr proudu se pravidelně mění, na každé elektrodě přechází plynule z kladného maxima přes nulovou intenzitu do záporného maxima, všechny střídavé proudy jsou bifazické Pulzní - mezi jednotlivými impulzy je různě dlouhá izoelektrická pauza - tvar impulzu: pravoúhlý, trojúhelníkový (šikmý), sinusový, jiný Pravoúhlý - proud vyskočí na určitou hodnutu, chvíli trvá a zase klesne Trojúhelníkévý/šikmý - intenzita postupně narůstá a klesá Sinusový - plynulý sinusový průběh - monopolární/bipolární Monopolární - 2 elektrody aktivní a indiferentní, účinek je soustředěný pod aktivní elektrodu Bipolární - obě elektrody mají terapeutický význam",
        points: [
        ]
      },
      {
        title: "II. Indikace nízkofrekvenční terapie (celé dle chat)",
        points: [
          "1. bolest",
          "2. snížená svalová síla",
          "3. periferní parézy - elektrostimulace k zachování svalové funkce, reedukace pohybu",
          "4. poruchy prokrvení a trofiky",
        ]
      },
      {
        title: "III. Účinky - elektrogymnastika, elektrostimulace paretických svalů, stimulace senzitivních axonů, terapie bolesti, vazodilatace",
        points: [
        ]
      },
      {
        title: "IV. KI",
        points: [
          "1. KV - kardiostimulátor, závažné poruchy srdečního rytmu, karotický sinus,",
          "2. cévní - akutní tromboza, závažná porucha periferního prokrvení",
          "3. nervový - výrazná porucha citlivosti (WHAT? vždyť se stimulují míšní léze??)",
          "4. lokální - poškození kůže, akutní infekce v místě elektrod",
          "5. těhotenství",
          "6. maligníma",
        ]
      },
      {
        title: "V. Účinky: liší se podle tvaru impulzu a frekvence",
        points: [
          "A. frekvence:",
          "1. do 50Hz motorické dráždění, hyperémie",
          "2. 100 Hz analgetický (dráždění A alfa vláken)",
          "3. 180 Hz lokálně myorelaxační (svalová inkoordinace)",
          "A. adaptace tkáně",
          "B. amplitudová modulace: amplituda jednotlivých impulzů se postupně/skokem mění",
          "C. frekvenční modulace: frekvence proudu se mění v průběhu času plynule/skokem",
          "D. kombinace: je neúčinnější prevence vzniku adaptace tkáně",
        ]
      },
      {
        title: "VI. Příklady proudů",
        points: [
        ]
      },
      {
        title: "VII. TENS = transkutánní elektrická neurostimulace - nízkofrekvenční, dvoufázový proud - analgezie, aplikace do míst bolesti - stimulace senzitivních nervových vláken elektrickými impulzy vede k inhibici přenosu nocicepce v zadních rozích míšních, což vede snížení bolesti (analgetický efekt) - anoda proximálně, katoda distálně - I: až 20 mA - KI kortikoidy, obecné KI - indikace: neuralgie, migréna, pooperační stavy, přetížení šíjového svalstva… akutní/chronická bolest Druhy TENS",
        points: [
          "1. konvenční - vyšší frekvence, nižší intenzita",
          "2. akupunkturní",
          "3. burst - salvy, největší analgetický efekt",
          "4. randomizovaný",
          "5. surge - undulující",
        ]
      },
      {
        title: "VIII. Trabertův proud - nízkofrekvenční stejnosměrný, přerušovaný (2ms a pauza 5 ms) - f 142 Hz, katoda na bolestivé místo, anoda indifenrentní (uzavření elektrického okruhu) - pravoúhlý proud, monofázický - časný analgetický efekt (úleva již během aplikace a bezprostředně po ní) - podprahově algická intenzita (aplikace dle subj. pocitů pacienta) - indikace: bolesti známé etiologie, otoky, hematomy v regresi, neuralgie - KI jizvy, znamení - tkáně nevykazují adaptaci - umístění (zapojení elektrod) E1-4: od C po Tp po Tp po LSp",
        points: [
        ]
      },
      {
        title: "IX. Leducův proud - 100 Hz, 1 ms impulz, pauza 9 ms - pacienty hůře tolerovaný, rychle vzniká adaptace - monofázický, pravoúhlý - indikace: subakutní a chronické bolesti pohybového systému",
        points: [
        ]
      },
      {
        title: "X. Diadynamic proud - dvousložkové: kombinace galvanizace (baze - mění prokrvení) a nízkofrekvenční stimulace (doza - analgetická složka) sinusovém monofázickým proudem - současná aplikace stejnosměrného a pulzního proudu, což vede ke kumulativní účinek",
        points: [
          "A. MF (monofázická fixní) - jednocestně usměrněný sinus proud, f=50 Hz, nepoužívá",
          "B. DF (difázická fixní) - dvoucestné usměrnění dvou vln, f=100 Hz, analgezie, ovlivnění sympatiku, KRBS - indikace: premedikace před aplikací jiných DD proudů (rychle nastupuje adaptace tkáně, max. efekt aplikace 1 minuta)",
          "C. CP (krátké periody)- střídání MF a DF - frekvenční modulace - vazodilatace, eutonizace - prahově motorická intenzita",
          "D. LP (dlouhá perioda) - MF a na ně nasedající DF - frekvenční a amplitudová modulace, vazodilatace, otoky, analgezie",
          "E. RS (rytmický synkopální proud) - 1 sekunda MF, 1 sekunda pauza - dráždivé a motorické účinky - nepříjemný, vyvolává kontrakce, nadprahově motorická intenzita",
          "F. CPiso (isodynamický) - DF vyšší o 18%, účinky: analgezie, antiinflamatorní, stimulace, facilitace hojení, zvýšení cirkulace",
          "- léčebné účinky DD: analgezie, snížení otoku a zánětu, svalová stimulace, zvýšení lokální cirkulace - pozor! první aplikace může vyvolat zhoršení obtíží (typické, upozornit pacienta)",
        ]
      },
      {
        title: "XI. aplikace: transregionální, radikulární, segmentální, longitudinální, gangliotropní, cílená na jednotlivé svaly",
        points: [
        ]
      },
      {
        title: "XII. indikace: neuralgie, myalgie, úponové bolesti, kontuze, distorze, VAS, kořenový syndrom",
        points: [
        ]
      },
      {
        title: "XIII. délka aplikace: čím akutnější proces, tím kratší aplikace (do 6 minut), pokud je aplikace delší je nutné použít ochranné roztoky (galvanizace), změnit polaritu (prodloužení léčby)",
        points: [
          "Předpis",
          "DD: DF 2+LP4+LP6, longitudinální aplikace na PDK intenzita podprahově senzitivní 7x denně",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:3:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: terapeutická aplikace proudů s frekvencí do 1000 Hz (přerušovaný galvan x modifikace střídavého síťového proudu) - proudy: monofázické, bifázické, střídavé, pulzní Monofázický - proud teče stále jedním směrem, má jednosměrné impulzy, typicky přerušovaný stejnosměrný proud Bifázický - proud mění směr, má kladnou i zápornou fázi, každá elektroda dosahuje kladných i záporných hodnot Střídavé - směr proudu se pravidelně mění, na každé elektrodě přechází plynule z kladného maxima přes nulovou intenzitu do záporného maxima, všechny střídavé proudy jsou bifazické Pulzní - mezi jednotlivými impulzy je různě dlouhá izoelektrická pauza - tvar impulzu: pravoúhlý, trojúhelníkový (šikmý), sinusový, jiný Pravoúhlý - proud vyskočí na určitou hodnutu, chvíli trvá a zase klesne Trojúhelníkévý/šikmý - intenzita postupně narůstá a klesá Sinusový - plynulý sinusový průběh - monopolární/bipolární Monopolární - 2 elektrody aktivní a indiferentní, účinek je soustředěný pod aktivní elektrodu Bipolární - obě elektrody mají terapeutický význam",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:2",
        prompt: "Shrn cast: II. Indikace nízkofrekvenční terapie (celé dle chat)",
        answer: "1. bolest 2. snížená svalová síla 3. periferní parézy - elektrostimulace k zachování svalové funkce, reedukace pohybu 4. poruchy prokrvení a trofiky",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:3",
        prompt: "Co je dulezite k tematu: II. Indikace nízkofrekvenční terapie (celé dle chat)?",
        answer: "1. bolest",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:4",
        prompt: "Co je dulezite k tematu: II. Indikace nízkofrekvenční terapie (celé dle chat)?",
        answer: "2. snížená svalová síla",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:5",
        prompt: "Vysvetli pojem: 3. periferní parézy",
        answer: "3. periferní parézy - elektrostimulace k zachování svalové funkce, reedukace pohybu",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:6",
        prompt: "Co je dulezite k tematu: II. Indikace nízkofrekvenční terapie (celé dle chat)?",
        answer: "4. poruchy prokrvení a trofiky",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:7",
        prompt: "Shrn cast: III. Účinky",
        answer: "III. Účinky - elektrogymnastika, elektrostimulace paretických svalů, stimulace senzitivních axonů, terapie bolesti, vazodilatace",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:8",
        prompt: "Shrn cast: IV. KI",
        answer: "1. KV - kardiostimulátor, závažné poruchy srdečního rytmu, karotický sinus, 2. cévní - akutní tromboza, závažná porucha periferního prokrvení 3. nervový - výrazná porucha citlivosti (WHAT? vždyť se stimulují míšní léze??) 4. lokální - poškození kůže, akutní infekce v místě elektrod 5. těhotenství",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:9",
        prompt: "Vysvetli pojem: 1. KV",
        answer: "1. KV - kardiostimulátor, závažné poruchy srdečního rytmu, karotický sinus,",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:10",
        prompt: "Vysvetli pojem: 2. cévní",
        answer: "2. cévní - akutní tromboza, závažná porucha periferního prokrvení",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:11",
        prompt: "Vysvetli pojem: 3. nervový",
        answer: "3. nervový - výrazná porucha citlivosti (WHAT? vždyť se stimulují míšní léze??)",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:12",
        prompt: "Vysvetli pojem: 4. lokální",
        answer: "4. lokální - poškození kůže, akutní infekce v místě elektrod",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:13",
        prompt: "Co je dulezite k tematu: IV. KI?",
        answer: "5. těhotenství",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:14",
        prompt: "Co je dulezite k tematu: IV. KI?",
        answer: "6. maligníma",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:15",
        prompt: "Shrn cast: V. Účinky",
        answer: "A. frekvence: 1. do 50Hz motorické dráždění, hyperémie 2. 100 Hz analgetický (dráždění A alfa vláken) 3. 180 Hz lokálně myorelaxační (svalová inkoordinace) A. adaptace tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:16",
        prompt: "Co je dulezite k tematu: V. Účinky: liší se podle tvaru impulzu a frekvence?",
        answer: "A. frekvence:",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:17",
        prompt: "Co je dulezite k tematu: V. Účinky: liší se podle tvaru impulzu a frekvence?",
        answer: "1. do 50Hz motorické dráždění, hyperémie",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:18",
        prompt: "Co je dulezite k tematu: V. Účinky: liší se podle tvaru impulzu a frekvence?",
        answer: "2. 100 Hz analgetický (dráždění A alfa vláken)",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:19",
        prompt: "Co je dulezite k tematu: V. Účinky: liší se podle tvaru impulzu a frekvence?",
        answer: "3. 180 Hz lokálně myorelaxační (svalová inkoordinace)",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:20",
        prompt: "Co je dulezite k tematu: V. Účinky: liší se podle tvaru impulzu a frekvence?",
        answer: "A. adaptace tkáně",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:3:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. periferní parézy - elektrostimulace k zachování svalové funkce, reedukace pohybu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. periferní parézy - elektrostimulace k zachování svalové funkce, reedukace pohybu",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. poruchy prokrvení a trofiky",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. poruchy prokrvení a trofiky",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. KV - kardiostimulátor, závažné poruchy srdečního rytmu, karotický sinus,",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. KV - kardiostimulátor, závažné poruchy srdečního rytmu, karotický sinus,",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. cévní - akutní tromboza, závažná porucha periferního prokrvení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. cévní - akutní tromboza, závažná porucha periferního prokrvení",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. nervový - výrazná porucha citlivosti (WHAT? vždyť se stimulují míšní léze??)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. nervový - výrazná porucha citlivosti (WHAT? vždyť se stimulují míšní léze??)",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. lokální - poškození kůže, akutní infekce v místě elektrod",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. lokální - poškození kůže, akutní infekce v místě elektrod",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. do 50Hz motorické dráždění, hyperémie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. do 50Hz motorické dráždění, hyperémie",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. 100 Hz analgetický (dráždění A alfa vláken)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. 100 Hz analgetický (dráždění A alfa vláken)",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. 180 Hz lokálně myorelaxační (svalová inkoordinace)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. 180 Hz lokálně myorelaxační (svalová inkoordinace)",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. amplitudová modulace: amplituda jednotlivých impulzů se postupně/skokem mění",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. amplitudová modulace: amplituda jednotlivých impulzů se postupně/skokem mění",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. frekvenční modulace: frekvence proudu se mění v průběhu času plynule/skokem",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. frekvenční modulace: frekvence proudu se mění v průběhu času plynule/skokem",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "D. kombinace: je neúčinnější prevence vzniku adaptace tkáně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "D. kombinace: je neúčinnější prevence vzniku adaptace tkáně",
      },
    ],
  },
  "ix-fyzikalni-terapie:4": {
    chapters: [
      {
        title: "I. Definice: léčebné využití elektrického proudu za účelem snížení bolesti - nejpoužívanější metody jsou Traber, TENS, interference - bolest je nepříjemnou senzorickou a emocionální zkušeností, která se vztahuje ke skutečné/možné poruše tkáně - akutní x chronická bolest - vodiče: primární - I. řád - pevné vodiče - kovy II. řád - tekuté - tkáně lidského těla",
        points: [
        ]
      },
      {
        title: "II. Myorelaxační efekt - ovlivnění TrP",
        points: [
          "1. UZ",
          "2. Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly - UZ v kombinaci s Traber/IF na hluboké struktury",
        ]
      },
      {
        title: "III. Příklady elektroanalgie (viz. otázka IX./4. a 6.)",
        points: [
          "1. Traber",
          "2. TENS",
          "3. interference",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:4:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: léčebné využití elektrického proudu za účelem snížení bolesti - nejpoužívanější metody jsou Traber, TENS, interference - bolest je nepříjemnou senzorickou a emocionální zkušeností, která se vztahuje ke skutečné/možné poruše tkáně - akutní x chronická bolest - vodiče: primární - I. řád - pevné vodiče - kovy II. řád - tekuté - tkáně lidského těla",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:2",
        prompt: "Shrn cast: II. Myorelaxační efekt",
        answer: "1. UZ 2. Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly - UZ v kombinaci s Traber/IF na hluboké struktury",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:3",
        prompt: "Co je dulezite k tematu: II. Myorelaxační efekt - ovlivnění TrP?",
        answer: "1. UZ",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:4",
        prompt: "Vysvetli pojem: 2. Kombinovaná terapie",
        answer: "2. Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly - UZ v kombinaci s Traber/IF na hluboké struktury",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:5",
        prompt: "Shrn cast: III. Příklady elektroanalgie (viz. otázka IX./4. a 6.)",
        answer: "1. Traber 2. TENS 3. interference",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:6",
        prompt: "Co je dulezite k tematu: III. Příklady elektroanalgie (viz. otázka IX./4. a 6.)?",
        answer: "1. Traber",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:7",
        prompt: "Co je dulezite k tematu: III. Příklady elektroanalgie (viz. otázka IX./4. a 6.)?",
        answer: "2. TENS",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:8",
        prompt: "Co je dulezite k tematu: III. Příklady elektroanalgie (viz. otázka IX./4. a 6.)?",
        answer: "3. interference",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:4:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly - UZ v kombinaci s Traber/IF na hluboké struktury",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly - UZ v kombinaci s Traber/IF na hluboké struktury",
      },
    ],
  },
  "ix-fyzikalni-terapie:5": {
    chapters: [
      {
        title: "I. Definice: jsou elektrické proudy o frekvencí 1-100 kHz - nejčastěji využívané v rehabilitaci jsou interferenční proudy - střední frekvence má menší odpor, pacient ji lépe toleruje a proto lze působit hlouběji - je terapeutické využití dvou středněfrekvenčních proudových okruhů, které se v hloubi tkáně kříží a vzniká tam proud, jehož frekvence je rovna vektorovému součtu frekvencí v obou kruzích - jdou hlouběji do tkání, tam se transformují na NF proudy 90 - 130 Hz (modulace amplitudy) - 4 lístek - interferenční proud: vzniká ze dvou středněfrekvenčních proudů o mírně odlišné frekvenci, které se vzájemně interferují, výsledkem je amplitudově modulovaný proud o f 100 Hz",
        points: [
        ]
      },
      {
        title: "II. Indikace - chronické nociceptivní bolest 10-20 min, 9-12 procedur, podprahově motorická",
        points: [
          "1. nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
          "2. svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
          "3. kloubní - RA, bursitidy, synovitidy, capsulitidy",
          "4. poúrazové - podpora hojení",
        ]
      },
      {
        title: "III. Kontraindikace",
        points: [
          "A. funkční i orgnanické poruchy v akutní fázi",
          "B. hyperanxieta",
          "C. absces",
          "D. ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
        ]
      },
      {
        title: "IV. Způsob aplikace",
        points: [
          "1. Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace - jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
          "2. Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
          "A. klasické - obsolentní, nejhlubší",
          "B. izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
          "C. dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
        ]
      },
      {
        title: "V. Aplikace - subakutní 1x denně, chronická 2-3 x týdně, po 6. aplikaci zhodnotit efekt terapie, obvykle 9-12 procedur - po 1. aplikaci může dojít ke zhoršení obtíží - délka aplikace 3-20 minut - intenzita minimálně podprahově senzitivní - transregionálně/segmentálně/reflexní (ovlivněním Headových zón můžeme ovlivnit vnitřní orgány, který reflexní změnu vyvolali)",
        points: [
        ]
      },
      {
        title: "VI. Účinky - závisí na modulační frekvenci a intenzitě",
        points: [
          "A. analgetický - tlumení bolesti",
          "B. motorický - stimulace motorických nervů, vyvolání svalové kontrakce",
          "C. vazomotrický - zvýšení lokálního prokrvení, sekundárně podpora metabolismu a reparace",
          "D. podpora resorpce edému",
        ]
      },
      {
        title: "VII. nižší modulační frekvence - výraznější motorická stimulace",
        points: [
        ]
      },
      {
        title: "VIII. střední frekvence - zejména analgetický účinek",
        points: [
        ]
      },
      {
        title: "IX. vyšší frekvence - analgetický/senzorický účinek, menší motorická odpověď",
        points: [
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:5:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: jsou elektrické proudy o frekvencí 1-100 kHz - nejčastěji využívané v rehabilitaci jsou interferenční proudy - střední frekvence má menší odpor, pacient ji lépe toleruje a proto lze působit hlouběji - je terapeutické využití dvou středněfrekvenčních proudových okruhů, které se v hloubi tkáně kříží a vzniká tam proud, jehož frekvence je rovna vektorovému součtu frekvencí v obou kruzích - jdou hlouběji do tkání, tam se transformují na NF proudy 90 - 130 Hz (modulace amplitudy) - 4 lístek - interferenční proud: vzniká ze dvou středněfrekvenčních proudů o mírně odlišné frekvenci, které se vzájemně interferují, výsledkem je amplitudově modulovaný proud o f 100 Hz",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:2",
        prompt: "Shrn cast: II. Indikace",
        answer: "1. nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie 2. svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie 3. kloubní - RA, bursitidy, synovitidy, capsulitidy 4. poúrazové - podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:3",
        prompt: "Vysvetli pojem: 1. nervové",
        answer: "1. nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:4",
        prompt: "Vysvetli pojem: 2. svalové",
        answer: "2. svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:5",
        prompt: "Vysvetli pojem: 3. kloubní",
        answer: "3. kloubní - RA, bursitidy, synovitidy, capsulitidy",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:6",
        prompt: "Vysvetli pojem: 4. poúrazové",
        answer: "4. poúrazové - podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:7",
        prompt: "Shrn cast: III. Kontraindikace",
        answer: "A. funkční i orgnanické poruchy v akutní fázi B. hyperanxieta C. absces D. ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:8",
        prompt: "Co je dulezite k tematu: III. Kontraindikace?",
        answer: "A. funkční i orgnanické poruchy v akutní fázi",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:9",
        prompt: "Co je dulezite k tematu: III. Kontraindikace?",
        answer: "B. hyperanxieta",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:10",
        prompt: "Co je dulezite k tematu: III. Kontraindikace?",
        answer: "C. absces",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:11",
        prompt: "Co je dulezite k tematu: III. Kontraindikace?",
        answer: "D. ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:12",
        prompt: "Shrn cast: IV. Způsob aplikace",
        answer: "1. Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace - jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka 2. Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení A. klasické - obsolentní, nejhlubší B. izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy) C. dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:13",
        prompt: "Co je dulezite k tematu: IV. Způsob aplikace?",
        answer: "1. Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace - jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:14",
        prompt: "Vysvetli pojem: 2. Čtyčpolová interference",
        answer: "2. Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:15",
        prompt: "Vysvetli pojem: A. klasické",
        answer: "A. klasické - obsolentní, nejhlubší",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:16",
        prompt: "Vysvetli pojem: B. izoplanární vektorové pole",
        answer: "B. izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:17",
        prompt: "Vysvetli pojem: C. dipólový vektorové pole",
        answer: "C. dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:18",
        prompt: "Shrn cast: V. Aplikace",
        answer: "V. Aplikace - subakutní 1x denně, chronická 2-3 x týdně, po 6. aplikaci zhodnotit efekt terapie, obvykle 9-12 procedur - po 1. aplikaci může dojít ke zhoršení obtíží - délka aplikace 3-20 minut - intenzita minimálně podprahově senzitivní - transregionálně/segmentálně/reflexní (ovlivněním Headových zón můžeme ovlivnit vnitřní orgány, který reflexní změnu vyvolali)",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:19",
        prompt: "Shrn cast: VI. Účinky",
        answer: "A. analgetický - tlumení bolesti B. motorický - stimulace motorických nervů, vyvolání svalové kontrakce C. vazomotrický - zvýšení lokálního prokrvení, sekundárně podpora metabolismu a reparace D. podpora resorpce edému",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:20",
        prompt: "Vysvetli pojem: A. analgetický",
        answer: "A. analgetický - tlumení bolesti",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:5:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. kloubní - RA, bursitidy, synovitidy, capsulitidy",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. kloubní - RA, bursitidy, synovitidy, capsulitidy",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. poúrazové - podpora hojení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. poúrazové - podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. funkční i orgnanické poruchy v akutní fázi",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. funkční i orgnanické poruchy v akutní fázi",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "D. ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "D. ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace - jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace - jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. klasické - obsolentní, nejhlubší",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. klasické - obsolentní, nejhlubší",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. analgetický - tlumení bolesti",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. analgetický - tlumení bolesti",
      },
    ],
  },
  "ix-fyzikalni-terapie:6": {
    chapters: [
      {
        title: "Prehled",
        points: [
          "Ultrazvuk",
        ]
      },
      {
        title: "I. Definice: podélné mechanické vlnění o frekvenci nad hranicí slyšitelného zvuku (20 000Hz), zj. 0,5-3 MHz, které se generuje rozkmitáním piezoelektrického krystalu v hlavici vysokofrekvenčním proudem - zřeďování a zhušťování prostředí (ve své dráze rozkmitá částice i celé buňky) - ERA - efektivní kmitající oblast 1-10 cm2 (vyzařovací plocha hlavice) - akustická impedance: odraz v místě tkání s různou intenzitou - hloubková termoterapie - zdroj tepelné energie",
        points: [
        ]
      },
      {
        title: "II. Účinky",
        points: [
          "1. fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
          "2. chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
          "3. biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému) - porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
        ]
      },
      {
        title: "III. Frekvence",
        points: [
          "A. 1MHz - hluboké partie",
          "B. 3 MHz - povrchové partie",
        ]
      },
      {
        title: "IV. Intenzita - Watt/cm2 - 0,5 W/cm2 do 2 W/cm2 u akutního 3 minuty - 0,8 - 1 do 3 W/cm2 u chronická 5 min - step 10 min max",
        points: [
        ]
      },
      {
        title: "V. Forma aplikace - přímý x podvodní - dynamické (stálý pohyb po celém rozsahu léčené tkáně) x semistatické (pohyb po obvodu ERA) x statické (zřídka) - lokální/segmentální/neurální/radikulární",
        points: [
          "1. kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
          "2. pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
        ]
      },
      {
        title: "VI. Indikace",
        points: [
          "A. posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
          "B. revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
          "C. onemocnění periferních nervů - neuropatie, Fantomové bolesti",
          "D. poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace)",
          "E. jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura",
          "F. epikondylalgie, kalcifikace",
        ]
      },
      {
        title: "VII. Kontraindikace",
        points: [
          "A. epifýzy rostoucích kostí",
          "B. stav po laminektomii - do jizvy",
          "C. gonády",
          "D. oči, krvácení, susp. embolus",
          "E. mozek",
          "F. srdce",
          "G. periferní nervy pod povrchem kostí",
          "H. menses",
          "Rázová vlna",
        ]
      },
      {
        title: "VIII. Definice: je neinvazivní fyzikální terapie využívající mechanické akustické vlnění s vysokou amplitudou a krátkou dobou trvání - využití zj. u chronických bolestivých stavů pohybového aparátu (tendinopatie, entezopatie) - cílem rázové vlny je ovlivnění patologických změn tkáně a stimulace reparace",
        points: [
        ]
      },
      {
        title: "IX. Typy",
        points: [
          "1. fokusová - energie se soustředí do určité hloubky, přesné zacílení patologického ložiska",
          "2. radiální - tlaková vlna se šíří radiálně od aplikátoru, zj. na povrchové struktury",
        ]
      },
      {
        title: "X. Účinky",
        points: [
          "A. mechanické - mechanické podráždění tkáně, mikrostimulace patologické tkáně, fragmentace kalcifikací",
          "B. biologické - stimulace angiogeneze a neovaskularizace, regenerace buněk, podpora hojení šlach",
          "C. analgetické - snížení bolesti, modulace nociceptivního přenosu",
        ]
      },
      {
        title: "XI. Indikace",
        points: [
          "A. laterální epikondylalgie",
          "B. mediální epikondylalgie",
          "C. tendinopatie rotátorové manžety",
          "D. kalcifikující tendinopatie ramene",
          "E. plantární fascitida",
          "F. patelární tendinopatie",
          "G. některé formy kalcifikací měkkých tkání",
        ]
      },
      {
        title: "XII. Kontraindikace",
        points: [
          "A. absolutní",
          "a. těhotenství (neaplikovat přes plod)",
          "b. maligní tumor v místě aplikace",
          "c. infekce v místě aplikace",
          "d. porucha krevní srážlivost/významná koagulupatie",
          "e. aplikace přes: oblast velkých cév, plíce, mozek, míchu, růstové ploténky",
          "B. relativní",
          "a. antikoagulancia",
          "b. výrazná neuropatie/porucha citlivosti",
          "c. čerstvé poranění kůže v místě aplikace",
          "d. respektovat lokalizaci kardiostimulátoru",
        ]
      },
      {
        title: "XIII. N.Ú.",
        points: [
          "A. bolest během aplikace",
          "B. zarudnutí",
          "C. otok",
          "D. hematom",
          "E. petechie",
          "F. přechodně zvýšená bolestivost po terapii",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:6:flashcard:1",
        prompt: "Co je dulezite k tematu: Prehled?",
        answer: "Ultrazvuk",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:2",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: podélné mechanické vlnění o frekvenci nad hranicí slyšitelného zvuku (20 000Hz), zj. 0,5-3 MHz, které se generuje rozkmitáním piezoelektrického krystalu v hlavici vysokofrekvenčním proudem - zřeďování a zhušťování prostředí (ve své dráze rozkmitá částice i celé buňky) - ERA - efektivní kmitající oblast 1-10 cm2 (vyzařovací plocha hlavice) - akustická impedance: odraz v místě tkání s různou intenzitou - hloubková termoterapie - zdroj tepelné energie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:3",
        prompt: "Shrn cast: II. Účinky",
        answer: "1. fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže 2. chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně 3. biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému) - porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:4",
        prompt: "Vysvetli pojem: 1. fyzikální",
        answer: "1. fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:5",
        prompt: "Vysvetli pojem: 2. chemické",
        answer: "2. chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:6",
        prompt: "Vysvetli pojem: 3. biologické",
        answer: "3. biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému) - porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:7",
        prompt: "Shrn cast: III. Frekvence",
        answer: "A. 1MHz - hluboké partie B. 3 MHz - povrchové partie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:8",
        prompt: "Vysvetli pojem: A. 1MHz",
        answer: "A. 1MHz - hluboké partie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:9",
        prompt: "Vysvetli pojem: B. 3 MHz",
        answer: "B. 3 MHz - povrchové partie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:10",
        prompt: "Shrn cast: IV. Intenzita",
        answer: "IV. Intenzita - Watt/cm2 - 0,5 W/cm2 do 2 W/cm2 u akutního 3 minuty - 0,8 - 1 do 3 W/cm2 u chronická 5 min - step 10 min max",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:11",
        prompt: "Shrn cast: V. Forma aplikace",
        answer: "1. kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů 2. pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:12",
        prompt: "Vysvetli pojem: 1. kontinuální",
        answer: "1. kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:13",
        prompt: "Vysvetli pojem: 2. pulzní",
        answer: "2. pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:14",
        prompt: "Shrn cast: VI. Indikace",
        answer: "A. posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení B. revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis C. onemocnění periferních nervů - neuropatie, Fantomové bolesti D. poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace) E. jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:15",
        prompt: "Vysvetli pojem: A. posttraumatické stavy",
        answer: "A. posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:16",
        prompt: "Vysvetli pojem: B. revmatoidní artritidy, artrózy",
        answer: "B. revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:17",
        prompt: "Vysvetli pojem: C. onemocnění periferních nervů",
        answer: "C. onemocnění periferních nervů - neuropatie, Fantomové bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:18",
        prompt: "Vysvetli pojem: D. poruchy cirkulace",
        answer: "D. poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace)",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:19",
        prompt: "Co je dulezite k tematu: VI. Indikace?",
        answer: "E. jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:20",
        prompt: "Co je dulezite k tematu: VI. Indikace?",
        answer: "F. epikondylalgie, kalcifikace",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:6:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému) - porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému) - porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. 3 MHz - povrchové partie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. 3 MHz - povrchové partie",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. onemocnění periferních nervů - neuropatie, Fantomové bolesti",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. onemocnění periferních nervů - neuropatie, Fantomové bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "D. poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "D. poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace)",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "E. jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "E. jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "F. epikondylalgie, kalcifikace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "F. epikondylalgie, kalcifikace",
      },
    ],
  },
  "ix-fyzikalni-terapie:7": {
    chapters: [
      {
        title: "I. Definice: je léčebná výměna tepelné energie mezi okolím a organizmem - teplo = kinetická energie",
        points: [
        ]
      },
      {
        title: "II. Dělení",
        points: [
          "1. pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
          "2. negativní - odebírání tepla, ochlazujeme",
          "3. kombinované",
        ]
      },
      {
        title: "III. Účinky",
        points: [
          "1. lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
          "2. celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení - vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
        ]
      },
      {
        title: "IV. Přenos tepla mezi tělem a okolí",
        points: [
          "1. kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
          "2. konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
          "3. iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
          "4. evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
          "5. Formy termoterapie",
          "6. kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
          "7. bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
          "8. vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
          "9. sálavé teplo - infračervené záření",
          "10. hloubkové prohřátí - krátkovlnná diatermie",
        ]
      },
      {
        title: "V. Rozdělení",
        points: [
          "1. Pozitivní",
          "A. částečná - obklady, peloidy, parafín (vyšší teploty, malé povrchové svaly)",
          "B. celková - lázně",
          "2. Negativní",
          "A. částečná - obklady, ledování, kryoterapie",
          "B. celková - řízená, neřízená kryosauna",
          "3. Kombinované",
          "A. konstatní - sauna, střídavé koupele",
          "B. kombinovaná s jiným druhem podmětů - podvodní masáž, vířivé koupele, skotské střiky (střídavě se aplikují pod tlakem proudy studené a teplé vody)",
        ]
      },
      {
        title: "VI. Indikace - hyperémie: chronické nemoci pojiva, kloubů, m. Bechtěrev, artrózy, polyneuropatie - svalové spasmy, chronické bolesti zad - aplikace tepla před cvičením/protahování/mobilizací",
        points: [
        ]
      },
      {
        title: "VII. Kontraindikace",
        points: [
          "1. kardinální a renální insuficience",
          "2. lokální poruchy prokrvení",
          "3. ICHS",
          "4. akutní zánětlivé procesy, akutní tendinitis, artritis",
          "5. krvácení",
          "6. porucha čití",
          "7. neaplikujeme přímo přes známý maligní proces",
          "8. celková horečka",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:7:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: je léčebná výměna tepelné energie mezi okolím a organizmem - teplo = kinetická energie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:2",
        prompt: "Shrn cast: II. Dělení",
        answer: "1. pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C) 2. negativní - odebírání tepla, ochlazujeme 3. kombinované",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:3",
        prompt: "Vysvetli pojem: 1. pozitivní",
        answer: "1. pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:4",
        prompt: "Vysvetli pojem: 2. negativní",
        answer: "2. negativní - odebírání tepla, ochlazujeme",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:5",
        prompt: "Co je dulezite k tematu: II. Dělení?",
        answer: "3. kombinované",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:6",
        prompt: "Shrn cast: III. Účinky",
        answer: "1. lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu 2. celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení - vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:7",
        prompt: "Vysvetli pojem: 1. lokální",
        answer: "1. lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:8",
        prompt: "Vysvetli pojem: 2. celkové",
        answer: "2. celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení - vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:9",
        prompt: "Shrn cast: IV. Přenos tepla mezi tělem a okolí",
        answer: "1. kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší) 2. konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty 3. iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa) 4. evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody) 5. Formy termoterapie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:10",
        prompt: "Vysvetli pojem: 1. kondukce",
        answer: "1. kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:11",
        prompt: "Vysvetli pojem: 2. konvekce",
        answer: "2. konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:12",
        prompt: "Vysvetli pojem: 3. iradiace",
        answer: "3. iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:13",
        prompt: "Vysvetli pojem: 4. evaporace",
        answer: "4. evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:14",
        prompt: "Co je dulezite k tematu: IV. Přenos tepla mezi tělem a okolí?",
        answer: "5. Formy termoterapie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:15",
        prompt: "Vysvetli pojem: 6. kontaktní teplo",
        answer: "6. kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:16",
        prompt: "Vysvetli pojem: 7. bezkontaktní (distanční)",
        answer: "7. bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:17",
        prompt: "Vysvetli pojem: 8. vodní termoterapie",
        answer: "8. vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:18",
        prompt: "Vysvetli pojem: 9. sálavé teplo",
        answer: "9. sálavé teplo - infračervené záření",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:19",
        prompt: "Vysvetli pojem: 10. hloubkové prohřátí",
        answer: "10. hloubkové prohřátí - krátkovlnná diatermie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:20",
        prompt: "Shrn cast: V. Rozdělení",
        answer: "1. Pozitivní A. částečná - obklady, peloidy, parafín (vyšší teploty, malé povrchové svaly) B. celková - lázně 2. Negativní A. částečná - obklady, ledování, kryoterapie",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:7:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. negativní - odebírání tepla, ochlazujeme",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. negativní - odebírání tepla, ochlazujeme",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení - vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení - vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "6. kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "6. kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "7. bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "7. bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "8. vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "8. vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "9. sálavé teplo - infračervené záření",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "9. sálavé teplo - infračervené záření",
      },
    ],
  },
  "ix-fyzikalni-terapie:8": {
    chapters: [
      {
        title: "I. Definice: je odmítání tepla z organizmu s terapeutickým cílem - teplota kolem 0°C a méně - cryo: řecky chlad - chlad je subjektivní vjem, není fyzikální veličina",
        points: [
        ]
      },
      {
        title: "II. Efekt kryoterapie - analgezie, snížení otoku, ovlivnění zánětlivé reakce, snížení svalového tonu, omezení metabolické aktivity tkání",
        points: [
        ]
      },
      {
        title: "III. Účinky - chlad → vazokonstrikce → ↓ prokrvení → ↓ metabolismus → ↓ edém + ↓ bolest",
        points: [
          "A. Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
          "B. Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
          "C. Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
          "D. Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
          "1. Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
          "2. Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
        ]
      },
      {
        title: "IV. protiklad ostatních procedur: vazokonstrikce, snížena permeabilita a diapedéza, zhoršuje buněčnou imunitu, zhoršuje spasmy",
        points: [
        ]
      },
      {
        title: "V. aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí",
        points: [
        ]
      },
      {
        title: "VI. analgetické účinky",
        points: [
        ]
      },
      {
        title: "VII. Indikace",
        points: [
          "1. akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
          "2. chronické bolestivé stavy - artróza, revmatoidní artritida",
          "3. reflexní svalové změny - po krátkém kryostimulu intenzivní hyperémie",
          "4. spasticita - snižuje dráždivost",
          "5. RA, hemeroidy",
        ]
      },
      {
        title: "VIII. Kontraindikace - nestabilní hypertenze, IM méně než půl rok, srdeční/respirační dekompenzace, angina pectoris - poruchy prokrvení, citlivosti, chladová alergie, anémie, záchvatovité onemocnění - Raynaudova choroba, kryoglubulinémie, paroyxysmální chladová hemoglobinurie",
        points: [
        ]
      },
      {
        title: "IX. N.Ú. kryoterapie: poškození kůže, omrzliny, poškození periferního nervu, paradoxní reakce na chlad",
        points: [
        ]
      },
      {
        title: "X. Používají se: - aplikace několikrát denně/kontinuálně s přestávkami - použití vnitřní izolace (mezivrstva tkaniny) - při lokálních obkladech - led, těkavé látky (ethylchlorid, metylchlorid), chladné plyny",
        points: [
          "1. Lokální: ledové obklady, gelové sáčky, studená voda, kryosprej, ledové masáže, ledové komprese",
          "2. Celkové: kryokomora (chránit akra, poté následuje lehké cvičení a protažení, teplota mínus 180 st.C, max. 3 minuty)",
          "Pomůcka:",
          "BOMP - bolest, otok, metabolismus, prokrvení (KRYO=4 hlavní účinky)",
          "- KI: chlad nesmí tam, kde cévy nebo nervy neumí správně reagovat",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:8:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: je odmítání tepla z organizmu s terapeutickým cílem - teplota kolem 0°C a méně - cryo: řecky chlad - chlad je subjektivní vjem, není fyzikální veličina",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:2",
        prompt: "Shrn cast: II. Efekt kryoterapie",
        answer: "II. Efekt kryoterapie - analgezie, snížení otoku, ovlivnění zánětlivé reakce, snížení svalového tonu, omezení metabolické aktivity tkání",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:3",
        prompt: "Shrn cast: III. Účinky",
        answer: "A. Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku B. Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii C. Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku D. Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus 1. Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:4",
        prompt: "Vysvetli pojem: A. Vazokonstrikce a antiedematózní",
        answer: "A. Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:5",
        prompt: "Vysvetli pojem: B. Analgetický efekt",
        answer: "B. Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:6",
        prompt: "Vysvetli pojem: C. Metabolický účinek",
        answer: "C. Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:7",
        prompt: "Vysvetli pojem: D. Protizánětlivý účinek",
        answer: "D. Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:8",
        prompt: "Vysvetli pojem: 1. Lokální",
        answer: "1. Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:9",
        prompt: "Vysvetli pojem: 2. Celkové",
        answer: "2. Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:10",
        prompt: "Shrn cast: IV. protiklad ostatních procedur",
        answer: "IV. protiklad ostatních procedur: vazokonstrikce, snížena permeabilita a diapedéza, zhoršuje buněčnou imunitu, zhoršuje spasmy",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:11",
        prompt: "Shrn cast: V. aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imuni",
        answer: "V. aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:12",
        prompt: "Shrn cast: VI. analgetické účinky",
        answer: "VI. analgetické účinky",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:13",
        prompt: "Shrn cast: VII. Indikace",
        answer: "1. akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace 2. chronické bolestivé stavy - artróza, revmatoidní artritida 3. reflexní svalové změny - po krátkém kryostimulu intenzivní hyperémie 4. spasticita - snižuje dráždivost 5. RA, hemeroidy",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:14",
        prompt: "Vysvetli pojem: 1. akutní traumata a záněty",
        answer: "1. akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:15",
        prompt: "Vysvetli pojem: 2. chronické bolestivé stavy",
        answer: "2. chronické bolestivé stavy - artróza, revmatoidní artritida",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:16",
        prompt: "Vysvetli pojem: 3. reflexní svalové změny",
        answer: "3. reflexní svalové změny - po krátkém kryostimulu intenzivní hyperémie",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:17",
        prompt: "Vysvetli pojem: 4. spasticita",
        answer: "4. spasticita - snižuje dráždivost",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:18",
        prompt: "Co je dulezite k tematu: VII. Indikace?",
        answer: "5. RA, hemeroidy",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:19",
        prompt: "Shrn cast: VIII. Kontraindikace",
        answer: "VIII. Kontraindikace - nestabilní hypertenze, IM méně než půl rok, srdeční/respirační dekompenzace, angina pectoris - poruchy prokrvení, citlivosti, chladová alergie, anémie, záchvatovité onemocnění - Raynaudova choroba, kryoglubulinémie, paroyxysmální chladová hemoglobinurie",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:20",
        prompt: "Shrn cast: IX. N.Ú. kryoterapie",
        answer: "IX. N.Ú. kryoterapie: poškození kůže, omrzliny, poškození periferního nervu, paradoxní reakce na chlad",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:8:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "D. Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "D. Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. chronické bolestivé stavy - artróza, revmatoidní artritida",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. chronické bolestivé stavy - artróza, revmatoidní artritida",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. reflexní svalové změny - po krátkém kryostimulu intenzivní hyperémie",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. reflexní svalové změny - po krátkém kryostimulu intenzivní hyperémie",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. spasticita - snižuje dráždivost",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. spasticita - snižuje dráždivost",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Lokální: ledové obklady, gelové sáčky, studená voda, kryosprej, ledové masáže, ledové komprese",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Lokální: ledové obklady, gelové sáčky, studená voda, kryosprej, ledové masáže, ledové komprese",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Celkové: kryokomora (chránit akra, poté následuje lehké cvičení a protažení, teplota mínus 180 st.C, max. 3 minuty)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Celkové: kryokomora (chránit akra, poté následuje lehké cvičení a protažení, teplota mínus 180 st.C, max. 3 minuty)",
      },
    ],
  },
  "ix-fyzikalni-terapie:9": {
    chapters: [
      {
        title: "I. Definice: je terapeutické využívání elektromagnetického vlnění s vlnovou délkou 10⁻⁴ až 10⁻⁹ m",
        points: [
        ]
      },
      {
        title: "II. Rozdělení",
        points: [
          "1. dle vlnové délky",
          "A. UV \u003c 400 nm",
          "B. viditelné světlo 400 - 760 nm",
          "C. IR \u003e 760 nm",
          "2. dle polarizace",
          "A. polarizované - laser, biolampa - kmitá uspořádaně",
          "B. nepolarizované - kmitá v mnoha různých rovinách",
        ]
      },
      {
        title: "III. UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření",
        points: [
          "1. UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
          "2. UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
          "3. UVC \u003c 280 nm karcinogenní, desinfekce sálů",
          "Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
        ]
      },
      {
        title: "IV. Viditelné světlo - klimatoterapi, vliv na růst, regeneraci, psychický vliv",
        points: [
          "1. Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu - indikace: hojení ran, popáleniny, kožních defektů - minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min. 3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
          "2. Laser - light amplification by stimulated emission of light - ochrana očí! - monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1. do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4. nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2 - pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace - KI: malignita, st.p. radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická - indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
        ]
      },
      {
        title: "V. IR (infračervené záření)",
        points: [
          "1. A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace",
          "2. B 1000 °C - působí povrchně - ohřívá kůži, při delší aplikaci tepelně zatěžuje kožní povrch - navození celkové relaxace před další FT",
          "3. C radiátory",
        ]
      },
      {
        title: "VI. fyziologické účinky: analogické aplikaci tepla, stimulace lokální cirkulace s následnou hyperemií",
        points: [
        ]
      },
      {
        title: "VII. v krátké době kůže začervená, pacient cítí teplo, tepelný erytém vzniká v průběhu ozařování vlivem lokální vazodilatace, do 2 jod zmizí, nezanechává pigmentaci",
        points: [
        ]
      },
      {
        title: "VIII. relaxace, celkové zklidnění, uvolnění spazmů, zvýšení absorpce exsudátů, mírná analgezie, zvyšuje permeabilitu kapilár, diapedéza leukocytů",
        points: [
        ]
      },
      {
        title: "IX. KI: febrilie, hypertenze, těhotenství, dekompenzovaná arteriální hypertenze, srdeční selhání",
        points: [
        ]
      },
      {
        title: "X. 10-20 min. vzdálenost 100 cm IR-B,",
        points: [
        ]
      },
      {
        title: "XI. 1-8 min. vzdálenost 20 cm IR-A",
        points: [
        ]
      },
      {
        title: "XII. indikace: posttraumatické stavy od 2.-3. dne, chronické bolestivé stavy pohybové ústrojí (před zahájení fyzioterapie), kloubní ztuhlost, tendinitidy, spasmy,",
        points: [
        ]
      },
      {
        title: "XIII. součást jiných terapeutických postupů",
        points: [
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:9:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: je terapeutické využívání elektromagnetického vlnění s vlnovou délkou 10⁻⁴ až 10⁻⁹ m",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:2",
        prompt: "Shrn cast: II. Rozdělení",
        answer: "1. dle vlnové délky A. UV \u003c 400 nm B. viditelné světlo 400 - 760 nm C. IR \u003e 760 nm 2. dle polarizace",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:3",
        prompt: "Co je dulezite k tematu: II. Rozdělení?",
        answer: "1. dle vlnové délky",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:4",
        prompt: "Co je dulezite k tematu: II. Rozdělení?",
        answer: "A. UV \u003c 400 nm",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:5",
        prompt: "Vysvetli pojem: B. viditelné světlo 400",
        answer: "B. viditelné světlo 400 - 760 nm",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:6",
        prompt: "Co je dulezite k tematu: II. Rozdělení?",
        answer: "C. IR \u003e 760 nm",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:7",
        prompt: "Co je dulezite k tematu: II. Rozdělení?",
        answer: "2. dle polarizace",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:8",
        prompt: "Vysvetli pojem: A. polarizované",
        answer: "A. polarizované - laser, biolampa - kmitá uspořádaně",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:9",
        prompt: "Vysvetli pojem: B. nepolarizované",
        answer: "B. nepolarizované - kmitá v mnoha různých rovinách",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:10",
        prompt: "Shrn cast: III. UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření",
        answer: "1. UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče 2. UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní 3. UVC \u003c 280 nm karcinogenní, desinfekce sálů Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:11",
        prompt: "Vysvetli pojem: 1. UVA 315",
        answer: "1. UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:12",
        prompt: "Vysvetli pojem: 2. UVB 280",
        answer: "2. UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:13",
        prompt: "Co je dulezite k tematu: III. UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření?",
        answer: "3. UVC \u003c 280 nm karcinogenní, desinfekce sálů",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:14",
        prompt: "Vysvetli pojem: Prahová erytémová dávka UV",
        answer: "Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:15",
        prompt: "Shrn cast: IV. Viditelné světlo",
        answer: "1. Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu - indikace: hojení ran, popáleniny, kožních defektů - minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min. 3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně 2. Laser - light amplification by stimulated emission of light - ochrana očí! - monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1. do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4. nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2 - pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace - KI: malignita, st.p. radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická - indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:16",
        prompt: "Vysvetli pojem: 1. Biolampa",
        answer: "1. Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu - indikace: hojení ran, popáleniny, kožních defektů - minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min. 3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:17",
        prompt: "Vysvetli pojem: 2. Laser",
        answer: "2. Laser - light amplification by stimulated emission of light - ochrana očí! - monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1. do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4. nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2 - pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace - KI: malignita, st.p. radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická - indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:18",
        prompt: "Shrn cast: V. IR (infračervené záření)",
        answer: "1. A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace 2. B 1000 °C - působí povrchně - ohřívá kůži, při delší aplikaci tepelně zatěžuje kožní povrch - navození celkové relaxace před další FT 3. C radiátory",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:19",
        prompt: "Vysvetli pojem: 1. A Wolfram, 2500 °C (solux)",
        answer: "1. A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:20",
        prompt: "Vysvetli pojem: 2. B 1000 °C",
        answer: "2. B 1000 °C - působí povrchně - ohřívá kůži, při delší aplikaci tepelně zatěžuje kožní povrch - navození celkové relaxace před další FT",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:9:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. viditelné světlo 400 - 760 nm",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. viditelné světlo 400 - 760 nm",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. polarizované - laser, biolampa - kmitá uspořádaně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. polarizované - laser, biolampa - kmitá uspořádaně",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. nepolarizované - kmitá v mnoha různých rovinách",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. nepolarizované - kmitá v mnoha různých rovinách",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. UVC \u003c 280 nm karcinogenní, desinfekce sálů",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. UVC \u003c 280 nm karcinogenní, desinfekce sálů",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:7",
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
        id: "ix-fyzikalni-terapie:9:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu - indikace: hojení ran, popáleniny, kožních defektů - minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min. 3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu - indikace: hojení ran, popáleniny, kožních defektů - minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min. 3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Laser - light amplification by stimulated emission of light - ochrana očí! - monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1. do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4. nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2 - pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace - KI: malignita, st.p. radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická - indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Laser - light amplification by stimulated emission of light - ochrana očí! - monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1. do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4. nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2 - pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace - KI: malignita, st.p. radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická - indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. B 1000 °C - působí povrchně - ohřívá kůži, při delší aplikaci tepelně zatěžuje kožní povrch - navození celkové relaxace před další FT",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. B 1000 °C - působí povrchně - ohřívá kůži, při delší aplikaci tepelně zatěžuje kožní povrch - navození celkové relaxace před další FT",
      },
    ],
  },
  "ix-fyzikalni-terapie:10": {
    chapters: [
      {
        title: "I. Definice: terapeutické využití elektromagnetických oscilací s frekvencí \u003e 100 (300) kHz - elektromagnetické vlny při takové frekvenci nestačí vyvolat depolarizaci membrány nervového vlákna, ale jsou v normální tkáni konvertované na teplo - terapeutické využití kondenzátorového, indukčního nebo zářivého vysokofrekvenčního pole - bezkontaktní elektroterapii - synonymum je diatermie - převážně termický efekt Diatermie = je fyzikální terapeutická metoda využívající vysokofrekvenční magnetické pole - nestačí se vyvolat depolarizaci nervových vláken, ale přenáší se na teplo",
        points: [
        ]
      },
      {
        title: "II. Diatermie dělení (liší se hloubkou účinku)",
        points: [
          "1. krátkovlnná - metrové vlny, proniká hlouběji",
          "2. ultrakrátkovlnná - decimetrové vlny",
          "3. mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
        ]
      },
      {
        title: "III. Způsob aplikace a zásady provozu - opatření nápisem - 2 m odstup od přístroje - zákaz gravidní ženy (nízká porodní hmotnost, VVV) - pravidelná revize technikem",
        points: [
        ]
      },
      {
        title: "IV. Krátkovlnná diatermie",
        points: [
          "1. aplikace",
          "A. kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
          "B. indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
          "2. účinky",
          "A. termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
          "B. krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
          "C. metabolické - aktivace metabolických procesů",
          "D. nervový systém - analgetické",
          "3. aplikace",
          "A. kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
          "B. pulzní - 20-50 Hz atermická procedura, 50-100 Hz hyperémie, zvýšená resorpce, 100-200 Hz blíží se kontinuální diatermii",
          "4. elektrody (součástí předpisu druh elektrody) - kondenzátorové, distanční, speciálně tvarované, indukční kabel, speciální (cirkuploda)",
          "5. intenzita - řídit se výrobcem přístroje a subjektivními pocity pacienta",
          "6. délka aplikace - subchronické a chronické procesy 15-20 minut - akutní stavy (furunkl, karbunkl, panaritium) 3 minuty a dále podle reakce pacienta",
          "7. frekvence procedur - účinek správně indikované a provedené diatermie je prolongovaný a přetrvává 48 hod - optimálně 3x týdně - počet procedur 9, během 3 týdnů",
          "8. KI: růstová zóna, akutní záněty, st.p.laminectomii (oblast jizvy), psychické poruchy, kochleární implantát, kardiostimulátor, přes sádru/dlahy/leukoplast, osteomyelitis, čerstvé zlomeniny, kovy, vředy, scrotum, žlázy, terapie kortikoidy, pacient na kovové posteli, žaludeční vředy",
          "9. indikace: neuritis brachiálního plesu, bursitidy, dislokace, epikondylitis, facetový syndrom, kořenové syndromy, lumbalgie, RA",
        ]
      },
      {
        title: "V. Ultrakrátkovlnné diatermie - absorpce a přeměna energie vysokofrekvenčního pole na energii tepelnou dochází k vnitřní tvorbě tepla, toto teplo je odváděno krví (konvekcí), dochází k vazodilataci, zvýšení permeabilitě kapilár, diatézy leukocytů, zvýšená resorbce extravazálních tekutin - svaly: prohřívání svalových spasmů, termický účinek - aplikace: speciální zářič 5-15 min, intenzita termicky senzitivní (první pocit tepla pacienta)",
        points: [
        ]
      },
      {
        title: "VI. Mikrovlnná diatermie - vysokofrekvenční elektromagnetické pole s f 2,45 GHz a vlnovou délkou (centimetrové vlny) - maximum tvorby tepla ve svalové tkání - předepisování a provádění procedury dle údaji výrobce",
        points: [
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:10:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: terapeutické využití elektromagnetických oscilací s frekvencí \u003e 100 (300) kHz - elektromagnetické vlny při takové frekvenci nestačí vyvolat depolarizaci membrány nervového vlákna, ale jsou v normální tkáni konvertované na teplo - terapeutické využití kondenzátorového, indukčního nebo zářivého vysokofrekvenčního pole - bezkontaktní elektroterapii - synonymum je diatermie - převážně termický efekt Diatermie = je fyzikální terapeutická metoda využívající vysokofrekvenční magnetické pole - nestačí se vyvolat depolarizaci nervových vláken, ale přenáší se na teplo",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:2",
        prompt: "Shrn cast: II. Diatermie dělení (liší se hloubkou účinku)",
        answer: "1. krátkovlnná - metrové vlny, proniká hlouběji 2. ultrakrátkovlnná - decimetrové vlny 3. mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:3",
        prompt: "Vysvetli pojem: 1. krátkovlnná",
        answer: "1. krátkovlnná - metrové vlny, proniká hlouběji",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:4",
        prompt: "Vysvetli pojem: 2. ultrakrátkovlnná",
        answer: "2. ultrakrátkovlnná - decimetrové vlny",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:5",
        prompt: "Vysvetli pojem: 3. mikrovlnná",
        answer: "3. mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:6",
        prompt: "Shrn cast: III. Způsob aplikace a zásady provozu",
        answer: "III. Způsob aplikace a zásady provozu - opatření nápisem - 2 m odstup od přístroje - zákaz gravidní ženy (nízká porodní hmotnost, VVV) - pravidelná revize technikem",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:7",
        prompt: "Shrn cast: IV. Krátkovlnná diatermie",
        answer: "1. aplikace A. kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk) B. indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole) 2. účinky A. termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:8",
        prompt: "Co je dulezite k tematu: IV. Krátkovlnná diatermie?",
        answer: "1. aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:9",
        prompt: "Vysvetli pojem: A. kondenzátorové pole",
        answer: "A. kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:10",
        prompt: "Vysvetli pojem: B. indukční pole",
        answer: "B. indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:11",
        prompt: "Co je dulezite k tematu: IV. Krátkovlnná diatermie?",
        answer: "2. účinky",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:12",
        prompt: "Vysvetli pojem: A. termální",
        answer: "A. termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:13",
        prompt: "Vysvetli pojem: B. krevní změny",
        answer: "B. krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:14",
        prompt: "Vysvetli pojem: C. metabolické",
        answer: "C. metabolické - aktivace metabolických procesů",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:15",
        prompt: "Vysvetli pojem: D. nervový systém",
        answer: "D. nervový systém - analgetické",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:16",
        prompt: "Co je dulezite k tematu: IV. Krátkovlnná diatermie?",
        answer: "3. aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:17",
        prompt: "Vysvetli pojem: A. kontinuální",
        answer: "A. kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:18",
        prompt: "Vysvetli pojem: B. pulzní",
        answer: "B. pulzní - 20-50 Hz atermická procedura, 50-100 Hz hyperémie, zvýšená resorpce, 100-200 Hz blíží se kontinuální diatermii",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:19",
        prompt: "Vysvetli pojem: 4. elektrody (součástí předpisu druh elektrody)",
        answer: "4. elektrody (součástí předpisu druh elektrody) - kondenzátorové, distanční, speciálně tvarované, indukční kabel, speciální (cirkuploda)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:20",
        prompt: "Vysvetli pojem: 5. intenzita",
        answer: "5. intenzita - řídit se výrobcem přístroje a subjektivními pocity pacienta",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:10:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. krátkovlnná - metrové vlny, proniká hlouběji",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. krátkovlnná - metrové vlny, proniká hlouběji",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. ultrakrátkovlnná - decimetrové vlny",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. ultrakrátkovlnná - decimetrové vlny",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. metabolické - aktivace metabolických procesů",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. metabolické - aktivace metabolických procesů",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "D. nervový systém - analgetické",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "D. nervový systém - analgetické",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. pulzní - 20-50 Hz atermická procedura, 50-100 Hz hyperémie, zvýšená resorpce, 100-200 Hz blíží se kontinuální diatermii",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. pulzní - 20-50 Hz atermická procedura, 50-100 Hz hyperémie, zvýšená resorpce, 100-200 Hz blíží se kontinuální diatermii",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. elektrody (součástí předpisu druh elektrody) - kondenzátorové, distanční, speciálně tvarované, indukční kabel, speciální (cirkuploda)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. elektrody (součástí předpisu druh elektrody) - kondenzátorové, distanční, speciálně tvarované, indukční kabel, speciální (cirkuploda)",
      },
    ],
  },
  "ix-fyzikalni-terapie:11": {
    chapters: [
      {
        title: "I. Definice: elektrostimulace je metoda elektroterapie, při které elektrickým proudem vyvoláme depolarizaci nervu nebo přímo svalového vlákna s následnou svalovou kontrakcí - při poškození periferního nervu pro udržení trofiky svalů a zabránění fibroblastické přestavbě než dojde k reinervaci poškozeného nervu",
        points: [
          "1. Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů - využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
          "2. Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje - NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
          "3. Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2 - kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
        ]
      },
      {
        title: "II. Cíl elektrostimulace",
        points: [
          "1. zachovat/obnovit svalovou funkci",
          "2. zabránit/zmírnit svalovou atrofii",
          "3. zlepšit svalovou sílu",
          "4. podpořit motorickou reedukaci",
        ]
      },
      {
        title: "III. Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný - elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce - používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např. foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)",
        points: [
          "1. Indikace",
          "A. svalová slabost",
          "B. svalová atrofie při imobilizaci",
          "C. poruchy svalové aktivace",
        ]
      },
      {
        title: "IV. Elektrogymnastika denervovaného svalu - jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu! - dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)",
        points: [
          "1. Indikace",
          "A. poškození periferního nervu",
          "B. periferní paréza",
          "C. léze nervového kořene",
        ]
      },
      {
        title: "V. Kontraindikace elektrostimulace",
        points: [
          "A. kardiostimulátor",
          "B. aplikace přes srdce",
          "C. maligní nádor v místě aplikace",
          "D. akutní krvácení/tromboza",
          "E. těhotenství (neaplikovat přes pánev, břicho)",
          "F. poškození v místě elektrod",
          "G. akutní infekce a zánět v místě aplikace",
        ]
      },
      {
        title: "VI. I/T křivka - nejpřesnější ED pro léčbu periferních paréz, komplexní forma hodnocení dráždivosti - stanovení optimálních impulzů pro dráždění denervovaných svalů - komplexní forma hodnocení dráždivosti - graficky znázorňuje závislost intenzity potřebné k vyvolání prahového podráždění při postupném zkracování doby trvání impulzu - dříve se využívala reobáze a chronaxie, dnes Hoorweg-Weissova I/T křivka a z ní výpočitaný AQ kvocient - reobáze - nejmenší intenzita proudu, která při dostatečně dlouhém impulzu vyvolá minimální kontrakci (jak silný proud) - chronaxie - nejkratší doba impulzu (čas), která při intenzitě 2x reobáze vyvolá minimální kontrakci (jak dlouho musí působit) - u denervovaného svalu musíme dráždit přímo svalové vlákno a potřebujeme výrazně delší impulzy a vyšší intenzitu (charakteristicky se mění I/T křivka) - cíl: snažíme se o odpověď, co nejnižší intenzitou - čím delší délka impulzu, tím větší poškození, při zkrácení délky impulsu známka reinervace",
        points: [
        ]
      },
      {
        title: "VII. Akomodační kvocietn AQ - kvantitativně vyjadřuje změny svalové dráždivosti - zdravý sval: NS ploténky mají schopnost akomodace na pozvolný nástup šikmých impulzů, intenzita je 3-6x větší oproti pravoúhlému impulzu - denervovaný sval: ztrácí schopnost akomodace, kontrakci vyvolá šikmý impulz s intenzitou téměř stejnou jako má pravoúhlý impulz - při stimulaci denervovaných svalů šikmými proudy se zdravé svaly nezapojují, tudíž nevznikají nežádoucí svalové synkinézy - vypočítá se jako podíl minimální intenzity vyvolávající kontrakci šikmým a pravoúhlým impulzem při délce impulzu 1000 ms - hodnoty AQ: zdravý sval 2,7-6, částečně denervovaný pod 2,7, denervovaný kolem 1, nad 6 vegetativní dystonie",
        points: [
        ]
      },
      {
        title: "VIII. Provedení",
        points: [
          "1. Elektrostimulace: předcházíme energetickému vyčerpání, 1-3 min., 5-15 kontrakcí - I/T křivka časově náročné, nepříjemné pro pacienta (testování zdravých i nemocných svalů), erudice terapeuta, zaznamenávání naměření hodnot",
          "A. technika monopolární - přímá (motorický bod) x nepřímá (nerv), - stimulační katoda, anoda proximálně - motorický bod - místo vstupu do svalu, největší nakupení NS plotének, nejčastěji prox. 1/3 svalu, u denervovaného svalu se posouvá distálně",
          "B. technika bipolární - na začátek a konec svalu, anoda proximálně - předcházíme energetickému vyčerpání, 1-3 min., 5-15 kontrakcí",
          "2. Elektrogymnastika - NF proudy (DD, Fanatický proud, Trabert, TENS), SF (Kotzovy proudy) - intenzita nadprahově motorická (vyvolá záškub) - aplikace nejčastěji bipolární - doba kontrakce a relaxace (K,R) 1. fázické svaly K 3-6 s, R 2-3x delší, trvání 1-3 min. (max. 15 min.) 2. tonické svaly K 10-40 s, R minimálně stejně jako K, trvání 5-15 min. (max. 30 min.)",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:11:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "1. Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů - využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění 2. Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje - NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz) 3. Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2 - kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:2",
        prompt: "Vysvetli pojem: 1. Elektrodiagnostika",
        answer: "1. Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů - využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:3",
        prompt: "Vysvetli pojem: 2. Elektrostimulace",
        answer: "2. Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje - NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:4",
        prompt: "Vysvetli pojem: 3. Elektrogymnastika",
        answer: "3. Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2 - kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:5",
        prompt: "Shrn cast: II. Cíl elektrostimulace",
        answer: "1. zachovat/obnovit svalovou funkci 2. zabránit/zmírnit svalovou atrofii 3. zlepšit svalovou sílu 4. podpořit motorickou reedukaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:6",
        prompt: "Co je dulezite k tematu: II. Cíl elektrostimulace?",
        answer: "1. zachovat/obnovit svalovou funkci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:7",
        prompt: "Co je dulezite k tematu: II. Cíl elektrostimulace?",
        answer: "2. zabránit/zmírnit svalovou atrofii",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:8",
        prompt: "Co je dulezite k tematu: II. Cíl elektrostimulace?",
        answer: "3. zlepšit svalovou sílu",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:9",
        prompt: "Co je dulezite k tematu: II. Cíl elektrostimulace?",
        answer: "4. podpořit motorickou reedukaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:10",
        prompt: "Shrn cast: III. Elektrostimualce inervovaného svalu",
        answer: "1. Indikace A. svalová slabost B. svalová atrofie při imobilizaci C. poruchy svalové aktivace",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:11",
        prompt: "Co je dulezite k tematu: III. Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný - elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce - používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např. foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)?",
        answer: "1. Indikace",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:12",
        prompt: "Co je dulezite k tematu: III. Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný - elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce - používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např. foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)?",
        answer: "A. svalová slabost",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:13",
        prompt: "Co je dulezite k tematu: III. Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný - elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce - používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např. foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)?",
        answer: "B. svalová atrofie při imobilizaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:14",
        prompt: "Co je dulezite k tematu: III. Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný - elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce - používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např. foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)?",
        answer: "C. poruchy svalové aktivace",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:15",
        prompt: "Shrn cast: IV. Elektrogymnastika denervovaného svalu",
        answer: "1. Indikace A. poškození periferního nervu B. periferní paréza C. léze nervového kořene",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:16",
        prompt: "Co je dulezite k tematu: IV. Elektrogymnastika denervovaného svalu - jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu! - dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)?",
        answer: "1. Indikace",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:17",
        prompt: "Co je dulezite k tematu: IV. Elektrogymnastika denervovaného svalu - jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu! - dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)?",
        answer: "A. poškození periferního nervu",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:18",
        prompt: "Co je dulezite k tematu: IV. Elektrogymnastika denervovaného svalu - jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu! - dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)?",
        answer: "B. periferní paréza",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:19",
        prompt: "Co je dulezite k tematu: IV. Elektrogymnastika denervovaného svalu - jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu! - dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)?",
        answer: "C. léze nervového kořene",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:20",
        prompt: "Shrn cast: V. Kontraindikace elektrostimulace",
        answer: "A. kardiostimulátor B. aplikace přes srdce C. maligní nádor v místě aplikace D. akutní krvácení/tromboza E. těhotenství (neaplikovat přes pánev, břicho)",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:11:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů - využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů - využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje - NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje - NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2 - kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2 - kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. zachovat/obnovit svalovou funkci",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. zachovat/obnovit svalovou funkci",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. zabránit/zmírnit svalovou atrofii",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. zabránit/zmírnit svalovou atrofii",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. podpořit motorickou reedukaci",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. podpořit motorickou reedukaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. svalová atrofie při imobilizaci",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. svalová atrofie při imobilizaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. poruchy svalové aktivace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. poruchy svalové aktivace",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. poškození periferního nervu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. poškození periferního nervu",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. maligní nádor v místě aplikace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. maligní nádor v místě aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "D. akutní krvácení/tromboza",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "D. akutní krvácení/tromboza",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "E. těhotenství (neaplikovat přes pánev, břicho)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "E. těhotenství (neaplikovat přes pánev, břicho)",
      },
    ],
  },
  "ix-fyzikalni-terapie:12": {
    chapters: [
      {
        title: "I. Definice: terapeutické využívání vody s využitím jejích termických, mechanických a chemických vlastností k ovlivnění organizmu - vhodné pro všechny věkové kategorie pro udržení zdraví a prevenci nemoci - benefit: zvýšení kondice a výkonnosti, nespecifická odolnost - hranice celkové 42 °C, částečné 46°C",
        points: [
        ]
      },
      {
        title: "II. Dělení",
        points: [
          "1. zevní",
          "2. vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
          "3. prosté - použitá pouze voda, neupravená, bez přísad",
          "4. s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
          "5. klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
          "6. voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
          "7. částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
          "8. celkové - vany, sprchy, bazény, chodníky",
          "9. jednoduché - samostatná jedna procedura",
          "10. složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
          "11. střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
          "12. skotské střiky - střídání teplých a studených proudů vody pod tlakem",
          "13. hypotermní - pod 35 °C",
          "14. izotermní 35-37°C",
          "15. hypertermní 38-42°C - 42°C bod tolerance pro celkovou vodní koupel (nevhodná pro cvičení) - 46°C bod tolerance pro kůži pro částečné koupele (od kolen/loktů distálně)",
        ]
      },
      {
        title: "III. Fyzikální energie vodních procedur jsou",
        points: [
          "1. energie tepla (chlad, teplo, střídání podmětů)",
          "2. mechanická energie (tlak, vztlak, trakce)",
          "3. kinetická energie (pasivně, aktivně, odporově)",
          "4. ve vodě odpadává vliv gravitace",
        ]
      },
      {
        title: "IV. Mechanizmus účinku - působení vody: teplotou, hydrostatickým tlakem, vztlakem, odporem vody (CHAT)",
        points: [
          "A. vztlak - snižuje efektivní hmotnost těla, odlehčuje klouby, páteř (Archimedův zákon) - dle mineralizace je pacient různě nadlehčovaný - způsobuje změnu propriorecepce, umožní pohyb, který je na suchu nemožný, mizí strach z pádů, ovlivní ANS (mírné krátké zrychlení TF a zvýšení TK, prohloubí se dýchání)",
          "B. hydrostatický tlak - tlak na povrch těla, podporuje žilní návrat, zlepšuje cirkulaci, působí na periferní otok, ovlivňuje propriorecepci - zužuje obvod hrudníku, komprimuje obvod břicha, stoupá nitrobřišní tlak, zvyšuje se funkce ledvin",
          "C. odpor vody - posilování svalů, čím rychlejší pohyb, tím větší odpor",
          "D. teplota - teplá (snížuje sv. tonus, podpora relaxace, snížení bolesti, zvyšuje protažizelnost), chladná (působí stimulačně, snižuje bolest, vazokonstrikce)",
        ]
      },
      {
        title: "V. Hydrokinezioterapie = léčebné cvičení ve vodě - kondice, posílení, dechové cvičení - skupinové - individuální - Hubbardův tank, malé bazénky, bazény, bazénový chodník - plavání - rekreační, léčebné, řízené",
        points: [
        ]
      },
      {
        title: "VI. Indikace - chronické onemocnění vaziva, kloubů - neurologické onemocnění - parézy, poruchy rovnováhy, RS, Parkinson, porucha chůze - po operacích TEP, rekonstruuje vazů - m. Bechtěrev - spasmy - parézy - gynekologie - obezita",
        points: [
        ]
      },
      {
        title: "VII. Kontraindikace - kardinální dekompenzace, maligní hypertenze, St. p. 6 měsíců po IM - akutní TBC, infekční choroby, akutní stádia psychózy, alergie na chlor, atd., dekubity - přenosné kožní infekce - inkontinence - dekompenzovaná epilepsie - závažné poruchy vědomí - gravidita - kachexie",
        points: [
        ]
      },
      {
        title: "VIII. Vodoléčba x hydrokinezioterapie vodoléčba: účinek samotné vody (teplota, vztlak, hydrostatický tlak, mechanické působení) hydrokinezioterapie: aktivní cvičení ve vodě, při kterém využíváme vlastnosti vody",
        points: [
          "Pomůcka:",
          "VODA 4 VHOT (vztlak, hydrostatický tlak, odpor, teplota)",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:12:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: terapeutické využívání vody s využitím jejích termických, mechanických a chemických vlastností k ovlivnění organizmu - vhodné pro všechny věkové kategorie pro udržení zdraví a prevenci nemoci - benefit: zvýšení kondice a výkonnosti, nespecifická odolnost - hranice celkové 42 °C, částečné 46°C",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:2",
        prompt: "Shrn cast: II. Dělení",
        answer: "1. zevní 2. vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní 3. prosté - použitá pouze voda, neupravená, bez přísad 4. s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná 5. klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:3",
        prompt: "Co je dulezite k tematu: II. Dělení?",
        answer: "1. zevní",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:4",
        prompt: "Vysvetli pojem: 2. vnitřní",
        answer: "2. vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:5",
        prompt: "Vysvetli pojem: 3. prosté",
        answer: "3. prosté - použitá pouze voda, neupravená, bez přísad",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:6",
        prompt: "Vysvetli pojem: 4. s přírodní minerální vodou",
        answer: "4. s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:7",
        prompt: "Co je dulezite k tematu: II. Dělení?",
        answer: "5. klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:8",
        prompt: "Vysvetli pojem: 6. voda s uměle přidanými přísady (organické",
        answer: "6. voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:9",
        prompt: "Vysvetli pojem: 7. částečné",
        answer: "7. částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:10",
        prompt: "Vysvetli pojem: 8. celkové",
        answer: "8. celkové - vany, sprchy, bazény, chodníky",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:11",
        prompt: "Vysvetli pojem: 9. jednoduché",
        answer: "9. jednoduché - samostatná jedna procedura",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:12",
        prompt: "Vysvetli pojem: 10. složité",
        answer: "10. složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:13",
        prompt: "Vysvetli pojem: 11. střídavé",
        answer: "11. střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:14",
        prompt: "Vysvetli pojem: 12. skotské střiky",
        answer: "12. skotské střiky - střídání teplých a studených proudů vody pod tlakem",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:15",
        prompt: "Vysvetli pojem: 13. hypotermní",
        answer: "13. hypotermní - pod 35 °C",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:16",
        prompt: "Vysvetli pojem: 14. izotermní 35",
        answer: "14. izotermní 35-37°C",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:17",
        prompt: "Vysvetli pojem: 15. hypertermní 38",
        answer: "15. hypertermní 38-42°C - 42°C bod tolerance pro celkovou vodní koupel (nevhodná pro cvičení) - 46°C bod tolerance pro kůži pro částečné koupele (od kolen/loktů distálně)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:18",
        prompt: "Shrn cast: III. Fyzikální energie vodních procedur jsou",
        answer: "1. energie tepla (chlad, teplo, střídání podmětů) 2. mechanická energie (tlak, vztlak, trakce) 3. kinetická energie (pasivně, aktivně, odporově) 4. ve vodě odpadává vliv gravitace",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:19",
        prompt: "Co je dulezite k tematu: III. Fyzikální energie vodních procedur jsou?",
        answer: "1. energie tepla (chlad, teplo, střídání podmětů)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:20",
        prompt: "Co je dulezite k tematu: III. Fyzikální energie vodních procedur jsou?",
        answer: "2. mechanická energie (tlak, vztlak, trakce)",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:12:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. prosté - použitá pouze voda, neupravená, bez přísad",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. prosté - použitá pouze voda, neupravená, bez přísad",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "5. klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "5. klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "6. voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "6. voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "7. částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "7. částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "8. celkové - vany, sprchy, bazény, chodníky",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "8. celkové - vany, sprchy, bazény, chodníky",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "9. jednoduché - samostatná jedna procedura",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "9. jednoduché - samostatná jedna procedura",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "10. složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "10. složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "11. střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "11. střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "12. skotské střiky - střídání teplých a studených proudů vody pod tlakem",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "12. skotské střiky - střídání teplých a studených proudů vody pod tlakem",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "13. hypotermní - pod 35 °C",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "13. hypotermní - pod 35 °C",
      },
    ],
  },
  "ix-fyzikalni-terapie:13": {
    chapters: [
      {
        title: "I. Definice: je fyzikální terapie, která vzniká průchodem el. proudu o nízké frekvenci (10-70 Hz) vodičem nebo cívkou - protéka-li cívkou pulzní proud, vzniká pulzní magnetické pole - distanční terapie, která využívá k terapii biologické účinky elektromagnetického pole - v rehabilitaci se využívá nízkofrekvenční pulzní magnetické pole - magnetická indukce: je fyzikální veličiny, popisuje sílu a směr magnetického pole, jednotka Tesla, magnetické pole vzniká kolem každého vodiče, kterým teče proud - frekvence: jak často se impulzy opakují (Hz)",
        points: [
        ]
      },
      {
        title: "II. Dělení - pulzní magnetické pole se ovlivňuje indukcí a frekvencí a jejich různou kombinací - frekvence - jak rychle se pouští proud (kolikrát za sekundu) - indukce - jak silné je magnetické pole",
        points: [
          "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé)",
          "1. Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek - nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
          "2. Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
          "3. Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
        ]
      },
      {
        title: "III. Účinky",
        points: [
          "1. analgetické",
          "2. myorelaxační a myotonizační",
          "3. vazodilatační a tím podpora výživy všech tkání",
          "4. trofický - podpora metabolismu, reparace tkání, podpora hojení",
          "5. imunostimulační a protizánětlivý",
          "6. vagotropní - pokles TF, TK, periferní vazodilatace",
          "7. sedativní",
          "8. snižuje srážlivost (neaplikovat u warfarinizovaných)",
          "9. osteogenní - podpora osteogeneze, proto se používají při opožděném hojení/paklouby, ovlivňuje výměnu vápníku mezi buňkami a okolím",
        ]
      },
      {
        title: "IV. Vlastnosti magnetoterapie - magnetická indukce - ovlivňuje membránové receptory, nemá tepelný účinek - spíše trofotropní - myorelaxace, spamolyza, analgezie - frekvence: do 10 Hz protizánětlivá, 25-50 Hz trofotropní, 70 Hz revaskularizace - magnetické pole prochází přes oděv i sádrovou fixaci - magnetická pole: statická (stálá)/dynamická - střídavá/pulzní)",
        points: [
        ]
      },
      {
        title: "V. Dělení magnetoterapie",
        points: [
          "1. léčba statickými magnetickými poli (na akupunkturní body)",
          "2. léčba nízkofrekvenčními magnetickými poli",
        ]
      },
      {
        title: "VI. Aplikátory (cívka vytvářející pulzní magnetické pole) - solenoid (cívka), deskové (plošné), prstencové - 10 - 40 min., alespoň 10x, jednotka mT",
        points: [
        ]
      },
      {
        title: "VII. Indikace - porucha trofiky - bolestivé stavy známé etiologie - fraktury - myotonizace/relaxace - artrózy - hojení tkání - aseptické záněty",
        points: [
        ]
      },
      {
        title: "VIII. Kontraindikace (i personálu a každé osoby v prostoru magnetoterapie) - gravidita - celé období - pace-maker - kardiostimulátor, ICD - tumory - krvácivé stavy - nebezpečí krvácení do vnitřních orgánů (zvýší krvácení při menstruaci) - hyperfunkce/dysfunkce endokrinních žláz - myastenia gravis - akutní onemocnění - TBC, těžké virové, bakteriální, mykotické onemocnění - těžký stupeň ICHS, ICHDK - záchvatovité onemocnění (psychiatrické/neurologické)",
        points: [
        ]
      },
      {
        title: "IX. Vedlejší účinky: - zklidnění až usínání - bolest hlavy, závratě během procedury, kolapsové stavy, nauzea/průjem po ukončení - vyvolání epileptického záchvatu",
        points: [
        ]
      },
      {
        title: "X. Zásady provozu - manipulace pouze s vypnutým přístrojem - pozor na mobilní telefon, kovové předměty citlivé na magnetické pole - pohyb 1 m od přístroje, když je vchodu a omezit dobu u přístroje (personál)",
        points: [
          "Předpis:",
          "Jméno, RČ, dg. číslem i slovem, místo aplikace, druh aplikátoru, intenzita pole mT, frekvence, pulzů, trvání, frekvence procedury, kolikrát a kontrola.",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:13:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: je fyzikální terapie, která vzniká průchodem el. proudu o nízké frekvenci (10-70 Hz) vodičem nebo cívkou - protéka-li cívkou pulzní proud, vzniká pulzní magnetické pole - distanční terapie, která využívá k terapii biologické účinky elektromagnetického pole - v rehabilitaci se využívá nízkofrekvenční pulzní magnetické pole - magnetická indukce: je fyzikální veličiny, popisuje sílu a směr magnetického pole, jednotka Tesla, magnetické pole vzniká kolem každého vodiče, kterým teče proud - frekvence: jak často se impulzy opakují (Hz)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:2",
        prompt: "Shrn cast: II. Dělení",
        answer: "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé) 1. Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek - nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub 2. Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz 3. Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:3",
        prompt: "Vysvetli pojem: Magnetická pole",
        answer: "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:4",
        prompt: "Vysvetli pojem: 1. Nízkofrekvenční pulzní magnetické pole 100",
        answer: "1. Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek - nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:5",
        prompt: "Vysvetli pojem: 2. Vysokofrekvenční elektromagnetické pole",
        answer: "2. Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:6",
        prompt: "Vysvetli pojem: 3. Vysokointenzivní pulzní magnetické pole",
        answer: "3. Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:7",
        prompt: "Shrn cast: III. Účinky",
        answer: "1. analgetické 2. myorelaxační a myotonizační 3. vazodilatační a tím podpora výživy všech tkání 4. trofický - podpora metabolismu, reparace tkání, podpora hojení 5. imunostimulační a protizánětlivý",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:8",
        prompt: "Co je dulezite k tematu: III. Účinky?",
        answer: "1. analgetické",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:9",
        prompt: "Co je dulezite k tematu: III. Účinky?",
        answer: "2. myorelaxační a myotonizační",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:10",
        prompt: "Co je dulezite k tematu: III. Účinky?",
        answer: "3. vazodilatační a tím podpora výživy všech tkání",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:11",
        prompt: "Vysvetli pojem: 4. trofický",
        answer: "4. trofický - podpora metabolismu, reparace tkání, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:12",
        prompt: "Co je dulezite k tematu: III. Účinky?",
        answer: "5. imunostimulační a protizánětlivý",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:13",
        prompt: "Vysvetli pojem: 6. vagotropní",
        answer: "6. vagotropní - pokles TF, TK, periferní vazodilatace",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:14",
        prompt: "Co je dulezite k tematu: III. Účinky?",
        answer: "7. sedativní",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:15",
        prompt: "Co je dulezite k tematu: III. Účinky?",
        answer: "8. snižuje srážlivost (neaplikovat u warfarinizovaných)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:16",
        prompt: "Vysvetli pojem: 9. osteogenní",
        answer: "9. osteogenní - podpora osteogeneze, proto se používají při opožděném hojení/paklouby, ovlivňuje výměnu vápníku mezi buňkami a okolím",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:17",
        prompt: "Shrn cast: IV. Vlastnosti magnetoterapie",
        answer: "IV. Vlastnosti magnetoterapie - magnetická indukce - ovlivňuje membránové receptory, nemá tepelný účinek - spíše trofotropní - myorelaxace, spamolyza, analgezie - frekvence: do 10 Hz protizánětlivá, 25-50 Hz trofotropní, 70 Hz revaskularizace - magnetické pole prochází přes oděv i sádrovou fixaci - magnetická pole: statická (stálá)/dynamická - střídavá/pulzní)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:18",
        prompt: "Shrn cast: V. Dělení magnetoterapie",
        answer: "1. léčba statickými magnetickými poli (na akupunkturní body) 2. léčba nízkofrekvenčními magnetickými poli",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:19",
        prompt: "Co je dulezite k tematu: V. Dělení magnetoterapie?",
        answer: "1. léčba statickými magnetickými poli (na akupunkturní body)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:20",
        prompt: "Co je dulezite k tematu: V. Dělení magnetoterapie?",
        answer: "2. léčba nízkofrekvenčními magnetickými poli",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:13:quiz:1",
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
        id: "ix-fyzikalni-terapie:13:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek - nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek - nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. myorelaxační a myotonizační",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. myorelaxační a myotonizační",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. vazodilatační a tím podpora výživy všech tkání",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. vazodilatační a tím podpora výživy všech tkání",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. trofický - podpora metabolismu, reparace tkání, podpora hojení",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. trofický - podpora metabolismu, reparace tkání, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "5. imunostimulační a protizánětlivý",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "5. imunostimulační a protizánětlivý",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "6. vagotropní - pokles TF, TK, periferní vazodilatace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "6. vagotropní - pokles TF, TK, periferní vazodilatace",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "8. snižuje srážlivost (neaplikovat u warfarinizovaných)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "8. snižuje srážlivost (neaplikovat u warfarinizovaných)",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "9. osteogenní - podpora osteogeneze, proto se používají při opožděném hojení/paklouby, ovlivňuje výměnu vápníku mezi buňkami a okolím",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "9. osteogenní - podpora osteogeneze, proto se používají při opožděném hojení/paklouby, ovlivňuje výměnu vápníku mezi buňkami a okolím",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. léčba statickými magnetickými poli (na akupunkturní body)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. léčba statickými magnetickými poli (na akupunkturní body)",
      },
    ],
  },
  "ix-fyzikalni-terapie:14": {
    chapters: [
      {
        title: "I. Definice: je léčebné využití mechanické energie k ovlivnění pohybového aparátu, měkkých tkáních a některých poruch cirkulace. - využívá se se pohyb, tlak, tah, komprese, podtlak, mechanická vibrace",
        points: [
        ]
      },
      {
        title: "II. Cíl - obnovení nebo zvýšení ROM - snížení bolesti - ovlivnění svalového tonu - zlepšení cirkulace - redukce otoku",
        points: [
        ]
      },
      {
        title: "III. Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb) - přístroj provádí opakovaný pasivní pohyb v předem nastaveném rozsahu, pacient pohyb aktivně nevykonává - doplňková terapie k aktivní rehabilitaci - nastavení: ROM (postupně se zvětšuje), rychlost, počet cyklů, délka terapie - účinky: prevence kontraktury, udržení/zvětšení ROM, snížení bolesti, usnadnění časné mobilizace, redukce pooperační ztuhlosti - indikace: TEP koleno, kyčel, rameno, artroskopie, imobilizace vedoucí k omezení ROM - KI: nestabilní osteosyntéza, čerstvá fraktura, akutní infekce v kloubu, nestabilita v kloubu",
        points: [
        ]
      },
      {
        title: "IV. Vakuum-kompresivní terapie - přístroj založený na střídání přetlaku a podtlaku v uzavřeném prostoru - KI: akutní trombozy, tromboflebitidy, rozsáhlé varixy, rozsáhlé gangrény (nebezpečí toxemie), aneurysma, akutně vzniklé rány, lokální purulentní stavy, edémy kardinálního původu - indikace: porucha prokrvení končetiny (organické i funkční), algodystrofický syndrom, chronické otoky, lymfedémy, trofické poruchy kůže, posttraumatické stavy - doba aplikace 25 min., pozitivní step 5 min. do 45-60 min., Sudek 12 minut - prodlužuje se délka aplikace, tlaky se nezvedají - limitem terapie je subjektivní vnímání pacienta a změna barvy končetiny, komprese končetiny",
        points: [
          "1. Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese - končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně - účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
          "2. Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
        ]
      },
      {
        title: "V. Trakce - pasivní procedura, neměla by bolet - mechanická síla působí tah v ose končetiny nebo páteře či kořenového kloubu - dle zdroje síly: přístrojová/manuální, dle průběhu: kontinuální/přerušované - mechanismus účinku: při dostatečné relaxaci okolního svalstva dochází k oddálení obratlů/kloubních ploch, zvětšení rozměru foramen intervertebrale, odlehčení podrážděných kloubních ploch, snížení tlaku na ncl. pulposus v disku, protažení kloubních pouzder a okolních ligament - základním předpokladem je negativní výsledek ručního trakčního testu (trakce přinese úlevu) - KI: pozitivní trakční test (zhoršení potíží při/po trakčním testu), hypertenze II a III dle WHO, neurovegetativní dystonie, sklon k ortostatickým kolapsům, nepříznivý účinek při předchozí trakci - provedení: po trakci pacient musí zůstat ležet stejně dlouho jako trvala trakce, vhodné před trakcí aplikovat relaxační FT (UZ, solux, parafin), trakční poloha: Fowler pozice kyčle a kolena ve flexi 90 st./polohovací stolek (škubnutí, špatně se dozoruje síla), zátěž 5-60 kg, trvání 10-20 minut, frekvence 2-3 týdně chronický, 1x denně akutně",
        points: [
          "1. trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
          "2. periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
        ]
      },
      {
        title: "VI. Vibrační terapie - mechanické vibrace ovlivňují svalový tonus, propriorecepci, cirkulaci, vnímání bolesti",
        points: [
        ]
      },
      {
        title: "VII. Mechanické masážní přístroje - relaxační, cirkulační, analgetický účinek - využívají tlaku, vibrace, mechanické hnětení",
        points: [
        ]
      },
      {
        title: "VIII. Robotická/mechanicky asistovaná terapie - podporuje motorické učení, umožňuje vysoký počet opakování pohybu - např.: mechanicky asistovaný nácvik chůze, robotická rehabilitace HK",
        points: [
          "Vždy respektovat typ výkonu a pokyny operatéra.",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:14:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "I. Definice: je léčebné využití mechanické energie k ovlivnění pohybového aparátu, měkkých tkáních a některých poruch cirkulace. - využívá se se pohyb, tlak, tah, komprese, podtlak, mechanická vibrace",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:2",
        prompt: "Shrn cast: II. Cíl",
        answer: "II. Cíl - obnovení nebo zvýšení ROM - snížení bolesti - ovlivnění svalového tonu - zlepšení cirkulace - redukce otoku",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:3",
        prompt: "Shrn cast: III. Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb)",
        answer: "III. Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb) - přístroj provádí opakovaný pasivní pohyb v předem nastaveném rozsahu, pacient pohyb aktivně nevykonává - doplňková terapie k aktivní rehabilitaci - nastavení: ROM (postupně se zvětšuje), rychlost, počet cyklů, délka terapie - účinky: prevence kontraktury, udržení/zvětšení ROM, snížení bolesti, usnadnění časné mobilizace, redukce pooperační ztuhlosti - indikace: TEP koleno, kyčel, rameno, artroskopie, imobilizace vedoucí k omezení ROM - KI: nestabilní osteosyntéza, čerstvá fraktura, akutní infekce v kloubu, nestabilita v kloubu",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:4",
        prompt: "Shrn cast: IV. Vakuum",
        answer: "1. Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese - končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně - účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace 2. Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:5",
        prompt: "Vysvetli pojem: 1. Přetlak",
        answer: "1. Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese - končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně - účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:6",
        prompt: "Vysvetli pojem: 2. Podtlak",
        answer: "2. Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:7",
        prompt: "Shrn cast: V. Trakce",
        answer: "1. trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu 2. periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:8",
        prompt: "Vysvetli pojem: 1. trakce páteře",
        answer: "1. trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:9",
        prompt: "Vysvetli pojem: 2. periferních kloubů",
        answer: "2. periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:10",
        prompt: "Shrn cast: VI. Vibrační terapie",
        answer: "VI. Vibrační terapie - mechanické vibrace ovlivňují svalový tonus, propriorecepci, cirkulaci, vnímání bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:11",
        prompt: "Shrn cast: VII. Mechanické masážní přístroje",
        answer: "VII. Mechanické masážní přístroje - relaxační, cirkulační, analgetický účinek - využívají tlaku, vibrace, mechanické hnětení",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:12",
        prompt: "Shrn cast: VIII. Robotická/mechanicky asistovaná terapie",
        answer: "Vždy respektovat typ výkonu a pokyny operatéra.",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:13",
        prompt: "Co je dulezite k tematu: VIII. Robotická/mechanicky asistovaná terapie - podporuje motorické učení, umožňuje vysoký počet opakování pohybu - např.: mechanicky asistovaný nácvik chůze, robotická rehabilitace HK?",
        answer: "Vždy respektovat typ výkonu a pokyny operatéra.",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:14:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese - končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně - účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese - končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně - účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Vždy respektovat typ výkonu a pokyny operatéra.",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "Vždy respektovat typ výkonu a pokyny operatéra.",
      },
    ],
  },
  "ix-fyzikalni-terapie:15": {
    chapters: [
      {
        title: "I. Definice: soubor mechanizmů, kterými organizmus udržuje stálou tělesnou teplotu navzdory změnám okolního prostředí - centrální regulační orgán - hypotalamus - termogeneze - tvorba tepla - termolýza - výdej tepla",
        points: [
          "Tělesná teplota: výslednice mezi tvorbou a ztrátou",
          "Teplo: kinetická energie kmitajících molekul",
        ]
      },
      {
        title: "II. Řízení termoregulace - regulace autonomním nervovým systémem",
        points: [
          "1. Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
          "2. Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
        ]
      },
      {
        title: "III. Termogeneze - teplo vniká metabolickou aktivitou - termogeneze obligátní (bazální metabolismus)/fakultativní (sv. třes, zvýšený metabolismus) - zdroje: svalová práce, svalový třes, metabolismus bazálních orgánů, tukové tkáně - při chladu: stresová termogeneze (svalová kontrakce vede k tvorbě tepla)/netřesová termogeneze(novorozenci, hnědá tuková tkáň)",
        points: [
        ]
      },
      {
        title: "IV. Termolýza - ztáta tepla 4 mechanizmy",
        points: [
          "A. kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
          "B. konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
          "C. radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
          "D. evaporace - odpařování",
        ]
      },
      {
        title: "V. Reakce organizmu na chlad - vazokonstrikce, snížení průtoku krve kůží, omezení tepelných ztrát - třes, zvýšení svalový tonus, metabolická aktivita, behaviorální reakce - vyhledání teplo",
        points: [
        ]
      },
      {
        title: "VI. Reakce organizmu na teplo - vazodilatace, zvýšení průtoku krve kůží, zvýšení výdaje tepla, pocení, evaporace",
        points: [
        ]
      },
      {
        title: "VII. Hyperémie - zvýšení prokrvení tkáně",
        points: [
          "1. aktivní hyperémie - vazodilatace arteriol a zvýšení průtoku krve vede ke zvýšení přísunu O2, živin, odvodu metabolitů, podpoře regenerace, snížení tonu - teplo využíváme před mobilizací, protahováním, cvičením, manuální terapií",
          "2. reaktivní hyperémie - vzniká po krátkodobém přerušení nebo výrazným omezení průtoku krve",
          "3. pasivní hyperémie - městnání - venózní kongesce, není žádoucí",
        ]
      },
      {
        title: "VIII. Terapeutický význam hyperémie - zvýšení metabolismu - více krve (trofický) - odvod metabolitů - zvýšený průtok (resorbční) - reparace - lepší cirkulace - analgezie (analgetický) - snížení svalového tonu (spasmolytický)",
        points: [
        ]
      },
      {
        title: "IX. Typy hyperémie",
        points: [
          "1. tepelná - parafín, peloid, teplé koupele, infračervené záření",
          "2. mechanickými metodami - masáž",
          "3. pohybem - aktivní cvičení, svalová práce",
        ]
      },
      {
        title: "X. Vhodná hyperémie: chronické bolestivé stavy, svalová ztuhlost, chronické degenerativní změny, podpora hojení, příprava tkání před cvičením",
        points: [
        ]
      },
      {
        title: "XI. Nevhodná hyperémie: otok, překrvení, bolest, zánětliví reakce",
        points: [
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:15:flashcard:1",
        prompt: "Shrn cast: I. Definice",
        answer: "Tělesná teplota: výslednice mezi tvorbou a ztrátou Teplo: kinetická energie kmitajících molekul",
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
        prompt: "Shrn cast: II. Řízení termoregulace",
        answer: "1. Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě) 2. Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:5",
        prompt: "Vysvetli pojem: 1. Termoreceptory",
        answer: "1. Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:6",
        prompt: "Vysvetli pojem: 2. Hypotalamus",
        answer: "2. Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:7",
        prompt: "Shrn cast: III. Termogeneze",
        answer: "III. Termogeneze - teplo vniká metabolickou aktivitou - termogeneze obligátní (bazální metabolismus)/fakultativní (sv. třes, zvýšený metabolismus) - zdroje: svalová práce, svalový třes, metabolismus bazálních orgánů, tukové tkáně - při chladu: stresová termogeneze (svalová kontrakce vede k tvorbě tepla)/netřesová termogeneze(novorozenci, hnědá tuková tkáň)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:8",
        prompt: "Shrn cast: IV. Termolýza",
        answer: "A. kondukce - vedení (přímý přenos tepla mezi tělem a předmětem) B. konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda) C. radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření?? D. evaporace - odpařování",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:9",
        prompt: "Vysvetli pojem: A. kondukce",
        answer: "A. kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:10",
        prompt: "Vysvetli pojem: B. konvekce",
        answer: "B. konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:11",
        prompt: "Vysvetli pojem: C. radiace",
        answer: "C. radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:12",
        prompt: "Vysvetli pojem: D. evaporace",
        answer: "D. evaporace - odpařování",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:13",
        prompt: "Shrn cast: V. Reakce organizmu na chlad",
        answer: "V. Reakce organizmu na chlad - vazokonstrikce, snížení průtoku krve kůží, omezení tepelných ztrát - třes, zvýšení svalový tonus, metabolická aktivita, behaviorální reakce - vyhledání teplo",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:14",
        prompt: "Shrn cast: VI. Reakce organizmu na teplo",
        answer: "VI. Reakce organizmu na teplo - vazodilatace, zvýšení průtoku krve kůží, zvýšení výdaje tepla, pocení, evaporace",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:15",
        prompt: "Shrn cast: VII. Hyperémie",
        answer: "1. aktivní hyperémie - vazodilatace arteriol a zvýšení průtoku krve vede ke zvýšení přísunu O2, živin, odvodu metabolitů, podpoře regenerace, snížení tonu - teplo využíváme před mobilizací, protahováním, cvičením, manuální terapií 2. reaktivní hyperémie - vzniká po krátkodobém přerušení nebo výrazným omezení průtoku krve 3. pasivní hyperémie - městnání - venózní kongesce, není žádoucí",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:16",
        prompt: "Vysvetli pojem: 1. aktivní hyperémie",
        answer: "1. aktivní hyperémie - vazodilatace arteriol a zvýšení průtoku krve vede ke zvýšení přísunu O2, živin, odvodu metabolitů, podpoře regenerace, snížení tonu - teplo využíváme před mobilizací, protahováním, cvičením, manuální terapií",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:17",
        prompt: "Vysvetli pojem: 2. reaktivní hyperémie",
        answer: "2. reaktivní hyperémie - vzniká po krátkodobém přerušení nebo výrazným omezení průtoku krve",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:18",
        prompt: "Vysvetli pojem: 3. pasivní hyperémie",
        answer: "3. pasivní hyperémie - městnání - venózní kongesce, není žádoucí",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:19",
        prompt: "Shrn cast: VIII. Terapeutický význam hyperémie",
        answer: "VIII. Terapeutický význam hyperémie - zvýšení metabolismu - více krve (trofický) - odvod metabolitů - zvýšený průtok (resorbční) - reparace - lepší cirkulace - analgezie (analgetický) - snížení svalového tonu (spasmolytický)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:20",
        prompt: "Shrn cast: IX. Typy hyperémie",
        answer: "1. tepelná - parafín, peloid, teplé koupele, infračervené záření 2. mechanickými metodami - masáž 3. pohybem - aktivní cvičení, svalová práce",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:15:quiz:1",
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
        id: "ix-fyzikalni-terapie:15:quiz:2",
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
        id: "ix-fyzikalni-terapie:15:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. aktivní hyperémie - vazodilatace arteriol a zvýšení průtoku krve vede ke zvýšení přísunu O2, živin, odvodu metabolitů, podpoře regenerace, snížení tonu - teplo využíváme před mobilizací, protahováním, cvičením, manuální terapií",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. aktivní hyperémie - vazodilatace arteriol a zvýšení průtoku krve vede ke zvýšení přísunu O2, živin, odvodu metabolitů, podpoře regenerace, snížení tonu - teplo využíváme před mobilizací, protahováním, cvičením, manuální terapií",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. reaktivní hyperémie - vzniká po krátkodobém přerušení nebo výrazným omezení průtoku krve",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. reaktivní hyperémie - vzniká po krátkodobém přerušení nebo výrazným omezení průtoku krve",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. pasivní hyperémie - městnání - venózní kongesce, není žádoucí",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. pasivní hyperémie - městnání - venózní kongesce, není žádoucí",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. tepelná - parafín, peloid, teplé koupele, infračervené záření",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. tepelná - parafín, peloid, teplé koupele, infračervené záření",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. mechanickými metodami - masáž",
          "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
          "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. mechanickými metodami - masáž",
      },
    ],
  },
}
) satisfies Record<string, PreparedQuestionData>;
