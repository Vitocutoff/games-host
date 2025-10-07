export default function HeroSwitch() {
  return (

    <section
      className="w-screen h-screen flex
                 justify-center items-center
                 bg-neutral-900"
    >

      {/* Contenitore con proporzioni fisse */}
      <div
        className="relative w-[95vw] aspect-[2.35/1]
                   flex bg-black rounded-[3rem]
                   shadow-2xl overflow-hidden"
      >

        {/* Joy-Con sinistro */}
        <div
          className="w-[15%] bg-[#009ACD] flex
                     flex-col justify-between
                     items-center p-4 rounded-l-[3rem]"
        >

          {/* Stick analogico */}
          <div
            className="w-12 h-12 bg-black
                       rounded-full shadow-inner"
          ></div>

          {/* D-Pad */}
          <div
            className="grid grid-cols-3 gap-1"
          >

            <div></div>

            <div
              className="w-4 h-4 bg-black
                         rounded"
            ></div>

            <div></div>

            <div
              className="w-4 h-4 bg-black
                         rounded"
            ></div>

            <div
              className="w-4 h-4 bg-black
                         rounded"
            ></div>

            <div
              className="w-4 h-4 bg-black
                         rounded"
            ></div>

            <div></div>

            <div
              className="w-4 h-4 bg-black
                         rounded"
            ></div>

            <div></div>

          </div>

          {/* Pulsantino inferiore */}
          <div
            className="w-6 h-6 bg-black
                       rounded-full opacity-80"
          ></div>

        </div>

        {/* Schermo centrale */}
        <div
          className="flex-1 bg-neutral-950 flex
                     items-center justify-center
                     text-white text-3xl"
        >

          Hero Switch – Schermo Centrale
          
        </div>

        {/* Joy-Con destro */}
        <div
          className="w-[15%] bg-[#E60012] flex
                     flex-col justify-between
                     items-center p-4 rounded-r-[3rem]"
        >

          {/* Stick analogico */}
          <div
            className="w-12 h-12 bg-black
                       rounded-full shadow-inner"
          ></div>
          
          {/* Pulsanti A B X Y */}
          <div
            className="grid grid-cols-2 gap-2"
          >

            <div
              className="w-6 h-6 bg-black
                         rounded-full flex
                         items-center justify-center
                         text-xs text-white"
            >
              X
            </div>

            <div></div>

            <div
              className="w-6 h-6 bg-black
                         rounded-full flex
                         items-center justify-center
                         text-xs text-white"
            >
              Y
            </div>

            <div
              className="w-6 h-6 bg-black
                         rounded-full flex
                         items-center
                         justify-center text-xs
                         text-white"
            >
              A
            </div>

            <div></div>

            <div
              className="w-6 h-6 bg-black
                         rounded-full flex
                         items-center
                         justify-center text-xs
                         text-white"
            >
              B
            </div>

          </div>

          {/* Pulsantino inferiore */}
          <div
            className="w-6 h-6 bg-black
                       rounded-full opacity-80"
          ></div>

        </div>

      </div>

    </section>
  );
}
