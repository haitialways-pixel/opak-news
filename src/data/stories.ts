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
    publishedTime: "2026-10-31T07:10:00-04:00",
    isBreaking: true,
    breakingHours: 12,
    headline: {
      ht: "Bèsi : polis di li touye chèf gang « Galaxie » nan yon operasyon ant Akayè ak Kabarè",
      fr: "Bercy : la police dit avoir abattu le chef de gang « Galaxie » lors d’une opération entre Arcahaie et Cabaret",
    },
    brief: {
      ht: "Jedi 29 oktòb, PNH ak Task Force la fè yon operasyon nan Bèsi. Plizyè moun yo prezante kòm bandi mouri, pami yo chèf gang Kabarè yo rele « Galaxie ». Pa gen bilan ofisyèl. Èske Akayè ap kenbe ?",
      fr: "Jeudi 29 octobre, la PNH et la Task Force ont mené une opération à Bercy. Plusieurs personnes présentées comme des bandits ont été tuées, dont le chef de gang de Cabaret connu sous le nom de « Galaxie ». Aucun bilan officiel. L’Arcahaie tiendra-t-elle ?",
    },
    body: {
      ht: "Dapre Le Nouvelliste, Polis Nasyonal d Ayiti (PNH), avèk sipò Task Force la, touye plizyè bandi jedi 29 oktòb 2026 pandan yon operasyon nan Bèsi, ant Akayè ak Kabarè. Pami yo ta gen chèf gang Kabarè yo rele « Galaxie ». Lòt manm gang nan kouri, sa ki lakòz tansyon nan plizyè zòn toupre, dapre yon sous lokal.\n\nPa gen bilan ofisyèl. Le Quotidien 509 site Pierre Sauvenel Sylvain, yon notab nan Akayè, ki pale sou Radio Kiskeya de « plis pase yon ventèn » moun yo prezante kòm bandi ki mouri, men li presize li pa gen chif egzak. Dapre li, brigadye ki te akonpaye fòs lòd yo detwi plizyè abri gang yo te bati bò wout la. Li mande gwo kòmandman PNH a bay polis sou teren an plis mwayen, tankou gwo machin pou demoli lòt abri ki rete yo.\n\nDapre Le Filet Info, ajan egzekitif pwovizwa Akayè a, Wilner René, pale de yon ventèn moun mouri e li di « Galaxy » ta youn nan moun yo sispèk ki responsab masak Labodri a ; gwoup li a te okipe Bèsi depi apeprè dezan. Li anonse operasyon yo ap kontinye nan zòn nan. Radio Graphie, ki site sous lokal, pale de omwen yon dizèn manm gang ki mouri, e li di antre machin blende PNH yo jis Levèk simen panik Kabarè, kote moun kite espas piblik tankou mache vil la. PNH poko konfime okenn nan deklarasyon sa yo.\n\nSa gen plis pase yon ane gwoup ame ap eseye avanse sou Akayè, Vil Drapo a. Bèsi se zòn ki ant Kabarè, kote gang yo gen enfliyans, ak Akayè, ki reziste ak polis la ak gwoup otodefans.\n\nKesyon pou lektè yo : • Si gang lan pèdi chèf li, ki moun ki pran plas li demen maten ? • Konbyen moun ki mouri, e ki moun ki pral konte yo ofisyèlman ? • Poukisa se yon notab, pa Leta, k ap mande bulldozer pou Akayè ?",
      fr: "Selon Le Nouvelliste, la Police nationale d’Haïti (PNH), appuyée par la Task Force, a éliminé plusieurs bandits le jeudi 29 octobre 2026 lors d’une opération à Bercy, entre Arcahaie et Cabaret, dont le chef de gang de Cabaret connu sous le nom de « Galaxie ». D’autres membres du gang ont pris la fuite, provoquant des tensions dans plusieurs localités avoisinantes, selon une source locale.\n\nAucun bilan officiel n’a été publié. Le Quotidien 509 cite Pierre Sauvenel Sylvain, notable de l’Arcahaie, qui a évoqué sur Radio Kiskeya « plus d’une vingtaine » de morts parmi les individus présentés comme des bandits, tout en précisant ne pas disposer d’un bilan exact. Selon lui, des brigadiers accompagnant les forces de l’ordre ont détruit plusieurs abris construits par les groupes armés le long de la route. Il demande au haut commandement de la PNH davantage de moyens pour les policiers sur le terrain, dont des équipements lourds pour démolir les abris restants.\n\nSelon Le Filet Info, l’agent exécutif intérimaire de l’Arcahaie, Wilner René, évoque une vingtaine de morts et affirme que « Galaxy » serait l’un des responsables présumés du massacre de Labodrie ; son groupe occupait Bercy depuis environ deux ans. Il annonce que les opérations se poursuivent dans la zone. Radio Graphie, citant des sources locales, fait état d’au moins une dizaine de membres du gang tués, et rapporte que l’incursion de blindés de la PNH jusqu’à Lévêque a semé la panique à Cabaret, où la population a évacué des espaces publics comme le marché de la ville. Aucune de ces affirmations n’a été confirmée par la PNH.\n\nDepuis plus d’un an, des groupes armés tentent de progresser vers l’Arcahaie, la Cité du Drapeau. Bercy se situe entre Cabaret, où les gangs exercent leur influence, et l’Arcahaie, qui résiste grâce à la police et aux groupes d’autodéfense.\n\nQuestions aux lecteurs : • Si le gang perd son chef, qui prend sa place demain matin ? • Combien de morts, et qui les comptera officiellement ? • Pourquoi est-ce un notable, et non l’État, qui réclame des bulldozers pour l’Arcahaie ?",
    },
    sources: ["Le Nouvelliste", "Le Quotidien 509", "Radio Kiskeya", "Le Filet Info", "Radio Graphie"],
    sourceLinks: [
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
    pinned: true,
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
    publishedTime: "2026-10-31T07:10:00-04:00",
    isBreaking: true,
    breakingHours: 12,
    headline: {
      ht: "Sòlda salvadoryen yo kòmanse patwouy Pòtoprens : soulajman oswa souverènte ?",
      fr: "Les soldats salvadoriens patrouillent Port-au-Prince : soulagement ou souveraineté ?",
    },
    brief: {
      ht: "Mizajou 31 oktòb : Premye patwouy sòlda salvadoryen yo vandredi 30 oktòb nan Tabar ak Klèsin, toupre ayewopò a, ak machin blende ak elikoptè. Kèk moun bat bravo. Men misyon, kòmandman ak dire yo toujou pa klè. Mizajou 30 oktòb : Yon akò bilateral Ayiti apwouve mèkredi 28 oktòb otorize fòs salvadoryen an opere nan peyi a. Dapre Axios, Donald Trump di Bukele « Fè sa ou gen pou fè » pandan yon apèl madi. Dapre AFP, omwen 2000 sòlda salvadoryen deja rive an Ayiti. Nan yon mesaj an kreyòl ak yon videyo sou X, 29 oktòb, Bukele pale dirèkteman ak pèp ayisyen an. Bukele voye yo chèche kat teknisyen salvadoryen ki disparèt depi anbiskad 18 oktòb la epi goumen ak gang yo. Li di kò Ayiti remèt yo pa koresponn ak moun ki disparèt yo.",
      fr: "Mise à jour du 31 octobre : Premières patrouilles salvadoriennes vendredi 30 octobre à Tabarre et Clercine, près de l’aéroport, avec blindés et hélicoptère. Des passants ont applaudi. Mais mission, commandement et durée restent flous. Mise à jour du 30 octobre : Un accord bilatéral approuvé par Haïti le mercredi 28 octobre autorise la force salvadorienne à opérer dans le pays. Selon Axios, Donald Trump a dit à Bukele « Fais ce que tu as à faire » lors d’un appel mardi. Selon l’AFP, au moins 2000 militaires salvadoriens sont déjà arrivés en Haïti. Dans un message en créole accompagné d’une vidéo publié sur X le 29 octobre, Bukele s’adresse directement au peuple haïtien. Bukele envoie ses soldats retrouver quatre techniciens salvadoriens disparus depuis l'embuscade du 18 octobre et combattre les gangs. Il affirme que les corps remis par Haïti ne correspondent pas aux disparus.",
    },
    body: {
      ht: "Mizajou 31 oktòb : Dapre ajans EFE, rapòte pa The Rio Times, plizyè dizèn sòlda salvadoryen an inifòm konba ak fizi atak fè premye patwouy yo nan lari Pòtoprens vandredi 30 oktòb, nan Tabar ak Klèsin, toupre ayewopò entènasyonal Toussaint Louverture, nan kamyon ak machin blende, ak elikoptè ki t ap kouvri yo. Kèk moun sou wout la bat bravo. Gouvènman Bukele a di li gen plis pase 2000 sòlda an Ayiti; objektif ofisyèl la se jwenn kat teknisyen salvadoryen ki disparèt depi 18 oktòb vivan.\n\nSou RFI, moun Pòtoprens divize. Sephora, etidyan nan Inivèsite Leta, di si Bukele ka ede, « nou akeyi l ak kè kontan ». Castène pi pridan : li pa vle sa sèvi pretèks pou « anvayi peyi a » e mete souverènte Ayiti an kesyon. Ki misyon egzak yo, ki moun ki kòmande yo, e konbyen tan y ap rete : kesyon sa yo poko gen repons. Dapre Axios, kontenjan an sanble ap opere paralèl ak Fòs Siprèsyon Gang (GSF) la, anba yon akò bilateral.\n\nKesyon pou lektè yo : • Si yon sòlda etranje patwouye Tabar, ki moun li reponn : Pòtoprens, San Salvadò oswa Washington ? • Bravo jodi a, men kisa k ap rive si yon bal pèdi touye yon sivil ? • Poukisa se toujou lòt peyi ki vin fè travay Leta ayisyen an ?\n\nAnvan : Mizajou 30 oktòb : Yon akò bilateral Ayiti apwouve mèkredi 28 oktòb otorize fòs salvadoryen an opere nan peyi a. Dapre Axios, Bukele rele Donald Trump madi pou asire l Washington pa gen pwoblèm ak operasyon an, e Trump reponn li : « Fè sa ou gen pou fè » (\"Do what you have to do\").\n\nDapre AFP, omwen 2000 sòlda salvadoryen rive an Ayiti nan yon semèn. AFP konte anviwon 20 vòl charter ant San Salvador ak Pòtoprens ant 22 ak 29 oktòb, e imaj satelit montre dis estrikti (petèt tant) yo enstale sou baz militè entènasyonal ayewopò Toussaint-Louverture a.\n\nNan mesaj kreyòl li a, Bukele di se Salvadò k ap peye 90% depans operasyon an. Diego Da Rin, analis Crisis Group, di AFP kounye a gen « senk fòs separe san yon vrè kòmandman inifye ». Depi 18 oktòb, MSF trete 30 moun blese nan tire oswa dron nan lopital li yo nan Tabarre ak Site Solèy.\n\nMizajou 29 oktòb, 5:14 PM : Nayib Bukele pibliye sou X yon mesaj an kreyòl ak yon videyo pou pèp ayisyen an (tèks la anwo a, jan li ekri l).\n\nPrezidan salvadoryen an, Nayib Bukele, anonse li voye plis pase 2000 sòlda an Ayiti. Misyon yo: jwenn kat teknisyen salvadoryen nan Gang Suppression Force la ki disparèt depi anbiskad 18 oktòb la nan Kwadebouke, epi goumen ak gang yo.\n\nBukele di kò otorite ayisyen yo te remèt yo pa koresponn ak moun ki disparèt yo.\n\nLi poko klè si sòlda sa yo ap travay anba Gang Suppression Force la oswa poukont yo. Anons sa a ranplase chif anviwon 1000 sòlda ki te pale anvan an.",
      fr: "Mise à jour du 31 octobre : Selon l’agence EFE, reprise par The Rio Times, des dizaines de soldats salvadoriens en tenue de combat et armés de fusils d’assaut ont mené vendredi 30 octobre leurs premières patrouilles dans les rues de Port-au-Prince, à Tabarre et à Clercine, près de l’aéroport international Toussaint-Louverture, à bord de camions et de blindés, sous couverture d’hélicoptère. Des passants ont applaudi. Le gouvernement Bukele dit compter plus de 2000 soldats en Haïti ; l’objectif officiel est de retrouver vivants quatre techniciens salvadoriens disparus depuis le 18 octobre.\n\nSur RFI, les habitants de Port-au-Prince sont partagés. Sephora, étudiante à l’Université d’État, dit que si Bukele peut aider, « nous l’accueillons à cœur joie ». Castène se montre plus prudent : il ne veut pas que cela serve de prétexte pour « envahir le pays » et remettre en question la souveraineté d’Haïti. Quelle est exactement leur mission, qui les commande, combien de temps resteront-ils : ces questions restent sans réponse. Selon Axios, le contingent semble opérer en parallèle de la Force de répression des gangs (FRG/GSF), en vertu d’un accord bilatéral.\n\nQuestions aux lecteurs : • Si un soldat étranger patrouille Tabarre, à qui rend-il des comptes : Port-au-Prince, San Salvador ou Washington ? • On applaudit aujourd’hui, mais que se passera-t-il à la première balle perdue qui tue un civil ? • Pourquoi faut-il toujours un autre pays pour faire le travail de l’État haïtien ?\n\nAuparavant : Mise à jour du 30 octobre : Un accord bilatéral approuvé par Haïti le mercredi 28 octobre autorise la force salvadorienne à opérer dans le pays. Selon Axios, Bukele a appelé Donald Trump mardi pour s’assurer que Washington ne s’y opposait pas, et Trump lui a répondu : « Fais ce que tu as à faire » (\"Do what you have to do\").\n\nSelon l’AFP, au moins 2000 militaires salvadoriens sont arrivés en Haïti en une semaine. L’AFP a recensé une vingtaine de vols charter entre San Salvador et Port-au-Prince du 22 au 29 octobre, et des images satellites montrent dix structures, qui pourraient être des tentes, installées sur la base militaire internationale de l’aéroport Toussaint-Louverture.\n\nDans son message en créole, Bukele affirme que le Salvador paie 90% du coût de l’opération. Diego Da Rin, analyste du Crisis Group, s’inquiète auprès de l’AFP de « cinq forces séparées sans réel commandement unifié ». Depuis le 18 octobre, MSF a soigné 30 personnes blessées par balles ou drones dans ses hôpitaux de Tabarre et Cité Soleil.\n\nMise à jour du 29 octobre, 17 h 14 : Nayib Bukele a publié sur X un message en créole, accompagné d’une vidéo, adressé au peuple haïtien (texte ci-dessus, tel qu’il l’a écrit).\n\nLe président salvadorien Nayib Bukele annonce l'envoi de plus de 2000 soldats en Haïti. Leur mission: retrouver quatre techniciens salvadoriens de la Gang Suppression Force disparus depuis l'embuscade du 18 octobre à Croix-des-Bouquets, et combattre les gangs.\n\nBukele affirme que les corps remis par les autorités haïtiennes ne correspondent pas aux disparus.\n\nIl n'est pas encore clair si ces troupes serviront sous la Gang Suppression Force ou de manière indépendante. Cette annonce remplace le chiffre d'environ 1000 soldats évoqué jusqu'ici.",
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
      "Axios",
      "AFP",
      "RFI",
      "EFE / The Rio Times",
    ],
    sourceLinks: [
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
    publishedTime: "2026-10-28T18:10:13-04:00",
    isBreaking: true,
    breakingHours: 6,
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
  return sortNewestFirst(STORIES.filter((s) => s.tier === "need-to-know"));
}

export function quickHitStories(): Story[] {
  return sortNewestFirst(STORIES.filter((s) => s.tier === "quick-hit"));
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
