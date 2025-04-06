import { LinkIcon } from "../assets/Svg";
import identigo from "../assets/images/Identigo.webp";
import pistis from "../assets/images/pisitis.webp";

const projectData = [
  {
    title: "Identigo",
    type: "Corporate website",
    description:
      "A flexible website for an IT company that has helped it expand internationally",
    link: "https://identigo.africa/",
    img: identigo,
  },
  {
    title: "Pistis Tech Hub",
    type: "Educational Platform",
    description:
      "An innovative platform for DevOps training, offering hands-on learning and real-world projects",
    link: "https://learn.pististechub.io/",
    img: pistis,
  },
];

const Projects = () => {
  return (
    <div className="py-7 lg:py-15" id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-7 mb-3 shadow-bg-shadow bg-white rounded-2xl xl:p-15 p-10 sm:p-14 relative">
        <div className=" col-span-1 lg:sticky lg:top-36 lg:h-fit">
          <h2 className="font-medium text-2xl mb-2">Projects</h2>
          <p className="font-medium text-sm">
            I transform design concepts into responsive, user-friendly
            interfaces with clean code architecture and meaningful interactions.
            Each project demonstrates my commitment to performance,
            accessibility, and thoughtful user experience across all devices.
            Feel free to explore my work below and reach out if you'd like to
            discuss any project in more detail.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-20 lg:pt-8">
          {projectData.map((project) => (
            <div className="space-y-3 group" key={project.title}>
              <div className="h-56 xl:h-[400px] rounded-2xl bg-[#D9D9D9] w-full overflow-hidden relative ">
                <div className="transition-all duration-300 ease-in-out blur-sm opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/5 pointer-events-none" />
                <img
                  src={project.img}
                  alt="project image"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-lg font-un-bounded text-black font-medium">
                {project.title}
                {"  "}
                <span className="text-[#AFAEB7] text-base">{project.type}</span>
              </span>
              <p className="text-sm ">{project.description}</p>

              <div className="flex items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="hover:fill-primary-medium  w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
