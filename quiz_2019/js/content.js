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
			answers: [ "<h2>birds</h2>", "<h2>molluscs</h2>", "<br><h2>mammals</h2>" ]
		},
		hr: {
			question: "U koju skupinu životinja spadaju šišmiši?",
			answers: [ "<h2>ptice</h2>", "<h2>mekušci</h2>", "<br><h2>sisavci</h2>" ]
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
		background: "./g/bg_quiz.jpg"
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
			extra1: { text: "a.	faodúban vagy házakban lakik", x: 300, y: 550 },
			extra2: { text: "b.	a Föld egyik legkisebb denevére", x: 300, y: 600 },
			extra3: { text: "c.	testtömege 5 gramm", x: 300, y: 650 },
			extra4: { text: "d.	szúnyogokkal táplálkozik", x: 300, y: 700 },
			extra5: { text: "e.	Európában él", x: 300, y: 750 }
		},
		en: {
			question: "Which animal is described with the following five features?",
            question2: "Move the correct species name to the picture of the animal",
						extra1: { text: "a. it lives in tree holes or in houses", x: 300, y: 550 },
						extra2: { text: "b. it is one of the smallest bats living on Earth<br>   in Pécs Power Plant.", x: 300, y: 600 },
						extra3: { text: "c. its body weight is 5 grams", x: 300, y: 650 },
						extra4: { text: "d. it feeds on mosquitoes", x: 300, y: 700 },
						extra5: { text: "e. it lives in Europe", x: 300, y: 750 }
		},
		hr: {
			question: "Na koju životinju se odnosi ovih pet tvrdnji?",
            question2: "Povuci ispravni naziv na sliku životinje",
						extra1: { text: "a. živi u šupljinama drveća ili po kućama", x: 300, y: 550 },
						extra2: { text: "b. jedan je od najmanjih šišmiša", x: 300, y: 600 },
						extra3: { text: "c. teži 5 grama", x: 300, y: 650 },
						extra4: { text: "d. hrani se komarcima", x: 300, y: 700 },
						extra5: { text: "e. živi u Europi", x: 300, y: 750 }
		},
		destinations:
		[
			{ name: "step3", x: { hu: 1030, en: 1030, hr: 1030 }, y: { hu: 594, en: 594, hr: 594 }, width: 210, height: 210 }
		],
		answers:
		[
			{ image: "./g/barchoba_label.png", rightAnswer: "step1", x: 527, y: 297, labelStyle: "label_inner_barchoba", label: { hu: "tenor<br>törpedenevér", en: "Woodchips", hr: "patuljasti<br>šumski šišmiš" } },
			{ image: "./g/barchoba_label.png", rightAnswer: "step2", x: 855, y: 297, labelStyle: "label_inner_barchoba", label: { hu: "basszus<br>törpedenevér", en: "Corn", hr: "golemi<br>močvarni šišmiš" } },
			{ image: "./g/barchoba_label.png", rightAnswer: "step3", x: 1183, y: 297, labelStyle: "label_inner_barchoba", label: { hu: "szoprán<br>törpedenevér", en: "Straw", hr: "patuljasti<br>močvarni šišmiš" } },
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
						extra2: { text: "<h3>The proper scientific term for this is ............................", x: 600, y: 765 }
		},
		hr: {
			question: "Povuci ispravni izraz na prazno mjesto u rečenici",
            question2: "",
						extra1: { text: "<h3>Europski šišmiši od konca listopada do ožujka spavaju zimski san.", x: 600, y: 690 },
						extra2: { text: "<h3>Znanstveno se to naziva ............................", x: 600, y: 765 }
		},
		destinations:
		[
			{ name: "step2", x: { hu: 838, en: 1241, hr: 1241 }, y: { hu: 600, en: 518, hr: 518 }, width: 336, height: 336 }
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
			extra1: { text: "<h3>A júniusban megszületett kölykét a nõstény .....................  ", x: 604, y: 693 },
			extra2: { text: "<h3>szoptatja, ezután lesz önálló a fiatal denevér", x: 600, y: 768 }
		},
		en: {
			question: "Move the correct expression to the empty space in the following sentence",
            question2: "",
						extra1: { text: "<h3>Bat babies are born in June and are then nursed by the female .....................,", x: 604, y: 693 },
						extra2: { text: "<h3>only after which they are weaned and become independent.", x: 600, y: 788 }
		},
		hr: {
			question: "Povuci ispravni izraz na prazno mjesto u rečenici",
            question2: "",
						extra1: { text: "<h3>Svoje mladunče rođeno u lipnju ženka doji .....................,", x: 604, y: 693 },
						extra2: { text: "<h3>nakon toga mladi šišmiš postaje samostalan.", x: 600, y: 788 }
		},
		destinations:
		[
			{ name: "step1", x: { hu: 1170, en: 500 }, y: { hu: 528, en: 618 }, width: 336, height: 336 }
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
			extra2: { text: "<h3>vérszívó denevérfaj él.", x: 600, y: 771 }
		},
		en: {
			question: "Move the correct number to the empty space in the following sentence",
            question2: "",
						extra1: { text: "<h3>In Europe there are ........", x: 576, y: 686 },
						extra2: { text: "<h3>sanguivorous bat species.", x: 576, y: 776 }
		},
		hr: {
			question: "Povuci ispravni izraz na prazno mjesto u rečenici",
            question2: "",
						extra1: { text: "<h3>U Europi živi ........", x: 576, y: 686 },
						extra2: { text: "<h3>vrsta šišmiša krvopija.", x: 576, y: 776 }
		},
		destinations:
		[
			{ name: "step1", x: { hu: 630, en: 562 }, y: { hu: 525, en: 608 }, width: 336, height: 336 }
		],
		answers:
		[
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step1", x: 1227, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "1", en: "1", hr: "1" } },
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step2", x: 792, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "2", en: "2", hr: "2" } },
			{ image: "./g/egeszitsd_ki_valasz.png", rightAnswer: "step3", x: 356, y: 280, labelStyle: "label_inner_kiegeszites", label: { hu: "0", en: "0", hr: "0" } },
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
						extra2: { text: "<h3>is threatened by .........................", x: 557, y: 771 },
		},
		hr: {
			question: "povuci ispravni izraz na prazno mjesto u rečenici",
            question2: "",
						extra1: { text: "<h3>Opstanak šišmiša ugrožava .........................", x: 557, y: 686 },
		},
		destinations:
		[
			{ name: "step1", x: { hu: 890, en: 997 }, y: { hu: 518, en: 604 }, width: 336, height: 336 }
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
			question: "Illeszd össze az energiatermelés folyamatát!",
						question2: "Húzd a képeket a megfelelő helyre!",
			extra1: { text: "kazán", x: 357, y: 688 },
			extra2: { text: "elektromos áram", x: 1464, y: 403 },
			extra3: { text: "távfűtés", x: 1464, y: 702 }
		},
		en: {
			question: "Put the pictures into the correct places to show the process of energy generation!",
						question2: "Pull the pictures to the correct places!",
			extra1: { text: "Boiler", x: 357, y: 688 },
			extra2: { text: "Electricity", x: 1464, y: 403 },
			extra3: { text: "District Heating", x: 1464, y: 702 }
		},
		destinations:
		[
			{ name: "step1", x: { hu: 525, en: 525 }, y: { hu: 482, en: 482 }, width: 177, height: 255 },
			{ name: "step2", x: { hu: 834, en: 834 }, y: { hu: 328, en: 328 }, width: 177, height: 255 },
			{ name: "step3", x: { hu: 1053, en: 1053 }, y: { hu: 328, en: 328 }, width: 177, height: 255 },
			{ name: "step4", x: { hu: 1274, en: 1274 }, y: { hu: 329, en: 329 }, width: 177, height: 255 },
			{ name: "step5", x: { hu: 834, en: 834 }, y: { hu: 629, en: 629 }, width: 177, height: 255 },
			{ name: "step6", x: { hu: 1055, en: 1055 }, y: { hu: 629, en: 629 }, width: 177, height: 255 },
			{ name: "step7", x: { hu: 1275, en: 1275 }, y: { hu: 629, en: 629 }, width: 177, height: 255 }
		],
		answers:
		[
			{ image: "./g/kor_elektromos fogyaszto.png", rightAnswer: "step4", x: 235, y: 850, label: { hu: "eletromos fogyasztó", en: "Electric Device" } },
			{ image: "./g/kor_elektromoshalozat.png", rightAnswer: "step3", x: 450, y: 850, label: { hu: "eletromos hálózat", en: "Electricity" } },
			{ image: "./g/kor_generator.png", rightAnswer: "step2", x: 650, y: 850, label: { hu: "generátor", en: "Generator" } },
			{ image: "./g/kor_hocserelo.png", rightAnswer: "step5", x: 850, y: 850, label: { hu: "hőcserélő", en: "Heat Exchanger" } },
			{ image: "./g/kor_tavhofelhasznalo.png", rightAnswer: "step7", x: 1050, y: 850, label: { hu: "távhő felhasználó", en: "Heating" } },
			{ image: "./g/kor_tavhovezetek.png", rightAnswer: "step6", x: 1250, y: 850, label: { hu: "távhő vezeték", en: "Hot Water Pipe" } },
			{ image: "./g/kor_turbina.png", rightAnswer: "step1", x: 1450, y: 850, label: { hu: "turbina", en: "Turbine" } },
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
			question: "Felismered a tüzelőanyagokat?",
            question2: "Húzd a neveket a megfelelő képekre!",
			extra1: { text: "", x: 1270, y: 300 },
			extra2: { text: "", x: 359, y: 416 },
			extra3: { text: "", x: 358, y: 640 },
			extra4: { text: "", x: 358, y: 857 },
			extra5: { text: "", x: 774, y: 416 },
			extra6: { text: "", x: 774, y: 600 }
		},
		en: {
			question: "Do you recognize the types of fuel?",
            question2: "Pull the name to the right picture.",
						extra1: { text: "", x: 1272, y: 302 },
						extra2: { text: "", x: 361, y: 418 },
						extra3: { text: "", x: 360, y: 642 },
						extra4: { text: "", x: 360, y: 859 },
						extra5: { text: "", x: 776, y: 418 },
						extra6: { text: "", x: 776, y: 602 }
		},
		destinations:
		[
			{ name: "step1", x: { hu: 849, en: 849 }, y: { hu: 790, en: 790 }, width: 218, height: 218 },
			{ name: "step2", x: { hu: 604, en: 604 }, y: { hu: 655, en: 655 }, width: 218, height: 218 },
			{ name: "step3", x: { hu: 850, en: 850 }, y: { hu: 512, en: 512 }, width: 218, height: 218 },
			{ name: "step4", x: { hu: 1099, en: 1099 }, y: { hu: 665, en: 665 }, width: 218, height: 218 },
			{ name: "step5", x: { hu: 1099, en: 1099 }, y: { hu: 371, en: 371 }, width: 218, height: 218 },
			{ name: "step6", x: { hu: 604, en: 604 }, y: { hu: 365, en: 365 }, width: 218, height: 218 },
			{ name: "step7", x: { hu: 849, en: 849 }, y: { hu: 238, en: 238 }, width: 218, height: 218 }
		],
		answers:
		[
			{ image: "./g/parositsd.png", rightAnswer: "step1", x: 1354, y: 561, labelStyle: "label_inner_parositsd_1", label: { hu: "energia<br>nád", en: "energy<br>cane" } },
			{ image: "./g/parositsd.png", rightAnswer: "step2", x: 1612, y: 691, labelStyle: "label_inner_parositsd", label: { hu: "faapríték", en: "woodchips" } },
			{ image: "./g/parositsd.png", rightAnswer: "step3", x: 119, y: 671, labelStyle: "label_inner_parositsd_1", label: { hu: "kalászos<br>szalma", en: "cereal<br>straw" } },
			{ image: "./g/parositsd.png", rightAnswer: "step4", x: 1548, y: 386, labelStyle: "label_inner_parositsd", label: { hu: "kukorica", en: "corn" } },
			{ image: "./g/parositsd.png", rightAnswer: "step5", x: 327, y: 453, labelStyle: "label_inner_parositsd", label: { hu: "napraforgó", en: "sunflower" } },
			{ image: "./g/parositsd.png", rightAnswer: "step6", x: 368, y: 780, labelStyle: "label_inner_parositsd_1", label: { hu: "erdei<br>apríték", en: "forest<br>woodchips" } },
			{ image: "./g/parositsd.png", rightAnswer: "step7", x: 76, y: 383, labelStyle: "label_inner_parositsd", label: { hu: "repce", en: "rapeseed" } },
		],
		labelStyle: "",
		time: 60,
		score: 2,
		background: "./g/bg_novenyek.jpg"
	} ],

	// ÁLTALÁNOS SZÖVEGEK -----------------------------------------------------------------------------------------------
	texts:
	{
		check_btn: { hu: "helyes<br>válasz", en: "check" },
		next_btn: { hu: "tovább", en: "next" },
		reset_btn: { hu: "újra", en: "reset" },
		again_btn: { hu: "újra", en: "again" },
		eval100: { hu: "Gratulálunk!<br>Akár munkatársunk is lehetnél.", en: "Congratulations, you have reached the maximum possible score!"},
		eval90: { hu: "Jó megfigyelő vagy,<br>de lehetne ez jobb is.", en: "Congratulations, you are a great observer!"},
		eval60: { hu: "Máshol jártak a gondolataid.<br>Megpróbálod újra?", en: "You must have listened to something else! Do you want to try again?"}
	}
}
