
import logo from "../assets/logo/hdrlogo2.jpg";
import FindMe from "./shared/FindMe";

const Footer = () => {
  return (
    <div className="">
      <div className="py-12 px-3 md:px-16 lg:px-20 border-y-2 border-[#191c1f]">
        <div className="py-16 grid grid-cols-2 lg:grid-cols-4 gap-10 ">
          {/* div1 */}
          <div className="">
            <div className="flex items-center gap-3 mb-8">
              <img src={logo} alt="" className="w-14 h-14 rounded-full" />
              <h1 className="text-xl md:text-3xl font-bold">
                H<span className="text-[#ff014f]">D</span>R
              </h1>
            </div>
            <FindMe></FindMe>
          </div>
          {/* div2 */}
          <div className="">
            <h3 className="text-[#ff014f] uppercase text-2xl font-semibold mb-6 ">
              Quick Link
            </h3>
            <ul className="text-xl flex flex-col gap-3 font-semibold">
              <li>About</li>
              <li>Portfolio</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* div3 */}
          <div className="">
            <h3 className="text-[#ff014f] uppercase text-2xl font-semibold mb-6 ">
              Resources
            </h3>
            <ul className="text-xl flex flex-col gap-3 font-semibold">
              <li>Authentication</li>
              <li>System Status</li>
              <li>Terms of Service</li>
              <li>Pricing</li>
              <li>Over Right</li>
            </ul>
          </div>
          {/* div4 */}
          <div className="">
            <h3 className="text-[#ff014f] uppercase text-2xl font-semibold mb-6 ">
              Developers
            </h3>
            <ul className="text-xl flex flex-col gap-3 font-semibold">
              <li>Documentation</li>
              <li>Authentication</li>
              <li>API Reference</li>
              <li>Support</li>
              <li>Open Source</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-8">
        <p className="text-xl text-gray-400 text-center">
          © 2024. All rights reserved by Hayder Ali
        </p>
      </div>
    </div>
  );
};

export default Footer;
