import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import palestrante from 'assets/logos/Simbolo-SemBeta-SemFundo.png'

function InfoEvento(props) {

    const evento = props.evento;

    return (
        <div className="col-sm-12 col-lg-6 col-xl-4 mb-3 align-items-stretch d-flex">
            <div className='card'>
                <div className="box">
                    <div className="img-evento" style={{ backgroundImage: `url(${evento.img})` }}>
                    </div>
                    <a href={evento.linkPalestrante} alt="">
                        <div className="palestrante-evento">
                            <h6>Por: {evento.palestrante}</h6><img src={palestrante} alt="palestrante"/>
                        </div>
                    </a>
                    <div className="info-evento">
                        <div>
                            <h5>{evento.nome}</h5>
                        </div>
                        <div className="data-evento">
                            <i>{evento.dia}</i> <br />
                            <b>{evento.horario}</b>
                        </div>
                    </div>
                    <a href={evento.link} className="link-evento">
                        <button>
                            <div className="local-evento" >
                                <span>Participar pelo {evento.local}</span>
                                {evento.tipo === 'seminario' && 
                                    <FontAwesomeIcon icon={faYoutube} size="1x" />
                                }
                                {evento.tipo === 'minicurso' &&
                                    <FontAwesomeIcon icon={faVideoCamera} size="1x" />
                                }
                            </div>                              
                        </button>
                    </a>
                </div>
            </div>
        </div >
    );
}

export default InfoEvento;