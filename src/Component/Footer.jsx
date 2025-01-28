import { NavLink } from "react-router-dom";
import { FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaLinkedin
 } from "react-icons/fa";
 import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">Locations</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">Islamabad, Pakistan</li>
            <li className="text-gray-400">Santa Clara, United States</li>
            <li className="text-gray-400">Coober Pedy, Australia</li>
            <li className="text-gray-400">Abbeville, France</li>
            <li className="text-gray-400">WanClouds Online</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3 ">Trending Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><NavLink to='' className="hover:text-gray-200">Programs</NavLink></li>
            <li><NavLink to='' className="hover:text-gray-200">Schedules</NavLink></li>
            <li><NavLink to='' className="hover:text-gray-200">Apply Online</NavLink></li>
            <li><NavLink to='' className="hover:text-gray-200">Financial Aid</NavLink></li>
            <li><NavLink to='' className="hover:text-gray-200">Jobs at WanClouds</NavLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">WanClouds Office, Park Road</p>
          <p className="text-gray-400">Near COMSATS University</p>
          <p className="text-gray-400">Islamabad, Pakistan</p>
          <p className="text-gray-400">(051) 111-1111</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-3 mb-4">
            <NavLink className="text-2xl text-blue-400 hover:text-white"><FaTwitter/></NavLink>
            <NavLink className="text-2xl text-[#5851db] hover:text-white"><FaInstagram/></NavLink>
            <NavLink className="text-2xl text-blue-600 hover:text-white"><FaFacebook /></NavLink>
            <NavLink className="text-2xl text-red-500 hover:text-white"><FaYoutube /></NavLink>
            <NavLink className="text-2xl text-blue-700 hover:text-white"><FaLinkedin/></NavLink>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-4">
        <p className="text-xs text-gray-400 mt-4">
          Copyright &#169; {new Date().getFullYear()} Muhammad Usman Malik | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;