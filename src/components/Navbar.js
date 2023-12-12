import React, {useState} from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {

    const  [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    } 

    return (
        <div className="">
            <nav className="bg-orange-400 flex justify-between items-center h-24 max-w-[1260px] mx-auto" >
                <p className="p-4 text-3xl font-bold">LOGO</p>
                <ul className="hidden md:flex">
                    <li className="p-4"><a href="#">Home</a></li>
                    <li className="p-4"><a href="#">About us</a></li>
                    <li className="p-4"><a href="#">Contact us</a></li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <FiMenu /> : <FiX />}
                </div>
            </nav>

            <div className={!nav ? 'fixed left-0 top-0  w-[60%] h-full border-r bg-slate-500 border-r-gray-900 ease-in-out duration-500':'fixed left-[-100%]' }>
            <p className="p-4 text-3xl font-bold">LOGO</p>
                <ul className="p-4 uppercase">
                    <li className="p-4"><a href="#">About us</a></li>
                    <li className="p-4"><a href="#">Contact us</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar