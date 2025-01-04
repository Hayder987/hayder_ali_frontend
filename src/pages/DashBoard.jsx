import { Link, Outlet } from 'react-router';
import logo from '../assets/logo/hdrlogo2.jpg'

const DashBoard = () => {
  return (
    <div className="container mx-auto p-6 bg-slate-800 mb-20">
      <h1 className="text-center mb-4 text-3xl font-semibold">Dash Board</h1>
      <div className="flex min-h-screen justify-center gap-10">
        {/* aside */}
        <div className="lg:w-3/12 rounded-lg bg-slate-300 p-6">
           <div className="flex mb-14 justify-start items-center gap-3 text-gray-800">
            <img src={logo} alt="" className="w-14 h-14 rounded-full " />
            <h1 className="text-2xl font-semibold">Hayder</h1>
           </div>
           <div className="text-gray-800 flex flex-col mb-16 gap-5">
            <Link to="addPost"><button className="bg-slate-400 w-full py-2 px-3 rounded-lg font-medium">Add Project</button></Link>
            <button className="bg-slate-400 py-2 px-3 rounded-lg font-medium">View Message</button>
            <button className="bg-slate-400 py-2 px-3 rounded-lg font-medium">All Project</button>
           </div>
        </div>
        {/* Content */}
        <div className="lg:w-9/12 rounded-lg bg-slate-400 p-6">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
