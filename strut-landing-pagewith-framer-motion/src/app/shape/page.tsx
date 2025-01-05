"use client";
import {
  MotionProps,
  motion,
  scroll,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import LoremIpsum from "../components/LoremIpsum";
import LoremIpsumTwo from "../components/LoremIpsum2";
import Content from "../components/Content";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { position };
}

export default function Pafe() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(ref);
  const [scrollEndPosition, setScrollEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, scrollEndPosition]);
  const y = useTransform(scrollYProgress, position, ["0%", "90%"]);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      console.log({ scrollYProgress: scrollYProgress.current, scrollY })
    );
  }, [scrollYProgress, scrollY]);

  useEffect(() => {
    if (!target || !target.current) return;
    const parent = target.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    let timeoutId: number | undefined;

    const resetScrollEndPosition = () => {
      if (target && target.current) {
        const newPosition =
          // use height
          target.current.clientHeight -
          window.innerHeight +
          // scrollbar +
          (parent as HTMLElement).offsetTop * 2;

        setScrollEndPosition(-newPosition);
      }
    };

    const debouncedResetScrollEndPosition = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(resetScrollEndPosition, 300);
    };

    resetScrollEndPosition();

    window.addEventListener("resize", debouncedResetScrollEndPosition);
    return () => {
      window.removeEventListener("resize", debouncedResetScrollEndPosition);
      clearTimeout(timeoutId);
    };
  }, []);

  const scaleY = useTransform(scrollYProgress, position, [
    0,
    scrollEndPosition,
  ]);

  const slideAnimation: MotionProps = {
    variants: {
      full: { backgroundColor: "beige" },
      partial: { backgroundColor: "burlywood" },
    },
    initial: "partial",
    animate: "full",

    transition: {
      type: "spring",
      damping: 295,
      stiffness: 145,
      duration: 5,
      delay: 1,
    },

    viewport: { once: true },
  };
  return (
    <div className="relative   flex items-center justify-center  flex-col mx-auto max-w-5xl]">
      <section>
        {" "}
        <motion.div
          className=" "
          // style={{ scaleX: scrollYProgress }}
        />
        <h1 className="h-20 w-full font-bold text-5xl">
          <code>useScroll</code> demo
        </h1>
        <LoremIpsum />
      </section>

      <section ref={ref}>
        <div className=" " style={{ height: "300vh" }}>
          <div className=" ">
            <div className=" ">
              {" "}
              <motion.div className=" ">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    {...slideAnimation}
                    // style={{ scaleY: y }}
                    key={i}
                    className="flex items-start gap-2 relative max-w-xs mb-5"
                  >
                    <div className="w-[400px] h-full ml-5">
                      <h1>Layout</h1>
                      Use powerful yet familiar tools to create your ultimate
                      website design. Import your designs from Figma.
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <LoremIpsumTwo />
    </div>
  );
}
