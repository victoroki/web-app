import React from 'react'

function Bar() {
  return (
    <div>
           <nav className="bg-orange-400 flex justify-between items-center h-24 max-w-[1060px] mx-auto" >
                <ul className="hidden md:flex">
                    <li className="p-4"><a href="#">Home</a></li>
                    <li className="p-4"><a href="#">About us</a></li>
                    <li className="p-4"><a href="#">Contact us</a></li>
                </ul>
                <p className="p-3 m-2 text-white bg-blue-950">Have any question ?</p>
            </nav>
    </div>
  )
}

export default Bar