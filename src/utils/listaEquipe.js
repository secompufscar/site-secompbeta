import pedro from 'assets/membros/Conteudo - Pedro Freire Baleeiro.png';
import rafael from 'assets/membros/DM - Rafael Tury Minatel.jpg'
import pietro from 'assets/membros/JF - Pietro Minghini Moralles.png'
import wesley from 'assets/membros/JF - Wesley Azevedo Souza.png'
import bruno from 'assets/membros/Patrocínio - Bruno Zenatti de Caires Marcelo.png'
import gianlucca from 'assets/membros/Sociocult - Gianlucca Pugliesi.jpeg'
import joao from 'assets/membros/TI - João Pedro Pereira.jpg'
import victor from 'assets/membros/TI - Victor Luis A Antunes.jpeg'
import generico from 'assets/logos/Simbolo-SemBeta-SemFundo.png'

// Nossa equipe!
const equipe = [
    {
        nome: 'Paulo',
        diretoria: 'Coordenação',
        img: generico
        /*img: paulo*/
    },
    {
        nome: 'Gabriel',
        diretoria: 'Coordenação',
        img: generico
        /*img: gabriel*/
    },
    {
        nome: 'Murilo',
        diretoria: 'Coordenação',
        img: generico
        /*img: murilo*/
    },
    {
        nome: 'Pedro Freire Baleeiro',
        diretoria: 'Conteúdo',
        linkedin: 'https://www.linkedin.com/in/pedro-freire-baleeiro-b097651a1/',
        instagram: 'https://www.instagram.com/pedrofbaleeiro/',
        github: 'https://github.com/SnakeZ0',
        img: pedro
    },
    {
        nome: 'Rafael Tury Minatel',
        diretoria: 'Design/Marketing',
        img: rafael
    },
    {
        nome: 'Pietro Minghini Moralles',
        diretoria: 'Jurídico/Financeiro',
        linkedin: 'https://www.linkedin.com/in/pietro-moralles/',
        instagram: 'https://www.instagram.com/pietro_mm/',
        github: 'https://github.com/Pietro-MM',
        img: pietro
    },
    {
        nome: 'Wesley Azevedo Souza',
        diretoria: 'Jurídico/Financeiro',
        img: wesley
    },
    {
        nome: 'Bruno Zenatti de Caires Marcelo',
        diretoria: 'Patrocínio',
        linkedin: 'https://www.linkedin.com/in/bruno-zenatti-de-caires-marcelo-0b5a9b211/',
        facebook: 'https://www.facebook.com/bruno.zenatti.3/',
        instagram: 'https://www.instagram.com/bruno.zenatti/',
        img: bruno
    },
    {
        nome: 'Gianlucca Pugliesi',
        diretoria: 'Sociocultural',
        img: gianlucca
    },
    {
        nome: 'João Pedro Pereira',
        diretoria: 'TI',
        linkedin: 'http://www.linkedin.com/in/joao-pedropereira',
        github: 'https://github.com/jppereira9',
        instagram: 'https://www.instagram.com/joaoo.pereira_/',
        img: joao
    },
    {
        nome: 'Victor Luís Aguilar Antunes',
        diretoria: 'TI',
        linkedin: 'https://www.linkedin.com/in/victor-lu%C3%ADs-aguilar-antunes-06588221a/',
        github: 'https://github.com/VLx2000',
        img: victor
    },
];


export function listaEquipe() { return equipe; };