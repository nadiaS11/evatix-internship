"use client";

import Image from "next/image";
import styles from "../styles/home.module.css";
import banner from "../asset/banner.png";
import bannerTwo from "../asset/banner2.png";
import bannerThree from "../asset/banner3.png";
import shapeFour from "../asset/shape4.png";
import shapeFive from "../asset/shape5.png";
import shapeZero from "../asset/shape0.png";
import shapeOne from "../asset/pic-1.png";
import shapeTwo from "../asset/pic-status.png";
import shapeThree from "../asset/create-blog.png";
import shapeOrganize from "../asset/pic-organize.png";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  easeInOut,
  easeOut,
  motion,
  useScroll,
  
  useTransform,
} from "framer-motion";

function min(a: number, b: number) {
  if (a > b) return b;
  return a;
}

export default function Home() {
  type AnimationProperties = {
    scaleX: number;
    translateY: number;
    opacity: number;
  };

  const [rotate, setRotate] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const [scrollAmount, setScrollAmount] = useState(0);

  // useEffect(() => {
  //   console.log(x, y, rotate);
  //   const handleScroll = () => {
  //     function map(
  //       n: number,
  //       start1: number,
  //       stop1: number,
  //       start2: number,
  //       stop2: number
  //     ) {
  //       return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  //     }

  //     const scrolled: number = window.scrollY;
  //     let newPosition = map(scrolled, 0, 400, -300, 0);
  //     newPosition = min(newPosition, 0);
  //     setPosition(newPosition);
  //     // const imgZero: HTMLElement | null = document.getElementById("shapeZero");
  //     console.log(newPosition, "new positionsss");
  //     // if (scrolled) {

  //     //   //;
  //     // }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [x, y, rotate]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      console.log(currentScrollPos);
      setScrollAmount(currentScrollPos);
      if (scrollAmount > 820) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollAmount]);

  const { scrollYProgress, scrollY } = useScroll();

  const zeroX = useTransform(scrollY, [0, 500], [0, -350], {
    clamp: true,
    ease: easeInOut,
  });

  const zeroY = useTransform(scrollY, [0, 500], [-500, 100], {
    clamp: true,
    ease: easeInOut,
  });
  const oneX = useTransform(scrollY, [0, 500], [-250, 450], {
    clamp: true,
    ease: easeInOut,
  });

  const oneY = useTransform(scrollY, [0, 500], [-500, 150], {
    clamp: true,
    ease: easeInOut,
  });
  const twoX = useTransform(scrollY, [0, 500], [-50, -550], {
    clamp: true,
    ease: easeInOut,
  });

  const twoY = useTransform(scrollY, [0, 500], [-400, 100], {
    clamp: true,
    ease: easeInOut,
  });
  const threeX = useTransform(scrollY, [0, 500], [-350, 180], {
    clamp: true,
    ease: easeInOut,
  });

  const threeY = useTransform(scrollY, [0, 500], [-340, 100], {
    clamp: true,
    ease: easeInOut,
  });
  const organizeX = useTransform(scrollY, [1800, 850], [-360, -50], {
    clamp: true,
    ease: easeInOut,
  });
  const organizeY = useTransform(scrollY, [1800, 850], [-120, -520], {
    clamp: true,
    ease: easeInOut,
  });
  const opacity = useTransform(
    scrollY,
    [0,   550],
    [1,  0],
    {
      clamp: true,
      ease: easeInOut,
    }
  );

  return (
    <main className={`${styles.home}  `}>
      <nav
        className="  
      z-50 backdrop-blur-md flex justify-center fixed top-0 left-0 right-0 items-center w-screen"
      >
        <div
          className="z-50 h-14 border-b border-[rgba(0,0,0,.1)] flex-1 flex items-center justify-between px-4 md:px-14 relative  
         text-[rgba(0, 0, 0, 0.5)]"
        >
          <div className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="13"
              viewBox="0 0 51 13"
              fill="none"
            >
              <g clipPath="url(#clip0_5_354)">
                <path
                  d="M45.8019 12.393C45.62 12.393 45.4712 12.2438 45.4712 12.0615V2.96204C45.4712 2.86259 45.4051 2.7963 45.3059 2.7963H43.1236C42.9418 2.7963 42.793 2.64713 42.793 2.4648V1.12226C42.793 0.939943 42.9418 0.790771 43.1236 0.790771H49.8193C50.0011 0.790771 50.1499 0.939943 50.1499 1.12226V2.4648C50.1499 2.64713 50.0011 2.7963 49.8193 2.7963H47.637C47.5378 2.7963 47.4717 2.86259 47.4717 2.96204V12.0615C47.4717 12.2438 47.3229 12.393 47.141 12.393H45.8019Z"
                  fill="black"
                  fillOpacity="0.8"
                />
                <path
                  d="M35.9377 12.5919C33.9372 12.5919 32.2344 11.4151 32.2344 8.87917V1.12226C32.2344 0.939943 32.3832 0.790771 32.565 0.790771H33.9042C34.086 0.790771 34.2348 0.939943 34.2348 1.12226V8.87917C34.2348 9.95652 34.9622 10.5864 35.9377 10.5864C36.9461 10.5864 37.6736 9.95652 37.6736 8.87917V1.12226C37.6736 0.939943 37.8224 0.790771 38.0042 0.790771H39.3433C39.5252 0.790771 39.674 0.939943 39.674 1.12226V8.87917C39.674 11.4151 37.9711 12.5919 35.9377 12.5919Z"
                  fill="black"
                  fillOpacity="0.8"
                />
                <path
                  d="M21.7603 12.393C21.5785 12.393 21.4297 12.2438 21.4297 12.0615V1.12226C21.4297 0.939943 21.5785 0.790771 21.7603 0.790771H25.0668C27.1995 0.790771 28.6544 2.28248 28.6544 4.37088C28.6544 5.76315 27.9104 6.74105 26.9185 7.42061C26.687 7.58635 26.687 7.70237 26.8027 7.93442L28.5883 11.846C28.7205 12.1278 28.6048 12.393 28.3072 12.393H26.9681C26.7201 12.393 26.6044 12.277 26.5217 12.0946L24.7197 8.08359C24.6701 7.96757 24.6039 7.91784 24.4551 7.91784H23.5954C23.4963 7.91784 23.4301 7.98414 23.4301 8.08359V12.0615C23.4301 12.2438 23.2813 12.393 23.0995 12.393H21.7603ZM23.4301 5.81287C23.4301 5.91232 23.4963 5.97862 23.5954 5.97862H25.0503C25.9265 5.97862 26.5878 5.26591 26.5878 4.37088C26.5878 3.39298 25.9265 2.76315 25.0503 2.76315H23.5954C23.4963 2.76315 23.4301 2.82945 23.4301 2.92889V5.81287Z"
                  fill="black"
                  fillOpacity="0.8"
                />
                <path
                  d="M13.8839 12.393C13.7021 12.393 13.5533 12.2438 13.5533 12.0615V2.96204C13.5533 2.86259 13.4871 2.7963 13.3879 2.7963H11.2056C11.0238 2.7963 10.875 2.64713 10.875 2.4648V1.12226C10.875 0.939943 11.0238 0.790771 11.2056 0.790771H17.9013C18.0832 0.790771 18.232 0.939943 18.232 1.12226V2.4648C18.232 2.64713 18.0832 2.7963 17.9013 2.7963H15.719C15.6198 2.7963 15.5537 2.86259 15.5537 2.96204V12.0615C15.5537 12.2438 15.4049 12.393 15.223 12.393H13.8839Z"
                  fill="black"
                  fillOpacity="0.8"
                />
                <path
                  d="M4.35179 12.592C2.10338 12.592 0.433594 11.2495 0.433594 8.97878V8.89591C0.433594 8.71359 0.582386 8.56442 0.764244 8.56442H2.16951C2.35136 8.56442 2.50015 8.71359 2.50015 8.89591V9.04508C2.50015 10.0561 3.27718 10.7025 4.33526 10.7025C5.39334 10.7025 6.12077 10.0396 6.12077 9.14453C6.12077 8.29922 5.59173 7.81856 4.64938 7.55337L3.29371 7.17215C1.78926 6.74121 0.747711 5.64729 0.747711 3.90696C0.747711 1.95116 2.3183 0.592041 4.40139 0.592041C6.50102 0.592041 8.00547 1.88486 8.00547 3.82408V3.97326C8.00547 4.15558 7.85668 4.30475 7.67482 4.30475H6.31916C6.1373 4.30475 5.98851 4.15558 5.98851 3.97326V3.84066C5.98851 2.99536 5.37681 2.48154 4.40139 2.48154C3.45904 2.48154 2.79774 2.99536 2.79774 3.82408C2.79774 4.65281 3.37638 5.06718 4.23607 5.33237L5.50907 5.71359C7.17885 6.21083 8.1708 7.23845 8.1708 9.04508C8.1708 11.1666 6.58368 12.592 4.35179 12.592Z"
                  fill="black"
                  fillOpacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_354">
                  <rect width="51" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="inline-flex items-center gap-3  leading-5 transition-all duration-100 text-sm">
            <button className="opacity-75 rounded-[28px] hover:bg-[rgba(0,0,0,0.1)] py-1 px-3 ">
              Log In
            </button>
            <button className="opacity-75 rounded-[28px]  bg-[rgba(0,0,0,0.1)] py-1 px-3 ">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <section
        className="max-w-full flex flex-col
        flex-wrap items-center justify-center
         -mb-[120px] pb-60 overflow-hidden"
      >
        {/* text part */}
        <div className="px-6 md:px-0 z-20 max-w-[750px] text-center flex flex-col flex-wrap items-center justify-center mt-32 mb-20 mx-auto relative">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              damping: 30,
              duration: 0.1,
            }}
          >
            <h1 className="mb-5 pb-3  text-5xl leading-[48px] lg:text-[65px] lg:leading-[80px] text-[#000000CC]">
              The all-in-one
              <br />
              AI workspace for writers
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              damping: 40,

              duration: 0.2,
              delay: 0.1,
            }}
          >
            <p className="max-w-[550px]  text-[#00000099] mb-6 text-xl  ">
              Strut combines the tools you need to run your entire writing
              process — capture projects, notes, drafts, and more in
              collaborative workspaces powered by AI.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              damping: 15,

              duration: 0.5,
              delay: 1,
            }}
          >
            <Link
              href={"/"}
              className=" flex pt-1 px-3 gap-2 text-[rgba(0,0,0,0.65)] bg-[#ffb546] rounded-[28px] items-center  hover:scale-x-110 transition-all duration-200"
            >
              <div>Get Started </div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_19)">
                  <path
                    d="M6.84963 1.14354C6.77775 1.07902 6.68871 1.0367 6.5933 1.02169C6.49789 1.00669 6.40016 1.01964 6.31194 1.05899C6.22373 1.09833 6.1488 1.16239 6.09621 1.24341C6.04363 1.32443 6.01565 1.41895 6.01562 1.51554V5.01554H1.01562C0.750409 5.01554 0.496055 5.1209 0.308518 5.30844C0.120982 5.49597 0.015625 5.75033 0.015625 6.01554C0.015625 6.28076 0.120982 6.53511 0.308518 6.72265C0.496055 6.91018 0.750409 7.01554 1.01562 7.01554H6.01562V10.5155C6.01565 10.6121 6.04363 10.7067 6.09621 10.7877C6.1488 10.8687 6.22373 10.9327 6.31194 10.9721C6.40016 11.0114 6.49789 11.0244 6.5933 11.0094C6.68871 10.9944 6.77775 10.9521 6.84963 10.8875L11.8496 6.38754C11.9018 6.34065 11.9436 6.28329 11.9722 6.2192C12.0007 6.15511 12.0155 6.08572 12.0155 6.01554C12.0155 5.94536 12.0007 5.87597 11.9722 5.81188C11.9436 5.74779 11.9018 5.69043 11.8496 5.64354L6.84963 1.14354Z"
                    fill="black"
                    fillOpacity="0.65"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_19">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0.015625 0.015625)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </motion.div>
        </div>

        <div
          id="containerOne"
          className="z-[1] max-w-[1200px] mx-4 relative overflow-visible "
        >
          {/* transform perspective rules goes here */}
          <motion.div
            initial={{ scale: 1.1, y: 0, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              damping: 30,
              duration: 0.3,
              delay: 0.4,
            }}
          >
            <div
              className={`w-full max-w-[1200px] bg-[rgba(0,0,0,.1)] border-[rgba(0,0,0,.15)] border rounded-xl mx-auto relative  overflow-hidden
            shadow-[0_2px_40px_rgba(0,0,0,.2)]    ${styles.perspective661}`}
            >
              <Image
                src={banner}
                alt="Snap of Strut"
                width={1100}
                height={670}
                className="max-w-full  inline-block    align-middle"
              />
            </div>
            <div className={styles.bgGradient}></div>{" "}
          </motion.div>
          {/* 4 image container here */}

          <div className="hidden md:block  md:absolute md:top-0 md:left-0 md:right-0    ">
            <motion.div
              style={{
                translateX: zeroX,
                translateY: zeroY,
                opacity: opacity,
                animationDuration: "1500",
              }}
              // ref={targetRef}
              initial={{ scale: 0.99, x: 100, y: 100, opacity: 0 }}
              animate={{
                scale: 1,
                x: 100,
                y: 100,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                damping: 15,
                duration: 0.3,

                delay: 1.4,
              }}
            >
              <div
                id="shapeZero"
                className={`absolute   max-w-[410px]   right-0  `}
              >
                <Image
                  src={shapeZero}
                  alt="Snap of Strut"
                  width={480}
                  height={200}
                  className=""
                />
              </div>
            </motion.div>

            <motion.div
              style={{
                translateX: oneX,
                translateY: oneY,
                opacity: opacity,
                animationDuration: "1500",
                rotateZ: "10.5deg",
              }}
              // ref={targetRef}
              initial={{ scale: 0.99, x: 100, y: 100, opacity: 0 }}
              animate={{
                scale: 1,
                x: 100,
                y: 100,
                opacity: 1,
              }}
              transition={{
                // type: "spring",
                damping: 15,
                duration: 0.3,

                delay: 1.6,
              }}
            >
              <div className={`absolute max-w-[280px]    }`}>
                <Image
                  src={shapeOne}
                  alt="Snap of Strut"
                  width={270}
                  // height={200}
                  className=" "
                />
              </div>
            </motion.div>

            <motion.div
              style={{
                translateX: twoX,
                translateY: twoY,
                opacity: opacity,
                animationDuration: "1500",
                // rotateZ: "10deg",
              }}
              // ref={targetRef}
              initial={{ scale: 0.99, x: 100, y: 100, opacity: 0 }}
              animate={{
                scale: 1,
                x: 100,
                y: 100,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                damping: 15,
                duration: 0.3,
                delay: 1.8,
              }}
            >
              {" "}
              <div className={`absolute max-w-[230px] right-0 `}>
                <Image
                  src={shapeTwo}
                  alt="Snap of Strut"
                  width={200}
                  // height={200}
                  className="w-full"
                />
              </div>
            </motion.div>

            <motion.div
              style={{
                translateX: threeX,
                translateY: threeY,
                opacity: opacity,
                animationDuration: "1500",
                // rotateZ: "10deg",
              }}
              // ref={targetRef}
              initial={{ scale: 0.99, x: 100, y: 100, opacity: 0 }}
              animate={{
                scale: 1,
                x: 100,
                y: 100,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                damping: 15,
                duration: 0.3,
                delay: 1.2,
              }}
            >
              {" "}
              <div className={`absolute max-w-[420px] left-0   `}>
                <Image
                  src={shapeThree}
                  alt="Snap of Strut"
                  width={380}
                  // height={200}
                  className="  align-middle inline-block"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* organizing section */}
      <section className="z-0 pb-0 relative ">
        <div className="z-[6] max-w-[480px] opacity-100 text-center mb-8 mx-auto flex items-center justify-center flex-wrap  relative ">
          <div className="flex items-center justify-center gap-2 text-[#00000099] font-semibold">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5_285)">
                <path
                  d="M11.6562 6.33125C11.4705 6.02189 11.2199 5.75642 10.9218 5.55307C10.6237 5.34973 10.2851 5.21333 9.92925 5.15325L6.65625 4.60725V1.53125C6.65625 1.26603 6.55089 1.01168 6.36336 0.824143C6.17582 0.636607 5.92147 0.53125 5.65625 0.53125C5.39103 0.53125 5.13668 0.636607 4.94914 0.824143C4.76161 1.01168 4.65625 1.26603 4.65625 1.53125V8.03125C4.65625 8.16386 4.60357 8.29104 4.5098 8.3848C4.41604 8.47857 4.28886 8.53125 4.15625 8.53125C4.02364 8.53125 3.89646 8.47857 3.8027 8.3848C3.70893 8.29104 3.65625 8.16386 3.65625 8.03125V5.53125H3.15625C2.75843 5.53125 2.37689 5.68929 2.09559 5.97059C1.81429 6.25189 1.65625 6.63343 1.65625 7.03125V9.03125C1.70389 9.75391 1.93879 10.4517 2.33784 11.0561C2.7369 11.6605 3.28638 12.1506 3.93225 12.4782C4.00178 12.5131 4.07848 12.5312 4.15625 12.5312H10.1562C10.2613 12.5314 10.3638 12.4984 10.449 12.437C10.5343 12.3756 10.598 12.2889 10.6313 12.1892L11.8903 8.40925C12.0041 8.06661 12.0422 7.70332 12.0018 7.34452C11.9614 6.98572 11.8435 6.63999 11.6562 6.33125Z"
                  fill="black"
                  fillOpacity="0.6"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_285">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0.65625 0.53125)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>Drag & Drop Organization</p>
          </div>
          <h2 className="w-full text-4xl  text-[#000000CC] lg:text-6xl pb-2 mb-6 leading-[64px]">
            {" "}
            Organize Writing Chaos
          </h2>
          <p className=" text-[#00000099] sm:text-xl leading-7">
            Notes, drafts, outlines—even the best process <br /> can get messy.
            Strut organizes your writing <br />
            process for you.
            <br />
            <br />
            Quickly capture and organize your content in <br />
            flexible, collaborative workspaces.
          </p>
        </div>
        <div className="flex -mt-20 -mb-32 pt-20 ">
          <div className="max-w-[1200px] mx-auto relative ">
            <Image
              src={bannerTwo}
              alt="Snap of Strut"
              width={1200}
              height={670}
              className=" mx-auto max-w-full inline-block align-middle"
            />

            <motion.div
              style={{
                translateX: organizeX,
                translateY: organizeY,

                animationDuration: "1500",
                // rotateZ: "10deg",
              }}
              initial={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 80,
                stiffness: 100,
                duration: 1.5,
              }}
            >
              <div
                className={` w-24 right-10 md:w-[300px] absolute md:-top-20 md:right-[120px] `}
              >
                <Image
                  src={shapeOrganize}
                  alt="Snap of Strut"
                  width={200}
                  // height={200}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="block lg:flex items-center w-full -mt-32   bg-gradient-to-r from-[rgba(245,244,241)] from-[40%] to-[#f5f4f1] opacity-90    transf   backdrop-blur">
          <div className="relative min-h-0 lg:min-h-52 w-full py-8 px-8 md:px-14 lg:py-16 border-r-0 lg:border-r border-t border-b  border-[rgba(0,0,0,.1)]  flex flex-col items-start justify-center z-[1]">
            <div className="inline-flex items-center gap-1 text-gray-800">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_297)">
                  <path
                    d="M6 0.5C4.81331 0.5 3.65328 0.851894 2.66658 1.51118C1.67989 2.17047 0.910851 3.10754 0.456726 4.2039C0.00259972 5.30026 -0.11622 6.50666 0.115291 7.67054C0.346802 8.83443 0.918247 9.90353 1.75736 10.7426C2.59648 11.5818 3.66558 12.1532 4.82946 12.3847C5.99335 12.6162 7.19975 12.4974 8.2961 12.0433C9.39246 11.5892 10.3295 10.8201 10.9888 9.83342C11.6481 8.84673 12 7.68669 12 6.5C12 4.9087 11.3679 3.38258 10.2426 2.25736C9.11742 1.13214 7.5913 0.5 6 0.5ZM2 6.5C2 5.43913 2.42143 4.42172 3.17158 3.67157C3.92172 2.92143 4.93914 2.5 6 2.5V10.5C4.93914 10.5 3.92172 10.0786 3.17158 9.32843C2.42143 8.57828 2 7.56087 2 6.5Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_297">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h3>Customizable</h3>
            </div>
            <p className="text-gray-600">
              Use Strut’s pre-made stages or customize to your own{" "}
            </p>
          </div>
          <div className="relative min-h-0 lg:min-h-52 w-full py-8 px-8 md:px-14 lg:py-16 border-r-0 lg:border-r border-t border-b  border-[rgba(0,0,0,.1)]  flex flex-col items-start justify-center z-[1]">
            <div className="inline-flex items-center gap-1 text-gray-700 leading-5 font-semibold">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_307)">
                  <path
                    d="M10.7344 0.5H1.73438C0.905625 0.5 0.234375 1.17125 0.234375 2V8.75C0.234375 9.57875 0.905625 10.25 1.73438 10.25H4.18388L5.94637 12.365C6.01762 12.4505 6.12262 12.5 6.23438 12.5C6.34613 12.5 6.45113 12.4512 6.52238 12.365L8.28487 10.25H10.7344C11.5632 10.25 12.2344 9.57875 12.2344 8.75V2C12.2344 1.17125 11.5632 0.5 10.7344 0.5ZM6.23438 2C7.06313 2 7.73438 2.67125 7.73438 3.5C7.73438 4.32875 7.06313 5 6.23438 5C5.40562 5 4.73438 4.32875 4.73438 3.5C4.73438 2.67125 5.40562 2 6.23438 2ZM8.35462 8.75H4.11413C3.61313 8.75 3.23138 8.261 3.39263 7.78625C3.79388 6.602 4.91437 5.75 6.23438 5.75C7.55438 5.75 8.67488 6.602 9.07613 7.78625C9.23662 8.261 8.85563 8.75 8.35462 8.75Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_307">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0.234375 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h3>Real-time collaboratiaon</h3>
            </div>
            <p className="text-gray-600 leading-5 ">
              Tackle projects as a team and give everyone visibility <br />
              throughout the process.
            </p>
          </div>
          <div className="relative min-h-0 lg:min-h-52 w-full py-8 px-8 md:px-14 lg:py-16 border-r-0 lg:border-r border-t border-b  border-[rgba(0,0,0,.1)]  flex flex-col items-start justify-center z-[1]">
            <div className="inline-flex items-center gap-1 text-gray-700 leading-5 font-semibold">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_316)">
                  <path
                    d="M4.46875 0.5H1.46875C0.916465 0.5 0.46875 0.947715 0.46875 1.5V4.5C0.46875 5.05228 0.916465 5.5 1.46875 5.5H4.46875C5.02103 5.5 5.46875 5.05228 5.46875 4.5V1.5C5.46875 0.947715 5.02103 0.5 4.46875 0.5Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M11.4688 0.5H8.46875C7.91647 0.5 7.46875 0.947715 7.46875 1.5V4.5C7.46875 5.05228 7.91647 5.5 8.46875 5.5H11.4688C12.021 5.5 12.4688 5.05228 12.4688 4.5V1.5C12.4688 0.947715 12.021 0.5 11.4688 0.5Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M4.46875 7.5H1.46875C0.916465 7.5 0.46875 7.94772 0.46875 8.5V11.5C0.46875 12.0523 0.916465 12.5 1.46875 12.5H4.46875C5.02103 12.5 5.46875 12.0523 5.46875 11.5V8.5C5.46875 7.94772 5.02103 7.5 4.46875 7.5Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M11.4688 7.5H8.46875C7.91647 7.5 7.46875 7.94772 7.46875 8.5V11.5C7.46875 12.0523 7.91647 12.5 8.46875 12.5H11.4688C12.021 12.5 12.4688 12.0523 12.4688 11.5V8.5C12.4688 7.94772 12.021 7.5 11.4688 7.5Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_316">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0.46875 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h3>Kanban, Grid, & List View</h3>
            </div>
            <p className="text-gray-600 leading-5">
              Get the full view of your documents, any way you like.
            </p>
          </div>
        </div>

        <div className="-z-[1] w-[860px] hidden -top-[126px] lg:block lg:absolute lg:-top-[304px] right-[55%]  ">
          <motion.div whileInView={{ scaleX: scrollYProgress }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2200 900"
              width="2200"
              height="900"
              preserveAspectRatio="xMidYMid meet"
              style={{
                width: " 100%",
                height: "100%",
                transform: "translate3d(0px, 0px, 0px)",
                contentVisibility: "visible",
              }}
            >
              <defs>
                <clipPath id="__lottie_element_2">
                  <rect width="2200" height="900" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_2)">
                <g
                  transform="matrix(1,0,0,1,1096,450)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      fillOpacity="0"
                      strokeMiterlimit="4"
                      stroke="rgb(255,181,70)"
                      strokeOpacity="1"
                      strokeWidth="6"
                      d=" M-944,-394 C-944,-394 -872,-384 -894,-304 C-916.6099853515625,-221.781005859375 -1024,-80 -930,-46 C-818.1619873046875,-5.547999858856201 -630,-302 -706,-336 C-860.3280029296875,-405.0419921875 -1222.426025390625,310.5769958496094 -1008,302 C-858,296 -611.8270263671875,-435.77801513671875 -418,-416 C-124,-386 -923.5180053710938,227.86500549316406 -754,300 C-660,340 -412.9179992675781,-244.9709930419922 -200,-196 C0,-150 -617.6610107421875,318.7279968261719 -424,360 C-302,386 -270,-240 -136,-270 C4.873000144958496,-301.53900146484375 -322,266 -198,284 C-31.77199935913086,308.1300048828125 -60.47999954223633,-192.9459991455078 50,-166 C132,-146 -136,390 -50,416 C94.22599792480469,459.6029968261719 117.30799865722656,-30.972000122070312 256,58 C362,126 59.58399963378906,347.1969909667969 166,370 C222,382 213,217 342,220 C495.9590148925781,223.58099365234375 506.8009948730469,373.3810119628906 710.9990234375,367 C839,363 1086,358 1086,358"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* 3rd banner section */}
      <section className={"relative pt-32 z-0   overflow-hidden block "}>
        {/* text part */}
        <div className="  text-[#00000099]  z-[1] max-w-[920px] mx-8  mb-10 lg:mx-auto relative   ">
          <div className="w-full lg:w-1/2 max-w-none flex flex-col items-center lg:block lg:max-w-[440px] text-center lg:text-justify min-h-[120px] relative ">
            <div className=" flex items-center gap-2 leading-5 text-sm font-semibold text-[rgba(0,0,0,0.8)]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_241)">
                  <path
                    d="M10.5 1.03125H2.5C1.96957 1.03125 1.46086 1.24196 1.08579 1.61704C0.710714 1.99211 0.5 2.50082 0.5 3.03125L0.5 9.03125C0.5 9.56168 0.710714 10.0704 1.08579 10.4455C1.46086 10.8205 1.96957 11.0312 2.5 11.0312H10.5C11.0304 11.0312 11.5391 10.8205 11.9142 10.4455C12.2893 10.0704 12.5 9.56168 12.5 9.03125V3.03125C12.5 2.50082 12.2893 1.99211 11.9142 1.61704C11.5391 1.24196 11.0304 1.03125 10.5 1.03125ZM7.5 9.03125H2.5V3.03125H7.5V9.03125Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_241">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0.5 0.03125)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Writer's Designed Ai</span>
            </div>
            <h2 className="w-full text-5xl  md:text-[56px] leading-[48px] pb-2 md:leading-[64px] mt-2 mb-6">
              AI that's on
              <br /> your side
            </h2>
            <p className="text-[#00000099]   sm:text-xl mb-[10px]   ">
              The only AI designed to collaborate with writers. No generic
              content, no steamrolling quality. Strut works alongside writers
              like you to create great work.
            </p>
          </div>
        </div>
        {/* banner part */}
        <div
          className={`  relative  lg:flex  justify-center  mb-10  ${styles.willChangeSectionThree} `}
        >
          <div className={`${styles.bgGradient}  `}></div>
          <div className="max-w-[1200px] mx-4 lg:mx-20 relative overflow-hidden  ">
            <Image
              src={bannerThree}
              alt="Snap of Strut"
              width={1200}
              height={670}
              className="  max-w-full inline-block align-middle"
            />
          </div>
        </div>

        {/* sub section with shape 4 & 5 */}
        <div className="lg:flex items-start    ">
          <div className="z-[1] w-full min-h-0 lg:w-1/2 lg:min-h-[460px] border-r lg:border-r-[rgba(0,0,0,.1)] flex flex-wrap justify-normal items-end px-8 py-14 md:px-12 relative">
            {" "}
            <div className="h-full flex-1 w-full  flex-col flex">
              <div className="flex-1 flex items-center justify-center  mb-8 lg:mb-0 ">
                <Image
                  src={shapeFour}
                  alt="Snap of Strut"
                  width={400}
                  height={270}
                  className="w-full h-full  max-w-[400px] inline-block  "
                />
              </div>

              <div className="mb-1 flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_251)">
                    <path
                      d="M11.5 11.0156H0.5C0.367392 11.0156 0.240215 11.0683 0.146447 11.1621C0.0526784 11.2558 0 11.383 0 11.5156C0 11.6482 0.0526784 11.7754 0.146447 11.8692C0.240215 11.9629 0.367392 12.0156 0.5 12.0156H11.5C11.6326 12.0156 11.7598 11.9629 11.8536 11.8692C11.9473 11.7754 12 11.6482 12 11.5156C12 11.383 11.9473 11.2558 11.8536 11.1621C11.7598 11.0683 11.6326 11.0156 11.5 11.0156Z"
                      fill="black"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M1.49999 10.0155C1.55374 10.0158 1.60715 10.007 1.65799 9.98954L4.65799 8.98954C4.73319 8.96587 4.80172 8.92475 4.85799 8.86954L10.858 2.86954C10.9046 2.8231 10.9415 2.76792 10.9667 2.70718C10.9919 2.64643 11.0049 2.58131 11.0049 2.51554C11.0049 2.44977 10.9919 2.38465 10.9667 2.32391C10.9415 2.26316 10.9046 2.20799 10.858 2.16154L8.85799 0.161542C8.81155 0.114979 8.75637 0.0780361 8.69563 0.0528297C8.63488 0.0276232 8.56976 0.0146484 8.50399 0.0146484C8.43823 0.0146484 8.37311 0.0276232 8.31236 0.0528297C8.25162 0.0780361 8.19644 0.114979 8.14999 0.161542L2.14999 6.16154C2.09479 6.21782 2.05367 6.28635 2.02999 6.36154L1.02999 9.36154C1.00585 9.43611 0.99957 9.51532 1.01167 9.59276C1.02377 9.6702 1.05391 9.74372 1.09965 9.80737C1.14539 9.87102 1.20546 9.92302 1.275 9.95918C1.34455 9.99535 1.42162 10.0147 1.49999 10.0155Z"
                      fill="black"
                      fillOpacity="0.8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_251">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0 0.015625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h4 className="text-[rgba(0,0,0,0.8)] font-semibold  leading-5">
                  Inline Editing
                </h4>
              </div>

              <div className="text-[rgba(0,0,0,0.6)]  ">
                Iterate and refine right in your documents. Shorten, re-write,
                check grammar, and more.
              </div>
            </div>
          </div>
          <div className="z-[10] w-full min-h-0 lg:w-1/2 lg:min-h-[460px] border-t lg:border-r-[rgba(0,0,0,.1)] flex flex-wrap justify-start items-end px-8 py-14 md:px-14 relative    ">
            <div className="h-full flex-1 w-full  flex-col flex  ">
              <div className="flex-1 flex items-center justify-center mb-8  lg:mb-0 ">
                <Image
                  src={shapeFive}
                  alt="Snap of Strut"
                  width={670}
                  height={500}
                  className="w-full h-full  max-w-[670px] inline-block  "
                />
              </div>

              <div className="mb-1 flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_251)">
                    <path
                      d="M11.5 11.0156H0.5C0.367392 11.0156 0.240215 11.0683 0.146447 11.1621C0.0526784 11.2558 0 11.383 0 11.5156C0 11.6482 0.0526784 11.7754 0.146447 11.8692C0.240215 11.9629 0.367392 12.0156 0.5 12.0156H11.5C11.6326 12.0156 11.7598 11.9629 11.8536 11.8692C11.9473 11.7754 12 11.6482 12 11.5156C12 11.383 11.9473 11.2558 11.8536 11.1621C11.7598 11.0683 11.6326 11.0156 11.5 11.0156Z"
                      fill="black"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M1.49999 10.0155C1.55374 10.0158 1.60715 10.007 1.65799 9.98954L4.65799 8.98954C4.73319 8.96587 4.80172 8.92475 4.85799 8.86954L10.858 2.86954C10.9046 2.8231 10.9415 2.76792 10.9667 2.70718C10.9919 2.64643 11.0049 2.58131 11.0049 2.51554C11.0049 2.44977 10.9919 2.38465 10.9667 2.32391C10.9415 2.26316 10.9046 2.20799 10.858 2.16154L8.85799 0.161542C8.81155 0.114979 8.75637 0.0780361 8.69563 0.0528297C8.63488 0.0276232 8.56976 0.0146484 8.50399 0.0146484C8.43823 0.0146484 8.37311 0.0276232 8.31236 0.0528297C8.25162 0.0780361 8.19644 0.114979 8.14999 0.161542L2.14999 6.16154C2.09479 6.21782 2.05367 6.28635 2.02999 6.36154L1.02999 9.36154C1.00585 9.43611 0.99957 9.51532 1.01167 9.59276C1.02377 9.6702 1.05391 9.74372 1.09965 9.80737C1.14539 9.87102 1.20546 9.92302 1.275 9.95918C1.34455 9.99535 1.42162 10.0147 1.49999 10.0155Z"
                      fill="black"
                      fillOpacity="0.8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_251">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0 0.015625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h4 className="text-[rgba(0,0,0,0.8)] font-semibold  leading-5">
                  Mention Docs
                </h4>
              </div>
              <div className="text-[rgba(0,0,0,0.6)]  ">
                Mention your docs in the chat to give powerful, clear
                instructions to the AI.
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      {/* prompt section in dark/black */}
      <div className="bg-[#1d1b1a] overflow-hidden lg:overflow-visible ">
        <section className="pt-24 lg:pt-32 block">
          <div className="flex justify-center md:block mb-24 px-8 max-w-[920px] text-[rgba(255,255,255,.8) lg:mb-6 mx-auto relative">
            <div className="w-full text-center flex-col flex-wrap items-center flex left-auto lg:w-1/2 max-w-[460px] min-h-[120px] relative lg:left-1/2">
              <div className="text-[#FFB327]  flex gap-2 items-center font-semibold">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_47)">
                    <path
                      d="M9.875 6.76562H8.75V5.26562H9.875C11.3 5.26562 12.5 4.06563 12.5 2.64062C12.5 1.21563 11.3 0.015625 9.875 0.015625C8.45 0.015625 7.25 1.21563 7.25 2.64062V3.76562H5.75V2.64062C5.75 1.21563 4.55 0.015625 3.125 0.015625C1.7 0.015625 0.5 1.21563 0.5 2.64062C0.5 4.06563 1.7 5.26562 3.125 5.26562H4.25V6.76562H3.125C1.7 6.76562 0.5 7.96562 0.5 9.39062C0.5 10.8156 1.7 12.0156 3.125 12.0156C4.55 12.0156 5.75 10.8156 5.75 9.39062V8.26562H7.25V9.39062C7.25 10.8156 8.45 12.0156 9.875 12.0156C11.3 12.0156 12.5 10.8156 12.5 9.39062C12.5 7.96562 11.3 6.76562 9.875 6.76562ZM8.75 2.64062C8.75 2.04063 9.275 1.51562 9.875 1.51562C10.475 1.51562 11 2.04063 11 2.64062C11 3.24062 10.475 3.76562 9.875 3.76562H8.75V2.64062ZM2 2.64062C2 2.04063 2.525 1.51562 3.125 1.51562C3.725 1.51562 4.25 2.04063 4.25 2.64062V3.76562H3.125C2.525 3.76562 2 3.24062 2 2.64062ZM4.25 9.39062C4.25 9.99063 3.725 10.5156 3.125 10.5156C2.525 10.5156 2 9.99063 2 9.39062C2 8.79062 2.525 8.26562 3.125 8.26562H4.25V9.39062ZM5.75 5.26562H7.25V6.76562H5.75V5.26562ZM9.875 10.5156C9.275 10.5156 8.75 9.99063 8.75 9.39062V8.26562H9.875C10.475 8.26562 11 8.79062 11 9.39062C11 9.99063 10.475 10.5156 9.875 10.5156Z"
                      fill="#FFB327"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_47">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.5 0.015625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <small>CMD+K</small>
              </div>
              <h2 className=" text-[#d3d0c6]  text-5xl leading-[48px] md:text-[56px] md:leading-[64px] w-full mb-6 pb-2 mt-2">
                Unlock powerful prompts
              </h2>
              <p className="text-xl text-[rgb(211,208,198)] leading-7 mb-3 ">
                Skip learning complicated prompts, Strut’s AI Commands let you
                instantly pull up powerful AI workflows designed to brainstorm
                ideas, generate outlines, review content, create drafts,
                re-purpose content, and more.
              </p>
            </div>
          </div>
          {/* cards  */}
          <div className=" w-full max-w-full text-left sm:mt-16 lg:mt-0 justify-center lg:max-w-none items-center pb-0 flex ">
            <div className="max-w-full text-left sm:max-w-6xl md:text-center flex-1 relative top-0 ">
              {/* rotated card 1 */}
              <div
                className={`flex flex-col   pt-2 px-2 items-start bg-[rgba(255,255,255,0.1)] bg-gradient-to-r
                  from-[rgba(255,255,255,0.1)] 
                  to-[rgba(255,255,255,.05)] rounded-xl max-w-[560px] 
                   border border-solid border-[rgba(255,255,255,0.1)]  flex-1 justify-around   
                ${styles.transformOne}`}
              >
                <div className="flex w-full p-3 items-center rounded-xl bg-[rgba(255,255,255,0.1)] text-[#FFFFFFCC]">
                  Brainstorm Ideas
                </div>
                <div className="flex w-full p-3 items-center rounded-xl   text-[#FFFFFFCC]">
                  Generate Outline{" "}
                </div>
                <div className="flex w-full p-3 items-center rounded-xl   text-[#FFFFFFCC]">
                  Create Draft{" "}
                </div>
                <div className="flex w-full p-3 items-center rounded-xl   text-[#FFFFFFCC]">
                  Review{" "}
                </div>
                <div className="flex w-full p-3 items-center rounded-xl   text-[#FFFFFFCC]">
                  Re-purpose Content{" "}
                </div>
                <div className="flex w-full p-3 items-center     text-[#FFFFFFCC] border-t border-[#FFFFFFCC]">
                  What would you like to do?{" "}
                </div>
              </div>

              {/* card 2 */}
              <div
                className={`flex flex-col gap-2  pt-2 px-2 items-start bg-[rgba(255,255,255,0.1)] bg-gradient-to-r
                  from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,.05)] rounded-xl max-w-[560px] 
                   border border-solid border-[rgba(255,255,255,0.1)]  flex-1 justify-around  
                backdrop-blur-[1px] will-change-transform  translate-x-1/3 -translate-y-8 -rotate-5 md:translate-x-2/3 lg:-rotate-12 lg:-translate-y-12 -skew-y-6`}
              >
                <div className="flex w-full p-3 items-start rounded-xl bg-[rgba(255,255,255,0.1)] text-[#FFFFFFCC] text-left gap-2 pb-10">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5_72)">
                      <path
                        d="M8.66432 0.822688C5.37196 1.04724 2.86194 3.9247 3.08649 7.21705C3.23619 9.41195 4.56269 11.2259 6.43337 12.2009L6.69194 15.9921C6.73277 16.5907 7.15906 16.9625 7.75767 16.9217L11.7484 16.6495C12.347 16.6087 12.7189 16.1824 12.678 15.5838L12.4195 11.7926C14.1404 10.5727 15.2084 8.59541 15.0587 6.40051C14.8341 3.10816 11.9567 0.59814 8.66432 0.822688ZM8.61926 14.8583L8.55122 13.8606L10.5466 13.7245L10.6146 14.7222L8.61926 14.8583ZM10.9206 10.3913C10.5284 10.5183 10.3561 10.931 10.3833 11.3301L10.4785 12.7268L8.48317 12.8629L8.38791 11.4662C8.36069 11.0671 8.13394 10.6816 7.72806 10.6091C6.1839 10.0128 5.19073 8.67725 5.08186 7.08096C4.93216 4.88606 6.6055 2.96775 8.80041 2.81805C10.9953 2.66835 12.9136 4.3417 13.0633 6.5366C13.1722 8.13289 12.3695 9.59089 10.9206 10.3913Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_72">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.682861 1.36719) rotate(-3.9017)"
                        />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  <div className=" ">
                    <h4 className="text-xs font-semibold leading-5">
                      Brainstorm Ideas
                    </h4>
                    <p className="text-[#FFFFFF80] leading-5 text-sm">
                      What would you like to brainstorm?
                    </p>{" "}
                  </div>
                </div>
                <div className="flex w-full p-3 items-center rounded-xl bg-[rgba(255,255,255,0.1)] text-[#FFFFFFCC] text-left gap-2 pb-5 ">
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7628 5.60828C11.7931 5.28108 11.607 4.97112 11.3029 4.84536L1.21643 0.658679C0.968001 0.554439 0.677254 0.594059 0.463625 0.763397C0.249996 0.932736 0.14466 1.2037 0.189015 1.47309L1.96297 12.2489C2.01685 12.573 2.27539 12.8249 2.60162 12.8701C2.93939 12.9266 3.24462 12.7422 3.38329 12.4441L4.87746 9.2456L8.07641 13.282C8.20483 13.4442 8.38712 13.5392 8.57794 13.5613C8.76867 13.5834 8.96785 13.5324 9.12989 13.4039L10.7924 12.086C11.1174 11.8285 11.1719 11.3576 10.9142 11.0326L7.71537 6.9961L11.1703 6.27216C11.4915 6.20435 11.7325 5.93549 11.7628 5.60828Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                  <div className=" ">
                    <h4 className="text-xs font-semibold leading-5">
                      Inspirational (optional){" "}
                    </h4>
                    <p className="text-[#FFFFFF80] leading-5 text-sm">
                      Pick documents to use as inspiration
                    </p>{" "}
                  </div>
                  <div className="inline-flex h-6 py-4 pl-5 pr-1 justify-end items-center shrink-0 bg-[#FFB546] rounded-3xl ml-auto">
                    <div className="bg-white rounded-3xl shadow-md shadow-gray-200 w-4 h-4"></div>
                  </div>
                </div>

                <div className="flex w-full p-3 items-center  justify-between   text-[#FFFFFFCC] border-t border-[#FFFFFFCC]">
                  <div>Brainstorem Ideas</div>{" "}
                  <div className="bg-[#FFB546] px-4 py-2 rounded-3xl text-[#000000CC] leading-5 text-sm">
                    Create
                  </div>{" "}
                </div>
              </div>

              {/* card 3 */}
              <div
                className="flex flex-col gap-2 scale-x-[.85] scale-y-90   pt-2 px-2 items-start bg-[rgba(255,255,255,0.1)] bg-gradient-to-r
                  from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,.05)] rounded-xl max-w-[560px]   
                    border border-solid  border-[rgba(255,255,255,0.1)]   flex-1 justify-around    
                backdrop-blur-[1px]
                will-change-transform skew-x-6 -skew-y-2  -translate-y-[20%] -translate-x-5  
                lg:translate-x-12 lg:-translate-y-28"
              >
                <div className="flex w-full p-3 items-start rounded-xl bg-[rgba(255,255,255,0.1)]  text-[#FFFFFFCC] text-left gap-2 pb-5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5_95)">
                      <path
                        d="M8.62668 9.80422C10.0047 9.71746 11.0514 8.53005 10.9647 7.15207C10.8779 5.77409 9.69049 4.72734 8.3125 4.8141C6.93452 4.90086 5.88778 6.08827 5.97453 7.46625C6.06129 8.84423 7.2487 9.89098 8.62668 9.80422Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M8.68955 10.8021C6.56276 10.936 4.8444 12.3848 4.24383 14.3044C5.54888 15.3304 7.21626 15.9048 9.00373 15.7922C10.7912 15.6797 12.3734 14.9007 13.5394 13.7191C12.7029 11.8911 10.8153 10.6683 8.68955 10.8021Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M9.06653 16.7904C4.66425 17.0676 0.856824 13.7112 0.579654 9.3089C0.302484 4.90661 3.65887 1.09919 8.06116 0.822019C12.4634 0.544849 16.2709 3.90124 16.548 8.30352C16.8252 12.7058 13.4688 16.5132 9.06653 16.7904ZM8.18683 2.81807C4.88437 3.02599 2.36778 5.88076 2.5757 9.18323C2.78363 12.4857 5.6384 15.0023 8.94086 14.7944C12.2433 14.5864 14.7599 11.7317 14.552 8.42919C14.3441 5.12673 11.4893 2.61014 8.18683 2.81807Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_95">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.0769653 1.32471) rotate(-3.60261)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className=" ">
                    <h4 className="text-xs font-semibold leading-5">
                      Audience
                    </h4>
                    <p className="text-[rgba(255,255,255,0.5)] leading-5 text-sm">
                      Describe your audience.
                    </p>{" "}
                  </div>
                </div>
                <div className="flex w-full p-3 items-start rounded-xl bg-[rgba(255,255,255,0.1)] text-[#FFFFFFCC] text-left gap-2 pb-5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5_104)">
                      <path
                        d="M8.58533 0.679929C4.19402 0.956407 0.827345 4.7755 1.10382 9.16681C1.3803 13.5581 5.1994 16.9248 9.5907 16.6483C13.982 16.3718 17.3487 12.5527 17.0722 8.16143C16.7957 3.77013 12.9766 0.40345 8.58533 0.679929ZM9.46503 14.6523C6.17155 14.8596 3.30723 12.3346 3.09987 9.04114C2.89251 5.74766 5.41752 2.88334 8.711 2.67598C12.0045 2.46862 14.8688 4.99362 15.0762 8.2871C15.2835 11.5806 12.7585 14.4449 9.46503 14.6523Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M8.8367 4.672C6.64105 4.81023 4.95771 6.71978 5.09595 8.91544C5.23419 11.1111 7.14374 12.7944 9.33939 12.6562C11.535 12.5179 13.2184 10.6084 13.0801 8.41275C12.9419 6.21709 11.0324 4.53376 8.8367 4.672ZM9.21372 10.6601C8.11589 10.7293 7.16112 9.88759 7.092 8.78976C7.02288 7.69194 7.86455 6.73716 8.96237 6.66804C10.0602 6.59892 11.015 7.44059 11.0841 8.53842C11.1532 9.63625 10.3115 10.591 9.21372 10.6601Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_104">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.601135 1.18262) rotate(-3.60261)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className=" ">
                    <h4 className="text-xs font-semibold leading-5">Goal</h4>
                    <p className="text-[#FFFFFF80] leading-5 text-sm">
                      Describe your goal (eg. lead gen, brand awareness)
                    </p>{" "}
                  </div>
                </div>
                <div className="flex w-full p-3 items-start rounded-xl bg-[rgba(255,255,255,0.1)] text-[#FFFFFFCC] text-left gap-2 pb-5">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7897 0.155044C14.6962 0.122943 14.5952 0.119304 14.4996 0.144586C14.404 0.169867 14.318 0.222935 14.2526 0.297076C14.2265 0.327778 11.5456 3.32716 8.79709 3.50021L3.80697 3.81439C2.88055 3.87272 2.01524 4.29668 1.4014 4.993C0.787566 5.68932 0.475485 6.60098 0.533813 7.5274C0.592141 8.45382 1.0161 9.31913 1.71243 9.93297C2.40875 10.5468 3.3204 10.8589 4.24682 10.8006L9.23694 10.4864C11.9855 10.3133 15.0214 12.9528 15.0511 12.98C15.1253 13.0455 15.2173 13.0876 15.3154 13.1008C15.4136 13.1141 15.5134 13.0978 15.6023 13.0543C15.6913 13.0107 15.7652 12.9417 15.8149 12.856C15.8645 12.7703 15.8876 12.6718 15.8812 12.573L15.1272 0.596714C15.1209 0.497971 15.0855 0.403297 15.0255 0.324675C14.9654 0.246053 14.8834 0.187018 14.7897 0.155044Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                  <div className=" ">
                    <h4 className="text-xs font-semibold leading-5">
                      Brand voice
                    </h4>
                    <p className="text-[#FFFFFF80] leading-5 text-sm">
                      Default
                    </p>{" "}
                  </div>
                </div>

                <div className="flex w-full p-3 items-center  justify-between   text-[#FFFFFFCC] border-t border-[#FFFFFFCC]">
                  <div>Re-purpose into blog post</div>{" "}
                  <div className="bg-[#FFB546] px-4 py-2 rounded-3xl text-[#000000CC]">
                    Create
                  </div>{" "}
                </div>
              </div>

              {/* card 4 */}
              <div
                className="z-20 relative flex flex-col gap-2   pt-2 px-2 items-start bg-[rgba(255,255,255,0.1)] bg-gradient-to-r
                  from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,.05)]  rounded-xl max-w-[560px]  backdrop-blur-[1px]
                transform-style-preserve   border border-solid  border-[rgba(255,255,255,0.1)]   flex-1 justify-around    will-change-transform skew-x-2 skew-y-6   lg:scale-x-95  -rotate-[15deg] translate-x-14 -translate-y-20 
                  md:-translate-y-32  md:translate-x-3/4  lg:-translate-y-48"
              >
                <div className="flex w-full p-3 items-start rounded-xl bg-[rgba(255,255,255,0.1)] text-[#FFFFFFCC] text-left gap-2 pb-10">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5_141)">
                      <path
                        d="M16.8624 11.7442L5.93524 10.4805L5.70547 12.4672L16.6326 13.731L16.8624 11.7442Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M3.94852 10.2509L0.968384 9.90625L0.738615 11.893L3.71875 12.2377L3.94852 10.2509Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M11.436 15.1434L5.47571 14.4541L5.24594 16.4409L11.2062 17.1302L11.436 15.1434Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M3.48899 14.224L0.50885 13.8794L0.279082 15.8662L3.25922 16.2108L3.48899 14.224Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M13.3485 7.31103L6.39484 6.50684L6.16507 8.49359L13.1187 9.29778L13.3485 7.31103Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M4.40805 6.27727L1.42792 5.93262L1.19815 7.91937L4.17829 8.26403L4.40805 6.27727Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M17.7815 3.79693L6.85437 2.5332L6.6246 4.51996L17.5518 5.78369L17.7815 3.79693Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M4.86759 2.30364L1.88745 1.95898L1.65768 3.94574L4.63782 4.29039L4.86759 2.30364Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_141">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(2.00232 0.96582) rotate(6.59695)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className=" ">
                    <h4 className="text-xs font-semibold leading-5">Outline</h4>
                    <p className="text-[#FFFFFF80] leading-5 text-sm">
                      What's the outline for?'
                    </p>{" "}
                  </div>
                </div>
                <div className="flex w-full p-3 items-center rounded-xl bg-[rgba(255,255,255,0.1)] text-[#FFFFFFCC] text-left gap-2 pb-5 ">
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7628 5.60828C11.7931 5.28108 11.607 4.97112 11.3029 4.84536L1.21643 0.658679C0.968001 0.554439 0.677254 0.594059 0.463625 0.763397C0.249996 0.932736 0.14466 1.2037 0.189015 1.47309L1.96297 12.2489C2.01685 12.573 2.27539 12.8249 2.60162 12.8701C2.93939 12.9266 3.24462 12.7422 3.38329 12.4441L4.87746 9.2456L8.07641 13.282C8.20483 13.4442 8.38712 13.5392 8.57794 13.5613C8.76867 13.5834 8.96785 13.5324 9.12989 13.4039L10.7924 12.086C11.1174 11.8285 11.1719 11.3576 10.9142 11.0326L7.71537 6.9961L11.1703 6.27216C11.4915 6.20435 11.7325 5.93549 11.7628 5.60828Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                  <div className=" ">
                    <h4 className="text-xs font-semibold leading-5">
                      Inspirational (optional){" "}
                    </h4>
                    <p className="text-[#FFFFFF80] leading-5 text-sm">
                      Pick documents to use as inspiration
                    </p>{" "}
                  </div>
                  <div className="inline-flex h-6 py-4 pl-5 pr-1 justify-end items-center shrink-0 bg-[#FFB546] rounded-3xl ml-auto">
                    <div className="bg-white rounded-3xl shadow-md shadow-gray-200 w-4 h-4"></div>
                  </div>
                </div>

                <div className="flex w-full p-3 items-center  justify-between   text-[#FFFFFFCC] border-t border-[#FFFFFFCC]">
                  <div>Genarate outline</div>{" "}
                  <div className="bg-[#FFB546] px-4 py-2 rounded-3xl text-[#000000CC] leading-5 text-sm">
                    Create
                  </div>{" "}
                </div>
              </div>

              {/* card 5 similar to 1 */}
              <div
                className="flex flex-col   pt-2 px-2 items-start bg-[rgba(255,255,255,0.1)] bg-gradient-to-r
                  from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,.05)]  rounded-xl max-w-[560px]  backdrop-blur-[2px] 
                    border border-solid  border-[rgba(255,255,255,0.1)]   flex-1 justify-around    will-change-transform -skew-x-2 -skew-y-3    -rotate-2 -translate-y-20 scale-90 md:translate-x-12 md:-translate-y-44    
                
                
                "
              >
                <div className="flex w-full p-3 items-center rounded-xl bg-[rgba(255,255,255,0.1)] text-[#FFFFFFCC]">
                  Blog post
                </div>
                <div className="flex w-full p-3 items-center rounded-xl   text-[#FFFFFFCC]">
                  Newsletter
                </div>
                <div className="flex w-full p-3 items-center rounded-xl   text-[#FFFFFFCC]">
                  LinkedIn post{" "}
                </div>
                <div className="flex w-full p-3 items-center rounded-xl   text-[#FFFFFFCC]">
                  Email
                </div>
                <div className="flex w-full p-3 items-center rounded-xl   text-[#FFFFFFCC]">
                  Landing page
                </div>
                <div className="flex w-full p-3 items-center     text-[#FFFFFFCC] border-t border-[#FFFFFFCC]">
                  What would you like to do?{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* brand section */}
        <section
          className="backdrop-blur-sm text-[#ffffffcc]
          border-t border-[#ffffff1a] -mt-52 pt-24 md::pt-40 pb-0 relative 
 bg-gradient-to-r from-[rgba(29,27,26,.5)] from-[13%] to-[#1d1b1a]   "
        >
          {/*brand text container - might need to put position relative  later */}
          <div className=" z-10 max-w-4xl mb-6 mx-auto px-8 md:px-0">
            <div className="max-w-[560px] min-h-[120px] text-center mx-auto  relative">
              <div className="flex items-center justify-center gap-2 text-[#FFB327] ">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_221)">
                    <path
                      d="M5.55324 9.10563C5.21571 9.04698 4.87383 9.01687 4.53124 9.01562H2.77124L3.80924 11.2846C3.94712 11.5862 4.19911 11.8207 4.50982 11.9366C4.82053 12.0525 5.16454 12.0403 5.46624 11.9026C5.61561 11.8343 5.75005 11.7372 5.86187 11.6168C5.97368 11.4965 6.06068 11.3553 6.11789 11.2013C6.1751 11.0473 6.2014 10.8836 6.19528 10.7194C6.18916 10.5553 6.15075 10.3939 6.08224 10.2446L5.55324 9.10563Z"
                      fill="#FFB327"
                    />
                    <path
                      d="M10.6772 0.0375552C10.5745 0.00608371 10.4644 0.0085416 10.3632 0.0445647C10.2619 0.0805879 10.175 0.14826 10.1152 0.237555C9.46606 1.10447 8.62284 1.80729 7.65316 2.2897C6.68348 2.77211 5.61429 3.0207 4.53125 3.01556H2.53125C1.86821 3.01556 1.23232 3.27895 0.763483 3.74779C0.294642 4.21663 0.03125 4.85251 0.03125 5.51556C0.03125 6.1786 0.294642 6.81448 0.763483 7.28332C1.23232 7.75216 1.86821 8.01556 2.53125 8.01556H4.53125C5.61429 8.01041 6.68348 8.259 7.65316 8.74141C8.62284 9.22382 9.46606 9.92664 10.1152 10.7936C10.161 10.8619 10.2229 10.9179 10.2954 10.9567C10.368 10.9954 10.449 11.0156 10.5312 11.0156C10.5807 11.0151 10.6299 11.0077 10.6772 10.9936C10.7797 10.9623 10.8693 10.899 10.9331 10.8129C10.9968 10.7269 11.0312 10.6226 11.0312 10.5156V0.515555C11.0312 0.408477 10.9968 0.304241 10.9331 0.218191C10.8693 0.132141 10.7797 0.0688221 10.6772 0.0375552Z"
                      fill="#FFB327"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_221">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.03125 0.015625)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
                <p>Voice and Tone Sync</p>
              </div>
              <div className="text-[#D3D0C6] text-6xl leading-[64px] mb-6 pb-2">
                Always on-brand
              </div>
              <p className="text-[#D3D0C6] text-xl leading-7 mb-3">
                Instantly adopt any Brand Voice by uploading articles, web
                pages, or social media posts. Start writing and stay on-brand
                across projects, channels, and clients.
              </p>
            </div>
          </div>

          {/* brand cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mb-24 pt-14 px-14 ">
            {/* card 1 */}
            <div className="min-h-40 lg:min-h-80 bg-[rgba(255,255,255,.03)] rounded-xl  opacity-60  ">
              <div className="flex items-center   mt-4 mx-6 font-medium gap-4 text-[#FFFFFFCC]">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_190)">
                    <path
                      d="M11 5.78809H7V1.78809C7 1.52287 6.89464 1.26852 6.70711 1.08098C6.51957 0.893443 6.26522 0.788086 6 0.788086C5.73478 0.788086 5.48043 0.893443 5.29289 1.08098C5.10536 1.26852 5 1.52287 5 1.78809V5.78809H1C0.734784 5.78809 0.48043 5.89344 0.292893 6.08098C0.105357 6.26852 0 6.52287 0 6.78809C0 7.0533 0.105357 7.30766 0.292893 7.49519C0.48043 7.68273 0.734784 7.78809 1 7.78809H5V11.7881C5 12.0533 5.10536 12.3077 5.29289 12.4952C5.48043 12.6827 5.73478 12.7881 6 12.7881C6.26522 12.7881 6.51957 12.6827 6.70711 12.4952C6.89464 12.3077 7 12.0533 7 11.7881V7.78809H11C11.2652 7.78809 11.5196 7.68273 11.7071 7.49519C11.8946 7.30766 12 7.0533 12 6.78809C12 6.52287 11.8946 6.26852 11.7071 6.08098C11.5196 5.89344 11.2652 5.78809 11 5.78809Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_190">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0 0.788086)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>New Brand Voice</p>
              </div>
            </div>
            {/* card 2 */}
            <div className="min-h-40 lg:min-h-80 bg-[rgba(255,255,255,.05)] rounded-xl ">
              <div className="flex items-center   mt-4 mx-6 font-medium gap-4 text-[#FFFFFFCC]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_176)">
                    <path
                      d="M6.02199 9.45963C5.68446 9.40098 5.34258 9.37088 4.99999 9.36963H3.23999L4.27799 11.6386C4.41587 11.9402 4.66786 12.1747 4.97857 12.2906C5.28928 12.4065 5.63329 12.3943 5.93499 12.2566C6.08436 12.1883 6.2188 12.0912 6.33062 11.9708C6.44243 11.8505 6.52943 11.7093 6.58664 11.5553C6.64385 11.4013 6.67015 11.2376 6.66403 11.0734C6.65791 10.9093 6.6195 10.7479 6.55099 10.5986L6.02199 9.45963Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M11.146 0.391559C11.0433 0.360088 10.9331 0.362546 10.8319 0.398569C10.7307 0.434592 10.6438 0.502264 10.584 0.591559C9.93481 1.45848 9.09159 2.16129 8.12191 2.6437C7.15223 3.12611 6.08304 3.3747 5 3.36956H3C2.33696 3.36956 1.70107 3.63295 1.23223 4.10179C0.763392 4.57063 0.5 5.20652 0.5 5.86956C0.5 6.5326 0.763392 7.16849 1.23223 7.63733C1.70107 8.10617 2.33696 8.36956 3 8.36956H5C6.08304 8.36441 7.15223 8.613 8.12191 9.09541C9.09159 9.57782 9.93481 10.2806 10.584 11.1476C10.6297 11.2159 10.6916 11.272 10.7642 11.3107C10.8368 11.3494 10.9177 11.3696 11 11.3696C11.0495 11.3691 11.0986 11.3617 11.146 11.3476C11.2484 11.3163 11.3381 11.253 11.4018 11.1669C11.4655 11.0809 11.5 10.9766 11.5 10.8696V0.869559C11.5 0.762481 11.4655 0.658245 11.4018 0.572195C11.3381 0.486145 11.2484 0.422826 11.146 0.391559Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_176">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.5 0.369629)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>Press</p>
              </div>
            </div>
            {/* card 3 */}
            <div className="min-h-40 lg:min-h-80 bg-[rgba(255,255,255,.05)] rounded-xl ">
              <div className="flex items-center   mt-4 mx-6 font-medium gap-4 text-[#FFFFFFCC]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_176)">
                    <path
                      d="M6.02199 9.45963C5.68446 9.40098 5.34258 9.37088 4.99999 9.36963H3.23999L4.27799 11.6386C4.41587 11.9402 4.66786 12.1747 4.97857 12.2906C5.28928 12.4065 5.63329 12.3943 5.93499 12.2566C6.08436 12.1883 6.2188 12.0912 6.33062 11.9708C6.44243 11.8505 6.52943 11.7093 6.58664 11.5553C6.64385 11.4013 6.67015 11.2376 6.66403 11.0734C6.65791 10.9093 6.6195 10.7479 6.55099 10.5986L6.02199 9.45963Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M11.146 0.391559C11.0433 0.360088 10.9331 0.362546 10.8319 0.398569C10.7307 0.434592 10.6438 0.502264 10.584 0.591559C9.93481 1.45848 9.09159 2.16129 8.12191 2.6437C7.15223 3.12611 6.08304 3.3747 5 3.36956H3C2.33696 3.36956 1.70107 3.63295 1.23223 4.10179C0.763392 4.57063 0.5 5.20652 0.5 5.86956C0.5 6.5326 0.763392 7.16849 1.23223 7.63733C1.70107 8.10617 2.33696 8.36956 3 8.36956H5C6.08304 8.36441 7.15223 8.613 8.12191 9.09541C9.09159 9.57782 9.93481 10.2806 10.584 11.1476C10.6297 11.2159 10.6916 11.272 10.7642 11.3107C10.8368 11.3494 10.9177 11.3696 11 11.3696C11.0495 11.3691 11.0986 11.3617 11.146 11.3476C11.2484 11.3163 11.3381 11.253 11.4018 11.1669C11.4655 11.0809 11.5 10.9766 11.5 10.8696V0.869559C11.5 0.762481 11.4655 0.658245 11.4018 0.572195C11.3381 0.486145 11.2484 0.422826 11.146 0.391559Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_176">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.5 0.369629)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>Marketing Site</p>
              </div>
            </div>
            {/* card 4 */}
            <div className="min-h-40 lg:min-h-80 bg-[rgba(255,255,255,.05)] rounded-xl ">
              <div className="flex items-center   mt-4 mx-6 font-medium gap-4 text-[#FFFFFFCC]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_176)">
                    <path
                      d="M6.02199 9.45963C5.68446 9.40098 5.34258 9.37088 4.99999 9.36963H3.23999L4.27799 11.6386C4.41587 11.9402 4.66786 12.1747 4.97857 12.2906C5.28928 12.4065 5.63329 12.3943 5.93499 12.2566C6.08436 12.1883 6.2188 12.0912 6.33062 11.9708C6.44243 11.8505 6.52943 11.7093 6.58664 11.5553C6.64385 11.4013 6.67015 11.2376 6.66403 11.0734C6.65791 10.9093 6.6195 10.7479 6.55099 10.5986L6.02199 9.45963Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M11.146 0.391559C11.0433 0.360088 10.9331 0.362546 10.8319 0.398569C10.7307 0.434592 10.6438 0.502264 10.584 0.591559C9.93481 1.45848 9.09159 2.16129 8.12191 2.6437C7.15223 3.12611 6.08304 3.3747 5 3.36956H3C2.33696 3.36956 1.70107 3.63295 1.23223 4.10179C0.763392 4.57063 0.5 5.20652 0.5 5.86956C0.5 6.5326 0.763392 7.16849 1.23223 7.63733C1.70107 8.10617 2.33696 8.36956 3 8.36956H5C6.08304 8.36441 7.15223 8.613 8.12191 9.09541C9.09159 9.57782 9.93481 10.2806 10.584 11.1476C10.6297 11.2159 10.6916 11.272 10.7642 11.3107C10.8368 11.3494 10.9177 11.3696 11 11.3696C11.0495 11.3691 11.0986 11.3617 11.146 11.3476C11.2484 11.3163 11.3381 11.253 11.4018 11.1669C11.4655 11.0809 11.5 10.9766 11.5 10.8696V0.869559C11.5 0.762481 11.4655 0.658245 11.4018 0.572195C11.3381 0.486145 11.2484 0.422826 11.146 0.391559Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_176">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.5 0.369629)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>Social</p>
              </div>
            </div>
          </div>

          {/* subsection under brand cards in dark */}
          <div className="flex flex-col sm:flex-row backdrop-blur text-[rgba(255,255,255,.8)] bg-gradient-to-r from-[rgba(28,26,25,0)] from-[40%] to-[#1d1b1a]  shadow-[0_-1px_rgba(255,255,255,.1)]  ">
            <div
              className="z-10 w-full  
            min-h-0 sm:min-h-52 border-b border-r border-[rgba(255,255,255,.1)] flex items-center justify-center py-12 px-14 relative"
            >
              <div className="flex flex-col gap-2 w-full text-[#FFFFFF99]">
                <div className="flex items-center gap-2">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5_198)">
                      <path
                        d="M9.50001 8.01584C9.24401 8.01584 8.98801 7.91784 8.79301 7.72284C8.40201 7.33184 8.40201 6.69884 8.79301 6.30784L9.46501 5.63684C10.178 4.92484 10.178 3.76384 9.46501 3.05184C8.77401 2.36084 7.57001 2.36084 6.87901 3.05184L6.20701 3.72384C5.81601 4.11384 5.18401 4.11384 4.79301 3.72384C4.40201 3.33384 4.40201 2.69984 4.79301 2.30884L5.46501 1.63784C6.91001 0.192836 9.43401 0.191836 10.879 1.63784C12.371 3.12984 12.371 5.55884 10.879 7.05184L10.207 7.72384C10.012 7.91884 9.75601 8.01584 9.50001 8.01584Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M3.82801 12.5156C2.80601 12.5156 1.84401 12.1176 1.12101 11.3936C-0.370986 9.90164 -0.370986 7.47264 1.12101 5.97964L1.79301 5.30764C2.18401 4.91764 2.81601 4.91764 3.20701 5.30764C3.59801 5.69764 3.59801 6.33164 3.20701 6.72264L2.53501 7.39364C1.82201 8.10564 1.82201 9.26664 2.53501 9.97864C3.22601 10.6696 4.43001 10.6696 5.12101 9.97864L5.79301 9.30664C6.18401 8.91664 6.81601 8.91664 7.20701 9.30664C7.59801 9.69664 7.59801 10.3306 7.20701 10.7216L6.53501 11.3926C5.81201 12.1156 4.85001 12.5136 3.82801 12.5136V12.5156Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M4.50002 8.76589C4.30802 8.76589 4.11602 8.69289 3.97002 8.54589C3.67702 8.25289 3.67702 7.77789 3.97002 7.48489L6.97002 4.48489C7.26302 4.19189 7.73802 4.19189 8.03102 4.48489C8.32403 4.77789 8.32403 5.25289 8.03102 5.54589L5.03102 8.54589C4.88502 8.69189 4.69202 8.76589 4.50002 8.76589Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_198">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0 0.515625)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-semibold text-sm leading-5">
                    Generate from website
                  </p>
                </div>
                <div className=" text-sm leading-5">
                  Write your own Brand Voice or generate one from a website
                  link.
                </div>
              </div>
            </div>
            <div className="z-10 w-full min-h-0 sm:min-h-52 border-b    flex items-center justify-center py-12 px-14 relative">
              <div className="flex flex-col gap-2 w-full text-[#FFFFFF99]">
                <div className="flex items-center gap-2">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5_208)">
                      <path
                        d="M9.5 1.51562C9.5 1.25041 9.39464 0.996055 9.20711 0.808518C9.01957 0.620982 8.76522 0.515625 8.5 0.515625H1.5C1.23478 0.515625 0.98043 0.620982 0.792893 0.808518C0.605357 0.996055 0.5 1.25041 0.5 1.51562L0.5 9.51562C0.5 9.78084 0.605357 10.0352 0.792893 10.2227C0.98043 10.4103 1.23478 10.5156 1.5 10.5156H5V5.01562C5 4.75041 5.10536 4.49605 5.29289 4.30852C5.48043 4.12098 5.73478 4.01562 6 4.01562H9.5V1.51562Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M12 5.51562H7C6.72386 5.51562 6.5 5.73948 6.5 6.01562V12.0156C6.5 12.2918 6.72386 12.5156 7 12.5156H12C12.2761 12.5156 12.5 12.2918 12.5 12.0156V6.01562C12.5 5.73948 12.2761 5.51562 12 5.51562Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_208">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.5 0.515625)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-semibold text-sm leading-5">
                    Multiple Brand Voices{" "}
                  </p>
                </div>
                <div className=" text-sm leading-5">
                  Stay on-brand across channels, clients, and projects.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* question section */}

      <div className="flex flex-col border-b border-[#0000001A]  text-[#000000CC]  ">
        <div className="pt-20 pb-6 pl-14">
          <h3 className="text-3xl leading-10">Common Question</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-1 md:gap-6 border-t border-[#0000001A] py-6 px-14  ">
          <div className="col-span-1 font-medium">
            Do you use my data to train your AI?
          </div>
          <div className="col-span-2">
            No, your data is never used to train AI.
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-1 md:gap-6 border-t border-[#0000001A]  py-6 px-14">
          <div className="col-span-1 font-medium">
            What AI model do you use?
          </div>
          <div className="col-span-2">
            We always use the latest, which is currently OpenAI's GPT4.
          </div>
        </div>
      </div>

      {/* section before footer */}
      <section className="flex items-center justify-center min-h-[560px]">
        <div className="flex text-center flex-col items-center max-w-[480px]">
          <h2 className="mb-6 text-6xl leading-[72px] ">
            Get work moving with Strut
          </h2>
          <Link
            href={"/"}
            className=" flex pt-1 px-3 gap-2 text-[rgba(0,0,0,0.65)] bg-[#ffb546] rounded-[28px] items-center  hover:scale-x-110 transition-all duration-200"
          >
            <div>Get Started </div>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5_19)">
                <path
                  d="M6.84963 1.14354C6.77775 1.07902 6.68871 1.0367 6.5933 1.02169C6.49789 1.00669 6.40016 1.01964 6.31194 1.05899C6.22373 1.09833 6.1488 1.16239 6.09621 1.24341C6.04363 1.32443 6.01565 1.41895 6.01562 1.51554V5.01554H1.01562C0.750409 5.01554 0.496055 5.1209 0.308518 5.30844C0.120982 5.49597 0.015625 5.75033 0.015625 6.01554C0.015625 6.28076 0.120982 6.53511 0.308518 6.72265C0.496055 6.91018 0.750409 7.01554 1.01562 7.01554H6.01562V10.5155C6.01565 10.6121 6.04363 10.7067 6.09621 10.7877C6.1488 10.8687 6.22373 10.9327 6.31194 10.9721C6.40016 11.0114 6.49789 11.0244 6.5933 11.0094C6.68871 10.9944 6.77775 10.9521 6.84963 10.8875L11.8496 6.38754C11.9018 6.34065 11.9436 6.28329 11.9722 6.2192C12.0007 6.15511 12.0155 6.08572 12.0155 6.01554C12.0155 5.94536 12.0007 5.87597 11.9722 5.81188C11.9436 5.74779 11.9018 5.69043 11.8496 5.64354L6.84963 1.14354Z"
                  fill="black"
                  fillOpacity="0.65"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_19">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0.015625 0.015625)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </section>

      {/* footer */}
      <section className="border-t border-[#0000001A] text-[rgba(0,0,0,0.55)]">
        <div className="block lg:flex justify-between lg:justify-normal   mx-4 lg:mx-20 py-6 text-sm leading-5 ">
          <div className="flex items-center justify-between  flex-1 gap-4">
            <Link href={"/"} className="max-w-full inline-block">
              Strut — Organize and write
            </Link>
            <Link href={"/"} className="p-1">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_10)">
                  <path
                    d="M9.6628 6.93941L15.6191 0.015625H14.2077L9.03578 6.02745L4.90499 0.015625H0.140625L6.38719 9.10658L0.140625 16.3672H1.55218L7.01383 10.0185L11.3762 16.3672H16.1406L9.6628 6.93941ZM7.7295 9.18666L7.09658 8.28141L2.06078 1.07822H4.22883L8.29278 6.89143L8.9257 7.79668L14.2083 15.3529H12.0403L7.7295 9.18666Z"
                    fill="black"
                    fillOpacity="0.55"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_10">
                    <rect
                      width="16"
                      height="17"
                      fill="white"
                      transform="translate(0.140625 0.015625)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Terms of Service</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
