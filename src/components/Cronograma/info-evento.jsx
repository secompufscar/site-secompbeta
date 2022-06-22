import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import palestrante from 'assets/membros/TI - Victor Luis A Antunes.jpeg'

function InfoEvento(props) {

    const evento = props.evento;

    return (
        <div className="col-sm-12 col-lg-6 col-xl-4 mb-3 align-items-stretch d-flex">
            <div className='card'>
                <div className="box">
                    {evento.tipo === 'seminario' && <div className="local-evento" style={{ background: '#fe0004' }}>
                        <div>{evento.local}</div>
                        <FontAwesomeIcon icon={faYoutube} size="1x" /></div>
                    }
                    {evento.tipo === 'minicurso' && <div className="local-evento" style={{ background: '#01ae4f' }}>
                        <div>{evento.local}</div>
                        <FontAwesomeIcon icon={faVideoCamera} size="1x" /></div>
                    }
                    <div className="evento" style={{ backgroundImage: `url(${evento.img})` }}>
                    </div>
                    <a href={evento.linkPalestrante} alt="">
                        <div className="palestrante-evento">
                            <h6>Por: {evento.palestrante}</h6><img src={palestrante} alt="" width={'100%'} />
                        </div>
                    </a>
                    <div className="info-evento">
                        <div>
                            <h5>{evento.nome}</h5>
                        </div>
                        <div className="data-evento">
                            <i>{evento.dia}</i>
                            <div>{evento.horario}</div>
                        </div>
                    </div>
                    <a href={evento.link} className="link-evento">
                        <button>Participar</button>
                    </a>
                </div>
            </div>
        </div >
    );
}

export default InfoEvento;