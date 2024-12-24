import bgSrc from './assets/bg.png';

export const Bg: React.FC = () => {
  return (
    <div className="fixed top-0 h-screen w-full z-[-1]">
      <img src={bgSrc} className="w-full h-full object-cover" />
    </div>
  )
}
