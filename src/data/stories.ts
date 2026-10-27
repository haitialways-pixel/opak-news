import type { Story } from "../types";

/**
 * Curated Haiti digest — real stories with multi-source credits.
 * Slot 3 (need-to-know) is the editor-pushed ONA piece (isManual).
 * Set isManual: true for editor-pushed stories.
 */
export const STORIES: Story[] = [
  {
    id: "ntk-intemperies-pluie-2026-10",
    tier: "need-to-know",
    topic: "society",
    publishedAt: "2026-10-27",
    isBreaking: true,
    headline: {
      ht: "Gwo lapli: 4 mouri, plis pase 3 200 fanmi sinistre; metewo ap kalme",
      fr: "Fortes pluies : 4 morts, plus de 3 200 familles sinistrées ; la météo s’apaise",
    },
    brief: {
      ht: "Depi fen semèn nan, gwo lapli ak loraj frape peyi a, sitou Grand Sid, Nip, Grandans ak Lwès. DGPC (26 oktòb) di omwen 4 moun mouri, 2 disparèt, 3 blese, ak plis pase 3 200 fanmi afekte nan 21 komin. Yo konte 2 130 kay inonde, 847 detwi, 219 domaje. Baradè anba dlo; dig Ravine Sid tonbe; RN7 te bloke yon moman nan Grandans. UHM te kenbe vijilans oranj nan 5 depatman. Pou Pòtoprens: jodi a (madi) chalè ak loraj izole, 30 °C konsa; mèkredi-jedi toujou posib ti loraj apremidi; vandredi-samdi lapli a ta dwe diminye, toujou cho ak imid.",
      fr: "Depuis le week-end, de fortes pluies et orages frappent le pays, surtout le Grand Sud, les Nippes, la Grand’Anse et l’Ouest. La DGPC (26 octobre) fait état d’au moins 4 morts, 2 disparus, 3 blessés et plus de 3 200 familles touchées dans 21 communes. Bilan matériel : 2 130 maisons inondées, 847 détruites, 219 endommagées. Baradères sous les eaux ; digue de la Ravine du Sud effondrée ; RN7 brièvement bloquée en Grand’Anse. L’UHM maintenait la vigilance orange sur 5 départements. À Port-au-Prince : mardi, chaleur et orages isolés autour de 30 °C ; mercredi-jeudi, averses orageuses encore possibles l’après-midi ; vendredi-samedi, pluie en baisse, toujours chaud et humide.",
    },
    sources: [
      "DGPC / Protection civile",
      "Le Nouvelliste",
      "L’Observatoire",
      "UHM / FICOM",
      "HaitiLibre",
    ],
  },
  {
    id: "ntk-gsf-salvador-attack-2026-10",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-10-27",
    isBreaking: true,
    headline: {
      ht: "FRG: kat teknisyen salvadorien toujou manke; Bukele voye fòs espesyal",
      fr: "FRG : quatre techniciens salvadoriens toujours manquants ; Bukele envoie des forces spéciales",
    },
    brief: {
      ht: "Depi anbiskad 18 oktòb nan Kwadesboukè, kat teknisyen avyasyon salvadorien nan Fòs Represyon Gang yo rete san nouvèl. Salvador te deplwaye plizyè santèn sòlda espesyal pou yo chèche yo. Rès yo te remèt Fòs la, men GSF di li poko konfime idantite yo. Prezidan Bukele di « se pa mesye nou yo » epi li menase plis aksyon si otaj yo pa tounen vivan.",
      fr: "Depuis l’embuscade du 18 octobre à Croix-des-Bouquets, quatre techniciens d’aviation salvadoriens de la Force de répression des gangs restent sans nouvelles. El Salvador a déployé plusieurs centaines de soldats des forces spéciales pour les rechercher. Des restes ont été remis à la Force, mais la GSF dit ne pas encore pouvoir confirmer leur identité. Le président Bukele affirme « ce ne sont pas nos hommes » et menace d’agir davantage si les otages ne sont pas rendus vivants.",
    },
    sources: ["AP News", "Miami Herald", "The Washington Post", "BBC", "UN News"],
  },
  {
    id: "ntk-ona-jij-elisee-2026-10",
    tier: "need-to-know",
    topic: "politics",
    publishedAt: "2026-10-26",
    isManual: true,
    headline: {
      ht: "Jistis: Jij ki kenbe ansyen DG ONA nan prizon pwal fè fas a lajistis",
      fr: "Justice : le juge qui maintient l’ancien DG de l’ONA en prison devra faire face à la justice",
    },
    brief: {
      ht: "Jis Loubens Elisée nan miray lajistis. Kou Kasasyon pral tande yon plent pou refi jistis kont li, sou fason li mennen ankèt sou akizasyon koripsyon kont ansyen Direktè Jeneral ONA a, Jemley Jean Baptiste. Kritik yo di jij la kenbe ansyen chèf ONA a nan prizon san vrè motif. Defans lan di tou jij la kenbe dosye a pandan li pa gen dwa trete dosye a ankò. Anpil moun kwè ke jij la ap aji ak mechansete alye li swiv manman lwa peyi a. Dosye a. Se tribinal la k ap deside l.",
      fr: "Le juge Loubens Elisée est au pied du mur. La Cour de cassation va entendre une plainte pour déni de justice à son encontre, relative à la façon dont il mène l’enquête sur les accusations de corruption visant l’ancien directeur général de l’ONA, Jemley Jean Baptiste. Les critiques affirment que le juge maintient l’ex-chef de l’ONA en prison sans motif réel. La défense soutient également que le juge conserve le dossier alors qu’il n’a plus le droit de le traiter. Beaucoup estiment que le juge agit avec malveillance, loin de suivre l’esprit de la loi du pays. L’affaire reste entre les mains du tribunal.",
    },
    sources: ["Opak News — Blaise Antoine Joseph (BAJ)"],
  },
  {
    id: "qh-repatriation-trump-tps-2026-10",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-27",
    headline: {
      ht: "Trump: deportasyon ayisyen yo kontinye apre fen TPS; HBA mande sispansyon",
      fr: "Trump : les déportations d’Haïtiens continuent après la fin du TPS ; HBA demande une suspension",
    },
    brief: {
      ht: "Administrasyon Trump kontinye voye ayisyen tounen, sitou nan Kap Ayisyen. Haitian Bridge Alliance denonse yon vòl rapòte 22 oktòb epi li mande Sena a retabli TPS pou plis pase 300 000 ayisyen. TPS ak otòrizasyon travay te sispann 27 jiyè 2026. GARR di Etazini te voye tounen omwen 1 187 ayisyen ane sa a; HRW te konte plizyè vòl depi 20 out. Retounen yo jwenn vyolans gang, deplase, e ti sipò reentegrasyon.",
      fr: "L’administration Trump continue de renvoyer des Haïtiens, surtout vers Cap-Haïtien. Haitian Bridge Alliance dénonce un vol rapporté le 22 octobre et demande au Sénat de rétablir le TPS pour plus de 300 000 Haïtiens. Le TPS et l’autorisation de travail ont pris fin le 27 juillet 2026. Le GARR indique qu’au moins 1 187 Haïtiens ont été renvoyés des États-Unis cette année ; HRW a compté plusieurs vols depuis le 20 août. Les rapatriés retrouvent violence des gangs, déplacements et peu de soutien à la réintégration.",
    },
    sources: [
      "Haitian Bridge Alliance",
      "Jamaica Observer / CMC",
      "USA TODAY",
      "El País",
      "GARR",
    ],
  },
  {
    id: "qh-metronome-corvington-guerrier-2026-10",
    tier: "quick-hit",
    topic: "gossip",
    publishedAt: "2026-10-26",
    isManual: true,
    headline: {
      ht: "Tripotay: Corvington ak Guerrier devan lajist pou Radio Télé Metronome",
      fr: "Rumeurs : Corvington et Guerrier s’affrontent en justice autour de Radio Télé Metronome",
    },
    brief: {
      ht: "Difè ap boule nan Radio Télé Metronome. Jean Corvington (Me Hantz Ludwig Joseph) ak CEO Guerrier Dieuseul (Me Mario Delcy) ap ale nan tribinal ayisyen. Selon Infos Partage, yo akize Corvington li pran paj X ak YouTube medya a pou zafè pèsonèl, deyò nòm jounalis. Guerrier anboche Me Delcy pou bloke li sou rezo yo. Yo di Corvington deja resevwa de konvokasyon.",
      fr: "Le conflit enfle à Radio Télé Metronome. Jean Corvington (Me Hantz Ludwig Joseph) et le CEO Guerrier Dieuseul (Me Mario Delcy) se retrouvent devant la justice haïtienne. Selon Infos Partage, Corvington est accusé d’avoir détourné les pages X et YouTube du média pour des affaires personnelles, hors des normes journalistiques. Guerrier a engagé Me Delcy pour lui interdire l’usage de ces pages. Corvington aurait déjà reçu deux convocations.",
    },
    sources: ["Infos Partage (@infospartagesos)", "Opak News — Tripotay"],
  },
  {
    id: "qh-gossip-ulcc-martelly-return-2026-10",
    tier: "quick-hit",
    topic: "gossip",
    publishedAt: "2026-10-27",
    headline: {
      ht: "Tripotay: apre ULCC, Martelly ak Céant tounen; avoka yo nan afè Metronome",
      fr: "Rumeurs : après l’ULCC, Martelly et Céant reviennent ; leurs avocats dans l’affaire Métronome",
    },
    brief: {
      ht: "Depi 2 jiyè, Hans Ludwig Joseph pa DG ULCC ankò. Nan jou sa yo, Jean-Henry Céant ak Michel Martelly tounen nan peyi a; tou de te nan rapò ULCC. Koulye a, nan lit Metronome a, Corvington gen Me Joseph kòm avoka, pandan Guerrier gen Me Mario Delcy, ke plizyè medya prezante kòm avoka Martelly. Sou rezo yo, moun ap mande si lit medya a pa gen koulè politik tou.",
      fr: "Depuis le 2 juillet, Hans Ludwig Joseph n’est plus DG de l’ULCC. Dans la foulée, Jean-Henry Céant et Michel Martelly sont revenus au pays ; tous deux figuraient dans des rapports de l’ULCC. Dans le litige Métronome, Corvington a Me Joseph pour avocat, tandis que Guerrier a Me Mario Delcy, présenté par plusieurs médias comme avocat de Martelly. Sur les réseaux, on se demande si le conflit médiatique n’a pas aussi une couleur politique.",
    },
    sources: ["Mag2News", "Lakay Info", "Rezo Nòdwès", "Satellite509", "Opak News — Tripotay"],
  },
  {
    id: "qh-gossip-rutshelle-teddy-2026-10",
    tier: "quick-hit",
    topic: "gossip",
    publishedAt: "2026-10-27",
    headline: {
      ht: "Tripotay: Rutshelle ak Teddy Hashtag ofisyèlman ansanm",
      fr: "Rumeurs : Rutshelle et Teddy Hashtag officialisent leur couple",
    },
    brief: {
      ht: "Apre mwa tripotay sou rezo yo, Rutshelle Guillaume ak Teddy Hashtag pibliye foto koup la. Fanatik yo te deja soupsonen depi kolaborasyon « Ou banm lanmou ». An kèk èdtan, pòs yo gaye sou Instagram, Facebook, TikTok ak X. Anpil moun mande si yo pral fè plis mizik ansanm.",
      fr: "Après des mois de rumeurs sur les réseaux, Rutshelle Guillaume et Teddy Hashtag ont publié des photos de couple. Les fans soupçonnaient déjà une histoire depuis la collaboration « Ou banm lanmou ». En quelques heures, les posts ont envahi Instagram, Facebook, TikTok et X. Beaucoup se demandent s’ils feront davantage de musique ensemble.",
    },
    sources: ["Lakay Info 509", "Opak News — Tripotay"],
  },
  {
    id: "qh-cep-elections-hold-2026-10",
    tier: "quick-hit",
    topic: "politics",
    publishedAt: "2026-10-26",
    headline: {
      ht: "Eleksyon 13 desanm yo an rete: CEP ap revize kalandriye a",
      fr: "Élections du 13 décembre en suspens : le CEP révise le calendrier",
    },
    brief: {
      ht: "Apre amandman dekrè elektoral 6 oktòb la, Konsèy Elektoral Pwovizwa a pwolonje enskripsyon kandida jiska 31 oktòb epi li ranvwaye kanpay la. Nasyonzini di premye tou prezidansyèl ak lejislatif yo te ranvwaye san nouvo dat. Kan Ruiz Massieu avèti: pa fikse nouvo dat san yon evalyasyon reyalis sou sekirite ak lojistik.",
      fr: "Après l’amendement du décret électoral du 6 octobre, le Conseil électoral provisoire a prolongé l’inscription des candidatures jusqu’au 31 octobre et reporté la campagne. L’ONU indique que le premier tour présidentiel et législatif a été reporté sans nouvelle date. Carlos Ruiz Massieu met en garde : ne pas fixer de nouvelles dates sans une évaluation réaliste de la sécurité et de la logistique.",
    },
    sources: ["ONU Info / UN News", "BINUH S/2026/800", "Security Council Report"],
  },
  {
    id: "qh-gangs-rural-violence-un",
    tier: "quick-hit",
    topic: "security",
    publishedAt: "2026-10-19",
    headline: {
      ht: "Vyolans gang yo gaye nan kanpay: 1 123 mouri depi jiyè",
      fr: "La violence des gangs gagne les campagnes : 1 123 morts depuis juillet",
    },
    brief: {
      ht: "BINUH di gang yo ap adapte taktik yo: otaj, reprezal, e atak nan zòn riral (Kenskòf, Sen Michèl Lataye, Marigo, Leyogàn). 241 moun te mouri nan Lwès ak Latibonit paske yo te reziste. Fòs la gen 1 563 inifòm sou 5 550 otorize.",
      fr: "Le BINUH indique que les gangs adaptent leurs tactiques : otages, représailles et attaques en zones rurales (Kenscoff, Saint-Michel-de-l’Atalaye, Marigot, Léogâne). 241 personnes ont été tuées dans l’Ouest et l’Artibonite pour avoir résisté. La Force compte 1 563 uniformes sur 5 550 autorisés.",
    },
    sources: ["ONU Info", "UN News", "Rapò Sekretè Jeneral"],
  },
  {
    id: "qh-humanitarian-idp-15m",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-19",
    headline: {
      ht: "Prèske 1,5 milyon deplase: plan imanitè 2026 a mwatye finanse",
      fr: "Près de 1,5 million de déplacés : le plan humanitaire 2026 à moitié financé",
    },
    brief: {
      ht: "BINUH rapòte plis pase 17 000 nouvo deplase nan twa mwa ki sot pase yo; total la prèske 1,5 milyon, mwatye se timoun. Ekonomi an prevwa kontrakte pou setyèm ane konsèktif; bezwen imanitè yo depase mwayen yo genyen.",
      fr: "Le BINUH rapporte plus de 17 000 nouveaux déplacés sur les trois derniers mois ; le total approche 1,5 million, dont la moitié d’enfants. L’économie devrait se contracter pour une septième année consécutive ; les besoins humanitaires dépassent les moyens disponibles.",
    },
    sources: ["UN News", "BINUH", "WFP"],
  },
  {
    id: "qh-brh-digital-payments",
    tier: "quick-hit",
    topic: "tech",
    publishedAt: "2026-10-20",
    headline: {
      ht: "BRH: pilòt peman machann ak enklizyon finansye dijital",
      fr: "BRH : pilote de paiement marchand et inclusion financière numérique",
    },
    brief: {
      ht: "Gouvènè Ronald Gabriel di bank santral la ap pouse yon ekosistèm peman aksesib, entèoperab e sekirize. Yon pwojè peman machann ap prepare yon faz pilòt pou ti komèsan antre nan ekonomi fòmèl, ak sipò Bank Mondyal sou inovasyon.",
      fr: "Le gouverneur Ronald Gabriel indique que la banque centrale pousse un écosystème de paiements accessible, interopérable et sécurisé. Un projet de paiement marchand prépare une phase pilote pour intégrer les petits commerçants à l’économie formelle, avec l’appui de la Banque mondiale sur l’innovation.",
    },
    sources: ["BRH", "Banque mondiale (LAC)"],
  },
  {
    id: "qh-commerce-caravan-5000",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-10-18",
    headline: {
      ht: "Karavàn komès: objektif 5 000 antrepriz fòmèl nan 10 depatman",
      fr: "Caravane du commerce : objectif 5 000 entreprises formelles dans les 10 départements",
    },
    brief: {
      ht: "Minis James Monazard lanse yon pwogram rejyonal nan Montana (16 oktòb) pou ede ti biznis enskri non komèsyal ak kat pwofesyonèl. Biwo depatmantal yo ap resevwa òdinatè; platfòm enskripsyon sou entènèt lan te lanse nan fen 2024.",
      fr: "Le ministre James Monazard a lancé un programme régional à l’Hôtel Montana (16 octobre) pour aider les petites entreprises à enregistrer leurs noms commerciaux et cartes professionnelles. Les bureaux départementaux recevront du matériel informatique ; la plateforme d’enregistrement en ligne date de fin 2024.",
    },
    sources: ["Le Soulouquois", "Ministère du Commerce"],
  },
  {
    id: "qh-aiesu-startups-uni",
    tier: "quick-hit",
    topic: "tech",
    publishedAt: "2026-10-11",
    headline: {
      ht: "AIESU: 20 pwojè inivèsitè chwazi pou sipò inovasyon",
      fr: "AIESU : 20 projets universitaires sélectionnés pour l’appui à l’innovation",
    },
    brief: {
      ht: "MCI lanse Pwojè Sipò Inovasyon Antreprenarya ak Startup Inivèsitè nan Inivèsite Kiskeya (9 oktòb). Premye kwòt: 20 pwojè apre yon konpetisyon pitch. Enkubatè deja nan Kiskeya; yon lòt ap louvri nan Okay, ak objektif yon enkubatè pa depatman.",
      fr: "Le MCI a lancé le Projet d’appui à l’innovation entrepreneuriale et aux startups universitaires à l’Université Quisqueya (9 octobre). Première cohorte : 20 projets après un concours de pitch. Un incubateur existe déjà à Quisqueya ; un autre ouvrira aux Cayes, avec l’objectif d’un incubateur par département.",
    },
    sources: ["HaitiLibre", "MCI / Université Quisqueya"],
  },
  {
    id: "qh-soley-etzer-decret-2026-10",
    tier: "quick-hit",
    topic: "politics",
    publishedAt: "2026-10-15",
    headline: {
      ht: "Solèy / Etzer Émile: dekrè elektoral la ta favorize moun sanksyone",
      fr: "Solèy / Etzer Émile : le décret électoral favoriserait des personnalités sanctionnées",
    },
    brief: {
      ht: "Platfòm Solèy, ak Etzer Émile kòm figi prezidansyèl, denonse amandman dekrè elektoral yo. Yo di chanjman yo ta ka louvri pòt pou enterè patikilye e pou pèsonalite sanksyone. Yo mande yon CEP endepandan, yon kalandriye reyalis, ak garanti sekirite anvan vòt la.",
      fr: "La plateforme Solèy, avec Etzer Émile comme figure présidentielle, dénonce les amendements au décret électoral. Elle estime que ces changements pourraient ouvrir la voie à des intérêts particuliers et à des personnalités sanctionnées. Elle réclame un CEP indépendant, un calendrier réaliste et des garanties de sécurité avant le scrutin.",
    },
    sources: ["Métronome Haiti", "Hebdo24", "Alternance Media"],
  },
];

export function getStoryById(id: string): Story | undefined {
  return STORIES.find((s) => s.id === id);
}

export function needToKnowStories(): Story[] {
  return STORIES.filter((s) => s.tier === "need-to-know");
}

export function quickHitStories(): Story[] {
  return STORIES.filter((s) => s.tier === "quick-hit");
}
