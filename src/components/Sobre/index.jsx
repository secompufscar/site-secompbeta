import { Carousel } from 'react-bootstrap';
import foto1 from 'assets/imgs/foto1.jpg';
import foto2 from 'assets/imgs/foto2.jpg';
import foto3 from 'assets/imgs/foto3.jpg';
import './styles.css'

function Sobre() {
    return (
        <section id="sobre" className='container'>
            <h3>Sobre</h3><hr size="10" width="100%" />
            <div>
                <div>
                    A Semana Acadêmica da Computação da Universidade Federal de São Carlos
                    (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de
                    interesse tanto da comunidade acadêmica quanto de entusiastas.
                    A cada ano, alunos da graduação dos cursos do Departamento de Computação
                    se mobilizam para realizar este grande evento, no qual pessoas de diferentes
                    áreas relacionadas são convidadas a apresentar, discutir e debater experiências
                    e novidades que trarão informações, conhecimentos e inovação aos participantes.
                </div>
                <Carousel fade indicators={false} controls={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={foto1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={foto2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={foto3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Sobre;