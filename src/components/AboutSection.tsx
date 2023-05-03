import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Prisma" },
  { skill: "Django" },
  { skill: "Flask" },
  { skill: "Express" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Khanh and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> computer science
              student based in Sacramento, CA.
            </p>
            <br />
            <p>
              Currently, I am pursuing a BS in Computer Science at California
              State University, Sacramento, and I anticipate graduating in Fall
              2023.
            </p>
            <br />
            <p>
              In my free time, I enjoy playing video games, watching anime, and
              spending time with my friends. I am always eager to experience new
              things and love to keep myself engaged and learning.
            </p>
            <br />
            <p>
              I believe in{" "}
              <span className="font-bold text-teal-500">continuous growth</span>{" "}
              and I am passionate about technology. I am constantly striving to
              push the boundaries of what is possible. I am excited to see where
              my career takes me and welcome new opportunities with open arms.
              🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={1000}
              height={1000}
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
