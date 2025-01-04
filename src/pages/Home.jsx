import { useEffect, useState } from "react";
import AboutMe from "../components/homeComponents/AboutMe";
import Banner from "../components/homeComponents/Banner";
import ContactMe from "../components/homeComponents/ContactMe";
import FeaturedSection from "../components/homeComponents/FeaturedSection";
import MySkill from "../components/homeComponents/MySkill";
import Project from "../components/homeComponents/Project";
import { FaArrowUpLong } from "react-icons/fa6";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


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

      <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            backgroundColor: '#ff014f',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
          }}
          className="font-bold flex justify-center items-center text-2xl"
        >
          <FaArrowUpLong />
        </button>
      )}
    </div>

    </div>
  );
};

export default Home;
