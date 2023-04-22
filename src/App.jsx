import { useState } from "react";
import Logo from "./assets/images/Logo.png";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* HOME DESKTOP */}
      <div className="w-full xsm:hidden">
        <div className="px-[4rem] py-[0.875rem]">
          <nav className="flex w-fill p-4">
            <div className="w-[50%] flex justify-start">
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
            </div>
            <div className="w-[50%] flex justify-end">
              <img src={Logo} className="w-[55px] h-[55px]" alt="Logo Minga" />
            </div>
          </nav>
          {/* CAROUSEL DESKTOP */}
          <div className="bg-gradient-to-r from-pink1 from-(-13.9%) to-pink2 to-58.69% flex h-[16.563rem] w-full rounded-md items-end mt-6">
            <div className="flex justify-center items-center w-[10%] h-full">
              <img
                src="src/assets/images/circleright.png"
                className="w-[26.5px] h-[26.5px] left-[calc(50%_-_26.5px/2_-_557px)] top-[calc(50%_-_26.5px/2)]
  transform: matrix(-1, 0, 0, 1, 0, 0)"
                alt="arrow"
              />
            </div>
            <div className="w-[25%] flex justify-start h-fit">
              <img
                src="src/assets/images/headerimg1.png"
                className="w-[277px] h-[307px] left-[91px] top-[113px];"
                alt="img1"
              />
            </div>
            <div className="w-[25%]">
              <img
                src="src/assets/images/headerimg2.png"
                className="w-[180px] h-[284px] left-[469px] top-[103px] mb-4"
                alt="img2"
              />
            </div>
            <div className="text-carousel flex-col w-[38%] text-white h-44 pl-[3%]">
              <h2 className="not-italic font-medium text-2xl leading-[95.19%] flex items-center; flex-none order-none grow-0 mb-3">
                Shonen
              </h2>
              <p className="text-sm font-sans font-normal not-italic leading-[95.19%] flex items-center ">
                Is the manga that is aimed at adolescent boys. They are series
                with large amounts of action, in which humorous situations often
                occur. The camaraderie between members of a collective or a
                combat team stands out.
              </p>
            </div>
            <div className="flex justify-center items-center w-[10%] h-full">
              <img
                src="src/assets/images/circleleft.png"
                className="w-[26.5px] h-[26.5px] left-[calc(50%_-_26.5px/2_-_557px)] top-[calc(50%_-_26.5px/2)];
  transform: matrix(-1, 0, 0, 1, 0, 0)"
                alt="arrow right"
              />
            </div>
          </div>
          {/* MAIN DESKTOP */}
          <div className="bg-[url(/src/assets/images/banner.png)] bg-no-repeat bg-cover bg-center w-fill h-[551px] rounded-md mt-[3%] flex flex-col justify-center items-start px-[10%] gap-[15px]">
            <h2 className="not-italic font-bold text-[64px] leading-[95.19%] text-white text-shadow: 1px 8px 50px rgba(255, 255, 255, 0.25)">
              Live the emotion of the manga
            </h2>
            <p className="font-normal text-2xl leading-[95.19%] text-white">
              Find the perfect manga for you
            </p>
            <span className="not-italic font-semibold text-base leading-[95.19%] text-white">
              #MingaForever 🔥
            </span>
            <button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-pink1 from-(-13.9%) to-pink2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4">
              Sign In!
            </button>
          </div>
        </div>
        {/* FOOTER DESKTOP */}
        <footer ClassName="flex w-fill">
          <div className="bg-[url(/src/assets/images/footer.png)] bg-no-repeat bg-cover bg-center w-auto h-[336px] rounded-[0%_0%_50%_50%/_0%_0%_80%_80%] mt-[3%] p-0"></div>

          <div className="flex justify-between items-center mb-[2%] mt-[5%] mx-[10%]">
            <div className="w-40 flex justify-between">
              <a href="#" className="font-poppins">
                Home
              </a>
              <a href="#" className="font-poppins">
                Mangas
              </a>
            </div>
            <div className="">
              <img
                src={Logo}
                className="logo w-[88px] h-[88px]"
                alt="Minga logo"
              />
            </div>
            <div className="w-60">
              <div className="flex justify-between py-5">
                <img
                  src="src/assets/images/facebook-black.png"
                  alt="Facebook"
                  className="w-auto h-[24px]"
                />
                <img
                  src="src/assets/images/twitter-black.png"
                  alt="Twitter"
                  className="w-auto h-[24px]"
                />
                <img
                  src="src/assets/images/vimeo-black.png"
                  alt="Vimeo"
                  className="w-auto h-[24px]"
                />
                <img
                  src="src/assets/images/youtube-black.png"
                  alt="Youtube"
                  className="w-auto h-[24px]"
                />
              </div>
              <div className="">
                <button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-pink1 from-(-13.9%) to-pink2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4">
                  Donate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <hr className="mix-blend-normal opacity-20 border border-solid border-[#2B3D51] mb-[5%] mx-[10%]" />
        </footer>
      </div>

      {/* HOME MOBILE */}
      <div className="w-full h-full sm:hidden">
        <div className="xsm:bg-[url(/src/assets/images/home.png)] xsm:h-screen xsm:w-screen xsm:bg-cover xsm:bg-center">
          <nav className="flex w-fill p-4">
            <div className="w-[50%] flex justify-start">
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
            </div>
            <div className="w-[50%] flex justify-end">
              <img src={Logo} className="w-[55px] h-[55px]" alt="Logo Minga" />
            </div>
          </nav>
          <div className="flex mt-40 flex-col">
            <h1 className="font-poppins font-bold text-[40px] leading-[95.19%] text-center text-white px-3">
              Live the emotion of the manga
            </h1>
            <p className="font-normal text-xl text-center text-white font-poppins p-3">
              Find the perfect manga for you
            </p>
            <div className="self-center">
              <button className="h-10 w-64 bg-gradient-to-r from-pink1 from-(-13.9%) to-pink2 to-58.69% font-medium text-xl text-white font-sans rounded-[50000px]">
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
