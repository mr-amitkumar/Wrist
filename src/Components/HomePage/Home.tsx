import Image1 from "../../assets/Clocks_Upto40_D.webp";
import Image2 from "../../assets/mainbanner_julysale_2025_d.webp";
import Image3 from "../../assets/Raga_julysale_2025_d.webp";
import Image4 from "../../assets/Smart_julysale_2025_d.webp";
import Image5 from "../../assets/workware_julysale_2025_d.webp";
import Image6 from "../../assets/banner.png";
import Slider from "react-slick";
import HomeBanner from "../../assets/Titan_40yoj_d.webp";
import { FaStar } from "react-icons/fa";
import Watch1 from "../../assets/W1.png";
import Watch2 from "../../assets/W2.jpg";
import Watch3 from "../../assets/W3.png";
import Watch5 from "../../assets/W5.jpg";
import Watch4 from "../../assets/w4.png";
import { VscActivateBreakpoints, VscWorkspaceTrusted } from "react-icons/vsc";
import { GiBattery100 } from "react-icons/gi";
import { BsFillGiftFill } from "react-icons/bs";
import LogoBanner from "../../assets/Right_side-03.jpg";
import Sale from "../../assets/sale_.webp";
import Seller from "../../assets/Bestseller_thumb.webp";
import Men from "../../assets/men_.webp";
import Women from "../../assets/women.webp";
import Kids from "../../assets/kids.webp";
import MageByTitans from "../../assets/Mag_category.webp";
import Couple from "../../assets/couple.webp";
import NewArrival from "../../assets/New_Arrivals_thumb.jpg";
import Raga from "../../assets/ragaB.webp";
import Luxe from "../../assets/luxe.webp";
import Clocks from "../../assets/clock.webp";
import Smart from "../../assets/Smart_thumb.webp";

const Banner = [
  { id: 1, image: Image1, link: "/" },
  { id: 2, image: Image2, link: "/" },
  { id: 3, image: Image3, link: "/" },
  { id: 4, image: Image4, link: "/" },
  { id: 5, image: Image5, link: "/" },
  { id: 6, image: Image6, link: "/" },
];

const Product = [
  { id: 1, image: Watch1, title: "Rolex...", pricing: "$289", rating: "4.6" },
  { id: 2, image: Watch2, title: "Rolex...", pricing: "$289", rating: "4.6" },
  { id: 3, image: Watch3, title: "Rolex...", pricing: "$289", rating: "4.6" },
  { id: 4, image: Watch4, title: "Rolex...", pricing: "$289", rating: "4.6" },
  { id: 5, image: Watch5, title: "Rolex...", pricing: "$289", rating: "4.6" },
];

const ScrollData = [
  { id: 1, images: Sale, description: "Sale" },
  { id: 2, images: Seller, description: "Best Seller" },
  { id: 3, images: Men, description: "Men" },
  { id: 4, images: Women, description: "Women" },
  { id: 5, images: Kids, description: "Kids" },
  { id: 6, images: MageByTitans, description: "Mage By Titans" },
  { id: 7, images: Couple, description: "Couple" },
  { id: 8, images: NewArrival, description: "New Arrival" },
  { id: 9, images: Raga, description: "Raga" },
  { id: 10, images: Luxe, description: "Luxe" },
  { id: 11, images: Clocks, description: "Clocks" },
  { id: 12, images: Smart, description: "Smart" },
];

const Home = () => {
  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="min-h-screen">
      <Slider {...setting}>
        {Banner.map((data) => (
          <div key={data.id}>
            <img src={data.image} alt="" className="w-full" />
          </div>
        ))}
      </Slider>

      <div className="max-w-6xl sm:p-0 p-4 flex justify-center items-center mx-auto sm:mt-[90px] mt-[60px] cursor-pointer sm:max-w-9xl">
        <img src={HomeBanner} alt="" className="w-full rounded shadow-md" />
      </div>

      <div className="text-center mt-[50px] mb-10">
        <h1 className="text-2xl font-bold">Trending Items</h1>
        <p className="text-gray-600 sm:p-0 p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[200px] sm:w-full lg:grid-cols-5 gap-6 sm:max-w-6xl mx-auto pb-12">
          {Product.map((data) => (
            <div
              key={data.id}
              className="bg-white shadow-md p-4 rounded-md text-center hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src={data.image}
                alt=""
                className="sm:h-[220px] sm:w-[150px] object-cover mx-auto mb-4"
              />
              <h1 className="text-sm font-medium">{data.title}</h1>
              <p className="text-gray-700 font-semibold">{data.pricing}</p>
              <div className="flex items-center gap-2 justify-center text-yellow-500">
                <FaStar />
                <span className="text-black">{data.rating}</span>
              </div>
              <button className="mt-3 px-4 py-1 bg-black text-white rounded-md hover:bg-gray-800 transition-all">
                Buy Now
              </button>
            </div>
          ))}
          <div className="block mx-auto max-w-4xl ml-10">
            <button className=" border-none outline-none bg-red-500 px-2 py-1 text-white font-semibold cursor-pointer hover:bg-red-400 hover:text-black rounded-md ">
              Explore More
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around flex-wrap">
        <div className="p-4 shadow-lg rounded-sm sm:w-[300px]">
          <img
            src={LogoBanner}
            alt=""
            className="h-[200px] sm:h-[280px] rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-3 sm:text-xl text-[15px] p-4">
          <h1 className="font-semibold sm:text-2xl">
            Hurry Up to Grab the Deal's
          </h1>
          <div className="flex items-center gap-3">
            <VscWorkspaceTrusted className="text-green-800 text-xl sm:text-2xl" />
            <p>Buy With Our Trust</p>
          </div>
          <div className="flex items-center gap-3">
            <VscActivateBreakpoints className="text-orange-400 text-xl sm:text-2xl" />
            <p>Earn Points On Every Purchase</p>
          </div>
          <div className="flex items-center gap-3">
            <GiBattery100 className="text-red-600 text-xl sm:text-2xl" />
            <p>Free Battery Replacement</p>
          </div>
          <div className="flex items-center gap-3">
            <BsFillGiftFill className="text-yellow-700 text-xl sm:text-2xl" />
            <p>Get Gifts On Deals</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-9">
        <div className="text-center mb-4">
          <h1 className="sm:text-xl font-semibold">
            The Best Way To Buy Product You Love
          </h1>
          <p className="text-gray-600 text-[14px] sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            modi?
          </p>
        </div>
        <div className="w-full max-w-6xl px-4">
          <div className="flex gap-6 overflow-x-auto p-4 scrollbar-hide">
            {ScrollData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col items-center min-w-[120px] text-center cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <img
                  src={data.images}
                  alt={data.description}
                  className="h-[120px] object-contain mb-2"
                />
                <p className="text-sm font-medium">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
