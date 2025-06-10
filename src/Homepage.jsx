function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <h4 className="text-center justify-center text-white text-[2.25rem] font-extrabold uppercase translate-y-[150px] pointer-none select-none">
        Christian Emmanuel Collo
      </h4>
      <h1 className="text-center justify-center text-white text-[25rem] font-black italic uppercase [text-shadow:_0px_19px_0px_rgb(255_50_132_/_1.00)] pointer-none select-none">
        menma
      </h1>
      <button className="w-[350px] h-[92px] rounded-[10px] border-white border-[3px] bg-[#0F0F0F] shadow-[0px_6px_0px_0px_rgba(255,50,132,1.00)] flex flex-col justify-center items-center translate-y-[-80px]">
        <h1 className="w-[318px] h-[60px] rounded-[10px] bg-white text-[1.5rem] font-extrabold uppercase flex flex-col items-center justify-center">Visit Portfolio</h1>
      </button>
    </div>
  );
}

export default Homepage;
