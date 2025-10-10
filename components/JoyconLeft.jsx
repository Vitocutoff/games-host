export default function JoyconLeft() {
  return (
    <div
      className="relative h-full w-[11%]
                 bg-gradient-to-br
                 from-[#2a8ca7] to-[#1f6b82]
                 rounded-l-[5rem] overflow-hidden"
    >

      {/* TASTO MENO */}
      <div
        className="absolute top-[5%] right-[10%]
                   w-[20%] h-[1%] bg-gradient-to-b
                   from-[#181818] to-[#020202]
                   rounded-md cursor-pointer
                   shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),_0_2px_3px_rgba(0,0,0,0.8)]"
      />

      {/* LEVETTA ANALOGICA */}
      <div
        className="absolute top-[22%] left-1/2
                   -translate-x-1/2 w-[58%]
                   aspect-square bg-gradient-to-b
                   from-[#202020] to-[#060606]
                   rounded-full cursor-pointer
                   shadow-[inset_2px_2px_4px_rgba(255,255,255,0.15),_inset_-2px_-2px_6px_rgba(0,0,0,0.7)]"
      />

      {/* TASTI DIREZIONALI */}
      <div
        className="absolute top-[50%] left-1/2
                   -translate-x-1/2 w-[62%]
                   aspect-square cursor-pointer"
      >

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
              className="text-neutral-400 text-[0.7rem] select-none"
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

      {/* TASTO QUADRATO INFERIORE */}
      <div
        className="absolute bottom-[22%] left-[58%] w-[18%]
                   aspect-square bg-gradient-to-b from-[#1b1b1b]
                   to-[#0a0a0a] rounded-md cursor-pointer
                   shadow-[inset_1px_1px_3px_rgba(255,255,255,0.15),_0_2px_3px_rgba(0,0,0,0.6)]"
      />

    </div>
  );
}
