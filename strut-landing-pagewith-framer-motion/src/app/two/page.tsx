"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LoremIpsum from "../components/LoremIpsum";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <>
      <section className=" ">
        <div ref={ref}>
          <figure className="progress">
            <svg id="progress" height="100" width="200">
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="0"
                pathLength="1"
                className="bg"
              />
              {/* <circle cx="50" cy="50" r="30" pathLength="1" className="bg" /> */}
              <motion.line
                x1="100"
                y1="0"
                x2="0"
                y2="0"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </figure>
        </div>
      </section>
    </>
  );
}

export default function Page() {
  return (
    <>
      <LoremIpsum />
      <div>
        {" "}
        <Item />
        <Item />
        <Item />
        <Item />
      </div>

      {/* <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item /> */}
    </>
  );
}
