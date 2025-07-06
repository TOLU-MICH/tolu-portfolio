import { motion } from "framer-motion";
import { experienceData, aboutMeParagraphs } from "../../utils/data";

const AboutMe = () => {
  return (
    <section className=" px-5 xs:px-6  py-7 lg:py-15 lg:px-0 " id="about-me">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-7 relative ">
        <div className="col-span-1 lg:sticky lg:top-36 lg:h-fit  ">
          <h2 className="font-medium text-2xl ">About me</h2>
        </div>

        <div className="col-span-3 lg:pt-8">
          <div className="font-medium text-base md:text-lg mb-8 md:mb-12 space-y-4 leading-relaxed">
            {aboutMeParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + index * 0.05,
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          <motion.p
            className="font-medium text-black font-un-bounded  mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Essential tools i uses:
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.name}
                className="flex gap-5 py-3 px-4 items-center border border-primary-light rounded-xl shadow-bg-shadow hover:shadow-lg transition-shadow duration-300 group glass-card"
                tabIndex={0}
                role="group"
                aria-label={`${exp.name}: ${exp.category}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.05,
                  type: "spring",
                  stiffness: 120,
                }}
                // whileHover={{
                //   y: -8,
                //   scale: 1.05,
                //   transition: { type: "spring", stiffness: 400, damping: 10 },
                // }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="bg-primary-light glass-card p-3 rounded-xl"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                >
                  {exp.icon}
                </motion.div>
                <span className="font-medium text-sm">
                  <p className="font-un-bounded text-primary-dark dark:text-white mb-1">
                    {exp.name}
                  </p>
                  <p className="">{exp.category}</p>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Download cv */}
      <motion.div
        className="pt-15 lg:hidden"
        id="experience"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        <motion.a
          className="bg-black hover:bg-primary-dark/95 glass-card py-[18px] px-4 md:px-8 rounded-2xl flex justify-baseline group relative overflow-hidden"
          href="https://docs.google.com/document/d/1tVFgayImx4C9-QIvqNNgWnFSUTuOLG0dTIWqIxbJNHQ/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-un-bounded uppercase">
            <p className="text-lg md:text-2xl text-white">Resume</p>
            {/* <p className="font-medium text-[10px] md:text-sm text-white">
              Click to view my detailed resume
            </p> */}
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutMe;
