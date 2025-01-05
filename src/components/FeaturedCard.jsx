

const FeaturedCard = ({logo, title, desc}) => {
    return (
        <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
        className="bg-[#1f2125] hover:scale-105 p-6 rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">
         <p className="text-5xl mb-6 text-[#ff014f]">{logo}</p>
         <h1 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h1>
         <p className="text-gray-300 text-xl font-light">{desc}</p>
        </div>
    );
};

export default FeaturedCard;