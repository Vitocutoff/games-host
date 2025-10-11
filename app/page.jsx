"use client";

import { useState } from "react";
import JoyconLeft from "@/components/JoyconLeft";
import Screen from "@/components/Screen";
import JoyconRight from "@/components/JoyconRight";

const joyconColors = [
  { from: "#2a8ca7", to: "#1f6b82" }, // blu
  { from: "#f25c5c", to: "#b94141" }, // rosso
  { from: "#00b894", to: "#01997b" }, // verde
  { from: "#fd79a8", to: "#e84393" }, // rosa
  { from: "#f1c40f", to: "#d4ac0d" }, // giallo
  { from: "#9b59b6", to: "#8e44ad" }, // viola
  { from: "#e67e22", to: "#d35400" }, // arancione
  { from: "#7f8c8d", to: "#2c3e50" }, // grigio
  { from: "#ecf0f1", to: "#bdc3c7" }, // bianco
  { from: "#1abc9c", to: "#16a085" }, // turchese
  { from: "#e74c3c", to: "#c0392b" }, // rosso scuro
  { from: "#3498db", to: "#2980b9" }, // blu chiaro
  { from: "#f39c12", to: "#e67e22" }, // arancio chiaro
  { from: "#8e44ad", to: "#71368a" }, // viola scuro
  { from: "#2ecc71", to: "#27ae60" }, // verde chiaro
  { from: "#34495e", to: "#2c3e50" }, // blu notte
];

export default function Page() {
  const [colors, setColors] = useState({
    left: joyconColors[0],
    right: joyconColors[1],
  });

  const changeColor = () => {
    const left = joyconColors[Math.floor(Math.random() * joyconColors.length)];
    let right = joyconColors[Math.floor(Math.random() * joyconColors.length)];

    // assicuriamoci che non siano identici
    while (right.from === left.from && right.to === left.to) {
      right = joyconColors[Math.floor(Math.random() * joyconColors.length)];
    }

    setColors({ left, right });
  };

  return (
    <main
      className="relative min-h-screen w-full
                 flex items-center justify-center
                 overflow-hidden bg-neutral-900"
    >

      {/* SFONDO 3D DINAMICO */}
      <div
        className="absolute inset-0
                   bg-[radial-gradient(circle_at_50%_120%,_rgba(0,0,0,1)_0%,_rgba(30,30,30,1)_35%,_rgba(10,10,10,1)_100%)]"
      />

      <div
        className="absolute inset-0
                   bg-[radial-gradient(circle_at_60%_40%,_rgba(255,255,255,0.05),_transparent_60%)]"
      />

      <div
        className="absolute inset-0
                   bg-[radial-gradient(circle_at_40%_60%,_rgba(255,255,255,0.03),_transparent_60%)]"
      />

      <div
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[80vw] h-[20vh] rounded-full
                   bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.6),_transparent_70%)] blur-3xl"
      />

      {/* SWITCH */}
      <div
        className="relative w-[96%] max-w-[1800px] aspect-[16/7]
                   flex items-center justify-center"
      >

        <JoyconLeft
          onChangeColor={changeColor}
          colors={colors}
        />

        <Screen />

        <JoyconRight
          colors={colors}
        />

      </div>

    </main>
  );
}
