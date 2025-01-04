import ProgressBar from "@ramonak/react-progress-bar";

const Progress = () => {
  return (
    <div className="flex uppercase flex-col p-4 md:p-10 gap-5">
      <div className="">
        <span className="px-3  mb-2">Html</span>
        <ProgressBar
          completed={95}
          bgColor="#ff014f"
          baseBgColor="#1f2125"
          labelColor=""
          maxCompleted={100}
        />
      </div>
      <div className="">
        <span className="px-3 mb-2">Css</span>
        <ProgressBar
          completed={90}
          bgColor="#ff014f"
          baseBgColor="#1f2125"
          labelColor=""
          maxCompleted={100}
        />
      </div>
      <div className="">
        <span className="px-3 mb-2">Javascript</span>
        <ProgressBar
          completed={80}
          bgColor="#ff014f"
          baseBgColor="#1f2125"
          labelColor=""
          maxCompleted={100}
        />
      </div>
      <div className="">
        <span className="px-3 mb-2">React</span>
        <ProgressBar
          completed={84}
          bgColor="#ff014f"
          baseBgColor="#1f2125"
          labelColor=""
          maxCompleted={100}
        />
      </div>
      <div className="">
        <span className="px-3 mb-2">Node js</span>
        <ProgressBar
          completed={72}
          bgColor="#ff014f"
          baseBgColor="#1f2125"
          labelColor=""
          maxCompleted={100}
        />
      </div>
      <div className="">
        <span className="px-3 mb-2">MongoDB</span>
        <ProgressBar
          completed={86}
          bgColor="#ff014f"
          baseBgColor="#1f2125"
          labelColor=""
          maxCompleted={100}
        />
      </div>
      <div className="">
        <span className="px-3 mb-2">Express</span>
        <ProgressBar
          completed={89}
          bgColor="#ff014f"
          baseBgColor="#1f2125"
          labelColor=""
          maxCompleted={100}
        />
      </div>
      {/* <div className="">
        <span className="px-3 mb-2">Next Js</span>
        <ProgressBar
          completed={70}
          bgColor="#ff014f"
          baseBgColor="#1f2125"
          labelColor=""
          maxCompleted={100}
        />
      </div> */}
    </div>
  );
};

export default Progress;
