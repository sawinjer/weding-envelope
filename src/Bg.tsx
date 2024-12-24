export const Bg: React.FC = () => {
  return (
    <div className="fixed top-0 h-screen w-full z-[-1]">
      <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="min-w-full min-h-full">
        <defs>
          <filter id="b" x="-500" y="-500" width="2000" height="2000" filterUnits="userSpaceOnUse">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
          </filter>
          <filter id="a" x="-500" y="-500" width="2000" height="2000" filterUnits="userSpaceOnUse">
            &gt;
            <feFlood flood-color="#fff" result="neutral-gray" />
            <feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="100" stitchTiles="stitch" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" result="destaturatedNoise" />
            <feComponentTransfer in="desaturatedNoise" result="theNoise">
              <feFuncA type="table" tableValues="0 0 0.5 0" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="theNoise" mode="soft-light" result="noisy-image" />
          </filter>
          <radialGradient id="c" cx="50%" cy="50%" r="50%" fx="20%" fy="40%">
            <stop offset="0%" stop-color="#059945" />
            <stop offset="100%" stop-color="rgba(5,153,69,0.2)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="#fff" />
        <g filter="url(#a)">
          <g filter="url(#b)">
            <svg width="650" height="650" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" transform="translate(212.562 204.204)">
              <path fill="url(#c)" d="M944.5 843q-64.5 243-346 245.5t-368-243q-86.5-245.5-3-496t334.5-185Q813 230 911 415t33.5 428Z" />
            </svg>
          </g>
        </g>
      </svg>
    </div>
  )
}
