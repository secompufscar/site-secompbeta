import banner from '@assets/imgs/banner-secomp.jpg';
import './styles.css'

function Sobre() {
    return (
        <section id="sobre" className='container'>
            <h3>Sobre</h3><hr size="10" width="100%" />
            <div>
                <div>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Maxime, nam perspiciatis sint
                    quas consequuntur sed est magnam
                    hic ullam reiciendis, nemo ab exercitationem
                    voluptates provident quasi inventore dolorum
                    corporis explicabo.
                </div>
                <div className='img-sobre'>
                    <img src={banner} alt="logo" />
                </div>
            </div>
        </section>
    );
}

export default Sobre;