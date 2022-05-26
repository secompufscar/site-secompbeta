import { useEffect, useState } from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import logotipo from 'assets/logos/Logotipo-Branco-SemFundo.png';
/* import Scrollspy from 'react-scrollspy';*/
import './styles.css';

function NavigationBar() {

	const [style, setStyle] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 60) {
				setStyle(true);
			} else {
				setStyle(false);
			}
		});
	});

	return (
		<Navbar collapseOnSelect bg="dark" variant='dark' expand="lg" fixed="top" className={style ? 'colorChange' : ''}>
			<Container >
				<Navbar.Brand href={process.env.PUBLIC_URL} title="inicio secomp beta">
					<h1 style={{ margin: 0 }}>
						<img src={logotipo} alt="Secomp BETA UFSCar São Carlos" border="0" width={200} />
					</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{/* <Scrollspy className="me-auto navbar" items={['sobre', 'cronograma', 'apoio', 'equipe']} 
								componentTag={'div'} currentClassName="is-current">*/}
						<Nav.Link href="#sobre">
							<p className='link'>Sobre</p>
						</Nav.Link>
						<Nav.Link href="#cronograma">
							<p className='link'>Cronograma</p>
						</Nav.Link>
						<Nav.Link href="#apoio">
							<p className='link'>Apoio</p>
						</Nav.Link>
						<Nav.Link href="#equipe">
							<p className='link'>Equipe</p>
						</Nav.Link>
					{/*</Scrollspy> */}
					<Nav.Link href="https://google.com" target="_blank" rel="noreferrer">
						<button>Inscrever-se</button>
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;