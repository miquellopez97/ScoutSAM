const teams = [
    { id: 53273, name: 'SQUADRA PIZZA VEDRUNA GRÀCIA A', color1: "#91DB73", color2: "#000000",teamPhoto: 'https://www.basquetvedruna.cat/uploads/club/46b647c86b8f151b64ff4e90d7954ac1ed5a0895.jpg', },
    { id: 54858, name: 'AEC COLLBLANC - ÍTACA', color1: "#2E3351", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/9n0TJ9sk258weu4P.jpg', },
    { id: 55716, name: 'CN TARREGA A',color1: "#0072CA", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/gx4T0lYR3vNvFVXh.jpg', },
    { id: 55671, name: 'CB ÀGUILES - PLASFOC', color1: "#ECE53F", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/AXkvrDjxrBTjBZW7.jpg', },
    { id: 54305, name: 'INTERSPORT - SAMÀ VILANOVA SAM', color1: "#792729", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/Vv7cjeivNKthPj6o.jpeg', },
    { id: 55164, name: 'C.B GRUP BARNA A', color1: "#E20613", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/J3ep8jvfPjFFzvxy.png',
        players: [
            { id: 0, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_0b268bcf0-83ed-43ae-847a-8e168efcbcde.jpg' },
            { id: 1, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_0e4569e5d-4d38-49cc-aab8-a65644033dbf.png' },
            { id: 3, 
                photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_0e3a98edb-6864-40fb-a449-ccdbc54b4b07.jpg',
                important: ['3-and-D', 'Manos muy activas "Deflections"', 'Puede jugar de 3-4-5']},
            { id: 7, 
                photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_076dbcfb8-ae3b-4135-bb00-379e5850de40.jpg',
                important: ['Base experimentado', 'Le gusta jugar a su ritmo', 'El tiro exterior no es su especialidad']},
            { id: 8, 
                photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_06df4233e-96fd-43e6-8b9f-ecf89929066f.png',
                important: ['Penetrador puro', 'Baja la cabeza y arrasa con todo', 'Busca mucho el tiro forzado']},
            { id: 9,
                photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_09e2a8173-0475-4a89-8d52-9e8d71e27764.jpg',
                important: ['3-and-D puro', 'Tiene mucho rango de tiro', 'Puede jugar los 40 minutos']},
            { id: 10, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_096ba3b6d-2f4c-4cf5-849b-80e588186191.jpg'},
            { id: 11, 
                photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_0d15b9783-85ea-49d7-accf-6cafd547ccea.jpg',
                important: ['Unico interior puro del equipo', '0 tire de 3', 'Muy buen pasador']},
            { id: 13, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_041f1e16a-fa32-4368-9648-a9d598626b3c.jpg'},
            { id: 15, 
                photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_0f9b7de0d-9749-4867-83e9-435a0b80c67b.png', 
                important: ['Penetrador puro', 'Todos los balones pasan por el si esta en pista', 'Si no esta bien, el equipo se unde']},
            { id: 22, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_032ad3454-2ce0-4749-bb07-a5cef54b7a14.png'}
        ],
        secondary: [3, 7, 11],
        avg: "0",
        tips: ['Controlar nosaltres el ritme del partit', 'Castigar el joc interior', 'Cara a cara al 15'],
        pointsConsider: {
            def: ['Zona despres a les ATO', 'Press segons moments del partit', 'Canvi al BD'],
            atc: ['Varies amenaces ofensives', 'En moments finals esta molt marcat que tirara', 'Molt rapits al contraatac']
        },
        videos:[
            {id: 0, title:'Sedis Vs Barna (Senior A)' ,url: 'https://youtu.be/J-nUohJzPWM'},
            {id: 1, title:'Barna Vs Escolapis (Senior A)' ,url: 'https://youtu.be/tnOQpnRDw1U'}
        ]
    },
    { id: 53780, name: 'C.B. PRAT', color1: "#19A1DA", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/I2SPExEujKkx9zzD.png', },
    { id: 54122, name: 'BÀSQUET SANT BOI', color1: "#E45F0C", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/mMgPF0Eiki5hUdue.png', },
    { id: 55409, name: 'CB TARRAGONA B', color1: "#0A51A1", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/9fd6569c5c01ce09.jpg',},
    { id: 53430, name: 'LLUÏSOS DE GRÀCIA A', color1: "#2B2E83", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/7cq1nU01cKlPql82.png',},
    { id: 53383, name: 'BC TECLA SALA', color1: "#EC555E", color2: "#000000", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/5AsR5hKTUyiMZ9Kk.png', },
    { id: 55582, name: 'CB CASTELLBISBAL A', color1: "#4D2770", color2: "#F1EE37", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/c31e6a175665dc07.jpg', },
    { id: 54486, name: 'TRIOMF - UB MIR', color1: "#77A6E5", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/QZX7sPueYyi2yucA.png', },
    { id: 53724, name: 'C.E SANT NICOLAU A', color1: "#B52735", color2: "#ffffff", teamPhoto: 'https://d3ah0nqesr6vwc.cloudfront.net/recursos/imatges/multimedia/QMwEBbIfGNt6R8l1.jpg', }
];

export default teams;