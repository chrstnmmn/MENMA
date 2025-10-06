import "./styles/index.scss";
import "./styles/portfolio-container.scss";
import "./styles/hero-section.scss";

import traceTopRight from "./assets/img/pcb-traces/hero-section/hero-section-pcb-traces-top-right.png";
import traceBottomLeft from "./assets/img/pcb-traces/hero-section/hero-section-pcb-traces-bottom-left.png";
import downIcon from "./assets/img/icons/down-icon.png";

function HeroSection() {
	return (
		<div className="portfolio-wrapper">
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
			<img src={downIcon} className="down-icon" alt="Down icon" />

			{/* Hero section */}
			<div className="hero-section">
				<h3 className="subtitle">Christian Emmanuel Collo</h3>
				<h1 className="main-title">Menma</h1>
			</div>
		</div>
	);
}

export default function App() {
	return <HeroSection></HeroSection>;
}
