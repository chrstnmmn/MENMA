import Profile_Picture from "./assets/Profile_Picture.png";
import React, { useState } from "react";

function TitlePage({ onComplete }) {
	const [isExiting, setIsExiting] = useState(false);

	const handleButtonClick = () => {
		setIsExiting(true);
		// Trigger the completion callback after animations finish
		setTimeout(() => {
			onComplete();
		}, 1800); // Match this duration with your exit animation duration
	};

	return (
		<div className="flex flex-col justify-center items-center min-h-screen overflow-hidden px-4">
			{/* Grid container for all elements */}
			<div className="grid grid-rows-[auto_auto_auto] place-items-center relative w-full">
				{/* Row 1: Name */}
				<h4
					className={`text-white text-[clamp(.8rem,4vw,2.5rem)] row-start-1
            font-extrabold uppercase pointer-events-none select-none name-animate z-10
            ${isExiting ? "animate-nameExit" : ""}`}
				>
					Christian Emmanuel Collo
				</h4>

				{/* Row 2: MENMA */}
				<h1
					className={`text-white text-[clamp(3rem,20vw,20rem)] row-start-2
            leading-[0.8] font-black italic uppercase pointer-events-none select-none glitch
            ${isExiting ? "animate-glitchExit" : ""}`}
				>
					menma
				</h1>

				{/* Row 3: Button */}
				<button
					onClick={handleButtonClick}
					className={`row-start-3 relative 
            w-[clamp(150px,15vw,250px)] h-[clamp(50px,6vw,70px)]
            mt-[clamp(.2rem,5vw,1rem)]
            rounded-[10px] border-white border-[3px] bg-[#0F0F0F]
            shadow-[0px_6px_0px_0px_rgba(255,50,132,1.00)]
            hover:shadow-[0px_6px_0px_0px_rgba(131,39,237,1.00)]
            ${isExiting ? "animate-buttonExit" : "button-animate"}
            ${isExiting ? "" : "opacity-100"}
            flex flex-col items-center justify-center`}
					disabled={isExiting}
				>
					<span
						className="w-[calc(100%-18px)] h-[calc(100%-18px)] rounded-[8px] 
              text-[clamp(0.8rem,1vw,1.2rem)] 
              bg-white hover:bg-[#FF3183] hover:text-[#FFFFFF] 
              duration-150 ease-out font-extrabold uppercase 
              flex items-center justify-center"
					>
						Visit Portfolio
					</span>
				</button>
			</div>
		</div>
	);
}

function Dashboard() {
	const tools = [
		"figma",
		"canva",
		"illustrator",
		"html 5",
		"css",
		"javascript",
		"react",
		"tailwind",
		"vite",
		"github",
	];

	return (
		<div className="grid grid-cols-[17.125rem] grid-rows-[4.8125rem_3.25rem_9.9375rem_2.4375rem_9.0625rem_3.25rem_2.4375rem_4.375rem] gap-y-3">
			<div className="container Profile text-white flex flex-row justify-items-center items-center gap-x-2.5">
				<img
					src={Profile_Picture}
					alt="My Picture"
					className="w-[3.8125rem]"
				></img>
				<div className="grid grid-rows-[auto auto] justify-items-start">
					<h1 className="text-4xl font-extrabold uppercase translate-y-[.25rem]">
						menma
					</h1>
					<h2 className="text-[0.625rem] font-extrabold uppercase  translate-y-[-.25rem]">
						Christian Emmanuel Collo
					</h2>
				</div>
			</div>
			<div className="container CTAHire">
				<button className="w-64 h-8 bg-white rounded-[10px] text-center justify-center text-black text-xl font-extrabold uppercase">
					hire me
				</button>
			</div>
			<div className="container AboutMe justify-items-center items-center">
				<div className="grid grid-rows-[auto auto]">
					<h1 className="w-52 text-white text-2xl text-start font-bold uppercase translate-y-0.5">
						welcome
					</h1>
					<p className="w-64 text-white text-start text-[.65rem] font-semibold translate-y-[-0.125rem]">
						Hi, I'm a UI/UX and Web Designer passionate about
						creating clean, functional, and user-friendly digital
						experiences. This portfolio showcases my work from
						intuitive interfaces to responsive web designs. Each
						project reflects my commitment to blending aesthetics
						with usability, turning ideas into meaningful and
						engaging designs.
					</p>
				</div>
			</div>
			<div className="container ToolsTitle">
				<h1 className="text-center justify-center text-white text-xl font-extrabold uppercase">
					Tools & Skills
				</h1>
			</div>
			<div className="container ToolsDisplay">
				<div className="flex flow-row flex-wrap justify-start items-start gap-1.5">
					{tools.map((tool, index) => (
						<div
							className="px-2.5 py-1 bg-stone-950 rounded-[10px] outline-1 outline-offset-[-1px] outline-white"
							key={index}
						>
							<h1 className="text-center justify-center text-white text-[0.8rem] font-extrabold uppercase">
								{tool}
							</h1>
						</div>
					))}
				</div>
			</div>
			<div className="container CTAExplore">
				<button className="w-64 h-8 bg-white rounded-[10px] text-center justify-center text-black text-xl font-extrabold uppercase">
					Explore Projects
				</button>
			</div>
			<div className="container ConnectTitle">
				<div className="text-center justify-center text-white text-xl font-extrabold uppercase">let’s connect</div>
			</div>
			<div className="container SocialLinks"></div>
		</div>
	);
}

function Homepage() {
	const [showDashboard, setShowDashboard] = useState(false);

	const handleTitlePageComplete = () => {
		setShowDashboard(true);
	};

	return (
		<div
			className={`flex flex-col items-center justify-center ${
				showDashboard ? "h-full py-10" : "h-screen"
			} wrapper`}
		>
			{!showDashboard ? (
				<TitlePage onComplete={handleTitlePageComplete} />
			) : (
				<Dashboard />
			)}
		</div>
	);
}

export default Homepage;
