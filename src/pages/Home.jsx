import AboutMe from "../components/homeComponents/AboutMe";
import Banner from "../components/homeComponents/Banner";
import ContactMe from "../components/homeComponents/ContactMe";
import FeaturedSection from "../components/homeComponents/FeaturedSection";
import MySkill from "../components/homeComponents/MySkill";
import Project from "../components/homeComponents/Project";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto mb-20 md:mb-32  ">
        <p className="font-extralight text-xl text-center mb-4 text-[#ff014f]">Let Me introduce My-self</p>
        <h1 className="text-4xl md:text-6xl mb-14 text-center font-bold">About Me</h1>
        <AboutMe></AboutMe>
      </div>
      <div className="container mx-auto mb-20 md:mb-32 ">
        <p className="font-extralight text-xl text-center mb-4 text-[#ff014f]">Technical & Professional</p>
        <h1 className="text-4xl md:text-6xl mb-14 text-center font-bold">My Skills</h1>
        <MySkill></MySkill>
      </div>
      <div className="container mx-auto mb-20 md:mb-32 ">
        <p className="font-extralight text-xl text-center mb-4 text-[#ff014f]">Recent Project</p>
        <h1 className="text-4xl md:text-6xl mb-14 text-center font-bold">My Project</h1>
        <Project></Project>
      </div>
      
      <FeaturedSection></FeaturedSection>
      <div className="container mx-auto ">
        <p className="font-extralight text-xl text-center mb-4 text-[#ff014f]">Contact</p>
        <h1 className="text-4xl md:text-6xl mb-14 text-center font-bold">Contact With Me</h1>
        <ContactMe></ContactMe>
      </div>
    </div>
  );
};

export default Home;
