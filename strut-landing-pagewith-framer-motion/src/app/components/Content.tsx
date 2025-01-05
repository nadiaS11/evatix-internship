import { motion, useScroll } from "framer-motion";
export default function Content() {
  const { scrollX, scrollXProgress, scrollY, scrollYProgress } = useScroll();

  return (
    <div className="w-96 lg:w-[460px] relative p-0 overflow-visible flex flex-col items-start content-start flex-none flex-nowrap gap-10 h-auto justify-center">
      <div className="w-full relative, p-0 overflow-visible flex flex-col items-start content-start flex-none flex-nowrap gap-[10px] h-min justify-center">
        <div className="flex-none h-auto max-w-full relative w-[525px]">
          <div className=" contents">
            <motion.div>
              <motion.div>
                <p>Layout</p>
              </motion.div>
              <motion.div>
                <p>
                  Use powerful yet familiar tools to create your ultimate
                  website design. Import your designs from Figma.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute z-[1] w-4 top-0 p-0 overflow-hidden -left-6 flex flex-col items-start content-center bg-[#ffffff1a] justify-center rounded-t-full rounded-b-full bottom-0  h-min ">
          <motion.div
            initial={{ scaleY: 0, x: 0, y: 0, opacity: 0 }}
            animate={{ scaleY: scrollYProgress, x: 0, y: 1, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              damping: 35,
              stiffness: 88,
            }}
            className="bg-gray-800 rounded-t-full rounded-b-full overflow-hidden h-1  w-1 text-black relative flex flex-col items-start"
          ></motion.div>
        </div>
      </div>
      <br />
    </div>
  );
}
