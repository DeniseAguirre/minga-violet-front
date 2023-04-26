import NavbarMobile from "../components/NavbarMobile";
import FooterMobile from "../components/FooterMobile";

export default function MainMobile({children}) {
  return (
    <div className="w-full h-full sm:hidden">
        <div className="xsm:bg-[url(/src/assets/images/home.png)] xsm:h-screen xsm:w-screen xsm:bg-cover xsm:bg-center">
          <NavbarMobile />
          {children}
        </div>
        <FooterMobile />
      </div>
  )
}