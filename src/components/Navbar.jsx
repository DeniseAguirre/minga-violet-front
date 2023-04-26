import Logo from "../assets/images/Logo.png";
import { useState } from "react"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex w-fill justify-between">
      <div className="relative">
        <button onClick={handleMenuClick}>
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
        </button>
        {showMenu && (
          <div className="absolute top-full left-0 w-[400px] bg-gradient-to-b at-153 from-pink1 from-(-13.9%) to-pink2 to-58.69% rounded-md py-2 z-20">
            <button
              onClick={handleMenuClick}
              className="px-4 py-2 text-white absolute right-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="font-semibold font-poppins pt-[2rem]">
              <li>
                <a
                  className="flex justify-center px-4 py-2 text-white hover:bg-white hover:text-pink2 hover:rounded-md m-4"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center px-4 py-2 text-white hover:bg-white hover:text-pink2 hover:rounded-md m-4"
                  href="#"
                >
                  Mangas
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center px-4 py-2 text-white hover:bg-white hover:text-pink2 hover:rounded-md m-4"
                  href="#"
                >
                  My mangas
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center px-4 py-2 text-white hover:bg-white hover:text-pink2 hover:rounded-md m-4"
                  href="#"
                >
                  Favorites
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center px-4 py-2 text-white hover:bg-white hover:text-pink2 hover:rounded-md m-4"
                  href="#"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <a href="#">
        <img src={Logo} className="w-[88px] h-[88px]" alt="Logo Minga" />
      </a>
    </nav>
  );
}
