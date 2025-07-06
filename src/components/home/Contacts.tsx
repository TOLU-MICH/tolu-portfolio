import { motion, Variants } from "framer-motion";

import contactImage from "../../assets/images/contact.png";
import { LinkedInIcon, MailIcon, XIcon } from "../../assets/Svg";
import LeaveARequest from "../modals/LeaveARequest";

const Contacts = () => {
  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const slideInLeftVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRightVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconsVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="grid col-span-1 lg:grid-cols-4 gap-4 lg:gap-7 py-7 lg:py-15 relative"
      id="contact-me"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title Section */}
      <motion.div
        className="col-span-1 lg:sticky lg:top-36 lg:h-fit"
        variants={titleVariants}
      >
        <h2 className="font-medium text-2xl mb-2">Contacts</h2>
      </motion.div>

      {/* Main Content Card */}
      <div className="relative col-span-1 lg:col-span-3 bg-primary-light glass-card dark:border rounded-2xl overflow-hidden lg:p-15 p-10 sm:p-14 lg:py-28">
        <motion.div
          className="flex flex-col md:flex-row md:justify-between md:items-center"
          variants={contentVariants}
        >
          {/* Contact Image */}
          <motion.div
            className="lg:-bottom-1.5 lg:absolute lg:w-2/5 lg:pr-10"
            variants={slideInLeftVariants}
          >
            <motion.img
              src={contactImage}
              alt="contact illustration"
              className="object-cover"
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-9 lg:w-3/5 lg:ml-auto"
            variants={slideInRightVariants}
          >
            {/* Heading */}
            <h4 className="font-medium">You've got a challenge? Let's talk!</h4>

            {/* Description */}
            <motion.p
              className="text-black dark:text-primary-extra-light text-sm"
              variants={fadeInUpVariants}
            >
              Drop me a request on the website or reach out via WhatsApp,
              Twitter, LinkedIn—whatever works best for you. Let's create
              something amazing together!
            </motion.p>

            <motion.div
              className="flex flex-col xl:flex-row gap-5"
              variants={fadeInUpVariants}
            >
              <LeaveARequest />

              {/* Social Icons */}
              <motion.span
                className="flex gap-5"
                variants={socialIconsVariants}
              >
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/micheal-francis-frontend-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with me on LinkedIn"
                  title="LinkedIn Profile"
                  className="rounded-full border border-primary-dark dark:border-primary-light h-10 w-10 flex items-center justify-center group hover:border-0 transition-colors duration-300 ease-in-out hover:bg-[#0073b1] hover:scale-105"
                  variants={iconVariants}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedInIcon className="group-hover:fill-white dark:fill-white" />
                </motion.a>

                {/* Twitter/X */}
                <motion.a
                  aria-label="Follow me on Twitter/X"
                  title="Twitter/X Profile"
                  href="https://x.com/tolu_mich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary-dark dark:border-primary-light hover:glass-card h-10 w-10 flex justify-center items-center group hover:border-0 transition-colors duration-300 ease-in-out hover:bg-black hover:scale-105"
                  variants={iconVariants}
                  whileHover={{
                    scale: 1.15,
                    rotate: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XIcon className="group-hover:fill-white dark:fill-white w-5 h-5" />
                </motion.a>

                {/* Email */}
                <motion.a
                  aria-label="Send me an email"
                  title="Email Me"
                  href="mailto:francismicheal609@gmail.com"
                  className="rounded-full border border-primary-dark dark:border-primary-light hover:glass-card h-10 w-10 flex justify-center items-center group hover:border-0 transition-colors duration-300 ease-in-out hover:bg-black hover:scale-105"
                  variants={iconVariants}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MailIcon className="w-5 h-5 group-hover:fill-white dark:fill-white" />
                </motion.a>
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contacts;
