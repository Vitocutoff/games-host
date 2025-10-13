"use client";

import { motion } from "framer-motion";
import { Henny_Penny, Rubik_Glitch } from "next/font/google";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

const rubikGlitch = Rubik_Glitch({
  weight: "400",
  subsets: ["latin"],
})

export default function Screen() {
  return (
    <div
      className={`${rubikGlitch.className} relative z-10 w-[80%] h-[100%] rounded-2xl overflow-hidden
                 flex flex-col items-center justify-center
                 bg-gradient-to-br from-[#101010] via-[#0c0c0c] to-[#1a1a1a]
                 border border-neutral-700 shadow-[inset_0_0_40px_#00000080]`}
    >

      {/* bagliore dinamico dietro il logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[250px] h-[250px] bg-sky-700/50 blur-[150px] rounded-full"
      />

      {/* logo */}
      <motion.img
        src="/logo2.png"
        alt="Games HUB logo"
        className="w-[40px] mb-6 opacity-0 drop-shadow-[0_0_20px_#00b4ff50]"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* testo */}
      <motion.span
        className="text-6xl font-extrabold tracking-[0.3em] p-2
                   bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-700
                   bg-clip-text text-transparent drop-shadow-[0_0_25px_#00b4ff60]
                   select-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          textShadow: "0 0 20px #00b4ff",
        }}
      >
        GAMES_HUB
      </motion.span>

      {/* effetto riflesso in basso */}
      <motion.div
        className="absolute bottom-0 w-full h-[120px]
                   bg-gradient-to-t from-sky-600/10 to-transparent blur-[40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 1 }}
      />

    </div>
  );
}
