import { Link, NavLink } from "react-router";
import logo from "../assets/logo/hdrlogo2.jpg";
import { RiMenuUnfoldFill, RiPictureInPictureExitFill } from "react-icons/ri";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { FiLogIn } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const { user, logOutUser, loading } = useAuth();

  const logOutHandler = async () => {
    await logOutUser();
  };

  return (
    <div className="sticky top-0 z-10 bg-[#212428] bg-opacity-70 backdrop-blur-lg">
      <div className="py-3 relative px-4 md:px-6 flex justify-between items-center ">
        {/* logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            className="w-12 h-12 md:w-16 md:h-16 rounded-full"
          />
          <h1 className="text-xl md:text-3xl font-bold">
            H<span className="text-[#ff014f]">D</span>R
          </h1>
        </div>
        <div
          onClick={() => setMenu(!menu)}
          className="text-2xl flex lg:hidden cursor-pointer"
        >
          {menu ? <RiMenuUnfoldFill /> : <RiPictureInPictureExitFill />}
        </div>
        {/* menu */}
        <div className="">
          <nav>
            <ul className=" hidden lg:flex justify-center items-center gap-10 font-medium ">
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/aboutMe">
                <li>About</li>
              </NavLink>
              <NavLink to="/skill">
                <li>Skill</li>
              </NavLink>
              <NavLink to="/project">
                <li>Project</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact Me</li>
              </NavLink>
              {user?.email === import.meta.env.VITE_Admin &&
              user?.emailVerified === true ? (
                <NavLink to="/dashBoard">
                  <li>Dash Board</li>
                </NavLink>
              ) : (
                ""
              )}
            </ul>
          </nav>
        </div>
        {/* toggle Menu */}
        <div
          className={`${
            menu ? "hidden" : "flex"
          } absolute z-10 top-20 w-[90%] bg-[#1f0600] rounded-lg p-6 lg:hidden`}
        >
          <nav>
            <ul
              onClick={() => setMenu(!menu)}
              className=" flex flex-col gap-4 font-medium "
            >
               <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/aboutMe">
                <li>About</li>
              </NavLink>
              <NavLink to="/skill">
                <li>Skill</li>
              </NavLink>
              <NavLink to="/project">
                <li>Project</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact Me</li>
              </NavLink>
              {user?.email === import.meta.env.VITE_Admin &&
              user?.emailVerified === true ? (
                <NavLink to="/dashBoard">
                  <li>Dash Board</li>
                </NavLink>
              ) : (
                ""
              )}
            </ul>
          </nav>
        </div>

        {/* profile */}
        {loading ? (
          <div></div>
        ) : (
          <div className="flex justify-center items-center gap-3">
            {/* <img
          src={logo}
          alt=""
          className="w-10 h-10 md:w-14 md:h-14 rounded-full"
        /> */}
            <div className="">
              <Link to="/login">
                {user ? (
                  <button
                    onClick={logOutHandler}
                    className="bg-[#1f2125] flex items-center gap-2 hover:text-[#ff014f] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 py-2 md:py-3 uppercase font-semibold px-4"
                  >
                    <span className="text-xl">
                      <LuLogOut />
                    </span>{" "}
                    Logout
                  </button>
                ) : (
                  <button className="bg-[#1f2125] flex items-center gap-2 hover:text-[#ff014f] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 py-2 md:py-3 uppercase font-semibold px-4">
                    <span className="text-xl">
                      <FiLogIn />
                    </span>{" "}
                    Login
                  </button>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
