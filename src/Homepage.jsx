import Profile_Picture from "./assets/Profile_Picture.png";

import React, { useState } from "react";

function TitlePage() {
  const [isExiting, setIsExiting] = useState(false);

  const handleButtonClick = () => {
    setIsExiting(true);
    // You can add navigation logic here after animations complete
    // setTimeout(() => navigate('/portfolio'), 1800);
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
    flex flex-col items-center justify-center`} // Added flex centering here
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

function Homepage() {
  return (
    <div className="flex items-center justify-center h-[100vh] wrapper">
      <TitlePage></TitlePage>
    </div>
  );
}

export default Homepage;
