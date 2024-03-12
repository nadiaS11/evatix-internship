"use client";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { Header } from "./Hero-paralax";
import React from "react";
export const HeroTwo = () => {
  const target = React.useRef(null);
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    // container: target,
    offset: ["start start", "end start"],
  });
  const springConfig = { stiffness: 200, damping: 70 };
  const rotateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [20, 0]),

    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [15, 0]),

    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.24], [20, 0]),

    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.24], [-750, 50]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.24], [900, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.24], [0.3, 1]),
    springConfig
  );
  return (
    <div
      ref={target}
      className="h-[170vh] py-40 overflow-hidden border-2 border-red-600 
       antialiased relative flex flex-col self-auto 
       [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{ rotateZ, translateY, translateX, opacity }}
        className={"flex flex-col  mx-auto items-center justify-center "}
      >
        <motion.div>
          <Image
            src={
              "https://aceternity.com/images/products/thumbnails/new/aceternityui.png"
            }
            alt="aceternity.com"
            width={1000}
            height={800}
          />
        </motion.div>{" "}
      </motion.div>
    </div>
  );
};
