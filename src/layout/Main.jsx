import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"

export default function Main({children}) {
    console.log(children)
  return (
    <>
    <div className="w-full xsm:hidden">
        <div className="px-[4rem] py-[1rem]">
          {/* NAVBAR DESKTOP */}
          <Navbar />
          {/* CAROUSEL DESKTOP */}
          <Carousel />
          {/* MAIN DESKTOP */}
          {/* <Welcome /> */}
          {children}
        </div>
        {/* FOOTER DESKTOP */}
        <Footer />
      </div>
      </>
  )
}
