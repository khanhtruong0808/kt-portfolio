"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { AiOutlineArrowDown } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="animation-delay-2 my-10 flex animate-fadeIn flex-col items-center justify-center py-16 text-center sm:py-24 md:flex-row md:space-x-4 md:py-32 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.jpeg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
            priority
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">
            Hi, I&#39;m Khanh!
          </h1>
          <p className="mb-6 mt-4 text-lg md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-cyan-500">CS Student </span>
            based in Sacramento, CA. My goal is to create software that improves
            other lives, making them easier and more meaningful.
          </p>
          <div className="flex gap-4">
            <Link
              to="projects"
              className="cursor-pointer rounded bg-cyan-600 px-6 py-2.5 font-semibold text-neutral-100 shadow transition hover:bg-cyan-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <a
              href="https://docs.google.com/uc?id=1FLVa5g4UBD11Vp-uIjScmDmU5lrmeW5e&export=download"
              className="inline-flex cursor-pointer gap-x-2 rounded bg-cyan-600 px-6 py-2.5 font-semibold text-neutral-100 shadow transition hover:bg-cyan-700"
              download="Khanh Truong Resume - 5/3/23.pdf"
            >
              Download CV
              <AiOutlineArrowDown
                color="white"
                className="-ml-0.5 h-5 w-5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
