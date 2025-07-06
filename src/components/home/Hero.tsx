import { motion, Variants } from "framer-motion";
import { LineIcon, StarIcon } from "../../assets/Svg";
import avatar from "../../assets/images/hero-avatar.png";

const Hero = () => {
  const slideUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInLeftVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const slideInRightVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 100,
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

  const badgeVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
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

  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      scaleX: 0,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  // Split heading text into words for animation
  const headingText = "Transforming Ideas into Exceptional UI";
  const words = headingText.split(" ");

  return (
    <section className="overflow-hidden flex flex-col lg:flex-row bg-white dark:bg-white/5 border border-primary-light dark:border-primary-light/5 rounded-2xl p-5 py-10 xs:p-6 sm:p-20 pb-0 xs:pb-0 sm:pb-0 lg:pb-20 relative shadow-bg-shadow text-center mb-7 lg:mb-15 glass-card">
      {/* Avatar Section */}
      <motion.div
        className="lg:w-2/5 lg:absolute lg:-bottom-1 lg:pr-10"
        variants={slideInLeftVariants}
      >
        <motion.img
          src={avatar}
          alt="Micheal Tolu Francis"
          className="w-full h-full object-cover"
          animate={{
            y: [-8, 8, -8],
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
        className="lg:w-3/5 space-y-10 sm:space-y-8 ml-auto order-first lg:order-last"
        variants={slideInRightVariants}
      >
        {/* Status Badge */}
        <motion.div
          className="flex items-center rounded-full px-5 xs:px-9 bg-primary-dark dark:bg-primary-dar-light gap-2 xs:gap-3 w-fit mx-auto h-13"
          variants={badgeVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            <StarIcon className="animate-spin" />
          </motion.div>
          <motion.p
            className="text-xs md:text-sm font-un-bounded text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Available for new projects
          </motion.p>
        </motion.div>

        {/* Heading Section */}
        <motion.div
          className="max-w-[921px] w-full mx-auto relative"
          variants={slideUpVariants}
        >
          <motion.h1
            className="text-2xl xs:text-[28px] sm:text-4xl md:text-5xl lg:leading-18 font-bold"
            variants={headingVariants}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2 md:mr-3"
                whileHover={{
                  color: "#your-primary-color", // Replace with your primary color
                  transition: { duration: 0.2 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="absolute -bottom-5 left-[43%]"
            variants={lineVariants}
          >
            <LineIcon className="w-[80%] md:w-full" />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-[624px] w-full mx-auto font-medium xs:text-sm md:text-2xl"
          variants={slideUpVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Hi, i'm <strong>Micheal Tolu Francis</strong> a front-end developer
            with a passion for building high performance, visually stunning web
            application. Your ideas, my code. Let's bring your vision to life!
          </motion.span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
