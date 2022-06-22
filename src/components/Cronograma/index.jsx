import { listaCronograma } from 'utils/listaCronograma';
import InfoEvento from 'components/Cronograma/info-evento';
import './styles.css';

function Cronograma() {

    function filtraTipo(array, value) {
        return array.filter((data) => JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
    const lista = listaCronograma();
    const seminarios = filtraTipo(lista, 'seminario');
    const minicursos = filtraTipo(lista, 'minicurso');

    return (
        <section id="cronograma" className="container">
            <h3>Cronograma em breve...</h3><hr size="10" width="100%" />
            <div className="row">
                <h4>Seminários</h4>
                {seminarios.map(seminario =>
                    <InfoEvento evento={seminario} key={seminario.nome}/>
                )}
                <h4>Minicursos</h4>
                {minicursos.map(minicurso =>
                    <InfoEvento evento={minicurso} key={minicurso.nome}/>
                )}
            </div>
        </section>
    );
}

export default Cronograma;