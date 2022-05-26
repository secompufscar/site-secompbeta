import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

function RedesSociais(props) {

    const pessoa = props.pessoa;
    return (
        <div className='redes-sociais'>
            { pessoa.instagram && <a href={pessoa.instagram} target="_blank" rel="noreferrer" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            }
            { pessoa.facebook && <a href={pessoa.facebook} target="_blank" rel="noreferrer" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            }
            { pessoa.twitter && <a href={pessoa.twitter} target="_blank" rel="noreferrer" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            }
            { pessoa.linkedin && <a href={pessoa.linkedin} target="_blank" rel="noreferrer" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            }
            { pessoa.github && <a href={pessoa.github} target="_blank" rel="noreferrer" className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" /></a>
            }
        </div>
    );
}

export default RedesSociais;