import React from "react";
import { Link } from "react-router-dom";

const Homecard = ({ title, photos,address, price, loadingArray,id }) => {
  return (
    <div className=" bg-slate-200 p-2 rounded-2xl shadow shadow-black min-w-[150px] flex flex-col overflow-scroll scrollbar-none">
      {title ? (
        <>
        <Link to={ `/booking/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})}>
          <div className="w-36 min-h-[150px] rounded-2xl">
            <img src={photos[0]} className="h-full w-full" />
          </div>
          <h2 className='text-lg font-serif font-bold text-blue-400'>{title}</h2>
          <p className='font-bold my-2'>{address}</p>
          <p className=" font-bold my-2"><span className='text-red-500'>$</span>{price}</p>
          <p className="text-black font-bold">Register to see cheap Apartments!!! </p>
          </Link>
        </>
      )
      : 
      <div className="flex font-sans font-bold justify-center items-center">
      <p>{loadingArray}</p>
      </div>
    }
    </div>
  );
};

export default Homecard;