"use client";
import { Children, ReactNode, useEffect, useRef, useState } from "react";
import LoremIpsum from "../components/LoremIpsum";
import LoremIpsumTwo from "../components/LoremIpsum2";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

import framer from "../../asset/framer1.webp";
import framerTwo from "../../asset/framer2.webp";
import framerThree from "../../asset/framer3.webp";

const contents = [
  {
    title: "Layout",
    subtitile:
      "Use powerful yet familiar tools to create your ultimate website design. Import your designs from Figma.",
  },
  {
    title: "Effects",
    subtitile:
      "Add effects with a few clicks and capture your audience’s attention when they land on your website.",
  },
  {
    title: "Navigation",
    subtitile:
      "Visually connect your pages. Link to another page, scroll to a specific section, or open a modal; all easy in Framer.",
  },
];

export default function Page() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress, scrollYProgress, scrollY } = useScroll({
    target: wrapperRef,
    // container: ref,
    // offset: ["0 1", "0 1"],
  });

  const scaleYOne = useTransform(scrollYProgress, [0, 1 / 3], [0, 1]);
  const scaleYTwo = useTransform(scrollYProgress, [1 / 3, 2 / 3], [0, 1]);
  const scaleYThree = useTransform(scrollYProgress, [2 / 3, 1], [0, 1]);

  // console.log(scaleY, "scaleyyyyyyyyyy");

  const handlescroll = () => {
    const onscroll = () => console.log(scrollYProgress);
    window.addEventListener("scroll", onscroll);
  };

  const inView = useInView(scrollRef);

  const [activeSection, setActiveSection] = useState<number>(4);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() > 0 && scrollYProgress.get() < 1 / 3) {
        setActiveSection(0);
      } else if (
        scrollYProgress.get() > 1 / 3 &&
        scrollYProgress.get() < 2 / 3
      ) {
        setActiveSection(1);
      } else if (
        scrollYProgress.get() > 2 / 3 &&
        scrollYProgress.get() < 3 / 3
      ) {
        setActiveSection(2);
      } else {
        setActiveSection(4);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYProgress]);

  // handlescroll();
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <LoremIpsum />
      <div
        ref={wrapperRef}
        className="flex w-full gap-20 items-start h-[800vh] bg-[#131313] "
      >
        <div className="sticky top-0  gap-10 flex items-center overflow-hidden h-screen justify-center  border border-red-300">
          <div className="w-5 grid gap-10 ">
            {[scaleYOne, scaleYTwo, scaleYThree].map((value, idx) => {
              // console.log(value);
              return (
                <div
                  ref={scrollRef}
                  key={idx}
                  className={` w-5 rounded-t-full rounded-b-full bg-teal-500 h-[150px] p-[5px] ${
                    activeSection === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* <p className="absolute top-0 bottom-0">{.value}</p> */}
                  <motion.div
                    // ref={scrollRef}
                    initial={{ scaleY: 0, opacity: 0 }}
                    style={{
                      scaleY: value,
                      backgroundColor: "black",
                      transformOrigin: "top",
                    }}
                    // animate={{ opacity: value ? 1 : 0 }}
                    // transition={{ type: "spring", damping: 100 }}
                    whileInView={{ opacity: 1 }}
                    // viewport={{ once: true }}
                    className={`   h-full   w-full `}
                  ></motion.div>
                </div>
              );
            })}

            {/* <ul>
              {[scaleYOne, scaleYTwo, scaleYThree].map((bar, idx) => (
                // <div
                //   key={idx + 1 * 4}
                //   className="w-5   rounded-t-full rounded-b-full bg-teal-500 my-5 h-[100px] p-[5px]"
                // >
                <Bar key={idx + 1 * 4} bar={bar}>
                  {idx + 1}
                </Bar>
              ))}
            </ul> */}
          </div>
          <div className=" flex w-full items-center p-4 text-white">
            <div className=" aspect-square w-full   rounded-2xl ">
              <ul>
                {contents.map((content, idx) => (
                  <div
                    key={idx}
                    className={`h-[200px] ${
                      activeSection === idx ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <h1 className="font-bold text-xl">{content.title}</h1>
                    <p className="text-3xl font-light">{content.subtitile}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full h-full flex items-center">
            {[framer, framerTwo, framerThree].map((img, idx) => (
              <Image
                key={idx}
                src={img}
                width={1000}
                height={700}
                alt="framer pic"
                className={`w-full h-auto ${
                  activeSection === idx ? "block" : "hidden"
                }`}
              />
            ))}
            {activeSection === 4 && (
              <Image
                src={framer}
                width={1000}
                height={700}
                alt="framer pic"
                className={`w-full h-auto ${
                  activeSection === 4 ? "block" : "hidden"
                }`}
              />
            )}
          </div>
        </div>
      </div>
      <div className="h-screen">
        {" "}
        <LoremIpsumTwo />
      </div>
    </div>
  );
}
