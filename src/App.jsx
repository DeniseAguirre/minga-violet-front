import Main from "./layout/Main";
import Welcome from "./components/Welcome";
import NavbarMobile from "./components/NavbarMobile";

import WelcomeMobile from "./components/WelcomeMobile";
import FooterMobile from "./components/FooterMobile";

import "./App.css";
import apiUrl from "../api.js";



function App() {
  console.log(apiUrl);
  console.log(process.env.NODE_ENV);

  return (
    <>
      {/* HOME DESKTOP */}
      <Main>
        <Welcome />
      </Main>

      {/* HOME MOBILE */}
      <div className="w-full h-full sm:hidden">
        <div className="xsm:bg-[url(/src/assets/images/home.png)] xsm:h-screen xsm:w-screen xsm:bg-cover xsm:bg-center">
          <NavbarMobile />
          <WelcomeMobile />
        </div>
        <FooterMobile />
      </div>
    </>
  );
}

export default App;
