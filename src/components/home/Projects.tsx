import { motion } from "framer-motion";

import { LinkIcon } from "../../assets/Svg";
import { projectData } from "../../utils/data";

const Projects = () => {
  return (
    <motion.div
      className="py-7 lg:py-15"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-7 mb-3 rounded-2xl  relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="col-span-1 lg:sticky lg:top-36 lg:h-fit">
          <motion.h2
            className="font-medium text-2xl mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="font-medium text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            I transform design concepts into responsive, user-friendly
            interfaces with clean code architecture and meaningful interactions.
            Each project demonstrates my commitment to performance,
            accessibility, and thoughtful user experience across all devices.
            Feel free to explore my work below and reach out if you'd like to
            discuss any project in more detail.
          </motion.p>
        </div>
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-20 lg:pt-8">
          {projectData.map((project, index) => (
            <motion.div
              className="space-y-3 group"
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <motion.div
                className="h-56 xl:h-[400px] rounded-2xl bg-[#D9D9D9] w-full overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={project.img}
                  alt={`${project.title} project screenshot`}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.span
                className="text-lg font-un-bounded text-black dark:text-white font-medium"
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {project.title}
                {"  "}
                <span className="text-[#AFAEB7] text-base">
                  / {project.type}
                </span>
              </motion.span>

              <motion.p
                className="text-sm mt-1"
                whileHover={{
                  x: 3,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {project.description}
              </motion.p>

              <div className="flex items-center  ">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 15,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkIcon className="hover:fill-primary-medium w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
