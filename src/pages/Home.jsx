import Banner from "../components/homeComponents/Banner";
import ContactMe from "../components/homeComponents/ContactMe";
import FeaturedSection from "../components/homeComponents/FeaturedSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
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
