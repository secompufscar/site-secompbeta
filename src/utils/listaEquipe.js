import pedro from 'assets/membros/Conteudo - Pedro Freire Baleeiro.png';
import rafael from 'assets/membros/DM - Rafael Tury Minatel.jpg'
import pietro from 'assets/membros/JF - Pietro Minghini Moralles.png'
import wesley from 'assets/membros/JF - Wesley Azevedo Souza.png'
import bruno from 'assets/membros/Patrocínio - Bruno Zenatti de Caires Marcelo.png'
import gianlucca from 'assets/membros/Sociocult - Gianlucca Pugliesi.jpeg'
import joao from 'assets/membros/TI - João Pedro Pereira.jpg'
import victor from 'assets/membros/TI - Victor Luis A Antunes.jpeg'

/* Nossa equipe!
    TO DO: talvez criar um array de redes socias
*/

const equipe = [
    {
        nome: 'Paulo',
        diretoria: 'Coordenação',
        linkedin: 'https://linkedin.com',
        instagram: 'http://github.com',
        /*img: paulo*/
    },
    {
        nome: 'Gabriel',
        diretoria: 'Coordenação',
        twitter: 'https://linkedin.com',
        github: 'http://github.com',
        /*img: gabriel*/
    },
    {
        nome: 'Murilo',
        diretoria: 'Coordenação',
        linkedin: 'https://linkedin.com',
        facebook: 'http://github.com',
        /*img: murilo*/
    },
    {
        nome: 'Pedro Freire Baleeiro',
        diretoria: 'Conteúdo',
        linkedin: 'https://linkedin.com',
        github: 'http://github.com',
        img: pedro
    },
    {
        nome: 'Rafael Tury Minatel',
        diretoria: 'Design/Marketing',
        linkedin: 'https://linkedin.com',
        github: 'http://github.com',
        twitter: 'rwgdg',
        img: rafael
    },
    {
        nome: 'Pietro Minghini Moralles',
        diretoria: 'Jurídico/Financeiro',
        linkedin: 'https://linkedin.com',
        github: 'http://github.com',
        facebook: 'gergeg',
        img: pietro
    },
    {
        nome: 'Wesley Azevedo Souza',
        diretoria: 'Jurídico/Financeiro',
        linkedin: 'https://linkedin.com',
        github: 'http://github.com',
        instagram: 'esf',
        img: wesley
    },
    {
        nome: 'Bruno Zenatti de C. Marcelo',
        diretoria: 'Patrocínio',
        linkedin: 'https://linkedin.com',
        github: 'http://github.com',
        instagram: 'esf',
        img: bruno
    },
    {
        nome: 'Gianlucca Pugliesi',
        diretoria: 'Sociocultural',
        instagram: 'esf',
        linkedin: 'https://linkedin.com',
        github: 'http://github.com',
        img: gianlucca
    },
    {
        nome: 'João Pedro Pereira',
        diretoria: 'TI',
        linkedin: 'http://www.linkedin.com/in/joao-pedropereira',
        github: 'https://github.com/CaBaNa232',
        instagram: 'https://www.instagram.com/joaoo.pereira_/',
        img: joao
    },
    {
        nome: 'Victor Luís Aguilar Antunes',
        diretoria: 'TI',
        instagram: 'esf',
        linkedin: 'https://www.linkedin.com/in/victor-lu%C3%ADs-aguilar-antunes-06588221a/',
        github: 'https://github.com/VLx2000',
        img: victor
    },
];


export function listaEquipe() { return equipe; };