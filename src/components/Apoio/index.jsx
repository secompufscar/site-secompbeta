import secomp from 'assets/logos/Logotipo-Preto-SemFundo.png';
import ufscar from 'assets/logos/Logomarca_UFSCAR.png';
import './styles.css'

function Apoio() {
    return (
        <section id="apoio" className="container">
            <h3>Apoio</h3><hr size="10" width="100%" />
            <div>
                <a href="https://secompufscar.com.br" target="_blank" rel="noreferrer">
                    <img src={secomp} alt="logo secomp" width={200} />
                </a>
                <a href="https://www.ufscar.br" target="_blank" rel="noreferrer">
                    <img src={ufscar} alt="logo ufscar" width={200} />
                </a>
            </div>
        </section>
    );
}

export default Apoio;