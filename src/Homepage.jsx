import Profile_Picture from "./assets/Profile_Picture.png";

function TitlePage() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h4 className="relative text-center text-white text-[.8rem] sm:text-[1.2rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.5rem] translate-y-[-5.8rem] sm:translate-y-[-4.5rem] md:translate-y-[-3rem] lg:translate-y-[-2rem] xl:translate-y-[-.5rem] font-extrabold uppercase pointer-events-none select-none name-animate">
				Christian Emmanuel Collo
			</h4>
			<h1 className="relative text-center text-white text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] xl:text-[20rem] font-black italic uppercase pointer-events-none select-none glitch">
				menma
			</h1>
			<button className="relative w-[194px] md:w-[250px] h-[62px] md:h-[70px] translate-y-[4rem] sm:translate-y-[3rem] md:translate-y-[1.5rem] lg:translate-y-[1rem] xl:translate-y-[-1rem] rounded-[10px] border-white border-[3px] bg-[#0F0F0F] shadow-[0px_6px_0px_0px_rgba(255,50,132,1.00)] hover:shadow-[0px_6px_0px_0px_rgba(131,39,237,1.00)] duration-150 ease-out flex flex-col justify-center items-center group button-animate">
				<h1 className="w-[176px] md:w-[230px] h-[40px] md:h-[45px]  rounded-[10px] text-[0.9375rem] md:text-[1.2rem] bg-white hover:bg-[#FF3183] hover:text-[#FFFFFF] duration-150 ease-out font-extrabold uppercase flex flex-col items-center justify-center group-hover:bg-[#FF3183] group-hover:text-white">
					Visit Portfolio
				</h1>
			</button>
		</div>
	);
}

function Dashboard() {
	return (
		<div className="grid gap-1.5 justify-center items-center text-white text-center">
			<div className="container profile p-4 flex flex-row justify-center gap-x-3 align-center">
				<img
					src={Profile_Picture}
					alt="My Picture"
					className="w-[5.0625rem] h-[5.0625rem]"
				/>
				<div className="flex flex-col justify-start items-center">
					<h1 className="text-white text-[2.5rem] uppercase font-extrabold">
						menma
					</h1>
					<h2 className="text-white text-[0.625rem] uppercase font-extrabold translate-y-[-.8rem]">
						Christian Emmanuel Collo
					</h2>
				</div>
			</div>
			<div className="container CTA w-[6.125rem] h-[6.9375rem]">
				<button className="bg-white w-[5rem] h-[5.75rem] rounded-[0.625rem] flex justify-center items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="44"
						height="44"
						viewBox="0 0 44 44"
						fill="none"
					>
						<path
							d="M42.625 15.125C42.6234 13.6668 42.0434 12.2688 41.0123 11.2377C39.9812 10.2066 38.5832 9.62659 37.125 9.625H33V8.25C32.9989 7.15633 32.5639 6.10778 31.7906 5.33444C31.0172 4.5611 29.9687 4.12614 28.875 4.125H15.125C14.0313 4.12614 12.9828 4.5611 12.2094 5.33444C11.4361 6.10778 11.0011 7.15633 11 8.25V9.625H6.875C5.4168 9.62659 4.01878 10.2066 2.98767 11.2377C1.95657 12.2688 1.37659 13.6668 1.375 15.125V19.25H42.625V15.125ZM30.25 9.625H13.75V8.25C13.75 7.88533 13.8949 7.53559 14.1527 7.27773C14.4106 7.01987 14.7603 6.875 15.125 6.875H28.875C29.2397 6.875 29.5894 7.01987 29.8473 7.27773C30.1051 7.53559 30.25 7.88533 30.25 8.25V9.625Z"
							fill="#0F0F0F"
						/>
						<path
							d="M28.875 22.6875C28.875 23.2345 28.6577 23.7591 28.2709 24.1459C27.8841 24.5327 27.3595 24.75 26.8125 24.75H17.1875C16.6405 24.75 16.1159 24.5327 15.7291 24.1459C15.3423 23.7591 15.125 23.2345 15.125 22.6875V22.3438C15.125 22.2526 15.0888 22.1651 15.0243 22.1007C14.9599 22.0362 14.8724 22 14.7812 22H1.375V34.375C1.375 35.8337 1.95446 37.2326 2.98591 38.2641C4.01736 39.2955 5.41631 39.875 6.875 39.875H37.125C38.5837 39.875 39.9826 39.2955 41.0141 38.2641C42.0455 37.2326 42.625 35.8337 42.625 34.375V22H29.2188C29.1276 22 29.0401 22.0362 28.9757 22.1007C28.9112 22.1651 28.875 22.2526 28.875 22.3438V22.6875Z"
							fill="#0F0F0F"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

function Homepage() {
	return (
		<div className="flex items-center justify-center h-[100vh] wrapper">
			<Dashboard></Dashboard>
		</div>
	);
}

export default Homepage;
