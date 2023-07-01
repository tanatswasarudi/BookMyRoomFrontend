import React from 'react'
import {  useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import {BsBuildingsFill} from 'react-icons/bs'
import {TbBrandBooking} from 'react-icons/tb'
import CardFeature from '../Components/CardFeature';
import {BiSolidUserCircle} from 'react-icons/bi'
import { useDispatch} from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import {BiUserMinus}from 'react-icons/bi'
import welcome from '../Assets/welcome.gif'

const AccountPage = () => {
const userData = useSelector((state) => state.user);
const DataProduct = useSelector((state)=>state.product.productList)
  console.log(DataProduct)
  const homeProductCartList = DataProduct
  const LoadingArray = new Array(4).fill(null)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutRedux());
  };
let {subpage} = useParams()
if (subpage === undefined) {
    subpage = "profile"
}
console.log(subpage)
 // Function to determine link classes based on the active subpage
 function linkClasses(type = null) {
    let classes = 'inline-flex items-center py-2 px-6   rounded-full';
    if (type === subpage || (subpage === undefined && type === 'profile')) {
      classes += ' bg-primary rounded-full';
    }
    return classes;
  }

  return (
    <div>
      <div className='w-full h-[300px]'>
            <img src={welcome} alt='' className='w-full h-full'/>
           </div>
    <nav className='w-full md:flex grid grid-cols-1 justify-center md:gap-2 mt-8 font-serif'>
       <Link className={linkClasses('profile')} to={'/account'}>
        <BiSolidUserCircle/>My Profile
      </Link>
      <Link className={linkClasses('bookings')} to={'/account/bookings'}>
        <TbBrandBooking/>My Bookings
      </Link>
      <Link className={linkClasses('accommodation')} to={'/account/accommodation'}>
      <BsBuildingsFill/>My Accomodation
      </Link>
    </nav>
    {subpage === 'accommodation'&& (
        <div className="mt-10 w-full">
            <div className=' items-center grid grid-cols-1 md:grid-cols-2  gap-6 gap-y-8 mt-10 shadow-lg w-full'>
            {
            homeProductCartList[0] ?
            homeProductCartList.map(el =>{
              return(
                <CardFeature
                key={el._id}
                id={el._id}
                photos={el.photos}
                title={el.title}
                price={el.price}
                address={el.address}
                description={el.description}
                />
              )
            }) 
            :
            LoadingArray.map((el,index)=>{
              return(
                <CardFeature
                key={index}
                loadingArray={"loading..."}
                />
              )
            })
         }
            </div>
        </div>
    )}
    {
      subpage === 'profile' && (
        <div className='mt-10 flex flex-col items-center justify-center bg-slate-100 shadow'>
        <div className='font-serif flex items-center'>  <span className='text-2xl text-black '>Hello </span><span className='text-base text-black mb-4'>{userData.name}</span></div>
          <p className='text-base my-4 flex items-center'> 
            {
              userData.email ? (
                <p>You are currently logged in as {userData.email}</p>
              ) : (
                <span className='px-4 py-2 rounded shadow border border-primary'>
                  <Link to={"login"} className=''>Login</Link>
                </span>
                    
              )
            }
          
          </p>
          {
            userData.name ? (
              <button onClick={handleLogout} className='w-[150px] flex p-2 items-center rounded-full shadow bg-primary '><BiUserMinus/>Logout({userData.name})</button>
            ) : (
              <button className='hidden w-[150px]  p-2 items-center rounded-full border-t border-yellow-500 shadow bg-primary'><Link to={"login"}><BiSolidUserCircle/>Login</Link></button>
              
            )
          }
           
        </div>
      )
    }
    {
      subpage === 'booking' && (
        <div>

        </div>
      )
    }

  </div>
  )
}

export default AccountPage
