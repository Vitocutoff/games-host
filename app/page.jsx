export default function Page() {
  return (
    <main
      className="relative min-h-screen w-full
                 flex items-center justify-center
                 overflow-hidden bg-neutral-900"
    >

      {/* SFONDO 3D DINAMICO */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(0,0,0,1)_0%,_rgba(30,30,30,1)_35%,_rgba(10,10,10,1)_100%)]"
      />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_rgba(255,255,255,0.05),_transparent_60%)]"
      />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_rgba(255,255,255,0.03),_transparent_60%)]"
      />

      <div
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[80vw] h-[20vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.6),_transparent_70%)] blur-3xl"
      />

      {/* NINTENDO SWITCH */}
      <div
        className="relative w-[98%] max-w-[1800px]
                   aspect-[16/7] flex items-center
                   justify-center"
      >

         {/* joy-con sinistro rifinito */}
         <div
           className="absolute left-0 top-0 h-full w-[12%]
                      bg-gradient-to-br from-[#2a8ca7] to-[#1f6b82]
                      rounded-l-[2rem] flex flex-col items-center
                      justify-center overflow-hidden"
        >

           {/* tasto meno (più largo che alto, fessura sottile) */}
           <div
             className="absolute top-[5%] right-[10%]
                        w-[20%] h-[1%]
                        bg-gradient-to-b from-[#181818] to-[#020202]
                        rounded-md shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),_0_2px_3px_rgba(0,0,0,0.8)]"
            />

            {/* levetta analogica (più in alto) */}
            <div
              className="w-[50%] aspect-square bg-gradient-to-b
                         from-[#202020] to-[#060606]
                         rounded-full shadow-[inset_2px_2px_4px_rgba(255,255,255,0.15),_inset_-2px_-2px_6px_rgba(0,0,0,0.7)]
                         mt-[-35%] mb-[25%]"
            />

            {/* croce direzionale (più distanziata) */}
  <div className="relative w-[62%] aspect-square mb-[15%]">
    {[
      { dir: "up", cls: "top-[-5%] left-1/2 -translate-x-1/2" },
      { dir: "down", cls: "bottom-[-5%] left-1/2 -translate-x-1/2" },
      { dir: "left", cls: "left-[-5%] top-1/2 -translate-y-1/2" },
      { dir: "right", cls: "right-[-5%] top-1/2 -translate-y-1/2" },
    ].map((btn) => (
      <div
        key={btn.dir}
        className={`absolute ${btn.cls} w-[35%] aspect-square
                    bg-gradient-to-b from-[#1b1b1b] to-[#0a0a0a]
                    rounded-full flex items-center justify-center
                    shadow-[inset_1px_1px_3px_rgba(255,255,255,0.15),_0_2px_3px_rgba(0,0,0,0.6)]`}
      >
        <span
          className="text-neutral-400 text-[0.7rem]
                     select-none"
        >
          {btn.dir === "up"
            ? "▲"
            : btn.dir === "down"
            ? "▼"
            : btn.dir === "left"
            ? "◀"
            : "▶"}
        </span>
      </div>
    ))}
  </div>

  {/* tasto quadrato inferiore (più piccolo) */}
  <div
    className="w-[16%] aspect-square bg-gradient-to-b
               from-[#1b1b1b] to-[#0a0a0a]
               rounded-md shadow-[inset_1px_1px_3px_rgba(255,255,255,0.15),_0_2px_3px_rgba(0,0,0,0.6)]
               ml-[40%]"
  />
</div>


        {/* schermo */}
        <div
          className="relative z-10 w-[76%] h-[100%]
          bg-gradient-to-br from-[#1e1e1e]
          to-[#0f0f0f] rounded-xl flex items-center
          justify-center shadow-inner border
          border-neutral-700"
        >

          <span
            className="text-white text-2xl font-light
                       tracking-widest"
          >

            Nintendo Switch Games

          </span>

        </div>

        {/* joy-con destro */}
<div
  className="absolute right-0 top-0 h-full w-[12%]
             bg-gradient-to-br from-[#f25c5c] to-[#b94141]
             rounded-r-[2rem] flex flex-col items-center
             justify-center overflow-hidden"
>

  {/* tasto + */}
  <div
    className="absolute top-[5%] left-[10%]
               w-[20%] h-[1%]
               bg-gradient-to-b from-[#181818] to-[#020202]
               rounded-md shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),_0_2px_3px_rgba(0,0,0,0.8)]
               flex items-center justify-center"
  >
    <div
      className="absolute w-[20%] h-[30px]
                 bg-gradient-to-b from-[#181818] to-[#020202]
                 rounded-md shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),_0_2px_3px_rgba(0,0,0,0.8)]"
    />
  </div>

  {/* tasti A, B, X, Y */}
  <div className="relative w-[62%] aspect-square mt-[20%] mb-[20%]">
    {[
      { label: "X", cls: "top-[-5%] left-1/2 -translate-x-1/2" },
      { label: "B", cls: "bottom-[-5%] left-1/2 -translate-x-1/2" },
      { label: "Y", cls: "left-[-5%] top-1/2 -translate-y-1/2" },
      { label: "A", cls: "right-[-5%] top-1/2 -translate-y-1/2" },
    ].map((btn) => (
      <div
        key={btn.label}
        className={`absolute ${btn.cls} w-[35%] aspect-square
                    bg-gradient-to-b from-[#1b1b1b] to-[#0a0a0a]
                    rounded-full flex items-center justify-center
                    shadow-[inset_1px_1px_3px_rgba(255,255,255,0.15),_0_2px_3px_rgba(0,0,0,0.6)]`}
      >
        <span
          className="text-neutral-300 text-[0.8rem]
                     font-medium select-none"
        >
          {btn.label}
        </span>
      </div>
    ))}
  </div>

  {/* levetta analogica (più in basso rispetto ai tasti) */}
  <div
    className="w-[50%] aspect-square bg-gradient-to-b
               from-[#202020] to-[#060606]
               rounded-full shadow-[inset_2px_2px_4px_rgba(255,255,255,0.15),_inset_-2px_-2px_6px_rgba(0,0,0,0.7)]
               mb-[18%]"
  />

  {/* tasto Home (cerchio con casetta) */}
  <div
    className="w-[20%] aspect-square bg-gradient-to-b
               from-[#1b1b1b] to-[#0a0a0a]
               rounded-full shadow-[inset_1px_1px_3px_rgba(255,255,255,0.15),_0_2px_3px_rgba(0,0,0,0.6)]
               flex items-center justify-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#555"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[65%] h-[65%]"
    >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M9 21V12h6v9" />
    </svg>
  </div>
</div>


      </div>

    </main>
  );
}
