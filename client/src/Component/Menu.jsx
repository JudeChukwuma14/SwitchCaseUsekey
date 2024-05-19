import React, { useState } from 'react'
import All from './All'
import Burger from './Burger'
import Pizzas from './Pizzas'
import Desert from './Desert'
import Drinks from './Drinks'
import leaf from "../assets/mEN3Xp.jpg"
export default function Menu() {
    const [active, setActive] = useState(0)
    const meanBar = ["All", "Burger", "Pizzas", "Drinks", "Desert"]
    const render = ()=>{
        switch(active){
            case 0: return <All/>
            case 1: return <Burger/>
            case 2: return <Pizzas/>
            case 3: return <Desert />
            case 4: return <Drinks/>
        }
        return null
    }
  return (
    <div name="menu" className=" bg-pattern bg-cover text-white py-24">
        
            <div className="flex items-center  justify-center gap-x-2 tablet:mr-10" >
                <img src={leaf} />
                <h1 className="text-5xl font-extrabold tablet:text-3xl">OUR MENU</h1>
            </div>
            <div className="px-40 tablet:px-2">
                <div className="flex tablet:flex-1 tablet:flex-wrap tablet:gap-5 justify-center gap-5 text-black mt-10">
                    {meanBar.map((item, index)=>(
                        <div className="" key={index}>
                            <button className={`bg-[#ffcc33] py-3 tablet:px-2 px-5 font-extrabold text-lg rounded-md transition-colors duration-700 ease-in-out hover:bg-slate-600 hover:text-white ${active === index ? " bg-slate-600 transition-colors duration-300 ease-in-out text-white" : ""} `} onClick={()=>setActive(index)}>{item}</button>
                        </div>
                    ))}
                </div>
                <div className='w-full mt-12 bg-red-700'>{render()}</div>

            </div>
        
    </div>
  )
}


// import React from "react"
// import { Element } from "react-scroll"
// import leaf from "../assets/bg-title.png"
// import All from "./menu/All"
// import Burgers from "./menu/Burgers"
// import Deserts from "./menu/Deserts"
// import Drinks from "./menu/Drinks"
// import Pastas from "./menu/Pastas"
// import Pizzas from "./menu/Pizzas"
// import Salad from "./menu/Salad"
// import Steaks from "./menu/Steaks"
// const Menu = () => {
//     const [active, setActive] = React.useState(0)
//     const menuBar = [ "ALL", "BURGERS", "PIZZAS", "STEAKS", "PASTAS", "SALADS", "DESERTS", "DRINKS"]
//     const render = ()=>{
//         switch (active) {
//             case 0:
//                 return <All/>
//             case 1:
//                 return <Burgers/>
//             case 2:
//                 return <Pizzas/>
//             case 3:
//                 return <Steaks/>
//             case 4:
//                 return <Pastas/>
//             case 5:
//                 return <Salad/>
//             case 6:
//                 return <Deserts/>
//             case 7:
//                 return <Drinks/>
//         }
//         return null
//     }
//   return (
    
//   )
// }
