import Logo from "../assets/images/Logo.png"

export default function Navbar() {
  return (
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
  )
}


