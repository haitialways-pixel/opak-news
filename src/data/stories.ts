import type { Story } from "../types";

/**
 * Curated Haiti digest — real stories with multi-source credits.
 * Slot 3 (need-to-know) is Steeve's editor-pushed piece (isManual).
 * Set isManual: true for editor-pushed stories.
 */
export const STORIES: Story[] = [
  {
    id: "ntk-cep-elections-hold-2026-10",
    tier: "need-to-know",
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
    id: "ntk-gsf-salvador-attack-2026-10",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-10-26",
    headline: {
      ht: "Atak sou Fòs Represyon Gang yo: kat sòlda salvadorien yo toujou manke",
      fr: "Attaque contre la Force de répression des gangs : quatre soldats salvadoriens toujours portés disparus",
    },
    brief: {
      ht: "Gang yo te tire sou yon machin blende nan Kwadesboukè nan fen semèn nan — pi gwo atak depi Fòs la kòmanse operasyon. Kat teknisyen avyasyon salvadorien rete san nouvèl. Washington Post rapòte kèk rès yo jwenn pa sanble pa t pou yo; Prezidan Bukele te di deja « se pa mesye nou yo ».",
      fr: "Des gangs ont ouvert le feu sur un véhicule blindé à Croix-des-Bouquets en fin de semaine — la plus grave attaque depuis le début des opérations de la Force. Quatre techniciens d’aviation salvadoriens restent sans nouvelles. Le Washington Post indique que certains restes retrouvés ne semblent pas leur appartenir ; le président Bukele avait déjà affirmé « ce ne sont pas nos hommes ».",
    },
    sources: ["AP News", "The Washington Post", "UN News"],
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
    sources: ["Opak News — Sitwayen Angaje"],
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
      ht: "Difè ap boule nan Radio Télé Metronome. Jean Corvington (Me Hantz Ludwig Joseph) ak CEO Guerrier Dieuseul (Me Mario Delcy) ap ale nan tribinal ayisyen. Selon Infos Partage, yo akize Corvington li pran paj X ak YouTube medya a pou zafè pèsonèl — deyò nòm jounalis. Guerrier anboche Me Delcy pou bloke li sou rezo yo. Yo di Corvington deja resevwa de konvokasyon.",
      fr: "Le conflit enfle à Radio Télé Metronome. Jean Corvington (Me Hantz Ludwig Joseph) et le CEO Guerrier Dieuseul (Me Mario Delcy) se retrouvent devant la justice haïtienne. Selon Infos Partage, Corvington est accusé d’avoir détourné les pages X et YouTube du média pour des affaires personnelles — hors des normes journalistiques. Guerrier a engagé Me Delcy pour lui interdire l’usage de ces pages. Corvington aurait déjà reçu deux convocations.",
    },
    sources: ["Infos Partage (@infospartagesos)", "Opak News — Tripotay"],
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
    id: "qh-remittances-tps-risk",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-10-02",
    headline: {
      ht: "Transfè dyaspora: sere TPS ta ka souke estabilite ekonomik",
      fr: "Transferts de la diaspora : un durcissement du TPS pourrait fragiliser la stabilité économique",
    },
    brief: {
      ht: "Chèchè BRH (Blaise, Victor, Cayemitte) di yon sere TPS kapab vin yon chòk sou to chanje, rezèv ak bidjè — men pa otomatikman imedyat. Diminisyon transfè ta afekte konsomasyon, rezèv devis, e antre fiskal Eta a.",
      fr: "Des chercheurs de la BRH (Blaise, Victor, Cayemitte) estiment qu’un durcissement du TPS pourrait devenir un choc sur le taux de change, les réserves et le budget — sans transmission automatique ni immédiate. Une baisse des transferts affecterait la consommation, les réserves de devises et les recettes fiscales.",
    },
    sources: ["Le Nouvelliste", "NAGO.TV", "BRH / DREF"],
  },
  {
    id: "qh-frg-launch-tabarre",
    tier: "quick-hit",
    topic: "security",
    publishedAt: "2026-10-09",
    headline: {
      ht: "FRG ofisyèlman lanse nan baz Vètyè, Tabar",
      fr: "La FRG officiellement lancée à la base Vertières, Tabarre",
    },
    brief: {
      ht: "Premye Minis Alix Didier Fils-Aimé te lanse deplwaman Fòs Represyon Gang yo 8 oktòb, ak peyi kontribitè, kò diplomatik ak Nasyonzini. Jack Christofides di Fòs la la sou demann Ayiti, ansanm ak PNH ak FAd’H.",
      fr: "Le Premier ministre Alix Didier Fils-Aimé a lancé le déploiement de la Force de répression des gangs le 8 octobre, avec les pays contributeurs, le corps diplomatique et l’ONU. Jack Christofides affirme que la Force est présente à la demande d’Haïti, aux côtés de la PNH et des FAd’H.",
    },
    sources: ["Le National", "Primature"],
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
