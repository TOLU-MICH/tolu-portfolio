import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Contacts from "../components/Contacts";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="px-5 w-full">
      <div className="container w-full mx-auto  ">
        <Hero />
        <AboutMe />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
