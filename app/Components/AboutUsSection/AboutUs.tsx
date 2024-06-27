"use client";
import { NextFont } from "next/dist/compiled/@next/font";
import React, { useRef } from "react";
import eyesClosedPatient from "@/public/images/derma2.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import AboutUsText from "./AboutUsText";

type Props = {
  // fonts: NextFont[];
};

function AboutUs({}: Props) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageRotation = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["25deg", "0deg", "0deg", "25deg"],
    { ease: easeInOut }
  );
  const imageDirectionX = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["50%", "0%", "0%", "-50%"],
    { ease: easeInOut }
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["40%", "100%", "100%", "40%"],
    { ease: easeInOut }
  );

  return (
    <div>
      {/* spacer */}
      <div className="h-[25vh] w-full"></div>
      <div className={`min-h-[250vh] w-full flex `} ref={containerRef}>
        {/* Left Side */}
        <div className="min-h-[250vh] w-full flex flex-col">
          <div className="pl-48 min-h-[200vh] flex flex-col justify-evenly">
            {/* Text 1 */}
            <div className="w-full min-h-[20rem]">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ margin: "-400px", once: true }}
                className="text-6xl font-normal text-zinc-900 text-pretty leading-tight tracking-tight"
              >
                Expert skin care with advanced treatments and a patient-centered
                approach.
              </motion.h3>
            </div>

            <AboutUsText heading="12000+" para="clients since 1995" />
            <AboutUsText heading="100%" para="client satisfaction" />
            <AboutUsText heading="SEVERAL" para="industry awards" />
          </div>
          {/* Spacer */}
          <div className="min-h-[50vh] w-full"></div>
        </div>
        {/* Right Side */}
        <div className="min-h-[250vh] w-full relative">
          <div className="w-full h-screen sticky top-[10%]">
            <motion.div
              className="absolute bottom-0 right-0 w-3/4 h-3/4 mb-28"
              style={{ x: imageDirectionX, rotateZ: imageRotation, scale }}
            >
              <Image
                src={eyesClosedPatient}
                fill
                alt="woman smiling"
                className="object-cover"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
