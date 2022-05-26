import RedesSociais from './redes-sociais';
import { listaEquipe } from 'utils/listaEquipe';
import Accordion from 'react-bootstrap/Accordion'
import './styles.css';

function Equipe() {

    const lista = listaEquipe();

    return (
        <section id="equipe" className="container">
            <Accordion>
                <Accordion.Header>
                    <h3>Equipe <span>(clique para expandir)</span></h3>
                </Accordion.Header>
                <Accordion.Body bsPrefix='accordion'>
                    <hr size="10" width="100%" />
                    <div className="row">
                        {lista.map(pessoa =>
                            <div className="col-sm-12 col-lg-6 col-xl-4 mb-3" key={pessoa.nome}>
                                <div className='card pessoa'>
                                    <div>
                                        <img src={pessoa.img} alt="foto integrante" width={140} className="card-img" />
                                    </div>
                                    <div className="box">
                                        <h4>{pessoa.nome}</h4>
                                        <i>{pessoa.diretoria}</i>
                                        <RedesSociais pessoa={pessoa} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Accordion.Body>
            </Accordion>
        </section>
    );
}

export default Equipe;
