import Logo from "./assets/images/Logo.png";

import "./App.css";

function App() {
  return (
    <>
      {/* HOME DESKTOP */}
      <div className="w-full xsm:hidden">
        <div className="px-[4rem] py-[0.875rem]">
          <nav className="flex w-fill justify-between">
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
              <img src={Logo} className="w-[88px] h-[88px]" alt="Logo Minga" />
            </a>
          </nav>
          {/* CAROUSEL DESKTOP */}
          <div className="bg-gradient-to-b at-153 from-pink1 from-(-13.9%) to-pink2 to-58.69% flex h-[16.563rem] w-full rounded-md items-end mt-6 relative">
            <button
              className="w-[20px] h-[20px] absolute left-6 top-[50%] -translate-y-1/2 flex justify-center items-center rounded-full z-10 hover:bg-gray-200 
            bg-white/50 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#333333"
                class="w-[10px] h-[9px] "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>

            <button
              className="w-[20px] h-[20px] absolute right-6 top-[50%] -translate-y-1/2 flex justify-center items-center rounded-full z-10 hover:bg-gray-200 
            bg-white/50 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#333333"
                class="w-[10px] h-[9px] "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>

            <div className="w-[25%] flex justify-start h-fit">
              <img
                src="src/assets/images/headerimg1.png"
                className="w-[277px] h-[307px] object-cover"
                alt="img1"
              />
            </div>
            <div className="w-[30%] flex justify-center">
              <img
                src="src/assets/images/headerimg2.png"
                className="w-[180px] h-[284px] mb-4"
                alt="img2"
              />
            </div>
            <div className="text-carousel flex-col w-[40%] text-white h-44 px-[3%]">
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
            <button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-b at-153 from-pink1 from-(-13.9%) to-pink2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4">
              Explore
            </button>
          </div>
        </div>
        {/* FOOTER DESKTOP */}
        <footer ClassName="flex w-full">
          {/* <div className="bg-[url(/src/assets/images/footer.png)] bg-no-repeat bg-cover bg-center w-auto h-[336px] rounded-[0%_0%_50%_50%/_0%_0%_50%_50%] mt-[3%] p-0"></div> */}
          <img
            src="/src/assets/images/footer2.png"
            className="w-full h-[336px] mt-[3%] object-cover"
            alt="footer one-piece"
          />

          <div className="flex items-center my-[2%]">
            <div className="w-[33%] flex justify-center">
              <a href="#" className="font-poppins font-normal text-base">
                Home
              </a>
              <a href="#" className="font-poppins font-normal text-base ml-10">
                Mangas
              </a>
            </div>
            <div className="w-[33%] flex justify-center">
              <a href="#">
                <img
                  src={Logo}
                  className="logo w-[88px] h-[88px]"
                  alt="Minga logo"
                />
              </a>
            </div>
            <div className="w-[33%] flex flex-col items-center">
              <div className="flex justify-between py-5 w-60">
                <a href="#">
                  <img
                    src="src/assets/images/facebook-black.png"
                    alt="Facebook"
                    className="w-auto h-[24px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="src/assets/images/twitter-black.png"
                    alt="Twitter"
                    className="w-auto h-[24px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="src/assets/images/vimeo-black.png"
                    alt="Vimeo"
                    className="w-auto h-[24px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="src/assets/images/youtube-black.png"
                    alt="Youtube"
                    className="w-auto h-[24px]"
                  />
                </a>
              </div>
              <div>
                <button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-b at-153 from-pink1 from-(-13.9%) to-pink2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4">
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

          <hr className="mix-blend-normal opacity-20 border border-solid border-[#2B3D51] mb-[5%] mx-[9%]" />
        </footer>
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
