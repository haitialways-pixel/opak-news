import type { Story } from "../types";

/**
 * Curated Haiti digest — real stories with multi-source credits.
 * Need to Know leads; quick hits by topic. Set isManual for editor pushes.
 * Feed shows brief only; full detail belongs in body on the story page.
 *
 * Credit rule (Steeve): "Blaise Antoine Joseph (BAJ)" only when Steeve
 * uploaded/wrote the text himself. Wire/aggregate teasers credit the
 * named outlets (Reuters, HaitiLibre, DGPC, etc.), never BAJ.
 *
 * Adding a story: always set publishedAt ("YYYY-MM-DD") AND publishedTime
 * (exact ISO time with Haiti offset, e.g. "2026-10-29T08:01:49-04:00").
 * The blue Nouveau/Nouvo badge shows for 24h after publishedTime, and feeds
 * sort newest first by it.
 */
export const STORIES: Story[] = [
  {
    id: "ntk-konket-decret-electoral-2026-11-10",
    tier: "need-to-know",
    topic: "politics",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T09:41:00-05:00",
    headline: {
      ht: "KONKET konteste dekrè elektoral la: papòt 30000 aderan, disponiblite fonksyonè yo ak kalandriye a",
      fr: "KONKET conteste le décret électoral : seuil de 30000 adhérents, disponibilité des fonctionnaires et calendrier",
    },
    teaser: {
      ht: "Nan yon lèt 10 novanm bay prezidan CEP, pati a mande yo revize twa dispozisyon. Konsèy la poko reponn, dapre Alternance Média.",
      fr: "Dans une lettre du 10 novembre au président du CEP, le parti demande la révision de trois dispositions. Le Conseil n'a pas encore répondu, selon Alternance Média.",
    },
    brief: {
      ht: "Pati KONKET, nan yon lèt 10 novanm adrese prezidan CEP Peterson Pierre-Louis, konteste papòt 30000 aderan, disponiblite fonksyonè kandida yo depi enskripsyon an, ak dat yo fèmen depo kandidati yo, dapre Matinal Post ak Alternance Média.",
      fr: "Le parti KONKET, dans une lettre du 10 novembre adressée au président du CEP, Peterson Pierre-Louis, conteste le seuil de 30000 adhérents, la mise en disponibilité des fonctionnaires candidats dès l'inscription, et la date de clôture du dépôt des candidatures, selon Matinal Post et Alternance Média.",
    },
    body: {
      ht: "Pati politik KONKET voye, mardi 10 novanm, yon lèt bay prezidan Konsèy elektoral pwovizwa a, Peterson Pierre-Louis. Dokiman an, Fresnel Afice, prezidan pati a, siyen l. Alternance Média presize l gen yon kachè resepsyon CEP. Pati a mande yo reekzaminen plizyè dispozisyon dekrè elektoral la, li jije yo ka kontrarie Konstitisyon 1987 ki amande a ak lwa 16 janvye 2014 sou pati politik yo.\n\nPremye pwen an se papòt 30000 aderan yo mande fòmasyon politik yo. KONKET di se yon kondisyon twò strik, ki ka mete sou kote òganizasyon yo deja rekonèt legalman. Li cite atik 31 ak 31.1 Konstitisyon an, sou libète asosyasyon, ansanm ak atik 3, 8, 17 ak 18 lwa sou pati politik yo. Se argument pati a nan lèt la, se pa yon desizyon tribinal sou validite règleman an, Alternance Média raple.\n\nDezyèm pwen: disponiblite ajan fonksyon piblik ki vle kandida. KONKET jije obligasyon an twò bonè lè li kòmanse depi enskripsyon kandidati a. Li pa mande yo retire l, men pou li kòmanse sèlman lè kanpay ofisyèl la louvri.\n\nTwazyèm pwen an se kalandriye a. Pati a di yon fèmti twò bonè nan depo kandidati yo ta ka penalize sitwayen ki ta rive nan laj legal pou yo kandida apre peryòd enskripsyon an, men anvan kanpay ofisyèl la kòmanse. Li pwopoze pou yo fèmen depo kandidati yo anviwon yon mwa anvan ouvèti kanpay la. Alternance Média ekri dokiman an pa gen repons CEP.",
      fr: "Le parti politique KONKET a adressé, mardi 10 novembre, une lettre au président du Conseil électoral provisoire, Peterson Pierre-Louis. Le document est signé par Fresnel Afice, président du parti. Alternance Média précise qu'il porte un cachet de réception du CEP. Le parti demande le réexamen de plusieurs dispositions du décret électoral, qu'il juge susceptibles de contrevenir à la Constitution de 1987 amendée et à la loi du 16 janvier 2014 sur les partis politiques.\n\nLe premier point porte sur le seuil de 30000 adhérents exigé des formations politiques. KONKET estime que cette condition est trop restrictive et risque d'écarter des organisations déjà légalement reconnues. Il invoque les articles 31 et 31.1 de la Constitution, relatifs à la liberté d'association, ainsi que les articles 3, 8, 17 et 18 de la loi sur les partis politiques. Il s'agit de l'argumentation du parti dans son courrier, pas d'une décision de justice sur la validité de la règle, rappelle Alternance Média.\n\nDeuxième point : la mise en disponibilité des agents de la fonction publique qui veulent se porter candidats. KONKET juge cette obligation prématurée lorsqu'elle commence dès l'inscription de la candidature. Le parti ne demande pas de la supprimer, mais qu'elle ne prenne effet qu'à l'ouverture officielle de la campagne électorale.\n\nLe troisième point concerne le calendrier. Selon le parti, une clôture trop anticipée du dépôt des candidatures pourrait pénaliser des citoyens qui atteindraient l'âge légal d'éligibilité après la période d'inscription, mais avant l'ouverture officielle de la campagne. Il propose que cette clôture intervienne environ un mois avant le début de la campagne. Alternance Média écrit que le document ne comporte pas de réponse du CEP.",
    },
    sources: ["Matinal Post", "Alternance Média"],
    sourceLinks: [
      { name: "Matinal Post", url: "https://matinalpost.com/actualite/decret-electoral-konket-interpelle-le-cep-sur-les-risques-de-non-conformite-a-la-constitution/" },
      { name: "Alternance Média", url: "https://alternance-media.com/actualite/haiti-konket-conteste-plusieurs-dispositions-du-decret-electoral-et-demande-leur-revision/" },
    ],
  },
  {
    id: "qh-cap-haitien-chambre-canada-2026-11-10",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T09:40:40-05:00",
    headline: {
      ht: "Okap : meri a siyen yon akò ak Chanm komès ayisyen Kanada",
      fr: "Cap-Haïtien : la mairie signe un accord avec la Chambre de commerce haïtienne du Canada",
    },
    teaser: {
      ht: "Pwotokòl la, yo te siyen mardi 10 novanm, pale de envestisman, touris ak antreprenarya, dapre Vant Bèf Info.",
      fr: "Le protocole, signé mardi 10 novembre, porte sur l'investissement, le tourisme et l'entrepreneuriat, selon Vant Bèf Info.",
    },
    brief: {
      ht: "Majistra Michel St-Croix ak prezidant Chanm komès ayisyen Kanada, Luckny Guerrier, te siyen mardi 10 novanm yon pwotokòl dakò, Vant Bèf Info ekri. Li vize fasilite envestisman, sipòte antrepriz epi ankouraje touris ak antreprenarya nan Okap.",
      fr: "Le maire Michel St-Croix et la présidente de la Chambre de commerce haïtienne du Canada, Luckny Guerrier, ont signé mardi 10 novembre un protocole d'accord, écrit Vant Bèf Info. Il vise à faciliter les investissements, soutenir les entreprises et promouvoir le tourisme et l'entrepreneuriat au Cap-Haïtien.",
    },
    body: {
      ht: "Meri Okap ak Chanm komès ayisyen Kanada siyen, mardi 10 novanm 2026, yon pwotokòl dakò, Vant Bèf Info ekri. Majistra Michel St-Croix ak prezidant Chanm nan, Luckny Guerrier, te siyen dokiman an. Biwo Fasilite Zafè yo (BFA) te patisipe nan seremoni an.\n\nDapre medya a, de enstitisyon yo vle devlope antreprenarya, touris, envestisman ak ranfòsman kapasite, epi akonpaye antrepriz lokal yo. Pwotokòl la prevwa yon mekanis pou kowòdone ak swiv pwojè komen yo. Nan kad sa a, BFA dwe bay de enstitisyon yo yon sipò teknik.\n\nLuckny Guerrier te souliye wòl dyaspora a nan devlopman ekonomik peyi a. Li di chanm nan vle pwoche antreprenè yo, fasilite echanj komèsyal epi mobilize resous ak konpetans dyaspora a. Majistra St-Croix salue inisyativ la, epi li di li ta vle patenarya a kontinye pi lwen pase manda Komisyon minisipal ki la kounye a.\n\nSe yon kad koperasyon yo siyen. Kont randi a pa detaye ni yon lis pwojè ki deja finanse, ni yon kalandriye, ni yon montan envestisman.",
      fr: "La mairie du Cap-Haïtien et la Chambre de commerce haïtienne du Canada ont signé, mardi 10 novembre 2026, un protocole d'accord, écrit Vant Bèf Info. Le maire Michel St-Croix et la présidente de la Chambre, Luckny Guerrier, ont signé le document. Le Bureau de facilitation des affaires (BFA) a pris part à la cérémonie.\n\nSelon le média, les deux institutions entendent développer l'entrepreneuriat, le tourisme, les investissements et le renforcement des capacités, et accompagner les entreprises locales. Le protocole prévoit un mécanisme de coordination et de suivi des projets communs. Dans ce cadre, le BFA doit apporter un appui technique aux deux institutions.\n\nLuckny Guerrier a souligné le rôle de la diaspora dans le développement économique du pays. Elle a dit que sa chambre veut rapprocher les entrepreneurs, faciliter les échanges commerciaux et mobiliser les ressources et les compétences de la diaspora. Le maire St-Croix a salué l'initiative, et a dit souhaiter que le partenariat se poursuive au-delà du mandat de l'actuelle Commission municipale.\n\nIl s'agit d'un cadre de coopération. Le compte rendu ne détaille ni une liste de projets déjà financés, ni un calendrier, ni un montant d'investissement.",
    },
    sources: ["Vant Bèf Info"],
    sourceLinks: [
      { name: "Vant Bèf Info", url: "https://vantbefinfo.com/cap-haitien-la-mairie-signe-un-accord-economique-avec-la-chambre-de-commerce-haitienne-du-canada/" },
    ],
  },
  {
    id: "qh-brh-taux-reference-2026-11-11",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T09:40:20-05:00",
    headline: {
      ht: "BRH : to referans lan nan 130.7986 goud pou yon dola, 11 novanm",
      fr: "BRH : le taux de référence à 130.7986 gourdes pour un dollar, le 11 novembre",
    },
    teaser: {
      ht: "Sit ofisyèl bank lan montre yon ogmantasyon 0,07% konpare ak lavèy la.",
      fr: "Le site officiel de la banque indique une hausse de 0,07% par rapport à la veille.",
    },
    brief: {
      ht: "Sou paj « Taux du jour » li a, ki make 11 novanm 2026, Bank Repiblik Ayiti fikse to referans dola a 130.7986 goud. Bank lan endike yon varyasyon 0,07% pa rapò ak jou anvan an.",
      fr: "Sur sa page « Taux du jour », datée du 11 novembre 2026, la Banque de la République d'Haïti fixe le taux de référence du dollar à 130.7986 gourdes. La banque indique une variation de 0,07% par rapport à la veille.",
    },
    body: {
      ht: "Bank Repiblik Ayiti pibliye, pou 11 novanm 2026, yon to referans 130.7986 goud pou yon dola ameriken, sou paj ofisyèl « Taux du jour » li a. Anba chif sa a, bank lan endike yon varyasyon 0,07% pa rapò ak jou anvan an, ak 0,10% pa rapò ak semèn anvan an.\n\nSou menm paj la, mache bankè a parèt ak 130.5643 goud nan acha ak 131.6786 goud nan vant. Yon lòt liy, « Taux de référence (10/11/25) », bay 130.6274 goud: se to referans menm dat ane pase a, 10 novanm 2025, dapre prezantasyon tablo a.\n\nNou pa jwenn, nan moman piblikasyon sa a, yon atik Le Quotidien 509 ki bay 130.75 kòm to lavèy la. Sit ofisyèl BRH a pa ekri chif 130.75. Se to 130.7986 ak varyasyon 0,07% bank lan pibliye 11 novanm nou kenbe isit la.",
      fr: "La Banque de la République d'Haïti publie, pour le 11 novembre 2026, un taux de référence de 130.7986 gourdes pour un dollar américain, sur sa page officielle « Taux du jour ». Sous ce chiffre, la banque indique une variation de 0,07% par rapport à la veille, et de 0,10% par rapport à la semaine précédente.\n\nSur la même page, le marché bancaire apparaît à 130.5643 gourdes à l'achat et 131.6786 gourdes à la vente. Une autre ligne, « Taux de référence (10/11/25) », donne 130.6274 gourdes : il s'agit du taux de référence à la même date l'an dernier, le 10 novembre 2025, d'après la présentation du tableau.\n\nNous n'avons pas trouvé, au moment de cette publication, d'article du Quotidien 509 indiquant 130.75 comme taux de la veille. Le site officiel de la BRH n'écrit pas le chiffre 130.75. Ce sont le taux de 130.7986 et la variation de 0,07% publiés par la banque le 11 novembre que nous retenons ici.",
    },
    sources: ["BRH"],
    sourceLinks: [
      { name: "BRH - Taux du jour", url: "https://www.brh.ht/taux-du-jour/" },
    ],
  },
  {
    id: "qh-haiti-omi-dix-conventions-2026-11-06",
    tier: "quick-hit",
    topic: "governance",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T07:33:10-05:00",
    headline: {
      ht: "Ayiti depoze Lond enstriman aderans li yo pou 10 konvansyon OMI",
      fr: "Haïti dépose à Londres les instruments d'adhésion à 10 conventions de l'OMI",
    },
    teaser: {
      ht: "Minis Raina Forbin remèt dokiman yo vandredi 6 novanm bay sekretè jeneral ajans maritim Nasyonzini an.",
      fr: "La ministre Raina Forbin a remis les documents vendredi 6 novembre au secrétaire général de l'agence maritime de l'ONU.",
    },
    brief: {
      ht: "Vandredi 6 novanm nan Lond, Raina Forbin depoze bò kote Òganizasyon maritim entènasyonal la enstriman aderans Ayiti pou dis konvansyon maritim, dapre yon kominike MAEC ke Le Nouvelliste reprann.",
      fr: "Vendredi 6 novembre à Londres, Raina Forbin a déposé auprès de l'Organisation maritime internationale les instruments d'adhésion d'Haïti à dix conventions maritimes, selon un communiqué du MAEC repris par Le Nouvelliste.",
    },
    body: {
      ht: "Minis Zafè etranje a, Raina Forbin, depoze vandredi 6 novanm, nan syèj Òganizasyon maritim entènasyonal la nan Lond, enstriman aderans Ayiti pou dis konvansyon nan domèn maritim, ministè Zafè etranje ak Kil yo anonse, Le Nouvelliste site. Li te akonpaye pa Anaïse Manuel, anbasadris Ayiti nan Wayòm Ini e reprezantan pèmanan bò kote OMI. Yo remèt dokiman yo bay sekretè jeneral òganizasyon an, Arsenio Antonio Dominguez Velasco.\n\nDapre kominike a, enstriman sa yo kouvri sitou sekirite navigasyon, prevansyon polisyon lanmè, pwoteksyon anviwònman, rechèch ak sovtaj nan lanmè, ansanm ak mekanis responsablite ak reparasyon. Ministè a di tou pwosesis la rive nan bout gras a travay teknik Sèvis maritim ak navigasyon Ayiti (SEMANAH).\n\nPandan echanj yo, minis la mande pou OMI ranfòse koperasyon teknik li ak Ayiti. Li te pale tou ak Caroline Neumann sou pwogram odit eta manm yo, pou egzaminen swivi rekòmandasyon yo ak akonpayman teknik ki posib, dapre Chanselri a.",
      fr: "La ministre des Affaires étrangères, Raina Forbin, a déposé vendredi 6 novembre, au siège de l'Organisation maritime internationale à Londres, les instruments d'adhésion d'Haïti à dix conventions du domaine maritime, a annoncé le ministère des Affaires étrangères et des Cultes, cité par Le Nouvelliste. Elle était accompagnée d'Anaïse Manuel, ambassadrice d'Haïti au Royaume-Uni et représentante permanente auprès de l'OMI. Les documents ont été remis au secrétaire général de l'organisation, Arsenio Antonio Dominguez Velasco.\n\nSelon le communiqué, ces instruments couvrent notamment la sécurité de la navigation, la prévention de la pollution marine, la protection de l'environnement, la recherche et le sauvetage en mer, ainsi que les mécanismes de responsabilité et d'indemnisation. Le ministère attribue aussi l'aboutissement du processus au travail technique du Service maritime et de navigation d'Haïti (SEMANAH).\n\nAu cours des échanges, la ministre a demandé un renforcement de la coopération technique de l'OMI avec Haïti. Elle s'est également entretenue avec Caroline Neumann au sujet du programme d'audit des États membres, pour examiner le suivi des recommandations et l'accompagnement technique possible, selon la chancellerie.",
    },
    sources: ["Le Nouvelliste"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273638/haiti-depose-les-instruments-dadhesion-a-dix-conventions-maritimes-internationales-aupres-de-lomi" },
    ],
  },
  {
    id: "qh-haiti-cop31-financement-climatique-2026-11-09",
    tier: "quick-hit",
    topic: "development",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T07:32:50-05:00",
    headline: {
      ht: "COP31 : Ayiti plede pou yon aksè pi senp nan finansman klimatik",
      fr: "COP31 : Haïti plaide pour un accès plus simple au financement climatique",
    },
    teaser: {
      ht: "Konferans lan fèt 9 rive 20 novanm nan Antalya, nan Tiki. Ministè Anviwònman an pibliye priyorite li yo 5 novanm.",
      fr: "La conférence se tient du 9 au 20 novembre à Antalya, en Turquie. Le ministère de l'Environnement a publié ses priorités le 5 novembre.",
    },
    brief: {
      ht: "Ayiti patisipe nan COP31, nan Antalya, 9 rive 20 novanm. Dapre yon kominike ministè Anviwònman an 5 novanm, ke Le Nouvelliste reprann, peyi a ap defann yon aksè ki pi gwo e ki pi senp nan finansman klimatik, sitou pou adaptasyon ak pèt ak prejidis.",
      fr: "Haïti participe à la COP31, à Antalya, du 9 au 20 novembre. Selon un communiqué du ministère de l'Environnement du 5 novembre, repris par Le Nouvelliste, le pays défendra un accès accru et simplifié au financement climatique, surtout pour l'adaptation et les pertes et préjudices.",
    },
    body: {
      ht: "Ayiti patisipe nan 31e Konferans pati yo sou chanjman klima (COP31), ki fèt 9 rive 20 novanm 2026 nan Antalya, nan Tiki, Le Nouvelliste ekri. Dapre yon kominike ministè Anviwònman an ki soti 5 novanm, peyi a ap defann « l'accroissement et la simplification de l'accès au financement climatique, particulièrement pour l'adaptation et les pertes et préjudices, la priorité aux instruments non générateurs de dette et le maintien de l'objectif de limitation du réchauffement à 1,5 degré Celsius ». Delegasyon an ap plede tou pou yo mobilize mwayen pou mete an pratik Kontribisyon nasyonal la (CDN 3.0) ak Plan nasyonal adaptasyon an.\n\nNan dokiman pozisyon peyi a, Ayiti di li reprezante sèlman 0,02 a 0,03% emisyon gaz lakòz efè tèmik nan lemonn. Premye minis Alix Didier Fils-Aimé estime « La résilience ne peut plus se limiter à notre capacité de répondre aux catastrophes naturelles ». Dapre li, li dwe pèmèt yo prevwa kriz yo, diminye depandans epi ranfòse sekirite ekonomik, enèji ak manje. Minis Anviwònman an, Valéry Fils-Aimé, ajoute peyi a ap defann tou senplifikasyon pwosedi aksè nan fon klimatik yo, ansanm ak transfere teknoloji.\n\nAn kote negosyasyon yo, Ayiti dwe òganize yon evènman sou finansman ak yon pwosperite Karayib ki pi rezistan. Yo prevwa tou peyi a siyen yon premye angajman politik mondyal pou pwoteje resif koray ki reziste chanjman klima. Negosyasyon yo kontinye jouk 20 novanm.",
      fr: "Haïti participe à la 31e Conférence des Parties sur les changements climatiques (COP31), qui se tient du 9 au 20 novembre 2026 à Antalya, en Turquie, écrit Le Nouvelliste. Selon un communiqué du ministère de l'Environnement publié le 5 novembre, le pays défendra « l'accroissement et la simplification de l'accès au financement climatique, particulièrement pour l'adaptation et les pertes et préjudices, la priorité aux instruments non générateurs de dette et le maintien de l'objectif de limitation du réchauffement à 1,5 degré Celsius ». La délégation plaidera aussi pour la mobilisation des moyens nécessaires à la mise en œuvre de la Contribution déterminée au niveau national (CDN 3.0) et du Plan national d'adaptation.\n\nDans son document de positionnement, Haïti indique qu'elle ne représente que 0,02 à 0,03% des émissions mondiales de gaz à effet de serre. Le Premier ministre, Alix Didier Fils-Aimé, estime que « La résilience ne peut plus se limiter à notre capacité de répondre aux catastrophes naturelles ». Selon lui, elle doit permettre d'anticiper les crises, de réduire les dépendances et de renforcer la sécurité économique, énergétique et alimentaire. Le ministre de l'Environnement, Valéry Fils-Aimé, ajoute que le pays défendra aussi la simplification des procédures d'accès aux fonds climatiques, ainsi que le transfert de technologies.\n\nEn marge des négociations, Haïti doit organiser un événement parallèle sur le financement et une prospérité plus résiliente de la Caraïbe. Il est aussi prévu que le pays signe le premier engagement politique mondial consacré à la protection des récifs coralliens résilients au changement climatique. Les négociations se poursuivent jusqu'au 20 novembre.",
    },
    sources: ["Le Nouvelliste"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273703/haiti-plaidera-pour-un-financement-climatique-accessible-a-la-cop31" },
    ],
  },
  {
    id: "qh-nord-est-caravane-mci-2026-11-09",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T07:32:30-05:00",
    headline: {
      ht: "Nòdès : ministè Komès lanse yon karavàn pou ede antrepriz yo fòmalize",
      fr: "Nord-Est : le ministère du Commerce lance une caravane pour formaliser les entreprises",
    },
    teaser: {
      ht: "Lansman lendi 9 novanm nan Fòlibète. Pwojè pilòt nasyonal la vize anviwon 5000 komèsan ak antreprenè.",
      fr: "Lancement lundi 9 novembre à Fort-Liberté. Le projet pilote national vise environ 5000 commerçants et entrepreneurs.",
    },
    brief: {
      ht: "MCI lanse lendi 9 novanm nan Fòlibète yon karavàn rejyonal pou fòmalize ak reviv komès nan Nòdès, Le Nouvelliste ekri. Inisyativ la fè pati yon pwojè pilòt nasyonal ki te kòmanse 16 oktòb, ak sipò finansye MPCE.",
      fr: "Le MCI a lancé lundi 9 novembre à Fort-Liberté une caravane régionale de formalisation et de revitalisation du commerce dans le Nord-Est, écrit Le Nouvelliste. L'initiative fait partie d'un projet pilote national ouvert le 16 octobre, avec l'appui financier du MPCE.",
    },
    body: {
      ht: "Ministè Komès ak Endistri (MCI) lanse lendi 9 novanm 2026, nan Fòlibète, aktivite Karavàn rejyonal fòmalizasyon ak revitalizasyon komès ak antreprenarya nan depatman Nòdès, Le Nouvelliste ekri. Inisyativ la fè pati yon pwojè pilòt nasyonal ki te kòmanse 16 oktòb, sou sipò Primati, ak èd finansye ministè Planifikasyon ak Koperasyon ekstèn (MPCE).\n\nYon ekip teknisyen ki soti nan biwo santral MCI vin pi pre komèsan ak antreprenè ki nan sektè enfòmèl la. Yo vle fasilite demach fòmalizasyon, esplike avantaj anrejistreman aktivite yo, epi ede moun yo jwenn Kat idantite pwofesyonèl (CIP). Jouk kounye a, pwogram yo te plis vire sou finansman, mwens sou akonpayman pwòch antrepriz enfòmèl yo, jounal la presize.\n\nOtorite yo vize akonpaye anviwon 5000 komèsan ak antreprenè, anviwon 500 pou chak depatman. Depwaman an kouvri dis depatman, nan twa gwo rejyon: Grand Nò (Nò, Nòdès, Nòdwès, Latibonit ak Sant), ak 2500 beneficiè; Grand Sid (Sid, Grandans, Sidès ak Nip), ak 2000; epi Lwès, ak 500. Pou Nòdès, entèvansyon yo kouvri sitou Trou-du-Nord, Fòlibète ak Wanament.\n\nPwojè pilòt la prevwa soti 16 oktòb rive 20 novanm 2026. Operasyon sansibilizasyon, fòmalizasyon ak delivrans kat yo dwe kontinye sou tè a jouk 20 novanm. Yon restitisyon nasyonal prevwa 25 novanm, devan MCI, MPCE, Primati ak patnè pwojè a, pou prezante kantite komèsan ki fòmalize, kat yo delivre, difikilte yo ak rekòmandasyon.",
      fr: "Le ministère du Commerce et de l'Industrie (MCI) a lancé lundi 9 novembre 2026, à Fort-Liberté, les activités de la Caravane régionale de formalisation et de revitalisation du commerce et de l'entrepreneuriat dans le département du Nord-Est, écrit Le Nouvelliste. L'initiative fait partie d'un projet pilote national ouvert le 16 octobre, sous l'égide de la Primature, avec l'appui financier du ministère de la Planification et de la Coopération externe (MPCE).\n\nUne équipe de techniciens venue du bureau central du MCI se rapproche des commerçants et entrepreneurs qui travaillent surtout dans le secteur informel. Elle vise à faciliter les démarches de formalisation, à expliquer les avantages de l'enregistrement des activités et à accompagner les bénéficiaires pour l'obtention de la Carte d'identité professionnelle (CIP). Jusqu'ici, les programmes étaient davantage tournés vers le financement, et moins vers l'accompagnement de proximité des entreprises informelles, précise le journal.\n\nLes autorités ambitionnent d'accompagner environ 5000 commerçants et entrepreneurs, à raison d'environ 500 bénéficiaires par département. Le déploiement couvre dix départements, regroupés en trois grandes régions : le grand Nord (Nord, Nord-Est, Nord-Ouest, Artibonite et Centre), avec 2500 bénéficiaires ; le grand Sud (Sud, Grand'Anse, Sud-Est et Nippes), avec 2000 ; et l'Ouest, avec 500. Pour le Nord-Est, les interventions couvrent notamment Trou-du-Nord, Fort-Liberté et Ouanaminthe.\n\nLe projet pilote est prévu du 16 octobre au 20 novembre 2026. Les opérations de sensibilisation, de formalisation et de délivrance des cartes doivent se poursuivre sur le terrain jusqu'au 20 novembre. Une restitution nationale est prévue le 25 novembre, en présence du MCI, du MPCE, de la Primature et des partenaires du projet, pour présenter le nombre de commerçants formalisés, les cartes délivrées, les difficultés rencontrées et les recommandations.",
    },
    sources: ["Le Nouvelliste"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273716/nord-est-le-ministere-du-commerce-lance-une-caravane-regionale-pour-accompagner-la-formalisation-des-entreprises" },
    ],
  },
  {
    id: "qh-montecristi-deux-dominicains-eaux-haiti-2026-11-10",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T01:51:00-05:00",
    headline: {
      ht: "De Dominiken ki soti Buen Hombre yo jwenn mouri ak bal nan dlo ayisyen, dapre Diario Libre",
      fr: "Deux Dominicains de Buen Hombre retrouvés morts par balles dans des eaux haïtiennes, selon Diario Libre",
    },
    teaser: {
      ht: "Jounal la, ki site yon moun li pa nonmen, pale de yon presime trafik sigarèt. Lapolis dominikèn di li ap mennen ankèt, san detay presize pou kounye a.",
      fr: "Le journal, qui cite une source non identifiée, parle d'un présumé trafic de cigarettes. La police dominicaine dit enquêter, sans informations précises pour l'instant.",
    },
    brief: {
      ht: "Diario Libre idantifye yo kòm Frandeli Andújar Reyes ak yon lòt nonm yo rele Concote. Li site yon enfòmatè ki pa nonmen pou vèsyon presime trafik sigarèt la. Pòtpawòl lapolis Diego Pesqueira di ankèt la ap kontinye.",
      fr: "Diario Libre identifie les victimes comme Frandeli Andújar Reyes et un autre homme connu sous le nom de Concote. Il s'appuie sur un informateur non nommé pour la version d'un présumé trafic de cigarettes. Le porte-parole de la police, Diego Pesqueira, dit que l'enquête continue.",
    },
    body: {
      ht: "De Dominiken ki soti nan kominote Buen Hombre, nan pwovens Montecristi, yo jwenn yo mouri, yo te pran bal, nan dlo teritwa ayisyen, Diario Libre ekri 10 novanm. Viktim yo idantifye kòm Frandeli Andújar Reyes ak yon lòt nonm yo konnen sèlman sou non Concote. Yo te siyale yo disparèt apre yo te kite Punta Rucia nan yon bato ki t ap vin Ayiti, dapre jounal la.\n\nDiario Libre apiye sou temwayaj yon moun ki lyen ak ankèt yo, li pa nonmen l. Dapre vèsyon sa a, de mesye yo t ap vwayaje ak yon twazyèm konpayon pou yon presime acha sigarèt kontrebann. Lè yo rive sou teritwa ayisyen, yo ta kidnape yo, moun ki ta eseye pran bato a ak motè yo. Enfòmatè a di atakan yo touye de mesye yo, jete kò yo nan dlo, e ke yon twazyèm pasaje, blese ak bal, rive chape tounen nan Repiblik Dominikèn. Toujou dapre vèsyon sa a, kèk pechè te ranmase kadav yo nan dlo toupre Ayiti epi mennen yo sou teritwa dominiken, kote yo antere yo lendi swa. Diario Libre presize yo t ap tann toujou yon enfòmasyon ofisyèl sou sikonstans lanmò yo.\n\nMenm jou a, pòtpawòl Lapolis nasyonal dominikèn, Diego Pesqueira, di envestigasyon yo ap kontinye e otorite yo poko gen enfòmasyon presize. « Dosye sa a ap devlope pou nou ka etabli si vre moun sa yo te touye sou teritwa ayisyen, epi transfere apre sa sou teritwa dominiken », li di, dapre yon lòt atik Diario Libre. Nan pawòl sa yo, lapolis pa konfime presime trafik sigarèt la, ni kidnaping lan, ni prezans yon twazyèm nonm ki blese.",
      fr: "Deux Dominicains originaires de Buen Hombre, dans la province de Montecristi, ont été retrouvés morts, atteints de balles, dans des eaux territoriales haïtiennes, écrit Diario Libre le 10 novembre. Les victimes ont été identifiées comme Frandeli Andújar Reyes et un autre homme connu seulement sous le nom de Concote. Ils avaient été signalés disparus après avoir quitté Punta Rucia à bord d'une embarcation à destination d'Haïti, selon le journal.\n\nDiario Libre s'appuie sur le témoignage d'une personne liée aux enquêtes, qu'il ne nomme pas. Selon cette version, les deux hommes voyageaient avec un troisième compagnon pour un présumé achat de cigarettes de contrebande. Arrivés en territoire haïtien, ils auraient été enlevés par des individus qui, toujours selon cette source, tentaient de s'emparer de l'embarcation et des moteurs hors-bord. L'informateur affirme que les assaillants ont tué les deux hommes et jeté leurs corps à l'eau, et qu'un troisième occupant, blessé par balle, a réussi à s'enfuir et à regagner la République dominicaine. Toujours selon cette version, des pêcheurs ont récupéré les cadavres dans des eaux proches d'Haïti et les ont transférés en territoire dominicain, où ils ont été enterrés lundi soir. Diario Libre précise qu'on attendait encore une information officielle sur les circonstances des morts.\n\nLe même jour, le porte-parole de la Police nationale dominicaine, Diego Pesqueira, a déclaré que les investigations continuaient et que les autorités n'avaient pas encore d'informations précises. « Cette affaire est en cours, pour établir si ces personnes ont bien été tuées en territoire haïtien, puis transférées en territoire dominicain », a-t-il indiqué, selon un autre article de Diario Libre. La police ne confirme pas, dans ces propos, le présumé trafic de cigarettes, ni l'enlèvement, ni la présence d'un troisième homme blessé.",
    },
    sources: ["Diario Libre", "Diario Libre (police)"],
    sourceLinks: [
      { name: "Diario Libre", url: "https://www.diariolibre.com/actualidad/sucesos/2026/11/10/mueren-dos-dominicanos-en-haiti-por-contrabando-de-cigarrillos/3716551" },
      { name: "Diario Libre (Pesqueira)", url: "https://www.diariolibre.com/actualidad/sucesos/2026/11/10/muertos-en-los-mina-y-monte-plata-por-hechos-violentos/3716630" },
    ],
  },

  {
    id: "ntk-croix-des-bouquets-operation-pnh-salvador-2026-11-10",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T16:11:50-05:00",
    headline: {
      ht: "Kwadèbouke : PNH ak sòlda salvadorien yo mennen yon operasyon madi maten, dapre Alternance Média",
      fr: "Croix-des-Bouquets : la PNH et des soldats salvadoriens mènent une opération mardi matin, selon Alternance Média",
    },
    teaser: {
      ht: "Pa t gen bilan nan moman rapò a. Pou kounye a, medya sa a se sèl sous nou site isit la.",
      fr: "Aucun bilan n'était disponible au moment du reportage. Le média est, pour l'heure, la seule source citée ici.",
    },
    brief: {
      ht: "Alternance Média ekri lapolis ak sòlda salvadorien yo te entèvni madi maten 10 novanm nan Kwadèbouke. Pa t gen bilan lè yo te ekri atik la.",
      fr: "Alternance Média écrit que la police et des soldats salvadoriens sont intervenus mardi matin 10 novembre à Croix-des-Bouquets. Aucun bilan n'était disponible à la rédaction de l'article.",
    },
    body: {
      ht: "Polis nasyonal Ayiti ak sòlda salvadorien yo mennen yon operasyon madi maten 10 novanm nan Kwadèbouke, dapre Alternance Média. Pa t gen bilan nan moman yo te ekri atik la, medya a presize. Pou kounye a, se sèl sous kont randi sa a.\n\nYon sivil redaksyon an te jwenn dekri entèvansyon an konsa: « Du jamais vu, du jamais entendu. » Se temwayaj yon sèl moun, yon sèl medya rapòte.\n\nDapre Alternance Média, operasyon an vin de jou apre yon entèvansyon dimanch 8 novanm nan Kwadèbouke, kote PNH ak fòs salvadorien yo te vize yon rezidans yo lyen ak Wilson Joseph, yo rele Lanmò San Jou. Rezilta operasyon dimanch la poko etabli nan lòt kont randi nou yo.",
      fr: "La Police nationale d'Haïti et des soldats salvadoriens ont mené une opération mardi matin 10 novembre à Croix-des-Bouquets, écrit Alternance Média. Aucun bilan n'était disponible au moment de la rédaction, précise le média, qui est pour l'heure la seule source de ce compte rendu.\n\nUn civil joint par la rédaction a décrit l'intervention en ces termes : « Du jamais vu, du jamais entendu. » Il s'agit du témoignage d'une seule personne, rapporté par un seul média.\n\nSelon Alternance Média, l'opération survient deux jours après une intervention menée dimanche 8 novembre à Croix-des-Bouquets par la PNH et des forces salvadoriennes contre une résidence liée à Wilson Joseph, dit Lanmò San Jou. Le résultat de cette opération de dimanche n'est pas établi dans nos autres comptes rendus.",
    },
    sources: ["Alternance Média"],
    sourceLinks: [
      { name: "Alternance Média", url: "https://alternance-media.com/police-justice/croix-des-bouquets-la-pnh-et-les-soldats-salvadoriens-menent-une-operation-denvergure-ce-mardi-10-novembre/" },
    ],
  },
    {
    id: "ntk-martissant-drones-operation-2026-11-10",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T01:52:00-05:00",
    isFollowUp: true,
    headline: {
      ht: "Matisan : plis pase yon dizèn blende; Andrésol konfime yo te vize Matisan 2 ak Sent Bènadèt",
      fr: "Martissant : plus d'une dizaine de blindés ; Andrésol confirme que Martissant 2 et Sainte-Bernadette ont été visés",
    },
    teaser: {
      ht: "Sikilasyon an pa t ka fèt. Plizyè santèn rezidan ki te dwe ale Kafou te rasanble nan Chanmas, Le Nouvelliste ekri.",
      fr: "La circulation était impraticable. Des centaines de résidents qui devaient se rendre à Carrefour se sont massés au Champ de Mars, écrit Le Nouvelliste.",
    },
    brief: {
      ht: "Le Nouvelliste, nan yon atik ki soti mardi aswè 10 novanm, di PNH, FAd'H ak Task Force te mennen yon operasyon nan Matisan. Minis defans Mario Andrésol konfime yo te vize Matisan 2 ak sektè legliz Sent Bènadèt, pami lòt kote. Pa gen bilan ofisyèl.",
      fr: "Le Nouvelliste, dans un article paru mardi soir 10 novembre, écrit que la PNH, les FAd'H et la Task Force ont mené une opération à Martissant. Le ministre de la Défense, Mario Andrésol, confirme que Martissant 2 et le secteur de l'église Sainte-Bernadette, entre autres, ont été visés. Pas de bilan officiel.",
    },
    body: {
      ht: "Le Nouvelliste, nan yon atik ki soti mardi aswè 10 novanm, ekri Polis nasyonal Ayiti, Fòs lame Ayiti ak Task Force te mennen yon operasyon nan Matisan. Jounal la di yo te mobilize plis pase yon dizèn blende. Minis defans lan, Mario Andrésol, ke Le Nouvelliste te jwenn, konfime enfòmasyon an. « Matisan 2, sektè legliz Sent Bènadèt, pami lòt kote, yo te vize yo », li di.\n\nPandan entèvansyon an, sikilasyon sou wout yo pa t ka fèt, jounal la kontinye. Plizyè santèn rezidan ki te dwe ale nan Kafou te rasanble nan Chanmas, jouk sitiyasyon an kalme. Le Nouvelliste aprann operasyon nan Matisan yo te lakoz panik nan Kafou, komin vwazin nan. Pifò lekòl yo te renvwaye elèv yo. Gwoup ame nan komin sa a, ki pa gen reprezantan gouvènman depi plizyè ane, dapre jounal la, te mete barikad pou ralanti yon avans fòs yo ta ka fè.\n\nPi bonè mardi a, vers 12:28, Radiographie te pale de yon operasyon k ap fèt nan Matisan, nan 3e sikonskripsyon Pòtoprens. Medya a te ekri inite PNH yo te gen sipò Task Force, ak drone kamikaz, e yo te remake ekipman lapolis jouk Matisan 2A. Kont randi sa a, yo te ekri l pandan operasyon an t ap fèt, pa t bay ni bilan ni dire. Le Nouvelliste, mardi aswè, pa pibliye bilan non plis.",
      fr: "Le Nouvelliste, dans un article paru mardi soir 10 novembre, écrit que la Police nationale d'Haïti, les Forces armées d'Haïti et la Task Force ont mené une opération à Martissant. Plus d'une dizaine de blindés ont été mobilisés, selon le journal. Joint par Le Nouvelliste, le ministre de la Défense, Mario Andrésol, a confirmé l'information. « Martissant 2, le secteur de l'église Sainte-Bernadette, entre autres, ont été visés », a-t-il indiqué.\n\nAu cours de l'intervention, la circulation routière était impraticable, poursuit le journal. Des centaines de résidents qui devaient se rendre à Carrefour se sont massés au Champ de Mars, le temps que la situation se calme. Le Nouvelliste a appris que les opérations à Martissant ont provoqué la panique dans la commune voisine de Carrefour. La plupart des écoles y ont renvoyé les élèves. Des groupes armés de cette commune, qui n'a plus de représentants du gouvernement depuis plusieurs années, selon le journal, ont érigé des barricades pour ralentir une éventuelle avancée des forces de l'ordre.\n\nPlus tôt mardi, vers 12 h 28, Radiographie situait une opération en cours à Martissant, dans la 3e circonscription de Port-au-Prince. Le média écrivait que les unités de la PNH étaient appuyées par la Task Force, avec des drones kamikazes, et que des engins de la police avaient été remarqués jusqu'à Martissant 2A. Ce compte rendu, rédigé pendant l'opération, ne donnait ni bilan ni durée. Le Nouvelliste, mardi soir, n'en publie pas non plus.",
    },
    sources: ["Le Nouvelliste", "Radiographie"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273774/operations-des-forces-de-lordre-a-martissant" },
      { name: "Radiographie", url: "https://radiographieht.com/operation-policiere-a-martissant/" },
    ],
  },
  {
    id: "qh-andresol-gressier-anacaona-2026-11-10",
    tier: "quick-hit",
    topic: "security",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T16:11:30-05:00",
    headline: {
      ht: "Andrésol nan yon vizit evalyasyon nan Gresye, ak nan baz Anacaona Leyogàn",
      fr: "Andrésol en visite d'évaluation à Gressier, et à la base Anacaona de Léogâne",
    },
    teaser: {
      ht: "Minis Defans la fè pwen sou operasyon FAd'H yo, dapre Le Nouvelliste.",
      fr: "Le ministre de la Défense a fait le point sur les opérations des FAd'H, selon Le Nouvelliste.",
    },
    brief: {
      ht: "Mario Andrésol te ale madi nan Gresye pou evalye aksyon Fòs lame Ayiti yo nan yon zòn gang yo menase, Le Nouvelliste ekri 10 novanm.",
      fr: "Mario Andrésol s'est rendu mardi à Gressier pour évaluer les actions des Forces armées d'Haïti dans une zone menacée par des gangs, écrit Le Nouvelliste le 10 novembre.",
    },
    body: {
      ht: "Minis Defans la, Mario Andrésol, te ale madi nan Gresye pou evalye sitiyasyon operasyonèl la epi fè pwen sou aksyon Fòs lame Ayiti yo nan zòn nan, kote gang ame yo menase, dapre Le Nouvelliste 10 novanm.\n\nDapre FAd'H, jounal la site, vizit sa a fè pati suivi operasyon sekirizasyon k ap fèt yo. Li pèmèt minis la tou pran nouvèl sou avansman travay reparasyon ak remèt baz militè Anacaona kanpe, nan Leyogàn. Kont randi a kout, li pa detaye ni kalandriye travay sa yo ni yon bilan operasyon nan zòn nan.",
      fr: "Le ministre de la Défense, Mario Andrésol, s'est rendu mardi à Gressier pour évaluer la situation opérationnelle et faire le point sur les actions des Forces armées d'Haïti dans la zone, menacée par des gangs armés, écrit Le Nouvelliste le 10 novembre.\n\nSelon les FAd'H, citées par le journal, cette visite s'inscrit dans le suivi des opérations de sécurisation en cours. Elle a aussi permis au ministre de s'informer de l'état d'avancement des travaux de réparation et de remise en état de la base militaire Anacaona, à Léogâne. Le compte rendu, court, ne détaille ni le calendrier de ces travaux ni un bilan des opérations dans la zone.",
    },
    sources: ["Le Nouvelliste"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://www.lenouvelliste.com/article/273745/securite-mario-andresol-en-visite-devaluation-a-gressier" },
    ],
  },
  {
    id: "ntk-hopital-fontaine-cite-soleil-2026-11-10",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T16:11:20-05:00",
    headline: {
      ht: "Site Solèy : lopital Fontaine mande pou yo pwoteje l pandan operasyon yo",
      fr: "Cité Soleil : l'hôpital Fontaine demande à être protégé pendant les opérations",
    },
    teaser: {
      ht: "Direktè li a, José Ulysse, di frap drone yo fè bilding lan tranble, dapre NAGO.",
      fr: "Son directeur, José Ulysse, dit que des frappes de drones ont fait trembler le bâtiment, selon NAGO.",
    },
    brief: {
      ht: "José Ulysse, direktè jeneral lopital Fontaine, mande FRG, PNH ak FAd'H pou yo pwoteje etablisman an pandan operasyon yo nan Site Solèy, NAGO ekri 10 novanm.",
      fr: "José Ulysse, directeur général de l'hôpital Fontaine, a demandé à la FRG, à la PNH et aux FAd'H de protéger l'établissement pendant les opérations à Cité Soleil, écrit NAGO le 10 novembre.",
    },
    body: {
      ht: "Administrasyon lopital Fontaine, nan Site Solèy, lans yon apèl bay responsab Fòs represyon gang yo (FRG), Polis nasyonal Ayiti ak Fòs lame Ayiti, dapre NAGO 10 novanm. Direktè jeneral la, José Ulysse, mande pou yo pwoteje etablisman an pandan operasyon sekirite nan zòn nan. Li raple li akeyi fanm ansent, timoun ak moun aje ki bezwen swen.\n\nUlysse di otorite lapolis ak entènasyonal yo lopital la vilnerab devan operasyon sa yo. Li mansyone resan bonbadman drone Task Force te fè yo te lakoz sekous yo te santi andedan bilding lan, dapre NAGO. Li mande pou yo pran mezi pou pwoteje enstalasyon sante yo epi evite operasyon yo anpeche lopital la fonksyone.\n\nPou kounye a, NAGO se sèl sous apèl sa a. Kont randi a pa di si fòs yo solisite yo reponn.",
      fr: "L'administration de l'hôpital Fontaine, à Cité Soleil, a lancé un appel aux responsables de la Force de répression des gangs (FRG), à la Police nationale d'Haïti et aux Forces armées d'Haïti, écrit NAGO le 10 novembre. Le directeur général, José Ulysse, demande que l'établissement soit protégé pendant les opérations de sécurité dans la zone. Il rappelle qu'il accueille des femmes enceintes, des enfants et des personnes âgées qui ont besoin de soins.\n\nUlysse a dit aux autorités policières et internationales que l'hôpital est vulnérable face à ces opérations. Il a mentionné que de récents bombardements par drones menés par la Task Force avaient provoqué des secousses ressenties à l'intérieur du bâtiment, selon NAGO. Il demande que des dispositions soient prises pour protéger les installations sanitaires et éviter que les opérations n'empêchent l'hôpital de fonctionner.\n\nNAGO est, pour l'heure, la seule source de cet appel. Le compte rendu ne dit pas si les forces sollicitées ont répondu.",
    },
    sources: ["NAGO"],
    sourceLinks: [
      { name: "NAGO", url: "https://news.nago.tv/l-hopital-fontaine-de-cite-soleil-demande-la-protection-des-forces-ant" },
      { name: "NAGO - Flash Info 15 h", url: "https://nago.tv/flash-info/2026-11-10-15" },
    ],
  },
  {
    id: "qh-kenya-mission-haiti-mexico-2026-11-10",
    tier: "quick-hit",
    topic: "politics",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T16:11:00-05:00",
    headline: {
      ht: "Kenya transfere misyon diplomatik li an Ayiti pou Meksiko, dapre Capital FM",
      fr: "Le Kenya transfère sa mission diplomatique d'Haïti à Mexico, selon Capital FM",
    },
    teaser: {
      ht: "Ministè zafè etranje Kenya a di transfe a deja fèt.",
      fr: "Le ministère kényan des Affaires étrangères dit que le transfert est déjà effectif.",
    },
    brief: {
      ht: "Nan yon deklarasyon 10 novanm, sekretè prensipal Korir Sing'oei di misyon Pòtoprens lan deja deplase pou Meksiko, Capital FM rapòte.",
      fr: "Dans une déclaration datée du 10 novembre, le secrétaire principal Korir Sing'oei indique que la mission de Port-au-Prince a déjà été relocalisée à Mexico, rapporte Capital FM.",
    },
    body: {
      ht: "Kenya transfere misyon diplomatik li an Ayiti pou Meksiko, nan yon reòganizasyon pi laj rezo diplomatik li, Capital FM rapòte 10 novanm. Ministè zafè etranje ak dyaspora a di transfe misyon Pòtoprens lan deja fèt.\n\nNan yon deklarasyon ki gen dat 10 novanm, sekretè prensipal zafè etranje a, Korir Sing'oei, prezante egzèsis la kòm yon rasyonalizasyon gradyèl prezans diplomatik Kenya, devan presyon bidjè ak priyorite k ap chanje. Kont randi a pa bay yon rezon ki pou misyon Ayiti a sèlman, ni sò egzak pèsonèl ki sou plas la.\n\nCapital FM mete transfe sa a pami lòt desizyon ki deja pran oswa anonse: deplase misyon Kenya nan Lavàn pou Kingston, ouvèti nouvo misyon nan Bakou ak Brazavil, ak yon posib fèmen anbasad Bern, kote zafè Swis ta pase nan High Commission Lond, pandan prezans Jenèv la rete.",
      fr: "Le Kenya a transféré sa mission diplomatique en Haïti vers Mexico, dans le cadre d'une réorganisation plus large de son réseau diplomatique, rapporte Capital FM le 10 novembre. Le ministère des Affaires étrangères et de la Diaspora indique que le transfert de la mission de Port-au-Prince est déjà effectif.\n\nDans une déclaration datée du 10 novembre, le secrétaire principal aux Affaires étrangères, Korir Sing'oei, présente l'exercice comme une rationalisation progressive de la présence diplomatique kényane, face à des pressions budgétaires et à des priorités qui changent. Le compte rendu ne donne pas de motif propre à la seule mission d'Haïti, ni le sort exact du personnel sur place.\n\nCapital FM situe ce transfert parmi d'autres décisions déjà prises ou annoncées : le déplacement de la mission kényane à La Havane vers Kingston, l'ouverture de nouvelles missions à Bakou et à Brazzaville, et la fermeture envisagée de l'ambassade à Berne, les affaires suisses devant passer par la High Commission à Londres, avec un maintien de la présence à Genève.",
    },
    sources: ["Capital FM"],
    sourceLinks: [
      { name: "Capital FM", url: "https://capitalfm.africa/kenya-relocates-haiti-mission-to-mexico-city-in-diplomatic-shake-up/" },
    ],
  },
  {
    id: "qh-artisanat-en-fete-el-rancho-2026-12-06",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T16:10:40-05:00",
    headline: {
      ht: "Artisanat en fête : 20e edisyon 6 ak 7 desanm nan El Rancho, yo pral rekonpanse twa atizan",
      fr: "Artisanat en fête : 20e édition les 6 et 7 décembre à El Rancho, trois artisans seront récompensés",
    },
    teaser: {
      ht: "Pa gen enskripsyon lib ane sa a, Max Chauvet anonse. Òganizatè yo pral fè yon seleksyon.",
      fr: "Plus d'inscription libre cette année, annonce Max Chauvet. Les organisateurs feront une sélection.",
    },
    brief: {
      ht: "20e edisyon Artisanat en fête ap fèt samdi 6 ak dimanch 7 desanm 2026 nan El Rancho Convention Center, Max Chauvet anonse 10 novanm sou Magik9, dapre Le Nouvelliste.",
      fr: "La 20e édition d'Artisanat en fête se tiendra les samedi 6 et dimanche 7 décembre 2026 au El Rancho Convention Center, a annoncé Max Chauvet le 10 novembre sur Magik9, selon Le Nouvelliste.",
    },
    body: {
      ht: "20e edisyon Artisanat en fête ap fèt samdi 6 ak dimanch 7 desanm 2026 nan El Rancho Convention Center, Max Chauvet, direktè jeneral Nouvelliste, te anonse madi 10 novanm nan matinal Magik9 (Panel Magik), dapre Le Nouvelliste.\n\nDapre mesye Chauvet, pi gwo chanjman ane sa a se sou seleksyon ekspozan yo. « Pa pral gen enskripsyon tankou nan edisyon anvan yo. Òganizatè yo pral fè yon seleksyon nan diferan branch atizana. Se sou kalite yo pral mete aksan », li te eksplike, dapre jounal la. Desizyon sa a vize tou respekte espas ki disponib, ki limite.\n\nNan yon dezyèm atik menm jou a, Le Nouvelliste ekri Artisanat en fête, an kolaborasyon ak Chanm mestye ak atizana Ayiti (CMAH), pral rekonpanse twa atizan pou kalite zèv yo. Mesye Chauvet di rekonpans sa a p ap senbolik sèlman: gayan yo pral gen yon akonpayman pandan tout ane a, epi nan pwochèn edisyon an, yo pral mete yo devan pou prezante nouvo koleksyon ki soti nan kolaborasyon sa a. Non atizan yo konsène yo pa t pibliye nan kont randi sa yo.",
      fr: "La 20e édition d'Artisanat en fête se tiendra les samedi 6 et dimanche 7 décembre 2026 au El Rancho Convention Center, a annoncé Max Chauvet, directeur général du Nouvelliste, mardi 10 novembre à la matinale de Magik9 (Panel Magik), rapporte Le Nouvelliste.\n\nSelon M. Chauvet, le principal changement cette année porte sur la sélection des exposants. « Il n'y aura pas d'inscription comme les éditions précédentes. Les organisateurs feront une sélection dans différentes branches de l'artisanat. En ce sens, l'accent sera mis sur la qualité », a-t-il expliqué, d'après le journal. Cette décision vise notamment à tenir compte de l'espace disponible, qui est limité.\n\nDans un second article du même jour, Le Nouvelliste écrit qu'Artisanat en fête, en collaboration avec la Chambre de métiers et de l'artisanat d'Haïti (CMAH), récompensera trois artisans pour la qualité de leurs œuvres. M. Chauvet a indiqué que cette récompense ne sera pas seulement symbolique : les gagnants bénéficieront d'un accompagnement sur toute l'année et, à la prochaine édition, ils seront mis en avant pour présenter les nouvelles collections nées de cette collaboration. Les noms des artisans concernés n'étaient pas publiés dans ces comptes rendus.",
    },
    sources: ["Le Nouvelliste"],
    sourceLinks: [
      { name: "Le Nouvelliste - trois artisans récompensés", url: "https://www.lenouvelliste.com/article/273737/artisanat-en-fete-trois-artisans-seront-recompenses-pour-la-qualite-de-leurs-oeuvres" },
      { name: "Le Nouvelliste - dates à El Rancho", url: "https://lenouvelliste.com/article/273738/artisanat-en-fete-la-20e-edition-annoncee-pour-les-6-et-7-decembre-a-el-rancho" },
    ],
  },
  {
    id: "qh-jacmel-ateco-femmes-construction-2026-11-09",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T16:10:10-05:00",
    headline: {
      ht: "Jakmèl : Frans apui yon fòmasyon fanm nan mestye konstriksyon",
      fr: "Jacmel : la France appuie une formation de femmes aux métiers de la construction",
    },
    teaser: {
      ht: "35 moun fòme, 65% ladan yo se fanm, atravè ATECO ak Fonds Équipe France, dapre anbasad ke Le Nouvelliste reprann.",
      fr: "35 personnes formées, dont 65% de femmes, via ATECO et le Fonds Équipe France, selon l'ambassade reprise par Le Nouvelliste.",
    },
    brief: {
      ht: "Nan Jakmèl, Asosyasyon teknisyen pou konstriksyon te mennen yon pwojè anbasad Frans finanse, Le Nouvelliste ekri 9 novanm.",
      fr: "À Jacmel, l'Association des techniciens pour la construction a mené un projet financé par l'ambassade de France, écrit Le Nouvelliste le 9 novembre.",
    },
    body: {
      ht: "Nan Jakmèl, Asosyasyon teknisyen pou konstriksyon (ATECO) mete kanpe, ak sipò finansye anbasad Frans atravè Fonds Équipe France (FEF), yon pwojè pou fasilite aksè fanm nan mestye konstriksyon, anbasad la fè konnen, Le Nouvelliste rapòte 9 novanm.\n\nTrant-senk moun, 65% ladan yo se fanm, te jwenn fòmasyon teknik pou ede yo jwenn travay ak yon otonomi ekonomik nan yon sektè gason te domine lontan, dapre menm sous la. Kont randi a kout, li pa detaye mestye yo anseye yo, ni dat yon posib seremoni, ni montan sipò a.",
      fr: "À Jacmel, l'Association des techniciens pour la construction (ATECO) a mis en œuvre, avec l'appui financier de l'ambassade de France via le Fonds Équipe France (FEF), un projet visant à faciliter l'accès des femmes aux métiers de la construction, a informé l'ambassade, rapporte Le Nouvelliste le 9 novembre.\n\nTrente-cinq personnes, dont 65% de femmes, ont bénéficié de formations techniques destinées à favoriser leur insertion professionnelle et leur autonomie économique dans un secteur longtemps dominé par les hommes, selon la même source. Le compte rendu, court, ne détaille pas les métiers enseignés, ni la date d'une éventuelle cérémonie, ni le montant de l'appui.",
    },
    sources: ["Le Nouvelliste"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273726/jacmel-la-france-appuie-la-formation-de-femmes-aux-metiers-de-la-construction" },
    ],
  },

    {
    id: "ntk-mansion-lanmo-san-jou-2026-11-10",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T09:41:20-05:00",
    isFollowUp: true,
    headline: {
      ht: "Ofansiv salvadorien an Ayiti : AP pale de yon paryaj politik, BBC pa ka verifye videyo a",
      fr: "Offensive salvadorienne en Haïti : l'AP parle d'un pari politique, la BBC ne peut pas vérifier la vidéo",
    },
    teaser: {
      ht: "AP ekri San Salvador te voye 2500 sòlda ak ti transparans ni sipèvizyon. BBC di li pa t ka verifye videyo a, ni ke pwopriyete a se katye jeneral gang lan.",
      fr: "L'AP écrit que San Salvador a envoyé 2500 soldats avec peu de transparence ni de contrôle. La BBC dit n'avoir pas pu vérifier la vidéo, ni que la propriété soit le quartier général du gang.",
    },
    brief: {
      ht: "Nan yon analiz 11 novanm, Associated Press dekri ofansiv Nayib Bukele ann Ayiti kòm yon paryaj politik anvan eleksyon fevriye nan Salvador, ak « little transparency or oversight ». BBC ekri li pa t ka verifye videyo prezidan an pibliye, ni ke kay la se katye jeneral 400 Mawozo.",
      fr: "Dans une analyse du 11 novembre, Associated Press décrit l'offensive de Nayib Bukele en Haïti comme un pari politique avant les élections de février au Salvador, menée avec « little transparency or oversight ». La BBC écrit qu'elle n'a pas pu vérifier la vidéo publiée par le président, ni que la propriété soit le quartier général de 400 Mawozo.",
    },
    body: {
      ht: "Associated Press, nan yon analiz Megan Janetsky pibliye 11 novanm, dekri ofansiv militè Salvador ann Ayiti kòm yon paryaj politik ki riske anpil, antoure eleksyon prezidansyèl fevriye nan peyi Salvador. Ajans lan ekri, depi kat teknisyen ayewonotik salvadorien yo disparèt nan mitan oktòb, gouvènman an te voye 2500 sòlda ann Ayiti « with little transparency or oversight », sètadi ak ti transparans ni sipèvizyon. Roberto Dubon, yon stratejist kominikasyon politik salvadorien, di AP se « yon kanpay elektoral pou fè pwomosyon Nayib Bukele » epi prezante l « tankou yon superhero ». Li ajoute prezidan an ap itilize Ayiti kòm yon tè pou teste politik li yo sou nivo entènasyonal.\n\nBBC, bò pa l, ekri li pa t ka verifye videyo Bukele pibliye sou X, ni si pwopriyete yo tire a se vre katye jeneral 400 Mawozo. Prezidan an te anonse madi 10 novanm, an kreyòl, fòs yo te « detwi kay Lanmò San Jou ak katye jeneral gang 400 Mawozo ». Li te di pifò moun yo te kouri san yo pa menm eseye goumen. Videyo a montre elikoptè k ap tire sou yon gwo konplèks, ak plizyè douzèn moun k ap kouri, dapre BBC. Premye minis Alix Didier Fils-Aimé te remèsye lendi, sou X, « angajman fòs salvadorien yo nan batay kont gang yo », epi li te pibliye yon imaj ki soti nan menm videyo a, BBC presize.\n\nMenm lendi a, AP rapòte sekretè deta ameriken Marco Rubio te pran distans, li di Etazini « not actively involved » nan ofansiv salvadorien an, epi li te bay sipò pou Fòs represyon gang yo (GSF) Nasyonzini ap soutni, kote Salvador pa fè pati. « There is no plan B », li te di. Amnesty International te mande menm jou a de gouvènman yo pibliye akò ki otorize fòs yo antre ann Ayiti, epi respekte dwa entènasyonal, AP ekri.\n\nAnvan sa, Al Jazeera, ki te reprann AFP, AP ak Reuters, te mete operasyon an dimanch epi pale de 20 moun mouri. Ni otorite ayisyen yo ni otorite salvadorien yo pa t pibliye yon bilan ofisyèl, Infobae te presize. Miami Herald te di Wilson Joseph, yo rele Lanmò San Jou, pa t sou plas la. Haitian Times, 10 novanm, pa t ka verifye si pwopriyete a te detwi oswa yo te vize l sèlman.",
      fr: "Associated Press, dans une analyse de Megan Janetsky publiée le 11 novembre, décrit l'offensive militaire du Salvador en Haïti comme un pari politique à haut risque, à l'approche de l'élection présidentielle de février au Salvador. L'agence écrit que, depuis la disparition de quatre techniciens aéronautiques salvadoriens à la mi-octobre, le gouvernement a envoyé 2500 soldats en Haïti « with little transparency or oversight », c'est-à-dire avec peu de transparence ni de contrôle. Roberto Dubon, stratège en communication politique salvadorien, dit à l'AP qu'il s'agit d'« une campagne électorale pour promouvoir Nayib Bukele » et le présenter « comme un superhéros ». Il ajoute que le président se sert d'Haïti comme d'un terrain d'essai pour appliquer ses politiques à l'échelle internationale.\n\nLa BBC, de son côté, écrit qu'elle n'a pas pu vérifier la vidéo publiée par Bukele sur X, ni confirmer que la propriété visée soit bien le quartier général de 400 Mawozo. Le président avait annoncé mardi 10 novembre, en créole, que ses forces avaient « détruit la maison de Lanmò San Jou et le quartier général du gang 400 Mawozo ». Il a dit que la plupart des occupants avaient fui sans même essayer de se battre. La vidéo montre des hélicoptères tirant sur un vaste complexe, et des dizaines de personnes qui s'enfuient, selon la BBC. Le Premier ministre Alix Didier Fils-Aimé a remercié lundi, sur X, « l'engagement des forces salvadoriennes dans la lutte contre les gangs », et a publié une image tirée de la même vidéo, précise la BBC.\n\nLe même lundi, l'AP rapporte que le secrétaire d'État américain Marco Rubio a pris ses distances, en disant que les États-Unis n'étaient « not actively involved » dans l'offensive salvadorienne, et qu'il apportait son soutien à la Force de répression des gangs (GSF) adossée à l'ONU, dont le Salvador ne fait pas partie. « There is no plan B », a-t-il dit. Amnesty International a demandé le même jour aux deux gouvernements de publier l'accord autorisant l'entrée des forces en Haïti, et de respecter le droit international, écrit l'AP.\n\nPlus tôt, Al Jazeera, qui reprenait l'AFP, l'AP et Reuters, situait l'opération dimanche et parlait de 20 morts. Ni les autorités haïtiennes ni les autorités salvadoriennes n'avaient publié de bilan officiel, précisait aussi Infobae. Le Miami Herald indiquait que Wilson Joseph, dit Lanmò San Jou, n'était pas sur place. Haitian Times, le 10 novembre, n'avait pas pu vérifier si la propriété avait été détruite ou seulement visée.",
    },
    sources: ["Associated Press", "BBC", "Al Jazeera", "Infobae", "Haitian Times"],
    sourceLinks: [
      { name: "Associated Press", url: "https://apnews.com/article/nayib-bukele-el-salvador-haiti-elections-war-on-gangs-un-rubio-democracy-5c8a5e284835778c31c9ff78c140afcd" },
      { name: "BBC", url: "https://www.bbc.com/news/articles/cmvg2xdwnwezo" },
      { name: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/11/10/salvadoran-troops-target-haitian-gang-leaving-20-dead" },
      { name: "Infobae", url: "https://www.infobae.com/el-salvador/2026/11/10/bukele-afirma-que-las-fuerzas-salvadorenas-destruyeron-el-cuartel-de-la-banda-400-mawozo-en-haiti/" },
      { name: "Haitian Times", url: "https://haitiantimes.com/2026/11/10/mansion-linked-haiti-gang-leader-reportedly-destroyed/" },
    ],
  },
  {
    id: "ntk-steven-benoit-senat-miami-2026-11-09",
    tier: "need-to-know",
    topic: "justice",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:52:50-05:00",
    headline: {
      ht: "Steven Benoit vize yon chèz senatè nan Lwès; kèk mesaj Miami evoke kontak presime",
      fr: "Steven Benoit vise un siège de sénateur de l'Ouest ; des messages de Miami évoquent des contacts présumés",
    },
    teaser: {
      ht: "Dapre NAGO ak Haiti24, yon echanj 22 jen 2021 yo atribiye a Arcangel Pretel Ortiz ta site ansyen senatè a.",
      fr: "Selon NAGO et Haiti24, un échange du 22 juin 2021 attribué à Arcangel Pretel Ortiz mentionnerait l'ancien sénateur.",
    },
    brief: {
      ht: "NAGO rapòte 9 novanm ansyen senatè Steven Benoit di li konte prezante ankò nan Lwès. Haiti24 ak NAGO relè mesaj yo prezante nan tribinal federal Miami, ki gen dat 22 jen 2021, ki ta pale de kontak presime. Nou pa trete akizasyon sa yo kòm reyalite ki fin etabli.",
      fr: "NAGO rapporte le 9 novembre que l'ancien sénateur Steven Benoit a indiqué qu'il compte se représenter dans l'Ouest. Haiti24 et NAGO relaient des messages présentés au tribunal fédéral de Miami, datés du 22 juin 2021, qui feraient état de contacts présumés. Ces allégations ne sont pas établies ici comme des faits.",
    },
    body: {
      ht: "Ansyen senatè Steven Benoit di li konte prezante ankò pou yon chèz nan depatman Lwès, dapre NAGO 9 novanm. Dapre medya a, li di li vle kontinye batay li kont koripsyon, enpinite ak inegalite sosyal.\n\nAn menm tan, NAGO ak Haiti24 relè mesaj yo prezante nan tribinal federal Miami nan pwosè asasina Jovenel Moïse. Dapre kont randi sa yo, yon echanj ki gen dat 22 jen 2021, yo atribiye a Arcangel Pretel Ortiz, ta pale de Benoit. Ortiz ta di yon moun yo idantifye sou psedonim « Colonel Mike » li te konte transmèt yon mesaj yo prezante kòm mesaj Benoit pou ansyen jij Windelle Coq Thélot.\n\nPsedonim « Colonel Mike » asosye ak Germán Alejandro Rivera García, ansyen militè kolonbyen ki te temwaye nan Miami, dapre toude medya yo. Echanj sa yo ta fèt pandan kèk masenè kolonbyen t ap prepare atak sou rezidans Jovenel Moïse, yo te asasinen 7 jiyè 2021 nan Pelerin 5.\n\nSe eleman yo prezante nan tribinal epi laprès reprann. Yo dekri kontak presime. Yo pa etabli pou kont yo yon wòl Benoit nan asasina a. De atik nou konsilte yo pa rapòte okenn demantiman li.",
      fr: "L'ancien sénateur Steven Benoit a indiqué qu'il compte se représenter pour un siège dans le département de l'Ouest, rapporte NAGO le 9 novembre. Selon le média, il affirme vouloir poursuivre son combat contre la corruption, l'impunité et les inégalités sociales.\n\nParallèlement, NAGO et Haiti24 relaient des messages présentés au tribunal fédéral de Miami dans le procès sur l'assassinat de Jovenel Moïse. D'après ces comptes rendus, un échange daté du 22 juin 2021, attribué à Arcangel Pretel Ortiz, ferait référence à Benoit. Ortiz aurait indiqué à un interlocuteur identifié sous le pseudonyme « Colonel Mike » qu'il comptait transmettre un message présenté comme venant de Benoit et destiné à l'ancienne juge Windelle Coq Thélot.\n\nLe pseudonyme « Colonel Mike » est associé à Germán Alejandro Rivera García, ancien militaire colombien qui a témoigné à Miami, selon les deux médias. Ces échanges auraient eu lieu alors que des mercenaires colombiens préparaient l'attaque contre la résidence de Jovenel Moïse, assassiné le 7 juillet 2021 à Pèlerin 5.\n\nIl s'agit d'éléments présentés au tribunal et repris par la presse. Ils décrivent des contacts présumés. Ils n'établissent pas, à eux seuls, un rôle de Benoit dans l'assassinat. Les deux articles consultés ne rapportent pas de démenti de sa part.",
    },
    sources: ["NAGO", "Haiti24"],
    sourceLinks: [
      { name: "NAGO", url: "https://news.nago.tv/ancien-senateur-steven-benoit-vise-un-retour-au-senat" },
      { name: "Haiti24", url: "https://haiti24.net/assassinat-de-jovenel-moise-des-echanges-entre-arcangel-pretel-ortiz-et-colonel-mike-evoquent-des-contacts-avec-steven-benoit/" },
    ],
  },
  {
    id: "ntk-pedernales-marche-anse-a-pitres-2026-11-10",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:52:40-05:00",
    headline: {
      ht: "Pedernales : mache binasyonal la fèmen lendi apre de moun mouri nan Ansapitr, dapre El Nuevo Diario",
      fr: "Pedernales : le marché binational fermé lundi après deux morts à Anse-à-Pitres, selon El Nuevo Diario",
    },
    teaser: {
      ht: "Repiblik Dominikèn di nan lòt kote komès otorize a kontinye nòmalman, epi li montre Super Tucano k ap fè patwouy.",
      fr: "La République dominicaine dit par ailleurs que le commerce autorisé se poursuit normalement et montre des Super Tucano en patrouille.",
    },
    brief: {
      ht: "El Nuevo Diario rapòte otorite ayisyen yo fèmen lendi aksè ayisyen nan mache Pedernales, apre de Ayisyen mouri vandredi nan Ansapitr. Minuto Latino dekri patwouy ayeryen Super Tucano epi li reprann otorite dominikèn yo, ki di komès otorize a kontinye nòmalman.",
      fr: "El Nuevo Diario rapporte que les autorités haïtiennes ont fermé lundi l'accès haïtien au marché de Pedernales, après la mort vendredi de deux Haïtiens à Anse-à-Pitres. Minuto Latino décrit des patrouilles aériennes Super Tucano et reprend les autorités dominicaines, selon lesquelles le commerce autorisé continue normalement.",
    },
    body: {
      ht: "Echanj komèsyal nan mache binasyonal Pedernales te sispann lendi, dapre El Nuevo Diario 10 novanm. Dapre jounal la, otorite ayisyen yo fèmen aksè a depi teritwa yo, apre de nasyonal yo mouri epi yon twazyèm gason blese, vandredi, nan yon atak ame nan Ansapitr.\n\nEl Nuevo Diario idantifye de moun ki mouri yo kòm Garry Mondelus ak Donaldson Joseph, epi blese a kòm Jean Silne Walnic. Dapre vèsyon jounal la reprann, viktim yo ta lye ak yon etablisman yo prezante kòm lyen ak vant dwòg, epi evènman an ta rive pandan yon tranzaksyon oswa yon « tumbe ». Vèsyon sa yo rete akizasyon rapòte, se pa reyalite nou etabli isit la. Jounal la dekri kamyon ak remòk ki bloke nan zòn debakman an.\n\nNan yon lòt atik 10 novanm, Minuto Latino ekri avyon A-29B Super Tucano Fòs ayeryen dominikèn nan ap fè vòl siveyans sou fwontyè a. Videyo yo pibliye lendi montre, depi nan syèl la, miray la, pak endistriyèl CODEVI, mache binasyonal la ak pòs Dajabón, anfas Wanament. Medya a pale tou de yon ranfòsman patwouy atè nan Dajabón, Elías Piña, Independencia ak Pedernales.\n\nMinuto Latino rapòte, dapre otorite dominikèn yo, komès binasyonal ak deplase otorize yo kontinye nòmalman. Diskou jeneral sa a koegziste ak fèmen mache Pedernales El Nuevo Diario dekri pou lendi. Toude kont randi yo pa di konbyen tan ranfòsman an oswa fèmen an ap dire.",
      fr: "L'échange commercial au marché binational de Pedernales a été suspendu lundi, rapporte El Nuevo Diario le 10 novembre. Selon le journal, les autorités haïtiennes ont fermé l'accès depuis leur territoire, après la mort de deux de leurs nationaux et les blessures d'un troisième homme, vendredi, dans un attentat armé à Anse-à-Pitres.\n\nEl Nuevo Diario identifie les deux morts comme Garry Mondelus et Donaldson Joseph, et le blessé comme Jean Silne Walnic. D'après des versions reprises par le journal, les victimes auraient été liées à un établissement présumé lié à la vente de drogue, et les faits se seraient produits lors d'une transaction ou d'un « tumbe ». Ces versions restent des allégations rapportées, pas des faits établis ici. Le journal décrit des camions et des remorques immobilisés dans la zone de déchargement.\n\nDans un article distinct du 10 novembre, Minuto Latino écrit que des avions A-29B Super Tucano de la Force aérienne dominicaine effectuent des vols de surveillance au-dessus de la frontière. Des vidéos diffusées lundi montrent, depuis les airs, le mur, le parc industriel CODEVI, le marché binational et le poste de Dajabón, face à Ouanaminthe. Le média situe aussi un renforcement du patrouillage terrestre à Dajabón, Elías Piña, Independencia et Pedernales.\n\nMinuto Latino rapporte que, selon les autorités dominicaines, le commerce binational et les déplacements autorisés continuent normalement. Ce discours général coexiste avec la fermeture du marché de Pedernales décrite par El Nuevo Diario pour lundi. Les deux comptes rendus ne disent pas jusqu'à quand le renforcement ou la fermeture dureront.",
    },
    sources: ["El Nuevo Diario", "Minuto Latino"],
    sourceLinks: [
      { name: "El Nuevo Diario", url: "https://elnuevodiario.com.do/haitianos-cierran-acceso-al-mercado-binacional-de-pedernales-tras-muerte-de-dos-compatriotas/" },
      { name: "Minuto Latino", url: "https://minutolatinonews.com/nota/super-tucano-patrullan-frontera-haiti-dajabon-10nov" },
    ],
  },
  {
    id: "ntk-enseignants-greve-nationale-2026-11-09",
    tier: "need-to-know",
    topic: "society",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:52:20-05:00",
    headline: {
      ht: "Pwofesè : apèl pou yon grèv nasyonal 9 novanm; nan Gonayiv, yo denonse anviwon 4 mwa arere",
      fr: "Enseignants : appel à une grève nationale le 9 novembre ; à Gonaïves, des arriérés d'environ 4 mois dénoncés",
    },
    teaser: {
      ht: "HPN relè ekstansyon grèv la; Amitie FM dekri yon protestasyon nan Gonayiv, san dat presi sou paj la.",
      fr: "HPN relait l'extension de la grève ; Amitie FM décrit une protestation aux Gonaïves, sans date précise sur la page.",
    },
    brief: {
      ht: "Dapre Haiti Press Network, kèk sendika te mande pwofesè lekòl piblik yo elaji yon grèv depi lendi 9 novanm. Amitie FM rapòte yon mobilizasyon nan Gonayiv pou anviwon 4 mwa arere, san li pa di ki jou protestasyon an. Le National site yon nòt Co-CFEF ki gen dat 5 novanm.",
      fr: "Selon Haiti Press Network, des syndicats ont appelé les enseignants des écoles publiques à étendre une grève dès le lundi 9 novembre. Amitie FM rapporte une mobilisation aux Gonaïves pour environ 4 mois d'arriérés, sans indiquer le jour de la protestation. Le National cite une note du Co-CFEF datée du 5 novembre.",
    },
    body: {
      ht: "Plizyè gwoup sendika pwofesè te anonse yo ap elaji nan tout peyi a yon grèv ki deja kòmanse nan Grandans, Nò ak Nòdwès, dapre Haiti Press Network. Apel la te vize lendi 9 novanm pou pwofesè lekòl piblik yo. HPN site pami lòt yo COPLASEHQ, REDRESEH, NOU KONPRANN ak REFERANS, ki denonse otorite yo pa respekte angajman 2025 yo epi kondisyon travay yo ap vin pi mal.\n\nNan yon konferans pou laprès jedi 5 novanm, Sadrac Casimir, responsab REFERANS, te di grèv la ap kontinye jiskaske yo tande revandikasyon yo. Dominique Wilnor, kowòdonatè jeneral REDRESEH, te mande yon ajisteman salè, kat debi, lèt nominasyon pou pwofesè ki deja nan klas yo ak regilarizasyon administratif. Li te mande yon salè chak mwa 53000 goud, paske li di yon pwofesè pa ka viv byen ak 18000 goud, dapre chif HPN rapòte yo. Apel sa a pa t gen chif patisipasyon ni fèmen lekòl.\n\nAmitie FM dekri bò pa l yon protestasyon pwofesè nan lari Gonayiv, pou peman anviwon 4 mwa arere ak nominasyon ofisyèl pwofesè ki gen lontan nan pòs. Paj nou konsilte a pa di ki jou manifestasyon sa a te fèt.\n\nLe National pale de yon nòt pozisyon Collectif des CFEFiens (Co-CFEF), ki gen dat 5 novanm, prezidan li a, Cédoine Felixma, prezante apre konferans sendikal menm jou a. Kolektif la denonse reta peman, pwoblèm regilarizasyon administratif ak kèk sòm yo pa versé, epi li entèpele Ministè Edikasyon an.",
      fr: "Plusieurs regroupements syndicaux d'enseignants ont annoncé l'extension nationale d'une grève déjà engagée dans la Grand'Anse, le Nord et le Nord-Ouest, rapporte Haiti Press Network. L'appel visait le lundi 9 novembre pour les enseignants des écoles publiques. HPN cite notamment COPLASEHQ, REDRESEH, NOU KONPRANN et REFERANS, qui dénoncent le non-respect d'engagements pris en 2025 et la dégradation des conditions de travail.\n\nLors d'une conférence de presse jeudi 5 novembre, Sadrac Casimir, responsable de REFERANS, a déclaré que la grève se poursuivrait jusqu'à prise en compte des revendications. Dominique Wilnor, coordonnateur général de REDRESEH, a réclamé un ajustement salarial, des cartes de débit, des lettres de nomination pour les enseignants déjà en classe et la régularisation administrative. Il a plaidé pour un salaire mensuel de 53000 gourdes, estimant qu'un enseignant ne peut vivre décemment avec 18000 gourdes, selon les chiffres rapportés par HPN. Aucun chiffre de participation ni de fermeture d'écoles n'accompagnait cet appel.\n\nAmitie FM décrit de son côté une protestation d'enseignants dans les rues des Gonaïves, pour le paiement d'environ 4 mois d'arriérés et la nomination officielle d'enseignants en poste depuis longtemps. La page consultée n'indique pas le jour de cette manifestation.\n\nLe National fait état d'une note de position du Collectif des CFEFiens (Co-CFEF), datée du 5 novembre et présentée par son président, Cédoine Felixma, après la conférence syndicale du même jour. Le collectif dénonce des retards de paiement, des problèmes de régularisation administrative et le non-versement de certaines sommes dues, et interpelle le ministère de l'Éducation.",
    },
    sources: ["Haiti Press Network", "Amitie FM", "Le National"],
    sourceLinks: [
      { name: "Haiti Press Network", url: "https://www.hpninfo.com/post/ha%C3%AFti-%C3%A9ducation-le-secteur-%C3%A9ducatif-menac%C3%A9-par-une-gr%C3%A8ve-g%C3%A9n%C3%A9ralis%C3%A9e-%C3%A0-partir-de-lundi" },
      { name: "Amitie FM", url: "https://www.amitiefm.ht/post/gona%C3%AFves-des-enseignants-d%C3%A9noncent-quatre-mois-d-arri%C3%A9r%C3%A9s-de-salaire" },
      { name: "Le National", url: "https://www.lenational.org/article/politique/8621/conditions-de-travail-des-enseignants-le-co-cfef-hausse-le-ton" },
    ],
  },
  {
    id: "qh-foire-diaspora-cap-haitien-2026-11-06",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:52:10-05:00",
    headline: {
      ht: "Okap : premye Fwa dyaspora 6 ak 7 novanm, dapre Le National ak Le Nouvelliste",
      fr: "Cap-Haïtien : première Foire de la diaspora les 6 et 7 novembre, selon Le National et Le Nouvelliste",
    },
    teaser: {
      ht: "Yon koktey inogirasyon te fèt 5 novanm nan Hostellerie du Roi Christophe, sou egid MHAVE.",
      fr: "Un cocktail inaugural s'est tenu le 5 novembre à l'Hostellerie du Roi Christophe, sous l'égide du MHAVE.",
    },
    brief: {
      ht: "Le National te anonse, apre yon konferans pou laprès 4 novanm, yon premye Fwa dyaspora 6 ak 7 novanm nan Okap. Le Nouvelliste dekri koktey 5 novanm lan, inisyativ minis Kathia Verdier. Chif 150 ekspozan ak 8000 vizitè yo te previzyon, se pa yon bilan.",
      fr: "Le National avait annoncé, après une conférence de presse le 4 novembre, une première Foire de la diaspora les 6 et 7 novembre au Cap-Haïtien. Le Nouvelliste décrit le cocktail du 5 novembre organisé à l'initiative de la ministre Kathia Verdier. Les chiffres de 150 exposants et 8000 visiteurs étaient des prévisions, pas un bilan.",
    },
    body: {
      ht: "Premye edisyon Fwa dyaspora a te pwograme 6 ak 7 novanm nan Okap, dapre sa Le National te anonse apre yon konferans pou laprès 4 novanm nan meri a. Tèm yo te chwazi a se « Dyaspora ak kilti, ansanm pou Ayiti ». Evènman an te sou patronaj Primati, sou inisyativ Ministè Ayisyen k ap viv aletranje (MHAVE).\n\nLe Nouvelliste, nan yon atik 7 novanm, dekri koktey inogirasyon jedi 5 novanm nan Hostellerie du Roi Christophe, devan manm gouvènman, eli lokal ak reprezantan dyaspora. Jounal la mete inisyativ la sou kont minis Kathia Verdier, epi li di rankont lan te vize fasilite echanj ant antreprenè, envestisè ak aktè enstitisyonèl.\n\nNan konferans 4 novanm nan, Le National site tou minis Kilti Emmanuel Ménard, minis Touris Stéphanie Smith, majistra Michel Saint-Croix ak direktè jeneral FNE, Jefnie Toussaint. Jounal la te mete aktivite yo sou boulva vil la, epi li te pale de plis pase 150 ekspozan ak prèske 8000 vizitè yo te tann. Chif sa yo se previzyon anvan evènman an, se pa yon bilan presans.",
      fr: "La première édition de la Foire de la diaspora s'est tenue les 6 et 7 novembre au Cap-Haïtien, selon le programme annoncé par Le National après une conférence de presse le 4 novembre à la mairie. Le thème retenu était « Diaspora et culture, ensemble pour Haïti ». L'événement était placé sous le patronage de la Primature, à l'initiative du ministère des Haïtiens vivant à l'étranger (MHAVE).\n\nLe Nouvelliste, dans un article du 7 novembre, décrit le cocktail inaugural du jeudi 5 novembre à l'Hostellerie du Roi Christophe, en présence de membres du gouvernement, d'élus locaux et de représentants de la diaspora. Le journal attribue l'initiative à la ministre Kathia Verdier et indique que la rencontre visait à favoriser des échanges entre entrepreneurs, investisseurs et acteurs institutionnels.\n\nLors de la conférence du 4 novembre, Le National cite aussi le ministre de la Culture Emmanuel Ménard, la ministre du Tourisme Stéphanie Smith, le maire Michel Saint-Croix et le directeur général du FNE, Jefnie Toussaint. Le journal situait les activités sur le boulevard de la ville et faisait état de plus de 150 exposants et près de 8000 visiteurs attendus. Ces chiffres sont des prévisions d'avant l'événement, pas un bilan de fréquentation.",
    },
    sources: ["Le Nouvelliste", "Le National"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273689/premiere-edition-du-forum-de-la-diaspora-au-cap-haitien" },
      { name: "Le National", url: "https://www.lenational.org/article/politique/8612/cap-haitien-accueille-la-toute-premiere-edition-de-la-foire-de-la-diaspora" },
    ],
  },
  {
    id: "qh-le-levier-mbanq-caisses-2026-11-10",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:52:00-05:00",
    headline: {
      ht: "Le Levier chwazi Mbanq pou sistèm bankè santral 41 kès popilè, dapre FinTech Futures",
      fr: "Le Levier choisit Mbanq pour le système bancaire central de 41 caisses populaires, selon FinTech Futures",
    },
    teaser: {
      ht: "Premye faz la vize yon gwo liv pataje; peman mobil yo prezante kòm etap pita.",
      fr: "La première phase vise un grand livre partagé ; les paiements mobiles sont présentés comme des étapes ultérieures.",
    },
    brief: {
      ht: "FinTech Futures ekri 10 novanm konpayi ameriken Mbanq yo retni pou modernize sistèm santral 41 kès Fédération des caisses populaires haïtiennes Le Levier. TekNsol dwe jere enstalasyon lokal la. Enfòmasyon an chita sou anons sa a.",
      fr: "FinTech Futures écrit le 10 novembre que la société américaine Mbanq a été retenue pour moderniser le système central des 41 caisses de la Fédération des caisses populaires haïtiennes Le Levier. TekNsol doit gérer l'installation locale. L'information repose sur cette annonce.",
    },
    body: {
      ht: "Fédération des caisses populaires haïtiennes Le Levier retni konpayi ameriken Mbanq pou bay teknoloji sistèm bankè santral li a, dapre FinTech Futures 10 novanm. Medya a di Le Levier rasanble 41 kès depi 2007.\n\nDapre anons FinTech Futures reprann nan, pwogram nan dwe mete tout rezo a sou yon gwo liv pataje. Premye faz la konsène konfigirasyon liv sa a: kont kouran ak epay, pre ak vireman, chèk ak ouvèti kont dijital. Chak kès dwe kenbe pwòp operasyon li yo ak relasyon li genyen ak manm yo.\n\nAntrepriz ayisyen TekNsol, yo prezante kòm patnè teknik Mbanq, dwe jere enstalasyon lokal la ak kowòdinasyon ak kès k ap patisipe yo. Mbanq mete pou pita, kòm etap yo prevwa, peman nasyonal ak bank mobil, epi apre sa peman entènasyonal ak sèvis kat. Etap sa yo pa prezante kòm yo deja an sèvis.\n\nFinTech Futures presize se premye pwojè sistèm santral Mbanq ann Ayiti. Enfòmasyon an chita sou kont randi anons sa a sèlman.",
      fr: "La Fédération des caisses populaires haïtiennes Le Levier a retenu la société américaine Mbanq pour fournir la technologie de son système bancaire central, rapporte FinTech Futures le 10 novembre. Le média indique que Le Levier regroupe 41 caisses depuis 2007.\n\nSelon l'annonce reprise par FinTech Futures, le programme doit placer l'ensemble du réseau sur un grand livre partagé. La première phase porte sur la configuration de ce livre : comptes courants et d'épargne, prêts et virements, chèques et ouverture de comptes numériques. Chaque caisse doit conserver ses propres opérations et ses relations avec ses membres.\n\nL'entreprise haïtienne TekNsol, présentée comme partenaire technique de Mbanq, doit gérer l'installation locale et la coordination avec les caisses participantes. Mbanq situe à plus tard, comme étapes prévues, les paiements nationaux et la banque mobile, puis les paiements internationaux et les services de cartes. Ces étapes ne sont pas présentées comme déjà en service.\n\nFinTech Futures précise que c'est le premier projet de système central de Mbanq en Haïti. L'information repose sur ce seul compte rendu de l'annonce.",
    },
    sources: ["FinTech Futures"],
    sourceLinks: [
      { name: "FinTech Futures", url: "https://www.fintechfutures.com/core-banking-technology/mbanq-haiti-credit-unions-core-banking-technology" },
    ],
  },
  {
    id: "qh-georges-corvington-centenaire-2026-11-06",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:51:50-05:00",
    headline: {
      ht: "Georges Corvington ta gen 100 an 6 novanm, Le Nouvelliste raple",
      fr: "Georges Corvington aurait eu 100 ans le 6 novembre, rappelle Le Nouvelliste",
    },
    teaser: {
      ht: "Istoryen Pòtoprens lan, otè Port-au-Prince au cours des ans, te mouri 3 avril 2013.",
      fr: "L'historien de Port-au-Prince, auteur de Port-au-Prince au cours des ans, est mort le 3 avril 2013.",
    },
    brief: {
      ht: "Le Nouvelliste konsakre plizyè tèks nan santyè Georges Corvington, ki te fèt 6 novanm 1926 nan kapital la. Paj nou konsilte yo konfime dat li mouri ak tit zèv referans li a, men yon pati nan atik yo pa aksesib apre kòmansman an.",
      fr: "Le Nouvelliste consacre plusieurs textes au centenaire de Georges Corvington, né le 6 novembre 1926 dans la capitale. Les pages consultées confirment sa date de décès et le titre de son œuvre de référence, mais sont en partie inaccessibles au-delà du début des articles.",
    },
    body: {
      ht: "Georges Corvington ta gen 100 an 6 novanm 2026, Emmelie Prophète ekri nan Le Nouvelliste menm jou a. Istoryen an, chèchè ki te mare ak istwa Pòtoprens, te mouri 3 avril 2013. Jounal la raple tranblemanntè 2010 la te deja detwi an pati vil ki te sijè etid li a.\n\nNan yon lòt tèks 6 novanm, Claudel Victor presize yo te rele l Marie Joseph Georges Corvington Junior, li te fèt nan kapital la 6 novanm 1926, pitit avoka Georges Corvington ak Henriette Saurel. Li te fè etid klasik, epi dwa nan Fakilte dwa ak syans ekonomik Pòtoprens. Liv li Port-au-Prince au cours des ans rete yon referans sou pase kapital la, depi orijin kolonyal rive nan mitan ane 1950 yo, dapre atik sa a.\n\nEleman sa yo se sa ouvèti atik Le Nouvelliste yo. Plizyè tèks jounal la sou santyè sa a pa totalman aksesib apre premye paragraf yo.",
      fr: "Georges Corvington aurait eu 100 ans le 6 novembre 2026, écrit Emmelie Prophète dans Le Nouvelliste le même jour. L'historien, chercheur attaché à l'histoire de Port-au-Prince, est mort le 3 avril 2013. Le journal rappelle que le tremblement de terre de 2010 avait déjà en partie détruit la ville qui était son sujet d'étude.\n\nDans un autre texte du 6 novembre, Claudel Victor précise qu'il s'appelait Marie Joseph Georges Corvington Junior, né dans la capitale le 6 novembre 1926, fils de l'avocat Georges Corvington et d'Henriette Saurel. Il a fait des études classiques, puis du droit à la Faculté de droit et des sciences économiques de Port-au-Prince. Son ouvrage Port-au-Prince au cours des ans reste une référence sur le passé de la capitale, des origines coloniales jusqu'au milieu des années 1950, selon cet article.\n\nCes éléments sont ceux des ouvertures d'articles du Nouvelliste. Plusieurs textes du journal sur ce centenaire sont en partie inaccessibles après les premiers paragraphes.",
    },
    sources: ["Le Nouvelliste - Emmelie Prophète", "Le Nouvelliste - Claudel Victor"],
    sourceLinks: [
      { name: "Le Nouvelliste - Emmelie Prophète", url: "https://lenouvelliste.com/article/273682/georges-corvington-aurait-eu-100-ans-aujourdhui" },
      { name: "Le Nouvelliste - Claudel Victor", url: "https://lenouvelliste.com/article/273637/georges-corvington-l-homme-qui-a-raconte-port-au-prince" },
    ],
  },
  {
    id: "ntk-rubio-gsf-plan-b-2026-11-09",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:51:30-05:00",
    headline: {
      ht: "Rubio sou fòs sipresyon gang yo : « pa gen plan B ankò », dapre Miami Herald",
      fr: "Rubio sur la force de suppression des gangs : « il n'y a plus de plan B », selon le Miami Herald",
    },
    teaser: {
      ht: "Sekretè Deta ameriken an di GSF Nasyonzini otorize a dwe reyisi, paske pa gen lòt opsyon.",
      fr: "Le secrétaire d'État américain dit que la GSF autorisée par l'ONU doit réussir, faute d'autre option.",
    },
    brief: {
      ht: "Nan yon atik 9 novanm, Miami Herald rapòte pawòl Marco Rubio lendi : si fòs sipresyon gang yo echwe, Washington pa gen plan B ankò. Chif efektif atik la bay yo rete sa sekretè Deta a, jounal la reprann nan.",
      fr: "Dans un article du 9 novembre, le Miami Herald rapporte des propos de Marco Rubio tenus lundi : si la force de suppression des gangs échoue, Washington n'a plus de plan B. Les effectifs cités dans l'article restent ceux du secrétaire d'État, repris par le journal.",
    },
    body: {
      ht: "Sekretè Deta ameriken Marco Rubio deklare lendi fòs sipresyon gang yo (GSF) Nasyonzini otorize a « dwe mache », dapre Miami Herald 9 novanm. « Si pa gen rezilta, nou pa gen lide ankò. Vrèman, pa gen lòt opsyon; pa gen plan B ankò », li di, dapre jounal la.\n\nHerald mete pawòl sa yo nan yon kontèks deplwaman salvadorien kote, dapre jounal la, gwo majorite sòlda yo opere andeyò estrikti kòmandman GSF la. Rubio pa antre nan detay lòt fòs ki prezan an Ayiti yo. Li jije misyon Kenya te dirije a, ki te pati nan mwa avril, « pa t ap fè ase ».\n\nDapre Herald, Rubio di GSF gen yon ti kras plis pase 2000 militè ki soti nan sis peyi kontribitè, gen pèsonèl Bangladèch yo ap tann, epi yo pwomèt 3000 a 4000 lòt militè. Se chif sekretè Deta a, jounal la reprann nan.\n\nRubio salye wòl Kanada nan sipò lojistik misyon an, epi li di Washington ap kontinye ankouraje kontribisyon nan yon fon Nasyonzini. Li pale tou de pwogrè nan fòmasyon Polis Nasyonal Ayiti, men li rele rétablisman sekirite a yon « defi difisil ».\n\nSou eleksyon yo, Herald raple yo te ranvwaye eleksyon an soti desanm 2026 rive jiyè 2027. Rubio di yo pa ka òganize eleksyon kredib si gang kontwole gwo pati nan vil la, epi estabilite nesesè pou elektè yo ka rive nan biwo vòt yo.",
      fr: "Le secrétaire d'État américain Marco Rubio a déclaré lundi que la force de suppression des gangs (GSF) autorisée par l'ONU « doit fonctionner », rapporte le Miami Herald le 9 novembre. « S'il n'y a pas de résultat, nous n'avons plus d'idées. Il n'y a vraiment pas d'autre option ; il n'y a plus de plan B », a-t-il dit, selon le journal.\n\nLe Herald situe ces propos dans un contexte de déploiement salvadorien dont, d'après le journal, la grande majorité des soldats opèrent hors de la structure de commandement de la GSF. Rubio n'a pas détaillé les autres forces présentes en Haïti. Il a jugé que la mission menée par le Kenya, partie en avril, « n'en faisait tout simplement pas assez ».\n\nSelon le Herald, Rubio a indiqué que la GSF compte un peu plus de 2000 militaires de six pays contributeurs, que des personnels du Bangladesh sont attendus, et que 3000 à 4000 autres militaires ont été promis. Ces chiffres sont ceux du secrétaire d'État, repris par le journal.\n\nRubio a salué le rôle du Canada dans le soutien logistique de la mission et a dit que Washington continuerait d'encourager des contributions à un fonds d'affectation de l'ONU. Il a aussi parlé de progrès dans la formation de la Police nationale d'Haïti, tout en qualifiant le rétablissement de la sécurité de « défi difficile ».\n\nSur les élections, le Herald rappelle que le scrutin a été reporté de décembre 2026 à juillet 2027. Rubio a déclaré qu'on ne peut pas tenir des élections crédibles si des gangs contrôlent de larges portions de la ville, et que la stabilité est nécessaire pour que les électeurs puissent se rendre aux urnes.",
    },
    sources: ["Miami Herald"],
    sourceLinks: [
      { name: "Miami Herald", url: "https://www.miamiherald.com/news/nation-world/world/americas/haiti/article318005705.html" },
    ],
  },
  {
    id: "ntk-amnesty-accord-salvador-haiti-2026-11-10",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:51:20-05:00",
    headline: {
      ht: "Amnesty International mande El Salvador ak Ayiti pibliye akò deplwaman an",
      fr: "Amnesty International demande à El Salvador et à Haïti de publier l'accord sur le déploiement",
    },
    teaser: {
      ht: "Òganizasyon an mande règ angajman yo, chenn responsablite a, ak yon fason pou siyale posib vyolasyon.",
      fr: "L'organisation réclame les règles d'engagement, la chaîne de responsabilité et un moyen de signaler d'éventuelles violations.",
    },
    brief: {
      ht: "Dapre France 24, ki reprann AP 10 novanm, Amnesty International te mande lendi de gouvènman yo pibliye akò k ap kadren deplwaman twoup salvadorien an Ayiti. Chif efektif rapò a site yo rete sa medya a.",
      fr: "Selon France 24, qui reprend l'AP le 10 novembre, Amnesty International a appelé lundi les deux gouvernements à rendre public l'accord encadrant le déploiement de troupes salvadoriennes en Haïti. Les effectifs mentionnés dans le reportage restent ceux du média.",
    },
    body: {
      ht: "Amnesty International mande lendi El Salvador ak Ayiti pibliye akò k ap kadren deplwaman twoup salvadorien an Ayiti, dapre France 24 10 novanm, ki reprann AP.\n\nAna Piquer, direktris Amnesty pou Amerik yo, mande de gouvènman yo eksplike kijan yo sipèvize fòs yo deplwaye yo, ki règ ki gouvène itilizasyon fòs, devan kiyès fòs sa yo gen pou rann kont, epi kijan moun ki ta viktim ka siyale vyolasyon san yo pa pè reprezay.\n\nFrance 24 di prezidan salvadorien Nayib Bukele te prezante deplwaman an okòmansman kòm yon operasyon pou ramnen kat pèsonèl ki disparèt depi mitan oktòb, epi apre sa li te kite panse gen yon objektif pi laj kont gang yo. Medya a ajoute ke pifò sòlda salvadorien yo pa entegre nan fòs sipresyon gang yo (GSF). Chif efektif rapò sa a site yo rete sa France 24 ak AP.\n\nPiquer mande Bukele ak premye minis ayisyen Alix Didier Fils-Aimé veye pou tout operasyon fòs salvadorien yo an Ayiti respekte dwa entènasyonal sou dwa moun, epi louvri ankèt rapid, endepandan ak enpasyal sou tout akizasyon vyolasyon. « Repons vyolans gang yo pa dwe repwodui abi ak enpinite ki te make entèvansyon anvan yo an Ayiti », li ajoute, dapre France 24.",
      fr: "Amnesty International a appelé lundi El Salvador et Haïti à rendre public l'accord qui encadre le déploiement de troupes salvadoriennes en Haïti, rapporte France 24 le 10 novembre, d'après l'AP.\n\nAna Piquer, directrice d'Amnesty pour les Amériques, a demandé aux deux gouvernements d'expliquer comment ils supervisent les forces déployées, quelles règles régissent l'usage de la force, à qui ces forces rendent des comptes, et comment les éventuelles victimes peuvent signaler des violations sans craindre de représailles.\n\nFrance 24 indique que le président salvadorien Nayib Bukele a d'abord présenté le déploiement comme une opération pour ramener quatre personnels disparus depuis la mi-octobre, puis a laissé entendre un objectif plus large contre les gangs. Le média ajoute que l'essentiel des soldats salvadoriens n'est pas intégré à la force de suppression des gangs (GSF). Les effectifs cités dans ce reportage restent ceux de France 24 et de l'AP.\n\nPiquer a demandé à Bukele et au Premier ministre haïtien Alix Didier Fils-Aimé de veiller à ce que toutes les opérations des forces salvadoriennes en Haïti respectent le droit international des droits humains, et d'ouvrir des enquêtes promptes, indépendantes et impartiales sur toute allégation de violation. « La réponse à la violence des gangs ne doit pas reproduire les abus et l'impunité qui ont caractérisé les interventions précédentes en Haïti », a-t-elle ajouté, selon France 24.",
    },
    sources: ["France 24 - AP"],
    sourceLinks: [
      { name: "France 24 - AP", url: "https://www.france24.com/en/americas/20261110-amnesty-urges-el-salvador-to-disclose-terms-of-haiti-troop-deployment" },
    ],
  },
  {
    id: "ntk-garcon-haitien-ice-san-diego-2026-11-08",
    tier: "need-to-know",
    topic: "society",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:51:00-05:00",
    headline: {
      ht: "Yon gason ayisyen 8 an yo konfye bay ORR apre yon randevou ICE nan San Diego",
      fr: "Un garçon haïtien de 8 ans confié à l'ORR après un rendez-vous ICE à San Diego",
    },
    teaser: {
      ht: "Tonton l te akonpaye l; ICE di li pa etabli tutèl legal. ABC ak NBC pa bay menm jou a.",
      fr: "L'oncle l'avait accompagné ; ICE dit n'avoir pas établi de tutelle légale. ABC et NBC divergent sur le jour exact.",
    },
    brief: {
      ht: "ABC News ak NBC News rapòte yon elèv ayisyen 8 an, ki lekòl Fay Elementary, yo transfere bay Office of Refugee Resettlement apre yon randevou ak ICE. NBC mete pran an chaj la 4 novanm; ABC mete l yon jedi.",
      fr: "ABC News et NBC News rapportent qu'un élève haïtien de 8 ans, scolarisé à Fay Elementary, a été transféré à l'Office of Refugee Resettlement après un rendez-vous avec l'ICE. NBC date la prise en charge au 4 novembre ; ABC la situe un jeudi.",
    },
    body: {
      ht: "Yon gason ayisyen 8 an, elèv 3e ane nan lekòl Fay Elementary nan San Diego, yo konfye bay Office of Refugee Resettlement (ORR) apre yon randevou ak Immigration and Customs Enforcement (ICE), dapre ABC News ak NBC News.\n\nNBC San Diego mete pran an chaj la 4 novanm, epi li jwenn yon videyo yo te filme mercredi sa a devan biwo ICE, nan santvil San Diego. ABC News, nan yon atik 8 novanm, mete randevou a yon jedi.\n\nDistri lekòl la ak òganizasyon Haitian Bridge Alliance di timoun nan t ap viv ak tonton l ak kouzen l yo depi yo te ekspilse papa l, ane pase. ABC presize yo te voye papa a tounen Meksik. Dapre ABC, yon administratè distri a, Cody Petterson, di tonton an te nan dosye lekòl yo kòm moun ki otorize pou okipe timoun nan.\n\nICE ak Department of Homeland Security (DHS) di mesye a pa t ka etabli yon tutèl legal. DHS, NBC site, pale de yon moun « ki te prezante tèt li kòm tonton an ». Ajan yo trete timoun nan kòm yon minè ki pa akonpaye, sou baz yon lwa federal sou pwoteksyon viktim trafik. Yon pòtpawòl ICE di ABC ajans lan pa t akize tonton an de okenn abi, men li deside, « pa prekosyon », retire timoun nan nan kay la epi konfye l bay ORR. DHS trete kòm « fo » akizasyon ki di timoun nan te « mete nan detansyon ».\n\nTimoun nan te pèdi Temporary Protected Status (TPS) pi bonè ane sa a, dapre ABC. NBC, ki chita sou yon lèt distri lekòl la, mete pèt sa a nan ete a, apre yon desizyon Tribinal Siprèm ki otorize fen TPS pou Ayisyen. Distri a ekri DHS tonton an te mennen timoun nan nan randevou a paske li pa t vle vyole lalwa.\n\nNan dat 9 novanm, biwo reprezantan demokrat Juan Vargas di NBC fanmi an pa konnen egzakteman ki kote timoun nan ye. ORR pa kòmante dosye sa a, li site règ konfidansyalite li yo. ABC di li poko klè si yo pral voye timoun nan soti Etazini. Yo pa pibliye prenon timoun nan.\n\nGuerline Jozef, nan Haitian Bridge Alliance, estime transfe sa a wete timoun nan bò kote fanmi l epi li ka ekspoze l a yon pwosedi ekspilsyon. Distri a anonse li ap voye plis konseye nan lekòl la semèn sa a, paske kèk kamarad klas yo eksprime enkyetid yo.",
      fr: "Un garçon haïtien de 8 ans, élève de 3e année à l'école Fay Elementary de San Diego, a été confié à l'Office of Refugee Resettlement (ORR) après un rendez-vous avec l'Immigration and Customs Enforcement (ICE), rapportent ABC News et NBC News.\n\nNBC San Diego date la prise en charge au 4 novembre et a obtenu une vidéo tournée ce mercredi devant le bureau de l'ICE, au centre-ville de San Diego. ABC News, dans un article du 8 novembre, situe le rendez-vous un jeudi.\n\nLe district scolaire et l'organisation Haitian Bridge Alliance indiquent que l'enfant vivait avec son oncle et ses cousins depuis l'expulsion de son père, l'an dernier. ABC précise que le père a été renvoyé au Mexique. Selon ABC, un administrateur du district, Cody Petterson, dit que l'oncle figurait dans les dossiers scolaires comme personne autorisée à s'occuper de l'enfant.\n\nICE et le Department of Homeland Security (DHS) affirment que l'homme n'a pas pu établir une tutelle légale. Le DHS, cité par NBC, parle d'un homme « qui se présentait comme l'oncle ». Les agents ont alors traité l'enfant comme un mineur non accompagné, en vertu d'une loi fédérale sur la protection des victimes de la traite. Un porte-parole d'ICE a déclaré à ABC que l'agence n'accusait l'oncle d'aucun abus, mais qu'elle avait décidé, « par prudence », de retirer l'enfant du foyer et de le confier à l'ORR. Le DHS a qualifié de « fausses » les allégations selon lesquelles l'enfant aurait été « placé en détention ».\n\nL'enfant avait perdu le Temporary Protected Status (TPS) plus tôt cette année, selon ABC. NBC, s'appuyant sur une lettre du district scolaire, situe cette perte dans l'été, après une décision de la Cour suprême autorisant la fin du TPS pour les Haïtiens. Le district a écrit au DHS que l'oncle a conduit l'enfant au rendez-vous parce qu'il ne voulait pas enfreindre la loi.\n\nAu 9 novembre, le bureau du représentant démocrate Juan Vargas a déclaré à NBC que la famille ne savait pas exactement où l'enfant se trouve. L'ORR n'a pas commenté ce dossier, invoquant ses règles de confidentialité. ABC indique qu'il n'est pas clair si l'enfant sera renvoyé hors des États-Unis. Le prénom de l'enfant n'a pas été rendu public.\n\nGuerline Jozef, de Haitian Bridge Alliance, estime que ce transfert éloigne l'enfant de sa famille et peut l'exposer à une procédure d'éloignement. Le district a annoncé l'envoi de conseillers supplémentaires à l'école cette semaine, parce que des camarades de classe ont exprimé leur inquiétude.",
    },
    sources: ["ABC News", "NBC News"],
    sourceLinks: [
      { name: "ABC News", url: "https://abcnews.com/US/8-year-haitian-boy-federal-custody-after-ice/story?id=137960678" },
      { name: "NBC News", url: "https://www.nbcnews.com/news/us-news/haitian-8-year-old-was-taken-ice-routine-check-rattling-san-diego-scho-rcna608341" },
    ],
  },
  {
    id: "qh-nay-mizik-cuisine-tiktok-2026-11-09",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:50:50-05:00",
    headline: {
      ht: "Depi Kanada, Nay Mizik fè konnen kwizin ayisyen sou TikTok, dapre NAGO",
      fr: "Depuis le Canada, Nay Mizik fait connaître la cuisine haïtienne sur TikTok, selon NAGO",
    },
    teaser: {
      ht: "Scheneider Clerveaux prepare pami lòt yo diri, yon sòs pwa ak legim.",
      fr: "Scheneider Clerveaux prépare notamment du riz, une sauce aux haricots et du legim.",
    },
    brief: {
      ht: "NAGO, 9 novanm, prezante kreyatè Scheneider Clerveaux, alias Nay Mizik, k ap filme plat ayisyen depi Kanada. Enfòmasyon an chita sou medya sa a sèlman.",
      fr: "NAGO, le 9 novembre, présente le créateur Scheneider Clerveaux, alias Nay Mizik, qui filme des plats haïtiens depuis le Canada. L'information repose sur ce seul média.",
    },
    body: {
      ht: "Kreyatè Scheneider Clerveaux, alias Nay Mizik, prezante plat ayisyen sou TikTok depi Kanada, dapre NAGO 9 novanm. Li di li fyè l ap fè konnen kilti peyi a nan tab la, epi li eksplike se granmè l ki te ba l gou pou kwit manje.\n\nPami preparasyon li pi renmen yo, NAGO site diri, sòs pwa ak legim. Medya a rakonte yon parkou ki pase pa yon anfans nan Kafou, lyen fanmi nan Jakmèl, yon fòmasyon kòm kizinye nan Ajantin, epi yon metye li pratike nan Kanada.\n\nNAGO presize vizibilite sa a pa yon pòtrè konplè kwizin ayisyen, ki chanje selon rejyon ak fanmi. Enfòmasyon an chita sou medya sa a sèlman.",
      fr: "Le créateur Scheneider Clerveaux, alias Nay Mizik, présente des plats haïtiens sur TikTok depuis le Canada, rapporte NAGO le 9 novembre. Il se dit fier de faire connaître la culture du pays par la table et explique que sa grand-mère lui a transmis le goût de cuisiner.\n\nParmi ses préparations favorites, NAGO cite le riz, la sauce aux haricots et le legim. Le média retrace un parcours qui passe par une enfance à Carrefour, des attaches familiales à Jacmel, une formation de cuisinier en Argentine, puis un métier exercé au Canada.\n\nNAGO précise que cette visibilité ne vaut pas un portrait complet de la cuisine haïtienne, qui varie selon les régions et les familles. L'information repose sur ce seul média.",
    },
    sources: ["NAGO"],
    sourceLinks: [
      { name: "NAGO - article", url: "https://news.nago.tv/depuis-le-canada-nay-mizik-fait-connaitre-la-cuisine-haitienne-sur-tik" },
      { name: "NAGO - flash 19 h, 9 novembre", url: "https://nago.tv/flash-info/2026-11-09-19" },
    ],
  },
  {
    id: "ntk-rd-frontiere-patrouilles-2026-11-09",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:50:40-05:00",
    headline: {
      ht: "Repiblik Dominikèn : lame a di li ranfòse patwouy yo sou fwontyè a dimanch",
      fr: "République dominicaine : l'armée dit avoir renforcé les patrouilles à la frontière dimanche",
    },
    teaser: {
      ht: "Dajabón, Elías Piña, Independencia ak Pedernales vize; komès ak pasaj otorize yo rete nòmal, dapre lame a.",
      fr: "Dajabón, Elías Piña, Independencia et Pedernales visés ; le commerce et les passages autorisés restent normaux, selon l'armée.",
    },
    brief: {
      ht: "Dapre Informe56, lame dominikèn nan te mete plis patwouy dimanch 8 novanm nan kat pwovens kote gwo pòs fwontyè yo ye. Li di komès ak pasaj otorize yo kontinye nòmalman.",
      fr: "Selon Informe56, l'armée dominicaine a concentré davantage de patrouilles dimanche 8 novembre dans les quatre provinces des principaux postes frontaliers. Elle affirme que le commerce et le transit autorisé se poursuivent normalement.",
    },
    body: {
      ht: "Lame dominikèn nan ranfòse patwouy militè sou fwontyè ayisyeno-dominikèn nan dimanch 8 novanm, dapre Informe56. Li mete plis patwouy nan pwovens Dajabón, Elías Piña, Independencia ak Pedernales, kote kat gwo pòs fwontyè fòmèl yo ye.\n\nNan yon nòt medya a reprann, lame a di malgre ogmantasyon siveyans sa a, li pa wè gwo chanjman nan jan fwontyè a mache nòmalman. Aktivite komèsyal, pasaj moun ki otorize ak travay chak jou yo kontinye nòmalman, dapre sous sa a.\n\nInforme56 mete ranfòsman sa a nan swivi dominikèn sou tansyon an Ayiti, apre disparisyon kat Salvadorien ak atak gwoup ame yo. Medya a rapòte tou ke depi kèk jou minis Defans ak Prezidans dominikèn yo te fè yon vire nan kat pwen fwontyè yo. Kont randi a pa bay chif egzak renfò yo ni konbyen tan ogmantasyon patwouy sa a dwe dire.",
      fr: "L'armée dominicaine a renforcé les patrouilles militaires à la frontière haïtiano-dominicaine dimanche 8 novembre, rapporte Informe56. Elle a concentré davantage de patrouilles dans les provinces de Dajabón, Elías Piña, Independencia et Pedernales, où se trouvent les quatre principaux postes frontaliers formels.\n\nDans une note reprise par le média, l'armée indique que, malgré cette hausse de surveillance, elle n'observe pas de changement significatif dans la dynamique habituelle de la frontière. Les activités commerciales, le transit autorisé de personnes et les tâches quotidiennes continuent normalement, selon cette source.\n\nInforme56 situe ce renforcement dans le suivi dominicain des tensions en Haïti, après la disparition de quatre Salvadoriens et des attaques de groupes armés. Le média rapporte aussi qu'il y a quelques jours les ministres dominicains de la Défense et de la Présidence ont parcouru les quatre points frontaliers. Le compte rendu ne précise pas les effectifs exacts des renforts ni la durée prévue de cette hausse de patrouilles.",
    },
    sources: ["Informe56"],
    sourceLinks: [
      { name: "Informe56", url: "https://informe56.com/2026/11/09/gobierno-incrementa-patrullaje-en-la-frontera-ante-situacion-en-haiti/" },
    ],
  },
  {
    id: "ntk-securite-salvador-gangs-2026-11-09",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:50:30-05:00",
    headline: {
      ht: "Prezans salvadorien ak òf dyalòg 400 Mawozo : risk Americas Quarterly egzamine yo",
      fr: "Présence salvadorienne et offre de dialogue de 400 Mawozo : les risques examinés par Americas Quarterly",
    },
    teaser: {
      ht: "Nan yon analiz 9 novanm, Philippe de Bard egzamine apèl Wilson Joseph bay Nasyonzini ak kesyon kowòdinasyon bò kote kontenjan salvadorien an.",
      fr: "Dans une analyse du 9 novembre, Philippe de Bard examine l'appel de Wilson Joseph à l'ONU et les questions de coordination autour du contingent salvadorien.",
    },
    brief: {
      ht: "Americas Quarterly pibliye yon analiz Philippe de Bard sou òf dyalòg 400 Mawozo ak sou prezans salvadorien an Ayiti. Otè a avèti kont yon dyalòg san kondisyon ak kont yon dispozitif sekirite ki pa byen kadren.",
      fr: "Americas Quarterly publie une analyse de Philippe de Bard sur l'offre de dialogue de 400 Mawozo et sur la présence salvadorienne en Haïti. L'auteur met en garde contre un dialogue sans conditions et contre un dispositif sécuritaire mal cadré.",
    },
    body: {
      ht: "Americas Quarterly pibliye 9 novanm yon analiz Philippe de Bard sou de dosye ki mare : òf dyalòg 400 Mawozo lanse a, ak prezans twoup salvadorien an Ayiti.\n\nDapre atik la, Wilson Joseph, yo rele Lanmò Sanjou, chèf 400 Mawozo, mande sekretè jeneral Nasyonzini voye yon delegasyon pou yon dyalòg ak yon medyasyon. Nasyonzini konfime li resevwa lèt la, ki gen dat 1ye novanm dapre analiz la, epi li presize resepsyon an pa vle di ni rekonesans ni andòsman. Joseph demanti responsablite li nan disparisyon kat teknikyen salvadorien yo. El Salvador di yo vivan; Ayiti di yo te kidnape.\n\nDe Bard estime yon dyalòg san kondisyon ta ka rekonpanse vyolans ak enpinite. Li note lèt la chèche yon echanj ak « fòs entènasyonal ki prezan an Ayiti », pandan l ap kontourne Eta ayisyen an, epi li prezante 400 Mawozo kòm yon « gwoup rebèl ». Otè a raple tou Joseph sou sanksyon plizyè Eta ak Nasyonzini.\n\nSou plan sekirite, analiz la dekri plizyè aktè k ap opere bò Pòtoprens, pami yo PNH, FAd'H, fòs sipresyon gang yo (GSF), yon task force drone, ak kontenjan salvadorien an. De Bard souliye kad legal ak chenn kòmandman kontenjan sa a rete flou, epi Nasyonzini di gwo majorite renfò salvadorien yo pa opere anba manda GSF la. Li pè yon kowòdinasyon mal defini ta ka kraze plis repons entènasyonal la.\n\nPou teste òf dyalòg la, otè a pwopoze kritè konkret anvan nenpòt negosyasyon fòmèl : sispann atak sou sivil yo yon fason ki verifye, sò otaj yo, reouvèti wout, aksè imanitè, epi soti timoun yo te rekrite. Li mande tou yon kad pibliye ki presize manda, dire ak estati deplwaman salvadorien an, ansanm ak lyen li genyen ak GSF la.\n\nNan yon lòt rapò, Bloomberg, LiveMint reprann nan, di PNH rapòte li blese mortalman Mathias Saintil, yo prezante kòm chèf gang Boston, nan yon operasyon nan Site Solèy; premye minis enterimè Alix Didier Fils-Aimé salye nouvèl la sou X. Reyalite sa a pa sijè santral analiz Americas Quarterly a.",
      fr: "Americas Quarterly a publié le 9 novembre une analyse de Philippe de Bard sur deux dossiers liés : l'offre de dialogue lancée par 400 Mawozo et la présence de troupes salvadoriennes en Haïti.\n\nSelon l'article, Wilson Joseph, dit Lanmò Sanjou, chef de 400 Mawozo, a demandé au secrétaire général de l'ONU d'envoyer une délégation pour un dialogue et une médiation. L'ONU a confirmé avoir reçu la lettre, datée du 1er novembre d'après l'analyse, en précisant que cette réception n'implique ni reconnaissance ni endossement. Joseph nie sa responsabilité dans la disparition de quatre techniciens salvadoriens. El Salvador estime qu'ils sont vivants ; Haïti dit qu'ils ont été enlevés.\n\nDe Bard estime qu'un dialogue sans conditions risquerait de récompenser la violence et l'impunité. Il note que la lettre cherche un échange avec « les forces internationales présentes en Haïti », en contournant l'État haïtien, et qu'elle présente 400 Mawozo comme un « groupe rebelle ». L'auteur rappelle aussi que Joseph figure sous sanctions de plusieurs États et de l'ONU.\n\nSur le plan sécuritaire, l'analyse décrit plusieurs acteurs opérant autour de Port-au-Prince, dont la PNH, les FAd'H, la force de suppression des gangs (GSF), une task force de drones et le contingent salvadorien. De Bard souligne que le cadre juridique et la chaîne de commandement de ce contingent restent flous, et que l'ONU a indiqué que la grande majorité des renforts salvadoriens n'opèrent pas sous le mandat de la GSF. Il craint qu'une coordination mal définie ne fragmente encore la réponse internationale.\n\nPour tester l'offre de dialogue, l'auteur propose des critères concrets avant toute négociation formelle : arrêt vérifié des attaques contre les civils, sort des otages, réouverture de routes, accès humanitaire et sortie d'enfants recrutés. Il plaide aussi pour un cadre publié qui précise le mandat, la durée et le statut du déploiement salvadorien, ainsi que son lien avec la GSF.\n\nDans un autre reportage, Bloomberg, repris par LiveMint, a indiqué que la PNH dit avoir mortellement blessé Mathias Saintil, présenté comme chef du gang Boston, lors d'une opération à Cité Soleil ; le Premier ministre intérimaire Alix Didier Fils-Aimé a salué la nouvelle sur X. Ce fait n'est pas le sujet central de l'analyse d'Americas Quarterly.",
    },
    sources: ["Americas Quarterly - Philippe de Bard", "LiveMint - Bloomberg"],
    sourceLinks: [
      { name: "Americas Quarterly - Philippe de Bard", url: "https://americasquarterly.org/article/el-salvadors-presence-and-a-gangs-offer-test-haitis-security/" },
      { name: "LiveMint - Bloomberg", url: "https://www.livemint.com/news/haiti-kills-gang-chief-as-el-salvador-mercenaries-add-pressure-11794217717906.html" },
    ],
  },
  {
    id: "ntk-stephanie-paultre-liberee-caleb-2026-11-08",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:50:10-05:00",
    headline: {
      ht: "Stéphanie Paultre libere, Mèt Caleb Jean-Baptiste toujou anba men kidnapè yo, dapre de medya",
      fr: "Stéphanie Paultre libérée, Me Caleb Jean-Baptiste toujours retenu, selon deux médias",
    },
    teaser: {
      ht: "Haïti24 ak Maghaiti rapòte liberasyon li, men yo pa bay menm detay sou dat la ak lòt moun ki libere yo.",
      fr: "Haïti24 et Maghaiti rapportent sa libération, mais divergent sur la date et les autres personnes libérées.",
    },
    brief: {
      ht: "Direktris ONAPE a reprann libète li apre kidnaping 7 septanm nan Latibonit la, dapre Haïti24 ak Maghaiti 8 novanm sa a. Toude medya yo di Mèt Caleb Jean-Baptiste toujou anba men kidnapè yo.",
      fr: "La directrice de l'ONAPE a retrouvé la liberté après son enlèvement du 7 septembre dans l'Artibonite, rapportent Haïti24 et Maghaiti ce 8 novembre. Les deux médias indiquent que Me Caleb Jean-Baptiste reste aux mains des ravisseurs.",
    },
    body: {
      ht: "Stéphanie Paultre, direktris jeneral Biwo nasyonal patenarya nan edikasyon (ONAPE), libere apre anviwon de mwa anba men kidnapè, dapre Haïti24 ak Maghaiti dimanch 8 novanm sa a. Toude medya yo di Mèt Caleb Jean-Baptiste toujou nan men ravisè yo.\n\nHaïti24 di Paultre libere dimanch. Maghaiti di liberasyon an fèt nan nuit samdi 7 novanm, epi li fè konnen yo lage l ansanm ak de kolaboratè, pami yo chofè li, kont yon ranson. Mesaj li a parèt dimanch a 11:46 nan maten, lè Ayiti. Li pa bay montan ranson an.\n\nTout detay sa yo poko jwenn menm konfimasyon. Haïti24 pa konfime peman ranson ni liberasyon lòt moun yo te kidnape avè l yo. Opak News pa prezante sò tout otaj yo kòm yon bagay ki fin etabli.\n\nDapre Haïti24, yo te kidnape Paultre ak Jean-Baptiste 7 septanm nan Lakwa Peris, nan zòn Gwo Mòn, pandan yo t ap retounen soti nan yon aktivite nan Ennery pou lansman ane lekòl la. Medya a pale tou de de polisye kidnapè yo te pran. Maghaiti mete kidnaping nan sou kont gang Kokorat San Ras. Se medya a ki bay atribisyon sa a.\n\nLiberasyon Paultre medya yo rapòte a pa fè enkyetid pou Caleb Jean-Baptiste fini. Yon konfimasyon ofisyèl sou sò chak moun yo te kidnape rete nesesè.",
      fr: "Stéphanie Paultre, directrice générale de l'Office national de partenariat en éducation (ONAPE), a été libérée après environ deux mois de séquestration, rapportent Haïti24 et Maghaiti ce dimanche 8 novembre. Les deux médias indiquent que Me Caleb Jean-Baptiste reste retenu par les ravisseurs.\n\nHaïti24 situe la libération de Paultre ce dimanche. Maghaiti la place dans la nuit du samedi 7 novembre et affirme qu'elle a été libérée avec deux collaborateurs, dont son chauffeur, contre une rançon. Son message a été publié dimanche à 11 h 46, heure d'Haïti. Aucun montant n'y est donné.\n\nCes précisions ne sont pas toutes corroborées. Haïti24 ne confirme ni le paiement d'une rançon ni la libération des autres personnes enlevées avec elle. Opak News ne présente donc pas comme établi le sort de l'ensemble des otages.\n\nSelon Haïti24, Paultre et Jean-Baptiste avaient été enlevés le 7 septembre à La Croix-Périsse, dans la zone de Gros-Morne, alors qu'ils revenaient d'une activité à Ennery liée au lancement de l'année scolaire. Le média évoque aussi deux policiers emmenés par les ravisseurs. Maghaiti attribue l'enlèvement au gang Kokorat San Ras. Cette attribution reste celle du média.\n\nLa libération rapportée de Paultre ne met pas fin à l'inquiétude pour Caleb Jean-Baptiste. Une confirmation officielle du sort de chaque personne enlevée reste nécessaire.",
    },
    sources: ["Haïti24", "Maghaiti — message public"],
    sourceLinks: [
      { name: "Haïti24", url: "https://haiti24.net/haiti-kidnapping-la-directrice-de-lonape-stephanie-paultre-liberee-me-caleb-jean-baptiste-toujours-sequestre/" },
      { name: "Maghaiti — message public", url: "https://x.com/maghaiti/status/2119471605634019397" },
    ],
  },
  {
    id: "qh-primo-votants-karibe-2026-11-08",
    tier: "quick-hit",
    topic: "politics",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:49:50-05:00",
    headline: {
      ht: "Premye vòt : CEP ak BINUH te reyini jèn nan Karibe",
      fr: "Primo-votants : le CEP et le BINUH ont réuni des jeunes au Karibe",
    },
    teaser: {
      ht: "Reyinyon 6 novanm nan te pale de pwosesis elektoral ak patisipasyon jèn fi yo.",
      fr: "La rencontre du 6 novembre portait sur le processus électoral et la participation des jeunes femmes.",
    },
    brief: {
      ht: "BINUH te òganize yon jounen sansibilizasyon vandredi 6 novanm nan Karibe, ak patisipasyon CEP, dapre HaitiLibre dimanch sa a. Te gen yon similasyon enskripsyon ak vòt nan pwogram nan.",
      fr: "Le BINUH a organisé vendredi 6 novembre une journée de sensibilisation au Karibe, avec la participation du CEP, rapporte HaitiLibre ce dimanche. Une simulation d'inscription et de vote figurait au programme.",
    },
    body: {
      ht: "Jèn ki pral vote pou premye fwa te patisipe vandredi 6 novanm nan yon jounen BINUH òganize nan otèl Karibe, ak patisipasyon CEP. HaitiLibre pibliye kont randi a dimanch 8 novanm sa a. Se yon reyinyon vandredi, se pa yon aktivite ki fèt jodi a.\n\nTèm nan te « Primo-votants : comprendre le processus électoral et ses acteurs ». Dapre medya a, prezidan CEP a, Peterson Pierre-Louis, mande jèn yo fè chwa lib, ak bon enfòmasyon, san presyon ni machandaj. Li te pale de enskripsyon nan rejis la ak delè elektoral yo.\n\nReprezantan ministè Jenès ak ministè Kondisyon fanm te pale de difikilte pou jwenn enfòmasyon ak patisipasyon jèn fi yo. CEP te òganize tou yon similasyon enskripsyon ak vòt.\n\nDirektè Rejis elektoral la, Jean Marie Rémy, te prezante enskripsyon mobil kòm yon mekanis ki an aplikasyon. Kont randi a pa bay kantite patisipan ni mezi sou enskripsyon jounen an pèmèt fèt.\n\nKesyon pou lektè yo : ki jan pou enfòmasyon sa yo rive nan komin yo ak jwenn jèn ki pa ka patisipe nan reyinyon nan kapital la ?",
      fr: "Des jeunes appelés à voter pour la première fois ont participé, vendredi 6 novembre à l'hôtel Karibe, à une journée organisée par le BINUH avec la participation du CEP. HaitiLibre en publie le compte rendu ce dimanche 8 novembre. Il s'agit d'une rencontre de vendredi, pas d'un événement survenu aujourd'hui.\n\nLe thème était « Primo-votants : comprendre le processus électoral et ses acteurs ». Le président du CEP, Peterson Pierre-Louis, a invité les jeunes à faire des choix libres et éclairés, sans pression ni marchandage, selon le média. Il a abordé l'inscription au registre et les échéances électorales.\n\nDes représentants des ministères de la Jeunesse et à la Condition féminine ont évoqué les difficultés d'accès à l'information et la participation des jeunes femmes. Une simulation d'inscription et de vote a aussi été organisée par le CEP.\n\nLe directeur du Registre électoral, Jean Marie Rémy, a présenté l'inscription mobile comme un mécanisme en cours de mise en œuvre. Le compte rendu ne donne pas de total de participants ni de mesure des inscriptions obtenues grâce à cette journée.\n\nQuestion aux lecteurs : comment porter ces informations dans les communes et auprès des jeunes qui ne peuvent pas participer aux rencontres de la capitale ?",
    },
    sources: ["HaitiLibre"],
    sourceLinks: [
      { name: "HaitiLibre", url: "https://www.haitilibre.com/article-48849-haiti-elections-journee-de-sensibilisation-pour-les-primo-votants.html" },
    ],
  },
  {
    id: "qh-nippes-projets-agricoles-suivi-2026-11-08",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:49:40-05:00",
    headline: {
      ht: "Nip : yon vizit suivi nan pwojè agrikòl Bank mondyal finanse yo",
      fr: "Nippes : une tournée de suivi des projets agricoles financés par la Banque mondiale",
    },
    teaser: {
      ht: "Transfòmasyon, depo, dlo ak elvaj pwason : responsab pwojè yo prezante sa yo reyalize.",
      fr: "Transformation, stockage, eau et pisciculture : les réalisations sont décrites par les responsables des projets.",
    },
    brief: {
      ht: "Dapre HaitiLibre, yon delegasyon Bank mondyal ak Ministè Agrikilti vizite enstalasyon pwojè PARSA ak TPR II nan Nip semèn sa a. Chif pwodiksyon yo rapòte yo pa soti nan yon odit endepandan Opak News.",
      fr: "Une délégation de la Banque mondiale et du ministère de l'Agriculture a visité cette semaine des installations des projets PARSA et TPR II dans les Nippes, selon HaitiLibre. Les chiffres de production rapportés n'ont pas fait l'objet d'un audit indépendant d'Opak News.",
    },
    body: {
      ht: "Yon delegasyon Bank mondyal, ansanm ak Ministè Agrikilti ak ekip pwojè PARSA ak TPR II, fè yon vizit suivi nan Nip semèn sa a. Nan atik li pibliye 8 novanm, HaitiLibre dekri etap ki soti Fon Denèg rive Ansavo, san li pa bay dat egzak chak vizit.\n\nNan Fon Denèg, misyon an vizite yon inite transfòmasyon manyòk ak enstalasyon Agro-Pasto Service nan Jovange, ki travay sou diri ak mayi. Responsab premye òganizasyon an di yo transfòme anviwon 60 tòn manyòk nan douz mwa. Kont randi a bay anviwon 216 tòn diri blan pou Agro-Pasto Service pandan menm peryòd la. Se aktè pwojè yo ki rapòte rezilta sa yo; redaksyon nou an pa verifye yo nan yon odit endepandan.\n\nNan Ti Rivyè Nip, yo prezante sant rasanbleman rezo ROPANIP la kòm yon mwayen pou kolekte, konsève epi distribye pwodui pou 39 lekòl. Vizit la touche tou yon sitèn fanmi, onz basen elvaj pwason nan Abraham ak enfrastrikti nan O-Rouck, nan komin Ansavo.\n\nVizit sa yo pa sifi pou etabli si inite yo fè benefis, si lekòl yo resevwa pwodui regilyèman oswa si ekipman yo ap dire. Kont randi nou konsilte a pa pibliye yon bilan finansye ni yon konparezon endepandan ant rezilta yo ak objektif depa yo.\n\nKesyon pou lektè yo : kiyès ki fè antretyen epi ki peye depans fonksyònman yo ? Èske pwodiktè ak lekòl yo ka konsilte kont ak rezilta envestisman sa yo ?",
      fr: "Une délégation de la Banque mondiale, accompagnée du ministère de l'Agriculture et des équipes PARSA et TPR II, a effectué cette semaine une tournée dans les Nippes. HaitiLibre décrit ce 8 novembre des visites de Fonds-des-Nègres à Anse-à-Veau, sans donner les dates exactes de chaque étape.\n\nÀ Fonds-des-Nègres, la mission a visité une unité de transformation du manioc et l'installation d'Agro-Pasto Service à Jovange, consacrée au riz et au maïs. Les responsables de la première organisation déclarent environ 60 tonnes de manioc transformées en douze mois. Le compte rendu fait état d'environ 216 tonnes de riz blanc pour Agro-Pasto Service sur la même durée. Ces résultats sont rapportés par les acteurs du projet, pas vérifiés par un audit indépendant de notre rédaction.\n\nÀ Petite-Rivière-des-Nippes, le centre d'agrégation du réseau ROPANIP est présenté comme un outil de collecte, de stockage et de distribution pour approvisionner 39 établissements scolaires. La tournée a aussi porté sur une citerne familiale, onze bassins piscicoles à Abraham et des infrastructures à O-Rouck, dans la commune d'Anse-à-Veau.\n\nCes visites ne suffisent pas à établir la rentabilité des unités, la régularité des livraisons aux écoles ou la durabilité des équipements. Le compte rendu consulté ne publie pas de bilan financier ni de comparaison indépendante des résultats avec les objectifs initiaux.\n\nQuestions aux lecteurs : qui assure l'entretien et paie les frais de fonctionnement ? Les producteurs et les écoles peuvent-ils consulter les comptes et les résultats de ces investissements ?",
    },
    sources: ["HaitiLibre"],
    sourceLinks: [
      { name: "HaitiLibre", url: "https://www.haitilibre.com/article-48847-haiti-agriculture-tournee-de-suivi-des-projets-de-la-banque-mondiale-dans-les-nippes.html" },
    ],
  },
  {
    id: "qh-dgi-revenus-2025-2026-bareme-2026-11-08",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:49:30-05:00",
    headline: {
      ht: "Revni 2025-2026 : ansyen barèm nan toujou aplikab, dapre rapèl DGI HaitiLibre reprann nan",
      fr: "Revenus 2025-2026 : l'ancien barème reste applicable, selon le rappel de la DGI relayé par HaitiLibre",
    },
    teaser: {
      ht: "Medya a rapòte yon peryòd deklarasyon ki soti 1ye oktòb 2026 rive 31 janvye 2027.",
      fr: "Le média rapporte une période de déclaration du 1er octobre 2026 au 31 janvier 2027.",
    },
    brief: {
      ht: "HaitiLibre rapòte DGI kenbe ansyen barèm nan pou revni egzèsis 2025-2026 yo, paske lalwa pa dwe aplike retwoaktivman. Paj jeneral DGI a konfime peryòd deklarasyon chak ane a, men nou pa jwenn avi espesifik egzèsis sa a nan sous prensipal nou konsilte yo.",
      fr: "HaitiLibre rapporte que la DGI maintient l'ancien barème pour les revenus de l'exercice 2025-2026, au nom de la non-rétroactivité des lois. La page générale de la DGI confirme la période annuelle de déclaration, mais l'avis spécifique à cet exercice n'a pas été retrouvé dans les sources primaires consultées.",
    },
    body: {
      ht: "Ansyen barèm enpo sou revni a toujou aplikab pou revni ki fèt pandan egzèsis fiskal 2025-2026 la, dapre yon rapèl DGI HaitiLibre reprann 8 novanm sa a. Medya a di peryòd pou depoze deklarasyon definitif la soti 1ye oktòb 2026 rive 31 janvye 2027.\n\nHaitiLibre di DGI baze desizyon sa a sou prensip ki di lalwa pa dwe aplike retwoaktivman, malgre nouvo Kòd fiskal la pibliye. Sa konsène revni egzèsis yo site a; rapèl la pa vle di tout dispozisyon nouvo kòd la sispann.\n\nPaj jeneral ofisyèl DGI sou deklarasyon definitif la bay yon peryòd 1ye oktòb rive 31 janvye pou revni egzèsis anvan an. Li dekri yon kalkil pwogresif, men li gen yon ansyen egzanp sou 2013-2014 tou. Li pa ranplase verifikasyon avi espesifik pou 2025-2026 la.\n\nNou pa jwenn orijinal avi sa a nan sous prensipal nou konsilte yo. Se poutèt sa nou atribye dat egzèsis sa a ak deklarasyon ki di ansyen barèm nan rete an vigè a ak kont randi HaitiLibre a. Nou pa dedui okenn nouvo papòt, kalkil pèsonèl oswa montan pou yon moun peye nan rapèl sa a.\n\nKontribyab yo dwe fè DGI konfime règ ak pyès ki aplikab pou sitiyasyon pa yo anvan yo depoze deklarasyon yo. Kesyon pou lektè yo : ki kote administrasyon an mete avi konplè ki esplike tranzisyon ant de barèm yo disponib ?",
      fr: "L'ancien barème de l'impôt sur le revenu reste applicable aux revenus réalisés pendant l'exercice fiscal 2025-2026, selon un rappel de la DGI relayé par HaitiLibre ce 8 novembre. Le média indique que le dépôt de la déclaration définitive s'étend du 1er octobre 2026 au 31 janvier 2027.\n\nHaitiLibre attribue ce maintien au principe de non-rétroactivité des lois, malgré la promulgation du nouveau Code fiscal. Cela concerne les revenus de l'exercice visé ; le rappel ne signifie pas que toutes les dispositions du nouveau code sont suspendues.\n\nLa page officielle générale de la DGI consacrée à la déclaration définitive indique bien une période du 1er octobre au 31 janvier pour les revenus de l'exercice précédent. Elle décrit un calcul progressif, mais comporte aussi un ancien exemple portant sur 2013-2014. Elle ne tient donc pas lieu de vérification de l'avis particulier pour 2025-2026.\n\nL'original de cet avis n'a pas été retrouvé dans les sources primaires consultées. Les dates propres à cet exercice et le maintien de l'ancien barème restent ici attribués au compte rendu de HaitiLibre. Aucun nouveau seuil, calcul individuel ou montant à payer n'est déduit de ce rappel.\n\nLes contribuables doivent faire confirmer par la DGI les règles et les pièces applicables à leur situation avant de déposer leur déclaration. Question aux lecteurs : où l'administration rend-elle accessible l'avis complet qui explique la transition entre les deux barèmes ?",
    },
    sources: ["HaitiLibre", "DGI — page générale de la déclaration définitive"],
    sourceLinks: [
      { name: "HaitiLibre", url: "https://www.haitilibre.com/article-48851-haiti-actualite-zapping.html" },
      { name: "DGI — page générale de la déclaration définitive", url: "https://dgi.gouv.ht/dgi_sev/declaration-definitive-impot-revenu/" },
    ],
  },

  {
    id: "ntk-opinion-institutions-gryla-2026-11-06",
    tier: "need-to-know",
    topic: "governance",
    publishedAt: "2026-11-06",
    publishedTime: "2026-11-06T14:50:00-05:00",
    quiet: false,
    author: { fr: "Par Blaise A. Joseph (BAJ)", ht: "Pa Blaise A. Joseph (BAJ)" },
    readMoreLink: {
      fr: { before: "Pour lire le premier article d'opinion, ", link: "cliquez ici", after: ".", href: "/story/ntk-detention-preventive-commissariats-2026-10-30" },
      ht: { before: "Pou li premye atik opinyon an, ", link: "klike isit", after: ".", href: "/ht/story/ntk-detention-preventive-commissariats-2026-10-30" },
    },
    headline: {
      ht: "Ayiti : yon kriz ki depase ensekirite a ; enstitisyon ki pa reponn ankò a atant pèp la.",
      fr: "Haïti : une crise qui dépasse l'insécurité ; des institutions qui ne répondent plus aux attentes du peuple.",
    },
    teaser: {
      ht: "Dèyè ensekirite ak enstabilite a, gen yon lòt kriz : enstitisyon piblik ki pa rive rann kont. GRYLA ap rele CEP, CSC/CA, CSPJ, MEF ak BRH.",
      fr: "Derrière l'insécurité et l'instabilité, une autre crise : des institutions publiques qui peinent à rendre compte. Le GRYLA interpelle le CEP, la CSC/CA, le CSPJ, le MEF et la BRH.",
    },
    brief: {
      ht: "Ensekirite ak enstabilite politik pa di tout bagay. Dèyè yo, gen enstitisyon ki pa rive asime responsablite yo. Kesyon GRYLA sou CEP, CSC/CA, jistis ak lavi chè a merite yon repons klè.",
      fr: "L'insécurité et l'instabilité politique ne disent pas tout. Derrière, des institutions peinent à assumer leurs responsabilités. Les questions du GRYLA sur le CEP, la CSC/CA, la justice et la vie chère méritent une réponse claire.",
    },
    body: {
      ht: "Kriz ayisyen an, yo souvan analize l anba ang ensekirite, enstabilite politik ak degradasyon ekonomik. Pwoblèm sa yo reyèl, e konsekans yo devastatè. Men yo reprezante sèlman yon pati nan maladi k ap ronje peyi a. Dèyè reyalite sa a, gen yon lòt kriz ki menm jan enkyetan : enstitisyon piblik ki pa rive asime responsablite yo anvè popilasyon an.\n\nYon peyi pa ka fonksyone dirab lè enstitisyon li yo sove anba obligasyon pou yo rann kont de zak yo. Li pa ka pretann bati demokrasi lè transparans tounen opsyonèl. E li pa ka mande sitwayen li yo fè konfyans nan yon sistèm ki, twò souvan, pa ba yo okenn rezon pou yo fè sa.\n\nEnkyetid \"Gwoup Refleksyon Yon Lòt Ayiti (GRYLA)\" leve dènyèman yo merite yon atansyon patikilye. Yo touche kesyon fondamantal sou jan Eta ayisyen an fonksyone, ak sou responsablite moun k ap egzèse pouvwa piblik la.\n\nEleksyon san transparans pa ka bay konfyans\n\nAyiti bezwen eleksyon. Men òganize eleksyon pa sifi. Pwosesis la dwe kredib, transparan, e konfòm ak règ ki etabli yo.\n\nKonsèy Elektoral Pwovizwa a (CEP) gen responsablite pou òganize pwosesis sa a. Depi yo konfye li resous piblik, sitwayen yo gen dwa konnen konbyen lajan yo mete a dispozisyon li, konbyen ki depanse, e pou ki rezon.\n\nGRYLA di li te voye yon korespondans ofisyèl bay CEP 05 oktòb 2026 pou jwenn enfòmasyon sou avansman pwosesis elektoral la ak jesyon resous finansye yo konsakre pou li. Dapre òganizasyon an, demach sa a poko jwenn yon repons satisfezan. Li di tou rapò finansye trimèsyal kad legal la egzije yo pa aksesib sou sit CEP ak Ministè Ekonomi ak Finans (MEF).\n\nKesyon an merite poze : poukisa yon enstitisyon ki chaje òganize eleksyon nasyonal yo pa fè enfòmasyon sou jesyon fon piblik yo konfye li yo fasil jwenn ?\n\nEndepandans yon enstitisyon pa janm dwe tounen yon mwayen pou sove anba kontwòl.\n\nNouvo kalandriye elektoral la, ki fikse premye tou eleksyon yo 18 jiyè 2027, leve kesyon tou. GRYLA opoze avèk li sitou paske dat sa a tonbe nan peryòd egzamen Eta yo, ak konsekans posib pou elèv ak etidyan yo.\n\nÒganizasyon an eksprime tou enkyetid li sou chanjman siksesif kalandriye a ak enplikasyon politik yo, sitou risk prolongasyon manda gouvènman aktyèl la.\n\nEnkyetid sa yo dwe egzamine seryezman. Kalandriye elektoral la dwe reponn a enterè peyi a, pa a enterè moun k ap egzèse pouvwa a tanporèman.\n\nEnstitisyon kontwòl yo dwe asime wòl yo\n\nLè yon enstitisyon pa bay enfòmasyon li gen obligasyon legal pou kominike, yon lòt enstitisyon dwe kapab entèvni.\n\nSe nan kontèks sa a GRYLA te saizi ofisyèlman Tribinal Siperyè Kont ak Kontansye Administratif (CSC/CA).\n\nÒganizasyon an mande Tribinal la konfime si li resevwa rapò finansye trimèsyal CEP gen obligasyon pou li transmèt yo. Si yo resevwa rapò sa yo, ki peryòd yo kouvri ? Èske yo te egzamine yo ? Ki swivi yo te bay yo ?\n\nKesyon sa yo lejitim.\n\nEnstitisyon kontwòl yo pa ka limite tèt yo nan yon egzistans administratif. Yo gen yon misyon presi : veye pou resous piblik yo itilize konfòm ak lalwa, e pou responsab yo rann kont jesyon yo.\n\nSi rapò yo te transmèt, tretman yo dwe kapab eksplike. Si se pa sa, CSC/CA dwe egzèse prerogativ lalwa ba li yo.\n\nLajan ki pou eleksyon yo se kolektivite a li ye. Li pa pwopriyete prive okenn responsab, okenn pati politik, ni okenn enstitisyon.\n\nAyiti pa ka kontinye fonksyone nan yon sistèm kote fon piblik depanse san sitwayen yo pa kapab jwenn eksplikasyon klè.\n\nLè jistis vin pa aksesib, se tout Repiblik la k ap tranble\n\nYoun nan aspè ki pi enkyetan nan kriz enstitisyonèl ayisyen an, se fonksyònman sistèm jidisyè a.\n\nTwòp sitwayen ap tann yon desizyon jistis toujou. Twòp dosye bloke nan tribinal yo. Gen moun ki pase lontan nan detansyon san sitiyasyon jidisyè yo pa evolye jan li ta dwe. Viktim pa jwenn repons, e sitwayen gen enpresyon lalwa pa aplike menm jan pou tout moun.\n\nYon jistis k ap fonksyone nan ritm enterè pèsonèl, lajan oswa relasyon, pèdi kredibilite li piti piti.\n\nEndepandans majistrati a endispansab. Jij yo dwe kapab egzèse fonksyon yo san peze politik oswa eksteryè. Men endepandans sa a pa vle di yo dispansè de obligasyon yo.\n\nYon majistra gen devwa aplike lalwa, trete dosye yo ak dilijans, e rann desizyon san patipri.\n\nKonsèy Siperyè Pouvwa Jidisyè (CSPJ) dwe tou egzèse responsablite li yo nèt nan administrasyon, kontwòl ak disiplin.\n\nLi ta enjis inyore kondisyon difisil anpil majistra ap travay ladan yo. Ensekirite, mank mwayen ak feblès estriktirèl sistèm nan se obstak reyèl.\n\nMen difikilte sa yo pa ka jistifye yon paralizi pèmanan jistis la. Jistis se youn nan poto sekirite piblik. San yon jistis kredib, pa ka gen lapè dirab, pwoteksyon reyèl pou sitwayen yo, ni demokrasi solid.\n\nLavi chè ak ensekirite : yon popilasyon pran nan eto\n\nPandan deba politik ak enstitisyonèl yo ap kontinye, fanmi ayisyen yo ap konfwonte yon reyalite ki pi imedya anpil.\n\nAnpil paran gen difikilte pou nouri pitit yo. Gen elèv k ap ale lekòl san yo pa manje. Gen fanmi ki pa kapab peye fre lekòl ankò. Travayè yo gen difikilte pou rive kote yo travay. Komèsan yo gen difikilte pou jwenn mache yo, e gen antrepriz ki oblije diminye aktivite yo oswa fèmen pòt yo.\n\nVyolans gwoup ame yo deranje deplasman, detwi aktivite ekonomik, e pwovoke deplasman plizyè milye fanmi.\n\nAn menm tan, ogmantasyon pri lavi a ap kontinye redwi pouvwa acha menaj yo.\n\nPopilasyon an jwenn tèt li konsa fas a plizyè fòm ensekirite : fizik, sikolojik ak ekonomik.\n\nNan kontèks sa a, Ministè Ekonomi ak Finans ak Bank Repiblik d Ayiti (BRH) dwe eksplike rezilta politik yo ap mete an aplikasyon, chak nan kad atribisyon yo.\n\nKi objektif yo te fikse ? Ki mezi yo te pran ? Ki rezilta konkrè yo te jwenn ?\n\nMen li ta senplis twòp pou mande BRH rezoud pwoblèm lavi chè a pou kont li, oswa mande Ministè Ekonomi ak Finans mete fen nan ensekirite a.\n\nEnstitisyon sa yo gen responsablite diferan, men konplemantè. Politik yo dwe antre nan yon pi bon kowòdinasyon ant dimansyon bidjètè, monètè, ekonomik, sosyal ak sekirite.\n\nEstabilite ekonomik pa ka evalye sèlman sou chif ak rapò administratif. Li dwe mezire tou ak kapasite sitwayen yo pou nouri tèt yo, travay, deplase, e viv ak diyite.\n\nAyiti bezwen rezilta, pa nouvo pwomès\n\nYon menm pwoblèm travèse tout sitiyasyon sa yo : mank responsablite enstitisyonèl.\n\nCEP dwe rann kont jesyon resous elektoral yo. CSC/CA dwe egzèse fonksyon kontwòl li yo. Sistèm jidisyè a dwe amelyore fonksyònman li. Ministè Ekonomi ak Finans ak BRH dwe eksplike rezilta politik respektif yo.\n\nSe pa egzijans ekstraòdinè. Se obligasyon nòmal nan yon Eta dwa.\n\nAyisyen yo tande ase pwomès. Yo asiste twòp diskou sou refòm, estabilite, demokrasi ak redresman nasyonal.\n\nSa yo ap tann jodi a, se rezilta yo ka verifye.\n\nPwoblèm nan vin tèlman fon, disfonksyònman enstitisyonèl yo fini konsidere kòm yon reyalite nòmal. Popilasyon an adapte ak kondisyon ki pa ta janm dwe aksepte kòm fatalite.\n\nNou pa ka nòmalize yon peyi kote sitwayen yo pè sikile de yon katye a yon lòt, kote jistis difisil pou jwenn, kote jesyon resous piblik manke transparans, e kote siviv tounen yon batay chak jou.\n\nFòk nou konprann tou kriz politik, kriz ekonomik ak kriz sosyal yo pa fenomèn izole. Youn ap nourisan lòt.\n\nEnstitisyon fèb kreye yon anviwònman favorab pou move jesyon ak enpinite. Yon jistis ki pa mache feblize Eta dwa a. Ensekirite detwi aktivite ekonomik. E absans reddisyon kont pèmèt pwoblèm sa yo dire.\n\nEntèvansyon GRYLA depase kad yon senp konferans pou laprès. Li leve kesyon ki konsène tout sosyete ayisyen an, e sitou moun ki resevwa responsablite pou jere zafè piblik yo.\n\nPèp ayisyen an pa mande okenn privilèj. Li mande enstitisyon ki respekte lalwa, ki jere resous piblik yo kòrèkteman, e ki konprann tout fonksyon piblik pote obligasyon.\n\nVrè kesyon Ayiti dwe reponn lan, se pa sèlman konnen kilè pwochen eleksyon yo ap fèt, oswa kiyès ki pral dirije pwochen gouvènman an.\n\nKesyon an se konnen si enstitisyon Repiblik la finalman dispoze sèvi popilasyon an olye enterè pa yo.\n\nToutotan kesyon sa a pa jwenn repons nan zak konkrè, diskou sou demokrasi, estabilite ak redresman nasyonal ap kontinye sonnen vid.\n\nAyiti pa manke moun ki kapab fè pwomès. Sa li manke, se enstitisyon ki kapab e ki vle asime responsablite yo. E pèp la pa ka kontinye peye pri defayans yo.",
      fr: "La crise haïtienne est souvent analysée sous l'angle de l'insécurité, de l'instabilité politique et de la dégradation économique. Ces problèmes sont réels et leurs conséquences sont dévastatrices. Mais ils ne représentent qu'une partie du mal qui ronge le pays. Derrière cette réalité se cache une autre crise, tout aussi préoccupante : celle d'institutions publiques qui peinent à assumer leurs responsabilités envers la population.\n\nUn pays ne peut pas fonctionner durablement lorsque ses institutions échappent à l'obligation de rendre compte de leurs actes. Il ne peut prétendre construire une démocratie lorsque la transparence devient facultative. Et il ne peut demander à ses citoyens de faire confiance à un système qui, trop souvent, ne leur donne aucune raison de le faire.\n\nLes préoccupations soulevées récemment par le \"Gwoup Refleksyon Yon Lòt Ayiti (GRYLA)\" méritent une attention particulière. Elles touchent à des questions fondamentales sur le fonctionnement de l'État haïtien et sur la responsabilité de ceux qui exercent le pouvoir public.\n\nDes élections sans transparence ne peuvent inspirer confiance\n\nHaïti a besoin d'élections. Mais organiser des élections ne suffit pas. Le processus doit être crédible, transparent et conforme aux règles établies.\n\nLe Conseil électoral provisoire (CEP) a la responsabilité d'organiser ce processus. À partir du moment où des ressources publiques lui sont confiées, les citoyens ont le droit de savoir combien d'argent a été mis à sa disposition, combien a été dépensé et à quelles fins.\n\nLe GRYLA affirme avoir adressé une correspondance officielle au CEP le 05 octobre 2026 pour obtenir des informations sur l'état d'avancement du processus électoral et la gestion des ressources financières qui lui sont consacrées. Selon l'organisation, cette démarche n'a pas encore reçu de réponse satisfaisante. Elle indique également que les rapports financiers trimestriels exigés par le cadre légal ne sont pas accessibles sur les sites du CEP et du Ministère de l'Économie et des Finances (MEF).\n\nLa question mérite d'être posée : pourquoi une institution chargée d'organiser les élections nationales ne rend-elle pas facilement accessibles les informations relatives à la gestion des fonds publics qui lui sont confiés ?\n\nL'indépendance d'une institution ne doit jamais devenir un moyen d'échapper au contrôle.\n\nLe nouveau calendrier électoral, qui fixe le premier tour des élections au 18 juillet 2027, soulève également des interrogations. Le GRYLA s'y oppose notamment parce que cette date coïncide avec la période des examens d'État, avec des conséquences possibles pour les élèves et les étudiants.\n\nL'organisation exprime aussi ses inquiétudes quant aux modifications successives du calendrier et à leurs implications politiques, notamment le risque de prolongation du mandat du gouvernement actuel.\n\nCes préoccupations doivent être examinées sérieusement. Le calendrier électoral doit répondre aux intérêts du pays et non aux intérêts de ceux qui exercent temporairement le pouvoir.\n\nLes institutions de contrôle doivent assumer leur rôle\n\nLorsqu'une institution ne fournit pas les informations qu'elle est légalement tenue de communiquer, une autre institution doit pouvoir intervenir.\n\nC'est dans ce contexte que le GRYLA a saisi officiellement la Cour supérieure des comptes et du contentieux administratif (CSC/CA).\n\nL'organisation demande notamment à la Cour de confirmer si elle a reçu les rapports financiers trimestriels que le CEP est tenu de lui transmettre. Si ces rapports ont été reçus, quelles périodes couvrent-ils ? Ont-ils fait l'objet d'un examen ? Quelles suites leur ont été réservées ?\n\nCes questions sont légitimes.\n\nLes institutions de contrôle ne peuvent se limiter à une existence administrative. Elles ont une mission précise : veiller à ce que les ressources publiques soient utilisées conformément à la loi et que les responsables rendent compte de leur gestion.\n\nSi les rapports ont été transmis, leur traitement doit pouvoir être expliqué. Dans le cas contraire, la CSC/CA doit exercer les prérogatives que la loi lui confère.\n\nL'argent destiné aux élections appartient à la collectivité. Il ne constitue pas la propriété privée d'aucun responsable, d'aucun parti politique et d'aucune institution.\n\nHaïti ne peut continuer à fonctionner dans un système où les fonds publics sont dépensés sans que les citoyens puissent obtenir des explications claires.\n\nQuand la justice devient inaccessible, c'est toute la République qui vacille\n\nL'un des aspects les plus préoccupants de la crise institutionnelle haïtienne demeure le fonctionnement du système judiciaire.\n\nTrop de citoyens attendent encore une décision de justice. Trop de dossiers restent bloqués dans les tribunaux. Des personnes passent de longues périodes en détention sans que leur situation judiciaire n'évolue comme elle le devrait. Des victimes n'obtiennent pas de réponse et des citoyens ont le sentiment que la loi ne s'applique pas de la même manière à tous.\n\nUne justice qui fonctionne au rythme des intérêts personnels, de l'argent ou des relations perd progressivement sa crédibilité.\n\nL'indépendance de la magistrature est indispensable. Les juges doivent pouvoir exercer leurs fonctions sans subir de pressions politiques ou extérieures. Mais cette indépendance ne signifie pas qu'ils sont dispensés de leurs obligations.\n\nUn magistrat a le devoir d'appliquer la loi, de traiter les dossiers avec diligence et de rendre des décisions impartiales.\n\nLe Conseil supérieur du pouvoir judiciaire (CSPJ) doit également exercer pleinement ses responsabilités en matière d'administration, de contrôle et de discipline.\n\nIl serait injuste d'ignorer les conditions difficiles dans lesquelles travaillent de nombreux magistrats. L'insécurité, le manque de moyens et les faiblesses structurelles du système constituent de véritables obstacles.\n\nCependant, ces difficultés ne peuvent justifier une paralysie permanente de la justice. La justice est l'un des piliers de la sécurité publique. Sans une justice crédible, il ne peut y avoir de paix durable, de protection réelle des citoyens ni de démocratie solide.\n\nLa vie chère et l'insécurité : une population prise en étau\n\nPendant que les débats politiques et institutionnels se poursuivent, les familles haïtiennes affrontent une réalité beaucoup plus immédiate.\n\nDe nombreux parents ont du mal à nourrir leurs enfants. Certains élèves se rendent à l'école sans avoir mangé. Des familles ne peuvent plus payer les frais de scolarité. Des travailleurs peinent à rejoindre leur lieu de travail. Des commerçants ont du mal à accéder aux marchés et des entreprises sont contraintes de réduire leurs activités ou de fermer leurs portes.\n\nLa violence des groupes armés perturbe les déplacements, détruit des activités économiques et provoque le déplacement de milliers de familles.\n\nParallèlement, la hausse du coût de la vie continue de réduire le pouvoir d'achat des ménages.\n\nLa population se retrouve ainsi confrontée à plusieurs formes d'insécurité : physique, psychologique et économique.\n\nDans ce contexte, le ministère de l'Économie et des Finances et la Banque de la République d'Haïti (BRH) doivent expliquer les résultats des politiques qu'ils mettent en œuvre, chacun dans le cadre de ses attributions.\n\nQuels objectifs ont été fixés ? Quelles mesures ont été prises ? Quels résultats concrets ont été obtenus ?\n\nIl serait toutefois simpliste de demander à la BRH de résoudre seule le problème de la vie chère ou au ministère de l'Économie et des Finances de mettre fin à l'insécurité.\n\nCes institutions ont des responsabilités différentes, mais complémentaires. Leurs politiques doivent s'inscrire dans une meilleure coordination entre les dimensions budgétaire, monétaire, économique, sociale et sécuritaire.\n\nLa stabilité économique ne peut être évaluée uniquement à partir de chiffres et de rapports administratifs. Elle doit aussi se mesurer à la capacité des citoyens de se nourrir, de travailler, de se déplacer et de vivre dignement.\n\nHaïti a besoin de résultats, pas de nouvelles promesses\n\nUn même problème traverse toutes ces situations : le manque de responsabilité institutionnelle.\n\nLe CEP doit rendre compte de la gestion des ressources électorales. La CSC/CA doit exercer ses fonctions de contrôle. Le système judiciaire doit améliorer son fonctionnement. Le ministère de l'Économie et des Finances et la BRH doivent expliquer les résultats de leurs politiques respectives.\n\nCe ne sont pas des exigences extraordinaires. Ce sont des obligations normales dans un État de droit.\n\nLes Haïtiens ont entendu suffisamment de promesses. Ils ont assisté à trop de discours sur les réformes, la stabilité, la démocratie et le redressement national.\n\nCe qu'ils attendent aujourd'hui, ce sont des résultats vérifiables.\n\nLe problème est devenu tellement profond que les dysfonctionnements institutionnels finissent par être considérés comme une réalité normale. La population s'adapte à des conditions qui ne devraient jamais être acceptées comme une fatalité.\n\nNous ne pouvons pas normaliser un pays où les citoyens craignent de circuler d'un quartier à un autre, où la justice est difficilement accessible, où la gestion des ressources publiques manque de transparence et où survivre devient un combat quotidien.\n\nIl faut également comprendre que la crise politique, la crise économique et la crise sociale ne sont pas des phénomènes isolés. Elles s'alimentent mutuellement.\n\nDes institutions faibles créent un environnement favorable à la mauvaise gestion et à l'impunité. Une justice défaillante fragilise l'État de droit. L'insécurité détruit les activités économiques. Et l'absence de reddition de comptes permet à ces problèmes de perdurer.\n\nL'intervention du GRYLA dépasse donc le cadre d'une simple conférence de presse. Elle soulève des questions qui concernent l'ensemble de la société haïtienne et, surtout, ceux qui ont reçu la responsabilité de gérer les affaires publiques.\n\nLe peuple haïtien ne demande aucun privilège. Il demande des institutions qui respectent la loi, gèrent correctement les ressources publiques et comprennent que toute fonction publique entraîne des obligations.\n\nLa véritable question à laquelle Haïti doit répondre n'est plus uniquement de savoir quand auront lieu les prochaines élections ou qui dirigera le prochain gouvernement.\n\nLa question est de savoir si les institutions de la République sont enfin disposées à servir la population plutôt que leurs propres intérêts.\n\nTant que cette question ne trouvera pas de réponse dans des actes concrets, les discours sur la démocratie, la stabilité et le redressement national continueront de sonner creux.\n\nHaïti ne manque pas de personnes capables de faire des promesses. Ce qui lui manque, ce sont des institutions capables et désireuses d'assumer leurs responsabilités. Et le peuple ne peut plus continuer à payer le prix de leurs défaillances.",
    },
    sources: ["GRYLA", "CEP", "MEF", "CSC/CA", "CSPJ", "BRH"],
  },
  {
    id: "ntk-sud-semences-garanties-2026-11-08",
    tier: "need-to-know",
    topic: "commerce",
    publishedAt: "2026-11-08",
    publishedTime: "2026-11-08T08:26:11-05:00",
    headline: {
      ht: "Semans yo distribye nan Sid : ki garanti pou rekòt la ak pou replante apre ?",
      fr: "Semences distribuées dans le Sud : quelles garanties pour les récoltes et les prochains semis ?",
    },
    teaser: {
      ht: "Yo anonse prèske 4200 benefisyè. Orijin, varyete, tès ak dwa pou replante : detay yo manke.",
      fr: "Près de 4200 bénéficiaires annoncés. Origine, variétés, tests et droit de ressemer : les précisions manquent.",
    },
    brief: {
      ht: "Ministè Agrikilti ak FAO anonse distribisyon pou prèske 4200 pwodiktè nan Sid. Anons nou konsilte yo site rekòt ak materyèl yo, men yo pa bay non varyete yo, founisè yo, rezilta tès yo oswa kondisyon pou reutilize semans yo. Pwodiktè yo dwe kapab jwenn repons sa yo.",
      fr: "Le ministère de l'Agriculture et la FAO annoncent des distributions à près de 4200 producteurs du Sud. Les annonces consultées nomment les cultures et le matériel, mais pas les variétés, les fournisseurs, les résultats des tests ni les conditions de réutilisation des semences. Ce sont des réponses que les producteurs doivent pouvoir obtenir.",
    },
    body: {
      ht: "Ministè Agrikilti anonse, ak sipò FAO, distribisyon semans ak materyèl agrikòl bay prèske 4200 pwodiktè nan Sid. Men kisa nou konnen sou semans yo remèt peyizan yo, kalite yo ak posiblite pou sèvi ak yon pati nan rekòt la pou replante ? Anons nou konsilte yo pa bay repons sou kesyon esansyèl sa yo.\n\nDapre ministè a, jan Le Nouvelliste rapòte 6 novanm ak HaitiLibre 7 novanm, prèske 3000 pwodiktè nan Kanperen, Kavayon, Chardonnières ak Tòbèk resevwa kit semans legim, zouti ak angrè. Anviwon 1200 lòt nan Pòtopiman, Chardonnières ak Tibiwon resevwa semans mayi ak pwa nwa, bouti patat ak manyòk ansanm ak rejè bannann. Chif sa yo soti nan enstitisyon yo; se pa yon resansman Opak News fè poukont li.\n\nPiblikasyon yo prezante distribisyon an kòm yon sipò pou pwodiksyon ak sekirite alimantè. Men yo pa bay non egzak varyete yo, founisè yo ak peyi kote yo soti. Yo pa di si se varyete polinizasyon lib, ibrid oswa varyete yo modifye jenetikman. Yo pa pibliye rezilta tès jèminasyon, kontwòl maladi, sètifikasyon oswa esè ki montre semans yo adapte ak kondisyon lokal yo. Yo pa esplike nonplis kondisyon agronomik ak legal pou replante ak grenn ki soti nan rekòt la. Prezans FAO pa ranplase enfòmasyon sa yo.\n\nGen twa kesyon diferan : èske semans lan bon kalite ? Èske jenerasyon ki vin apre a ap kenbe karakteristik ak randman ki fyab ? Èske kiltivatè a gen dwa replante l ? Lefètke yo modifye yon plant jenetikman pa vle di grenn li esteril. Inivèsite Minnesota raple plant ibrid yo ka bay grenn ki jèmen, men plant ki soti nan grenn sa yo pa idantik ak paran yo. Restriksyon nan kontra oswa dwa pwopriyete entelektyèl se yon lòt kesyon ankò : Inivèsite Maryland esplike sa nan kontèks Etazini. Sa pa demontre menm restriksyon sa yo aplike sou semans yo distribye ann Ayiti yo.\n\nMen kesyon ministè a ak FAO dwe bay limyè sou yo :\n\n• Kiyès ki founi semans sa yo, kote yo soti epi ki non egzak varyete yo ? Èske se varyete polinizasyon lib, ibrid oswa OGM ?\n\n• Kiyès ki evalye yo yon fason endepandan ? Kote sètifika yo, rezilta tès jèminasyon ak kontwòl maladi yo, ansanm ak esè ki montre yo adapte ak tè ak klima komin ki resevwa yo a ?\n\n• Èske yo verifye varyete sa yo pou peyizan yo ka konsève yon pati nan grenn apre rekòt la epi replante yo san difikilte ? Èske karakteristik ak randman yo ap rete fyab ? Ki garanti ministè a ak FAO bay sou sa ?\n\n• Èske gen lisans, kontra oswa lòt restriksyon ki limite dwa pou replante ? Èske pwodiktè yo resevwa kondisyon sa yo ak esplikasyon klè ?\n\n• Si semans yo pa bay rezilta, kiyès ki responsab pèt yo epi kiyès k ap peye ? Si pwodiktè yo oblije achte nouvo semans chak sezon, kiyès k ap peye depans sa a epi ki solisyon ki pwoteje otonomi yo ?\n\nRepons sa yo pa parèt nan anons nou egzamine yo. Sa pa prèv semans yo pa bon, yo esteril oswa yo se OGM. Men li kite kesyon konkrè sou rekòt la, dwa peyizan yo ak depans yo ka genyen pi devan.",
      fr: "Des semences et du matériel agricole ont été distribués à près de 4200 producteurs du Sud, annonce le ministère de l'Agriculture avec l'appui de la FAO. Mais que sait-on des semences confiées aux agriculteurs, de leur qualité et de la possibilité de les réutiliser après la récolte ? Les annonces consultées ne permettent pas de répondre à ces questions essentielles.\n\nSelon le ministère, cité par Le Nouvelliste le 6 novembre et HaitiLibre le 7 novembre, près de 3000 producteurs de Camp-Perrin, Cavaillon, Chardonnières et Torbeck ont reçu des kits de semences maraîchères, des outils et des fertilisants. Quelque 1200 autres, à Port-à-Piment, Chardonnières et Tiburon, ont reçu des semences de maïs et de haricot noir, des boutures de patate douce et de manioc et des drageons de bananier. Ces nombres sont des comptes institutionnels, pas un recensement indépendant d'Opak News.\n\nLes publications présentent l'opération comme un soutien à la production et à la sécurité alimentaire. Elles ne précisent toutefois ni les noms exacts des variétés, ni les fournisseurs et pays d'origine, ni leur statut — variétés à pollinisation libre, hybrides ou génétiquement modifiées. Elles ne publient pas de résultats de germination, de contrôles sanitaires, de certification ou d'essais d'adaptation aux conditions locales. Elles n'expliquent pas non plus les conditions agronomiques et juridiques d'un nouveau semis à partir de la récolte. L'appui de la FAO ne remplace pas ces informations.\n\nTrois questions doivent rester distinctes : une semence est-elle de bonne qualité ? La génération suivante conservera-t-elle des caractéristiques et des rendements fiables ? L'agriculteur a-t-il le droit de la ressemer ? Une modification génétique ne signifie pas, à elle seule, stérilité. L'Université du Minnesota rappelle que les hybrides peuvent produire des graines viables, mais que leur descendance n'est pas identique aux parents. Des restrictions contractuelles ou de propriété intellectuelle sont encore une autre question : l'Université du Maryland les décrit dans le contexte américain. Cela ne démontre pas que de telles restrictions s'appliquent aux lots distribués en Haïti.\n\nQuestions que le ministère et la FAO doivent éclaircir :\n\n• Qui fournit ces semences, d'où viennent-elles et quels sont les noms exacts des variétés ? Sont-elles à pollinisation libre, hybrides ou OGM ?\n\n• Qui les a évaluées de façon indépendante ? Où sont les certificats, les résultats de germination et de qualité sanitaire, ainsi que les essais montrant leur adaptation aux sols et au climat des communes bénéficiaires ?\n\n• Les variétés distribuées ont-elles été vérifiées pour que les agriculteurs puissent conserver une partie des semences après la récolte et les ressemer sans difficulté ? Les caractéristiques et les rendements resteront-ils fiables ? Quelles garanties le ministère et la FAO donnent-ils sur ce point ?\n\n• Existe-t-il des licences, contrats ou autres restrictions au réensemencement ? Les producteurs ont-ils reçu ces conditions, avec des explications claires ?\n\n• Si les semences échouent, qui répond des pertes et qui paie ? Si les producteurs doivent acheter de nouvelles semences chaque saison, qui en assume le coût et quelles solutions préservent leur autonomie ?\n\nCes réponses ne figurent pas dans les annonces examinées. Leur absence n'est pas la preuve que les semences sont mauvaises, stériles ou OGM. Elle laisse en revanche des questions concrètes sur la récolte, les droits et les dépenses futures des agriculteurs.",
    },
    sources: ["Le Nouvelliste — annonce MARNDR", "HaitiLibre", "University of Minnesota Extension — hybridation et conservation", "NC State Extension — OGM et stérilité", "University of Maryland Extension — restrictions, contexte américain"],
    sourceLinks: [
      { name: "Le Nouvelliste — annonce MARNDR", url: "https://lenouvelliste.com/article/273646/agriculture-pres-de-4-200-producteurs-du-sud-beneficient-dintrants-et-de-materiels-agricoles" },
      { name: "HaitiLibre", url: "https://www.haitilibre.com/en/news-48841-agriculture-distribution-of-tools-and-inputs-for-farmers-in-the-south.html" },
      { name: "University of Minnesota Extension — hybridation et conservation", url: "https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/saving-vegetable-seeds" },
      { name: "NC State Extension — OGM et stérilité", url: "https://agbiotech.ces.ncsu.edu/news/gmos-and-patents-part-1-terminator-genes/" },
      { name: "University of Maryland Extension — restrictions, contexte américain", url: "https://www.extension.umd.edu/resource/legal-liability-saving-seeds-era-expiring-patents-fs-1000" },
    ],
  },
  {
    id: "ntk-miragoane-muscadin-trofort-2026-11-08",
    tier: "need-to-know",
    topic: "justice",
    publishedAt: "2026-11-08",
    publishedTime: "2026-11-08T08:25:41-05:00",
    headline: {
      ht: "Miragwàn : yo aksepte demisyon Muscadin, Accel Trofort pran plas la pou yon ti tan",
      fr: "Miragoâne : la démission de Muscadin acceptée, Accel Trofort nommé par intérim",
    },
    teaser: {
      ht: "Pakè a chanje responsab. Sa pa vle di okenn kandidati politik valide.",
      fr: "Le parquet change de direction. Cette succession ne vaut pas validation d'une candidature politique.",
    },
    brief: {
      ht: "Dapre Le Nouvelliste 6 novanm, Ministè Jistis aksepte demisyon Jean Ernest Muscadin epi chwazi Accel Trofort pou dirije pakè Miragwàn pou yon ti tan.",
      fr: "Le ministère de la Justice a accepté la démission de Jean Ernest Muscadin et désigné Accel Trofort pour assurer l'intérim au parquet de Miragoâne, rapporte Le Nouvelliste le 6 novembre.",
    },
    body: {
      ht: "Jean Ernest Muscadin kite pakè tribinal premye enstans Miragwàn nan. Ministè Jistis ak Sekirite piblik aksepte demisyon li epi nonmen Mèt Accel Trofort kòm komisè gouvènman enterimè, ak efè imedya, dapre Le Nouvelliste 6 novanm.\n\nLèt demisyon Muscadin nan te date 29 oktòb. Desizyon ministè a òganize ranplasman li nan tèt pakè a. Se pa yon desizyon elektoral, ni yon validasyon kandidati li pou prezidans.\n\nNan yon suivi ki parèt 7 novanm, Vant Bèf Info rapòte enkyetid nan Gran Sid sou kontinite travay lajistis ak sekirite apre depa li. Enkyetid sa yo pa prèv gang deja tabli nan nouvo komin yo site yo.\n\nBilan Muscadin nan rete konteste. VBI raple akizasyon egzekisyon san jijman Gwoup ekspè Nasyonzini an mete sou do li. Menm nan batay kont gang, otorite lajistis yo dwe respekte pwosedi ak dwa fondamantal moun.\n\nKesyon pou lektè yo : ki garanti konkrè ministè a bay pou ankèt, pouswit lajistis ak pwoteksyon popilasyon an kontinye nan Nip yo ?",
      fr: "Jean Ernest Muscadin quitte le parquet près le tribunal de première instance de Miragoâne. Le ministère de la Justice et de la Sécurité publique a accepté sa démission et désigné Me Accel Trofort comme commissaire du gouvernement par intérim, avec effet immédiat, rapporte Le Nouvelliste le 6 novembre.\n\nLa lettre de démission de Muscadin était datée du 29 octobre. La décision ministérielle organise sa succession à la tête du parquet. Elle ne constitue ni une décision électorale ni une validation de sa candidature à la présidence.\n\nDans un suivi publié le 7 novembre, Vant Bèf Info rapporte des inquiétudes dans le Grand Sud sur la continuité de l'action judiciaire et la sécurité après son départ. Ces craintes ne constituent pas la preuve d'une nouvelle implantation de gangs dans les communes citées.\n\nLe bilan de Muscadin reste contesté. VBI rappelle les accusations d'exécutions extrajudiciaires présumées formulées à son encontre par le Groupe d'experts de l'ONU. La lutte contre les gangs ne dispense pas les autorités judiciaires de respecter les procédures et les droits fondamentaux.\n\nQuestion aux lecteurs : quelles garanties concrètes le ministère donne-t-il pour assurer la continuité des enquêtes, des poursuites et de la protection de la population dans les Nippes ?",
    },
    sources: ["Le Nouvelliste", "Vant Bèf Info"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273641/jean-ernest-muscadin-quitte-le-parquet-de-miragoane-accel-trofort-designe-commissaire-du-gouvernement-ai" },
      { name: "Vant Bèf Info", url: "https://vantbefinfo.com/haiti-securite-le-depart-de-muscadin-ravive-les-inquietudes-dans-le-grand-sud/" },
    ],
  },
    {
    id: "ntk-pacte-relevement-14-engagements-2026-11-08",
    tier: "need-to-know",
    topic: "governance",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T16:10:50-05:00",
    isFollowUp: true,
    headline: {
      ht: "Akò relèvman : prezantasyon nan Kap Ayisyen, premye bilan prevwa pou avril 2027",
      fr: "Pacte de relèvement : présentation au Cap-Haïtien, premier bilan prévu en avril 2027",
    },
    teaser: {
      ht: "Katòz angajman sou douz mwa. Yon finansman anplis Bank mondyal la rete sou kondisyon.",
      fr: "Quatorze engagements sur douze mois. Un financement supplémentaire de la Banque mondiale reste sous conditions.",
    },
    brief: {
      ht: "Le Nouvelliste mete prezantasyon akò a samdi 7 novanm nan Kap Ayisyen. MEF te anonse li antre an vigè 6 novanm. Premye rapò suivi a prevwa pou avril 2027.",
      fr: "Le Nouvelliste situe la présentation du pacte au samedi 7 novembre au Cap-Haïtien. Le MEF en avait annoncé l'entrée en vigueur le 6 novembre. Le premier rapport de suivi est prévu en avril 2027.",
    },
    body: {
      ht: "Gouvènman ayisyen an ak patnè entènasyonal li yo anonse, nan Kap Ayisyen, Akò pou prevansyon ak relèvman an antre an vigè. Ministè Ekonomi ak Finans te fè sa konnen 6 novanm, dapre Le Nouvelliste. Nan yon atik 9 novanm, jounal la mete prezantasyon an samdi 7 novanm. Kominike Bank mondyal la, li menm, pote yon dateline 5 novanm nan Kap Ayisyen.\n\nAkò a prevwa 14 angajman sou yon premye faz douz mwa, yo gwoupe yo sou kat aks: Leta de dwa, lajistis ak sekirite; gouvènans ak batay kont koripsyon; estabilite makwoekonomik ak fiskalite; travay ak envestisman. Yo prevwa de rapò suivi. Premye a, apre sis mwa, anonse pou avril 2027, dapre Le Nouvelliste ak Caribbean Times.\n\nDapre Caribbean Times ak kominike Bank mondyal la, Serge Gabriel Colin, minis Ekonomi ak Finans, di akò a tounen fèy wout gouvènman an yon plan aksyon, ak objektif yo ka mezire ak delè. Anne-Lucie Lefebvre, responsab peyi Bank mondyal pou Ayiti, salye travay gouvènman an sou kad sa a, dapre Caribbean Times. Si pwogrè yo satisfezan, Bank mondyal ap anvizaje yon finansman anplis ak yon kad angajman pou twa lòt ane. Finansman sa a poko garanti. Kont randi nou konsilte yo poko detaye katòz objektif yo, ni montan yon posib sipò. FMI, OEA ak ajans Nasyonzini yo dwe kontribye nan suivi a, dapre sous sa yo.",
      fr: "Le gouvernement haïtien et ses partenaires internationaux ont annoncé, au Cap-Haïtien, l'entrée en vigueur du Pacte pour la prévention et le relèvement. Le ministère de l'Économie et des Finances l'avait fait savoir le 6 novembre, selon Le Nouvelliste. Dans un article du 9 novembre, le journal situe la présentation au samedi 7 novembre. Le communiqué de la Banque mondiale porte, lui, un dateline du 5 novembre au Cap-Haïtien.\n\nLe pacte prévoit 14 engagements sur une première phase de douze mois, regroupés autour de quatre axes : l'État de droit, la justice et la sécurité ; la gouvernance et la lutte contre la corruption ; la stabilité macroéconomique et la fiscalité ; l'emploi et l'investissement. Deux rapports de suivi sont prévus. Le premier, après six mois, est annoncé pour avril 2027, selon Le Nouvelliste et Caribbean Times.\n\nSelon Caribbean Times et le communiqué de la Banque mondiale, Serge Gabriel Colin, ministre de l'Économie et des Finances, a dit que le pacte transforme la feuille de route du gouvernement en un plan d'action, avec des cibles mesurables et des échéances. Anne-Lucie Lefebvre, responsable pays de la Banque mondiale pour Haïti, a salué le travail du gouvernement sur ce cadre, d'après Caribbean Times. Sous réserve de progrès satisfaisants, la Banque mondiale envisagera un financement supplémentaire et un cadre d'engagement pour trois autres années. Ce financement n'est pas acquis. Les comptes rendus consultés ne détaillent toujours pas les quatorze cibles ni le montant d'un éventuel appui. Le FMI, l'OEA et des agences des Nations unies doivent contribuer au suivi, selon ces sources.",
    },
    sources: ["Le Nouvelliste", "Caribbean Times", "Banque mondiale"],
    sourceLinks: [
      { name: "Le Nouvelliste - présentation au Cap-Haïtien", url: "https://lenouvelliste.com/article/273705/cap-haitien-quatorze-engagements-de-reforme-au-coeur-dun-nouveau-partenariat-pour-le-relevement" },
      { name: "Le Nouvelliste - annonce du MEF", url: "https://lenouvelliste.com/article/273674/le-gouvernement-et-ses-partenaires-lancent-un-pacte-de-prevention-et-de-relevement" },
      { name: "Caribbean Times", url: "https://caribbeantimes.com/world-bank-outlines-12-month-reform-plan-to-support-haitis-recovery/" },
      { name: "Banque mondiale", url: "https://www.worldbank.org/en/news/press-release/2026/11/06/new-framework-for-haiti-sets-a-12-month-path-for-reform-and-renewed-trust" },
    ],
  },
  {
    id: "ntk-deplaces-marches-securite-2026-11-08",
    tier: "need-to-know",
    topic: "society",
    publishedAt: "2026-11-08",
    publishedTime: "2026-11-08T08:25:21-05:00",
    headline: {
      ht: "Moun ki deplase yo mande operasyon kont gang pandan mach sipò pou Salvador yo",
      fr: "Des déplacés réclament des opérations contre les gangs lors de marches de soutien aux Salvadoriens",
    },
    teaser: {
      ht: "Nan Pòtoprens, Jeremi ak Beladè, manifestan mande sekirite pou yo ka retounen lakay yo.",
      fr: "À Port-au-Prince, Jérémie et Belladère, des manifestants demandent la sécurité et le retour chez eux.",
    },
    brief: {
      ht: "Dapre EFE, te gen mach vandredi 6 novanm nan plizyè vil. Moun gang chase nan katye yo montre sipò yo pou sòlda salvadoryen yo epi mande yo akselere operasyon kont gwoup ame yo.",
      fr: "Des marches ont eu lieu vendredi 6 novembre dans plusieurs villes, rapporte EFE. Des personnes chassées de leur quartier ont exprimé leur soutien aux soldats salvadoriens et demandé l'accélération des opérations contre les groupes armés.",
    },
    body: {
      ht: "Manifestan pran lari nan Pòtoprens, Jeremi ak Beladè vandredi 6 novanm pou soutni sòlda salvadoryen yo epi mande operasyon kont gang, dapre yon repòtaj EFE pibliye nan demen.\n\nNan kapital la, plizyè patisipan di se viktim gang ki chase yo nan katye yo. Repòtaj la site sitou Fò Nasyonal, Pòs Machan, avni Poupelard ak Kafoufèy. Gen fanm ki rakonte yo pèdi kay, komès ak mwayen pou voye pitit yo lekòl.\n\nNan Jeremi, te gen bann rara nan mobilizasyon an, dapre ajans lan. Nan slogan yo, manifestan yo montre sipò pou Nayib Bukele pandan yo eksprime ijans fanmi deplase yo santi pou yo ka viv an sekirite.\n\nTemwayaj sa yo montre sa moun ki te patisipe yo ap tann. Yo pa mezire opinyon tout Ayisyen. Estimasyon kantite manifestan yo diferan selon medya yo; nou pa kenbe yon total presi.\n\nSipò moun sa yo eksprime a pa regle kesyon pwoteksyon sivil, kòmandman fòs yo oswa kondisyon pou yon retou dirab nan katye yo. Nan repòtaj li a, EFE raple alèt Medsen San Fwontyè sou vyolans ki mache ak afwontman yo.\n\nKesyon pou lektè yo : apa operasyon ame yo, ki dispozitif ki pral pèmèt fanmi yo retounen lakay yo, jwenn swen epi mete pitit yo lekòl ankò ?",
      fr: "Des manifestants sont descendus dans les rues de Port-au-Prince, de Jérémie et de Belladère vendredi 6 novembre pour soutenir les soldats salvadoriens et réclamer des opérations contre les gangs, rapporte EFE dans un article publié le lendemain.\n\nDans la capitale, plusieurs participants se sont présentés comme des victimes chassées de leur quartier. Le reportage mentionne notamment Fort National, Poste Marchand, l'avenue Poupelard et Carrefour-Feuilles. Des femmes ont raconté avoir perdu leur maison, leur commerce et la possibilité d'envoyer leurs enfants à l'école.\n\nÀ Jérémie, la mobilisation s'est accompagnée de bandes de rara, selon l'agence. Les slogans exprimaient à la fois un soutien à Nayib Bukele et l'urgence ressentie par des familles déplacées qui demandent de pouvoir vivre en sécurité.\n\nCes témoignages montrent les attentes des participants, pas une mesure de l'opinion de l'ensemble des Haïtiens. Les estimations de foule divergent selon les médias ; aucun total précis n'est retenu ici.\n\nLe soutien exprimé ne règle pas les questions sur la protection des civils, le commandement des forces ou les conditions d'un retour durable dans les quartiers. Dans son reportage, EFE rappelle aussi l'alerte de Médecins Sans Frontières sur la violence liée aux affrontements.\n\nQuestion aux lecteurs : au-delà des opérations armées, quel dispositif permettra aux familles de rentrer chez elles, de retrouver des soins et de remettre leurs enfants à l'école ?",
    },
    sources: ["EFE"],
    sourceLinks: [
      { name: "EFE", url: "https://efe.com/mundo/2026-11-07/marchas-apoyo-bukele-haiti/" },
    ],
  },
  {
    id: "qh-diaspora-conseils-scolaires-floride-2026-11-08",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-08",
    publishedTime: "2026-11-08T08:25:11-05:00",
    headline: {
      ht: "Sid Florid : twa fanm ayisyano-ameriken eli nan konsèy lekòl yo",
      fr: "Floride du Sud : trois Haïtiano-Américaines élues aux conseils scolaires",
    },
    teaser: {
      ht: "Yo ranpòte plas nan Broward, Palm Beach ak Miami-Dade, nan mwa out ak novanm.",
      fr: "Des victoires à Broward, Palm Beach et Miami-Dade, remportées en août et en novembre.",
    },
    brief: {
      ht: "Cynthia Alcéus Dominique, Christina Romélus ak Linda Cothière ranpòte plas nan twa gwo konte nan Sid Florid, dapre The Haitian Times 7 novanm. Se pa menm jou yo tout te eli.",
      fr: "Cynthia Alcéus Dominique, Christina Romélus et Linda Cothière ont remporté des sièges dans trois grands comtés de Floride du Sud, rapporte The Haitian Times le 7 novembre. Leurs élections n'ont pas toutes eu lieu le même jour.",
    },
    body: {
      ht: "Twa fanm ki gen orijin ayisyen ranpòte plas nan konsèy lekòl Broward, Palm Beach ak Miami-Dade. Nan yon atik 7 novanm, The Haitian Times prezante viktwa sa yo kòm yon premye pou reprezantasyon ayisyano-ameriken nan enstitisyon sa yo.\n\nNan Broward, Cynthia Alcéus Dominique genyen plas distri 7 la depi eleksyon 18 out la, ak anviwon 60 % vòt yo, dapre jounal la. Li se enfimyè ak edikatè, epi li te sèvi tou nan rezèv lame ameriken an.\n\nNan Palm Beach, Christina Romélus, ki fèt Pòtoprens e ki te deja eli nan Boynton Beach, genyen distri 4 la 3 novanm ak anviwon 62 % vòt yo. Nan Miami-Dade, Linda Cothière, ki soti Okap e ki gen anpil ane ap anseye, ranpòte distri 1 an nan dezyèm tou 3 novanm nan, ak 51,6 % kont 48,4 % pou Katrina Wilson, dapre menm repòtaj la.\n\nSe yon retou sou rezilta sik elektoral la, se pa twa eleksyon ki fèt wikenn sa a. Chif yo ak deklarasyon ki di viktwa sa yo istorik soti nan Haitian Times.\n\nKonsèy sa yo pran desizyon ki touche lekòl piblik ak anpil fanmi ayisyen. Kesyon pou lektè yo : ki priyorite nouvo eli sa yo ta dwe defann pou elèv ak paran ki pale kreyòl yo ?",
      fr: "Trois femmes d'origine haïtienne ont remporté des sièges aux conseils scolaires de Broward, Palm Beach et Miami-Dade. Dans un article du 7 novembre, The Haitian Times présente ces victoires comme une première pour la représentation haïtiano-américaine dans ces instances.\n\nÀ Broward, Cynthia Alcéus Dominique a remporté le siège du district 7 dès le scrutin du 18 août, avec environ 60 % des voix, selon le journal. Infirmière et éducatrice, elle a aussi servi dans la réserve de l'armée américaine.\n\nÀ Palm Beach, Christina Romélus, née à Port-au-Prince et ancienne élue de Boynton Beach, a gagné le district 4 le 3 novembre avec environ 62 % des voix. À Miami-Dade, Linda Cothière, originaire du Cap-Haïtien et enseignante de longue date, a remporté le district 1 au second tour du 3 novembre, avec 51,6 % contre 48,4 % pour Katrina Wilson, d'après le même reportage.\n\nIl s'agit d'un retour sur les résultats du cycle électoral, pas de trois élections survenues ce week-end. Les chiffres et le caractère historique des victoires sont attribués au Haitian Times.\n\nCes conseils prennent des décisions qui touchent les écoles publiques et de nombreuses familles haïtiennes. Question aux lecteurs : quelles priorités ces nouvelles élues devraient-elles porter pour les élèves et les parents créolophones ?",
    },
    sources: ["The Haitian Times"],
    sourceLinks: [
      { name: "The Haitian Times", url: "https://haitiantimes.com/2026/11/07/haitian-american-women-south-florida-school-board-wins-2026/" },
    ],
  },
  {
    id: "qh-cap-guichet-cep-foire-2026-11-08",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-08",
    publishedTime: "2026-11-08T08:25:01-05:00",
    headline: {
      ht: "Okap : CEP te mete yon gichè mobil nan Fwa dyaspora a",
      fr: "Cap-Haïtien : le CEP a déployé un guichet mobile à la Foire de la diaspora",
    },
    teaser: {
      ht: "Dispozitif la te ede vizitè fwa 6 ak 7 novanm nan.",
      fr: "Le dispositif accompagnait les visiteurs de la foire des 6 et 7 novembre.",
    },
    brief: {
      ht: "Yon gichè mobil CEP te akeyi vizitè Fwa dyaspora Okap la, dapre RL News ki reprann VBI 7 novanm. Fwa a te pwograme pou 6 ak 7 novanm; nou pa gen konfimasyon sèvis la pwolonje pou dimanch sa a.",
      fr: "Un guichet mobile du CEP a accueilli les visiteurs de la Foire de la diaspora au Cap-Haïtien, rapporte RL News en reprenant VBI le 7 novembre. La foire était programmée les 6 et 7 novembre ; aucune prolongation du service pour ce dimanche n'est établie.",
    },
    body: {
      ht: "Konsèy elektoral pwovizwa a te mete yon dispozitif mobil enskripsyon nan Fwa dyaspora Okap la. Ekip yo te akeyi vizitè yo, oryante yo epi ede yo ranpli fòmalite yo, dapre yon atik RL News Haïti pibliye 7 novanm, ki bay Vant Bèf Info kredi a.\n\nDispozitif la te vize sitwayen nan rejyon an ansanm ak Ayisyen k ap viv aletranje ki te nan peyi a. Yon mesaj piblik Juno7 pibliye samdi swa te pale tou de enskripsyon elektoral mobil pandan fwa a.\n\nPremye edisyon Fwa dyaspora a te anonse pou 6 ak 7 novanm sou boulva Okap la. Tèm nan, « Diaspora et culture, ensemble pour Haïti », te mete pwodiksyon lokal, antreprenarya ak aktivite kiltirèl ansanm, dapre Juno7.\n\nSe yon retou sou dispozitif la, se pa yon anons ki di li ouvè dimanch 8 novanm sa a. Sous nou egzamine yo pa bay kantite moun ki enskri nan stand lan, ni konfimasyon sèvis la pwolonje.\n\nKesyon pou lektè yo : èske CEP ap pibliye kantite enskripsyon ki fèt ak yon kalandriye pwochen gichè mobil nan komin yo ?",
      fr: "Le Conseil électoral provisoire a installé un dispositif mobile d'inscription à la Foire de la diaspora au Cap-Haïtien. Les équipes accueillaient les visiteurs, les orientaient et les accompagnaient dans les formalités, selon un article de RL News Haïti du 7 novembre, crédité à Vant Bèf Info.\n\nLe dispositif visait les citoyens de la région ainsi que les Haïtiens de l'étranger présents dans le pays. Un message public de Juno7 publié samedi soir évoquait également l'inscription électorale mobile lors de cette foire.\n\nLa première édition de la Foire de la diaspora était annoncée pour les 6 et 7 novembre sur le boulevard du Cap-Haïtien. Le thème, « Diaspora et culture, ensemble pour Haïti », associait production locale, entrepreneuriat et activités culturelles, selon Juno7.\n\nIl s'agit d'un bilan de dispositif, pas d'une annonce d'ouverture ce dimanche 8 novembre. Les sources examinées ne donnent ni total des personnes inscrites au stand, ni confirmation d'une prolongation.\n\nQuestion aux lecteurs : le CEP publiera-t-il le nombre d'inscriptions réalisées et un calendrier de prochains guichets mobiles dans les communes ?",
    },
    sources: ["RL News Haïti / VBI", "Juno7 — annonce de la foire", "Juno7 — message public du 7 novembre"],
    sourceLinks: [
      { name: "RL News Haïti / VBI", url: "https://rlnewshaiti.com/cap-haitien-le-cep-ouvre-un-guichet-dinscription-electorale-a-la-foire-de-la-diaspora/" },
      { name: "Juno7 — annonce de la foire", url: "https://www.juno7.ht/foire-diaspora-cap-haitien-6-7-novembre-2026/" },
      { name: "Juno7 — message public du 7 novembre", url: "https://x.com/juno7/status/2119276927861088557" },
    ],
  },
  {
    id: "qh-constitution-universites-regions-2026-11-08",
    tier: "quick-hit",
    topic: "politics",
    publishedAt: "2026-11-08",
    publishedTime: "2026-11-08T08:24:51-05:00",
    headline: {
      ht: "Revizyon Konstitisyon : yo konsilte inivèsite piblik nan rejyon yo",
      fr: "Révision constitutionnelle : les universités publiques en région consultées",
    },
    teaser: {
      ht: "Reyinyon 6 novanm nan fè pati konsiltasyon yo. Li pa adopte okenn chanjman nan Konstitisyon an.",
      fr: "La rencontre du 6 novembre s'inscrit dans les consultations. Aucune modification n'est adoptée par cette réunion.",
    },
    brief: {
      ht: "Komite swivi dyalòg sou Konstitisyon an rankontre rektè ak visrektè inivèsite piblik nan rejyon yo vandredi 6 novanm, dapre Le Nouvelliste.",
      fr: "Le Comité de suivi du dialogue sur la Constitution a rencontré les recteurs et vice-recteurs des universités publiques en région vendredi 6 novembre, rapporte Le Nouvelliste.",
    },
    body: {
      ht: "Rektè ak visrektè inivèsite piblik nan rejyon yo rankontre Komite swivi dyalòg sou Konstitisyon an vandredi 6 novanm, dapre Le Nouvelliste. Reyinyon an fè pati konsiltasyon ki louvri sou yon revizyon Konstitisyon ayisyen an.\n\nDapre jounal la, demach sa a vini apre chita pale ak Inivèsite Leta d Ayiti, reprezantan sektè relijye ak sektè biznis la. Li mete responsab inivèsite nan rejyon yo nan seri diskisyon sa yo.\n\nKont randi ki aksesib la konfime reyinyon an te fèt, li pa di yo adopte yon tèks konstitisyonèl. Li pa pèmèt nou prezante pwopozisyon detaye, yon akò inivèsite yo sou fondman revizyon an oswa konklizyon definitif kòm bagay ki deja fèt.\n\nKesyon pou lektè yo : èske yo ap pibliye pwopozisyon inivèsite yo ak kont randi konsiltasyon yo pou deba a pa rete sèlman nan mitan moun ki te patisipe nan reyinyon yo ?",
      fr: "Les recteurs et vice-recteurs des universités publiques en région ont rencontré, vendredi 6 novembre, le Comité de suivi du dialogue sur la Constitution, rapporte Le Nouvelliste. La réunion s'inscrit dans les consultations engagées autour d'une révision de la Constitution haïtienne.\n\nSelon le journal, cette démarche suit des échanges avec l'Université d'État d'Haïti, des représentants du secteur religieux et de la classe des affaires. Elle fait entrer les responsables universitaires des régions dans cette série de discussions.\n\nLe compte rendu accessible établit la tenue de la rencontre, pas l'adoption d'un texte constitutionnel. Il ne permet pas de présenter des propositions détaillées, un accord des universités sur le fond ou des conclusions définitives comme acquis.\n\nQuestion aux lecteurs : les propositions des universités et les comptes rendus des consultations seront-ils rendus publics pour permettre un débat au-delà des participants aux réunions ?",
    },
    sources: ["Le Nouvelliste"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273685/revision-constitutionnelle-consultations-avec-les-universites-publiques-en-region" },
    ],
  },
  {
    id: "qh-ayiti-vodoufest-cloture-2026-11-08",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-08",
    publishedTime: "2026-11-08T08:24:41-05:00",
    headline: {
      ht: "Ayiti VodouFest : konsè kloti a anonse pou dimanch sa a nan El Rancho",
      fr: "Ayiti VodouFest : le concert de clôture annoncé ce dimanche à El Rancho",
    },
    teaser: {
      ht: "Carole Demesmin se envite donè a. Yo anonse Erol Josué, James Germain, RAM ak Boukman Eksperyans.",
      fr: "Carole Demesmin est l'invitée d'honneur. Erol Josué, James Germain, RAM et Boukman Eksperyans sont annoncés.",
    },
    brief: {
      ht: "Dezyèm edisyon Ayiti VodouFest la dwe fini dimanch 8 novanm nan El Rancho Convention Center, dapre RTVC ki òganize l ansanm ak Sant kiltirèl Karayib. Atik la pa bay lè konsè a.",
      fr: "La deuxième édition d'Ayiti VodouFest doit se terminer dimanche 8 novembre à El Rancho Convention Center, selon RTVC, coorganisatrice avec le Centre culturel Caraïbes. L'article ne précise pas l'heure du concert.",
    },
    body: {
      ht: "Konsè kloti dezyèm edisyon Ayiti VodouFest la anonse pou dimanch 8 novanm 2026 sa a nan El Rancho Convention Center. Radyo Televizyon Karayib (RTVC), ki òganize festival la ansanm ak Sant kiltirèl Karayib, rapòte preparatif yo pare, dapre direktè atistik la Max Ferlor Jean.\n\nCarole Demesmin se envite donè a. Nan pwogram yo anonse a, gen Erol Josué, James Germain, Riva, Vanessa Jeudi, RAM ak Boukman Eksperyans. DJ Manito Nation dwe fè animasyon mizikal la.\n\nDapre RTVC, antre òdinè a koute 40 dola ameriken epi seksyon VIP a koute 80 dola. Yo anonse tikè yo nan RTVC, nan otèl El Rancho ak sou PAMEVENT.COM. Atik nou konsilte a pa bay lè konsè a ap kòmanse; moun ki vle ale dwe konfime sa ak òganizatè yo anvan yo deplase.\n\nFestival la te kòmanse 31 oktòb ak yon fwa sou plas Bwaye, nan Petyonvil. Apre sa, li te pwopoze sware atistik, konferans ak yon pwojeksyon fim « Les Amours d'un zombi » Arnold Antonin. Yo prezante konsè dimanch sa a kòm dènye etap pwogram sa a ki konsakre ak vodou ak kilti ayisyen.\n\nEnfòmasyon sou pwogram nan ak tikè yo soti nan RTVC, ki se youn nan òganizatè evènman an tou.",
      fr: "Le concert de clôture de la deuxième édition d'Ayiti VodouFest est annoncé pour ce dimanche 8 novembre 2026 à El Rancho Convention Center. Radio Télévision Caraïbes (RTVC), qui porte le festival avec le Centre culturel Caraïbes, rapporte que les préparatifs sont prêts, selon son directeur artistique Max Ferlor Jean.\n\nCarole Demesmin est l'invitée d'honneur. Le programme annoncé réunit Erol Josué, James Germain, Riva, Vanessa Jeudi, RAM et Boukman Eksperyans. DJ Manito Nation doit assurer l'animation musicale.\n\nSelon RTVC, l'accès ordinaire coûte 40 dollars américains et la section VIP 80 dollars. Les billets sont annoncés à la RTVC, à l'hôtel El Rancho et sur PAMEVENT.COM. L'article consulté ne donne pas l'heure de début ; les spectateurs doivent la confirmer auprès des organisateurs avant de se déplacer.\n\nLe festival a commencé le 31 octobre avec une foire sur la place Boyer, à Pétion-Ville. Il a proposé ensuite des soirées artistiques, des conférences et une projection du film « Les Amours d'un zombi » d'Arnold Antonin. Le concert de ce dimanche est présenté comme la dernière étape de cette programmation consacrée au vodou et à la culture haïtienne.\n\nCes informations de programme et de billetterie proviennent de RTVC, également organisatrice de l'événement.",
    },
    sources: ["RTVC — coorganisatrice"],
    sourceLinks: [
      { name: "RTVC — coorganisatrice", url: "https://www.radiotelecaraibes.com/concert-de-cloture-de-la-2e-edition-de-ayiti-vodoufest-les-des-sont-jetes/" },
    ],
  },
  {
    id: "ntk-cite-soleil-explosions-drones-2026-11-05",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-08",
    publishedTime: "2026-11-08T08:26:01-05:00",
    isFollowUp: true,
    headline: {
      ht: "Site Solèy : otorite yo konfime lanmò Mathias Saintil, men vèsyon sou operasyon an pa menm",
      fr: "Cité Soleil : la mort de Mathias Saintil confirmée, des récits divergents sur l'opération",
    },
    teaser: {
      ht: "Premye minis la konfime lanmò chèf gang Boston an. PNH ak RNDDH pa bay menm vèsyon sou sa ki pase.",
      fr: "Le Premier ministre confirme la mort du chef du gang de Boston. PNH et RNDDH divergent sur les circonstances.",
    },
    brief: {
      ht: "Mathias Saintil mouri vandredi 6 novanm apre yon operasyon jedi swa nan Site Solèy, dapre Reuters ak Miami Herald. PNH pale de blesi bal; RNDDH pale de yon atak dron. Bilan viktim sivil yo poko etabli.",
      fr: "Mathias Saintil est mort vendredi 6 novembre, après une opération jeudi soir à Cité Soleil, selon Reuters et le Miami Herald. La PNH parle de blessures par balles ; le RNDDH rapporte une frappe de drone. Le bilan civil reste à établir.",
    },
    body: {
      ht: "Otorite ayisyen yo konfime vandredi 6 novanm lanmò Mathias Saintil, chèf gang Boston nan Site Solèy. « Un chef de gang en moins », se sa premye minis Alix Didier Fils-Aimé ekri sou X, dapre Reuters. Gwoup Saintil la fè pati kowalisyon Viv Ansanm.\n\nLanmò sa a pote yon nouvo eleman sou eksplozyon yo te rapòte jedi 5 novanm nan komin nan. Nan premye atik nou an, Vant Bèf Info ak RL News te pale de detonasyon ak panik, san yo pa t etabli sib yo oswa yon bilan. Lè sa a, yo pa t konfime ipotèz dron yo.\n\nKounye a, vèsyon ki disponib yo pa fin dakò. Dapre Miami Herald, PNH di plizyè bal te frape Saintil pandan yon operasyon lapolis, epi li mouri nan yon lopital nan kapital la. RNDDH, nan yon rapò Reuters konsilte, di yon dron eksplozif te blese l grav nan vant jedi swa, epi li mouri nan demen pandan li t ap resevwa swen.\n\nHerald la rapòte tou, dapre RNDDH, gen sivil ki mouri nan atak yo. Sa pa yon bilan Opak News verifye poukont li. Nou pa ka prezante chif detaye yo, kiyès ki te responsab operasyon yo oswa sikonstans chak lanmò kòm bagay ki fin etabli.\n\nKonfimasyon lanmò Saintil la pa vle di se sòlda salvadoryen yo ki te fè operasyon an. Li pa regle nonplis diferans ki genyen sou zam yo te itilize a.\n\nKesyon pou lektè yo : kiyès ki dwe pibliye yon bilan nou ka verifye, ki separe sivil ak manm gang ? Anba ki kòmandman operasyon sa yo te fèt ?",
      fr: "La mort de Mathias Saintil, chef du gang de Boston à Cité Soleil, a été confirmée par les autorités haïtiennes vendredi 6 novembre. « Un chef de gang en moins », a écrit le Premier ministre Alix Didier Fils-Aimé sur X, rapporte Reuters. Son groupe fait partie de la coalition Viv Ansanm.\n\nCe décès apporte un élément nouveau aux explosions signalées jeudi 5 novembre dans la commune. Dans notre première publication, Vant Bèf Info et RL News évoquaient des détonations et une panique, sans cible ni bilan établis. L'hypothèse des drones n'était alors pas confirmée.\n\nLes récits disponibles aujourd'hui ne concordent pas entièrement. Selon le Miami Herald, la PNH attribue les blessures de Saintil à plusieurs projectiles lors d'une opération policière, avant sa mort dans un hôpital de la capitale. Le RNDDH, dont Reuters a consulté le rapport, affirme qu'il a été gravement blessé à l'abdomen par un drone explosif jeudi soir, puis est mort le lendemain pendant qu'il recevait des soins.\n\nLe Herald rapporte aussi, en citant le RNDDH, des morts parmi les civils lors des frappes. Il ne s'agit pas d'un bilan indépendant établi par Opak News. Les chiffres détaillés, les responsabilités opérationnelles et les circonstances de chaque décès ne peuvent pas être présentés comme définitivement établis.\n\nLa confirmation de la mort de Saintil ne permet donc pas d'attribuer automatiquement l'opération aux troupes salvadoriennes ni de trancher les versions sur l'arme employée.\n\nQuestions aux lecteurs : qui doit rendre public un bilan vérifiable, distinguant civils et membres de gangs ? Sous quel commandement ces opérations ont-elles été conduites ?",
    },
    sources: ["Reuters", "Miami Herald"],
    sourceLinks: [
      { name: "Reuters", url: "https://www.reuters.com/3fec1b0a85a0/world/americas/haiti-pm-says-gang-leader-mathias-saintil-dead-2026-11-07/" },
      { name: "Miami Herald", url: "https://www.miamiherald.com/news/nation-world/world/americas/haiti/article317973147.html" },
    ],
  },
  {
    id: "ntk-haitiens-rd-soutien-salvador-civils-2026-11-05",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-06",
    publishedTime: "2026-11-06T10:27:00-05:00",
    headline: {
      ht: "Nan Repiblik Dominikèn, gen Ayisyen ki sipòte misyon salvadoryen an men yo mande yo epay sivil yo",
      fr: "En République dominicaine, des Haïtiens soutiennent la mission salvadorienne mais demandent d'épargner les civils",
    },
    teaser: {
      ht: "Infobae pibliye entèvyou Noticias SIN sou fwontyè a. Sipò pou Bukele, pè pou fanmi ki rete ann Ayiti.",
      fr: "Infobae relaie des interviews Noticias SIN à la frontière. Soutien à Bukele, peur pour les familles restées en Haïti.",
    },
    brief: {
      ht: "Dapre Infobae, Ayisyen yo konsilte nan Repiblik Dominikèn sipòte kontenjan salvadoryen an, men yo mande operasyon presi pou evite moun mouri sivil.",
      fr: "Selon Infobae, des Haïtiens consultés en République dominicaine appuient le contingent salvadorien, tout en demandant des opérations précises pour éviter des morts civiles.",
    },
    body: {
      ht: "Dapre Infobae (José Cerón, pibliye 5 novanm vè 11:14 PM EST), komèsan ak abitan ayisyen yo konsilte nan Repiblik Dominikèn, nan yon reportaj Noticias SIN, sipòte prezans kontenjan salvadoryen prezidan Nayib Bukele voye a, men yo mande prekosyon pou pa gen moun mouri sivil nan katye gwoup ame kontwole.\n\nElías Telemacas, Infobae site, di « Ayisyen yo pa ka viv ankò ». Luis Guaguacuando kwè « pèp ayisyen an » sipòte Bukele, e moun k ap viv nan Repiblik Dominikèn sipòte l « san pou san ». Nicolás Sitieneth di li « plis pase kontan » e li avanse « 99 % » Ayisyen ta sipòte prezidan salvadoryen an. Jackson Duseth mande yo atake « bandi sa yo ». Marcelino Coubatiza di li pè pou fanmi li ki rete ann Ayiti.\n\nInfobae raple kontèks la : disparisyon kat teknisyen ayewonotik salvadoryen apre anbiskad 18 oktòb la, deplwaman plis pase 2000 sòlda, blende ak elikoptè, epi dekouvèt machin ki boule a Santo (Kwadebouke), san nouvèl disparu yo. Entèvyou sa yo se temwayaj endividyèl ; yo pa mezire opinyon tout peyi a.\n\nKesyon pou lektè yo :\n\n• Kiyès k ap pale nan non katye ki toujou anba dife, moun ki pa t ka kouri ale sou fwontyè a ?\n\n• Yon sipò popilè pou Bukele, èske li chanje règ angajman yo ak bilan sivil la ?",
      fr: "Selon Infobae (José Cerón, publié le 5 novembre vers 23 h 14 EST), des commerçants et résidents haïtiens consultés en République dominicaine, dans un reportage Noticias SIN, soutiennent la présence du contingent salvadorien ordonnée par le président Nayib Bukele, mais demandent de la prudence pour éviter des morts civiles dans les quartiers sous contrôle de groupes armés.\n\nElías Telemacas, cité par Infobae, dit que « les Haïtiens ne peuvent plus vivre ». Luis Guaguacuando estime que « le peuple haïtien » appuie Bukele, et que ceux qui vivent en République dominicaine le soutiennent « à cent pour cent ». Nicolás Sitieneth se dit « plus que content » et avance que « 99 % » des Haïtiens soutiendraient le président salvadorien. Jackson Duseth demande d'attaquer « ces bandits ». Marcelino Coubatiza dit craindre pour sa famille restée en Haïti.\n\nInfobae rappelle le contexte : disparition de quatre techniciens aéronautiques salvadoriens après l'embuscade du 18 octobre, déploiement de plus de 2000 soldats, blindés et hélicoptères, et découverte récente du véhicule calciné à Santo (Croix-des-Bouquets), sans nouvelle des disparus. Ces interviews restent des témoignages individuels ; elles ne mesurent pas l'opinion haïtienne entière.\n\nQuestions aux lecteurs :\n\n• Qui parle au nom des quartiers encore sous le feu, ceux qui n'ont pas pu fuir vers la frontière ?\n\n• Un soutien populaire à Bukele change-t-il quelque chose aux règles d'engagement et au bilan civil ?",
    },
    sources: ["Infobae"],
    sourceLinks: [
      { name: "Infobae", url: "https://www.infobae.com/el-salvador/2026/11/06/haitianos-consultados-en-republica-dominicana-apoyan-la-presencia-militar-salvadorena-pero-pidieron-evitar-victimas-civiles/" },
    ],
  },
  {
    id: "ntk-forbin-madrid-salvador-ulloa-2026-11-05",
    tier: "need-to-know",
    topic: "politics",
    publishedAt: "2026-11-06",
    publishedTime: "2026-11-06T10:26:50-05:00",
    readMoreLink: {
      fr: { before: "Pour lire notre suivi sur les soldats salvadoriens, ", link: "cliquez ici", after: ".", href: "/story/ntk-salvador-2000-soldats-2026-10-29" },
      ht: { before: "Pou li swivi nou sou sòlda salvadoryen yo, ", link: "klike la a", after: ".", href: "/ht/story/ntk-salvador-2000-soldats-2026-10-29" },
    },
    headline: {
      ht: "Madrid : Forbin rankontre Ulloa, Hill Tinoco, Kolonbi ak SEGIB",
      fr: "Madrid : Forbin rencontre Ulloa, Hill Tinoco, la Colombie et le SEGIB",
    },
    teaser: {
      ht: "Sou kote XXXe Somè ibewoameriken an, chanselye a pouse koperasyon sekirite ak Salvadò. Ulloa di prezans lan « pa yon fòs okipasyon ».",
      fr: "En marge du XXXe Sommet ibéro-américain, la chancelière pousse la coopération sécuritaire avec le Salvador. Ulloa dit que la présence n'est « pas une force d'occupation ».",
    },
    brief: {
      ht: "Dapre MAE (via HaitiLibre ak Infobae), Raina Forbin fè plizyè rankont bilateral Madrid, pami yo Félix Ulloa ak Alexandra Hill Tinoco.",
      fr: "Selon le MAE (via HaitiLibre et Infobae), Raina Forbin a multiplié les bilatérales à Madrid, dont Félix Ulloa et Alexandra Hill Tinoco.",
    },
    body: {
      ht: "Dapre yon kominike Ministè Afè Etranjè yo, ke Le Nouvelliste (5 novanm) ak Infobae reprann, minis Raina Forbin te rankontre jedi Madrid, sou kote XXXe Somè ibewoameriken an, vis-prezidan salvadoryen Félix Ulloa. MAE prezante antretyen an kòm ranfòsman relasyon ak sipò pou sekirite ak estabilite Ayiti. Infobae presize kominike a pa bay okenn angajman konkrè.\n\nToujou dapre Infobae, Ulloa te deklare menm jou a devan plenyè a ke twoup salvadoryen ann Ayiti yo « pa yon fòs okipasyon » ni yon desizyon inilateral, men « yon aranjman bilateral ak otorite ayisyen yo ». Opak News raple rapò anvan (Miami Herald) te poze kesyon sou egzistans yon akò siyen ak chèn kòmandman an ; deklarasyon Ulloa a pa efase zòn lonbraj sa yo.\n\nDapre HaitiLibre (5 novanm), Forbin te rankontre tou omològ salvadoryen li Alexandra Hill Tinoco (koperasyon sekirite, gwoup ame, DDR, pwoteksyon timoun gang yo ekspoze ; solidarite sou kat teknisyen GSF ki disparèt), omològ kolonbyen Omar Bula Escobar (sekirite, eleksyon, fòmasyon agrikòl, komès, konektivite), ak sekretè jeneral ibewoameriken Andrés Allamand (sipò pou pwojè priyoritè ayisyen yo). Ayiti se obsèvatè asosye espas sa a depi 2012.\n\nKesyon pou lektè yo :\n\n• Si akò bilateral la egziste, kilè gouvènman an ap pibliye tèks la ?\n\n• Kisa foto Madrid sa yo chanje konkrètman pou Santo ak Site Solèy ?",
      fr: "Selon un communiqué du ministère des Affaires étrangères repris par Le Nouvelliste (5 novembre) et Infobae, la ministre Raina Forbin a rencontré jeudi à Madrid, en marge du XXXe Sommet ibéro-américain, le vice-président salvadorien Félix Ulloa. Le MAE présente l'entretien comme un renforcement des relations et de l'appui à la sécurité et à la stabilité haïtiennes. Infobae précise que le communiqué ne détaille aucun engagement concret.\n\nToujours selon Infobae, Ulloa a déclaré le même jour devant le plénier que les troupes salvadoriennes en Haïti ne sont « pas une force d'occupation » ni une décision unilatérale, mais « un arrangement bilatéral avec les autorités haïtiennes ». Opak News rappelle que des reportages antérieurs (Miami Herald) ont questionné l'existence d'un accord signé et la chaîne de commandement ; la déclaration d'Ulloa n'efface pas ces zones d'ombre.\n\nSelon HaitiLibre (5 novembre), Forbin a aussi rencontré son homologue salvadorienne Alexandra Hill Tinoco (coopération sécuritaire, groupes armés, DDR, protection des enfants exposés aux gangs ; solidarité autour des quatre techniciens GSF disparus), son homologue colombien Omar Bula Escobar (sécurité, élections, formation agricole, commerce, connectivité), et le secrétaire général ibéro-américain Andrés Allamand (appui aux projets prioritaires haïtiens). Haïti est observateur associé de cet espace depuis 2012.\n\nQuestions aux lecteurs :\n\n• Si l'accord bilatéral existe, quand le gouvernement publiera-t-il le texte ?\n\n• Que changent concrètement ces photos de Madrid pour Santo et Cité Soleil ?",
    },
    sources: ["Le Nouvelliste", "HaitiLibre", "Infobae"],
    sourceLinks: [
      { name: "Le Nouvelliste (lede ; suite paywall)", url: "https://lenouvelliste.com/article/273628/haiti-et-le-salvador-se-rapprochent" },
      { name: "HaitiLibre", url: "https://www.haitilibre.com/article-48827-haiti-diplomatie-la-chanceliere-forbin-multiplie-les-rencontres-au-xxxe-sommet-ibero-americain.html" },
      { name: "Infobae", url: "https://www.infobae.com/el-salvador/2026/11/06/canciller-de-haiti-y-el-vicepresidente-salvadoreno-se-reunen-en-madrid-para-reforzar-su-alianza-de-seguridad/" },
    ],
  },
  {
    id: "ntk-fils-aime-corps-diplomatique-2026-11-05",
    tier: "need-to-know",
    topic: "politics",
    publishedAt: "2026-11-06",
    publishedTime: "2026-11-06T10:26:40-05:00",
    readMoreLink: {
      fr: { before: "Pour lire l'adresse nationale du 3 novembre, ", link: "cliquez ici", after: ".", href: "/story/ntk-fils-aime-discours-territoire-2026-11-03" },
      ht: { before: "Pou li adrès nasyonal 3 novanm nan, ", link: "klike la a", after: ".", href: "/ht/story/ntk-fils-aime-discours-territoire-2026-11-03" },
    },
    headline: {
      ht: "Fils-Aimé rankontre kò diplomatik la nan Nonsyati a",
      fr: "Fils-Aimé rencontre le corps diplomatique à la Nonciature",
    },
    teaser: {
      ht: "Seyans travay jedi anba sipèvizyon nons apostolik la. Sekirite, eleksyon, deplase ak migrasyon sou tab la, dapre VBI.",
      fr: "Séance de travail jeudi sous les auspices du nonce apostolique. Sécurité, élections, déplacements et migration au menu, selon VBI.",
    },
    brief: {
      ht: "Dapre Vant Bèf Info, Premye minis la resevwa jedi diplomat ki akredite ann Ayiti yo nan Nonsyati apostolik la.",
      fr: "Selon Vant Bèf Info, le Premier ministre a reçu jeudi les diplomates accrédités en Haïti à la Nonciature apostolique.",
    },
    body: {
      ht: "Dapre Vant Bèf Info (5 novanm), Premye minis Alix Didier Fils-Aimé te rankontre jedi manm kò diplomatik ki akredite ann Ayiti yo, nan yon seyans travay nan Nonsyati apostolik la, anba sipèvizyon nons apostolik la.\n\nDapre VBI, echanj yo te sou degradasyon sitiyasyon sekirite a, pwosesis elektoral la, deplase entèn popilasyon an ak kesyon migratwa. Rankont lan te sèvi tou, dapre sit la, pou raple priyorite Leta ak bezwen ranfòse koperasyon entènasyonal pou sekirite ak pou eleksyon lib, enklizif e kredib, pandan yo mete souvanète nasyonal ak yon responsablite pataje sou tab la.\n\nVBI pa pibliye lis anbasad ki te la ni sitasyon dirèk Premye minis la oswa diplomat yo. Opak News pa jwenn yon lòt kont randi ofisyèl lè n ap pibliye. Reyinyon sa a sepa de adrès nasyonal 3 novanm ki deja sou Opak News.\n\nKesyon pou lektè yo :\n\n• Kisa anbasad yo mande konkrètman an echanj sipò yo ?\n\n• Apre diskou 3 novanm nan, kisa Nonsyati sa a chanje pou chèn kòmandman twoup etranje yo ?",
      fr: "Selon Vant Bèf Info (5 novembre), le Premier ministre Alix Didier Fils-Aimé a rencontré jeudi les membres du corps diplomatique accrédité en Haïti, lors d'une séance de travail à la Nonciature apostolique, sous les auspices du nonce apostolique.\n\nD'après VBI, les échanges ont porté sur la détérioration de la situation sécuritaire, le processus électoral, les déplacements internes de population et les questions migratoires. La rencontre a aussi servi, selon le site, à rappeler les priorités de l'État et le besoin de renforcer la coopération internationale pour la sécurité et pour des élections libres, inclusives et crédibles, tout en mettant en avant la souveraineté nationale et une responsabilité partagée.\n\nVBI ne publie pas de liste des ambassades présentes ni de citations directes du Premier ministre ou des diplomates. Opak News n'a pas trouvé d'autre compte rendu officiel au moment de publier. Cette réunion est distincte de l'adresse nationale du 3 novembre déjà couverte sur Opak News.\n\nQuestions aux lecteurs :\n\n• Que demandent concrètement les ambassades en échange de leur appui ?\n\n• Après le discours du 3 novembre, qu'est-ce que cette Nonciature change pour la chaîne de commandement des troupes étrangères ?",
    },
    sources: ["Vant Bèf Info"],
    sourceLinks: [
      { name: "Vant Bèf Info", url: "https://vantbefinfo.com/haiti-securite-elections-et-crise-migratoire-au-coeur-des-echanges-entre-alix-didier-fils-aime-et-des-diplomates/" },
    ],
  },
  {
    id: "ntk-pnh-certificats-candidats-9-nov-2026-11-05",
    tier: "need-to-know",
    topic: "politics",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T07:33:30-05:00",
    isFollowUp: true,
    readMoreLink: {
      fr: { before: "Pour lire notre suivi des inscriptions au CEP, ", link: "cliquez ici", after: ".", href: "/story/ntk-cep-inscriptions-preliminaires-2026-11-01" },
      ht: { before: "Pou li swivi nou sou enskripsyon CEP a, ", link: "klike la a", after: ".", href: "/ht/story/ntk-cep-inscriptions-preliminaires-2026-11-01" },
    },
    headline: {
      ht: "Eleksyon : lapolis repouse nan 23 novanm ak 21 desanm demann sètifika polis yo",
      fr: "Élections : la police repousse au 23 novembre et au 21 décembre les demandes de certificat",
    },
    teaser: {
      ht: "23 novanm pou prezidans, Sena ak Chanm depite, 21 desanm pou kolektivite teritoryal yo. Wadner Édouard, nan Solèy, denonse reta.",
      fr: "23 novembre pour la présidence, le Sénat et la Chambre des députés, 21 décembre pour les collectivités territoriales. Wadner Édouard, de Solèy, dénonce des retards.",
    },
    brief: {
      ht: "Direksyon jeneral PNH anonse dimanch 8 novanm nouvo delè pou demann sètifika polis nan DCPJ, Le Nouvelliste ekri. Kandida prezidans, Sena ak depite yo gen jouk 23 novanm, sa kolektivite teritoryal yo jouk 21 desanm.",
      fr: "La direction générale de la PNH a annoncé dimanche 8 novembre de nouveaux délais pour les demandes de certificat de police à la DCPJ, écrit Le Nouvelliste. Les candidats à la présidence, au Sénat et à la députation ont jusqu'au 23 novembre, ceux des collectivités territoriales jusqu'au 21 décembre.",
    },
    body: {
      ht: "Direksyon jeneral Polis nasyonal Ayiti anonse, dimanch 8 novanm, nouvo dat limit pou depo demann sètifika polis nan DCPJ, Le Nouvelliste ekri. Dapre yon kominike lapolis, kandida prezidans, Sena ak Chanm depite yo gen jouk 23 novanm 2026. Pou kandida kolektivite teritoryal yo, sitou majistra, ASEC ak CASEC, dat limit la se 21 desanm 2026. Ansyen echeans lan te 9 novanm. Yon nòt ministè Komunikasyon an, ki soti lendi 9 novanm epi Le National site, prezante mezi a kòm yon fason pou fasilite demach kandida yo.\n\nCEP, bò pa l, raple enskripsyon an liy pou prezidans ak lejislatif yo fini 15 novanm minwi, e depo pyès yo fini 30 novanm.\n\nWadner Édouard, kowòdonatè gwoupman Solèy, denonse reta DCPJ yo. Dapre li, kèk kandida nan platfòm li a ap tann sètifika yo depi plis pase de mwa. Li di tou fòmilè demann yo pa disponib nan depatman yo depi omwen twa semèn, Le Nouvelliste rapòte. NAGO presize li te site Nòdwès ak Nip yo, kote fòmilè sa yo ta disparèt depi prèske yon mwa. « Ce n'est pas dans les prérogatives de la DCPJ de dire à une personne qu'elle ne recevra pas sa demande », li te deklare, toujou dapre Le Nouvelliste. NAGO endike lapolis poko reponn kritik sa yo.",
      fr: "La Direction générale de la Police nationale d'Haïti a annoncé, dimanche 8 novembre, de nouvelles dates limites pour le dépôt des demandes de certificat de police auprès de la DCPJ, écrit Le Nouvelliste. Selon un communiqué de la police, les candidats à la présidence, au Sénat et à la Chambre des députés ont jusqu'au 23 novembre 2026. Pour les candidats aux collectivités territoriales, notamment aux postes de maire, d'ASEC et de CASEC, la date limite est le 21 décembre 2026. L'ancienne échéance était le 9 novembre. Une note du ministère de la Communication, publiée lundi 9 novembre et citée par Le National, présente la mesure comme un moyen de faciliter les démarches des candidats.\n\nLe CEP, de son côté, rappelle que l'inscription en ligne pour la présidence et les législatives se termine le 15 novembre à minuit, et que le dépôt des pièces requises se termine le 30 novembre.\n\nWadner Édouard, coordonnateur du groupement Solèy, a dénoncé les retards de la DCPJ. Selon lui, certains candidats de sa plateforme attendent leur certificat depuis plus de deux mois. Il dit aussi que les formulaires de demande sont indisponibles dans les départements depuis au moins trois semaines, rapporte Le Nouvelliste. NAGO précise qu'il a cité le Nord-Ouest et les Nippes, où ces formulaires seraient introuvables depuis près d'un mois. « Ce n'est pas dans les prérogatives de la DCPJ de dire à une personne qu'elle ne recevra pas sa demande », a-t-il déclaré, toujours selon Le Nouvelliste. NAGO indique que la police n'a pas répondu à ces critiques.",
    },
    sources: ["Le Nouvelliste", "NAGO", "Le National", "CEP"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273720/elections-la-dcpj-fixe-de-nouveaux-delais-pour-les-demandes-de-certificat-de-police" },
      { name: "Le Nouvelliste (Wadner Édouard)", url: "https://lenouvelliste.com/article/273729/wadner-edouard-denonce-lincapacite-de-la-dcpj-a-delivrer-des-certificats-de-police-aux-candidats" },
      { name: "NAGO", url: "https://news.nago.tv/certificat-de-police-la-pnh-repousse-la-date-limite-au-23-novembre-pour-les-candidats" },
      { name: "Le National", url: "https://www.lenational.org/article/politique/8622/certificat-de-police-la-pnh-veut-faciliter-les-demarches-des-candidats" },
      { name: "CEP - inscriptions et dépôt des pièces", url: "https://cephaiti.ht/cloture-de-la-periode-dinscription-en-ligne-des-candidats-le-15-novembre-et-de-celle-consacree-au-depot-des-pieces-le-30-novembre-2026/" },
    ],
  },
  {
    id: "ntk-cermicol-fievre-mineurs-2026-11-05",
    tier: "need-to-know",
    topic: "justice",
    publishedAt: "2026-11-06",
    publishedTime: "2026-11-06T10:26:20-05:00",
    headline: {
      ht: "CERMICOL : lafyèv nan mitan minè yo nan prizon, CADDHO rele MSPP",
      fr: "CERMICOL : fièvres chez des mineurs détenus, le CADDHO appelle le MSPP",
    },
    teaser: {
      ht: "Dapre Me Arnel Rémy, paran yo alète sou gwo lafyèv Delma 33. Pa gen dyagnostik ofisyèl. MSPP rete an silans.",
      fr: "Selon Me Arnel Rémy, des parents alertent sur de fortes fièvres à Delmas 33. Pas de diagnostic officiel. Le MSPP reste silencieux.",
    },
    brief: {
      ht: "VBI ak Le Concret rapòte alèt CADDHO sou minè ki gen lafyèv nan CERMICOL. Kòz pa etabli. Apèl bay MSPP ak DAP.",
      fr: "VBI et Le Concret rapportent l'alerte du CADDHO sur des mineurs fiévreux au CERMICOL. Cause non établie. Appel au MSPP et à la DAP.",
    },
    body: {
      ht: "Dapre Vant Bèf Info ak Le Concret Info (5 novanm), plizyè minè ki nan Sant reedikasyon minè an konfli ak lalwa (CERMICOL), Delma 33, ta gen gwo lafyèv, doulè zo, tèt fè mal, feblès manm ak fatig. Avoka Arnel Rémy, kowòdonatè jeneral Kolektif avoka pou defans dwa moun (CADDHO), di paran yo te alète l e li konfime siyalman sa yo bay VBI jedi maten.\n\nMe Rémy denonse tou, dapre de medya yo, yon priz an chaj ki pa sifi : yon enfimyè ta distribye yon sèl kalite konprime, san konsiltasyon medikal sistematik. Li di gen menm sentòm yo rapòte depi plizyè semèn nan lòt katye. Dapre enfòmasyon CADDHO genyen, Ministè Sante piblik ak Popilasyon (MSPP) poko pale sou orijin sentòm sa yo.\n\nCADDHO mande MSPP ak Direksyon administrasyon penitansyè (DAP) yon evalyasyon medikal minè malad yo ak mezi pou limite yon posib pwopagasyon. Opak News pa jwenn okenn kominike MSPP ni DAP lè n ap pibliye. Pa gen dyagnostik etabli ; lefèt yo rete sa avoka a ak paran yo rapòte.\n\nKesyon pou lektè yo :\n\n• Konbyen minè ki malad, e kiyès ki pibliye chif ofisyèl la ?\n\n• Yon timoun nan prizon, èske li gen dwa a yon vrè doktè toujou, oswa sèlman a yon konprime ?",
      fr: "Selon Vant Bèf Info et Le Concret Info (5 novembre), plusieurs mineurs détenus au Centre de rééducation des mineurs en conflit avec la loi (CERMICOL), à Delmas 33, présenteraient de fortes fièvres, des douleurs osseuses, des maux de tête, une faiblesse des membres et une fatigue. L'avocat Arnel Rémy, coordonnateur général du Collectif des avocats pour la défense des droits de l'homme (CADDHO), dit avoir été alerté par des parents et a confirmé ces signalements à VBI jeudi matin.\n\nMe Rémy dénonce aussi, selon les deux médias, une prise en charge insuffisante : une infirmière distribuerait un seul type de comprimé, sans consultation médicale systématique. Il affirme que des symptômes similaires sont signalés depuis plusieurs semaines dans d'autres quartiers. Selon les informations dont dispose le CADDHO, le ministère de la Santé publique et de la Population (MSPP) ne s'est pas encore prononcé sur l'origine de ces symptômes.\n\nLe CADDHO demande au MSPP et à la Direction de l'administration pénitentiaire (DAP) une évaluation médicale des mineurs malades et des mesures pour limiter une éventuelle propagation. Opak News n'a trouvé aucun communiqué MSPP ni DAP au moment de publier. Aucun diagnostic n'est établi ; les faits restent ceux rapportés par l'avocat et les parents.\n\nQuestions aux lecteurs :\n\n• Combien de mineurs sont malades, et qui publie le chiffre officiel ?\n\n• Un enfant en détention a-t-il encore droit à un vrai médecin, ou seulement à un comprimé ?",
    },
    sources: ["Vant Bèf Info", "Le Concret Info"],
    sourceLinks: [
      { name: "Vant Bèf Info", url: "https://vantbefinfo.com/haiti-sante-plusieurs-mineurs-detenus-au-cermicol-touches-par-une-maladie-febrile/" },
      { name: "Le Concret Info", url: "https://www.leconcretinfo.com/2026/11/05/cermicol-des-cas-de-fievre-chez-des-mineurs-detenus-suscitent-linquietude-du-caddho/" },
    ],
  },
    {
    id: "ntk-anjha-jeux-hasard-2026-11-05",
    tier: "need-to-know",
    topic: "commerce",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:52:30-05:00",
    isFollowUp: true,
    headline: {
      ht: "Jwèt aza : ANJHA kreye pa dekrè 21 out, avi MEF la gen dat 5 oktòb",
      fr: "Jeux de hasard : l'ANJHA créée par décrets du 21 août, l'avis MEF date du 5 octobre",
    },
    teaser: {
      ht: "Yogonet, 10 novanm, detaye twa dekrè epi li raple se DGI sèl ki ka ankasè.",
      fr: "Yogonet, le 10 novembre, détaille trois décrets et rappelle que seule la DGI peut encaisser.",
    },
    brief: {
      ht: "Yogonet tounen 10 novanm sou Otorite nasyonal jwèt aza ak lajan, ki te deja anonse apati yon avi MEF 5 oktòb ak dekrè ki te parèt nan Monitè 21 out. Konpozisyon otorite a ak dat demaraj li pa presize nan rapò sa a.",
      fr: "Yogonet revient le 10 novembre sur l'Autorité nationale des jeux de hasard et d'argent, déjà annoncée à partir d'un avis MEF du 5 octobre et de décrets parus au Moniteur le 21 août. La composition de l'autorité et sa date de démarrage ne sont pas précisées dans ce reportage.",
    },
    body: {
      ht: "Ministè Ekonomi ak Finans te anonse kreyasyon Otorite nasyonal jwèt aza ak lajan (ANJHA) nan yon avi ki gen dat 5 oktòb, Yogonet raple 10 novanm. Otorite a dwe regle, kontwole epi sipèvize aktivite jwèt nan tout peyi a, tankou kazino, paryaj ak bank bòlèt.\n\nDapre Yogonet, refòm nan chita sou twa dekrè ki te pibliye nan jounal ofisyèl Le Moniteur 21 out: youn kreye ANJHA, yon lòt fikse règ eksplwatasyon, yon twazyèm mete kanpe yon rejim fiskal pou sektè a. Medya a ajoute tèks sa yo pale pami lòt sou lisans, egzijans eksplwatasyon, pwoteksyon jwè ak minè, batay kont blanchiman ak sanksyon si gen mankman. ANJHA dwe gen syèj li nan Pòtoprens, ak posibilite louvri biwo lòt kote, epi fè lis operatè yo otorize yo.\n\nYogonet di tou te gen pwojè tèks yo te prezante nan Konsèy minis 11 out, anvan dekrè yo pibliye. Nan avi MEF la, operatè yo dwe peye lisans, taks ak lòt peman sèlman bay Direksyon jeneral enpo (DGI), sèl administrasyon ki gen dwa ankasè yo, kont resi.\n\nPwen sa a mete ajou yon dosye ki deja pibliye. Rapò 10 novanm nan pa bay konpozisyon ANJHA ni yon dat li kòmanse fonksyone.",
      fr: "Le ministère de l'Économie et des Finances a annoncé la création de l'Autorité nationale des jeux de hasard et d'argent (ANJHA) dans un avis daté du 5 octobre, rappelle Yogonet le 10 novembre. L'autorité doit réguler, contrôler et superviser les activités de jeux à l'échelle nationale, y compris les casinos, les paris et les banques de borlette.\n\nSelon Yogonet, la réforme repose sur trois décrets publiés au journal officiel Le Moniteur le 21 août : l'un crée l'ANJHA, un autre fixe des règles d'exploitation, un troisième instaure un régime fiscal propre au secteur. Le média ajoute que ces textes portent notamment sur les licences, les exigences d'exploitation, la protection des joueurs et des mineurs, la lutte contre le blanchiment et des sanctions en cas de manquement. L'ANJHA doit avoir son siège à Port-au-Prince, avec la possibilité d'ouvrir des bureaux ailleurs, et dresser la liste des opérateurs autorisés.\n\nYogonet indique aussi que des projets de textes avaient été présentés en Conseil des ministres le 11 août, avant la publication des décrets. Dans l'avis du MEF, les opérateurs doivent verser licences, taxes et autres paiements uniquement à la Direction générale des impôts (DGI), seule administration habilitée à les encaisser, contre quittance.\n\nCe point actualise un dossier déjà publié. Le reportage du 10 novembre ne donne pas la composition de l'ANJHA ni une date de mise en service.",
    },
    sources: ["Yogonet"],
    sourceLinks: [
      { name: "Yogonet", url: "https://www.yogonet.com/international/news/2026/11/10/127229-haiti-establishes-national-gambling-regulator-anjha" },
    ],
  },
  {
    id: "qh-ayitibon-7000-mots-phase2-2026-11-05",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-06",
    publishedTime: "2026-11-06T10:26:00-05:00",
    headline: {
      ht: "AyitiBon : faz 2 konkou « 7000 mo pozitif », li vire sou espò",
      fr: "AyitiBon : phase 2 du concours « 7000 mots positifs », tournée vers le sport",
    },
    teaser: {
      ht: "Prezante 5 novanm. Final 7 fevriye 2027. Pri : 7000000 goud. Enskripsyon : 7000 goud pou ekip 7 moun.",
      fr: "Présentée le 5 novembre. Finale le 7 février 2027. Prix : 7000000 gourdes. Inscription : 7000 gourdes par équipe de 7.",
    },
    brief: {
      ht: "Dapre VBI, gwoup AyitiBon prezante faz 2 konkou nasyonal li a : finalis yo dwe monte yon pwojè espò.",
      fr: "Selon VBI, le groupe AyitiBon a présenté la phase 2 de son concours national : les finalistes devront monter un projet sportif.",
    },
    body: {
      ht: "Dapre Vant Bèf Info (5 novanm), gwoup AyitiBon prezante bay piblik la dezyèm faz konkou nasyonal « 7000 mo pozitif sou Ayiti », ki te lanse 7 jiyè 2026. Inisyativ la, dapre VBI, vle valorize 147 komin yo sou twa poto : konnen peyi a, valorize richès li, aji pou devlopman li.\n\nPremye faz la mande chak ekip sèt manm menm komin yon tèks 7000 mo an kreyòl sou istwa, kilti, gastronomi ak patikilarite lokal, ak pis solisyon pou pwoblèm komin nan. Ekip yo chwazi yo pase nan faz 2 : yon pwojè sou espò, AyitiBon chwazi paske li di espò ede enklizyon ak solidarite.\n\nKonkou a louvri pou elèv, etidyan, granmoun ak sektè nasyonal, nan dis depatman yo. Enskripsyon koute 7000 goud pou chak ekip. Gwoup loreya a genyen 7000000 goud. Gwo final la prevwa 7 fevriye 2027. Enfo : www.ayitibon.com.\n\nKesyon pou lektè yo :\n\n• 7000 goud enskripsyon : kiyès ki ka patisipe vre deyò Pòtoprens ?\n\n• Yon konkou « pozitif », èske li chanje anyen si wout ak lekòl rete fèmen ?",
      fr: "Selon Vant Bèf Info (5 novembre), le groupe AyitiBon a présenté au public la deuxième phase de son concours national « 7000 mots positifs sur Haïti », lancé le 7 juillet 2026. L'initiative, écrite VBI, veut valoriser les 147 communes autour de trois piliers : connaître le pays, valoriser ses richesses, agir pour son développement.\n\nLa première phase demande à chaque équipe de sept membres d'une même commune un texte de 7000 mots en créole sur l'histoire, la culture, la gastronomie et les particularités locales, avec des pistes de solutions aux problèmes de la commune. Les équipes retenues passeront à la phase 2 : un projet axé sur le sport, choisi selon AyitiBon pour l'inclusion et la solidarité.\n\nLe concours est ouvert aux écoliers, étudiants, adultes et secteurs nationaux, dans les dix départements. L'inscription coûte 7000 gourdes par équipe. Le groupe lauréat remporte 7000000 gourdes. La grande finale est prévue le 7 février 2027. Infos : www.ayitibon.com.\n\nQuestions aux lecteurs :\n\n• 7000 gourdes d'inscription : qui peut vraiment participer hors Port-au-Prince ?\n\n• Un concours « positif » change-t-il quoi que ce soit si les routes et les écoles restent fermées ?",
    },
    sources: ["Vant Bèf Info"],
    sourceLinks: [
      { name: "Vant Bèf Info", url: "https://vantbefinfo.com/7-000-mots-positifs-sur-haiti-un-concours-cree-pour-changer-le-regard-sur-le-pays/" },
    ],
  },
  {
    id: "qh-lenny-joseph-milan-europa-2026-11-05",
    tier: "quick-hit",
    topic: "sports",
    publishedAt: "2026-11-06",
    publishedTime: "2026-11-06T10:25:50-05:00",
    headline: {
      ht: "Liga Ewòp : Lenny Joseph fè AC Milan tonbe (0-2)",
      fr: "Europa League : Lenny Joseph fait tomber l'AC Milan (0-2)",
    },
    teaser: {
      ht: "Doub gòl Ayisyen an San Siro (52e, 66e) pou Ferencváros, devan 49372 espektatè. 4e jounen.",
      fr: "Doublé du Haitien à San Siro (52e, 66e) pour Ferencváros, devant 49372 spectateurs. 4e journée.",
    },
    brief: {
      ht: "Dapre Le Nouvelliste ak UEFA, Lenny Joseph make de gòl viktwa Ferencváros kont AC Milan 5 novanm.",
      fr: "Selon Le Nouvelliste et l'UEFA, Lenny Joseph a inscrit les deux buts de la victoire de Ferencváros contre l'AC Milan le 5 novembre.",
    },
    body: {
      ht: "Dapre Le Nouvelliste (5 novanm) ak sit ofisyèl UEFA, Lenny Joseph, entènasyonal ayisyen 26 an nan Ferencváros, make yon doub gòl ki pèmèt klib li bat AC Milan 2-0 San Siro, jedi 5 novanm 2026, nan 4e jounen faz chanpyona Liga Ewòp, devan 49372 espektatè.\n\nDapre UEFA ak kont randi AC Milan, Joseph louvri nòt la nan 52e minit epi double nan 66e, Zachariassen sèvi l chak fwa. Gadyen milanè Lorenzo Torriani, nan premye titularizasyon li, te fè plizyè arè nan premye peryòd. Ferencváros fini ak dizè aprè ekspilsyon Bamidele Yusuf (77e), san Milan pa redwi ekart la. Ferencváros rete sou kat viktwa nan kat match ; Milan rete a twa pwen.\n\nKesyon pou lektè yo :\n\n• Konbyen klib ewopeyen k ap swiv Joseph vre apre yon nwit konsa ?\n\n• Èske Ayiti ap kenbe lyen ak biteur Ewòp li yo, oswa sèlman bat bravo byen lwen ?",
      fr: "Selon Le Nouvelliste (5 novembre) et le site officiel de l'UEFA, Lenny Joseph, international haïtien de 26 ans au Ferencváros, a inscrit un doublé qui a permis à son club de battre l'AC Milan 2-0 à San Siro, le jeudi 5 novembre 2026, lors de la 4e journée de la phase de championnat de l'Europa League, devant 49372 spectateurs.\n\nD'après l'UEFA et le compte rendu de l'AC Milan, Joseph a ouvert le score à la 52e minute puis doublé la mise à la 66e, servi à chaque fois par Kristoffer Zachariassen. Le gardien milanais Lorenzo Torriani, pour sa première titularisation, avait multiplié les arrêts en première période. Ferencváros a terminé à dix après l'expulsion de Bamidele Yusuf (77e), sans que Milan ne réduise l'écart. Ferencváros reste sur quatre victoires en quatre matchs ; le Milan stagne à trois points.\n\nQuestions aux lecteurs :\n\n• Combien de clubs européens suivent vraiment Joseph après une nuit comme celle-là ?\n\n• Haïti saura-t-elle garder un lien avec ses buteurs d'Europe, ou seulement les applaudir de loin ?",
    },
    sources: ["Le Nouvelliste", "UEFA", "AC Milan"],
    sourceLinks: [
      { name: "Le Nouvelliste (lede ; suite partielle paywall)", url: "https://lenouvelliste.com/article/273625/europa-league-lenny-joseph-fait-tomber-le-milan-ac" },
      { name: "UEFA", url: "https://www.uefa.com/uefaeuropaleague/news/02ab-22004d716327-dd7c42bc0d91-1000--europa-league-matchday-4-round-up-ferencvaros-triumphant-/" },
      { name: "AC Milan (officiel)", url: "https://www.acmilan.com/it/news/articoli/europa-league/2026-11-05/stop-casalingo-in-europa-league" },
    ],
  },
  {
    id: "ntk-brana-suspension-insecurite-2026-11-04",
    tier: "need-to-know",
    topic: "commerce",
    publishedAt: "2026-11-05",
    publishedTime: "2026-11-05T13:35:11-05:00",
    headline: {
      ht: "BRANA (Heineken) sispann aktivite li yo tanporèman poutèt ensekirite a",
      fr: "BRANA (Heineken) suspend temporairement ses activités face à l'insécurité",
    },
    teaser: {
      ht: "Nan yon nòt entèn 4 novanm, brasri a mande anplwaye yo rete lakay yo. Gen aktivite esansyèl ki ka kontinye ak mwens moun. Pa gen dat repriz.",
      fr: "Dans une note interne du 4 novembre, la brasserie demande à son personnel de rester chez lui. Des opérations essentielles pourraient continuer avec un effectif réduit. Aucune date de reprise.",
    },
    brief: {
      ht: "Dapre Vant Bèf Info ak HaitiLibre, Brasri nasyonal Ayiti (BRANA), ki fè pati gwoup Heineken, sispann aktivite li yo tanporèman pou pwoteje anplwaye yo. Pa gen dat repriz.",
      fr: "Selon Vant Bèf Info et HaitiLibre, la Brasserie nationale d'Haïti (BRANA), filiale du groupe Heineken, a suspendu temporairement ses activités pour protéger son personnel. Aucune date de reprise n'est annoncée.",
    },
    body: {
      ht: "Dapre Vant Bèf Info (4 novanm) ak HaitiLibre (zapping 5 novanm), Brasri nasyonal Ayiti (BRANA), ki fè pati gwoup Heineken, deside sispann aktivite li yo tanporèman poutèt ensekirite a k ap vin pi grav.\n\nNan yon nòt entèn bay anplwaye yo, jan Vant Bèf Info ak HaitiLibre rapòte l, direksyon an mande yo rete lakay yo jiskaske gen lòt lòd, epi swiv sa sèvis sekirite a di. Li mande yo rete sou telefòn oswa imèl tou, pou yo ka resevwa nenpòt nouvo mesaj.\n\nGen kèk aktivite ki esansyèl ki ka kontinye, selon jan sekirite a ap mache, ak mwens anplwaye. Nan rapò de medya sa yo, pa gen dat repriz.\n\nKesyon pou lektè yo :\n\n• Konbyen tan yon brasri tankou BRANA ka rete fèmen anvan gen mank nan mache a ?\n\n• Kiyès ki asire sekirite anplwaye ki toujou ap fè aktivite esansyèl yo ?",
      fr: "Selon Vant Bèf Info (4 novembre) et HaitiLibre (zapping du 5 novembre), la Brasserie nationale d'Haïti (BRANA), filiale du groupe Heineken, a décidé de suspendre temporairement ses activités en raison de la dégradation de la situation sécuritaire.\n\nDans une note interne adressée aux employés, telle que Vant Bèf Info et HaitiLibre la rapportent, la direction leur demande de rester chez eux jusqu'à nouvel ordre et de suivre les consignes du service de sécurité. Elle leur recommande aussi de rester joignables, par téléphone ou par courriel, pour toute nouvelle communication.\n\nCertaines activités jugées essentielles pourraient toutefois être maintenues, selon l'évolution de la sécurité et avec un effectif réduit. Aucune date de reprise n'est annoncée.\n\nQuestions aux lecteurs :\n\n• Combien de temps une brasserie comme la BRANA peut-elle rester à l'arrêt avant une rupture de stock ?\n\n• Qui assure la sécurité du personnel encore mobilisé pour les opérations essentielles ?",
    },
    sources: ["Vant Bèf Info", "HaitiLibre"],
    sourceLinks: [
      { name: "Vant Bèf Info", url: "https://vantbefinfo.com/haiti-la-brana-contrainte-de-mettre-ses-activites-a-larret-face-a-linsecurite/" },
      { name: "HaitiLibre (zapping)", url: "https://www.haitilibre.com/article-48829-haiti-flash-zapping.html" },
    ],
  },
  {
    id: "ntk-opinion-midterms-tps-parole-2026-11-04",
    tier: "need-to-know",
    topic: "politics",
    publishedAt: "2026-11-04",
    publishedTime: "2026-11-04T07:30:00-05:00",
    isBreaking: true,
    breakingHours: 12,
    author: { fr: "Par Blaise A. Joseph (BAJ)", ht: "Pa Blaise A. Joseph (BAJ)" },
    headline: {
      ht: "Eleksyon Etazini : demokrat yo pran Kongrè a. Sa sa vle di pou moun TPS ak moun parole Biden yo (Opinyon)",
      fr: "Élections américaines : les démocrates prennent le Congrès. Ce que ça change pour les TPS et les parolés de Biden (Opinion)",
    },
    teaser: {
      ht: "Sena ak Chanm nan pase nan men demokrat yo. Men TPS Ayiti a deja fini, e anyen pa chanje demen maten.",
      fr: "Le Sénat et la Chambre passent aux démocrates. Mais le TPS Haïti est déjà terminé, et rien ne change demain matin.",
    },
    brief: {
      ht: "Dapre AP, demokrat yo pran de chanm Kongrè a. Men sa sa ka chanje, e sa li pa ka chanje, pou Ayisyen ki sou TPS ak parole Biden.",
      fr: "Selon l'AP, les démocrates prennent les deux chambres du Congrès. Voici ce que ça peut changer, et ce que ça ne change pas, pour les Haïtiens sous TPS et parole Biden.",
    },
    body: {
      ht: "Ameriken yo vote madi 3 novanm, e mesaj la klè. Dapre Associated Press, demokrat yo pran kontwòl de chanm Kongrè a. Pou nou menm, Ayisyen ki Ozetazini, kesyon an se pa kiyès ki genyen. Kesyon an se : kisa sa chanje pou frè ak sè nou ki sou TPS e pou moun ki te antre ak parole imanitè Biden nan ?\n\nChif yo dabò. Nan Sena a, demokrat yo gen 54 syèj, ak 2 endepandan, kont 44 pou repibliken yo, dapre Politico. De syèj poko deside : Mississippi, ki sere anpil, ak Alaska. Demokrat yo pran 7 syèj nan men repibliken yo : Iowa, Kansas, Ohio, Maine, Kawolin di Nò, Kawolin di Sid ak Texas, dapre AP. Nan Chanm reprezantan an, toujou dapre Politico, demokrat yo gen 228 syèj kont 139 pou repibliken yo, e gen 68 kous ki poko deside.\n\nNan Florid, se yon lòt istwa. AP deklare repibliken Ashley Moody genyen nan Sena a, ak 50,9% kont 48,0% pou demokrat Angie Nixon. AP deklare tou repibliken Byron Donalds genyen pòs gouvènè a kont David Jolly. Yon bon nouvèl pou kominote a : Christina Romelus, ki fèt Pòtoprens, genyen syèj Distri 4 nan konsèy lekòl Palm Beach la ak 61,59% vwa, dapre WPBF.\n\nKounye a, reyalite a. TPS pou Ayiti fini 27 jiyè 2026, apre desizyon Lakou siprèm nan nan ka Mullin v. Doe. Parole imanitè CHNV Biden nan fini tou. Nouvo Kongrè a pa kòmanse travay anvan 3 janvye. Kidonk anyen pa chanje demen maten, e pèsonn pa jwenn yon estati paske demokrat yo genyen.\n\nMen sa Kongrè a ka fè, se pa ti bagay. Li ka konvoke chèf DHS yo pou fè yo temwaye anba sèman sou depòtasyon yo voye Ayiti. Li kenbe bidjè a, kidonk lajan depòtasyon yo. Li ka vote yon lwa pwoteksyon pou Ayisyen. Si prezidan an bloke l, l ap oblije fè l piblikman, ak veto li, devan tout moun.\n\nYon dènye mo, e li enpòtan. Apre chak eleksyon, gen eskwo ki rele moun nou yo pou vann yo yon \"nouvo TPS\" oswa yon \"regilarizasyon\". Pa gen okenn nouvo pwogram jodi a. Pa peye pèsonn. Pale ak yon avoka imigrasyon serye oswa yon òganizasyon serye.\n\nKesyon pou lektè yo :\n• Èske eli ayisyano-ameriken yo pral pouse yon lwa pwoteksyon depi janvye, oswa y ap tann ?\n• Ki demokrat ki pral gen kouraj konvoke DHS sou depòtasyon ann Ayiti ?\n• Konbyen moun nou ki pral depòte ant jodi a ak 3 janvye ?\n• E ou menm, èske w deja resevwa yon apèl ki pwomèt yon \"nouvo TPS\" ?",
      fr: "Les Américains ont voté mardi 3 novembre, et le message est clair. Selon l'Associated Press, les démocrates ont pris le contrôle des deux chambres du Congrès. Pour nous, Haïtiens aux États-Unis, la question n'est pas de savoir qui a gagné. La question est : qu'est-ce que ça change pour nos frères et sœurs sous TPS et pour ceux arrivés avec la parole humanitaire de Biden ?\n\nLes chiffres d'abord. Au Sénat, les démocrates ont 54 sièges, en comptant 2 indépendants, contre 44 pour les républicains, selon Politico. Deux sièges restent à attribuer : le Mississippi, très serré, et l'Alaska. Les démocrates ont pris 7 sièges aux républicains : Iowa, Kansas, Ohio, Maine, Caroline du Nord, Caroline du Sud et Texas, selon l'AP. À la Chambre, toujours selon Politico, les démocrates ont 228 sièges contre 139 pour les républicains, avec 68 courses encore en suspens.\n\nEn Floride, c'est une autre histoire. L'AP a déclaré la républicaine Ashley Moody gagnante au Sénat, avec 50,9% contre 48,0% pour la démocrate Angie Nixon. L'AP a aussi déclaré le républicain Byron Donalds élu gouverneur contre David Jolly. Une bonne nouvelle pour la communauté : Christina Romelus, née à Port-au-Prince, a gagné le siège du District 4 au conseil scolaire de Palm Beach avec 61,59% des voix, selon WPBF.\n\nMaintenant, la réalité. Le TPS pour Haïti a pris fin le 27 juillet 2026, après la décision de la Cour suprême dans l'affaire Mullin v. Doe. La parole humanitaire CHNV, celle de Biden, est aussi terminée. Le nouveau Congrès ne siège qu'à partir du 3 janvier. Rien ne change donc demain matin, et personne ne retrouve un statut parce que les démocrates ont gagné.\n\nCe que le Congrès peut faire, en revanche, ce n'est pas rien. Il peut convoquer les responsables du DHS et les faire témoigner sous serment sur les expulsions vers Haïti. Il tient le budget, donc l'argent des expulsions. Il peut voter une loi de protection pour les Haïtiens. Si le président la bloque, il devra le faire publiquement, avec son veto, devant tout le monde.\n\nUn dernier mot, et c'est important. Après chaque élection, des escrocs appellent nos gens pour leur vendre un « nouveau TPS » ou une « régularisation ». Il n'y a aucun nouveau programme aujourd'hui. Ne payez personne. Parlez à un avocat d'immigration reconnu ou à une organisation sérieuse.\n\nQuestions aux lecteurs :\n• Les élus haïtiano-américains vont-ils pousser une loi de protection dès janvier, ou attendre ?\n• Quel démocrate aura le courage de convoquer le DHS sur les expulsions vers Haïti ?\n• Combien de nos gens auront été expulsés entre aujourd'hui et le 3 janvier ?\n• Et vous, avez-vous déjà reçu un appel qui promettait un « nouveau TPS » ?",
    },
    sources: ["AP", "Politico", "Hindustan Times (appels AP Floride)", "WPBF", "WLRN", "Florida Politics"],
    sourceLinks: [
      { name: "AP", url: "https://apnews.com/live/midterm-election-2026" },
      { name: "Politico", url: "https://www.politico.com/newsletters/playbook/2026/11/04/after-the-flood-01148513" },
      { name: "Hindustan Times (appels AP Floride)", url: "https://www.hindustantimes.com/world-news/us-news/us-midterm-election-results-snapshot-latest-senate-house-and-governorship-race-winners-101793759896204.html" },
      { name: "WPBF", url: "https://www.wpbf.com/article/palm-beach-county-voters-renew-1-mill-for-schools/74327653" },
      { name: "WLRN", url: "https://www.wlrn.org/education/2026-11-03/cervera-cothiere-romelus-school-board-runoff" },
      { name: "Florida Politics", url: "https://floridapolitics.com/archives/827754-christina-romelus-wins-open-palm-beach-school-board-district-4-race/" },
    ],
  },
  {
    id: "qh-jeremie-marche-urbayiti-2026-11-04",
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-04",
    publishedTime: "2026-11-04T07:15:00-05:00",
    headline: {
      ht: "Jeremi : fè pou nouvo mache piblik la rive, men p ap gen chanm frèt",
      fr: "Jérémie : l'acier du nouveau marché public est arrivé, mais il n'y aura pas de chambre froide",
    },
    teaser: {
      ht: "Pwojè URBAYITI 9752 m² lan ap revize, e pa gen dat pou fen travay yo.",
      fr: "Le projet URBAYITI de 9752 m² est en révision, et aucune date de fin des travaux n'a été donnée.",
    },
    brief: {
      ht: "Dapre Le Soulouquois, ki site HaitiLibre, fè pou nouvo mache Jeremi an rive samdi 31 oktòb, men chanm frèt la anile.",
      fr: "Selon Le Soulouquois, citant HaitiLibre, l'acier du nouveau marché de Jérémie est arrivé samedi 31 octobre, mais la chambre froide est abandonnée.",
    },
    body: {
      ht: "Dapre Le Soulouquois, ki site HaitiLibre, moso fè pou nouvo mache piblik Jeremi an rive sou chantye a samdi 31 oktòb nan aswè. Mache a ap bati nan kad pwogram URBAYITI e li kouvri 9752 m².\n\nNan yon konferans pou laprès 15 oktòb, meri a ak konpayi yo te anonse chanm frèt yo te prevwa a p ap bati, e lòt pati nan pwojè a ap chanje. Dapre HaitiLibre, chanjman yo konsène jan mache a pral ranje alafen. Pa gen dat pou fen travay yo.\n\nKesyon pou lektè yo :\n• San chanm frèt, kote machann pwason ak vyann yo pral sere machandiz yo ?\n• Poukisa yo chanje pwojè a, e kiyès ki pran desizyon an ?\n• Kilè mache a ap louvri ?\n",
      fr: "Selon Le Soulouquois, qui cite HaitiLibre, les pièces d'acier du nouveau marché public de Jérémie sont arrivées sur le chantier samedi 31 octobre au soir. Le marché est construit dans le cadre du programme URBAYITI et couvre 9752 m².\n\nLors d'une conférence de presse le 15 octobre, la mairie et les entreprises ont annoncé que la chambre froide prévue ne sera pas construite et que d'autres parties du projet changeront. Selon HaitiLibre, ces changements touchent l'aménagement final. Aucune date de fin des travaux n'a été donnée.\n\nQuestions aux lecteurs :\n• Sans chambre froide, où les marchandes de poisson et de viande garderont-elles leurs produits ?\n• Pourquoi le projet a-t-il été modifié, et qui l'a décidé ?\n• Quand le marché ouvrira-t-il ?\n",
    },
    sources: ["Le Soulouquois", "HaitiLibre"],
    sourceLinks: [
      { name: "Le Soulouquois", url: "https://lesoulouquois.com/blog/2026/11/03/jeremie-market-urbayiti/" },
    ],
  },
  {
    id: "qh-secteur-informel-indemnisation-2026-11-04",
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-11-04",
    publishedTime: "2026-11-04T07:15:00-05:00",
    headline: {
      ht: "Sektè enfòmèl la rejte 20 milyon goud gouvènman an, li mande 150000 a 200000 goud pou chak machann",
      fr: "Le secteur informel rejette les 20 millions de gourdes du gouvernement et réclame 150000 à 200000 gourdes par marchand",
    },
    teaser: {
      ht: "Kolektif CCSIHPE menase pa patisipe nan eleksyon yo toutotan mache yo pa libere e an sekirite.",
      fr: "Le collectif CCSIHPE menace de ne pas participer aux élections tant que les marchés ne seront pas libérés et sécurisés.",
    },
    brief: {
      ht: "Dapre FICOM, CCSIHPE mache madi 3 novanm soti Plas Desalin rive Ministè Planifikasyon pou mande yon konpansasyon dirèk pou machann ki viktim ensekirite.",
      fr: "Selon FICOM, le CCSIHPE a marché mardi 3 novembre de la place Dessalines au ministère de la Planification pour réclamer une indemnisation directe des marchands victimes de l'insécurité.",
    },
    body: {
      ht: "Dapre FICOM, Kolektif Sitwayen Sektè Enfòmèl Ayisyen ak Ti Antrepriz (CCSIHPE) mache madi 3 novanm soti Plas Desalin rive devan Ministè Planifikasyon ak Koperasyon Ekstèn. Kolektif la rejte 20 milyon goud gouvènman an pwopoze a, li di li pa ase. Li mande ant 150000 ak 200000 goud pou chak machann ki viktim ensekirite.\n\nKowòdonatè nasyonal li, M. Boileau, di sektè enfòmèl la reprezante prèske 80% moun ki travay nan peyi a. Kolektif la avèti li p ap sipòte ni patisipe nan pwochen eleksyon yo toutotan espas komès yo pa libere e an sekirite. Li pwomèt mobilizasyon an ap grandi si ministè a pa reponn.\n\nEnfòmasyon sa yo soti nan yon sèl sous. Nou pa jwenn reyaksyon Ministè Planifikasyon.\n\nKesyon pou lektè yo :\n• Konbyen machann gouvènman an panse ede ak 20 milyon goud ?\n• Kiyès ki fè lis viktim yo, e kiyès ki kontwole l ?\n• Èske gouvènman an ka inyore yon bòykòt eleksyon 80% travayè yo ?\n",
      fr: "Selon FICOM, le Collectif des Citoyens du Secteur Informel Haïtien et des Petites Entreprises (CCSIHPE) a marché mardi 3 novembre de la place Dessalines jusqu'au ministère de la Planification et de la Coopération externe. Le collectif rejette l'enveloppe de 20 millions de gourdes proposée par le gouvernement, qu'il juge insuffisante. Il réclame entre 150000 et 200000 gourdes pour chaque marchand victime de l'insécurité.\n\nSon coordonnateur national, M. Boileau, affirme que le secteur informel représente près de 80% de la population active. Le collectif prévient qu'il ne soutiendra pas les prochaines élections et n'y participera pas tant que les espaces commerciaux ne seront pas libérés et sécurisés. Il promet d'amplifier la mobilisation sans réponse du ministère.\n\nCes informations viennent d'une seule source. Nous n'avons pas trouvé de réaction du ministère de la Planification.\n\nQuestions aux lecteurs :\n• Combien de marchands le gouvernement compte-t-il aider avec 20 millions de gourdes ?\n• Qui a établi la liste des victimes, et qui la contrôle ?\n• Un boycott des élections par 80% des actifs, le gouvernement peut-il l'ignorer ?\n",
    },
    sources: ["FICOM"],
    sourceLinks: [
      { name: "FICOM", url: "https://ficom.tv/le-secteur-informel-rejette-laide-gouvernementale-et-exige-une-indemnisation-directe/" },
    ],
  },
  {
    id: "ntk-bukele-helicopteres-tchad-2026-11-04",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-04",
    publishedTime: "2026-11-04T07:15:00-05:00",
    headline: {
      ht: "Bukele : elikoptè salvadoryen yo repouse gang ki t ap atake sòlda tchadyen GSF yo",
      fr: "Bukele : les hélicoptères salvadoriens auraient repoussé des gangs qui attaquaient des soldats tchadiens de la GSF",
    },
    teaser: {
      ht: "Sou X, prezidan salvadoryen an di \"gang yo pa gen avantaj ankò\" e li pwomèt ede Ayisyen \"repran peyi a\". Pa gen bilan.",
      fr: "Sur X, le président salvadorien affirme que « les gangs n'ont plus l'avantage » et promet d'aider les Haïtiens à « reprendre le pays ». Aucun bilan.",
    },
    brief: {
      ht: "Dapre Infobae ak DW, Nayib Bukele di sou X madi 3 novanm elikoptè atak salvadoryen yo te repouse gang ki t ap atake sòlda tchadyen GSF yo.",
      fr: "Selon Infobae et la DW, Nayib Bukele a affirmé sur X mardi 3 novembre que ses hélicoptères d'attaque ont repoussé des gangs qui attaquaient des soldats tchadiens de la GSF.",
    },
    body: {
      ht: "Dapre Infobae ak Deutsche Welle (DW), prezidan salvadoryen Nayib Bukele ekri sou X madi 3 novanm : \"Gang yo t ap atake sòlda tchadyen GSF yo. Nou rive vit e nou repouse atakan yo ak elikoptè atak nou yo.\" Li ajoute : \"Gang yo pa gen avantaj ankò.\" Bukele pa bay ni kote egzakteman, ni lè, ni bilan. Selon sa nou konnen, ni GSF ni kontenjan tchadyen an poko konfime vèsyon li an piblikman.\n\nNan yon lòt long mesaj sou X, DW rapòte, Bukele pwomèt ede Ayisyen \"repran peyi a nan men trèt ki trayi eritaj Desalin\". Dapre li, gen ladan yo ki manm gang, gen lòt ki \"finanse gang oswa ba yo zam\". Li pa nonmen pèsonn.\n\nMenm jou a, Premye minis Alix Didier Fils-Aimé remèsye Bukele e li repete \"se Leta ayisyen ki responsab direksyon politik ak estratejik\" batay la, dapre DW.\n\nKesyon pou lektè yo :\n• Ki kote egzakteman atak sa a te fèt, e èske gen sivil ki mouri oswa blese ?\n• Kiyès ki otorize elikoptè salvadoryen yo tire, e anba ki règ ?\n• Lè Bukele pale de moun ki \"finanse gang\", èske li gen non presi nan tèt li, e èske lajistis ayisyen genyen non sa yo ?\n",
      fr: "Selon Infobae et la Deutsche Welle (DW), le président salvadorien Nayib Bukele a écrit sur X mardi 3 novembre : « Les gangs attaquaient des soldats tchadiens de la GSF. Nous sommes arrivés rapidement et avons repoussé les assaillants avec nos hélicoptères d'attaque. » Il ajoute : « Les gangs n'ont plus l'avantage. » Bukele n'a donné ni lieu précis, ni heure, ni bilan. La GSF et le contingent tchadien n'ont pas confirmé publiquement sa version, à notre connaissance.\n\nDans un autre long message sur X, rapporté par la DW, Bukele promet d'aider les Haïtiens à « reprendre le pays des mains des traîtres qui trahissent l'héritage de Dessalines ». Selon lui, certains sont membres de gangs, d'autres « financent les gangs ou leur donnent des armes ». Il ne nomme personne.\n\nLe même jour, le Premier ministre Alix Didier Fils-Aimé a remercié Bukele et répété que « c'est l'État haïtien qui est responsable de la direction politique et stratégique » de la lutte, selon la DW.\n\nQuestions aux lecteurs :\n• Où exactement a eu lieu cette attaque, et y a-t-il eu des morts ou des blessés civils ?\n• Qui autorise les hélicoptères salvadoriens à frapper, et sous quelles règles ?\n• Quand Bukele parle de ceux qui « financent les gangs », pense-t-il à des noms précis, et la justice haïtienne les a-t-elle ?\n",
    },
    sources: ["Infobae", "DW"],
    sourceLinks: [
      { name: "Infobae", url: "https://www.infobae.com/el-salvador/2026/11/04/bukele-afirmo-que-fuerzas-salvadorenas-asistieron-a-soldados-de-chad-atacados-por-pandillas-en-haiti/" },
      { name: "DW", url: "https://www.dw.com/es/bukele-dice-que-ayudar%C3%A1-a-los-haitianos-a-retomar-el-pa%C3%ADs/a-79849730" },
    ],
  },
  {
    id: "qh-cite-soleil-mairie-pm-2026-11-03",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-03",
    publishedTime: "2026-11-03T18:40:00-05:00",
    headline: {
      ht: "Site Solèy : meri a mande PM a aji anvan fen desanm",
      fr: "Cité Soleil : la mairie demande au Premier ministre d'agir avant la fin décembre",
    },
    teaser: {
      ht: "Pon Soleil 4, fatra ak biwo enskripsyon elektoral : meri a mete demand li sou tab la nan fèt Gede yo.",
      fr: "Pont Soleil 4, déchets et bureaux d'inscription électorale : la mairie a posé ses demandes lors de la fête des Gédé.",
    },
    brief: {
      ht: "Dapre Vant Bèf Info, otorite meri Site Solèy mande Premye minis Fils-Aimé fè Leta entèvni anvan fen desanm.",
      fr: "Selon Vant Bèf Info, les autorités municipales de Cité Soleil demandent au Premier ministre Fils-Aimé une intervention de l'État avant la fin décembre.",
    },
    body: {
      ht: "Dapre Vant Bèf Info, otorite meri Site Solèy yo lanse yon apèl bay Premye minis Alix Didier Fils-Aimé lendi 2 novanm, pandan fèt Gede yo nan simityè Drouillard. Yo mande Leta entèvni anvan fen desanm.\n\n\"Olye nou selebre lavi nan lanmò, nou vle selebre lavi nan lavi\", konseye minisipal Johny Lundy di. Meri a mande travay sou pon Soleil 4 e li denonse fatra k ap anpile. Ansanm ak moun yo, li mande tou pou yo louvri biwo enskripsyon elektoral nan Lise nasyonal Site Solèy, Duvivier, Don Bosco ak Sainte-Anne.\n\nMeri a di komin nan ap degrade paske Leta pa akonpaye l. Nou pa jwenn repons Primati a.\n\nKesyon pou lektè yo :\n• Poukisa se nan fèt lèmò pou Site Solèy rive fè moun tande l ?\n• Èske CEP ap louvri biwo enskripsyon nan Site Solèy anvan eleksyon yo ?\n• Kiyès ki pral peye pou pon Soleil 4 la ?\n",
      fr: "Selon Vant Bèf Info, les autorités municipales de Cité Soleil ont lancé un appel au Premier ministre Alix Didier Fils-Aimé lundi 2 novembre, lors de la fête des Gédé au cimetière de Drouillard. Elles demandent une intervention de l'État avant la fin décembre.\n\n« Au lieu de célébrer la vie dans la mort, nous voulons célébrer la vie dans la vie », a déclaré le conseiller municipal Johny Lundy. La mairie réclame des travaux sur le pont Soleil 4 et dénonce l'accumulation des déchets. Avec les habitants, elle demande aussi l'ouverture de bureaux d'inscription électorale au Lycée national de Cité Soleil, à Duvivier, à Don Bosco et à Sainte-Anne.\n\nLa mairie dit que la commune se dégrade faute d'accompagnement de l'État. Nous n'avons pas trouvé de réponse de la Primature.\n\nQuestions aux lecteurs :\n• Pourquoi faut-il une fête des morts pour que Cité Soleil se fasse entendre ?\n• Le CEP ouvrira-t-il des bureaux d'inscription à Cité Soleil avant les élections ?\n• Qui paiera pour le pont Soleil 4 ?\n",
    },
    sources: ["Vant Bèf Info"],
    sourceLinks: [
      { name: "Vant Bèf Info", url: "https://vantbefinfo.com/haiti-cite-soleil-la-mairie-demande-au-premier-ministre-dagir-avant-la-fin-decembre/" },
    ],
  },
  {
    id: "ntk-salvadoriens-commandement-2026-11-03",
    archived: true,
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-03",
    publishedTime: "2026-11-03T18:40:00-05:00",
    isFollowUp: true,
    readMoreLink: {
      fr: { before: "Pour lire notre article précédent sur l'arrivée des soldats salvadoriens, ", link: "cliquez ici", after: ".", href: "/story/ntk-salvador-2000-soldats-2026-10-29" },
      ht: { before: "Pou li atik anvan an sou sòlda salvadoryen yo, ", link: "klike la a", after: ".", href: "/ht/story/ntk-salvador-2000-soldats-2026-10-29" },
    },
    headline: {
      ht: "Sòlda salvadoryen yo : pa gen akò siyen, pa gen fòmasyon dwa moun ONU, se pwòp jeneral yo k ap kòmande yo",
      fr: "Soldats salvadoriens : pas d'accord signé, pas de formation ONU aux droits humains, ils répondent à leur propre général",
    },
    teaser: {
      ht: "Dapre Miami Herald, apèn 200 Salvadoryen anba GSF. ONU di deplwaman an se yon zafè ant Ayiti ak Salvadò. Kat teknisyen yo toujou disparèt.",
      fr: "Selon le Miami Herald, à peine 200 Salvadoriens relèvent de la GSF. L'ONU parle d'une affaire bilatérale entre Haïti et le Salvador. Les quatre techniciens restent introuvables.",
    },
    brief: {
      ht: "Dapre Miami Herald, pifò sòlda salvadoryen yo rapòte bay yon kòmandan salvadoryen, yo rive san fòmasyon dwa moun ONU egzije, e anvan yon akò siyen ak gouvènman ayisyen an.",
      fr: "Selon le Miami Herald, la plupart des soldats salvadoriens rendent compte à un commandant salvadorien, sont arrivés sans la formation aux droits humains exigée par l'ONU, et avant tout accord signé avec le gouvernement haïtien.",
    },
    body: {
      ht: "Dapre Miami Herald (Jacqueline Charles), sòlda salvadoryen ann Ayiti yo rapòte bay yon kòmandan salvadoryen Pòtoprens, se pa bay jeneral mongolyen ki dirije Fòs pou Siprime Gang yo (GSF). Pòtpawòl ONU, Stéphane Dujarric, di madi a se sèlman \"anviwon 200\" Salvadoryen ki anba manda GSF, kidonk anba kontwòl ONU. Pou rès yo, li di se yon zafè ant Ayiti ak Salvadò.\n\nDapre jounal la, règ ONU mande pou sòlda ki nan misyon entènasyonal fè yon fòmasyon sou dwa moun. Salvadoryen yo rive san fòmasyon sa a, e anvan okenn akò fòmèl siyen ak gouvènman ayisyen an. Prezidan Nayib Bukele di li gen 2500 sòlda Pòtoprens ak elikoptè atak ki rive 29 oktòb.\n\nDujarric raple tout operasyon ann Ayiti, nan GSF oswa non, dwe respekte dwa entènasyonal, dwa moun ak dwa imanitè. Li konfime tou ONU resevwa pa imèl yon lèt ki date 1ye novanm, Wilson Joseph, ke yo rele Lanmò Sanjou, chèf 400 Mawozo, siyen. \"N ap egzamine l\", li di.\n\nKat teknisyen fòs ayeryen salvadoryen yo, ki disparèt 18 oktòb apre yon anbiskad nan lès Pòtoprens, poko jwenn. Lanmò Sanjou di AP yo mouri, men Salvadò pa kwè sa. Dapre yon sous Herald la, operasyon plizyè èdtan GSF ak PNH te fè lendi nan Plenn Kildesak la pa jwenn yo, men sòlda yo prèske pa t resevwa bal.\n\nKesyon pou lektè yo :\n• Si yon sòlda salvadoryen touye yon sivil, devan ki tribinal l ap reponn ?\n• Poukisa gouvènman an kite 2500 sòlda antre san akò siyen ?\n• Kiyès ki otorize elikoptè atak yo, e anba ki règ ?\n",
      fr: "Selon le Miami Herald (Jacqueline Charles), les troupes salvadoriennes en Haïti rendent compte à un commandant salvadorien à Port-au-Prince, et non au général mongol qui dirige la Force de répression des gangs (GSF). Le porte-parole de l'ONU, Stéphane Dujarric, a dit mardi que seuls « environ 200 » Salvadoriens relèvent du mandat de la GSF et donc des mécanismes de contrôle de l'ONU. Pour le reste, il parle d'une affaire bilatérale entre Haïti et le Salvador.\n\nSelon le journal, les règles de l'ONU imposent une formation aux droits humains aux militaires déployés dans les missions internationales. Les Salvadoriens sont arrivés sans cette formation, et avant tout accord formel signé avec le gouvernement haïtien. Le président Nayib Bukele dit avoir 2500 soldats à Port-au-Prince ainsi que des hélicoptères d'attaque, arrivés le 29 octobre.\n\nDujarric rappelle que toutes les opérations en Haïti, dans la GSF ou non, doivent respecter le droit international, les droits humains et le droit humanitaire. Il confirme aussi que l'ONU a reçu par courriel une lettre datée du 1er novembre et signée par Wilson Joseph, dit Lanmò Sanjou, chef de 400 Mawozo. « Nous l'examinons », a-t-il dit.\n\nLes quatre techniciens de l'armée de l'air salvadorienne, disparus le 18 octobre après une embuscade à l'est de Port-au-Prince, n'ont pas été retrouvés. Lanmò Sanjou affirme à l'AP qu'ils sont morts, ce que le Salvador ne croit pas. Selon une source du Herald, l'opération de plusieurs heures menée lundi par la GSF et la PNH dans la Plaine du Cul-de-Sac ne les a pas retrouvés, mais les troupes n'ont presque pas essuyé de tirs.\n\nQuestions aux lecteurs :\n• Si un soldat salvadorien tue un civil, devant quel tribunal répondra-t-il ?\n• Pourquoi le gouvernement a-t-il laissé entrer 2500 soldats sans accord signé ?\n• Qui a autorisé les hélicoptères d'attaque, et sous quelles règles ?\n",
    },
    sources: ["Miami Herald"],
    sourceLinks: [
      { name: "Miami Herald", url: "https://www.miamiherald.com/news/nation-world/world/americas/haiti/article317899359.html" },
    ],
  },
  {
    id: "ntk-fils-aime-discours-territoire-2026-11-03",
    archived: true,
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-03",
    publishedTime: "2026-11-03T18:40:00-05:00",
    headline: {
      ht: "Fils-Aimé pale ak peyi a : « Leta p ap lage okenn teritwa », plis pase 4000 sòlda etranje ak yon lame 15000 sòlda",
      fr: "Fils-Aimé s'adresse au pays : « L'État ne renoncera à aucun territoire », plus de 4000 militaires étrangers et une armée visée à 15000 soldats",
    },
    teaser: {
      ht: "Nan premye diskou piblik li depi Salvadoryen yo rive, PM a di gang yo \"p ap ka domine\". Li pa di kijan sòlda salvadoryen yo ap opere.",
      fr: "Dans sa première prise de parole depuis l'arrivée des Salvadoriens, le PM affirme que les gangs « ne pourront pas dominer ». Il n'a pas dit comment opéreront les soldats salvadoriens.",
    },
    brief: {
      ht: "Premye minis Alix Didier Fils-Aimé di madi 3 novanm fòs etranje yo depase 4000 sòlda, e Leta vize yon lame 15000 sòlda. Yon kominike gouvènman an di \"Leta ayisyen p ap lage okenn teritwa\".",
      fr: "Le Premier ministre Alix Didier Fils-Aimé a affirmé mardi 3 novembre que les forces étrangères dépassent 4000 soldats et que l'État vise une armée de 15000 soldats. Un communiqué du gouvernement affirme que « l'État haïtien ne renoncera à aucun territoire ».",
    },
    body: {
      ht: "Premye minis Alix Didier Fils-Aimé pale ak piblik la madi 3 novanm, premye fwa depi sòlda salvadoryen yo kòmanse rive, dapre Miami Herald. Li di gouvènman an gen de priyorite : retabli sekirite sou tout teritwa a e òganize eleksyon. \"Nou antre nan yon faz desizif\", li di.\n\nDapre Le Quotidien 509, li di avèk fòs espesyal salvadoryen yo, sòlda entènasyonal k ap ede Ayiti yo depase 4000. \"Avèk ranfò sa a, mwen ka di gang yo p ap ka domine\", li di. Toujou dapre Le Quotidien 509, li anonse :\n• 3258 polisye anplis ak twa pwomosyon pwogram P4000 ;\n• 17622 jèn enskri pou antre nan Fòs Ame yo, ak yon objektif 15000 sòlda ;\n• 108 moun k ap fòme kòm fòs espesyal nan Meksik ;\n• 40 nouvo blende yo resevwa mwa pase, Leta peye pou yo.\n\n\"Se Leta ayisyen ki responsab direksyon politik ak estratejik batay la\", li di. \"Nou pa nan batay kont pèp la. Nou nan batay kont gang ki kenbe pèp la an otaj.\" Li pwomèt li p ap tolere okenn abi ni vyolasyon dwa moun, e li remèsye prezidan salvadoryen Nayib Bukele.\n\nNan yon kominike menm jou a, Juno7 rapòte, gouvènman an di \"Leta ayisyen p ap lage okenn teritwa\". Operasyon Kenscoff ak Gressier yo ap kontinye e yo ka elaji nan lòt zòn nan Lwès, nan Latibonit ak nan Sant. Dapre Juno7, kominike a pa bay ni dat ni plis mwayen.\n\nMiami Herald remake PM a prezante Salvadoryen yo tankou yo fè pati GSF, alòske fòs miltinasyonal la pa gen okenn otorite sou yo. Li pa di kijan yo pral opere ni avèk kiyès.\n\nKesyon pou lektè yo :\n• Kiyès ki kòmande 2500 sòlda salvadoryen yo vre : PM a, GSF oswa San Salvador ?\n• Kote akò siyen ak Salvadò a ye, e kilè y ap pibliye l ?\n• PM a pwomèt zewo abi : kiyès ki pral mennen ankèt si yon sivil mouri ?\n• Kilè n ap wè rezilta sou wout nasyonal yo ?\n",
      fr: "Le Premier ministre Alix Didier Fils-Aimé s'est adressé au public mardi 3 novembre, pour la première fois depuis l'arrivée des soldats salvadoriens, selon le Miami Herald. Il dit que le gouvernement a deux priorités : rétablir la sécurité sur tout le territoire et organiser des élections. « Nous sommes entrés dans une phase décisive », a-t-il déclaré.\n\nSelon Le Quotidien 509, il affirme que l'arrivée des forces spéciales salvadoriennes porte à plus de 4000 les militaires internationaux qui appuient Haïti. « Avec ce renforcement, je peux dire que les gangs ne pourront pas dominer », a-t-il dit. Il annonce aussi, toujours selon Le Quotidien 509 :\n• 3258 policiers de plus avec trois promotions du programme P4000 ;\n• 17622 jeunes inscrits au recrutement des Forces armées, et un objectif de 15000 soldats ;\n• 108 personnes en formation de forces spéciales au Mexique ;\n• 40 nouveaux blindés reçus le mois dernier, payés par l'État.\n\n« C'est l'État haïtien qui est responsable de la direction politique et stratégique de la lutte », a-t-il déclaré. « Nous ne sommes pas en guerre contre le peuple. Nous sommes en guerre contre les gangs qui prennent le peuple en otage. » Il promet de ne tolérer aucun abus ni violation des droits humains, et il a remercié le président salvadorien Nayib Bukele.\n\nDans un communiqué publié le même jour, rapporté par Juno7, le gouvernement affirme que « l'État haïtien ne renoncera à aucun territoire ». Les opérations de Kenscoff et de Gressier vont continuer et pourraient s'étendre à d'autres zones de l'Ouest, à l'Artibonite et au Centre. Selon Juno7, le communiqué ne donne ni calendrier ni moyens supplémentaires.\n\nLe Miami Herald note que le PM a présenté les Salvadoriens comme faisant partie de la GSF, alors que la force multinationale n'a aucune autorité sur eux. Il n'a pas dit comment ils opéreront ni avec qui.\n\nQuestions aux lecteurs :\n• Qui commande vraiment les 2500 soldats salvadoriens : le PM, la GSF ou San Salvador ?\n• Où est l'accord signé avec le Salvador, et quand sera-t-il publié ?\n• Le PM promet zéro abus : qui va enquêter si un civil est tué ?\n• Quand verra-t-on les résultats sur les routes nationales ?\n",
    },
    sources: ["Le Quotidien 509", "Juno7", "Miami Herald"],
    sourceLinks: [
      { name: "Le Quotidien 509", url: "https://lequotidien509.com/haiti-fils-aime-met-en-garde-les-gangs-annonce-plus-de-4-000-militaires-internationaux-et-vise-15-000-soldats-pour-larmee/" },
      { name: "Juno7", url: "https://www.juno7.ht/haiti-gouvernement-territoires-gangs-operations-securite/" },
      { name: "Miami Herald", url: "https://www.miamiherald.com/news/nation-world/world/americas/haiti/article317899359.html" },
    ],
  },
      {
    id: "qh-d1-paryaj-lakay-2026-11-03",
    tier: "quick-hit",
    topic: "sports",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T16:10:30-05:00",
    isFollowUp: true,
    headline: {
      ht: "D1 : Violette bat Juventus 3-0, Clavens Exantus fè yon triple",
      fr: "D1 : Violette bat Juventus 3-0, triplé de Clavens Exantus",
    },
    teaser: {
      ht: "Match yo te ranvwaye dimanch poutèt lapli a te jwe lendi nan Land des Gabions, dapre NAGO.",
      fr: "Le match reporté dimanche pour pluie a été joué lundi au Land des Gabions, selon NAGO.",
    },
    brief: {
      ht: "Violette AC bat Juventus des Cayes 3-0 lendi, pou premye jounen chanpyona nasyonal D1. Clavens Exantus make twa gòl yo, NAGO ekri.",
      fr: "Violette AC a battu Juventus des Cayes 3-0 lundi, pour la première journée du championnat national de D1. Clavens Exantus a inscrit les trois buts, écrit NAGO.",
    },
    body: {
      ht: "Match premye jounen chanpyona nasyonal D1 ant Violette AC ak Juventus des Cayes, yo te ranvwaye dimanch 8 novanm poutèt lapli dapre HaitiTempo, te jwe lendi nan Land des Gabions. Violette genyen 3-0, NAGO ekri 10 novanm. Clavens Exantus make twa gòl yo, nan 5e minit, nan 45e plis yon, epi nan 53e minit. Medya a presize li pote nimewo 18.\n\nYon ti kras apre twazyèm gòl la, Juventus jwenn yon penalite. Gadyen Stanley Delile repouse tire Makendy Claude, e nòt la pa chanje ankò, dapre NAGO. Viktwa sa a mete Violette an tèt gwoup Sid, ak 3 pwen. Se Rony Attimy k ap antrene ekip la. Sou lòt bò a, se Georgy Joseph ki t ap dirije Juventus. NAGO raple Violette te chanpyon nan de seri sezon pase a.\n\nLòt rezilta premye jounen an, yo te rapòte pou dimanch 8 novanm pa Pont Info ak HaitiTempo, rete sa yo:\n\n• Racing FC (Gonayiv) 2-1 Réal Hope FA\n• Tempête FC 0-1 FICA\n• AS Capoise 0-0 Ouanaminthe FC\n• Racing Club Haïtien 2-2 Don Bosco FC\n• Cavaly AS 0-0 América des Cayes\n\nHaitiTempo di Taylor Fils-Aimé make premye gòl sezon an pou FICA a 18e minit, sou teren Tempête. Pont Info te konte 8 gòl an total nan jounen dimanch la, san match ki te ranvwaye a.",
      fr: "Le match de la première journée du championnat national de D1 entre Violette AC et Juventus des Cayes, reporté dimanche 8 novembre pour cause de pluie selon HaitiTempo, a été joué lundi au Land des Gabions. Violette l'a emporté 3-0, écrit NAGO le 10 novembre. Clavens Exantus a inscrit les trois buts, à la 5e minute, à la 45e plus une, puis à la 53e minute. Le média précise qu'il porte le numéro 18.\n\nPeu après le troisième but, la Juventus a obtenu un penalty. Le gardien Stanley Delile a repoussé le tir de Makendy Claude, et le score n'a plus bougé, selon NAGO. Cette victoire place Violette en tête du groupe Sud, avec 3 points. L'équipe est entraînée par Rony Attimy. En face, la Juventus était dirigée par Georgy Joseph. NAGO rappelle que Violette a été sacré champion lors des deux séries de la saison dernière.\n\nLes autres résultats de la première journée, rapportés pour le dimanche 8 novembre par Pont Info et HaitiTempo, restent les suivants :\n\n• Racing FC (Gonaïves) 2-1 Réal Hope FA\n• Tempête FC 0-1 FICA\n• AS Capoise 0-0 Ouanaminthe FC\n• Racing Club Haïtien 2-2 Don Bosco FC\n• Cavaly AS 0-0 América des Cayes\n\nHaitiTempo indique que Taylor Fils-Aimé a inscrit le premier but de la saison pour le FICA à la 18e minute, sur le terrain de Tempête. Pont Info relevait 8 buts au total sur la journée de dimanche, hors match alors reporté.",
    },
    sources: ["NAGO", "Pont Info", "HaitiTempo"],
    sourceLinks: [
      { name: "NAGO", url: "https://news.nago.tv/clavens-exantus-signe-un-triple-et-violette-ac-ecrase-la-juventus-3-0" },
      { name: "Pont Info", url: "https://www.pontinfo.com/post/d1-paryaj-lakay-une-premi%C3%A8re-journ%C3%A9e-r%C3%A9ussie-pour-la-ligue-ha%C3%AFtienne-de-football" },
      { name: "HaitiTempo", url: "https://haititempo.com/foot-d1-taylor-fils-aime-marque-le-premier-but-de-la-saison/" },
    ],
  },
  {
    id: "qh-judo-montreal-panam-open-2026-11-05",
    tier: "quick-hit",
    topic: "sports",
    publishedAt: "2026-11-05",
    publishedTime: "2026-11-05T13:35:11-05:00",
    headline: {
      ht: "Judo : kat Ayisyen nan Open panameriken Monreyal, 7 ak 8 novanm",
      fr: "Judo : quatre Haïtiens à l'Open panaméricain de Montréal, les 7 et 8 novembre",
    },
    teaser: {
      ht: "Thechineau Alcina, Wedline Vertus, Hensley Petit-Frère ak Etznaison St-Hilaire, ak antrenè Ernst Laraque. Tounwa IJF nan Centre Pierre-Charbonneau.",
      fr: "Thechineau Alcina, Wedline Vertus, Hensley Petit-Frère et Etznaison St-Hilaire, avec l'entraîneur Ernst Laraque. Tournoi IJF au Centre Pierre-Charbonneau.",
    },
    brief: {
      ht: "Dapre HaitiLibre, Haiti-Tempo ak Federasyon entènasyonal judo a, Ayiti pral gen kat judoka nan Open panameriken Monreyal, 7 ak 8 novanm.",
      fr: "Selon HaitiLibre, Haiti-Tempo et la Fédération internationale de judo, Haïti aligne quatre judokas à l'Open panaméricain de Montréal les 7 et 8 novembre.",
    },
    body: {
      ht: "Dapre HaitiLibre (zapping 5 novanm) ak Haiti-Tempo (3 novanm), Federasyon ayisyen judo (FHJ) konfime kat judoka pral patisipe nan Open panameriken Monreyal, 7 ak 8 novanm 2026, nan Centre Pierre-Charbonneau. Antrenè Ernst Laraque ap akonpaye delegasyon an.\n\nAtlèt yo anonse :\n\n• Thechineau Alcina, -100 kg\n\n• Wedline Vertus, -78 kg\n\n• Hensley Petit-Frère, -73 kg\n\n• Etznaison St-Hilaire, -66 kg\n\nSou sit Federasyon entènasyonal judo (IJF), Montreal Panamerican Open 2026 ap fèt 7 rive 8 novanm. Gen 269 judoka ki soti nan 33 peyi : 158 gason ak 111 fanm. Nan pwogram IJF la, kategori -66 kg, -73 kg ak -78 kg pral jwe premye jou a, epi -100 kg dezyèm jou a. Non kat judoka ayisyen yo parèt sou lis angaje IJF la.\n\nNAGO te anonse delegasyon an tou nan flash li 4 novanm.\n\nKesyon pou lektè yo :\n\n• Kiyès ki peye vwayaj delegasyon ayisyen an pou l ale Monreyal ?\n\n• Kategori yo gaye sou de jou : kiyès nan peyi a ki pral ka swiv konba yo ?",
      fr: "Selon HaitiLibre (zapping du 5 novembre) et Haiti-Tempo (3 novembre), la Fédération haïtienne de judo (FHJ) a confirmé la participation de quatre judokas à l'Open panaméricain de Montréal, les 7 et 8 novembre 2026, au Centre Pierre-Charbonneau. L'entraîneur Ernst Laraque accompagne la délégation.\n\nLes athlètes annoncés :\n\n• Thechineau Alcina, -100 kg\n\n• Wedline Vertus, -78 kg\n\n• Hensley Petit-Frère, -73 kg\n\n• Etznaison St-Hilaire, -66 kg\n\nSur le site de la Fédération internationale de judo (IJF), le Montreal Panamerican Open 2026 se tient du 7 au 8 novembre, avec 269 judokas de 33 pays (158 hommes, 111 femmes). Le programme IJF place les catégories -66 kg, -73 kg et -78 kg le premier jour, et la catégorie -100 kg le second jour. Les quatre noms haïtiens figurent sur la liste des engagés de l'IJF.\n\nNAGO avait aussi annoncé la délégation dans son flash du 4 novembre.\n\nQuestions aux lecteurs :\n\n• Qui finance le déplacement de la délégation haïtienne à Montréal ?\n\n• Les catégories haïtiennes sont réparties sur deux jours : qui, en Haïti, pourra suivre les combats ?",
    },
    sources: ["HaitiLibre", "Haiti-Tempo", "IJF", "NAGO"],
    sourceLinks: [
      { name: "HaitiLibre (zapping)", url: "https://www.haitilibre.com/article-48829-haiti-flash-zapping.html" },
      { name: "Haiti-Tempo", url: "https://haititempo.com/judo-haiti-avec-4-athletes-a-lopen-panamericain-de-montreal/" },
      { name: "IJF (Montreal Panamerican Open 2026)", url: "https://www.ijf.org/competition/3169" },
      { name: "NAGO (flash du 4 novembre)", url: "https://nago.tv/flash-info/2026-11-04-08" },
    ],
  },
  {
    id: "qh-fils-aime-jet-contrats-2026-11-03",
    archived: true,
    tier: "quick-hit",
    topic: "gossip",
    publishedAt: "2026-11-03",
    publishedTime: "2026-11-03T05:30:00-05:00",
    headline: {
      ht: "Fils-Aimé swadizan vwayaje an jè prive nan Meksik sou kont Leta, pandan kontra Erik Prince ak Roger Stone ap koute dè milyon",
      fr: "Fils-Aimé aurait voyagé en jet privé au Mexique aux frais de l'État, pendant que les contrats Erik Prince et Roger Stone coûtent des millions",
    },
    teaser: {
      ht: "Dapre Radio Télé Métronome, Leta ta peye anviwon 4500 dola lè a pou jè a. FJKL evalye kontra Windward Wyoming nan 52 milyon dola pa ane.",
      fr: "Selon Radio Télé Métronome, l'État aurait payé environ 4500 dollars l'heure pour le jet. La FJKL évalue le contrat Windward Wyoming à 52 millions de dollars par an.",
    },
    brief: {
      ht: "Dapre Rezo Nòdwès, ki site Radio Télé Métronome atravè Le Placentin, PM Alix Didier Fils-Aimé ta ale Meksik an jè prive sou kont Leta, pou yon maryaj dapre medya ayisyen.",
      fr: "Selon Rezo Nòdwès, qui cite Radio Télé Métronome via Le Placentin, le Premier ministre Alix Didier Fils-Aimé se serait rendu au Mexique en jet privé aux frais de l'État, pour un mariage selon des médias haïtiens.",
    },
    body: {
      ht: "Dapre Rezo Nòdwès, Premye minis Alix Didier Fils-Aimé ta fè dènye vwayaj li nan Meksik abò yon jè prive. Medya ayisyen di se te pou yon maryaj. Radio Télé Métronome, Le Placentin site, di Leta ta peye lokasyon avyon an, anviwon 4500 dola lè a. Pandan tan sa a, gouvènman an te mete mezi oterite ki limite vwayaj ofisyèl yo.\n\nMenm atik la site Fondasyon Je Klere (FJKL), ki evalye kontra sekirite ak Windward Wyoming, yon konpayi ki asosye ak Erik Prince, nan 52 milyon dola pou yon ane. FJKL di 35,5 milyon dola ta deja dekese nan 8 premye mwa yo, e li di li pa jwenn vèsyon siyen kontra a. Dapre dokiman laprès ameriken rapòte, kontra lobi ak Drake Ventures, konpayi Roger Stone, prevwa jiska 780000 dola sou 12 mwa.\n\nNou pa jwenn okenn repons biwo Premye minis la sou vwayaj la oswa sou depans sa yo.\n\nKesyon pou lektè yo :\n• Kiyès ki otorize vwayaj la, e kiyès ki peye l vre ?\n• Poukisa kontra Windward Wyoming lan poko pibliye ?\n• Ki rezilta 35,5 milyon dola yo bay ?\n",
      fr: "Selon Rezo Nòdwès, le Premier ministre Alix Didier Fils-Aimé aurait effectué son récent voyage au Mexique à bord d'un jet privé. Des médias haïtiens l'attribuent à un mariage. Radio Télé Métronome, cité par Le Placentin, affirme que l'État aurait payé la location de l'appareil, à environ 4500 dollars l'heure. Le gouvernement avait pourtant instauré des mesures d'austérité limitant les voyages officiels aux missions essentielles.\n\nLe même article cite la Fondasyon Je Klere (FJKL), qui évalue à 52 millions de dollars par an le contrat de sécurité avec Windward Wyoming, société associée à Erik Prince. Selon la FJKL, 35,5 millions de dollars auraient déjà été décaissés en 8 mois, et l'organisation dit ne pas avoir obtenu la version signée du contrat. D'après des documents rapportés par la presse américaine, le contrat de lobbying avec Drake Ventures, la firme de Roger Stone, prévoit jusqu'à 780000 dollars sur 12 mois.\n\nNous n'avons trouvé aucune réponse du bureau du Premier ministre sur ce voyage ni sur ces dépenses.\n\nQuestions aux lecteurs :\n• Qui a autorisé ce voyage, et qui l'a réellement payé ?\n• Pourquoi le contrat Windward Wyoming n'est-il toujours pas public ?\n• Qu'ont rapporté les 35,5 millions de dollars déjà versés ?\n",
    },
    sources: ["Rezo Nòdwès", "Radio Télé Métronome (via Le Placentin)", "FJKL"],
    sourceLinks: [
      { name: "Rezo Nòdwès", url: "https://rezonodwes.com/2026/11/haiti-594-millions-de-personnes-en-insecurite-alimentaire-aigue-pendant-que-fils-aime-voyage-en-jet-et-engage-des-millions/" },
    ],
  },
  {
    id: "qh-rhajac-martelly-una-haiti-2026-11-02",
    archived: true,
    tier: "need-to-know",
    topic: "politics",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-03T02:45:00-05:00",
    isBreaking: true,
    breakingHours: 12,
    author: { fr: "Par Blaise Antoine Joseph (BAJ)", ht: "Pa Blaise Antoine Joseph (BAJ)" },
    headline: {
      ht: "RHAJAC akize Martelly li ta dèyè lèt UNA-Haiti bay ONU kont operasyon salvadoryen yo",
      fr: "Selon le RHAJAC, Martelly serait derrière la lettre d'UNA-Haiti à l'ONU contre les opérations salvadoriennes",
    },
    teaser: {
      ht: "Dapre RHAJAC, ansyen prezidan an ta mobilize Harvey Dupiton, Randolf St Léger ak Jean Philippe Vixamar. Rezo a pale tou de pwomès amnisti bay chèf gang. Okenn moun yo site pa reponn.",
      fr: "Selon le RHAJAC, l'ancien président aurait mobilisé Harvey Dupiton, Randolf St Léger et Jean Philippe Vixamar. Le réseau évoque aussi de présumées promesses d'amnistie à des chefs de gangs. Aucune des personnes citées n'a répondu.",
    },
    brief: {
      ht: "Mizajou 3 novanm, 2 h 45 : Nan yon nòt 2 novanm, RHAJAC akize Michel Martelly li ta fè voye lèt UNA-Haiti 28 oktòb la bay ONU pou kanpe operasyon salvadoryen yo. Dapre RHAJAC, enfòmasyon yo soti nan sous ki pa vle di non yo. Nou pa jwenn okenn repons Martelly ak lòt moun yo site yo.",
      fr: "Mise à jour du 3 novembre, 2 h 45 : Dans une note du 2 novembre, le RHAJAC accuse Michel Martelly d'avoir fait adresser à l'ONU la lettre d'UNA-Haiti du 28 octobre contre les opérations salvadoriennes. Selon le RHAJAC, ces informations viennent de sources anonymes. Nous n'avons trouvé aucune réponse de Martelly ni des autres personnes citées.",
    },
    body: {
      ht: "Mizajou 3 novanm, 2 h 45 : Nan yon nòt denonsyasyon ki date lendi 2 novanm 2026, sekretè jeneral li, Djovany Michel, siyen, Rezo jounalis ayisyen kont koripsyon (RHAJAC) akize ansyen prezidan Michel Joseph Martelly li ta, dapre enfòmasyon rezo a, chèche fè kanpe operasyon militè salvadoryen yo kont gang yo. Plizyè medya rapòte nòt la : Rezo Nòdwès, Réalité Info, Satellite509, Décodage Info, FCN ak RL News Haïti. Djovany Michel pataje l tou sou X.\n\nDapre RHAJAC, Martelly ta mande Harvey Dupiton, Randolf St Léger ak Jean Philippe Vixamar fè voye yon lèt bay sekretè jeneral ONU, António Guterres, nan non UNA-Haiti. Lèt sa a, ki date 28 oktòb, akize fòs salvadoryen yo de bonbadman, tire elikoptè ame ak atak zam lou depi 22 oktòb nan Kwadebouke, Kanaran ak Plenn Kildesak. Lèt la egziste : prezidan Nayib Bukele pibliye yon foto l sou X 31 oktòb, ak dat 28 oktòb la ansèkle, e li rejte akizasyon yo. Dapre NAGO, se Harvey Dupiton, fondatè UNA-Haiti, ki siyen l. Malgre non li, UNA-Haiti pa fè pati ONU.\n\nDapre RHAJAC, ki site sous anonim ki pre ansyen prezidan an, se Martelly ki ta swadizan dèyè demach la. Rezo a panse demach sa yo ta ka gen lyen ak enterè politik Martelly ak kandidati li pou prezidan anba banyè DEBLOKE. Li di tou ansyen prezidan an ta pwomèt chèf gang yo amnisti pou yo sipòte l. Pwomès swadizan sa a poko konfime yon lòt fason.\n\nRHAJAC raple Jean Philippe Vixamar te nonmen direktè jeneral BNC anba Martelly, 11 novanm 2011. Li site tou sanksyon Trezò ameriken an (out 2024) ak Inyon Ewopeyen (desanm 2025) kont ansyen prezidan an. Washington ak Brussels akize l li finanse e sipòte gang ame.\n\nAnaliz Opak : si akizasyon sa yo konfime, yo t ap senpleman konfime wòl Martelly kòm youn nan papa fondatè anpil gang ann Ayiti, yon wòl sanksyon ameriken ak ewopeyen yo te deja montre dwèt.\n\nRezo a mande otorite jidisyè ayisyen ak ekspè ONU louvri yon ankèt pou verifye akizasyon yo e etabli responsablite yo.\n\nLè nou t ap pibliye, nou pa t jwenn okenn repons piblik Michel Martelly, UNA-Haiti, Harvey Dupiton, Randolf St Léger oswa Jean Philippe Vixamar. Nou toujou ap tann vèsyon pa yo. Yo prezime inosan.\n\nKesyon pou lektè yo :\n• Si sa yo akize yo konfime, kiyès ki pou reponn devan lajistis ?\n• Kiyès ki ekri lèt 28 oktòb la vre, e kiyès ki peye pou li ?\n• Èske lajistis ayisyen ap louvri yon ankèt, oswa dosye sa a ap fini tankou lòt yo ?\n• Èske yon kandida pou prezidan ki anba sanksyon ka rete an silans devan yon akizasyon konsa ?",
      fr: "Mise à jour du 3 novembre, 2 h 45 : Dans une note de dénonciation datée du lundi 2 novembre 2026 et signée par son secrétaire général, Djovany Michel, le Réseau haïtien des journalistes anti-corruption (RHAJAC) accuse l'ancien président Michel Joseph Martelly d'avoir, selon ses informations, cherché à obtenir l'arrêt des opérations militaires salvadoriennes contre les gangs. Plusieurs médias ont rapporté la note : Rezo Nòdwès, Réalité Info, Satellite509, Décodage Info, FCN et RL News Haïti. Djovany Michel l'a aussi relayée sur X.\n\nSelon le RHAJAC, Martelly aurait sollicité Harvey Dupiton, Randolf St Léger et Jean Philippe Vixamar pour faire adresser une lettre au secrétaire général de l'ONU, António Guterres, au nom d'UNA-Haiti. Cette lettre, datée du 28 octobre, accuse les forces salvadoriennes de bombardements aériens, de tirs d'hélicoptères armés et d'assauts à l'arme lourde depuis le 22 octobre à Croix-des-Bouquets, à Canaan et dans la Plaine du Cul-de-Sac. La lettre existe : le président Nayib Bukele en a publié une photo sur X le 31 octobre, date du 28 octobre entourée, et a rejeté ces accusations. Selon NAGO, Harvey Dupiton, fondateur d'UNA-Haiti, l'a signée. Malgré son nom, UNA-Haiti ne fait pas partie de l'ONU.\n\nSelon le RHAJAC, qui cite des sources anonymes proches de l'ancien président, c'est Martelly qui aurait été à l'origine de la démarche. Le réseau estime que ces démarches pourraient être liées aux intérêts politiques de Martelly et à sa candidature à la présidentielle sous la bannière de DEBLOKE. Il affirme aussi que l'ancien président aurait promis une amnistie à des chefs de gangs en échange de leur soutien. Cette promesse présumée n'a pas été confirmée de façon indépendante.\n\nLe RHAJAC rappelle que Jean Philippe Vixamar avait été nommé directeur général de la BNC sous Martelly, le 11 novembre 2011. Il cite aussi les sanctions du Trésor américain (août 2024) et de l'Union européenne (décembre 2025) contre l'ancien président. Washington et Bruxelles l'accusent d'avoir financé et soutenu des gangs armés.\n\nNotre analyse : si ces allégations se confirment, elles ne feraient que confirmer le rôle de Martelly comme l'un des pères fondateurs de nombreux gangs en Haïti, déjà pointé par les sanctions américaines et européennes.\n\nLe réseau demande aux autorités judiciaires haïtiennes et aux experts de l'ONU d'ouvrir une enquête pour vérifier ces accusations et établir les responsabilités.\n\nAu moment de publier, nous n'avons trouvé aucune réponse publique de Michel Martelly, d'UNA-Haiti, de Harvey Dupiton, de Randolf St Léger ou de Jean Philippe Vixamar. Leur version reste attendue. Ils sont présumés innocents.\n\nQuestions aux lecteurs :\n• Si les faits allégués sont confirmés, qui devra en répondre devant la justice ?\n• Qui a vraiment rédigé la lettre du 28 octobre, et qui l'a payée ?\n• La justice haïtienne ouvrira-t-elle une enquête, ou ce dossier finira-t-il comme les autres ?\n• Un candidat à la présidentielle sous sanctions peut-il garder le silence face à une accusation pareille ?",
    },
    sources: ["Rezo Nòdwès", "Réalité Info", "Satellite509", "Décodage Info", "RL News Haïti", "NAGO", "Djovany Michel (RHAJAC) sur X"],
    sourceLinks: [
      { name: "Rezo Nòdwès", url: "https://rezonodwes.com/2026/11/haiti-le-rhajac-reclame-une-enquete-sur-des-demarches-presumees-de-michel-martelly-aupres-de-lonu/" },
      { name: "Réalité Info", url: "https://realiteinfo.com/haiti-le-rhajac-accuse-michel-martelly-de-vouloir-faire-stopper-les-operations-salvadoriennes-contre-les-gangs/" },
      { name: "Satellite509", url: "https://satellite509.com/haiti-le-rhajac-denonce-les-manoeuvres-de-michel-martelly-pour-la-suspension-des-operations-salvadoriennes-contre-les-gangs/" },
      { name: "Décodage Info", url: "https://decodageinfo.com/2026/11/02/haiti-securite-le-rhajac-met-en-cause-michel-martelly-dans-une-tentative-presumee-dentraver-loffensive-salvadorienne/" },
      { name: "RL News Haïti", url: "https://rlnewshaiti.com/haiti-securite-un-reseau-de-journalistes-accuse-michel-martelly-dagir-contre-les-operations-salvadoriennes/" },
      { name: "NAGO", url: "https://nago.tv/news/bukele-rejette-accusations-bombardements-civils-haiti-una-haiti" },
      { name: "Djovany Michel (RHAJAC) sur X", url: "https://x.com/DjovanyMICHEL01/status/2117398441513066942" },
    ],
  },
  {
    id: "ntk-jacmel-nettoyage-vehicules-2026-11-02",
    archived: true,
    tier: "need-to-know",
    topic: "society",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T20:30:00-05:00",
    headline: {
      ht: "Jakmèl : meri a retire machin abandone ak machin kraze nan vil la",
      fr: "Jacmel : la mairie enlève les véhicules abandonnés et hors d'usage",
    },
    teaser: {
      ht: "Dapre iciHaïti, komisyon minisipal Jakmèl la fè yon gwo kanpay netwayaj, ak retire machin ki abandone ak machin ki pa mache ankò.",
      fr: "Selon iciHaïti, la commission municipale de Jacmel a mené une vaste campagne de nettoyage, avec l'enlèvement de véhicules abandonnés et hors d'usage.",
    },
    brief: {
      ht: "Dapre iciHaïti, repran pa Hayti News, komisyon minisipal Jakmèl la fè yon gwo kanpay netwayaj ki gen ladan l retire machin abandone ak machin kraze. Dapre NAGO, sa te fèt 23 rive 25 oktòb.",
      fr: "Selon iciHaïti, repris par Hayti News, la commission municipale de Jacmel a mené une vaste campagne de nettoyage incluant l'enlèvement de véhicules abandonnés et hors d'usage. Selon NAGO, elle s'est déroulée du 23 au 25 octobre.",
    },
    body: {
      ht: "Dapre iciHaïti, nan yon atik Hayti News repran, komisyon minisipal Jakmèl la mennen yon gwo kanpay netwayaj, ki gen ladan l retire machin ki abandone ak machin ki pa mache ankò. Se youn nan gwo priyorite komisyon an, dapre atik la.\n\nDapre NAGO, kanpay la fèt 23 rive 25 oktòb 2026, sou siveyans majistra adjwen Stephanie Edward Lafontant ak Julie Leclerc. Li touche plizyè zòn, tankou lopital Saint-Michel ak Lakou Nouyòk. NAGO di sa antre nan efò pou pwoteje sante piblik, e meri a renove tou labatwa vil la, ki pa t fonksyone depi plis pase 9 an.\n\nKesyon pou lektè yo : • Ki kote machin yo retire yo ale, e èske mèt yo ap peye amann ? • Èske netwayaj la ap kontinye apre kanpay la ? • Moun Jakmèl, ki lòt kote nan vil la ki bezwen menm travay sa a ?",
      fr: "Selon iciHaïti, dans un article repris par Hayti News, la commission municipale de Jacmel a mené une vaste campagne de nettoyage, incluant l'enlèvement de véhicules abandonnés et hors d'usage. C'est l'une des priorités majeures de la commission, selon l'article.\n\nSelon NAGO, la campagne s'est déroulée du 23 au 25 octobre 2026, sous la supervision des mairesses adjointes Stephanie Edward Lafontant et Julie Leclerc. Elle a touché plusieurs zones, dont l'hôpital Saint-Michel et Lakou Nouyòk. NAGO la présente comme un effort de santé publique, et indique que la mairie a aussi rénové l'abattoir de la ville, hors service depuis plus de 9 ans.\n\nQuestions aux lecteurs : • Où vont les véhicules enlevés, et leurs propriétaires paieront-ils une amende ? • Le nettoyage continuera-t-il après la campagne ? • Habitants de Jacmel, quels autres quartiers ont besoin du même travail ?",
    },
    sources: ["iciHaïti (via Hayti News)", "NAGO"],
    sourceLinks: [
      { name: "iciHaïti (via Hayti News)", url: "https://www.haytinews.com/icihaiti-jacmel-vaste-campagne-de-nettoyage/" },
      { name: "NAGO", url: "https://nago.tv/fr/news/jacmel-launches-extensive-cleanup-campaign" },
    ],
  },

  {
    id: "ntk-offensive-plaine-cul-de-sac-2026-11-02",
    archived: true,
    isFollowUp: true,
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-04T07:15:00-05:00",
    headline: {
      ht: "Plenn Kildesak : omwen 12 moun mouri nan Santo ak Kwadèmisyon, dapre medya ayisyen",
      fr: "Plaine du Cul-de-Sac : au moins 12 morts à Santo et Croix-des-Missions, selon des médias haïtiens",
    },
    teaser: {
      ht: "Dapre RTC, ki site medya ayisyen, omwen 12 moun mouri nan batay ant gang ak sòlda salvadoryen yo. Okenn bilan ofisyèl poko pibliye.",
      fr: "Selon RTC, qui cite des médias haïtiens, au moins 12 personnes ont été tuées dans les affrontements entre gangs et troupes salvadoriennes. Aucun bilan officiel n'a été publié.",
    },
    brief: {
      ht: "Mizajou 4 novanm, 7 h : Dapre Radio Télévision Caraïbes (RTC), medya ayisyen rapòte omwen 12 moun mouri nan batay nan Santo ak Kwadèmisyon. Mizajou 3 novanm, 5 h 30 : Dapre AyiboPost ak L'Observatoire, fanmi ap kouri kite plizyè katye nan Plenn Kildesak pandan gang yo ap bare wout e yo ap fòse jèn gason antre nan gang. PNH di l lanse lendi 2 novanm, ak sipò GSF, yon gwo operasyon nan Plenn Kildesak. Dapre EFE, sòlda salvadoryen yo avanse atè pou premye fwa kont Chen Mechan ak 400 Mawozo. Yon dizèn bandi ta mouri, men chif sa a pa ofisyèl.",
      fr: "Mise à jour du 4 novembre, 7 h : Selon Radio Télévision Caraïbes (RTC), des médias haïtiens font état d'au moins 12 personnes tuées dans des affrontements à Santo et Croix-des-Missions. Mise à jour du 3 novembre, 5 h 30 : Selon AyiboPost et L'Observatoire, des familles fuient plusieurs quartiers de la Plaine du Cul-de-Sac pendant que les gangs barricadent les routes et recrutent de force des jeunes hommes. La PNH dit avoir lancé ce lundi 2 novembre, avec l'appui de la GSF, une vaste opération dans la Plaine du Cul-de-Sac. Selon EFE, les soldats salvadoriens avancent au sol pour la première fois contre Chen Mechan et 400 Mawozo. Une dizaine de bandits auraient été tués, chiffre non officiel.",
    },
    body: {
      ht: "Mizajou 4 novanm, 7 h : Dapre Radio Télévision Caraïbes (RTC), sòlda salvadoryen yo lanse lendi premye gwo operasyon yo nan Plenn Kildesak, kont gang Chen Mechan ak 400 Mawozo. RTC di medya ayisyen rapòte omwen 12 moun mouri nan batay ant gang yo ak sòlda salvadoryen yo nan Santo ak Kwadèmisyon. Sous la pa di kiyès moun sa yo ye, ni si gen sivil ladan yo. Ni PNH ni Salvadò poko bay bilan ofisyèl.\n\nDapre RTC, PNH, ak sipò GSF, deplwaye blende ak inite a pye nan Kafou Shada, pon Kwadèmisyon ak Santo 17.\n\nKesyon pou lektè yo :\n• Konbyen nan 12 moun sa yo ki te sivil ?\n• Kilè PNH oswa Salvadò ap pibliye yon bilan ofisyèl ?\nMizajou 3 novanm, 5 h 30 : Dapre jounal L'Observatoire, fanmi ap kite kay yo prese prese nan Sarthe, Kanaran, Kwadèmisyon ak Bon-Repos, paske yo pè pou yo pa pran nan mitan gang yo ak yon ofansiv salvadoryen. Dapre plizyè temwayaj jounal la ranmase, gang yo ta di moun k ap kite yo y ap gen pou yo peye pou yo retounen.\n\nAyiboPost, ki pale ak yon demi douzèn moun, di gang yo ap bati barikad nan Lilavwa, Lizon, Maren, Lathan, Kafou Shada, Santo ak Damyen. Yo ta fòse jèn gason antre nan gang e yo ta fòse moun ede yo bati barikad ak patisipe nan manifestasyon kont prezans etranje. De moun Santo di gang yo menase moun ki eseye kite zòn nan.\n\nAyiboPost di tou apèn 200 nan plis pase 2000 sòlda salvadoryen ki rive yo ap anba kòmandman GSF. Yon sous ki pre Chen Mechan (Claudy Célestin) di nan gwoup la yo konsidere swadizan asasina Salvadoryen yo kòm yon \"erè\". Se yon sèl sous ki di sa, e nou pa ka verifye l.\n\nKesyon pou lektè yo :\n• Kiyès ki pral pwoteje moun ki kouri yo, e ki kote yo pral dòmi ?\n• Si gang yo fòse jèn yo pran zam, kiyès k ap fè diferans ant yon jèn yo fòse ak yon bandi ?\nNan yon kominike PouSiOuPaTKonnen repran, Polis nasyonal d Ayiti (PNH) di li lanse lendi 2 novanm 2026, « ak sipò GSF », yon gwo operasyon nan plizyè zòn nan Plenn Kildesak. Dapre PNH, objektif la se kraze peyaj klandesten yo, bloke tantativ kidnapin ak tout abi bandi yo fè popilasyon an sibi. Operasyon an t ap fèt nan kafou Chada, pon Kwadèmisyon ak Santo 17, e wo kòmandman PNH mobilize plizyè blende. Kominike a pa pale de sòlda salvadoryen ki disparèt yo.\n\nDapre ajans EFE, nan yon depèch Infobae pibliye, se premye gwo operasyon sòlda Salvadò yo depi yo kòmanse rive 22 oktòb. Yo avanse nan yon dizèn machin blende pou demantle gang Chen Mechan ak 400 Mawozo, gang Lanmò Sanjou dirije. Gang sa yo akize nan disparisyon 4 sòlda salvadoryen apre yon anbiskad nan Kwadebouke. Toujou dapre EFE, bandi yo leve barikad pou bloke antre sòlda yo.\n\nDapre EFE, ki site laprès ayisyen, omwen yon dizèn manm gang mouri nan batay nan Santo ak Kwadèmisyon. PouSiOuPaTKonnen pale tou de dron kamikaz ak yon dizèn bandi mouri, men li presize rapò sa yo poko ofisyèl. PNH pa bay bilan. Opak News pa ka verifye chif sa yo.\n\nEFE rapòte tou, dapre kèk medya, koalisyon Viv Ansanm ta fòse abitan nan zòn Laplèn desann nan lari anba menas lanmò pou pwoteste kont operasyon an. Enfòmasyon sa a pa verifye.\n\nKesyon pou lektè yo : • Ki pwoteksyon sivil Plenn Kildesak yo genyen pandan operasyon an ? • Kilè PNH ap bay yon bilan ofisyèl ? • Èske operasyon sa a ap mennen nan 4 sòlda salvadoryen yo ?",
      fr: "Mise à jour du 4 novembre, 7 h : Selon Radio Télévision Caraïbes (RTC), les troupes salvadoriennes ont lancé lundi leur première grande opération dans la Plaine du Cul-de-Sac, contre les gangs Chen Mechan et 400 Mawozo. RTC indique que des médias haïtiens font état d'au moins 12 personnes tuées lors d'affrontements entre les gangs et les troupes salvadoriennes à Santo et Croix-des-Missions. La source ne dit pas qui sont ces personnes ni s'il y a des civils parmi elles. Ni la PNH ni le Salvador n'ont publié de bilan officiel.\n\nSelon RTC, la PNH, appuyée par la GSF, a déployé des blindés et des unités au sol à Carrefour Shada, au pont de Croix-des-Missions et à Santo 17.\n\nQuestions aux lecteurs :\n• Combien de ces 12 morts étaient des civils ?\n• Quand la PNH ou le Salvador publieront-ils un bilan officiel ?\nMise à jour du 3 novembre, 5 h 30 : Selon le journal L'Observatoire, des familles quittent leurs maisons à la hâte à Sarthe, Canaan, Croix-des-Missions et Bon-Repos, craignant de se retrouver prises entre les gangs et une offensive salvadorienne. D'après plusieurs témoignages recueillis par le journal, les gangs feraient savoir aux partants que leur retour pourrait dépendre du paiement d'une somme d'argent.\n\nAyiboPost, qui cite une demi-douzaine de personnes, rapporte des barricades à Lillavois, Lizon, Marin, Lathan, Carrefour Shada, Santo et Damien. Les gangs recruteraient de force des jeunes hommes, obligeraient des habitants à construire les barricades et à participer à des manifestations contre la présence étrangère. Deux habitants de Santo disent que des hommes armés menacent ceux qui tentent de partir.\n\nAyiboPost affirme aussi qu'à peine 200 des plus de 2000 soldats salvadoriens arrivés seront placés sous le commandement de la GSF. Une source proche de Chen Mechan (Claudy Célestin) affirme qu'au sein du groupe, l'assassinat présumé des Salvadoriens serait considéré comme une « erreur ». Cette affirmation vient d'une seule source et nous ne pouvons pas la vérifier.\n\nQuestions aux lecteurs :\n• Qui va protéger les familles qui fuient, et où vont-elles dormir ?\n• Si les gangs forcent des jeunes à prendre les armes, qui fera la différence entre un jeune contraint et un bandit ?\nDans un communiqué relayé par PouSiOuPaTKonnen, la Police nationale d'Haïti (PNH) dit avoir lancé ce lundi 2 novembre 2026, « avec le soutien de la GSF », une importante opération dans plusieurs zones de la Plaine du Cul-de-Sac. Selon la PNH, elle vise à supprimer les péages clandestins, à endiguer les tentatives d'enlèvement et les exactions subies par la population. L'opération se déroulait au carrefour de Chada, au pont de Croix-des-Missions et à Santo 17, et le haut commandement a mobilisé plusieurs blindés. Le communiqué ne mentionne pas les soldats salvadoriens disparus.\n\nSelon l'agence EFE, dans une dépêche publiée par Infobae, il s'agit de la première grande opération des troupes salvadoriennes, arrivées à partir du 22 octobre. Elles avancent à bord d'une dizaine de blindés pour démanteler les gangs Chen Mechan et 400 Mawozo, ce dernier dirigé par Lanmò Sanjou. Ces gangs sont désignés comme responsables de la disparition de 4 militaires salvadoriens après une embuscade à Croix-des-Bouquets. Toujours selon EFE, les bandits ont érigé des barricades pour bloquer l'entrée des soldats.\n\nSelon EFE, qui cite la presse haïtienne, au moins une dizaine de membres de gangs ont été tués lors des affrontements à Santo et à Croix-des-Missions. PouSiOuPaTKonnen évoque aussi des drones kamikazes et une dizaine de bandits tués, en précisant que ces rapports ne sont pas officiels. La PNH n'a donné aucun bilan. Opak News ne peut pas vérifier ces chiffres.\n\nEFE rapporte aussi que, selon certains médias, la coalition Viv Ansanm aurait forcé des habitants de La Plaine à manifester sous menace de mort contre l'opération. Cette information n'est pas vérifiée.\n\nQuestions aux lecteurs : • Quelle protection pour les civils de la Plaine du Cul-de-Sac pendant l'opération ? • Quand la PNH publiera-t-elle un bilan officiel ? • Cette offensive mènera-t-elle aux 4 militaires salvadoriens ?",
    },
    sources: ["Radio Télévision Caraïbes", "AyiboPost", "L'Observatoire", "EFE (via Infobae)", "PouSiOuPaTKonnen"],
    sourceLinks: [
      { name: "Radio Télévision Caraïbes", url: "https://www.radiotelevisioncaraibes.com/des-troupes-salvadoriennes-lancent-une-grande-operation-contre-les-gangs-en-haiti/" },
      { name: "AyiboPost", url: "https://backoffice.ayibopost.com/forced-recruitment-demonstrations-barricades-gangs-are-preparing/" },
      { name: "L'Observatoire", url: "https://www.lobservatoire.info/plaine-du-cul-de-sac-la-peur-change-de-camp-les-habitants-fuient-face-a-lescalade-des-tensions/" },
      { name: "EFE (via Infobae)", url: "https://www.infobae.com/america/agencias/2026/11/02/soldados-salvadorenos-lanzan-su-primera-gran-operacion-contra-las-bandas-en-haiti/" },
      { name: "PouSiOuPaTKonnen (communiqué PNH)", url: "https://www.pousioupatkonnen.com/voici-ce-quen-dit-la-pnh-au-sujet-de-loperation-en-cours-dans-la-plaine-du-cul-de-sac/" },
      { name: "PouSiOuPaTKonnen", url: "https://www.pousioupatkonnen.com/affrontements-usage-de-drones-kamikazes-plusieurs-bandits-tues-dans-le-fief-de-chen-mechan/" },
    ],
  },
  {
    id: "qh-bainet-dinepa-eau-potable-2026-11-02",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T18:30:00-05:00",
    headline: {
      ht: "Bennèt : DINEPA lanse travay pou repare rezo dlo potab la, pou plis pase 10000 moun",
      fr: "Bainet : la DINEPA lance la réhabilitation du réseau d'eau potable pour plus de 10000 habitants",
    },
    teaser: {
      ht: "Bank mondyal finanse travay yo, ki dwe dire 15 mwa, dapre Juno7. UNOPS ap sipèvize.",
      fr: "Financés par la Banque mondiale, les travaux doivent durer 15 mois, selon Juno7. L'UNOPS assure la supervision.",
    },
    brief: {
      ht: "Dapre Juno7, DINEPA lanse mèkredi 28 oktòb travay reyabilitasyon sistèm dlo potab Bennèt, nan Sidès. Bank mondyal finanse l, pou plis pase 10000 moun, sou 15 mwa.",
      fr: "Selon Juno7, la DINEPA a lancé le mercredi 28 octobre la réhabilitation du système d'eau potable de Bainet, dans le Sud-Est. Financé par la Banque mondiale, le projet vise plus de 10000 habitants, sur 15 mois.",
    },
    body: {
      ht: "Dapre Juno7, Direksyon nasyonal dlo potab ak sanitasyon (DINEPA) lanse mèkredi 28 oktòb travay pou repare sistèm dlo potab komin Bennèt, nan depatman Sidès. Bank mondyal finanse pwojè a, ki dwe amelyore aksè a dlo potab pou plis pase 10000 moun.\n\nDirektè jeneral DINEPA, enjenyè Théophil Ostinvil, te dirije seremoni an, ak direktè OREPA-Sid, Philippe Eliscar. Vis-delege Pierre Jean Rémy ak prezidan komisyon minisipal Bennèt, Victor Dominique Clive Mc Calla, te la tou, dapre Juno7.\n\nSe gwoupman konpayi BECAG, BECOCI ak ACoR ki ap fè travay yo, sou 15 mwa. Biwo Nasyonzini pou sèvis sipò pwojè yo (UNOPS) ap sipèvize. Juno7 pa bay montan finansman an.\n\nKesyon pou lektè yo : • Konbyen lajan Bank mondyal mete nan pwojè a ? • Kiyès k ap swiv si travay yo fini nan 15 mwa ? • Moun Bennèt, konbyen tan nou pase san dlo nan tiyo ?",
      fr: "Selon Juno7, la Direction nationale de l'eau potable et de l'assainissement (DINEPA) a lancé le mercredi 28 octobre les travaux de réhabilitation du système d'adduction d'eau potable de Bainet, dans le Sud-Est. Financé par la Banque mondiale, le projet doit améliorer la desserte de plus de 10000 habitants.\n\nLa cérémonie était dirigée par le directeur général de la DINEPA, l'ingénieur Théophil Ostinvil, en présence du directeur de l'OREPA-Sud, Philippe Eliscar. Le vice-délégué Pierre Jean Rémy et le président de la commission municipale de Bainet, Victor Dominique Clive Mc Calla, y ont aussi participé, selon Juno7.\n\nLes travaux sont confiés au groupement BECAG, BECOCI et ACoR, pour 15 mois. Le Bureau des Nations unies pour les services d'appui aux projets (UNOPS) assure la supervision et la maîtrise d'ouvrage. Juno7 ne donne pas le montant du financement.\n\nQuestions aux lecteurs : • Combien la Banque mondiale investit-elle dans ce projet ? • Qui vérifiera que les travaux finissent dans les 15 mois ? • Habitants de Bainet, depuis combien de temps l'eau ne coule-t-elle plus au robinet ?",
    },
    sources: ["Juno7"],
    sourceLinks: [
      { name: "Juno7", url: "https://www.juno7.ht/dinepa-rehabilitation-systeme-eau-potable-bainet/" },
    ],
  },
  {
    id: "ntk-abinader-gangs-frontiere-2026-11-02",
    archived: true,
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T18:30:00-05:00",
    headline: {
      ht: "Abinader avèti gang ayisyen yo : « s'yo pwoche fwontyè a, y ap pase yon move moman »",
      fr: "Abinader met en garde les gangs haïtiens : « s'ils s'approchent, ils passeront un très mauvais moment »",
    },
    teaser: {
      ht: "Prezidan dominiken an di li ranfòse fwontyè a, sitou nan Sid, ak plis sòlda, blende ak dron. Li di l pale ak Bukele pou ede operasyon kont gang yo.",
      fr: "Le président dominicain dit avoir renforcé la frontière, surtout au Sud, avec plus de soldats, de blindés et de drones. Il dit avoir parlé à Bukele pour soutenir les opérations contre les gangs.",
    },
    brief: {
      ht: "Dapre HaitiLibre, prezidan Luis Abinader di fwontyè a ranfòse, sitou nan Sid, e gang yo ap trete kòm teworis si yo pwoche. Li di li pale ak Nayib Bukele pou bay sipò lojistik ak ransèyman.",
      fr: "Selon HaitiLibre, le président Luis Abinader affirme que la frontière a été renforcée, surtout au Sud, et que les gangs seront traités en terroristes s'ils s'approchent. Il dit avoir parlé à Nayib Bukele d'un soutien logistique et de renseignement.",
    },
    body: {
      ht: "Dapre HaitiLibre, ki pibliye deklarasyon yo lendi 2 novanm, prezidan dominiken Luis Abinader di devan laprès : « Nou ranfòse fwontyè a anpil, sitou nan Sid, kote gang yo ap opere. » Li di ranfòsman an gen ladan l plis moun, machin blende ak ekipman.\n\nAbinader raple Repiblik Dominikèn klase gang ayisyen yo kòm òganizasyon teworis. « N ap trete yo pou sa yo ye, teworis, si yo pwoche fwontyè a », li di, dapre HaitiLibre. Li ajoute : « Teworis sa yo ka sèten, si yo pwoche, y ap pase yon move moman, yon trè trè move moman. » Li pale tou de avyon k ap vole sou fwontyè a, machin blende toupre, ak dron.\n\nToujou dapre HaitiLibre, Abinader di li pale ak prezidan salvadoryen Nayib Bukele pou kowòdone sipò lojistik ak ransèyman pou operasyon kont gang yo ann Ayiti, e peyi l an kontak ak Fòs Represyon Gang (FRG). Li pa bay detay sou kisa kowoperasyon sa a ap gen ladan l, e li pa anonse sòlda dominiken ap patisipe dirèkteman nan operasyon ann Ayiti.\n\nAbinader di tou, lè l t ap pale a, gang yo pa t pwoche fwontyè a, e li pa t wè okenn siy plis Ayisyen ap eseye travèse.\n\nKesyon pou lektè yo : • Ki sa « sipò ransèyman » dominiken an vle di konkrètman pou Ayiti ? • Èske Leta ayisyen te konsilte sou kowoperasyon ant Sendomeng ak Salvadò ? • Kiyès ki pwoteje sivil ayisyen ki rete toupre fwontyè a ?",
      fr: "Selon HaitiLibre, qui a publié ses déclarations le lundi 2 novembre, le président dominicain Luis Abinader a déclaré devant la presse : « Nous avons renforcé considérablement la frontière, en particulier au Sud, là où opèrent des gangs. » Il précise que ce renforcement porte sur les effectifs, les véhicules blindés et les équipements.\n\nAbinader a rappelé que la République dominicaine a classé les gangs haïtiens comme organisations terroristes. « Nous les traiterons pour ce qu'ils sont, des terroristes, s'ils s'approchent de la frontière », a-t-il dit, selon HaitiLibre. Il a ajouté : « Ces terroristes peuvent être certains que, s'ils s'approchent, ils passeront un très, très mauvais moment. » Il évoque aussi des avions qui survolent la frontière, des blindés à proximité et des drones.\n\nToujours selon HaitiLibre, Abinader dit s'être entretenu avec le président salvadorien Nayib Bukele pour coordonner un soutien logistique et de renseignement aux opérations contre les gangs en Haïti, et son pays est en contact avec la Force de répression des gangs (FRG). Il n'a donné aucun détail sur la portée de cette coopération et n'a pas annoncé de participation directe de troupes dominicaines en Haïti.\n\nAbinader a également affirmé qu'au moment de ses déclarations, les gangs ne s'étaient pas approchés de la frontière, et qu'il ne voyait aucun signe d'une hausse des tentatives de passage d'Haïtiens.\n\nQuestions aux lecteurs : • Que signifie concrètement ce « soutien en renseignement » dominicain pour Haïti ? • L'État haïtien a-t-il été consulté sur cette coopération entre Saint-Domingue et San Salvador ? • Qui protège les civils haïtiens qui vivent près de la frontière ?",
    },
    sources: ["HaitiLibre"],
    sourceLinks: [
      { name: "HaitiLibre", url: "https://www.haitilibre.com/article-48804-haiti-rep-dominicaine-luis-abinader-met-en-garde-les-groupes-terroristes-en-haiti.html" },
    ],
  },
  {
    id: "qh-ava-lee-taekwondo-or-floride-2026-11-02",
    archived: true,
    tier: "quick-hit",
    topic: "sports",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T12:30:00-05:00",
    headline: {
      ht: "Taekwondo : Ava Soon Lee pran meday lò pou Ayiti nan Florid",
      fr: "Taekwondo : Ava Soon Lee en or pour Haïti en Floride",
    },
    teaser: {
      ht: "Ayisyèn nan bat Ameriken Naysha Haylett nan final Pan Club Taekwondo Championship, dapre HaitiLibre ak Le National.",
      fr: "L'Haïtienne a battu l'Américaine Naysha Haylett en finale du Pan Club Taekwondo Championship, selon HaitiLibre et Le National.",
    },
    brief: {
      ht: "Ava Soon Lee, ki reprezante Ayiti, genyen meday lò nan kategori li nan Pan Club Taekwondo Championship nan Florid, kont Ameriken Naysha Haylett, dapre HaitiLibre ak Le National.",
      fr: "Ava Soon Lee, qui défend les couleurs d'Haïti, a remporté l'or dans sa catégorie au Pan Club Taekwondo Championship en Floride, face à l'Américaine Naysha Haylett, selon HaitiLibre et Le National.",
    },
    body: {
      ht: "Ava Soon Lee, yon atlèt taekwondo ameriken ki gen orijin koreyen e ki pran nasyonalite ayisyen, genyen meday lò nan Florid, Etazini, nan Pan Club Taekwondo Championship, dapre HaitiLibre. Li bat Ameriken Naysha Haylett nan final la, dapre HaitiLibre ak Le National. Dapre Le National, se Fénel Ostin, prezidan Federasyon ayisyen taekwondo a, ki konfime non advèsè a apre li fin gade fèy ofisyèl match la. Le National di viktwa sa a mete l premye nan klasman panameriken nan kategori l.\n\nDapre sit World Taekwondo, Ava Soon Lee te deja genyen meday lò nan kategori -73 kg fanm nan WT President's Cup Pan Am 2026.\n\nKesyon pou lektè yo : Ki sa federasyon an ap fè pou devlope talan lokal bò kote atlèt natiralize yo ? Èske Ava Soon Lee ap gen sipò pou l vize gwo konpetisyon mondyal yo ?",
      fr: "Ava Soon Lee, taekwondoïste américaine d'origine coréenne naturalisée haïtienne, a remporté une médaille d'or en Floride, aux États-Unis, au Pan Club Taekwondo Championship, selon HaitiLibre. Elle a battu l'Américaine Naysha Haylett en finale, selon HaitiLibre et Le National. D'après Le National, c'est Fénel Ostin, président de la Fédération haïtienne de taekwondo, qui a confirmé l'identité de son adversaire après consultation de la feuille officielle du match. Le National ajoute que cette victoire la place en tête du classement panaméricain dans sa catégorie.\n\nSelon le site de World Taekwondo, Ava Soon Lee avait déjà remporté l'or chez les -73 kg dames au WT President's Cup Pan Am 2026.\n\nQuestions aux lecteurs : Que fait la fédération pour développer les talents locaux à côté des athlètes naturalisés ? Ava Soon Lee aura-t-elle le soutien nécessaire pour viser les grandes compétitions mondiales ?",
    },
    sources: ["HaitiLibre", "Le National", "World Taekwondo"],
    sourceLinks: [
      { name: "HaitiLibre (Zapping du 2 novembre)", url: "https://www.haitilibre.com/en/news-48806-zapping-haiti-of-november-2nd-2026.html" },
      { name: "Le National", url: "https://www.lenational.org/article/sport/3129/ava-lee-en-or-en-floride-et-numero-un-au-classement-panamericain" },
      { name: "World Taekwondo (profil)", url: "https://results.worldtaekwondo.org/profile/976f4edf-8d81-4838-9f23-a555c68a753f" },
    ],
  },
  {
    id: "ntk-brh-transferts-tps-choc-2026-11-02",
    archived: true,
    tier: "need-to-know",
    topic: "commerce",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T12:30:00-05:00",
    headline: {
      ht: "TPS : yon etid BRH avèti yon bès nan transfè dyaspora a ta frape goud la ak finans piblik",
      fr: "TPS : une étude de la BRH prévient qu'une baisse des transferts frapperait la gourde et les finances publiques",
    },
    teaser: {
      ht: "Twa chèchè BRH analize 21 an done : yon bès 30 % nan transfè yo ta fè rezèv yo desann 9,4 % an mwayèn sou 2 an. Men otè yo di efè TPS la menm pa mezire dirèkteman.",
      fr: "Trois chercheurs de la BRH ont analysé 21 ans de données : une baisse de 30 % des transferts réduirait les réserves de 9,4 % en moyenne sur 2 ans. Mais les auteurs précisent que l'effet du TPS lui-même n'est pas mesuré directement.",
    },
    brief: {
      ht: "Yon dokiman travay BRH (WP/2026/4) Kensley Blaise, Jean Marie Cayemitte ak Jean Gardy Victor ekri, jwenn yon bès nan transfè dyaspora a ta fè goud la pèdi valè, rezèv yo desann e defisi piblik la grandi, sitou nan premye ane a.",
      fr: "Un document de travail de la BRH (WP/2026/4), signé Kensley Blaise, Jean Marie Cayemitte et Jean Gardy Victor, conclut qu'une baisse des transferts de la diaspora déprécierait la gourde, réduirait les réserves et creuserait le déficit public, surtout la première année.",
    },
    body: {
      ht: "Yon etid Depatman rechèch ekonomik ak finansye (DREF) Bank Repiblik d Ayiti (BRH), ki rele « Choc des transferts et vulnérabilité macrofinancière en Haïti : les risques liés au TPS », egzamine sa ki ta rive ekonomi an si transfè dyaspora a ta bese, nan yon moman Etazini ap sere boulon sou estati pwoteksyon tanporè (TPS). Otè yo, Kensley Blaise, Jean Marie Cayemitte ak Jean Gardy Victor, sèvi ak done chak mwa sou 21 an, soti oktòb 2004 rive septanm 2025, dapre dokiman an ak HaitiLibre. Dapre etid la, transfè yo te reprezante anviwon 17 % PIB an 2024.\n\nRezilta prensipal la : yon bès nan transfè yo mete presyon solid e dirab sou goud la pou l pèdi valè, e se kanal ki pi byen idantifye nan premye ane a. Defisi piblik la vin pi mal tou, e efè sa a dire pandan tout de an etid la gade. Rezèv entènasyonal nèt yo gen tandans desann, men se sèlman nan kèk mwa rezilta a solid estatistikman. Pou enflasyon, chèchè yo wè yon presyon vè anwo, men san efè estatistikman siyifikatif.\n\nNan twa senaryo, dokiman an kalkile efè mwayèn sou 24 mwa. Dapre rezime etid la, yon bès 10 % ta bay yon depresyasyon goud anviwon 0,7 %, yon bès 3 % nan rezèv yo ak 71 milyon goud anplis nan defisi a. Ak 30 %, chif yo monte a 2,5 %, 9,4 % ak 241 milyon goud. Atansyon : yon tablo nan menm dokiman an bay chif ki pi ba (pa egzanp 6,03 % pou rezèv yo nan senaryo 30 % la). Opak News pa t ka eksplike diferans lan.\n\nOtè yo fè yon prekosyon enpòtan : yo pa mezire efè desizyon migratwa ameriken yo dirèkteman. Dapre yo, done sou TPS yo twò fèb pou sèvi kòm zouti prensipal, kidonk TPS la se yon « sous risk » ki ka lakòz yon bès, pa yon chòk yo estime. Yo rekòmande BRH ak gouvènman an reyaji vit, sitou nan premye twa mwa apre yon chòk, ak yon defans rezèv mezire, yon kominikasyon klè ak finansman ekstèn ki prepare davans. Dokiman an presize opinyon yo se pa nesesèman pa konsèy administrasyon Bank lan.\n\nKesyon pou lektè yo : Èske BRH gen yon plan konkrè si transfè yo kòmanse bese ? Ki sa gouvènman an ap fè pou fanmi ki viv sou lajan dyaspora a voye ? Èske dyaspora a deja santi presyon TPS la nan sa l ka voye chak mwa ?",
      fr: "Une étude du Département de recherche en économie et finance (DREF) de la Banque de la République d'Haïti (BRH), intitulée « Choc des transferts et vulnérabilité macrofinancière en Haïti : les risques liés au TPS », examine ce qui arriverait à l'économie si les transferts de la diaspora baissaient, alors que Washington durcit les conditions du statut de protection temporaire (TPS). Ses auteurs, Kensley Blaise, Jean Marie Cayemitte et Jean Gardy Victor, s'appuient sur des données mensuelles couvrant 21 ans, d'octobre 2004 à septembre 2025, selon le document et HaitiLibre. Selon l'étude, les transferts représentaient environ 17 % du PIB en 2024.\n\nRésultat principal : une baisse des transferts exerce des pressions significatives et persistantes à la dépréciation de la gourde, le taux de change étant le canal le mieux identifié la première année. Le déficit public se détériore aussi, et cet effet persiste sur tout l'horizon de deux ans étudié. Les réserves internationales nettes tendent à baisser, mais le résultat n'est statistiquement significatif qu'à certains horizons. Pour l'inflation, les chercheurs observent des pressions haussières, sans effet statistiquement significatif.\n\nLe document chiffre trois scénarios, en effet moyen sur 24 mois. Selon le résumé de l'étude, une baisse de 10 % entraînerait une dépréciation de la gourde d'environ 0,7 %, une baisse des réserves de 3 % et 71 millions de gourdes de déficit supplémentaire. À 30 %, ces chiffres passent à 2,5 %, 9,4 % et 241 millions de gourdes. Attention : un tableau du même document donne des chiffres plus bas (par exemple 6,03 % pour les réserves dans le scénario à 30 %). Opak News n'a pas pu expliquer cet écart.\n\nLes auteurs posent une réserve importante : ils ne mesurent pas directement l'effet des décisions migratoires américaines. Selon eux, les données liées au TPS sont trop faibles pour servir d'instrument principal ; le TPS doit donc être vu comme une « source potentielle de risque » de baisse des transferts, et non comme un choc estimé. Ils recommandent à la BRH et au gouvernement d'agir tôt, surtout dans le premier trimestre suivant un choc, avec une défense mesurée des réserves, une communication claire et un financement externe préarrangé. Le document précise que les opinions exprimées ne sont pas nécessairement celles du conseil d'administration de la Banque.\n\nQuestions aux lecteurs : La BRH a-t-elle un plan concret si les transferts commencent à baisser ? Que prévoit le gouvernement pour les familles qui vivent de l'argent de la diaspora ? La diaspora ressent-elle déjà la pression du TPS sur ce qu'elle peut envoyer chaque mois ?",
    },
    sources: ["BRH (DREF)", "HaitiLibre"],
    sourceLinks: [
      { name: "BRH, Working Paper WP/2026/4 (PDF)", url: "https://www.haitilibre.com/docs/Working-Paper-4.pdf" },
      { name: "HaitiLibre (Zapping du 2 novembre)", url: "https://www.haitilibre.com/en/news-48806-zapping-haiti-of-november-2nd-2026.html" },
    ],
  },
  {
    id: "ntk-gonaives-saint-charles-feries-2026-11-02",
    archived: true,
    tier: "need-to-know",
    topic: "society",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T12:30:00-05:00",
    headline: {
      ht: "Gonayiv : 3, 4 ak 5 novanm chome pou fèt Sen Chal",
      fr: "Gonaïves : les 3, 4 et 5 novembre chômés pour la Saint-Charles",
    },
    teaser: {
      ht: "Biwo leta, lekòl, bank ak komès ap fèmen twa jou, dapre NAGO. Lopital, lapolis, transpò ak ponp gazolin ap rete ouvè.",
      fr: "Bureaux publics, écoles, banques et commerces fermés trois jours, selon NAGO. Hôpitaux, police, transports et stations d'essence restent ouverts.",
    },
    brief: {
      ht: "Dapre NAGO, ki site Monnelys TV Network ak Rezo Nòdwès, konsèy minisipal Gonayiv deklare 3, 4 ak 5 novanm « chome e peye » pou fèt patronal Sen Chal Bòwome. Gwo mès la ap fèt mèkredi 4 novanm a 9 h nan katedral la.",
      fr: "Selon NAGO, citant Monnelys TV Network et Rezo Nòdwès, le conseil municipal des Gonaïves a déclaré les 3, 4 et 5 novembre « chômés et payés » pour la fête patronale de saint Charles Borromée. La grand-messe aura lieu le mercredi 4 novembre à 9 h à la cathédrale.",
    },
    body: {
      ht: "Konsèy minisipal Gonayiv deklare jou 3, 4 ak 5 novanm « chome e peye » sou tout teritwa komin lan, pou fèt Sen Chal Bòwome, sen patwon vil la, dapre NAGO. Dapre menm sous la, konsèy la di fèt patronal la se yon gwo evènman relijye, kiltirèl, sosyal ak ekonomik, e li vle pèmèt moun lavil yo ak vizitè yo patisipe, pandan l ap kenbe lòd ak sekirite.\n\nPandan twa jou sa yo, biwo administrasyon piblik, lekòl, bank ak biznis komèsyal ap rete fèmen, dapre Monnelys TV Network, NAGO site. Sèvis ijans, lopital, Polis nasyonal, sèvis asenisman, transpò piblik ak ponp gazolin ap kontinye fonksyone.\n\nYon gwo mès solanèl pou Sen Chal Bòwome ap fèt mèkredi 4 novanm a 9 h nan katedral Gonayiv. Dapre Rezo Nòdwès, NAGO site, pwogram meri a te kòmanse samdi 24 oktòb ak yon chanpyona foutbòl ant katye, Boromée Cup, e li gen ladan l yon aktivite bisiklèt ak gwoup fanm Fanm Pedale, dans tradisyonèl ak yon fwa gastwonomik madi 3 novanm. Mackenson Pierre, responsab komisyon kiltirèl meri a, di meri a ap travay ak PNH nan depatman an pou sekirite aktivite yo.\n\nKesyon pou lektè yo : Èske twa jou chome sa yo ap bay komès lokal yo yon ti souf, oswa èske se yon pèt pou travayè ki peye pa jounen ? Ki mezi sekirite konkrè PNH pran pou wout ki mennen Gonayiv yo ? Èske lòt komin ta dwe fè menm jan pou fèt patronal pa yo ?",
      fr: "Le conseil municipal des Gonaïves a déclaré les journées des 3, 4 et 5 novembre « chômées et payées » sur tout le territoire de la commune, à l'occasion de la fête de saint Charles Borromée, saint patron de la ville, selon NAGO. Toujours selon NAGO, le conseil estime que la fête patronale est un événement majeur, religieux, culturel, social et économique, et veut permettre aux habitants comme aux visiteurs d'y participer, tout en garantissant l'ordre et la sécurité.\n\nPendant ces trois jours, les bureaux de l'administration publique, les écoles, les banques et les entreprises commerciales resteront fermés, selon Monnelys TV Network, cité par NAGO. Les services d'urgence, les hôpitaux, la Police nationale, les services d'assainissement, les transports publics et les stations d'essence continueront de fonctionner.\n\nUne grande messe solennelle en l'honneur de saint Charles Borromée sera célébrée le mercredi 4 novembre à 9 h à la cathédrale des Gonaïves. Selon Rezo Nòdwès, cité par NAGO, le programme de la mairie a commencé le samedi 24 octobre avec un championnat de football inter-quartiers, la Boromée Cup, et comprend une activité cycliste avec le groupe Fanm Pedale, des danses traditionnelles et une foire gastronomique le mardi 3 novembre. Mackenson Pierre, responsable de la commission culturelle de la mairie, affirme que la municipalité travaille avec la PNH du département pour la sécurité des activités.\n\nQuestions aux lecteurs : Ces trois jours chômés donneront-ils un souffle au commerce local, ou pèseront-ils sur les travailleurs payés à la journée ? Quelles mesures de sécurité concrètes la PNH a-t-elle prises sur les routes menant aux Gonaïves ? D'autres communes devraient-elles suivre l'exemple pour leur fête patronale ?",
    },
    sources: ["NAGO", "Monnelys TV Network", "Rezo Nòdwès"],
    sourceLinks: [
      { name: "NAGO (30 octobre)", url: "https://nago.tv/news/gonaives-le-conseil-municipal-declare-feries-les-3-4-et-5-novembre" },
    ],
  },
  {
    id: "ntk-detention-silence-cspj-opc-2026-11-02",
    archived: true,
    pinned: true,
    isFollowUp: true,
    isUrgent: true,
    quiet: true,
    tier: "need-to-know",
    topic: "justice",
    readMoreLink: {
      fr: { before: "Pour lire notre première tribune sur la détention préventive, ", link: "cliquez ici", after: ".", href: "/story/ntk-detention-preventive-commissariats-2026-10-30" },
      ht: { before: "Pou li premye tribin nou an sou detansyon preventif, ", link: "klike la a", after: ".", href: "/ht/story/ntk-detention-preventive-commissariats-2026-10-30" },
    },
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T11:55:00-05:00",
    headline: {
      ht: "Detansyon preventif : CSPJ, OPC, òganizasyon dwa moun, kiyès silans lan arange ?",
      fr: "Détention préventive : CSPJ, OPC, organisations de droits humains, à qui profite le silence ?",
    },
    author: { fr: "Par Blaise Antoine Joseph (BAJ)", ht: "Pa Blaise Antoine Joseph (BAJ)" },
    teaser: {
      ht: "82 % prizonye poko jije, dapre BINUH. CSPJ, OPC ak òganizasyon dwa moun yo konnen. Poukisa anyen pa chanje ? Yon swivi BAJ.",
      fr: "82 % des détenus n'ont jamais été jugés, selon le BINUH. Le CSPJ, l'OPC et les organisations de droits humains le savent. Pourquoi rien ne change ? Un suivi de BAJ.",
    },
    brief: {
      ht: "Apre tribin 30 oktòb la, BAJ mande ki wòl CSPJ, OPC ak òganizasyon dwa moun yo devan detansyon preventif ki twò long, e kiyès silans lan arange.",
      fr: "Après la tribune du 30 octobre, BAJ interroge le rôle du CSPJ, de l'OPC et des organisations de droits humains face à la détention préventive prolongée, et demande à qui profite le silence.",
    },
    body: {
      ht: "Atik sa a fè pati yon seri swivi sou yon sijè ki delika : lajistis ann Ayiti. Apre ti soti nou te fè sou sa nan dat 30 oktòb la sou detansyon preventif, n ap fè yon ti repase sou sijè sa a, e se pap dènye fwa.\n\n30 oktòb, mwen te ekri isit la libète se anba tab li negosye. Dapre BINUH, 30 jen 2026, 82 % nan 7563 moun ki nan prizon nou yo t ap tann jijman toujou. Pèsonn pa demanti. Pèsonn pa bouje non plis. Se sa k fè m pè.\n\nPaske se pa yon sekrè. Tout moun konnen. E moun ki konnen pi byen yo, se menm moun lalwa mete pou aji yo.\n\nAnn kòmanse ak Konsèy Siperyè Pouvwa Jidisyè a. Lwa 2007 ki kreye l la fè l \"ògàn administrasyon, kontwòl, disiplin ak deliberasyon\" pouvwa jidisyè a. Konstitisyon amande a ba l dwa siveyans ak disiplin sou majistra yo. Atik 7 lwa a menm pale de \"pwoteksyon dwa moun ki bezwen jistis\". CSPJ konn sètifye : an septanm, li egzamine 159 dosye e li refize 17 majistra, sitou pou rezon entegrite. Byen. Men konbyen jij ki janm sanksyone paske yon prizonye fè de, twa, senk an san yo pa tande l ? Mwen pa jwenn okenn chif piblik. Si chif la egziste, se pou yo pibliye l.\n\nApre sa, Ofis Pwoteksyon Sitwayen an. Atik 207 Konstitisyon an kreye l pou \"pwoteje tout moun kont tout fòm abi Administrasyon piblik\", e sèvis li gratis. Kenbe yon moun nan selil pi lwen pase tout delè rezonab, se yon abi. OPC konnen sa : depi 2021, li te di detansyon preventif ki twò long lan soti nan neglijans majistra ak yon koripsyon ki vin tounen yon sistèm. Dyagnostik la la depi senk an. Kote plent yo, vizit komisarya yo fè piblik, dosye yo voye bay CSPJ ?\n\nFinalman, òganizasyon dwa moun yo. An 2025, RNDDH dokimante prizonye ki anpile depi plizyè mwa, kèk depi plis pase yon ane, nan komisarya Dèlma 33. CARDH ap egzekite, ak Ministè Lajistis ak PNUD, yon pwojè habeas corpus kolektif ki libere 62 prizonye Pòtoprens. Gen POHDH, Fondasyon Je Klere ak lòt ankò. Yo gen rapò, avoka, mikwo. Pafwa yo gen finansman, pwojè ak plas nan komisyon tou, e CSPJ li menm gen yon reprezantan sosyete sivil.\n\nKidonk m ap poze kesyon an, e se opinyon m, se pa yon akizasyon kont okenn moun : lè w konnen pwoblèm nan konsa, pibliye yon rapò chak ane epi pase a lòt bagay, èske se travay toujou, oswa èske se deja yon silans konplis ? Yon rapò pa libere pèsonn. 62 moun libere, se 62 fanmi ki respire. Sou plis pase 6000 prizonye k ap tann, se prèske anyen.\n\nKisa yo genyen nan kite anyen pa chanje ? Mwen pa konnen entansyon chak moun, e mwen pa pretann konnen. Men yon sistèm ki dire lontan toujou arange yon moun. Majistra ki pa janm gen pwoblèm. Entèmedyè k ap \"ranje\" dosye. Petèt tou kèk enstitisyon ki gen bidjè ak vizibilite ki depann de yon pwoblèm ki pa janm rezoud. Si m twonpe m, repons lan senp : non jij ki sanksyone, dat, rezilta.\n\nMwen raple yon bagay. Tout moun ki nan detansyon inosan toutotan yon tribinal pa kondane yo. Majistra yo, responsab OPC ak òganizasyon yo tou. Mwen pa vize okenn moun an patikilye. Mwen vize yon silans.\n\nKesyon pou lektè yo :\n• Èske CSPJ deja sanksyone yon sèl jij pou detansyon preventif twò long ? Si wi, poukisa nou pa konnen ?\n• Ki dènye fwa OPC pote plent pou yon prizonye yo bliye ?\n• Èske òganizasyon dwa moun yo mezire siksè yo ak kantite rapò oswa ak kantite prizonye ki soti ?\n• Kiyès jodi a ki enterese pou 82 % prizonye pa janm wè jij yo ?\n\nPwochen atik : ki wòl avoka ki la pou defann moun yo jwe nan kalvè sa a. N ap gen pou n pale de sa.",
      fr: "Ce texte s'inscrit dans une série de suivis sur un sujet sensible : la justice en Haïti. Après notre tribune du 30 octobre sur la détention préventive, nous revenons à la charge, et ce ne sera pas la dernière fois.\n\nLe 30 octobre, j'écrivais ici que la liberté se négocie sous la table. Selon le BINUH, au 30 juin 2026, 82 % des 7563 personnes détenues dans nos prisons attendaient encore d'être jugées. Personne n'a démenti. Personne n'a bougé non plus. C'est ça qui m'inquiète.\n\nCar ce n'est pas un secret. Tout le monde sait. Et ceux qui savent le mieux sont justement ceux que la loi a chargés d'agir.\n\nCommençons par le Conseil supérieur du pouvoir judiciaire. La loi de 2007 qui le crée en fait \"l'organe d'administration, de contrôle, de discipline et de délibération\" du pouvoir judiciaire. La Constitution amendée lui donne un droit de surveillance et de discipline sur les magistrats. Son article 7 parle même de \"la protection des droits des justiciables\". Le CSPJ sait certifier : en septembre, il a examiné 159 dossiers et refusé 17 magistrats, notamment pour des motifs d'intégrité. Très bien. Mais combien de juges ont été sanctionnés parce qu'un détenu a attendu deux, trois, cinq ans sans être entendu ? Je n'ai trouvé aucun chiffre public. Si ce chiffre existe, qu'on le publie.\n\nEnsuite, l'Office de la protection du citoyen. L'article 207 de la Constitution le crée pour \"protéger tout individu contre toutes les formes d'abus de l'Administration publique\", et son intervention est gratuite. Garder un homme en cellule au-delà de tout délai raisonnable, c'est un abus. L'OPC le sait : dès 2021, il attribuait la détention préventive prolongée au laxisme de magistrats et à une corruption institutionnalisée. Le diagnostic est posé depuis cinq ans. Où sont les plaintes, les visites de commissariats rendues publiques, les dossiers transmis au CSPJ ?\n\nEnfin, les organisations de droits humains. Le RNDDH a documenté en 2025 des détenus entassés depuis des mois, parfois plus d'un an, au commissariat de Delmas 33. Le CARDH exécute, avec le ministère de la Justice et le PNUD, un projet d'habeas corpus collectif qui a permis de libérer 62 détenus à Port-au-Prince. Il y a aussi la POHDH, la Fondasyon Je Klere et d'autres. Ils ont des rapports, des avocats, des micros. Ils ont parfois aussi des financements, des projets et des places dans les commissions, et le CSPJ lui-même compte un représentant de la société civile.\n\nAlors je pose la question, et c'est mon opinion, pas une accusation contre une personne : quand on connaît le problème à ce point, publier un rapport par an et passer à autre chose, est-ce encore du travail, ou déjà une forme de silence complice ? Un rapport ne libère personne. Soixante-deux libérations, c'est soixante-deux familles soulagées. Sur plus de 6000 détenus en attente, c'est presque rien.\n\nQu'a-t-on à gagner à ce que rien ne change ? Je ne connais pas les intentions de chacun et je ne prétends pas les connaître. Mais un système qui dure longtemps profite toujours à quelqu'un. Aux magistrats qui ne sont jamais inquiétés. Aux intermédiaires qui \"arrangent\" les dossiers. Peut-être aussi à des institutions dont le budget et la visibilité dépendent d'un problème qui ne se règle jamais. Si je me trompe, la réponse est simple : des noms de juges sanctionnés, des dates, des résultats.\n\nJe rappelle une chose. Toute personne détenue est présumée innocente tant qu'un tribunal ne l'a pas condamnée. Les magistrats, les responsables de l'OPC et des organisations aussi. Je ne vise personne en particulier. Je vise un silence.\n\nQuestions aux lecteurs :\n• Le CSPJ a-t-il déjà sanctionné un seul juge pour détention préventive prolongée ? Si oui, pourquoi ne le sait-on pas ?\n• Quand l'OPC a-t-il, pour la dernière fois, porté plainte au nom d'un détenu oublié ?\n• Les organisations de droits humains mesurent-elles leur succès au nombre de rapports ou au nombre de détenus libérés ?\n• Qui, aujourd'hui, a intérêt à ce que 82 % des prisonniers n'aient jamais vu leur juge ?\n\nÀ suivre : dans notre prochain volet, le rôle des avocats de la défense dans ce calvaire. Restez à l'affût.",
    },
    sources: ["BINUH", "CSPJ", "Constitution de 1987", "OPC", "RNDDH", "CARDH"],
    sourceLinks: [
      { name: "Loi CSPJ (2007)", url: "https://docs.haitidocs.org/cl-2007-loi-cspj.pdf" },
      { name: "OEA/MESICIC (CSPJ)", url: "https://www.oas.org/en/sla/dlc/mesicic/docs/mesicic4_hti_CSJP_notes.pdf" },
      { name: "Constitution de 1987 (art. 207)", url: "https://pdba.georgetown.edu/Constitutions/Haiti/haiti1987fr.html" },
      { name: "BINUH (rapport T2 2026)", url: "https://binuh.unmissions.org/sites/default/files/2026-08/Q2%202026%20-%20EN-V3.pdf" },
      { name: "Soumission EPU 2022 (cite l'OPC)", url: "https://upr-info.org/sites/default/files/documents/2022-01/js8_upr40_hti_e_main.pdf" },
      { name: "RNDDH (commissariats, mai 2025)", url: "https://web.rnddh.org/wp-content/uploads/2025/05/5-RapM-Commissariat-et-Sous-Commissariat-30Mai2025.FR_.pdf" },
      { name: "CARDH (habeas corpus)", url: "https://cardh.org/archives/5590" },
    ],
  },
  {
    id: "qh-ennery-250-ans-2026-11-02",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T10:55:00-05:00",
    headline: {
      ht: "Ennery fete 250 an ak fèt chanpèt Sen Ibè 3 novanm",
      fr: "Ennery fête ses 250 ans avec la Saint-Hubert, le 3 novembre",
    },
    teaser: {
      ht: "Konferans, foutbòl, bal, fwa ak gala : komin Atibonit la, ki asosye ak memwa Tousen Louvèti, fete 250 an fondasyon l, dapre PapPost.",
      fr: "Conférences, football, bals, foire et gala : la commune de l’Artibonite, associée à la mémoire de Toussaint Louverture, célèbre les 250 ans de sa fondation, selon PapPost.",
    },
    brief: {
      ht: "Dapre PapPost, fèt patronal Sen Ibè 3 novanm ane sa a ap make 250yèm anivèsè fondasyon Ennery, ak yon fwa ak yon gala anplis aktivite abityèl yo.",
      fr: "Selon PapPost, la fête patronale de la Saint-Hubert, le 3 novembre, marque cette année le 250e anniversaire de la fondation d’Ennery, avec une foire et un gala en plus des activités habituelles.",
    },
    body: {
      ht: "Dapre Port-au-Prince Post (PapPost), komin Ennery, nan Atibonit, ap fete de evènman an menm tan : fèt patronal tradisyonèl Sen Ibè, 3 novanm, ak 250yèm anivèsè fondasyon l. « Se p ap yon senp fèt patronal », Lenet Perard, avoka nan bawo Gonayiv e ansyen aktè lavi kominotè Ennery, di PapPost. Anplis konferans-deba, chanpyona foutbòl, bal ak festival abityèl yo, ane sa a ap gen yon fwa ak yon gala pou rasanble abitan, vizitè ak dyaspora. Komin nan asosye ak memwa Tousen Louvèti.\n\nKesyon pou lektè yo : • Ki sa 250 an Ennery ap kite pou jèn komin nan ? • Ki eta wout Gonayiv–Ennery pou vizitè yo ? • Ki jan pou pwoteje patrimwàn Louvèti a Ennery ?",
      fr: "Selon Port-au-Prince Post (PapPost), la commune d’Ennery, dans l’Artibonite, célèbre un double événement : sa traditionnelle fête patronale de la Saint-Hubert, le 3 novembre, et le 250e anniversaire de sa fondation. « Ce ne sera pas une simple fête patronale », a déclaré à PapPost Lenet Perard, avocat au barreau des Gonaïves et ancien acteur de la vie communautaire d’Ennery. Aux conférences-débats, championnats de football, bals et festivals habituels s’ajoutent cette année une foire et un gala, destinés à rassembler habitants, visiteurs et diaspora. La commune est associée à la mémoire de Toussaint Louverture.\n\nQuestions aux lecteurs : • Que laisseront ces 250 ans aux jeunes d’Ennery ? • Dans quel état est la route Gonaïves–Ennery pour les visiteurs ? • Comment protéger le patrimoine louverturien d’Ennery ?",
    },
    sources: ["PapPost"],
    sourceLinks: [
      { name: "PapPost", url: "https://pappost.com/index.php/2026/11/01/ennery-se-prepare-a-celebrer-le-250e-anniversaire-de-sa-fondation/" },
    ],
  },
  {
    id: "ntk-meteo-pluies-2026-11-02",
    archived: true,
    tier: "need-to-know",
    topic: "society",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T10:55:00-05:00",
    headline: {
      ht: "Lapli ap tonbe lendi ak madi nan Sant, Atibonit, Grandans, Lwès ak Gran Nò",
      fr: "Pluies attendues lundi et mardi dans le Centre, l’Artibonite, la Grand’Anse, l’Ouest et le Grand Nord",
    },
    teaser: {
      ht: "Dapre bilten UHM AGERCA relaye, aktivite oraj ap ogmante lendi ak madi, sitou apremidi ak aswè. Sid la te deja frape pa inondasyon semèn pase.",
      fr: "Selon le bulletin de l’UHM relayé par l’AGERCA, l’activité orageuse augmente lundi et mardi, surtout l’après-midi et le soir. Le Sud a déjà été frappé par des inondations la semaine dernière.",
    },
    brief: {
      ht: "Dapre bilten UHM 1ye novanm AGERCA pibliye, lapli ka tonbe sitou nan Sant, Atibonit, Grandans, Lwès (sitou bò lanmè) ak Gran Nò, apremidi ak aswè.",
      fr: "Selon le bulletin de l’UHM du 1er novembre publié par l’AGERCA, des pluies sont attendues principalement dans le Centre, l’Artibonite, la Grand’Anse, l’Ouest (surtout la façade maritime) et le Grand Nord, l’après-midi et le soir.",
    },
    body: {
      ht: "Dapre bilten meteyo 1ye novanm Inite idwometeyowolojik (UHM) la, AGERCA pibliye, yon ti ogmantasyon aktivite oraj prevwa lendi ak madi, akoz plis imidite. Lapli ka tonbe sitou nan Sant, Atibonit, Grandans, Lwès (sitou sou fasad maritim lan) ak depatman Gran Nò yo, sitou nan dezyèm pati apremidi ak aswè. Dapre NAGO Météo, risk lapli modere lendi a Ench (75 %), Okay (55 %) ak Jeremi (53 %).\n\nSid la ak Grandans te deja frape pa gwo lapli ak inondasyon semèn pase (wè atik nou an). Pou alèt ofisyèl, gade UHM (meteo-haiti.gouv.ht) ak Pwoteksyon sivil.\n\nKesyon pou lektè yo : • Èske ravin ak kanal nan katye w netwaye depi inondasyon semèn pase ? • Ki kote pou moun ki deplase yo pran sekou si dlo monte ? • Kiyès k ap avèti zòn ki pa gen kouran ni entènèt ?",
      fr: "Selon le bulletin météo du 1er novembre de l’Unité hydrométéorologique d’Haïti (UHM), publié par l’AGERCA, une légère augmentation des activités pluvio-orageuses est prévue lundi et mardi, en lien avec un renforcement de l’humidité. Les précipitations pourraient toucher principalement le Centre, l’Artibonite, la Grand’Anse, l’Ouest (particulièrement la façade maritime) et les départements du Grand Nord, surtout en seconde partie d’après-midi et en soirée. Selon NAGO Météo, le risque de pluie est modéré lundi à Hinche (75 %), aux Cayes (55 %) et à Jérémie (53 %).\n\nLe Sud et la Grand’Anse ont déjà été frappés par de fortes pluies et des inondations la semaine dernière (voir notre article). Pour les alertes officielles, consultez l’UHM (meteo-haiti.gouv.ht) et la Protection civile.\n\nQuestions aux lecteurs : • Les ravines et canaux de votre quartier ont-ils été curés depuis les inondations de la semaine dernière ? • Où les déplacés peuvent-ils s’abriter si l’eau monte ? • Qui alerte les zones sans électricité ni internet ?",
    },
    sources: ["UHM (via AGERCA)", "NAGO Météo"],
    sourceLinks: [
      { name: "AGERCA (bulletin UHM)", url: "https://agerca.ht/2026/11/01/bulletin-meteo-dimanche-1er-novembre-2026-valable-jusquau-3-novembre-2026/" },
      { name: "NAGO Météo", url: "https://nago.tv/news/la-meteo-en-haiti-ce-lundi-2-novembre-2026" },
      { name: "Opak News : pluies sur le Grand Sud", url: "https://opak-news.haitialways.workers.dev/story/ntk-grand-sud-downpours-2026-10-28" },
    ],
  },
  {
    id: "qh-medcenter-canape-vert-solaire-2026-11-02",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T10:55:00-05:00",
    headline: {
      ht: "Kanape Vè : MedCenter di li se yon lopital 100 % solè, men louvèti l poko konfime",
      fr: "Canapé-Vert : le MedCenter se dit hôpital 100 % solaire, mais son ouverture reste à confirmer",
    },
    teaser: {
      ht: "Sant Lopital MedCenter di li gen pwòp oksijèn medikal li ak ijans 24 sou 24, dapre NAGO. Pa gen dat inogirasyon, ni non pwopriyetè.",
      fr: "Le Centre Hospitalier MedCenter affirme produire son oxygène médical et offrir des urgences 24 h/24, selon NAGO. Ni date d’inauguration, ni propriétaire connus.",
    },
    brief: {
      ht: "Dapre NAGO, ki site Island TV ak sit chm.ht, MedCenter Kanape Vè di li fonksyone 100 % ak enèji solè. NAGO pa jwenn okenn atik ki konfime l louvri.",
      fr: "Selon NAGO, citant Island TV et le site chm.ht, le MedCenter de Canapé-Vert affirme fonctionner à 100 % à l’énergie solaire. NAGO n’a trouvé aucun article confirmant son ouverture.",
    },
    body: {
      ht: "Dapre NAGO, Sant Lopital MedCenter (CHM), nan Kanape Vè, Pòtoprens, prezante tèt li kòm yon lopital twa etaj ki fonksyone antyèman ak enèji solè, « san depann rezo piblik la ». Chèn Island TV te pale de li sou Instagram an oktòb, e sit ofisyèl la, chm.ht, repete enfòmasyon yo : yon « mini-izin » ki pwodui oksijèn ak lè medikal, yon jesyon « 100 % san papye », ijans ak anbilans 24 sou 24, sal operasyon, swen entansif ak imaj medikal. Konsiltasyon yo ta fèt lendi a samdi, 8 h a 4 h.\n\nMen, dapre NAGO, ni sit la ni Island TV pa di kiyès ki dirije oswa posede lopital la, ni konbyen kabann li genyen, e pa gen dat inogirasyon. NAGO pa jwenn, 1ye novanm, okenn atik nan laprès ayisyen ki konfime l louvri. Opak News pa verifye reklamasyon yo.\n\nKesyon pou lektè yo : • Kiyès ki dèyè lopital sa a ? • Èske Ministè Sante a otorize l ? • Konbyen yon vizit ijans ap koute ?",
      fr: "Selon NAGO, le Centre Hospitalier MedCenter (CHM), à Canapé-Vert, Port-au-Prince, se présente comme un hôpital de trois niveaux entièrement alimenté à l’énergie solaire, « sans dépendre du réseau public ». La chaîne Island TV l’a signalé sur Instagram en octobre, et le site officiel, chm.ht, reprend ces éléments : une « mini-usine » produisant oxygène et air médical, une gestion « 100 % sans papier », urgences et ambulance 24 h/24, bloc opératoire, soins intensifs et imagerie médicale. Les consultations auraient lieu du lundi au samedi, de 8 h à 16 h.\n\nMais, selon NAGO, ni le site ni Island TV ne précisent qui dirige ou possède l’établissement, ni son nombre de lits, et aucune date d’inauguration n’est indiquée. NAGO n’a trouvé, au 1er novembre, aucun article de la presse haïtienne confirmant son ouverture. Opak News n’a pas vérifié ces affirmations.\n\nQuestions aux lecteurs : • Qui est derrière cet hôpital ? • Le ministère de la Santé l’a-t-il autorisé ? • Combien coûtera une visite aux urgences ?",
    },
    sources: ["NAGO", "Island TV", "chm.ht"],
    sourceLinks: [
      { name: "NAGO", url: "https://nago.tv/news/canape-vert-centre-hospitalier-medcenter-solaire-ouverture-a-confirmer" },
    ],
  },
  {
    id: "ntk-impunite-journalistes-2026-11-02",
    archived: true,
    tier: "need-to-know",
    topic: "justice",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T01:20:00-05:00",
    isBreaking: true,
    breakingHours: 12,
    headline: {
      ht: "2 novanm : jounen kont enpinite pou krim sou jounalis, 86 % ka san jistis",
      fr: "2 novembre : journée contre l’impunité des crimes contre les journalistes, 86 % des meurtres non résolus",
    },
    teaser: {
      ht: "Dapre UNESCO, 189 jounalis mouri nan 2024 ak 2025, e 86 % asasina yo rete san jijman. An Ayiti, jounalis kiltirèl Richard Alexandre mouri anba bal nan Dèlma 83 an oktòb.",
      fr: "Selon l’UNESCO, 189 journalistes ont été tués en 2024 et 2025, et 86 % des meurtres restent judiciairement non résolus. En Haïti, le journaliste culturel Richard Alexandre a été tué par balles à Delmas 83 en octobre.",
    },
    brief: {
      ht: "Tèm 2026 la se « Menas yo evolye. Enpinite a rete. » Dapre UNESCO, to enpinite a monte a 86 %, premye fwa depi 2012, sa vle di prèske 9 ka sou 10 pa janm jije.",
      fr: "Thème 2026 : « Les menaces évoluent. L’impunité demeure. » Selon l’UNESCO, le taux d’impunité est monté à 86 %, une première hausse depuis 2012, soit près de neuf meurtres sur dix judiciairement non résolus.",
    },
    body: {
      ht: "Lendi 2 novanm se Jounen entènasyonal pou mete fen ak enpinite pou krim kont jounalis, ki gen tèm 2026 « Threats Evolve. Impunity Endures. » (Menas yo evolye. Enpinite a rete.). Dapre UNESCO, 189 jounalis te touye nan atak vyolan nan 2024 ak 2025, 67 % nan zòn lagè, e 50 ladan yo pa dron. Pou premye fwa depi UNESCO kòmanse mezire l an 2012, to enpinite global la monte yon pwen pou rive 86 % : prèske nèf asasina sou dis pa janm jwenn jistis. Dapre ONU, plis pase 1700 jounalis te touye depi 1993.\n\nAn Ayiti, jounalis kiltirèl Richard Alexandre, alias Caonabo, 38 an, ansyen kolaboratè Ticket Magazine, te pran bal nan Dèlma 83 e li mouri lopital nan nwit 27 pou 28 oktòb, dapre Le Nouvelliste. Pa gen okenn sispèk ki idantifye piblikman.\n\nKesyon pou lektè yo : • Konbyen jounalis ayisyen ki touye depi 2000, e konbyen dosye ki janm jije ? • Kiyès k ap mennen ankèt sou lanmò Caonabo ? • Si moun ki touye jounalis pa janm peye, kiyès k ap rete pou di verite a ?",
      fr: "Ce lundi 2 novembre est la Journée internationale de la fin de l’impunité pour les crimes commis contre des journalistes, placée en 2026 sous le thème « Threats Evolve. Impunity Endures. » (Les menaces évoluent. L’impunité demeure.). Selon l’UNESCO, 189 journalistes ont été tués dans des attaques violentes en 2024 et 2025, dont 67 % dans des zones de conflit, et 50 par des drones. Pour la première fois depuis que l’UNESCO le mesure, en 2012, le taux d’impunité mondial a augmenté d’un point, à 86 % : près de neuf meurtres sur dix restent judiciairement non résolus. Selon l’ONU, plus de 1700 journalistes ont été tués depuis 1993.\n\nEn Haïti, le journaliste culturel Richard Alexandre, dit Caonabo, 38 ans, ancien collaborateur de Ticket Magazine, a été atteint par balles à Delmas 83 et a succombé à l’hôpital dans la nuit du 27 au 28 octobre, selon Le Nouvelliste. Aucun suspect n’a été publiquement identifié.\n\nQuestions aux lecteurs : • Combien de journalistes haïtiens tués depuis 2000, et combien de dossiers jugés ? • Qui enquête sur la mort de Caonabo ? • Si ceux qui tuent des journalistes ne paient jamais, qui restera pour dire la vérité ?",
    },
    sources: ["UNESCO", "ONU", "Le Nouvelliste"],
    sourceLinks: [
      { name: "UNESCO", url: "https://www.unesco.org/en/days/end-impunity" },
      { name: "ONU", url: "https://www.un.org/en/observances/end-impunity-crimes-against-journalists" },
      { name: "Opak News : Richard Alexandre (Caonabo)", url: "https://opak-news.haitialways.workers.dev/story/qh-caonabo-richard-alexandre-2026-10-29" },
    ],
  },
  {
    id: "qh-nevada-pierre-roc-nation-2026-11-02",
    archived: true,
    tier: "quick-hit",
    topic: "sports",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T01:20:00-05:00",
    headline: {
      ht: "Nevada Pierre, 3 an, ta prale Espay ak Roc Nation Sports an desanm",
      fr: "Nevada Pierre, 3 ans, attendu en Espagne avec Roc Nation Sports en décembre",
    },
    teaser: {
      ht: "Dapre TheGrio, ki site Complex Sports, Roc Nation Sports, ajans JAY-Z, ap prepare yon vwayaj an Espay pou jèn foutbolè Orlando a, apre yon konfli nan yon match Florid.",
      fr: "Selon TheGrio, citant Complex Sports, Roc Nation Sports, l’agence de JAY-Z, prépare un voyage en Espagne pour le jeune footballeur d’Orlando, après un incident lors d’un match en Floride.",
    },
    brief: {
      ht: "Dapre TheGrio, Roc Nation Sports ta vle voye Nevada Pierre, 3 an, pitit Don Pierre ak Martasia Griffin, an Espay an desanm pou yon eksperyans devlopman, apre yon match 24 oktòb nan Winter Park ki te fini ak lapolis.",
      fr: "Selon TheGrio, Roc Nation Sports enverrait Nevada Pierre, 3 ans, fils de Don Pierre et Martasia Griffin, en Espagne en décembre pour un stage de développement, après un match du 24 octobre à Winter Park qui s’est terminé par une intervention policière.",
    },
    body: {
      ht: "Dapre TheGrio, ki site Complex Sports ak Loren LoRosa (The Breakfast Club), Roc Nation Sports, divizyon espò Roc Nation JAY-Z a, ta prale voye Nevada Pierre, yon foutbolè 3 an, an Espay an desanm pou yon eksperyans devlopman atletik. Se yon enfòmasyon « rapòte » ; ni Roc Nation ni fanmi an pa konfime vwayaj la piblikman dapre atik la. Roc Nation Sports te ekri sou rezo sosyal : « Kontinye briye Nevada, nou sipòte w ! » Rezo Nòdwès prezante papa l, Don Pierre, kòm ayisyen.\n\nNevada vin konnen nasyonalman apre yon match jèn 24 oktòb nan Winter Park, Florid, ki te fini ak lapolis apre yon diskisyon ant paran l yo ak responsab lig la. Dapre polis Winter Park, se yon responsab lig ki te rele pou yon dezòd ; manman an konteste vèsyon sa a. Paran yo di yo vize pitit yo a paske li twò fò. Ansyen jwè ameriken Eddie Johnson ofri antrene l nan akademi EJE7 li nan Orlando.\n\nKesyon pou lektè yo : • Yon timoun 3 an : se talan oswa se presyon ? • Kiyès ki pwoteje timoun nan nan tout bri sa a ? • Èske Ayiti ap konnen kenbe talan sa yo ?",
      fr: "Selon TheGrio, citant Complex Sports et Loren LoRosa (The Breakfast Club), Roc Nation Sports, la division sport de Roc Nation, l’agence de JAY-Z, prévoirait d’envoyer Nevada Pierre, footballeur de 3 ans, en Espagne en décembre pour une expérience de développement athlétique. L’information est « rapportée » ; selon l’article, ni Roc Nation ni la famille ne l’ont confirmée publiquement. Roc Nation Sports a écrit sur les réseaux sociaux : « Continue de briller, Nevada, nous te soutenons ! » Rezo Nòdwès présente son père, Don Pierre, comme haïtien.\n\nNevada a attiré l’attention nationale après un match de jeunes, le 24 octobre à Winter Park (Floride), qui s’est terminé par l’arrivée de la police après un différend entre ses parents et des responsables de la ligue. Selon la police de Winter Park, un responsable de la ligue a signalé un trouble ; la mère conteste cette version. Les parents estiment que leur fils était visé à cause de son talent. L’ancien international américain Eddie Johnson a proposé de l’entraîner dans son académie EJE7, à Orlando.\n\nQuestions aux lecteurs : • À 3 ans : talent ou pression ? • Qui protège l’enfant dans tout ce bruit ? • Haïti saura-t-elle retenir ce genre de talent ?",
    },
    sources: ["TheGrio", "Complex Sports", "Rezo Nòdwès"],
    sourceLinks: [
      { name: "TheGrio", url: "https://thegrio.com/2026/10/29/nevada-pierre-jay-z-roc-nation-spain-trip/" },
      { name: "Rezo Nòdwès (X)", url: "https://x.com/rezo_nodwes/status/2117082817175695430" },
    ],
  },
  {
    id: "qh-springfield-marche-ice-2026-11-01",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-01",
    publishedTime: "2026-11-01T21:05:00-05:00",
    isBreaking: true,
    breakingHours: 6,
    headline: {
      ht: "Springfield : Ayisyen mache 45 mil rive kapitòl Ohio kont ICE",
      fr: "Springfield : des Haïtiens marchent 45 miles jusqu’au Capitole de l’Ohio contre l’ICE",
    },
    teaser: {
      ht: "Plizyè dizèn aktivis ap mache twa jou soti Springfield rive Columbus pou mande ICE kite vil la ak yon chemen rezidans pou Ayisyen, dapre The Guardian.",
      fr: "Des dizaines de militants marchent trois jours de Springfield à Columbus pour exiger le départ de l’ICE et une voie vers la résidence pour les Haïtiens, selon The Guardian.",
    },
    brief: {
      ht: "Dapre The Guardian, manifestan yo mande fen detansyon ak braslè nan pye, depa ICE nan Springfield ak rezidans pèmanan pou Ayisyen. An septanm, sekretè DHS Markwayne Mullin te di ICE arete 380 moun Springfield.",
      fr: "Selon The Guardian, les marcheurs réclament la fin des détentions et des bracelets électroniques, le départ de l’ICE de Springfield et une résidence permanente pour les Haïtiens. En septembre, le secrétaire du DHS Markwayne Mullin avait fait état de 380 personnes arrêtées à Springfield.",
    },
    body: {
      ht: "Dapre The Guardian, plizyè dizèn aktivis, tankou Michaelle Louis, ki soti Pòtoprens, ap fè yon mach 45 mil (anviwon 72 km) sou twa jou, soti Springfield rive kapitòl Ohio a nan Columbus. Yo mande fen detansyon imigran ak braslè elektwonik ICE, pou ajan ICE yo kite Springfield, ak yon chemen pou rezidans pèmanan pou Ayisyen.\n\nThe Guardian raple ke yon desizyon Lakou Siprèm an jiyè pèmèt administrasyon Trump fini TPS pou plis pase 350000 Ayisyen, e ke an septanm, sekretè Sekirite Enteryè (DHS), Markwayne Mullin, te di ajan ICE arete 380 moun Springfield. Yon pòtpawòl ICE di jounal la : « Si w vyole lalwa, w ap sibi konsekans yo. »\n\nKesyon pou lektè yo : • 380 arestasyon nan yon vil 60000 moun : ki kote yo ye jodi a ? • Kiyès nan Washington k ap tande mach sa a ? • Ki sa Leta ayisyen fè pou pitit li yo nan Ohio ?",
      fr: "Selon The Guardian, des dizaines de militants, dont Michaelle Louis, originaire de Port-au-Prince, effectuent une marche de 45 miles (environ 72 km) sur trois jours, de Springfield jusqu’au Capitole de l’Ohio, à Columbus. Ils réclament la fin des détentions d’immigrés et des bracelets électroniques imposés par l’ICE, le départ des agents de l’ICE de Springfield et une voie vers la résidence permanente pour les Haïtiens.\n\nThe Guardian rappelle qu’une décision de la Cour suprême en juillet a permis à l’administration Trump de mettre fin au TPS de plus de 350000 Haïtiens, et qu’en septembre le secrétaire à la Sécurité intérieure (DHS), Markwayne Mullin, a indiqué que 380 personnes avaient été arrêtées par l’ICE à Springfield. Un porte-parole de l’ICE a déclaré au journal : « Si vous enfreignez la loi, vous en subirez les conséquences. »\n\nQuestions aux lecteurs : • 380 arrestations dans une ville de 60000 habitants : où sont ces personnes aujourd’hui ? • Qui, à Washington, entendra cette marche ? • Que fait l’État haïtien pour ses ressortissants de l’Ohio ?",
    },
    sources: ["The Guardian"],
    sourceLinks: [
      { name: "The Guardian", url: "https://www.theguardian.com/us-news/2026/nov/01/ohio-haitians-ice-immigration-crackdown" },
    ],
  },
  {
    id: "qh-iia-code-fiscal-formation-2026-11-01",
    archived: true,
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-11-01",
    publishedTime: "2026-11-01T21:05:00-05:00",
    headline: {
      ht: "Kòd fiskal : IIA-Haïti fòme plis pase 20 enstitisyon Petyonvil",
      fr: "Code fiscal : l’IIA-Haïti forme plus de vingt institutions à Pétion-Ville",
    },
    teaser: {
      ht: "Plis pase 20 enstitisyon swiv yon fòmasyon sou nouvo Kòd fiskal la, an vigè depi 1ye oktòb, 28 ak 29 oktòb Petyonvil, dapre NAGO ki site Vant Bèf Info.",
      fr: "Plus de vingt institutions ont été formées au nouveau Code fiscal, en vigueur depuis le 1er octobre, les 28 et 29 octobre à Pétion-Ville, selon NAGO citant Vant Bèf Info.",
    },
    brief: {
      ht: "Enstiti Oditè Entèn Ayiti (IIA-Haïti) òganize fòmasyon an sou Kòd fiskal ki an vigè depi 1ye oktòb 2026. Prezidan li, Nathanaël Jean-Louis, di antrepriz yo dwe konnen obligasyon fiskal yo.",
      fr: "L’Institut des auditeurs internes d’Haïti (IIA-Haïti) a organisé la formation sur le Code fiscal en vigueur depuis le 1er octobre 2026. Son président, Nathanaël Jean-Louis, dit que les entreprises doivent connaître leurs obligations fiscales.",
    },
    body: {
      ht: "Dapre Flash Info NAGO 1ye novanm, ki site Vant Bèf Info, plis pase 20 enstitisyon swiv yon fòmasyon sou nouvo Kòd fiskal la 28 ak 29 oktòb 2026 Petyonvil. Se Enstiti Oditè Entèn Ayiti (IIA-Haïti) ki òganize l. Kòd la an vigè depi 1ye oktòb 2026. Prezidan IIA-Haïti, Nathanaël Jean-Louis, di antrepriz ak enstitisyon yo dwe konnen obligasyon fiskal yo.\n\nKesyon pou lektè yo : • Yon mwa apre Kòd la antre an vigè, konbyen antrepriz ki konnen l vre ? • Kiyès ki fòme ti komèsan yo ? • Kilè DGI ap fè pwòp kanpay li ?",
      fr: "Selon le Flash Info de NAGO du 1er novembre, citant Vant Bèf Info, plus de vingt institutions ont suivi une formation sur le nouveau Code fiscal les 28 et 29 octobre 2026 à Pétion-Ville. Elle était organisée par l’Institut des auditeurs internes d’Haïti (IIA-Haïti). Le Code est en vigueur depuis le 1er octobre 2026. Le président de l’IIA-Haïti, Nathanaël Jean-Louis, estime que les entreprises et les institutions doivent connaître leurs obligations fiscales.\n\nQuestions aux lecteurs : • Un mois après son entrée en vigueur, combien d’entreprises connaissent vraiment ce Code ? • Qui forme les petits commerçants ? • Quand la DGI lancera-t-elle sa propre campagne ?",
    },
    sources: ["NAGO", "Vant Bèf Info"],
    sourceLinks: [
      { name: "NAGO (Flash Info 19 h)", url: "https://nago.tv/flash-info/2026-11-01-19" },
    ],
  },
  {
    id: "ntk-spnh17-policiers-gardes-du-corps-2026-11-01",
    archived: true,
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-01",
    publishedTime: "2026-11-01T21:05:00-05:00",
    isBreaking: true,
    breakingHours: 6,
    headline: {
      ht: "SPNH-17 : plis pase 60 % polisye PNH ap sèvi « bodyguard » pou ofisyèl, dapre sendika a",
      fr: "SPNH-17 : plus de 60 % des policiers de la PNH « gardes du corps » des officiels, selon le syndicat",
    },
    teaser: {
      ht: "Dapre sendika SPNH-17, plis pase 60 % efektif PNH an afekte pou pwoteje ofisyèl ak gwo nèg prive, pandan Lagonav gen sèlman dis polisye, dapre Rezo Nòdwès.",
      fr: "Selon le syndicat SPNH-17, plus de 60 % de l’effectif de la PNH protège des officiels et des patrons du privé, alors que La Gonâve n’a que dix policiers, rapporte Rezo Nòdwès.",
    },
    brief: {
      ht: "Enspektè Garry Jean-Baptiste, kowòdonatè SPNH-17, di plis pase 60 % polisye yo afekte nan pwoteksyon ofisyèl ak biznisman, dapre Rezo Nòdwès. Lagonav gen dis polisye ; Tiburon, Chardonnières ak Mòl Sen Nikola prèske pa gen.",
      fr: "L’inspecteur Garry Jean-Baptiste, coordonnateur du SPNH-17, affirme que plus de 60 % des policiers sont affectés à la protection d’officiels et d’hommes d’affaires, selon Rezo Nòdwès. La Gonâve compte dix policiers ; Tiburon, Chardonnières et le Môle presque aucun.",
    },
    body: {
      ht: "Dapre Rezo Nòdwès, kowòdonatè Sendika Polis Nasyonal d Ayiti (SPNH-17), enspektè Garry Jean-Baptiste, di plis pase 60 % efektif PNH an afekte nan gad rapwoche ofisyèl ak gwo aktè sektè prive a. Se yon chif sendika a bay ; PNH pa reponn piblikman, e Opak News pa ka verifye l.\n\nDapre atik la, anvan yo te demoli komisarya Marchand-Dessalines, se te sis polisye pou yon popilasyon 150000 moun. Sou il Lagonav, se dis polisye sèlman. Prezans polis la « ensiyifyan » tou nan Chardonnières, Tiburon, Roche-à-Bateau ak Mòl Sen Nikola. Okontrè, Rezo Nòdwès di konvwa Premye minis Alix Didier Fils-Aimé plen ak polisye inite espesyal, e biznisman, minis ak direktè jeneral itilize polisye inite elit kòm « bodyguard ».\n\nAnsyen gwo chèf PNH, ki pa nonmen, di Rezo Nòdwès ke jèn polisye prefere travay pou yon « VIP » pase al sou fwon an, ak yon prim anplis ak mwens èdtan. Sous polisye di menm ansyen ofisyèl ki demisyone oswa revoke kontinye gen polisye kòm gad kò. Sendika yo di apèl yo pou yon pi bon distribisyon polisye pa janm jwenn repons.\n\nKesyon pou lektè yo : • Si 60 % polis la ap veye ofisyèl, kiyès k ap veye Lagonav ? • Ki lis ofisyèl ki gen dwa a gad kò, e kiyès ki peye ? • Kilè direksyon PNH ap reponn sendika a ak chif pa l ?",
      fr: "Selon Rezo Nòdwès, le coordonnateur du Syndicat de la Police nationale d’Haïti (SPNH-17), l’inspecteur Garry Jean-Baptiste, affirme que plus de 60 % de l’effectif de la PNH est affecté à la garde rapprochée d’officiels et de grandes figures du secteur privé. Ce chiffre est celui du syndicat ; la PNH n’a pas réagi publiquement et Opak News ne peut pas le vérifier.\n\nSelon l’article, avant la démolition du commissariat de Marchand-Dessalines, six policiers seulement y étaient affectés pour 150000 habitants. Sur l’île de La Gonâve, dix policiers seulement. La présence policière serait « insignifiante » à Chardonnières, Tiburon, Roche-à-Bateau et au Môle Saint-Nicolas. À l’inverse, Rezo Nòdwès écrit que le cortège du Premier ministre Alix Didier Fils-Aimé regorge de policiers d’unités spécialisées, et que des hommes d’affaires, des ministres et des directeurs généraux s’offrent des policiers d’unités d’élite comme « bodyguards ».\n\nD’anciens hauts gradés de la PNH, non nommés, confient à Rezo Nòdwès que de jeunes policiers préfèrent la sécurité d’un « VIP » au front, pour une prime et des horaires réduits. Selon des sources policières, d’anciens officiels, même démissionnaires ou révoqués, garderaient leur policier garde du corps. Les syndicats affirment que leurs appels à une meilleure répartition des agents sont restés sans suite.\n\nQuestions aux lecteurs : • Si 60 % de la police garde des officiels, qui garde La Gonâve ? • Qui a droit à un garde du corps, et qui paie ? • Quand la direction de la PNH répondra-t-elle au syndicat avec ses propres chiffres ?",
    },
    sources: ["Rezo Nòdwès", "SPNH-17"],
    sourceLinks: [
      { name: "Rezo Nòdwès", url: "https://rezonodwes.com/2026/11/plus-de-60-de-leffectif-de-la-pnh-transforme-bodyguard-des-officiels-denonce-le-spnh-17/" },
    ],
  },
      {
    id: "qh-grenadiers-usa-ligue-nations-2026-11-01",
    tier: "quick-hit",
    topic: "sports",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T07:32:10-05:00",
    isFollowUp: true,
    headline: {
      ht: "Lig nasyon yo : Pierrot fòfè kont Etazini, twazyèm gwo absans Grenadye yo",
      fr: "Ligue des nations : Pierrot forfait contre les États-Unis, troisième absence majeure des Grenadiers",
    },
    teaser: {
      ht: "Atakan an ajoute sou Duverne ak Bellegarde. Ale samdi 14 novanm a 16:30 nan Nu Stadium, retou madi 17 nan Cincinnati.",
      fr: "L'attaquant s'ajoute à Duverne et Bellegarde. Aller samedi 14 novembre à 16 h 30 au Nu Stadium, retour mardi 17 à Cincinnati.",
    },
    brief: {
      ht: "Federasyon foutbòl Ayiti anonse Frantzdy Pierrot fòfè pou ka final kont Etazini, NAGO ekri 11 novanm. Se twazyèm gwo absans lan, apre defansè Jean-Kevin Duverne ak milye teren Jean-Ricner Bellegarde, yo te deja mete sou kote poutèt blesi.",
      fr: "La Fédération haïtienne de football a annoncé le forfait de Frantzdy Pierrot pour le quart de finale contre les États-Unis, écrit NAGO le 11 novembre. C'est la troisième absence majeure, après le défenseur Jean-Kevin Duverne et le milieu Jean-Ricner Bellegarde, déjà écartés pour blessure.",
    },
    body: {
      ht: "Atakan Frantzdy Pierrot p ap jwe ka final Lig nasyon Concacaf ant Ayiti ak Etazini. Federasyon foutbòl Ayiti anonse fòfè li, NAGO ekri 11 novanm. Se twazyèm gwo absans lan, apre defansè Jean-Kevin Duverne ak milye teren Jean-Ricner Bellegarde, yo te deja mete sou kote poutèt blesi.\n\nPierrot, 31 an, te pami kat vrè atakan seleksyonè David Badía Cequier te kenbe pou match sa yo. Li poko jwe okenn match sezon sa a ak klib li a, AEK Atèn. NAGO pa presize ni nati pwoblèm nan, ni konbyen tan li ap rete sou kote. Bellegarde, bò pa l, te fòfè apre Wolverhampton Wanderers te anonse yon blesi yo jije minè, NAGO te ekri 10 novanm. Li te make premye gòl li ak Ayiti kont Kosta Rika nan mwa septanm, epi li te pami 25 jwè Badía te konvoke.\n\nPi fò Grenadye yo te rive sou tè ameriken mardi, dapre NAGO, ki prezante Patrick Nwadike kòm nouvo vini nan gwoup la. Match ale a, yo deziyen kòm match lakay Ayiti, ap jwe samdi 14 novanm 2026 nan Nu Stadium Miami, a 16:30, lè Lès, jan MLS te deja konfime. Match retou a ap fèt madi 17 novanm nan TQL Stadium Cincinnati, a 19 è, dapre NAGO, ki pa presize nan ki fwazo orè kòmansman sa a.\n\nMatch ale a te dwe jwe okòmansman nan Kingston, Jamayik. Concacaf aksepte Ayiti resevwa Etazini sou tè ameriken akoz sitiyasyon sekirite nan peyi a, NAGO te presize. MLS di premye manch la ap pase an angle sou TBS, TruTV ak HBO Max, epi an panyòl sou Universo ak Peacock. Gayan konfwontasyon de manch yo kalifye pou Final Four mas 2027 ak pou Gold Cup 2027, dapre sit la.",
      fr: "L'attaquant Frantzdy Pierrot ne jouera pas le quart de finale de la Ligue des nations Concacaf entre Haïti et les États-Unis. La Fédération haïtienne de football a annoncé son forfait, écrit NAGO le 11 novembre. C'est la troisième absence majeure, après le défenseur Jean-Kevin Duverne et le milieu de terrain Jean-Ricner Bellegarde, déjà écartés pour blessure.\n\nPierrot, 31 ans, figurait parmi les quatre véritables avant-centres que le sélectionneur David Badía Cequier avait retenus pour ces rencontres. Il n'a disputé aucun match cette saison avec son club, l'AEK Athènes. NAGO ne précise ni la nature du problème, ni la durée de son indisponibilité. Bellegarde, de son côté, avait été déclaré forfait après que Wolverhampton Wanderers a annoncé une blessure jugée mineure, écrivait NAGO le 10 novembre. Il avait inscrit son premier but avec Haïti contre le Costa Rica en septembre, et figurait parmi les 25 joueurs convoqués par Badía.\n\nLa majorité des Grenadiers sont arrivés sur le sol américain mardi, selon NAGO, qui présente Patrick Nwadike comme le nouveau venu du groupe. Le match aller, désigné comme rencontre à domicile d'Haïti, se joue le samedi 14 novembre 2026 au Nu Stadium de Miami, à 16 h 30, heure de l'Est, comme MLS l'avait déjà confirmé. Le match retour aura lieu le mardi 17 novembre au TQL Stadium de Cincinnati, à 19 h, d'après NAGO, qui ne précise pas le fuseau horaire de ce coup d'envoi.\n\nLa rencontre aller devait initialement se jouer à Kingston, en Jamaïque. La Concacaf a accepté qu'Haïti reçoive les États-Unis sur le sol américain en raison de la situation sécuritaire dans le pays, avait précisé NAGO. MLS indique que la première manche sera diffusée en anglais sur TBS, TruTV et HBO Max, et en espagnol sur Universo et Peacock. Le vainqueur de la confrontation en deux manches se qualifie pour le Final Four de mars 2027 et pour la Gold Cup 2027, selon le site.",
    },
    sources: ["NAGO", "MLS"],
    sourceLinks: [
      { name: "NAGO (Pierrot)", url: "https://news.nago.tv/frantzdy-pierrot-forfait-troisieme-absence-majeure-des-grenadiers-avan" },
      { name: "NAGO (Bellegarde)", url: "https://news.nago.tv/grenadiers-bellegarde-forfait-contre-les-etats-unis-le-groupe-entre-en-stage-a-miami" },
      { name: "MLS", url: "https://www.mlssoccer.com/news/haiti-vs-usa-how-to-watch-stream-concacaf-nations-league-quarterfinal-leg-1" },
    ],
  },
  {
    id: "qh-fet-gede-cimetieres-gangs-2026-11-01",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-11-01",
    publishedTime: "2026-11-02T12:30:00-05:00",
    headline: {
      ht: "Fèt Gede : plizyè milye moun nan simityè Kagouye anba pwoteksyon lapolis, Gran Simityè a toujou fèmen",
      fr: "Fête des Guédé : des milliers de fidèles à Kagouye sous protection policière, le Grand Cimetière toujours fermé",
    },
    teaser: {
      ht: "Dapre EFE, plizyè milye vodouyizan te nan simityè Kagouye, Petyonvil, anba siveyans PNH akoz menas gang Kraze Baryè. Nan Drouillard, Site Solèy, prèske pa gen moun.",
      fr: "Selon EFE, plusieurs milliers de vodouisants se sont rendus au cimetière de Kagouye, à Pétion-Ville, sous la surveillance de la PNH en raison de la menace du gang Kraze Baryè. À Drouillard, Cité Soleil, presque personne.",
    },
    brief: {
      ht: "Mizajou 2 novanm, 12 h 30 : Dapre EFE, plizyè milye vodouyizan selebre Gede nan simityè Kagouye, Meyotte (Petyonvil), anba pwoteksyon PNH, yon machin blende ak brigad vijilans, akoz menas gang Kraze Baryè. Simityè Drouillard, Site Solèy, te prèske vid. Mizajou 2 novanm : Dapre FCN, Sekretarya jeneral Prezidans lan deklare dimanch 1ye ak lendi 2 novanm chome sou tout teritwa a, pou administrasyon piblik, komès, endistri ak lekòl. Dapre Vant Bèf Info, gang yo fè plizyè simityè Pòtoprens vin inaksesib, tankou Gran Simityè a. Kèk fidèl selebre Gede nan simityè Fragneau-Ville, Delmas 75.",
      fr: "Mise à jour du 2 novembre, 12 h 30 : Selon EFE, plusieurs milliers de vodouisants célèbrent les Guédé au cimetière de Kagouye, à Meyotte (Pétion-Ville), sous la protection de la PNH, d'un véhicule blindé et de brigades d'autodéfense, en raison de la menace du gang Kraze Baryè. Le cimetière de Drouillard, à Cité Soleil, était presque vide. Mise à jour du 2 novembre : Selon FCN, le Secrétariat général de la Présidence a déclaré chômés le dimanche 1er et le lundi 2 novembre sur tout le territoire, pour l’administration publique, le commerce, l’industrie et les écoles. Selon Vant Bèf Info, les gangs ont rendu plusieurs cimetières de Port-au-Prince inaccessibles, dont le Grand Cimetière. Des fidèles célèbrent les Gédé au cimetière de Fragneau-Ville, à Delmas 75.",
    },
    body: {
      ht: "Mizajou 2 novanm, 12 h 30 : Nan yon repòtaj Milo Milfort pou ajans EFE, ki pibliye lendi 2 novanm, plizyè milye vodouyizan te nan simityè Kagouye, nan zòn Meyotte, komin Petyonvil, pou fèt Gede. Dapre EFE, zòn sa a pa anba kontwòl dirèk gang yo, men li anba menas atak gang Kraze Baryè, Vitel'Homme Innocent dirije, yon nonm gouvènman ameriken an ofri jiska 2 milyon dola pou li. Se pou sa fèt la t ap fèt anba siveyans ajan PNH, ak yon machin blende, ak manm brigad otodefans.\n\nDevan Kwa Baron Samdi, fidèl yo vide kleren, limen bouji, priye e mande travay, vwayaj, sitou pwoteksyon, dapre EFE. « Fèt Gede se patrimwàn nou », yon vodouyizan, Allrich Jean, di ajans lan.\n\nMen nan zòn gang yo kontwole dirèkteman, se pa menm bagay. Dapre EFE, prèske pa gen moun ki te ale nan simityè Drouillard, Site Solèy, kote mesye ame t ap sikile lib. Gran Simityè Pòtoprens, ki gen plis pase 100 an, toujou fèmen. Dapre ajans lan, depi fevriye 2024 li prèske abandone, anba kontwòl gang ki sèvi avè l kòm kachèt pou goumen ak lapolis.\n\nMizajou 2 novanm : Nan yon nòt 27 oktòb, Sekretarya jeneral Prezidans lan anonse jou dimanch 1ye ak lendi 2 novanm 2026 chome sou tout teritwa nasyonal la, pou Lasentousen ak Fèt Lèmò, dapre Fact Checking News (FCN). Mezi a konsène administrasyon piblik, komès, endistri ak lekòl, selon dekrè 11 desanm 2024 sou fèt legal yo. Men nan Pòtoprens, Gran Simityè a toujou pa aksesib akoz gang yo, dapre Vant Bèf Info, e fidèl yo rabat sou simityè Fragneau-Ville, nan Delmas 75.\n\nKesyon pou lektè yo : • Yon jou chome pou lèmò, men kibò fanmi yo ka al wè tonm pa yo ? • Kilè Leta ap reprann Gran Simityè a ? • Kiyès k ap pwoteje simityè yo kont piyay ak profanasyon ?\n\nAnvan sa : Dapre Vant Bèf Info, selebrasyon 1ye ak 2 novanm yo, ki te konn plen tanbou, dans ak seremoni vodou, ap disparèt nan Pòtoprens. Anba presyon gwoup ame yo, plizyè simityè vin inaksesib, e vodouyizan yo pèdi espas tradisyonèl yo. Depi vyolans lan gaye nan sant vil la, Gran Simityè Pòtoprens, youn nan pi gwo plas selebrasyon Gede yo, pèdi aksè li. Sit la di kèk fidèl kontinye selebre nan simityè Fragneau-Ville, nan Delmas 75, ak kèk lòt zòn kote gang yo pa kontwole simityè yo, men fèt la vin pi piti e gaye.\n\nDapre The Haitian Times, Fèt Gede onore Gede yo, yon fanmi lwa ki asosye ak lanmò ak zansèt yo, tankou Bawon Samdi ak Grann Brijit, ak priyè, ofrann, tanbou ak dans nan simityè yo, sitou 1ye ak 2 novanm. Dimanch 1ye novanm, AP pibliye foto yon selebrasyon Fèt Gede nan Delmas.\n\nKesyon pou lektè yo : • Si menm mò yo pa ka resevwa vizit, kisa ki rete pou vivan yo ? • Kiyès ki pral rann Gran Simityè a bay fanmi yo ? • Eske Leta ap pwoteje yon eritaj kiltirèl li pa ka menm rive jwenn ?",
      fr: "Mise à jour du 2 novembre, 12 h 30 : Dans un reportage de Milo Milfort pour l'agence EFE, publié le lundi 2 novembre, plusieurs milliers de vodouisants se sont rendus au cimetière de Kagouye, dans la localité de Meyotte, commune de Pétion-Ville, pour la fête des Guédé. Selon EFE, cette zone n'est pas sous le contrôle direct des gangs, mais elle est menacée par le gang Kraze Baryè, dirigé par Vitel'Homme Innocent, pour qui le gouvernement américain offre jusqu'à 2 millions de dollars de récompense. La fête s'y déroulait donc sous la surveillance d'agents de la PNH, accompagnés d'un véhicule blindé, et de membres de brigades d'autodéfense.\n\nDevant la Croix du Baron Samedi, les fidèles versent du clairin, allument des bougies, prient et demandent du travail, des voyages et surtout de la protection, selon EFE. « La fête des Guédé est notre patrimoine », a déclaré à l'agence un vodouisant, Allrich Jean.\n\nAilleurs, dans les zones sous contrôle direct des gangs, le tableau est différent. Selon EFE, très peu de gens se sont rendus au cimetière de Drouillard, à Cité Soleil, où des hommes lourdement armés circulaient librement. Le Grand Cimetière de Port-au-Prince, plus que centenaire, reste fermé. D'après l'agence, depuis février 2024, il est pratiquement abandonné, sous le contrôle de gangs qui s'en servent comme cachette pour affronter la police.\n\nMise à jour du 2 novembre : Dans une note du 27 octobre, le Secrétariat général de la Présidence a annoncé que les journées du dimanche 1er et du lundi 2 novembre 2026 sont chômées sur tout le territoire national, à l’occasion de la Toussaint et de la Fête des morts, selon Fact Checking News (FCN). La mesure concerne l’administration publique, le commerce, l’industrie et les écoles, conformément au décret du 11 décembre 2024 sur les fêtes légales. Mais à Port-au-Prince, le Grand Cimetière reste inaccessible à cause des gangs, selon Vant Bèf Info, et des fidèles se replient sur le cimetière de Fragneau-Ville, à Delmas 75.\n\nQuestions aux lecteurs : • Un jour chômé pour les morts, mais où les familles peuvent-elles se recueillir sur leurs tombes ? • Quand l’État reprendra-t-il le Grand Cimetière ? • Qui protège les cimetières des pillages et des profanations ?\n\nAuparavant : Selon Vant Bèf Info, les célébrations des 1er et 2 novembre, autrefois rythmées par les tambours, les danses et les cérémonies vodoues, s’effacent du paysage de Port-au-Prince. Sous la pression des groupes armés, plusieurs cimetières sont devenus inaccessibles, privant les vodouisants de leurs espaces traditionnels. Depuis l’extension de la violence armée dans le centre-ville, le Grand Cimetière de Port-au-Prince, longtemps l’un des hauts lieux des célébrations des Gédé, a perdu son accessibilité habituelle. Le site indique que des fidèles continuent de faire vivre la tradition au cimetière de Fragneau-Ville, à Delmas 75, et dans quelques secteurs où les cimetières échappent encore aux groupes armés, mais que la fête est désormais « fragmentée, dispersée et contrainte ».\n\nSelon The Haitian Times, la Fèt Gede honore les Gédé, famille de lwa associés à la mort et aux ancêtres, dont Bawon Samdi et Grann Brijit, par des prières, des offrandes, des tambours et des danses dans les cimetières, surtout les 1er et 2 novembre. Dimanche 1er novembre, l’AP a publié des photos d’une célébration de la Fèt Gede à Delmas.\n\nQuestions aux lecteurs : • Si même les morts ne peuvent plus recevoir de visite, que reste-t-il aux vivants ? • Qui rendra le Grand Cimetière aux familles ? • L’État protégera-t-il un patrimoine qu’il ne peut même plus atteindre ?",
    },
    sources: ["EFE", "FCN", "Vant Bèf Info", "The Haitian Times", "AP"],
    sourceLinks: [
      { name: "EFE via Infobae (Milo Milfort, 2 novembre)", url: "https://www.infobae.com/america/agencias/2026/11/02/haitianos-celebran-en-cementerios-con-ritos-de-vudu-el-dia-de-difuntos-pese-a-la-violencia/" },
      { name: "FCN (jours chômés)", url: "https://fcnhaiti.com/haiti-les-1er-et-2-novembre-declares-chomes-a-loccasion-de-la-toussaint-et-de-la-fete-des-morts/" },
      { name: "Vant Bèf Info", url: "https://vantbefinfo.com/haiti-patrimoine-culturel-les-gangs-chassent-les-vivants-des-cimetieres-et-profanent-le-royaume-des-gede-a-port-au-prince/" },
      { name: "The Haitian Times", url: "https://haitiantimes.com/2026/11/01/fet-gede-haiti-november-celebration-dead-ancestors/" },
      { name: "AP (photo, via Journal-News)", url: "https://www.journal-news.com/nation-world/haiti-day-of-the-dead/image_91dbde5d-5522-5d27-92bb-48754358e0c7.html" },
    ],
  },
  {
    id: "ntk-cinq-forces-sans-commandement-2026-11-01",
    archived: true,
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-01",
    publishedTime: "2026-11-01T17:55:00-05:00",
    isBreaking: true,
    breakingHours: 6,
    headline: {
      ht: "Senk fòs ame ann Ayiti, okenn kòmandman inifye : Crisis Group tire alam",
      fr: "Cinq forces armées en Haïti, sans commandement unifié : l’alerte du Crisis Group",
    },
    teaser: {
      ht: "Avèk sòlda Salvador yo, Ayiti gen senk fòs ap goumen kont gang « san yon vrè kòmandman inifye », dapre yon analis Crisis Group ki site pa RTS ak AFP.",
      fr: "Avec les soldats salvadoriens, Haïti compte cinq forces anti-gangs « sans réel commandement unifié », selon un analyste du Crisis Group cité par RTS et l’AFP.",
    },
    brief: {
      ht: "Dapre RTS (AFP), PNH, FAd’H, yon fòs mèsenè etranje, GSF ak sòlda Salvador yo ap opere san yon vrè kòmandman inifye, dapre Diego Da Rin (Crisis Group). Manda GSF a fini nan senk mwa.",
      fr: "Selon la RTS (AFP), la PNH, les FAd’H, une force de mercenaires étrangers, la GSF et les soldats salvadoriens opèrent sans réel commandement unifié, selon Diego Da Rin (Crisis Group). Le mandat de la GSF expire dans cinq mois.",
    },
    body: {
      ht: "Dapre yon atik RTS ki baze sou AFP, ak arive sòlda Salvador yo, Ayiti gen kounye a senk fòs ap goumen kont gang : polis ayisyen an, lame ayisyen an, yon fòs mèsenè etranje, anviwon 2000 ajan Gang Suppression Force (GSF) ak kontenjan salvadoryen an. « Kounye a nou gen senk fòs separe san yon vrè kòmandman inifye », Diego Da Rin, analis Crisis Group, di. Li di « kèk nan fòs sa yo kolabore » sou teren an, men « sa pa twò òtodòks ».\n\nJake Johnston, chèchè nan CEPR, yon sant refleksyon Washington, di AFP ke « ak 2000 sòlda, sa pa gen anyen pou wè ak yon operasyon rechèch », e ke « tout siy montre yon sipò ameriken ». Dapre RTS, Pentagòn sèlman konfime li voye omwen de avyon militè Pòtoprens pou sipò lojistik ; Depatman Deta pa di anyen. AFP rapòte anviwon ven vòl charter ant San Salvador ak Pòtoprens ant 22 ak 29 oktòb.\n\nJohnston kwè Salvadoryen yo ka pran devan sou GSF, ki gen manda Nasyonzini ki fini nan senk mwa, e li pè « gwo risk pou sivil yo ». « Ou ka touye anpil moun, men èske sa ap chanje dinamik ki mennen vyolans lan ? » li mande.\n\nKesyon pou lektè yo : • Lè senk fòs tire nan menm katye a, kiyès ki responsab si yon sivil mouri ? • Kiyès ki kòmande, Pòtoprens, San Salvador, Washington oswa Nasyonzini ? • Kisa k ap rive apre senk mwa, lè manda GSF a fini ?",
      fr: "Selon un article de la RTS fondé sur une dépêche de l’AFP, avec l’arrivée des soldats salvadoriens, Haïti compte désormais cinq forces engagées contre les gangs : la police haïtienne, l’armée haïtienne, une force composée de mercenaires étrangers, les quelque 2000 agents de la Gang Suppression Force (GSF) et le contingent salvadorien. « Vous avez désormais cinq forces séparées sans réel commandement unifié », s’inquiète Diego Da Rin, analyste du Crisis Group. Sur le terrain, « certaines de ces forces collaborent », mais « ce n’est pas très orthodoxe », souligne-t-il.\n\nJake Johnston, chercheur au CEPR, un cercle de réflexion de Washington, affirme à l’AFP qu’« avec 2000 soldats […] cela n’a rien d’une opération de recherche » et que « tous les signes pointent vers un soutien américain ». Selon la RTS, le Pentagone se borne à confirmer l’envoi d’au moins deux avions militaires à Port-au-Prince pour du soutien logistique ; le département d’État reste muet. L’AFP a recensé une vingtaine de vols charter entre San Salvador et Port-au-Prince du 22 au 29 octobre.\n\nJake Johnston estime que les Salvadoriens pourraient prendre l’ascendant sur la GSF, dont le mandat onusien expire dans cinq mois, et craint « d’immenses risques pour les civils ». « Vous pouvez tuer beaucoup de monde, mais est-ce que cela va vraiment changer les dynamiques qui continuent de conduire à de la violence ? » interroge-t-il.\n\nQuestions aux lecteurs : • Quand cinq forces tirent dans le même quartier, qui répond de la mort d’un civil ? • Qui commande : Port-au-Prince, San Salvador, Washington ou l’ONU ? • Que se passera-t-il dans cinq mois, à l’expiration du mandat de la GSF ?",
    },
    sources: ["RTS (ATS/AFP)", "Crisis Group", "CEPR"],
    sourceLinks: [
      { name: "RTS", url: "https://www.rts.ch/info/monde/2026/article/haiti-pourquoi-le-salvador-y-deploie-au-moins-2-000-soldats-29401781.html" },
      { name: "Opak News : soldats salvadoriens en Haïti", url: "https://opak-news.haitialways.workers.dev/story/ntk-salvador-2000-soldats-2026-10-29" },
    ],
  },
      {
    id: "ntk-cep-inscriptions-preliminaires-2026-11-01",
    tier: "need-to-know",
    topic: "politics",
    publishedAt: "2026-11-11",
    publishedTime: "2026-11-11T07:33:50-05:00",
    isFollowUp: true,
    headline: {
      ht: "Eleksyon : CEP pibliye lis 48 pati ak gwoupman ki rive nan papòt 30000 aderan",
      fr: "Élections : le CEP publie la liste de 48 partis et groupements au seuil des 30000 adhérents",
    },
    teaser: {
      ht: "31 pati, 17 gwoupman, epi 3 kandida endepandan. Total 51 yo te anonse pi bonè a te konte endepandan yo ladan l.",
      fr: "31 partis, 17 groupements, plus 3 candidats indépendants. Le total de 51 annoncé plus tôt incluait ces indépendants.",
    },
    brief: {
      ht: "Nan yon nòt 9 novanm, CEP di 31 pati, 17 gwoupman ak 3 kandida endepandan te anrejistre aderan yo anvan minwi, dimanch 8 novanm. Juno7 ekri Konsèy la pibliye lis 48 pati ak gwoupman ki rive nan papòt 30000 aderan.",
      fr: "Dans une note du 9 novembre, le CEP indique que 31 partis, 17 groupements et 3 candidats indépendants ont enregistré leurs adhérents avant minuit, le dimanche 8 novembre. Juno7 écrit que le Conseil a publié la liste des 48 partis et groupements ayant atteint le seuil de 30000 adhérents.",
    },
    body: {
      ht: "Konsèy elektoral pwovizwa a pibliye, lendi 9 novanm, lis 48 pati ak gwoupman politik ki rive nan papòt 30000 aderan dekrè elektoral la mande, Juno7 ekri. Nan yon nòt ofisyèl menm jou a, CEP presize 31 pati politik, 17 gwoupman pati ak 3 kandida endepandan te anrejistre aderan ak senpatizan yo nan delè a, ki te dimanch 8 novanm minwi. Apre delè sa a, pa gen nouvo enskripsyon ni chanjman ki otorize sou sistèm nan, Konsèy la di.\n\nChif 51 estrikti yo te anonse pi bonè a, sitou nan Décodage Info, pa t revize desann. Li te ajoute 48 pati ak gwoupman ki sou lis la ansanm ak 3 kandida endepandan yo, ki fini demach yo tou men ki pa parèt sou lis 48 yo. Juno7 site pami pati yo Fanmi Lavalas, Entente Nationale (ENA), Fòs Chanjman Nasyonal (FCN), OPL, EDE, Rasanble ak MPH, epi pami gwoupman yo DEBLOKE, EAPH, VIKTWA, LAPEH AK ALYE'L YO ak GRAND. Lis la konsène anrejistreman aderan ak senpatizan, yon etap ki pa menm ak validasyon kandidati yo.\n\nCEP raple, nan yon nòt 10 novanm, enskripsyon an liy pou kandida prezidans ak lejislatif yo fini 15 novanm minwi, e depo pyès yo fini 30 novanm.",
      fr: "Le Conseil électoral provisoire a publié, lundi 9 novembre, la liste des 48 partis et groupements politiques ayant atteint le seuil de 30000 adhérents exigé par le décret électoral, écrit Juno7. Dans une note officielle du même jour, le CEP précise que 31 partis politiques, 17 groupements de partis et 3 candidats indépendants ont enregistré leurs adhérents et sympathisants dans le délai, fixé au dimanche 8 novembre à minuit. Après cette échéance, aucune nouvelle inscription ni aucune modification n'est plus autorisée sur le système, indique le Conseil.\n\nLe chiffre de 51 structures annoncé plus tôt, notamment par Décodage Info, n'a pas été revu à la baisse. Il additionnait les 48 partis et groupements de la liste publiée et les 3 candidats indépendants, qui ont aussi terminé leurs démarches mais ne figurent pas sur cette liste. Juno7 cite notamment, parmi les partis, Fanmi Lavalas, Entente Nationale (ENA), Fòs Chanjman Nasyonal (FCN), l'OPL, EDE, Rasanble et MPH, et parmi les groupements DEBLOKE, EAPH, VIKTWA, LAPEH AK ALYE'L YO et GRAND. La liste porte sur l'enregistrement des adhérents et sympathisants, une étape distincte de la validation des candidatures.\n\nLe CEP rappelle, dans une note du 10 novembre, que l'inscription en ligne des candidats à la présidence et aux législatives prend fin le 15 novembre à minuit, et que le dépôt des pièces requises se termine le 30 novembre.",
    },
    sources: ["CEP", "Juno7", "Décodage Info"],
    sourceLinks: [
      { name: "CEP - note du 9 novembre", url: "https://cephaiti.ht/31-partis-politiques-17-groupements-de-partis-politiques-et-3-candidats-independants-ont-finalise-lenregistrement-de-leurs-adherents-et-sympathisants-a-la-cloture-des-operations/" },
      { name: "Juno7", url: "https://www.juno7.ht/cep-liste-48-partis-groupements-adherents/" },
      { name: "CEP - inscriptions et dépôt des pièces", url: "https://cephaiti.ht/cloture-de-la-periode-dinscription-en-ligne-des-candidats-le-15-novembre-et-de-celle-consacree-au-depot-des-pieces-le-30-novembre-2026/" },
      { name: "Décodage Info", url: "https://decodageinfo.com/2026/11/10/haiti-elections-le-cep-cloture-les-inscriptions-pour-51-structures-politiques/" },
    ],
  },
  {
    id: "qh-cuba-embargo-haiti-abstention-2026-10-31",
    archived: true,
    tier: "quick-hit",
    topic: "gossip",
    publishedAt: "2026-10-31",
    publishedTime: "2026-10-31T19:15:00-04:00",
    headline: {
      ht: "Anbago sou Kiba: Ayiti abstni nan ONI, apre li te vote pou an 2025",
      fr: "Embargo contre Cuba : Haïti s’abstient à l’ONU après avoir voté pour en 2025",
    },
    brief: {
      ht: "Mèkredi 28 oktòb, Asanble jeneral ONI a adopte rezolisyon kont anbago ameriken sou Kiba ak 130 vwa pou, 17 kont ak 25 abstansyon. Ayiti abstni, dapre Rezo Nòdwès ak NAGO, alòske li te vote pou an 2025.",
      fr: "Mercredi 28 octobre, l’Assemblée générale de l’ONU a adopté la résolution contre l’embargo américain sur Cuba par 130 voix pour, 17 contre et 25 abstentions. Haïti s’est abstenu, selon Rezo Nòdwès et NAGO, alors qu’il avait voté pour en 2025.",
    },
    body: {
      ht: "Mèkredi 28 oktòb 2026, Asanble jeneral Nasyonzini adopte yon rezolisyon ki mande pou yo leve anbago ekonomik, komèsyal ak finansye Etazini mete sou Kiba, ak 130 vwa pou, 17 kont ak 25 abstansyon, dapre ONU Info NAGO site. Se 34yèm fwa Asanble a adopte yon tèks konsa. Dapre ONU Info, se sipò ki pi fèb tèks la jwenn nan 20 an : an 2025, li te gen 165 vwa pou, 7 kont ak 12 abstansyon.\n\nAyiti abstni, dapre Rezo Nòdwès, ki di vòt la parèt sou tablo eskriten an, ak NAGO, ki site tou Caribbean Life. Dapre Rezo Nòdwès, Ayiti te vote pou rezolisyon sa a an 2025. Nan Karayib la, Jamayik ak Giyana abstni tou, Trinidad ak Tobago vote kont, dapre Rezo Nòdwès ak NAGO. Repiblik Dominikèn abstni tou, dapre NAGO. Dapre NAGO, otorite ayisyen yo poko eksplike desizyon an.\n\nDapre Rezo Nòdwès, ki site CNN, administrasyon Trump nan mete deyò Richard Tur de la Concepción, premye sekretè misyon Kiba nan ONI. Anbasadè ameriken an, Mike Waltz, akize l li te bourade yon diplomat ameriken ; misyon kiben an di se yon reprezantan ameriken ki te anvayi espas diplomat la pou filme l. Dapre Al Jazeera NAGO site, ofisyèl kiben yo akize Washington menase peyi yo ak tarif ak restriksyon viza si yo sipòte tèks la. Rezolisyon an pa obligatwa.\n\nKesyon pou lektè yo : • Kiyès ki pran desizyon pou Ayiti abstni, e poukisa yo pa di pèp la anyen ? • Èske abstansyon sa a se yon fason pou Ayiti aliye l sou Washington, oswa gen yon lòt rezon ? • Ki sa Ayiti genyen oswa pèdi lè li chanje pozisyon sou Kiba ?",
      fr: "Mercredi 28 octobre 2026, l’Assemblée générale des Nations unies a adopté une résolution appelant à la levée de l’embargo économique, commercial et financier imposé par les États-Unis à Cuba, par 130 voix pour, 17 contre et 25 abstentions, selon ONU Info cité par NAGO. C’est la 34e fois que l’Assemblée adopte un tel texte. Selon ONU Info, c’est le soutien le plus faible en vingt ans : en 2025, le texte avait recueilli 165 voix pour, 7 contre et 12 abstentions.\n\nHaïti s’est abstenu, selon Rezo Nòdwès, qui indique que le vote figure sur le tableau du scrutin, et selon NAGO, qui cite aussi Caribbean Life. Selon Rezo Nòdwès, Haïti avait voté en faveur de cette résolution en 2025. Dans la Caraïbe, la Jamaïque et le Guyana se sont également abstenus, tandis que Trinité-et-Tobago a voté contre, selon Rezo Nòdwès et NAGO. La République dominicaine s’est aussi abstenue, selon NAGO. Selon NAGO, les autorités haïtiennes n’avaient pas expliqué cette décision au moment de publier.\n\nSelon Rezo Nòdwès, citant CNN, l’administration Trump a expulsé Richard Tur de la Concepción, premier secrétaire de la mission cubaine auprès de l’ONU. L’ambassadeur américain Mike Waltz l’accuse d’avoir bousculé un diplomate américain ; la mission cubaine affirme qu’un représentant américain avait envahi l’espace personnel de son diplomate pour le filmer. Selon Al Jazeera, cité par NAGO, des responsables cubains accusent Washington d’avoir menacé des pays de droits de douane et de restrictions de visas s’ils soutenaient le texte. La résolution n’est pas contraignante.\n\nQuestions aux lecteurs : • Qui a décidé de l’abstention d’Haïti, et pourquoi le peuple n’en a-t-il rien su ? • Cette abstention traduit-elle un alignement sur Washington, ou y a-t-il une autre raison ? • Que gagne ou que perd Haïti à changer de position sur Cuba ?",
    },
    sources: ["Rezo Nòdwès", "NAGO (citant ONU Info, Caribbean Life, Al Jazeera)"],
    sourceLinks: [
      { name: "Rezo Nòdwès", url: "https://rezonodwes.com/2026/10/embargo-contre-cuba-haiti-sabstient-a-lonu-washington-expulse-un-diplomate-cubain/" },
      { name: "NAGO", url: "https://nago.tv/en/news/embargo-contre-cuba-l-onu-reclame-sa-levee-pour-la-34e-fois-haiti-s-abstient" },
    ],
  },
  {
    id: "qh-mondial-u17-haiti-france-2026-10-31",
    archived: true,
    tier: "quick-hit",
    topic: "sports",
    publishedAt: "2026-10-31",
    publishedTime: "2026-10-31T18:35:00-04:00",
    headline: {
      ht: "Mondyal U17 : Ayiti ap jwe kont Lafrans 19 novanm nan Doha",
      fr: "Mondial U17 : Haïti ouvre contre la France le 19 novembre à Doha",
    },
    brief: {
      ht: "Grenadye U17 yo ap louvri Koup di Mond lan kont Lafrans 19 novanm, answit Irigwe 22 novanm ak Arabi Sawoudit 25 novanm, nan Aspire Zone, Doha, dapre NAGO. Ekip la pati madi pou yon estaj nan Brezil.",
      fr: "Les Grenadiers U17 ouvriront leur Coupe du monde contre la France le 19 novembre, puis affronteront l’Uruguay le 22 et l’Arabie saoudite le 25, à l’Aspire Zone de Doha, selon NAGO. L’équipe est partie mardi en stage au Brésil.",
    },
    body: {
      ht: "Dapre Flash Info NAGO samdi 31 oktòb 2026 la, seleksyon ayisyen mwens pase 17 an an ap louvri Koup di Mond U17 la kont Lafrans jedi 19 novanm. Answit, Grenadye yo ap jwe kont Irigwe dimanch 22 novanm, epi kont Arabi Sawoudit mèkredi 25 novanm. Dapre HaitiLibre, NAGO di, twa match Ayiti yo ap jwe sou teren Aspire Zone, nan Doha (Katar). NAGO baze lè match yo sou orè FootMercato pibliye.\n\nToujou dapre NAGO, jwè yo kite Ayiti madi pase pou yon estaj preparasyon nan Brezil anvan tounwa a.\n\nKesyon pou lektè yo : • Èske yon estaj nan Brezil ase pou prepare yon ekip ki pa gen chanpyona regilye lakay li ? • Kiyès k ap finanse vwayaj ak preparasyon Grenadye yo ? • Si Ti Grenadye U15 yo te ka genyen nan Bakou, èske U17 yo ka bat Lafrans ?",
      fr: "Selon le Flash Info de NAGO du samedi 31 octobre 2026, la sélection haïtienne des moins de 17 ans ouvrira sa Coupe du monde U17 contre la France le jeudi 19 novembre. Les Grenadiers affronteront ensuite l’Uruguay le dimanche 22 novembre, puis l’Arabie saoudite le mercredi 25 novembre. Selon HaitiLibre, cité par NAGO, les trois rencontres d’Haïti se joueront sur les terrains de l’Aspire Zone, à Doha (Qatar). NAGO s’appuie sur les horaires publiés par FootMercato.\n\nToujours selon NAGO, les joueurs ont quitté Haïti mardi dernier pour un stage de préparation au Brésil avant le tournoi.\n\nQuestions aux lecteurs : • Un stage au Brésil suffit-il pour une équipe sans championnat régulier chez elle ? • Qui finance le voyage et la préparation des Grenadiers ? • Si les petits Grenadiers U15 ont gagné à Bakou, les U17 peuvent-ils faire tomber la France ?",
    },
    sources: ["NAGO (citant HaitiLibre et FootMercato)"],
    sourceLinks: [
      { name: "NAGO – Flash Info 8 h, 31 octobre", url: "https://nago.tv/flash-info/2026-10-31-08" },
    ],
  },
  {
    id: "qh-bukele-dement-bombardements-2026-10-31",
    archived: true,
    tier: "quick-hit",
    topic: "security",
    publishedAt: "2026-10-31",
    publishedTime: "2026-10-31T17:50:00-04:00",
    headline: {
      ht: "Bukele demanti akizasyon bonbadman sòlda salvadoryen ann Ayiti",
      fr: "Bukele dément que ses soldats bombardent des civils en Haïti",
    },
    brief: {
      ht: "Prezidan salvadoryen an, Nayib Bukele, di sou X misyon li an pa menm gen bonm, e elikoptè atak li yo poko fè okenn misyon. Li reponn yon lèt UNA-Haiti ki akize fòs salvadoryen yo bonbade sivil.",
      fr: "Le président salvadorien Nayib Bukele affirme sur X que sa mission « n’a même pas de bombes » et que ses hélicoptères d’attaque n’ont encore effectué aucune mission. Il répond à une lettre de l’UNA-Haiti accusant les forces salvadoriennes de bombarder des civils.",
    },
    body: {
      ht: "Samdi 31 oktòb 2026, vè 4 è 57 apremidi (lè Ayiti), prezidan Salvadò a, Nayib Bukele, pibliye yon mesaj sou X (@nayibbukele) pou rejte akizasyon bonbadman kont sòlda li yo ann Ayiti. « Bonm ? Misyon nou an pa menm gen bonm a dispozisyon l », li ekri. Dapre li, elikoptè atak Salvadò yo rive ann Ayiti sèlman 29 oktòb, e « jodi a, yo poko vole yon sèl misyon ».\n\nBukele ap reponn yon lèt ouvè United Nations Association-Haiti (UNA-Haiti) voye bay Sekretè jeneral ONU a, António Guterres. Dapre Drop Site News, ki pataje lèt la, gwoup sa a — yon gwoup defans dyaspora ki pa fè pati ONU malgre non l — akize sòlda salvadoryen yo, depi 22 oktòb, frape katye sivil nan Kwadèboukè ak Kanaran ak atak ayeryen, elikoptè ak zam lou. Bukele pibliye yon foto lèt la ak dat « 28 oktòb 2026 » sèkle, e li di « rapò » sa a soti yon jou anvan elikoptè yo rive.\n\nBukele ale pi lwen : li rele ONG sa yo « kabinè lobi pou kriminèl ak katèl ki degize an òganizasyon imanitè ». Akizasyon UNA-Haiti yo menm jan ak demanti Bukele a poko verifye pa okenn sous endepandan. Nou poko konnen reyaksyon UNA-Haiti sou repons Bukele a.\n\nLi tou sou Opak News : istwa sòlda salvadoryen yo ann Ayiti (lyen anba a).\n\nKesyon pou lektè yo : • Si pa gen bonm, ki zam lou ki tonbe sou Kwadèboukè ak Kanaran ? • Kiyès k ap fè yon envestigasyon endepandan sou viktim sivil yo ? • Lè yon prezidan etranje rele yon òganizasyon ayisyen « lobi kriminèl », kiyès ki defann Ayisyen ?",
      fr: "Samedi 31 octobre 2026, vers 16 h 57 (heure d’Haïti), le président salvadorien Nayib Bukele a publié sur X (@nayibbukele) un message rejetant les accusations de bombardements visant ses soldats en Haïti. « Des bombes ? Notre mission n’a même pas de bombes à sa disposition », écrit-il. Selon lui, les hélicoptères d’attaque salvadoriens ne sont arrivés en Haïti que le 29 octobre et, « à ce jour, ils n’ont pas effectué une seule mission ».\n\nBukele répond à une lettre ouverte de l’United Nations Association-Haiti (UNA-Haiti) au secrétaire général de l’ONU, António Guterres. Selon Drop Site News, qui a relayé la lettre, ce groupe de plaidoyer de la diaspora — qui, malgré son nom, ne fait pas partie de l’ONU — accuse les troupes salvadoriennes d’avoir, depuis le 22 octobre, frappé des quartiers civils à Croix-des-Bouquets et à Canaan par des frappes aériennes, des hélicoptères de combat et des armes lourdes. Bukele a publié une photo de la lettre, la date du « 28 octobre 2026 » entourée, affirmant que ce « rapport » est paru la veille de l’arrivée de ses hélicoptères.\n\nBukele va plus loin : il qualifie ces ONG de « cabinets de lobbying pour criminels et cartels, déguisés en organisations humanitaires ». Ni les accusations de l’UNA-Haiti ni le démenti de Bukele n’ont été vérifiés de façon indépendante. La réaction de l’UNA-Haiti à ce démenti n’était pas connue au moment de publier.\n\nÀ lire aussi sur Opak News : notre suivi des soldats salvadoriens en Haïti (lien ci-dessous).\n\nQuestions aux lecteurs : • S’il n’y a pas de bombes, quelles armes lourdes sont tombées sur Croix-des-Bouquets et Canaan ? • Qui mènera une enquête indépendante sur les victimes civiles ? • Quand un président étranger traite une organisation haïtienne de « lobby criminel », qui défend les Haïtiens ?",
    },
    sources: ["Nayib Bukele (X)", "Drop Site News (X)"],
    sourceLinks: [
      { name: "Nayib Bukele (X)", url: "https://x.com/nayibbukele/status/2116635646739554417" },
      { name: "Drop Site News (X)", url: "https://x.com/dropsitenews/status/2116031975630782900" },
      { name: "Opak News : soldats salvadoriens en Haïti", url: "https://opak-news.haitialways.workers.dev/story/ntk-salvador-2000-soldats-2026-10-29" },
    ],
  },
  {
    id: "ntk-american-airlines-cap-haitien-2026-10-31",
    archived: true,
    tier: "need-to-know",
    topic: "commerce",
    publishedAt: "2026-10-31",
    publishedTime: "2026-11-02T01:20:00-05:00",
    isBreaking: true,
    breakingHours: 6,
    headline: {
      ht: "American Airlines retounen ann Ayiti ak yon ekipaj 100 % ayisyen",
      fr: "American Airlines revient en Haïti avec un équipage 100 % haïtien",
    },
    teaser: {
      ht: "Premye vòl Miami–Okap la te gen yon ekipaj ayisyen ki pale kreyòl, dirije pa kòmandan Oliver Jean. Okap se 100yèm destinasyon American nan rejyon an.",
      fr: "Le vol inaugural Miami–Cap-Haïtien était assuré par un équipage haïtien créolophone, mené par le commandant Oliver Jean. Cap-Haïtien est la 100e destination d’American dans la région.",
    },
    brief: {
      ht: "Mizajou 2 novanm : Dapre American Airlines, premye vòl Miami–Okap la te opere pa yon ekipaj 100 % ayisyen ki pale kreyòl, ak kòmandan Oliver Jean. Okap se 100yèm destinasyon konpayi an nan Karayib ak Amerik Latin. Apati dimanch 1e novanm, American Airlines ap fè yon vòl chak jou san eskal ant Miami ak Okap, an Boeing 737, dapre Caribbean Journal. Se Okap sèlman, pa Pòtoprens. Ministè Kominikasyon konfime nouvèl la nan yon nòt, dapre LSV Media.",
      fr: "Mise à jour du 2 novembre : Selon American Airlines, le vol inaugural Miami–Cap-Haïtien a été assuré par un équipage entièrement haïtien et créolophone, mené par le commandant Oliver Jean. Cap-Haïtien est la 100e destination de la compagnie dans les Caraïbes et en Amérique latine. Dès le dimanche 1er novembre, American Airlines assure un vol quotidien sans escale entre Miami et Cap-Haïtien, en Boeing 737, selon Caribbean Journal. Cap-Haïtien seulement, pas Port-au-Prince. Le ministère de la Communication a confirmé la nouvelle dans une note, selon LSV Media.",
    },
    body: {
      ht: "Mizajou 2 novanm : Nan yon kominike, American Airlines di li selebre lansman sèvis chak jou san eskal Miami (MIA)–Okap (CAP) a, ki retabli prezans li ann Ayiti. Premye vòl istorik la te opere pa yon ekipaj 100 % ayisyen ki pale kreyòl, dirije pa kòmandan Oliver Jean. Dapre konpayi an, Okap se 100yèm destinasyon li nan rezo Karayib ak Amerik Latin li, nan ane santnè li. Wout la sèvi ak Boeing 737, ak plis pase 90 koneksyon Ozetazini atravè Miami. « Koneksyon ant Etazini ak Ayiti a gen anpil sans, sitou nan Sid Florid », vis-prezidan Juan Carlos Liscano di.\n\nKesyon pou lektè yo : • Okap genyen, men kilè Pòtoprens ap jwenn vòl li yo ankò ? • Ki pri vwayajè yo ap peye pou yon sèl konpayi sou wout la ? • Èske ayewopò Okap pare pou plis vòl ?\n\nAnvan sa : Dapre Caribbean Journal, American Airlines ap relanse dimanch 1e novanm 2026 yon vòl chak jou san eskal ant ayewopò entènasyonal Miami ak Okap, an Boeing 737, ak plas premyè klas ak Wi-Fi gratis. Konpayi an ap make retou a ak yon seremoni koupe riban nan ayewopò Miami jou premye vòl la. Caribbean Journal presize se yon wout pou Okap sèlman, separe ak ansyen sèvis American te genyen pou Pòtoprens. American te fè premye vòl li sou Okap 2 oktòb 2014.\n\nDapre LSV Media sou X, Ministè Kominikasyon konfime nouvèl la nan yon nòt ki soti 30 oktòb 2026. Ministè a di manm ekipaj vòl sa a ap gen Ayisyen sèlman, e se yon ansyen direktè jeneral Ofis Nasyonal Avyasyon Sivil (OFNAC) ki pral pilote Boeing 737 la. Dapre @MCHaiti, repriz vòl yo se « fwi jefò Premye minis Alix Didier Fils-Aimé » pou modènize ayewopò Okap la. Gouvènman an di tou gen demach ki kòmanse ak lòt konpayi etranje pou vòl ant Ayiti, Ewòp ak lòt peyi nan Amerik la. Dapre LSV Media, se premye gwo konpayi avyon ameriken ki anonse l ap retounen depi otorite federal ameriken yo te entèdi vòl sou peyi a nan fen 2024.\n\nKesyon pou lektè yo : • Okap ouvè, men kilè Pòtoprens ap ka resevwa yon vòl ameriken ankò ? • Ki moun ki ka peye tikè a, e konbyen l ap koute ? • Si se « fwi jefò » gouvènman an, poukisa se yon konpayi prive ki anonse l depi jen ?",
      fr: "Mise à jour du 2 novembre : Dans un communiqué, American Airlines dit avoir célébré le lancement de son service quotidien sans escale Miami (MIA)–Cap-Haïtien (CAP), qui rétablit sa présence en Haïti. Le vol inaugural historique a été assuré par un équipage entièrement haïtien et créolophone, mené par le commandant Oliver Jean. Selon la compagnie, Cap-Haïtien est la 100e destination de son réseau Caraïbes et Amérique latine, l’année de son centenaire. La ligne est opérée en Boeing 737, avec plus de 90 correspondances aux États-Unis via Miami. « La connexion entre les États-Unis et Haïti a énormément de sens, surtout en Floride du Sud », a déclaré le vice-président Juan Carlos Liscano.\n\nQuestions aux lecteurs : • Le Cap gagne, mais quand Port-au-Prince retrouvera-t-il ses vols ? • Quel prix les voyageurs paieront-ils avec une seule compagnie sur la ligne ? • L’aéroport du Cap est-il prêt pour davantage de vols ?\n\nAuparavant : Selon Caribbean Journal, American Airlines relance le dimanche 1er novembre 2026 un vol quotidien sans escale entre l’aéroport international de Miami et Cap-Haïtien, en Boeing 737, avec cabine premium et Wi-Fi gratuit. La compagnie marquera ce retour par une cérémonie d’inauguration à l’aéroport de Miami le jour du premier vol. Caribbean Journal précise qu’il s’agit d’une liaison vers Cap-Haïtien uniquement, distincte de l’ancien service d’American vers Port-au-Prince. American avait effectué son premier vol vers Cap-Haïtien le 2 octobre 2014.\n\nSelon LSV Media sur X, le ministère de la Communication a confirmé la nouvelle dans une note datée du 30 octobre 2026. Le ministère indique que l’équipage de ce vol sera composé uniquement d’Haïtiens et qu’un ancien directeur général de l’Office national de l’aviation civile (OFNAC) pilotera le Boeing 737. Selon @MCHaiti, cette reprise est le « fruit des efforts du Premier ministre Alix Didier Fils-Aimé » pour moderniser l’aéroport du Cap-Haïtien. Le gouvernement affirme aussi que des démarches ont commencé avec d’autres compagnies étrangères pour des vols entre Haïti, l’Europe et d’autres pays des Amériques. Selon LSV Media, American est la première grande compagnie aérienne américaine à annoncer son retour depuis l’interdiction de vols imposée par les autorités fédérales américaines fin 2024.\n\nQuestions aux lecteurs : • Le Cap s’ouvre, mais quand Port-au-Prince reverra-t-il un vol américain ? • Qui pourra payer le billet, et à quel prix ? • Si c’est le « fruit des efforts » du gouvernement, pourquoi la compagnie l’annonçait-elle dès juin ?",
    },
    sources: ["American Airlines", "Caribbean Journal", "LSV Media / X", "Ministère de la Communication"],
    sourceLinks: [
      { name: "American Airlines (communiqué)", url: "https://news.aa.com/news/news-details/2026/American-Airlines-returns-to-Haiti-with-all-Haitian-crew-marking-100th-destination-served-in-the-region-NET-OTH-11/" },
      { name: "Caribbean Journal", url: "https://www.caribjournal.com/2026/10/22/american-airlines-haiti-cap-haitien-2/" },
      { name: "LSV Media / X", url: "https://x.com/LuckNews88/status/2116576549117771979" },
    ],
  },
  {
    id: "qh-eau-soldats-salvadoriens-2026-10-31",
    archived: true,
    tier: "quick-hit",
    topic: "security",
    publishedAt: "2026-10-31",
    publishedTime: "2026-10-31T14:45:00-04:00",
    headline: {
      ht: "Videyo : moun bay sòlda salvadoryen ak polisye ayisyen dlo",
      fr: "Vidéo : des Haïtiens offrent de l’eau à des soldats salvadoriens et à des policiers",
    },
    brief: {
      ht: "Yon videyo 27 segonn La Esquina News pibliye samdi 31 oktòb sou X montre, dapre mesaj la, sitwayen ayisyen k ap bay sòlda salvadoryen ak polisye ayisyen boutèy dlo. Ki kote ak ki lè sa te fèt poko verifye.",
      fr: "Une vidéo de 27 secondes publiée samedi 31 octobre sur X par La Esquina News montrerait, selon sa légende, des citoyens haïtiens offrant des bouteilles d’eau à des soldats salvadoriens et à des policiers haïtiens. Le lieu et la date du tournage ne sont pas vérifiés.",
    },
    body: {
      ht: "Samdi 31 oktòb 2026, a 8 è 28 maten (lè Ayiti), kont X La Esquina News (@Laesquinanews), yon medya ki pale panyòl, pibliye yon videyo 27 segonn ak lejann sa a : « Sitwayen ayisyen ofri sòlda salvadoryen ak polisye ayisyen k ap konbat gang ame yo boutèy dlo. » Videyo a gentan gen plis pase 63 000 vi.\n\nOpak News poko ka verifye ki kote ni ki lè videyo a te filme, ni nan ki operasyon. Sit El Contenido Viral, ki pale de menm sèn nan, di tou pa gen okenn enfòmasyon endepandan ki konfime detay sa yo. Se pou n pran prekosyon : nan dènye jou yo, AFP Factual ak Honduras Verifica demanti plizyè videyo ki t ap sikile kòm imaj sòlda salvadoryen ann Ayiti, men ki te soti an Ekwatè ak an Angola.\n\nSòlda salvadoryen yo ann Ayiti depi 22 oktòb pou chèche kat militè ki disparèt 18 oktòb, dapre AFP ak France 24.\n\nKesyon pou lektè yo : • Yon boutèy dlo se rekonesans oswa se espwa ? • Èske menm moun sa yo ap la toujou si operasyon an fè viktim sivil ? • Poukisa yon videyo konsa sikile pi vit sou kont etranje pase nan medya ayisyen ?",
      fr: "Samedi 31 octobre 2026, à 8 h 28 (heure d’Haïti), le compte X de La Esquina News (@Laesquinanews), un média hispanophone, a publié une vidéo de 27 secondes avec cette légende : « Des citoyens haïtiens offrent des bouteilles d’eau à des soldats salvadoriens et à des policiers haïtiens qui combattent les gangs armés. » La vidéo dépasse déjà les 63 000 vues.\n\nOpak News n’a pas pu vérifier le lieu, la date du tournage ni l’opération concernée. Le site El Contenido Viral, qui relaie la même scène, note lui aussi qu’aucune information indépendante ne confirme ces détails. Prudence : ces derniers jours, AFP Factual et Honduras Verifica ont démenti plusieurs vidéos présentées comme montrant des soldats salvadoriens en Haïti, mais tournées en Équateur et en Angola.\n\nLes soldats salvadoriens sont en Haïti depuis le 22 octobre pour rechercher quatre militaires portés disparus le 18 octobre, selon l’AFP et France 24.\n\nQuestions aux lecteurs : • Une bouteille d’eau, c’est de la gratitude ou de l’espoir ? • Ces mêmes gens applaudiront-ils encore si l’opération fait des victimes civiles ? • Pourquoi une telle vidéo circule-t-elle plus vite sur des comptes étrangers que dans les médias haïtiens ?",
    },
    sources: ["La Esquina News (X)", "El Contenido Viral", "AFP Factual"],
    sourceLinks: [
      { name: "La Esquina News (X)", url: "https://x.com/Laesquinanews/status/2116507473221759169" },
      { name: "El Contenido Viral", url: "https://elcontenidoviral.com/2026/10/31/un-gesto-del-pueblo-haitiano-hacia-unos-militares-llama-la-atencion-que-estaba-pasando-cuando-les-ofrecieron-agua/" },
      { name: "AFP Factual", url: "https://factual.afp.com/doc.afp.com.D4LH2KE" },
    ],
    video: {
      src: "/video/qh-eau-soldats-salvadoriens-2026-10-31.mp4",
      poster: "/video/qh-eau-soldats-salvadoriens-2026-10-31.jpg",
      credit: "Vidéo : La Esquina News",
      url: "https://x.com/Laesquinanews/status/2116507473221759169",
    },
  },
  {
    id: "sos-pnh-promotion-dessalines-2026-10-31",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    quiet: true,
    publishedAt: "2026-10-31",
    publishedTime: "2026-10-31T10:15:00-04:00",
    headline: {
      ht: "1 189 nouvo polisye antre nan PNH",
      fr: "Haïti : 1 189 nouveaux policiers rejoignent la PNH",
    },
    brief: {
      ht: "Vandredi 30 oktòb, 37yèm pwomosyon PNH a, « Dessalines », gradye Lekòl nasyonal polis la : 1 189 nouvo ajan, 947 gason ak 242 fanm, dapre Juno7 ak HaitiLibre. Se twazyèm gwoup pwogram P4000+ la.",
      fr: "Vendredi 30 octobre, la 37e promotion de la PNH, « Dessalines », a été graduée à l’École nationale de police : 1 189 nouveaux agents, 947 hommes et 242 femmes, selon Juno7 et HaitiLibre. C’est la troisième cohorte du programme P4000+.",
    },
    body: {
      ht: "Dapre Juno7 ak HaitiLibre, Polis Nasyonal d Ayiti (PNH) resevwa 1 189 nouvo ajan ki soti nan 37yèm pwomosyon li, yo batize « Dessalines » : 947 gason ak 242 fanm (20,3 %, dapre HaitiLibre). Se twazyèm gwoup pwogram P4000+ la. Seremoni gradyasyon an fèt vandredi 30 oktòb 2026 nan Lekòl nasyonal polis la, sou wout Frè, devan Premye minis Alix Didier Fils-Aimé, manm gouvènman an, reprezantan kò diplomatik la ak responsab fòs sekirite yo.\n\nPremye minis la, ki se prezidan Konsèy siperyè Polis nasyonal la (CSPN) tou, mande nouvo polisye yo sèvi ak onè, disiplin, kouraj ak entegrite. Li di gouvènman l vle retabli otorite Leta sou tout teritwa a, sitou nan ranfòse kapasite fòs sekirite yo, kontwòl fwontyè yo ak batay kont koripsyon ak trafik ilegal zam. « Yon Leta ki pa kontwole fwontyè l, se yon Leta ki an feblès », li deklare. Dapre de sous yo, li rann omaj ak polisye, militè ak ofisye ki tonbe nan misyon, epi li pale de kat militè salvadoryen ki disparèt Santo, nan komin Kwadebouke.\n\nDapre HaitiLibre, Anbasad Etazini di pwogram P-4000 la, ki finanse pa Etazini, deja fòme plis pase 3 200 nouvo polisye, e li vize plis pase 4 000 anvan prentan 2027.\n\nKesyon pou lektè yo : • 1 189 polisye anplis, men konbyen ki kite PNH a menm ane a ? • Ki kote yo pral voye yo, e ki moun ki pral di nou sa ? • Si yon Leta ki pa kontwole fwontyè l fèb, konbyen nan nouvo ajan sa yo k ap rive sou fwontyè a ?",
      fr: "Selon Juno7 et HaitiLibre, la Police nationale d’Haïti (PNH) accueille 1 189 nouveaux agents issus de sa 37e promotion, baptisée « Dessalines » : 947 hommes et 242 femmes (20,3 %, selon HaitiLibre). Il s’agit de la troisième cohorte du programme P4000+. La cérémonie de graduation s’est tenue le vendredi 30 octobre 2026 à l’École nationale de police, sur la route de Frères, en présence du Premier ministre Alix Didier Fils-Aimé, de membres du gouvernement, de représentants du corps diplomatique et de responsables des forces de sécurité.\n\nLe Premier ministre, également président du Conseil supérieur de la Police nationale (CSPN), a exhorté les nouveaux policiers à servir avec honneur, discipline, courage et intégrité. Il a réaffirmé la volonté de son administration de rétablir l’autorité de l’État sur tout le territoire, notamment par le renforcement des capacités des forces de sécurité, le contrôle des frontières et la lutte contre la corruption et le trafic illégal d’armes. « Yon Leta ki pa kontwole fwontyè l, se yon Leta ki an feblès », a-t-il déclaré. Selon les deux médias, il a rendu hommage aux policiers, militaires et officiers tombés en mission, et a évoqué les quatre militaires salvadoriens portés disparus à Santo, dans la commune de Croix-des-Bouquets.\n\nSelon HaitiLibre, l’ambassade des États-Unis indique que le programme P-4000, financé par Washington, a désormais formé plus de 3 200 nouveaux policiers et vise plus de 4 000 d’ici le printemps 2027.\n\nQuestions aux lecteurs : • 1 189 policiers de plus, mais combien ont quitté la PNH cette année ? • Où seront-ils déployés, et qui nous le dira ? • Si un État qui ne contrôle pas ses frontières est faible, combien de ces nouveaux agents iront à la frontière ?",
    },
    sources: ["Juno7", "HaitiLibre"],
    sourceLinks: [
      { name: "Juno7", url: "https://www.juno7.ht/haiti-pnh-1189-nouveaux-policiers-promotion-dessalines/" },
      { name: "HaitiLibre", url: "https://www.haitilibre.com/en/news-48786-haiti-37th-promotion-graduation-of-1-189-new-police-officers.html" },
    ],
  },
  {
    id: "qh-u15-haiti-irak-baku-2026-10-31",
    archived: true,
    tier: "quick-hit",
    topic: "sports",
    publishedAt: "2026-10-31",
    publishedTime: "2026-10-31T09:00:00-04:00",
    headline: {
      ht: "Mondyal U15 : Ti Grenadye yo kale Irak 3-0 nan final Divizyon B a Bakou",
      fr: "Mondial U15 : les petits Grenadiers battent l’Irak 3-0 en finale de la Division B à Bakou",
    },
    brief: {
      ht: "Vandredi 30 oktòb, Ayiti bat Irak 3-0 nan final Divizyon B Koup di Mond ak Festival U15 FIFA a, Bakou. John Laroque make 2 gòl, Noah Desrois 1. Kilè senyò yo ap swiv egzanp lan ?",
      fr: "Vendredi 30 octobre, Haïti a battu l’Irak 3-0 en finale de la Division B de la Coupe du monde et Festival U15 de la FIFA, à Bakou. John Laroque a marqué 2 buts, Noah Desrois 1. À quand les aînés ?",
    },
    body: {
      ht: "Seleksyon ayisyen mwens pase 15 an an bat Irak 3-0 vandredi 30 oktòb 2026 nan final Divizyon B premye edisyon Koup di Mond ak Festival U15 FIFA a, nan konplèks espòtif Hövsan, Bakou (Azèbaydjan), dapre FIFA ak Chokarella. Dapre Nago, ki site yon piblikasyon Caleb Jephte sou Instagram, John Laroque make de fwa e Noah Desrois yon fwa.\n\nDapre Chokarella, Ayiti fini tounwa a ak 6 viktwa ak 4 defèt nan 10 match, 25 gòl make, 13 resevwa, e li klase 61yèm nan klasman jeneral la, sou 191 federasyon. Viktwa 6-0 kont Timò Oryantal nan faz gwoup la se premye viktwa ofisyèl Ayiti, tout kategori konfonn, nan yon Koup di Mond FIFA. Ekip la, ki gen 14 jwè, antrene pa Kiben Raúl Valentín González Triana. Pa gen chanpyona nasyonal regilye nan kategori laj sa a.\n\nKesyon pou lektè yo : • Si timoun 14 an ka genyen nan Bakou san chanpyona nasyonal, kisa yo t ap fè ak yon vrè chanpyona ? • Ki lè FHF ap bay jèn yo yon teren lakay yo ? • Kilès nan jwè sa yo n ap wè ak Grenadye senyò yo nan 5 an ?",
      fr: "La sélection haïtienne des moins de 15 ans a battu l’Irak 3-0 le vendredi 30 octobre 2026, en finale de la Division B de la première édition de la Coupe du monde et Festival U15 de la FIFA, au complexe sportif de Hövsan, à Bakou (Azerbaïdjan), selon la FIFA et Chokarella. Selon Nago, citant une publication de Caleb Jephte sur Instagram, John Laroque a marqué deux fois et Noah Desrois une fois.\n\nSelon Chokarella, Haïti termine le tournoi avec 6 victoires et 4 défaites en 10 matchs, 25 buts marqués et 13 encaissés, et se classe 61e au classement général, sur 191 fédérations. La victoire 6-0 contre le Timor-Leste en phase de groupes constitue la première victoire officielle d’Haïti, toutes catégories confondues, dans une Coupe du monde de la FIFA. L’équipe de 14 joueurs est dirigée par le Cubain Raúl Valentín González Triana, dans un pays sans compétition nationale régulière dans cette catégorie d’âge.\n\nQuestions aux lecteurs : • Si des gamins de 14 ans gagnent à Bakou sans championnat national, que feraient-ils avec un vrai championnat ? • Quand la FHF offrira-t-elle aux jeunes un terrain chez eux ? • Lequel de ces joueurs verra-t-on chez les Grenadiers seniors dans 5 ans ?",
    },
    sources: ["FIFA", "Chokarella", "Nago"],
    sourceLinks: [
      { name: "FIFA", url: "https://www.fifa.com/en/match-centre/match/109/293575/294213/400026329" },
      { name: "Chokarella", url: "https://www.chokarella.com/2026/10/30/mondial-u15-haiti-remporte-la-finale-de-la-division-b-face-a-lirak/" },
      { name: "Nago", url: "https://nago.tv/news/mondial-u15-battue-par-la-croatie-et-le-qatar-haiti-reste-en-course-a-bakou" },
    ],
  },
  {
    id: "qh-gossip-pacte-national-2027-2026-10-31",
    archived: true,
    tier: "quick-hit",
    topic: "gossip",
    quiet: true,
    publishedAt: "2026-10-31",
    publishedTime: "2026-10-31T09:00:00-04:00",
    headline: {
      ht: "Siyatè Pak nasyonal la : eleksyon an 2027, pa gen lòt tranzisyon",
      fr: "Les signataires du Pacte national veulent des élections en 2027, pas une autre transition",
    },
    brief: {
      ht: "Reyini Petyonvil vandredi 30 oktòb, siyatè Pak nasyonal la mande eleksyon an 2027, yon kalandriye revize ki reyalis, plis sekirite ak lòd konstitisyonèl anvan fen 2027, dapre Réalité Info.",
      fr: "Réunis vendredi 30 octobre à Pétion-Ville, les signataires du Pacte national réclament des élections en 2027, un calendrier révisé réaliste, plus de sécurité et l’ordre constitutionnel avant fin 2027, selon Réalité Info.",
    },
    body: {
      ht: "Dapre Réalité Info, reprezantan Blòk majoritè ki siyen Pak nasyonal pou estabilite ak òganizasyon eleksyon yo reyini vandredi 30 oktòb 2026 Petyonvil. Yo rejte nenpòt lòt tranzisyon san dat klè pou retounen nan lòd konstitisyonèl, e yo vle tranzisyon an fini an 2027.\n\nYo mande CEP la pibliye vit yon kalandriye elektoral revize, detaye e reyalis, epi yo mande otorite yo ranfòse operasyon sekirite yo. Evens Jean di gwoup la sipòte eleksyon an jiyè 2027. Sekretè jeneral Asanble siyatè yo, Widlyne Desrivieres, pwopoze premye tou a fèt nan premye semès 2027, pou pwosesis la fini anvan fen ane a.\n\nKesyon pou lektè yo : • Konbyen kalandriye « reyalis » nou deja wè depi 2016 ? • Si tranzisyon an pa dwe dire, ki moun ki benefisye lè l dire ?",
      fr: "Selon Réalité Info, les représentants du Bloc majoritaire signataire du Pacte national pour la stabilité et l’organisation des élections se sont réunis le vendredi 30 octobre 2026 à Pétion-Ville. Ils rejettent toute nouvelle transition sans échéance claire de retour à l’ordre constitutionnel et veulent que la transition prenne fin en 2027.\n\nIls demandent au CEP de publier rapidement un calendrier électoral révisé, détaillé et réaliste, et aux autorités de renforcer les opérations de sécurité. Evens Jean a indiqué que le groupe soutient la tenue du scrutin en juillet 2027. La secrétaire générale de l’Assemblée des signataires, Widlyne Desrivieres, a proposé un premier tour au premier semestre 2027, pour achever le processus avant la fin de l’année.\n\nQuestions aux lecteurs : • Combien de calendriers « réalistes » a-t-on déjà vus depuis 2016 ? • Si la transition ne doit pas durer, à qui profite-t-elle quand elle dure ?",
    },
    sources: ["Réalité Info", "Opak News — Les Coulisses"],
    sourceLinks: [
      { name: "Réalité Info", url: "https://realiteinfo.com/haiti-les-signataires-du-pacte-national-reclament-des-elections-en-2027-et-rejettent-lidee-dune-autre-transition/" },
    ],
  },
    {
    id: "ntk-bercy-galaxie-operation-2026-10-31",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-10",
    publishedTime: "2026-11-10T15:51:10-05:00",
    isFollowUp: true,
    isUrgent: true,
    headline: {
      ht: "Akayè : majistra Wilner René pale de ijans imanitè, yon semèn apre atak yo",
      fr: "Arcahaie : le maire Wilner René parle d'urgence humanitaire, une semaine après les attaques",
    },
    teaser: {
      ht: "Lendi 9 novanm, li di Le Nouvelliste deplase yo poko jwenn èd otorite santral yo.",
      fr: "Joint par Le Nouvelliste lundi 9 novembre, il dit que les déplacés n'ont toujours pas d'aide des autorités centrales.",
    },
    brief: {
      ht: "Majistra Akayè a, Wilner René, di Le Nouvelliste komin nan an ijans imanitè. Li pale de mank asistans yon semèn apre vyolans 31 oktòb rive 2 novanm yo.",
      fr: "Le maire de l'Arcahaie, Wilner René, déclare au Nouvelliste que la commune est en situation d'urgence humanitaire. Il situe le manque d'assistance une semaine après les violences du 31 octobre au 2 novembre.",
    },
    body: {
      ht: "Majistra Akayè a, Wilner René, afime komin nan « an sitiyasyon ijans imanitè », li deklare nan Le Nouvelliste lendi 9 novanm. Yon semèn apre atak gwoup ame yo, fanmi deplase yo poko jwenn èd otorite santral yo, dapre majistra a.\n\nJounal la mete vyolans yo ant samdi 31 oktòb ak lendi 2 novanm 2026. Dapre René, aktivite yo rete paralize nan komin nan, e okenn enstitisyon poko pote sipò pou deplase entèn yo.\n\nPawòl sa yo konsène èd imanitè yon semèn apre atak yo. Kont randi Le Nouvelliste a pa bay okenn nouvo bilan moun ofisyèl.",
      fr: "Le maire de l'Arcahaie, Wilner René, affirme que la commune est « en situation d'urgence humanitaire », a-t-il déclaré au Nouvelliste lundi 9 novembre. Une semaine après les attaques de groupes armés, les familles déplacées n'ont toujours pas reçu d'aide des autorités centrales, selon le maire.\n\nLe journal situe les violences entre le samedi 31 octobre et le lundi 2 novembre 2026. D'après René, les activités restent paralysées dans la commune et aucune institution n'a encore apporté de soutien aux déplacés internes.\n\nCes propos portent sur l'aide humanitaire une semaine après les attaques. Le compte rendu du Nouvelliste ne fournit pas de nouveau bilan humain officiel.",
    },
    sources: ["Le Nouvelliste"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273725/arcahaie-est-en-situation-durgence-humanitaire-selon-wilner-rene" },
    ],
  },
  {
    id: "ntk-nrc-humanitaires-tues-2026-10-31",
    archived: true,
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-10-31",
    publishedTime: "2026-10-31T07:10:00-04:00",
    headline: {
      ht: "De travayè imanitè NRC touye Pòtoprens : ONU mande jistis",
      fr: "Deux humanitaires du NRC tués à Port-au-Prince : l’ONU réclame justice",
    },
    brief: {
      ht: "Bonaparte Février ak Richard Alexandre, de anplwaye ayisyen Konsèy Nòvejyen pou Refijye (NRC), te touye aswè 27 oktòb. Tom Fletcher (ONU) mande pou otè yo jije. Ki moun ki pwoteje moun k ap pwoteje lòt yo ?",
      fr: "Bonaparte Février et Richard Alexandre, deux employés haïtiens du Conseil norvégien pour les réfugiés (NRC), ont été tués le soir du 27 octobre. Tom Fletcher (ONU) exige que les auteurs soient jugés. Qui protège ceux qui protègent ?",
    },
    body: {
      ht: "Konsèy Nòvejyen pou Refijye (NRC) anonse lanmò de anplwaye ayisyen li yo, Bonaparte Février ak Richard Alexandre, ki te « touye brital » aswè 27 oktòb Pòtoprens. Nan yon deklarasyon 29 oktòb, sekretè jeneral NRC a, Jan Egeland, di yo te « manm kle » ekip imanitè a an Ayiti, de jèn gason ki te vle ede ak pwoteje kominote vilnerab yo.\n\nEgeland mande otorite ayisyen yo ak kominote entènasyonal la pwoteje sivil yo, respekte dwa entènasyonal e anpeche plis vyolans. « Ni sosyete ayisyen an ni rès mond lan pa ka tolere pou sivil, tankou travayè imanitè, mouri nan enpinite », li di. NRC di l ap kontinye misyon li an Ayiti.\n\nChèf sekou ijans ONU a, Tom Fletcher, di sou X li « choke » e li mande pou otè yo « jije devan jistis ». NRC pa bay katye a, sikonstans yo, ni idantite otè yo.\n\nKesyon pou lektè yo : • Si menm moun k ap pote sekou pa ka rantre lakay yo vivan, ki moun ki an sekirite ? • Konbyen deklarasyon « nou mande jistis » ki deja fini nan yon dosye ki janm louvri ? • Ki lè nou pral konnen kiyès ki touye yo ?",
      fr: "Le Conseil norvégien pour les réfugiés (NRC) a annoncé la mort de deux de ses employés haïtiens, Bonaparte Février et Richard Alexandre, « brutalement tués » le soir du 27 octobre à Port-au-Prince. Dans une déclaration du 29 octobre, le secrétaire général du NRC, Jan Egeland, les décrit comme des « membres clés » de l’équipe humanitaire en Haïti, deux jeunes hommes qui voulaient seulement aider et protéger des communautés vulnérables.\n\nEgeland appelle les autorités haïtiennes et la communauté internationale à protéger les civils, respecter le droit international et prévenir de nouvelles violences. « Ni la société haïtienne ni le monde extérieur ne peuvent tolérer que des civils, y compris des humanitaires, soient tués en toute impunité », dit-il. Le NRC affirme qu’il poursuivra sa mission en Haïti.\n\nLe chef des secours d’urgence de l’ONU, Tom Fletcher, s’est dit « horrifié » sur X et a exigé que les auteurs « soient traduits en justice ». Le NRC ne précise ni le quartier, ni les circonstances, ni l’identité des auteurs.\n\nQuestions aux lecteurs : • Si même ceux qui apportent l’aide ne rentrent pas vivants chez eux, qui est en sécurité ? • Combien de « nous exigeons justice » ont déjà fini dans un dossier jamais ouvert ? • Quand saura-t-on qui les a tués ?",
    },
    sources: ["NRC", "Haitian Globe / Rezonodwes", "EFE"],
    sourceLinks: [
      { name: "NRC", url: "https://www.nrc.no/news/2026/statement-on-killing-of-nrc-aid-workers-in-haiti" },
      { name: "Haitian Globe", url: "https://www.haitianglobe.com/article/ha-ti-deux-humanitaires-du-nrc-tu-s-port-au-prince-l-onu-r-clame-justice" },
    ],
  },
  {
    id: "ntk-detention-preventive-commissariats-2026-10-30",
    pinned: true,
    isUrgent: true,
    tier: "need-to-know",
    topic: "justice",
    publishedAt: "2026-10-30",
    publishedTime: "2026-10-30T21:35:00-04:00",
    headline: {
      ht: "Detansyon preventif : lè libète w se anba tab li negosye",
      fr: "Détention préventive : quand la liberté se négocie sous la table",
    },
    author: { fr: "Par Blaise Antoine Joseph (BAJ)", ht: "Pa Blaise Antoine Joseph (BAJ)" },
    brief: {
      ht: "82 % moun ki nan prizon an Ayiti poko janm jije, dapre BINUH. Pwoblèm nan se pa mank plas : se yon sistèm kote, dapre òganizasyon dwa moun, sa ki peye soti, sa ki pa peye ap tann. Konbyen libète vo devan yon jij ayisyen ?",
      fr: "82 % des détenus en Haïti n'ont jamais été jugés, selon le BINUH. Le problème n'est pas le manque de place : c'est un système où, dénoncent des organisations de droits humains, ceux qui paient sortent et ceux qui ne paient pas attendent. Combien vaut la liberté devant un juge haïtien ?",
    },
    body: {
      ht: "Dapre BINUH, 30 jen 2026, 82 % nan 7563 moun ki te nan prizon an Ayiti t ap tann jijman toujou. Chif sa a pa mande plis selil. Li akize yon sistèm.\n\nKonstitisyon an di yo dwe mennen yon moun yo arete devan yon jij nan 48 èdtan. Poutan, an 2025, RNDDH jwenn moun sere nan komisarya Dèlma 33 depi plizyè mwa, kèk depi plis pase yon ane, san okenn desizyon jistis. Soti komisarya Petyonvil rive Dèlma 33, pase pa pòs Vivy Mitchell, se menm istwa a.\n\nPoukisa ? Depi 2021, Ofis Pwoteksyon Sitwayen (OPC) te di detansyon preventif ki dire twòp la soti nan neglijans majistra yo ak yon sistèm koripsyon ki enstitisyonalize, san vrè kontwòl. Dapre rapò 2022 Depatman Deta ameriken an, kèk jij ak grefye te mande frè abitrè, e yo te inyore akize ki pa t peye. Le Nouvelliste te dekri majistra ki sèvi ak jistis la « tankou yon biznis », ak akize ki pito « negosye libète yo anba tab », menm lè yo inosan. An 2024, RNDDH rapòte anpil majistra pa t sètifye, sitou paske yo t ap « rançonner » moun ki bezwen jistis.\n\nAnpil Ayisyen di l ba : jij, pakè, grèf, avoka, chak moun ka fè yon dosye trennen jiskaske fanmi an « konprann ». Sa ki peye soti. Pòv yo ap tann. E lè Leta òganize odyans habeas corpus, tankou an janvye, gen prizonye ki soti apre plizyè ane pou ti zafè. Sa montre yo pa t dwe la pou tout tan sa a.\n\nTout moun ki nan detansyon konsidere inosan toutotan yon tribinal pa kondane yo. Opak pa akize okenn majistra an patikilye : se sistèm nan ki an kòz.\n\nKesyon pou lektè yo :\n• Konbyen libète vo devan yon jij ayisyen ?\n• Kiyès ki kontwole jij ki fè prizonye yo tann, e kilè CSPJ ap sanksyone ?\n• Poukisa delè 48 èdtan an respekte sèlman pou moun ki gen mwayen ?",
      fr: "Selon le BINUH, au 30 juin 2026, 82 % des 7563 personnes détenues dans les prisons haïtiennes attendaient encore d'être jugées. Ce chiffre ne réclame pas de nouvelles cellules. Il accuse un système.\n\nLa Constitution exige qu'une personne arrêtée soit présentée à un juge dans les 48 heures. Pourtant, en 2025, le RNDDH a trouvé au commissariat de Delmas 33 des détenus entassés depuis des mois, parfois plus d'un an, sans décision de justice. Du commissariat de Pétion-Ville à Delmas 33, en passant par le poste de Vivy Mitchell, c'est la même histoire.\n\nPourquoi ? Dès 2021, l'Office de protection du citoyen (OPC) attribuait la détention préventive prolongée au laxisme de magistrats et à un système de corruption institutionnalisé, sans réel contrôle. Selon le rapport 2022 du Département d'État américain, des juges et des greffiers exigeaient des frais arbitraires, et des prévenus qui ne payaient pas étaient ignorés. Le Nouvelliste a décrit des magistrats qui utilisent la justice « comme fonds de commerce », et des inculpés qui préfèrent « négocier leur liberté en dessous-de-table », même innocents. En 2024, le RNDDH rapportait que de nombreux magistrats n'avaient pas été certifiés, notamment pour « rançonnement des justiciables ».\n\nBeaucoup d'Haïtiens le disent tout bas : juges, parquets, greffes, avocats, chacun peut faire traîner un dossier jusqu'à ce que la famille « comprenne ». Ceux qui paient sortent. Les pauvres attendent. Et quand l'État organise des audiences d'habeas corpus, comme en janvier, des détenus en sortent au bout de plusieurs années pour des infractions mineures. C'est bien la preuve qu'ils n'avaient rien à faire là si longtemps.\n\nToute personne détenue est présumée innocente tant qu'un tribunal ne l'a pas condamnée. Opak n'accuse aucun magistrat en particulier : c'est le système qui est en cause.\n\nQuestions aux lecteurs :\n• Combien vaut la liberté devant un juge haïtien ?\n• Qui contrôle les juges qui font attendre les détenus, et quand le CSPJ sanctionnera-t-il ?\n• Pourquoi le délai de 48 heures n'est-il respecté que pour ceux qui ont les moyens ?",
    },
    sources: ["BINUH", "RNDDH", "OPC", "Le Nouvelliste", "Département d'État", "CARDH"],
    sourceLinks: [
      { name: "BINUH (rapport T2 2026)", url: "https://binuh.unmissions.org/sites/default/files/2026-08/Q2%202026%20-%20EN-V3.pdf" },
      { name: "RNDDH (commissariats, mai 2025)", url: "https://web.rnddh.org/wp-content/uploads/2025/05/5-RapM-Commissariat-et-Sous-Commissariat-30Mai2025.FR_.pdf" },
      { name: "RNDDH (justice 2023-2024)", url: "https://web.rnddh.org/wp-content/uploads/2024/11/7-Rap-Justice-2023-2024-Prisons-07Nov2024.FR_.pdf" },
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/198419/les-vraies-causes-de-la-detention-preventive-prolongee-entre-le-structurel-et-lintentionnel" },
      { name: "Département d'État (rapport 2022)", url: "https://insightcrime.org/wp-content/uploads/2023/05/415610_HAITI-2022-HUMAN-RIGHTS-REPORT.pdf" },
      { name: "Soumission EPU 2022 (cite l'OPC)", url: "https://upr-info.org/sites/default/files/documents/2022-01/js8_upr40_hti_e_main.pdf" },
      { name: "CARDH", url: "https://cardh.org/archives/5590" },
      { name: "Gouvernement d'Haïti", url: "https://communication.gouv.ht/communiques/le-gouvernement-engage-contre-la-detention-preventive-prolongee/" },
    ],
  },
  {
    id: "ntk-plan-electrification-2032-2026-10-30",
    archived: true,
    tier: "need-to-know",
    topic: "governance",
    publishedAt: "2026-10-30",
    publishedTime: "2026-10-30T19:45:00-04:00",
    headline: {
      ht: "Kouran: yon plan prèske 6 milya dola pou bay limyè nan peyi a jiska 2032",
      fr: "Électricité : un plan de près de 6 milliards de dollars pour éclairer Haïti d'ici 2032",
    },
    brief: {
      ht: "Minis TPTC Joseph Almathe Pierre Louis prezante yon fèy wout 2027-2032: 60% aksè ak kouran, 250000 nouvo branchman, 5,7 a 5,9 milya dola. Kiyès ki ap peye? Èske yo ap vann nou yon chato an Espay ankò?",
      fr: "Le ministre des TPTC Joseph Almathe Pierre Louis présente une feuille de route 2027-2032 : 60% d'accès à l'électricité, 250000 nouveaux branchements, 5,7 à 5,9 milliards de dollars. Qui paiera ? Nous vend-on encore un château en Espagne ?",
    },
    body: {
      ht: "Jedi 29 oktòb, nan otèl Kinam (Petyonvil), Ministè Travay Piblik (MTPTC), ansanm ak UTE Ministè Ekonomi ak Finans ak ANARSE, te òganize yon atelye nasyonal sou planifikasyon sektè elektrisite a. Minis Joseph Almathe Pierre Louis prezante Plan elektrifikasyon Ayiti a ak Fèy wout pou transfòme sektè a.\n\nFèy wout 2027-2032 la vize: 60% aksè ak kouran; 250000 nouvo branchman, ladan yo 150000 ak solisyon desantralize; pèt teknik ak komèsyal anba 35%; 200 megawat kouran fyab pou zòn metwopolitèn nan ak 80 megawat pou rès peyi a; fòmasyon 500 teknisyen ak kad.\n\nPlan an gen 6 rezo rejyonal, apeprè 50 mini-rezo pou prèske 100000 fwaye, ak sistèm solè endividyèl pou 227000 lòt fwaye. Envestisman yo estime ant 5,7 ak 5,9 milya dola ameriken. Sous yo pa di klèman ki jan lajan sa a ap jwenn.\n\nMinis la site de pwojè solè k ap konstwi: 13,4 MW Karakòl ak 4 MW Jakmèl (Monfleury).\n\nKesyon pou lektè yo:\n• Èske yo ap vann nou yon chato an Espay ankò?\n• Kiyès ki ap peye 6 milya dola sa yo, e kilè lajan an ap disponib?\n• Apre tout pwomès kouran nou tande deja, sa k ap fè plan sa a diferan, e ki wòl EDH ap jwe?",
      fr: "Le jeudi 29 octobre, à l'hôtel Kinam (Pétion-Ville), le ministère des Travaux publics (MTPTC), avec l'UTE du ministère de l'Économie et des Finances et l'ANARSE, a tenu un atelier national sur la planification du secteur de l'électricité. Le ministre Joseph Almathe Pierre Louis y a présenté le Plan d'électrification d'Haïti et la Feuille de route pour la transformation du secteur.\n\nLa feuille de route 2027-2032 vise : un taux d'accès de 60% ; 250000 nouveaux branchements, dont 150000 par des solutions décentralisées ; des pertes techniques et commerciales sous 35% ; 200 mégawatts de production fiable pour la région métropolitaine et 80 mégawatts pour le reste du pays ; la formation de 500 techniciens et cadres.\n\nLe plan prévoit 6 réseaux régionaux, environ 50 mini-réseaux pour près de 100000 ménages et des systèmes solaires individuels pour 227000 autres. Les investissements sont estimés entre 5,7 et 5,9 milliards de dollars américains. Les sources ne précisent pas clairement comment ils seront financés.\n\nLe ministre a cité deux centrales solaires en construction : 13,4 MW à Caracol et 4 MW à Jacmel (Monfleury).\n\nQuestions aux lecteurs :\n• Nous vend-on encore un château en Espagne ?\n• Qui paiera ces 6 milliards, et quand l'argent sera-t-il disponible ?\n• Après tant de promesses d'électricité déjà entendues, qu'est-ce qui rendra ce plan différent, et quel rôle jouera l'EDH ?",
    },
    sources: ["Le Nouvelliste", "HaitiLibre"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273445/almathe-pierre-louis-presente-un-plan-delectrification-de-pres-de-6-milliards-de-dollars" },
      { name: "HaitiLibre", url: "https://www.haitilibre.com/en/news-48778-development-of-the-electricity-sector-in-haiti.html" },
    ],
  },
  {
    id: "ntk-acra-tribunal-criminel-2026-10-30",
    archived: true,
    tier: "need-to-know",
    topic: "justice",
    publishedAt: "2026-10-30",
    publishedTime: "2026-10-30T19:46:00-04:00",
    headline: {
      ht: "Trafik dwòg: Lakou Apèl voye Marc Antoine ak Sébastien Acra devan tribinal kriminèl",
      fr: "Trafic de drogue : Marc Antoine et Sébastien Acra renvoyés devant le tribunal criminel",
    },
    brief: {
      ht: "26 oktòb, Lakou Apèl Pòtoprens konfime yo ap jije san jiri, ansanm ak Fedner Doliscar « Surpris » pou konplisite, epi li bay lòd arete yo. Èske lòd sa a ap egzekite? Èske jistis ap rive sou pwisan yo osi vit ke sou pòv yo?",
      fr: "Le 26 octobre, la cour d'appel de Port-au-Prince a confirmé leur procès sans jury, avec Fedner Doliscar « Surpris » pour complicité, et ordonné leur prise de corps. Cet ordre sera-t-il exécuté ? La justice frappera-t-elle les puissants aussi vite que les pauvres ?",
    },
    body: {
      ht: "Nan yon desizyon 26 oktòb 2026, Lakou Apèl Pòtoprens konfime Marc Antoine Acra, Sébastien François Xavier Acra ak Fedner Doliscar, alyas « Surpris », ap pase devan tribinal kriminèl ki chita san jiri. De premye yo akize de trafik ilisit dwòg; twazyèm nan pou konplisite.\n\nLakou a bay lòd « prise de corps » pou yo arete epi mete yo nan prizon si yo pa deja nan detansyon.\n\nTout moun sa yo konsidere inosan toutotan yon tribinal pa kondane yo.\n\nKesyon pou lektè yo:\n• Èske lòd arestasyon an ap egzekite vre, oswa l ap rete sou papye?\n• Èske pwosè san jiri sa a ap fèt vre, e kilè?\n• Èske jistis ap rive sou pwisan yo osi vit ke sou pòv yo?",
      fr: "Dans un arrêt rendu le 26 octobre 2026, la cour d'appel de Port-au-Prince a confirmé le renvoi de Marc Antoine Acra, Sébastien François Xavier Acra et Fedner Doliscar, alias « Surpris », devant le tribunal criminel siégeant sans assistance de jury. Les deux premiers sont poursuivis pour trafic illicite de drogue, le troisième pour complicité.\n\nLa cour a également ordonné leur prise de corps en vue de leur incarcération, s'ils ne se trouvent pas déjà en détention.\n\nLes personnes citées sont présumées innocentes jusqu'à une éventuelle condamnation.\n\nQuestions aux lecteurs :\n• L'ordre de prise de corps sera-t-il réellement exécuté, ou restera-t-il sur le papier ?\n• Ce procès sans jury aura-t-il vraiment lieu, et quand ?\n• La justice atteindra-t-elle les puissants aussi vite que les pauvres ?",
    },
    sources: ["Le Nouvelliste", "Ted'Actu"],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273430/trafic-de-drogue-la-cour-dappel-confirme-le-renvoi-de-marc-antoine-acra-sebastien-acra-et-fedner-doliscar-devant-le-tribunal-criminel" },
      { name: "Ted'Actu", url: "https://tedactu.com/2026/10/27/marc-antoine-acra-renvoye-devant-le-tribunal-criminel-pour-trafic-international-de-drogue/" },
    ],
  },
  {
    id: "qh-onm-deportations-usa-2026-10-30",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-30",
    publishedTime: "2026-10-30T17:55:00-04:00",
    headline: {
      ht: "Depòte Etazini : ONM di li debòde, yo anonse yon vòl chak semèn Okap",
      fr: "Expulsions des États-Unis : l’ONM se dit débordé, un vol par semaine annoncé au Cap",
    },
    brief: {
      ht: "Direktè ONM Jean Négot Bonheur Delva di anbasad ameriken an avèti biwo a pou l tann vòl chak semèn ak apeprè 250 moun oswa plis nan Kap Ayisyen. Ozetazini, defansè yo ap pouse pwojè lwa S.4814 pou pwolonje TPS ayisyen yo 3 lane.",
      fr: "Le directeur de l’ONM, Jean Négot Bonheur Delva, affirme que l’ambassade américaine a prévenu son office de vols hebdomadaires d’environ 250 personnes ou plus vers Cap-Haïtien. Aux États-Unis, des défenseurs poussent le projet de loi S.4814 pour prolonger le TPS des Haïtiens de 3 ans.",
    },
    body: {
      ht: "Dapre IAM International, Ofis Nasyonal Migrasyon (ONM) di li debòde akoz rit vòl depòtasyon Etazini yo, ki pase de apeprè yon vòl pa mwa a jiska yon vòl pa semèn depi fen TPS ayisyen yo an jiyè.\n\nDirektè jeneral ONM, Jean Négot Bonheur Delva, di jounalis nan ayewopò Kap Ayisyen anbasad ameriken an avèti biwo li pou l tann vòl chak semèn ak apeprè 250 migran ayisyen oswa plis. Dapre li, sa ka fè apeprè 1000 depòte pa mwa. Vòl yo ateri Okap paske FAA entèdi avyon ameriken ateri Pòtoprens akoz gang yo.\n\nDapre menm sous la, otorite ayisyen yo di yo pa t resevwa okenn avi ofisyèl sou nouvo kalandriye a, e kèk vòl rive ak plis pasaje pase sa ki te sou lis yo.\n\nOzetazini, 27 oktòb, yon ventèn defansè dwa imigran ak lidè relijye te manifeste devan biwo senatè Ashley Moody nan Palm Beach Gardens (Florid) pou mande l sipòte pwojè lwa S.4814, ki ta pwolonje TPS ayisyen yo pou 3 lane. Pwojè a bloke nan Sena a, dapre WLRN.",
      fr: "Selon IAM International, l’Office national de la migration (ONM) se dit débordé par le rythme des vols d’expulsion américains, passés d’environ un par mois à jusqu’à un par semaine depuis la fin du TPS des Haïtiens en juillet.\n\nLe directeur général de l’ONM, Jean Négot Bonheur Delva, a déclaré à des journalistes à l’aéroport de Cap-Haïtien que l’ambassade des États-Unis avait prévenu son office d’attendre des vols hebdomadaires d’environ 250 migrants haïtiens ou plus. Selon lui, cela pourrait représenter quelque 1000 expulsés par mois. Les vols atterrissent au Cap, la FAA interdisant aux avions américains de desservir Port-au-Prince en raison des gangs.\n\nSelon la même source, les autorités haïtiennes disent n’avoir reçu aucun avis officiel du nouveau calendrier, et certains vols sont arrivés avec plus de passagers que prévu sur les listes.\n\nAux États-Unis, le 27 octobre, une vingtaine de défenseurs des droits des immigrés et de responsables religieux ont manifesté devant le bureau de la sénatrice Ashley Moody à Palm Beach Gardens (Floride) pour lui demander de soutenir le projet de loi S.4814, qui prolongerait le TPS des Haïtiens de 3 ans. Le texte est bloqué au Sénat, selon WLRN.",
    },
    sources: ["IAM International", "WLRN"],
    sourceLinks: [
      { name: "IAM International", url: "https://news.iaminternationalmedia.org/overwhelmed-by-deportation-flights/" },
      { name: "WLRN", url: "https://www.wlrn.org/government-politics/2026-10-27/advocates-march-on-sen-moodys-office-in-palm-beach-county-demanding-3-year-haitian-tps-extension" },
    ],
  },
  {
    id: "qh-konekte-pou-bati-salon-2026-10-30",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-30",
    publishedTime: "2026-10-30T17:56:00-04:00",
    headline: {
      ht: "« Konekte pou Bati » : yon sant karyè vityèl pou jèn yo 14 novanm",
      fr: "« Konekte pou Bati » : un salon virtuel des métiers d’avenir le 14 novembre",
    },
    brief: {
      ht: "Haiti Tech Connect Podcast ap òganize « Konekte pou Bati », yon salon 100% anliy samdi 14 novanm, 10 è – 4 è, pou konekte jèn ayisyen ak ekspè dyaspora a epi fè « brain drain » tounen « brain gain ».",
      fr: "Le Haiti Tech Connect Podcast organise « Konekte pou Bati », un salon 100% en ligne le samedi 14 novembre, de 10 h à 16 h, pour relier les jeunes Haïtiens aux experts de la diaspora et transformer le « brain drain » en « brain gain ».",
    },
    body: {
      ht: "Haiti Tech Connect Podcast anonse « Konekte pou Bati : Salon metye lavni », yon evènman vityèl pou konekte jèn ayisyen ak nouvo chemen karyè, opòtinite pwofesyonèl ak ekspètiz dyaspora a, pandan l ap ranfòse komin yo.\n\nSalon an ap fèt samdi 14 novanm 2026, soti 10 è nan maten rive 4 è nan apremidi, 100% anliy. Kat aks: teknoloji nimerik ak ekonomi dijital; agrikilti ak agritech; diplomasi teritoryal ak tech sivik; teknoloji, sekirite ak rezilyans.\n\nGras ak mantora ak pataj eksperyans, inisyativ la vle ede fè « brain drain » tounen « brain gain ». Jèn, pwofesyonèl, otorite lokal, sosyete sivil, enstitisyon, biznis, lekòl ak ekspè dyaspora envite.\n\nEnfòmasyon ak enskripsyon : konektepoubati.com",
      fr: "Le Haiti Tech Connect Podcast annonce « Konekte pou Bati : le Salon des métiers d’avenir », un événement virtuel pour relier la jeunesse haïtienne aux nouveaux parcours professionnels, aux opportunités et à l’expertise de la diaspora, tout en renforçant les collectivités locales.\n\nLe salon aura lieu le samedi 14 novembre 2026, de 10 h à 16 h, 100% en ligne, autour de quatre axes : numérique et économie digitale ; agriculture et agritech ; diplomatie territoriale et tech civique ; technologie, sécurité et résilience.\n\nPar le mentorat et le partage d’expériences, l’initiative veut transformer le « brain drain » en « brain gain ». Jeunes, professionnels, autorités locales, société civile, institutions, entreprises, établissements de formation et experts de la diaspora sont invités.\n\nInformations et inscription : konektepoubati.com",
    },
    sources: ["HaitiLibre / iciHaiti", "Konekte pou Bati"],
    sourceLinks: [
      { name: "HaitiLibre / iciHaiti", url: "https://www.haitilibre.com/en/news-48783-haiti-news-zapping.html" },
      { name: "Konekte pou Bati", url: "https://konektepoubati.com" },
    ],
  },
  {
    id: "qh-desir-arrestation-2026-10-28",
    archived: true,
    tier: "quick-hit",
    topic: "moise-trials",
    publishedAt: "2026-10-29",
    publishedTime: "2026-10-31T13:50:00-04:00",
    isBreaking: true,
    breakingHours: 12,
    headline: {
      ht: "Asasina Jovenel : Yo remèt Me Gordon Phénil Désir bay FBI",
      fr: "Assassinat de Jovenel Moïse : Me Gordon Phénil Désir remis au FBI",
    },
    brief: {
      ht: "Mizajou 31 oktòb : Dapre Miami Herald, yo remèt Gordon Phénil Désir bay ajan FBI Pòtoprens samdi 31 oktòb, twa jou apre DCPJ te arete l. Jedi, nan pwosè Sanon an Miami, yon temwen kolonbyen di se li ki te konn kondui komando yo e achte manje pou yo. Anvan : Avoka a, lidè pati Ayiti 2054 ki gen lyen ak Christian Sanon, te arete mèkredi 28 oktòb nan yon makèt Petyonvil. Yo t ap chèche l depi jiyè 2021.",
      fr: "Mise à jour du 31 octobre : Selon le Miami Herald, Gordon Phénil Désir a été remis à des agents du FBI à Port-au-Prince samedi 31 octobre, trois jours après son arrestation par la DCPJ. Jeudi, au procès Sanon à Miami, un témoin colombien a affirmé qu’il conduisait les commandos et leur achetait à manger. Auparavant : L'avocat, dirigeant du parti Ayiti 2054 lié à Christian Sanon, a été arrêté le mercredi 28 octobre dans un supermarché de Pétion-Ville. Il était recherché depuis juillet 2021.",
    },
    body: {
      ht: "Mizajou 31 oktòb : Dapre Miami Herald (Jacqueline Charles), yo remèt avoka Gordon Phénil Désir, ansyen chèf pati Ayiti 2054 Christian Sanon an, bay ajan FBI Pòtoprens samdi 31 oktòb 2026, twa jou apre inite jidisyè Polis Nasyonal la (DCPJ) te arete l. Otorite ayisyen yo konfime arestasyon an. Dapre avoka l, sa te fèt devan biwo avoka l Petyonvil, akote konsila dominiken an — pa nan yon makèt jan lòt medya te di a.\n\nDapre jounal la, Désir te parèt nan tribinal an Ayiti senk fwa, e yon jij enstriksyon te enkilpe l ansanm ak 50 lòt moun, tankou vèv prezidan an, Martine Moïse ; li te pami moun ki te fè apèl kont akizasyon yo.\n\nJedi 29 oktòb, pandan Désir te nan yon selil polis Pòtoprens, ansyen sòlda kolonbyen Mario Palacios Palacios temwaye devan jiri a nan pwosè Christian Sanon an Miami. Dapre Miami Herald, li di Désir se te youn nan de moun pwòch Sanon ki te konn kondui Kolonbyen yo nan kapital la e achte manje pou yo. Li di lè gwoup la t ap travèse fwontyè a soti Repiblik Dominikèn, yo te di yo pou yo di, si yo kanpe yo, yo se misyonè k ap vizite « Pastor Gordon » — sa ki pa t vre, dapre Palacios : « Nou pa t misyonè ». Toujou dapre temwayaj li, lè yo rive Pòtoprens, yo te ale nan yon kay Gordon te genyen, kote James Solages ak Joseph Vincent t ap tann yo. Palacios plede koupab e li espere yon diminisyon santans.\n\nGordon Phénil Désir prezime inosan toutotan yon tribinal pa deklare l koupab. Pa gen okenn akizasyon federal kont li ki site nan atik la.\n\nKesyon pou lektè yo : • Si li te parèt senk fwa devan tribinal ayisyen an, poukisa se FBI ki pran l ? • Èske jistis ayisyen an ap janm jije pwòp dosye asasina prezidan l lakay li ? • Ki lòt moun yo site nan pwosè Miami an ki pa janm gen pwoblèm ak lajistis an Ayiti ?\n\nAnvan : Avoka Phénil Gordon Désir, lidè pati Ayiti 2054, pati ki gen lyen ak Christian Sanon, te arete mèkredi 28 oktòb nan yon makèt Petyonvil.\n\nYo t ap chèche l depi jiyè 2021: yo sispèk li te ede prepare asasina prezidan Jovenel Moïse e li te bay sipò lojistik. Li nan gadavi lapolis.\n\nKèk medya pale de yon posib transfè l Ozetazini, men enfòmasyon sa a poko konfime.\n\nPhénil Gordon Désir prezime inosan toutotan yon tribinal pa deklare l koupab.",
      fr: "Mise à jour du 31 octobre : Selon le Miami Herald (Jacqueline Charles), l’avocat Gordon Phénil Désir, ancien dirigeant d’Ayiti 2054, le parti de Christian Sanon, a été remis à des agents du FBI à Port-au-Prince le samedi 31 octobre 2026, trois jours après son arrestation par l’unité judiciaire de la Police nationale (DCPJ). Les autorités haïtiennes ont confirmé l’arrestation. Selon son avocat, elle a eu lieu devant son cabinet à Pétion-Ville, à côté du consulat dominicain — et non dans un supermarché, comme l’avaient rapporté d’autres médias.\n\nSelon le quotidien, Désir avait comparu à cinq reprises devant la justice haïtienne, et un juge d’instruction l’avait inculpé avec 50 autres personnes, dont la veuve du président, Martine Moïse ; il faisait partie de ceux qui avaient fait appel.\n\nJeudi 29 octobre, alors que Désir se trouvait dans une cellule de police à Port-au-Prince, l’ex-soldat colombien Mario Palacios Palacios a témoigné devant le jury au procès de Christian Sanon à Miami. Selon le Miami Herald, il a affirmé que Désir était l’un des deux proches de Sanon qui transportaient les Colombiens dans la capitale et leur achetaient à manger. Il a dit qu’en passant de la République dominicaine en Haïti, on leur avait demandé de se présenter, en cas de contrôle, comme des missionnaires religieux en visite chez « Pastor Gordon » — ce qui était faux, selon Palacios : « Nous n’étions pas des missionnaires ». Toujours selon son témoignage, à leur arrivée à Port-au-Prince, ils se sont rendus dans une maison appartenant à Gordon, où les attendaient James Solages et Joseph Vincent. Palacios a plaidé coupable et espère une réduction de peine.\n\nGordon Phénil Désir est présumé innocent tant qu’un tribunal ne l’a pas reconnu coupable. L’article ne fait état d’aucune inculpation fédérale à son encontre.\n\nQuestions aux lecteurs : • S’il a comparu cinq fois devant la justice haïtienne, pourquoi est-ce le FBI qui le récupère ? • La justice haïtienne jugera-t-elle un jour chez elle l’assassinat de son propre président ? • Qui d’autre, cité au procès de Miami, n’a jamais été inquiété en Haïti ?\n\nAuparavant : L'avocat Phénil Gordon Désir, dirigeant du parti Ayiti 2054, la formation liée à Christian Sanon, a été arrêté le mercredi 28 octobre dans un supermarché de Pétion-Ville.\n\nIl était recherché depuis juillet 2021, soupçonné d'avoir participé à la préparation de l'assassinat du président Jovenel Moïse et d'y avoir apporté un soutien logistique. Il est en garde à vue.\n\nCertains médias évoquent un possible transfert vers les États-Unis, mais cette information n'est pas confirmée.\n\nPhénil Gordon Désir est présumé innocent tant qu'un tribunal ne l'a pas reconnu coupable.",
    },
    sources: ["Miami Herald", "Le Nouvelliste", "Nago TV"],
    sourceLinks: [
      { name: "Miami Herald", url: "https://www.miamiherald.com/news/nation-world/world/americas/haiti/article317863139.html" },
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273399/arrestation-de-phenil-gordon-desir-dans-lenquete-sur-lassassinat-de-jovenel-moise" },
      { name: "Nago TV", url: "https://nago.tv/news/assassinat-de-jovenel-moise-l-avocat-phenil-gordon-desir-arrete-a-petion-ville" },
    ],
  },
  {
    id: "moise-trials-2026-10-29",
    archived: true,
    isFollowUp: true,
    tier: "quick-hit",
    topic: "moise-trials",
    publishedAt: "2026-10-29",
    publishedTime: "2026-11-05T13:35:11-05:00",
    headline: {
      ht: "Pwosè Sanon : yon zanmi k ap kolabore di li ta konnen plan an se te touye",
      fr: "Procès Sanon : un ami coopérant affirme qu'il aurait su que le plan était de tuer",
    },
    teaser: {
      ht: "Frederick Bergmann temwaye mèkredi Miami. Miami Herald ekri se premye fwa nan pwosè sa a yon temwayaj mare Sanon dirèkteman ak pwojè asasina a. Sanon konteste akizasyon yo epi li rete prezime inosan.",
      fr: "Bergmann, témoin coopérant, a parlé mercredi à Miami. Le Herald écrit que c'est, dans ce procès, le premier récit qui lie directement Sanon au projet d'assassinat. Sanon conteste et reste présumé innocent.",
    },
    brief: {
      ht: "Mizajou 5 novanm. Dapre Miami Herald, Frederick Bergmann, zanmi Christian Emmanuel Sanon depi lontan e temwen k ap kolabore, di mèkredi devan juri Miami ke Sanon ta konnen, nan jou anvan 7 jiyè 2021, plan kont Jovenel Moïse te chanje: se pa t yon kidnape ankò, se te touye. Sanon konteste akizasyon yo epi li rete prezime inosan.",
      fr: "Mise à jour du 5 novembre. Selon le Miami Herald, Frederick Bergmann, ami de longue date de Christian Emmanuel Sanon et témoin coopérant, a affirmé mercredi devant le jury de Miami que Sanon aurait su, dans les jours avant le 7 juillet 2021, que le plan contre Jovenel Moïse était passé d'un enlèvement à un assassinat. Sanon conteste les accusations et reste présumé innocent.",
    },
    body: {
      ht: "Mizajou 5 novanm. Dapre Miami Herald (Jacqueline Charles), Frederick Bergmann, 67 an, temwaye mèkredi 4 novanm devan juri federal Miami nan pwosè Christian Emmanuel Sanon. Se yon pastè Florid yo akize, pami lòt bagay, de konplo pou kidnape oswa touye yon moun andeyò Etazini, anrapò ak asasina prezidan Jovenel Moïse 7 jiyè 2021.\n\nBergmann di se zanmi Sanon li ye depi 17 an. Li ap fè 9 an prizon apre li te plede koupab : li te sipòte yon ekspedisyon militè kont yon nasyon zanmi, epi li te vyole lwa sou ekspòtasyon lè li te fè pase 20 vès balistik pou ekip kolonbyen an. Temwayaj li a fè pati yon akò kolaborasyon. Pawòl ki swiv yo se sa Miami Herald atribiye Bergmann.\n\nDapre Herald la, de jou apre asasina a, Bergmann rele Sanon Pòtoprens. Li di li te pwopoze l avèti laprès, Depatman Jistis oswa FBI, epi priye pou Moïse ak ansyen sòlda kolonbyen ki te mouri yo. Bergmann di Sanon ta refize, epi sou Moïse li ta di : « I don't pray for the rat » (« Mwen pa priye pou rat la »). Bergmann di tou Sanon ta di li « vann nanm li bay dyab la », epi li ta nonmen Windelle Coq Thélot kòm moun li ta « voye » James Solages ba li san li pa jwenn pòs.\n\nToujou dapre Herald la, mesaj tèks ak apèl nan jou anvan 7 jiyè yo montre, selon Bergmann, Sanon pa t totalman deyò jan plan an t ap chanje. Bergmann site yon tèks 30 jen (« The rat will go with his group »), yon mesaj 3 jiyè sou 3000 dola pou bay kolonbyen yo manje, ak yon apèl 5 jiyè kote Solages ta di l, dapre sa l rakonte, « sa pral fèt nan klinik la, pa nan lopital la ». Bergmann di klinik la se rezidans Moïse, lopital la se Palè nasyonal la. Li di li repete pawòl sa yo bay Sanon. Sanon ta konfime yo, men li ta plenn paske yo kite l pou kont li.\n\nLè avoka defans lan, Humberto Dominguez, poze l kesyon, Bergmann rekonèt, toujou dapre Herald la, Solages pa janm di l klèman ki plan an te ye, e li pa t souvan poze Sanon kesyon. Miami Herald ekri temwayaj sa a se, nan pwosè sa a, premye fwa yon rakont mare Sanon dirèkteman ak pwojè asasina a. Jiskaprezan, jounal la ekri, sa yo te prezante a te mete l sitou nan diskisyon sou yon kaptire ak yon ekzil Moïse.\n\nSanon konteste akizasyon yo epi li rete prezime inosan. Pawòl Bergmann se deklarasyon yon temwen, se pa desizyon tribinal. Moun temwayaj la nonmen yo rete prezime inosan toutotan yon tribinal pa kondane yo pou bagay sa yo.\n\nKesyon pou lektè yo :\n\n• Bergmann se yon temwen k ap kolabore, epi li admèt Solages pa janm di l klèman ki plan an te ye. Kisa ki klè nan temwayaj la, e kisa ki rete fason li konprann bagay yo ?\n\n• Herald la ekri, jiskaprezan, yo te mete Sanon sitou nan diskisyon sou yon kaptire ak yon ekzil. Ki lòt temwen, apa Bergmann, ki devan juri a pale de yon plan pou touye ?\n\nAnvan sa, mizajou 3 novanm. Dapre Miami Herald (Jacqueline Charles), Mario Antonio Palacios Palacios, sèl kòmando kolonbyen ki te chape anba lapolis apre atak 7 jiyè 2021 an, temwaye lendi 2 novanm. Palacios, ki te plede koupab, rakonte apre yon nwit nan lari li kwaze Gordon Phénil Désir Petyonvil. Désir ta mennen l lakay li epi ta pase yon apèl. « Mwen kwè li t ap rele senatè a, John », Palacios di. De polisye ta vin chèche l pou mennen l nan baz Vitel'homme Innocent, chèf gang Kraze Baryè. Ansyen senatè John Joël Joseph ta rejwenn li yon semèn apre. Palacios di li te peye Innocent ak lajan li te pran nan chanm prezidan an. Tou de te kouri ale Jamayik pa bato.\n\nMenm jou a, Désir parèt pou premye fwa devan jij majistra Enjoliqué A. Lett, Miami, pou 3 akizasyon, pami yo konplo pou touye oswa kidnape yon moun deyò Etazini. Pèn maksimòm lan se prizon a vi. Odyans lan te ranvwaye pou madi 3 novanm apremidi. Pwokirè yo te mande pou yo kenbe l nan prizon. Désir, Innocent ak John Joël Joseph prezime inosan nan volet sa a toutotan yon tribinal pa kondane yo.\n\n27 ak 28 oktòb, ansyen senatè John Joël Joseph, ki deja kondane a prizon a vi epi ki se yon temwen k ap kolabore, di se Joseph Félix Badio ki t ap dirije konvwa mèsenè kolonbyen yo pou Pèlerin 5. Dapre Miami Herald ak Haïti Liberté, NAGO site, nan premye pwosè a an avril li te nonmen James Solages. Li di tou Badio te rele yon jounalis ak yon responsab dwa moun maten 7 jiyè 2021 pou anonse asasina a. Badio prezime inosan, e pa gen dat pwosè ki fikse pou li.\n\nPwosè federal Sanon an louvri 28 septanm 2026. Martine Moïse se te premye temwen an, 29 septanm. 13 ak 14 oktòb, ajan FBI Elizabeth Wieder prezante mesaj sou difikilte pou peye mèsenè kolonbyen yo jiska 6 jiyè 2021, ak senaryo pou kiyès ki t ap ranplase Moïse. Okòmansman se Sanon yo te konsidere, apre sa yo mete l sou kote akoz sitwayènte ameriken li. Yon lòt senaryo te mete jij Wendelle Coq Thélot kòm prezidan ak Joseph Lambert kòm Premye minis. Non ki parèt nan mesaj sa yo se pa desizyon tribinal. Defans lan ap eseye separe Sanon de pati vyolan yo.\n\n21 oktòb, analis FBI Kaitlin Dayton montre juri a yon videyo 7 minit Sanon te resevwa 3 me 2021. Akizasyon an prezante l kòm yon gid pou ranvèse yon gouvènman, dapre Miami Herald. 23 oktòb, John Joël Joseph di li te òganize yon rankont ant Sanon ak Pierre Espérance (RNDDH), dapre Juno7. Temwayaj sa a pou kont li pa montre Espérance te gen yon wòl nan asasina a.\n\nFen septanm, yo te transfere 18 akize soti Ayiti pou Miami, tankou Joseph Félix Badio ak 17 ansyen sòlda kolonbyen.\n\nAnn Ayiti, nan yon lèt 22 oktòb 2026, komisè gouvènman an bò Kou Apèl Pòtoprens lan, Claude Jean, fè minis Jistis Patrick Pélissier konnen jij Cyprien Jn F. Denis Pierre, ki responsab konpleman ankèt Kou a te bay lòd fè 13 oktòb 2025, poko remèt rapò li.",
      fr: "Mise à jour du 5 novembre. Selon le Miami Herald (Jacqueline Charles), Frederick Bergmann, 67 ans, a témoigné mercredi 4 novembre devant le jury fédéral de Miami dans le procès de Christian Emmanuel Sanon. Le pasteur de Floride est accusé notamment de complot pour enlever ou tuer une personne hors des États-Unis, en lien avec l'assassinat du président Jovenel Moïse le 7 juillet 2021.\n\nBergmann se dit ami de Sanon depuis 17 ans. Il purge une peine de 9 ans après avoir plaidé coupable d'avoir soutenu une expédition militaire contre une nation amie et d'avoir violé les lois sur l'exportation en faisant passer 20 gilets balistiques destinés à l'équipe colombienne. Son témoignage s'inscrit dans un accord de coopération. Ce qui suit est ce que le Miami Herald attribue à Bergmann.\n\nSelon le Herald, deux jours après l'assassinat, Bergmann a appelé Sanon à Port-au-Prince. Il dit lui avoir proposé d'alerter la presse, le département de la Justice ou le FBI, et de prier pour Moïse et pour les anciens soldats colombiens tués. Bergmann affirme que Sanon aurait refusé et aurait dit, à propos de Moïse : « I don't pray for the rat » (« Je ne prie pas pour le rat »). Bergmann affirme aussi que Sanon aurait déclaré avoir « vendu son âme au diable » et aurait nommé Windelle Coq Thélot comme la personne à qui il aurait « envoyé » James Solages sans obtenir de poste.\n\nToujours selon le Herald, des textos et des appels des jours précédant le 7 juillet montrent, d'après Bergmann, que Sanon n'aurait pas été totalement tenu à l'écart de l'évolution du plan. Bergmann cite un texto du 30 juin (« The rat will go with his group »), un message du 3 juillet sur 3000 dollars pour nourrir les Colombiens, et un appel du 5 juillet où Solages lui aurait dit, selon son récit, que « ça va se passer à la clinique, pas à l'hôpital ». Bergmann dit que la clinique désignait la résidence de Moïse et l'hôpital le Palais national. Il dit avoir rapporté ces propos à Sanon, qui les aurait confirmés tout en se plaignant d'avoir été laissé seul.\n\nSous le contre-interrogatoire de l'avocat de la défense, Humberto Dominguez, Bergmann a reconnu, toujours selon le Herald, que Solages ne lui avait jamais dit explicitement quel était le plan, et qu'il avait rarement posé de questions à Sanon. Le Miami Herald écrit que ce témoignage est, dans ce procès, la première fois qu'un récit lie directement Sanon au projet d'assassinat. Jusqu'ici, écrit le journal, les éléments présentés le plaçaient surtout dans des discussions sur une capture et un exil de Moïse.\n\nSanon conteste les accusations et reste présumé innocent. Les propos de Bergmann sont des déclarations d'un témoin, pas une décision du tribunal. Les personnes citées dans ce témoignage qui n'ont pas été condamnées pour ces faits restent présumées innocentes.\n\nQuestions aux lecteurs :\n\n• Bergmann est un témoin coopérant, et il a reconnu à la barre que Solages ne lui avait jamais dit explicitement le plan. Qu'est-ce qui est établi dans ce témoignage, et qu'est-ce qui reste son interprétation ?\n\n• Le Herald écrit que, jusqu'ici, les éléments du procès plaçaient surtout Sanon dans des discussions sur une capture et un exil. Quel autre témoin, à part Bergmann, a décrit devant ce jury un plan pour tuer ?\n\nAuparavant, mise à jour du 3 novembre. Selon le Miami Herald (Jacqueline Charles), Mario Antonio Palacios Palacios, le seul commando colombien à avoir échappé à la police après l'attaque du 7 juillet 2021, a témoigné le lundi 2 novembre. Palacios, qui a plaidé coupable, raconte qu'après une nuit dans la rue il a croisé Gordon Phénil Désir à Pétion-Ville. Désir l'aurait conduit chez lui et aurait passé un appel. « Je crois qu'il appelait le sénateur, John », a dit Palacios. Deux policiers seraient venus le chercher pour l'emmener à la base de Vitel'homme Innocent, chef du gang Kraze Baryè. L'ex-sénateur John Joël Joseph l'aurait rejoint une semaine plus tard. Palacios affirme avoir payé Innocent avec de l'argent pris dans la chambre du président. Les deux hommes ont fui en Jamaïque par bateau.\n\nLe même jour, Désir a comparu pour la première fois devant la juge magistrate Enjoliqué A. Lett, à Miami, pour 3 chefs d'accusation, dont le complot visant à tuer ou enlever une personne hors des États-Unis. La peine maximale est la prison à vie. L'audience a été renvoyée au mardi 3 novembre après-midi. Le parquet demandait sa détention provisoire. Désir, Innocent et John Joël Joseph sont présumés innocents dans ce volet tant qu'un tribunal ne les a pas condamnés.\n\nLes 27 et 28 octobre, l'ex-sénateur John Joël Joseph, déjà condamné à la prison à vie et témoin coopérant, a affirmé que Joseph Félix Badio dirigeait le convoi des mercenaires colombiens vers Pèlerin 5. Selon le Miami Herald et Haïti Liberté cités par NAGO, au premier procès en avril il avait désigné James Solages. Il a aussi déclaré que Badio a appelé un journaliste et un responsable des droits humains le matin du 7 juillet 2021 pour annoncer l'assassinat. Badio est présumé innocent et aucune date de procès n'a été fixée pour lui.\n\nLe procès fédéral de Sanon s'est ouvert le 28 septembre 2026. Martine Moïse a été le premier témoin, le 29 septembre. Les 13 et 14 octobre, l'agente du FBI Elizabeth Wieder a présenté des messages sur les difficultés à payer les mercenaires colombiens jusqu'au 6 juillet 2021, et sur des scénarios de succession. Sanon a d'abord été envisagé, puis écarté en raison de sa citoyenneté américaine. Un autre scénario plaçait la juge Wendelle Coq Thélot à la présidence et Joseph Lambert à la primature. Les noms cités dans ces messages ne sont pas des constats judiciaires. La défense cherche à dissocier Sanon des volets violents.\n\nLe 21 octobre, l'analyste du FBI Kaitlin Dayton a montré aux jurés une vidéo de 7 minutes reçue par Sanon le 3 mai 2021, présentée par l'accusation comme un guide pour renverser un gouvernement (Miami Herald). Le 23 octobre, John Joël Joseph a déclaré avoir organisé une rencontre entre Sanon et Pierre Espérance (RNDDH), selon Juno7. Ce témoignage n'établit pas à lui seul un rôle d'Espérance dans l'assassinat.\n\nFin septembre, 18 accusés ont été transférés d'Haïti vers Miami, dont Joseph Félix Badio et 17 anciens soldats colombiens.\n\nEn Haïti, dans une lettre du 22 octobre 2026, le commissaire du gouvernement près la Cour d'appel de Port-au-Prince, Claude Jean, a signalé au ministre de la Justice Patrick Pélissier que le juge Cyprien Jn F. Denis Pierre, chargé du complément d'enquête ordonné le 13 octobre 2025, n'avait toujours pas remis son rapport.",
    },
    sources: ["Miami Herald (Jacqueline Charles)", "NAGO", "Juno7", "Le National", "InfoNation", "RHINEWS"],
    sourceLinks: [
      { name: "Miami Herald (Bergmann, 5 novembre)", url: "https://www.miamiherald.com/news/nation-world/world/americas/haiti/article317933378.html" },
      { name: "Miami Herald (Palacios)", url: "https://www.miamiherald.com/news/nation-world/world/americas/haiti/article317889555.html" },
      { name: "Miami Herald", url: "https://www.miamiherald.com/news/local/community/miami-dade/article317722865.html" },
      { name: "NAGO", url: "https://nago.tv/en/news/selon-john-joel-joseph-badio-etait-a-la-tete-du-convoi-des-mercenaires" },
    ],
  },
  {
    id: "qh-caonabo-richard-alexandre-2026-10-29",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-29",
    publishedTime: "2026-10-29T11:15:00-04:00",
    headline: {
      ht: "Jounalis kiltirèl Richard Alexandre, alias Caonabo, mouri anba bal nan Dèlma 83",
      fr: "Le journaliste culturel Richard Alexandre, dit Caonabo, tué par balles à Delmas 83",
    },
    brief: {
      ht: "Ansyen kolaboratè Ticket Magazine, 38 an, li te pran bal nan Dèlma 83 epi li mouri lopital nan nwit 27 pou 28 oktòb.",
      fr: "Ancien collaborateur de Ticket Magazine, âgé de 38 ans, il a été blessé par balles à Delmas 83 et a succombé à l'hôpital dans la nuit du 27 au 28 octobre.",
    },
    body: {
      ht: "Richard Alexandre, yo te konnen sou non Caonabo, se te yon jounalis kiltirèl 38 an ki te konn ekri pou Ticket Magazine. Li te pran bal nan Dèlma 83, epi li mouri lopital nan nwit 27 pou 28 oktòb, dapre Le Nouvelliste.",
      fr: "Richard Alexandre, connu sous le nom de Caonabo, était un journaliste culturel de 38 ans, ancien collaborateur de Ticket Magazine. Atteint par balles à Delmas 83, il a succombé à ses blessures à l'hôpital dans la nuit du 27 au 28 octobre, selon Le Nouvelliste.",
    },
    sources: [
      "Le Nouvelliste",
    ],
  },
  {
    id: "ntk-grand-sud-downpours-2026-10-28",
    archived: true,
    tier: "need-to-know",
    topic: "society",
    publishedAt: "2026-10-29",
    publishedTime: "2026-10-29T15:25:00-04:00",
    isBreaking: true,
    breakingHours: 24,
    headline: {
      ht: "Lapli : bilan nasyonal la monte 8 moun mouri, 40 blese ak 5 disparèt",
      fr: "Pluies : le bilan national passe à 8 morts, 40 blessés et 5 disparus",
    },
    brief: {
      ht: "Mizajou : Dapre DGPC jedi a, 8 moun mouri, 40 blese ak 5 disparèt (tout 5 yo nan Sid). 11884 fanmi afekte ak 91 kay detwi nan 27 komin.",
      fr: "Mise à jour : Selon la DGPC jeudi, 8 morts, 40 blessés et 5 disparus (tous dans le Sud). 11884 familles affectées et 91 maisons détruites dans 27 communes.",
    },
    body: {
      ht: "Mizajou 29 oktòb, 3:25 PM : Jedi a, Direksyon Pwoteksyon Sivil (DGPC) bay yon bilan nasyonal 8 moun mouri, 40 blese ak 5 disparèt. Tout 5 disparèt yo nan Sid. 11884 fanmi afekte, 91 kay detwi e plis pase 7100 kay inonde nan 27 komin nan Lwès, Sid, Nip, Grandans ak Nòdwès. Plis pase 300 fanmi te nan apeprè 15 abri, ki pral fèmen anvan 1ye novanm pou lekòl ka rekòmanse. Alèt oranj yo te leve madi.\n\nPremye bilan : Mizajou 29 oktòb : bilan gwo lapli yo monte omwen 5 moun mouri ak 10 disparèt nan Sid ak Sidès.\n\nNan Sid, Pwoteksyon sivil rapòte 2 moun mouri, 9 disparèt e plis pase 7000 kay inonde ant 24 ak 27 oktòb. Dlo a anvayi Lasalin (Jeremi) ak Baradè.\n\nNan Sidès, 3 moun mouri ak 1 disparèt nan Kòt-de-Fè ak Tiyòt. Lapli yo fè dega tou nan jaden ak sou wout yo.\n\nDapre Flash Update OCHA 28 oktòb la, Nip se depatman ki pi frape: 1920 fanmi afekte, 1767 kay inonde e 48 ti kay detwi. Nan Gommiers (Grandans), 630 kay inonde. DGPC mete tout Grand Sid nan vijilans oranj.",
      fr: "Mise à jour du 29 octobre, 15 h 25 : Jeudi, la Direction de la protection civile (DGPC) a publié un bilan national de 8 morts, 40 blessés et 5 disparus, tous les disparus étant dans le Sud. 11884 familles sont affectées, 91 maisons détruites et plus de 7100 inondées dans 27 communes de l'Ouest, du Sud, des Nippes, de la Grand'Anse et du Nord-Ouest. Plus de 300 familles étaient hébergées dans une quinzaine d'abris, qui fermeront avant le 1er novembre pour permettre la reprise des classes. Les alertes orange ont été levées mardi.\n\nPremier bilan : le bilan des fortes pluies s'élève à au moins 5 morts et 10 disparus dans le Sud et le Sud-Est.\n\nDans le Sud, la Protection civile fait état de 2 morts, 9 disparus et plus de 7000 maisons inondées du 24 au 27 octobre. Les eaux ont envahi Lasaline (Jérémie) et Barradères.\n\nDans le Sud-Est, on compte 3 morts et 1 disparu à Côtes-de-Fer et Thiotte. Les pluies ont aussi endommagé des cultures et des routes.\n\nSelon le Flash Update d'OCHA du 28 octobre, les Nippes sont le département le plus touché: 1920 familles affectées, 1767 maisons inondées et 48 petites maisons détruites. À Gommiers (Grand'Anse), 630 maisons sont inondées. La DGPC place tout le Grand Sud en vigilance orange.",
    },
    sources: [
      "Le Nouvelliste",
      "DGPC / Protection civile",
      "OCHA / ReliefWeb",
      "EFE / Infobae",
      "Noticias SIN",
    ],
  },
  {
    id: "ntk-barrau-candidature-2026-10-28",
    archived: true,
    tier: "need-to-know",
    topic: "governance",
    publishedAt: "2026-10-30",
    publishedTime: "2026-10-30T09:50:00-04:00",
    isBreaking: true,
    breakingHours: 6,
    headline: {
      ht: "Olivier Barrau depoze kandidati li pou prezidans lan",
      fr: "Olivier Barrau dépose sa candidature à la présidence",
    },
    brief: {
      ht: "Yon biznisman lanse tèt li nan batay pou prezidans lan. San bri, san spektak, li antre nan kous la an silans. Èske se te plan an depi okòmansman ? Kisa nou panse ?",
      fr: "Un homme d’affaires se lance dans la course à la présidence. Sans bruit, sans spectacle, il entre discrètement dans la course. Était-ce le plan depuis le début ? Qu’en pensez-vous ?",
    },
    body: {
      ht: "Biznisman Olivier Barrau depoze dosye kandidati li pou eleksyon prezidansyèl la nan Biwo Elektoral Depatmantal (BED) Lwès 1 a mèkredi 28 oktòb 2026, 24 èdtan apre li te enskri sou platfòm anliy CEP a 27 oktòb. Li kandida sou bannyè Mouvman Travayis Ayisyen (MTH).\n\nDepo a fèt nan kalm. Barrau te vini ak avoka li yo, chèf pati a, sekretè jeneral pati a ak sekirite li. De lòt kandida MTH te la tou.\n\nPami priyorite li site yo: sekirite, edikasyon, travay, batay kont koripsyon, epi mete Leta nan sèvis sitwayen yo.\n\nDepoze yon dosye pa vle di li valide: CEP la dwe egzamine l toujou. Premye tou eleksyon yo fikse pou 18 jiyè 2027.",
      fr: "L’homme d’affaires Olivier Barrau a déposé son dossier de candidature à la présidence au Bureau électoral départemental (BED) de l’Ouest 1 le mercredi 28 octobre 2026, 24 heures après s’être inscrit sur la plateforme en ligne du CEP le 27 octobre. Il est candidat sous la bannière du Mouvement travailliste haïtien (MTH).\n\nLe dépôt s’est fait dans le calme. Barrau était accompagné de ses avocats, du chef du parti, du secrétaire général du parti et de sa sécurité. Deux autres candidats du MTH étaient également présents.\n\nParmi les priorités qu’il cite : la sécurité, l’éducation, l’emploi, la lutte contre la corruption et un État au service des citoyens.\n\nLe dépôt ne vaut pas validation : le CEP doit encore examiner le dossier. Le premier tour est fixé au 18 juillet 2027.",
    },
    video: {
      src: "/video/barrau-2026-10-28.mp4",
      poster: "/video/barrau-2026-10-28.jpg",
      credit: "Vidéo : @JRRescape / X",
      url: "https://x.com/JRRescape/status/2115923281790349484",
    },
    sources: [
      "Le Nouvelliste",
      "Caramel Haïti",
      "Lakay Info 509",
      "Le Concret Info",
    ],
    sourceLinks: [
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273408/olivier-barrau-depose-officiellement-sa-candidature-a-la-presidence" },
      { name: "Caramel Haïti", url: "https://caramelhaiti.com/presidentielle-olivier-barrau-depose-sa-candidature/" },
      { name: "Lakay Info 509", url: "https://lakayinfo509.com/presidentielle-2026-lhomme-daffaires-olivier-barrau-sinscrit-sur-la-plateforme-du-cep-et-devoile-ses-priorites/" },
      { name: "Le Concret Info", url: "https://www.leconcretinfo.com/2026/10/28/elections-olivier-barrau-depose-ses-pieces-de-candidature-a-la-presidence/" },
    ],
  },
  {
    id: "ntk-cep-elections-juillet-2027-2026-10-29",
    archived: true,
    tier: "need-to-know",
    topic: "governance",
    publishedAt: "2026-10-29",
    publishedTime: "2026-10-30T04:45:00-04:00",
    isBreaking: true,
    breakingHours: 12,
    headline: {
      ht: "Eleksyon : BED Lwès 1 deklare dosye kandidati Muscadin pa resevab",
      fr: "Présidentielle : la candidature de Muscadin jugée irrecevable",
    },
    brief: {
      ht: "Mizajou 29 oktòb : Biwo Elektoral Depatmantal (BED) Lwès 1 nan Petyon-Vil deklare dosye kandidati Jean Ernest Muscadin pou prezidansyèl la pa resevab, dapre atik 155 dekrè elektoral la. Lèt demisyon li kòm komisè gouvènman Miragwàn pa t ladan l. Premye tou a pa p fèt 13 desanm ankò, men 18 jiyè 2027. Mwens pase 900000 moun sou 6,5 milyon ki gen kat idantite enskri pou kounye a.",
      fr: "Mise à jour du 29 octobre : le Bureau électoral départemental (BED) de l’Ouest 1, à Pétion-Ville, a déclaré irrecevable le dossier de candidature de Jean Ernest Muscadin à la présidentielle, en vertu de l’article 155 du décret électoral. Sa lettre de démission de commissaire du gouvernement de Miragoâne manquait. Le premier tour ne se tiendra plus le 13 décembre mais le 18 juillet 2027. Moins de 900000 des 6,5 millions de détenteurs de carte d'identité se sont inscrits à ce jour.",
    },
    body: {
      ht: "Mizajou 29 oktòb : Biwo Elektoral Depatmantal (BED) Lwès 1 nan Petyon-Vil deklare dosye kandidati Jean Ernest Muscadin pou prezidansyèl la pa resevab, dapre atik 155 dekrè elektoral la. Muscadin, kandida pati Fòs Chanjman Nasyonal, te vini ak plizyè santèn patizan sou Wout Frè.\n\nSa ki manke nan dosye a se lèt demisyon li kòm komisè gouvènman Miragwàn. RL News ak Juno7 di tou dènye deklarasyon fiskal 2025-2026 la pa t ladan l. Dapre Le Facteur Haïti, yon jij de pè fè yon rapò sou dokiman li te genyen yo.\n\nDapre Presslakay, avoka Muscadin yo ta konteste desizyon an. Dapre Juno7, poko gen okenn dokiman ofisyèl sou desizyon an, e yo poko konnen si li ka konplete dosye a oswa konteste desizyon an.\n\nJedi 29 oktòb, Inyon Ewopeyèn di li sipòte eleksyon yo e yon vòt ki kredib e transparan esansyèl pou enstitisyon ki lejitim.\n\nKonsèy Elektoral Pwovizwa (CEP) a anonse yon nouvo kalandriye elektoral. Premye tou eleksyon yo, ki te prevwa pou 13 desanm 2026, voye pou 18 jiyè 2027.\n\nDezyèm tou a ak eleksyon lokal yo ap fèt 4 oktòb 2027.\n\nRetadman an rive pandan enskripsyon an ap mache dousman: mwens pase 900000 moun sou 6,5 milyon ki gen kat idantite e ki gen dwa vote enskri pou kounye a. Ensekirite a ak deplasman popilasyon an kontinye fè travay CEP la pi difisil.",
      fr: "Mise à jour du 29 octobre : le Bureau électoral départemental (BED) de l’Ouest 1, à Pétion-Ville, a déclaré irrecevable le dossier de candidature de Jean Ernest Muscadin à la présidentielle, en vertu de l’article 155 du décret électoral. Candidat du parti Fòs Chanjman Nasyonal, Muscadin s’était présenté avec plusieurs centaines de partisans à la route de Frères.\n\nPièce manquante : sa lettre de démission de commissaire du gouvernement de Miragoâne. RL News et Juno7 citent aussi l’absence du quitus fiscal (déclaration définitive) 2025-2026. Selon Le Facteur Haïti, un juge de paix a dressé un constat des documents en sa possession.\n\nSelon Presslakay, les avocats de M. Muscadin contesteraient la décision. Selon Juno7, aucun document officiel de décision n’a encore été publié, et on ignore s’il pourra régulariser son dossier ou contester la décision.\n\nLe jeudi 29 octobre, l’Union européenne a dit soutenir la tenue des élections et jugé essentiel un scrutin crédible et transparent pour des institutions légitimes.\n\nLe Conseil électoral provisoire (CEP) a annoncé un nouveau calendrier électoral. Le premier tour des élections, prévu le 13 décembre 2026, est reporté au 18 juillet 2027.\n\nLe second tour et les élections locales auront lieu le 4 octobre 2027.\n\nCe report intervient alors que les inscriptions avancent lentement: moins de 900000 des 6,5 millions de détenteurs de carte d'identité éligibles se sont inscrits à ce jour. L'insécurité et les déplacements de population continuent de compliquer le travail du CEP.",
    },
    sources: [
      "Al Jazeera",
      "Xinhua",
      "Le Nouvelliste",
      "Le Facteur Haïti",
      "Juno7",
      "RL News",
      "Presslakay",
    ],
    photo: { src: "/img/muscadin-bed-2026-10-29.jpg", alt: "Jean Ernest Muscadin entouré de partisans au BED de l’Ouest 1, 29 octobre 2026", credit: "Photo : Le Facteur Haïti", url: "https://lefacteurhaiti.com/haiti-elections-la-candidature-de-jean-ernest-muscadin-refusee-sa-lettre-de-demission-exigee/" },
    sourceLinks: [
      { name: "Le Nouvelliste (Muscadin)", url: "https://lenouvelliste.com/article/273433/presidentielle-la-candidature-de-muscadin-jugee-irrecevable" },
      { name: "Le Facteur Haïti", url: "https://lefacteurhaiti.com/haiti-elections-la-candidature-de-jean-ernest-muscadin-refusee-sa-lettre-de-demission-exigee/" },
      { name: "Juno7", url: "https://www.juno7.ht/jean-ernest-muscadin-dossier-candidature-irrecevable/" },
      { name: "RL News", url: "https://rlnewshaiti.com/presidentielle-la-candidature-de-jean-ernest-muscadin-declaree-irrecevable-au-bed-de-louest-i/" },
      { name: "Presslakay", url: "https://presslakay.net/?p=68256" },
      { name: "Le Nouvelliste (UE)", url: "https://lenouvelliste.com/article/273426/sanctions-lunion-europeenne-appelle-a-preserver-la-credibilite-des-elections" }],
  },
  {
    id: "ntk-salvador-2000-soldats-2026-10-29",
    archived: true,
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-10-29",
    publishedTime: "2026-11-06T10:27:10-05:00",
    isFollowUp: true,
    readMoreLink: {
      fr: { before: "Pour lire notre article sur le commandement des soldats salvadoriens, ", link: "cliquez ici", after: ".", href: "/story/ntk-salvadoriens-commandement-2026-11-03" },
      ht: { before: "Pou li atik nou sou kòmandman sòlda salvadoryen yo, ", link: "klike la a", after: ".", href: "/ht/story/ntk-salvadoriens-commandement-2026-11-03" },
    },
    headline: {
      ht: "Salvadò : machin ki boule jwenn Santo, 4 teknisyen yo toujou disparèt",
      fr: "Salvador : véhicule calciné retrouvé à Santo, les 4 techniciens toujours introuvables",
    },
    teaser: {
      ht: "Dapre La 1ère / AP, machin nan te jwenn Santo ; mesye yo toujou manke. Lanmò Sanjou repete bay AP yo mouri, san prèv.",
      fr: "Selon La 1ère / AP, le véhicule a été trouvé à Santo ; les hommes manquent toujours. Lanmò Sanjou répète à l'AP qu'ils sont morts, sans preuve.",
    },
    brief: {
      ht: "Mizajou 6 novanm : Dapre La 1ère (Yasmina Yacou, AP), machin kat teknisyen salvadoryen yo te jwenn boule Santo ; mesye yo toujou manke. La 1ère mete dekouvèt la lendi 2 novanm, Al Jazeera mete l madi. Lanmò Sanjou repete bay AP yo mouri, san prèv. Mizajou 3 novanm, 5 h 30 : Dapre Europa Press, pòtpawòl ONU Stéphane Dujarric di resepsyon lèt Lanmò Sanjou a pa vle di ONU dakò ak sa l di ni li rekonèt li. Li di tou \"gran majorite\" sòlda salvadoryen yo pa deplwaye anba GSF. Mizajou 2 novanm, 20 h 30 : Dapre Associated Press (AP), Wilson Joseph, ki rele Lanmò Sanjou, konfime li ekri sekretè jeneral ONU pou mande yon delegasyon pou dyalòg. Li di AP 4 teknisyen salvadoryen yo mouri, san li pa bay prèv. Mizajou 2 novanm : Rezo Nòdwès di li resevwa kopi yon lèt 1ye novanm, sou antèt « Biwo Kominikasyon » 400 Mawozo, ki atribye a Wilson Joseph, alias Lanmò Sanjou, ki mande António Guterres yon medyasyon ; Rezo Nòdwès poze kesyon sou kiyès ki ekri l, e otantisite l pa verifye. Semafor, ki site Axios, di kontenjan salvadoryen an ta ka double oswa triple. Mizajou 1ye novanm, aswè : Dapre AyiboPost, ki site yon demi douzèn moun, gang yo ap mete barikad nan Santo, Lillavois, Kwadèmisyon ak lòt zòn, yo fòse jèn gason antre nan gang, fòse moun mache, e yo di moun k ap kouri yo ap peye pou retounen. Se sèlman anviwon 200 nan plis pase 2000 sòlda salvadoryen yo ki pral anba kòmandman GSF, dapre AyiboPost. Mizajou 1ye novanm : Dapre HaitiLibre, Wilson Joseph, alias Lanmò Sanjou, yo prezante kòm chèf gang 400 Mawozo, pibliye yon videyo kote li pwopoze pale ak Bukele, pandan l toujou nye responsablite nan disparisyon kat sòlda salvadoryen yo. Dapre MIREX ak Diario Libre, yon bato ak anviwon 525 tòn ekipman pou kontenjan Bangladesh GSF la kite Haina. Mizajou 31 oktòb, 8:35 PM : Devan jounalis nan yon fèt Halloween Mar-a-Lago, Donald Trump konfime sou kamera li te pale ak Bukele : « Li di m li gen yon gwo pwoblèm ak Ayiti... Yo touye kèk nan moun li yo. Mwen di l : “Se ou k ap dirije peyi w. Ou dwe fè sa ou gen pou fè.” » Okenn lanmò salvadoryen poko konfime. Anvan sa, se sèlman Axios, ak sous anonim, ki te rapòte apèl la. Mizajou 31 oktòb, aswè : Yon avyon Hercules C-130H Fòs Ayewospasyal Kolonbi (FAC 1005) transpòte sòlda ak ekipman salvadoryen soti San Salvador rive Pòtoprens, nan kad koalisyon A3C Etazini ap dirije kont katèl yo, dapre Infobae ki site El Tiempo. Salvadò ta ka monte jiska anviwon 2500 sòlda. Etazini di li transpòte plis pase 600 tòn ekipman soti Bangladèch pou GSF la. Mizajou 31 oktòb, aprè midi : Sòlda salvadoryen yo monte yon baz Tabar, toupre anbasad Etazini, dapre Infobae ki site EFE. Sòlda tchadyen GSF la patwouye Pòtoprens maten an, dapre jounalis Rosemon. Mizajou 31 oktòb : Premye patwouy sòlda salvadoryen yo vandredi 30 oktòb nan Tabar ak Klèsin, toupre ayewopò a, ak machin blende ak elikoptè. Kèk moun bat bravo. Men misyon, kòmandman ak dire yo toujou pa klè. Mizajou 30 oktòb : Yon akò bilateral Ayiti apwouve mèkredi 28 oktòb otorize fòs salvadoryen an opere nan peyi a. Dapre Axios, Donald Trump di Bukele « Fè sa ou gen pou fè » pandan yon apèl madi. Dapre AFP, omwen 2000 sòlda salvadoryen deja rive an Ayiti. Nan yon mesaj an kreyòl ak yon videyo sou X, 29 oktòb, Bukele pale dirèkteman ak pèp ayisyen an. Bukele voye yo chèche kat teknisyen salvadoryen ki disparèt depi anbiskad 18 oktòb la epi goumen ak gang yo. Li di kò Ayiti remèt yo pa koresponn ak moun ki disparèt yo.",
      fr: "Mise à jour du 6 novembre : Selon La 1ère (Yasmina Yacou, AP), le véhicule des quatre techniciens salvadoriens a été retrouvé calciné à Santo ; les hommes manquent toujours. La 1ère situe la découverte au lundi 2 novembre, Al Jazeera au mardi. Lanmò Sanjou répète à l'AP qu'ils sont morts, sans preuve. Mise à jour du 3 novembre, 5 h 30 : Selon Europa Press, le porte-parole de l'ONU Stéphane Dujarric affirme que la réception de la lettre de Lanmò Sanjou ne vaut ni soutien à son contenu ni reconnaissance de son auteur. Il précise que « la grande majorité » des soldats salvadoriens ne sont pas déployés sous la GSF. Mise à jour du 2 novembre, 20 h 30 : Selon l'Associated Press (AP), Wilson Joseph, dit Lanmò Sanjou, confirme avoir écrit au secrétaire général de l'ONU pour demander une délégation de dialogue. Il affirme à l'AP que les 4 techniciens salvadoriens sont morts, sans fournir de preuve. Mise à jour du 2 novembre : Rezo Nòdwès dit avoir reçu copie d’une lettre datée du 1er novembre, sous l’en-tête du « Bureau Communication » des 400 Mawozo, attribuée à Wilson Joseph, alias Lanmò Sanjou, demandant une médiation à António Guterres ; Rezo Nòdwès s’interroge sur son auteur réel, et son authenticité n’est pas vérifiée. Selon Semafor, citant Axios, le contingent salvadorien pourrait doubler ou tripler. Mise à jour du 1er novembre, soir : Selon AyiboPost, qui cite une demi-douzaine de personnes, les gangs érigent des barricades à Santo, Lillavois, Croix-des-Missions et ailleurs, recrutent de force des jeunes, contraignent des habitants à manifester et préviennent ceux qui fuient qu’ils devront payer pour revenir. À peine 200 des plus de 2000 soldats salvadoriens seront placés sous le commandement de la GSF, selon AyiboPost. Mise à jour du 1er novembre : Selon HaitiLibre, Wilson Joseph, alias Lanmò Sanjou, présenté comme le chef du gang 400 Mawozo, a diffusé une vidéo proposant des discussions avec Bukele, tout en continuant de nier toute responsabilité dans la disparition des quatre militaires salvadoriens. Selon le MIREX et Diario Libre, un navire chargé d’environ 525 tonnes d’équipement pour le contingent bangladais de la GSF a quitté Haina. Mise à jour du 31 octobre, 20 h 35 : Devant des journalistes lors d’une fête d’Halloween à Mar-a-Lago, Donald Trump a confirmé face caméra avoir parlé à Bukele : « Il m’a dit qu’il avait un gros problème avec Haïti... Ils ont tué certains des siens. Je lui ai dit : “C’est vous qui dirigez votre pays. Vous devez faire ce que vous avez à faire.” » Aucune mort salvadorienne n’est confirmée. Jusqu’ici, seul Axios, sur la foi de sources anonymes, avait rapporté l’appel. Mise à jour du 31 octobre, soir : Un Hercules C-130H de la Force aérospatiale colombienne (FAC 1005) a transporté des militaires et du matériel salvadoriens de San Salvador à Port-au-Prince, dans le cadre de la coalition anticartels A3C impulsée par Washington, selon Infobae citant El Tiempo. Le Salvador envisagerait d’aller jusqu’à environ 2500 soldats. Les États-Unis disent avoir acheminé plus de 600 tonnes d’équipements depuis le Bangladesh pour la FRG/GSF. Mise à jour du 31 octobre, après-midi : Les militaires salvadoriens ont installé une base à Tabarre, près de l’ambassade des États-Unis, selon Infobae citant EFE. Des soldats tchadiens de la FRG/GSF ont patrouillé Port-au-Prince ce matin, selon le journaliste Rosemon. Mise à jour du 31 octobre : Premières patrouilles salvadoriennes vendredi 30 octobre à Tabarre et Clercine, près de l’aéroport, avec blindés et hélicoptère. Des passants ont applaudi. Mais mission, commandement et durée restent flous. Mise à jour du 30 octobre : Un accord bilatéral approuvé par Haïti le mercredi 28 octobre autorise la force salvadorienne à opérer dans le pays. Selon Axios, Donald Trump a dit à Bukele « Fais ce que tu as à faire » lors d’un appel mardi. Selon l’AFP, au moins 2000 militaires salvadoriens sont déjà arrivés en Haïti. Dans un message en créole accompagné d’une vidéo publié sur X le 29 octobre, Bukele s’adresse directement au peuple haïtien. Bukele envoie ses soldats retrouver quatre techniciens salvadoriens disparus depuis l'embuscade du 18 octobre et combattre les gangs. Il affirme que les corps remis par Haïti ne correspondent pas aux disparus.",
    },
    body: {
      ht: "Mizajou 6 novanm : Dapre La 1ère (Yasmina Yacou, AP), machin kat teknisyen ayewonotik salvadoryen ki disparèt depi anbiskad 18 oktòb la te jwenn boule lendi 2 novanm nan sektè Santo, Kwadebouke. Polis ayisyen, ak militè salvadoryen ak fòs entènasyonal anti-gang, pa jwenn okenn tras disparu yo. Al Jazeera (5 novanm, ak AP) mete dekouvèt la madi, e li di PNH pibliye foto rès kamyon ki boule a nan yon operasyon konjwen PNH / GSF / twoup salvadoryen. De dat yo pa menm ; Opak News pibliye yo jan yo ye.\n\nToujou dapre La 1ère / AP, Wilson Joseph, ke yo rele Lanmò Sanjou, chèf swadizan 400 Mawozo, di kat mesye yo mouri, san li pa bay prèv. Otorite ayisyen yo pale de yon kidnapin ; gouvènman salvadoryen an kwè yo vivan toujou. ONU konfime li resevwa yon lèt ki pote siyati li pou mande dyalòg, san rekonesans otè a. Eleman sa yo te deja an pati sou Opak News ; nouvote prensipal la se machin ki boule a dokimante Santo ak absans total kat mesye yo toujou.\n\nKesyon pou lektè yo :\n\n• Machin jwenn, mesye disparèt : kiyès k ap mennen rechèch la vre, e kiyès k ap rann kont chak aswè ?\n\n• Yon deklarasyon chèf gang san prèv, èske li ka ranplase yon ankèt ?\n\nMizajou 3 novanm, 5 h 30 : Dapre ajans espanyòl Europa Press, ONU konfime li resevwa lèt Wilson Joseph, ke yo rele Lanmò Sanjou, chèf gang 400 Mawozo. Men pòtpawòl sekretè jeneral la, Stéphane Dujarric, presize resepsyon lèt la pa vle di ONU sipòte sa ki ladan l, ni li rekonèt otè a, ni li pran yon pozisyon fòmèl.\n\nDapre menm sous la, Dujarric di \"gran majorite\" sòlda salvadoryen yo pa deplwaye nan kad Fòs pou Siprime Gang yo (GSF) ONU apiye a. Kidonk yo pa antre nan manda Biwo sipò ONU ann Ayiti. NAGO, ki site AlterPresse, rapòte menm bagay la: sòlda sa yo pa anba mekanis responsablite GSF la. ONU di tou li enkyete pou sivil yo e li mande pou tout operasyon respekte dwa entènasyonal.\n\nKesyon pou lektè yo :\n• Si pifò sòlda salvadoryen yo pa anba GSF, kiyès ki kòmande yo, e devan kiyès y ap rann kont ?\n• Èske gouvènman ayisyen an siyen yon akò ak Salvadò, e èske l ap pibliye l ?\nMizajou 2 novanm, 20 h 30 : Dapre ajans Associated Press (AP), nan yon atik Washington Post repran, Wilson Joseph, ke yo konnen sou non Lanmò Sanjou, chèf gang 400 Mawozo, konfime lendi a li te ekri sekretè jeneral ONU pou mande l voye yon delegasyon ann Ayiti pou dyalòg ak medyasyon. AP di se premye entèvyou li bay yon gwo konpayi medya entènasyonal.\n\nToujou dapre AP, li di 4 teknisyen avyasyon salvadoryen ki disparèt depi 18 oktòb yo mouri. Li pa bay okenn prèv. Salvadò pa t konfime lanmò yo lè nou t ap pibliye, e rechèch la ap kontinye. Opak News pa ka verifye deklarasyon chèf gang lan.\n\nGouvènman ameriken an ofri jiska 1 milyon dola pou enfòmasyon ki ta mennen nan arestasyon Wilson Joseph. Li prezime inosan toutotan yon tribinal pa jije l.\n\nKesyon pou lektè yo : • Si teknisyen yo mouri vre, kiyès ki dwe reponn pou sa ? • Èske yon chèf gang ka chita sou tab dyalòg ak ONU ? • Poukisa Salvadò pa di anyen sou deklarasyon sa a ?\n\nMizajou 2 novanm : Rezo Nòdwès di li resevwa kopi yon lèt ki date 1ye novanm 2026, sou antèt « Biwo Kominikasyon » gwoup 400 Mawozo, ki atribye a Wilson Joseph, alias « Lanmò Sanjou ». Lèt la ta mande sekretè jeneral ONU a, António Guterres, voye yon delegasyon ann Ayiti, pou yon medyasyon entènasyonal ak yon dyalòg pou lapè. Siyatè a di li te leve yon « drapo blan » 20 out, li di li pare pou pale ak fòs entènasyonal yo, e li pale de vyolans nan Plèn Kildesak, ensidan ak militè salvadoryen ak viktim sivil, tankou yon tifi uit an. Se sèl Rezo Nòdwès ki pibliye lèt sa a ; li menm di dokiman an dwe trete « o kondisyonèl » jiskaske yo verifye l, e li mande kiyès ki reyèlman ekri l. Opak News pa wè lèt la, e okenn nan reklamasyon li yo pa verifye.\n\nDapre Semafor, Donald Trump apiye desizyon Salvador pou voye plis sòlda ; Semafor, ki site Axios, di kontenjan an, ki gen jiska 2000 sòlda, « ta ka double oswa triple ». Yon ekspè Council on Foreign Relations di Reuters, toujou dapre Semafor : « Tablo sekirite a pa montre yon estabilizasyon. Li montre yon eskalasyon. »\n\nKesyon pou lektè yo : • Si se pa Lanmò Sanjou ki ekri lèt la, kiyès k ap pale nan non l ? • Yon « drapo blan » 20 out : kisa viktim Plèn Kildesak yo te wè depi lè sa a ? • 4000 oswa 6000 sòlda Salvador : kiyès ki otorize sa, e jiska kilè ?\n\nAnvan sa : Mizajou 1ye novanm, aswè : Dapre yon ankèt AyiboPost ki baze sou temwayaj yon demi douzèn moun ki konnen aktivite sa yo, gang ki pi pisan Pòtoprens yo ap prepare pou yon posib konfwontasyon ak sòlda Nayib Bukele yo nan Plèn Kildesak. AyiboPost di yo wè barikad nan Lillavois, Lizon, Marin, Lathan, Kafou Shada, Santo ak Damien, e yo ap miltipliye nan Santo 11, Santo 17, Kwadèmisyon, Kafou Fouji ak Bajou. Gang Claudy « Chen Mechan » Célestin ap sèvi ak pye bwa pou bloke aksè, dapre menm sous la ; moun yo fòse ede bati barikad yo.\n\nDapre AyiboPost, gang yo ap fè rekritman fòse pami jèn gason, yo fòse kèk jèn patisipe nan yon mach 30 oktòb kont prezans etranje, e kèk gwoup ame di moun k ap kouri yo ap gen pou yo peye pou retounen. AyiboPost di se apèn 200 nan plis pase 2000 sòlda salvadoryen yo ki pral anba kòmandman Gang Suppression Force (GSF) ; yon sous di negosyasyon ap fèt ak Leta ayisyen sou chenn kòmandman ak zòn operasyon yo.\n\nYon sous pwòch Chen Mechan di AyiboPost ke chèf gang lan pa pataje diskou batay Lanmò Sanjou, e ke, nan gwoup la, swadizan asasina Salvadoryen yo konsidere kòm yon « erè ». Se pawòl yon sous anonim, rapòte pa yon sèl medya ; okenn lanmò pa konfime, okenn tribinal pa jije pèsonn, e Bukele di kadav yo te jwenn 24 oktòb yo pa pou konpatriyòt li yo.\n\nKesyon pou lektè yo : • Si 200 sèlman anba GSF, kiyès ki kòmande lòt 1800 yo ? • Kiyès ki pwoteje jèn Santo yo kont rekritman fòse ? • Si se yon « erè », kiyès ki pral reponn devan lajistis ?\n\nAnvan sa : Mizajou 1ye novanm : Dapre HaitiLibre, Wilson Joseph, alias « Lanmò Sanjou », yo prezante kòm chèf gang 400 Mawozo, bese ton li devan arive fòs Salvador yo. 22 oktòb li te di li pare pou goumen ; men nan fen oktòb, li pibliye yon videyo kote li pwopoze diskite ak prezidan salvadoryen an, Nayib Bukele, pandan l kontinye nye nenpòt responsablite nan disparisyon kat militè salvadoryen yo. Se sèl HaitiLibre ki rapòte sa ; Opak News pa wè videyo a. Okenn tribinal pa jije l pou disparisyon sa a.\n\nDapre Ministè Afè Etranjè dominiken (MIREX), yon bato ak anviwon 525 tòn ekipman, zam, machin espesyal ak materyèl sipò pou Gang Suppression Force (GSF) kite pò Haina pou Ayiti. MIREX di chajman an soti Bangladesh e se Almay ki finanse transpò a ; Diario Libre, li menm, di ekipman an te rive Repiblik Dominikèn nan plizyè avyon ki soti Almay. Daniela Kroslak, chèf Biwo Sipò Nasyonzini an Ayiti (UNSOH), rele sipò lojistik dominiken an « esansyèl », dapre MIREX.\n\nDapre Diario Libre, Bangladesh gen 50 militè avangad deja deplwaye e li prevwa voye anviwon 1600 militè ak polisye. Toujou dapre Diario Libre, GSF te gen 2285 manm 29 oktòb, sou yon maksimòm 5500 Konsèy Sekirite a otorize.\n\nKesyon pou lektè yo : • Si Lanmò Sanjou nye tout bagay, poukisa li vle negosye kounye a ? • Kiyès ki deside si gen diskisyon ak yon chèf gang : Pòtoprens, San Salvador oswa Nasyonzini ? • 525 tòn ekipman ap rive : kilè fanmi kat sòlda yo ap gen repons ?\n\nAnvan sa : Mizajou 31 oktòb, 8:35 PM : Samdi swa 31 oktòb, nan yon fèt Halloween nan Mar-a-Lago, Prezidan ameriken Donald Trump konfime devan kamera li te di prezidan salvadoryen an, Nayib Bukele, « fè sa ou gen pou fè » ann Ayiti. Nan yon klip Mezon Blanch lan (kont RapidResponse47) pibliye sou X vè 8:35 PM lè Ayiti, Trump di : « I did speak to him. He said that he has a big problem with Haiti... They killed some of his people. I said, 'You're running your country. You have to do what you have to do.' » (« Mwen te pale avè l. Li di m li gen yon gwo pwoblèm ak Ayiti... Yo touye kèk nan moun li yo. Mwen di l : “Se ou k ap dirije peyi w. Ou dwe fè sa ou gen pou fè.” »). Drop Site News, ki rapòte deklarasyon an tou, presize Trump t ap pale ak jounalis.\n\nAnvan jodi a, se sèlman Axios (30 oktòb), ak sous anonim, ki te rapòte apèl ant de prezidan yo.\n\nSa ki konfime ak sa ki pa konfime : Okenn lanmò salvadoryen poko rapòte ni konfime. Kat teknisyen avyasyon salvadoryen ki t ap sèvi nan Fòs Siprèsyon Gang (GSF) la disparèt depi anbiskad 18 oktòb la nan Kwadebouke, e Bukele li menm di kò boule yo te jwenn semèn pase a pa t pou yo. Pawòl « yo touye kèk nan moun li yo » se sa Trump di Bukele te di l; okenn sous endepandan poko konfime sa.\n\nKesyon pou lektè yo : • Si okenn Salvadoryen poko mouri, sou ki baz Trump di « yo touye moun li yo » ? • Yon « feu vèt » Washington pou yon lame etranje ann Ayiti : kiyès nan gouvènman ayisyen an ki te gen mo pa l nan apèl sa a ? • Kiyès ki pral reponn si operasyon « fè sa ou gen pou fè » a touye sivil ayisyen ?\n\nAnvan : Mizajou 31 oktòb, aswè : Dapre Infobae, ki site jounal kolonbyen El Tiempo ak sous militè, yon avyon Hercules C-130H Fòs Ayewospasyal Kolonbi (FAC), matrikil FAC 1005, sèvi pou transpòte sòlda ak ekipman salvadoryen sou wout San Salvador–Pòtoprens. Videyo, imaj ak done sit swivi vòl montre mouvman avyon an. Dapre sous sa yo, Kolonbi patisipe nan kad akò Koalisyon Amerik yo kont Katèl yo (A3C), yon alyans 19 peyi Washington ap pouse, ke Kolonbi te antre ladan l 12 out 2026. Infobae di rapò entènasyonal endike Salvadò voye anviwon 2000 militè e l ap etidye pou monte chif la jiska anviwon 2500.\n\nNan menm jounen an, dapre N Digital, anbasad Etazini an Ayiti enfòme sou transpò pa avyon plis pase 600 tòn ekipman priyoritè soti Bangladèch pou Fòs Siprèsyon Gang (GSF) la. Se diplomat ameriken Juan Pablo Segura ki fè anons lan vandredi 30 oktòb ; li remèsye Almay pou kontribisyon li nan operasyon lojistik la.\n\nLi tou sou Opak News : Bukele demanti akizasyon bonbadman yo (lyen anba a).\n\nKesyon pou lektè yo : • Ki lòt peyi k ap ede deplwaman salvadoryen an san yo pa di sa piblikman ? • Si Salvadò monte a 2500 sòlda, kiyès ki vote oswa apwouve sa ann Ayiti ? • 600 tòn ekipman pou GSF : kilè pèp la ap wè rezilta sou teren an ?\n\nAnvan : Mizajou 31 oktòb, aprè midi : Dapre Infobae, ki site ajans EFE ak medya lokal ayisyen, sòlda salvadoryen yo monte yon baz militè nan komin Tabar, nan yon zòn toupre anbasad Etazini. Se depi baz sa a kontenjan an kowòdone deplasman ak operasyon li yo. Infobae di patwouy yo te pase tou sou wout toupre Santo, nan Kwadebouke. Dapre gouvènman salvadoryen an, deplwaman an fèt an kowòdinasyon ak Premye minis Alix Didier Fils-Aimé, e se pa yon envazyon.\n\nNan menm jounen an, jounalis Rosemon pibliye sou X yon foto Patrice Noel ki montre sòlda tchadyen Fòs Siprèsyon Gang (GSF) la k ap patwouye nan lari Pòtoprens bonè samdi 31 oktòb maten, nan kad operasyon kont gang yo.\n\nKesyon pou lektè yo : • Poukisa yon baz etranje bezwen toupre anbasad ameriken an ? • Salvadoryen, Tchadyen, Task Force, PNH, FAd’H : ki moun ki kòmande ki moun nan lari a ? • Ki moun ki pral di pèp la konbyen tan baz Tabar la ap rete ?\n\nAnvan : Mizajou 31 oktòb : Dapre ajans EFE, rapòte pa The Rio Times, plizyè dizèn sòlda salvadoryen an inifòm konba ak fizi atak fè premye patwouy yo nan lari Pòtoprens vandredi 30 oktòb, nan Tabar ak Klèsin, toupre ayewopò entènasyonal Toussaint Louverture, nan kamyon ak machin blende, ak elikoptè ki t ap kouvri yo. Kèk moun sou wout la bat bravo. Gouvènman Bukele a di li gen plis pase 2000 sòlda an Ayiti; objektif ofisyèl la se jwenn kat teknisyen salvadoryen ki disparèt depi 18 oktòb vivan.\n\nSou RFI, moun Pòtoprens divize. Sephora, etidyan nan Inivèsite Leta, di si Bukele ka ede, « nou akeyi l ak kè kontan ». Castène pi pridan : li pa vle sa sèvi pretèks pou « anvayi peyi a » e mete souverènte Ayiti an kesyon. Ki misyon egzak yo, ki moun ki kòmande yo, e konbyen tan y ap rete : kesyon sa yo poko gen repons. Dapre Axios, kontenjan an sanble ap opere paralèl ak Fòs Siprèsyon Gang (GSF) la, anba yon akò bilateral.\n\nKesyon pou lektè yo : • Si yon sòlda etranje patwouye Tabar, ki moun li reponn : Pòtoprens, San Salvadò oswa Washington ? • Bravo jodi a, men kisa k ap rive si yon bal pèdi touye yon sivil ? • Poukisa se toujou lòt peyi ki vin fè travay Leta ayisyen an ?\n\nAnvan : Mizajou 30 oktòb : Yon akò bilateral Ayiti apwouve mèkredi 28 oktòb otorize fòs salvadoryen an opere nan peyi a. Dapre Axios, Bukele rele Donald Trump madi pou asire l Washington pa gen pwoblèm ak operasyon an, e Trump reponn li : « Fè sa ou gen pou fè » (\"Do what you have to do\").\n\nDapre AFP, omwen 2000 sòlda salvadoryen rive an Ayiti nan yon semèn. AFP konte anviwon 20 vòl charter ant San Salvador ak Pòtoprens ant 22 ak 29 oktòb, e imaj satelit montre dis estrikti (petèt tant) yo enstale sou baz militè entènasyonal ayewopò Toussaint-Louverture a.\n\nNan mesaj kreyòl li a, Bukele di se Salvadò k ap peye 90% depans operasyon an. Diego Da Rin, analis Crisis Group, di AFP kounye a gen « senk fòs separe san yon vrè kòmandman inifye ». Depi 18 oktòb, MSF trete 30 moun blese nan tire oswa dron nan lopital li yo nan Tabarre ak Site Solèy.\n\nMizajou 29 oktòb, 5:14 PM : Nayib Bukele pibliye sou X yon mesaj an kreyòl ak yon videyo pou pèp ayisyen an (tèks la anwo a, jan li ekri l).\n\nPrezidan salvadoryen an, Nayib Bukele, anonse li voye plis pase 2000 sòlda an Ayiti. Misyon yo: jwenn kat teknisyen salvadoryen nan Gang Suppression Force la ki disparèt depi anbiskad 18 oktòb la nan Kwadebouke, epi goumen ak gang yo.\n\nBukele di kò otorite ayisyen yo te remèt yo pa koresponn ak moun ki disparèt yo.\n\nLi poko klè si sòlda sa yo ap travay anba Gang Suppression Force la oswa poukont yo. Anons sa a ranplase chif anviwon 1000 sòlda ki te pale anvan an.",
      fr: "Mise à jour du 6 novembre : Selon La 1ère (Yasmina Yacou, AP), le véhicule des quatre techniciens aéronautiques salvadoriens disparus depuis l'embuscade du 18 octobre a été retrouvé calciné lundi 2 novembre dans le secteur de Santo, à Croix-des-Bouquets. La police haïtienne, avec des militaires salvadoriens et la force internationale anti-gangs, n'a trouvé aucune trace des disparus. Al Jazeera (5 novembre, avec AP) situe la découverte au mardi, et écrit que la PNH a publié des photos des restes brûlés du camion lors d'une opération conjointe PNH / GSF / troupes salvadoriennes. Les deux dates divergent ; Opak News les publie telles quelles.\n\nToujours selon La 1ère / AP, Wilson Joseph, dit Lanmò Sanjou, chef présumé de 400 Mawozo, affirme que les quatre hommes sont morts, sans fournir de preuve. Les autorités haïtiennes parlent d'un enlèvement ; le gouvernement salvadorien estime qu'ils sont encore vivants. L'ONU confirme avoir reçu une lettre portant sa signature demandant un dialogue, sans reconnaissance de l'auteur. Ces éléments figuraient déjà en partie sur Opak News ; la nouveauté principale ici est le véhicule calciné documenté à Santo et l'absence toujours totale des quatre hommes.\n\nQuestions aux lecteurs :\n\n• Véhicule trouvé, hommes introuvables : qui mène vraiment la recherche, et qui rend compte chaque soir ?\n\n• Une affirmation de chef de gang sans preuve peut-elle remplacer une enquête ?\n\nMise à jour du 3 novembre, 5 h 30 : Selon l'agence espagnole Europa Press, l'ONU confirme avoir reçu la lettre de Wilson Joseph, dit Lanmò Sanjou, chef du gang 400 Mawozo. Mais le porte-parole du secrétaire général, Stéphane Dujarric, précise que cette réception ne constitue ni un soutien à son contenu, ni une reconnaissance de son auteur, ni une position formelle de l'organisation.\n\nToujours selon Europa Press, Dujarric indique que « la grande majorité » des soldats salvadoriens ne sont pas déployés dans le cadre de la Force de répression des gangs (GSF) appuyée par l'ONU. Ils échappent donc au mandat du Bureau d'appui de l'ONU en Haïti. NAGO, citant AlterPresse, rapporte la même précision : ces soldats sont hors du mécanisme de reddition de comptes de la GSF. L'ONU se dit aussi préoccupée pour les civils et demande que toutes les opérations respectent le droit international.\n\nQuestions aux lecteurs :\n• Si la plupart des soldats salvadoriens ne relèvent pas de la GSF, qui les commande et devant qui rendent-ils des comptes ?\n• Le gouvernement haïtien a-t-il signé un accord avec le Salvador, et le rendra-t-il public ?\nMise à jour du 2 novembre, 20 h 30 : Selon l'agence Associated Press (AP), dans un article repris par le Washington Post, Wilson Joseph, connu sous le nom de Lanmò Sanjou, chef du gang 400 Mawozo, a confirmé lundi avoir écrit au secrétaire général de l'ONU pour lui demander d'envoyer en Haïti une délégation de dialogue et de médiation. L'AP précise qu'il s'agit de sa première interview à un grand média international.\n\nToujours selon l'AP, il affirme que les 4 techniciens d'aviation salvadoriens disparus depuis le 18 octobre sont morts. Il n'a fourni aucune preuve. Le Salvador n'avait pas confirmé leur mort au moment de publier, et les recherches se poursuivent. Opak News ne peut pas vérifier les déclarations du chef de gang.\n\nLes États-Unis offrent jusqu'à 1 million de dollars pour toute information menant à l'arrestation de Wilson Joseph. Il est présumé innocent tant qu'un tribunal ne l'a pas jugé.\n\nQuestions aux lecteurs : • Si les techniciens sont morts, qui doit en répondre ? • Un chef de gang peut-il s'asseoir à la table du dialogue avec l'ONU ? • Pourquoi le Salvador garde-t-il le silence sur cette déclaration ?\n\nMise à jour du 2 novembre : Rezo Nòdwès dit avoir reçu copie d’une lettre datée du 1er novembre 2026, sous l’en-tête du « Bureau Communication » du groupe 400 Mawozo, attribuée à Wilson Joseph, alias « Lanmò Sanjou ». La lettre demanderait au secrétaire général de l’ONU, António Guterres, de dépêcher une délégation en Haïti, pour une médiation internationale et l’ouverture d’un dialogue pour la paix. Le signataire affirme avoir hissé un « drapeau blanc » le 20 août, se dit prêt à dialoguer avec les forces internationales, et évoque les violences dans la Plaine du Cul-de-Sac, des incidents impliquant des militaires salvadoriens et des victimes civiles, dont une fillette de huit ans. Seul Rezo Nòdwès publie cette lettre ; le site précise lui-même qu’elle doit être traitée « au conditionnel jusqu’à vérification » et s’interroge sur son véritable auteur. Opak News n’a pas vu la lettre, et aucune de ses affirmations n’est vérifiée.\n\nSelon Semafor, Donald Trump a soutenu la décision du Salvador d’envoyer des renforts ; citant Axios, Semafor écrit que le contingent, jusqu’à 2000 soldats, « pourrait doubler ou tripler ». Un expert du Council on Foreign Relations a déclaré à Reuters, toujours selon Semafor : « Le tableau sécuritaire ne pointe pas vers une stabilisation. Il pointe vers une escalade. »\n\nQuestions aux lecteurs : • Si Lanmò Sanjou n’a pas écrit cette lettre, qui parle en son nom ? • Un « drapeau blanc » le 20 août : qu’ont vécu depuis les victimes de la Plaine du Cul-de-Sac ? • 4000 ou 6000 soldats salvadoriens : qui l’autorise, et jusqu’à quand ?\n\nAuparavant : Mise à jour du 1er novembre, soir : Selon une enquête d’AyiboPost fondée sur les témoignages d’une demi-douzaine de personnes au fait de ces activités, les gangs les plus puissants de Port-au-Prince se préparent à une possible confrontation avec les troupes de Nayib Bukele dans la Plaine du Cul-de-Sac. AyiboPost dit avoir observé des barricades à Lillavois, Lizon, Marin, Lathan, Carrefour Shada, Santo et Damien, qui se multiplient aussi à Santo 11, Santo 17, Croix-des-Missions, Carrefour Fouji et Bajou. Le gang de Claudy « Chen Mechan » Célestin utilise des troncs d’arbres pour bloquer les accès, selon la même source ; des habitants sont contraints d’aider à construire les barricades.\n\nToujours selon AyiboPost, les gangs mènent une campagne de recrutement forcé parmi les jeunes hommes, ont contraint des jeunes à participer à une marche le 30 octobre contre la présence étrangère, et certains groupes armés préviennent ceux qui fuient qu’ils devront payer pour revenir. AyiboPost écrit qu’à peine 200 des plus de 2000 soldats salvadoriens seront placés sous le commandement de la Gang Suppression Force (GSF) ; selon une source, des négociations sont en cours avec l’État haïtien sur la chaîne de commandement et les zones d’opération.\n\nUne source proche de Chen Mechan affirme à AyiboPost que le chef de gang ne partage pas la rhétorique combative de Lanmò Sanjou et que, au sein du groupe, le meurtre présumé des Salvadoriens est considéré comme une « erreur ». Il s’agit des propos d’une source anonyme rapportés par un seul média ; aucune mort n’est confirmée, personne n’a été jugé, et Bukele affirme que les restes humains reçus le 24 octobre ne sont pas ceux de ses compatriotes.\n\nQuestions aux lecteurs : • Si 200 seulement passent sous la GSF, qui commande les 1800 autres ? • Qui protège les jeunes de Santo du recrutement forcé ? • Si c’était une « erreur », qui en répondra devant la justice ?\n\nAuparavant : Mise à jour du 1er novembre : Selon HaitiLibre, Wilson Joseph, alias « Lanmò Sanjou », présenté comme le chef du gang 400 Mawozo, a adouci le ton face à l’arrivée des forces salvadoriennes. Le 22 octobre, il s’était dit prêt à se battre ; fin octobre, il a diffusé une vidéo proposant des discussions avec le président salvadorien Nayib Bukele, tout en continuant de nier toute responsabilité dans la disparition des quatre militaires salvadoriens. Seul HaitiLibre rapporte cette vidéo, qu’Opak News n’a pas vue. Aucun tribunal ne l’a jugé pour cette disparition.\n\nSelon le ministère dominicain des Affaires étrangères (MIREX), un navire chargé d’environ 525 tonnes de fournitures, d’armement, de véhicules spécialisés et d’équipements de soutien pour la Gang Suppression Force (GSF) a quitté le port de Haina pour Haïti. Le MIREX indique que la cargaison provient du Bangladesh et que son transport a été financé par l’Allemagne ; Diario Libre écrit pour sa part que le matériel est arrivé en République dominicaine à bord de plusieurs avions en provenance d’Allemagne. Daniela Kroslak, cheffe du Bureau d’appui des Nations unies en Haïti (UNSOH), a qualifié d’« essentiel » le soutien logistique dominicain, selon le MIREX.\n\nSelon Diario Libre, le Bangladesh compte 50 militaires d’avant-garde déployés et prévoit d’envoyer environ 1600 militaires et policiers. Toujours selon Diario Libre, la GSF comptait 2285 membres au 29 octobre, pour un plafond de 5500 autorisé par le Conseil de sécurité.\n\nQuestions aux lecteurs : • Si Lanmò Sanjou nie tout, pourquoi veut-il négocier maintenant ? • Qui décide d’un dialogue avec un chef de gang : Port-au-Prince, San Salvador ou l’ONU ? • 525 tonnes d’équipement arrivent : quand les familles des quatre militaires auront-elles des réponses ?\n\nAuparavant : Mise à jour du 31 octobre, 20 h 35 : Samedi soir 31 octobre, lors d’une fête d’Halloween à Mar-a-Lago, le président américain Donald Trump a confirmé face caméra avoir dit au président salvadorien Nayib Bukele de « faire ce qu’il a à faire » en Haïti. Dans un extrait diffusé sur X par la Maison-Blanche (compte RapidResponse47) vers 20 h 35, heure d’Haïti, Trump déclare : « I did speak to him. He said that he has a big problem with Haiti... They killed some of his people. I said, 'You're running your country. You have to do what you have to do.' » (« Je lui ai parlé. Il m’a dit qu’il avait un gros problème avec Haïti... Ils ont tué certains des siens. Je lui ai dit : “C’est vous qui dirigez votre pays. Vous devez faire ce que vous avez à faire.” »). Drop Site News, qui rapporte aussi la déclaration, précise que Trump s’exprimait devant des journalistes.\n\nJusqu’à présent, seul Axios (30 octobre), sur la foi de sources anonymes, avait fait état de cet appel entre les deux présidents.\n\nCe qui est confirmé, et ce qui ne l’est pas : aucune mort de Salvadorien n’a été rapportée ni confirmée. Quatre techniciens aéronautiques salvadoriens servant au sein de la Force de répression des gangs (FRG/GSF) sont portés disparus depuis l’embuscade du 18 octobre à Croix-des-Bouquets, et Bukele lui-même a affirmé que les corps calcinés retrouvés la semaine dernière n’étaient pas les leurs. Les propos « ils ont tué certains des siens » sont ceux que Trump attribue à Bukele ; aucune source indépendante ne les a confirmés.\n\nQuestions aux lecteurs : • Si aucun Salvadorien n’a été tué, sur quelle base Trump affirme-t-il qu’« ils ont tué certains des siens » ? • Un feu vert de Washington pour une armée étrangère en Haïti : quel responsable haïtien a eu son mot à dire ? • Qui rendra des comptes si l’opération « faites ce que vous avez à faire » coûte des vies civiles haïtiennes ?\n\nAuparavant : Mise à jour du 31 octobre, soir : Selon Infobae, citant le quotidien colombien El Tiempo et des sources militaires, un Hercules C-130H de la Force aérospatiale colombienne (FAC), immatriculé FAC 1005, a assuré le transport de militaires et de matériel salvadoriens entre San Salvador et Port-au-Prince. Des vidéos, des images et des données de suivi de vols ont montré le mouvement de l’appareil. Selon ces sources, la participation colombienne s’inscrit dans les accords de la Coalition des Amériques contre les cartels (A3C), une alliance de 19 pays impulsée par Washington, que la Colombie a rejointe le 12 août 2026. Infobae rapporte que, selon des informations internationales, le Salvador a envoyé environ 2000 militaires et étudie la possibilité de porter ce chiffre à quelque 2500.\n\nLe même jour, selon N Digital, l’ambassade des États-Unis en Haïti a fait état du transport aérien de plus de 600 tonnes d’équipements prioritaires depuis le Bangladesh au profit de la Force de répression des gangs (FRG/GSF). L’annonce a été faite le vendredi 30 octobre par le diplomate américain Juan Pablo Segura, qui a remercié l’Allemagne pour sa contribution à l’opération logistique.\n\nÀ lire aussi sur Opak News : Bukele dément les accusations de bombardements (lien ci-dessous).\n\nQuestions aux lecteurs : • Quels autres pays soutiennent le déploiement salvadorien sans le dire publiquement ? • Si le Salvador monte à 2500 soldats, qui l’a autorisé du côté haïtien ? • 600 tonnes d’équipements pour la FRG : quand la population en verra-t-elle les résultats sur le terrain ?\n\nAuparavant : Mise à jour du 31 octobre, après-midi : Selon Infobae, citant l’agence EFE et des médias locaux haïtiens, les militaires salvadoriens ont installé une base militaire dans la commune de Tabarre, dans un secteur proche de l’ambassade des États-Unis. C’est depuis cette base que le contingent coordonne ses déplacements et ses opérations. Selon Infobae, les patrouilles sont aussi passées par des routes proches de Santo, à Croix-des-Bouquets. Le gouvernement salvadorien affirme agir en coordination avec le Premier ministre Alix Didier Fils-Aimé et assure qu’il ne s’agit pas d’une invasion.\n\nLe même jour, le journaliste Rosemon a publié sur X une photo de Patrice Noel montrant des soldats tchadiens de la Force de répression des gangs (FRG/GSF) patrouillant dans les rues de Port-au-Prince tôt ce samedi 31 octobre, dans le cadre des opérations contre les bandes armées.\n\nQuestions aux lecteurs : • Pourquoi une base étrangère près de l’ambassade américaine ? • Salvadoriens, Tchadiens, Task Force, PNH, FAd’H : qui commande qui dans la rue ? • Qui dira au peuple combien de temps restera la base de Tabarre ?\n\nAuparavant : Mise à jour du 31 octobre : Selon l’agence EFE, reprise par The Rio Times, des dizaines de soldats salvadoriens en tenue de combat et armés de fusils d’assaut ont mené vendredi 30 octobre leurs premières patrouilles dans les rues de Port-au-Prince, à Tabarre et à Clercine, près de l’aéroport international Toussaint-Louverture, à bord de camions et de blindés, sous couverture d’hélicoptère. Des passants ont applaudi. Le gouvernement Bukele dit compter plus de 2000 soldats en Haïti ; l’objectif officiel est de retrouver vivants quatre techniciens salvadoriens disparus depuis le 18 octobre.\n\nSur RFI, les habitants de Port-au-Prince sont partagés. Sephora, étudiante à l’Université d’État, dit que si Bukele peut aider, « nous l’accueillons à cœur joie ». Castène se montre plus prudent : il ne veut pas que cela serve de prétexte pour « envahir le pays » et remettre en question la souveraineté d’Haïti. Quelle est exactement leur mission, qui les commande, combien de temps resteront-ils : ces questions restent sans réponse. Selon Axios, le contingent semble opérer en parallèle de la Force de répression des gangs (FRG/GSF), en vertu d’un accord bilatéral.\n\nQuestions aux lecteurs : • Si un soldat étranger patrouille Tabarre, à qui rend-il des comptes : Port-au-Prince, San Salvador ou Washington ? • On applaudit aujourd’hui, mais que se passera-t-il à la première balle perdue qui tue un civil ? • Pourquoi faut-il toujours un autre pays pour faire le travail de l’État haïtien ?\n\nAuparavant : Mise à jour du 30 octobre : Un accord bilatéral approuvé par Haïti le mercredi 28 octobre autorise la force salvadorienne à opérer dans le pays. Selon Axios, Bukele a appelé Donald Trump mardi pour s’assurer que Washington ne s’y opposait pas, et Trump lui a répondu : « Fais ce que tu as à faire » (\"Do what you have to do\").\n\nSelon l’AFP, au moins 2000 militaires salvadoriens sont arrivés en Haïti en une semaine. L’AFP a recensé une vingtaine de vols charter entre San Salvador et Port-au-Prince du 22 au 29 octobre, et des images satellites montrent dix structures, qui pourraient être des tentes, installées sur la base militaire internationale de l’aéroport Toussaint-Louverture.\n\nDans son message en créole, Bukele affirme que le Salvador paie 90% du coût de l’opération. Diego Da Rin, analyste du Crisis Group, s’inquiète auprès de l’AFP de « cinq forces séparées sans réel commandement unifié ». Depuis le 18 octobre, MSF a soigné 30 personnes blessées par balles ou drones dans ses hôpitaux de Tabarre et Cité Soleil.\n\nMise à jour du 29 octobre, 17 h 14 : Nayib Bukele a publié sur X un message en créole, accompagné d’une vidéo, adressé au peuple haïtien (texte ci-dessus, tel qu’il l’a écrit).\n\nLe président salvadorien Nayib Bukele annonce l'envoi de plus de 2000 soldats en Haïti. Leur mission: retrouver quatre techniciens salvadoriens de la Gang Suppression Force disparus depuis l'embuscade du 18 octobre à Croix-des-Bouquets, et combattre les gangs.\n\nBukele affirme que les corps remis par les autorités haïtiennes ne correspondent pas aux disparus.\n\nIl n'est pas encore clair si ces troupes serviront sous la Gang Suppression Force ou de manière indépendante. Cette annonce remplace le chiffre d'environ 1000 soldats évoqué jusqu'ici.",
    },
    quote: {
      lang: "ht",
      author: "Nayib Bukele, sur X, 29 octobre 2026",
      text: "Pèp ayisyen,\n\nNou prèske fin deplwaye sòlda nou yo ak ekipman nou yo sou tè Ayiti. Sa a se pa yon operasyon kont pèp ayisyen an, ni yon envazyon peyi Ayiti. Nou pa yon gwo pisans. Nou pa gen okenn enterè ni pou nou vin domine pèp ayisyen an, ni pou nou mete men sou richès Ayiti.\n\nNou se yon peyi modès k ap devlope. Sèl sa nou vle, se pou kat teknisyen avyasyon nou yo tounen lakay yo. Epi n ap bay gang yo yon leson, gang sa yo k ap fè pèp ayisyen an soufri, ki touye moun pèp la renmen yo, k ap anpeche l viv yon lavi nòmal, lib, san laperèz.\n\nSe prèske nou menm sèl k ap peye pou operasyon sa a. Menmsi nou resevwa yon ti èd lojistik nan men kèk lòt peyi, se ak pwòp ti kès nou n ap kouvri 90% nan depans yo.\n\nSa koute nou chè, men nou te aprann nan pwòp soufrans nou: jistis ak lapè pa gen pri. Nou te pase nan menm soufrans Ayiti ap travèse jodi a. Nou te viv yon beny san ki te pi terib toujou pase sa pèp ayisyen an ap sibi kounye a. Nou konnen sa sa vle di: viv nan laperèz, pa fè politisyen konfyans, pa kwè okenn moun ki pwomèt l ap ede w. Paske pèsonn pa t vin ede nou, e moun ki te vini yo pa t gen bon entansyon nan kè yo.\n\nMen nou te rive chape anba sa. Apre 200 lane soufrans, finalman n ap viv nan lapè, e jodi a nou se peyi ki gen plis sekirite sou kontinan an.\n\nNou pa vin ann Ayiti pou nou touche lajan, paske pèsonn pa peye nou pou sa. Nou vin ann Ayiti pou nou goumen kont mechan yo.\n\nMen sa m ap mande nou: fè nou konfyans, lapriyè sèl vrè Bondye a, epi mande L pou L geri Ayiti.\n\n“Lè sa a si pèp ki pote non m lan lapriyè nan pye m, si yo soumèt devan mwen, si yo pran chache m ankò, si yo vire do bay vye peche yo t'ap fè yo, m'ap tande yo nan syèl kote m ye a, m'ap padonnen peche yo, m'ap fè peyi a kanpe ankò.”\n\n2 Kwonik 7:14\n\nEde nou ede Ayiti.\n\nEpi lè misyon nou an fini, n ap tounen lakay nou. Petèt jenerasyon Ayisyen k ap vini yo ap sonje nou kòm zanmi ki te vin ede yon lè.",
    },
    video: {
      src: "/video/bukele-2026-10-29.mp4",
      poster: "/video/bukele-2026-10-29.jpg",
      credit: "Vidéo : Nayib Bukele / X",
      url: "https://x.com/nayibbukele/status/2115915319134855447",
    },
    audio: {
      src: "/audio/bukele-message-full.mp3",
      label: "Lecture audio du message (voix de synthèse, ce n’est pas la voix de Bukele)",
    },
    sources: ["La 1ère / AP", "Al Jazeera / AP", "Europa Press", "NAGO", "Associated Press (via Washington Post)", "Rezo Nòdwès", "Semafor (Axios, Reuters)", "AyiboPost", "HaitiLibre", "MIREX", "Diario Libre", 
      "Maison-Blanche / RapidResponse47 (X)",
      "Drop Site News (X)",
      "BBC",
      "Al Jazeera",
      "Nayib Bukele / X",
      "Axios",
      "AFP",
      "RFI",
      "EFE / The Rio Times",
      "Infobae (EFE)",
      "Infobae (El Tiempo)",
      "N Digital (ambassade des États-Unis)",
      "Rosemon / X (photo Patrice Noel)",
    ],
    sourceLinks: [
      { name: "La 1ère / AP", url: "https://la1ere.franceinfo.fr/guadeloupe/en-haiti-le-vehicule-des-quatre-salvadoriens-disparus-retrouve-calcine-les-recherches-se-poursuivent-1755027.html" },
      { name: "Al Jazeera / AP", url: "https://www.aljazeera.com/news/2026/11/5/el-salvadors-bukele-touts-military-intervention-in-haiti" },
      { name: "Europa Press", url: "https://www.europapress.es/internacional/noticia-onu-confirma-recepcion-carta-lider-pandillero-haiti-aclara-no-implica-reconocimiento-20261103031439.html" },
      { name: "NAGO", url: "https://nago.tv/news/l-onu-place-la-plupart-des-soldats-salvadoriens-en-haiti-hors-du-manda" },
      { name: "Associated Press (via Washington Post)", url: "https://www.washingtonpost.com/world/2026/11/02/lanmo-sanjou-letter-un-gang-violence-wilson-josph/e3c8d6b4-d6f8-11f1-930a-e08f8086f5ac_story.html" },
      { name: "Rezo Nòdwès (lettre à Guterres)", url: "https://rezonodwes.com/2026/11/haiti-scandale-et-hardiesse-qui-a-redige-la-lettre-adressee-a-guterres-au-nom-de-lanmo-sanjou-chef-de-gang-criminel-terroriste-des-400-mawozo/" },
      { name: "Semafor", url: "https://www.semafor.com/article/11/01/2026/el-salvador-deploys-2000-troops-to-haiti" },
      { name: "AyiboPost", url: "https://backoffice.ayibopost.com/forced-recruitment-demonstrations-barricades-gangs-are-preparing/" },
      { name: "HaitiLibre (Zapping)", url: "https://www.haitilibre.com/en/news-48798-haiti-news-zapping.html" },
      { name: "MIREX", url: "https://mirex.gob.do/onu-califica-de-esencial-apoyo-del-gobierno-dominicano-a-las-operaciones-de-la-fuerza-de-supresion-de-pandillas-en-haiti/" },
      { name: "Diario Libre", url: "https://www.diariolibre.com/actualidad/nacional/2026/11/01/republica-dominicana-envia-equipos-a-haiti-desde-bangladesh/3707278" },
      { name: "Maison-Blanche / RapidResponse47 (X)", url: "https://x.com/RapidResponse47/status/2116690470130581527" },
      { name: "Drop Site News (X)", url: "https://x.com/DropSiteNews/status/2116710581142954432" },
      { name: "Infobae (El Tiempo)", url: "https://www.infobae.com/colombia/2026/10/31/tropas-militares-de-el-salvador-fueron-trasladadas-a-haiti-en-un-avion-de-la-fuerza-aerea-colombiana-esta-fue-la-razon/" },
      { name: "N Digital", url: "https://n.com.do/2026/10/31/estados-unidos-600-toneladas-equipos-pandillas-haiti/" },
      { name: "Opak News : Bukele dément les bombardements", url: "https://opak-news.haitialways.workers.dev/story/qh-bukele-dement-bombardements-2026-10-31" },
      { name: "Infobae (EFE)", url: "https://www.infobae.com/el-salvador/2026/10/31/militares-salvadorenos-montan-base-cerca-de-embajada-de-ee-uu-e-inician-patrullajes-en-puerto-principe-haiti/" },
      { name: "Rosemon / X", url: "https://x.com/JounalRosemonV/status/2116628003107086504" },
      { name: "RFI", url: "https://www.rfi.fr/fr/am%C3%A9riques/20261031-ha%C3%AFti-le-d%C3%A9ploiement-de-nouveaux-soldats-salvadoriens-soul%C3%A8ve-des-questions" },
      { name: "The Rio Times (EFE)", url: "https://www.riotimesonline.com/haiti-salvadoran-soldiers-patrol-port-au-prince/" },
      { name: "Axios", url: "https://www.axios.com/2026/10/30/trump-bukele-haiti-troop-surge" },
      { name: "AFP (via Yahoo Actualités)", url: "https://fr.news.yahoo.com/d%C3%A9ploiement-milliers-soldats-salvadoriens-ha%C3%AFti-222631345.html" },
    ],
  },
  {
    id: "ntk-msf-plaine-cul-de-sac-2026-10",
    archived: true,
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-10-28",
    publishedTime: "2026-11-01T13:20:00-05:00",
    isBreaking: true,
    breakingHours: 6,
    headline: {
      ht: "MSF : « Fòk yo epanye sivil yo », blese pran plizyè èdtan pou rive lopital",
      fr: "MSF : « Les civils doivent être épargnés », des blessés mettent des heures à rejoindre ses hôpitaux",
    },
    teaser: {
      ht: "MSF trete 30 moun blese nan zam oswa dron ant 18 ak 26 oktòb nan Tabarre ak Site Solèy. Klinik mobil ak dlo trete sispann.",
      fr: "MSF a soigné 30 blessés par balles ou drones entre le 18 et le 26 octobre à Tabarre et Cité Soleil. Cliniques mobiles et eau traitée suspendues.",
    },
    brief: {
      ht: "Mizajou 1ye novanm : Davina Hayles, chèf misyon MSF, di kèk blese pran plizyè èdtan pou rive lopital Tabarre ak Site Solèy, paske wout ak pon bloke, dapre HaitiLibre ak NAGO. Depi 18 oktòb, MSF trete 30 moun blese nan zam oswa dron nan lopital Tabarre ak Site Solèy. Klinik mobil ak dlo trete sispann nan katye yo.",
      fr: "Mise à jour du 1er novembre : Davina Hayles, cheffe de mission de MSF, dit que certains blessés ont mis plusieurs heures à rejoindre les hôpitaux de Tabarre et Cité Soleil, routes et ponts étant bloqués, selon HaitiLibre et NAGO. Depuis le 18 octobre, MSF a traité 30 blessés par balles ou drones dans ses hôpitaux de Tabarre et Cité Soleil. Cliniques mobiles et distribution d'eau suspendues dans les quartiers touchés.",
    },
    body: {
      ht: "Mizajou 1ye novanm : Dapre deklarasyon MSF HaitiLibre ak NAGO pibliye, chèf misyon MSF an Ayiti, Davina Hayles, di : « Nou trè enkyete pou flanbe vyolans sa a nan plizyè katye kapital la ki gen anpil moun. » Li di MSF pè batay la fè plis viktim e deplase plis moun nan jou k ap vini yo, « sitou ak arive lòt fòs sekirite entènasyonal ». Kèk kolèg lokal MSF oblije kite kay yo pou al pran refij nan lojman MSF.\n\n« Kèk pasyan ki blese nan bal pran plizyè èdtan pou rive nan lopital nou yo Tabarre ak Site Solèy », Hayles di. « Wout ak pon bloke, e nenpòt deplasman trè danjere. » MSF di sispansyon klinik mobil ak dlo trete a se « yon doub kou » pou moun ki nan katye yo.\n\nKesyon pou lektè yo : • Ak plis fòs etranje k ap rive, kiyès ki garanti blese yo ka rive lopital ? • Kiyès ki bay dlo trete nan katye kote MSF sispann ? • Konbyen viktim sivil ki pa janm rive nan yon lopital ?\n\nAnvan sa : MSF tire alam sou yon flanbe vyolans nan Plèn Kildesak, nan nòdès Pòtoprens. Depi plizyè manm Gang Suppression Force disparèt apre yon atak sou machin yo 18 oktòb, tire ak eksplozyon dron ogmante nan zòn nan.\n\nAnt 18 ak 26 oktòb, lopital MSF nan Tabarre ak Site Solèy trete 30 moun ki blese nan tire oswa eksplozyon dron, ki gen fanm ak timoun. MSF sispann klinik mobil yo ak distribisyon dlo trete nan katye ki afekte yo.\n\nÒganizasyon an mande otorite yo ak tout pati yo pou yo epanye sivil yo ak enstalasyon medikal yo, epi pèmèt aksè nan swen pou blese yo.",
      fr: "Mise à jour du 1er novembre : Selon la déclaration de MSF relayée par HaitiLibre et NAGO, la cheffe de mission de MSF en Haïti, Davina Hayles, déclare : « Nous sommes très préoccupés par cette flambée de violence dans plusieurs quartiers densément peuplés de la capitale. » Elle dit craindre que les combats fassent davantage de victimes et de déplacés dans les jours à venir, « notamment avec l’arrivée de forces de sécurité internationales supplémentaires ». Certains collègues locaux de MSF ont dû quitter leur domicile et se réfugier dans des logements de l’organisation.\n\n« Certains patients blessés par balle ont mis plusieurs heures à atteindre nos hôpitaux de Tabarre et de Cité Soleil », explique Davina Hayles. « Les routes et les ponts sont bloqués, et tout déplacement est extrêmement risqué. » MSF qualifie la suspension de ses cliniques mobiles et de la distribution d’eau traitée de « double peine » pour les habitants.\n\nQuestions aux lecteurs : • Avec l’arrivée de nouvelles forces étrangères, qui garantit l’accès des blessés aux hôpitaux ? • Qui fournit l’eau traitée là où MSF a suspendu ses distributions ? • Combien de victimes civiles n’atteignent jamais un hôpital ?\n\nAuparavant : MSF alerte sur une flambée de violence dans la Plaine du Cul-de-Sac, dans le nord-est de Port-au-Prince. Depuis la disparition de plusieurs membres de la Gang Suppression Force après une attaque contre leur véhicule le 18 octobre, les tirs et les explosions de drones ont augmenté dans la zone.\n\nEntre le 18 et le 26 octobre, les hôpitaux MSF de Tabarre et de Cité Soleil ont traité 30 personnes blessées par balles ou explosions de drones, dont des femmes et des enfants. MSF a suspendu ses cliniques mobiles et la distribution d'eau traitée dans les quartiers touchés.\n\nL'organisation demande aux autorités et à toutes les parties d'épargner les civils et les installations médicales, et de garantir l'accès aux soins pour les blessés.",
    },
    sources: ["HaitiLibre", "NAGO", 
      "MSF",
    ],
    sourceLinks: [
      { name: "HaitiLibre", url: "https://www.haitilibre.com/en/news-48796-haiti-msf-civilians-and-medical-facilities-must-be-spared.html" },
      { name: "NAGO", url: "https://nago.tv/news/msf-admits-30-gunshot-and-drone-blast-victims-in-nine-days-as-port-au" },
    ],
  },
  {
    id: "ntk-thomazeau-ambassador-summoned-2026-10",
    archived: true,
    tier: "need-to-know",
    topic: "governance",
    publishedAt: "2026-10-28",
    publishedTime: "2026-10-28T13:01:44-04:00",
    headline: {
      ht: "Swadizan antre sòlda dominiken Thomazeau : Pòtoprens konvoke anbasadè dominiken an",
      fr: "Incursion présumée à Thomazeau : Port-au-Prince convoque l'ambassadeur dominicain",
    },
    brief: {
      ht: "Ministè Afè Etranjè konvoke anbasadè Faruk Miguel jedi 29 oktòb a midi apre rapò sou sòlda dominiken ki ta antre sou tè ayisyen. Enfòmasyon yo poko verifye.",
      fr: "Le ministère des Affaires étrangères convoque l'ambassadeur Faruk Miguel jeudi 29 octobre à midi après des informations sur une entrée de militaires dominicains en territoire haïtien. Rien n'est encore vérifié.",
    },
    body: {
      ht: "Nan yon lèt ki date 26 oktòb, Ministè Afè Etranjè ayisyen konvoke anbasadè dominiken an, Faruk Miguel, pou yon reyinyon jedi 29 oktòb a midi. Reyinyon an konsène rapò ki di lame dominiken an ta antre sou teritwa ayisyen.\n\nSou rezo sosyal yo, tankou yon piblikasyon Empire Média, yo di sòlda yo ta mete fanmi deyò nan Thomazeau (Lwès) epi kraze kay yo. Sous dominiken ki pa ofisyèl di kay yo te sou bò dominiken an e fanmi yo te jwenn èd pou rebati. Okenn nan vèsyon sa yo poko verifye.\n\nKonvokasyon an rive pandan Dominikani ap ajoute batayon, machin blende ak dron sou fwontyè a. 26 oktòb, prezidan Abinader te di li p ap tolere gang nan 20 km fwontyè a.",
      fr: "Dans une lettre datée du 26 octobre, le ministère haïtien des Affaires étrangères convoque l'ambassadeur dominicain, Faruk Miguel, à une rencontre jeudi 29 octobre à midi. La rencontre porte sur des informations selon lesquelles l'armée dominicaine serait entrée en territoire haïtien.\n\nSur les réseaux sociaux, notamment dans une publication d'Empire Média, des soldats auraient expulsé des familles à Thomazeau (Ouest) et détruit leurs maisons. Des sources dominicaines non officielles affirment que les maisons se trouvaient du côté dominicain et que les familles ont été aidées à se reloger. Aucune de ces versions n'a encore été vérifiée.\n\nLa convocation intervient alors que la République dominicaine renforce la frontière avec des bataillons, des blindés et des drones. Le 26 octobre, le président Abinader a déclaré qu'il ne tolérerait pas de gangs à moins de 20 km de la frontière.",
    },
    sources: [
      "HaitiLibre",
      "Diario Libre",
    ],
  },
  {
    id: "ntk-gsf-salvador-attack-2026-10",
    archived: true,
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-10-28",
    publishedTime: "2026-10-28T07:00:00-04:00",
    isBreaking: true,
    breakingHours: 12,
    headline: {
      ht: "Salvadò voye anviwon 1000 sòlda ann Ayiti apre anbiskad 18 oktòb la",
      fr: "Le Salvador dépêche environ 1000 soldats en Haïti après l'embuscade du 18 octobre",
    },
    brief: {
      ht: "Anviwon 1000 sòlda Salvador rive ann Ayiti apre kat manm misyon ONU a disparèt nan yon anbiskad gang. Kòmandman, dire ak lyen ak GSF toujou pa klè.",
      fr: "Environ 1000 soldats salvadoriens arrivent en Haïti après la disparition de quatre membres de la mission onusienne dans une embuscade de gangs. Commandement, durée et lien avec la GSF restent flous.",
    },
    body: {
      ht: "Yon sous sekirite ayisyen di Reuters ke El Salvador voye anviwon 1000 sòlda ann Ayiti apre kat manm salvadoryen nan fòs siprèsyon gang yo (misyon sipòte pa ONU) disparèt nan yon anbiskad gang toupre Pòtoprens, 18 oktòb.\n\nLi poko klè ki moun k ap kòmande kontenjan sa a, konbyen tan yo pral rete, ni si yo ap opere andeyò Gang Suppression Force la. Etazini te prete avyon kago C-130 pou mennen yo. Fòs la gen anviwon 2000 pèsonèl sou efèktif li te planifye a.\n\nMizajou : Salvadò anonse kounye a plis pase 2000 sòlda.",
      fr: "Une source sécuritaire haïtienne indique à Reuters qu'El Salvador a dépêché environ 1000 soldats en Haïti après la disparition de quatre membres salvadoriens de la force de répression des gangs (mission soutenue par l'ONU) dans une embuscade de gangs près de Port-au-Prince, le 18 octobre.\n\nIl n'est pas encore clair qui commandera ce contingent, combien de temps il restera, ni s'il opérera en dehors de la Gang Suppression Force. Les États-Unis ont prêté des avions cargo C-130 pour les transporter. La force compte environ 2000 personnels sur l'effectif prévu.\n\nMise à jour : le Salvador annonce désormais plus de 2000 soldats.",
    },
    sources: [
      "Reuters",
      "Devdiscourse",
    ],
  },
  {
    id: "ntk-intemperies-pluie-2026-10",
    archived: true,
    tier: "need-to-know",
    topic: "society",
    publishedAt: "2026-10-28",
    publishedTime: "2026-10-28T07:00:00-04:00",
    isBreaking: true,
    breakingHours: 24,
    headline: {
      ht: "Inondasyon : omwen 4 moun mouri, 847 kay kraze nan Grand Sid",
      fr: "Inondations : au moins 4 morts et 847 maisons détruites dans le Grand Sud",
    },
    brief: {
      ht: "DGPC konte omwen 4 mouri, 2 pechè disparèt, 3209 fanmi afekte ak 847 kay detwi. Vijilans oranj leve 27 oktòb; bezwen ijan rete.",
      fr: "La DGPC compte au moins 4 morts, 2 pêcheurs disparus, 3209 familles touchées et 847 maisons détruites. Alerte orange levée le 27 octobre; les besoins urgents demeurent.",
    },
    body: {
      ht: "Apre plizyè jou gwo lapli, DGPC fè yon bilten lou nan Grand Sid la: omwen 4 moun mouri (kèk medya di 5), 2 pechè disparèt, 3209 fanmi afekte, ak 847 kay detwi. Nip, Grandans ak Sid yo te pi frape.\n\nVijilans oranj te leve 27 oktòb, men otorite yo mande moun yo rete vijilan. Bezwen ijan yo enkli kit ijyèn, dyezèl, ekipman lou, ak reparasyon wout sou segman Jérémie–Chambellan.",
      fr: "Après plusieurs jours de fortes pluies, la DGPC dresse un bilan lourd dans le Grand Sud: au moins 4 morts (certains médias disent 5), 2 pêcheurs disparus, 3209 familles touchées et 847 maisons détruites. Les Nippes, la Grand'Anse et le Sud ont été les plus durement touchés.\n\nL'alerte orange a été levée le 27 octobre, mais les autorités appellent encore à la prudence. Parmi les besoins urgents: kits d'hygiène, diesel, engins lourds, et réparations sur le tronçon Jérémie–Chambellan.",
    },
    sources: [
      "DGPC / Protection civile",
      "Le Nouvelliste",
      "Le Placentin",
      "HaitiLibre",
      "AP News",
    ],
  },
  {
    id: "ntk-dr-deportations-weekend-2026-10",
    archived: true,
    tier: "need-to-know",
    topic: "society",
    publishedAt: "2026-10-29",
    publishedTime: "2026-10-29T11:15:00-04:00",
    headline: {
      ht: "Dominikani arete 4618 Ayisyen epi ekspilse 4173 nan yon sèl fen semèn",
      fr: "La République dominicaine arrête 4618 Haïtiens et en expulse 4173 en un seul week-end",
    },
    brief: {
      ht: "Se fen semèn 23–25 oktòb la ki pi chaje ane a. 28 oktòb, malgre lapli, DGM ekspilse 884 lòt moun. Abinader di li p ap tolere gang nan 20 km fwontyè a.",
      fr: "Le week-end des 23–25 octobre est le plus chargé de l'année. Le 28 octobre, malgré la pluie, la DGM a expulsé 884 personnes de plus. Abinader dit ne tolérer aucun gang à moins de 20 km de la frontière.",
    },
    body: {
      ht: "Sou fen semèn 23–25 oktòb, Direksyon Jeneral Migrasyon Dominikani (DGM) arete 4618 Ayisyen ki pa t gen papye regilye epi li ekspilse 4173 moun. Se fen semèn ki pi chaje depi kòmansman ane a.\n\n28 oktòb, malgre gwo lapli, DGM ekspilse 884 lòt etranje san papye.\n\nPrezidan Luis Abinader di gouvènman li p ap tolere okenn gang nan 20 km fwontyè a, pandan otorite yo ap sere kontwòl sou fwontyè a.",
      fr: "Sur le week-end des 23–25 octobre, la Direction générale de la migration dominicaine (DGM) a arrêté 4618 Haïtiens en situation migratoire irrégulière et expulsé 4173 personnes. C'est le week-end le plus chargé depuis le début de l'année.\n\nLe 28 octobre, malgré de fortes pluies, la DGM a expulsé 884 autres étrangers sans papiers.\n\nLe président Luis Abinader a déclaré que son gouvernement ne tolérerait aucun gang à moins de 20 km de la frontière, alors que les autorités renforcent les contrôles frontaliers.",
    },
    sources: [
      "DGM République dominicaine",
      "HaitiLibre",
    ],
  },
  {
    id: "qh-ipc-hunger-2026-10-28",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-28",
    publishedTime: "2026-11-03T05:30:00-05:00",
    headline: {
      ht: "Grangou : CARE di 6,35 milyon moun ka nan kriz nan 6 mwa, enflasyon 17%",
      fr: "Faim : selon CARE, 6,35 millions de personnes pourraient être en crise d'ici 6 mois, inflation à 17%",
    },
    teaser: {
      ht: "Dapre CARE, chif la ka monte soti 5,94 milyon jodi a. Inondasyon nan Sid la ap agrave sitiyasyon an.",
      fr: "Selon CARE, le chiffre passerait de 5,94 millions aujourd'hui à 6,35 millions. De nouvelles inondations frappent le Sud.",
    },
    brief: {
      ht: "Mizajou 3 novanm, 5 h 30 : Dapre CARE, ki site analiz IPC a, 6,35 milyon moun ka nan grangou nivo kriz nan 6 pwochen mwa yo, kont 5,94 milyon kounye a. Dapre FAO ak IPC, 5,94 milyon Ayisyen ap fè fas ak ensekirite alimantè egi. Chif la ta ka rive 6,35 milyon ant mas ak jen 2027, ki plis pase mwatye popilasyon an.",
      fr: "Mise à jour du 3 novembre, 5 h 30 : Selon CARE, qui cite l'analyse IPC, 6,35 millions de personnes pourraient connaître la faim au niveau crise dans les 6 prochains mois, contre 5,94 millions actuellement. Selon la FAO et l'IPC, 5,94 millions d'Haïtiens font face à une insécurité alimentaire aiguë. Le chiffre pourrait atteindre 6,35 millions de mars à juin 2027, soit plus de la moitié de la population.",
    },
    body: {
      ht: "Mizajou 3 novanm, 5 h 30 : Dapre CARE, rapòte pa fundsforNGOs, analiz IPC a prevwa 6,35 milyon moun ap nan ensekirite alimantè nivo kriz oswa pi mal nan 6 pwochen mwa yo. Kounye a se 5,94 milyon, sa vle di 53% popilasyon an. CARE di enflasyon an rive 17%, rekòt yo pa bon, e gwo lapli ak inondasyon semèn sa a deplase plizyè milye moun e detwi tè agrikòl, sitou nan Sid ak Sidwès. Dapre CARE, mwens pase mwatye apèl imanitè ONU a (880 milyon dola) finanse.\n\nKesyon pou lektè yo :\n• Ki plan Leta genyen pou zòn ki sot inonde yo ?\n• Poukisa lajan pou grangou toujou rive an reta ?\nDapre yon nouvo rapò IPC, pibliye ak FAO, 5,94 milyon Ayisyen ap fè fas kounye a ak ensekirite alimantè egi, youn nan nivo ki pi wo nan mond lan. Ant mas ak jen 2027, chif la prevwa rive 6,35 milyon, ki plis pase mwatye popilasyon an epi plis pase 500000 moun anplis pase menm peryòd 2026 la.\n\nPrèske 2 milyon moun ta nan faz Ijans (IPC Phase 4). Kòz yo site se vyolans gang yo, plis pase 1,5 milyon moun deplase, ogmantasyon pri manje ak gazolin, ansanm ak sechrès ak inondasyon ki gen rapò ak El Niño, ki ajoute sou lapli Grand Sid yo.\n\nWFP di li bezwen 78 milyon dola ameriken pou kontinye opere jouk mas.",
      fr: "Mise à jour du 3 novembre, 5 h 30 : Selon CARE, cité par fundsforNGOs, l'analyse IPC projette 6,35 millions de personnes en insécurité alimentaire de niveau crise ou pire dans les 6 prochains mois. Elles sont aujourd'hui 5,94 millions, soit 53% de la population. CARE indique que l'inflation atteint 17%, que les récoltes sont mauvaises et que de fortes pluies et inondations ont déplacé des milliers de personnes cette semaine et détruit des terres agricoles, surtout dans le Sud et le Sud-Ouest. Selon CARE, moins de la moitié de l'appel humanitaire de l'ONU (880 millions de dollars) est financée.\n\nQuestions aux lecteurs :\n• Quel plan l'État a-t-il pour les zones inondées ?\n• Pourquoi l'argent contre la faim arrive-t-il toujours en retard ?\nSelon un nouveau rapport de l'IPC, publié avec la FAO, 5,94 millions d'Haïtiens font actuellement face à une insécurité alimentaire aiguë, l'un des niveaux les plus élevés au monde. De mars à juin 2027, ce chiffre est projeté à 6,35 millions, soit plus de la moitié de la population et plus de 500000 personnes de plus que sur la même période en 2026.\n\nPrès de 2 millions de personnes seraient alors en phase d'Urgence (IPC Phase 4). Les causes citées sont la violence des gangs, plus de 1,5 million de déplacés, la hausse des prix des denrées et du carburant, ainsi que les sécheresses et inondations liées à El Niño, qui s'ajoutent aux pluies du Grand Sud.\n\nLe PAM indique qu'il a besoin de 78 millions de dollars américains pour poursuivre ses opérations jusqu'en mars.",
    },
    sources: ["CARE (via fundsforNGOs)", 
      "AP News",
      "WFP",
    ],
  },

  {
    id: "qh-idp-protest-pap-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-28",
    publishedTime: "2026-10-28T07:21:03-04:00",
    headline: {
      ht: "Moun ki deplase yo manifeste Pòtoprens pou mande èd ak sekirite pou retounen lakay",
      fr: "Les déplacés manifestent à Port-au-Prince pour réclamer aide et retour sécurisé",
    },
    brief: {
      ht: "Madi, nan kan Argentine Bellegarde, Ministè Kominikasyon ak OAVCT, deplase yo mete barikad epi yo boule kawotchou pou mande èd ak sekirite.",
      fr: "Mardi, dans les camps Argentine Bellegarde, Ministère de la Communication et OAVCT, des déplacés ont dressé des barricades et brûlé des pneus pour réclamer aide et sécurité.",
    },
    body: {
      ht: "Madi, moun ki nan kan Argentine Bellegarde, Ministè Kominikasyon ak OAVCT nan Pòtoprens te mete barikad epi boule kawotchou. Yo mande peman relokasyon 100000 goud (anviwon 763 dola ameriken) nan men Eta a ak Òganizasyon Entènasyonal pou Migrasyon (OIM), ansanm ak garanti sekirite pou yo ka tounen lakay.\n\nPrèske 1,5 milyon moun deplase nan peyi a.",
      fr: "Mardi, des personnes hébergées dans les camps Argentine Bellegarde, Ministère de la Communication et OAVCT à Port-au-Prince ont dressé des barricades et brûlé des pneus. Elles réclament le paiement de relocalisation de 100000 gourdes (environ 763 dollars américains) de la part de l'État et de l'Organisation internationale pour les migrations (OIM), ainsi que des garanties de sécurité pour pouvoir rentrer chez elles.\n\nPrès de 1,5 million de personnes sont déplacées dans le pays.",
    },
    sources: [
      "ERM Digital / EFE",
    ],
  },

  {
    id: "qh-repatriation-trump-tps-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-27",
    publishedTime: "2026-10-27T08:34:09-04:00",
    headline: {
      ht: "Trump: deportasyon ayisyen yo kontinye apre fen TPS; HBA mande sispansyon",
      fr: "Trump : les déportations d’Haïtiens continuent après la fin du TPS ; HBA demande une suspension",
    },
    brief: {
      ht: "Administrasyon Trump kontinye voye ayisyen tounen, sitou nan Kap Ayisyen. Haitian Bridge Alliance denonse yon vòl rapòte 22 oktòb epi li mande Sena a retabli TPS pou plis pase 300000 ayisyen. TPS ak otòrizasyon travay te sispann 27 jiyè 2026. GARR di Etazini te voye tounen omwen 1187 ayisyen ane sa a; HRW te konte plizyè vòl depi 20 out. Retounen yo jwenn vyolans gang, deplase, e ti sipò reentegrasyon.",
      fr: "L’administration Trump continue de renvoyer des Haïtiens, surtout vers Cap-Haïtien. Haitian Bridge Alliance dénonce un vol rapporté le 22 octobre et demande au Sénat de rétablir le TPS pour plus de 300000 Haïtiens. Le TPS et l’autorisation de travail ont pris fin le 27 juillet 2026. Le GARR indique qu’au moins 1187 Haïtiens ont été renvoyés des États-Unis cette année ; HRW a compté plusieurs vols depuis le 20 août. Les rapatriés retrouvent violence des gangs, déplacements et peu de soutien à la réintégration.",
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
    id: "qh-cassation-18-dossiers-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "justice",
    publishedAt: "2026-10-21",
    publishedTime: "2026-10-21T07:00:00-04:00",
    headline: {
      ht: "Kou Kasasyon: 18 dosye nan premye odyans ane jidisyè 2026-2027",
      fr: "Cour de cassation : 18 dossiers à la reprise des audiences 2026-2027",
    },
    brief: {
      ht: "Lendi 19 oktòb, Kou Kasasyon an rekòmanse odyans yo ak 18 dosye: 10 òdinè (ki genyen 3 demann resizasyon) ak 8 ijan. Prezidan Jean-Joseph Lebrun te prezide; Yves Altidor te reprezante ministè piblik la. Tribinal la di li vle trete plis dosye pase ane pase a.",
      fr: "Lundi 19 octobre, la Cour de cassation a repris ses audiences avec 18 dossiers: 10 ordinaires (dont 3 demandes de récusation) et 8 urgents. Le président Jean-Joseph Lebrun a présidé; Yves Altidor représentait le ministère public. La haute juridiction affirme vouloir traiter plus de dossiers que lors de l’exercice précédent.",
    },
    sources: ["Le Nouvelliste", "L’Observatoire"],
    sourceLinks: [
      { name: "fundsforNGOs (CARE)", url: "https://news.fundsforngos.org/2026/11/03/care-ipc-analysis-haiti-6-35-million-acute-food-insecurity/" },
    ],
  },
  {
    id: "qh-cspj-certification-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "justice",
    publishedAt: "2026-10-05",
    publishedTime: "2026-10-05T07:00:00-04:00",
    headline: {
      ht: "CSPJ: 119 majistra sètifye, 17 pran kat wouj apre analiz 159 dosye",
      fr: "CSPJ : 119 magistrats certifiés, 17 refusés après examen de 159 dossiers",
    },
    brief: {
      ht: "Konsèy Siperyè Pouvwa Jidisyè a te egzamine 159 dosye (7-10 septanm). Li sètifye 119 majistra epi li refize 17 lòt, sitou sou entegrite pwofesyonèl ak moral. 2 te abandone pòs yo, 7 ale nan retrèt, e 14 dosye rete anba ankèt. Nan lis yo ki pa sètifye: Nivrose Alexis, Carl Giovanny Aubourg, Choubert Baptiste ak plizyè lòt.",
      fr: "Le Conseil supérieur du pouvoir judiciaire a examiné 159 dossiers (7-10 septembre). Il a certifié 119 magistrats et refusé 17 autres, notamment pour des motifs d’intégrité professionnelle et morale. 2 ont abandonné leur poste, 7 partent à la retraite, et 14 dossiers restent sous enquête. Parmi les non-certifiés: Nivrose Alexis, Carl Giovanny Aubourg, Choubert Baptiste et d’autres.",
    },
    sources: ["Haiti Chronicle", "CSPJ"],
  },

  {
    id: "qh-gov-gonave-mict-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "governance",
    publishedAt: "2026-10-26",
    publishedTime: "2026-10-26T07:00:00-04:00",
    headline: {
      ht: "MICT: La Gonav, sekirite ak sèvis de baz nan mitan priyorite yo",
      fr: "MICT : La Gonâve, sécurité et services de base au centre des priorités",
    },
    brief: {
      ht: "Minis Enteryè Paul Antoine Bien-Aimé te prezide yon sesyon travay sou sitiyasyon awondisman La Gonav. Yo pale de ensekirite, aksè limite a sèvis de baz, difikilte ekonomik ak feblès kowòdinasyon ant sèvis leta ak otorite lokal yo. Sekretè deta Sharina Lochard mande pi bon kominikasyon; patisipan yo separe pwoblèm rapid ak sa ki bezwen swivi.",
      fr: "Le ministre de l’Intérieur Paul Antoine Bien-Aimé a présidé une session de travail sur la situation de l’arrondissement de La Gonâve. Au menu: insécurité, accès limité aux services de base, difficultés économiques et faible coordination entre services de l’État et autorités locales. La secrétaire d’État Sharina Lochard a plaidé pour une meilleure communication; les participants ont séparé les problèmes réglables rapidement de ceux qui exigent un suivi.",
    },
    sources: ["Le Soulouquois", "iciHaïti"],
  },
  {
    id: "qh-gov-sipdec-data-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "governance",
    publishedAt: "2026-10-21",
    publishedTime: "2026-10-21T07:00:00-04:00",
    headline: {
      ht: "SIPDEC: done lokal pou desantralizasyon; pa gen resansman depi 2003",
      fr: "SIPDEC : des données locales pour la décentralisation ; pas de recensement depuis 2003",
    },
    brief: {
      ht: "Dezyèm konferans SIPDEC (16-18 oktòb, Villa Thérèse) mete kolektivite teritoryal yo nan sant la. Ayiti pa fè resansman depi 2003 epi li depann sou pwojeksyon. Enstitisyon piblik ak prive, pratisyen ak chèchè diskite kijan pou pase de done a desizyon pou otorite lokal yo.",
      fr: "La 2e conférence SIPDEC (16-18 octobre, Villa Thérèse) a placé les collectivités territoriales au centre. Haïti n’a pas tenu de recensement depuis 2003 et s’appuie sur des projections. Institutions publiques et privées, praticiens et chercheurs ont débattu comment passer des données à la décision pour les autorités locales.",
    },
    sources: ["Le Nouvelliste"],
  },
  {
    id: "qh-gov-casec-territoire-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "governance",
    publishedAt: "2026-10-10",
    publishedTime: "2026-10-10T07:00:00-04:00",
    headline: {
      ht: "CASEC ak Eta santral: ki wòl pou devlopman teritoryal?",
      fr: "CASEC et État central : quel rôle pour le développement territorial ?",
    },
    brief: {
      ht: "Agronòm Bonhomme Jeannel (Radio Principal FM) raple CASEC yo se otorite pwoksimite nan seksyon kominal yo, men yo bezwen mwayen ak klète sou konpetans. Devlopman teritoryal pa ka rete sou yo sèlman: Eta santral la kenbe politik nasyonal, gwo enfrastrikti ak redistribisyon. Li mande pi bon kowòdinasyon ak alokasyon ekitab.",
      fr: "L’agronome Bonhomme Jeannel (Radio Principal FM) rappelle que les CASEC sont des autorités de proximité dans les sections communales, mais qu’ils manquent de moyens et de clarté sur les compétences. Le développement territorial ne peut reposer sur eux seuls: l’État central garde les politiques nationales, les grandes infrastructures et la redistribution. Il appelle à une meilleure coordination et à une allocation équitable des ressources.",
    },
    sources: ["Radio Principal FM"],
  },
  {
    id: "qh-metronome-corvington-guerrier-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "gossip",
    publishedAt: "2026-10-26",
    publishedTime: "2026-10-26T20:03:58-04:00",
    isManual: true,
    headline: {
      ht: "Corvington ak Guerrier devan lajist pou Radio Télé Metronome",
      fr: "Corvington et Guerrier s’affrontent en justice autour de Radio Télé Metronome",
    },
    brief: {
      ht: "Difè ap boule nan Radio Télé Metronome. Jean Corvington (Me Hantz Ludwig Joseph) ak CEO Guerrier Dieuseul (Me Mario Delcy) ap ale nan tribinal ayisyen. Selon Infos Partage, yo akize Corvington li pran paj X ak YouTube medya a pou zafè pèsonèl, deyò nòm jounalis. Guerrier anboche Me Delcy pou bloke li sou rezo yo. Yo di Corvington deja resevwa de konvokasyon.",
      fr: "Le conflit enfle à Radio Télé Metronome. Jean Corvington (Me Hantz Ludwig Joseph) et le CEO Guerrier Dieuseul (Me Mario Delcy) se retrouvent devant la justice haïtienne. Selon Infos Partage, Corvington est accusé d’avoir détourné les pages X et YouTube du média pour des affaires personnelles, hors des normes journalistiques. Guerrier a engagé Me Delcy pour lui interdire l’usage de ces pages. Corvington aurait déjà reçu deux convocations.",
    },
    sources: ["Infos Partage (@infospartagesos)", "Opak News — Les Coulisses"],
  },
  {
    id: "qh-gossip-ulcc-martelly-return-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "gossip",
    publishedAt: "2026-10-27",
    publishedTime: "2026-10-27T08:32:06-04:00",
    headline: {
      ht: "apre ULCC, Martelly ak Céant tounen; avoka yo nan afè Metronome",
      fr: "après l’ULCC, Martelly et Céant reviennent ; leurs avocats dans l’affaire Métronome",
    },
    brief: {
      ht: "Depi 2 jiyè, Hans Ludwig Joseph pa DG ULCC ankò. Nan jou sa yo, Jean-Henry Céant ak Michel Martelly tounen nan peyi a; tou de te nan rapò ULCC. Koulye a, nan lit Metronome a, Corvington gen Me Joseph kòm avoka, pandan Guerrier gen Me Mario Delcy, ke plizyè medya prezante kòm avoka Martelly. Sou rezo yo, moun ap mande si lit medya a pa gen koulè politik tou.",
      fr: "Depuis le 2 juillet, Hans Ludwig Joseph n’est plus DG de l’ULCC. Dans la foulée, Jean-Henry Céant et Michel Martelly sont revenus au pays ; tous deux figuraient dans des rapports de l’ULCC. Dans le litige Métronome, Corvington a Me Joseph pour avocat, tandis que Guerrier a Me Mario Delcy, présenté par plusieurs médias comme avocat de Martelly. Sur les réseaux, on se demande si le conflit médiatique n’a pas aussi une couleur politique.",
    },
    sources: ["Mag2News", "Lakay Info", "Rezo Nòdwès", "Satellite509", "Opak News — Les Coulisses"],
  },
  {
    id: "qh-gossip-rutshelle-teddy-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "gossip",
    publishedAt: "2026-10-27",
    publishedTime: "2026-10-27T08:32:06-04:00",
    headline: {
      ht: "Rutshelle ak Teddy Hashtag ofisyèlman ansanm",
      fr: "Rutshelle et Teddy Hashtag officialisent leur couple",
    },
    brief: {
      ht: "Apre mwa tripotay sou rezo yo, Rutshelle Guillaume ak Teddy Hashtag pibliye foto koup la. Fanatik yo te deja soupsonen depi kolaborasyon « Ou banm lanmou ». An kèk èdtan, pòs yo gaye sou Instagram, Facebook, TikTok ak X. Anpil moun mande si yo pral fè plis mizik ansanm.",
      fr: "Après des mois de rumeurs sur les réseaux, Rutshelle Guillaume et Teddy Hashtag ont publié des photos de couple. Les fans soupçonnaient déjà une histoire depuis la collaboration « Ou banm lanmou ». En quelques heures, les posts ont envahi Instagram, Facebook, TikTok et X. Beaucoup se demandent s’ils feront davantage de musique ensemble.",
    },
    sources: ["Lakay Info 509", "Opak News — Les Coulisses"],
  },
  {
    id: "qh-cep-elections-hold-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "politics",
    publishedAt: "2026-10-26",
    publishedTime: "2026-10-26T07:00:00-04:00",
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
    archived: true,
    tier: "quick-hit",
    topic: "security",
    publishedAt: "2026-10-19",
    publishedTime: "2026-10-19T07:00:00-04:00",
    headline: {
      ht: "Vyolans gang yo gaye nan kanpay: 1123 mouri depi jiyè",
      fr: "La violence des gangs gagne les campagnes : 1123 morts depuis juillet",
    },
    brief: {
      ht: "BINUH di gang yo ap adapte taktik yo: otaj, reprezal, e atak nan zòn riral (Kenskòf, Sen Michèl Lataye, Marigo, Leyogàn). 241 moun te mouri nan Lwès ak Latibonit paske yo te reziste. Fòs la gen 1563 inifòm sou 5550 otorize.",
      fr: "Le BINUH indique que les gangs adaptent leurs tactiques : otages, représailles et attaques en zones rurales (Kenscoff, Saint-Michel-de-l’Atalaye, Marigot, Léogâne). 241 personnes ont été tuées dans l’Ouest et l’Artibonite pour avoir résisté. La Force compte 1563 uniformes sur 5550 autorisés.",
    },
    sources: ["ONU Info", "UN News", "Rapò Sekretè Jeneral"],
  },
  {
    id: "qh-humanitarian-idp-15m",
    archived: true,
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-19",
    publishedTime: "2026-10-19T07:00:00-04:00",
    headline: {
      ht: "Prèske 1,5 milyon deplase: plan imanitè 2026 a mwatye finanse",
      fr: "Près de 1,5 million de déplacés : le plan humanitaire 2026 à moitié financé",
    },
    brief: {
      ht: "BINUH rapòte plis pase 17000 nouvo deplase nan twa mwa ki sot pase yo; total la prèske 1,5 milyon, mwatye se timoun. Ekonomi an prevwa kontrakte pou setyèm ane konsèktif; bezwen imanitè yo depase mwayen yo genyen.",
      fr: "Le BINUH rapporte plus de 17000 nouveaux déplacés sur les trois derniers mois ; le total approche 1,5 million, dont la moitié d’enfants. L’économie devrait se contracter pour une septième année consécutive ; les besoins humanitaires dépassent les moyens disponibles.",
    },
    sources: ["UN News", "BINUH", "WFP"],
  },
  {
    id: "qh-brh-digital-payments",
    archived: true,
    tier: "quick-hit",
    topic: "tech",
    publishedAt: "2026-10-20",
    publishedTime: "2026-10-20T07:00:00-04:00",
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
    archived: true,
    tier: "quick-hit",
    topic: "commerce",
    publishedAt: "2026-10-18",
    publishedTime: "2026-10-18T07:00:00-04:00",
    headline: {
      ht: "Karavàn komès: objektif 5000 antrepriz fòmèl nan 10 depatman",
      fr: "Caravane du commerce : objectif 5000 entreprises formelles dans les 10 départements",
    },
    brief: {
      ht: "Minis James Monazard lanse yon pwogram rejyonal nan Montana (16 oktòb) pou ede ti biznis enskri non komèsyal ak kat pwofesyonèl. Biwo depatmantal yo ap resevwa òdinatè; platfòm enskripsyon sou entènèt lan te lanse nan fen 2024.",
      fr: "Le ministre James Monazard a lancé un programme régional à l’Hôtel Montana (16 octobre) pour aider les petites entreprises à enregistrer leurs noms commerciaux et cartes professionnelles. Les bureaux départementaux recevront du matériel informatique ; la plateforme d’enregistrement en ligne date de fin 2024.",
    },
    sources: ["Le Soulouquois", "Ministère du Commerce"],
  },
  {
    id: "qh-aiesu-startups-uni",
    archived: true,
    tier: "quick-hit",
    topic: "tech",
    publishedAt: "2026-10-11",
    publishedTime: "2026-10-11T07:00:00-04:00",
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
    archived: true,
    tier: "quick-hit",
    topic: "politics",
    publishedAt: "2026-10-15",
    publishedTime: "2026-10-15T07:00:00-04:00",
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
  {
    id: "qh-prise-a-partie-elisee-2026-10",
    archived: true,
    tier: "quick-hit",
    topic: "justice",
    publishedAt: "2026-10-27",
    publishedTime: "2026-10-27T13:21:51-04:00",
    isManual: true,
    headline: {
      ht: "Prise à partie et l’article 470 du C.P.C. : ce que dit réellement l’arrêt du 2 juin 2026",
      fr: "Prise à partie et l’article 470 du C.P.C. : ce que dit réellement l’arrêt du 2 juin 2026",
    },
    brief: {
      ht: "Le 2 juin 2026, la Cour de cassation a admis une prise à partie contre le juge Loubens Elisée, sur requête de M. Jemley Marc Jean-Baptiste. L’arrêt a été signifié le 8 juin. Enjeu: le magistrat doit-il s’abstenir? L’article 470 et le précédent de 1997 fixent la réponse en droit.",
      fr: "Le 2 juin 2026, la Cour de cassation a admis une prise à partie contre le juge Loubens Elisée, sur requête de M. Jemley Marc Jean-Baptiste. L’arrêt a été signifié le 8 juin. Enjeu: le magistrat doit-il s’abstenir? L’article 470 et le précédent de 1997 fixent la réponse en droit.",
    },
    body: {
      ht: "Sou 2 jen 2026, Kou Kasasyon an admèt yon demann priz a pati kont jij Loubens Elisée, sou demann Mesye Jemley Marc Jean-Baptiste. Arete a te siyifye 8 jen 2026 bay jij la, Dwayen an ak Pakè a. Kesyon an: èske majistra a dwe sispann trete dosye sa a ankò?\n\nArete a pa itilize mo « resizasyon ». Sou pwen sa a, obsèvasyon an jis; li pa fèmen kesyon dwa a. Atik 469 Kòd pwosedi sivil la pèmèt Kou a admèt oswa rejte yon demann pou refi jistis. Atik 470 fikse efè itil la: yon fwa demann lan admèt epi siyifye, majistra a « ap absteni konnen diferans lan » ak tout kòz pati a, « sou pein nilite jijman yo ».\n\nDezyèm Seksyon an te deja trase liy sa a. Pa arete 25 novanm 1997 (John Mills Plaisival ak Joubert Abner Lunel c. Lise Pierre, Pierre, jij enstriksyon), li te admèt yon priz a pati pou refi jistis, paske pa t gen òdonans klòti apre delè atik 7 lwa 26 jiyè 1979 ak de rekizisyon. Li pa te ekri « desèzi ». Li te òdone pou demann lan notifye jij la, « ki pral dwe […] konfòme li ak dispozisyon atik 470 C.P.C. »\n\nDosye 2026 lan suiv menm lojik la. Depi siyifikasyon 8 jen 2026 la, atik 470 aplike: jij Elisée te dwe absteni konnen diferans konsènan Mesye Jean-Baptiste. Nenpòt zak enstriksyon depi lè sa a, dapre tèks la, frape ak nilite.\n\nNou pa di: « Kou a te resize jij Loubens Elisée ». Nou di pito: « Kou a admèt priz a pati Mesye Jemley Marc Jean-Baptiste; siyifikasyon 8 jen 2026 mete atik 470 an aplikasyon; presedan 1997 (Plaisival ak Lunel c. Lise Pierre, Pierre) fikse sans admisyon an. »\n\nKou a pa bezwen mande jij la dessèzi: lè li renvoi li nan atik 470, li montre yon tèks ki klè. Yon fwa arete pi wo tribinal la siyifye, nenpòt jijman li bay nan dosye a nil.\n\nSiyen : Blaise Antoine Joseph (BAJ)",
      fr: "Le 2 juin 2026, la Cour de cassation a admis une prise à partie contre le juge Loubens Elisée, sur requête de M. Jemley Marc Jean-Baptiste. L’arrêt a été signifié le 8 juin 2026 au juge, au Doyen et au Parquet. Enjeu: le magistrat doit-il s’abstenir de connaître encore de ce dossier?\n\nL’arrêt n’emploie pas le mot « récusation ». Sur ce point, l’observation est exacte; elle ne clôt pas la question de droit. L’article 469 du Code de procédure civile permet à la Cour d’admettre ou de rejeter une requête en déni de justice. L’article 470 en fixe l’effet utile: une fois la requête admise et signifiée, le magistrat « s’abstiendra de la connaissance du différend » et de toutes les causes de la partie, « à peine de nullité des jugements ».\n\nLa Deuxième Section a déjà tracé cette ligne. Par arrêt du 25 novembre 1997 (John Mills Plaisival et Joubert Abner Lunel c. Lise Pierre, Pierre, juge d’instruction), elle a admis une prise à partie pour déni de justice, faute d’ordonnance de clôture après le délai de l’article 7 de la loi du 26 juillet 1979 et deux réquisitions. Elle n’a pas écrit « dessaisi ». Elle a ordonné que la requête soit notifiée au juge, « qui sera tenu […] de se conformer aux dispositions de l’article 470 du C.P.C. »\n\nLe dossier de 2026 s’inscrit dans la même logique. À compter de la signification du 8 juin 2026, l’article 470 s’applique: le juge Elisée devait s’abstenir de connaître du différend concernant M. Jean-Baptiste. Tout acte d’instruction posé depuis lors est, selon le texte, frappé de nullité.\n\nOn ne dira donc pas: « la Cour a récusé le juge Loubens Elisée ». On dira plutôt: « la Cour a admis la prise à partie formée par M. Jemley Marc Jean-Baptiste; la signification du 8 juin 2026 a mis en œuvre l’article 470; le précédent de 1997 (Plaisival et Lunel c. Lise Pierre, Pierre) fixe le sens de cette admission. »\n\nLa Cour n’a pas à enjoindre au juge de se dessaisir: en le renvoyant à l’article 470, elle vise un texte clair. Une fois l’arrêt de la plus haute juridiction signifié, tout jugement qu’il rend dans l’affaire est nul.\n\nSigné : Blaise Antoine Joseph (BAJ)",
    },
    sources: ["Blaise Antoine Joseph (BAJ)"],
  },
];

export function getStoryById(id: string): Story | undefined {
  return STORIES.find((s) => s.id === id);
}

const DAY_MS = 86400000;

/** Publish instant (ms). Date-only stories fall back to that date at 00:00 Haiti time (-04:00), so the badge ends at day's end. */
function publishMs(story: Story): number {
  if (story.publishedTime) {
    const t = Date.parse(story.publishedTime);
    if (!Number.isNaN(t)) return t;
  }
  return Date.parse(`${story.publishedAt.slice(0, 10)}T00:00:00-04:00`);
}

/** Newest first by publish time; ties keep array order. */
export function sortNewestFirst(list: Story[]): Story[] {
  return list
    .map((s, i) => ({ s, i, t: publishMs(s) }))
    .sort((a, b) => (+!!b.s.pinned - +!!a.s.pinned) || (a.t === b.t ? a.i - b.i : b.t - a.t))
    .map((x) => x.s);
}

/** "New" = less than 24h since publishedTime (date-only: until end of that day). */
export function isNewStory(story: Story, now = Date.now()): boolean {
  if (story.quiet) return false;
  const t = publishMs(story);
  const age = now - t;
  return age >= 0 && age < DAY_MS;
}

export function needToKnowStories(): Story[] {
  // Standing rule: Sports stories never take top-story (Need to Know) slots; they live only in the Sports section.
  // Editorial hold: the prolonged-detention opinion stays pinned at #1, and the institutions/GRYLA opinion stays #2.
  // Approved 8 Nov 2026: the seed story sits at #3, immediately after those two opinions.
  const list = sortNewestFirst(STORIES.filter((s) => !s.archived && s.tier === "need-to-know" && s.topic !== "sports"));
  const holdId = "ntk-opinion-institutions-gryla-2026-11-06";
  const holdAt = list.findIndex((s) => s.id === holdId);
  if (holdAt > 1) {
    const [held] = list.splice(holdAt, 1);
    list.splice(1, 0, held);
  }
  const seedsId = "ntk-sud-semences-garanties-2026-11-08";
  const seedsAt = list.findIndex((s) => s.id === seedsId);
  if (seedsAt > 2) {
    const [seeds] = list.splice(seedsAt, 1);
    list.splice(2, 0, seeds);
  }
  return list;
}

export function quickHitStories(): Story[] {
  return sortNewestFirst(STORIES.filter((s) => !s.archived && (s.tier === "quick-hit" || s.topic === "sports")));
}

/** BREAKING badge: shown for breakingHours (default 6) after publishedTime; updates republish by bumping publishedTime. */
export function breakingExpiresMs(story: Story): number {
  return publishMs(story) + (story.breakingHours ?? 6) * 3600000;
}
export function isBreakingActive(story: Story, now = Date.now()): boolean {
  if (!story.isBreaking) return false;
  const t = publishMs(story);
  return now >= t && now < breakingExpiresMs(story);
}

export function isUrgentActive(story: Story, now = Date.now()): boolean {
  if (!story.isUrgent) return false;
  if (story.urgentHours == null) return true;
  const t = publishMs(story);
  return now >= t && now < t + story.urgentHours * 3600000;
}
