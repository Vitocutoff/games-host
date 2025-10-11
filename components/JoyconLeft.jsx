"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function JoyconLeft({ onChangeColor }) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(true);
    if (onChangeColor) onChangeColor();
    setTimeout(() => setPressed(false), 150);
  };

  return (
    <div className="relative h-full w-[11%] bg-gradient-to-br from-[#2a8ca7] to-[#1f6b82] rounded-l-[5rem] overflow-hidden">

      {/* TASTO MENO */}
      <div
        className="absolute top-[5%] right-[10%] w-[20%] h-[1%] bg-gradient-to-b from-[#181818] to-[#020202] rounded-md cursor-pointer shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),_0_2px_3px_rgba(0,0,0,0.8)]"
      />

      {/* LEVETTA ANALOGICA */}
      <div
        className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[58%] aspect-square bg-gradient-to-b from-[#202020] to-[#060606] rounded-full cursor-pointer shadow-[inset_2px_2px_4px_rgba(255,255,255,0.15),_inset_-2px_-2px_6px_rgba(0,0,0,0.7)]"
      />

      {/* TASTI DIREZIONALI */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[62%] aspect-square cursor-pointer">
        {[
          { dir: "up", cls: "top-[-5%] left-1/2 -translate-x-1/2" },
          { dir: "down", cls: "bottom-[-5%] left-1/2 -translate-x-1/2" },
          { dir: "left", cls: "left-[-5%] top-1/2 -translate-y-1/2" },
          { dir: "right", cls: "right-[-5%] top-1/2 -translate-y-1/2" },
        ].map((btn) => (
          <div
            key={btn.dir}
            className={`absolute ${btn.cls} w-[35%] aspect-square bg-gradient-to-b from-[#1b1b1b] to-[#0a0a0a] rounded-full flex items-center justify-center shadow-[inset_1px_1px_3px_rgba(255,255,255,0.15),_0_2px_3px_rgba(0,0,0,0.6)]`}
          >
            <span className="text-neutral-400 text-[0.7rem] select-none">
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

      {/* TASTO QUADRATO INFERIORE (cambia colore) */}
      <div
        className={`absolute bottom-[22%] left-[58%] w-[18%]
                    aspect-square bg-gradient-to-b from-[#1b1b1b]
                    to-[#0a0a0a] rounded-md cursor-pointer
                    shadow-[inset_1px_1px_3px_rgba(255,255,255,0.15),_0_2px_3px_rgba(0,0,0,0.6)]
                    ${pressed ? "translate-y-[2px]" : ""}`}
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />

      {/* Tooltip */}
      <Transition
        show={hover}
        enter="transition duration-150 ease-out"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-100 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute bottom-[8%] left-[50%]
                        -translate-x-1/2 p-2 text-xs z-50
                        bg-black/50 text-white rounded-md
                        shadow-lg pointer-events-none">
          Cambia colore Joy-Con
        </div>
      </Transition>
    </div>
  );
}
