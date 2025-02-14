const teams = [
    { id: 69468, name: 'TRIOMF - UB MIR', color1: "#77A6E5", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/QZX7sPueYyi2yucA.png', 
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
    { id: 69726, name: 'REMM GUITART - BÀSQUET RIBES', color1: "#12348A", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/originals/Zk9NVVJG5NQp4x1W.png',
        players: [
            { id: 13, important: ['Principal jugador ofensivo', '1c1 en el poste, tiro y 1c1 desde fuera', `Se jugara los ataques atascados`]},
            { id: 7, important: ['Juega al poste', `Tira mucho de 3p en catch&shoot`]},
            { id: 23, important: ['Tirador', 'Genera hacia el aro con su amenaza de tiro']},
            { id: 10, important: ['Principal jugador ofensivo', '1c1 en el poste, tiro y 1c1 desde fuera', `Se jugara los ataques atascados`]},
            { id: 22, important: ['Pivot fisico']},
            { id: 1, important: ['Base', `Se le puede apretar la subida`, `Realentizara mucho su juego`]},
        ],
        videos:[
            {id: 0, title:'Scout' ,url: ''}
        ],
        secondary: [13, 22, 1],
        tips: [
            `Limitar triples liberados`,
            `Pelea en el rebote`,
            `Castigar defensa de sus interiores`
        ],
        pointsConsider: {
            def: [`Defender triple de tiradores`, `Perseguir en indirectos con #10 #23`, `Red en BD con interiores`],
            atc: [`Atacar interiores en los cambios`, `Movimiento rápido de balón para triangular`, `Atacar en movimiento con pocos botes`]
        },
        avg: [1],
        deletePlayers: [],
    }
];

export default teams;