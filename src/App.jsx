import { useState } from 'react'
import Logo from './assets/Logo.png'
import Menu from './assets/Menu.png'
import Img1 from './assets/8b8e139c764c05a681947b2d6855bd33 1.png'
import Img2 from './assets/image 3.png'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='px-[5.688rem] py-[0.875rem] w-screen'>
      <nav className="flex justify-between align-center">
        <a href="https://react.dev" target="_blank">
          <img src={Menu} className="menu w-[3.563rem] h-[3.438rem]" alt="Menu" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={Logo} className="logo w-[5.5rem] h-[5.5rem]" alt="Minga logo" />
        </a>
      </nav>

      <div className="bg-gradient-to-r from-pink1 from-(-13.9%) to-pink2 to-58.69% flex h-[16.563rem] rounded-md items-end mt-6">
        <div className=''>
          <img src="./assets/circle arrow.png" alt="" />
        </div>
        <div className='w-80'>
          <img src={Img1} className='w-[17.313rem] h-[19.188rem]' alt="img1" />
        </div>
        <div className='w-80'>
          <img src={Img2} className="w-[11.25rem] h-[17.75rem] mb-5" alt="img2" />
        </div>
        
        
        <div className="text-carousel flex-col w-[22.25rem] text-white h-44">
            <h2 className="text-base font-medium">Shonen</h2>
            <p className="text-sm font-sans font-normal">
        Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.
            </p>
        </div>
        <div className=''>
          <img src="./assets/circle arrow (1).png" alt="" />
        </div>
        
      </div>
      
      </div>
    </>
  )
}

export default App
