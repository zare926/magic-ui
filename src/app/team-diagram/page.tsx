"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "../_components/magicui/animated-beam";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import SparklesText from "../_components/magicui/sparkles-text";
import Image from "next/image";
import BlurIn from "../_components/magicui/blur-in";
import Escape from "../_components/escape/Escape";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

const AnimatedBeamDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineerRef = useRef<HTMLDivElement>(null);
  // const div2Ref = useRef<HTMLDivElement>(null);
  // const div3Ref = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);
  const pmRef = useRef<HTMLDivElement>(null);
  // const div6Ref = useRef<HTMLDivElement>(null);
  // const div7Ref = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const jobRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid w-[100vw] h-[100vh] place-items-center">
      <Escape />
      <div className="flex flex-col items-center justify-center">
        <SparklesText text="Team Diagram" className="mb-6" />
        <div
          className="relative flex flex-col gap-16 w-[1000px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
          ref={containerRef}
        >
          <div className="flex flex-row items-center justify-between">
            <Circle
              ref={devRef}
              className="relative h-40 w-40 rounded-full overflow-hidden"
            >
              <Image
                src="/developer.webp"
                alt="Developer"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
              <BlurIn
                word="開発部"
                className="text-sm text-black dark:text-white"
              />
            </Circle>
          </div>
          <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
            <div className="flex flex-row items-center justify-between">
              <Circle
                ref={engineerRef}
                className="relative h-32 w-32 rounded-full overflow-hidden"
              >
                <Image
                  src="/engineer.webp"
                  alt="Engineer"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
                <BlurIn
                  word="エンジニア"
                  className="text-sm text-black dark:text-white"
                />
              </Circle>
              <Circle
                ref={pmRef}
                className="relative h-32 w-32 rounded-full overflow-hidden"
              >
                <Image
                  src="/pm.webp"
                  alt="PM"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
                <BlurIn
                  word="PM"
                  className="text-sm text-black dark:text-white"
                />
              </Circle>
              <Circle
                ref={designRef}
                className="relative h-32 w-32 rounded-full overflow-hidden"
              >
                <Image
                  src="/design.webp"
                  alt="Designer"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
                <BlurIn
                  word="デザイナー"
                  className="text-sm text-black dark:text-white"
                />
              </Circle>
            </div>
            {/* <div className="flex flex-row items-center justify-between">
              <Circle ref={div2Ref}>
                <Icons.notion className="h-6 w-6" />
              </Circle>

              <Circle ref={div6Ref}>
                <Icons.zapier className="h-6 w-6" />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div3Ref}>
                <Icons.whatsapp className="h-6 w-6" />
              </Circle>
              <Circle ref={div7Ref}>
                <Icons.messenger className="h-6 w-6" />
              </Circle>
            </div> */}
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={engineerRef}
            toRef={devRef}
            curvature={-10}
            endYOffset={-10}
          />
          {/* <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={devRef}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={devRef}
            curvature={75}
            endYOffset={10}
          /> */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={pmRef}
            toRef={devRef}
            curvature={-10}
            reverse
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={designRef}
            toRef={devRef}
            curvature={-10}
            reverse
            endYOffset={-10}
          />
          {/* <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={devRef}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={devRef}
            curvature={75}
            reverse
            endYOffset={10}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBeamDemo;
