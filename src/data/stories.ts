import type { Story } from "../types";

/**
 * Sample Haiti digest content for v1.
 * Replace / extend via curation automation later.
 * Set isManual: true for editor-pushed stories.
 */
export const STORIES: Story[] = [
  {
    id: "ntk-cp-transition-2026-10",
    tier: "need-to-know",
    topic: "politics",
    publishedAt: "2026-10-26",
    isSample: true,
    headline: {
      ht: "Konsèy Prezidansyèl: nouvo kalandriye tranzisyon an nan diskisyon",
      fr: "Conseil présidentiel : un nouveau calendrier de transition en discussion",
    },
    brief: {
      ht: "Lidè politik ak reprezantan sosyete sivil yo ap chèche yon antant sou dat eleksyon yo. Plizyè sous nan Pòtoprens di kalandriye a ka chanje nan semèn kap vini yo, san yon dat final pibliye ankò.",
      fr: "Des dirigeants politiques et des représentants de la société civile cherchent un accord sur le calendrier électoral. Plusieurs sources à Port-au-Prince indiquent qu’il pourrait évoluer dans les prochaines semaines, sans date finale encore publiée.",
    },
    sources: ["Sample: Agence locale", "Sample: Radio digests"],
  },
  {
    id: "ntk-port-cap-haiti-trade",
    tier: "need-to-know",
    topic: "commerce",
    publishedAt: "2026-10-26",
    isSample: true,
    headline: {
      ht: "Pò Kap Ayisyen: ogmantasyon trafik kago pou sezon fèt yo",
      fr: "Port du Cap-Haïtien : hausse du trafic de fret pour la saison des fêtes",
    },
    brief: {
      ht: "Operatè pò yo rapòte plis kontenè ki ap antre pou pwovizyon ak machandiz konsomatè. Komèsan nan Nò a di pri transpò a rete wo, men livrezon yo pi regilye pase nan mwa pase yo.",
      fr: "Les opérateurs portuaires signalent davantage de conteneurs entrants pour l’approvisionnement et les biens de consommation. Les commerçants du Nord indiquent que les coûts de transport restent élevés, mais que les livraisons sont plus régulières que les mois précédents.",
    },
    sources: ["Sample: Port authority brief", "Sample: Chamber digest"],
  },
  {
    id: "ntk-solar-microgrid-artibonite",
    tier: "need-to-know",
    topic: "development",
    publishedAt: "2026-10-25",
    isSample: true,
    headline: {
      ht: "Mikro-rezo solè: twa komin nan Latibonit resevwa nouvo enstalasyon",
      fr: "Micro-réseaux solaires : trois communes de l’Artibonite reçoivent de nouvelles installations",
    },
    brief: {
      ht: "Yon pwojè patenarya ap mete panno solè ak batri pou klinik ak mache lokal. Rezidan yo di limyè a ap ede biznis ti jan yo rete ouvè pi ta nan aswè.",
      fr: "Un projet de partenariat installe des panneaux solaires et des batteries pour des cliniques et des marchés locaux. Des habitants indiquent que l’éclairage aide les petites entreprises à rester ouvertes plus tard le soir.",
    },
    sources: ["Sample: NGO field note", "Sample: Energy desk"],
  },
  {
    id: "qh-fintech-mobile-money",
    tier: "quick-hit",
    topic: "tech",
    publishedAt: "2026-10-26",
    isSample: true,
    headline: {
      ht: "Fintech lokal: nouvo API pou peman mobil ant bank ak machann",
      fr: "Fintech locale : une nouvelle API de paiement mobile entre banques et commerçants",
    },
    brief: {
      ht: "Plizyè konpayi teknoloji ap teste yon lyen ki pèmèt machann yo resevwa peman pi rapid. Pilot la kòmanse nan Pòtoprens ak Okap.",
      fr: "Plusieurs entreprises tech testent une passerelle permettant aux commerçants de recevoir des paiements plus rapidement. Le pilote démarre à Port-au-Prince et au Cap-Haïtien.",
    },
    sources: ["Sample: Tech roundup"],
  },
  {
    id: "qh-road-gonaives",
    tier: "quick-hit",
    topic: "development",
    publishedAt: "2026-10-25",
    isSample: true,
    headline: {
      ht: "Wout Gonayiv–Ench: reparasyon ijan apre gwo lapli",
      fr: "Route Gonaïves–Hinche : réparations urgentes après de fortes pluies",
    },
    brief: {
      ht: "Ekip minisipal yo ap ranje seksyon ki te bloke. Chofè transpò piblik mande pi bon drenaj anvan sezon lapli a fini.",
      fr: "Des équipes municipales réparent des tronçons bloqués. Les transporteurs publics demandent un meilleur drainage avant la fin de la saison des pluies.",
    },
    sources: ["Sample: Local desk"],
  },
  {
    id: "qh-export-mango",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-10-25",
    isSample: true,
    headline: {
      ht: "Ekspòtasyon mango: ekspè avèti sou kalite ak chèn frèt",
      fr: "Exportation de mangues : les experts alertent sur la qualité et la chaîne du froid",
    },
    brief: {
      ht: "Pwodiktè yo di mache etranje a mande plis kontwòl tanperati. Envestisman nan depo frèt ka deside volim sezon an.",
      fr: "Les producteurs indiquent que les marchés étrangers exigent davantage de contrôle de la température. L’investissement dans le froid pourrait déterminer les volumes de la saison.",
    },
    sources: ["Sample: Agri trade note"],
  },
  {
    id: "qh-security-corridor",
    tier: "quick-hit",
    topic: "security",
    publishedAt: "2026-10-24",
    isSample: true,
    headline: {
      ht: "Koridò Sid: patwouy konjwen pou sekirize wout machandiz",
      fr: "Corridor Sud : patrouilles conjointes pour sécuriser les axes commerciaux",
    },
    brief: {
      ht: "Otorite lokal yo rapòte plis prezans sou wout kle yo. Komèsan yo di livrezon yo pi previsib, men yo mande kontinwite.",
      fr: "Les autorités locales signalent une présence accrue sur les axes clés. Les commerçants jugent les livraisons plus prévisibles, mais demandent de la continuité.",
    },
    sources: ["Sample: Security brief"],
  },
  {
    id: "qh-school-reopen",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-24",
    isSample: true,
    headline: {
      ht: "Lekòl nan zòn metwopòl: retounen klas ak orè fleksib",
      fr: "Écoles de la zone métropolitaine : reprise des cours avec horaires flexibles",
    },
    brief: {
      ht: "Direktè lekòl yo ap ajiste orè pou elèv ki gen pwoblèm transpò. Paran yo mande plis sipò pou materyèl ak sekirite lakou lekòl.",
      fr: "Des directions d’école adaptent les horaires pour les élèves confrontés aux difficultés de transport. Les parents demandent davantage de soutien pour le matériel et la sécurité des cours.",
    },
    sources: ["Sample: Education desk"],
  },
  {
    id: "qh-diaspora-remit",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-10-23",
    isSample: true,
    headline: {
      ht: "Transfè dyaspora: volim rete wo malgre frè ki wo",
      fr: "Transferts de la diaspora : des volumes élevés malgré des frais importants",
    },
    brief: {
      ht: "Analis yo note fanmi yo kontinye voye lajan pou manje ak lwaye. Konkirans ant platfòm yo ka bese frè yo nan mwa kap vini yo.",
      fr: "Les analystes notent que les familles continuent d’envoyer de l’argent pour la nourriture et le loyer. La concurrence entre plateformes pourrait faire baisser les frais dans les mois à venir.",
    },
    sources: ["Sample: Remittance watch"],
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
