import Welcome1 from "../assets/images/headerimg1.png"
import Welcome2 from "../assets/images/headerimg2.png" 

export default function Carousel() {
  return (
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
                src={Welcome1}
                className="w-[277px] h-[307px] object-cover"
                alt="img1"
              />
            </div>
            <div className="w-[30%] flex justify-center">
              <img
                src={Welcome2}
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
  )
}
