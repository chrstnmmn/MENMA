import "./styles/index.scss";
import "./styles/portfolio-container.scss";
import "./styles/hero-section.scss";
import "./styles/introduction-section.scss";

import traceTopRight from "./assets/img/pcb-traces/hero-section/hero-section-pcb-traces-top-right.png";
import traceBottomLeft from "./assets/img/pcb-traces/hero-section/hero-section-pcb-traces-bottom-left.png";
import downIcon from "./assets/img/icons/down-icon.png";

function HeroSection() {
	return (
		<div className="hero-section">
			<div className="traces">
				{/* Background traces */}
				<img
					src={traceTopRight}
					className="trace trace-top-right"
					alt="PCB trace top right"
				/>
				<img
					src={traceBottomLeft}
					className="trace trace-bottom-left"
					alt="PCB trace bottom left"
				/>
			</div>
			<div className="down-arrow">
				<img src={downIcon} className="down-icon" alt="Down icon" />
			</div>
			<h3 className="subtitle">Christian Emmanuel Collo</h3>
			<h1 className="main-title">Menma</h1>
		</div>
	);
}

function IntroSection() {
	return (
		<div className="intro-section">
			<div className="intro-wrapper"></div>
		</div>
	);
}

export default function App() {
	return (
		<div className="portfolio-wrapper">
			<HeroSection></HeroSection>
			{/* <IntroSection></IntroSection> */}
		</div>
	);
}
