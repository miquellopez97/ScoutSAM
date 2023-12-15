const teams = [
    { id: 61781, name: 'SQUADRA PIZZA VEDRUNA GRÀCIA A', color1: "#91DB73", color2: "#000000",teamPhoto: 'https://www.basquetvedruna.cat/uploads/club/46b647c86b8f151b64ff4e90d7954ac1ed5a0895.jpg', 
        videos:[
            {id: 0, title:'Scout', url: 'https://youtu.be/V2DBOa8mLL8'},
        ],
        players: [
            { id: 2, important: ['1/2 molt vertical. Molt bon 1x1 tambe pot tirar de 3', 'Prefereix tirar mitja distancia sobre bot o penetrar', 'Paparra tota pista']},
            { id: 1, important: ['1/2 veterano ( no ha jugat ultim partit)', 'Si te el dia et fa 20', 'Vertical 1x1 i pot tirar']},
            { id: 3, important: ['Experiencia i juga inteligent', 'Jugador complet ', 'Esta fallant, pero tira be']},
            { id: 7, important: ['Experiencia i juga inteligent', 'Jugador complet ', 'Esta fallant, pero tira be']},
            { id: 10, important: ['No es molt alt, ni esta fort pero fa feina', 'Podem atacarlo de fora', 'Entre rebots bassura i roll y pops acaba amb uns 10'],},
            { id: 15, important: ['Jugador molt fisic', 'Molta capacitat atletica, corre molt', '25 minuts si Alex Olive no juga'],}
        ],
        secondary: [3, 10, 15],
        tips: ['Defensar per correr (ADN Barna)', 'Llegir avantatges interiors i exteriors', 'Ser lequip mes regular (alts i baixos curts)'],
        pointsConsider: {
            def: ['Velocitat de la pilota', 'Correr a contraatac', 'Llegir avantatges'],
            atc: ['Si no fiquen, no pressionen', 'Verde tot ross/ Gris(flash) Dani', 'Possible rosa / Puño']
        },
        avg: [13]
    },
    { id: 60985, name: 'AEC COLLBLANC - ÍTACA', color1: "#2E3351", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/9n0TJ9sk258weu4P.jpg', 
        players: [
            { id: 5, important: [`Base molt rapid`,`No tira`,`Fa jugar a tothom`]},
            { id: 6, important: [`Juga de 2, odia el contacte`,`El shooter de l'equip`,`Pot tirar sobre bot i de step back`]},
            { id: 14, important: [`Juga de 2/3, fisic similar al 35`,`Molt actiu amb les mans defensan`,`Molt bon penetrador, te molts recursos`]},
            { id: 23, important: [`Tipic interior negre`,`No destaca`,`Compleix en rebots i defensa`]},
            { id: 29, important: [`Juga de 4, molt volum de tir de 3`,`No li agrada molt el contacte, al poste fa "Fadeaway"`,`Sempre farem verde, busca pop`]},
            { id: 35, important: [`Juga de 2/3, defensa a tota pista molt be`, `Tira molt be de mitja distancia pero tambe penetra`, `Tambe pot tirar de 3, va a ratxes`]}
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://youtu.be/uyB7wo9tKN4'}
        ],
        secondary: [5, 23, 29],
        tips: [`Defensar per correr (ADN Barna)`,`Tindre clar Blue o Verde`,`Controlar jugadors claus, tiradors no tiradors`],
        pointsConsider: {
            def: [`Defensar la linea exterior`,`Tindre clar conceptes de que tira i qui no`,`Tindre controlats 35, 14, 6 i 29`],
            atc: [`Jugar a corre, jugar alegre`,`Que la pilota no es freni`]
        },
        avg: [0]
    },
    { id: 61254, name: 'CN TARREGA A',color1: "#0072CA", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/gx4T0lYR3vNvFVXh.jpg',
        videos:[
            {id: 0, title:'Scout', url: 'https://www.youtube.com/watch?v=rHRCy6LWQTc'},
        ],
        players: [
            { id: 5, important: ['Decantar a esquerra, te bon tir de 3', 'No li agrada defensar', 'Si apretem i no li surten les coses, es pica']},
            { id: 14, important: ['Tambe es molt de dretes', 'Molt lent en defensa, no corre', 'Controlar accions de rebot defensiu nostre']},
            { id: 4, important: ['Tira poc, pero anota', 'Jugador molt fisic, explosiu al primer pas', 'Apreta molt en defensa sobretot linies de pase']},
            { id: 17, important: ['Molt fisic', 'Bon joc sense pilota, ajudes curtes', 'Controlar accions de rebot defensiu nostre']},
            { id: 7, important: ['Molt fisic', 'Bon joc sense pilota, ajudes curtes', 'Controlar accions de rebot defensiu nostre'],},
            { id: 15, important: ['Jugador molt fisic', 'Molta capacitat atletica, corre molt', '25 minuts si Alex Olive no juga'],}
        ],
        secondary: [4, 17, 11],
        tips: ['Defensar per correr (ADN Barna)', 'Press tota pista', 'Responsabilitat individual 1 c 1'],
        pointsConsider: {
            def: ['Defensa 1 c 1', 'Decantar esquerre jugadors indicats', 'Controlar rebot defensiu'],
            atc: ['Velocitat de la pilota', 'Correr a contraatac', 'Llegir avantatges']
        },
        avg: [12]
    },
    { id: 61887, name: 'CB ÀGUILES - PLASFOC', color1: "#ECE53F", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/AXkvrDjxrBTjBZW7.jpg', 
        videos:[
            {id: 0, title:'Scout', url: 'https://youtu.be/SO57HkxA8-I?si=ct9AuYWNOnulvu4n'},
        ],
        players: [
            { id: 5, important: ['Ex Leb Or, rol de vetera', 'No li agrada gens defensar', 'Buscara els seus tirs, sobretot en moments clau']},
            { id: 9, important: ['Igual que el seu germa', 'Jugador molt complert', 'Pot tirar pero prefereix penetrar']},
            { id: 8, important: ['Tipic pivot negre', `Viu de l'intimidació i d'agafar rebots`, 'No tira de 3']},
            { id: 12, important: ['Juga de 4/5, tipic "pages" fort', 'Jugador molt complert, busca molt les fintes', 'Pot tirar pero prefereix penetrar']},
            { id: 13, important: [`El shooter de l'equip`, `L'hem d'obligar a ficar pilota al terra`, `Busca el tir sobre bot`],},
            { id: 44, important: [`Tipica gorda, pero amb algo de velocitat`, 'Defensa el bloc amb push o back', 'Carrega el rebot de fora com un porc senglar'],}
        ],
        secondary: [5, 8, 12],
        tips: ['Defensar per correr (ADN Barna)', 'Llegir avantatges interiors i exteriors, sobretot si canvien', `Ser l'equip mes regular (alts i baixos curts)`],
        pointsConsider: {
            def: ['Velocitat al balanç, reaccio i velocitat', 'Atents el 1 c 2 al poste si cal', 'Bloqueig de rebot, els 5!'],
            atc: ['Corre es la primera opció', 'Llegir la ventatge segons back o canvi']
        },
        avg: [0]
    },
    { id: 62284, name: 'INTERSPORT - SAMÀ VILANOVA', color1: "#792729", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/Vv7cjeivNKthPj6o.jpeg', 
        videos:[
            {id: 0, title:'Scout', url: 'https://youtu.be/V2DBOa8mLL8'},
            {id: 1, title:'VS Salou 25/03/2023' ,url: 'https://www.youtube.com/watch?v=2nXIB3pk7cU'},
            {id: 2, title:'VS Prat 07/05/2023', url: 'https://www.youtube.com/watch?v=j47B5Ld9Gm4'},
        ],
        players: [
            { id: 10, important: ['Nomes tira, apretar el verde', 'Gordo, atacar 1 c 1', 'Puede jugar de 3-4-5']},
            { id: 5, important: ['Tir sobre bot i rapid al primer bot', 'Li agrada fer flopping', 'Apretar el canvi de ma per devant']},
            { id: 13, important: ['Pivot molt fisic i mobil ', 'Dur interiorment pot fer mal, donem fons!!', 'Treu moltes faltes, atens en ficar mans']},
            { id: 18, important: ['Penetrador', 'Tira be de 3', 'Generador ofensiu']}
        ],
        secondary: [10],
        tips: ['Defensa colectiva verde + 2c1 sense faltes', 'Controlar rebot', 'Pilota fluida i trobem avantatges'],
        pointsConsider: {
            def: ['Atac passa per 5 18 i 13', 'Balanç defensiu, molts atacs en menys de 8`', 'Focus al 2 c 1 al poste, anticipar-se!'],
            atc: ['Castigar els BI "persegueixen"', 'Intentar corre + granada', 'Atacar als interiors grans']
        },
        avg: [-33]
    },
    { id: 62732, name: 'C.B GRUP BARNA A', color1: "#E20613", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/J3ep8jvfPjFFzvxy.png',
        players: [
            { id: 3, important: ['3-and-D', 'Manos muy activas "Deflections"', 'Puede jugar de 3-4-5']},
            { id: 7, important: ['Base experimentado', 'Le gusta jugar a su ritmo', 'El tiro exterior no es su especialidad']},
            { id: 8, important: ['Penetrador puro', 'Baja la cabeza y arrasa con todo', 'Busca mucho el tiro forzado']},
            { id: 9, important: ['3-and-D puro', 'Tiene mucho rango de tiro', 'Puede jugar los 40 minutos']},
            { id: 13, important: ['Unico interior puro del equipo', '0 tire de 3', 'Imaginaos que es Dani pivot']},
            { id: 15, important: ['Penetrador puro', 'Todos los balones pasan por el si esta en pista', 'Si no esta bien, el equipo se unde']},
        ],
        secondary: [3, 7, 13],
        avg: "0",
        tips: ['Controlar nosaltres el ritme del partit', 'Castigar el joc interior', 'Cara a cara al 15 o fer box and one'],
        pointsConsider: {
            def: ['Zona despres a les ATO', 'Press segons moments del partit', 'Canvi al BD'],
            atc: ['Varies amenaces ofensives', 'En moments finals esta molt marcat que tirara', 'Molt rapits al contraatac']
        },
        videos:[
            {id: 0, title:'Sedis Vs Barna' ,url: 'https://youtu.be/J-nUohJzPWM'},
            {id: 1, title:'Barna Vs Escolapis' ,url: 'https://youtu.be/tnOQpnRDw1U'},
            {id: 2, title:'Barna Vs Escolapis' ,url: 'https://youtu.be/tnOQpnRDw1U'}
        ]
    },
    { id: 60746, name: 'C.B. PRAT', color1: "#19A1DA", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/I2SPExEujKkx9zzD.png', 
        players: [
            { id: 13, important: ['FICA NOMES DE 3 i de TL, MINIM ESPAI DE 3 el cascara.', 'Molt lent al balanç, 5 ha de correr molt la pista', `Sempre finta, aguanta el 1c1 amb braç aixecat`]},
            { id: 15, important: ['Enorme i gordo, correr molt be per lo gran que es', 'Defensant es vago, podem fer molt mal', 'Pot tirar, tot i que te bon 1x1 i pot postejar.']},
            { id: 7, important: ['Bona arrancada, posteja molt bé i fa mal a dins si posteja', 'Pivot Fisic, pot tirar de 3', 'Sera important pararlo, i saltar al 2 amb verde']},
            { id: 2, important: ['Intimida, bloqueja, juga 1x1 i correr el camp', '3/4 MOLT FISIC', 'No es bo tecnicament']},
            { id: 12, important: ['Juega de 1/2', 'Base pot tirar, genera molt, bon cap i corra la pista', 'Fica els seus 7/8 de normal pero genera moltissim']},
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://youtu.be/msY6fdDNZF8'}
        ],
        secondary: [2,12],
        tips: ['Defensar per correr (ADN SAM, trobar o generar avantatges arribant)', 'CONTROLAR REBOT sobretot petits', 'Tenir clar i executar scouting!', 'Caracter!!!'],
        pointsConsider: {
            def: ['Boronat push o canvi mai sol', 'Laterals blue centrals verde/push', 'Agressius 2c1 sota aro amb missmatch interior', '5 al rebot defensiu'],
            atc: ['correr i generar arribant', 'atacar oberts per generar i treure faltes als interiors', 'fluidesa de la pilota i joc sense pilota']
        },
        avg: [-6]
    },
    { id: 60972, name: 'BÀSQUET SANT BOI', color1: "#E45F0C", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/mMgPF0Eiki5hUdue.png', },
    { id: 61721, name: 'CB TARRAGONA B', color1: "#0A51A1", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/9fd6569c5c01ce09.jpg',
        players: [
            { id: 1, important: ['No te problema en fer un coast to coast si agafa rebot', 'Jove amb talent i clase', 'Es un base shooter, que no enganyi el percentatge']},
            { id: 3, important: ['Sempre esta a 45 grays per buscar el seu tir', ' ', ' ']},
            { id: 30, important: ['Pivot gran carrega el rebot ofensiu', 'Dur interiorment pot fer mal, sempre va a dretes', `Pateix al 1 c 1 des de 6'75, podem treure faltes`]},
            { id: 8, important: ['Sempre carrega el rebot ofensiu, es molt fisic', 'El 0/14 es d-agafar rebots ofc i tornar a tirar', 'Pot tirar de fora']},
            { id: 25, important: ['Jugador molt fisic', 'Pot tirar de fora', 'Molt rapid a camp sencer']}
        ],
        secondary: [8,25],
        tips: ['Controlar el rebot defensiu, Sama va generar 20 pts aixi', 'Compte amb les press i les zones', 'Pilota fluida i trobem avantatges'],
        pointsConsider: {
            def: ['Tothom va al rebot, IMPORTANT!', 'Balanç defensiu, molts atacs en menys de 8`', 'Focus al 2 c 1 al poste, anticipar-se!'],
            atc: ['Intentar corre + granada', 'Atents a mismatch amb el 30', 'Castigar la seva segona rotacio']
        },
        avg: [18]
    },
    { id: 62041, name: 'LLUÏSOS DE GRÀCIA A', color1: "#2B2E83", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/7cq1nU01cKlPql82.png',},
    { id: 61421, name: 'BC TECLA SALA', color1: "#EC555E", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/5AsR5hKTUyiMZ9Kk.png', 
        players: [
            { id: 1, important: ['Pressiona moolt i roba boles', 'Rapid a 1x1, DEIXEM DISTNACIA!!!', 'Juga a postejar bases i ho fa molt be.']},
            { id: 3, important: ['Pressiona molt i es molt rapid donem moltes distancia)', 'Prefereix anar a dretes.', `Deixem distancia (Tira pero penetrant es una bestia)`]},
            { id: 7, important: [`Tio com giannis fisicament, 0 control d'emocions`, 'No fica pero no limporta tirar, molt dur a rebot', 'Penetra molt be, DONEM DISTANCIA!!!']},
            { id: 8, important: ['Pot tirar...5/13 T2 i 12/25 de 2', 'Exterior alt, atents a rebot', 'Bon penetrador i intens en defensa']},
            { id: 12, important: ['"12(4) i 33(5)" Interiors de rol', 'Postes desquena i rebots', 'Res de laltre mon pero els hem de parar.']},
            { id: 14, important: ['Fara mal al rebot, a rolls, penetracions i condicionara tirs', 'Penetra molt dur i no tira, defensem a 1,5 m','MOLT FISIC, MOLT REBOT controlar rebot defensiu!!!']},
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://www.youtube.com/watch?v=Aw6-lcSJC68'}
        ],
        secondary: [8,12, 14],
        tips: ['Si no ens fiquen, no ens poden pressionar.', 'Defensem amb disntancia i agafem el rebot defensiu', 'En atac, tenim missmatchos i podem correr'],
        pointsConsider: {
            def: ['TANCARNOS DINS + AGAFAR REBOT DEFENSIU', 'BD: Plan A: Push + tercers. Plan B: verde o flash', 'Zona: Puño + Rosa + enganyar primeres possessions amb 2-3'],
            atc: ['Passar press amb fintes!!!! + passe enrere a sacador (2 es queda)', 'Missmatch de mostes i datac des de fora + si arribem amb caos i sense avantatge, juguem llegandos', 'Segona part van a defenses agressives (llegando sense esquina)']
        },
        avg: [0]
    },
    { id: 61299, name: 'CB CASTELLBISBAL A', color1: "#4D2770", color2: "#F1EE37", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/c31e6a175665dc07.jpg',
        players: [
            { id: 5, important: [`Aler, molt alt i fort`, 'Li agrada penetrar i tirar de mitja distancia', `Atents al balanç, li agrada corre`]},
            { id: 17, important: ['Ala pivot, gordo, el podem atacar', `Tira el mateix de 3 que de 2`, 'El podem apretar en defensa']},
            { id: 8, important: [`Juga de base i escolta`, 'Tira poc pero anota', `Altre base veterano, genera pero podem atacarlo`]},
            { id: 27, important: ['Juga de 5, tirador no anotador', 'Els tirs lliures si que fica', 'El podem atacar des de fora']},
            { id: 10, important: ['Un altre interior', `No fica tirs lliures`, `Fa be la seva feina, 7 pts de mitja`]},
            { id: 7, important: ['Escolta, molt rapid, pero no tira', 'Donar molta distancia', `Atents al balanç, li agrada corre`]}
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://youtu.be/7WPt5eWL0Z4'}
        ],
        secondary: [27, 10, 7],
        tips: ['No tiran molt de 3, pero si de mitja distancia', 'No hi ha una estrella, tots sumen', 'Tenen clar el que han de fer i peguen molt', 'Encara que tinguin gent molt gran, els hi agrada corre'],
        pointsConsider: {
            def: ['Activitat en defensa, apretem als grans', 'Controlar balanç, els hi agrada corre', 'Controlar rebot defensiu, van els 5 al rebot'],
            atc: ['Tindre clar aqui podem atacar amb mes facilitat', 'Veure opcions de missmatch que podem castigar', 'Corre es la primera opcio (ADN)']
        },
        avg: [0] 
    },
    { id: 61931, name: 'TRIOMF - UB MIR', color1: "#77A6E5", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/QZX7sPueYyi2yucA.png', 
        players: [
            { id: 34, important: ['Exterior pot tirar y pentrar, molt bon primer bot', 'Molt rapid al balanç, corre molt', `Li estan constant els tirs lliures`]},
            { id: 8, important: ['Pivot molt gran i gordo, si esta sol tira', `Qui l'ataqui a de correr tota l'estona i atacar`, 'Aguantar el contacte i no creure fintes']},
            { id: 89, important: ['Interior 4/5 es gran, no fica tirs lliures', 'Ens hem de tencar posteja i reparteix joc', `No va jugar l'ultim partit`]},
            { id: 7, important: ['Nomes porta un partit jugat, 3/9 en triples!', 'Es un 4/5 poc mobil, estil boronat', 'Prefereix jugar per fora i no postejar']},
            { id: 25, important: ['Altre interior gran', 'El podem atacar des de fora', `Atents al rebot`]},
            { id: 2, important: ['Exterior gran, fisic similar a casas', 'Penetra i pot tirar de mitja distancia', `El podem atacar`]}
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://youtu.be/uyB7wo9tKN4'}
        ],
        secondary: [2, 7,89],
        tips: ['Juguen molt al joc interior i tirs de mitja distancia', `CONTROLAR REBOT!!! Viuen d'aixo`, 'Baixar al balanç, els petits corren molt', 'Partit estil Tarrega, atacar des de fora i controlar rebot'],
        pointsConsider: {
            def: ['Defensa al poste baix Ross->Per devant', 'Controlar el joc interior i les pilotes interiors', 'Controlar el balanç defensiu', 'Controlar rebot ofensiu'],
            atc: ['Detectar missmatch amb jugadors grans', 'Atacar al gordo des de fora', 'Fluidesa de la pilota i joc sense pilota']
        },
        avg: [0]
    },
    { id: 60703, name: 'C.E SANT NICOLAU A', color1: "#B52735", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/QMwEBbIfGNt6R8l1.jpg',
        players: [
            { id: 0, important: [`El shooter de l'equip`, 'De tirs de 2, porta 3/17, que boti!', `El podem buscar al poste`]},
            { id: 5, important: ['Si te el dia enchufa', `Bon penetrador i defensor intens`, 'El podem buscar al poste']},
            { id: 9, important: [`L'hem de buscar al poste`, 'Pot tirar de 3', `41 TL el que mes i amb un 60%`]},
            { id: 17, important: ['Paparra maxima!!!', 'Reparteix joc i bon penetrador', 'No fica TL']},
            { id: 44, important: ['Pivot petit, no gaire movil, tampoc tira', `L'hem d'atacar`, `Jugar llegando sin esquina (Defensa back)`]},
            { id: 98, important: ['No tira de 3, ataca de fora i busca el poste, AGUANTAR!!', 'Defensen el BD amb canvi, jugar amb 4 + poste', `Si rep al poste alt, donar espai, juga de poste passador`]}
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://www.youtube.com/watch?v=aVXAbQ8S9r4'}
        ],
        secondary: [0, 17, 44],
        tips: ['Defensar per correr (ADN Barna)', 'Llegir aventatges interiors', 'Molta activitat defensiva als canvis'],
        pointsConsider: {
            def: ['Activitat en defensa, sobretot al canvi', 'Tindre controlats els tiradors'],
            atc: ['Tindre clar aqui es pot postejar', 'Atacar al pivot desde fora si hi ha opcio', 'Corre es la primera opcio (ADN)']
        },
        avg: [0]
    }
];

export default teams;