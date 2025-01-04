import { CirclesWithBar } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="flex justify-start p-8">
      <CirclesWithBar
        height="100"
        width="100"
        color="#ff014f"
        outerCircleColor="#ff014f"
        innerCircleColor="#ff014f"
        barColor="#ff014f"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
