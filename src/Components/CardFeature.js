import React from 'react'
import { Link } from 'react-router-dom'

const CardFeature = ({title,address,photos,price, description,id,loadingArray}) => {
  return (
    <div className='cursor-pointer w-full min-w-[200px] max-w-[300px] md:min-w-[500px] md:max-w-[500px] gap-3 shadow rounded-2xl py-5 md:px-4 flex flex-col overflow-scroll scrollbar-none'>
         {title ? (
        <>
        <Link to={ `/booking/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})} className='flex flex-col cursor-pointer bg-gray-100 p-2 rounded-2xl'>
         <div className='md:grid md:grid-cols-[2fr_1fr] gap-2 flex overflow-scroll md:scrollbar-none '>
         <div className=' h-44 w-60 justify-center items-center grow shrink-0'> 
          {photos && photos.length > 0 ? (
              <img src={photos[0]} className="h-full rounded-2xl  " alt='' />
            ) : (
              <div className="flex justify-center items-center h-full">
                <p>No Image Available</p>
              </div>
            )}
          </div>
          <div className=' h-44 w-44 justify-center items-center grow shrink-0'> 
          {photos && photos.length > 0 ? (
              <img src={photos[1]} className="h-full rounded-2xl  " alt='' />
            ) : (
              <div className="flex justify-center items-center h-full">
                <p>No Image Available</p>
              </div>
            )}
          </div>
          <div className='h-44 w-60 justify-center items-center grow shrink-0'> 
          {photos && photos.length > 0 ? (
              <img src={photos[2]} className="h-full rounded-2xl " alt='' />
            ) : (
              <div className="flex justify-center items-center h-full">
                <p>No Image Available</p>
              </div>
            )}
          </div>
         </div>
          
          <div className='flex flex-col'>
          <p className='font-bold mb-2'>{address}</p>
          <h2 className='text-sm font-serif font-bold text-blue-400'>{title}</h2>
          <p className='text-sm flex flex-col mb-2'>{description}</p>
          <p className=" font-bold"><span className='text-red-500'>$</span>{price}</p>
          </div>
        </Link>
       </> 
    ) :(
        <div className="flex justify-center font-serif items-center ">
        <p>{loadingArray}</p>
        </div>
    )}
    </div>
   
  
  )
}

export default CardFeature
