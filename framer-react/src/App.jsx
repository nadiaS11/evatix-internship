import { useEffect } from "react";
import "./App.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import LoremIpsum from "./LoremIpsum";

function App() {
  const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  useEffect(() => {
    console.log({ scrollYProgress });
  }, [scrollYProgress]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "200vh",
      }}
    >
      <motion.div
        style={{
          scaleX: scrollYProgress,
          scaleY: scrollYProgress,
          fontSize: "40px",
        }}
      >
        Hello
      </motion.div>
      <>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <h1>
          <code>useScroll</code> demo
        </h1>
        <LoremIpsum />
      </>
      <div>World</div>
    </div>
  );
}

export default App;
