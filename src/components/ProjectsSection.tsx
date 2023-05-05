import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Tea-Rex",
    description:
      "Tea-Rex is a website for a local boba shop allowing customers to place online orders and employees to manage the menu. Built alongside a group of other computer science students. Currently WIP and will be finished Fall 2023.",
    image: "/tea-rex.png",
    github: "https://github.com/khanhtruong0808/tea-rex",
    link: "https:tea-rex.vercel.app",
  },
  {
    name: "Eyelash Appointment Booking App",
    description:
      "An appointment booking app for a local eyelash business. Currently WIP.",
    image: "/lashed-by-vienna.png",
    github: "https://github.com/khanhtruong0808/lashed-by-vienna",
    link: "https://lashedbyvienna.vercel.app/",
  },
  {
    name: "Advice Generator",
    description: "An advice generator built for a frontendmentor.io challenge.",
    image: "/advice-generator.png",
    github: "https://github.com/khanhtruong0808/advice-generator-app",
    link: "https://advice-generator-app-ten-sepia.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center text-4xl font-bold">
        Projects
        <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-cyan-500"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="animation-delay-2 flex animate-slideUpCubiBezier flex-col items-start md:flex-row md:items-center md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl object-fill shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="mb-6 text-4xl font-bold">{project.name}</h1>
                    <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-300">
                      {project.description}
                    </p>
                    <div className="flex flex-row space-x-4 align-bottom">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
