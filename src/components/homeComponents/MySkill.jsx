
import CircularBar from "../shared/CircularBar";
import Progress from "../shared/ProgressBar";

const MySkill = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-14">
      {/* js */}
      <div
      data-aos="fade-right"
      data-aos-duration="1500"
       className="w-full lg:w-1/2">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">Technical Skills</h1>
        <Progress></Progress>
      </div>
      {/* comunication */}
      <div 
      data-aos="fade-left"
      data-aos-duration="1500"
      className="w-full lg:w-1/2">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">Professional Skills</h1>
      <CircularBar></CircularBar>
      </div>
    </div>
  );
};

export default MySkill;
