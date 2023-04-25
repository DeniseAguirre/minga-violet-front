import ImgFooter from "../assets/images/footer2.png"
import Facebook from "../assets/images/facebook-black.png"
import Twitter from "../assets/images/twitter-black.png"
import Vimeo from "../assets/images/vimeo-black.png"
import Youtube from "../assets/images/youtube-black.png"
import Logo from "../assets/images/Logo.png"

export default function Footer() {
  return (
    <footer ClassName="flex w-full">
          {/* <div className="bg-[url(/src/assets/images/footer.png)] bg-no-repeat bg-cover bg-center w-auto h-[336px] rounded-[0%_0%_50%_50%/_0%_0%_50%_50%] mt-[3%] p-0"></div> */}
          <img
            src={ImgFooter}
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
                    src={Facebook}
                    alt="Facebook"
                    className="w-auto h-[24px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="w-auto h-[24px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={Vimeo}
                    alt="Vimeo"
                    className="w-auto h-[24px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={Youtube}
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
  )
}
