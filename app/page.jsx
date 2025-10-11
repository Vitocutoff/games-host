"use client";

import { useState } from "react";
import JoyconLeft from "@/components/JoyconLeft";
import Screen from "@/components/Screen";
import JoyconRight from "@/components/JoyconRight";

const joyconColors = [
  { from: "#828282", to: "#0F0F0F" }, // GRIGIO
  { from: "#FF3C28", to: "#1E0A0A" }, // NEON ROSSO
  { from: "#0AB9E6", to: "#001E1E" }, // NEON BLU
  { from: "#E6FF00", to: "#142800" }, // NEON GIALLO
  { from: "#1EDC00", to: "#002800" }, // NEON VERDE
  { from: "#FF3278", to: "#28001E" }, // NEON ROSA
  { from: "#B400E6", to: "#140014" }, // NEON VIOLA
  { from: "#FF7F00", to: "#4A2C00" }, // NEON ARANCIONE
  { from: "#E10F00", to: "#280A0A" }, // ROSSO
  { from: "#1473FA", to: "#00000F" }, // BLU
  { from: "#96F5F5", to: "#0A1E28" }, // BLU PASTELLO
  { from: "#82FF96", to: "#0A1E0A" }, // VERDE PASTELLO
  { from: "#B28DFF", to: "#4A1F6E" }, // VIOLA PASTELLO
  { from: "#FFB6C1", to: "#4A1F6E" }, // ROSA PASTELLO
  { from: "#FFDC00", to: "#322800" }, // GIALLO PIKACHU
  { from: "#C88C32", to: "#281900" }, // MARRONE EEVEE
  { from: "#D7AA73", to: "#1E1914" }, // LABO CREATORS CONTEST
  { from: "#1473FA", to: "#00000F" }, // BLU REALE DRAGON QUEST XI S
  { from: "#B400E6", to: "#140014" }, // VIOLA DISNEY TSUM TSUM
  { from: "#FF3278", to: "#28001E" }, // ROSA DISNEY TSUM TSUM
  { from: "#F07341", to: "#322D1E" }, // SCARLATTO POKEMON SCARLATTO
  { from: "#500FC8", to: "#00051E" }, // VIOLA POKEMON VIOLETTO
  { from: "#E6E6E6", to: "#323232" }, // BIANCO OLED
  { from: "#6455F5", to: "#28282D" }, // BLU SPLATOON 3
  { from: "#C3FA05", to: "#1E1E28" }, // GIALLO SPLATOON 3
  { from: "#F04614", to: "#1E1914" }, // ROSSO MARIO RED X BLUE
  { from: "#2D50F0", to: "#1E0F46" }, // BLU ZELDA SKYWARD SWORD
  { from: "#500FC8", to: "#00051E" }, // VIOLA ZELDA SKYWARD SWORD
  { from: "#FF6E00", to: "#0B0014" }, // METROID PRIME (ARANCIONE PLASMA CON RIFLESSO SCURO)
  { from: "#00E6B8", to: "#003C28" }, // ZELDA TEARS OF THE KINGDOM (VERDE/BLU ETEREO)
  { from: "#FF003C", to: "#141414" }, // MARIO KART 8 DELUXE (ROSSO CORSA E NERO GOMME)
  { from: "#B4F2B0", to: "#20502A" }, // ANIMAL CROSSING (VERDE PASTELLO E FOGLIA)
  { from: "#6B00B8", to: "#140028" }, // SPLATOON INK PURPLE (VIOLA NEON, INCHIOSTRO)
  { from: "#FFB4D6", to: "#3C0A1E" }, // KIRBY PINK DREAM (ROSA SOFFICE CON TONO CILIEGIA)
  { from: "#F0F046", to: "#325000" }, // PIKMIN BLOOM (GIALLO/VERDE BOTANICO BRILLANTE)
  { from: "#00B4FF", to: "#000A1E" }, // STAR WARS LIGHTSABER BLUE (SPADA JEDI AZZURRA)
  { from: "#FF0000", to: "#280000" }, // STAR WARS SITH RED (OSCURO E INTENSO)
  { from: "#00FFF7", to: "#001414" }, // TRON LEGACY (NEON FUTURISTICO)
  { from: "#C80000", to: "#1E0000" }, // IRON MAN (ROSSO E ORO METALLIZZATO)
  { from: "#E60000", to: "#000A28" }, // SPIDER-MAM (ROSSO E BLU NOTTE)
  { from: "#9A00FF", to: "#280A46" }, // GUARDIANI DELLA GALASSIA (VIOLA COSMICO)
  { from: "#00FF66", to: "#00140A" }, // MATRIX CODE (VERDE FLUO SU NERO)
  { from: "#F0FF00", to: "#320046" }, // CYBERPUNK 2077 (GIALLO ACIDO E VIOLA NEON)
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
        className="relative w-[95%] max-w-[1800px] aspect-[16/7]
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
