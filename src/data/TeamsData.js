const teams = [
    { id: 61781, name: 'SQUADRA PIZZA VEDRUNA GRÀCIA A', color1: "#91DB73", color2: "#000000",teamPhoto: 'https://www.basquetvedruna.cat/uploads/club/46b647c86b8f151b64ff4e90d7954ac1ed5a0895.jpg', },
    { id: 60985, name: 'AEC COLLBLANC - ÍTACA', color1: "#2E3351", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/9n0TJ9sk258weu4P.jpg', },
    { id: 61254, name: 'CN TARREGA A',color1: "#0072CA", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/gx4T0lYR3vNvFVXh.jpg', },
    { id: 61887, name: 'CB ÀGUILES - PLASFOC', color1: "#ECE53F", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/AXkvrDjxrBTjBZW7.jpg', },
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
        tips: ['Defensar per correr (ADN SAM, trobar o generar avantatges arribant)', 'CONTROLAR REBOT sobretot petits', 'Tenir clar i executar scouting!'],
        pointsConsider: {
            def: ['Boronat push o canvi mai sol', 'Laterals blue centrals verde/push', 'Agressius 2c1 sota aro amb missmatch interior', '5 al rebot defensiu'],
            atc: ['correr i generar arribant', 'atacar oberts per generar i treure faltes als interiors', 'fluidesa de la pilota i joc sense pilota']
        },
        avg: [0]},
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
    { id: 61421, name: 'BC TECLA SALA', color1: "#EC555E", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/5AsR5hKTUyiMZ9Kk.png', },
    { id: 61299, name: 'CB CASTELLBISBAL A', color1: "#4D2770", color2: "#F1EE37", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/c31e6a175665dc07.jpg', },
    { id: 61931, name: 'TRIOMF - UB MIR', color1: "#77A6E5", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/QZX7sPueYyi2yucA.png', },
    { id: 60703, name: 'C.E SANT NICOLAU A', color1: "#B52735", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/QMwEBbIfGNt6R8l1.jpg', }
];

export default teams;