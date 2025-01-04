import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import loginBg from "../assets/images/registerBg-1.jpg";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {

  const {registerUser, updateUser, googleLogin } = useAuth()
  const navigate = useNavigate()

  const registerHandler = async e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    
    if(password.length<6){
      return  Swal.fire({
        title: "Password must be 6 Digits",
        icon: "error",
        draggable: true
      });
    }

    try{
      await registerUser(email, password)
    .then(async()=>{
      await updateUser(name)
      navigate('/')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Registration Success!",
        showConfirmButton: false,
        timer: 1500
      });
    })  
    }
    catch (error) {
      Swal.fire({
        title: error?.message,
        icon: "error",
        draggable: true
      });
    } 
  }

  const googleLoginHandler = async()=>{
    try{
      await googleLogin()
    .then(async()=>{
      navigate('/')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Login Success!",
        showConfirmButton: false,
        timer: 1500
      });
    })  
    }
    catch (error) {
      Swal.fire({
        title: error?.message,
        icon: "error",
        draggable: true
      });
    } 
    
  }

    return (
        <div>
      <div className="flex flex-col lg:max-w-[1000px] mx-auto py-10 md:py-16 lg:flex-row gap-10 mb-20 md:mb-24 ">
        {/* information */}
        <div className="lg:w-6/12  bg-[#1f2125] rounded-md p-6 md:p-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">
          <img
            src={loginBg}
            alt=""
            className="w-full rounded-md object-cover h-full "
          />
        </div>
        {/* form */}
        <div className="lg:w-6/12 bg-[#1f2125] rounded-md p-6 md:p-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">
          <h1 className="text-center uppercase text-xl md:text-3xl font-semibold mb-6 text-gray-400">
            Register
          </h1>
          <form onSubmit={registerHandler} className="flex flex-col gap-4 max-w-[600px] mx-auto">
            {/* name */}
            <div className="form-control w-full">
              <label className="mb-2">
                <span className="text-gray-400 hover:border-[#ff014f] uppercase">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                className=" border-b-2 px-4 hover:border-[#ff014f] rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 focus:outline-[#ff014f] focus:border-none outline-none"
                required
              />
            </div>

            {/* email */}
            <div className="form-control w-full">
              <label className="mb-2">
                <span className="text-gray-400 hover:border-[#ff014f] uppercase">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                className=" border-b-2 px-4 hover:border-[#ff014f] rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 focus:outline-[#ff014f] focus:border-none outline-none"
                required
              />
            </div>
            {/* password */}
            <div className="form-control w-full">
              <label className="mb-2">
                <span className="text-gray-400 hover:border-[#ff014f] uppercase">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                className=" border-b-2 px-4 hover:border-[#ff014f] rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 focus:outline-[#ff014f] focus:border-none outline-none"
                required
              />
            </div>
            <div className="py-4 w-full text-center">
              <input
                type="submit"
                value="Register"
                className="border-b-2 cursor-pointer uppercase font-semibold focus:outline-[#ff014f] text-gray-400 px-4 w-full rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 hover:border-[#ff014f] focus:border-none outline-none"
              />
            </div>
          </form>
          <p className="text-center text-gray-400 py-4">Or, Login With</p>
          <div className="mt-2">
            <button onClick={googleLoginHandler} className="border-b-2 flex items-center gap-4 justify-center cursor-pointer focus:outline-[#ff014f] font-semibold text-gray-400 px-4 w-full rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 hover:border-[#ff014f] focus:border-none outline-none">
              <span className="text-2xl">
                <FcGoogle />
              </span>
              <span className="uppercase">Login With Google</span>
            </button>
          </div>
          <div className="py-5">
            <p className="text-center text-gray-400"> Have Account? <Link to='/login'><span className="text-blue-500">Login Now</span></Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;