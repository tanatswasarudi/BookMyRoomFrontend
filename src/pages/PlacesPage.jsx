import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {ImPriceTag} from 'react-icons/im'
import {BiUpload} from 'react-icons/bi'
import { imagetobase64 } from '../utility/imagetobase64'
import {AiOutlineWifi} from 'react-icons/ai'
import {FaParking} from 'react-icons/fa'
import {MdBalcony,MdKitchen} from 'react-icons/md'
import {TbAirConditioning} from 'react-icons/tb'
import {FcDocument} from 'react-icons/fc'

const PlacesPage = () => {
    const [data,setData] = useState({
        title : "",
        address : "",
        photos : [],
        perks : [],
        category : "",
        description : "",
        price: "",
        MaxGuests:"",
      })
      const [selectedPerks, setSelectedPerks] = useState([]);
      const handleOnChange = (e) =>{
        const {name,value} = e.target
        setData((preve)=>{
          return{
            ...preve,
           [name] : value
          }
        })}
        const handleUpload = async (e) => {
          const files = e.target.files;
          const uploadedPhotos = [];
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const data = await imagetobase64(file);
            uploadedPhotos.push(data);
          }
          setData((prevData) => ({
            ...prevData,
            photos: uploadedPhotos,
          }));
        };
        const handlePerksChange = (e) => {
          const perkName = e.target.name;
          const isChecked = e.target.checked;
      
          setSelectedPerks((prevPerks) => {
            if (isChecked) {
              return [...prevPerks, perkName]; // Add perk to selectedPerks
            } else {
              return prevPerks.filter((perk) => perk !== perkName); // Remove perk from selectedPerks
            }
          });
        };
          const handleSubmit = async(e) =>{
            e.preventDefault()
          
              const {title,address,photos,price,MaxGuests,category, description} = data;
              if(title && address && category && photos && price &&MaxGuests && description){
                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/uploadProduct`,{
                  method : "POST", 
                  headers :{
                    "content-type" : "application/json"
                  },
                  body : JSON.stringify({ ...data, perks: selectedPerks })
                })
                const fetchRes = await fetchData.json()
                console.log(fetchRes)
                toast(fetchRes.message)
                alert("Product has been uploaded")
                setData (()=>{
                  return{
                     title : "",
                     address : "",
                     category : "",
                     photos : [],
                     perks : [],
                     description : "",
                     price: "",
                     MaxGuests:"",
                  }
                })
              }
              else{
                toast("Enter Missing Fields")
              }
          }
  return (
    <div>
         <div className='p-4'>
      <form className='flex flex-col w-full  p-3 ' onSubmit={handleSubmit}>
        <h1 className=' text-2xl mt-4'>Title</h1>
        <p className='text-sm text-gray-500 mb-2'>Title of the apartment</p>
        <input type={"text"} name='title' className='w-full border rounded'  onChange={handleOnChange} value={data.title}/>
       
        <label htmlFor='category' className=' text-2xl mt-4'>Category</label>
        <select className='w-full border rounded' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"} className='text-sm text-gray-500'>Select Category</option>
          <option value={"lawgate"}>Lawgate</option>
          <option value={"jalandhar"}>Jalandhar</option>
          <option value={"rama mandi"}>Rama Mandi</option>
          <option value={"phagwara"}>Phagwara</option>
          </select>
        <h1 className=' text-2xl mt-4'>Address</h1>
        <p className='text-sm text-gray-500 mb-2'>Address to this place</p>
        <input type='text' name='address'className='w-full border rounded' placeholder=''  onChange={handleOnChange} value={data.address}/>

        <label htmlFor='image' className=' text-2xl mt-4'>Photos
        <p className='text-gray-500 text-sm mb-2'>Add photos of the apartment</p>
        <div className='h-44 w-full flex items-center  bg-gray-500 justify-center rounded cursor-pointer overflow-scroll'>
           {data.photos && data.photos.length > 0 ? (
            data.photos.map((photo, index) => (
           <img key={index} src={photo} alt='' className='h-full object-cover' />
           ))
   ) : (
          <span className='text-4xl '><BiUpload/></span>
     )}
       <input
    type='file'
    id='image'
    accept='image/*'
    multiple
    className='hidden'
    onChange={handleUpload}
  />
</div>

        </label>

        <h1 className=' text-2xl mt-4'>Perks</h1>
        <p className='text-gray-500 text-sm mb-2'>select all the perks</p>
        <div className='grid grid-cols-2 md:grid-cols-4 ' >
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='wifi' checked={selectedPerks.includes('wifi')} onChange={handlePerksChange}/>
            <span className='flex items-center'><AiOutlineWifi/>Wifi</span>
            </label >
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='parking' checked={selectedPerks.includes('parking')} onChange={handlePerksChange} />
            <span className='flex items-center'><FaParking/>Parking</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='balcony' checked={selectedPerks.includes('balcony')} onChange={handlePerksChange}/>
            <span className='flex items-center'><MdBalcony/>Balcony</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='AC' checked={selectedPerks.includes("AC")} onChange={handlePerksChange}/>
            <span className='flex items-center'><TbAirConditioning/>AC</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='fully furnished'  checked={selectedPerks.includes("fully furnished")} onChange={handlePerksChange}/>
            <span className='flex items-center'><MdKitchen/>Fully Furnished</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='c forms' checked={selectedPerks.includes('c forms')} onChange={handlePerksChange}/>
            <span className='flex items-center'><FcDocument/>C Forms</span>
            </label>
        </div>
        <h1 className=' text-2xl mt-4' >Price</h1>
        <p className='text-gray-500 text-sm mb-2'>Add the price for this Apartment</p>
        <div className=' flex items-center w-full border rounded-full gap-2 '>
        <span className=''><ImPriceTag/></span>
        <input type={"price"} name='price'className='outline-none' onChange={handleOnChange} value={data.price}/>
        </div>

        <h1 className=' text-2xl mt-4'>MaxGuests</h1>
        <p className='text-sm text-gray-500 mb-2'>No' of Guests allowed to live in this Apartment</p>
        <input type='text' name='MaxGuests' className='w-full border rounded-full' onChange={handleOnChange} value={data.MaxGuests}/>

        <div className=''>
        <h1 className=' text-2xl mt-4'>Description</h1>
        <p className='text-gray-500 text-sm mb-2'>Description of this Apartment</p>
        <textarea rows={3} id='description' className='w-full h-[140px] border rounded' name='description' onChange={handleOnChange} value={data.description}/>
        </div>

        <button className='bg-primary p-2  rounded-full text-gray-500 font-medium shadow mt-4'>Upload</button>
      </form>
      </div>
    </div>
  )
}

export default PlacesPage
