import banner from 'assets/imgs/banner-secomp.jpg';
import './styles.css'

function Sobre() {
    return (
        <section id="sobre" className='container'>
            <h3>Sobre</h3><hr size="10" width="100%" />
            <div>
                <div>
                  Testando 1 2 3 4
                </div>
                <div className='img-sobre'>
                    <img src={banner} alt="logo" />
                </div>
            </div>
        </section>
    );
}

export default Sobre;