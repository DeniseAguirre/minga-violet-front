import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api' 

export default function Carousel() {
  useEffect(
    ()=>{ axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))}, []
  )

  let [categories, setCategories] = useState([])
  
  let [counter,setCounter] = useState(0)
  
  let sumar = () => {
    setCounter(counter+1)
    if (counter === categories.length-1) {
      setCounter(0)
    }
  }
  let restar = () => {
    setCounter(counter-1)
    if (counter === 0){
      setCounter(categories.length-1)
    }
  }
  
  const gradientStyle = {
    backgroundImage: `linear-gradient(153deg, rgb(255, 255, 255) -13.9%, ${categories[counter]?.color} 58.69%)`,
  }

  return (
    <div className="flex h-[30vh] w-full rounded-md items-end mt-6 relative" style={gradientStyle}>
            <button
              className="w-[20px] h-[20px] absolute left-6 top-[50%] -translate-y-1/2 flex justify-center items-center rounded-full z-10 hover:bg-gray-200 
            bg-white/50 shadow-lg" onClick={restar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#333333"
                className="w-[10px] h-[9px] "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>

            <button
              className="w-[20px] h-[20px] absolute right-6 top-[50%] -translate-y-1/2 flex justify-center items-center rounded-full z-10 hover:bg-gray-200 
            bg-white/50 shadow-lg" onClick={sumar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#333333"
                className="w-[10px] h-[9px] "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>

            <div className="w-[25%] flex justify-center">
              <img
                src={categories[counter]?.character_photo}
                className="auto h-[35vh]"
                alt="img1"
              />
            </div>
            <div className="w-[25%] flex justify-center">
              <img
                src={categories[counter]?.cover_photo}
                className="w-auto h-[32vh] mb-4 rounded-md"
                alt="img2"
              />
            </div>
            <div className="text-carousel flex-col w-[35%] text-white h-full justify-center items-center pl-[5%] flex">
              <h2 className="not-italic font-normal text-xl leading-[95.19%] self-start grow-0 mb-3">
                {categories[counter]?.name}
              </h2>
              <p className="text-xs font-sans font-normal not-italic leading-[95.19%] self-start">
                {categories[counter]?.description}
              </p>
            </div>
          </div>
  )
}


