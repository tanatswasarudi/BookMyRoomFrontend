import React,{useState} from 'react'
import {BsFillRocketFill} from 'react-icons/bs'
import {BiSolidUserCircle} from 'react-icons/bi'
import {GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import {BiUserMinus}from 'react-icons/bi'
import {MdProductionQuantityLimits} from 'react-icons/md'
import { FaWhatsappSquare } from "react-icons/fa";
import {IoMdCall} from 'react-icons/io'
import {BiSolidUserAccount} from 'react-icons/bi'

const Header = () => {
  const userData = useSelector((state) => state.user);
  const [showMenu, setShowMenu] = useState(false);

  const connectWithWhatsApp = () => {
    const phoneNumber = '+917681998121';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url);
  }

  const phoneNumber = '+91 7681998121'; 
  const handleCallRequest = () => {
    const message = 'Please call me back!'; 
    const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(callUrl);
  };

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutRedux());  
  };
  return (
      <header className=" p-4 flex justify-between items-center w-full fixed z-50 bg-slate-100 ">
           <div>
           <Link to={"/"} className="flex items-center gap-1 cursor-pointer rounded-full shadow py-2 px-4 ">
            <BsFillRocketFill className="text-2xl text-red-500"/>
            <span className='font-bold text-2xl'>BMR</span>
                </Link>
           </div>               
        <div className="flex items-center cursor-pointer gap-2 rounded-full border border-gray-300 py-2 px-4 shadow-md shadow-gray-300 ">
               <GiHamburgerMenu className='text-2xl' onClick={handleShowMenu}/> 
               <BiSolidUserCircle className='text-2xl'/>  
         
           {
            showMenu && (
              <div className="absolute  bg-purple-700  right-2 py-1 font-serif w-36  flex items-center flex-col m-auto cursor-pointer shadow rounded min-w-[100px]">   
              <nav className='flex items-center flex-col text-base w-32 px-2 py-1 md:text-lg bg-black text-cyan-500 '>
                 {userData.name ? (
                <p className="mb-6 flex items-center" onClick={handleLogout}><span className="">{userData.name}</span><BiUserMinus className='text-2xl'/> </p>
                && <Link to={"account"} className='flex mb-6 items-center'><BiSolidUserAccount className='text-2xl'/>Account</Link>
                  ) : (
                    <Link to={"login"}className="mb-6 flex items-center">  <BiSolidUserCircle className='text-2xl'/>Login </Link>
                  )}
                  {
                    userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                      <Link to={"newproduct"} className="mb-6 flex items-center">
                      <MdProductionQuantityLimits/>
                          Add Apartment
                    </Link>
                    )
                  }
                   <FaWhatsappSquare onClick={connectWithWhatsApp} className="text-3xl mb-6 text-green-600"/>
                  <IoMdCall onClick={handleCallRequest}  className="text-blue-500 text-3xl"/>
              </nav>
              </div> 
            )
           }
          
       </div>
        </header>
  )
}

export default Header
