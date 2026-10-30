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
    id: "qh-desir-arrestation-2026-10-28",
    tier: "quick-hit",
    topic: "moise-trials",
    publishedAt: "2026-10-29",
    publishedTime: "2026-10-29T21:05:00-04:00",
    headline: {
      ht: "Asasina Jovenel Moïse : avoka Phénil Gordon Désir arete Petyonvil",
      fr: "Assassinat de Jovenel Moïse : l'avocat Phénil Gordon Désir arrêté à Pétion-Ville",
    },
    brief: {
      ht: "Avoka a, lidè pati Ayiti 2054 ki gen lyen ak Christian Sanon, te arete mèkredi 28 oktòb nan yon makèt Petyonvil. Yo t ap chèche l depi jiyè 2021.",
      fr: "L'avocat, dirigeant du parti Ayiti 2054 lié à Christian Sanon, a été arrêté le mercredi 28 octobre dans un supermarché de Pétion-Ville. Il était recherché depuis juillet 2021.",
    },
    body: {
      ht: "Avoka Phénil Gordon Désir, lidè pati Ayiti 2054, pati ki gen lyen ak Christian Sanon, te arete mèkredi 28 oktòb nan yon makèt Petyonvil.\n\nYo t ap chèche l depi jiyè 2021: yo sispèk li te ede prepare asasina prezidan Jovenel Moïse e li te bay sipò lojistik. Li nan gadavi lapolis.\n\nKèk medya pale de yon posib transfè l Ozetazini, men enfòmasyon sa a poko konfime.\n\nPhénil Gordon Désir prezime inosan toutotan yon tribinal pa deklare l koupab.",
      fr: "L'avocat Phénil Gordon Désir, dirigeant du parti Ayiti 2054, la formation liée à Christian Sanon, a été arrêté le mercredi 28 octobre dans un supermarché de Pétion-Ville.\n\nIl était recherché depuis juillet 2021, soupçonné d'avoir participé à la préparation de l'assassinat du président Jovenel Moïse et d'y avoir apporté un soutien logistique. Il est en garde à vue.\n\nCertains médias évoquent un possible transfert vers les États-Unis, mais cette information n'est pas confirmée.\n\nPhénil Gordon Désir est présumé innocent tant qu'un tribunal ne l'a pas reconnu coupable.",
    },
    sources: ["Le Nouvelliste", "Nago TV"],
    sourceLinks: [
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
      ht: "Mizajou 29 oktòb, 9:05 PM : Nan pwosè Christian Sanon nan Miami, analis FBI Kaitlin Dayton montre jiri a mesaj Sanon te voye ak kat ko-konspiratè ki deja kondane. Dapre akizasyon an, yon videyo yo te voye bay Sanon 3 me 2021 te sèvi gid pou atak la. Defans lan di lòt yo te mete Sanon sou kote anvan 7 jiyè; kontr-entèwogatwa Dayton te prevwa pou jedi. \n\nMizajou 29 oktòb, 3:25 PM : 27 ak 28 oktòb, nan tribinal federal Miami, ansyen senatè John Joël Joseph, ki deja kondane a lavi e ki espere yon rediksyon pèn kòm temwen k ap kolabore, temwaye se Joseph Félix Badio ki t ap dirije konvwa mèsenè kolonbyen yo pou Pèlerin 5. Li di tou Badio te rele yon jounalis ak yon responsab dwa moun maten 7 jiyè 2021 pou anonse asasina a. Atansyon: se deklarasyon yon temwen, pa desizyon tribinal. Badio prezime inosan e li poko gen dat pwosè.\n\nMIAMI. Pwosè federal Christian Emmanuel Sanon, pastè ayisyano-ameriken yo akize li te konplote pou kidnape oswa touye prezidan Jovenel Moïse, louvri 28 septanm 2026. Martine Moïse se te premye temwen an, 29 septanm.\n\n13 ak 14 oktòb, ajan FBI Elizabeth Wieder prezante mesaj ki soti nan telefòn akize yo: pwoblèm lajan pou peye mèsenè kolonbyen yo jiska 6 jiyè 2021, ak senaryo pou kiyès ki t ap ranplase Moïse. Okòmansman se Sanon yo te konsidere, apre sa yo mete l sou kote akoz sitwayènte ameriken li. Yon lòt senaryo te mete jij Wendelle Coq Thélot kòm prezidan ak Joseph Lambert kòm Premye minis. Atansyon: non ki parèt nan mesaj sa yo se pa desizyon tribinal; okenn nan moun sa yo pa kondane nan dosye a sou baz mesaj sa yo. Defans Sanon ap eseye montre li pa t nan pati vyolan yo e yo te mete l sou kote.\n\nPwosè a te nan 14yèm oswa 15yèm temwen sou 57. Li antre nan 4yèm semèn li 19 oktòb, ak ajan FBI Bryan Jordan sou done telefòn yo. 21 oktòb, analis FBI Kaitlin Dayton montre jiri a yon videyo 7 minit Sanon te resevwa 3 me 2021, yon kalite gid pou ranvèse yon gouvènman (Miami Herald). Vandredi 23 oktòb, ansyen senatè John Joël Joseph, ki deja kondane a lavi, temwaye li te òganize yon reyinyon ant Sanon ak Pierre Espérance (RNDDH), selon Juno7. Temwayaj sa a pou kont li pa montre Espérance te jwe okenn wòl nan asasina a.\n\nFen septanm, 18 akize te transfere soti Ayiti pou Miami, tankou Joseph Félix Badio ak 17 ansyen sòlda kolonbyen.\n\nAYITI. Nan yon lèt 22 oktòb 2026, Komisè gouvènman an bò Kou Apèl Pòtoprens lan, Claude Jean, di minis Jistis Patrick Pélissier jij Cyprien Jn F. Denis Pierre, ki responsab konpleman ankèt Kou a te bay lòd fè 13 oktòb 2025 (kòmanse an janvye 2026), poko remèt rapò li. Pa gen okenn dat ki fikse.",
      fr: "Mise à jour du 29 octobre, 21 h 05 : Au procès de Christian Sanon à Miami, l’analyste du FBI Kaitlin Dayton a présenté aux jurés les échanges de Sanon avec quatre co-conspirateurs déjà condamnés. Selon l’accusation, une vidéo envoyée à Sanon le 3 mai 2021 a servi de guide pour l’attaque. La défense soutient que Sanon avait été écarté par les autres avant le 7 juillet ; le contre-interrogatoire de Dayton était prévu jeudi. \n\nMise à jour du 29 octobre, 15 h 25 : Les 27 et 28 octobre, devant le tribunal fédéral de Miami, l’ex-sénateur John Joël Joseph, déjà condamné à la prison à vie et témoin coopérant espérant une réduction de peine, a affirmé que Joseph Félix Badio était à la tête du convoi des mercenaires colombiens vers Pèlerin 5. Il a aussi déclaré que Badio a appelé un journaliste et un responsable des droits humains le matin du 7 juillet 2021 pour annoncer l’assassinat. Il s’agit de déclarations d’un témoin, pas de constats judiciaires ; Badio est présumé innocent et aucune date de procès n’a été fixée pour lui.\n\nMIAMI. Le procès fédéral de Christian Emmanuel Sanon, pasteur haïtiano-américain accusé d’avoir conspiré pour enlever ou tuer le président Jovenel Moïse, s’est ouvert le 28 septembre 2026. Martine Moïse a été le premier témoin, le 29 septembre.\n\nLes 13 et 14 octobre, l’agente du FBI Elizabeth Wieder a présenté des messages extraits des téléphones des accusés : difficultés à payer les mercenaires colombiens jusqu’au 6 juillet 2021, et scénarios de succession. Sanon a d’abord été envisagé, puis écarté en raison de sa citoyenneté américaine. Un autre scénario plaçait la juge Wendelle Coq Thélot à la présidence et Joseph Lambert à la primature. Précision importante : les noms cités dans ces messages ne constituent pas des constats judiciaires ; aucune de ces personnes n’a été reconnue coupable sur la base de ces échanges. La défense cherche à dissocier Sanon des volets violents du complot.\n\nLe procès en était au 14e ou 15e témoin sur 57. Il est entré dans sa 4e semaine le 19 octobre, avec l’agent du FBI Bryan Jordan sur les données téléphoniques. Le 21 octobre, l’analyste du FBI Kaitlin Dayton a montré aux jurés une vidéo de 7 minutes reçue par Sanon le 3 mai 2021, présentée par l’accusation comme un guide pour renverser un gouvernement (Miami Herald). Le vendredi 23 octobre, l’ex-sénateur John Joël Joseph, déjà condamné à la prison à vie, a déclaré avoir organisé une rencontre entre Sanon et Pierre Espérance (RNDDH), selon Juno7. Ce témoignage n’établit pas à lui seul un rôle d’Espérance dans l’assassinat.\n\nFin septembre, 18 accusés ont été transférés d’Haïti vers Miami, dont Joseph Félix Badio et 17 anciens soldats colombiens.\n\nHAÏTI. Dans une lettre du 22 octobre 2026, le commissaire du gouvernement près la Cour d’appel de Port-au-Prince, Claude Jean, a signalé au ministre de la Justice Patrick Pélissier que le juge Cyprien Jn F. Denis Pierre, chargé du complément d’enquête ordonné le 13 octobre 2025 (entamé en janvier 2026), n’a toujours pas remis son rapport. Aucune date n’a été annoncée.",
    },
    sources: ["Le National", "InfoNation", "Miami Herald", "Juno7 / Le Soulouquois", "RHINEWS", "Nago TV"],
    sourceLinks: [{ name: "Miami Herald", url: "https://www.miamiherald.com/news/local/community/miami-dade/article317722865.html" }],
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
    id: "ntk-cep-elections-juillet-2027-2026-10-29",
    tier: "need-to-know",
    topic: "governance",
    publishedAt: "2026-10-29",
    publishedTime: "2026-10-30T04:45:00-04:00",
    isBreaking: true,
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
    publishedTime: "2026-10-29T17:14:00-04:00",
    isBreaking: true,
    headline: {
      ht: "Bukele bay pèp ayisyen an yon mesaj: « Sa a se pa yon envazyon »",
      fr: "Bukele s’adresse au peuple haïtien en créole",
    },
    brief: {
      ht: "Mizajou : Nan yon mesaj an kreyòl ak yon videyo sou X, 29 oktòb, Bukele pale dirèkteman ak pèp ayisyen an. Bukele voye yo chèche kat teknisyen salvadoryen ki disparèt depi anbiskad 18 oktòb la epi goumen ak gang yo. Li di kò Ayiti remèt yo pa koresponn ak moun ki disparèt yo.",
      fr: "Mise à jour : Dans un message en créole accompagné d’une vidéo publié sur X le 29 octobre, Bukele s’adresse directement au peuple haïtien. Bukele envoie ses soldats retrouver quatre techniciens salvadoriens disparus depuis l'embuscade du 18 octobre et combattre les gangs. Il affirme que les corps remis par Haïti ne correspondent pas aux disparus.",
    },
    body: {
      ht: "Mizajou 29 oktòb, 5:14 PM : Nayib Bukele pibliye sou X yon mesaj an kreyòl ak yon videyo pou pèp ayisyen an (tèks la anwo a, jan li ekri l).\n\nPrezidan salvadoryen an, Nayib Bukele, anonse li voye plis pase 2000 sòlda an Ayiti. Misyon yo: jwenn kat teknisyen salvadoryen nan Gang Suppression Force la ki disparèt depi anbiskad 18 oktòb la nan Kwadebouke, epi goumen ak gang yo.\n\nBukele di kò otorite ayisyen yo te remèt yo pa koresponn ak moun ki disparèt yo.\n\nLi poko klè si sòlda sa yo ap travay anba Gang Suppression Force la oswa poukont yo. Anons sa a ranplase chif anviwon 1000 sòlda ki te pale anvan an.",
      fr: "Mise à jour du 29 octobre, 17 h 14 : Nayib Bukele a publié sur X un message en créole, accompagné d’une vidéo, adressé au peuple haïtien (texte ci-dessus, tel qu’il l’a écrit).\n\nLe président salvadorien Nayib Bukele annonce l'envoi de plus de 2000 soldats en Haïti. Leur mission: retrouver quatre techniciens salvadoriens de la Gang Suppression Force disparus depuis l'embuscade du 18 octobre à Croix-des-Bouquets, et combattre les gangs.\n\nBukele affirme que les corps remis par les autorités haïtiennes ne correspondent pas aux disparus.\n\nIl n'est pas encore clair si ces troupes serviront sous la Gang Suppression Force ou de manière indépendante. Cette annonce remplace le chiffre d'environ 1000 soldats évoqué jusqu'ici.",
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
    sources: [
      "BBC",
      "Al Jazeera",
      "Nayib Bukele / X",
    ],
  },
  {
    id: "ntk-msf-plaine-cul-de-sac-2026-10",
    tier: "need-to-know",
    topic: "security",
    publishedAt: "2026-10-28",
    publishedTime: "2026-10-28T18:10:13-04:00",
    isBreaking: true,
    headline: {
      ht: "Plèn Kildesak : MSF tire alam sou vyolans k ap monte, plis blese rive lopital",
      fr: "Plaine du Cul-de-Sac : MSF alerte sur une flambée de violence et des blessés en hausse",
    },
    brief: {
      ht: "Depi 18 oktòb, MSF trete 30 moun blese nan zam oswa dron nan lopital Tabarre ak Site Solèy. Klinik mobil ak dlo trete sispann nan katye yo.",
      fr: "Depuis le 18 octobre, MSF a traité 30 blessés par balles ou drones dans ses hôpitaux de Tabarre et Cité Soleil. Cliniques mobiles et distribution d'eau suspendues dans les quartiers touchés.",
    },
    body: {
      ht: "MSF tire alam sou yon flanbe vyolans nan Plèn Kildesak, nan nòdès Pòtoprens. Depi plizyè manm Gang Suppression Force disparèt apre yon atak sou machin yo 18 oktòb, tire ak eksplozyon dron ogmante nan zòn nan.\n\nAnt 18 ak 26 oktòb, lopital MSF nan Tabarre ak Site Solèy trete 30 moun ki blese nan tire oswa eksplozyon dron, ki gen fanm ak timoun. MSF sispann klinik mobil yo ak distribisyon dlo trete nan katye ki afekte yo.\n\nÒganizasyon an mande otorite yo ak tout pati yo pou yo epanye sivil yo ak enstalasyon medikal yo, epi pèmèt aksè nan swen pou blese yo.",
      fr: "MSF alerte sur une flambée de violence dans la Plaine du Cul-de-Sac, dans le nord-est de Port-au-Prince. Depuis la disparition de plusieurs membres de la Gang Suppression Force après une attaque contre leur véhicule le 18 octobre, les tirs et les explosions de drones ont augmenté dans la zone.\n\nEntre le 18 et le 26 octobre, les hôpitaux MSF de Tabarre et de Cité Soleil ont traité 30 personnes blessées par balles ou explosions de drones, dont des femmes et des enfants. MSF a suspendu ses cliniques mobiles et la distribution d'eau traitée dans les quartiers touchés.\n\nL'organisation demande aux autorités et à toutes les parties d'épargner les civils et les installations médicales, et de garantir l'accès aux soins pour les blessés.",
    },
    sources: [
      "MSF",
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
    .sort((a, b) => (a.t === b.t ? a.i - b.i : b.t - a.t))
    .map((x) => x.s);
}

/** "New" = less than 24h since publishedTime (date-only: until end of that day). */
export function isNewStory(story: Story, now = Date.now()): boolean {
  const t = publishMs(story);
  const age = now - t;
  return age >= 0 && age < DAY_MS;
}

export function needToKnowStories(): Story[] {
  return sortNewestFirst(STORIES.filter((s) => s.tier === "need-to-know"));
}

export function quickHitStories(): Story[] {
  return sortNewestFirst(STORIES.filter((s) => s.tier === "quick-hit"));
}
