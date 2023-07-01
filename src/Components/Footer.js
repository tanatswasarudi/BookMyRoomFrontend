import React from "react";
import { BsChevronBarRight, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import {IoMdCall} from 'react-icons/io'
import { Link } from "react-router-dom";
import {BiChevronRight} from 'react-icons/bi'



const Footer = () => {
  const connectWithWhatsApp = () => {
    // Replace the following with your WhatsApp number
    const phoneNumber = '+917681998121';

    // Create the WhatsApp URL
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    // Open the WhatsApp URL
    window.open(url);
  }

  const phoneNumber = '+91 7681998121'; // Replace with the desired recipient's phone number

  const handleCallRequest = () => {
    const message = 'Please call me back!'; // Customize the call request message
    const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(callUrl);
  };
  return (
    <footer className="w-full bg-gray-900 text-gray-200 items-center z-50">
      <div className="md:p-10 p-1"> 
        <div className="max-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5 pb-4">
            <h4 className="pb-4 text-red-500">Company</h4>
              <p className="text-gray-500">
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-yellow-500"><MdEmail/><strong>Email:</strong> <span className="text-sm md:text-base">tanatswasarudi09@gmail.com</span></span><br/>
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-blue-500"><BsFacebook className="text-blue-500" /><strong>Facebook: </strong> <span className="text-sm md:text-base">Tanatswa Sarudi</span></span><br/>
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-green-500" onClick={connectWithWhatsApp}><FaWhatsappSquare className="text-2xl text-green-600"/><strong>WhatsApp:</strong> <span className="text-sm md:text-base">+918264420815</span></span><br/>
              </p>
              
            </div>
            <div className="mb-5 items-center cursor-pointer">
            <h4 className="text-red-500 pb-4 ">Useful Links</h4>
            <ul className="text-gray-500">
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500 "><Link to={""} > </Link> <BsChevronBarRight/>HOME</span></li>
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500"><Link to={"booking"}></Link><BsChevronBarRight/>BOOKING</span> </li>
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500"><Link to={"login"}> </Link><BsChevronBarRight/>LOGIN</span></li>
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500"><Link to={"register"}> </Link><BsChevronBarRight/>REGISTER</span></li>
            </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-red-500 pb-4">Our Services</h4>
              <ul className="text-gray-500">
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Admissions</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Accomodation</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Internships</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Web Development</li>
               
              </ul>
            </div>
            <div className="mb-5">
              <ul>
              <li className="pb-4 text-red-500">Book Today</li>
              <li className="flex flex-row items-center font-serif hover:text-yellow-500 text-gray-500" onClick={handleCallRequest}><IoMdCall className="text-blue-500"/> <strong>Phone:</strong>+91 768-19981-21</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-10 ">
          <h4 className="text-yellow-500 hover:text-red-500 ">Developed by: WEBTECH</h4>
          <p className="flex flex-row items-center font-serif hover:text-red-500 text-gray-500"><MdEmail/><strong>Email:</strong><span className="text-sm md:text-base">tanatswasarudi09@gmail.com</span></p>
          <p className="flex flex-row items-center font-serif hover:text-red-500 text-gray-500" onClick={connectWithWhatsApp}><IoMdCall className="text-blue-500"/> <strong>Call:</strong>+91 826-44208-15 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;