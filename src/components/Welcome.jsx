import ButtonWelcome from "./ButtonWelcome"

export default function Welcome() {
  return (
    <div className="bg-[url(/src/assets/images/banner.png)] bg-no-repeat bg-cover bg-center w-fill h-[70vh] rounded-md mt-[2%] flex flex-col justify-center items-start px-[10%] gap-[15px]">
            <h2 className="not-italic font-bold text-5xl leading-[95.19%] text-white text-shadow: 1px 8px 50px rgba(255, 255, 255, 0.25)">
              Live the emotion of the manga
            </h2>
            <p className="font-normal text-xl leading-[95.19%] text-white">
              Find the perfect manga for you
            </p>
            <span className="not-italic font-semibold text-sm leading-[95.19%] text-white">
              #MingaForever 🔥
            </span>
            <ButtonWelcome />
          </div>
  )
}

