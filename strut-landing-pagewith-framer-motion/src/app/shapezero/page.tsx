"use client";
import {
  motion,
  MotionProps,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { throttle } from "throttle-debounce-ts";

// import "normalize.css";
import { useEffect, useRef, useState } from "react";
import LoremIpsum from "../components/LoremIpsum";
// import "./styles.css";

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollWidth;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetWidth;

    setPosition([start / pageHeight, end / pageHeight]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { position };
}

const slideAnimation: MotionProps = {
  variants: {
    full: { backgroundColor: "#663399" },
    partial: { backgroundColor: "blanchedalmond" },
  },
  initial: "partial",
  whileInView: "full",
  viewport: { amount: 1, once: true },
};

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useViewportScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);
  const y = useTransform(scrollYProgress, position, ["0%", "95%"]);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      console.log({ scrollYProgress: scrollYProgress.current, scrollY })
    );
  }, [scrollY, scrollYProgress]);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarHeight =
      window.innerHeight - document.documentElement.clientHeight;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          // use height
          carouselRef.current.clientHeight -
          window.innerHeight +
          // scrollbar +
          (parent as HTMLElement).offsetTop * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section>
        <LoremIpsum />
      </section>
      <section ref={ref}>
        <div className="container" style={{ height: "100vh" }}>
          <div className="sticky-wrapper">
            {/* <h3>hello world</h3> */}
            <div className="inner-container">
              <motion.div
                ref={carouselRef}
                className=" flex items-start   relative  "
                // style={{ y: x }}
              >
                <motion.div
                  // {...slideAnimation}
                  style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    translateY: x,
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    damping: 100,
                    stiffness: 100,
                    // delay: 1,
                  }}
                  className="absolute w-[50px] h-[10px] bg-[#808080]"
                ></motion.div>
                <motion.div className="flex flex-col items-start gap-5 ml-20  ">
                  {Array.from(Array(4).keys()).map((i) => (
                    <div key={i} className="bg-teal-500  ">
                      <h1>Layout</h1>
                      Use powerful yet familiar tools to create your ultimate
                      website design. Import your designs from Figma.
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="container">
            <h2>
              Scroll Linked animations, useViewportScroll, useTransform and
              custom useElementViewportPosition hook
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              corrupti eaque sed ex cum? Facilis animi consequatur repellendus
              perspiciatis odio praesentium aliquam, quis ratione.
            </p>
            <p>
              Velit nemo deleniti quasi quos soluta illum voluptatum laudantium,
              dolorem excepturi vero ullam consequatur ea eius inventore iste!
              Qui ipsam minus eius nostrum nisi aliquid laboriosam in quia
              praesentium quaerat.
            </p>
          </div>
          <h2>Ea, asperiores</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            necessitatibus vel earum tempore asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            autem est vitae magni alias, delectus atque repudiandae maiores
            molestiae fuga error a, laboriosam velit voluptas odio inventore
            modi libero, ratione quas neque. Corporis, nam?
          </p>
          <p>
            Minima exercitationem, quo fugit hic ipsam est laudantium
            accusantium quisquam nobis porro obcaecati veniam atque natus
            reprehenderit corrupti modi consequatur fuga animi tempore officiis
            enim expedita ullam! Vitae repudiandae, sapiente temporibus neque,
            repellat expedita cupiditate magnam harum debitis similique
            voluptatibus sit aspernatur rem hic eligendi dolor? Harum, saepe.
          </p>
        </div>
      </section>
    </div>
  );
}
