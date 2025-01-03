import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularBar = () => {
  return (
    <div className="grid p-4 md:p-10 grid-cols-2 gap-12 md:grid-cols-2">
      {/* 1 */}
      <div className="w-full md:w-[160px]">
        <CircularProgressbar
          value={85}
          text={`85%`}
          styles={buildStyles({
            pathColor: "#ff014f",
            textColor: "#f2f2f2",
            trailColor: "#1f2125",
            backgroundColor: "#3e98c7",
          })}
        />
        <p className="text-center mt-2 font-semibold">Creativity</p>
      </div>
      {/* 2*/}
      <div className="w-full md:w-[160px]">
        <CircularProgressbar
          value={95}
          text={`95%`}
          styles={buildStyles({
            pathColor: "#ff014f",
            textColor: "#f2f2f2",
            trailColor: "#1f2125",
            backgroundColor: "#3e98c7",
          })}
        />
        <p className="text-center mt-2 font-semibold">Project</p>
      </div>
      {/* 3 */}
      <div className="w-full md:w-[160px]">
        <CircularProgressbar
          value={89}
          text={`89%`}
          styles={buildStyles({
            pathColor: "#ff014f",
            textColor: "#f2f2f2",
            trailColor: "#1f2125",
            backgroundColor: "#3e98c7",
          })}
        />
        <p className="text-center mt-2 font-semibold">Project</p>
      </div>
      {/* 4 */}
      <div className="w-full md:w-[160px]">
        <CircularProgressbar
          value={82}
          text={`82%`}
          styles={buildStyles({
            pathColor: "#ff014f",
            textColor: "#f2f2f2",
            trailColor: "#1f2125",
            backgroundColor: "#3e98c7",
          })}
        />
        <p className="text-center mt-2 font-semibold">Project</p>
      </div>
    </div>
  );
};

export default CircularBar;
