var content =
{
	tasks: [
	{
		// 1. FELADAT ---------------------------------------------------------------------------------------------------
		type: "test",
		hu: {
			question: "Milyen állatcsoportba tartoznak a denevérek?",
			answers: [ "<h2>madarak</h2>", "<h2>puhatestűek</h2>", "<h2>emlősök</h2>" ]
		},
		en: {
			question: "Which group of animals do bats belong to?",
			answers: [ "<h2>birds</h2>", "<h2>molluscs</h2>", "<h2>mammals</h2>" ]
		},
		hr: {
			question: "U koju skupinu životinja spadaju šišmiši?",
			answers: [ "<h2>ptice</h2>", "<h2>mekušci</h2>", "<h2>sisavci</h2>" ]
		},
		rightAnswer: 3,
		time: 15,
		score: 6,
		background: "./g/bg_quiz-1.jpg"
	},
	{
		// 2. FELADAT ---------------------------------------------------------------------------------------------------
		type: "test",
		hu: {
			question: "Melyik tápláléktípust nem eszik a denevérek?",
			answers: [ "<h2>giliszta</h2>", "<h2>nektár</h2>", "<h2>szúnyogok</h2>" ],
		},
		en: {
			question: "Which food type bats do not eat?",
			answers: [ "<h2>earthworms</h2>", "<h2>nectar</h2>", "<h2>mosquitoes</h2>" ],
		},
		hr: {
			question: "Koju vrstu hrane ne jedu šišmiši?",
			answers: [ "<h2>gliste</h2>", "<h2>nektar</h2>", "<h2>komarci</h2>" ],
		},
		rightAnswer: 1,
		time: 15,
		score: 6,
		background: "./g/bg_quiz-2.jpg"
	},
	{
		// 3. FELADAT ---------------------------------------------------------------------------------------------------
		type: "test",
		hu: {
			question: "Hányszor ellenek a denevérek egy évben?",
			answers: [ "<h2>1x</h2>", "<h2>2x</h2>", "<h2>3-4x</h2>" ],
		},
		en: {
			question: "How many times do bats give birth a year?",
			answers: [ "<h2>1x</h2>", "<h2>2x</h2>", "<h2>3-4x</h2>" ],
		},
		hr: {
			question: "Koliko puta se godišnje okote šišmiši?",
			answers: [ "<h2>1x</h2>", "<h2>2x</h2>", "<h2>3-4x</h2>" ],
		},
		rightAnswer: 1,
		time: 15,
		score: 6,
		background: "./g/bg_quiz-3.jpg"
	},
	{
		// 4. FELADAT ---------------------------------------------------------------------------------------------------
		type: "test",
		hu: {
			question: "Mennyi szúnyogot eszik egy törpedenevér egy éjszaka alatt?",
			answers: [ "<h2>10</h2>", "<h2>100</h2>", "<h2>1000</h2>" ],
		},
		en: {
			question: "How many mosquitoes does a pipistrelle eat in one night?",
			answers: [ "<h2>10</h2>", "<h2>100</h2>", "<h2>1000</h2>" ],
		},
		hr: {
			question: "Koliko komaraca pojede patuljasti šišmiš za jednu noć?",
			answers: [ "<h2>10</h2>", "<h2>100</h2>", "<h2>1000</h2>" ],
		},
		rightAnswer: 3,
		time: 15,
		score: 6,
		background: "./g/bg_quiz-4.jpg"
		},
		{
			// 5. FELADAT ---------------------------------------------------------------------------------------------------
			type: "test",
			hu: {
				question: "Hány millió éves a legrégebbi ismert denevér fosszília?",
				answers: [ "<h2>5</h2>millió", "<h2>5,2</h2>millió", "<h2>52,5</h2>millió" ],
			},
			en: {
				question: "What is the age of the oldest bat fossil?",
				answers: [ "<h2>5</h2>million years", "<h2>5,2</h2>million years", "<h2>52,5</h2>million years" ],
			},
			hr: {
				question: "Koliko milijuna godina je najstariji pronađeni fosil šišmiša?",
				answers: [ "<h2>5</h2>milijuna", "<h2>5,2</h2>milijuna", "<h2>52,5</h2>milijuna" ],
			},
			rightAnswer: 3,
			time: 15,
			score: 6,
			background: "./g/bg_quiz-5.jpg"
		},
		{
		// 6. FELADAT ---------------------------------------------------------------------------------------------------
		type: "drag",
		iconPosition: { x: 150, y: 0 },
		hideReset: true,
		snap: true,
		hu: {
			question: "Melyik állatra illik az öt állítás?",
            question2: "Húzd a helyes  nevet az állat képére",
			extra1: { text: "a.	szárnya van", x: 527, y: 580 },
			extra2: { text: "b.	tud repülni", x: 527, y: 630 },
			extra3: { text: "c.	szárnyfesztávolsága 1,5 méter", x: 527, y: 680 },
			extra4: { text: "d.	gyümölcsökkel táplálkozik", x: 527, y: 730 },
			extra5: { text: "e.	az ázsiai trópusokon él", x: 527, y: 780 }
		},
		en: {
			question: "Which animal is described with the following five features?",
            question2: "Move the correct species name to the picture of the animal",
						extra1: { text: "a. it has wings", x: 527, y: 580 },
						extra2: { text: "b. it can fly", x: 527, y: 630 },
						extra3: { text: "c. it has a wingspan of 1.5 m", x: 527, y: 680 },
						extra4: { text: "d. it feeds on fruits", x: 527, y: 730 },
						extra5: { text: "e. it lives in Asian tropical areas", x: 527, y: 780 }
		},
		hr: {
			question: "Na koju životinju se odnose sljedeće tvrdnje?",
            question2: "Povuci ispravni naziv na sliku životinje",
						extra1: { text: "a. ima krila", x: 527, y: 580 },
						extra2: { text: "b. umije letjeti", x: 527, y: 630 },
						extra3: { text: "c. raspon krila 1,5 metra", x: 527, y: 680 },
						extra4: { text: "d. hrani se plodovima", x: 527, y: 730 },
						extra5: { text: "e. živi u suptropskim krajevima Azije", x: 527, y: 780 }
		},
		destinations:
		[
			{ name: "step2", x: { hu: 1030, en: 1030, hr: 1030 }, y: { hu: 594, en: 594, hr: 594 }, width: 210, height: 210 }
		],
		answers:
		[
			{ image: "./g/barchoba_label.png", rightAnswer: "step1", x: 527, y: 297, labelStyle: "label_inner_barchoba", label: { hu: "malajziai óriás<br>repülő mókus", en: "Malayan giant<br>flying squirrel", hr: "malajzijska golema<br>leteća vjeverica" } },
			{ image: "./g/barchoba_label.png", rightAnswer: "step2", x: 855, y: 297, labelStyle: "label_inner_barchoba", label: { hu: "óriás<br>repülőkutya", en: "large<br>flying fox", hr: "golema<br>leteća lisica" } },
			{ image: "./g/barchoba_label.png", rightAnswer: "step3", x: 1183, y: 297, labelStyle: "label_inner_barchoba", label: { hu: "brazil<br>repülő vidra", en: "Brazilian<br>flying otter", hr: "brazilska<br>leteća vidra" } },
		],
		labelStyle: "label_inner_barchoba",
		time: 60,
		score: 7,
		background: "./g/bg_barchoba.jpg"
	},
	{
		// 7. FELADAT ---------------------------------------------------------------------------------------------------
		type: "drag",
		snap: true,
		iconPosition: { x: 150, y: 0 },
		hideReset: true,
		hu: {
			question: "Melyik állatra illik az öt állítás?",
            question2: "Húzd a helyes nevet az állat képére",
			extra1: { text: "a.	faodúban vagy házakban lakik", x: 527, y: 580 },
			extra2: { text: "b.	a Föld egyik legkisebb denevére", x: 527, y: 630 },
			extra3: { text: "c.	testtömege 5 gramm", x: 527, y: 680 },
			extra4: { text: "d.	szúnyogokkal táplálkozik", x: 527, y: 730 },
			extra5: { text: "e.	Európában él", x: 527, y: 780 }
		},
		en: {
			question: "Which animal is described with the following five features?",
            question2: "Move the correct species name to the picture of the animal",
						extra1: { text: "a. it lives in tree holes or in houses", x: 527, y: 580 },
						extra2: { text: "b. it is one of the smallest bats living on Earth", x: 527, y: 630 },
						extra3: { text: "c. its body weight is 5 grams", x: 527, y: 680 },
						extra4: { text: "d. it feeds on mosquitoes", x: 527, y: 730 },
						extra5: { text: "e. it lives in Europe", x: 527, y: 780 }
		},
		hr: {
			question: "Na koju životinju se odnosi ovih pet tvrdnji?",
            question2: "Povuci ispravni naziv na sliku životinje",
						extra1: { text: "a. živi u šupljinama drveća ili po kućama", x: 527, y: 580 },
						extra2: { text: "b. jedan je od najmanjih šišmiša", x: 527, y: 630 },
						extra3: { text: "c. teži 5 grama", x: 527, y: 680 },
						extra4: { text: "d. hrani se komarcima", x: 527, y: 730 },
						extra5: { text: "e. živi u Europi", x: 527, y: 780 }
		},
		destinations:
		[
			{ name: "step3", x: { hu: 1030, en: 1030, hr: 1030 }, y: { hu: 594, en: 594, hr: 594 }, width: 210, height: 210 }
		],
		answers:
		[
			{ image: "./g/barchoba_label.png", rightAnswer: "step1", x: 527, y: 297, labelStyle: "label_inner_barchoba", label: { hu: "tenor<br>törpedenevér", en: "tenor<br>pipistrelle", hr: "patuljasti<br>šumski šišmiš" } },
			{ image: "./g/barchoba_label.png", rightAnswer: "step2", x: 855, y: 297, labelStyle: "label_inner_barchoba", label: { hu: "basszus<br>törpedenevér", en: "bass<br>pipistrelle", hr: "golemi<br>močvarni šišmiš" } },
			{ image: "./g/barchoba_label.png", rightAnswer: "step3", x: 1183, y: 297, labelStyle: "label_inner_barchoba", label: { hu: "szoprán<br>törpedenevér", en: "soprano<br>pipistrelle", hr: "patuljasti<br>močvarni šišmiš" } },
		],
		labelStyle: "label_inner_barchoba",
		time: 60,
		score: 7,
		background: "./g/bg_barchoba-1.jpg"
	},
	{
		// 8. FELADAT ---------------------------------------------------------------------------------------------------
		type: "drag",
		snap: true,
		iconPosition: { x: 300, y: 130 },
		hideReset: true,
		hu: {
			question: "Húzd a helyes kifejezést az üres helyre a mondatban",
            question2: "",
			extra1: { text: "<h3>Az európai denevérek október végétől márciusig téli álmot alszanak.", x: 600, y: 690 },
			extra2: { text: "<h3>Tudományosan ezt ............................... nevezzük.", x: 600, y: 765 }
		},
		en: {
			question: "Move the correct expression to the empty space in the following sentence",
            question2: "",
						extra1: { text: "<h3>European bats are in a state of seasonal inactivity from late October to March.", x: 600, y: 690 },
						extra2: { text: "<h3>The proper scientific term for this is ..........................", x: 600, y: 765 }
		},
		hr: {
			question: "Povuci ispravni izraz na prazno mjesto u rečenici",
            question2: "",
						extra1: { text: "<h3>Europski šišmiši od konca listopada do ožujka spavaju zimski san.", x: 600, y: 690 },
						extra2: { text: "<h3>Znanstveno se to naziva ............................", x: 600, y: 765 }
		},
		destinations:
		[
			{ name: "step2", x: { hu: 838, en: 1080, hr: 910 }, y: { hu: 600, en: 596, hr: 598 }, width: 336, height: 336 }
		],
		answers:
		[
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step1", x: 1227, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "kibernációnak", en: "cybernation", hr: "kibernacijom" } },
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step2", x: 792, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "hibernációnak", en: "hibernation", hr: "hibernacijom" } },
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step3", x: 356, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "hipotermiának", en: "hypothermia", hr: "hipotermijom" } },
		],
		labelStyle: "label_inner_kiegeszites",
		time: 60,
		score: 7,
		background: "./g/bg_egeszitsd_ki.jpg"
	},
	{
		// 9. FELADAT ---------------------------------------------------------------------------------------------------
		type: "drag",
		snap: true,
		iconPosition: { x: 265, y: 130 },
		hideReset: true,
		hu: {
			question: "Húzd a helyes kifejezést az üres helyre a mondatban",
            question2: "",
			extra1: { text: "<h3>A júniusban megszületett kölykét a nőstény .....................  ", x: 604, y: 693 },
			extra2: { text: "<h3>szoptatja, ezután lesz önálló a fiatal denevér", x: 600, y: 768 }
		},
		en: {
			question: "Move the correct expression to the empty space in the following sentence",
            question2: "",
						extra1: { text: "<h3>Bat babies are born in June and are then nursed by the female .............................,", x: 604, y: 693 },
						extra2: { text: "<h3>only after which they are weaned and become independent.", x: 600, y: 768 }
		},
		hr: {
			question: "Povuci ispravni izraz na prazno mjesto u rečenici",
            question2: "",
						extra1: { text: "<h3>Svoje mladunče rođeno u lipnju ženka doji ........................,", x: 604, y: 693 },
						extra2: { text: "<h3>nakon toga mladi šišmiš postaje samostalan.", x: 600, y: 768 }
		},
		destinations:
		[
			{ name: "step1", x: { hu: 1170, en: 1476, hr: 1160 }, y: { hu: 528, en: 528, hr: 528 }, width: 336, height: 336 }
		],
		answers:
		[
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step1", x: 792, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "1 hónapig", en: "for 1 month", hr: "1 tjedan" } },
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step2", x: 1227, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "1 hétig", en: "for 1 week", hr: "1 mjesec" } },
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step3", x: 356, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "6-8 hétig", en: "for 6-8 weeks", hr: "6-8 tjedana" } },
		],
		labelStyle: "label_inner_kiegeszites",
		time: 60,
		score: 7,
		background: "./g/bg_egeszitsd_ki.jpg"
	},
	{
		// 10. FELADAT ---------------------------------------------------------------------------------------------------
		type: "drag",
		snap: true,
		iconPosition: { x: 320, y: 130 },
		hideReset: true,
		hu: {
			question: "Húzd a helyes kifejezést az üres helyre a mondatban",
            question2: "",
			extra1: { text: "<h3>Európában ........", x: 600, y: 686 },
			extra2: { text: "<h3>vérszívó denevérfaj él.", x: 600, y: 761 }
		},
		en: {
			question: "Move the correct number to the empty space in the following sentence",
            question2: "",
						extra1: { text: "<h3>In Europe there are ........", x: 600, y: 686 },
						extra2: { text: "<h3>sanguivorous bat species.", x: 600, y: 761 }
		},
		hr: {
			question: "Povuci ispravni izraz na prazno mjesto u rečenici",
            question2: "",
						extra1: { text: "<h3>U Europi živi ........", x: 600, y: 686 },
						extra2: { text: "<h3>vrsta šišmiša krvopija.", x: 600, y: 761 }
		},
		destinations:
		[
			{ name: "step1", x: { hu: 630, en: 750, hr: 650 }, y: { hu: 520, en: 520, hr: 520 }, width: 336, height: 336 }
		],
		answers:
		[
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step1", x: 1227, y: 280, labelStyle: "label_inner_kiegeszites_1", label: { hu: "1", en: "1", hr: "1" } },
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step2", x: 792, y: 280, labelStyle: "label_inner_kiegeszites_1", label: { hu: "2", en: "2", hr: "2" } },
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step3", x: 356, y: 280, labelStyle: "label_inner_kiegeszites_1", label: { hu: "0", en: "0", hr: "0" } },
		],
		labelStyle: "label_inner_kiegeszites",
		time: 60,
		score: 7,
		background: "./g/bg_egeszitsd_ki.jpg"
	},
	{
		// 11. FELADAT ---------------------------------------------------------------------------------------------------
		type: "drag",
		snap: true,
		iconPosition: { x: 300, y: 130 },
		hideReset: true,
		hu: {
			question: "Húzd a helyes kifejezést az üres helyre a mondatban",
            question2: "",
			extra1: { text: "<h3>A denevérek fennmaradását a(z) .........................", x: 457, y: 686 },
			extra2: { text: "<h3>veszélyezteti.", x: 457, y: 761 },
		},
		en: {
			question: "Move the correct expression to the empty space in the following sentence",
            question2: "",
						extra1: { text: "<h3>The survival of bats", x: 557, y: 686 },
						extra2: { text: "<h3>is threatened by ..............................", x: 557, y: 761 },
		},
		hr: {
			question: "Povuci ispravni izraz na prazno mjesto u rečenici",
            question2: "",
						extra1: { text: "<h3>Opstanak šišmiša ugrožava ..............................", x: 557, y: 686 },
						extra2: { text: "<h3> ", x: 557, y: 761 },
		},
		destinations:
		[
			{ name: "step1", x: { hu: 890, en: 765, hr: 943 }, y: { hu: 518, en: 595, hr: 518 }, width: 336, height: 336 }
		],
		answers:
		[
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step2", x: 792, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "zsíros étrend", en: "their fatty diet", hr: "masna ishrana" } },
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step1", x: 1227, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "erdőirtás", en: "deforestation", hr: "krčenje šuma" } },
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step3", x: 356, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "UV sugárzás", en: "UV radiation", hr: "UV zračenje" } },
		],
		labelStyle: "label_inner_kiegeszites",
		time: 60,
		score: 7,
		background: "./g/bg_egeszitsd_ki.jpg"
	},
	{
		// 12. FELADAT ---------------------------------------------------------------------------------------------------
		type: "drag",
		snap: true,
		iconPosition: { x: 150, y: 0 },
		hu: {
			question: "Mik veszélyeztetik a denevérek fennmaradását, és mit tehetünk ellenük?",
						question2: "Húzd a képeket a megfelelő helyre",
			extra1: { text: " ", x: 357, y: 688 },
			extra2: { text: " ", x: 1464, y: 403 },
			extra3: { text: " ", x: 1464, y: 702 }
		},
		en: {
			question: "What can threaten the survival of bats, and what can we do against these?",
						question2: "Move the images to the correct positions",
			extra1: { text: " ", x: 357, y: 688 },
			extra2: { text: " ", x: 1464, y: 403 },
			extra3: { text: " ", x: 1464, y: 702 }
		},
		hr: {
			question: "Što sve ugrožava opstanak šišmiša i što možemo učiniti protiv toga?",
						question2: "Povuci na odgovarajuće mjesto",
			extra1: { text: " ", x: 357, y: 688 },
			extra2: { text: " ", x: 1464, y: 403 },
			extra3: { text: " ", x: 1464, y: 702 }
		},
		destinations:
		[
			{ name: "step1", x: { hu: 523, en: 523, hr: 523 }, y: { hu: 483, en: 483, hr: 483 }, width: 177, height: 255 },
			{ name: "step2", x: { hu: 832, en: 832, hr: 832 }, y: { hu: 329, en: 329, hr: 329 }, width: 177, height: 255 },
			{ name: "step3", x: { hu: 1052, en: 1052, hr: 1052 }, y: { hu: 329, en: 329, hr: 329 }, width: 177, height: 255 },
			{ name: "step4", x: { hu: 1274, en: 1274, hr: 1274 }, y: { hu: 329, en: 329, hr: 329 }, width: 177, height: 255 },
			{ name: "step5", x: { hu: 834, en: 834, hr: 834 }, y: { hu: 629, en: 629, hr: 629 }, width: 177, height: 255 },
			{ name: "step6", x: { hu: 1053, en: 1053, hr: 1053 }, y: { hu: 629, en: 629, hr: 629 }, width: 177, height: 255 },
			{ name: "step7", x: { hu: 1273, en: 1273, hr: 1273 }, y: { hu: 629, en: 629, hr: 629 }, width: 177, height: 255 }
		],
		answers:
		[
			{ image: "./g/12-serult-denever-etetes.png", rightAnswer: "step4", x: 235, y: 850, label: { hu: " ", en: " ", hr: " " } },
			{ image: "./g/12-barlang-zaras.png", rightAnswer: "step3", x: 450, y: 850, label: { hu: " ", en: " ", hr: " " } },
			{ image: "./g/12-odu.png", rightAnswer: "step2", x: 650, y: 850, label: { hu: " ", en: " ", hr: " " } },
			{ image: "./g/12-permetezes.png", rightAnswer: "step5", x: 850, y: 850, label: { hu: " ", en: " ", hr: " " } },
			{ image: "./g/12-erdoirtas.png", rightAnswer: "step7", x: 1050, y: 850, label: { hu: " ", en: " ", hr: " " } },
			{ image: "./g/12-epuletfelujitas.png", rightAnswer: "step6", x: 1250, y: 850, label: { hu: " ", en: " ", hr: " " } },
			{ image: "./g/12-vedd-oket.png", rightAnswer: "step1", x: 1450, y: 850, label: { hu: " ", en: " ", hr: " " } },
		],
		labelStyle: "label_under",
		time: 60,
		score: 2,
		background: "./g/bg_eromu_mukodese.jpg"
		},
		{
		// 13. FELADAT ---------------------------------------------------------------------------------------------------
		type: "drag",
		snap: true,
		iconPosition: { x: 150, y: 0 },
		hu: {
			question: "Húzd a kifejezéseket a megfelelő képekhez",
            question2: " ",
			extra1: { text: "", x: 1270, y: 300 },
			extra2: { text: "", x: 359, y: 416 },
			extra3: { text: "", x: 358, y: 640 },
			extra4: { text: "", x: 358, y: 857 },
			extra5: { text: "", x: 774, y: 416 },
			extra6: { text: "", x: 774, y: 600 }
		},
		en: {
			question: "Move the expressions to the corresponding images",
            question2: " ",
						extra1: { text: "", x: 1272, y: 302 },
						extra2: { text: "", x: 361, y: 418 },
						extra3: { text: "", x: 360, y: 642 },
						extra4: { text: "", x: 360, y: 859 },
						extra5: { text: "", x: 776, y: 418 },
						extra6: { text: "", x: 776, y: 602 }
		},
		hr: {
			question: "Povuci izraze na odgovarajuće slike",
						question2: " ",
						extra1: { text: "", x: 1272, y: 302 },
						extra2: { text: "", x: 361, y: 418 },
						extra3: { text: "", x: 360, y: 642 },
						extra4: { text: "", x: 360, y: 859 },
						extra5: { text: "", x: 776, y: 418 },
						extra6: { text: "", x: 776, y: 602 }
		},
		destinations:
		[
			{ name: "step1", x: { hu: 849, en: 849, hr: 849 }, y: { hu: 791, en: 791, hr: 791 }, width: 218, height: 218 },
			{ name: "step2", x: { hu: 604, en: 604, hr: 604 }, y: { hu: 657, en: 657, hr: 657 }, width: 218, height: 218 },
			{ name: "step3", x: { hu: 850, en: 850, hr: 850 }, y: { hu: 513, en: 513, hr: 513 }, width: 218, height: 218 },
			{ name: "step4", x: { hu: 1099, en: 1099, hr: 1099 }, y: { hu: 665, en: 665, hr: 665 }, width: 218, height: 218 },
			{ name: "step5", x: { hu: 1099, en: 1099, hr: 1099 }, y: { hu: 371, en: 371, hr: 371 }, width: 218, height: 218 },
			{ name: "step6", x: { hu: 603, en: 603, hr: 603 }, y: { hu: 366, en: 366, hr: 366 }, width: 218, height: 218 },
			{ name: "step7", x: { hu: 849, en: 849, hr: 849 }, y: { hu: 238, en: 238, hr: 238 }, width: 218, height: 218 }
		],
		answers:
		[
			{ image: "./g/parositsd.png", rightAnswer: "step4", x: 1354, y: 561, labelStyle: "label_inner_parositsd_1", label: { hu: "genetikai<br>kutatás", en: "genetic<br>research", hr: "genetsko<br>istraživanje" } },
			{ image: "./g/parositsd.png", rightAnswer: "step2", x: 1612, y: 691, labelStyle: "label_inner_parositsd_2", label: { hu: "infra<br>kamerás<br>felvétel", en: "infrared<br>camera<br>images", hr: "nimanje<br>infra<br>kamerom" } },
			{ image: "./g/parositsd.png", rightAnswer: "step5", x: 119, y: 671, labelStyle: "label_inner_parositsd_1", label: { hu: "denevér<br>gyűrűzés", en: "bat<br>ringing", hr: "prstenovanje<br>šišmiša" } },
			{ image: "./g/parositsd.png", rightAnswer: "step1", x: 1548, y: 386, labelStyle: "label_inner_parositsd_1", label: { hu: "ultrahang<br>detektor", en: "ultrasound<br>detector", hr: "ultrazvučni<br>detektor" } },
			{ image: "./g/parositsd.png", rightAnswer: "step3", x: 327, y: 453, labelStyle: "label_inner_parositsd_2", label: { hu: "rádió<br>telemetriás<br>kutatás", en: "radio<br>telemetry<br>research", hr: "radio-<br>telemetrijsko<br>istraživanje" } },
			{ image: "./g/parositsd.png", rightAnswer: "step6", x: 368, y: 780, labelStyle: "label_inner_parositsd_1", label: { hu: "hálózásos<br>befogás", en: "bat trapping using mist nets", hr: "hvatanje<br>mrežom" } },
			{ image: "./g/parositsd.png", rightAnswer: "step7", x: 76, y: 383, labelStyle: "label_inner_parositsd", label: { hu: "húrcsapda", en: "harp trap", hr: "hvatanje žicom" } },
		],
		labelStyle: "",
		time: 60,
		score: 2,
		background: "./g/bg_novenyek.jpg"
	} ],

	// ÁLTALÁNOS SZÖVEGEK -----------------------------------------------------------------------------------------------
	texts:
	{
		check_btn: { hu: "Helyes<br>válasz", en: "Check", hr: "Ispravan<br>odgovor" },
		next_btn: { hu: "Tovább", en: "Next", hr: "Dalje" },
		reset_btn: { hu: "Újra", en: "Reset", hr: "Reset" },
		again_btn: { hu: "Újra", en: "Again", hr: "Ponovo" },
		eval100: { hu: "Gratulálunk!<br>Akár munkatársunk is lehetnél.", en: "Congratulations, you have reached the maximum possible score!", hr: "Čestitamo! Mogao bi nam biti suradnik."},
		eval90: { hu: "Jó megfigyelő vagy,<br>de lehetne ez jobb is.", en: "Congratulations, you are a great observer!", hr: "Dobro zapažaš, ali bi moglo biti i bolje."},
		eval60: { hu: "Máshol jártak a gondolataid.<br>Megpróbálod újra?", en: "You must have listened to something else! Do you want to try again?", hr: "Misli su ti negdje drugdje. Hoćeš li pokušati ponovo?"}
	}
}
