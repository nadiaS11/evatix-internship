"use client";
import {
  MotionProps,
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Bar({ bar }: { bar: number | string }) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress, scrollYProgress, scrollY } = useScroll({
    target: scrollRef,
    container: ref,
    offset: ["0 1", "0 1"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 100,

    duration: 1,

    // restDelta: 0.001,
  });

  const inView = useInView(ref, { margin: "100% 0px 100% 0px" });
  //   console.log(inView, children);

  return (
    <div
      ref={ref}
      className={`${
        inView ? "opacity-100" : "opacity-0"
      } w-5   rounded-t-full rounded-b-full bg-teal-500 my-5 h-[100px] p-[5px]`}
    >
      {" "}
      <motion.div
        // ref={scrollRef}
        initial={{ scaleY: 0, opacity: 0 }}
        style={{
          scaleY: bar,
          backgroundColor: "black",
          transformOrigin: "top",
          // opacity: value ? 1 : 0,
        }}
        // animate={{ opacity: value ? 1 : 0 }}
        // transition={{ type: "spring", damping: 100 }}
        whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        viewport={{ root: scrollRef }}
        className={` bg-black    w-full ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      ></motion.div>
    </div>
  );
}
