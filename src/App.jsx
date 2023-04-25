import Logo from "./assets/images/Logo.png"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Welcome from "./components/Welcome"


import "./App.css";
import apiUrl from "../api.js"

function App() {
  console.log(apiUrl)
  console.log(process.env.NODE_ENV)
  return (
    <>
      {/* HOME DESKTOP */}
      <div className="w-full xsm:hidden">
        <div className="px-[4rem] py-[1rem]">
          {/* NAVBAR DESKTOP */}
          <Navbar />
          {/* CAROUSEL DESKTOP */}
          <Carousel />
          {/* MAIN DESKTOP */}
          <Welcome />
        </div>
        {/* FOOTER DESKTOP */}
        <Footer />
      </div>

      {/* HOME MOBILE */}
      <div className="w-full h-full sm:hidden">
        <div className="xsm:bg-[url(/src/assets/images/home.png)] xsm:h-screen xsm:w-screen xsm:bg-cover xsm:bg-center">
          <nav className="flex w-fill justify-between p-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#F472B6"
                className="w-[57px] h-[55px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </a>
            <a href="#">
              <img src={Logo} className="w-[55px] h-[55px]" alt="Logo Minga" />
            </a>
          </nav>
          <div className="flex mt-40 flex-col gap-[25px]">
            <h1 className="font-poppins font-bold text-[40px] leading-[95.19%] text-center text-white px-3">
              Live the emotion of the manga
            </h1>
            <p className="font-normal text-xl text-center text-white font-poppins p-3">
              Find the perfect manga for you
            </p>
            <div className="self-center">
              <button className="bg-gradient-to-b at-153 from-pink1 from-(-13.9%) to-pink2 font-medium text-xl text-white font-sans rounded-[50000px] h-[59px] w-[363px] px-[55px]">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
