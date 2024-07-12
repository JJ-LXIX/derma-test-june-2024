"use client";
import React from "react";
import ScrollingText from "./ScrollingText";
import { editorial } from "@/app/libs/fonts/localFonts";
import FooterIcon from "../Icons/FooterIcon";
import Instagram from "../Icons/Instagram";
import Facebook from "../Icons/Facebook";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="h-[40vh] w-full bg-black">
      {/* Top Moving */}
      <div className="h-1/6 w-full flex animate-loop-scroll space-x-2 overflow-clip">
        <ScrollingText />
      </div>

      {/* Bottom  */}
      <div className="h-5/6 w-full pb-5 text-zinc-100">
        <div className="h-full w-full flex">
          {/* Left */}
          <div className="w-1/6 h-full ">
            <div className="h-3/4 w-full relative ">{/* <FooterIcon /> */}</div>
          </div>
          {/* Middle */}
          <div className="w-4/6 h-full pt-0">
            <div className="w-full h-3/4 flex">
              <div className="h-full w-1/2 ">
                <div className="w-full h-full flex flex-col">
                  <p className="text-8xl font-semibold">FIND US:</p>
                  <p
                    className={`${editorial.className} text-2xl  text-zinc-300 uppercase`}
                  >
                    {/* TODO: add mail link */}
                    heliosdermatology@info.com
                  </p>
                </div>
              </div>

              <div className="h-full w-1/2">
                <div className="w-full h-full flex justify-end space-x-20 px-5 py-5">
                  {/* TODO: add next link */}
                  <ul className="flex flex-col h-full space-y-2">
                    <li>
                      <p className="text-xl cursor-pointer text-zinc-300 relative group">
                        Privacy
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>{" "}
                        Policy
                      </p>
                    </li>
                    <li className="text-xl cursor-pointer text-zinc-300">
                      <p className="text-xl cursor-pointer text-zinc-300 relative group">
                        Insurance
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>
                      </p>
                    </li>
                  </ul>
                  <ul className="flex flex-col h-full space-y-2">
                    <li className="text-xl cursor-pointer text-zinc-300">
                      <p className="text-xl cursor-pointer text-zinc-300 relative group">
                        Our
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>{" "}
                        Work
                      </p>
                    </li>
                    <li className="text-xl cursor-pointer text-zinc-300">
                      <p className="text-xl cursor-pointer text-zinc-300 relative group">
                        Locations
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>
                      </p>
                    </li>
                    <li className="text-xl cursor-pointer text-zinc-300">
                      <p className="text-xl cursor-pointer text-zinc-300 relative group">
                        About
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>
                      </p>
                    </li>
                    <li className="text-xl cursor-pointer text-zinc-300">
                      <p className="text-xl cursor-pointer text-zinc-300 relative group">
                        Contact
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-200 duration-300 group-hover:w-3/6"></span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* bottom middle */}
            <div className="w-full h-1/4 border-t-2 border-zinc-200">
              <div className="h-full w-full flex justify-between">
                <div className="w-2/6 h-full flex p-3">
                  <div className="w-1/2 h-full border-r-[1px] border-zinc-400 flex items-center justify-end pr-5">
                    <p className="text-2xl text-zinc-300">Instagram</p>
                    <Instagram />
                  </div>
                  <div className="w-1/2 h-full border-l-[1px] border-zinc-400 pl-5 flex items-center">
                    <Facebook />
                    <p className="text-2xl text-zinc-300">Facebook</p>
                  </div>
                </div>
                <div className="w-fit h-full flex items-center">
                  <p className="text-xl text-zinc-500 text-pretty ">
                    © 2024 Helios Derma Clinic. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-1/6 h-full"></div>
        </div>
      </div>
    </div>
  );
}
