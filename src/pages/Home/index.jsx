import React, { useEffect, useState } from "react";
import { Welcome, Sobre, Cronograma, Apoio, Equipe } from "@components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import './styles.css';

function Home() {

	const [desceu, setDesceu] = useState(false);

	/* https://www.kindacode.com/article/how-to-create-a-scroll-to-top-button-in-react/ */
	useEffect(() => {
		window.addEventListener("scroll", () => {
			let botao = document.getElementById('back-to-top');
			if (window.pageYOffset > 900) {
				botao.style = 'display: block; animation: subir .3s;';
				setDesceu(true);
			} else if(desceu) {
				botao.style = 'display: block; animation: descer .3s; transform: translateY(200px);';
			}
		});
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	/***/

	return (
		<div id="home"> {/* pagina inicial ira possuir todos os components */}
			<Welcome />
			<Sobre />
			<Cronograma />
			<Apoio />
			<Equipe />
			{/* botao para voltar ao topo da pagina */}
			<FontAwesomeIcon id="back-to-top" onClick={scrollToTop} icon={faArrowCircleUp} size="1x" />
		</div>
	);
}

export default Home;