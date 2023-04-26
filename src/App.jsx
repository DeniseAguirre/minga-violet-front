import Main from "./layout/Main";
import Welcome from "./components/Welcome";
import MainMobile from "./layout/MainMobile";
import WelcomeMobile from "./components/WelcomeMobile";

import "./App.css";
import apiUrl from "../api.js";

function App() {
  console.log(apiUrl);
  console.log(process.env.NODE_ENV);

  return (
    <>
      {/* DESKTOP */}
      <Main>
        <Welcome />
      </Main>

      {/* MOBILE */}

      <MainMobile>
        <WelcomeMobile />
      </MainMobile>

    </>
  );
}

export default App;