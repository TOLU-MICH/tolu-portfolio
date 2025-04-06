import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  ReactIcon,
  ReduxIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "../assets/Svg";
const experience = [
  {
    icon: <ReactIcon />,
    name: "React",
    category: "JavaScript Framework",
  },
  {
    icon: <TypeScriptIcon />,
    name: "TypeScript",
    category: "Programming Language",
  },
  {
    icon: <HTMLIcon />,
    name: "HTML",
    category: "Markup Language",
  },
  {
    icon: <CSSIcon />,
    name: "CSS",
    category: "Style Sheet Language",
  },
  {
    icon: <NextJSIcon />,
    name: "Next.js",
    category: "React Framework",
  },
  {
    icon: <JavaScriptIcon />,
    name: "JavaScript",
    category: "Programming Language",
  },
  {
    icon: <TailwindCSSIcon />,
    name: "Tailwind CSS",
    category: "CSS Framework",
  },
  {
    icon: <ReduxIcon />,
    name: "Redux",
    category: "State Management",
  },
];

const AboutMe = () => {
  return (
    <section className=" px-5 xs:px-6  py-7 lg:py-15 lg:px-0 " id="about-me">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-7 relative ">
        <div className="col-span-1 lg:sticky lg:top-36 lg:h-fit  ">
          <h2 className="font-medium text-2xl ">About me</h2>
        </div>

        <div className="col-span-3 lg:pt-8">
          <div className="font-medium text-base md:text-lg mb-8 md:mb-12 space-y-4 leading-relaxed">
            <p>
              Hello! my name is Micheal, a Frontend Developer who loves turning
              designs into websites that people actually enjoy using.
            </p>
            <p>
              I work primarily with React, Next.js, TypeScript, and Tailwind CSS
              to build responsive web applications that look great on any
              device. What I enjoy most about my work is taking a designer's
              vision from Figma and bringing it to life with clean, efficient
              code.
            </p>
            <p>
              Working at Identigo and Fluxit has given me the chance to solve
              real-world problems through code. I love taking complex data and
              turning it into something visual that tells a story. Some of my
              favorite projects involve building interactive dashboards where
              users can explore information in ways that make sense to them.
            </p>
            <p>
              I believe great websites come from great teamwork. I enjoy
              collaborating with designers to understand their vision and
              backend developers to connect everything together. This
              collaborative approach helps me create experiences that not only
              look good but work flawlessly.
            </p>
            <p>
              Looking ahead, I'm particularly excited about exploring more
              advanced animation techniques and state management solutions to
              create even more engaging user experiences. I'm always on the
              lookout for projects that challenge me to grow as a developer.
            </p>

            <p>
              I'm open to discussing new opportunities, collaborations, or just
              chatting about frontend development. Feel free to reach out—I'd
              love to connect!
            </p>
          </div>
          <p className="font-medium text-black font-un-bounded  mb-2">
            Essential tools i uses:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {experience.map((experience) => (
              <div
                key={experience.name}
                className="flex gap-5 py-3 px-4 items-center border border-primary-light rounded-xl shadow-bg-shadow hover:shadow-lg transition-shadow duration-300 group"
                tabIndex={0}
                role="group"
                aria-label={`${experience.name}: ${experience.category}`}
              >
                <div className="bg-primary-light p-3 rounded-xl">
                  {experience.icon}
                </div>
                <span className="font-medium text-sm">
                  <p className="font-un-bounded text-primary-dark mb-1">
                    {experience.name}
                  </p>
                  <p className="">{experience.category}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download cv */}
      <div className="pt-15 lg:hidden" id="experience">
        <a
          className="bg-black hover:bg-primary-dark/95 hover:scale-105 transition-all duration-300 ease-in-out py-[18px] px-4 md:px-8 rounded-2xl flex justify-baseline "
          href="https://docs.google.com/document/d/1tVFgayImx4C9-QIvqNNgWnFSUTuOLG0dTIWqIxbJNHQ/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center gap-6  font-un-bounded uppercase">
            <p className="text-lg md:text-2xl text-white">Resume</p>
            <p className="font-medium text-[10px] md:text-sm text-white">
              Click to view my detailed resume
            </p>
          </span>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
