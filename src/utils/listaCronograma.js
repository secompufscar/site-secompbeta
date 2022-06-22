import ia from 'assets/imgs/ia.jpeg'
import ux from 'assets/imgs/ux.jpg'
import django from 'assets/imgs/django.webp'

/* dados dos minicursos e palestras q a semana terá */
const cronograma = [
    {
        nome: 'UX/UI introdução',
        palestrante: 'Fulano',
        dia: 'ter. 24/07',
        horario: '18:30min',
        local: 'Meet',
        tipo: 'minicurso',
        link: 'https://google.com',
        img: ux
    },
    {
        nome: 'IA introdução',
        palestrante: 'Fulana',
        dia: 'ter. 24/07',
        horario: '20:00min',
        local: 'Youtube',
        tipo: 'seminario',
        link: 'https://google.com',
        img: ia
    },
    {
        nome: 'Construindo um site com Django',
        palestrante: 'Cicrano',
        dia: 'ter. 24/07',
        horario: '18:30min',
        local: 'Meet',
        tipo: 'minicurso',
        link: 'https://google.com',
        img: django
    },
];


export function listaCronograma() { return cronograma; };