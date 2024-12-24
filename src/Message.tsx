import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import sunflowerSrc from './assets/sunflower.avif'

interface Props {
  open: boolean;
}

export const Message: React.FC<Props> = (props) => {
  const { open } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!open || !el) {
      return;
    }

    VanillaTilt.init(el, { glare: true });

    return () => {
      (el as any).vanillaTilt.destroy();
    };
  });


  return (
    <div ref={ref} className="absolute inset-2 md:inset-8 z-10 bg-[#efe4da] p-5 flex justify-between items-center font-oswald shadow-md">
      <img loading="lazy" src={sunflowerSrc} className="h-full py-10" />
      <div className="text-black flex flex-col gap-4 md:gap-8 items-center text-[10px] sm:text-xs md:text-sm">
        <h1 className="font-great-vibe text-lg md:text-6xl">Андрій та Анна</h1>
        <p className="text-balance text-center font-oswald max-w-[200px] md:max-w-[400px] uppercase">Ми запрошуємо вас розділити з нами важливий день у нашому житті</p>
        <div className="flex items-center gap-2 uppercase">
          <span>Неділя</span>
          <div className="flex flex-col items-center">
            <span>Серпень</span>
            <div className="flex gap-4 items-center">
              <span className="h-[22px] w-[1px] bg-black" />
              <span className="md:text-4xl border">17</span>
              <span className="h-[22px] w-[1px] bg-black" />
            </div>
            <span>2024</span>
          </div>
          <span>о 12:30 год</span>
        </div>
      </div>
    </div>
  )
}
