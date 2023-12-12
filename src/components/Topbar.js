import React from 'react'
import { FiPhoneCall, FiMail } from "react-icons/fi";
import logo from "./img/flogo.png"

function Topbar() {
    return (
        <div>
            <div className='flex px-8 justify-between'>
                <img classname="" width={100} src={logo} alt='LOGO' />
                <div className='flex'>
                    <div className='flex justify-evenly items-center m-4'>
                        <span className='bg-orange-400 rounded-full p-2'><FiPhoneCall size={35} /></span>

                        <div>
                            <h1 className='font-bold'>Contact us</h1>
                            <p className='font-light'>0700001001</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className='bg-orange-400 rounded-full p-2'><FiMail size={35} /></span>
                        <div>
                            <h1 className='font-bold'>Mail us</h1>
                            <p className='font-light'>torchbearertechnologies@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Topbar