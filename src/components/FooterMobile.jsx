import Facebook from "../assets/images/facebook-black.png"
import Twitter from "../assets/images/twitter-black.png"
import Vimeo from "../assets/images/vimeo-black.png"
import Youtube from "../assets/images/youtube-black.png"
import FooterM from "../assets/images/footer2.png"


export default function FooterMobile() {
  return (
    <footer className="bg-white">
          <div>
            <img src={FooterM} />
          </div>
            <div className="w-[100%] flex flex-col items-center">
              <div className="flex justify-between py-5 w-52">
                <a href="#">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-auto h-[22px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="w-auto h-[22px]"
                  />
                </a>
                <a href="#">
                  <img src={Vimeo} alt="Vimeo" className="w-auto h-[22px]" />
                </a>
                <a href="#">
                  <img
                    src={Youtube}
                    alt="Youtube"
                    className="w-auto h-[22px]"
                  />
                </a>
              </div>
            </div>
        </footer>
  )
}
