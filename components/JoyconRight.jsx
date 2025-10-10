export default function JoyconRight() {
  return (
    <div
      className="relative h-full w-[11%]
                 bg-gradient-to-br
                 from-[#f25c5c] to-[#b94141]
                 rounded-r-[5rem] overflow-hidden"
    >

      {/* TASTO + */}
      <div
        className="absolute top-[5%] left-[10%]
                   w-[20%] h-[1%] bg-gradient-to-b
                   from-[#181818] to-[#020202]
                   rounded-md cursor-pointer
                   shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),_0_2px_3px_rgba(0,0,0,0.8)]"
      >

        <div className="absolute left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2
                        w-[20%] h-[450%] bg-gradient-to-b
                        from-[#181818] to-[#020202]
                        rounded-md
                        shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),_0_2px_3px_rgba(0,0,0,0.8)]"
        />

      </div>

      {/* TASTI A, B, X, Y */}
      <div
        className="absolute top-[22%] left-1/2
                   -translate-x-1/2 w-[62%]
                   aspect-square cursor-pointer"
      >

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

      {/* LEVETTA ANALOGICA */}
      <div
        className="absolute bottom-[35%] left-1/2
                   -translate-x-1/2 w-[58%] aspect-square
                   bg-gradient-to-b from-[#202020]
                   to-[#060606] rounded-full cursor-pointer
                   shadow-[inset_2px_2px_4px_rgba(255,255,255,0.15),_inset_-2px_-2px_6px_rgba(0,0,0,0.7)]"
      />

      {/* TASTO HOME */}
      <div
        className="absolute bottom-[22%] left-[30%]
                   -translate-x-1/2 w-[22%] aspect-square
                   bg-gradient-to-b from-[#1b1b1b]
                   to-[#0a0a0a] rounded-full cursor-pointer
                   shadow-[inset_1px_1px_3px_rgba(255,255,255,0.15),_0_2px_3px_rgba(0,0,0,0.6)]
                   flex items-center justify-center"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[65%] h-[65%]"
        >

          <path
            d="M3 10.5L12 3l9 7.5"
          />

          <path
            d="M9 21V12h6v9"
          />

        </svg>

      </div>

    </div>
  );
}
