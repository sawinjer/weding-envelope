import * as motion from "motion/react-client";
import { useBoolean } from "./hooks/useBoolean";
import { useState } from "react";
import { Message } from "./Message";

const DURATION = 1.5;
const EASE = "easeIn";

export const Envelope: React.FC = () => {
  const open = useBoolean();
  const [envelopeY, setEnvelopeY] = useState(0);

  const whenOpened = () => {
    setEnvelopeY(window.innerHeight + 250);
  };

  return (
    <motion.div
      onClick={open.setTrue}
      className="max-w-[800px] max-h-[500px] aspect-[8/5] w-full relative rounded-md"
      initial={{
        rotateX: 55,
        rotateZ: -55,
      }}
      variants={{
        floating: {
          translateY: [-10, 10, -10],
          transition: {
            type: "keyframes",
            duration: 2,
            ease: ["easeIn", "easeOut"],
            repeat: Infinity,
          },
        },
        hovering: {
          rotateX: 0,
          rotateZ: 0,
          translateY: 0,
          transition: {
            duration: 0.3,
          },
        },
      }}
      animate={open.value ? "hovering" : "floating"}
      whileHover={open.value ? undefined : "hovering"}
    >
      <EnvelopCover open={open.value} whenOpened={whenOpened} y={envelopeY} />
      <EnvelopeFront y={envelopeY} />
      <Message open={open.value} />
      <EnvelopeBg y={envelopeY} />
    </motion.div>
  );
};

const EnvelopCover: React.FC<{
  open: boolean;
  whenOpened: () => void;
  y: number;
}> = (props) => {
  const { open, whenOpened, y } = props;

  return (
    <motion.div
      className="absolute left-0 top-0 w-full h-full rounded-md overflow-hidden z-30"
      animate={
        open
          ? {
            translateY: y,
            zIndex: y ? 5 : 30,
            rotateX: 180,
            transformOrigin: "top center",
          }
          : undefined
      }
      transition={{
        duration: y ? DURATION : 0.4,
        ease: EASE,
      }}
      onAnimationComplete={whenOpened}
    >
      <svg viewBox="0 0 80 50" className="w-full h-full">
        <title>Envelope cover</title>
        <polygon points="0,0 80,0 40,27" fill="#304539" />
      </svg>
    </motion.div>
  );
};

const EnvelopeFront: React.FC<{ y: number }> = ({ y }) => {
  return (
    <motion.div
      className="absolute left-0 top-0 w-full h-full rounded-md overflow-hidden z-20"
      animate={{ translateY: y }}
      transition={{
        duration: DURATION,
        ease: EASE,
      }}
    >
      <svg viewBox="0 0 800 500" className="w-full h-full">
        <title>Envelope cover</title>
        <polygon
          points="0,500 0,0 400,250, 800,0 800,500"
          fill="#3d5748"
          className="drop-shadow-2xl"
        />
      </svg>
    </motion.div>
  );
};

const EnvelopeBg: React.FC<{ y: number }> = ({ y }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 bg-[#1f2e25] w-full h-full z-0 rounded-md"
      animate={{ translateY: y }}
      transition={{
        duration: DURATION,
        ease: EASE,
      }}
    />
  );
};
