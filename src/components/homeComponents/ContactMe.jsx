import { LuFacebook } from "react-icons/lu";
import contactImg from "../../assets/logo/contact2.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 mb-20 md:mb-24 ">
      {/* information */}
      <div className="lg:w-5/12 bg-[#1f2125] rounded-md p-6 md:p-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">
        <div className="rounded-md overflow-hidden mb-8">
          <img
            src={contactImg}
            alt=""
            className="rounded-md w-full hover:scale-110 duration-500"
          />
        </div>
        <p className="text-xl mb-8 text-gray-400 font-medium">
          Have a project in mind or just want to say hello? I’d love to hear
          from you! Reach out, and let’s build something amazing together.
        </p>
        <p className="text-gray-400 mb-4">
          <span className="text-[18px] font-semibold">Phone:</span>
          <span className=""> +8801771814597</span>
        </p>
        <p className="text-gray-400 mb-12">
          <span className="font-semibold text-[18px]">Email:</span>
          <span className=""> hayderbd4290@gamil.com</span>
        </p>
        <div className="">
          <p className="text-gray-400 mb-8">FIND WITH ME</p>
          <div className="py-4 flex justify-start items-center gap-6">
            <button className="bg-[#1f2125] hover:text-[#ff014f] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
              <LuFacebook />
            </button>
            <button className="bg-[#1f2125] hover:text-[#ff014f] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
              <FaGithub />
            </button>
            <button className="bg-[#1f2125] hover:text-[#ff014f] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
              <FaLinkedinIn />
            </button>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="lg:w-7/12 bg-[#1f2125] rounded-md p-6 md:p-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">
        <form className="flex flex-col gap-12">
          {/* name & phone */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="form-control w-full">
              <label className="mb-2">
                <span className="text-gray-400 uppercase ">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className=" border-b-2 px-4 hover:border-[#ff014f] rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 focus:outline-[#ff014f] focus:border-none  outline-none"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="mb-2">
                <span className="text-gray-400 uppercase">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                className=" border-b-2 hover:border-[#ff014f] px-4 rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 focus:outline-[#ff014f] focus:border-none outline-none"
                required
              />
            </div>
          </div>
          {/* email */}
          <div className="form-control w-full">
            <label className="mb-2">
              <span className="text-gray-400 hover:border-[#ff014f] uppercase">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className=" border-b-2 px-4 hover:border-[#ff014f] rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 focus:outline-[#ff014f] focus:border-none outline-none"
              required
            />
          </div>
          {/* subject */}
          <div className="form-control w-full">
            <label className="mb-2">
              <span className="text-gray-400 uppercase">Subject</span>
            </label>
            <input
              type="text"
              name="subject"
              className=" border-b-2 px-4 hover:border-[#ff014f] rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 focus:outline-[#ff014f] focus:border-none outline-none"
              required
            />
          </div>
          {/* message */}
          <div className="form-control w-full">
            <label className="mb-2">
              <span className="text-gray-400 uppercase ">Your Message</span>
            </label>
            <textarea 
            name="message"
            required
             id="" rows={6} className="border-b-2 px-4 hover:border-[#ff014f] resize-none rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 focus:outline-[#ff014f] focus:border-none outline-none">

            </textarea>
          </div>
          <div className="py-4 w-full text-center">
            <input type="submit" value="SEND MESSAGE" className="border-b-2 cursor-pointer text-gray-400 px-4 w-full rounded-md border-black/70 bg-[#212428] py-4 focus:py-5 hover:border-[#ff014f] focus:border-none outline-none" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;