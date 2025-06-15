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
			</div>
			<div className="container AboutMe"></div>
			<div className="container ToolsTitle"></div>
			<div className="container ToolsDisplay"></div>
			<div className="container CTAExplore"></div>
			<div className="container ConnectTitle"></div>
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
