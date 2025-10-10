import JoyconLeft from "@/components/JoyconLeft";
import Screen from "@/components/Screen";
import JoyconRight from "@/components/JoyconRight";

export default function Page() {
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
        className="absolute bottom-[8%] left-1/2
                   -translate-x-1/2 w-[80vw] h-[20vh]
                   rounded-full
                   bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.6),_transparent_70%)] blur-3xl"
      />

      {/* SWITCH */}
      <div
        className="relative w-[98%] max-w-[1800px]
                   aspect-[16/7] flex items-center
                   justify-center"
      >

        <JoyconLeft />

        <Screen />

        <JoyconRight />

      </div>

    </main>
  );
}
