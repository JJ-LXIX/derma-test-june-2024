import Image from "next/image";
import React from "react";
import HeroImage from "@/public/images/hero_section/heroImage.jpg";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-[150vh]">
        <div className="w-full h-screen sticky top-0 flex flex-col justify-end ">
          {/* Bottom Half */}
          <div className="h-[50vh] w-full flex justify-center items-center relative">
            {/* Text Block */}
            <div className="w-4/12 h-[40vh] absolute -top-[10rem] flex flex-col items-center justify-start z-40">
              <h1 className="text-8xl text-black mix-blend-difference">
                Helios
              </h1>
              <h1 className="text-8xl text-black mix-blend-color-dodge">
                Dermatologists
              </h1>
            </div>

            {/* Image */}
            <div className="z-30 h-full w-4/12 relative">
              <Image
                src={HeroImage}
                alt="Image of a Woman with clear skin"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black h-[500vh]"></div>
    </div>
  );
}

export default Hero;
