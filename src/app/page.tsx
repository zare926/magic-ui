"use client";

import Streamgraph from "./_components/airbnb-visx/streamgraph";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import NumberTicker from "./_components/magicui/number-ticker";
import BoxReveal from "./_components/magicui/box-reveal";
import { useState } from "react";
import ShinyButton from "./_components/magicui/shiny-button";
import Link from "next/link";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  console.log(isMounted);
  return (
    <div className="grid w-[100vw] h-[100vh] place-items-center relative">
      <ParentSize>
        {({ width, height }) => <Streamgraph width={width} height={height} />}
      </ParentSize>
      {/* アニメーションで何秒後かに消えるCSSを設定する */}
      {/* チーム相関図を作る、顔写真決める */}
      {!isMounted && (
        <div className="grid place-items-center absolute inset-0 m-auto text-center pointer-events-none">
          <NumberTicker
            value={100}
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-[30vw] font-bold select-none"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "white",
              opacity: 0.8,
            }}
            setIsMounted={setIsMounted}
          />
        </div>
      )}
      {isMounted && (
        <div className="absolute right-0 bottom-10 p-10">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-4">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold">
                  {process.env.NEXT_PUBLIC_COMPANY_NAME}
                  <span className="text-[#5046e6]">.</span>
                </p>
              </BoxReveal>
              <BoxReveal>
                <Link href="/animated-beam">
                  <ShinyButton className="w-[320px]">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Architecture Diagram
                    </span>
                  </ShinyButton>
                </Link>
              </BoxReveal>
              <BoxReveal>
                <Link href="/team-diagram">
                  <ShinyButton className="w-[320px]">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Team Diagram
                    </span>
                  </ShinyButton>
                </Link>
              </BoxReveal>
            </div>
            <BoxReveal boxColor="#5046e6" duration={0.5}>
              <>
                <span className="text-[#5046e6] font-bold text-lg">
                  Mission
                </span>
                <h2 className="my-[.5rem] text-[1rem]">
                  　{process.env.NEXT_PUBLIC_MISSION}
                </h2>
                <span className="text-[#5046e6] font-bold text-lg">Vision</span>
                <h2 className="my-[.5rem] text-[1rem]">
                  　{process.env.NEXT_PUBLIC_VISION}
                </h2>
                <span className="text-[#5046e6] font-bold text-lg">Value</span>
                <ul className="pl-5 list-none">
                  <li className="my-[.5rem] text-[1rem]">
                    {process.env.NEXT_PUBLIC_CURIOSITY}
                    <span className="text-[#8eaaac] ml-2 text-lg">
                      Curiosity
                    </span>
                  </li>
                  <li className="my-[.5rem] text-[1rem]">
                    {process.env.NEXT_PUBLIC_ENJOY}
                    <span className="text-[#8eaaac] ml-2 text-lg">Enjoy</span>
                  </li>
                  <li className="my-[.5rem] text-[1rem]">
                    {process.env.NEXT_PUBLIC_IMPROVEMENT}
                    <span className="text-[#8eaaac] ml-2 text-lg">
                      Improvement
                    </span>
                  </li>
                  <li className="my-[.5rem] text-[1rem]">
                    {process.env.NEXT_PUBLIC_CONFIDENCE}
                    <span className="text-[#8eaaac] ml-2 text-lg">
                      Confidence
                    </span>
                  </li>
                  <li className="my-[.5rem] text-[1rem]">
                    {process.env.NEXT_PUBLIC_CONSIDER}
                    <span className="text-[#8eaaac] ml-2 text-lg">
                      Consider
                    </span>
                  </li>
                  <li className="my-[.5rem] text-[1rem]">
                    {process.env.NEXT_PUBLIC_PERCEIVE}
                    <span className="text-[#8eaaac] ml-2 text-lg">
                      Perceive
                    </span>
                  </li>
                  <li className="my-[.5rem] text-[1rem]">
                    {process.env.NEXT_PUBLIC_MAXIMIZE}
                    <span className="text-[#8eaaac] ml-2 text-lg">
                      Maximize
                    </span>
                  </li>
                </ul>
              </>
            </BoxReveal>
          </div>
        </div>
      )}
    </div>
  );
}
