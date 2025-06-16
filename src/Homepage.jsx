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

	const socialIcons = [
		{
			name: "facebook",
			path: "M33.6946 18.2028C33.6946 9.58311 26.7055 2.59399 18.0858 2.59399C9.46616 2.59399 2.47705 9.58311 2.47705 18.2028C2.47705 25.9932 8.18401 32.4507 15.647 33.6227V22.7161H11.6827V18.2028H15.647V14.764C15.647 10.8527 17.9778 8.69048 21.5428 8.69048C23.2507 8.69048 25.0373 8.99569 25.0373 8.99569V12.8373H23.0681C21.1302 12.8373 20.524 14.04 20.524 15.2761V18.2028H24.8527L24.1614 22.7161H20.5247V33.6241C27.9877 32.4528 33.6946 25.9953 33.6946 18.2028Z",
			viewBox: "0 0 36 36",
		},
		{
			name: "instagram",
			paths: [
				"M20.6485 4.39659C22.0678 4.40082 23.4278 4.96651 24.4314 5.9701C25.4349 6.97369 26.0006 8.33364 26.0049 9.75292V20.4645C26.0006 21.8837 25.4349 23.2437 24.4314 24.2473C23.4278 25.2509 22.0678 25.8166 20.6485 25.8208H9.93701C8.51772 25.8166 7.15778 25.2509 6.15418 24.2473C5.15059 23.2437 4.58491 21.8837 4.58067 20.4645V9.75292C4.58491 8.33364 5.15059 6.97369 6.15418 5.9701C7.15778 4.96651 8.51772 4.40082 9.93701 4.39659H20.6485ZM20.6485 2.25439H9.93701C5.81273 2.25439 2.43848 5.62865 2.43848 9.75292V20.4645C2.43848 24.5887 5.81273 27.963 9.93701 27.963H20.6485C24.7728 27.963 28.1471 24.5887 28.1471 20.4645V9.75292C28.1471 5.62865 24.7728 2.25439 20.6485 2.25439Z",
				"M22.2552 9.75294C21.9374 9.75294 21.6268 9.65871 21.3625 9.48215C21.0983 9.30559 20.8924 9.05465 20.7707 8.76104C20.6491 8.46744 20.6173 8.14437 20.6793 7.83269C20.7413 7.521 20.8943 7.2347 21.1191 7.00999C21.3438 6.78527 21.6301 6.63224 21.9418 6.57024C22.2534 6.50824 22.5765 6.54006 22.8701 6.66168C23.1637 6.78329 23.4147 6.98924 23.5912 7.25347C23.7678 7.51771 23.862 7.82836 23.862 8.14615C23.8625 8.35729 23.8212 8.56643 23.7406 8.76158C23.66 8.95673 23.5417 9.13404 23.3924 9.28334C23.2431 9.43263 23.0658 9.55097 22.8707 9.63156C22.6755 9.71214 22.4664 9.7534 22.2552 9.75294Z",
				"M15.2929 10.8238C16.1404 10.8238 16.9688 11.0751 17.6735 11.5459C18.3781 12.0168 18.9273 12.686 19.2517 13.4689C19.576 14.2519 19.6608 15.1135 19.4955 15.9447C19.3302 16.7759 18.9221 17.5394 18.3228 18.1386C17.7235 18.7379 16.96 19.146 16.1288 19.3113C15.2976 19.4767 14.4361 19.3918 13.6531 19.0675C12.8701 18.7432 12.2009 18.194 11.7301 17.4893C11.2592 16.7847 11.0079 15.9562 11.0079 15.1087C11.0091 13.9727 11.461 12.8835 12.2643 12.0801C13.0676 11.2768 14.1568 10.825 15.2929 10.8238ZM15.2929 8.68158C14.0217 8.68158 12.7791 9.05852 11.7221 9.76475C10.6652 10.471 9.84142 11.4748 9.35496 12.6492C8.86851 13.8236 8.74123 15.1159 8.98922 16.3626C9.23721 17.6093 9.84934 18.7546 10.7482 19.6534C11.647 20.5523 12.7923 21.1644 14.039 21.4124C15.2857 21.6604 16.578 21.5331 17.7524 21.0466C18.9268 20.5602 19.9306 19.7364 20.6368 18.6795C21.3431 17.6225 21.72 16.3799 21.72 15.1087C21.72 13.4041 21.0429 11.7694 19.8376 10.564C18.6322 9.35872 16.9975 8.68158 15.2929 8.68158Z",
			],
			viewBox: "0 0 30 30",
		},
		{
			name: "linkedin",
			path: "M22.7565 2.0907H4.3658C3.3609 2.0907 2.48291 2.81375 2.48291 3.80684V22.2383C2.48291 23.2368 3.3609 24.1266 4.3658 24.1266H22.751C23.7614 24.1266 24.5188 23.2309 24.5188 22.2383V3.80684C24.5247 2.81375 23.7614 2.0907 22.7565 2.0907ZM9.31356 20.4587H6.15671V10.6434H9.31356V20.4587ZM7.84433 9.15105H7.8217C6.8114 9.15105 6.1572 8.39897 6.1572 7.45753C6.1572 6.49887 6.82861 5.7645 7.86155 5.7645C8.89448 5.7645 9.52654 6.49346 9.54916 7.45753C9.54867 8.39897 8.89448 9.15105 7.84433 9.15105ZM20.8509 20.4587H17.6941V15.0919C17.6941 13.8061 17.2347 12.9277 16.0926 12.9277C15.22 12.9277 14.7035 13.5179 14.4738 14.0929C14.3877 14.2995 14.3646 14.5808 14.3646 14.8681V20.4587H11.2078V10.6434H14.3646V12.0093C14.824 11.3551 15.5417 10.4137 17.2116 10.4137C19.2838 10.4137 20.8514 11.7796 20.8514 14.7245L20.8509 20.4587Z",
			viewBox: "0 0 27 26",
		},
		{
			name: "dribbble",
			path: "M13.7071 2.17261C7.11721 2.17261 1.771 7.51882 1.771 14.1087C1.771 20.6987 7.11721 26.0449 13.7071 26.0449C20.297 26.0449 25.6433 20.7045 25.6433 14.1087C25.6433 7.51296 20.297 2.17261 13.7071 2.17261ZM21.2855 7.67442C22.6666 9.29796 23.4886 11.3228 23.6301 13.4496C21.4789 13.3377 18.9052 13.3377 16.8414 13.5306C16.5803 12.8714 16.3128 12.2251 16.0208 11.6032C18.4006 10.5716 20.2347 9.21599 21.2855 7.67442ZM13.7071 4.16179C16.0256 4.1578 18.2719 4.96755 20.0546 6.4499C18.9729 7.81723 17.2757 9.00764 15.1618 9.90605C14.0055 7.76767 12.675 5.92769 11.256 4.47884C12.0567 4.27212 12.8801 4.16562 13.7071 4.16179ZM9.20603 5.24989C10.6421 6.67956 11.9913 8.50036 13.1727 10.6318C10.9282 11.3176 8.35452 11.7109 5.60761 11.7109C5.0854 11.7109 4.57599 11.6922 4.07243 11.6608C4.42271 10.2884 5.06184 9.00667 5.94713 7.90112C6.83242 6.79556 7.94347 5.89169 9.20603 5.24989ZM3.77882 13.6361C4.34472 13.6611 4.91649 13.6734 5.49464 13.6675C8.62788 13.6302 11.5437 13.1389 14.0492 12.3354C14.2855 12.8267 14.5093 13.3302 14.7206 13.846C14.4179 13.9123 14.1206 14.0014 13.8313 14.1125C10.406 15.5512 7.70816 17.8697 6.24705 20.6736C4.64492 18.862 3.76043 16.5271 3.76017 14.1087C3.76017 13.9489 3.76657 13.7917 3.77882 13.6361ZM13.7071 24.0557C11.4972 24.0584 9.35015 23.3207 7.60851 21.9605C8.93268 19.3372 11.2949 17.1647 14.273 15.8182C14.5528 15.6876 14.9258 15.5821 15.3547 15.4889C15.71 16.4707 16.027 17.4903 16.3059 18.5475C16.7224 20.1431 17.0292 21.7654 17.224 23.4029C16.1013 23.8331 14.9094 24.0543 13.7071 24.0557ZM19.0848 22.4704C18.8903 20.8159 18.5806 19.1769 18.1581 17.5654C17.945 16.7571 17.7047 15.9738 17.4436 15.2091C19.3954 15.0492 21.7331 15.0722 23.5917 15.2091C23.4279 16.6785 22.9384 18.0928 22.1587 19.349C21.379 20.6052 20.3289 21.6716 19.0848 22.4704Z",
			viewBox: "0 0 28 28",
		},
		{
			name: "github",
			path: "M13.9151 2.23816C7.32362 2.23816 1.979 7.93221 1.979 14.9488C1.979 20.5654 5.39998 25.3242 10.1425 27.0064C10.209 27.0215 10.2769 27.0289 10.345 27.0286C10.7872 27.0286 10.9577 26.691 10.9577 26.3978C10.9577 26.0934 10.9471 25.2966 10.9418 24.2341C10.5469 24.3302 10.143 24.3804 9.73749 24.3835C7.44085 24.3835 6.91864 22.5298 6.91864 22.5298C6.37512 21.0634 5.59182 20.6705 5.59182 20.6705C4.55273 19.9124 5.58649 19.8903 5.66642 19.8903H5.67174C6.87069 20.0009 7.49946 21.2073 7.49946 21.2073C8.09627 22.2918 8.89557 22.5962 9.6096 22.5962C10.0817 22.5864 10.5466 22.4732 10.9737 22.2642C11.0803 21.4452 11.3894 20.8863 11.7304 20.5654C9.08207 20.2444 6.29519 19.1543 6.29519 14.2848C6.29519 12.8958 6.75879 11.7614 7.52078 10.8761C7.39822 10.5551 6.98792 9.26027 7.63801 7.51166C7.72521 7.48999 7.81483 7.48068 7.90444 7.48399C8.33606 7.48399 9.3112 7.65553 10.9204 8.81758C12.8758 8.24945 14.9438 8.24945 16.8992 8.81758C18.5084 7.65553 19.4836 7.48399 19.9152 7.48399C20.0048 7.48068 20.0944 7.48999 20.1816 7.51166C20.8317 9.26027 20.4214 10.5551 20.2988 10.8761C21.0608 11.767 21.5244 12.9014 21.5244 14.2848C21.5244 19.1654 18.7322 20.2389 16.0732 20.5543C16.4995 20.9472 16.8832 21.7219 16.8832 22.9061C16.8832 24.6049 16.8672 25.9772 16.8672 26.3922C16.8672 26.691 17.0324 27.0286 17.4747 27.0286C17.5463 27.0289 17.6177 27.0215 17.6878 27.0064C22.4356 25.3242 25.8513 20.5598 25.8513 14.9488C25.8513 7.93221 20.5067 2.23816 13.9151 2.23816Z",
			viewBox: "0 0 28 29",
		},
	];

	return (
		<div className="grid grid-cols-[17.125rem] xxs:grid-cols-[20.125rem] xs:grid-cols-[25.125rem] grid-rows-[4.8125rem_3.25rem_auto_2.4375rem_auto_3.25rem_2.4375rem_4.375rem] gap-y-3">
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
				<button className="w-full h-8 bg-white rounded-[10px] text-center justify-center text-black text-xl font-extrabold uppercase">
					hire me
				</button>
			</div>
			<div className="container AboutMe justify-items-center items-center">
				<div className="grid w-full grid-rows-[auto auto]">
					<h1 className="w-52 text-white text-2xl text-start font-bold uppercase translate-y-0.5">
						welcome
					</h1>
					<p className="w-full text-white text-start text-[.65rem] font-semibold translate-y-[-0.125rem]">
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
				<button className="w-full h-8 bg-white rounded-[10px] text-center justify-center text-black text-xl font-extrabold uppercase">
					Explore Projects
				</button>
			</div>
			<div className="container ConnectTitle">
				<div className="text-center justify-center text-white text-xl font-extrabold uppercase">
					let’s connect
				</div>
			</div>
			<div className="container SocialLinks">
				<div className="wrapperLinks flex flex-row gap-x-1">
					{socialIcons.map((icon, index) => (
						<button
							key={index}
							className="w-12 h-12 bg-white rounded-[10px] grid justify-center items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={
									icon.name === "instagram"
										? "30"
										: icon.name === "linkedin"
										? "27"
										: "28"
								}
								height={
									icon.name === "instagram"
										? "30"
										: icon.name === "linkedin"
										? "26"
										: "29"
								}
								viewBox={icon.viewBox}
								fill="none"
							>
								{icon.paths ? (
									icon.paths.map((path, i) => (
										<path
											key={i}
											fillRule="evenodd"
											clipRule="evenodd"
											d={path}
											fill="#0F0F0F"
										/>
									))
								) : (
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d={icon.path}
										fill="#0F0F0F"
									/>
								)}
							</svg>
						</button>
					))}
				</div>
			</div>
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
