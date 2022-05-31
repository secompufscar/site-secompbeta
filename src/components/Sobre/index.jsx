import banner from 'assets/imgs/banner-secomp.jpg';
import './styles.css'

function Sobre() {
    return (
        <section id="sobre" className='container'>
            <h3>Sobre</h3><hr size="10" width="100%" />
            <div>
                <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sequi consequuntur, nostrum perferendis blanditiis magn
                am atque itaque quas recusandae quam iste fugit odio el
                igendi, laborum corporis ad totam optio accusantium inc
                idunt!
                </div>
                <div className='img-sobre'>
                    <img src={banner} alt="logo" />
                </div>
            </div>
        </section>
    );
}

export default Sobre;