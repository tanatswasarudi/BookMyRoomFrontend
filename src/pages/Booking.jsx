import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {MdAddPhotoAlternate} from 'react-icons/md'
import {GrClose} from 'react-icons/gr'
import { toast } from 'react-hot-toast';
import {BiChevronRight} from 'react-icons/bi'

const Booking = () => {
    const { filterby } = useParams();
    const DataProduct = useSelector((state) => state.product.productList);
    const productDisplay = DataProduct.filter((el) => el._id === filterby)[0]
    console.log(productDisplay)
    const [data,setData] = useState({
      checkin : "",
      phone : "",
      name : "",
      guests: ""
    })
    const handleOnChange = (e) =>{
      const {name,value} = e.target
      setData((preve)=>{
        return{
          ...preve,
         [name] : value
        }
      })}
    const handleSubmit = async(e) =>{
      e.preventDefault()
      const {checkin,phone,guests,name} = data;
      if (checkin && phone && guests && name) {
        const fetchDta = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/booking`,{
          method : "POST",
          headers :{
            "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        })
        const fetchRes = await fetchDta.json()
        console.log(fetchRes)
        toast(fetchRes.message)
        const message = `Hello, I would like to book the place. My details are:\n\nGuests: ${data.guests}\nPhone: ${data.phone}\nName: ${data.name}\nCheck-in: ${data.checkin}\nNameofApartment: ${productDisplay.title}`;
        const whatsappURL = `https://wa.me/+918264420815?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        setData (()=>{
          return{
            checkin : "",
            phone : "",
            name : "",
            guests: ""
          }
        })
      }
      else{
        toast("Booking was not succesful")
      }
    }

    const [showAllPhotos,setShowAllPhotos] = useState(false)

  return (
    <div className=' bg-gray-100 px-4 py-4  md:px-8 md:py-8 w-full'>
      <h1 className='text-3xl px-4'>{productDisplay.title}</h1>
      <a target='_blank' href={'https://maps.google.com/?q='+productDisplay.address} className='px-4 font-semibold underline block mb-2'>{productDisplay.address}</a>
    <div className="relative md:px-8 px-2 w-full">
       <div className="grid gap-1 md:grid-cols-3 rounded-3xl overflow-hidden w-full">
           <div className="h-90 w-90" >
              <img src={productDisplay.photos[0]} alt='' className="hover:scale-110 h-full rounded-2xl" />
           </div>
           <div className="h-90 w-90">
              <img src={productDisplay.photos[1]} alt='' className="hover:scale-110 h-full rounded-2xl" />
              </div>
              <div className="h-90 w-90 justify-center ">
              <img src={productDisplay.photos[2]} alt='' className="hover:scale-110 h-full rounded-2xl" />
             </div>
           
       </div>
       {productDisplay.photos.length > 3 && (
          <button
            onClick={() => setShowAllPhotos(true)}
            className='mt-4  flex gap-1 py-2 px-4 rounded-2xl bg-gray-500 shadow shadow-gray-500 absolute bottom-4 right-4'
          >
            <MdAddPhotoAlternate /> Show More Photos
          </button>
        )}
  </div>
  {showAllPhotos && (
        <div className=' top-0 left-0 bg-black my-4 w-full min-h-screen'>
          <div className='p-8 grid gap-4 w-full'>
            <div className='flex justify-end'>
              <button
                onClick={() => setShowAllPhotos(false)}
                className='py-2 px-4 rounded-2xl bg-gray-500 shadow shadow-gray-500 z-10'
              >
                <GrClose /> Close photos
              </button>
            </div>
            {productDisplay.photos.map((photo, index) => (
              <div key={index} className=''>
                <img src={photo} className='hover:scale-110 transition-all' alt='' />
              </div>
            ))}
          </div>
        </div>
      )}
  
 
  <div className="md:px-4 px-1 mt-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] w-full">
       <div className="w-full">
             <div className='my-4'>
             <h2 className='font-semibold text-lg md:text-2xl'>Description</h2>
              {productDisplay.description}
             </div>
             <label className='text-lg font-serif mb-2'>PERKS:</label>
             <div className='grid grid-cols-2 md:grid-cols-4 text-sm text-cyan-500 capitalize font-serif gap-2'>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[0]} </span> 
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[1]}</span> 
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[2]}</span>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[3]}</span>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[4]}</span>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[5]}</span>
               </div>
             <div className='flex flex-col font-serif text-lg md:text-2xl my-4 w-full'>
               Max number of guests:
               <span>{productDisplay.MaxGuests}</span>
             </div> 
             <div className='flex font-bold mb-4'>
              <span className='text-red-500'>$</span>{productDisplay.price}
            </div>
      </div>
      <div className="bg-white flex flex-col shadow p-4 rounded-2xl w-full">
              <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='font-serif text-lg md:text-2xl py-3 px-4  '>
                <label> Max number of guests:</label>
                <input type='number' name='guests' className='border border-primary py-3 px-3  w-full rounded-2xl' placeholder='2' value={data.guests} onChange={handleOnChange}/>
                </div> 
                <div className='font-serif text-lg md:text-2xl py-3 px-4  rounded-2xl'>
                <label className='font-serif mb-2'>phone number:</label>
                <input type='tel' name='phone' className='mb-7 border border-primary py-3 px-3  w-full rounded-2xl' placeholder='+91987654321' value={data.phone} onChange={handleOnChange} />
                <div>
                <label className='font-serif mb-2'>Your full name:</label>
                <input type='text'name='name' className='border mb-7 border-primary py-3 px-3  w-full rounded-2xl' placeholder='johndoe'value={data.name} onChange={handleOnChange}/>
               </div>
               <div>
                <label className='font-serif mb-2'>Month:</label>
                <input type='text'name='checkin' className='border mb-7 border-primary py-3 px-3  w-full rounded-2xl' placeholder='johndoe'value={data.checkin} onChange={handleOnChange}/>
               </div>
               </div> 
               
               <div className='flex mb-4 text-lg px-5 '>
                <label className='font-serif font-bold mb-2'>Price:</label>
              <span className='text-red-500'>₹</span> {productDisplay.price}
               </div>
              <button className='px-4 py-2 bg-primary rounded-2xl' >Book this Place</button>
              </form>
              
            
      </div>
  </div>

  


    </div>
 )   
}

export default Booking
