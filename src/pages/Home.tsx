import Hero from "../components/home/Hero";
import AboutMe from "../components/home/AboutMe";
import Contacts from "../components/home/Contacts";
import Projects from "../components/home/Projects";

const Home = () => {
  return (
    <div className="container ">
      <Hero />
      <AboutMe />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Home;
