function TitlePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="relative text-center text-white text-[2.25rem] font-extrabold uppercase pointer-events-none select-none name-animate">
        Christian Emmanuel Collo
      </h4>
      <h1 className="relative text-center text-white text-[20rem] font-black italic uppercase pointer-events-none select-none glitch">
        menma
      </h1>
      <button className="relative w-[350px] h-[92px] rounded-[10px] border-white border-[3px] bg-[#0F0F0F] shadow-[0px_6px_0px_0px_rgba(255,50,132,1.00)] hover:shadow-[0px_6px_0px_0px_rgba(131,39,237,1.00)] duration-150 ease-out flex flex-col justify-center items-center group button-animate">
        <h1 className="w-[318px] h-[60px] rounded-[10px] bg-white text-[1.5rem] hover:bg-[#FF3183] hover:text-[#FFFFFF] duration-150 ease-out font-extrabold uppercase flex flex-col items-center justify-center group-hover:bg-[#FF3183] group-hover:text-white">
          Visit Portfolio
        </h1>
      </button>

      <style jsx global>{`
        @keyframes glitch {
          0%,
          100% {
            text-shadow: 0px 19px 0px rgba(255, 50, 132, 1);
          }
          5% {
            text-shadow: -3px 22px 0px rgba(255, 50, 132, 1);
          }
          10% {
            text-shadow: 5px 17px 0px rgba(255, 50, 132, 1);
          }
          15% {
            text-shadow: -7px 24px 0px rgba(255, 50, 132, 1);
          }
          20% {
            text-shadow: 0px 15px 0px rgba(255, 50, 132, 1);
          }
          25% {
            text-shadow: 2px 25px 0px rgba(255, 50, 132, 1);
          }
          30% {
            text-shadow: -4px 18px 0px rgba(255, 50, 132, 1);
          }
          35% {
            text-shadow: 6px 21px 0px rgba(255, 50, 132, 1);
          }
          40%,
          100% {
            text-shadow: 0px 19px 0px rgba(255, 50, 132, 1);
          }
        }

        @keyframes dashDown {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          70% {
            transform: translateY(20px);
            opacity: 1;
          }
          85% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(80px);
            opacity: 0;
          }
          100% {
            transform: translateY(120px);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-120px);
            opacity: 0;
          }
          100% {
            transform: translateY(-80px);
            opacity: 1;
          }
        }

        /* Initial state */
        .name-animate,
        .button-animate {
          opacity: 0;
        }

        /* MENMA animation */
        .glitch {
          animation: dashDown 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)
              forwards,
            glitch 3s 0.8s infinite steps(1, end);
        }

        /* Name slides up after MENMA lands */
        .name-animate {
          animation: slideUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.7s
            both;
        }

        /* Button slides down */
        .button-animate {
          animation: slideDown 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s
            both;
        }

        .glitch:hover {
          animation: glitch 0.8s infinite steps(1, end);
        }
      `}</style>
    </div>
  );
}

function Homepage() {
  return (
    <div className="flex items-center justify-center h-[100vh] mx-25 border-x-white border-x-0 border-dashed">
      <TitlePage />
    </div>
  );
}

export default Homepage;
