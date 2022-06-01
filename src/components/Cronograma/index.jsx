/* import { listaCronograma } from 'utils/listaCronograma';
import img from 'assets/logos/Simbolo-SemBeta-SemFundo.png'; */
import './styles.css';

function Cronograma() {

    //const lista = listaCronograma();

    return (
        <section id="cronograma" className="container">
            <h3>Cronograma em breve...</h3><hr size="10" width="100%" />
            {/* <div className="row">
                {lista.map(palestra =>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" key={palestra.nome}>
                        <div className='card'>
                            <img src={img} alt="imagem palestra" />
                            <div className="box">
                                <div>{palestra.nome}</div>
                                <div>{palestra.palestrante}</div>
                                <div>{palestra.dia}</div>
                                <div>{palestra.horario}</div>
                                <div>{palestra.local}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div> */}
        </section>
    );
}

export default Cronograma;