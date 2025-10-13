export default function Screen() {
  return (
    <div
      className="relative z-10 w-[78%] h-[100%]
                 bg-gradient-to-br from-[#1e1e1e]
                 to-[#0f0f0f] rounded-xl flex flex-col
                 items-center justify-center shadow-inner
                 border border-neutral-700"
    >

      <img
        src="/logo2.png"
        alt="Games HUB logo"
        className="w-[100px] mb-4 opacity-0 animate-fadeIn"
      />

      <span
        className="text-neutral-500 text-lg font-light
                   tracking-widest font-mono"
      >

        Games_HUB

      </span>

    </div>
  );
}
