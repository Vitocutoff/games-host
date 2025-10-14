"use client";

import { motion } from "framer-motion";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

export default function Screen() {
  const text = "Games HUB".split("");

  return (
    <div
      className={`${russoOne.className} relative w-[80%] h-[100%] rounded-2xl overflow-hidden
                 flex flex-col items-center justify-center`}
    >
      {/* Sfondo gradiente dinamico */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #101010 0%, #0c0c0c 50%, #1a1a1a 100%)",
        }}
        animate={{ rotate: [0, 0.5, -0.5, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Glow soft dietro logo e testo */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[250px] h-[250px] bg-sky-700/20 blur-[120px] rounded-full" />
      </div>

      {/* Logo con animazione cinematica */}
      <motion.img
        src="/logo2.png"
        alt="Games HUB logo"
        className="w-[100px] mb-8 drop-shadow-[0_0_40px_#00c8ff80] z-10"
        initial={{ opacity: 0, y: -50, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.3, 1] }}
      />

      {/* Testo principale con effetto 3D */}
      <div className="relative flex z-10 select-none">
        {text.map((char, i) => (
          <motion.span
            key={i}
            className="text-[5rem] text-sky-600 font-bold"
            style={{
              textShadow:
                "0 2px 0 #000, 0 4px 0 #111, 0 6px 0 #222, 0 8px 15px rgba(0,0,0,0.8)",
              background: "linear-gradient(90deg, #ffffff, #c0e8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "rgba(255, 255, 255, 0.8)",
            }}
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.5 + i * 0.08,
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Riflesso inferiore soft */}
      <motion.div
        className="absolute bottom-0 w-full h-[120px] bg-gradient-to-t from-[#00e0ff20] to-transparent blur-[60px] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
      />
    </div>
  );
}
