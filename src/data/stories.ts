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
    id: "qh-rhajac-martelly-una-haiti-2026-11-02",
    tier: "need-to-know",
    topic: "politics",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-03T02:45:00-05:00",
    isBreaking: true,
    breakingHours: 12,
    author: { fr: "Par Blaise Antoine Joseph (BAJ)", ht: "Pa Blaise Antoine Joseph (BAJ)" },
    headline: {
      ht: "RHAJAC akize Martelly, san prèv piblik, li ta dèyè lèt UNA-Haiti bay ONU kont operasyon salvadoryen yo",
      fr: "Le RHAJAC accuse Martelly, sans preuves publiques, d'être derrière la lettre d'UNA-Haiti à l'ONU contre les opérations salvadoriennes",
    },
    teaser: {
      ht: "Dapre RHAJAC, ansyen prezidan an ta mobilize Harvey Dupiton, Randolf St Léger ak Jean Philippe Vixamar. Rezo a pale tou de pwomès amnisti bay chèf gang. Okenn moun yo site pa reponn.",
      fr: "Selon le RHAJAC, l'ancien président aurait mobilisé Harvey Dupiton, Randolf St Léger et Jean Philippe Vixamar. Le réseau évoque aussi de présumées promesses d'amnistie à des chefs de gangs. Aucune des personnes citées n'a répondu.",
    },
    brief: {
      ht: "Mizajou 3 novanm, 2 h 45 : Nan yon nòt 2 novanm, RHAJAC akize Michel Martelly li ta fè voye lèt UNA-Haiti 28 oktòb la bay ONU pou kanpe operasyon salvadoryen yo. Akizasyon yo chita sou sous anonim, san prèv piblik. Martelly ak lòt moun yo site yo pa t reponn.",
      fr: "Mise à jour du 3 novembre, 2 h 45 : Dans une note du 2 novembre, le RHAJAC accuse Michel Martelly d'avoir fait adresser à l'ONU la lettre d'UNA-Haiti du 28 octobre contre les opérations salvadoriennes. Les accusations reposent sur des sources anonymes, sans preuves publiques. Martelly et les autres personnes citées n'avaient pas répondu.",
    },
    body: {
      ht: "Mizajou 3 novanm, 2 h 45 : Nan yon nòt denonsyasyon ki date lendi 2 novanm 2026, sekretè jeneral li, Djovany Michel, siyen, Rezo jounalis ayisyen kont koripsyon (RHAJAC) akize ansyen prezidan Michel Joseph Martelly li ta, dapre enfòmasyon rezo a, chèche fè kanpe operasyon militè salvadoryen yo kont gang yo. Plizyè medya rapòte nòt la : Rezo Nòdwès, Réalité Info, Satellite509, Décodage Info, FCN ak RL News Haïti. Djovany Michel pataje l tou sou X.\n\nDapre RHAJAC, Martelly ta mande Harvey Dupiton, Randolf St Léger ak Jean Philippe Vixamar fè voye yon lèt bay sekretè jeneral ONU, António Guterres, nan non UNA-Haiti. Lèt sa a, ki date 28 oktòb, akize fòs salvadoryen yo de bonbadman, tire elikoptè ame ak atak zam lou depi 22 oktòb nan Kwadebouke, Kanaran ak Plenn Kildesak. Lèt la egziste : prezidan Nayib Bukele pibliye yon foto l sou X 31 oktòb, ak dat 28 oktòb la ansèkle, e li rejte akizasyon yo. Dapre NAGO, se Harvey Dupiton, fondatè UNA-Haiti, ki siyen l. Malgre non li, UNA-Haiti pa fè pati ONU.\n\nSa ki rete yon akizasyon, se wòl yo prete Martelly a. Dapre Réalité Info ak Rezo Nòdwès, nòt la chita sou sous anonim, e li pa gen ni kopi lèt la ni prèv lòd yo di ansyen prezidan an ta bay. RHAJAC panse demach sa yo ta ka gen lyen ak enterè politik Martelly ak kandidati li pou prezidan anba banyè DEBLOKE. Li di tou ansyen prezidan an ta pwomèt chèf gang yo amnisti pou yo sipòte l. Dapre Réalité Info, okenn prèv dokimantè pa pibliye pou akizasyon sa a.\n\nRHAJAC raple Jean Philippe Vixamar te nonmen direktè jeneral BNC anba Martelly, 11 novanm 2011. Li site tou sanksyon Trezò ameriken an (out 2024) ak Inyon Ewopeyen (desanm 2025) kont ansyen prezidan an. Sanksyon sa yo se mezi administratif, se pa yon kondanasyon penal.\n\nRezo a mande otorite jidisyè ayisyen ak ekspè ONU louvri yon ankèt pou verifye akizasyon yo e etabli responsablite yo.\n\nLè nou t ap pibliye, nou pa t jwenn okenn repons piblik Michel Martelly, UNA-Haiti, Harvey Dupiton, Randolf St Léger oswa Jean Philippe Vixamar. Nou toujou ap tann vèsyon pa yo. Yo prezime inosan, e yon nòt denonsyasyon pa pwouve yo patisipe.\n\nKesyon pou lektè yo :\n• Si RHAJAC gen sous, poukisa li pa pibliye okenn dokiman ?\n• Kiyès ki ekri lèt 28 oktòb la vre, e kiyès ki peye pou li ?\n• Èske lajistis ayisyen ap louvri yon ankèt, oswa dosye sa a ap fini tankou lòt yo ?\n• Èske yon kandida pou prezidan ki anba sanksyon ka rete an silans devan yon akizasyon konsa ?",
      fr: "Mise à jour du 3 novembre, 2 h 45 : Dans une note de dénonciation datée du lundi 2 novembre 2026 et signée par son secrétaire général, Djovany Michel, le Réseau haïtien des journalistes anti-corruption (RHAJAC) accuse l'ancien président Michel Joseph Martelly d'avoir, selon ses informations, cherché à obtenir l'arrêt des opérations militaires salvadoriennes contre les gangs. Plusieurs médias ont rapporté la note : Rezo Nòdwès, Réalité Info, Satellite509, Décodage Info, FCN et RL News Haïti. Djovany Michel l'a aussi relayée sur X.\n\nSelon le RHAJAC, Martelly aurait sollicité Harvey Dupiton, Randolf St Léger et Jean Philippe Vixamar pour faire adresser une lettre au secrétaire général de l'ONU, António Guterres, au nom d'UNA-Haiti. Cette lettre, datée du 28 octobre, accuse les forces salvadoriennes de bombardements aériens, de tirs d'hélicoptères armés et d'assauts à l'arme lourde depuis le 22 octobre à Croix-des-Bouquets, à Canaan et dans la Plaine du Cul-de-Sac. La lettre existe : le président Nayib Bukele en a publié une photo sur X le 31 octobre, date du 28 octobre entourée, et a rejeté ces accusations. Selon NAGO, Harvey Dupiton, fondateur d'UNA-Haiti, l'a signée. Malgré son nom, UNA-Haiti ne fait pas partie de l'ONU.\n\nCe qui reste une accusation, c'est le rôle prêté à Martelly. Selon Réalité Info et Rezo Nòdwès, la note s'appuie sur des sources anonymes et ne contient ni copie de la lettre ni preuve des instructions présumées de l'ancien président. Le RHAJAC estime que ces démarches pourraient être liées aux intérêts politiques de Martelly et à sa candidature à la présidentielle sous la bannière de DEBLOKE. Il affirme aussi que l'ancien président aurait promis une amnistie à des chefs de gangs en échange de leur soutien. Selon Réalité Info, cette accusation n'est accompagnée d'aucune preuve documentaire rendue publique.\n\nLe RHAJAC rappelle que Jean Philippe Vixamar avait été nommé directeur général de la BNC sous Martelly, le 11 novembre 2011. Il cite aussi les sanctions du Trésor américain (août 2024) et de l'Union européenne (décembre 2025) contre l'ancien président. Ces sanctions sont des mesures administratives, pas une condamnation pénale.\n\nLe réseau demande aux autorités judiciaires haïtiennes et aux experts de l'ONU d'ouvrir une enquête pour vérifier ces accusations et établir les responsabilités.\n\nAu moment de publier, nous n'avons trouvé aucune réponse publique de Michel Martelly, d'UNA-Haiti, de Harvey Dupiton, de Randolf St Léger ou de Jean Philippe Vixamar. Leur version reste attendue. Ils sont présumés innocents, et une note de dénonciation ne prouve pas leur implication.\n\nQuestions aux lecteurs :\n• Si le RHAJAC a des sources, pourquoi ne publie-t-il aucun document ?\n• Qui a vraiment rédigé la lettre du 28 octobre, et qui l'a payée ?\n• La justice haïtienne ouvrira-t-elle une enquête, ou ce dossier finira-t-il comme les autres ?\n• Un candidat à la présidentielle sous sanctions peut-il garder le silence face à une accusation pareille ?",
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
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-11-02",
    publishedTime: "2026-11-02T20:31:00-05:00",
    isBreaking: true,
    breakingHours: 12,
    headline: {
      ht: "PNH, GSF ak sòlda salvadoryen lanse yon gwo ofansiv atè nan Plenn Kildesak kont Chen Mechan ak 400 Mawozo",
      fr: "PNH, GSF et soldats salvadoriens lancent une offensive terrestre dans la Plaine du Cul-de-Sac contre Chen Mechan et 400 Mawozo",
    },
    teaser: {
      ht: "PNH konfime yon gwo operasyon nan Chada, pon Kwadèmisyon ak Santo 17. Dapre EFE, sòlda salvadoryen yo avanse nan blende. Bilan an poko ofisyèl.",
      fr: "La PNH confirme une vaste opération à Chada, au pont de Croix-des-Missions et à Santo 17. Selon EFE, les soldats salvadoriens avancent en blindés. Aucun bilan officiel.",
    },
    brief: {
      ht: "PNH di l lanse lendi 2 novanm, ak sipò GSF, yon gwo operasyon nan Plenn Kildesak. Dapre EFE, sòlda salvadoryen yo avanse atè pou premye fwa kont Chen Mechan ak 400 Mawozo. Yon dizèn bandi ta mouri, men chif sa a pa ofisyèl.",
      fr: "La PNH dit avoir lancé ce lundi 2 novembre, avec l'appui de la GSF, une vaste opération dans la Plaine du Cul-de-Sac. Selon EFE, les soldats salvadoriens avancent au sol pour la première fois contre Chen Mechan et 400 Mawozo. Une dizaine de bandits auraient été tués, chiffre non officiel.",
    },
    body: {
      ht: "Nan yon kominike PouSiOuPaTKonnen repran, Polis nasyonal d Ayiti (PNH) di li lanse lendi 2 novanm 2026, « ak sipò GSF », yon gwo operasyon nan plizyè zòn nan Plenn Kildesak. Dapre PNH, objektif la se kraze peyaj klandesten yo, bloke tantativ kidnapin ak tout abi bandi yo fè popilasyon an sibi. Operasyon an t ap fèt nan kafou Chada, pon Kwadèmisyon ak Santo 17, e wo kòmandman PNH mobilize plizyè blende. Kominike a pa pale de sòlda salvadoryen ki disparèt yo.\n\nDapre ajans EFE, nan yon depèch Infobae pibliye, se premye gwo operasyon sòlda Salvadò yo depi yo kòmanse rive 22 oktòb. Yo avanse nan yon dizèn machin blende pou demantle gang Chen Mechan ak 400 Mawozo, gang Lanmò Sanjou dirije. Gang sa yo akize nan disparisyon 4 sòlda salvadoryen apre yon anbiskad nan Kwadebouke. Toujou dapre EFE, bandi yo leve barikad pou bloke antre sòlda yo.\n\nDapre EFE, ki site laprès ayisyen, omwen yon dizèn manm gang mouri nan batay nan Santo ak Kwadèmisyon. PouSiOuPaTKonnen pale tou de dron kamikaz ak yon dizèn bandi mouri, men li presize rapò sa yo poko ofisyèl. PNH pa bay bilan. Opak News pa ka verifye chif sa yo.\n\nEFE rapòte tou, dapre kèk medya, koalisyon Viv Ansanm ta fòse abitan nan zòn Laplèn desann nan lari anba menas lanmò pou pwoteste kont operasyon an. Enfòmasyon sa a pa verifye.\n\nKesyon pou lektè yo : • Ki pwoteksyon sivil Plenn Kildesak yo genyen pandan operasyon an ? • Kilè PNH ap bay yon bilan ofisyèl ? • Èske operasyon sa a ap mennen nan 4 sòlda salvadoryen yo ?",
      fr: "Dans un communiqué relayé par PouSiOuPaTKonnen, la Police nationale d'Haïti (PNH) dit avoir lancé ce lundi 2 novembre 2026, « avec le soutien de la GSF », une importante opération dans plusieurs zones de la Plaine du Cul-de-Sac. Selon la PNH, elle vise à supprimer les péages clandestins, à endiguer les tentatives d'enlèvement et les exactions subies par la population. L'opération se déroulait au carrefour de Chada, au pont de Croix-des-Missions et à Santo 17, et le haut commandement a mobilisé plusieurs blindés. Le communiqué ne mentionne pas les soldats salvadoriens disparus.\n\nSelon l'agence EFE, dans une dépêche publiée par Infobae, il s'agit de la première grande opération des troupes salvadoriennes, arrivées à partir du 22 octobre. Elles avancent à bord d'une dizaine de blindés pour démanteler les gangs Chen Mechan et 400 Mawozo, ce dernier dirigé par Lanmò Sanjou. Ces gangs sont désignés comme responsables de la disparition de 4 militaires salvadoriens après une embuscade à Croix-des-Bouquets. Toujours selon EFE, les bandits ont érigé des barricades pour bloquer l'entrée des soldats.\n\nSelon EFE, qui cite la presse haïtienne, au moins une dizaine de membres de gangs ont été tués lors des affrontements à Santo et à Croix-des-Missions. PouSiOuPaTKonnen évoque aussi des drones kamikazes et une dizaine de bandits tués, en précisant que ces rapports ne sont pas officiels. La PNH n'a donné aucun bilan. Opak News ne peut pas vérifier ces chiffres.\n\nEFE rapporte aussi que, selon certains médias, la coalition Viv Ansanm aurait forcé des habitants de La Plaine à manifester sous menace de mort contre l'opération. Cette information n'est pas vérifiée.\n\nQuestions aux lecteurs : • Quelle protection pour les civils de la Plaine du Cul-de-Sac pendant l'opération ? • Quand la PNH publiera-t-elle un bilan officiel ? • Cette offensive mènera-t-elle aux 4 militaires salvadoriens ?",
    },
    sources: ["EFE (via Infobae)", "PouSiOuPaTKonnen"],
    sourceLinks: [
      { name: "EFE (via Infobae)", url: "https://www.infobae.com/america/agencias/2026/11/02/soldados-salvadorenos-lanzan-su-primera-gran-operacion-contra-las-bandas-en-haiti/" },
      { name: "PouSiOuPaTKonnen (communiqué PNH)", url: "https://www.pousioupatkonnen.com/voici-ce-quen-dit-la-pnh-au-sujet-de-loperation-en-cours-dans-la-plaine-du-cul-de-sac/" },
      { name: "PouSiOuPaTKonnen", url: "https://www.pousioupatkonnen.com/affrontements-usage-de-drones-kamikazes-plusieurs-bandits-tues-dans-le-fief-de-chen-mechan/" },
    ],
  },
  {
    id: "qh-bainet-dinepa-eau-potable-2026-11-02",
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
    publishedAt: "2026-11-01",
    publishedTime: "2026-11-02T20:30:00-05:00",
    headline: {
      ht: "Grenadye yo : Concacaf konfime match aller kont Etazini nan Miami 14 novanm, retou a nan Cincinnati 17 novanm",
      fr: "Grenadiers : la Concacaf confirme le match aller contre les États-Unis à Miami le 14 novembre, le retour à Cincinnati le 17",
    },
    teaser: {
      ht: "Dapre Inside World Football, Konsèy Concacaf la aksepte demann FHF pou jwe match lakay li nan peyi advèsè a, toutotan sekirite pa estab ann Ayiti.",
      fr: "Selon Inside World Football, le Conseil de la Concacaf a accepté la demande de la FHF de jouer son match à domicile chez l'adversaire, tant que la sécurité reste instable en Haïti.",
    },
    brief: {
      ht: "Mizajou 2 novanm, 20 h 30 : Dapre Inside World Football, Ayiti-Etazini ap jwe 14 novanm nan Nu Stadium Miami a 16 h 30, e retou a 17 novanm nan TQL Stadium Cincinnati a 19 h. Menm règ la ap aplike pou klib ayisyen yo. Mizajou 2 novanm : Dapre Gazette Haïti, LHF anonse D1 a rekòmanse 8 novanm ak 12 klib ; Baltimore SC pa sou lis la. Concacaf otorize Ayiti jwe match « lakay » li kont Etazini nan Miami 14 novanm a 4:30 PM ; retou a 17 novanm a 7:00 PM nan TQL Stadium Cincinnati. Gayan an kalifye pou Gold Cup 2027.",
      fr: "Mise à jour du 2 novembre, 20 h 30 : Selon Inside World Football, Haïti-États-Unis se jouera le 14 novembre au Nu Stadium de Miami à 16 h 30, et le retour le 17 novembre au TQL Stadium de Cincinnati à 19 h. La même dérogation s'appliquera aux clubs haïtiens. Mise à jour du 2 novembre : Selon Gazette Haïti, la LHF annonce la reprise de la D1 le 8 novembre avec 12 clubs ; le Baltimore SC n’est pas sur la liste. La Concacaf a autorisé Haïti à jouer son match « à domicile » contre les États-Unis à Miami le 14 novembre à 16 h 30 ; retour le 17 novembre à 19 h au TQL Stadium de Cincinnati. Le vainqueur est qualifié pour la Gold Cup 2027.",
    },
    body: {
      ht: "Mizajou 2 novanm, 20 h 30 : Dapre Inside World Football, Federasyon ayisyen foutbòl (FHF) te mande Concacaf pou l jwe match lakay li nan peyi advèsè a, olye pou l rete limite nan rejyon Karayib la jan règleman an di. Konsèy Concacaf la aksepte. Desizyon an ap rete toutotan sekirite pa estab ann Ayiti, e li ap aplike tou pou klib ayisyen nan konpetisyon klib Concacaf yo.\n\nMatch aller Ayiti-Etazini a pase de Sabina Park, Kingston (Jamayik), pou Nu Stadium, Miami (Florid), samdi 14 novanm a 16 h 30. Retou a ap jwe madi 17 novanm nan TQL Stadium, Cincinnati (Ohio), a 19 h.\n\nKesyon pou lektè yo : • Èske diaspora a ap ranpli Nu Stadium ? • Konbyen tan klib ayisyen yo pral jwe lwen lakay ?\n\nMizajou 2 novanm : Dapre Gazette Haïti, Lig ayisyen foutbòl (LHF) anonse sou Facebook dezyèm edisyon D1 a ap rekòmanse 8 novanm 2026 ak 12 klib nan de zòn, Nò ak Sid : Violette AC, FICA, Tempête FC, Racing FC Gonayiv, America des Cayes, FC Juventus des Cayes, Don Bosco FC, Racing Club Haïtien, Ouanaminthe FC, AS Capoise, Real Hope FA ak Cavaly AS. Baltimore SC Sen Mak pa sou lis la, san eksplikasyon. Violette, ki te genyen de seri sezon pase a, se chanpyon an. Kalandriye ofisyèl la poko pibliye.\n\nPou Lig Nasyon Concacaf la, dapre InfoHaïti, Concacaf otorize Ayiti jwe match aliye l kont Etazini 14 novanm nan NU Stadium Miami, a 4 h 30 PM (lè lokal), e match retou a rete 17 novanm Cincinnati, Ohio.\n\nKesyon pou lektè yo : • Poukisa Baltimore pa la ? • Kilè Grenadye yo ap jwe lakay yo ankò ? • Ki teren D1 a ap jwe san danje ?\n\nAnvan sa : Dapre Le National, Grenadye yo ap jwe match ale kar final Ligue Nasyon Concacaf la kont Etazini samdi 14 novanm 2026 nan NU Stadium Miami, Florid, a 4:30 PM lè lokal. Match la te dabò pwograme nan Sabina Park, Kingston, Jamayik ; Concacaf di Konsèy li apwouve yon aranjman eksepsyonèl pou Federasyon Ayisyen Foutbòl (FHF) akoz sitiyasyon sekirite ann Ayiti. Le National di desizyon sa a ta dwe pèmèt yon gwo mobilizasyon sipòtè ayisyen nan Florid.\n\nDapre Concacaf, match retou a rete fikse madi 17 novanm a 7:00 PM nan TQL Stadium Cincinnati, Ohio. Kat gayan kar final yo kalifye pou Gold Cup 2027 ak final Ligue Nasyon an ; kat pèdan yo ale nan pre-eliminatwa Gold Cup la.\n\nKesyon pou lektè yo : • De match sou tè ameriken : èske Grenadye yo ap vrèman gen avantaj « lakay » ? • Miami ap plen ak drapo ble ak wouj ? • Kilè Ayiti ap ka resevwa yon gwo match lakay li ankò ?",
      fr: "Mise à jour du 2 novembre, 20 h 30 : Selon Inside World Football, la Fédération haïtienne de football (FHF) avait demandé à la Concacaf de pouvoir jouer son match à domicile sur le territoire de son adversaire, au lieu d'être limitée à la région Caraïbe comme le prévoit le règlement. Le Conseil de la Concacaf a accepté. Cette dérogation restera en place tant que la sécurité restera instable en Haïti, et s'appliquera aussi aux clubs haïtiens dans les compétitions de clubs de la Concacaf.\n\nLe match aller Haïti-États-Unis passe de Sabina Park, à Kingston (Jamaïque), au Nu Stadium de Miami (Floride), le samedi 14 novembre à 16 h 30. Le retour se jouera le mardi 17 novembre au TQL Stadium de Cincinnati (Ohio), à 19 h.\n\nQuestions aux lecteurs : • La diaspora remplira-t-elle le Nu Stadium ? • Combien de temps les clubs haïtiens joueront-ils loin de chez eux ?\n\nMise à jour du 2 novembre : Selon Gazette Haïti, la Ligue haïtienne de football (LHF) a annoncé sur Facebook la reprise de la deuxième édition de la D1 le 8 novembre 2026, avec 12 clubs répartis en deux zones, Nord et Sud : Violette AC, FICA, Tempête FC, Racing FC des Gonaïves, America des Cayes, FC Juventus des Cayes, Don Bosco FC, Racing Club Haïtien, Ouanaminthe FC, AS Capoise, Real Hope FA et Cavaly AS. Le Baltimore SC de Saint-Marc ne figure pas sur la liste, sans explication. Violette, qui avait remporté les deux séries de la saison dernière, est le tenant du titre. Le calendrier officiel n’est pas encore publié.\n\nEn Ligue des nations de la Concacaf, selon InfoHaïti, la Concacaf a autorisé Haïti à disputer son match aller contre les États-Unis le 14 novembre au NU Stadium de Miami, à 16 h 30 (heure locale) ; le match retour reste fixé au 17 novembre à Cincinnati (Ohio).\n\nQuestions aux lecteurs : • Pourquoi le Baltimore SC est-il absent ? • Quand les Grenadiers rejoueront-ils à domicile ? • Sur quels terrains la D1 peut-elle se jouer en sécurité ?\n\nAuparavant : Selon Le National, les Grenadiers disputeront le match aller des quarts de finale de la Ligue des Nations de la Concacaf face aux États-Unis le samedi 14 novembre 2026 au NU Stadium de Miami, en Floride, à 16 h 30, heure locale. Initialement prévue au Sabina Park de Kingston, en Jamaïque, la rencontre a été délocalisée : la Concacaf indique que son Conseil a approuvé un arrangement exceptionnel pour la Fédération haïtienne de football (FHF) en raison de la situation sécuritaire en Haïti. Selon Le National, cette décision devrait favoriser une forte mobilisation des supporters haïtiens en Floride.\n\nSelon la Concacaf, le match retour reste fixé au mardi 17 novembre à 19 h au TQL Stadium de Cincinnati, dans l’Ohio. Les quatre vainqueurs des quarts de finale se qualifient pour la Gold Cup 2027 et le Final Four de la Ligue des Nations ; les quatre perdants passent par les préliminaires de la Gold Cup.\n\nQuestions aux lecteurs : • Deux matchs sur le sol américain : les Grenadiers auront-ils vraiment un avantage « à domicile » ? • Miami sera-t-il bleu et rouge ? • Quand Haïti pourra-t-elle de nouveau accueillir un grand match chez elle ?",
    },
    sources: ["Inside World Football", "Gazette Haïti", "InfoHaïti", "Le National", "Concacaf", "InfoHaïti"],
    sourceLinks: [
      { name: "Inside World Football", url: "https://www.insideworldfootball.com/2026/11/02/concacaf-tidies-up-housekeeping-for-cnl-quarter-finals-granting-haiti-venue-move-and-sanctioning-guatemala/" },
      { name: "Gazette Haïti (D1)", url: "https://gazettehaiti.com/index.php/node/14415" },
      { name: "InfoHaïti (Haïti–USA)", url: "https://www.infohaiti.net/ligue-des-nations-de-la-concacaf-haiti-recevra-les-etats-unis-a-miami-le-match-retour-maintenu-a-cincinnati/" },
      { name: "Le National", url: "https://www.lenational.org/article/sport/3104/ligue-des-nations-une-forte-affluence-attendue-pour-les-grenadiers-a-miami-le-14-novembre" },
      { name: "Concacaf", url: "https://www.concacaf.com/competitions/nations-league/news/concacaf-council-approves-exceptional-hosting-arrangement-for-the-haitian-football-federation" },
      { name: "InfoHaïti", url: "https://www.infohaiti.net/ligue-des-nations-de-la-concacaf-haiti-recevra-les-etats-unis-a-miami-le-match-retour-maintenu-a-cincinnati/" },
    ],
  },
  {
    id: "qh-fet-gede-cimetieres-gangs-2026-11-01",
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
    publishedAt: "2026-11-01",
    publishedTime: "2026-11-02T10:55:00-05:00",
    isBreaking: true,
    breakingHours: 6,
    headline: {
      ht: "Eleksyon 18 jiyè 2027 : kalandriye a kredib ? 878217 oswa 900284 enskri",
      fr: "Élections du 18 juillet 2027 : le calendrier est-il crédible ? 878217 ou 900284 inscrits",
    },
    teaser: {
      ht: "RFI poze kesyon an ak jeyograf Jean-Marie Théodat. Business & Actuality di 878217 elektè te enskri 23 oktòb, sou 6,5 a 7 milyon potansyèl.",
      fr: "RFI pose la question au géographe Jean-Marie Théodat. Selon Business & Actuality, 878217 électeurs étaient inscrits au 23 octobre, pour 6,5 à 7 millions d’électeurs potentiels.",
    },
    brief: {
      ht: "Mizajou 2 novanm : RFI mande si kalandriye CEP la (1ye tou 18 jiyè 2027, 2yèm tou 4 oktòb 2027) reyalis. Sit Business and Actuality site CEP : 878217 enskri 23 oktòb ; Le Quotidien 509 te bay apèn 900000, e Opak News te ekri 900284. Mizajou 1ye novanm, aswè : Dapre Le Quotidien 509, rejis elektoral la gen 900284 elektè enskri (tablo CEP, 31 oktòb), sa ki bay yon kandida prezidansyèl pou anviwon 45000 elektè. Lis definitif kandida yo prevwa pou 11 janvye 2027. Dapre tablo CEP a, 1ye novanm a 1:09 PM : 21 kandida pou prezidan, 389 pou senatè, 1347 pou depite, 1949 pou majistra, 2619 pou CASEC ak 1645 pou ASEC. Chif preliminè ; lis ofisyèl la ap soti apre validasyon dosye yo.",
      fr: "Mise à jour du 2 novembre : RFI demande si le calendrier du CEP (1er tour le 18 juillet 2027, second tour le 4 octobre 2027) est réaliste. Le site Business and Actuality cite le CEP : 878217 inscrits au 23 octobre ; Le Quotidien 509 parlait d’à peine 900000, et Opak News avait écrit 900284. Mise à jour du 1er novembre, soir : Selon Le Quotidien 509, le registre électoral compte 900284 électeurs inscrits (tableau du CEP, 31 octobre), soit un candidat à la présidence pour environ 45000 électeurs. La liste définitive des candidats est attendue le 11 janvier 2027. Selon le tableau du CEP, le 1er novembre à 13 h 09 : 21 candidats à la présidence, 389 au Sénat, 1347 à la députation, 1949 aux mairies, 2619 aux CASEC et 1645 aux ASEC. Chiffres préliminaires ; la liste officielle suivra la validation des dossiers.",
    },
    body: {
      ht: "Mizajou 2 novanm : Nan emisyon « Appels sur l’actualité » 2 novanm, RFI mande si kalandriye elektoral la kredib, avèk Jean-Marie Théodat, direktè depatman jeyografi Inivèsite Panthéon-Sorbonne. RFI raple Ayiti pa òganize eleksyon nasyonal depi prèske dis an, e li mande sa voye twoup etranje tankou 2000 sòlda salvadoryen yo ka chanje. (Se yon emisyon odyo ; nou pa site analiz Théodat la paske nou pa gen transkripsyon l.)\n\nDapre Business & Actuality, CEP pibliye nan yon nòt 28 oktòb nouvo kalandriye a : premye tou prezidansyèl, lejislatif ak referandòm 18 jiyè 2027 ; dezyèm tou ak eleksyon lokal 4 oktòb 2027, olye 13 desanm 2026 ak 21 fevriye 2027. Sit la site done CEP : 878217 elektè te enskri 23 oktòb, pou yon elektora potansyèl 6,5 a 7 milyon moun. Chif sa a pi ba pase 900284 nou te pibliye selon Le Quotidien 509 ak tablo CEP a ; diferans lan ta ka vin de dat diferan, men nou poko ka konfime sa.\n\nKesyon pou lektè yo : • Ak mwens pase 1 elektè sou 7 enskri, ki lejitimite eleksyon an ap genyen ? • Kiyès ki garanti 18 jiyè 2027 pa p glise ankò ? • Poukisa CEP pa pibliye yon chif enskripsyon ofisyèl chak semèn ?\n\nAnvan sa : Mizajou 1ye novanm, aswè : Dapre Le Quotidien 509, ki konsilte tablo CEP a 31 oktòb, rejis elektoral la gen sèlman 900284 elektè enskri, sa ki bay an mwayèn yon kandida prezidansyèl pou anviwon 45000 elektè. 21 septanm, CEP te konte 628755 enskri, sa li te di ki te yon ti kras plis pase 10 % elektora potansyèl la ; Le Quotidien 509 estime rejis la ta kounye a anviwon 15 %. Enskripsyon an liy pou kandida prezidansyèl yo rete louvri jiska 15 novanm, e lis definitif kandida yo apwouve prevwa pou 11 janvye 2027. Premye tou a fikse pou 18 jiyè 2027. Le Quotidien 509 raple tou ke an jiyè, otorite yo te konte 23 komin gwoup ame kontwole, kote enskripsyon an te ranvwaye.\n\nKesyon pou lektè yo : • Yon eleksyon ak 15 % elektè enskri, èske se yon eleksyon lejitim ? • Kiyès ki pral enskri moun nan 23 komin gang kontwole yo ? • Poukisa gen plis kandida pase bwat vòt nan kèk zòn ?\n\nAnvan sa : Dapre tablo estatistik enskripsyon Konsèy Elektoral Pwovizwa (CEP) a, mete ajou dimanch 1ye novanm 2026 a 1:09 PM, 21 kandida enskri pou prezidan, 389 pou senatè, 1347 pou depite, 1949 pou majistra, 2619 pou CASEC ak 1645 pou ASEC. CEP avèti done sa yo « dinamik e estrikteman preliminè » : lis ofisyèl e definitif kandida yo ap pibliye sèlman apre verifikasyon ak validasyon dosye yo. Yon enskripsyon pa vle di kandidati a aksepte.\n\nToujou dapre tablo a, 70 % kandida yo se gason, 30 % se fanm. Enskripsyon pou prezidan, senatè ak depite fèmen 15 novanm ; pou majistra, CASEC ak ASEC, 30 novanm.\n\nHaitiLibre pibliye non 21 kandida prezidansyèl yo ak pati yo, pami yo Claude Joseph (EDE), Jocelerme Privert (AYITI TRANSFOME), Joseph Michel Martelly (DEBLOKE), Jean Ernest Muscadin (FCN), Etzer S. Emile (SOLEY) ak Lucien Olivier Barrau (MTH).\n\nKesyon pou lektè yo : • 21 kandida pou yon sèl fotèy : konbyen ki ap rete apre validasyon ? • Poukisa se sèlman 30 % fanm ? • Ki garanti CEP bay ke eleksyon an ap fèt nan zòn gang kontwole yo ?",
      fr: "Mise à jour du 2 novembre : Dans son émission « Appels sur l’actualité » du 2 novembre, RFI demande si le calendrier électoral est crédible, avec Jean-Marie Théodat, directeur du département de géographie de l’Université Panthéon-Sorbonne. RFI rappelle qu’Haïti n’a pas organisé d’élections nationales depuis près de dix ans, et s’interroge sur ce que peut changer l’envoi de troupes étrangères comme les 2000 soldats salvadoriens. (Il s’agit d’une émission audio ; nous ne citons pas l’analyse de M. Théodat faute de transcription.)\n\nSelon Business & Actuality, le CEP a officialisé dans une note du 28 octobre le nouveau calendrier : premier tour de la présidentielle et des législatives, couplé au référendum constitutionnel, le 18 juillet 2027 ; second tour et élections locales le 4 octobre 2027, au lieu des 13 décembre 2026 et 21 février 2027. Le site cite les données du CEP : 878217 électeurs inscrits au 23 octobre, pour un électorat potentiel estimé à 6,5 à 7 millions de personnes. Ce chiffre est inférieur aux 900284 que nous avions publiés d’après Le Quotidien 509 et le tableau du CEP ; l’écart pourrait tenir à des dates de relevé différentes, ce que nous n’avons pas pu confirmer.\n\nQuestions aux lecteurs : • Avec moins d’un électeur potentiel sur sept inscrit, quelle légitimité pour ce scrutin ? • Qui garantit que le 18 juillet 2027 ne glissera pas à son tour ? • Pourquoi le CEP ne publie-t-il pas un chiffre officiel d’inscription chaque semaine ?\n\nAuparavant : Mise à jour du 1er novembre, soir : Selon Le Quotidien 509, qui a consulté le tableau du CEP le 31 octobre, le registre électoral ne compte encore que 900284 électeurs inscrits, soit en moyenne un candidat à la présidence pour environ 45000 électeurs. Le 21 septembre, le CEP comptait 628755 inscrits, soit selon lui un peu plus de 10 % de l’électorat potentiel ; Le Quotidien 509 estime que le registre tournerait désormais autour de 15 %. L’inscription en ligne des candidats à la présidence reste ouverte jusqu’au 15 novembre, et la liste définitive des candidats agréés est attendue le 11 janvier 2027. Le premier tour est fixé au 18 juillet 2027. Le Quotidien 509 rappelle aussi qu’en juillet, les autorités recensaient 23 communes contrôlées par des groupes armés, où l’inscription a été reportée.\n\nQuestions aux lecteurs : • Une élection avec 15 % d’inscrits, est-ce une élection légitime ? • Qui inscrira les électeurs des 23 communes contrôlées par les gangs ? • Pourquoi y a-t-il, par endroits, plus de candidats que de bureaux de vote ?\n\nAuparavant : Selon le tableau des statistiques d’enregistrement du Conseil électoral provisoire (CEP), mis à jour le dimanche 1er novembre 2026 à 13 h 09, 21 candidats sont inscrits à la présidence, 389 au Sénat, 1347 à la députation, 1949 aux mairies, 2619 aux CASEC et 1645 aux ASEC. Le CEP prévient que ces données sont « dynamiques et strictement préliminaires » : la liste officielle et définitive des candidats ne sera publiée qu’après la vérification et la validation des dossiers. Une inscription ne vaut pas acceptation de la candidature.\n\nToujours selon le tableau, 70 % des candidats sont des hommes et 30 % des femmes. Les inscriptions pour la présidence, le Sénat et la députation ferment le 15 novembre ; pour les mairies, les CASEC et les ASEC, le 30 novembre.\n\nHaitiLibre publie la liste des 21 candidats à la présidence et de leurs partis, dont Claude Joseph (EDE), Jocelerme Privert (AYITI TRANSFOME), Joseph Michel Martelly (DEBLOKE), Jean Ernest Muscadin (FCN), Etzer S. Emile (SOLEY) et Lucien Olivier Barrau (MTH).\n\nQuestions aux lecteurs : • 21 candidats pour un seul fauteuil : combien resteront après la validation ? • Pourquoi seulement 30 % de femmes ? • Quelle garantie le CEP donne-t-il que le vote aura lieu dans les zones contrôlées par les gangs ?",
    },
    sources: ["RFI", "Business & Actuality", "Le Quotidien 509", "CEP", "HaitiLibre"],
    sourceLinks: [
      { name: "RFI (Appels sur l’actualité)", url: "https://www.rfi.fr/fr/podcasts/appels-sur-l-actualit%C3%A9/20261102-ha%C3%AFti-le-calendrier-%C3%A9lectoral-est-il-cr%C3%A9dible" },
      { name: "Business & Actuality", url: "https://businessactuality.com/haiti-le-report-des-elections-a-juillet-2027-revele-limpasse-securitaire-et-politique-de-la-transition/" },
      { name: "Le Quotidien 509", url: "https://lequotidien509.com/presidentielle-20-candidats-pour-a-peine-900-000-electeurs-inscrits/" },
      { name: "CEP (tableau des inscriptions)", url: "https://tableau.cephaiti.ht/" },
      { name: "HaitiLibre (liste des candidats)", url: "https://www.haitilibre.com/en/news-48798-haiti-news-zapping.html" },
    ],
  },
  {
    id: "qh-cuba-embargo-haiti-abstention-2026-10-31",
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
    publishedAt: "2026-10-31",
    publishedTime: "2026-11-02T20:30:00-05:00",
    isUrgent: true,
    headline: {
      ht: "Lakayè : abitan yo mande PNH sipò nan lè, moun ap kouri kite Kabarè",
      fr: "Arcahaie : les habitants réclament un appui aérien à la PNH, des habitants fuient Cabaret",
    },
    teaser: {
      ht: "Dapre PouSiOuPaTKonnen, abitan Lakayè ki pèdi kay yo mande PNH voye sipò nan lè. Nan Kabarè, Radiographie di moun kouri apre yon elikoptè tire a 3 è di maten.",
      fr: "Selon PouSiOuPaTKonnen, des habitants de l'Arcahaie chassés de chez eux demandent un appui aérien à la PNH. À Cabaret, Radiographie rapporte une fuite après les tirs d'un hélicoptère vers 3 h du matin.",
    },
    brief: {
      ht: "Mizajou 2 novanm, 20 h 30 : Dapre PouSiOuPaTKonnen, abitan Lakayè ki kouri kite kay yo boule mande PNH sipò nan lè. Dapre Radiographie, moun Kabarè kouri lendi maten apre yon elikoptè vole ba e tire. Mizajou 2 novanm, 18 h 30 : Dapre Le Reflet, majistra Wilner René di Bèsi deja anba kontwòl gang yo, e kay boule nan Lavila, Sou Rigòl, Vigner ak Tomand. Li mande gouvènman an ak PNH voye ranfò. Mizajou 2 novanm, maten : Dapre Décodage Info, yon nouvo ofansiv dimanch 1ye novanm fè omwen 7 mò, plizyè blese ak kay boule ; majistra René Wilner mande elikoptè ak dron. Dapre Rezo Nòdwès, avoka Pierre Sauvenel Sylvain di abitan yo ap kouri e lapolis rete nan blende yo. Mizajou 2 novanm : Dapre Rezo Nòdwès, yon bilan pwovizwa medya lokal relaye, ki site otorite komin, bay 43 mò, ki gen 13 sivil, ak 18 blese nan Vignier, Thoman ak Bèsi. PNH ak otorite nasyonal yo pa konfime ; PNH toujou di anviwon 20 manm gang mouri, ki gen « Galaxy ». Majistra Wilner René mande ranfò. Mizajou 1ye novanm, aswè : Nan yon nòt, PNH di operasyon 29 oktòb la te touye anviwon 20 manm gang, ki gen ladan chèf yo rele « Galaxy », e ke BOID ak CIMO repouse atak 31 oktòb la ; li di li kenbe pozisyon li Lakayè, dapre EFE (Listín Diario) ak Radiographie. PNH pa bay okenn bilan sivil. Mizajou 1ye novanm : Dapre Rezo Nòdwès, yon mobilizasyon « Bwa Kale » leve Lakayè samdi swa apre atak gang ki soti Kanaran ak Kabarè sou Vigner, Thoman, Sou Rigòl, Bési ak Bèsi ; sit la bay omwen dis mò, sivil ak manm brigad, yon bilan ki pa ofisyèl e ke Opak pa ka konfime. Dapre Image7, tire te kontinye dimanch 1ye novanm. Mizajou 31 oktòb, aprè midi : Dapre Le Patrimoine Info, atak samdi a kòmanse vè 2:45 AM, ak « anpil viktim » ; pa gen bilan ofisyèl. Dapre Le National, PNH, FAd’H ak Task Force ap mennen operasyon Bèsi, Gresye ak Kenscoff, tankou nan zòn « 103 Zonbi ». Mizajou 31 oktòb : Gwoup ame atake Vigner, Thoman ak Sou Rigòl bonè samdi maten, anpil moun kouri kite kay yo, dapre Vant Bèf Info. Gwo batay Bèsi, zam parèt Montwi. Majistra Wilner René mande Task Force antre. Pa gen bilan. Anvan : Jedi 29 oktòb, PNH ak Task Force la fè yon operasyon nan Bèsi. Plizyè moun yo prezante kòm bandi mouri, pami yo chèf gang Kabarè yo rele « Galaxie ». Pa gen bilan ofisyèl. Èske Akayè ap kenbe ?",
      fr: "Mise à jour du 2 novembre, 20 h 30 : Selon PouSiOuPaTKonnen, des habitants de l'Arcahaie, dont les maisons ont été incendiées, demandent un appui aérien à la PNH. Selon Radiographie, des habitants de Cabaret ont fui lundi matin après le passage d'un hélicoptère qui tirait à basse altitude. Mise à jour du 2 novembre, 18 h 30 : Selon Le Reflet, le maire Wilner René affirme que Bercy est déjà sous le contrôle des gangs et que des maisons ont été incendiées à Lavila, Sou Rigòl, Vigner et Tomand. Il demande des renforts au gouvernement et à la PNH. Mise à jour du 2 novembre, matin : Selon Décodage Info, une nouvelle offensive dimanche 1er novembre a fait au moins 7 morts, plusieurs blessés et des maisons incendiées ; le maire René Wilner réclame des hélicoptères et des drones. Selon Rezo Nòdwès, l’avocat Pierre Sauvenel Sylvain dit que les habitants fuient et que les policiers restent dans leurs blindés. Mise à jour du 2 novembre : Selon Rezo Nòdwès, un bilan provisoire relayé par des médias locaux citant des autorités communales fait état de 43 morts, dont 13 civils, et 18 blessés à Vignier, Thoman et Bercy. La PNH et les autorités nationales n’ont pas confirmé ; la PNH maintient qu’une vingtaine de membres de gangs, dont « Galaxy », ont été tués. Le maire Wilner René réclame des renforts. Mise à jour du 1er novembre, soir : Dans une note, la PNH affirme que l’opération du 29 octobre a tué une vingtaine de membres de gangs, dont le chef surnommé « Galaxy », et que la BOID et le CIMO ont repoussé l’attaque du 31 octobre ; elle dit tenir ses positions à l’Arcahaie, selon EFE (Listín Diario) et Radiographie. La PNH ne donne aucun bilan civil. Mise à jour du 1er novembre : Selon Rezo Nòdwès, une mobilisation « Bwa Kale » s’est levée samedi soir à l’Arcahaie après des attaques de groupes armés venus de Canaan et de Cabaret sur Vigner, Thoman, Sou Rigòl, Bési et Bercy ; le site fait état d’au moins dix morts, civils et membres de la brigade, un bilan non officiel qu’Opak ne peut confirmer. Selon Image7, les tirs continuaient dimanche 1er novembre. Mise à jour du 31 octobre, après-midi : Selon Le Patrimoine Info, l’attaque de samedi a commencé vers 2 h 45 du matin et fait « de nombreuses victimes » ; aucun bilan officiel. Selon Le National, la PNH, les FAd’H et la Task Force mènent des opérations à Bercy, Gressier et Kenscoff, dont dans la zone « 103 Zombi ». Mise à jour du 31 octobre : Des hommes armés ont attaqué Vigner, Thoman et Sou Rigòl tôt samedi matin, provoquant la fuite de nombreux habitants, selon Vant Bèf Info. Affrontements intenses à Bercy, présence armée à Montrouis. Le maire Wilner René appelle la Task Force. Aucun bilan. Auparavant : Jeudi 29 octobre, la PNH et la Task Force ont mené une opération à Bercy. Plusieurs personnes présentées comme des bandits ont été tuées, dont le chef de gang de Cabaret connu sous le nom de « Galaxie ». Aucun bilan officiel. L’Arcahaie tiendra-t-elle ?",
    },
    body: {
      ht: "Mizajou 2 novanm, 20 h 30 : Dapre PouSiOuPaTKonnen, lendi 2 novanm, kèk abitan Lakayè ki tonbe nan pèlen bandi yo oblije kite katye yo, kay yo boule. Yo mande PNH ede yo ak yon sipò nan lè pou bloke avans gang yo nan komin nan.\n\nNan Kabarè, komin vwazen an, Radiographie rapòte panik lendi maten an akoz batay ant fòs lòd ak bandi. « Li te anviwon 3 è di maten lè bri yon elikoptè k ap vole ba e k ap tire reveye nou », yon abitan di Radiographie. Dapre li, moun yo te oblije kouri kite vil la. Radiographie ekri se Kabarè gang yo pati pou atake Lakayè, e fòs lòd yo ap fè operasyon la an repons.\n\nPNH pa t fè okenn kominike sou yon sipò nan lè pou Lakayè lè nou t ap pibliye. Opak News pa ka verifye konbyen moun ki kouri kite zòn yo.\n\nKesyon pou lektè yo : • Si elikoptè ap vole sou Kabarè, poukisa yo pa wè l sou Lakayè ? • Ki kote moun ki kouri kite Kabarè ak Lakayè yo ap dòmi aswè a ? • Kiyès k ap pwoteje sivil yo pandan operasyon nan lè yo ?\n\nMizajou 2 novanm, 18 h 30 : Dapre jounal Le Reflet, Lakayè ap sibi yon nouvo vag atak depi samdi, e sitiyasyon an te toujou grav lendi 2 novanm. Majistra komin nan, Wilner René, di Lavila, Sou Rigòl, Vigner ak Tomand se pami zòn ki touche, ak kay ki boule. Toujou dapre Le Reflet, li di lokalite Bèsi a deja pase anba kontwòl gang yo.\n\nLe Reflet ekri brigadye yo ak kèk polisye ki sou teren an ap eseye bloke atakan yo, men yo twò piti an kantite devan gang yo. Majistra a mande gouvènman an ak wo kòmandman PNH entèvni vit epi voye ranfò, paske li di fòs ki la yo pa gen ase moun pou kenbe tèt ak gang yo.\n\nPNH pa t fè okenn deklarasyon piblik sou ranfò sa yo lè nou t ap pibliye. Opak News pa ka verifye poukont li bilan moun mouri oswa kay ki boule.\n\nKesyon pou lektè yo : • Si Bèsi tonbe, kiyès ki pwochen ? • Konbyen polisye ki vrèman la pou pwoteje Lakayè jodi a ? • Kilè PNH ap reponn majistra a piblikman ?\n\nMizajou 2 novanm, maten : Dapre Décodage Info, gwoup ame yo lanse yon ofansiv kont plizyè lokalite Lakayè depi samdi 31 oktòb, e yon bilan pasyèl dimanch 1ye novanm bay omwen 7 mò ak plizyè blese ; kay te boule tou. Vyolans yo te kòmanse vè 2 h 45 nan maten, nan Bèsi, Vignier ak Sourigole, ak batay nan Thoman. Dapre menm sit la, atakan yo ta soti Kabarè, ak ranfò ki soti Kenscoff ak Plèn Kildesak, e yo ta lye ak Izo 5 Segond ak Jeff Gwo Lwa — lyen sa yo pa konfime. Majistra René Wilner mande elikoptè ak « dron kamikaz ».\n\nDapre Rezo Nòdwès, avoka Pierre Sauvenel Sylvain di detonasyon fò reveye abitan Vigner, Tomand ak Bèsi dimanch swa, e yo kouri al Robert, Kafou Pwa oswa nan mòn yo. Li rejte anons ranfò PNH yo, li di polisye yo rete nan blende pandan bandi yo ap bloke Wout nasyonal 1 a kèk mèt, e chofè trelè te atake epi machin yo rete kanpe sou wout la. Li di tou omwen 4 bandi « Viv ansanm » te viktim « bwa kale » samdi 31 oktòb nan Site Drapo a, e li kontredi bilan « yon dizèn » sivil mouri : dapre li, se 4 moun ki te mouri pandan yo t ap kite zòn yo. PNH pa reponn kritik sa yo piblikman, dapre sous nou yo. Bilan yo (7, 4, 43) pa konfime ofisyèlman.\n\nKesyon pou lektè yo : • Kiyès ki konte mò Lakayè yo, e poukisa chif yo varye konsa ? • Si polisye yo nan blende yo, kiyès ki pwoteje Wout nasyonal 1 ? • Ki jistis pou moun « bwa kale » yo touye yo, menm si yo te bandi ?\n\nAnvan sa : Mizajou 2 novanm : Dapre Rezo Nòdwès, aswè 1ye novanm, yon bilan pwovizwa plizyè medya lokal relaye, ki site otorite komin, bay 43 mò, ki gen 13 sivil, ak 18 blese apre batay nan Vignier, Thoman ak Bèsi. Bilan sa a PA KONFIME : ni PNH ni otorite nasyonal yo pa valide l, e Opak News pa ka verifye l. Rezo Nòdwès li menm di bilan ki disponib yo « diverje anpil » e ke risk pou jounalis nan zòn nan anpeche verifikasyon endepandan.\n\nPNH, nan kominike li, toujou di anviwon 20 manm gang te mouri nan operasyon 29 oktòb la, ki gen chèf yo rele « Galaxy », dapre EFE ak El Seis. Rezo Nòdwès, pou pati pa l, pale de « Galaxy » ak « yon dizèn » lòt manm gang. Anpil abitan kite kay yo, e majistra Wilner René mande ranfò pou pwoteje popilasyon an, dapre Rezo Nòdwès.\n\nKesyon pou lektè yo : • 43 mò oswa 20 : kilè Leta ap bay yon chif ofisyèl ? • 13 sivil mouri : ki non yo, e kiyès ki pral rann kont ? • Konbyen tan Lakayè ap tann ranfò majistra a mande ?\n\nAnvan sa : Mizajou 1ye novanm, aswè : Polis Nasyonal d Ayiti (PNH) pibliye premye deklarasyon ofisyèl li sou Lakayè. Dapre Radiographie, nan yon nòt samdi 31 oktòb, PNH di li fè echèk ak yon atak bandi ame te lanse sou komin nan bonè samdi maten. Dapre EFE, ki site kominike PNH dimanch la, atak la vini apre operasyon jedi 29 oktòb la kote « anviwon 20 manm gang te abat, ki gen ladan yon chèf yo rele Galaxy », e lòt manm gang nan blese grav. PNH di plizyè inite, tankou Brigad Depatmantal Operasyon ak Entèvansyon (BOID) ak Kò Entèvansyon ak Mentyen Lòd (CIMO), « reponn touswit ». Li di li « kenbe pozisyon li » Lakayè e li rete mobilize pou kontinye operasyon yo. Se chif ak pawòl PNH ; okenn tribinal pa idantifye moun ki mouri yo.\n\nPNH pa bay okenn bilan pou sivil oswa brigadye. Bilan « omwen yon dizèn mò » Opak te pibliye a se Rezo Nòdwès sèl ki bay li ; li pa soti nan PNH e li rete pa konfime. EFE di medya lokal rapòte abitan te ede PNH, e moto te trennen kò kèk moun yo prezante kòm manm gang nan lari a ; Opak News pa verifye imaj sa yo.\n\nKesyon pou lektè yo : • PNH konte bandi yo mouri, men kiyès ki konte sivil yo ? • « Kenbe pozisyon » : pou konbyen tan, ak ki mwayen ? • Si se moto ki trennen kò nan lari, kiyès ki pral mennen ankèt sou sa ?\n\nAnvan sa : Mizajou 1ye novanm : Dapre Rezo Nòdwès, yon mobilizasyon yo rele « Bwa Kale » leve nan komin Lakayè samdi swa 31 oktòb. Sit la di gwoup ame ki soti sitou Kanaran ak Kabarè te atake bonè samdi maten plizyè lokalite : Vigner, Thoman, Sou Rigòl, Bési ak Bèsi. Rezo Nòdwès bay « omwen yon dizèn mò », sivil ak manm brigad otodefans, ak anpil moun deplase. Se sèl sous ki bay chif sa a ; li pa ofisyèl, e Opak News pa ka konfime l.\n\nRezo Nòdwès di videyo k ap sikile sou rezo sosyal yo montre kò moun yo prezante kòm atakè k ap trennen dèyè moto. Opak News pa verifye videyo sa yo, e pa gen okenn idantite ki konfime. Dapre menm sit la, PNH di li riposte ak inite espesyal BOID ak CIMO, e li kenbe pozisyon li yo ansanm ak abitan yo.\n\nDapre Image7, apre yon nwit konfwontasyon ant fòs lòd yo, ak sipò brigadye, ak bandi Viv Ansanm, tire te kontinye pandan jounen dimanch 1ye novanm. Image7 di pa gen okenn bilan definitif ki konfime.\n\nKesyon pou lektè yo : • Si se popilasyon an k ap goumen, kote Leta ye ? • Kiyès ki konte mò Lakayè yo, e kilè lis ofisyèl la ap soti ? • « Bwa Kale » ka pwoteje yon vil jodi a, men kiyès k ap pwoteje inosan yo kont erè jistis popilè ?\n\nAnvan sa : Mizajou 31 oktòb, aprè midi : Dapre Le Patrimoine Info, atak samdi 31 oktòb la nan Akayè kòmanse vè 2:45 AM, e li fè « anpil viktim ». Pa gen okenn bilan ofisyèl poko.\n\nDapre Le National, Polis Nasyonal d Ayiti (PNH), avèk sipò Fòs Ame d Ayiti (FAd’H) ak Task Force la, ap kontinye operasyon nan plizyè zòn sansib, tankou Bèsi, Gresye ak komin Kenscoff. Plizyè inite espesyalize mobilize : BOID, UTAG, UDMO ak Task Force la. Dapre PNH, fòs lòd yo antre nan plizyè fyèf gwoup ame, tankou zòn yo rele « 103 Zonbi ». Le National pa bay okenn bilan moun mouri oswa blese.\n\nKesyon pou lektè yo : • « Anpil viktim » : konbyen, e ki lè Leta ap di non yo ? • Si fòs lòd yo antre nan « 103 Zonbi », poukisa Akayè toujou ap kouri ? • Ki moun k ap konte mò yo lè pa gen bilan ofisyèl ?\n\nAnvan : Mizajou 31 oktòb : Dapre Vant Bèf Info, gwoup ame atake plizyè lokalite nan komin Akayè bonè samdi 31 oktòb 2026 maten, tankou Vigner, Thoman ak Sou Rigòl, e anpil moun kouri kite zòn nan. Sit la rapòte gwo batay Bèsi tou, e prezans moun ame Montwi.\n\nDapre deklarasyon majistra Akayè a, Wilner René, moun ame ki soti Kenscoff ta vin ranfòse gwoup k ap opere depi Kabarè. Vant Bèf Info presize enfòmasyon sa a pa etabli okenn lyen ant moun sa yo ak « Galaxie ». Wilner René mande Task Force la entève san pèdi tan pou pwoteje popilasyon an e repouse ofansiv la. Pa t gen okenn bilan presi pou batay samdi yo lè atik la te pibliye.\n\nKesyon pou lektè yo : • Twa jou apre yo anonse lanmò « Galaxie », poukisa se Akayè k ap kouri ? • Si gang Kenscoff ka travèse jis Kabarè, ki moun ki t ap veye wout yo ? • Konbyen tan yon majistra dwe rele anvan Task Force la rive ?\n\nAnvan : Dapre Le Nouvelliste, Polis Nasyonal d Ayiti (PNH), avèk sipò Task Force la, touye plizyè bandi jedi 29 oktòb 2026 pandan yon operasyon nan Bèsi, ant Akayè ak Kabarè. Pami yo ta gen chèf gang Kabarè yo rele « Galaxie ». Lòt manm gang nan kouri, sa ki lakòz tansyon nan plizyè zòn toupre, dapre yon sous lokal.\n\nPa gen bilan ofisyèl. Le Quotidien 509 site Pierre Sauvenel Sylvain, yon notab nan Akayè, ki pale sou Radio Kiskeya de « plis pase yon ventèn » moun yo prezante kòm bandi ki mouri, men li presize li pa gen chif egzak. Dapre li, brigadye ki te akonpaye fòs lòd yo detwi plizyè abri gang yo te bati bò wout la. Li mande gwo kòmandman PNH a bay polis sou teren an plis mwayen, tankou gwo machin pou demoli lòt abri ki rete yo.\n\nDapre Le Filet Info, ajan egzekitif pwovizwa Akayè a, Wilner René, pale de yon ventèn moun mouri e li di « Galaxy » ta youn nan moun yo sispèk ki responsab masak Labodri a ; gwoup li a te okipe Bèsi depi apeprè dezan. Li anonse operasyon yo ap kontinye nan zòn nan. Radio Graphie, ki site sous lokal, pale de omwen yon dizèn manm gang ki mouri, e li di antre machin blende PNH yo jis Levèk simen panik Kabarè, kote moun kite espas piblik tankou mache vil la. PNH poko konfime okenn nan deklarasyon sa yo.\n\nSa gen plis pase yon ane gwoup ame ap eseye avanse sou Akayè, Vil Drapo a. Bèsi se zòn ki ant Kabarè, kote gang yo gen enfliyans, ak Akayè, ki reziste ak polis la ak gwoup otodefans.\n\nKesyon pou lektè yo : • Si gang lan pèdi chèf li, ki moun ki pran plas li demen maten ? • Konbyen moun ki mouri, e ki moun ki pral konte yo ofisyèlman ? • Poukisa se yon notab, pa Leta, k ap mande bulldozer pou Akayè ?",
      fr: "Mise à jour du 2 novembre, 20 h 30 : Selon PouSiOuPaTKonnen, ce lundi 2 novembre, des habitants de l'Arcahaie pris au piège des bandits ont dû fuir leurs quartiers, leurs maisons incendiées. Ils appellent la PNH à l'aide, avec un appui aérien, pour freiner l'avancée des gangs dans la commune.\n\nÀ Cabaret, commune voisine, Radiographie rapporte une panique lundi matin en raison d'affrontements entre forces de l'ordre et bandits. « Il était environ 3 heures du matin, lorsque le bruit d'un hélicoptère volant à basse altitude et tirant des coups de feu nous a réveillés », témoigne une habitante citée par Radiographie. Selon elle, les habitants ont dû fuir la ville. Radiographie écrit que Cabaret est le point de départ des attaques contre l'Arcahaie, et que les forces de l'ordre y mènent des interventions en représailles.\n\nLa PNH n'avait publié aucun communiqué sur un appui aérien à l'Arcahaie au moment de publier. Opak News ne peut pas vérifier le nombre de personnes qui ont fui.\n\nQuestions aux lecteurs : • Si des hélicoptères survolent Cabaret, pourquoi pas l'Arcahaie ? • Où dorment ce soir les familles qui ont fui Cabaret et l'Arcahaie ? • Qui protège les civils pendant les opérations aériennes ?\n\nMise à jour du 2 novembre, 18 h 30 : Selon le journal Le Reflet, l'Arcahaie subit une nouvelle vague d'attaques depuis samedi, et la situation restait préoccupante ce lundi 2 novembre. Le maire de la commune, Wilner René, cite Lavila, Sou Rigòl, Vigner et Tomand parmi les localités touchées, avec des maisons incendiées. Toujours selon Le Reflet, il affirme que la localité de Bercy est déjà passée sous le contrôle des gangs.\n\nLe Reflet écrit que les brigadiers et les quelques policiers présents tentent de contenir les assaillants, mais qu'ils sont trop peu nombreux face aux gangs. Le maire appelle le gouvernement et le haut commandement de la PNH à intervenir rapidement et à envoyer des renforts, estimant que les forces sur place n'ont pas les effectifs pour résister.\n\nLa PNH n'avait fait aucune déclaration publique sur ces renforts au moment de publier. Opak News ne peut pas vérifier de façon indépendante le bilan humain ni le nombre de maisons incendiées.\n\nQuestions aux lecteurs : • Si Bercy tombe, quelle localité sera la prochaine ? • Combien de policiers protègent vraiment l'Arcahaie aujourd'hui ? • Quand la PNH répondra-t-elle publiquement au maire ?\n\nMise à jour du 2 novembre, matin : Selon Décodage Info, des groupes armés mènent une offensive contre plusieurs localités de l’Arcahaie depuis le samedi 31 octobre, et un bilan partiel dimanche 1er novembre faisait état d’au moins 7 morts et de plusieurs blessés ; des maisons ont aussi été incendiées. Les violences ont débuté vers 2 h 45 du matin, à Bercy, Vignier et Sourigole, avec des affrontements signalés à Thoman. Selon le même site, les assaillants viendraient de Cabaret, avec des renforts de Kenscoff et de la Plaine du Cul-de-Sac, et seraient liés à Izo 5 Segond et à Jeff Gwo Lwa — des liens non confirmés. Le maire René Wilner réclame des hélicoptères et des « drones kamikazes ».\n\nSelon Rezo Nòdwès, l’avocat Pierre Sauvenel Sylvain affirme que de fortes détonations ont réveillé les habitants de Vigner, Tomand et Bercy dans la nuit de dimanche, et qu’ils se sont réfugiés à Robert, à Carrefour-Pois ou dans les hauteurs. Il rejette les annonces de renforts de la PNH, affirme que les policiers restent retranchés dans leurs blindés pendant que les bandits bloquent la route nationale 1 à quelques mètres, et que des chauffeurs de camions-remorques ont été agressés et leurs véhicules immobilisés sur la voie. Il affirme aussi qu’au moins 4 bandits de « Viv ansanm » ont subi le « bwa kale » le samedi 31 octobre à la Cité du Drapeau, et conteste le bilan d’« une dizaine » de civils tués : selon lui, 4 personnes sont mortes alors qu’elles s’apprêtaient à quitter leur zone. La PNH n’a pas répondu publiquement à ces critiques, à notre connaissance. Aucun des bilans (7, 4, 43) n’est confirmé officiellement.\n\nQuestions aux lecteurs : • Qui compte les morts de l’Arcahaie, et pourquoi les chiffres varient-ils autant ? • Si les policiers restent dans leurs blindés, qui protège la route nationale 1 ? • Quelle justice pour les personnes tuées par « bwa kale », même présumées bandits ?\n\nAuparavant : Mise à jour du 2 novembre : Selon Rezo Nòdwès, le soir du 1er novembre, un bilan provisoire relayé par des médias locaux citant des autorités communales fait état de 43 morts, dont 13 civils, et 18 blessés après des affrontements à Vignier, Thoman et Bercy. Ce bilan N’EST PAS CONFIRMÉ : ni la PNH ni les autorités nationales ne l’ont validé, et Opak News ne peut pas le vérifier. Rezo Nòdwès souligne lui-même que les bilans disponibles « divergent fortement » et que les risques encourus par les journalistes dans la zone compliquent toute vérification indépendante.\n\nDans son communiqué, la PNH maintient qu’une vingtaine de membres de gangs ont été tués lors de l’opération du 29 octobre, dont le chef surnommé « Galaxy », selon EFE et El Seis. Rezo Nòdwès évoque pour sa part « Galaxy » et « une dizaine » d’autres membres du groupe. De nombreux habitants ont quitté leur domicile, et le maire Wilner René réclame des renforts pour protéger la population, selon Rezo Nòdwès.\n\nQuestions aux lecteurs : • 43 morts ou 20 : quand l’État donnera-t-il un chiffre officiel ? • 13 civils tués : quels sont leurs noms, et qui en répondra ? • Combien de temps l’Arcahaie attendra-t-elle les renforts que réclame son maire ?\n\nAuparavant : Mise à jour du 1er novembre, soir : La Police nationale d’Haïti (PNH) a publié sa première déclaration officielle sur l’Arcahaie. Selon Radiographie, dans une note du samedi 31 octobre, la PNH confirme avoir fait échec à une attaque de bandits armés contre la commune tôt samedi matin. Selon EFE, qui cite un communiqué de la PNH diffusé dimanche, cette attaque fait suite à l’opération du jeudi 29 octobre au cours de laquelle « environ 20 membres de gangs ont été abattus, dont un chef connu sous le nom de Galaxy », d’autres membres ayant été grièvement blessés. La PNH indique que plusieurs unités, dont la Brigade départementale d’opérations et d’intervention (BOID) et le Corps d’intervention et de maintien de l’ordre (CIMO), « ont répondu immédiatement ». Elle dit « maintenir ses positions » à l’Arcahaie et rester mobilisée pour poursuivre les opérations. Ces chiffres et qualifications sont ceux de la PNH ; aucun tribunal n’a identifié les personnes tuées.\n\nLa PNH ne donne aucun bilan pour les civils ou les brigadiers. Le bilan d’« au moins une dizaine de morts » publié plus tôt par Opak provient du seul site Rezo Nòdwès ; il n’émane pas de la PNH et reste non confirmé. Selon EFE, des médias locaux rapportent que des habitants ont aidé la PNH et que des motocyclistes ont traîné dans les rues les corps de personnes présentées comme des membres de gangs ; Opak News n’a pas vérifié ces images.\n\nQuestions aux lecteurs : • La PNH compte les bandits tués, mais qui compte les civils ? • « Tenir ses positions » : pour combien de temps, et avec quels moyens ? • Si des corps sont traînés derrière des motos, qui ouvrira une enquête ?\n\nAuparavant : Mise à jour du 1er novembre : Selon Rezo Nòdwès, une mobilisation dite « Bwa Kale » s’est levée dans la commune de l’Arcahaie le samedi soir 31 octobre. Le site indique que des groupes armés venus notamment de Canaan et de Cabaret avaient attaqué tôt samedi matin plusieurs localités : Vigner, Thoman, Sou Rigòl, Bési et Bercy. Rezo Nòdwès fait état d’« au moins une dizaine de morts », civils et membres de la brigade d’autodéfense, et de nombreux déplacés. Ce chiffre provient d’une seule source ; il n’est pas officiel et Opak News ne peut pas le confirmer.\n\nRezo Nòdwès affirme que des vidéos circulant sur les réseaux sociaux montrent des corps présentés comme ceux d’assaillants traînés derrière des motos. Opak News n’a pas vérifié ces vidéos, et aucune identité n’est confirmée. Selon le même site, la PNH dit avoir riposté avec des unités spécialisées, la BOID et la CIMO, et maintenir ses positions en collaboration avec les habitants.\n\nSelon Image7, après une nuit d’affrontements entre les forces de l’ordre, appuyées par des brigadiers, et des bandits de Viv Ansanm, les tirs ont continué pendant la journée du dimanche 1er novembre. Image7 précise qu’aucun bilan définitif n’est confirmé.\n\nQuestions aux lecteurs : • Si c’est la population qui se bat, où est l’État ? • Qui compte les morts de l’Arcahaie, et quand la liste officielle sera-t-elle publiée ? • « Bwa Kale » peut défendre une ville aujourd’hui, mais qui protège les innocents des erreurs de la justice populaire ?\n\nAuparavant : Mise à jour du 31 octobre, après-midi : Selon Le Patrimoine Info, l’attaque de ce samedi 31 octobre à l’Arcahaie a commencé vers 2 h 45 du matin et a fait « de nombreuses victimes ». Aucun bilan officiel n’a encore été publié.\n\nSelon Le National, la Police nationale d’Haïti (PNH), appuyée par les Forces armées d’Haïti (FAd’H) et la Task Force, poursuit ses opérations dans plusieurs zones sensibles, notamment à Bercy, Gressier et dans la commune de Kenscoff. Plusieurs unités spécialisées ont été mobilisées : la BOID, l’UTAG, l’UDMO et la Task Force. Selon la PNH, les forces de l’ordre ont pénétré dans plusieurs bastions de groupes armés, dont la zone connue sous le nom de « 103 Zombi ». Le National ne donne aucun bilan de morts ou de blessés.\n\nQuestions aux lecteurs : • « De nombreuses victimes » : combien, et quand l’État donnera-t-il leurs noms ? • Si les forces de l’ordre entrent dans « 103 Zombi », pourquoi l’Arcahaie fuit-elle encore ? • Qui compte les morts quand il n’y a pas de bilan officiel ?\n\nAuparavant : Mise à jour du 31 octobre : Selon Vant Bèf Info, des hommes armés ont attaqué tôt ce samedi 31 octobre 2026 plusieurs localités de la commune de l’Arcahaie, dont Vigner, Thoman et Sou Rigòl, provoquant la fuite de nombreux habitants. Le site fait aussi état d’affrontements intenses à Bercy et d’une présence d’individus armés à Montrouis.\n\nSelon les déclarations du maire de l’Arcahaie, Wilner René, des hommes armés venus de Kenscoff auraient rejoint les groupes opérant depuis Cabaret pour renforcer leurs effectifs. Vant Bèf Info précise que cette information n’établit aucun lien entre ces hommes et « Galaxie ». Wilner René demande à la Task Force d’intervenir sans délai pour protéger la population et repousser l’offensive. Aucun bilan précis des affrontements de samedi n’était disponible au moment de la publication.\n\nQuestions aux lecteurs : • Trois jours après l’annonce de la mort de « Galaxie », pourquoi est-ce l’Arcahaie qui fuit ? • Si des gangs de Kenscoff peuvent rallier Cabaret, qui surveillait les routes ? • Combien d’appels un maire doit-il lancer avant que la Task Force arrive ?\n\nAuparavant : Selon Le Nouvelliste, la Police nationale d’Haïti (PNH), appuyée par la Task Force, a éliminé plusieurs bandits le jeudi 29 octobre 2026 lors d’une opération à Bercy, entre Arcahaie et Cabaret, dont le chef de gang de Cabaret connu sous le nom de « Galaxie ». D’autres membres du gang ont pris la fuite, provoquant des tensions dans plusieurs localités avoisinantes, selon une source locale.\n\nAucun bilan officiel n’a été publié. Le Quotidien 509 cite Pierre Sauvenel Sylvain, notable de l’Arcahaie, qui a évoqué sur Radio Kiskeya « plus d’une vingtaine » de morts parmi les individus présentés comme des bandits, tout en précisant ne pas disposer d’un bilan exact. Selon lui, des brigadiers accompagnant les forces de l’ordre ont détruit plusieurs abris construits par les groupes armés le long de la route. Il demande au haut commandement de la PNH davantage de moyens pour les policiers sur le terrain, dont des équipements lourds pour démolir les abris restants.\n\nSelon Le Filet Info, l’agent exécutif intérimaire de l’Arcahaie, Wilner René, évoque une vingtaine de morts et affirme que « Galaxy » serait l’un des responsables présumés du massacre de Labodrie ; son groupe occupait Bercy depuis environ deux ans. Il annonce que les opérations se poursuivent dans la zone. Radio Graphie, citant des sources locales, fait état d’au moins une dizaine de membres du gang tués, et rapporte que l’incursion de blindés de la PNH jusqu’à Lévêque a semé la panique à Cabaret, où la population a évacué des espaces publics comme le marché de la ville. Aucune de ces affirmations n’a été confirmée par la PNH.\n\nDepuis plus d’un an, des groupes armés tentent de progresser vers l’Arcahaie, la Cité du Drapeau. Bercy se situe entre Cabaret, où les gangs exercent leur influence, et l’Arcahaie, qui résiste grâce à la police et aux groupes d’autodéfense.\n\nQuestions aux lecteurs : • Si le gang perd son chef, qui prend sa place demain matin ? • Combien de morts, et qui les comptera officiellement ? • Pourquoi est-ce un notable, et non l’État, qui réclame des bulldozers pour l’Arcahaie ?",
    },
    sources: ["PouSiOuPaTKonnen", "Radiographie", "Le Reflet", "Décodage Info", "Rezo Nòdwès", "Rezo Nòdwès", "El Seis", "PNH via EFE (Listín Diario)", "Radiographie", "Rezo Nòdwès", "Image7", "Le Patrimoine Info", "Le National", "Vant Bèf Info", "Le Nouvelliste", "Le Quotidien 509", "Radio Kiskeya", "Le Filet Info", "Radio Graphie"],
    sourceLinks: [
      { name: "PouSiOuPaTKonnen", url: "https://www.pousioupatkonnen.com/affrontements-usage-de-drones-kamikazes-plusieurs-bandits-tues-dans-le-fief-de-chen-mechan/" },
      { name: "Radiographie", url: "https://radiographieht.com/kouri-a-cabaret/" },
      { name: "Le Reflet", url: "https://www.lerefletht.com/post/arcahaie-sous-pression-des-gangs-arm%C3%A9s-le-magistrat-wilner-ren%C3%A9-r%C3%A9clame-des-renforts-policiers" },
      { name: "Décodage Info (au moins 7 morts)", url: "https://decodageinfo.com/2026/11/01/arcahaie-sous-pression-au-moins-sept-morts-signales-dans-une-nouvelle-offensive-armee-ce-dimanche/" },
      { name: "Rezo Nòdwès (Me Pierre Sauvenel Sylvain)", url: "https://rezonodwes.com/2026/11/arcahaie-reveillee-sous-des-detonations-dementi-sur-larrivee-de-renforts-de-la-pnh/" },
      { name: "Rezo Nòdwès (bilan non confirmé)", url: "https://rezonodwes.com/2026/11/arcahaie-un-bilan-local-non-confirme-fait-etat-de-43-morts-et-18-blesses-apres-la-mort-du-chef-de-gang-galaxy/" },
      { name: "El Seis", url: "https://elseis.do/noticias/policia-de-haiti-abate-a-unos-20-pandilleros-tras-intensos-combates-en-arcahaie" },
      { name: "EFE (Listín Diario)", url: "https://listindiario.com/las-mundiales/haiti/20261101/enfrentamientos-policia-haitiana-bandas-armadas-dejan-pandilleros-muertos_928368.html" },
      { name: "Radiographie", url: "https://radiographieht.com/attaque-de-bandits-armes-a-arcahaie-la-pnh-dit-tenir-ses-positions/" },
      { name: "Rezo Nòdwès", url: "https://rezonodwes.com/2026/11/haiti-echec-fils-aime-mobilisation-quand-larcahaie-se-leve-en-bwa-kale-entre-legitime-defense-populaire-et-echec-de-letat/" },
      { name: "Image7", url: "https://image7haiti.com/arcahaie-les-attaques-de-viv-ansanm-se-poursuivent-la-commune-plongee-dans-une-nouvelle-journee-de-tension/" },
      { name: "Le National", url: "https://www.lenational.org/article/politique/8599/bercy-gressier-et-kenscoff-la-pnh-intensifie-ses-offensives-contre-les-gangs" },
      { name: "Vant Bèf Info", url: "https://vantbefinfo.com/haiti-insecurite-des-hommes-armes-attaquent-plusieurs-localites-de-larcahaie/" },
      { name: "Le Nouvelliste", url: "https://lenouvelliste.com/article/273482/plusieurs-bandits-tues-dans-une-operation-des-forces-de-lordre-a-bercy" },
      { name: "Le Quotidien 509", url: "https://lequotidien509.com/haiti-securite-une-vingtaine-de-bandits-dont-le-chef-de-gang-galaxie-abattus-a-bercy/" },
      { name: "Le Filet Info", url: "https://lefiletinfo.com/operation-policiere-un-chef-de-gang-et-une-vingtaine-de-ses-acolytes-tues/" },
      { name: "Radio Graphie", url: "https://radiographieht.com/un-chef-de-gang-et-une-dizaine-de-ses-soldats-abattus-a-arcahaie/" },
    ],
  },
  {
    id: "ntk-nrc-humanitaires-tues-2026-10-31",
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
    isUrgent: true,
    archived: true,
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
    tier: "quick-hit",
    topic: "moise-trials",
    publishedAt: "2026-10-29",
    publishedTime: "2026-10-29T21:05:00-04:00",
    headline: {
      ht: "Pwosè Sanon : akizasyon an montre mesaj ak yon videyo ki ta sèvi gid pou operasyon an",
      fr: "Procès Sanon : l'accusation présente les échanges et une vidéo qui aurait guidé l'opération",
    },
    brief: {
      ht: "Mizajou : Nan pwosè Christian Sanon nan Miami, analis FBI Kaitlin Dayton montre jiri a mesaj Sanon te voye ak kat ko-konspiratè ki deja kondane. Dapre akizasyon an, yon videyo yo te voye bay Sanon 3 me 2021 te sèvi gid pou atak la. Defans lan di lòt yo te mete Sanon sou kote anvan 7 jiyè; kontr-entèwogatwa Dayton te prevwa pou jedi. Anvan sa, 27 ak 28 oktòb, ansyen senatè John Joël Joseph, temwen k ap kolabore, di se Joseph Félix Badio ki t ap dirije konvwa mèsenè kolonbyen yo. Se deklarasyon, pa desizyon tribinal. Nan Miami, pwosè federal Christian Emmanuel Sanon an ap kontinye: ajan FBI ap prezante mesaj telefòn sou lajan pou peye mèsenè yo ak senaryo pou ranplase Moïse, e ansyen senatè John Joël Joseph temwaye 23 oktòb. Ann Ayiti, Paryè Kou Apèl Pòtoprens lan siyale minis Jistis la jij enstriksyon an poko remèt rapò konpleman ankèt la.",
      fr: "Mise à jour : Au procès de Christian Sanon à Miami, l’analyste du FBI Kaitlin Dayton a présenté aux jurés les échanges de Sanon avec quatre co-conspirateurs déjà condamnés. Selon l’accusation, une vidéo envoyée à Sanon le 3 mai 2021 a servi de guide pour l’attaque. La défense soutient que Sanon avait été écarté par les autres avant le 7 juillet ; le contre-interrogatoire de Dayton était prévu jeudi. Auparavant, les 27 et 28 octobre, l’ex-sénateur John Joël Joseph, témoin coopérant, a affirmé que Joseph Félix Badio dirigeait le convoi des mercenaires colombiens. Ce sont des déclarations, pas des constats judiciaires. À Miami, le procès fédéral de Christian Emmanuel Sanon se poursuit : des agents du FBI présentent des messages sur l’argent dû aux mercenaires et sur les scénarios de succession, et l’ex-sénateur John Joël Joseph a témoigné le 23 octobre. En Haïti, le parquet de la Cour d’appel de Port-au-Prince signale au ministre de la Justice que le juge du complément d’enquête n’a toujours pas rendu son rapport.",
    },
    body: {
      ht: "Mizajou 29 oktòb, 9:05 PM : Nan pwosè Christian Sanon nan Miami, analis FBI Kaitlin Dayton montre jiri a mesaj Sanon te voye ak kat ko-konspiratè ki deja kondane. Dapre akizasyon an, yon videyo yo te voye bay Sanon 3 me 2021 te sèvi gid pou atak la. Defans lan di lòt yo te mete Sanon sou kote anvan 7 jiyè; kontr-entèwogatwa Dayton te prevwa pou jedi. \n\nMizajou 29 oktòb, 3:25 PM : 27 ak 28 oktòb, nan tribinal federal Miami, ansyen senatè John Joël Joseph, ki deja kondane a lavi e ki espere yon rediksyon pèn kòm temwen k ap kolabore, temwaye se Joseph Félix Badio ki t ap dirije konvwa mèsenè kolonbyen yo pou Pèlerin 5. Dapre Miami Herald ak Haïti Liberté NAGO site, nan premye pwosè a an avril, li te di se James Solages ki t ap bay lòd. Li di tou Badio te rele yon jounalis ak yon responsab dwa moun maten 7 jiyè 2021 pou anonse asasina a. Atansyon: se deklarasyon yon temwen, pa desizyon tribinal. Badio prezime inosan e li poko gen dat pwosè.\n\nMIAMI. Pwosè federal Christian Emmanuel Sanon, pastè ayisyano-ameriken yo akize li te konplote pou kidnape oswa touye prezidan Jovenel Moïse, louvri 28 septanm 2026. Martine Moïse se te premye temwen an, 29 septanm.\n\n13 ak 14 oktòb, ajan FBI Elizabeth Wieder prezante mesaj ki soti nan telefòn akize yo: pwoblèm lajan pou peye mèsenè kolonbyen yo jiska 6 jiyè 2021, ak senaryo pou kiyès ki t ap ranplase Moïse. Okòmansman se Sanon yo te konsidere, apre sa yo mete l sou kote akoz sitwayènte ameriken li. Yon lòt senaryo te mete jij Wendelle Coq Thélot kòm prezidan ak Joseph Lambert kòm Premye minis. Atansyon: non ki parèt nan mesaj sa yo se pa desizyon tribinal; okenn nan moun sa yo pa kondane nan dosye a sou baz mesaj sa yo. Defans Sanon ap eseye montre li pa t nan pati vyolan yo e yo te mete l sou kote.\n\nPwosè a te nan 14yèm oswa 15yèm temwen sou 57. Li antre nan 4yèm semèn li 19 oktòb, ak ajan FBI Bryan Jordan sou done telefòn yo. 21 oktòb, analis FBI Kaitlin Dayton montre jiri a yon videyo 7 minit Sanon te resevwa 3 me 2021, yon kalite gid pou ranvèse yon gouvènman (Miami Herald). Vandredi 23 oktòb, ansyen senatè John Joël Joseph, ki deja kondane a lavi, temwaye li te òganize yon reyinyon ant Sanon ak Pierre Espérance (RNDDH), selon Juno7. Temwayaj sa a pou kont li pa montre Espérance te jwe okenn wòl nan asasina a.\n\nFen septanm, 18 akize te transfere soti Ayiti pou Miami, tankou Joseph Félix Badio ak 17 ansyen sòlda kolonbyen.\n\nAYITI. Nan yon lèt 22 oktòb 2026, Komisè gouvènman an bò Kou Apèl Pòtoprens lan, Claude Jean, di minis Jistis Patrick Pélissier jij Cyprien Jn F. Denis Pierre, ki responsab konpleman ankèt Kou a te bay lòd fè 13 oktòb 2025 (kòmanse an janvye 2026), poko remèt rapò li. Pa gen okenn dat ki fikse.",
      fr: "Mise à jour du 29 octobre, 21 h 05 : Au procès de Christian Sanon à Miami, l’analyste du FBI Kaitlin Dayton a présenté aux jurés les échanges de Sanon avec quatre co-conspirateurs déjà condamnés. Selon l’accusation, une vidéo envoyée à Sanon le 3 mai 2021 a servi de guide pour l’attaque. La défense soutient que Sanon avait été écarté par les autres avant le 7 juillet ; le contre-interrogatoire de Dayton était prévu jeudi. \n\nMise à jour du 29 octobre, 15 h 25 : Les 27 et 28 octobre, devant le tribunal fédéral de Miami, l’ex-sénateur John Joël Joseph, déjà condamné à la prison à vie et témoin coopérant espérant une réduction de peine, a affirmé que Joseph Félix Badio était à la tête du convoi des mercenaires colombiens vers Pèlerin 5. Selon le Miami Herald et Haïti Liberté cités par NAGO, lors du premier procès en avril, il avait désigné James Solages comme celui qui donnait les ordres. Il a aussi déclaré que Badio a appelé un journaliste et un responsable des droits humains le matin du 7 juillet 2021 pour annoncer l’assassinat. Il s’agit de déclarations d’un témoin, pas de constats judiciaires ; Badio est présumé innocent et aucune date de procès n’a été fixée pour lui.\n\nMIAMI. Le procès fédéral de Christian Emmanuel Sanon, pasteur haïtiano-américain accusé d’avoir conspiré pour enlever ou tuer le président Jovenel Moïse, s’est ouvert le 28 septembre 2026. Martine Moïse a été le premier témoin, le 29 septembre.\n\nLes 13 et 14 octobre, l’agente du FBI Elizabeth Wieder a présenté des messages extraits des téléphones des accusés : difficultés à payer les mercenaires colombiens jusqu’au 6 juillet 2021, et scénarios de succession. Sanon a d’abord été envisagé, puis écarté en raison de sa citoyenneté américaine. Un autre scénario plaçait la juge Wendelle Coq Thélot à la présidence et Joseph Lambert à la primature. Précision importante : les noms cités dans ces messages ne constituent pas des constats judiciaires ; aucune de ces personnes n’a été reconnue coupable sur la base de ces échanges. La défense cherche à dissocier Sanon des volets violents du complot.\n\nLe procès en était au 14e ou 15e témoin sur 57. Il est entré dans sa 4e semaine le 19 octobre, avec l’agent du FBI Bryan Jordan sur les données téléphoniques. Le 21 octobre, l’analyste du FBI Kaitlin Dayton a montré aux jurés une vidéo de 7 minutes reçue par Sanon le 3 mai 2021, présentée par l’accusation comme un guide pour renverser un gouvernement (Miami Herald). Le vendredi 23 octobre, l’ex-sénateur John Joël Joseph, déjà condamné à la prison à vie, a déclaré avoir organisé une rencontre entre Sanon et Pierre Espérance (RNDDH), selon Juno7. Ce témoignage n’établit pas à lui seul un rôle d’Espérance dans l’assassinat.\n\nFin septembre, 18 accusés ont été transférés d’Haïti vers Miami, dont Joseph Félix Badio et 17 anciens soldats colombiens.\n\nHAÏTI. Dans une lettre du 22 octobre 2026, le commissaire du gouvernement près la Cour d’appel de Port-au-Prince, Claude Jean, a signalé au ministre de la Justice Patrick Pélissier que le juge Cyprien Jn F. Denis Pierre, chargé du complément d’enquête ordonné le 13 octobre 2025 (entamé en janvier 2026), n’a toujours pas remis son rapport. Aucune date n’a été annoncée.",
    },
    sources: ["Le National", "InfoNation", "Miami Herald", "Juno7 / Le Soulouquois", "RHINEWS", "Nago TV"],
    sourceLinks: [{ name: "Miami Herald", url: "https://www.miamiherald.com/news/local/community/miami-dade/article317722865.html" }, { name: "NAGO", url: "https://nago.tv/en/news/selon-john-joel-joseph-badio-etait-a-la-tete-du-convoi-des-mercenaires" }],
  },
  {
    id: "qh-caonabo-richard-alexandre-2026-10-29",
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
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-10-29",
    publishedTime: "2026-11-02T20:30:00-05:00",
    headline: {
      ht: "Lanmò Sanjou konfime bay AP li ekri ONU, li di 4 teknisyen salvadoryen yo mouri san li pa bay prèv",
      fr: "Lanmò Sanjou confirme à l'AP sa lettre à l'ONU et affirme, sans preuve, que les 4 techniciens salvadoriens sont morts",
    },
    teaser: {
      ht: "Nan premye entèvyou li ak yon gwo medya entènasyonal, chèf 400 Mawozo a konfime lèt la. Salvadò pa konfime lanmò teknisyen yo.",
      fr: "Dans sa première interview à un grand média international, le chef de 400 Mawozo confirme la lettre. Le Salvador n'a pas confirmé la mort des techniciens.",
    },
    brief: {
      ht: "Mizajou 2 novanm, 20 h 30 : Dapre Associated Press (AP), Wilson Joseph, ki rele Lanmò Sanjou, konfime li ekri sekretè jeneral ONU pou mande yon delegasyon pou dyalòg. Li di AP 4 teknisyen salvadoryen yo mouri, san li pa bay prèv. Mizajou 2 novanm : Rezo Nòdwès di li resevwa kopi yon lèt 1ye novanm, sou antèt « Biwo Kominikasyon » 400 Mawozo, ki atribye a Wilson Joseph, alias Lanmò Sanjou, ki mande António Guterres yon medyasyon ; Rezo Nòdwès poze kesyon sou kiyès ki ekri l, e otantisite l pa verifye. Semafor, ki site Axios, di kontenjan salvadoryen an ta ka double oswa triple. Mizajou 1ye novanm, aswè : Dapre AyiboPost, ki site yon demi douzèn moun, gang yo ap mete barikad nan Santo, Lillavois, Kwadèmisyon ak lòt zòn, yo fòse jèn gason antre nan gang, fòse moun mache, e yo di moun k ap kouri yo ap peye pou retounen. Se sèlman anviwon 200 nan plis pase 2000 sòlda salvadoryen yo ki pral anba kòmandman GSF, dapre AyiboPost. Mizajou 1ye novanm : Dapre HaitiLibre, Wilson Joseph, alias Lanmò Sanjou, yo prezante kòm chèf gang 400 Mawozo, pibliye yon videyo kote li pwopoze pale ak Bukele, pandan l toujou nye responsablite nan disparisyon kat sòlda salvadoryen yo. Dapre MIREX ak Diario Libre, yon bato ak anviwon 525 tòn ekipman pou kontenjan Bangladesh GSF la kite Haina. Mizajou 31 oktòb, 8:35 PM : Devan jounalis nan yon fèt Halloween Mar-a-Lago, Donald Trump konfime sou kamera li te pale ak Bukele : « Li di m li gen yon gwo pwoblèm ak Ayiti... Yo touye kèk nan moun li yo. Mwen di l : “Se ou k ap dirije peyi w. Ou dwe fè sa ou gen pou fè.” » Okenn lanmò salvadoryen poko konfime. Anvan sa, se sèlman Axios, ak sous anonim, ki te rapòte apèl la. Mizajou 31 oktòb, aswè : Yon avyon Hercules C-130H Fòs Ayewospasyal Kolonbi (FAC 1005) transpòte sòlda ak ekipman salvadoryen soti San Salvador rive Pòtoprens, nan kad koalisyon A3C Etazini ap dirije kont katèl yo, dapre Infobae ki site El Tiempo. Salvadò ta ka monte jiska anviwon 2500 sòlda. Etazini di li transpòte plis pase 600 tòn ekipman soti Bangladèch pou GSF la. Mizajou 31 oktòb, aprè midi : Sòlda salvadoryen yo monte yon baz Tabar, toupre anbasad Etazini, dapre Infobae ki site EFE. Sòlda tchadyen GSF la patwouye Pòtoprens maten an, dapre jounalis Rosemon. Mizajou 31 oktòb : Premye patwouy sòlda salvadoryen yo vandredi 30 oktòb nan Tabar ak Klèsin, toupre ayewopò a, ak machin blende ak elikoptè. Kèk moun bat bravo. Men misyon, kòmandman ak dire yo toujou pa klè. Mizajou 30 oktòb : Yon akò bilateral Ayiti apwouve mèkredi 28 oktòb otorize fòs salvadoryen an opere nan peyi a. Dapre Axios, Donald Trump di Bukele « Fè sa ou gen pou fè » pandan yon apèl madi. Dapre AFP, omwen 2000 sòlda salvadoryen deja rive an Ayiti. Nan yon mesaj an kreyòl ak yon videyo sou X, 29 oktòb, Bukele pale dirèkteman ak pèp ayisyen an. Bukele voye yo chèche kat teknisyen salvadoryen ki disparèt depi anbiskad 18 oktòb la epi goumen ak gang yo. Li di kò Ayiti remèt yo pa koresponn ak moun ki disparèt yo.",
      fr: "Mise à jour du 2 novembre, 20 h 30 : Selon l'Associated Press (AP), Wilson Joseph, dit Lanmò Sanjou, confirme avoir écrit au secrétaire général de l'ONU pour demander une délégation de dialogue. Il affirme à l'AP que les 4 techniciens salvadoriens sont morts, sans fournir de preuve. Mise à jour du 2 novembre : Rezo Nòdwès dit avoir reçu copie d’une lettre datée du 1er novembre, sous l’en-tête du « Bureau Communication » des 400 Mawozo, attribuée à Wilson Joseph, alias Lanmò Sanjou, demandant une médiation à António Guterres ; Rezo Nòdwès s’interroge sur son auteur réel, et son authenticité n’est pas vérifiée. Selon Semafor, citant Axios, le contingent salvadorien pourrait doubler ou tripler. Mise à jour du 1er novembre, soir : Selon AyiboPost, qui cite une demi-douzaine de personnes, les gangs érigent des barricades à Santo, Lillavois, Croix-des-Missions et ailleurs, recrutent de force des jeunes, contraignent des habitants à manifester et préviennent ceux qui fuient qu’ils devront payer pour revenir. À peine 200 des plus de 2000 soldats salvadoriens seront placés sous le commandement de la GSF, selon AyiboPost. Mise à jour du 1er novembre : Selon HaitiLibre, Wilson Joseph, alias Lanmò Sanjou, présenté comme le chef du gang 400 Mawozo, a diffusé une vidéo proposant des discussions avec Bukele, tout en continuant de nier toute responsabilité dans la disparition des quatre militaires salvadoriens. Selon le MIREX et Diario Libre, un navire chargé d’environ 525 tonnes d’équipement pour le contingent bangladais de la GSF a quitté Haina. Mise à jour du 31 octobre, 20 h 35 : Devant des journalistes lors d’une fête d’Halloween à Mar-a-Lago, Donald Trump a confirmé face caméra avoir parlé à Bukele : « Il m’a dit qu’il avait un gros problème avec Haïti... Ils ont tué certains des siens. Je lui ai dit : “C’est vous qui dirigez votre pays. Vous devez faire ce que vous avez à faire.” » Aucune mort salvadorienne n’est confirmée. Jusqu’ici, seul Axios, sur la foi de sources anonymes, avait rapporté l’appel. Mise à jour du 31 octobre, soir : Un Hercules C-130H de la Force aérospatiale colombienne (FAC 1005) a transporté des militaires et du matériel salvadoriens de San Salvador à Port-au-Prince, dans le cadre de la coalition anticartels A3C impulsée par Washington, selon Infobae citant El Tiempo. Le Salvador envisagerait d’aller jusqu’à environ 2500 soldats. Les États-Unis disent avoir acheminé plus de 600 tonnes d’équipements depuis le Bangladesh pour la FRG/GSF. Mise à jour du 31 octobre, après-midi : Les militaires salvadoriens ont installé une base à Tabarre, près de l’ambassade des États-Unis, selon Infobae citant EFE. Des soldats tchadiens de la FRG/GSF ont patrouillé Port-au-Prince ce matin, selon le journaliste Rosemon. Mise à jour du 31 octobre : Premières patrouilles salvadoriennes vendredi 30 octobre à Tabarre et Clercine, près de l’aéroport, avec blindés et hélicoptère. Des passants ont applaudi. Mais mission, commandement et durée restent flous. Mise à jour du 30 octobre : Un accord bilatéral approuvé par Haïti le mercredi 28 octobre autorise la force salvadorienne à opérer dans le pays. Selon Axios, Donald Trump a dit à Bukele « Fais ce que tu as à faire » lors d’un appel mardi. Selon l’AFP, au moins 2000 militaires salvadoriens sont déjà arrivés en Haïti. Dans un message en créole accompagné d’une vidéo publié sur X le 29 octobre, Bukele s’adresse directement au peuple haïtien. Bukele envoie ses soldats retrouver quatre techniciens salvadoriens disparus depuis l'embuscade du 18 octobre et combattre les gangs. Il affirme que les corps remis par Haïti ne correspondent pas aux disparus.",
    },
    body: {
      ht: "Mizajou 2 novanm, 20 h 30 : Dapre ajans Associated Press (AP), nan yon atik Washington Post repran, Wilson Joseph, ke yo konnen sou non Lanmò Sanjou, chèf gang 400 Mawozo, konfime lendi a li te ekri sekretè jeneral ONU pou mande l voye yon delegasyon ann Ayiti pou dyalòg ak medyasyon. AP di se premye entèvyou li bay yon gwo konpayi medya entènasyonal.\n\nToujou dapre AP, li di 4 teknisyen avyasyon salvadoryen ki disparèt depi 18 oktòb yo mouri. Li pa bay okenn prèv. Salvadò pa t konfime lanmò yo lè nou t ap pibliye, e rechèch la ap kontinye. Opak News pa ka verifye deklarasyon chèf gang lan.\n\nGouvènman ameriken an ofri jiska 1 milyon dola pou enfòmasyon ki ta mennen nan arestasyon Wilson Joseph. Li prezime inosan toutotan yon tribinal pa jije l.\n\nKesyon pou lektè yo : • Si teknisyen yo mouri vre, kiyès ki dwe reponn pou sa ? • Èske yon chèf gang ka chita sou tab dyalòg ak ONU ? • Poukisa Salvadò pa di anyen sou deklarasyon sa a ?\n\nMizajou 2 novanm : Rezo Nòdwès di li resevwa kopi yon lèt ki date 1ye novanm 2026, sou antèt « Biwo Kominikasyon » gwoup 400 Mawozo, ki atribye a Wilson Joseph, alias « Lanmò Sanjou ». Lèt la ta mande sekretè jeneral ONU a, António Guterres, voye yon delegasyon ann Ayiti, pou yon medyasyon entènasyonal ak yon dyalòg pou lapè. Siyatè a di li te leve yon « drapo blan » 20 out, li di li pare pou pale ak fòs entènasyonal yo, e li pale de vyolans nan Plèn Kildesak, ensidan ak militè salvadoryen ak viktim sivil, tankou yon tifi uit an. Se sèl Rezo Nòdwès ki pibliye lèt sa a ; li menm di dokiman an dwe trete « o kondisyonèl » jiskaske yo verifye l, e li mande kiyès ki reyèlman ekri l. Opak News pa wè lèt la, e okenn nan reklamasyon li yo pa verifye.\n\nDapre Semafor, Donald Trump apiye desizyon Salvador pou voye plis sòlda ; Semafor, ki site Axios, di kontenjan an, ki gen jiska 2000 sòlda, « ta ka double oswa triple ». Yon ekspè Council on Foreign Relations di Reuters, toujou dapre Semafor : « Tablo sekirite a pa montre yon estabilizasyon. Li montre yon eskalasyon. »\n\nKesyon pou lektè yo : • Si se pa Lanmò Sanjou ki ekri lèt la, kiyès k ap pale nan non l ? • Yon « drapo blan » 20 out : kisa viktim Plèn Kildesak yo te wè depi lè sa a ? • 4000 oswa 6000 sòlda Salvador : kiyès ki otorize sa, e jiska kilè ?\n\nAnvan sa : Mizajou 1ye novanm, aswè : Dapre yon ankèt AyiboPost ki baze sou temwayaj yon demi douzèn moun ki konnen aktivite sa yo, gang ki pi pisan Pòtoprens yo ap prepare pou yon posib konfwontasyon ak sòlda Nayib Bukele yo nan Plèn Kildesak. AyiboPost di yo wè barikad nan Lillavois, Lizon, Marin, Lathan, Kafou Shada, Santo ak Damien, e yo ap miltipliye nan Santo 11, Santo 17, Kwadèmisyon, Kafou Fouji ak Bajou. Gang Claudy « Chen Mechan » Célestin ap sèvi ak pye bwa pou bloke aksè, dapre menm sous la ; moun yo fòse ede bati barikad yo.\n\nDapre AyiboPost, gang yo ap fè rekritman fòse pami jèn gason, yo fòse kèk jèn patisipe nan yon mach 30 oktòb kont prezans etranje, e kèk gwoup ame di moun k ap kouri yo ap gen pou yo peye pou retounen. AyiboPost di se apèn 200 nan plis pase 2000 sòlda salvadoryen yo ki pral anba kòmandman Gang Suppression Force (GSF) ; yon sous di negosyasyon ap fèt ak Leta ayisyen sou chenn kòmandman ak zòn operasyon yo.\n\nYon sous pwòch Chen Mechan di AyiboPost ke chèf gang lan pa pataje diskou batay Lanmò Sanjou, e ke, nan gwoup la, swadizan asasina Salvadoryen yo konsidere kòm yon « erè ». Se pawòl yon sous anonim, rapòte pa yon sèl medya ; okenn lanmò pa konfime, okenn tribinal pa jije pèsonn, e Bukele di kadav yo te jwenn 24 oktòb yo pa pou konpatriyòt li yo.\n\nKesyon pou lektè yo : • Si 200 sèlman anba GSF, kiyès ki kòmande lòt 1800 yo ? • Kiyès ki pwoteje jèn Santo yo kont rekritman fòse ? • Si se yon « erè », kiyès ki pral reponn devan lajistis ?\n\nAnvan sa : Mizajou 1ye novanm : Dapre HaitiLibre, Wilson Joseph, alias « Lanmò Sanjou », yo prezante kòm chèf gang 400 Mawozo, bese ton li devan arive fòs Salvador yo. 22 oktòb li te di li pare pou goumen ; men nan fen oktòb, li pibliye yon videyo kote li pwopoze diskite ak prezidan salvadoryen an, Nayib Bukele, pandan l kontinye nye nenpòt responsablite nan disparisyon kat militè salvadoryen yo. Se sèl HaitiLibre ki rapòte sa ; Opak News pa wè videyo a. Okenn tribinal pa jije l pou disparisyon sa a.\n\nDapre Ministè Afè Etranjè dominiken (MIREX), yon bato ak anviwon 525 tòn ekipman, zam, machin espesyal ak materyèl sipò pou Gang Suppression Force (GSF) kite pò Haina pou Ayiti. MIREX di chajman an soti Bangladesh e se Almay ki finanse transpò a ; Diario Libre, li menm, di ekipman an te rive Repiblik Dominikèn nan plizyè avyon ki soti Almay. Daniela Kroslak, chèf Biwo Sipò Nasyonzini an Ayiti (UNSOH), rele sipò lojistik dominiken an « esansyèl », dapre MIREX.\n\nDapre Diario Libre, Bangladesh gen 50 militè avangad deja deplwaye e li prevwa voye anviwon 1600 militè ak polisye. Toujou dapre Diario Libre, GSF te gen 2285 manm 29 oktòb, sou yon maksimòm 5500 Konsèy Sekirite a otorize.\n\nKesyon pou lektè yo : • Si Lanmò Sanjou nye tout bagay, poukisa li vle negosye kounye a ? • Kiyès ki deside si gen diskisyon ak yon chèf gang : Pòtoprens, San Salvador oswa Nasyonzini ? • 525 tòn ekipman ap rive : kilè fanmi kat sòlda yo ap gen repons ?\n\nAnvan sa : Mizajou 31 oktòb, 8:35 PM : Samdi swa 31 oktòb, nan yon fèt Halloween nan Mar-a-Lago, Prezidan ameriken Donald Trump konfime devan kamera li te di prezidan salvadoryen an, Nayib Bukele, « fè sa ou gen pou fè » ann Ayiti. Nan yon klip Mezon Blanch lan (kont RapidResponse47) pibliye sou X vè 8:35 PM lè Ayiti, Trump di : « I did speak to him. He said that he has a big problem with Haiti... They killed some of his people. I said, 'You're running your country. You have to do what you have to do.' » (« Mwen te pale avè l. Li di m li gen yon gwo pwoblèm ak Ayiti... Yo touye kèk nan moun li yo. Mwen di l : “Se ou k ap dirije peyi w. Ou dwe fè sa ou gen pou fè.” »). Drop Site News, ki rapòte deklarasyon an tou, presize Trump t ap pale ak jounalis.\n\nAnvan jodi a, se sèlman Axios (30 oktòb), ak sous anonim, ki te rapòte apèl ant de prezidan yo.\n\nSa ki konfime ak sa ki pa konfime : Okenn lanmò salvadoryen poko rapòte ni konfime. Kat teknisyen avyasyon salvadoryen ki t ap sèvi nan Fòs Siprèsyon Gang (GSF) la disparèt depi anbiskad 18 oktòb la nan Kwadebouke, e Bukele li menm di kò boule yo te jwenn semèn pase a pa t pou yo. Pawòl « yo touye kèk nan moun li yo » se sa Trump di Bukele te di l; okenn sous endepandan poko konfime sa.\n\nKesyon pou lektè yo : • Si okenn Salvadoryen poko mouri, sou ki baz Trump di « yo touye moun li yo » ? • Yon « feu vèt » Washington pou yon lame etranje ann Ayiti : kiyès nan gouvènman ayisyen an ki te gen mo pa l nan apèl sa a ? • Kiyès ki pral reponn si operasyon « fè sa ou gen pou fè » a touye sivil ayisyen ?\n\nAnvan : Mizajou 31 oktòb, aswè : Dapre Infobae, ki site jounal kolonbyen El Tiempo ak sous militè, yon avyon Hercules C-130H Fòs Ayewospasyal Kolonbi (FAC), matrikil FAC 1005, sèvi pou transpòte sòlda ak ekipman salvadoryen sou wout San Salvador–Pòtoprens. Videyo, imaj ak done sit swivi vòl montre mouvman avyon an. Dapre sous sa yo, Kolonbi patisipe nan kad akò Koalisyon Amerik yo kont Katèl yo (A3C), yon alyans 19 peyi Washington ap pouse, ke Kolonbi te antre ladan l 12 out 2026. Infobae di rapò entènasyonal endike Salvadò voye anviwon 2000 militè e l ap etidye pou monte chif la jiska anviwon 2500.\n\nNan menm jounen an, dapre N Digital, anbasad Etazini an Ayiti enfòme sou transpò pa avyon plis pase 600 tòn ekipman priyoritè soti Bangladèch pou Fòs Siprèsyon Gang (GSF) la. Se diplomat ameriken Juan Pablo Segura ki fè anons lan vandredi 30 oktòb ; li remèsye Almay pou kontribisyon li nan operasyon lojistik la.\n\nLi tou sou Opak News : Bukele demanti akizasyon bonbadman yo (lyen anba a).\n\nKesyon pou lektè yo : • Ki lòt peyi k ap ede deplwaman salvadoryen an san yo pa di sa piblikman ? • Si Salvadò monte a 2500 sòlda, kiyès ki vote oswa apwouve sa ann Ayiti ? • 600 tòn ekipman pou GSF : kilè pèp la ap wè rezilta sou teren an ?\n\nAnvan : Mizajou 31 oktòb, aprè midi : Dapre Infobae, ki site ajans EFE ak medya lokal ayisyen, sòlda salvadoryen yo monte yon baz militè nan komin Tabar, nan yon zòn toupre anbasad Etazini. Se depi baz sa a kontenjan an kowòdone deplasman ak operasyon li yo. Infobae di patwouy yo te pase tou sou wout toupre Santo, nan Kwadebouke. Dapre gouvènman salvadoryen an, deplwaman an fèt an kowòdinasyon ak Premye minis Alix Didier Fils-Aimé, e se pa yon envazyon.\n\nNan menm jounen an, jounalis Rosemon pibliye sou X yon foto Patrice Noel ki montre sòlda tchadyen Fòs Siprèsyon Gang (GSF) la k ap patwouye nan lari Pòtoprens bonè samdi 31 oktòb maten, nan kad operasyon kont gang yo.\n\nKesyon pou lektè yo : • Poukisa yon baz etranje bezwen toupre anbasad ameriken an ? • Salvadoryen, Tchadyen, Task Force, PNH, FAd’H : ki moun ki kòmande ki moun nan lari a ? • Ki moun ki pral di pèp la konbyen tan baz Tabar la ap rete ?\n\nAnvan : Mizajou 31 oktòb : Dapre ajans EFE, rapòte pa The Rio Times, plizyè dizèn sòlda salvadoryen an inifòm konba ak fizi atak fè premye patwouy yo nan lari Pòtoprens vandredi 30 oktòb, nan Tabar ak Klèsin, toupre ayewopò entènasyonal Toussaint Louverture, nan kamyon ak machin blende, ak elikoptè ki t ap kouvri yo. Kèk moun sou wout la bat bravo. Gouvènman Bukele a di li gen plis pase 2000 sòlda an Ayiti; objektif ofisyèl la se jwenn kat teknisyen salvadoryen ki disparèt depi 18 oktòb vivan.\n\nSou RFI, moun Pòtoprens divize. Sephora, etidyan nan Inivèsite Leta, di si Bukele ka ede, « nou akeyi l ak kè kontan ». Castène pi pridan : li pa vle sa sèvi pretèks pou « anvayi peyi a » e mete souverènte Ayiti an kesyon. Ki misyon egzak yo, ki moun ki kòmande yo, e konbyen tan y ap rete : kesyon sa yo poko gen repons. Dapre Axios, kontenjan an sanble ap opere paralèl ak Fòs Siprèsyon Gang (GSF) la, anba yon akò bilateral.\n\nKesyon pou lektè yo : • Si yon sòlda etranje patwouye Tabar, ki moun li reponn : Pòtoprens, San Salvadò oswa Washington ? • Bravo jodi a, men kisa k ap rive si yon bal pèdi touye yon sivil ? • Poukisa se toujou lòt peyi ki vin fè travay Leta ayisyen an ?\n\nAnvan : Mizajou 30 oktòb : Yon akò bilateral Ayiti apwouve mèkredi 28 oktòb otorize fòs salvadoryen an opere nan peyi a. Dapre Axios, Bukele rele Donald Trump madi pou asire l Washington pa gen pwoblèm ak operasyon an, e Trump reponn li : « Fè sa ou gen pou fè » (\"Do what you have to do\").\n\nDapre AFP, omwen 2000 sòlda salvadoryen rive an Ayiti nan yon semèn. AFP konte anviwon 20 vòl charter ant San Salvador ak Pòtoprens ant 22 ak 29 oktòb, e imaj satelit montre dis estrikti (petèt tant) yo enstale sou baz militè entènasyonal ayewopò Toussaint-Louverture a.\n\nNan mesaj kreyòl li a, Bukele di se Salvadò k ap peye 90% depans operasyon an. Diego Da Rin, analis Crisis Group, di AFP kounye a gen « senk fòs separe san yon vrè kòmandman inifye ». Depi 18 oktòb, MSF trete 30 moun blese nan tire oswa dron nan lopital li yo nan Tabarre ak Site Solèy.\n\nMizajou 29 oktòb, 5:14 PM : Nayib Bukele pibliye sou X yon mesaj an kreyòl ak yon videyo pou pèp ayisyen an (tèks la anwo a, jan li ekri l).\n\nPrezidan salvadoryen an, Nayib Bukele, anonse li voye plis pase 2000 sòlda an Ayiti. Misyon yo: jwenn kat teknisyen salvadoryen nan Gang Suppression Force la ki disparèt depi anbiskad 18 oktòb la nan Kwadebouke, epi goumen ak gang yo.\n\nBukele di kò otorite ayisyen yo te remèt yo pa koresponn ak moun ki disparèt yo.\n\nLi poko klè si sòlda sa yo ap travay anba Gang Suppression Force la oswa poukont yo. Anons sa a ranplase chif anviwon 1000 sòlda ki te pale anvan an.",
      fr: "Mise à jour du 2 novembre, 20 h 30 : Selon l'agence Associated Press (AP), dans un article repris par le Washington Post, Wilson Joseph, connu sous le nom de Lanmò Sanjou, chef du gang 400 Mawozo, a confirmé lundi avoir écrit au secrétaire général de l'ONU pour lui demander d'envoyer en Haïti une délégation de dialogue et de médiation. L'AP précise qu'il s'agit de sa première interview à un grand média international.\n\nToujours selon l'AP, il affirme que les 4 techniciens d'aviation salvadoriens disparus depuis le 18 octobre sont morts. Il n'a fourni aucune preuve. Le Salvador n'avait pas confirmé leur mort au moment de publier, et les recherches se poursuivent. Opak News ne peut pas vérifier les déclarations du chef de gang.\n\nLes États-Unis offrent jusqu'à 1 million de dollars pour toute information menant à l'arrestation de Wilson Joseph. Il est présumé innocent tant qu'un tribunal ne l'a pas jugé.\n\nQuestions aux lecteurs : • Si les techniciens sont morts, qui doit en répondre ? • Un chef de gang peut-il s'asseoir à la table du dialogue avec l'ONU ? • Pourquoi le Salvador garde-t-il le silence sur cette déclaration ?\n\nMise à jour du 2 novembre : Rezo Nòdwès dit avoir reçu copie d’une lettre datée du 1er novembre 2026, sous l’en-tête du « Bureau Communication » du groupe 400 Mawozo, attribuée à Wilson Joseph, alias « Lanmò Sanjou ». La lettre demanderait au secrétaire général de l’ONU, António Guterres, de dépêcher une délégation en Haïti, pour une médiation internationale et l’ouverture d’un dialogue pour la paix. Le signataire affirme avoir hissé un « drapeau blanc » le 20 août, se dit prêt à dialoguer avec les forces internationales, et évoque les violences dans la Plaine du Cul-de-Sac, des incidents impliquant des militaires salvadoriens et des victimes civiles, dont une fillette de huit ans. Seul Rezo Nòdwès publie cette lettre ; le site précise lui-même qu’elle doit être traitée « au conditionnel jusqu’à vérification » et s’interroge sur son véritable auteur. Opak News n’a pas vu la lettre, et aucune de ses affirmations n’est vérifiée.\n\nSelon Semafor, Donald Trump a soutenu la décision du Salvador d’envoyer des renforts ; citant Axios, Semafor écrit que le contingent, jusqu’à 2000 soldats, « pourrait doubler ou tripler ». Un expert du Council on Foreign Relations a déclaré à Reuters, toujours selon Semafor : « Le tableau sécuritaire ne pointe pas vers une stabilisation. Il pointe vers une escalade. »\n\nQuestions aux lecteurs : • Si Lanmò Sanjou n’a pas écrit cette lettre, qui parle en son nom ? • Un « drapeau blanc » le 20 août : qu’ont vécu depuis les victimes de la Plaine du Cul-de-Sac ? • 4000 ou 6000 soldats salvadoriens : qui l’autorise, et jusqu’à quand ?\n\nAuparavant : Mise à jour du 1er novembre, soir : Selon une enquête d’AyiboPost fondée sur les témoignages d’une demi-douzaine de personnes au fait de ces activités, les gangs les plus puissants de Port-au-Prince se préparent à une possible confrontation avec les troupes de Nayib Bukele dans la Plaine du Cul-de-Sac. AyiboPost dit avoir observé des barricades à Lillavois, Lizon, Marin, Lathan, Carrefour Shada, Santo et Damien, qui se multiplient aussi à Santo 11, Santo 17, Croix-des-Missions, Carrefour Fouji et Bajou. Le gang de Claudy « Chen Mechan » Célestin utilise des troncs d’arbres pour bloquer les accès, selon la même source ; des habitants sont contraints d’aider à construire les barricades.\n\nToujours selon AyiboPost, les gangs mènent une campagne de recrutement forcé parmi les jeunes hommes, ont contraint des jeunes à participer à une marche le 30 octobre contre la présence étrangère, et certains groupes armés préviennent ceux qui fuient qu’ils devront payer pour revenir. AyiboPost écrit qu’à peine 200 des plus de 2000 soldats salvadoriens seront placés sous le commandement de la Gang Suppression Force (GSF) ; selon une source, des négociations sont en cours avec l’État haïtien sur la chaîne de commandement et les zones d’opération.\n\nUne source proche de Chen Mechan affirme à AyiboPost que le chef de gang ne partage pas la rhétorique combative de Lanmò Sanjou et que, au sein du groupe, le meurtre présumé des Salvadoriens est considéré comme une « erreur ». Il s’agit des propos d’une source anonyme rapportés par un seul média ; aucune mort n’est confirmée, personne n’a été jugé, et Bukele affirme que les restes humains reçus le 24 octobre ne sont pas ceux de ses compatriotes.\n\nQuestions aux lecteurs : • Si 200 seulement passent sous la GSF, qui commande les 1800 autres ? • Qui protège les jeunes de Santo du recrutement forcé ? • Si c’était une « erreur », qui en répondra devant la justice ?\n\nAuparavant : Mise à jour du 1er novembre : Selon HaitiLibre, Wilson Joseph, alias « Lanmò Sanjou », présenté comme le chef du gang 400 Mawozo, a adouci le ton face à l’arrivée des forces salvadoriennes. Le 22 octobre, il s’était dit prêt à se battre ; fin octobre, il a diffusé une vidéo proposant des discussions avec le président salvadorien Nayib Bukele, tout en continuant de nier toute responsabilité dans la disparition des quatre militaires salvadoriens. Seul HaitiLibre rapporte cette vidéo, qu’Opak News n’a pas vue. Aucun tribunal ne l’a jugé pour cette disparition.\n\nSelon le ministère dominicain des Affaires étrangères (MIREX), un navire chargé d’environ 525 tonnes de fournitures, d’armement, de véhicules spécialisés et d’équipements de soutien pour la Gang Suppression Force (GSF) a quitté le port de Haina pour Haïti. Le MIREX indique que la cargaison provient du Bangladesh et que son transport a été financé par l’Allemagne ; Diario Libre écrit pour sa part que le matériel est arrivé en République dominicaine à bord de plusieurs avions en provenance d’Allemagne. Daniela Kroslak, cheffe du Bureau d’appui des Nations unies en Haïti (UNSOH), a qualifié d’« essentiel » le soutien logistique dominicain, selon le MIREX.\n\nSelon Diario Libre, le Bangladesh compte 50 militaires d’avant-garde déployés et prévoit d’envoyer environ 1600 militaires et policiers. Toujours selon Diario Libre, la GSF comptait 2285 membres au 29 octobre, pour un plafond de 5500 autorisé par le Conseil de sécurité.\n\nQuestions aux lecteurs : • Si Lanmò Sanjou nie tout, pourquoi veut-il négocier maintenant ? • Qui décide d’un dialogue avec un chef de gang : Port-au-Prince, San Salvador ou l’ONU ? • 525 tonnes d’équipement arrivent : quand les familles des quatre militaires auront-elles des réponses ?\n\nAuparavant : Mise à jour du 31 octobre, 20 h 35 : Samedi soir 31 octobre, lors d’une fête d’Halloween à Mar-a-Lago, le président américain Donald Trump a confirmé face caméra avoir dit au président salvadorien Nayib Bukele de « faire ce qu’il a à faire » en Haïti. Dans un extrait diffusé sur X par la Maison-Blanche (compte RapidResponse47) vers 20 h 35, heure d’Haïti, Trump déclare : « I did speak to him. He said that he has a big problem with Haiti... They killed some of his people. I said, 'You're running your country. You have to do what you have to do.' » (« Je lui ai parlé. Il m’a dit qu’il avait un gros problème avec Haïti... Ils ont tué certains des siens. Je lui ai dit : “C’est vous qui dirigez votre pays. Vous devez faire ce que vous avez à faire.” »). Drop Site News, qui rapporte aussi la déclaration, précise que Trump s’exprimait devant des journalistes.\n\nJusqu’à présent, seul Axios (30 octobre), sur la foi de sources anonymes, avait fait état de cet appel entre les deux présidents.\n\nCe qui est confirmé, et ce qui ne l’est pas : aucune mort de Salvadorien n’a été rapportée ni confirmée. Quatre techniciens aéronautiques salvadoriens servant au sein de la Force de répression des gangs (FRG/GSF) sont portés disparus depuis l’embuscade du 18 octobre à Croix-des-Bouquets, et Bukele lui-même a affirmé que les corps calcinés retrouvés la semaine dernière n’étaient pas les leurs. Les propos « ils ont tué certains des siens » sont ceux que Trump attribue à Bukele ; aucune source indépendante ne les a confirmés.\n\nQuestions aux lecteurs : • Si aucun Salvadorien n’a été tué, sur quelle base Trump affirme-t-il qu’« ils ont tué certains des siens » ? • Un feu vert de Washington pour une armée étrangère en Haïti : quel responsable haïtien a eu son mot à dire ? • Qui rendra des comptes si l’opération « faites ce que vous avez à faire » coûte des vies civiles haïtiennes ?\n\nAuparavant : Mise à jour du 31 octobre, soir : Selon Infobae, citant le quotidien colombien El Tiempo et des sources militaires, un Hercules C-130H de la Force aérospatiale colombienne (FAC), immatriculé FAC 1005, a assuré le transport de militaires et de matériel salvadoriens entre San Salvador et Port-au-Prince. Des vidéos, des images et des données de suivi de vols ont montré le mouvement de l’appareil. Selon ces sources, la participation colombienne s’inscrit dans les accords de la Coalition des Amériques contre les cartels (A3C), une alliance de 19 pays impulsée par Washington, que la Colombie a rejointe le 12 août 2026. Infobae rapporte que, selon des informations internationales, le Salvador a envoyé environ 2000 militaires et étudie la possibilité de porter ce chiffre à quelque 2500.\n\nLe même jour, selon N Digital, l’ambassade des États-Unis en Haïti a fait état du transport aérien de plus de 600 tonnes d’équipements prioritaires depuis le Bangladesh au profit de la Force de répression des gangs (FRG/GSF). L’annonce a été faite le vendredi 30 octobre par le diplomate américain Juan Pablo Segura, qui a remercié l’Allemagne pour sa contribution à l’opération logistique.\n\nÀ lire aussi sur Opak News : Bukele dément les accusations de bombardements (lien ci-dessous).\n\nQuestions aux lecteurs : • Quels autres pays soutiennent le déploiement salvadorien sans le dire publiquement ? • Si le Salvador monte à 2500 soldats, qui l’a autorisé du côté haïtien ? • 600 tonnes d’équipements pour la FRG : quand la population en verra-t-elle les résultats sur le terrain ?\n\nAuparavant : Mise à jour du 31 octobre, après-midi : Selon Infobae, citant l’agence EFE et des médias locaux haïtiens, les militaires salvadoriens ont installé une base militaire dans la commune de Tabarre, dans un secteur proche de l’ambassade des États-Unis. C’est depuis cette base que le contingent coordonne ses déplacements et ses opérations. Selon Infobae, les patrouilles sont aussi passées par des routes proches de Santo, à Croix-des-Bouquets. Le gouvernement salvadorien affirme agir en coordination avec le Premier ministre Alix Didier Fils-Aimé et assure qu’il ne s’agit pas d’une invasion.\n\nLe même jour, le journaliste Rosemon a publié sur X une photo de Patrice Noel montrant des soldats tchadiens de la Force de répression des gangs (FRG/GSF) patrouillant dans les rues de Port-au-Prince tôt ce samedi 31 octobre, dans le cadre des opérations contre les bandes armées.\n\nQuestions aux lecteurs : • Pourquoi une base étrangère près de l’ambassade américaine ? • Salvadoriens, Tchadiens, Task Force, PNH, FAd’H : qui commande qui dans la rue ? • Qui dira au peuple combien de temps restera la base de Tabarre ?\n\nAuparavant : Mise à jour du 31 octobre : Selon l’agence EFE, reprise par The Rio Times, des dizaines de soldats salvadoriens en tenue de combat et armés de fusils d’assaut ont mené vendredi 30 octobre leurs premières patrouilles dans les rues de Port-au-Prince, à Tabarre et à Clercine, près de l’aéroport international Toussaint-Louverture, à bord de camions et de blindés, sous couverture d’hélicoptère. Des passants ont applaudi. Le gouvernement Bukele dit compter plus de 2000 soldats en Haïti ; l’objectif officiel est de retrouver vivants quatre techniciens salvadoriens disparus depuis le 18 octobre.\n\nSur RFI, les habitants de Port-au-Prince sont partagés. Sephora, étudiante à l’Université d’État, dit que si Bukele peut aider, « nous l’accueillons à cœur joie ». Castène se montre plus prudent : il ne veut pas que cela serve de prétexte pour « envahir le pays » et remettre en question la souveraineté d’Haïti. Quelle est exactement leur mission, qui les commande, combien de temps resteront-ils : ces questions restent sans réponse. Selon Axios, le contingent semble opérer en parallèle de la Force de répression des gangs (FRG/GSF), en vertu d’un accord bilatéral.\n\nQuestions aux lecteurs : • Si un soldat étranger patrouille Tabarre, à qui rend-il des comptes : Port-au-Prince, San Salvador ou Washington ? • On applaudit aujourd’hui, mais que se passera-t-il à la première balle perdue qui tue un civil ? • Pourquoi faut-il toujours un autre pays pour faire le travail de l’État haïtien ?\n\nAuparavant : Mise à jour du 30 octobre : Un accord bilatéral approuvé par Haïti le mercredi 28 octobre autorise la force salvadorienne à opérer dans le pays. Selon Axios, Bukele a appelé Donald Trump mardi pour s’assurer que Washington ne s’y opposait pas, et Trump lui a répondu : « Fais ce que tu as à faire » (\"Do what you have to do\").\n\nSelon l’AFP, au moins 2000 militaires salvadoriens sont arrivés en Haïti en une semaine. L’AFP a recensé une vingtaine de vols charter entre San Salvador et Port-au-Prince du 22 au 29 octobre, et des images satellites montrent dix structures, qui pourraient être des tentes, installées sur la base militaire internationale de l’aéroport Toussaint-Louverture.\n\nDans son message en créole, Bukele affirme que le Salvador paie 90% du coût de l’opération. Diego Da Rin, analyste du Crisis Group, s’inquiète auprès de l’AFP de « cinq forces séparées sans réel commandement unifié ». Depuis le 18 octobre, MSF a soigné 30 personnes blessées par balles ou drones dans ses hôpitaux de Tabarre et Cité Soleil.\n\nMise à jour du 29 octobre, 17 h 14 : Nayib Bukele a publié sur X un message en créole, accompagné d’une vidéo, adressé au peuple haïtien (texte ci-dessus, tel qu’il l’a écrit).\n\nLe président salvadorien Nayib Bukele annonce l'envoi de plus de 2000 soldats en Haïti. Leur mission: retrouver quatre techniciens salvadoriens de la Gang Suppression Force disparus depuis l'embuscade du 18 octobre à Croix-des-Bouquets, et combattre les gangs.\n\nBukele affirme que les corps remis par les autorités haïtiennes ne correspondent pas aux disparus.\n\nIl n'est pas encore clair si ces troupes serviront sous la Gang Suppression Force ou de manière indépendante. Cette annonce remplace le chiffre d'environ 1000 soldats évoqué jusqu'ici.",
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
    sources: ["Associated Press (via Washington Post)", "Rezo Nòdwès", "Semafor (Axios, Reuters)", "AyiboPost", "HaitiLibre", "MIREX", "Diario Libre", 
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
    tier: "quick-hit",
    topic: "society",
    publishedAt: "2026-10-28",
    publishedTime: "2026-10-28T19:16:06-04:00",
    headline: {
      ht: "Grangou ann Ayiti : 6,35 milyon moun an danje anvan mitan 2027, dapre IPC",
      fr: "Faim en Haïti : 6,35 millions de personnes menacées d'ici mi-2027, selon l'IPC",
    },
    brief: {
      ht: "Dapre FAO ak IPC, 5,94 milyon Ayisyen ap fè fas ak ensekirite alimantè egi. Chif la ta ka rive 6,35 milyon ant mas ak jen 2027, ki plis pase mwatye popilasyon an.",
      fr: "Selon la FAO et l'IPC, 5,94 millions d'Haïtiens font face à une insécurité alimentaire aiguë. Le chiffre pourrait atteindre 6,35 millions de mars à juin 2027, soit plus de la moitié de la population.",
    },
    body: {
      ht: "Dapre yon nouvo rapò IPC, pibliye ak FAO, 5,94 milyon Ayisyen ap fè fas kounye a ak ensekirite alimantè egi, youn nan nivo ki pi wo nan mond lan. Ant mas ak jen 2027, chif la prevwa rive 6,35 milyon, ki plis pase mwatye popilasyon an epi plis pase 500000 moun anplis pase menm peryòd 2026 la.\n\nPrèske 2 milyon moun ta nan faz Ijans (IPC Phase 4). Kòz yo site se vyolans gang yo, plis pase 1,5 milyon moun deplase, ogmantasyon pri manje ak gazolin, ansanm ak sechrès ak inondasyon ki gen rapò ak El Niño, ki ajoute sou lapli Grand Sid yo.\n\nWFP di li bezwen 78 milyon dola ameriken pou kontinye opere jouk mas.",
      fr: "Selon un nouveau rapport de l'IPC, publié avec la FAO, 5,94 millions d'Haïtiens font actuellement face à une insécurité alimentaire aiguë, l'un des niveaux les plus élevés au monde. De mars à juin 2027, ce chiffre est projeté à 6,35 millions, soit plus de la moitié de la population et plus de 500000 personnes de plus que sur la même période en 2026.\n\nPrès de 2 millions de personnes seraient alors en phase d'Urgence (IPC Phase 4). Les causes citées sont la violence des gangs, plus de 1,5 million de déplacés, la hausse des prix des denrées et du carburant, ainsi que les sécheresses et inondations liées à El Niño, qui s'ajoutent aux pluies du Grand Sud.\n\nLe PAM indique qu'il a besoin de 78 millions de dollars américains pour poursuivre ses opérations jusqu'en mars.",
    },
    sources: [
      "AP News",
      "WFP",
    ],
  },

  {
    id: "qh-idp-protest-pap-2026-10",
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
  return sortNewestFirst(STORIES.filter((s) => !s.archived && s.tier === "need-to-know" && s.topic !== "sports"));
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
