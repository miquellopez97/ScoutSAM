const teams = [
    { id: 61781, name: 'SQUADRA PIZZA VEDRUNA GRÀCIA A', color1: "#91DB73", color2: "#000000",teamPhoto: 'https://www.basquetvedruna.cat/uploads/club/46b647c86b8f151b64ff4e90d7954ac1ed5a0895.jpg', 
        videos:[
            {id: 0, title:'Scout', url: 'https://youtu.be/pibzueb3e24'},
        ],
        players: [
            { id: 1, important: ['Base, nomes tira', 'Si penetra, doble mes que finalitza', 'Atents en ajudar sent tirador']},
            { id: 15, important: ['Escolta, corre el que no esta escrit', `Es molt bo penetrant en carrera`, `No tira de 3, l'hem de flotar`]},
            { id: 8, important: ['Base, tira de mitja i penetra', 'Treu moltes faltes, atents fintes', 'Sol cambiar per sota + davant per trencar']},
            { id: 14, important: ['Aler, jugador dur', 'Pot penetrar i tirar', 'Es fisic i rapid']},
            { id: 11, important: [`Pivot, L'hem d'atacar!!!`, 'Atents al rebot', 'Pot tirar de mitja'],},
            { id: 12, important: ['Aler, es desquicia molt facil', 'Buscara jugar molt de 1c1', 'Pot arribar a tirar, no es el seu fort'],}
        ],
        secondary: [1, 11, 14],
        tips: ['Defensar per correr (ADN Barna)', 'Llegir avantatges interiors i exteriors', 'Ser lequip mes regular (alts i baixos curts)'],
        pointsConsider: {
            atc: ['Velocitat de la pilota', 'Correr a contraatac', 'Atents a posibles zones rivals'],
            def: ['Si no fiquen, no pressionen', `Verde tot i defensa d'ajudes`]
        },
        deletePlayers: ['fc245b60-98d0-11e9-a2a5-0216824770c2'],
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
            {id: 0, title:'Scout', url: 'https://www.youtube.com/watch?v=-jp07bGM5eg'},
        ],
        players: [
            { id: 5, important: ['Base, molt perillos al 1c1 sempre a dretes', 'Pot tirar de 3', 'Lila i de segons']},
            { id: 14, important: ['Pivot, molt gran li agrada jugar a dins', `No tira de 3 i es lent, l'hem d'atacar`, 'Anarlo a buscar rapid i defensa 3/4']},
            { id: 4, important: ['Base,Tira poc, pero anota', 'Jugador molt fisic, explosiu al primer pas', 'Apreta molt en defensa sobretot linies de pase']},
            { id: 17, important: ['Aler, Molt fisic', 'Bon joc sense pilota, ajudes curtes', 'Controlar accions de rebot defensiu nostre']},
            { id: 18, important: ['Aler, Molt fisic', 'Bon joc sense pilota, ajudes curtes', 'Controlar accions de rebot defensiu nostre'],},
            { id: 8, important: ['Escolta-Base,Jugador molt fisic', 'Molta capacitat atletica, corre molt', '25 minuts si Alex Olive no juga'],},
            { id: 44, important: ['Base, nomes dos partits', 'Esta molt fort, pero esta boig', 'Temporada anterior 10pts de mitja'],}
        ],
        secondary: [18, 17, 8, 44],
        tips: ['Venen de guanyar a lluisos de 10', 'Es la primera victoria en 5 partits'],
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
            { id: 15, important: [`Hem d'estar asobre 32% pero rapid al primer bot`, 'Aguantarlo dur fins abaix', 'Tipic veterano, treu molts TL, parla amb arbits, etc...']},
            { id: 9, important: ['Igual que el seu germa', 'Jugador molt complert', 'Pot tirar pero prefereix penetrar']},
            { id: 8, important: ['Tipic pivot negre', `Viu de l'intimidació i d'agafar rebots`, 'No tira de 3, ajudem']},
            { id: 12, important: [`Juga de 3, tipic "pages" fort, porta 2 sense jugar`, 'Jugador molt complert, busca molt les fintes', 'Pot tirar pero prefereix penetrar']},
            { id: 13, important: [`El shooter de l'equip, 32% 3pts`, `L'hem d'obligar a ficar pilota al terra`, `Amb ell ajudem molt poc`],},
            { id: 44, important: [`Tipica gorda, pero amb algo de velocitat y no tira`, 'Farem verde, ens hem de pegar a muerte', 'Carrega el rebot de fora com un porc senglar'],}
        ],
        secondary: [12, 8],
        tips: ['Defensar per correr (ADN Barna)', 'Llegir avantatges interiors i exteriors, sobretot si canvien', `Ser l'equip mes regular (alts i baixos curts)`],
        pointsConsider: {
            def: ['Velocitat al balanç, reaccio i velocitat', 'Atents defensa per devant al poste, farem verde', 'Bloqueig de rebot, els 5!'],
            atc: ['Corre es la primera opció', 'Llegir la ventatge segons back o canvi']
        },
        avg: [14]
    },
    { id: 62284, name: 'INTERSPORT - SAMÀ VILANOVA', color1: "#792729", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/Vv7cjeivNKthPj6o.jpeg', 
        videos:[
            {id: 0, title:'Scout', url: 'https://youtu.be/moqA4IKxpmU?si=PKtlu7PkV7lMYXch'}
        ],
        players: [
            { id: 10, important: ['Jugador clau, molt fisic, tira be de 3', 'Agafa molts rebots i pot castigar al poste', `Hem d'aconseguir que pentri en comptes de tirar`]},
            { id: 5, important: ['Evitar que rebi facil, corre molt', `Tira molt, a l'ultim nomes va fer un 2/2`, 'Molt bon penetrador, treu un munt de faltes']},
            { id: 23, important: ['Pivot, molt fisic i molt rebot ofensiu', 'Jugador molt alt i mobil', `L'hem de frenar i que no agafi rebots`]},
            { id: 18, important: ['Molt fisic i penetrador', 'Pot tiar de fora, pero no es especialista', 'Mou be la bola i penetra']},
            { id: 11, important: ['Tirador veterano', 'Atents! ficara en moments clau', `Si esta a pista l'hem d'atacar`]}
        ],
        secondary: [11, 18],
        tips: ['Defensa colectiva verde + 2c1 al poste pel fons', 'Controlar rebot defensiu', 'Pilota fluida i trobem avantatges LIBRE'],
        pointsConsider: {
            def: ['Atac passa per 5 10 i 23', 'Balanç defensiu, molts atacs en menys de 8`', 'Frenar el contraatac del numero 5, que no rebi facil'],
            atc: ['Castigar els missmatch', 'Intentar corre ADN BARNA', 'Atacar als jugadors grans i veteranos']
        },
        deletePlayers: ["6edf1268-bfd2-496f-8466-10e56d95356e"],
        avg: []
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
            { id: 12, important: ['Base, bon tirador, tirador de ratxes', `Bon generador de l'equip, es el base director`]},
            { id: 16, important: ['Base anotador', 'Bon tirador, rapid i corre molt, jugador electric', 'Tio molt baixet, com 0 de lluisos o 10 tarragona']},
            { id: 15, important: ['Aler, juga BD i es molt gros', 'Tira sobre bot i en estatic', 'Tambe li agrada fintar dur fins a sota']},
            { id: 2, important: ['Pivot negre, tipic pivot', 'No tira de fora, nomes acaba aprop de cistella', 'Atents al rebot i finalitzacions aprop']},
            { id: 13, important: ['Boronat, no es pensa els tirs, cada tir que te el tira', 'Hi ha partits que fica molt de fora', 'Atents al Box to Box']},
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://youtu.be/h9ghgQ-qSGo'}
        ],
        secondary: [2,12],
        tips: ['Defensar per correr (ADN SAM, trobar o generar avantatges arribant)', 'CONTROLAR REBOT sobretot petits', 'Tenir clar i executar scouting!', 'Caracter!!!'],
        pointsConsider: {
            def: ['Defensa del BD i del BI', 'Controlar rebot, els 5!'],
            atc: ['Correr i generar arribant', 'Opcio de jugar Mano']
        },
        avg: [-6]
    },
    { id: 60972, name: 'BÀSQUET SANT BOI', color1: "#E45F0C", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/mMgPF0Eiki5hUdue.png', 
        players: [
            { id: 8, important: [`Base, no es molt anotador`,`Juga molt i defensa intens`,`Genera i pasa, pot acabar amb 8/9 assist`]},
            { id: 15, important: [`Pivot, força molts tirs`,`Defensem per devant i bloquejem rebot`,`L'hem d'atacar!!! Corre molt, es molt tosco`]},
            { id: 10, important: [`Aler, entra molt dur cap a cistella`,`Pot tirar`,`Esta en bon estat de forma, es jugador estrella`]},
            { id: 9, important: [`Alapivot/Pivot, jugador gran i amb tir`,`Defensem per devant i bloquejem rebot`,`Atents al pop!!!`]},
            { id: 4, important: [`2-3, l'unic shooter`,`Surt a tirar!!!`,`Obliguem polota al terra`]},
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://www.youtube.com/watch?v=7p6RvgjrAPE'}
        ],
        secondary: [8, 4],
        tips: [`Tant Mauro #10 com Bort poden tirar #9`],
        pointsConsider: {
            def: [`Control del rebot i defensa per devant a Unai #15`, `No deixar pensar al Gerard #8`],
            atc: [`Atents al missmatch`]
        },
        deletePlayers: [`fbaee22d-98d0-11e9-a2a5-0216824770c2`],
        avg: [0]
    },
    { id: 61721, name: 'CB TARRAGONA B', color1: "#0A51A1", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/9fd6569c5c01ce09.jpg',
        players: [
            { id: 10, important: ['Base, molt baixet tirador', `Li costa penetrar per l'alçada, tira de mitja`, `Als BD perseguim amb LILA!`]},
            { id: 1, important: ['Base, era el bo pero ha perdut protagonisme', 'Treu faltes, es penetrador pero pot tirar', 'Si entra a partit ens pot fer mal']},
            { id: 6, important: ['Pivot gran, molt gran, REBOT', 'Defensem LILA!', `Si esta a pista juguen per ell, pilota dins amb talls,etc...`, `Te bon tir de mitja`]},
            { id: 9, important: ['Alapivot, tambe juga de 5', 'Juga sempre pop, finta pero pot tirar si esta sol', 'Fem VERDE!']},
            { id: 8, important: ['Aler, fisic', 'No tira', 'Li agrada postejar i penetra be']}
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://www.youtube.com/watch?v=zFFDrB50F5w'}
        ],
        secondary: [9, 10],
        tips: ['Controlar el rebot defensiu, Pivot i Aler molt gran', 'Tindre clar si es Lila o Verde', 'Pilota fluida i trobem avantatges'],
        pointsConsider: {
            def: ['Tothom va al rebot, IMPORTANT!', 'Balanç defensiu, molts atacs en menys de 8`', ' '],
            atc: ['Intentar corre + granada', 'Pilota fluida i trobem avantatges', ' ']
        },
        deletePlayers: ['fffaea3f-98d0-11e9-a2a5-0216824770c2'],
        avg: [18]
    },
    { id: 62041, name: 'LLUÏSOS DE GRÀCIA A', color1: "#2B2E83", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/7cq1nU01cKlPql82.png',
        videos:[
            {id: 0, title:'Scout', url: 'https://www.youtube.com/watch?v=i3j4W1Bq550'},
        ],
        players: [
            { id: 14, important: ['Pivot, Millor interior pasador', 'Creuat fa moltes faltes, ataqueulo i correu', 'Atents al rebot']},
            { id: 2, important: ['Escolta, Base ex EBA 1,95m', 'Pot tirar i penetrar', 'Es creu facil, molt ego']},
            { id: 4, important: ['Base electric', 'No li entren els tirs', 'Molt  bon penetrador']},
            { id: 7, important: ['Pivot calvo gran, molta experiencia', 'Bon passador i bon rebot', `L'hem de corre i atacar-lo`]},
            { id: 0, important: ['Base Shooter i electric', 'Anotador', 'Nomes porta un partit']},
            { id: 15, important: ['Base principal', 'Corre molt be al contraatac', 'Bon tirador i penetrador']},
            { id: 25, important: ['Aler tipu Pau', 'Molt fisic per ser un aler', 'Corre molt be el contraatac i carrega rebot']},
            { id: 30, important: ['Pivot mes gran, pseudo movil', 'Genera i agafa rebot', 'No te esquerra', `L'hem d'atacar`]}
        ],
        secondary: [14, 30, 0, 2, 7],
        tips: ['Defensar per correr (ADN Barna)', 'Tindre controlat els jugadors importants, tenen molts!', 'Controlar interiors, sobretot rebot'],
        pointsConsider: {
            def: ['Controlar tiradors', 'Bases molt rapid i electrics', 'Controlar els postes, sobretot a Rosa'],
            atc: ['Velocitat de la pilota', 'Atacar als grans des de fora', 'Llegir avantatges']
        },
        deletePlayers: ["6edf1268-bfd2-496f-8466-10e56d95356e"],
        avg: []
    },
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
            { id: 17, important: ['Ala pivot, gordo, el podem atacar', `Totes les trans son trans on rep al mitg, podem apretar`, `Shooter de l'equip`]},
            { id: 8, important: [`Base, veterano pensante, pot tirar de 3`, 'Ell genera tot el joc', `Tira sobre pase, no sobre bot`]},
            { id: 27, important: ['Juga de 4 i 5, es molt dur i agafa rebots', 'Es casca molts triples, 22%. COntra nosaltres 2/6', 'Sempre finta i penetra']},
            { id: 7, important: ['Base, molt rapid, pero no tira', 'Donar molta distancia', `Atents al balanç, li agrada corre`]},
            { id: 25, important: ['Aler, nomes anota de contra atac', 'No tira!!!!', `EL que estigui amb ell flota i balanç`]}
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://youtu.be/MuhSP7pCIkY'}
        ],
        secondary: [25, 17],
        tips: ['Si estan a pista 25, 7, 10, podem ajudar molt, no tiran re de re'],
        pointsConsider: {
            def: ['Activitat en defensa, apretem als grans', 'Controlar balanç, els hi agrada corre', 'Controlar rebot defensiu, van els 5 al rebot'],
            atc: ['Tindre clar aqui podem atacar amb mes facilitat', 'Veure opcions de missmatch que podem castigar', 'Corre es la primera opcio (ADN)']
        },
        avg: [-15] 
    },
    { id: 61931, name: 'TRIOMF - UB MIR', color1: "#77A6E5", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/QZX7sPueYyi2yucA.png', 
        players: [
            { id: 34, important: ['Exterior pot tirar y pentrar, molt bon primer bot', 'Molt rapid al balanç, corre molt', `Guanyador concurs de mates de copa 2019`]},
            { id: 8, important: ['Pivot molt gran i gordo, si esta sol tira', `Qui l'ataqui a de correr tota l'estona i atacar`, 'Aguantar el contacte i no creure fintes']},
            { id: 14, important: ['Pivot, ja el coneixem tots', 'Fisic per descordinat, intimida penetracions', `Sera el seu tercer partit i esta motivat`]},
            { id: 0, important: [`Base, estaba lesionat, no va jugar a l'anada`, 'No te grans percentatges de tir', 'Penetra molt be']},
            { id: 25, important: ['Aler - AlaPivot, tirar no es el seu fort', 'El podem atacar des de fora', `Atents al rebot`]},
            { id: 11, important: [`Exterior, a l'anada el vem flotar i va funcionar`, 'Ara esta en ratxa i anota de fora', `Ve de ficar 17 vs Lluisos i 16 vs Sant Boi`]}
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://youtu.be/Qz0HLrYZbTA'}
        ],
        secondary: [0, 11, 14],
        tips: ['Juguen molt al joc interior i tirs de mitja distancia', `CONTROLAR REBOT!!! Viuen d'aixo`, 'Baixar al balanç, els petits corren molt',`Hi ha 3-4 jugadors grans molt fisics, si hi ha canvi hem d'atacar`],
        pointsConsider: {
            def: ['Controlar el joc interior i les pilotes interiors', 'Controlar el balanç defensiu', 'Controlar rebot ofensiu'],
            atc: ['Detectar missmatch amb jugadors grans', 'Atacar al gordo des de fora', 'Fluidesa de la pilota i joc sense pilota']
        },
        avg: [13],
        deletePlayers: ["fbb38a52-98d0-11e9-a2a5-0216824770c2"],
    },
    { id: 60703, name: 'C.E SANT NICOLAU A', color1: "#B52735", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/QMwEBbIfGNt6R8l1.jpg',
        players: [
            { id: 0, important: [`El shooter de l'equip`, 'Baixa el percentatge si fica pilota al terra', `El podem buscar al poste`]},
            { id: 5, important: ['Si te el dia enchufa', `Bon penetrador i defensor intens`, 'El podem buscar al poste']},
            { id: 9, important: [`L'hem de buscar al poste`, 'Pot tirar de 3', `41 TL el que mes i amb un 60%`]},
            { id: 17, important: ['Paparra maxima!!!', 'Reparteix joc i bon penetrador', 'Li agrada defensar tota la pista']},
            { id: 44, important: ['Pivot petit, no gaire movil, tampoc tira', `L'hem d'atacar`, `Jugar llegando sin esquina (Defensa back)`]},
            { id: 11, important: ['AlaPivot / Pivot, Rebot ofensiu', `No tira de 3`, `Rapid a contraatac`]},
            { id: 3, important: ['Escola, nomes surt a tirar', '0 TL en 8 partits', `El shooter del equip, ha arribat a tirar 12 en un partit`]}
        ],
        videos:[
            {id: 0, title:'Scout' ,url: 'https://www.youtube.com/watch?v=aVXAbQ8S9r4'}
        ],
        secondary: [0, 17, 44, 3],
        tips: ['Defensar per correr (ADN Barna)', 'Llegir aventatges interiors', `Puntuació per quarts a l'anada`,`P1(14-16)`,`P2(20-21)`,`P3(32-15)`,`P4(16-23)`],
        pointsConsider: {
            def: ['Activitat en defensa, sobretot al canvi', 'Tindre controlats els tiradors'],
            atc: ['Tindre clar aqui es pot postejar', 'Atacar al pivot desde fora si hi ha opcio', 'Corre es la primera opcio (ADN)']
        },
        avg: [7],
        deletePlayers: ["fbba9d08-98d0-11e9-a2a5-0216824770c2"],
    }
];

export default teams;