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
        title: "Definice: praktické uplatnění fyzikálních léčebných postupů a metod na živých organizmech s cílem benefitu pro pacienta",
        points: [
        ]
      },
      {
        title: "Indikace",
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
        title: "Rozdělení fyzikální terapie",
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
        title: "Kontraindikace - lokální/celkové - obecné/speciální - relativní/absolutní",
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
        prompt: "Shrn cast: Definice",
        answer: "Definice: praktické uplatnění fyzikálních léčebných postupů a metod na živých organizmech s cílem benefitu pro pacienta",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:2",
        prompt: "Shrn cast: Indikace",
        answer: "1. analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje 2. myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt 3. trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus 4. antiedematózní 5. placebo - nezpochybňovat metodu 6. časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:3",
        prompt: "Co je dulezite k bodu: analgezie?",
        answer: "1. analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:4",
        prompt: "Co je dulezite k bodu: myorelaxace?",
        answer: "2. myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:5",
        prompt: "Co je dulezite k bodu: trofotropní účinek?",
        answer: "3. trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:6",
        prompt: "Co je dulezite k bodu: antiedematózní?",
        answer: "4. antiedematózní",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:7",
        prompt: "Co je dulezite k bodu: placebo?",
        answer: "5. placebo - nezpochybňovat metodu",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:8",
        prompt: "Co je dulezite k bodu: časový faktor?",
        answer: "6. časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:9",
        prompt: "Shrn cast: Rozdělení fyzikální terapie",
        answer: "1. mechanoterapie A. masáže B. polohování, trakce, extenze, TMT, mobilizace C. ultrazvuk 2. termoterapie A. pozitivní",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:10",
        prompt: "Co je dulezite k bodu: mechanoterapie?",
        answer: "1. mechanoterapie",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:11",
        prompt: "Co je dulezite k bodu: masáže?",
        answer: "A. masáže",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:12",
        prompt: "Co je dulezite k bodu: polohování, trakce, extenze, TMT, mobilizace?",
        answer: "B. polohování, trakce, extenze, TMT, mobilizace",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:13",
        prompt: "Co je dulezite k bodu: ultrazvuk?",
        answer: "C. ultrazvuk",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:14",
        prompt: "Co je dulezite k bodu: termoterapie?",
        answer: "2. termoterapie",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:15",
        prompt: "Co je dulezite k bodu: pozitivní?",
        answer: "A. pozitivní",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:16",
        prompt: "Co je dulezite k bodu: negativní?",
        answer: "B. negativní",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:17",
        prompt: "Co je dulezite k bodu: kombinovaná?",
        answer: "C. kombinovaná",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:18",
        prompt: "Co je dulezite k bodu: fototerapie (světelné vlnění)?",
        answer: "3. fototerapie (světelné vlnění)",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:19",
        prompt: "Co je dulezite k bodu: UV?",
        answer: "A. UV",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:20",
        prompt: "Co je dulezite k bodu: viditelné světlo?",
        answer: "B. viditelné světlo",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:21",
        prompt: "Co je dulezite k bodu: IR?",
        answer: "C. IR",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:22",
        prompt: "Co je dulezite k bodu: elektroterapie (elektrické proudění)?",
        answer: "4. elektroterapie (elektrické proudění)",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:23",
        prompt: "Co je dulezite k bodu: stejnosměrný?",
        answer: "A. stejnosměrný",
      },
      {
        id: "ix-fyzikalni-terapie:0:flashcard:24",
        prompt: "Co je dulezite k bodu: nízkofrekvenční?",
        answer: "B. nízkofrekvenční",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:0:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: praktické uplatnění fyzikálních léčebných postupů a metod na živých organizmech s cílem benefitu pro pacienta",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: praktické uplatnění fyzikálních léčebných postupů a metod na živých organizmech s cílem benefitu pro pacienta",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. analgezie - potlačení známé bolesti, dle bolesti volit typ FT, pokud po 6. aplikaci nezabere, tak vybraná FT nefunguje",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. myorelaxace - zlepšit prokrvení, sekundárně analgetický efekt",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. trofotropní účinek - stimulační, lepší regenerace, zvýšený metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "6. časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "6. časový faktor - je odkladný efekt je amorální, neetický, ale využíváme jej",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. polohování, trakce, extenze, TMT, mobilizace",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. polohování, trakce, extenze, TMT, mobilizace",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. elektroterapie (elektrické proudění)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. elektroterapie (elektrické proudění)",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Kontraindikace - lokální/celkové - obecné/speciální - relativní/absolutní",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Kontraindikace - lokální/celkové - obecné/speciální - relativní/absolutní",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. horečnaté stavy - nelze předpovídat reakci pacienta na léčbu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. horečnaté stavy - nelze předpovídat reakci pacienta na léčbu",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. kardiostimulátor - možnost narušit funkce všech elektronických zařízení",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. kardiostimulátor - možnost narušit funkce všech elektronických zařízení",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. kachexie - mění se kožní odpor, reaktivita organizmu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. kachexie - mění se kožní odpor, reaktivita organizmu",
      },
      {
        id: "ix-fyzikalni-terapie:0:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. hemoragické diatézy - zvyšuje se lokální prokrvení a tím riziko vzniku hematomu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. hemoragické diatézy - zvyšuje se lokální prokrvení a tím riziko vzniku hematomu",
      },
    ],
  },
  "ix-fyzikalni-terapie:1": {
    chapters: [
      {
        title: "Definice: terapeutické využití elektrického proudu",
        points: [
        ]
      },
      {
        title: "Co lze ovlivnit elektrickým proudem - nervový, svalový, cévní systém, vnímání bolesti, trofiku, metabolismus tkání",
        points: [
        ]
      },
      {
        title: "Elektrická vodivost tkání - dobře vodivé: krev, sval, nervová tkáň - hůře vodivé: tuk, kůže, kost (odpor kůže klesá zvlhčením, zvýšení kontaktní plochy elektrody)",
        points: [
        ]
      },
      {
        title: "Elektrický proud: tok elektricky nabitých částic (ionty - kationt/aniont nebo elektrony - záporně nabité částice ), dobře prochází tkáněmi s velkým obsahem vody a bílkovin - největší odpor průchodu klade kůže, kost, chrupavka, šlacha (malý obsah vody) - směr od katody (mínus) k anodě (plus), jednotka Ampér - účinek - analgetický, trofický, antiedematózní, myostimulační",
        points: [
          "1. Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek - iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
          "2. Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění) - indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
          "A. nízkofrekvenční - do 1kHz, povrchové",
          "a) kontaktní - DD, TENS, Trabert",
          "b) bezkontaktní - magnet, distanční elektroterapie",
          "B. středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
          "C. vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
        ]
      },
      {
        title: "Elektrody - velikost, vzájemná vzdálenost, polarita, intenzita proudu, délka aplikace, stav kůže - čím menší elektroda, tím vyšší hustota proudu (roste riziko popálení)",
        points: [
        ]
      },
      {
        title: "Parametry",
        points: [
          "1. frekvence - počet kmitů za vteřinu",
          "2. intenzita",
          "3. modulace - je řízená změna některého parametru elektrického proudu v čase, nejčastěji amplitudy, frekvence nebo délky pulzu, za účelem dosažení požadovaného terapeutického účinku",
        ]
      },
      {
        title: "N.Ú. elektroterapie - podráždění kůže, bolestivé pocity, popálení, elektrochemické poškození kůže",
        points: [
        ]
      },
      {
        title: "KI elektroterapie",
        points: [
          "1. kardiostimulátor",
          "2. závažné poruchy srdečního rytmu",
          "3. aplikace přes srdce",
          "4. porucha kožní integrity",
          "5. nespolupráce",
          "6. těhotenství",
          "7. malignita",
          "8. akutní trombóza",
          "9. infekce/zánět v místě aplikace",
        ]
      },
      {
        title: "Impulsoterapie - aplikace v impulzech (přerušovaně) - přesně tvarované impulsy nízkofrekvenčních proudů",
        points: [
          "1. pravoúhlé - elektrogymnastika",
          "2. šikmé - elektrostimulace",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:1:flashcard:1",
        prompt: "Shrn cast: Definice",
        answer: "Definice: terapeutické využití elektrického proudu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:2",
        prompt: "Shrn cast: Co lze ovlivnit elektrickým proudem",
        answer: "Co lze ovlivnit elektrickým proudem - nervový, svalový, cévní systém, vnímání bolesti, trofiku, metabolismus tkání",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:3",
        prompt: "Shrn cast: Elektrická vodivost tkání",
        answer: "Elektrická vodivost tkání - dobře vodivé: krev, sval, nervová tkáň - hůře vodivé: tuk, kůže, kost (odpor kůže klesá zvlhčením, zvýšení kontaktní plochy elektrody)",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:4",
        prompt: "Shrn cast: Elektrický proud",
        answer: "1. Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek - iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí 2. Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění) - indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu A. nízkofrekvenční - do 1kHz, povrchové a) kontaktní - DD, TENS, Trabert b) bezkontaktní - magnet, distanční elektroterapie B. středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:5",
        prompt: "Co je dulezite k bodu: Stejnosměrný?",
        answer: "1. Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek - iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:6",
        prompt: "Co je dulezite k bodu: Střídavý?",
        answer: "2. Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění) - indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:7",
        prompt: "Co je dulezite k bodu: nízkofrekvenční?",
        answer: "A. nízkofrekvenční - do 1kHz, povrchové",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:8",
        prompt: "Co je dulezite k bodu: kontaktní?",
        answer: "a) kontaktní - DD, TENS, Trabert",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:9",
        prompt: "Co je dulezite k bodu: bezkontaktní?",
        answer: "b) bezkontaktní - magnet, distanční elektroterapie",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:10",
        prompt: "Co je dulezite k bodu: středně frekvenční?",
        answer: "B. středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:11",
        prompt: "Co je dulezite k bodu: vysokofrekvenční?",
        answer: "C. vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:12",
        prompt: "Shrn cast: Elektrody",
        answer: "Elektrody - velikost, vzájemná vzdálenost, polarita, intenzita proudu, délka aplikace, stav kůže - čím menší elektroda, tím vyšší hustota proudu (roste riziko popálení)",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:13",
        prompt: "Shrn cast: Parametry",
        answer: "1. frekvence - počet kmitů za vteřinu 2. intenzita 3. modulace - je řízená změna některého parametru elektrického proudu v čase, nejčastěji amplitudy, frekvence nebo délky pulzu, za účelem dosažení požadovaného terapeutického účinku",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:14",
        prompt: "Co je dulezite k bodu: frekvence?",
        answer: "1. frekvence - počet kmitů za vteřinu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:15",
        prompt: "Co je dulezite k bodu: intenzita?",
        answer: "2. intenzita",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:16",
        prompt: "Co je dulezite k bodu: modulace?",
        answer: "3. modulace - je řízená změna některého parametru elektrického proudu v čase, nejčastěji amplitudy, frekvence nebo délky pulzu, za účelem dosažení požadovaného terapeutického účinku",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:17",
        prompt: "Shrn cast: Ú. elektroterapie",
        answer: "N.Ú. elektroterapie - podráždění kůže, bolestivé pocity, popálení, elektrochemické poškození kůže",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:18",
        prompt: "Shrn cast: KI elektroterapie",
        answer: "1. kardiostimulátor 2. závažné poruchy srdečního rytmu 3. aplikace přes srdce 4. porucha kožní integrity 5. nespolupráce 6. těhotenství",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:19",
        prompt: "Co je dulezite k bodu: kardiostimulátor?",
        answer: "1. kardiostimulátor",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:20",
        prompt: "Co je dulezite k bodu: závažné poruchy srdečního rytmu?",
        answer: "2. závažné poruchy srdečního rytmu",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:21",
        prompt: "Co je dulezite k bodu: aplikace přes srdce?",
        answer: "3. aplikace přes srdce",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:22",
        prompt: "Co je dulezite k bodu: porucha kožní integrity?",
        answer: "4. porucha kožní integrity",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:23",
        prompt: "Co je dulezite k bodu: nespolupráce?",
        answer: "5. nespolupráce",
      },
      {
        id: "ix-fyzikalni-terapie:1:flashcard:24",
        prompt: "Co je dulezite k bodu: těhotenství?",
        answer: "6. těhotenství",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:1:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: terapeutické využití elektrického proudu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: terapeutické využití elektrického proudu",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Co lze ovlivnit elektrickým proudem - nervový, svalový, cévní systém, vnímání bolesti, trofiku, metabolismus tkání",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Co lze ovlivnit elektrickým proudem - nervový, svalový, cévní systém, vnímání bolesti, trofiku, metabolismus tkání",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrická vodivost tkání - dobře vodivé: krev, sval, nervová tkáň - hůře vodivé: tuk, kůže, kost (odpor kůže klesá zvlhčením, zvýšení kontaktní plochy elektrody)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrická vodivost tkání - dobře vodivé: krev, sval, nervová tkáň - hůře vodivé: tuk, kůže, kost (odpor kůže klesá zvlhčením, zvýšení kontaktní plochy elektrody)",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrický proud: tok elektricky nabitých částic (ionty - kationt/aniont nebo elektrony - záporně nabité částice ), dobře prochází tkáněmi s velkým obsahem vody a bílkovin - největší odpor průchodu klade kůže, kost, chrupavka, šlacha (malý obsah vody) - směr od katody (mínus) k anodě (plus), jednotka Ampér - účinek - analgetický, trofický, antiedematózní, myostimulační",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrický proud: tok elektricky nabitých částic (ionty - kationt/aniont nebo elektrony - záporně nabité částice ), dobře prochází tkáněmi s velkým obsahem vody a bílkovin - největší odpor průchodu klade kůže, kost, chrupavka, šlacha (malý obsah vody) - směr od katody (mínus) k anodě (plus), jednotka Ampér - účinek - analgetický, trofický, antiedematózní, myostimulační",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek - iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Stejnosměrný - jednosměrný tok, anoda a katoda na stejném místě (nemění se) - galvanizace - ionický účinek - iontoforéza - použití: analgetický účinek, ovlivnění prokrvení, vegetativních funkcí",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění) - indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Střídavý - směr a velikost proudu se v čase mění (katoda a anoda se rychle mění) - indikace: analgezie, elektrostimulace svalů, ovlivnění svalového tonu",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. nízkofrekvenční - do 1kHz, povrchové",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. nízkofrekvenční - do 1kHz, povrchové",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "b) bezkontaktní - magnet, distanční elektroterapie",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "b) bezkontaktní - magnet, distanční elektroterapie",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. středně frekvenční - 1kHZ - 100kHz (dráždivý účinek) - ve tkáni konvence na nízkofrekvenční IF proudy",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. vysokofrekvenční - nad 100 kHz (tepelný účinek - diatermie)",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrody - velikost, vzájemná vzdálenost, polarita, intenzita proudu, délka aplikace, stav kůže - čím menší elektroda, tím vyšší hustota proudu (roste riziko popálení)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrody - velikost, vzájemná vzdálenost, polarita, intenzita proudu, délka aplikace, stav kůže - čím menší elektroda, tím vyšší hustota proudu (roste riziko popálení)",
      },
      {
        id: "ix-fyzikalni-terapie:1:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. frekvence - počet kmitů za vteřinu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. frekvence - počet kmitů za vteřinu",
      },
    ],
  },
  "ix-fyzikalni-terapie:2": {
    chapters: [
      {
        title: "Definice: terapeutické působení stejnosměrného (galvanického) proudu na organizmus - akutní 3x denně - chronický 1x týdne (aplikace až 60 minut) - minimální délka terapie 30 minut, běžný počet procedur 6, u perakutních stavů 4-5 procedur prvních 48 hod po úrazu - max. proudová hustota je 0,1 mA/cm2, prahově senzitivní (pacient vnímá proud, ale není to bolestivé, protože jednosměrný proud působí senzitivně a vegetativně)",
        points: [
        ]
      },
      {
        title: "Indikace: chronické bolestivé stavy, artralgie, myalgie, neuralgie",
        points: [
        ]
      },
      {
        title: "Účinky: analgezie, prokrvení, ovlivnění trofiky tkáně",
        points: [
        ]
      },
      {
        title: "Mechanizmus účinky: polarizace všech tkání a buněk v proudové dráze - vyžaduje čas min. 30 minut, v případě pozitivní odezvy zvyšujeme step 5 min. na 40-60 minut - předpis na 10 minut je non lege artis - proudová hustota je intenzita proudu (mA) procházející určitým průřezem (elektrody) v cm2 - max. proudová hustota je 0,1mA/cm2, - nahromadění iontů na membráně, zvýší se propustnost pro Na+, což vede ke kapilární hyperémii - zlepšení trofiky, imunity, urychlení regenerace (více kyslíku, zvýší se syntéza kolagenu) - zrychlené vstřebávání výronů exsudátů a otoků, snížení bolesti, snížení spasticity, - eutonizace cévního řečiště (správný tonus) - ovlivnění nervové dráždivosti - nevyvolává svalovou kontrakci, proto je možné aplikovat i u perakutních stavů",
        points: [
        ]
      },
      {
        title: "Pod elektrodami odlišné elektrochemické reakce:",
        points: [
          "1. katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
          "2. anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
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
        title: "Intenzita procedury - je limitovaná 2 hledisky",
        points: [
          "1. max. proudovou hustotou",
          "2. subj. pocit pacienta - nastavení max. prahově senzitivní (pacient cítí jemné brnění)",
        ]
      },
      {
        title: "Iontoforéza = transport ionizované léčivé látky přes kůži pomocí stejnosměrného elektrického proudu - dopravení iontů přes kůži - spíše do kůže, průchod léku 3-20 mm (diskuze) - galvanický proud s ionizovanou léčivou látkou (kortikoidy, lokální anestetika, analgetika) - lokální aplikace bez injekce, sterilní aplikace, do přesného místa, ale do hloubky těžko definovaná - ion aplikujeme pod elektrodu stejné polarity (odpuzuje léčivo směrem do tkáně) - indikace: kožní onemocnění, kožní anestezie, adheze, záněty - například k aplikaci dexamethazonu, mesocainu, hyaluronidázy, …",
        points: [
        ]
      },
      {
        title: "4komorová galvanizace - hydrogalvan - podélná galvanizace - přenos elektrického proudu zprostředkovává voda - 4 nebo 2 vaničky pro HK, DK, řada schémat - rovnoměrné vpravování elektrického proudu - teplota vody ve vaničkách dle základního onemocnění (perakutní hypotermní, neuritidy izotermní, hypertermní - porucha cirkulace) - v celém rozsahu el. pole - depolarizace tkáně s následnou hyperémií, v končetinách na katodě zvýšení nervové dráždivosti, na anodě snížení - indikace: neuritidy, neuralgie, neuropatie, poruchy prokrvení, poruchy inervace, spasticita, periatritida - max. 40 mA u čtyřkomorové, 20 mA u dvojkomorové",
        points: [
        ]
      },
      {
        title: "Elektroléčebná vana - celá ponořená část těla je jedna velká elektroda - nelze odhadnout celkové množství proudu procházejí pacientem - intenzita podle pocitu pacienta, max. 30 mA",
        points: [
          "Předpis",
          "Galvanoterapie na oblast pravého hlezna, anoda na laterální kotník, velikost 5x8 cm, katoda transregionálně, ochranné roztoky, v intenzitě prahově senzitivní, max. do 4 mA, aplikace 20-40 min., step 10 min, 3x denně.",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:2:flashcard:1",
        prompt: "Shrn cast: Definice",
        answer: "Definice: terapeutické působení stejnosměrného (galvanického) proudu na organizmus - akutní 3x denně - chronický 1x týdne (aplikace až 60 minut) - minimální délka terapie 30 minut, běžný počet procedur 6, u perakutních stavů 4-5 procedur prvních 48 hod po úrazu - max. proudová hustota je 0,1 mA/cm2, prahově senzitivní (pacient vnímá proud, ale není to bolestivé, protože jednosměrný proud působí senzitivně a vegetativně)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:2",
        prompt: "Shrn cast: Indikace",
        answer: "Indikace: chronické bolestivé stavy, artralgie, myalgie, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:3",
        prompt: "Shrn cast: Účinky",
        answer: "Účinky: analgezie, prokrvení, ovlivnění trofiky tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:4",
        prompt: "Shrn cast: Mechanizmus účinky",
        answer: "Mechanizmus účinky: polarizace všech tkání a buněk v proudové dráze - vyžaduje čas min. 30 minut, v případě pozitivní odezvy zvyšujeme step 5 min. na 40-60 minut - předpis na 10 minut je non lege artis - proudová hustota je intenzita proudu (mA) procházející určitým průřezem (elektrody) v cm2 - max. proudová hustota je 0,1mA/cm2, - nahromadění iontů na membráně, zvýší se propustnost pro Na+, což vede ke kapilární hyperémii - zlepšení trofiky, imunity, urychlení regenerace (více kyslíku, zvýší se syntéza kolagenu) - zrychlené vstřebávání výronů exsudátů a otoků, snížení bolesti, snížení spasticity, - eutonizace cévního řečiště (správný tonus) - ovlivnění nervové dráždivosti - nevyvolává svalovou kontrakci, proto je možné aplikovat i u perakutních stavů",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:5",
        prompt: "Shrn cast: Pod elektrodami odlišné elektrochemické reakce:",
        answer: "1. katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie 2. anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa) ochranné roztoky: slabé kyseliny a zásady (vzniká elektrolytická disociace H2O na H +, OH-, na kůži je NaCl, které disociuje na Na plus na katodě, kde je OH minus a vznikne NaOH, Cl minus k anodě a vznikne HCl (riziko poleptání) - proto ochranné roztoky katoda - kyselý, anoda - zásaditý roztok při odlepení elektrody - rána (přerušený elektrický okruh) mezi pokožku a elektrodu se dává podložka, která musí přesahovat přes okraj elektrody",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:6",
        prompt: "Co je dulezite k bodu: katelektrotonus?",
        answer: "1. katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:7",
        prompt: "Co je dulezite k bodu: anelektotonus?",
        answer: "2. anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:8",
        prompt: "Co je dulezite k bodu: ochranné roztoky?",
        answer: "ochranné roztoky: slabé kyseliny a zásady (vzniká elektrolytická disociace H2O na H +, OH-, na kůži je NaCl, které disociuje na Na plus na katodě, kde je OH minus a vznikne NaOH, Cl minus k anodě a vznikne HCl (riziko poleptání) - proto ochranné roztoky",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:9",
        prompt: "Co je dulezite k bodu: katoda?",
        answer: "katoda - kyselý, anoda - zásaditý roztok",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:10",
        prompt: "Co je dulezite k bodu: při odlepení elektrody?",
        answer: "při odlepení elektrody - rána (přerušený elektrický okruh)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:11",
        prompt: "Co je dulezite k bodu: mezi pokožku a elektrodu se dává podložka, která musí přesahovat přes okraj elektrody?",
        answer: "mezi pokožku a elektrodu se dává podložka, která musí přesahovat přes okraj elektrody",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:12",
        prompt: "Co je dulezite k bodu: upozornit pacienta na možné začervenání kůže pod elektrodami, adaptaci (brnění el. proudu...?",
        answer: "upozornit pacienta na možné začervenání kůže pod elektrodami, adaptaci (brnění el. proudu může po chvíli ustat)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:13",
        prompt: "Shrn cast: Způsob aplikace",
        answer: "1. Transregionálně (příčná) - elektrony umístěné na opačné strany postižené oblasti, proud prochází napříč oblasti - distorze, kontuze - do 24-36h po úrazu 2. Podélná galvanizace - entezopatie, funkční porucha prokrvení (akrocyanóza, Raynaudův syndrom).. - elektrody jsou umístěné za sebou podél končetiny/jiné části těla, proud prochází podélně A. sestupná - anoda proximálně, katoda distálně (orientace elektrod) B. vzestupná - katoda proximálně, anoda distálně C. radikulární (segmentální) - proud působí na míšní kořen, indikace: neuralgie, KRBS D. paravertebtrální - elektrody jsou umístěné po stranách páteře - postherpeticka a interkostální neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:14",
        prompt: "Co je dulezite k bodu: Transregionálně (příčná)?",
        answer: "1. Transregionálně (příčná) - elektrony umístěné na opačné strany postižené oblasti, proud prochází napříč oblasti - distorze, kontuze - do 24-36h po úrazu",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:15",
        prompt: "Co je dulezite k bodu: Podélná galvanizace?",
        answer: "2. Podélná galvanizace - entezopatie, funkční porucha prokrvení (akrocyanóza, Raynaudův syndrom).. - elektrody jsou umístěné za sebou podél končetiny/jiné části těla, proud prochází podélně",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:16",
        prompt: "Co je dulezite k bodu: sestupná?",
        answer: "A. sestupná - anoda proximálně, katoda distálně (orientace elektrod)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:17",
        prompt: "Co je dulezite k bodu: vzestupná?",
        answer: "B. vzestupná - katoda proximálně, anoda distálně",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:18",
        prompt: "Co je dulezite k bodu: radikulární (segmentální)?",
        answer: "C. radikulární (segmentální) - proud působí na míšní kořen, indikace: neuralgie, KRBS",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:19",
        prompt: "Co je dulezite k bodu: paravertebtrální?",
        answer: "D. paravertebtrální - elektrody jsou umístěné po stranách páteře - postherpeticka a interkostální neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:20",
        prompt: "Co je dulezite k bodu: gangliotropní?",
        answer: "E. gangliotropní - působení na vegetativní (autonomní) ganglie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:21",
        prompt: "Co je dulezite k bodu: neurální?",
        answer: "F. neurální - elektrody umístěné podél průběhu konkrétního nervu, katoda distálně - mononeuritidy, lokalizované neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:22",
        prompt: "Shrn cast: Intenzita procedury",
        answer: "1. max. proudovou hustotou 2. subj. pocit pacienta - nastavení max. prahově senzitivní (pacient cítí jemné brnění)",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:23",
        prompt: "Co je dulezite k bodu: max. proudovou hustotou?",
        answer: "1. max. proudovou hustotou",
      },
      {
        id: "ix-fyzikalni-terapie:2:flashcard:24",
        prompt: "Co je dulezite k bodu: subj. pocit pacienta?",
        answer: "2. subj. pocit pacienta - nastavení max. prahově senzitivní (pacient cítí jemné brnění)",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:2:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: terapeutické působení stejnosměrného (galvanického) proudu na organizmus - akutní 3x denně - chronický 1x týdne (aplikace až 60 minut) - minimální délka terapie 30 minut, běžný počet procedur 6, u perakutních stavů 4-5 procedur prvních 48 hod po úrazu - max. proudová hustota je 0,1 mA/cm2, prahově senzitivní (pacient vnímá proud, ale není to bolestivé, protože jednosměrný proud působí senzitivně a vegetativně)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: terapeutické působení stejnosměrného (galvanického) proudu na organizmus - akutní 3x denně - chronický 1x týdne (aplikace až 60 minut) - minimální délka terapie 30 minut, běžný počet procedur 6, u perakutních stavů 4-5 procedur prvních 48 hod po úrazu - max. proudová hustota je 0,1 mA/cm2, prahově senzitivní (pacient vnímá proud, ale není to bolestivé, protože jednosměrný proud působí senzitivně a vegetativně)",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Indikace: chronické bolestivé stavy, artralgie, myalgie, neuralgie",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Indikace: chronické bolestivé stavy, artralgie, myalgie, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Účinky: analgezie, prokrvení, ovlivnění trofiky tkáně",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Účinky: analgezie, prokrvení, ovlivnění trofiky tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Mechanizmus účinky: polarizace všech tkání a buněk v proudové dráze - vyžaduje čas min. 30 minut, v případě pozitivní odezvy zvyšujeme step 5 min. na 40-60 minut - předpis na 10 minut je non lege artis - proudová hustota je intenzita proudu (mA) procházející určitým průřezem (elektrody) v cm2 - max. proudová hustota je 0,1mA/cm2, - nahromadění iontů na membráně, zvýší se propustnost pro Na+, což vede ke kapilární hyperémii - zlepšení trofiky, imunity, urychlení regenerace (více kyslíku, zvýší se syntéza kolagenu) - zrychlené vstřebávání výronů exsudátů a otoků, snížení bolesti, snížení spasticity, - eutonizace cévního řečiště (správný tonus) - ovlivnění nervové dráždivosti - nevyvolává svalovou kontrakci, proto je možné aplikovat i u perakutních stavů",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Mechanizmus účinky: polarizace všech tkání a buněk v proudové dráze - vyžaduje čas min. 30 minut, v případě pozitivní odezvy zvyšujeme step 5 min. na 40-60 minut - předpis na 10 minut je non lege artis - proudová hustota je intenzita proudu (mA) procházející určitým průřezem (elektrody) v cm2 - max. proudová hustota je 0,1mA/cm2, - nahromadění iontů na membráně, zvýší se propustnost pro Na+, což vede ke kapilární hyperémii - zlepšení trofiky, imunity, urychlení regenerace (více kyslíku, zvýší se syntéza kolagenu) - zrychlené vstřebávání výronů exsudátů a otoků, snížení bolesti, snížení spasticity, - eutonizace cévního řečiště (správný tonus) - ovlivnění nervové dráždivosti - nevyvolává svalovou kontrakci, proto je možné aplikovat i u perakutních stavů",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Pod elektrodami odlišné elektrochemické reakce:",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Pod elektrodami odlišné elektrochemické reakce:",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. katelektrotonus - zvýšení dráždivosti nervových zakončení pod katodou (tonus, který vzniká pod katodou) indikace: hypestézie",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. anelektotonus - snížení dráždivosti pod anodou, analgezie (indikace: bolest, citlivá místa)",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "ochranné roztoky: slabé kyseliny a zásady (vzniká elektrolytická disociace H2O na H +, OH-, na kůži je NaCl, které disociuje na Na plus na katodě, kde je OH minus a vznikne NaOH, Cl minus k anodě a vznikne HCl (riziko poleptání) - proto ochranné roztoky",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "ochranné roztoky: slabé kyseliny a zásady (vzniká elektrolytická disociace H2O na H +, OH-, na kůži je NaCl, které disociuje na Na plus na katodě, kde je OH minus a vznikne NaOH, Cl minus k anodě a vznikne HCl (riziko poleptání) - proto ochranné roztoky",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "katoda - kyselý, anoda - zásaditý roztok",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "katoda - kyselý, anoda - zásaditý roztok",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "při odlepení elektrody - rána (přerušený elektrický okruh)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "při odlepení elektrody - rána (přerušený elektrický okruh)",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "mezi pokožku a elektrodu se dává podložka, která musí přesahovat přes okraj elektrody",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "mezi pokožku a elektrodu se dává podložka, která musí přesahovat přes okraj elektrody",
      },
      {
        id: "ix-fyzikalni-terapie:2:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "upozornit pacienta na možné začervenání kůže pod elektrodami, adaptaci (brnění el. proudu může po chvíli ustat)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "upozornit pacienta na možné začervenání kůže pod elektrodami, adaptaci (brnění el. proudu může po chvíli ustat)",
      },
    ],
  },
  "ix-fyzikalni-terapie:3": {
    chapters: [
      {
        title: "Definice: terapeutická aplikace proudů s frekvencí do 1000 Hz (přerušovaný galvan x modifikace střídavého síťového proudu) - proudy: monofázické, bifázické, střídavé, pulzní Monofázický - proud teče stále jedním směrem, má jednosměrné impulzy, typicky přerušovaný stejnosměrný proud Bifázický - proud mění směr, má kladnou i zápornou fázi, každá elektroda dosahuje kladných i záporných hodnot Střídavé - směr proudu se pravidelně mění, na každé elektrodě přechází plynule z kladného maxima přes nulovou intenzitu do záporného maxima, všechny střídavé proudy jsou bifazické Pulzní - mezi jednotlivými impulzy je různě dlouhá izoelektrická pauza - tvar impulzu: pravoúhlý, trojúhelníkový (šikmý), sinusový, jiný Pravoúhlý - proud vyskočí na určitou hodnutu, chvíli trvá a zase klesne Trojúhelníkévý/šikmý - intenzita postupně narůstá a klesá Sinusový - plynulý sinusový průběh - monopolární/bipolární Monopolární - 2 elektrody aktivní a indiferentní, účinek je soustředěný pod aktivní elektrodu Bipolární - obě elektrody mají terapeutický význam",
        points: [
        ]
      },
      {
        title: "Indikace nízkofrekvenční terapie (celé dle chat)",
        points: [
          "1. bolest",
          "2. snížená svalová síla",
          "3. periferní parézy - elektrostimulace k zachování svalové funkce, reedukace pohybu",
          "4. poruchy prokrvení a trofiky",
        ]
      },
      {
        title: "Účinky - elektrogymnastika, elektrostimulace paretických svalů, stimulace senzitivních axonů, terapie bolesti, vazodilatace",
        points: [
        ]
      },
      {
        title: "KI",
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
        title: "Účinky: liší se podle tvaru impulzu a frekvence",
        points: [
          "1. frekvence:",
          "A. do 50Hz motorické dráždění, hyperémie",
          "B. 100 Hz analgetický (dráždění A alfa vláken)",
          "C. 180 Hz lokálně myorelaxační (svalová inkoordinace)",
          "2. adaptace tkáně",
          "A. amplitudová modulace: amplituda jednotlivých impulzů se postupně/skokem mění",
          "B. frekvenční modulace: frekvence proudu se mění v průběhu času plynule/skokem",
          "C. kombinace: je neúčinnější prevence vzniku adaptace tkáně",
        ]
      },
      {
        title: "Příklady proudů",
        points: [
          "1. TENS = transkutánní elektrická neurostimulace - nízkofrekvenční, dvoufázový proud - analgezie, aplikace do míst bolesti - stimulace senzitivních nervových vláken elektrickými impulzy vede k inhibici přenosu nocicepce v zadních rozích míšních, což vede snížení bolesti (analgetický efekt) - anoda proximálně, katoda distálně - I: až 20 mA - KI kortikoidy, obecné KI - indikace: neuralgie, migréna, pooperační stavy, přetížení šíjového svalstva… akutní/chronická bolest Druhy TENS",
          "A. konvenční - vyšší frekvence, nižší intenzita",
          "B. akupunkturní",
          "C. burst - salvy, největší analgetický efekt",
          "D. randomizovaný",
          "E. surge - undulující",
          "2. Trabertův proud - nízkofrekvenční stejnosměrný, přerušovaný (2ms a pauza 5 ms) - f 142 Hz, katoda na bolestivé místo, anoda indifenrentní (uzavření elektrického okruhu) - pravoúhlý proud, monofázický - časný analgetický efekt (úleva již během aplikace a bezprostředně po ní) - podprahově algická intenzita (aplikace dle subj. pocitů pacienta) - indikace: bolesti známé etiologie, otoky, hematomy v regresi, neuralgie - KI jizvy, znamení - tkáně nevykazují adaptaci - umístění (zapojení elektrod) E1-4: od C po Tp po Tp po LSp",
          "3. Leducův proud - 100 Hz, 1 ms impulz, pauza 9 ms - pacienty hůře tolerovaný, rychle vzniká adaptace - monofázický, pravoúhlý - indikace: subakutní a chronické bolesti pohybového systému",
          "4. Diadynamic proud - dvousložkové: kombinace galvanizace (baze - mění prokrvení) a nízkofrekvenční stimulace (doza - analgetická složka) sinusovém monofázickým proudem - současná aplikace stejnosměrného a pulzního proudu, což vede ke kumulativní účinek",
          "A. MF (monofázická fixní) - jednocestně usměrněný sinus proud, f=50 Hz, nepoužívá",
          "B. DF (difázická fixní) - dvoucestné usměrnění dvou vln, f=100 Hz, analgezie, ovlivnění sympatiku, KRBS - indikace: premedikace před aplikací jiných DD proudů (rychle nastupuje adaptace tkáně, max. efekt aplikace 1 minuta)",
          "C. CP (krátké periody)- střídání MF a DF - frekvenční modulace - vazodilatace, eutonizace - prahově motorická intenzita",
          "D. LP (dlouhá perioda) - MF a na ně nasedající DF - frekvenční a amplitudová modulace, vazodilatace, otoky, analgezie",
          "E. RS (rytmický synkopální proud) - 1 sekunda MF, 1 sekunda pauza - dráždivé a motorické účinky - nepříjemný, vyvolává kontrakce, nadprahově motorická intenzita",
          "F. CPiso (isodynamický) - DF vyšší o 18%, účinky: analgezie, antiinflamatorní, stimulace, facilitace hojení, zvýšení cirkulace",
          "- léčebné účinky DD: analgezie, snížení otoku a zánětu, svalová stimulace, zvýšení lokální cirkulace - pozor! první aplikace může vyvolat zhoršení obtíží (typické, upozornit pacienta)",
          "aplikace: transregionální, radikulární, segmentální, longitudinální, gangliotropní, cílená na jednotlivé svaly",
          "indikace: neuralgie, myalgie, úponové bolesti, kontuze, distorze, VAS, kořenový syndrom",
          "délka aplikace: čím akutnější proces, tím kratší aplikace (do 6 minut), pokud je aplikace delší je nutné použít ochranné roztoky (galvanizace), změnit polaritu (prodloužení léčby)",
          "Předpis",
          "DD: DF 2+LP4+LP6, longitudinální aplikace na PDK intenzita podprahově senzitivní 7x denně",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:3:flashcard:1",
        prompt: "Shrn cast: Definice",
        answer: "Definice: terapeutická aplikace proudů s frekvencí do 1000 Hz (přerušovaný galvan x modifikace střídavého síťového proudu) - proudy: monofázické, bifázické, střídavé, pulzní Monofázický - proud teče stále jedním směrem, má jednosměrné impulzy, typicky přerušovaný stejnosměrný proud Bifázický - proud mění směr, má kladnou i zápornou fázi, každá elektroda dosahuje kladných i záporných hodnot Střídavé - směr proudu se pravidelně mění, na každé elektrodě přechází plynule z kladného maxima přes nulovou intenzitu do záporného maxima, všechny střídavé proudy jsou bifazické Pulzní - mezi jednotlivými impulzy je různě dlouhá izoelektrická pauza - tvar impulzu: pravoúhlý, trojúhelníkový (šikmý), sinusový, jiný Pravoúhlý - proud vyskočí na určitou hodnutu, chvíli trvá a zase klesne Trojúhelníkévý/šikmý - intenzita postupně narůstá a klesá Sinusový - plynulý sinusový průběh - monopolární/bipolární Monopolární - 2 elektrody aktivní a indiferentní, účinek je soustředěný pod aktivní elektrodu Bipolární - obě elektrody mají terapeutický význam",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:2",
        prompt: "Shrn cast: Indikace nízkofrekvenční terapie (celé dle chat)",
        answer: "1. bolest 2. snížená svalová síla 3. periferní parézy - elektrostimulace k zachování svalové funkce, reedukace pohybu 4. poruchy prokrvení a trofiky",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:3",
        prompt: "Co je dulezite k bodu: bolest?",
        answer: "1. bolest",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:4",
        prompt: "Co je dulezite k bodu: snížená svalová síla?",
        answer: "2. snížená svalová síla",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:5",
        prompt: "Co je dulezite k bodu: periferní parézy?",
        answer: "3. periferní parézy - elektrostimulace k zachování svalové funkce, reedukace pohybu",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:6",
        prompt: "Co je dulezite k bodu: poruchy prokrvení a trofiky?",
        answer: "4. poruchy prokrvení a trofiky",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:7",
        prompt: "Shrn cast: Účinky",
        answer: "Účinky - elektrogymnastika, elektrostimulace paretických svalů, stimulace senzitivních axonů, terapie bolesti, vazodilatace",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:8",
        prompt: "Shrn cast: KI",
        answer: "1. KV - kardiostimulátor, závažné poruchy srdečního rytmu, karotický sinus, 2. cévní - akutní tromboza, závažná porucha periferního prokrvení 3. nervový - výrazná porucha citlivosti (WHAT? vždyť se stimulují míšní léze??) 4. lokální - poškození kůže, akutní infekce v místě elektrod 5. těhotenství 6. maligníma",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:9",
        prompt: "Co je dulezite k bodu: KV - kardiostimulátor, závažné poruchy srdečního rytmu, karotický sinus,?",
        answer: "1. KV - kardiostimulátor, závažné poruchy srdečního rytmu, karotický sinus,",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:10",
        prompt: "Co je dulezite k bodu: cévní?",
        answer: "2. cévní - akutní tromboza, závažná porucha periferního prokrvení",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:11",
        prompt: "Co je dulezite k bodu: nervový?",
        answer: "3. nervový - výrazná porucha citlivosti (WHAT? vždyť se stimulují míšní léze??)",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:12",
        prompt: "Co je dulezite k bodu: lokální?",
        answer: "4. lokální - poškození kůže, akutní infekce v místě elektrod",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:13",
        prompt: "Co je dulezite k bodu: těhotenství?",
        answer: "5. těhotenství",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:14",
        prompt: "Co je dulezite k bodu: maligníma?",
        answer: "6. maligníma",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:15",
        prompt: "Shrn cast: Účinky",
        answer: "1. frekvence: A. do 50Hz motorické dráždění, hyperémie B. 100 Hz analgetický (dráždění A alfa vláken) C. 180 Hz lokálně myorelaxační (svalová inkoordinace) 2. adaptace tkáně A. amplitudová modulace: amplituda jednotlivých impulzů se postupně/skokem mění",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:16",
        prompt: "Co je dulezite k bodu: frekvence:?",
        answer: "1. frekvence:",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:17",
        prompt: "Co je dulezite k bodu: do 50Hz motorické dráždění, hyperémie?",
        answer: "A. do 50Hz motorické dráždění, hyperémie",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:18",
        prompt: "Co je dulezite k bodu: 100 Hz analgetický (dráždění A alfa vláken)?",
        answer: "B. 100 Hz analgetický (dráždění A alfa vláken)",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:19",
        prompt: "Co je dulezite k bodu: 180 Hz lokálně myorelaxační (svalová inkoordinace)?",
        answer: "C. 180 Hz lokálně myorelaxační (svalová inkoordinace)",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:20",
        prompt: "Co je dulezite k bodu: adaptace tkáně?",
        answer: "2. adaptace tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:21",
        prompt: "Co je dulezite k bodu: amplitudová modulace?",
        answer: "A. amplitudová modulace: amplituda jednotlivých impulzů se postupně/skokem mění",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:22",
        prompt: "Co je dulezite k bodu: frekvenční modulace?",
        answer: "B. frekvenční modulace: frekvence proudu se mění v průběhu času plynule/skokem",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:23",
        prompt: "Co je dulezite k bodu: kombinace?",
        answer: "C. kombinace: je neúčinnější prevence vzniku adaptace tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:3:flashcard:24",
        prompt: "Shrn cast: Příklady proudů",
        answer: "1. TENS = transkutánní elektrická neurostimulace - nízkofrekvenční, dvoufázový proud - analgezie, aplikace do míst bolesti - stimulace senzitivních nervových vláken elektrickými impulzy vede k inhibici přenosu nocicepce v zadních rozích míšních, což vede snížení bolesti (analgetický efekt) - anoda proximálně, katoda distálně - I: až 20 mA - KI kortikoidy, obecné KI - indikace: neuralgie, migréna, pooperační stavy, přetížení šíjového svalstva… akutní/chronická bolest Druhy TENS A. konvenční - vyšší frekvence, nižší intenzita B. akupunkturní C. burst - salvy, největší analgetický efekt D. randomizovaný E. surge - undulující",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:3:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: terapeutická aplikace proudů s frekvencí do 1000 Hz (přerušovaný galvan x modifikace střídavého síťového proudu) - proudy: monofázické, bifázické, střídavé, pulzní Monofázický - proud teče stále jedním směrem, má jednosměrné impulzy, typicky přerušovaný stejnosměrný proud Bifázický - proud mění směr, má kladnou i zápornou fázi, každá elektroda dosahuje kladných i záporných hodnot Střídavé - směr proudu se pravidelně mění, na každé elektrodě přechází plynule z kladného maxima přes nulovou intenzitu do záporného maxima, všechny střídavé proudy jsou bifazické Pulzní - mezi jednotlivými impulzy je různě dlouhá izoelektrická pauza - tvar impulzu: pravoúhlý, trojúhelníkový (šikmý), sinusový, jiný Pravoúhlý - proud vyskočí na určitou hodnutu, chvíli trvá a zase klesne Trojúhelníkévý/šikmý - intenzita postupně narůstá a klesá Sinusový - plynulý sinusový průběh - monopolární/bipolární Monopolární - 2 elektrody aktivní a indiferentní, účinek je soustředěný pod aktivní elektrodu Bipolární - obě elektrody mají terapeutický význam",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: terapeutická aplikace proudů s frekvencí do 1000 Hz (přerušovaný galvan x modifikace střídavého síťového proudu) - proudy: monofázické, bifázické, střídavé, pulzní Monofázický - proud teče stále jedním směrem, má jednosměrné impulzy, typicky přerušovaný stejnosměrný proud Bifázický - proud mění směr, má kladnou i zápornou fázi, každá elektroda dosahuje kladných i záporných hodnot Střídavé - směr proudu se pravidelně mění, na každé elektrodě přechází plynule z kladného maxima přes nulovou intenzitu do záporného maxima, všechny střídavé proudy jsou bifazické Pulzní - mezi jednotlivými impulzy je různě dlouhá izoelektrická pauza - tvar impulzu: pravoúhlý, trojúhelníkový (šikmý), sinusový, jiný Pravoúhlý - proud vyskočí na určitou hodnutu, chvíli trvá a zase klesne Trojúhelníkévý/šikmý - intenzita postupně narůstá a klesá Sinusový - plynulý sinusový průběh - monopolární/bipolární Monopolární - 2 elektrody aktivní a indiferentní, účinek je soustředěný pod aktivní elektrodu Bipolární - obě elektrody mají terapeutický význam",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Indikace nízkofrekvenční terapie (celé dle chat)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Indikace nízkofrekvenční terapie (celé dle chat)",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. periferní parézy - elektrostimulace k zachování svalové funkce, reedukace pohybu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. periferní parézy - elektrostimulace k zachování svalové funkce, reedukace pohybu",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Účinky - elektrogymnastika, elektrostimulace paretických svalů, stimulace senzitivních axonů, terapie bolesti, vazodilatace",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Účinky - elektrogymnastika, elektrostimulace paretických svalů, stimulace senzitivních axonů, terapie bolesti, vazodilatace",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. KV - kardiostimulátor, závažné poruchy srdečního rytmu, karotický sinus,",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. KV - kardiostimulátor, závažné poruchy srdečního rytmu, karotický sinus,",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. cévní - akutní tromboza, závažná porucha periferního prokrvení",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. cévní - akutní tromboza, závažná porucha periferního prokrvení",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. nervový - výrazná porucha citlivosti (WHAT? vždyť se stimulují míšní léze??)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. nervový - výrazná porucha citlivosti (WHAT? vždyť se stimulují míšní léze??)",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. lokální - poškození kůže, akutní infekce v místě elektrod",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. lokální - poškození kůže, akutní infekce v místě elektrod",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Účinky: liší se podle tvaru impulzu a frekvence",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Účinky: liší se podle tvaru impulzu a frekvence",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. do 50Hz motorické dráždění, hyperémie",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. do 50Hz motorické dráždění, hyperémie",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. 100 Hz analgetický (dráždění A alfa vláken)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. 100 Hz analgetický (dráždění A alfa vláken)",
      },
      {
        id: "ix-fyzikalni-terapie:3:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. 180 Hz lokálně myorelaxační (svalová inkoordinace)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. 180 Hz lokálně myorelaxační (svalová inkoordinace)",
      },
    ],
  },
  "ix-fyzikalni-terapie:4": {
    chapters: [
      {
        title: "Definice: léčebné využití elektrického proudu za účelem snížení bolesti - nejpoužívanější metody jsou Traber, TENS, interference - bolest je nepříjemnou senzorickou a emocionální zkušeností, která se vztahuje ke skutečné/možné poruše tkáně - akutní x chronická bolest - vodiče: primární - I. řád - pevné vodiče - kovy II. řád - tekuté - tkáně lidského těla",
        points: [
        ]
      },
      {
        title: "Myorelaxační efekt - ovlivnění TrP",
        points: [
          "1. UZ",
          "2. Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly - UZ v kombinaci s Traber/IF na hluboké struktury",
        ]
      },
      {
        title: "Příklady elektroanalgie (viz. otázka IX./4. a 6.)",
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
        prompt: "Shrn cast: Definice",
        answer: "Definice: léčebné využití elektrického proudu za účelem snížení bolesti - nejpoužívanější metody jsou Traber, TENS, interference - bolest je nepříjemnou senzorickou a emocionální zkušeností, která se vztahuje ke skutečné/možné poruše tkáně - akutní x chronická bolest - vodiče: primární - I. řád - pevné vodiče - kovy II. řád - tekuté - tkáně lidského těla",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:2",
        prompt: "Shrn cast: Myorelaxační efekt",
        answer: "1. UZ 2. Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly - UZ v kombinaci s Traber/IF na hluboké struktury",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:3",
        prompt: "Co je dulezite k bodu: UZ?",
        answer: "1. UZ",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:4",
        prompt: "Co je dulezite k bodu: Kombinovaná terapie?",
        answer: "2. Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly - UZ v kombinaci s Traber/IF na hluboké struktury",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:5",
        prompt: "Shrn cast: Příklady elektroanalgie (viz. otázka IX./4. a 6.)",
        answer: "1. Traber 2. TENS 3. interference",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:6",
        prompt: "Co je dulezite k bodu: Traber?",
        answer: "1. Traber",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:7",
        prompt: "Co je dulezite k bodu: TENS?",
        answer: "2. TENS",
      },
      {
        id: "ix-fyzikalni-terapie:4:flashcard:8",
        prompt: "Co je dulezite k bodu: interference?",
        answer: "3. interference",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:4:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: léčebné využití elektrického proudu za účelem snížení bolesti - nejpoužívanější metody jsou Traber, TENS, interference - bolest je nepříjemnou senzorickou a emocionální zkušeností, která se vztahuje ke skutečné/možné poruše tkáně - akutní x chronická bolest - vodiče: primární - I. řád - pevné vodiče - kovy II. řád - tekuté - tkáně lidského těla",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: léčebné využití elektrického proudu za účelem snížení bolesti - nejpoužívanější metody jsou Traber, TENS, interference - bolest je nepříjemnou senzorickou a emocionální zkušeností, která se vztahuje ke skutečné/možné poruše tkáně - akutní x chronická bolest - vodiče: primární - I. řád - pevné vodiče - kovy II. řád - tekuté - tkáně lidského těla",
      },
      {
        id: "ix-fyzikalni-terapie:4:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly - UZ v kombinaci s Traber/IF na hluboké struktury",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Kombinovaná terapie - UZ v kombinaci s TENS na povrchové svaly - UZ v kombinaci s Traber/IF na hluboké struktury",
      },
      {
        id: "ix-fyzikalni-terapie:4:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Příklady elektroanalgie (viz. otázka IX./4. a 6.)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Příklady elektroanalgie (viz. otázka IX./4. a 6.)",
      },
    ],
  },
  "ix-fyzikalni-terapie:5": {
    chapters: [
      {
        title: "Definice: jsou elektrické proudy o frekvencí 1-100 kHz - nejčastěji využívané v rehabilitaci jsou interferenční proudy - střední frekvence má menší odpor, pacient ji lépe toleruje a proto lze působit hlouběji - je terapeutické využití dvou středněfrekvenčních proudových okruhů, které se v hloubi tkáně kříží a vzniká tam proud, jehož frekvence je rovna vektorovému součtu frekvencí v obou kruzích - jdou hlouběji do tkání, tam se transformují na NF proudy 90 - 130 Hz (modulace amplitudy) - 4 lístek - interferenční proud: vzniká ze dvou středněfrekvenčních proudů o mírně odlišné frekvenci, které se vzájemně interferují, výsledkem je amplitudově modulovaný proud o f 100 Hz",
        points: [
        ]
      },
      {
        title: "Indikace - chronické nociceptivní bolest 10-20 min, 9-12 procedur, podprahově motorická",
        points: [
          "1. nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
          "2. svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
          "3. kloubní - RA, bursitidy, synovitidy, capsulitidy",
          "4. poúrazové - podpora hojení",
        ]
      },
      {
        title: "Kontraindikace",
        points: [
          "1. funkční i orgnanické poruchy v akutní fázi",
          "2. hyperanxieta",
          "3. absces",
          "4. ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
        ]
      },
      {
        title: "Způsob aplikace",
        points: [
          "1. Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace - jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
          "2. Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
          "A. klasické - obsolentní, nejhlubší",
          "B. izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
          "C. dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
        ]
      },
      {
        title: "Aplikace - subakutní 1x denně, chronická 2-3 x týdně, po 6. aplikaci zhodnotit efekt terapie, obvykle 9-12 procedur - po 1. aplikaci může dojít ke zhoršení obtíží - délka aplikace 3-20 minut - intenzita minimálně podprahově senzitivní - transregionálně/segmentálně/reflexní (ovlivněním Headových zón můžeme ovlivnit vnitřní orgány, který reflexní změnu vyvolali)",
        points: [
        ]
      },
      {
        title: "Účinky - závisí na modulační frekvenci a intenzitě",
        points: [
          "1. analgetický - tlumení bolesti",
          "2. motorický - stimulace motorických nervů, vyvolání svalové kontrakce",
          "3. vazomotrický - zvýšení lokálního prokrvení, sekundárně podpora metabolismu a reparace",
          "4. podpora resorpce edému",
          "nižší modulační frekvence - výraznější motorická stimulace",
          "střední frekvence - zejména analgetický účinek",
          "vyšší frekvence - analgetický/senzorický účinek, menší motorická odpověď",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:5:flashcard:1",
        prompt: "Shrn cast: Definice",
        answer: "Definice: jsou elektrické proudy o frekvencí 1-100 kHz - nejčastěji využívané v rehabilitaci jsou interferenční proudy - střední frekvence má menší odpor, pacient ji lépe toleruje a proto lze působit hlouběji - je terapeutické využití dvou středněfrekvenčních proudových okruhů, které se v hloubi tkáně kříží a vzniká tam proud, jehož frekvence je rovna vektorovému součtu frekvencí v obou kruzích - jdou hlouběji do tkání, tam se transformují na NF proudy 90 - 130 Hz (modulace amplitudy) - 4 lístek - interferenční proud: vzniká ze dvou středněfrekvenčních proudů o mírně odlišné frekvenci, které se vzájemně interferují, výsledkem je amplitudově modulovaný proud o f 100 Hz",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:2",
        prompt: "Shrn cast: Indikace",
        answer: "1. nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie 2. svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie 3. kloubní - RA, bursitidy, synovitidy, capsulitidy 4. poúrazové - podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:3",
        prompt: "Co je dulezite k bodu: nervové?",
        answer: "1. nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:4",
        prompt: "Co je dulezite k bodu: svalové?",
        answer: "2. svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:5",
        prompt: "Co je dulezite k bodu: kloubní?",
        answer: "3. kloubní - RA, bursitidy, synovitidy, capsulitidy",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:6",
        prompt: "Co je dulezite k bodu: poúrazové?",
        answer: "4. poúrazové - podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:7",
        prompt: "Shrn cast: Kontraindikace",
        answer: "1. funkční i orgnanické poruchy v akutní fázi 2. hyperanxieta 3. absces 4. ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:8",
        prompt: "Co je dulezite k bodu: funkční i orgnanické poruchy v akutní fázi?",
        answer: "1. funkční i orgnanické poruchy v akutní fázi",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:9",
        prompt: "Co je dulezite k bodu: hyperanxieta?",
        answer: "2. hyperanxieta",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:10",
        prompt: "Co je dulezite k bodu: absces?",
        answer: "3. absces",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:11",
        prompt: "Co je dulezite k bodu: ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace?",
        answer: "4. ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:12",
        prompt: "Shrn cast: Způsob aplikace",
        answer: "1. Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace - jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka 2. Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení A. klasické - obsolentní, nejhlubší B. izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy) C. dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:13",
        prompt: "Co je dulezite k bodu: Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace?",
        answer: "1. Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace - jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:14",
        prompt: "Co je dulezite k bodu: Čtyčpolová interference?",
        answer: "2. Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:15",
        prompt: "Co je dulezite k bodu: klasické?",
        answer: "A. klasické - obsolentní, nejhlubší",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:16",
        prompt: "Co je dulezite k bodu: izoplanární vektorové pole?",
        answer: "B. izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:17",
        prompt: "Co je dulezite k bodu: dipólový vektorové pole?",
        answer: "C. dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:18",
        prompt: "Shrn cast: Aplikace",
        answer: "Aplikace - subakutní 1x denně, chronická 2-3 x týdně, po 6. aplikaci zhodnotit efekt terapie, obvykle 9-12 procedur - po 1. aplikaci může dojít ke zhoršení obtíží - délka aplikace 3-20 minut - intenzita minimálně podprahově senzitivní - transregionálně/segmentálně/reflexní (ovlivněním Headových zón můžeme ovlivnit vnitřní orgány, který reflexní změnu vyvolali)",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:19",
        prompt: "Shrn cast: Účinky",
        answer: "1. analgetický - tlumení bolesti 2. motorický - stimulace motorických nervů, vyvolání svalové kontrakce 3. vazomotrický - zvýšení lokálního prokrvení, sekundárně podpora metabolismu a reparace 4. podpora resorpce edému nižší modulační frekvence - výraznější motorická stimulace střední frekvence - zejména analgetický účinek",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:20",
        prompt: "Co je dulezite k bodu: analgetický?",
        answer: "1. analgetický - tlumení bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:21",
        prompt: "Co je dulezite k bodu: motorický?",
        answer: "2. motorický - stimulace motorických nervů, vyvolání svalové kontrakce",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:22",
        prompt: "Co je dulezite k bodu: vazomotrický?",
        answer: "3. vazomotrický - zvýšení lokálního prokrvení, sekundárně podpora metabolismu a reparace",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:23",
        prompt: "Co je dulezite k bodu: podpora resorpce edému?",
        answer: "4. podpora resorpce edému",
      },
      {
        id: "ix-fyzikalni-terapie:5:flashcard:24",
        prompt: "Co je dulezite k bodu: nižší modulační frekvence?",
        answer: "nižší modulační frekvence - výraznější motorická stimulace",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:5:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: jsou elektrické proudy o frekvencí 1-100 kHz - nejčastěji využívané v rehabilitaci jsou interferenční proudy - střední frekvence má menší odpor, pacient ji lépe toleruje a proto lze působit hlouběji - je terapeutické využití dvou středněfrekvenčních proudových okruhů, které se v hloubi tkáně kříží a vzniká tam proud, jehož frekvence je rovna vektorovému součtu frekvencí v obou kruzích - jdou hlouběji do tkání, tam se transformují na NF proudy 90 - 130 Hz (modulace amplitudy) - 4 lístek - interferenční proud: vzniká ze dvou středněfrekvenčních proudů o mírně odlišné frekvenci, které se vzájemně interferují, výsledkem je amplitudově modulovaný proud o f 100 Hz",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: jsou elektrické proudy o frekvencí 1-100 kHz - nejčastěji využívané v rehabilitaci jsou interferenční proudy - střední frekvence má menší odpor, pacient ji lépe toleruje a proto lze působit hlouběji - je terapeutické využití dvou středněfrekvenčních proudových okruhů, které se v hloubi tkáně kříží a vzniká tam proud, jehož frekvence je rovna vektorovému součtu frekvencí v obou kruzích - jdou hlouběji do tkání, tam se transformují na NF proudy 90 - 130 Hz (modulace amplitudy) - 4 lístek - interferenční proud: vzniká ze dvou středněfrekvenčních proudů o mírně odlišné frekvenci, které se vzájemně interferují, výsledkem je amplitudově modulovaný proud o f 100 Hz",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Indikace - chronické nociceptivní bolest 10-20 min, 9-12 procedur, podprahově motorická",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Indikace - chronické nociceptivní bolest 10-20 min, 9-12 procedur, podprahově motorická",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. nervové - paréza n. VII., herpes zoster, neuritidy, neuralgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. svalové - myositis, myalgie, spasmy, tendinits, epikondylalgie",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. kloubní - RA, bursitidy, synovitidy, capsulitidy",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. kloubní - RA, bursitidy, synovitidy, capsulitidy",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. funkční i orgnanické poruchy v akutní fázi",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. funkční i orgnanické poruchy v akutní fázi",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. ne na oblast srdce, břicha, sinus caroticus, trasnscerebrální aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace - jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Dvoupolová interference (modulace je vytvořena v přístroji, jednodušší aplikace - jednookruhové bipolární aplikace (lze i na akutní stavy), čtyřlístek se mění na přímku - nižší intenzita, nižší hloubka",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Čtyčpolová interference - 4 elektrody, interference vzniká v místě jejich křížení",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. izoplanární vektorové pole - rovnoměrné (lze i na akutní stavy)",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. dipólový vektorové pole - čtyřlístek se změní na přímku, dá se zacílit, rotuje automaticky/ručně, KI akutní stavy",
      },
      {
        id: "ix-fyzikalni-terapie:5:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Aplikace - subakutní 1x denně, chronická 2-3 x týdně, po 6. aplikaci zhodnotit efekt terapie, obvykle 9-12 procedur - po 1. aplikaci může dojít ke zhoršení obtíží - délka aplikace 3-20 minut - intenzita minimálně podprahově senzitivní - transregionálně/segmentálně/reflexní (ovlivněním Headových zón můžeme ovlivnit vnitřní orgány, který reflexní změnu vyvolali)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Aplikace - subakutní 1x denně, chronická 2-3 x týdně, po 6. aplikaci zhodnotit efekt terapie, obvykle 9-12 procedur - po 1. aplikaci může dojít ke zhoršení obtíží - délka aplikace 3-20 minut - intenzita minimálně podprahově senzitivní - transregionálně/segmentálně/reflexní (ovlivněním Headových zón můžeme ovlivnit vnitřní orgány, který reflexní změnu vyvolali)",
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
        title: "Definice: podélné mechanické vlnění o frekvenci nad hranicí slyšitelného zvuku (20 000Hz), zj. 0,5-3 MHz, které se generuje rozkmitáním piezoelektrického krystalu v hlavici vysokofrekvenčním proudem - zřeďování a zhušťování prostředí (ve své dráze rozkmitá částice i celé buňky) - ERA - efektivní kmitající oblast 1-10 cm2 (vyzařovací plocha hlavice) - akustická impedance: odraz v místě tkání s různou intenzitou - hloubková termoterapie - zdroj tepelné energie",
        points: [
        ]
      },
      {
        title: "Účinky",
        points: [
          "1. fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
          "2. chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
          "3. biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému) - porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
        ]
      },
      {
        title: "Frekvence",
        points: [
          "1. 1MHz - hluboké partie",
          "2. 3 MHz - povrchové partie",
        ]
      },
      {
        title: "Intenzita - Watt/cm2 - 0,5 W/cm2 do 2 W/cm2 u akutního 3 minuty - 0,8 - 1 do 3 W/cm2 u chronická 5 min - step 10 min max",
        points: [
        ]
      },
      {
        title: "Forma aplikace - přímý x podvodní - dynamické (stálý pohyb po celém rozsahu léčené tkáně) x semistatické (pohyb po obvodu ERA) x statické (zřídka) - lokální/segmentální/neurální/radikulární",
        points: [
          "1. kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
          "2. pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
        ]
      },
      {
        title: "Indikace",
        points: [
          "1. posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
          "2. revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
          "3. onemocnění periferních nervů - neuropatie, Fantomové bolesti",
          "4. poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace)",
          "5. jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura",
          "6. epikondylalgie, kalcifikace",
        ]
      },
      {
        title: "Kontraindikace",
        points: [
          "1. epifýzy rostoucích kostí",
          "2. stav po laminektomii - do jizvy",
          "3. gonády",
          "4. oči, krvácení, susp. embolus",
          "5. mozek",
          "6. srdce",
          "7. periferní nervy pod povrchem kostí",
          "8. menses",
          "Rázová vlna",
        ]
      },
      {
        title: "Definice: je neinvazivní fyzikální terapie využívající mechanické akustické vlnění s vysokou amplitudou a krátkou dobou trvání - využití zj. u chronických bolestivých stavů pohybového aparátu (tendinopatie, entezopatie) - cílem rázové vlny je ovlivnění patologických změn tkáně a stimulace reparace",
        points: [
        ]
      },
      {
        title: "Typy",
        points: [
          "1. fokusová - energie se soustředí do určité hloubky, přesné zacílení patologického ložiska",
          "2. radiální - tlaková vlna se šíří radiálně od aplikátoru, zj. na povrchové struktury",
        ]
      },
      {
        title: "Účinky",
        points: [
          "1. mechanické - mechanické podráždění tkáně, mikrostimulace patologické tkáně, fragmentace kalcifikací",
          "2. biologické - stimulace angiogeneze a neovaskularizace, regenerace buněk, podpora hojení šlach",
          "3. analgetické - snížení bolesti, modulace nociceptivního přenosu",
        ]
      },
      {
        title: "Indikace",
        points: [
          "1. laterální epikondylalgie",
          "2. mediální epikondylalgie",
          "3. tendinopatie rotátorové manžety",
          "4. kalcifikující tendinopatie ramene",
          "5. plantární fascitida",
          "6. patelární tendinopatie",
          "7. některé formy kalcifikací měkkých tkání",
        ]
      },
      {
        title: "Kontraindikace",
        points: [
          "1. absolutní",
          "A. těhotenství (neaplikovat přes plod)",
          "B. maligní tumor v místě aplikace",
          "C. infekce v místě aplikace",
          "D. porucha krevní srážlivost/významná koagulupatie",
          "E. aplikace přes: oblast velkých cév, plíce, mozek, míchu, růstové ploténky",
          "2. relativní",
          "A. antikoagulancia",
          "B. výrazná neuropatie/porucha citlivosti",
          "C. čerstvé poranění kůže v místě aplikace",
          "D. respektovat lokalizaci kardiostimulátoru",
        ]
      },
      {
        title: "N.Ú.",
        points: [
          "1. bolest během aplikace",
          "2. zarudnutí",
          "3. otok",
          "4. hematom",
          "5. petechie",
          "6. přechodně zvýšená bolestivost po terapii",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:6:flashcard:1",
        prompt: "Shrn cast: Prehled",
        answer: "Ultrazvuk",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:2",
        prompt: "Co je dulezite k bodu: Ultrazvuk?",
        answer: "Ultrazvuk",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:3",
        prompt: "Shrn cast: Definice",
        answer: "Definice: podélné mechanické vlnění o frekvenci nad hranicí slyšitelného zvuku (20 000Hz), zj. 0,5-3 MHz, které se generuje rozkmitáním piezoelektrického krystalu v hlavici vysokofrekvenčním proudem - zřeďování a zhušťování prostředí (ve své dráze rozkmitá částice i celé buňky) - ERA - efektivní kmitající oblast 1-10 cm2 (vyzařovací plocha hlavice) - akustická impedance: odraz v místě tkání s různou intenzitou - hloubková termoterapie - zdroj tepelné energie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:4",
        prompt: "Shrn cast: Účinky",
        answer: "1. fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže 2. chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně 3. biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému) - porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:5",
        prompt: "Co je dulezite k bodu: fyzikální?",
        answer: "1. fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:6",
        prompt: "Co je dulezite k bodu: chemické?",
        answer: "2. chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:7",
        prompt: "Co je dulezite k bodu: biologické?",
        answer: "3. biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému) - porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:8",
        prompt: "Shrn cast: Frekvence",
        answer: "1. 1MHz - hluboké partie 2. 3 MHz - povrchové partie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:9",
        prompt: "Co je dulezite k bodu: 1MHz?",
        answer: "1. 1MHz - hluboké partie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:10",
        prompt: "Co je dulezite k bodu: 3 MHz?",
        answer: "2. 3 MHz - povrchové partie",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:11",
        prompt: "Shrn cast: Intenzita",
        answer: "Intenzita - Watt/cm2 - 0,5 W/cm2 do 2 W/cm2 u akutního 3 minuty - 0,8 - 1 do 3 W/cm2 u chronická 5 min - step 10 min max",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:12",
        prompt: "Shrn cast: Forma aplikace",
        answer: "1. kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů 2. pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:13",
        prompt: "Co je dulezite k bodu: kontinuální?",
        answer: "1. kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:14",
        prompt: "Co je dulezite k bodu: pulzní?",
        answer: "2. pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:15",
        prompt: "Shrn cast: Indikace",
        answer: "1. posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení 2. revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis 3. onemocnění periferních nervů - neuropatie, Fantomové bolesti 4. poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace) 5. jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura 6. epikondylalgie, kalcifikace",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:16",
        prompt: "Co je dulezite k bodu: posttraumatické stavy?",
        answer: "1. posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:17",
        prompt: "Co je dulezite k bodu: revmatoidní artritidy, artrózy?",
        answer: "2. revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:18",
        prompt: "Co je dulezite k bodu: onemocnění periferních nervů?",
        answer: "3. onemocnění periferních nervů - neuropatie, Fantomové bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:19",
        prompt: "Co je dulezite k bodu: poruchy cirkulace?",
        answer: "4. poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace)",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:20",
        prompt: "Co je dulezite k bodu: jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura?",
        answer: "5. jizvy (po zhojení), dekubity (vzdálená aplikace), Dupuytrenova kontraktura",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:21",
        prompt: "Co je dulezite k bodu: epikondylalgie, kalcifikace?",
        answer: "6. epikondylalgie, kalcifikace",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:22",
        prompt: "Shrn cast: Kontraindikace",
        answer: "1. epifýzy rostoucích kostí 2. stav po laminektomii - do jizvy 3. gonády 4. oči, krvácení, susp. embolus 5. mozek 6. srdce",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:23",
        prompt: "Co je dulezite k bodu: epifýzy rostoucích kostí?",
        answer: "1. epifýzy rostoucích kostí",
      },
      {
        id: "ix-fyzikalni-terapie:6:flashcard:24",
        prompt: "Co je dulezite k bodu: stav po laminektomii?",
        answer: "2. stav po laminektomii - do jizvy",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:6:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: podélné mechanické vlnění o frekvenci nad hranicí slyšitelného zvuku (20 000Hz), zj. 0,5-3 MHz, které se generuje rozkmitáním piezoelektrického krystalu v hlavici vysokofrekvenčním proudem - zřeďování a zhušťování prostředí (ve své dráze rozkmitá částice i celé buňky) - ERA - efektivní kmitající oblast 1-10 cm2 (vyzařovací plocha hlavice) - akustická impedance: odraz v místě tkání s různou intenzitou - hloubková termoterapie - zdroj tepelné energie",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: podélné mechanické vlnění o frekvenci nad hranicí slyšitelného zvuku (20 000Hz), zj. 0,5-3 MHz, které se generuje rozkmitáním piezoelektrického krystalu v hlavici vysokofrekvenčním proudem - zřeďování a zhušťování prostředí (ve své dráze rozkmitá částice i celé buňky) - ERA - efektivní kmitající oblast 1-10 cm2 (vyzařovací plocha hlavice) - akustická impedance: odraz v místě tkání s různou intenzitou - hloubková termoterapie - zdroj tepelné energie",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. fyzikální - přívod tepla vede k vasodilataci, zvýší se lokální metabolismus, sníží se hypertonus, sníží se bolesti, kavitace, mikromasáže",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. chemické - excitace molekul, přeměna gelu v sol (změna sraženiny v tekutinu, která se lépe vstřebá), alkalizace tkáně",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému) - porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. biologické - destrukce jader se zvýšenou mitotickou aktivitou, desintegrace, nekroza, zvýší se difuze, permeabilita (absorpce exsudátů, snížení edému) - porucha vodivosti nervů, zvýší se enkefaliny, porucha tvorby kapilár, snížena obranyschopnost",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Intenzita - Watt/cm2 - 0,5 W/cm2 do 2 W/cm2 u akutního 3 minuty - 0,8 - 1 do 3 W/cm2 u chronická 5 min - step 10 min max",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Intenzita - Watt/cm2 - 0,5 W/cm2 do 2 W/cm2 u akutního 3 minuty - 0,8 - 1 do 3 W/cm2 u chronická 5 min - step 10 min max",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Forma aplikace - přímý x podvodní - dynamické (stálý pohyb po celém rozsahu léčené tkáně) x semistatické (pohyb po obvodu ERA) x statické (zřídka) - lokální/segmentální/neurální/radikulární",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Forma aplikace - přímý x podvodní - dynamické (stálý pohyb po celém rozsahu léčené tkáně) x semistatické (pohyb po obvodu ERA) x statické (zřídka) - lokální/segmentální/neurální/radikulární",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. kontinuální - zvyšuje teplo, ohřev tkání, nevhodné u akutních zánětů",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. pulzní - poměr impulzu a pauz (atermický), aplikace několik ms, pak pauza, poměr 1:5-10, možná aplikace větší intenzity",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. posttraumatické stavy - kontuze, distorze, fraktury (po 48 hod) - snížení otoku, bolesti, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. revmatoidní artritidy, artrózy - m. Bechtěrev, bursitis, capsulitis, tendinitis",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. onemocnění periferních nervů - neuropatie, Fantomové bolesti",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. onemocnění periferních nervů - neuropatie, Fantomové bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:6:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. poruchy cirkulace - Raynaud, KRBS (pouze segmentální aplikace)",
      },
    ],
  },
  "ix-fyzikalni-terapie:7": {
    chapters: [
      {
        title: "Definice: je léčebná výměna tepelné energie mezi okolím a organizmem - teplo = kinetická energie",
        points: [
        ]
      },
      {
        title: "Dělení",
        points: [
          "1. pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
          "2. negativní - odebírání tepla, ochlazujeme",
          "3. kombinované",
        ]
      },
      {
        title: "Účinky",
        points: [
          "1. lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
          "2. celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení - vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
        ]
      },
      {
        title: "Přenos tepla mezi tělem a okolí",
        points: [
          "1. kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
          "2. konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
          "3. iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
          "4. evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
        ]
      },
      {
        title: "Formy termoterapie",
        points: [
          "1. kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
          "2. bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
          "3. vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
          "4. sálavé teplo - infračervené záření",
          "5. hloubkové prohřátí - krátkovlnná diatermie",
        ]
      },
      {
        title: "Rozdělení",
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
        title: "Indikace - hyperémie: chronické nemoci pojiva, kloubů, m. Bechtěrev, artrózy, polyneuropatie - svalové spasmy, chronické bolesti zad - aplikace tepla před cvičením/protahování/mobilizací",
        points: [
        ]
      },
      {
        title: "Kontraindikace",
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
        prompt: "Shrn cast: Definice",
        answer: "Definice: je léčebná výměna tepelné energie mezi okolím a organizmem - teplo = kinetická energie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:2",
        prompt: "Shrn cast: Dělení",
        answer: "1. pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C) 2. negativní - odebírání tepla, ochlazujeme 3. kombinované",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:3",
        prompt: "Co je dulezite k bodu: pozitivní?",
        answer: "1. pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:4",
        prompt: "Co je dulezite k bodu: negativní?",
        answer: "2. negativní - odebírání tepla, ochlazujeme",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:5",
        prompt: "Co je dulezite k bodu: kombinované?",
        answer: "3. kombinované",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:6",
        prompt: "Shrn cast: Účinky",
        answer: "1. lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu 2. celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení - vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:7",
        prompt: "Co je dulezite k bodu: lokální?",
        answer: "1. lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:8",
        prompt: "Co je dulezite k bodu: celkové?",
        answer: "2. celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení - vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:9",
        prompt: "Shrn cast: Přenos tepla mezi tělem a okolí",
        answer: "1. kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší) 2. konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty 3. iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa) 4. evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:10",
        prompt: "Co je dulezite k bodu: kondukce?",
        answer: "1. kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:11",
        prompt: "Co je dulezite k bodu: konvekce?",
        answer: "2. konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:12",
        prompt: "Co je dulezite k bodu: iradiace?",
        answer: "3. iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:13",
        prompt: "Co je dulezite k bodu: evaporace?",
        answer: "4. evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:14",
        prompt: "Shrn cast: Formy termoterapie",
        answer: "1. kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem) 2. bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie 3. vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže 4. sálavé teplo - infračervené záření 5. hloubkové prohřátí - krátkovlnná diatermie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:15",
        prompt: "Co je dulezite k bodu: kontaktní teplo?",
        answer: "1. kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:16",
        prompt: "Co je dulezite k bodu: bezkontaktní (distanční)?",
        answer: "2. bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:17",
        prompt: "Co je dulezite k bodu: vodní termoterapie?",
        answer: "3. vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:18",
        prompt: "Co je dulezite k bodu: sálavé teplo?",
        answer: "4. sálavé teplo - infračervené záření",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:19",
        prompt: "Co je dulezite k bodu: hloubkové prohřátí?",
        answer: "5. hloubkové prohřátí - krátkovlnná diatermie",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:20",
        prompt: "Shrn cast: Rozdělení",
        answer: "1. Pozitivní A. částečná - obklady, peloidy, parafín (vyšší teploty, malé povrchové svaly) B. celková - lázně 2. Negativní A. částečná - obklady, ledování, kryoterapie B. celková - řízená, neřízená kryosauna",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:21",
        prompt: "Co je dulezite k bodu: Pozitivní?",
        answer: "1. Pozitivní",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:22",
        prompt: "Co je dulezite k bodu: částečná?",
        answer: "A. částečná - obklady, peloidy, parafín (vyšší teploty, malé povrchové svaly)",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:23",
        prompt: "Co je dulezite k bodu: celková?",
        answer: "B. celková - lázně",
      },
      {
        id: "ix-fyzikalni-terapie:7:flashcard:24",
        prompt: "Co je dulezite k bodu: Negativní?",
        answer: "2. Negativní",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:7:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: je léčebná výměna tepelné energie mezi okolím a organizmem - teplo = kinetická energie",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: je léčebná výměna tepelné energie mezi okolím a organizmem - teplo = kinetická energie",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. pozitivní - dodávání tepla (max. tolerance parafín do 56 st.C, peloid 48 st.C, celotělová koupel 42 st.C, končetino 46 st.C)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. negativní - odebírání tepla, ochlazujeme",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. negativní - odebírání tepla, ochlazujeme",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. lokální - hyperemie, zvýšena permeabilita kapilár, zvýšení diapedezy leukocytů (vystupují z krevního řečiště do okolí, významné při zánětu), snížení tonu",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení - vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. celkové - pokles TK, vzestup SF při mírném/pomalém ohřívání/chlazení - vzestup TK i SF při intenzivním zahříváním nebo náhlém ochlazení - sedativní, relaxační účinek",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. kondukce - přímý kontakt mezi dvěma tělesy (z vyšší energetické hladiny na nižší)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. konvekce - proudění, teplo se přenáší pomocí pohybujícího media (vzduch, voda), vodní koupel (proudící), tok krve k KV systému, lymfy, často se kombinuje s kondukty",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. iradiace - záření, teplo se přenáší pomocí elektromagnetického záření, bez nutnosti přímého kontaktu, - infračervené záření (IR lampa)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. evaporace - vypařování, pocení, ztráta solí, k. močové, močoviny (po proceduře odpočívat, pít minerální vody)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. kontaktní teplo - parafín, peloid, teplé obklady (přímý kontakt s tělem)",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. bezkontaktní (distanční) - fototerapie IR, helioterapie, diatermie",
      },
      {
        id: "ix-fyzikalni-terapie:7:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. vodní termoterapie - teplé koupele, vířivé koupele, podvodní masáže",
      },
    ],
  },
  "ix-fyzikalni-terapie:8": {
    chapters: [
      {
        title: "Definice: je odmítání tepla z organizmu s terapeutickým cílem - teplota kolem 0°C a méně - cryo: řecky chlad - chlad je subjektivní vjem, není fyzikální veličina",
        points: [
        ]
      },
      {
        title: "Efekt kryoterapie - analgezie, snížení otoku, ovlivnění zánětlivé reakce, snížení svalového tonu, omezení metabolické aktivity tkání",
        points: [
        ]
      },
      {
        title: "Účinky - chlad → vazokonstrikce → ↓ prokrvení → ↓ metabolismus → ↓ edém + ↓ bolest",
        points: [
          "1. Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
          "2. Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
          "3. Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
          "4. Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
          "1. Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
          "2. Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
          "protiklad ostatních procedur: vazokonstrikce, snížena permeabilita a diapedéza, zhoršuje buněčnou imunitu, zhoršuje spasmy",
          "aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí",
          "analgetické účinky",
        ]
      },
      {
        title: "Indikace",
        points: [
          "1. akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
          "2. chronické bolestivé stavy - artróza, revmatoidní artritida",
          "3. reflexní svalové změny - po krátkém kryostimulu intenzivní hyperémie",
          "4. spasticita - snižuje dráždivost",
          "5. RA, hemeroidy",
        ]
      },
      {
        title: "Kontraindikace - nestabilní hypertenze, IM méně než půl rok, srdeční/respirační dekompenzace, angina pectoris - poruchy prokrvení, citlivosti, chladová alergie, anémie, záchvatovité onemocnění - Raynaudova choroba, kryoglubulinémie, paroyxysmální chladová hemoglobinurie",
        points: [
        ]
      },
      {
        title: "N.Ú. kryoterapie: poškození kůže, omrzliny, poškození periferního nervu, paradoxní reakce na chlad",
        points: [
        ]
      },
      {
        title: "Používají se: - aplikace několikrát denně/kontinuálně s přestávkami - použití vnitřní izolace (mezivrstva tkaniny) - při lokálních obkladech - led, těkavé látky (ethylchlorid, metylchlorid), chladné plyny",
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
        prompt: "Shrn cast: Definice",
        answer: "Definice: je odmítání tepla z organizmu s terapeutickým cílem - teplota kolem 0°C a méně - cryo: řecky chlad - chlad je subjektivní vjem, není fyzikální veličina",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:2",
        prompt: "Shrn cast: Efekt kryoterapie",
        answer: "Efekt kryoterapie - analgezie, snížení otoku, ovlivnění zánětlivé reakce, snížení svalového tonu, omezení metabolické aktivity tkání",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:3",
        prompt: "Shrn cast: Účinky",
        answer: "1. Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku 2. Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii 3. Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku 4. Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus 1. Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus 2. Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:4",
        prompt: "Co je dulezite k bodu: Vazokonstrikce a antiedematózní?",
        answer: "1. Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:5",
        prompt: "Co je dulezite k bodu: Analgetický efekt?",
        answer: "2. Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:6",
        prompt: "Co je dulezite k bodu: Metabolický účinek?",
        answer: "3. Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:7",
        prompt: "Co je dulezite k bodu: Protizánětlivý účinek?",
        answer: "4. Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:8",
        prompt: "Co je dulezite k bodu: Lokální?",
        answer: "1. Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:9",
        prompt: "Co je dulezite k bodu: Celkové?",
        answer: "2. Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:10",
        prompt: "Co je dulezite k bodu: protiklad ostatních procedur?",
        answer: "protiklad ostatních procedur: vazokonstrikce, snížena permeabilita a diapedéza, zhoršuje buněčnou imunitu, zhoršuje spasmy",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:11",
        prompt: "Co je dulezite k bodu: aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí?",
        answer: "aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:12",
        prompt: "Co je dulezite k bodu: analgetické účinky?",
        answer: "analgetické účinky",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:13",
        prompt: "Shrn cast: Indikace",
        answer: "1. akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace 2. chronické bolestivé stavy - artróza, revmatoidní artritida 3. reflexní svalové změny - po krátkém kryostimulu intenzivní hyperémie 4. spasticita - snižuje dráždivost 5. RA, hemeroidy",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:14",
        prompt: "Co je dulezite k bodu: akutní traumata a záněty?",
        answer: "1. akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:15",
        prompt: "Co je dulezite k bodu: chronické bolestivé stavy?",
        answer: "2. chronické bolestivé stavy - artróza, revmatoidní artritida",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:16",
        prompt: "Co je dulezite k bodu: reflexní svalové změny?",
        answer: "3. reflexní svalové změny - po krátkém kryostimulu intenzivní hyperémie",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:17",
        prompt: "Co je dulezite k bodu: spasticita?",
        answer: "4. spasticita - snižuje dráždivost",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:18",
        prompt: "Co je dulezite k bodu: RA, hemeroidy?",
        answer: "5. RA, hemeroidy",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:19",
        prompt: "Shrn cast: Kontraindikace",
        answer: "Kontraindikace - nestabilní hypertenze, IM méně než půl rok, srdeční/respirační dekompenzace, angina pectoris - poruchy prokrvení, citlivosti, chladová alergie, anémie, záchvatovité onemocnění - Raynaudova choroba, kryoglubulinémie, paroyxysmální chladová hemoglobinurie",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:20",
        prompt: "Shrn cast: Ú. kryoterapie",
        answer: "N.Ú. kryoterapie: poškození kůže, omrzliny, poškození periferního nervu, paradoxní reakce na chlad",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:21",
        prompt: "Shrn cast: Používají se",
        answer: "1. Lokální: ledové obklady, gelové sáčky, studená voda, kryosprej, ledové masáže, ledové komprese 2. Celkové: kryokomora (chránit akra, poté následuje lehké cvičení a protažení, teplota mínus 180 st.C, max. 3 minuty) Pomůcka: BOMP - bolest, otok, metabolismus, prokrvení (KRYO=4 hlavní účinky) - KI: chlad nesmí tam, kde cévy nebo nervy neumí správně reagovat",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:22",
        prompt: "Co je dulezite k bodu: Lokální?",
        answer: "1. Lokální: ledové obklady, gelové sáčky, studená voda, kryosprej, ledové masáže, ledové komprese",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:23",
        prompt: "Co je dulezite k bodu: Celkové?",
        answer: "2. Celkové: kryokomora (chránit akra, poté následuje lehké cvičení a protažení, teplota mínus 180 st.C, max. 3 minuty)",
      },
      {
        id: "ix-fyzikalni-terapie:8:flashcard:24",
        prompt: "Co je dulezite k bodu: Pomůcka:?",
        answer: "Pomůcka:",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:8:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: je odmítání tepla z organizmu s terapeutickým cílem - teplota kolem 0°C a méně - cryo: řecky chlad - chlad je subjektivní vjem, není fyzikální veličina",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: je odmítání tepla z organizmu s terapeutickým cílem - teplota kolem 0°C a méně - cryo: řecky chlad - chlad je subjektivní vjem, není fyzikální veličina",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Efekt kryoterapie - analgezie, snížení otoku, ovlivnění zánětlivé reakce, snížení svalového tonu, omezení metabolické aktivity tkání",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Efekt kryoterapie - analgezie, snížení otoku, ovlivnění zánětlivé reakce, snížení svalového tonu, omezení metabolické aktivity tkání",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Účinky - chlad → vazokonstrikce → ↓ prokrvení → ↓ metabolismus → ↓ edém + ↓ bolest",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Účinky - chlad → vazokonstrikce → ↓ prokrvení → ↓ metabolismus → ↓ edém + ↓ bolest",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Vazokonstrikce a antiedematózní: snížený průtok krve, snížena permeabilita kapilár, omezen přestup tekutiny do intersticia vede ke zmenšení otoku",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Analgetický efekt: snížena rychlost vedení nervových vláken, zvyšuje práh pro vznik akčního potenciálu, později může vést k hypestézii až anestezii",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. Metabolický účinek: snížena teplota tkáně vede ke snížení enzymatické aktivity a snížení spotřeby kyslíku",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. Protizánětlivý účinek: moduluje akutní zánětlivou reakci, je snížený lokální průtok a metabolismus",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Lokální: podráždění chladových receptorů vede ke snížení dráždivosti buněk předních rozích míšních a tím se sníží hypertonus",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Celkové: informace ovládá korová a podkorová centra vč. limbického systému a začne se generovat teplo",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "protiklad ostatních procedur: vazokonstrikce, snížena permeabilita a diapedéza, zhoršuje buněčnou imunitu, zhoršuje spasmy",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "protiklad ostatních procedur: vazokonstrikce, snížena permeabilita a diapedéza, zhoršuje buněčnou imunitu, zhoršuje spasmy",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "aktivuje obrany schopnost tréninkem podmíněných reflexních termoregulací a imunitních reakcí",
      },
      {
        id: "ix-fyzikalni-terapie:8:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. akutní traumata a záněty - snížení otoku, hematomu, krvácení a bolesti, mobilizace",
      },
    ],
  },
  "ix-fyzikalni-terapie:9": {
    chapters: [
      {
        title: "Definice: je terapeutické využívání elektromagnetického vlnění s vlnovou délkou 10⁻⁴ až 10⁻⁹ m",
        points: [
        ]
      },
      {
        title: "Rozdělení",
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
        title: "UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření",
        points: [
          "1. UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
          "2. UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
          "3. UVC \u003c 280 nm karcinogenní, desinfekce sálů",
          "Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
        ]
      },
      {
        title: "Viditelné světlo - klimatoterapi, vliv na růst, regeneraci, psychický vliv",
        points: [
          "1. Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu - indikace: hojení ran, popáleniny, kožních defektů - minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min. 3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
          "2. Laser - light amplification by stimulated emission of light - ochrana očí! - monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1. do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4. nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2 - pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace - KI: malignita, st.p. radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická - indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
        ]
      },
      {
        title: "IR (infračervené záření)",
        points: [
          "1. A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace",
          "2. B 1000 °C - působí povrchně - ohřívá kůži, při delší aplikaci tepelně zatěžuje kožní povrch - navození celkové relaxace před další FT",
          "3. C radiátory",
          "fyziologické účinky: analogické aplikaci tepla, stimulace lokální cirkulace s následnou hyperemií",
          "v krátké době kůže začervená, pacient cítí teplo, tepelný erytém vzniká v průběhu ozařování vlivem lokální vazodilatace, do 2 jod zmizí, nezanechává pigmentaci",
          "relaxace, celkové zklidnění, uvolnění spazmů, zvýšení absorpce exsudátů, mírná analgezie, zvyšuje permeabilitu kapilár, diapedéza leukocytů",
          "KI: febrilie, hypertenze, těhotenství, dekompenzovaná arteriální hypertenze, srdeční selhání",
          "10-20 min. vzdálenost 100 cm IR-B,",
          "1-8 min. vzdálenost 20 cm IR-A",
          "indikace: posttraumatické stavy od 2.-3. dne, chronické bolestivé stavy pohybové ústrojí (před zahájení fyzioterapie), kloubní ztuhlost, tendinitidy, spasmy,",
          "součást jiných terapeutických postupů",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:9:flashcard:1",
        prompt: "Shrn cast: Definice",
        answer: "Definice: je terapeutické využívání elektromagnetického vlnění s vlnovou délkou 10⁻⁴ až 10⁻⁹ m",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:2",
        prompt: "Shrn cast: Rozdělení",
        answer: "1. dle vlnové délky A. UV \u003c 400 nm B. viditelné světlo 400 - 760 nm C. IR \u003e 760 nm 2. dle polarizace A. polarizované - laser, biolampa - kmitá uspořádaně",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:3",
        prompt: "Co je dulezite k bodu: dle vlnové délky?",
        answer: "1. dle vlnové délky",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:4",
        prompt: "Co je dulezite k bodu: UV \u003c 400 nm?",
        answer: "A. UV \u003c 400 nm",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:5",
        prompt: "Co je dulezite k bodu: viditelné světlo 400?",
        answer: "B. viditelné světlo 400 - 760 nm",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:6",
        prompt: "Co je dulezite k bodu: IR \u003e 760 nm?",
        answer: "C. IR \u003e 760 nm",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:7",
        prompt: "Co je dulezite k bodu: dle polarizace?",
        answer: "2. dle polarizace",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:8",
        prompt: "Co je dulezite k bodu: polarizované?",
        answer: "A. polarizované - laser, biolampa - kmitá uspořádaně",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:9",
        prompt: "Co je dulezite k bodu: nepolarizované?",
        answer: "B. nepolarizované - kmitá v mnoha různých rovinách",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:10",
        prompt: "Shrn cast: UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření",
        answer: "1. UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče 2. UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní 3. UVC \u003c 280 nm karcinogenní, desinfekce sálů Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:11",
        prompt: "Co je dulezite k bodu: UVA 315?",
        answer: "1. UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:12",
        prompt: "Co je dulezite k bodu: UVB 280?",
        answer: "2. UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:13",
        prompt: "Co je dulezite k bodu: UVC \u003c 280 nm karcinogenní, desinfekce sálů?",
        answer: "3. UVC \u003c 280 nm karcinogenní, desinfekce sálů",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:14",
        prompt: "Co je dulezite k bodu: Prahová erytémová dávka UV?",
        answer: "Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:15",
        prompt: "Shrn cast: Viditelné světlo",
        answer: "1. Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu - indikace: hojení ran, popáleniny, kožních defektů - minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min. 3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně 2. Laser - light amplification by stimulated emission of light - ochrana očí! - monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1. do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4. nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2 - pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace - KI: malignita, st.p. radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická - indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:16",
        prompt: "Co je dulezite k bodu: Biolampa?",
        answer: "1. Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu - indikace: hojení ran, popáleniny, kožních defektů - minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min. 3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:17",
        prompt: "Co je dulezite k bodu: Laser?",
        answer: "2. Laser - light amplification by stimulated emission of light - ochrana očí! - monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1. do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4. nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2 - pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace - KI: malignita, st.p. radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická - indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:18",
        prompt: "Shrn cast: IR (infračervené záření)",
        answer: "1. A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace 2. B 1000 °C - působí povrchně - ohřívá kůži, při delší aplikaci tepelně zatěžuje kožní povrch - navození celkové relaxace před další FT 3. C radiátory fyziologické účinky: analogické aplikaci tepla, stimulace lokální cirkulace s následnou hyperemií v krátké době kůže začervená, pacient cítí teplo, tepelný erytém vzniká v průběhu ozařování vlivem lokální vazodilatace, do 2 jod zmizí, nezanechává pigmentaci relaxace, celkové zklidnění, uvolnění spazmů, zvýšení absorpce exsudátů, mírná analgezie, zvyšuje permeabilitu kapilár, diapedéza leukocytů",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:19",
        prompt: "Co je dulezite k bodu: A Wolfram, 2500 °C (solux)?",
        answer: "1. A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:20",
        prompt: "Co je dulezite k bodu: B 1000 °C?",
        answer: "2. B 1000 °C - působí povrchně - ohřívá kůži, při delší aplikaci tepelně zatěžuje kožní povrch - navození celkové relaxace před další FT",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:21",
        prompt: "Co je dulezite k bodu: C radiátory?",
        answer: "3. C radiátory",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:22",
        prompt: "Co je dulezite k bodu: fyziologické účinky?",
        answer: "fyziologické účinky: analogické aplikaci tepla, stimulace lokální cirkulace s následnou hyperemií",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:23",
        prompt: "Co je dulezite k bodu: v krátké době kůže začervená, pacient cítí teplo, tepelný erytém vzniká v průběhu ozařová...?",
        answer: "v krátké době kůže začervená, pacient cítí teplo, tepelný erytém vzniká v průběhu ozařování vlivem lokální vazodilatace, do 2 jod zmizí, nezanechává pigmentaci",
      },
      {
        id: "ix-fyzikalni-terapie:9:flashcard:24",
        prompt: "Co je dulezite k bodu: relaxace, celkové zklidnění, uvolnění spazmů, zvýšení absorpce exsudátů, mírná analgezie,...?",
        answer: "relaxace, celkové zklidnění, uvolnění spazmů, zvýšení absorpce exsudátů, mírná analgezie, zvyšuje permeabilitu kapilár, diapedéza leukocytů",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:9:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: je terapeutické využívání elektromagnetického vlnění s vlnovou délkou 10⁻⁴ až 10⁻⁹ m",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: je terapeutické využívání elektromagnetického vlnění s vlnovou délkou 10⁻⁴ až 10⁻⁹ m",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. polarizované - laser, biolampa - kmitá uspořádaně",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. polarizované - laser, biolampa - kmitá uspořádaně",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. nepolarizované - kmitá v mnoha různých rovinách",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. nepolarizované - kmitá v mnoha různých rovinách",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "UV (vyvolává změny v povrchových vrstvách kůže) Ultrafialové záření",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. UVA 315 - 400 nm helioterapie, způsobuje pigmentaci bez erytému - léčba psoriáza, dermatózy, seborea - lokální/celkové zářiče",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. UVB 280 - 315 nm - vyvolává erytém, poté pigmentace, tvorba vit. D, baktericidní",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. UVC \u003c 280 nm karcinogenní, desinfekce sálů",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. UVC \u003c 280 nm karcinogenní, desinfekce sálů",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Prahová erytémová dávka UV: doba ozáření z 1 m, po níž přetrvává erytém i po 24 hod",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Viditelné světlo - klimatoterapi, vliv na růst, regeneraci, psychický vliv",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Viditelné světlo - klimatoterapi, vliv na růst, regeneraci, psychický vliv",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu - indikace: hojení ran, popáleniny, kožních defektů - minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min. 3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Biolampa - polychromatické (více vlnových délek), polarizované světlo, nonkoherentní (vlny nejsou synchronizované) - biostimulace, dodání energie, stimuluje syntézu kolagenu - indikace: hojení ran, popáleniny, kožních defektů - minimální účinek na poruchy pohybového ústrojí, nemá vliv na hlubší partie - 3-5 min. 3xdenně akutní fáze, postupně se intenzita snižuje na 1x denně",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Laser - light amplification by stimulated emission of light - ochrana očí! - monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1. do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4. nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2 - pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace - KI: malignita, st.p. radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická - indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Laser - light amplification by stimulated emission of light - ochrana očí! - monochromatické (jedna vlnová délka) - polarizované (kmit pouze v jedné rovině) - koherentní (vlny kmitají ve stejně fázi) - paralelní (má minimální divergenci) - má vysokou až velmi vysokou hustotu energie - před aplikací odmaštění plochy - plynové: HeNe (heliumneonové), 632 nm nebo CO2 (destrukční) - polovodičové: GaAs (galium arsenové), vlnová délka 904 nm - dnes: fotodiody, LED zářiče - třídy: 1. do 0,5 mW, 2. do 1mW, 3A. do 5mW, 3B. do 500 mW, 4. nad 500 mW (nebezpečný, využití v chirurgii) - energie = J = W(síla) .s (čas), hustota energie J/cm2 - pro terapii 5-500 mW - účinek: biostimulace, produkce ATP, produkce kolagenu, modulace zánětu, inhibice bakteriálního růstu, podpora vasodilatace - akcelerace nervové regenerace - KI: malignita, st.p. radioterapii 4-6 měsíců, hemoralgie, endokrinní žlázy, těhotenství, fotosenzitivita, fotofobie - způsob aplikace: statická, semistatická, rastovací, dynamická - indikace: hojení tkání (ran, šlach, ligament), arthritis (snížení bolesti a otoku), karpální tunel, neuropatie, neuralgie, bolest, epikondylalgie, tendinity … - dávkováni laserterapie: vyjadřujeme hustotou energie, která je určena množstvím energie J na ošetřovanou plochu (v cm2)",
      },
      {
        id: "ix-fyzikalni-terapie:9:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. A Wolfram, 2500 °C (solux) - červený filtr - odstraňuje větší vlnovou délku, cílí do hloubky - modrý filtr - odstraňuje krátkovlnou část IR světla, šetrnější účinek, povrchnější, ORL indikace (počáteční paranasální sinusitidy) - indikace: lokální/hloubková termoterapie - spasmy, triggery, lokální kožní zánětlivé procesy (furunculus, carbunculus, panaritium) pro usnadnění kolikvace",
      },
    ],
  },
  "ix-fyzikalni-terapie:10": {
    chapters: [
      {
        title: "Definice: terapeutické využití elektromagnetických oscilací s frekvencí \u003e 100 (300) kHz - elektromagnetické vlny při takové frekvenci nestačí vyvolat depolarizaci membrány nervového vlákna, ale jsou v normální tkáni konvertované na teplo - terapeutické využití kondenzátorového, indukčního nebo zářivého vysokofrekvenčního pole - bezkontaktní elektroterapii - synonymum je diatermie - převážně termický efekt Diatermie = je fyzikální terapeutická metoda využívající vysokofrekvenční magnetické pole - nestačí se vyvolat depolarizaci nervových vláken, ale přenáší se na teplo",
        points: [
        ]
      },
      {
        title: "Diatermie dělení (liší se hloubkou účinku)",
        points: [
          "1. krátkovlnná - metrové vlny, proniká hlouběji",
          "2. ultrakrátkovlnná - decimetrové vlny",
          "3. mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
        ]
      },
      {
        title: "Způsob aplikace a zásady provozu - opatření nápisem - 2 m odstup od přístroje - zákaz gravidní ženy (nízká porodní hmotnost, VVV) - pravidelná revize technikem",
        points: [
        ]
      },
      {
        title: "Krátkovlnná diatermie",
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
        title: "Ultrakrátkovlnné diatermie - absorpce a přeměna energie vysokofrekvenčního pole na energii tepelnou dochází k vnitřní tvorbě tepla, toto teplo je odváděno krví (konvekcí), dochází k vazodilataci, zvýšení permeabilitě kapilár, diatézy leukocytů, zvýšená resorbce extravazálních tekutin - svaly: prohřívání svalových spasmů, termický účinek - aplikace: speciální zářič 5-15 min, intenzita termicky senzitivní (první pocit tepla pacienta)",
        points: [
        ]
      },
      {
        title: "Mikrovlnná diatermie - vysokofrekvenční elektromagnetické pole s f 2,45 GHz a vlnovou délkou (centimetrové vlny) - maximum tvorby tepla ve svalové tkání - předepisování a provádění procedury dle údaji výrobce",
        points: [
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:10:flashcard:1",
        prompt: "Shrn cast: Definice",
        answer: "Definice: terapeutické využití elektromagnetických oscilací s frekvencí \u003e 100 (300) kHz - elektromagnetické vlny při takové frekvenci nestačí vyvolat depolarizaci membrány nervového vlákna, ale jsou v normální tkáni konvertované na teplo - terapeutické využití kondenzátorového, indukčního nebo zářivého vysokofrekvenčního pole - bezkontaktní elektroterapii - synonymum je diatermie - převážně termický efekt Diatermie = je fyzikální terapeutická metoda využívající vysokofrekvenční magnetické pole - nestačí se vyvolat depolarizaci nervových vláken, ale přenáší se na teplo",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:2",
        prompt: "Shrn cast: Diatermie dělení (liší se hloubkou účinku)",
        answer: "1. krátkovlnná - metrové vlny, proniká hlouběji 2. ultrakrátkovlnná - decimetrové vlny 3. mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:3",
        prompt: "Co je dulezite k bodu: krátkovlnná?",
        answer: "1. krátkovlnná - metrové vlny, proniká hlouběji",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:4",
        prompt: "Co je dulezite k bodu: ultrakrátkovlnná?",
        answer: "2. ultrakrátkovlnná - decimetrové vlny",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:5",
        prompt: "Co je dulezite k bodu: mikrovlnná?",
        answer: "3. mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:6",
        prompt: "Shrn cast: Způsob aplikace a zásady provozu",
        answer: "Způsob aplikace a zásady provozu - opatření nápisem - 2 m odstup od přístroje - zákaz gravidní ženy (nízká porodní hmotnost, VVV) - pravidelná revize technikem",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:7",
        prompt: "Shrn cast: Krátkovlnná diatermie",
        answer: "1. aplikace A. kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk) B. indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole) 2. účinky A. termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy) B. krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:8",
        prompt: "Co je dulezite k bodu: aplikace?",
        answer: "1. aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:9",
        prompt: "Co je dulezite k bodu: kondenzátorové pole?",
        answer: "A. kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:10",
        prompt: "Co je dulezite k bodu: indukční pole?",
        answer: "B. indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:11",
        prompt: "Co je dulezite k bodu: účinky?",
        answer: "2. účinky",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:12",
        prompt: "Co je dulezite k bodu: termální?",
        answer: "A. termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:13",
        prompt: "Co je dulezite k bodu: krevní změny?",
        answer: "B. krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:14",
        prompt: "Co je dulezite k bodu: metabolické?",
        answer: "C. metabolické - aktivace metabolických procesů",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:15",
        prompt: "Co je dulezite k bodu: nervový systém?",
        answer: "D. nervový systém - analgetické",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:16",
        prompt: "Co je dulezite k bodu: aplikace?",
        answer: "3. aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:17",
        prompt: "Co je dulezite k bodu: kontinuální?",
        answer: "A. kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:18",
        prompt: "Co je dulezite k bodu: pulzní?",
        answer: "B. pulzní - 20-50 Hz atermická procedura, 50-100 Hz hyperémie, zvýšená resorpce, 100-200 Hz blíží se kontinuální diatermii",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:19",
        prompt: "Co je dulezite k bodu: elektrody (součástí předpisu druh elektrody)?",
        answer: "4. elektrody (součástí předpisu druh elektrody) - kondenzátorové, distanční, speciálně tvarované, indukční kabel, speciální (cirkuploda)",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:20",
        prompt: "Co je dulezite k bodu: intenzita?",
        answer: "5. intenzita - řídit se výrobcem přístroje a subjektivními pocity pacienta",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:21",
        prompt: "Co je dulezite k bodu: délka aplikace?",
        answer: "6. délka aplikace - subchronické a chronické procesy 15-20 minut - akutní stavy (furunkl, karbunkl, panaritium) 3 minuty a dále podle reakce pacienta",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:22",
        prompt: "Co je dulezite k bodu: frekvence procedur?",
        answer: "7. frekvence procedur - účinek správně indikované a provedené diatermie je prolongovaný a přetrvává 48 hod - optimálně 3x týdně - počet procedur 9, během 3 týdnů",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:23",
        prompt: "Co je dulezite k bodu: KI: růstová zóna, akutní záněty, st.p.laminectomii (oblast jizvy), psychické poruchy, koc...?",
        answer: "8. KI: růstová zóna, akutní záněty, st.p.laminectomii (oblast jizvy), psychické poruchy, kochleární implantát, kardiostimulátor, přes sádru/dlahy/leukoplast, osteomyelitis, čerstvé zlomeniny, kovy, vředy, scrotum, žlázy, terapie kortikoidy, pacient na kovové posteli, žaludeční vředy",
      },
      {
        id: "ix-fyzikalni-terapie:10:flashcard:24",
        prompt: "Co je dulezite k bodu: indikace?",
        answer: "9. indikace: neuritis brachiálního plesu, bursitidy, dislokace, epikondylitis, facetový syndrom, kořenové syndromy, lumbalgie, RA",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:10:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: terapeutické využití elektromagnetických oscilací s frekvencí \u003e 100 (300) kHz - elektromagnetické vlny při takové frekvenci nestačí vyvolat depolarizaci membrány nervového vlákna, ale jsou v normální tkáni konvertované na teplo - terapeutické využití kondenzátorového, indukčního nebo zářivého vysokofrekvenčního pole - bezkontaktní elektroterapii - synonymum je diatermie - převážně termický efekt Diatermie = je fyzikální terapeutická metoda využívající vysokofrekvenční magnetické pole - nestačí se vyvolat depolarizaci nervových vláken, ale přenáší se na teplo",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: terapeutické využití elektromagnetických oscilací s frekvencí \u003e 100 (300) kHz - elektromagnetické vlny při takové frekvenci nestačí vyvolat depolarizaci membrány nervového vlákna, ale jsou v normální tkáni konvertované na teplo - terapeutické využití kondenzátorového, indukčního nebo zářivého vysokofrekvenčního pole - bezkontaktní elektroterapii - synonymum je diatermie - převážně termický efekt Diatermie = je fyzikální terapeutická metoda využívající vysokofrekvenční magnetické pole - nestačí se vyvolat depolarizaci nervových vláken, ale přenáší se na teplo",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Diatermie dělení (liší se hloubkou účinku)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Diatermie dělení (liší se hloubkou účinku)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. krátkovlnná - metrové vlny, proniká hlouběji",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. krátkovlnná - metrové vlny, proniká hlouběji",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. ultrakrátkovlnná - decimetrové vlny",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. ultrakrátkovlnná - decimetrové vlny",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. mikrovlnná - centimetrové vlny, mnohem vyšší frekvence (2,45 GHz), působí spíše povrchněji",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Způsob aplikace a zásady provozu - opatření nápisem - 2 m odstup od přístroje - zákaz gravidní ženy (nízká porodní hmotnost, VVV) - pravidelná revize technikem",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Způsob aplikace a zásady provozu - opatření nápisem - 2 m odstup od přístroje - zákaz gravidní ženy (nízká porodní hmotnost, VVV) - pravidelná revize technikem",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. kondenzátorové pole - výrazný termický efekt, 2 elektrody, pojištěnec součástí el. obvodu, dominuje elektrické pole, více se zahřívá povrchní vrstvu (podkoží, tuk)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. indukční pole - cívkou jde proud a vytváří se magnetické pole - využívá elektromagnetickou indukci a 1 elektrodu - v hloubce tkáně vznikají Foucaultovy proudy (přeměňují se na teplo), působí více ve hloubce (svaly) - kabel (v několika závitech kolem končetiny), plochá spirální elektroda, cirkuploda (potlačuje elektrický proud a propouští pouze magnetické pole)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. termální - cirkulační (vazodilatace, zvýšená mobilizace lymfy)",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "B. krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "B. krevní změny - zvýšení fagocytózy, zvýšení obranyschopnosti",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "C. metabolické - aktivace metabolických procesů",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "C. metabolické - aktivace metabolických procesů",
      },
      {
        id: "ix-fyzikalni-terapie:10:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "A. kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "A. kontinuální - nestačí se odvádět teplo (lokální přehřátí)",
      },
    ],
  },
  "ix-fyzikalni-terapie:11": {
    chapters: [
      {
        title: "Definice: elektrostimulace je metoda elektroterapie, při které elektrickým proudem vyvoláme depolarizaci nervu nebo přímo svalového vlákna s následnou svalovou kontrakcí - při poškození periferního nervu pro udržení trofiky svalů a zabránění fibroblastické přestavbě než dojde k reinervaci poškozeného nervu",
        points: [
          "1. Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů - využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
          "2. Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje - NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
          "3. Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2 - kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
        ]
      },
      {
        title: "Cíl elektrostimulace",
        points: [
          "1. zachovat/obnovit svalovou funkci",
          "2. zabránit/zmírnit svalovou atrofii",
          "3. zlepšit svalovou sílu",
          "4. podpořit motorickou reedukaci",
        ]
      },
      {
        title: "Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný - elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce - používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např. foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)",
        points: [
          "1. Indikace",
          "A. svalová slabost",
          "B. svalová atrofie při imobilizaci",
          "C. poruchy svalové aktivace",
        ]
      },
      {
        title: "Elektrogymnastika denervovaného svalu - jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu! - dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)",
        points: [
          "1. Indikace",
          "A. poškození periferního nervu",
          "B. periferní paréza",
          "C. léze nervového kořene",
        ]
      },
      {
        title: "Kontraindikace elektrostimulace",
        points: [
          "1. kardiostimulátor",
          "2. aplikace přes srdce",
          "3. maligní nádor v místě aplikace",
          "4. akutní krvácení/tromboza",
          "5. těhotenství (neaplikovat přes pánev, břicho)",
          "6. poškození v místě elektrod",
          "7. akutní infekce a zánět v místě aplikace",
        ]
      },
      {
        title: "I/T křivka - nejpřesnější ED pro léčbu periferních paréz, komplexní forma hodnocení dráždivosti - stanovení optimálních impulzů pro dráždění denervovaných svalů - komplexní forma hodnocení dráždivosti - graficky znázorňuje závislost intenzity potřebné k vyvolání prahového podráždění při postupném zkracování doby trvání impulzu - dříve se využívala reobáze a chronaxie, dnes Hoorweg-Weissova I/T křivka a z ní výpočitaný AQ kvocient - reobáze - nejmenší intenzita proudu, která při dostatečně dlouhém impulzu vyvolá minimální kontrakci (jak silný proud) - chronaxie - nejkratší doba impulzu (čas), která při intenzitě 2x reobáze vyvolá minimální kontrakci (jak dlouho musí působit) - u denervovaného svalu musíme dráždit přímo svalové vlákno a potřebujeme výrazně delší impulzy a vyšší intenzitu (charakteristicky se mění I/T křivka) - cíl: snažíme se o odpověď, co nejnižší intenzitou - čím delší délka impulzu, tím větší poškození, při zkrácení délky impulsu známka reinervace",
        points: [
        ]
      },
      {
        title: "Akomodační kvocietn AQ - kvantitativně vyjadřuje změny svalové dráždivosti - zdravý sval: NS ploténky mají schopnost akomodace na pozvolný nástup šikmých impulzů, intenzita je 3-6x větší oproti pravoúhlému impulzu - denervovaný sval: ztrácí schopnost akomodace, kontrakci vyvolá šikmý impulz s intenzitou téměř stejnou jako má pravoúhlý impulz - při stimulaci denervovaných svalů šikmými proudy se zdravé svaly nezapojují, tudíž nevznikají nežádoucí svalové synkinézy - vypočítá se jako podíl minimální intenzity vyvolávající kontrakci šikmým a pravoúhlým impulzem při délce impulzu 1000 ms - hodnoty AQ: zdravý sval 2,7-6, částečně denervovaný pod 2,7, denervovaný kolem 1, nad 6 vegetativní dystonie",
        points: [
        ]
      },
      {
        title: "Provedení",
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
        prompt: "Shrn cast: Definice",
        answer: "1. Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů - využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění 2. Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje - NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz) 3. Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2 - kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:2",
        prompt: "Co je dulezite k bodu: Elektrodiagnostika?",
        answer: "1. Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů - využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:3",
        prompt: "Co je dulezite k bodu: Elektrostimulace?",
        answer: "2. Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje - NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:4",
        prompt: "Co je dulezite k bodu: Elektrogymnastika?",
        answer: "3. Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2 - kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:5",
        prompt: "Shrn cast: Cíl elektrostimulace",
        answer: "1. zachovat/obnovit svalovou funkci 2. zabránit/zmírnit svalovou atrofii 3. zlepšit svalovou sílu 4. podpořit motorickou reedukaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:6",
        prompt: "Co je dulezite k bodu: zachovat/obnovit svalovou funkci?",
        answer: "1. zachovat/obnovit svalovou funkci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:7",
        prompt: "Co je dulezite k bodu: zabránit/zmírnit svalovou atrofii?",
        answer: "2. zabránit/zmírnit svalovou atrofii",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:8",
        prompt: "Co je dulezite k bodu: zlepšit svalovou sílu?",
        answer: "3. zlepšit svalovou sílu",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:9",
        prompt: "Co je dulezite k bodu: podpořit motorickou reedukaci?",
        answer: "4. podpořit motorickou reedukaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:10",
        prompt: "Shrn cast: Elektrostimualce inervovaného svalu",
        answer: "1. Indikace A. svalová slabost B. svalová atrofie při imobilizaci C. poruchy svalové aktivace",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:11",
        prompt: "Co je dulezite k bodu: Indikace?",
        answer: "1. Indikace",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:12",
        prompt: "Co je dulezite k bodu: svalová slabost?",
        answer: "A. svalová slabost",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:13",
        prompt: "Co je dulezite k bodu: svalová atrofie při imobilizaci?",
        answer: "B. svalová atrofie při imobilizaci",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:14",
        prompt: "Co je dulezite k bodu: poruchy svalové aktivace?",
        answer: "C. poruchy svalové aktivace",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:15",
        prompt: "Shrn cast: Elektrogymnastika denervovaného svalu",
        answer: "1. Indikace A. poškození periferního nervu B. periferní paréza C. léze nervového kořene",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:16",
        prompt: "Co je dulezite k bodu: Indikace?",
        answer: "1. Indikace",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:17",
        prompt: "Co je dulezite k bodu: poškození periferního nervu?",
        answer: "A. poškození periferního nervu",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:18",
        prompt: "Co je dulezite k bodu: periferní paréza?",
        answer: "B. periferní paréza",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:19",
        prompt: "Co je dulezite k bodu: léze nervového kořene?",
        answer: "C. léze nervového kořene",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:20",
        prompt: "Shrn cast: Kontraindikace elektrostimulace",
        answer: "1. kardiostimulátor 2. aplikace přes srdce 3. maligní nádor v místě aplikace 4. akutní krvácení/tromboza 5. těhotenství (neaplikovat přes pánev, břicho) 6. poškození v místě elektrod",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:21",
        prompt: "Co je dulezite k bodu: kardiostimulátor?",
        answer: "1. kardiostimulátor",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:22",
        prompt: "Co je dulezite k bodu: aplikace přes srdce?",
        answer: "2. aplikace přes srdce",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:23",
        prompt: "Co je dulezite k bodu: maligní nádor v místě aplikace?",
        answer: "3. maligní nádor v místě aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:11:flashcard:24",
        prompt: "Co je dulezite k bodu: akutní krvácení/tromboza?",
        answer: "4. akutní krvácení/tromboza",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:11:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: elektrostimulace je metoda elektroterapie, při které elektrickým proudem vyvoláme depolarizaci nervu nebo přímo svalového vlákna s následnou svalovou kontrakcí - při poškození periferního nervu pro udržení trofiky svalů a zabránění fibroblastické přestavbě než dojde k reinervaci poškozeného nervu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: elektrostimulace je metoda elektroterapie, při které elektrickým proudem vyvoláme depolarizaci nervu nebo přímo svalového vlákna s následnou svalovou kontrakcí - při poškození periferního nervu pro udržení trofiky svalů a zabránění fibroblastické přestavbě než dojde k reinervaci poškozeného nervu",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů - využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Elektrodiagnostika: stanovení optimálních parametrů impulzů pro dráždění denervovaných svalů - využívá se I/T křivka, I (mA) = intenzita proudu, T (ms) = délka impulzu - při opakovaném vyšetření máme představu o zlepšení/progresi onemocnění",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje - NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Elektrostimulace: paréza perif. nervů, denervované svaly - sval se aktivně nezapojuje - NF proudy s pozvolným nástupem (šikmé), dříve pravoúhlé (vznik synkinéz)",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2 - kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. Elektrogymnastika: dráždění ??? svalů, cílem je posílení, zařazení do správného pohybového stereotypu, svalová síla větší než 2 - kombinace elektricky vyvolané kontrakce a aktivního volního cvičení pacienta (nutná spolupráce pacienta)",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. zabránit/zmírnit svalovou atrofii",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. zabránit/zmírnit svalovou atrofii",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný - elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce - používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např. foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrostimualce inervovaného svalu - motorický nerv je funkční a zachovaný - elektrický impuls podráždí motorický nerv, který následně vyvolá kontrakci svalu - princip: elektrický impuls → motorický nerv → nervosvalová ploténka → svalová kontrakce - používají se nízkofrekvenční impulzní proudy, stačí krátké impulzy (dráždíme nerv) - parametry: frekvence, délka impulzu, amplituda, doba náběhu a poklesu, délka kontrakce, pauza mezi kontrakcemi, počet stimulací - možné využití při funkční elektrické stimulaci (FES) - obnovení/podpora funkčního pohybového stereotypu ve správný čas pro konkrétní funkci (např. foot drop - n. peroneus communis: podpora DF hlezna při chůzi, synchronizována s chůzí)",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Elektrogymnastika denervovaného svalu - jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu! - dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Elektrogymnastika denervovaného svalu - jedná se o mimovolní kontrakci příčně pruhovaného svalstva pomocí elektrického dráždění - motorický nerv je poškozený a nevede vzruch ke svalu (běžná stimulace motorického nervu nevede ke svalové kontrakci) - provádíme u svalů bez reflexních změn - princip: elektrický impuls → přímo svalové vlákno → kontrakce (elektrický impulz dráždí přímo svalová vlákna) - denervované svalové vlákno má jiné elektrické vlastnosti než normálně inervovaný sval, proto je potřeba delší impulz, pomalejší náběh impulzu, vyšší intenzita (denervované svalové vlákno je mnohem méně dráždivé) - cíl: udržet kontraktilitu svalových vláken, zpomalit atrofii, udržet metabolickou aktivitu svalu - elektrostimulace nenahradí regeneraci nervu! - dbáme na předcházení energetického vyčerpání svalu, což se projevuje změnou kvality kontrakce nebo postupným zvyšováním proudu (intenzita max. do 25 mA)",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "5. těhotenství (neaplikovat přes pánev, břicho)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "5. těhotenství (neaplikovat přes pánev, břicho)",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "7. akutní infekce a zánět v místě aplikace",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "7. akutní infekce a zánět v místě aplikace",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "I/T křivka - nejpřesnější ED pro léčbu periferních paréz, komplexní forma hodnocení dráždivosti - stanovení optimálních impulzů pro dráždění denervovaných svalů - komplexní forma hodnocení dráždivosti - graficky znázorňuje závislost intenzity potřebné k vyvolání prahového podráždění při postupném zkracování doby trvání impulzu - dříve se využívala reobáze a chronaxie, dnes Hoorweg-Weissova I/T křivka a z ní výpočitaný AQ kvocient - reobáze - nejmenší intenzita proudu, která při dostatečně dlouhém impulzu vyvolá minimální kontrakci (jak silný proud) - chronaxie - nejkratší doba impulzu (čas), která při intenzitě 2x reobáze vyvolá minimální kontrakci (jak dlouho musí působit) - u denervovaného svalu musíme dráždit přímo svalové vlákno a potřebujeme výrazně delší impulzy a vyšší intenzitu (charakteristicky se mění I/T křivka) - cíl: snažíme se o odpověď, co nejnižší intenzitou - čím delší délka impulzu, tím větší poškození, při zkrácení délky impulsu známka reinervace",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "I/T křivka - nejpřesnější ED pro léčbu periferních paréz, komplexní forma hodnocení dráždivosti - stanovení optimálních impulzů pro dráždění denervovaných svalů - komplexní forma hodnocení dráždivosti - graficky znázorňuje závislost intenzity potřebné k vyvolání prahového podráždění při postupném zkracování doby trvání impulzu - dříve se využívala reobáze a chronaxie, dnes Hoorweg-Weissova I/T křivka a z ní výpočitaný AQ kvocient - reobáze - nejmenší intenzita proudu, která při dostatečně dlouhém impulzu vyvolá minimální kontrakci (jak silný proud) - chronaxie - nejkratší doba impulzu (čas), která při intenzitě 2x reobáze vyvolá minimální kontrakci (jak dlouho musí působit) - u denervovaného svalu musíme dráždit přímo svalové vlákno a potřebujeme výrazně delší impulzy a vyšší intenzitu (charakteristicky se mění I/T křivka) - cíl: snažíme se o odpověď, co nejnižší intenzitou - čím delší délka impulzu, tím větší poškození, při zkrácení délky impulsu známka reinervace",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Akomodační kvocietn AQ - kvantitativně vyjadřuje změny svalové dráždivosti - zdravý sval: NS ploténky mají schopnost akomodace na pozvolný nástup šikmých impulzů, intenzita je 3-6x větší oproti pravoúhlému impulzu - denervovaný sval: ztrácí schopnost akomodace, kontrakci vyvolá šikmý impulz s intenzitou téměř stejnou jako má pravoúhlý impulz - při stimulaci denervovaných svalů šikmými proudy se zdravé svaly nezapojují, tudíž nevznikají nežádoucí svalové synkinézy - vypočítá se jako podíl minimální intenzity vyvolávající kontrakci šikmým a pravoúhlým impulzem při délce impulzu 1000 ms - hodnoty AQ: zdravý sval 2,7-6, částečně denervovaný pod 2,7, denervovaný kolem 1, nad 6 vegetativní dystonie",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Akomodační kvocietn AQ - kvantitativně vyjadřuje změny svalové dráždivosti - zdravý sval: NS ploténky mají schopnost akomodace na pozvolný nástup šikmých impulzů, intenzita je 3-6x větší oproti pravoúhlému impulzu - denervovaný sval: ztrácí schopnost akomodace, kontrakci vyvolá šikmý impulz s intenzitou téměř stejnou jako má pravoúhlý impulz - při stimulaci denervovaných svalů šikmými proudy se zdravé svaly nezapojují, tudíž nevznikají nežádoucí svalové synkinézy - vypočítá se jako podíl minimální intenzity vyvolávající kontrakci šikmým a pravoúhlým impulzem při délce impulzu 1000 ms - hodnoty AQ: zdravý sval 2,7-6, částečně denervovaný pod 2,7, denervovaný kolem 1, nad 6 vegetativní dystonie",
      },
      {
        id: "ix-fyzikalni-terapie:11:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Elektrostimulace: předcházíme energetickému vyčerpání, 1-3 min., 5-15 kontrakcí - I/T křivka časově náročné, nepříjemné pro pacienta (testování zdravých i nemocných svalů), erudice terapeuta, zaznamenávání naměření hodnot",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Elektrostimulace: předcházíme energetickému vyčerpání, 1-3 min., 5-15 kontrakcí - I/T křivka časově náročné, nepříjemné pro pacienta (testování zdravých i nemocných svalů), erudice terapeuta, zaznamenávání naměření hodnot",
      },
    ],
  },
  "ix-fyzikalni-terapie:12": {
    chapters: [
      {
        title: "Definice: terapeutické využívání vody s využitím jejích termických, mechanických a chemických vlastností k ovlivnění organizmu - vhodné pro všechny věkové kategorie pro udržení zdraví a prevenci nemoci - benefit: zvýšení kondice a výkonnosti, nespecifická odolnost - hranice celkové 42 °C, částečné 46°C",
        points: [
        ]
      },
      {
        title: "Dělení",
        points: [
          "1. zevní",
          "2. vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
          "1. prosté - použitá pouze voda, neupravená, bez přísad",
          "2. s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
          "1. klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
          "2. voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
          "1. částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
          "2. celkové - vany, sprchy, bazény, chodníky",
          "1. jednoduché - samostatná jedna procedura",
          "2. složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
          "1. střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
          "2. skotské střiky - střídání teplých a studených proudů vody pod tlakem",
          "1. hypotermní - pod 35 °C",
          "2. izotermní 35-37°C",
          "3. hypertermní 38-42°C - 42°C bod tolerance pro celkovou vodní koupel (nevhodná pro cvičení) - 46°C bod tolerance pro kůži pro částečné koupele (od kolen/loktů distálně)",
        ]
      },
      {
        title: "Fyzikální energie vodních procedur jsou",
        points: [
          "1. energie tepla (chlad, teplo, střídání podmětů)",
          "2. mechanická energie (tlak, vztlak, trakce)",
          "3. kinetická energie (pasivně, aktivně, odporově)",
          "4. ve vodě odpadává vliv gravitace",
        ]
      },
      {
        title: "Mechanizmus účinku - působení vody: teplotou, hydrostatickým tlakem, vztlakem, odporem vody (CHAT)",
        points: [
          "1. vztlak - snižuje efektivní hmotnost těla, odlehčuje klouby, páteř (Archimedův zákon) - dle mineralizace je pacient různě nadlehčovaný - způsobuje změnu propriorecepce, umožní pohyb, který je na suchu nemožný, mizí strach z pádů, ovlivní ANS (mírné krátké zrychlení TF a zvýšení TK, prohloubí se dýchání)",
          "2. hydrostatický tlak - tlak na povrch těla, podporuje žilní návrat, zlepšuje cirkulaci, působí na periferní otok, ovlivňuje propriorecepci - zužuje obvod hrudníku, komprimuje obvod břicha, stoupá nitrobřišní tlak, zvyšuje se funkce ledvin",
          "3. odpor vody - posilování svalů, čím rychlejší pohyb, tím větší odpor",
          "4. teplota - teplá (snížuje sv. tonus, podpora relaxace, snížení bolesti, zvyšuje protažizelnost), chladná (působí stimulačně, snižuje bolest, vazokonstrikce)",
        ]
      },
      {
        title: "Hydrokinezioterapie = léčebné cvičení ve vodě - kondice, posílení, dechové cvičení - skupinové - individuální - Hubbardův tank, malé bazénky, bazény, bazénový chodník - plavání - rekreační, léčebné, řízené",
        points: [
        ]
      },
      {
        title: "Indikace - chronické onemocnění vaziva, kloubů - neurologické onemocnění - parézy, poruchy rovnováhy, RS, Parkinson, porucha chůze - po operacích TEP, rekonstruuje vazů - m. Bechtěrev - spasmy - parézy - gynekologie - obezita",
        points: [
        ]
      },
      {
        title: "Kontraindikace - kardinální dekompenzace, maligní hypertenze, St. p. 6 měsíců po IM - akutní TBC, infekční choroby, akutní stádia psychózy, alergie na chlor, atd., dekubity - přenosné kožní infekce - inkontinence - dekompenzovaná epilepsie - závažné poruchy vědomí - gravidita - kachexie",
        points: [
        ]
      },
      {
        title: "Vodoléčba x hydrokinezioterapie vodoléčba: účinek samotné vody (teplota, vztlak, hydrostatický tlak, mechanické působení) hydrokinezioterapie: aktivní cvičení ve vodě, při kterém využíváme vlastnosti vody",
        points: [
          "Pomůcka:",
          "VODA 4 VHOT (vztlak, hydrostatický tlak, odpor, teplota)",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:12:flashcard:1",
        prompt: "Shrn cast: Definice",
        answer: "Definice: terapeutické využívání vody s využitím jejích termických, mechanických a chemických vlastností k ovlivnění organizmu - vhodné pro všechny věkové kategorie pro udržení zdraví a prevenci nemoci - benefit: zvýšení kondice a výkonnosti, nespecifická odolnost - hranice celkové 42 °C, částečné 46°C",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:2",
        prompt: "Shrn cast: Dělení",
        answer: "1. zevní 2. vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní 1. prosté - použitá pouze voda, neupravená, bez přísad 2. s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná 1. klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..) 2. voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:3",
        prompt: "Co je dulezite k bodu: zevní?",
        answer: "1. zevní",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:4",
        prompt: "Co je dulezite k bodu: vnitřní?",
        answer: "2. vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:5",
        prompt: "Co je dulezite k bodu: prosté?",
        answer: "1. prosté - použitá pouze voda, neupravená, bez přísad",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:6",
        prompt: "Co je dulezite k bodu: s přírodní minerální vodou?",
        answer: "2. s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:7",
        prompt: "Co je dulezite k bodu: klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)?",
        answer: "1. klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:8",
        prompt: "Co je dulezite k bodu: voda s uměle přidanými přísady (organické?",
        answer: "2. voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:9",
        prompt: "Co je dulezite k bodu: částečné?",
        answer: "1. částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:10",
        prompt: "Co je dulezite k bodu: celkové?",
        answer: "2. celkové - vany, sprchy, bazény, chodníky",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:11",
        prompt: "Co je dulezite k bodu: jednoduché?",
        answer: "1. jednoduché - samostatná jedna procedura",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:12",
        prompt: "Co je dulezite k bodu: složité?",
        answer: "2. složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:13",
        prompt: "Co je dulezite k bodu: střídavé?",
        answer: "1. střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:14",
        prompt: "Co je dulezite k bodu: skotské střiky?",
        answer: "2. skotské střiky - střídání teplých a studených proudů vody pod tlakem",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:15",
        prompt: "Co je dulezite k bodu: hypotermní?",
        answer: "1. hypotermní - pod 35 °C",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:16",
        prompt: "Co je dulezite k bodu: izotermní 35-37°C?",
        answer: "2. izotermní 35-37°C",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:17",
        prompt: "Co je dulezite k bodu: hypertermní 38-42°C?",
        answer: "3. hypertermní 38-42°C - 42°C bod tolerance pro celkovou vodní koupel (nevhodná pro cvičení) - 46°C bod tolerance pro kůži pro částečné koupele (od kolen/loktů distálně)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:18",
        prompt: "Shrn cast: Fyzikální energie vodních procedur jsou",
        answer: "1. energie tepla (chlad, teplo, střídání podmětů) 2. mechanická energie (tlak, vztlak, trakce) 3. kinetická energie (pasivně, aktivně, odporově) 4. ve vodě odpadává vliv gravitace",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:19",
        prompt: "Co je dulezite k bodu: energie tepla (chlad, teplo, střídání podmětů)?",
        answer: "1. energie tepla (chlad, teplo, střídání podmětů)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:20",
        prompt: "Co je dulezite k bodu: mechanická energie (tlak, vztlak, trakce)?",
        answer: "2. mechanická energie (tlak, vztlak, trakce)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:21",
        prompt: "Co je dulezite k bodu: kinetická energie (pasivně, aktivně, odporově)?",
        answer: "3. kinetická energie (pasivně, aktivně, odporově)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:22",
        prompt: "Co je dulezite k bodu: ve vodě odpadává vliv gravitace?",
        answer: "4. ve vodě odpadává vliv gravitace",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:23",
        prompt: "Shrn cast: Mechanizmus účinku",
        answer: "1. vztlak - snižuje efektivní hmotnost těla, odlehčuje klouby, páteř (Archimedův zákon) - dle mineralizace je pacient různě nadlehčovaný - způsobuje změnu propriorecepce, umožní pohyb, který je na suchu nemožný, mizí strach z pádů, ovlivní ANS (mírné krátké zrychlení TF a zvýšení TK, prohloubí se dýchání) 2. hydrostatický tlak - tlak na povrch těla, podporuje žilní návrat, zlepšuje cirkulaci, působí na periferní otok, ovlivňuje propriorecepci - zužuje obvod hrudníku, komprimuje obvod břicha, stoupá nitrobřišní tlak, zvyšuje se funkce ledvin 3. odpor vody - posilování svalů, čím rychlejší pohyb, tím větší odpor 4. teplota - teplá (snížuje sv. tonus, podpora relaxace, snížení bolesti, zvyšuje protažizelnost), chladná (působí stimulačně, snižuje bolest, vazokonstrikce)",
      },
      {
        id: "ix-fyzikalni-terapie:12:flashcard:24",
        prompt: "Co je dulezite k bodu: vztlak?",
        answer: "1. vztlak - snižuje efektivní hmotnost těla, odlehčuje klouby, páteř (Archimedův zákon) - dle mineralizace je pacient různě nadlehčovaný - způsobuje změnu propriorecepce, umožní pohyb, který je na suchu nemožný, mizí strach z pádů, ovlivní ANS (mírné krátké zrychlení TF a zvýšení TK, prohloubí se dýchání)",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:12:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: terapeutické využívání vody s využitím jejích termických, mechanických a chemických vlastností k ovlivnění organizmu - vhodné pro všechny věkové kategorie pro udržení zdraví a prevenci nemoci - benefit: zvýšení kondice a výkonnosti, nespecifická odolnost - hranice celkové 42 °C, částečné 46°C",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: terapeutické využívání vody s využitím jejích termických, mechanických a chemických vlastností k ovlivnění organizmu - vhodné pro všechny věkové kategorie pro udržení zdraví a prevenci nemoci - benefit: zvýšení kondice a výkonnosti, nespecifická odolnost - hranice celkové 42 °C, částečné 46°C",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. vnitřní - kloktání/výplach nosu, inhalace, pitné kůry, irrigace dásní",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. prosté - použitá pouze voda, neupravená, bez přísad",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. prosté - použitá pouze voda, neupravená, bez přísad",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. s přírodní minerální vodou - jako přírodní léčivý zdroj, bez technických přídavných pomůcek a neupravovaná",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. klidové nebo s využitím techniky (vířivé, perličkové, masážní, protiproudy v bazéně..)",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. voda s uměle přidanými přísady (organické - oleje, byliny, rašelina - slatina, květiny x anorganické - soli)",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. částečné - vaničkové = končetinové, vanové (sedací, poloviční, tříčtvrteční), částečné sprchy a oplachy, otěry, střiky",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. celkové - vany, sprchy, bazény, chodníky",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. celkové - vany, sprchy, bazény, chodníky",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. jednoduché - samostatná jedna procedura",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. jednoduché - samostatná jedna procedura",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. složité - kombinace vodních procedur (saunování, vzdušné lázně, slunění a koupání …)",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. střídavé - intenzivní stimulace na autonomní nervový systém a imunitu",
      },
      {
        id: "ix-fyzikalni-terapie:12:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. skotské střiky - střídání teplých a studených proudů vody pod tlakem",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. skotské střiky - střídání teplých a studených proudů vody pod tlakem",
      },
    ],
  },
  "ix-fyzikalni-terapie:13": {
    chapters: [
      {
        title: "Definice: je fyzikální terapie, která vzniká průchodem el. proudu o nízké frekvenci (10-70 Hz) vodičem nebo cívkou - protéka-li cívkou pulzní proud, vzniká pulzní magnetické pole - distanční terapie, která využívá k terapii biologické účinky elektromagnetického pole - v rehabilitaci se využívá nízkofrekvenční pulzní magnetické pole - magnetická indukce: je fyzikální veličiny, popisuje sílu a směr magnetického pole, jednotka Tesla, magnetické pole vzniká kolem každého vodiče, kterým teče proud - frekvence: jak často se impulzy opakují (Hz)",
        points: [
        ]
      },
      {
        title: "Dělení - pulzní magnetické pole se ovlivňuje indukcí a frekvencí a jejich různou kombinací - frekvence - jak rychle se pouští proud (kolikrát za sekundu) - indukce - jak silné je magnetické pole",
        points: [
          "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé)",
          "1. Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek - nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
          "2. Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
          "3. Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
        ]
      },
      {
        title: "Účinky",
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
        title: "Vlastnosti magnetoterapie - magnetická indukce - ovlivňuje membránové receptory, nemá tepelný účinek - spíše trofotropní - myorelaxace, spamolyza, analgezie - frekvence: do 10 Hz protizánětlivá, 25-50 Hz trofotropní, 70 Hz revaskularizace - magnetické pole prochází přes oděv i sádrovou fixaci - magnetická pole: statická (stálá)/dynamická - střídavá/pulzní)",
        points: [
        ]
      },
      {
        title: "Dělení magnetoterapie",
        points: [
          "1. léčba statickými magnetickými poli (na akupunkturní body)",
          "2. léčba nízkofrekvenčními magnetickými poli",
        ]
      },
      {
        title: "Aplikátory (cívka vytvářející pulzní magnetické pole) - solenoid (cívka), deskové (plošné), prstencové - 10 - 40 min., alespoň 10x, jednotka mT",
        points: [
        ]
      },
      {
        title: "Indikace - porucha trofiky - bolestivé stavy známé etiologie - fraktury - myotonizace/relaxace - artrózy - hojení tkání - aseptické záněty",
        points: [
        ]
      },
      {
        title: "Kontraindikace (i personálu a každé osoby v prostoru magnetoterapie) - gravidita - celé období - pace-maker - kardiostimulátor, ICD - tumory - krvácivé stavy - nebezpečí krvácení do vnitřních orgánů (zvýší krvácení při menstruaci) - hyperfunkce/dysfunkce endokrinních žláz - myastenia gravis - akutní onemocnění - TBC, těžké virové, bakteriální, mykotické onemocnění - těžký stupeň ICHS, ICHDK - záchvatovité onemocnění (psychiatrické/neurologické)",
        points: [
        ]
      },
      {
        title: "Vedlejší účinky: - zklidnění až usínání - bolest hlavy, závratě během procedury, kolapsové stavy, nauzea/průjem po ukončení - vyvolání epileptického záchvatu",
        points: [
        ]
      },
      {
        title: "Zásady provozu - manipulace pouze s vypnutým přístrojem - pozor na mobilní telefon, kovové předměty citlivé na magnetické pole - pohyb 1 m od přístroje, když je vchodu a omezit dobu u přístroje (personál)",
        points: [
          "Předpis:",
          "Jméno, RČ, dg. číslem i slovem, místo aplikace, druh aplikátoru, intenzita pole mT, frekvence, pulzů, trvání, frekvence procedury, kolikrát a kontrola.",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:13:flashcard:1",
        prompt: "Shrn cast: Definice",
        answer: "Definice: je fyzikální terapie, která vzniká průchodem el. proudu o nízké frekvenci (10-70 Hz) vodičem nebo cívkou - protéka-li cívkou pulzní proud, vzniká pulzní magnetické pole - distanční terapie, která využívá k terapii biologické účinky elektromagnetického pole - v rehabilitaci se využívá nízkofrekvenční pulzní magnetické pole - magnetická indukce: je fyzikální veličiny, popisuje sílu a směr magnetického pole, jednotka Tesla, magnetické pole vzniká kolem každého vodiče, kterým teče proud - frekvence: jak často se impulzy opakují (Hz)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:2",
        prompt: "Shrn cast: Dělení",
        answer: "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé) 1. Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek - nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub 2. Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz 3. Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:3",
        prompt: "Co je dulezite k bodu: Magnetická pole?",
        answer: "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:4",
        prompt: "Co je dulezite k bodu: Nízkofrekvenční pulzní magnetické pole 100-150 Hz?",
        answer: "1. Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek - nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:5",
        prompt: "Co je dulezite k bodu: Vysokofrekvenční elektromagnetické pole?",
        answer: "2. Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:6",
        prompt: "Co je dulezite k bodu: Vysokointenzivní pulzní magnetické pole?",
        answer: "3. Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:7",
        prompt: "Shrn cast: Účinky",
        answer: "1. analgetické 2. myorelaxační a myotonizační 3. vazodilatační a tím podpora výživy všech tkání 4. trofický - podpora metabolismu, reparace tkání, podpora hojení 5. imunostimulační a protizánětlivý 6. vagotropní - pokles TF, TK, periferní vazodilatace",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:8",
        prompt: "Co je dulezite k bodu: analgetické?",
        answer: "1. analgetické",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:9",
        prompt: "Co je dulezite k bodu: myorelaxační a myotonizační?",
        answer: "2. myorelaxační a myotonizační",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:10",
        prompt: "Co je dulezite k bodu: vazodilatační a tím podpora výživy všech tkání?",
        answer: "3. vazodilatační a tím podpora výživy všech tkání",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:11",
        prompt: "Co je dulezite k bodu: trofický?",
        answer: "4. trofický - podpora metabolismu, reparace tkání, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:12",
        prompt: "Co je dulezite k bodu: imunostimulační a protizánětlivý?",
        answer: "5. imunostimulační a protizánětlivý",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:13",
        prompt: "Co je dulezite k bodu: vagotropní?",
        answer: "6. vagotropní - pokles TF, TK, periferní vazodilatace",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:14",
        prompt: "Co je dulezite k bodu: sedativní?",
        answer: "7. sedativní",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:15",
        prompt: "Co je dulezite k bodu: snižuje srážlivost (neaplikovat u warfarinizovaných)?",
        answer: "8. snižuje srážlivost (neaplikovat u warfarinizovaných)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:16",
        prompt: "Co je dulezite k bodu: osteogenní?",
        answer: "9. osteogenní - podpora osteogeneze, proto se používají při opožděném hojení/paklouby, ovlivňuje výměnu vápníku mezi buňkami a okolím",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:17",
        prompt: "Shrn cast: Vlastnosti magnetoterapie",
        answer: "Vlastnosti magnetoterapie - magnetická indukce - ovlivňuje membránové receptory, nemá tepelný účinek - spíše trofotropní - myorelaxace, spamolyza, analgezie - frekvence: do 10 Hz protizánětlivá, 25-50 Hz trofotropní, 70 Hz revaskularizace - magnetické pole prochází přes oděv i sádrovou fixaci - magnetická pole: statická (stálá)/dynamická - střídavá/pulzní)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:18",
        prompt: "Shrn cast: Dělení magnetoterapie",
        answer: "1. léčba statickými magnetickými poli (na akupunkturní body) 2. léčba nízkofrekvenčními magnetickými poli",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:19",
        prompt: "Co je dulezite k bodu: léčba statickými magnetickými poli (na akupunkturní body)?",
        answer: "1. léčba statickými magnetickými poli (na akupunkturní body)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:20",
        prompt: "Co je dulezite k bodu: léčba nízkofrekvenčními magnetickými poli?",
        answer: "2. léčba nízkofrekvenčními magnetickými poli",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:21",
        prompt: "Shrn cast: Aplikátory (cívka vytvářející pulzní magnetické pole)",
        answer: "Aplikátory (cívka vytvářející pulzní magnetické pole) - solenoid (cívka), deskové (plošné), prstencové - 10 - 40 min., alespoň 10x, jednotka mT",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:22",
        prompt: "Shrn cast: Indikace",
        answer: "Indikace - porucha trofiky - bolestivé stavy známé etiologie - fraktury - myotonizace/relaxace - artrózy - hojení tkání - aseptické záněty",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:23",
        prompt: "Shrn cast: Kontraindikace (i personálu a každé osoby v prostoru magnetoterapie)",
        answer: "Kontraindikace (i personálu a každé osoby v prostoru magnetoterapie) - gravidita - celé období - pace-maker - kardiostimulátor, ICD - tumory - krvácivé stavy - nebezpečí krvácení do vnitřních orgánů (zvýší krvácení při menstruaci) - hyperfunkce/dysfunkce endokrinních žláz - myastenia gravis - akutní onemocnění - TBC, těžké virové, bakteriální, mykotické onemocnění - těžký stupeň ICHS, ICHDK - záchvatovité onemocnění (psychiatrické/neurologické)",
      },
      {
        id: "ix-fyzikalni-terapie:13:flashcard:24",
        prompt: "Shrn cast: Vedlejší účinky",
        answer: "Vedlejší účinky: - zklidnění až usínání - bolest hlavy, závratě během procedury, kolapsové stavy, nauzea/průjem po ukončení - vyvolání epileptického záchvatu",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:13:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: je fyzikální terapie, která vzniká průchodem el. proudu o nízké frekvenci (10-70 Hz) vodičem nebo cívkou - protéka-li cívkou pulzní proud, vzniká pulzní magnetické pole - distanční terapie, která využívá k terapii biologické účinky elektromagnetického pole - v rehabilitaci se využívá nízkofrekvenční pulzní magnetické pole - magnetická indukce: je fyzikální veličiny, popisuje sílu a směr magnetického pole, jednotka Tesla, magnetické pole vzniká kolem každého vodiče, kterým teče proud - frekvence: jak často se impulzy opakují (Hz)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: je fyzikální terapie, která vzniká průchodem el. proudu o nízké frekvenci (10-70 Hz) vodičem nebo cívkou - protéka-li cívkou pulzní proud, vzniká pulzní magnetické pole - distanční terapie, která využívá k terapii biologické účinky elektromagnetického pole - v rehabilitaci se využívá nízkofrekvenční pulzní magnetické pole - magnetická indukce: je fyzikální veličiny, popisuje sílu a směr magnetického pole, jednotka Tesla, magnetické pole vzniká kolem každého vodiče, kterým teče proud - frekvence: jak často se impulzy opakují (Hz)",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Dělení - pulzní magnetické pole se ovlivňuje indukcí a frekvencí a jejich různou kombinací - frekvence - jak rychle se pouští proud (kolikrát za sekundu) - indukce - jak silné je magnetické pole",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Dělení - pulzní magnetické pole se ovlivňuje indukcí a frekvencí a jejich různou kombinací - frekvence - jak rychle se pouští proud (kolikrát za sekundu) - indukce - jak silné je magnetické pole",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Magnetická pole - statická (neměnné pole, f = 0 Hz) - dynamická = mění se frekvence a intenzita (pulzní/střídavé)",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek - nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Nízkofrekvenční pulzní magnetické pole 100-150 Hz - ovlivňuje výměnu iontů, není využívaný tepelný účinek - nevyvolává svalovou kontrakci, používá se hlavně kvůli biologickým účinkům - např. pakloub",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Vysokofrekvenční elektromagnetické pole - diatermie, tepelný účinek 9-250 MHz",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. Vysokointenzivní pulzní magnetické pole - vysoká magnetická indukce aktivuje nervy a svaly, analgetický efekt - např. aktivace oslabených svalů (stimuluje širší oblast a je méně selektivní než klasická elektrostimulace)",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. vazodilatační a tím podpora výživy všech tkání",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. vazodilatační a tím podpora výživy všech tkání",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "4. trofický - podpora metabolismu, reparace tkání, podpora hojení",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "4. trofický - podpora metabolismu, reparace tkání, podpora hojení",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "6. vagotropní - pokles TF, TK, periferní vazodilatace",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "6. vagotropní - pokles TF, TK, periferní vazodilatace",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "8. snižuje srážlivost (neaplikovat u warfarinizovaných)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "8. snižuje srážlivost (neaplikovat u warfarinizovaných)",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "9. osteogenní - podpora osteogeneze, proto se používají při opožděném hojení/paklouby, ovlivňuje výměnu vápníku mezi buňkami a okolím",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "9. osteogenní - podpora osteogeneze, proto se používají při opožděném hojení/paklouby, ovlivňuje výměnu vápníku mezi buňkami a okolím",
      },
      {
        id: "ix-fyzikalni-terapie:13:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Vlastnosti magnetoterapie - magnetická indukce - ovlivňuje membránové receptory, nemá tepelný účinek - spíše trofotropní - myorelaxace, spamolyza, analgezie - frekvence: do 10 Hz protizánětlivá, 25-50 Hz trofotropní, 70 Hz revaskularizace - magnetické pole prochází přes oděv i sádrovou fixaci - magnetická pole: statická (stálá)/dynamická - střídavá/pulzní)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Vlastnosti magnetoterapie - magnetická indukce - ovlivňuje membránové receptory, nemá tepelný účinek - spíše trofotropní - myorelaxace, spamolyza, analgezie - frekvence: do 10 Hz protizánětlivá, 25-50 Hz trofotropní, 70 Hz revaskularizace - magnetické pole prochází přes oděv i sádrovou fixaci - magnetická pole: statická (stálá)/dynamická - střídavá/pulzní)",
      },
    ],
  },
  "ix-fyzikalni-terapie:14": {
    chapters: [
      {
        title: "Definice: je léčebné využití mechanické energie k ovlivnění pohybového aparátu, měkkých tkáních a některých poruch cirkulace. - využívá se se pohyb, tlak, tah, komprese, podtlak, mechanická vibrace",
        points: [
        ]
      },
      {
        title: "Cíl - obnovení nebo zvýšení ROM - snížení bolesti - ovlivnění svalového tonu - zlepšení cirkulace - redukce otoku",
        points: [
        ]
      },
      {
        title: "Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb) - přístroj provádí opakovaný pasivní pohyb v předem nastaveném rozsahu, pacient pohyb aktivně nevykonává - doplňková terapie k aktivní rehabilitaci - nastavení: ROM (postupně se zvětšuje), rychlost, počet cyklů, délka terapie - účinky: prevence kontraktury, udržení/zvětšení ROM, snížení bolesti, usnadnění časné mobilizace, redukce pooperační ztuhlosti - indikace: TEP koleno, kyčel, rameno, artroskopie, imobilizace vedoucí k omezení ROM - KI: nestabilní osteosyntéza, čerstvá fraktura, akutní infekce v kloubu, nestabilita v kloubu",
        points: [
        ]
      },
      {
        title: "Vakuum-kompresivní terapie - přístroj založený na střídání přetlaku a podtlaku v uzavřeném prostoru - KI: akutní trombozy, tromboflebitidy, rozsáhlé varixy, rozsáhlé gangrény (nebezpečí toxemie), aneurysma, akutně vzniklé rány, lokální purulentní stavy, edémy kardinálního původu - indikace: porucha prokrvení končetiny (organické i funkční), algodystrofický syndrom, chronické otoky, lymfedémy, trofické poruchy kůže, posttraumatické stavy - doba aplikace 25 min., pozitivní step 5 min. do 45-60 min., Sudek 12 minut - prodlužuje se délka aplikace, tlaky se nezvedají - limitem terapie je subjektivní vnímání pacienta a změna barvy končetiny, komprese končetiny",
        points: [
          "1. Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese - končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně - účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
          "2. Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
        ]
      },
      {
        title: "Trakce - pasivní procedura, neměla by bolet - mechanická síla působí tah v ose končetiny nebo páteře či kořenového kloubu - dle zdroje síly: přístrojová/manuální, dle průběhu: kontinuální/přerušované - mechanismus účinku: při dostatečné relaxaci okolního svalstva dochází k oddálení obratlů/kloubních ploch, zvětšení rozměru foramen intervertebrale, odlehčení podrážděných kloubních ploch, snížení tlaku na ncl. pulposus v disku, protažení kloubních pouzder a okolních ligament - základním předpokladem je negativní výsledek ručního trakčního testu (trakce přinese úlevu) - KI: pozitivní trakční test (zhoršení potíží při/po trakčním testu), hypertenze II a III dle WHO, neurovegetativní dystonie, sklon k ortostatickým kolapsům, nepříznivý účinek při předchozí trakci - provedení: po trakci pacient musí zůstat ležet stejně dlouho jako trvala trakce, vhodné před trakcí aplikovat relaxační FT (UZ, solux, parafin), trakční poloha: Fowler pozice kyčle a kolena ve flexi 90 st./polohovací stolek (škubnutí, špatně se dozoruje síla), zátěž 5-60 kg, trvání 10-20 minut, frekvence 2-3 týdně chronický, 1x denně akutně",
        points: [
          "1. trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
          "2. periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
        ]
      },
      {
        title: "Vibrační terapie - mechanické vibrace ovlivňují svalový tonus, propriorecepci, cirkulaci, vnímání bolesti",
        points: [
        ]
      },
      {
        title: "Mechanické masážní přístroje - relaxační, cirkulační, analgetický účinek - využívají tlaku, vibrace, mechanické hnětení",
        points: [
        ]
      },
      {
        title: "Robotická/mechanicky asistovaná terapie - podporuje motorické učení, umožňuje vysoký počet opakování pohybu - např.: mechanicky asistovaný nácvik chůze, robotická rehabilitace HK",
        points: [
          "Vždy respektovat typ výkonu a pokyny operatéra.",
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:14:flashcard:1",
        prompt: "Shrn cast: Definice",
        answer: "Definice: je léčebné využití mechanické energie k ovlivnění pohybového aparátu, měkkých tkáních a některých poruch cirkulace. - využívá se se pohyb, tlak, tah, komprese, podtlak, mechanická vibrace",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:2",
        prompt: "Shrn cast: Cíl",
        answer: "Cíl - obnovení nebo zvýšení ROM - snížení bolesti - ovlivnění svalového tonu - zlepšení cirkulace - redukce otoku",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:3",
        prompt: "Shrn cast: Motodlaha",
        answer: "Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb) - přístroj provádí opakovaný pasivní pohyb v předem nastaveném rozsahu, pacient pohyb aktivně nevykonává - doplňková terapie k aktivní rehabilitaci - nastavení: ROM (postupně se zvětšuje), rychlost, počet cyklů, délka terapie - účinky: prevence kontraktury, udržení/zvětšení ROM, snížení bolesti, usnadnění časné mobilizace, redukce pooperační ztuhlosti - indikace: TEP koleno, kyčel, rameno, artroskopie, imobilizace vedoucí k omezení ROM - KI: nestabilní osteosyntéza, čerstvá fraktura, akutní infekce v kloubu, nestabilita v kloubu",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:4",
        prompt: "Shrn cast: Vakuum-kompresivní terapie",
        answer: "1. Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese - končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně - účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace 2. Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:5",
        prompt: "Co je dulezite k bodu: Přetlak?",
        answer: "1. Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese - končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně - účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:6",
        prompt: "Co je dulezite k bodu: Podtlak?",
        answer: "2. Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:7",
        prompt: "Shrn cast: Trakce",
        answer: "1. trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu 2. periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:8",
        prompt: "Co je dulezite k bodu: trakce páteře?",
        answer: "1. trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:9",
        prompt: "Co je dulezite k bodu: periferních kloubů?",
        answer: "2. periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:10",
        prompt: "Shrn cast: Vibrační terapie",
        answer: "Vibrační terapie - mechanické vibrace ovlivňují svalový tonus, propriorecepci, cirkulaci, vnímání bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:11",
        prompt: "Shrn cast: Mechanické masážní přístroje",
        answer: "Mechanické masážní přístroje - relaxační, cirkulační, analgetický účinek - využívají tlaku, vibrace, mechanické hnětení",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:12",
        prompt: "Shrn cast: Robotická/mechanicky asistovaná terapie",
        answer: "Vždy respektovat typ výkonu a pokyny operatéra.",
      },
      {
        id: "ix-fyzikalni-terapie:14:flashcard:13",
        prompt: "Co je dulezite k bodu: Vždy respektovat typ výkonu a pokyny operatéra.?",
        answer: "Vždy respektovat typ výkonu a pokyny operatéra.",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:14:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: je léčebné využití mechanické energie k ovlivnění pohybového aparátu, měkkých tkáních a některých poruch cirkulace. - využívá se se pohyb, tlak, tah, komprese, podtlak, mechanická vibrace",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: je léčebné využití mechanické energie k ovlivnění pohybového aparátu, měkkých tkáních a některých poruch cirkulace. - využívá se se pohyb, tlak, tah, komprese, podtlak, mechanická vibrace",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Cíl - obnovení nebo zvýšení ROM - snížení bolesti - ovlivnění svalového tonu - zlepšení cirkulace - redukce otoku",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Cíl - obnovení nebo zvýšení ROM - snížení bolesti - ovlivnění svalového tonu - zlepšení cirkulace - redukce otoku",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb) - přístroj provádí opakovaný pasivní pohyb v předem nastaveném rozsahu, pacient pohyb aktivně nevykonává - doplňková terapie k aktivní rehabilitaci - nastavení: ROM (postupně se zvětšuje), rychlost, počet cyklů, délka terapie - účinky: prevence kontraktury, udržení/zvětšení ROM, snížení bolesti, usnadnění časné mobilizace, redukce pooperační ztuhlosti - indikace: TEP koleno, kyčel, rameno, artroskopie, imobilizace vedoucí k omezení ROM - KI: nestabilní osteosyntéza, čerstvá fraktura, akutní infekce v kloubu, nestabilita v kloubu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Motodlaha = CPM = continous pasece motion (kontinuální pasivní pohyb) - přístroj provádí opakovaný pasivní pohyb v předem nastaveném rozsahu, pacient pohyb aktivně nevykonává - doplňková terapie k aktivní rehabilitaci - nastavení: ROM (postupně se zvětšuje), rychlost, počet cyklů, délka terapie - účinky: prevence kontraktury, udržení/zvětšení ROM, snížení bolesti, usnadnění časné mobilizace, redukce pooperační ztuhlosti - indikace: TEP koleno, kyčel, rameno, artroskopie, imobilizace vedoucí k omezení ROM - KI: nestabilní osteosyntéza, čerstvá fraktura, akutní infekce v kloubu, nestabilita v kloubu",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Vakuum-kompresivní terapie - přístroj založený na střídání přetlaku a podtlaku v uzavřeném prostoru - KI: akutní trombozy, tromboflebitidy, rozsáhlé varixy, rozsáhlé gangrény (nebezpečí toxemie), aneurysma, akutně vzniklé rány, lokální purulentní stavy, edémy kardinálního původu - indikace: porucha prokrvení končetiny (organické i funkční), algodystrofický syndrom, chronické otoky, lymfedémy, trofické poruchy kůže, posttraumatické stavy - doba aplikace 25 min., pozitivní step 5 min. do 45-60 min., Sudek 12 minut - prodlužuje se délka aplikace, tlaky se nezvedají - limitem terapie je subjektivní vnímání pacienta a změna barvy končetiny, komprese končetiny",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Vakuum-kompresivní terapie - přístroj založený na střídání přetlaku a podtlaku v uzavřeném prostoru - KI: akutní trombozy, tromboflebitidy, rozsáhlé varixy, rozsáhlé gangrény (nebezpečí toxemie), aneurysma, akutně vzniklé rány, lokální purulentní stavy, edémy kardinálního původu - indikace: porucha prokrvení končetiny (organické i funkční), algodystrofický syndrom, chronické otoky, lymfedémy, trofické poruchy kůže, posttraumatické stavy - doba aplikace 25 min., pozitivní step 5 min. do 45-60 min., Sudek 12 minut - prodlužuje se délka aplikace, tlaky se nezvedají - limitem terapie je subjektivní vnímání pacienta a změna barvy končetiny, komprese končetiny",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese - končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně - účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Přetlak - fáze eliminace: končetina bledne - působení na končetinu zevním tlakem - nejčastěji se používá IPC intermitentní pneumatická komprese - končetina vložena do návleku s několika komory, které se postupně nafukují a dochází k rytmické kompresi končetiny - tlak je aplikovaný z distálního směru proximálně - účinky: podpora venózního návratu, lymfatického toku, redukce otoku, zlepšení cirkulace",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Podtlak - fáze pasivní hyperemie: končetina červená - snižujeme tlak v aplikátoru/komoře kolem končetiny - účinky: zvýšení lokálního prokrvení, podpora mikrocirkulace, ovlivnění venózního a lymfatického systému, podpora trafiky tkání",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Trakce - pasivní procedura, neměla by bolet - mechanická síla působí tah v ose končetiny nebo páteře či kořenového kloubu - dle zdroje síly: přístrojová/manuální, dle průběhu: kontinuální/přerušované - mechanismus účinku: při dostatečné relaxaci okolního svalstva dochází k oddálení obratlů/kloubních ploch, zvětšení rozměru foramen intervertebrale, odlehčení podrážděných kloubních ploch, snížení tlaku na ncl. pulposus v disku, protažení kloubních pouzder a okolních ligament - základním předpokladem je negativní výsledek ručního trakčního testu (trakce přinese úlevu) - KI: pozitivní trakční test (zhoršení potíží při/po trakčním testu), hypertenze II a III dle WHO, neurovegetativní dystonie, sklon k ortostatickým kolapsům, nepříznivý účinek při předchozí trakci - provedení: po trakci pacient musí zůstat ležet stejně dlouho jako trvala trakce, vhodné před trakcí aplikovat relaxační FT (UZ, solux, parafin), trakční poloha: Fowler pozice kyčle a kolena ve flexi 90 st./polohovací stolek (škubnutí, špatně se dozoruje síla), zátěž 5-60 kg, trvání 10-20 minut, frekvence 2-3 týdně chronický, 1x denně akutně",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Trakce - pasivní procedura, neměla by bolet - mechanická síla působí tah v ose končetiny nebo páteře či kořenového kloubu - dle zdroje síly: přístrojová/manuální, dle průběhu: kontinuální/přerušované - mechanismus účinku: při dostatečné relaxaci okolního svalstva dochází k oddálení obratlů/kloubních ploch, zvětšení rozměru foramen intervertebrale, odlehčení podrážděných kloubních ploch, snížení tlaku na ncl. pulposus v disku, protažení kloubních pouzder a okolních ligament - základním předpokladem je negativní výsledek ručního trakčního testu (trakce přinese úlevu) - KI: pozitivní trakční test (zhoršení potíží při/po trakčním testu), hypertenze II a III dle WHO, neurovegetativní dystonie, sklon k ortostatickým kolapsům, nepříznivý účinek při předchozí trakci - provedení: po trakci pacient musí zůstat ležet stejně dlouho jako trvala trakce, vhodné před trakcí aplikovat relaxační FT (UZ, solux, parafin), trakční poloha: Fowler pozice kyčle a kolena ve flexi 90 st./polohovací stolek (škubnutí, špatně se dozoruje síla), zátěž 5-60 kg, trvání 10-20 minut, frekvence 2-3 týdně chronický, 1x denně akutně",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. trakce páteře - indikace: radikulární syndrom, výhřez disku, bolestivá blokáda obratlů bez možnosti mobilizace či manipulace - KI: akutní úraz páteře, osteoporóza, infekc/nádor páteře, nestabilní páteř, spondylolistéza (relativní), akutní radikulární syndrom, pohyb v segmentu",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. periferních kloubů - součást manuální terapie a mobilizace - indikace: arthritis, arthrotisis",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Vibrační terapie - mechanické vibrace ovlivňují svalový tonus, propriorecepci, cirkulaci, vnímání bolesti",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Vibrační terapie - mechanické vibrace ovlivňují svalový tonus, propriorecepci, cirkulaci, vnímání bolesti",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Mechanické masážní přístroje - relaxační, cirkulační, analgetický účinek - využívají tlaku, vibrace, mechanické hnětení",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Mechanické masážní přístroje - relaxační, cirkulační, analgetický účinek - využívají tlaku, vibrace, mechanické hnětení",
      },
      {
        id: "ix-fyzikalni-terapie:14:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Robotická/mechanicky asistovaná terapie - podporuje motorické učení, umožňuje vysoký počet opakování pohybu - např.: mechanicky asistovaný nácvik chůze, robotická rehabilitace HK",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Robotická/mechanicky asistovaná terapie - podporuje motorické učení, umožňuje vysoký počet opakování pohybu - např.: mechanicky asistovaný nácvik chůze, robotická rehabilitace HK",
      },
    ],
  },
  "ix-fyzikalni-terapie:15": {
    chapters: [
      {
        title: "Definice: soubor mechanizmů, kterými organizmus udržuje stálou tělesnou teplotu navzdory změnám okolního prostředí - centrální regulační orgán - hypotalamus - termogeneze - tvorba tepla - termolýza - výdej tepla",
        points: [
          "Tělesná teplota: výslednice mezi tvorbou a ztrátou",
          "Teplo: kinetická energie kmitajících molekul",
        ]
      },
      {
        title: "Řízení termoregulace - regulace autonomním nervovým systémem",
        points: [
          "1. Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
          "2. Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
        ]
      },
      {
        title: "Termogeneze - teplo vniká metabolickou aktivitou - termogeneze obligátní (bazální metabolismus)/fakultativní (sv. třes, zvýšený metabolismus) - zdroje: svalová práce, svalový třes, metabolismus bazálních orgánů, tukové tkáně - při chladu: stresová termogeneze (svalová kontrakce vede k tvorbě tepla)/netřesová termogeneze(novorozenci, hnědá tuková tkáň)",
        points: [
        ]
      },
      {
        title: "Termolýza - ztáta tepla 4 mechanizmy",
        points: [
          "1. kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
          "2. konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
          "3. radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
          "4. evaporace - odpařování",
        ]
      },
      {
        title: "Reakce organizmu na chlad - vazokonstrikce, snížení průtoku krve kůží, omezení tepelných ztrát - třes, zvýšení svalový tonus, metabolická aktivita, behaviorální reakce - vyhledání teplo",
        points: [
        ]
      },
      {
        title: "Reakce organizmu na teplo - vazodilatace, zvýšení průtoku krve kůží, zvýšení výdaje tepla, pocení, evaporace",
        points: [
        ]
      },
      {
        title: "Hyperémie - zvýšení prokrvení tkáně",
        points: [
          "1. aktivní hyperémie - vazodilatace arteriol a zvýšení průtoku krve vede ke zvýšení přísunu O2, živin, odvodu metabolitů, podpoře regenerace, snížení tonu - teplo využíváme před mobilizací, protahováním, cvičením, manuální terapií",
          "2. reaktivní hyperémie - vzniká po krátkodobém přerušení nebo výrazným omezení průtoku krve",
          "3. pasivní hyperémie - městnání - venózní kongesce, není žádoucí",
        ]
      },
      {
        title: "Terapeutický význam hyperémie - zvýšení metabolismu - více krve (trofický) - odvod metabolitů - zvýšený průtok (resorbční) - reparace - lepší cirkulace - analgezie (analgetický) - snížení svalového tonu (spasmolytický)",
        points: [
        ]
      },
      {
        title: "Typy hyperémie",
        points: [
          "1. tepelná - parafín, peloid, teplé koupele, infračervené záření",
          "2. mechanickými metodami - masáž",
          "3. pohybem - aktivní cvičení, svalová práce",
        ]
      },
      {
        title: "Vhodná hyperémie: chronické bolestivé stavy, svalová ztuhlost, chronické degenerativní změny, podpora hojení, příprava tkání před cvičením",
        points: [
        ]
      },
      {
        title: "Nevhodná hyperémie: otok, překrvení, bolest, zánětliví reakce",
        points: [
        ]
      },
    ],
    flashcards: [
      {
        id: "ix-fyzikalni-terapie:15:flashcard:1",
        prompt: "Shrn cast: Definice",
        answer: "Tělesná teplota: výslednice mezi tvorbou a ztrátou Teplo: kinetická energie kmitajících molekul",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:2",
        prompt: "Co je dulezite k bodu: Tělesná teplota?",
        answer: "Tělesná teplota: výslednice mezi tvorbou a ztrátou",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:3",
        prompt: "Co je dulezite k bodu: Teplo?",
        answer: "Teplo: kinetická energie kmitajících molekul",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:4",
        prompt: "Shrn cast: Řízení termoregulace",
        answer: "1. Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě) 2. Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:5",
        prompt: "Co je dulezite k bodu: Termoreceptory?",
        answer: "1. Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:6",
        prompt: "Co je dulezite k bodu: Hypotalamus?",
        answer: "2. Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:7",
        prompt: "Shrn cast: Termogeneze",
        answer: "Termogeneze - teplo vniká metabolickou aktivitou - termogeneze obligátní (bazální metabolismus)/fakultativní (sv. třes, zvýšený metabolismus) - zdroje: svalová práce, svalový třes, metabolismus bazálních orgánů, tukové tkáně - při chladu: stresová termogeneze (svalová kontrakce vede k tvorbě tepla)/netřesová termogeneze(novorozenci, hnědá tuková tkáň)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:8",
        prompt: "Shrn cast: Termolýza",
        answer: "1. kondukce - vedení (přímý přenos tepla mezi tělem a předmětem) 2. konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda) 3. radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření?? 4. evaporace - odpařování",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:9",
        prompt: "Co je dulezite k bodu: kondukce?",
        answer: "1. kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:10",
        prompt: "Co je dulezite k bodu: konvekce?",
        answer: "2. konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:11",
        prompt: "Co je dulezite k bodu: radiace?",
        answer: "3. radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:12",
        prompt: "Co je dulezite k bodu: evaporace?",
        answer: "4. evaporace - odpařování",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:13",
        prompt: "Shrn cast: Reakce organizmu na chlad",
        answer: "Reakce organizmu na chlad - vazokonstrikce, snížení průtoku krve kůží, omezení tepelných ztrát - třes, zvýšení svalový tonus, metabolická aktivita, behaviorální reakce - vyhledání teplo",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:14",
        prompt: "Shrn cast: Reakce organizmu na teplo",
        answer: "Reakce organizmu na teplo - vazodilatace, zvýšení průtoku krve kůží, zvýšení výdaje tepla, pocení, evaporace",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:15",
        prompt: "Shrn cast: Hyperémie",
        answer: "1. aktivní hyperémie - vazodilatace arteriol a zvýšení průtoku krve vede ke zvýšení přísunu O2, živin, odvodu metabolitů, podpoře regenerace, snížení tonu - teplo využíváme před mobilizací, protahováním, cvičením, manuální terapií 2. reaktivní hyperémie - vzniká po krátkodobém přerušení nebo výrazným omezení průtoku krve 3. pasivní hyperémie - městnání - venózní kongesce, není žádoucí",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:16",
        prompt: "Co je dulezite k bodu: aktivní hyperémie?",
        answer: "1. aktivní hyperémie - vazodilatace arteriol a zvýšení průtoku krve vede ke zvýšení přísunu O2, živin, odvodu metabolitů, podpoře regenerace, snížení tonu - teplo využíváme před mobilizací, protahováním, cvičením, manuální terapií",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:17",
        prompt: "Co je dulezite k bodu: reaktivní hyperémie?",
        answer: "2. reaktivní hyperémie - vzniká po krátkodobém přerušení nebo výrazným omezení průtoku krve",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:18",
        prompt: "Co je dulezite k bodu: pasivní hyperémie?",
        answer: "3. pasivní hyperémie - městnání - venózní kongesce, není žádoucí",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:19",
        prompt: "Shrn cast: Terapeutický význam hyperémie",
        answer: "Terapeutický význam hyperémie - zvýšení metabolismu - více krve (trofický) - odvod metabolitů - zvýšený průtok (resorbční) - reparace - lepší cirkulace - analgezie (analgetický) - snížení svalového tonu (spasmolytický)",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:20",
        prompt: "Shrn cast: Typy hyperémie",
        answer: "1. tepelná - parafín, peloid, teplé koupele, infračervené záření 2. mechanickými metodami - masáž 3. pohybem - aktivní cvičení, svalová práce",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:21",
        prompt: "Co je dulezite k bodu: tepelná?",
        answer: "1. tepelná - parafín, peloid, teplé koupele, infračervené záření",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:22",
        prompt: "Co je dulezite k bodu: mechanickými metodami?",
        answer: "2. mechanickými metodami - masáž",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:23",
        prompt: "Co je dulezite k bodu: pohybem?",
        answer: "3. pohybem - aktivní cvičení, svalová práce",
      },
      {
        id: "ix-fyzikalni-terapie:15:flashcard:24",
        prompt: "Shrn cast: Vhodná hyperémie",
        answer: "Vhodná hyperémie: chronické bolestivé stavy, svalová ztuhlost, chronické degenerativní změny, podpora hojení, příprava tkání před cvičením",
      },
    ],
    quizQuestions: [
      {
        id: "ix-fyzikalni-terapie:15:quiz:1",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Definice: soubor mechanizmů, kterými organizmus udržuje stálou tělesnou teplotu navzdory změnám okolního prostředí - centrální regulační orgán - hypotalamus - termogeneze - tvorba tepla - termolýza - výdej tepla",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Definice: soubor mechanizmů, kterými organizmus udržuje stálou tělesnou teplotu navzdory změnám okolního prostředí - centrální regulační orgán - hypotalamus - termogeneze - tvorba tepla - termolýza - výdej tepla",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:2",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Tělesná teplota: výslednice mezi tvorbou a ztrátou",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Tělesná teplota: výslednice mezi tvorbou a ztrátou",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:3",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Teplo: kinetická energie kmitajících molekul",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Teplo: kinetická energie kmitajících molekul",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:4",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Řízení termoregulace - regulace autonomním nervovým systémem",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Řízení termoregulace - regulace autonomním nervovým systémem",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:5",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. Termoreceptory: periferní (v kůži, informace o teplotě v okolí)/centrální (hypotalamus a hlubší tkáň, informace o vnitřní teplotě)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:6",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. Hypotalamus - přední (mechanismy výdeje tepla)/zadní (tvorba a uchování tepla)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:7",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Termogeneze - teplo vniká metabolickou aktivitou - termogeneze obligátní (bazální metabolismus)/fakultativní (sv. třes, zvýšený metabolismus) - zdroje: svalová práce, svalový třes, metabolismus bazálních orgánů, tukové tkáně - při chladu: stresová termogeneze (svalová kontrakce vede k tvorbě tepla)/netřesová termogeneze(novorozenci, hnědá tuková tkáň)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Termogeneze - teplo vniká metabolickou aktivitou - termogeneze obligátní (bazální metabolismus)/fakultativní (sv. třes, zvýšený metabolismus) - zdroje: svalová práce, svalový třes, metabolismus bazálních orgánů, tukové tkáně - při chladu: stresová termogeneze (svalová kontrakce vede k tvorbě tepla)/netřesová termogeneze(novorozenci, hnědá tuková tkáň)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:8",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Termolýza - ztáta tepla 4 mechanizmy",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Termolýza - ztáta tepla 4 mechanizmy",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:9",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "1. kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "1. kondukce - vedení (přímý přenos tepla mezi tělem a předmětem)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:10",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "2. konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "2. konvekce - proudění (teplo odvádí proudící medium - proudící vzduch, voda)",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:11",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "3. radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "3. radiace - záření (vyzařování tepla do okolí pomocí elektromagnetického záření??",
      },
      {
        id: "ix-fyzikalni-terapie:15:quiz:12",
        prompt: "Vyber tvrzeni, ktere odpovida zpracovane otazce.",
        options: [
          "Reakce organizmu na chlad - vazokonstrikce, snížení průtoku krve kůží, omezení tepelných ztrát - třes, zvýšení svalový tonus, metabolická aktivita, behaviorální reakce - vyhledání teplo",
          "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
          "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
          "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit.",
        ],
        correctOptionIndexes: [0],
        explanation: "Reakce organizmu na chlad - vazokonstrikce, snížení průtoku krve kůží, omezení tepelných ztrát - třes, zvýšení svalový tonus, metabolická aktivita, behaviorální reakce - vyhledání teplo",
      },
    ],
  },
}
) satisfies Record<string, PreparedQuestionData>;
