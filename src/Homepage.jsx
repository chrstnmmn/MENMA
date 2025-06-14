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

function Homepage() {
  return (
    <div className="flex items-center justify-center h-[100vh] wrapper">
      <TitlePage></TitlePage>
    </div>
  );
}

export default Homepage;
