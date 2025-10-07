export default function Page() {
  return (
    <main
      className="relative min-h-screen w-full
                 flex items-center justify-center
                 overflow-hidden bg-neutral-900"
    >

      {/* --- sfondo 3D dinamico --- */}
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

      {/* --- la tua Switch, esattamente come l’avevi --- */}
      <div
        className="relative w-[98%] max-w-[1800px]
                   aspect-[16/7] flex items-center
                   justify-center"
      >

        {/* joy-con sinistro */}
        <div
          className="absolute left-0 top-0 h-full
                     w-[12%] bg-gradient-to-br
                     from-[#2a8ca7] to-[#1f6b82]
                     rounded-l-[2rem]"
        />

        {/* schermo */}
        <div
          className="relative z-10 w-[76%] h-[98%]
          bg-gradient-to-br from-[#1e1e1e]
          to-[#0f0f0f] rounded-xl flex items-center
          justify-center shadow-inner border
          border-neutral-700"
        >

          <span
            className="text-white text-2xl font-light
                       tracking-widest"
          >

            Nintendo Switch Interface

          </span>

        </div>

        {/* joy-con destro */}
        <div
          className="absolute right-0 top-0 h-full
                     w-[12%] bg-gradient-to-br
                     from-[#f25c5c] to-[#b94141]
                     rounded-r-[2rem]"
        />

      </div>

    </main>
  );
}
