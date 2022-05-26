import { Navbar } from "@layouts";
import Particles from "@utils/Particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import svgOnda from '@assets/svgs/onda.svg';
import './styles.css';

function Welcome() {   

    const onda =
    <img className="svg" src={svgOnda} alt="" width={'100%'} aria-hidden
        style={{marginBottom: '-1px', transform: 'rotate(180deg)', position: 'absolute', bottom: 0 }} />

    return (
        <header className='welcome-container'>
            <Particles />   {/* efeito de particulas, somente cosmetico */}
            <Navbar />
            <section className='welcome'>
                <div className="container">
                    <h2 className='msg-inicial'><span>A SECOMP voltou de maneira digital!</span></h2>
                    <h4 className='data'><span>ENTRE 20&nbsp;E&nbsp;28 DE&nbsp;JUNHO</span></h4>
                    <a href="ggwg" target="_blank" rel="noreferrer"><button>Quero participar!</button></a> 
                    <div className="botao-descer"><a href="#sobre"><FontAwesomeIcon icon={faArrowCircleDown} size="3x" /></a></div>
                </div>
            </section>
            {onda} {/* efeito de onda, somente cosmetico */}
        </header>
    );
}

export default Welcome;