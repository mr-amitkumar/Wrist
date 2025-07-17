import App from "../../assets/App.webp";
import Play from "../../assets/Playstore.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import { FaPaypal } from "react-icons/fa6";
import { SiIcicibank } from "react-icons/si";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { SiHdfcbank } from "react-icons/si";
const Footer = () => {
  return (
    <div className=" h-[100vh] sm:h-[60vh] bg-gray-800 text-white">
      <div className="sm:flex grid grid-cols-2  gap-6 sm:gap-0 items-center align-middle justify-around flex-wrap ">
        <div className="flex flex-col gap-4 sm:ml-0 ml-6 mt-6">
          <h1 className="text-xl">Collections</h1>
          <div>
            <ul className="flex flex-col gap-3 cursor-pointer text-sm">
              <li>Latest Products</li>
              <li>Great Deal's</li>
              <li>Grandmaster</li>
              <li>Trending Store</li>
              <li>Raga Power Pearls</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="text-xl">Services</h1>
          <div>
            <ul className="flex flex-col gap-3 cursor-pointer text-sm">
              <li>Payment Option</li>
              <li>Favorite Store</li>
              <li>Orders</li>
              <li>Track Order</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:ml-0 ml-6">
          <h1 className="text-xl">Customer Support</h1>
          <div>
            <ul className="flex flex-col gap-3 cursor-pointer text-sm">
              <li>+1216548488</li>
              <li>customer@gmail.com</li>
              <li>Help & Contact</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 mr-6 sm:mr-0">
          <h1 className="text-2xl">Download the Wrist World App </h1>
          <div className="flex sm:flex-row flex-col gap-3">
            <img src={App} alt="" className="sm:h-[40px] cursor-pointer" />
            <img src={Play} alt="" className="sm:h-[40px] cursor-pointer" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl">Follow Us</h1>
            <div className="mt-4">
              <ul className="flex gap-3 text-gray-400 text-xl cursor-pointer">
                <li className="hover:text-white">
                  <FaFacebookF />
                </li>
                <li className="hover:text-white">
                  <FaLinkedinIn />
                </li>
                <li className="hover:text-white">
                  <FaXTwitter />
                </li>
                <li className="hover:text-white">
                  <FaYoutube />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-bold">
              Want Help ?{" "}
              <a href="#" className=" underline">
                ClickHere
              </a>{" "}
              to chat with us
            </h1>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-700 mt-9 border-l-2 ">
        <div className="sm:flex sm:flex-row flex-col justify-around m-4">
          <div className="mt-9 ml-7">
            <ul className="flex text-4xl gap-3 text-gray-400">
              <li className="cursor-pointer">
                <RiVisaLine />
              </li>
              <li className="cursor-pointer">
                <SiMastercard />
              </li>
              <li className="cursor-pointer">
                <FaPaypal />
              </li>
              <li className="cursor-pointer">
                <SiIcicibank />
              </li>
              <li className="cursor-pointer">
                <BsFillCreditCard2FrontFill />
              </li>
              <li className="cursor-pointer">
                <SiHdfcbank />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 mt-8">
            <h1 className="text-center sm:text-2xl text-md sm:p-0 p-4">
              {" "}
              &copy;2025 Wrist World Private Limited.All rights reserved.
            </h1>
            <div className="flex ">
              <ul className="flex  gap-2">
                <li className="cursor-pointer hover:underline">
                  <p className="sm:border-r-2 px-2 items-center">
                    Terms & Condition
                  </p>
                </li>
                <li className="cursor-pointer hover:underline">
                  <p className="sm:border-r-2 px-2 items-center">Privacy Policy</p>
                </li>
                <li className="cursor-pointer hover:underline">
                  <p className="sm:border-r-2 px-2 items-center">
                    Wearable Privacy Policy
                  </p>
                </li>
                <li className="cursor-pointer hover:underline">
                  <p className="px-2">Warranty Policy</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
