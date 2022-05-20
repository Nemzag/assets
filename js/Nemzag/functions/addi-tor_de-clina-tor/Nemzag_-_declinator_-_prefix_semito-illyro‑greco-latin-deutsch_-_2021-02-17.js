/*
 * Created with PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 17/02/2021
 * Time: 15:15
 * Updated:
*/

"use strict";

//========================================================================================
// init constantes…
//========================================================================================

// const ? = document.getElementById("?");

//========================================================================================
// init évènements…
//========================================================================================

// document.getElementById("").addEventListener("", function());

//========================================================================================
// init variables…
//========================================================================================

/*
Es‑tern‑al fichier / file qui / uho use :
- ϰinput
- ϰdivResult
*/

ϰinputAdditor = document.getElementById("inputAdditor");

ϰinputAdditor = {

    neutral: [],    /* Neutral, Neutrif, Neutrive. */
    positif: [],    /* Posital, Positif, Positive. */
    negatif: [],    /* Negatal, Negatif, Negative. */
}


$dsqdqs = {
    Ə : {
        ipa : "Ə",

        english : "neutralisator",
    } ,
    A : {
        ipa : "A",

        english : {},

        français : {

            definition : "privé de",

            exemple : "acéphale; athée",
        },
        Ɑ̃⁠ : {
            ipa: "Ɑ̃",
            origin: "Arb",
            english: {
                definition: "",
                exemple: [""],
            },
            français: {
                definition: "",
                exemple: [""],
            },
        },
        AD : {
            ipa: "AD",
            date: "",
            origin: "Latin", /* display adapted after to minimise file size. If I had them in each languages origin. */
            english: {
                definition: "",
                exemple: [""],
            },
            français: {
                definition: "",
                exemple: [""],
            },
        },

            "AL",
            "AM",
            "AN",
            "ANTE",
            "ANTI",
            "Ɑ̃ST",
            "Ɑ̃ƩΘ",
            "BƏ",
            "BJƏ",
            "DƏ",            /* Laţë‑jnë */
            "DE",            /* Laţë‑jnë */
            "DƐ",            /* Şkupë‑tärë { ΔΗ : êşakţë êkţë} */
            "DJ",
            "DI",            /* Qrêgwë */
            "DIA",           /* Qrêgwë */
            "DIS",
            "DYS",           /* Qrêgwë */
            "E",
            "EM",
            "EN",            /* Qrêgwë */
            "EPI",           /* Qrêgwë */
            "EQSO",          /* Qrêgwë */
            "EQΘO",          /* Qrêgwë */
            "EU",            /* Qrêgwë */
            "HƏ",            /* Hébreux */
            "HYPO",          /* Qrêgwë */
            "Ɛ",             /* Şkupë‑tärë */
            "ƐL",            /* Şemë‑jţë */
            "ĦUPER",         /* Şemë‑jţë */
            "ĦUPRA",         /* Şemë‑jţë */
            "ƷƏ",            /* Şkupë‑tärë */
            "KOM",           /* Laţë‑jnë */
            "KÔL",           /* Laţë‑jnë */
            "MƏ",            /* Şemë‑jţë Ôrbë Aramë */
            "PARA",          /* Qrêgwë */
            "PRE",           /* Français */
            "PRAJ",          /* Qrêgwë */
            "PROS",          /* Qrêgwë */
            "PRO",           /* Qrêgwë */
            "POR",           /* Êşpanë‑jỗlë */
            "PẼRI",          /* Qrêgwë */
            "FOR",           /* Kễlţë */
            "VOR",           /* Dêutşë */
            "QATA",          /* Qrêgwë */
            "QÔN",           /* Laţë‑jnë */
            "QUM",           /* Laţë‑jnë */
            "QUN",           /* Laţë‑jnë */
            "RƏ",            /* Laţë‑jnë */
            "RE",            /* Laţë‑jnë */
            "REM",           /* Laţë‑jnë */
            "REN",           /* Laţë‑jnë */
            "SƏ",            /* Şkupë‑tärë */
            "SƐ",            /* Laţë‑jnë */
            "ƩƏ",            /* Şkupë‑tärë */
            "ƩUL",           /* Şemë‑jţë */
            "ƩUM",           /* Şemë‑jţë */
            "ƩUN",           /* Şemë‑jţë */
            "ƩUPRA",         /* Şemë‑jţë */
            "ƩUPER",         /* Şemë‑jţë */
            "TƏ",
            "TE",            /**/
            "Tɕ",
            "TƩ",            /* Şkupë‑tärë */
            "Ũ",             /* Arabe */
            "VƏ",            /* Şkupë‑tärë */
        };

        /*
        Préfixes et suffixes grecs ou latins
        employés dans la construction des mots français
        Le document est volontairement étendu, mais la recherche ne s'effectuera que sur les préfixes et suffixes les plus courants ou les plus "parlants" pour les élèves (mots rencontrés en géométrie, en mathématiques, en éveil, lus dans la presse...etc). Par exemple:

        un polygone, la géographie, un dinosaure, la psychologue, un thermomètre...

         préfixes grecs
        préfixes latins
        suffixes grecs
         suffixes latins
        recherches
        A. Composition par préfixes

        1/ Préfixes tirés du grec (formant surtout des mots scientifiques)

        préfixes français	préfixes grecs	sens	exemples	autres exemples à rechercher

        an-	 an	sans	analphabète; anarchie	-
        ana-	 ana	de bas en haut, à l'inverse	anachronisme; anastrophe	-
        anti-	 anti	contre	antialcoolique; antireligieux	-
        apo-	 apo	hors de, à partir de, loin de	apostasie; apostrophe; apothéose	-
        archi-, arch-	 archi
        1. au plus haut degré

        2. qui commande, qui est au-dessus

        archifou; archimillionnaire

        archevêque; archidiacre

        cata-	 cata	de haut en bas, complètement	cataracte; catastrophe
        di(a)-	 dia	à travers, séparé de	diagonal; diaphane; diorama	-
        dis, di	 dis	deux fois	diptyque, disyllabe	 -
        dys-	 dys	avec difficulté	dysentrie; dyspepsie	-
        ecto-	 ecto	en dehors	ectoplasme	-
        en-	 en	dans	encéphale; endémie	-
        end(o)-	 endo	à l'intérieur	endocarde; endocrine	-
        épi-	 epi	sur	épiderme; épizootie	-

        préfixes français	préfixes grecs	sens	exemples	autres exemples trouvés par les élèves
        eu-	 eu	bien, bon	euphémisme; euphonie	-
        exo-	 exo	au-dehors	exotisme	-
        hemi-	 hemi	demi	hémicycle; hémisphère	-
        hyper-	 hyper	sur, au-dessus	hypermétrope; hypertension; hypertrophie	-
        hypo-	 hypo	sous	hypogée; hypoténuse	-
        méta-	 meta	après, changement	métamorphose; métaphysique
        par(a)-	 para
        1. près de

        2. contre

        parallèle; paratyphoïde

        paradoxe

        péri-	 peri	autour	périoste; périphrase
        pro-	 pro	devant, pour	prognathe; prolepse	un prototype
        syn-, sym-	 syn	avec
        synthèse;

        sympathie

        un synonyme,

        2/ Mots grecs servant de préfixes ou entrant dans la composition des mots français

        préfixes	sens	exemples	autres exemples trouvés par les élèves
        acantho-	épine	acanthacées; acanthe	-
        acro-	élevé	acrobate; acrostiche	-
        actino-	rayon	actinique; actinomètre	-
        adéno-	glande	adénoïde	-
        aéro-	air	aéronaute; aéronef; aérophagie; aérostat	aéroport
        agro-	champ	agronome	-
        allo-	autre	allopathie; allotropie	-
        amphi-
        1. autour

        2. doublements

        amphithéâtre

        amphibie;

        -
        andro-	homme (mâle)	androgyne	-
        anémo-	vent	anémomètre	-
        anth(o)-	fleur (meilleur de)	anthémis; anthologie	-
        anthrac-	charbon	anthracite	-
        anthropo	homme (espèce)	anthropologie; anthropophage	-
        archéo-	ancien	archéologie	-
        arithm(o)-	nombre	arithmétique	-
        artério-	artère	artériosclérose	-
        arthr(o)-	articulation	arthrite; arthropodes	-
        astér(o)-, astr(o)-	astre, étoile	astérisque; astronaute	-
        auto-
        1. de soi-même

        2. abrév. de automobile

        autobiographie; autodidacte; automobile

        autocar; autostrade

        -
        bactéri(o)-	bâton	bactéricide; bactériologie	-
        baro-	pesant	baromètre	-
        biblio-	livre	bibliographie; bibliothèque	-
        bio-	vie	biographie; biologie	-
        blasto-	germe	blastoderme	-
        bléphar(o)-	paupière	blépharite	-
        brachy-	court	brachycéphale	-
        brady-	lent	bradycardie; bradypsychie	-
        brom(o)-	puanteur.	brome; bromure	-
        bronch(o)-	gorge	bronche; bronchique; broncho-pneumonie	-
        bryo-	mousse	bryophile	-
        butyr(o)-	beurre	butyrique	-
        caco-, cach-	mauvais	cacographie; cacophonie; cachexie	-
        calli-	beau	calligraphie	-
        cardi(o)-	coeur	cardiaque; cardiogramme; cardiographie	-
        cén(o)-	commun	cenobite; cénesthésie	-
        céno-	vide	cénotaphe	-
        céphal(o)-	tête	céphalalgie; céphalopodes
        chalco-	cuivre	chalcographie
        cheir-, chir-	main	chiromancie
        chloro	vert	chlorate; chlorhydrique
        chol(é)-	bile	cholagogue; cholémie
        chromat-, chrom(o)-	couleur	chromatique; chromosome
        chron(o)-	temps	chronique; chronographie; chronologie; chronomètre	-
        chrys(o)-	or	chrysostome; chrysolithe
        cinémat(o)-, ciné-, cinét(o)-	mouvement	cinématographe; cinétique
        conch(o)-	coquille	conchylien; conchyliologie
        cosm(o)-	monde	cosmique; cosmogonie; cosmopolite
        crypt(o)-	caché	crypte, cryptogame;
        cyan(o)-	bleu	cynure
        cycl(o)-	cercle	cyclique, cyclone
        cyto-	cellule	cytologie
        dactyl(o)-	doigt	dactylographie
        déca-	dix	décamètre
        dém(o)-	peuple	démocrate; démographie
        derm(o)-, dermato-	peau	derme; dermique; dermatologie
        didact-	enseigner	didactique
        dodéca-	douze	dodécagone
        dolicho-	long	dolichocéphale
        dory-	lance	doryphore
        dynam(o)-	force	dynamite; dynamomètre
        échin(o)-	épine, hérisson	échinoderme
        électr(o)-	ambre jaune	électrochoc
        embryo-	foetus	embryologie
        entér(o)-	entrailles	entérite
        entomo-	insecte	entomologiste	-
        suite

        préfixes	sens	exemples	autres exemples trouvés par les élèves
        éo-	aurore	éocène	-
        galact(o)-	lait	galactose; galaxie	-
        gam(o)-	mariage	gamète	-
        gastro-	ventre	gastropodes; gastronome
        gé(o)-	terre	géographie; géologie
        géront(o)-	vieillard	gérontocratie
        gloss(o)-	langue	glossaire
        gluc(o)-,	doux	glucose; glycogène;
        ,glyc(o)-, glycér(o)-	doux	glycérine
        graph(o)-	écrire	graphologie
        gyn(éco)-	femme	gynécée; gynécologie
        gyro-	cercle	gyroscope
        hagi(o)-	sacré	hagiographie
        halo-	sel	halogène
        hecto-	cent	hectomètre
        héli(o)-	soleil	héliothérapie
        hémat(o)-, hémo-	sang	hématose; hémorragie
        hépat(o)-	foie	hépatique
        hept(a)-	sept	heptasyllabe
        hétéro-	autre	hétérogène
        hexa-	six	hexagone
        hiér(o)-	sacré	hiéroglyphe
        hipp(o)-	cheval	hippodrome
        hist(o)-	tissu	histologie
        homéo-, hom(o)	semblable	homéopathie; homologue
        hor(o)-	heure	horoscope
        hydr(o)-	eau, (fluide)	hydraulique; hydre; hydrologie; hydrothérapie
        hygro-	humide	hygromètre; hygroscope
        hypn(o)-	sommeil	hypnose; hypnotisme
        hystér(o)-	utérus	hystérographie
        icon(o)-	image	icône; iconoclaste
        idé(o)-	idée	idéogramme; idéologie
        idi(o)-	particulier	idiome; idiotisme
        iso-	égal	isomorphe; isotherme
        kilo-	mille	kilogramme
        laryng(o)-	gorge	laryngologie
        leuco-	blanc	leucocyte
        litho-	pierre	lithographique
        log(o)-	discours, science	logomachie
        macro-	grand	macrocéphale; macrocosme
        méga-, mégalo-	grand	mégalithe; mégalomane
        mette)-	chant	mélodique; mélodrame
        més(o)-	milieu	mésopotamien
        météor(o)-	élevé dans les airs	météore; météorologie
        métr(o)-	mesure	métrique; métronome
        micro-	petit	microbe; microbiologie;
        mis(o)-	haine	misanthrope; misogyne
        mném(o)-	mémoire	mnémotechnique
        mono-	seul	monogramme; monolithe
        morpho-	forme	morphologie
        myco-	champignon	mycologie
        myri(a)-	dix mille	myriade
        mythe-	légende	mythologie
        nécro-	mort	nécrologie; nécropole
        néo-	nouveau	néologisme; néophyte
        néphr(o)-	rein	néphrite
        neuro-, névr-	nerf	neurologie; névralgie
        noso-	maladie	nosologie
        octa-, octo-	huit	octaèdre; octogone
        odont(o)-	dent	odontologie
        olig(o)-	peu nombreux	oligarchie
        oniro-	songé	oniromancie
        ophtaim(o)-	oeil	ophtalmologie
        ornitho-	oiseau	ornithologiste
        oro-	montagne	orographie
        ortho-	droit	orthographe; orthopédie	l'orthodontiste, l'orthophoniste
        osté(o)-	os	ostéite; ostéomyélite
        ot(o)-	oreille	oto-rhino-laryngologie
        oxy-	aigu, acide	oxyton; oxygène
        pachy-	épais	pachyderme
        paléo-	ancien	paléographie; paléolithique
        pan-, pant(o)-	tout	panthéisme; pantographe
        path(o)-	souffrance	pathogène; pathologie
        péd-	enfant	pédagogie; pédiatrie
        penta-	cinq	pentagone	-
        suite

        préfixes	sens	exemples	autres exemples trouvés par les élèves
        phago-	manger	phagocyte	-
        pharmac(o)-	médicament	pharmaceutique; pharmacopée	-
        pharyng(o)-	gosier	pharyngite	-
        phén(o)-	apparaître	phénomène
        phil(o)-	qui aime	philanthrope; philatélie
        phon(o)-	voix	phonographe
        photo-	lumière	photographe
        phréno-	diaphragme	phrénique
        intelligence	phrénologie
        phyllo-	feuille	phylloxéra
        phys(io)-	nature	physiocrate; physique
        phyt(o)-	plante	phytophage
        plast-	façonné	plasticité; plastique
        pleur(o)-	côté	pleurite
        plouto-	richesse	ploutocratie
        pneumo-	poumon	pneumonie
        pod(o)-	pied	podomètre
        poly-	nombreux	polyèdre; polygone
        prot(o)-	premier	prototype
        pseud(o)-	faux	pseudonyme
        psych(o)-	âme	psychologue
        ptéro-	aile	ptérodactyle
        pyo-	pus	pyogène
        pyr(o)-	feu	pyrotechnie
        rhino-	nez	rhinocéros
        rhizo-	racine	rhizome; rhizopodes
        rhodo-	rose	rhododendron
        sarco-	chair	sarcophage
        saur-	lézard	sauriens
        scaph-	barque	scaphandrier
        préfixes	sens	exemples	autres exemples trouvés par les élèves
        schizo-	qui fend	schizophrénie
        séma-	signe	sémantique; sémaphore
        sidér(o)-	fer	sidérurgique
        solén(o)-	tuyau	solénoïde
        somat(o)-	corps	somatique
        spélé(o)-	caverne	spéléologie
        sphéno-	coin	sphénoïde
        sphér(o)-	globe	sphérique; sphénoïde
        stat-	stable	statique; statistique
        stéré(o)-	solide	stéréoscope
        stomat(o)-	bouche	stomatologie
        sty](o)-	colonne	stylite
        tachy-	rapide	tachymètre
        tauto-	le même	tautologie
        taxi-	taxe	taximètre
        techn(o)-	art	technique; technologie
        télé-	loin	télépathie; téléphone
        tétra-	quatre	tétragone
        thalasso-	mer	thalassothérapie
        théo-	dieu	théocratie; théologie
        thérapeut-	qui soigne	thérapeutique
        therm(o)-	chaleur	thermomètre
        top(o)-	lieu	topographie; toponymie
        typo	caractère	typographie; typologie
        urano-	ciel	uranographie
        uré-	urine	urémie
        xén(o)-	étranger	xénophobe
        xér(o)-	sec	xérophagie
        xylo-	bois	xylophone
        zoo-	animal	zoologie

        3/ Préfixes d'origine latine ou mots latins entrant dans la composition des mots français



        préfixes français	préfixes latins	sens	exemples	exemples trouvés par les élèves

        ab-, abs-	 ab	loin de, séparation	abduction; abstinence
        ad-	 ad	vers, ajouté à	adhérence; adventice
        anté-	 ante	avant, précédant	antédiluvien; antépénultième
        bis-, bi-	 bis	deux	bipède; biplace
        circon-, circom-, circum-	 circum	autour	circonlocution; circumnavigation
        co-, col-, com-, con-,	 cum	avec	coéquipier, collection; compère; concitoyen;
        contra, contre	 contra	contre, en face de	contradiction
        dé-, dés-,

        dis-

         dis
        cessation,

        séparation

        désarmer, dépolir,

        disjoindre, dissymétrie

        déci-	 deci	dix	décimale; décimètre
        ex-	 	hors	expatrier; exporter
        ex-	 	qui a cessé d'être	ex-député; ex-ministre
        extra-
        1. extrêmement

        2. hors de

        extra-fin

        extraordinaire; extra-territorialité

        in-, im-, il-, ir-	 	1. dans	infiltrer; insinuer
             2. privé de	illettré; impropre; inexact;
                 irresponsable
        inter-	 	entre	interallié; interligne; international
        intra-	 	au-dedans	intramusculaire;
                 intraveineux
        juxta-	 	auprès de	juxtalinéaire; juxtaposer

        préfixes	 	sens	exemples	exemples trouvés par les élèves
        multi-	 	nombreux	multicolore; multiforme; multiple
        octa-, octo-	 	huit	octaèdre; octosyllabe
        omni-	 	tout	omniscient; omnivore
        pente)-	 	presque	pénéplaine; pénultième
        pet-	 	à tra rs	percolateur; perforer
        post-	 	après	postdater; postscolaire
        pré-	 	devant	préétabli; préhistoire; préliminaire
        pro-	 	en avant	projeter; prolonger
        quadr(i)-,	 	quatre	quadrijumeaux; quadrupède
        quadru-
        quasi-	 	presque	quasi-contrat; quasi-délit
        quinqu-	 	cinq	quinquagénaire; quinquennal
        radio-	 	rayon	radiographie; radiologie
        r(e)-, te-	 	de nouveau	rouvrir; réargenter
        rétro-	 	en retour	rétroactif; rétrograder
        simili-	 	semblable	similigravure; similimarbre
        sub-	 	sous	subalterne; subdélégué; subdiviser
        super-, supra-	 	au-dessus	superstructure; supranational
        trans-	 	au-delà de, à travers	transformer; transhumant
        tri-	 	trois	tripartite; trisaieul
        ultra-	 	au-delà de	ultrason; ultraviolet
        uni-	 	un	uniforme
        vice-	 	à la place de	vice-amiral; vice-consul

        B. Composition par suffixes

        1/ Suffixes d'origine grecque

        suffixes français	suffixes grecs	sens	exemples	autres exemples trouvés par les élèves
        -algie	 	douleur	névralgie
        -archie	 	commandement	monarchie
        -arque	 	qui commande	triérarque
        -âtre	 	qui soigne	pédiatre
        -bare	 	pression	isobare
        -bole	 	qui lance	discobole
        -carpe	 	fruit	péricarpe
        -cène	 	récent	éocène
        -céphale	 	tête	dolichocéphale
        -cosm(o)	 	monde	microcosme
        -crate	 	qui a le pouvoir	aristocrate, bureaucrate
        -cratie	 	pouvoir	ploutocratie
        -cycle	 	qui a une ou des roues	tricycle
        -dactyle	 	qui a des doigts	ptérodactyle
        -doxe	 	opinion	paradoxe
        -drome	 	course	hippodrome
        -èdre	 	face, base	dodécaèdre
        -game	 	qui engendre	cryptogame
        -gamie	 	mariage	polygamie
        -gène	 	qui engendre	hydrogène
        -gone	 	angle	polygone
        -gramme	 	un écrit	télégramme
        -graphe	 	qui écrit	dactylographe
        -graphie	 	art d'écrire	sténographie
        -hydre	 	eau	anhydre
        -lâtrie	 	adoration	idolâtrie
        -lithe (-lite)	 	pierre	monolithe
        -logie	 	science	psychologie
        -logue	 	qui étudie	astrologue
        -mancie	 	divination	cartomancie
        -mane	 	qui a la passion de	pyromane
        -manie	 	passion, obsession	cleptomanie
        -mètre	 	mesure	centimètre
        -nome	 	qui règle	économe
        -nomie	 	art de mesurer	astronomie

        suffixes français	suffixes grecs	sens	exemples	autres exemples trouvés par les élèves
        -oïde	 	qui a la forme	sinusoïde
        -onyme	 	qui porte le nom	patronyme
        -pathe	 	malade de	névropathe
        -pédie	 	éducation	encyclopédie
        -phage	 	qui mange	anthropophage
        -phagie	 	action de manger	aérophagie
        -phane	 	qui brille	diaphane
        -phile	 	ami de	russophile
        -philie	 	amitié pour	américanophilie
        -phobe	 	ennemi de	anglophobe
        -phobie	 	inimitié pour	agoraphobie
        -phone	 	qui transmet	microphone,
             les sons	électrophone
        -phonie	 	transmission des sons	radiophonie, téléphonie
        -phore	 	qui porte	sémaphore
        -pithèque	 	singe	anthropopithèque
        -pode	 	pied	myriapode
        -pole	 	ville	métropole
        -ptère	 	aile	hélicoptère
        -scope	 	qui voit	télescope
        -scopie	 	vision	radioscopie	microscopie
        -sphère	 	globe	stratosphère	lithosphère, atmosphère
        -taphe	 	tombeau	cénotaphe
        -technie	 	science	électrotechnie
        -technique	 	qui sait	polytechnique
        -thèque	 	armoire	bibliothèque
        -thérapie	 	traitement médical	chimiothérapie
        -therme	 	chaleur	isotherme
        -tomie	 	action de couper	anatomie
        -type	 	impression	linotype
        -typie	 	impression	phototypie

        2/ Mots latins employés comme suffixes
        suffixes français	mots latins	sens	exemples	autres exemples trouvés par les élèves
        -cide	 	qui tue	infanticide
        -cole	 	relatif à la culture	vinicole, viticole
        -culteur	 	celui qui cultive	agriculteur
        -culture	 	art de cultiver	horticulture
        -fère	 	qui porte	mammifère
        -fique	 	qui produit	frigorifique
        -forme	 	qui a la forme de	cunéiforme, filiforme
        -fuge	 	qui fuit ou fait fuir	transfuge, vermifuge	hydrofuge, centrifuge
        -pare	 	qui enfante	ovipare
        -pède	 	qui a des pieds	bipède, quadrupède
        -vore	 	qui se nourrit	carnivore, herbivore	omnivore


        Recherches collectives et mots proposés par les élèves:

        Un hélicoptère: hélico: hélice; ptère: aile.

        Qui a une aile en forme d'hélice.

        Un hexagone: hexa: six; gone: angle.

        Une figure qui a six angles (six sommets)

        Un polygone: poly: nombreux, gone: angle.

        Une figure qui possède plusieurs angles.

        La psychologue: psycho: âme; logue: qui étudie.

        Un spécialiste qui étudie l'esprit des gens.

        Un pyromètre: pyro: feu, flamme; mètre: mesure.

        Un appareil qui mesure les hautes températures.

        Un pyromane: pyro: feu; mane: folie, passion.

        Une personne qui met le feu par folie.

        Un myriapode: myria: dix mille; pode: pieds

        Un mille-pattes.

        xénophobe: xeno: étranger; phobe; qui craint, qui a peur

        qui n'aime pas les étrangers (syn. raciste)

        une mégalithe: méga: grand; lithe: pierre

        Une grosse pierre, comme par exemple un menhir.

        un anémomètre: anémo: vent; mètre: mesure

        Un instrument qui mesure la vitesse du vent (météorologie, marine)

        une mégalopole: mégalo: grand; pole: ville

        Une très grande ville.

        l'archéologie: archéo: ancien; logie: science

        Science qui étudie les objets anciens: monuments, ruines, poteries, statues...

        la physiologie: physio: nature; logie: science

        Science qui traite des fonctions de la vie (mouvements, muscles; digestion...)

        mythomane: mytho: légende, invention; mane: folie

        Personne qui fabule, qui s'invente des histoires et qui y croit.

        chronomètre: chrono: temps; mètre: mesure

        Instrument qui mesure le temps avec précision.

        microscope: micro: petit; scope: voir

        Instrument d'optique qui permet d'observer les objets minuscules

        la philosophie: philo: qui aime; sophie: la sagesse

        Activité des penseurs qui se posent des questions et réfléchissent pour faire évoluer le monde.

        un baromètre: baro: pesanteur; mètre: mesure

        Instrument météo qui mesure la pression de l'atmosphère.



        Mots proposés par les enfants:

        l'orthographe:

        la calligraphie:

        une psychothérapie:

        aérodynamique:

        une bibliothèque:

        la monarchie:

        l'astronomie:



        architecture:

        géomètre:

        mythomane:

        télégraphe:

        mythologie

        télégraphe

        stéthoscope

        microphone:

        géologie:

        pentagone:

        géométrie:

        hydrogène:

        aérolithe:

        amphibien:

        dynamique:

        télescope:

        herbivore:

        carnivore:

        synonyme:

        coléoptère.

        thermomètre:

        aristocrate:

        gastronomie:

        prototype:

        biologie:

        orographie:

        cryptogramme:

        zoologie:

        photographie:

        astronomie:

        chronologie:

        amphibie:

        démocratie:

        sémaphore:

        biographie:

        panorama:

        encyclopédie:

        homonyme:

        orthophoniste:

        pathologie:

        hydrofuge:

        stéréophonie:



        Retour au sommaire général

        MEANING	LATIN PF	GREEK PF

        across, beyond, through	trans-	dia-
        after	post-
        again, back	re-
        against	contra-, (in-, ob-)	anti-
        all	omni-	pan
        around	circum-	peri-
        away or from	ab- (or de-)	apo-, ap-
        bad, difficult, wrong	mal-	dys-
        before	ante-, pre-	pro-
        between, among	inter-
        both	ambi-	amphi-
        completely or very	de-, ob-
        down	de-, ob-
        four	quad-	tetra-
        good	ben-, bene-	eu-
        half, partially	semi-	hemi-
        in, into	il-, im-, in-, ir-	en-
        in front of	pro-	pro-
        inside	intra-	endo-
        large	(macro-, from Greek)	macro-
        many	multi-	poly-
        not*	de-, dis-, in-, ob-	a-, an-
        on		epi-
        one	uni-	mono-
        out of	ex-, e-	ek-
        outside	extra-, extro-	ecto-, exo-
        over	ob- (sometimes)	epi- (on top of) or hypo- (too much)
        self	ego-	auto-, aut-,auth-
        small		micro-
        three	tri-	tri-
        through	trans-	dia-
        to or toward	ad-, a-, ac-, as-	epi-
        two	bi-	di-
        under, insufficient	sub-	hypo-
        with	co-. com-, con-	sym-, syn-
        within, inside	intra-	endo-
        without	dis- (sometimes)	a-, an-

        * */

//========================================================================================
// Outils
//========================================================================================

//========================================================================================
// outils divers
//========================================================================================

        ϰinputAdditor

        for() {


        }