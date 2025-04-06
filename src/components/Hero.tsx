import { LineIcon, StarIcon } from "../assets/Svg";

const Hero = () => {
  return (
    <section className="bg-white border border-primary-light rounded-2xl p-5 py-10 xs:p-6 sm:p-20 md:p-32 shadow-bg-shadow space-y-10 sm:space-y-13 text-center mb-7 lg:mb-15">
      <div className="flex items-center rounded-full px-5 xs:px-9 bg-primary-dark gap-2 xs:gap-3 w-fit mx-auto h-13">
        <StarIcon className="animate-spin" />
        <p className="text-xs md:text-sm font-un-bounded text-white">
          Available for new projects
        </p>
      </div>
      <div className="max-w-[921px] w-full mx-auto relative">
        <h1 className="text-2xl xs:text-[28px] sm:text-[45px] md:text-5xl lg:text-[60px] lg:leading-18 font-bold  ">
          Transforming Ideas into Exceptional UI
        </h1>

        <div className="absolute -bottom-5 left-[43%]">
          <LineIcon className="w-[80%] md:w-full" />
        </div>
      </div>

      <p className="max-w-[624px] w-full mx-auto font-medium xs:text-sm md:text-2xl text-primary-dark">
        Hi, i'm Micheal Tolu Francis a front-end developer with a passion for
        building high performance, visually stunning web application. Your
        ideas, my code. Let’s bring your vision to life!
      </p>
    </section>
  );
};

export default Hero;
