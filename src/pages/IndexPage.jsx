import React from 'react'
import {  useSelector } from "react-redux";
import Homecard from '../Components/Homecard';
import banner from '../Assets/banner3.jpg'
import book from '../Assets/book.gif'
import { Link } from 'react-router-dom';
import {MdOutlineApartment} from 'react-icons/md'


const IndexPage = () => {
const DataProduct = useSelector((state)=>state.product.productList)
  console.log(DataProduct)
  const homeProductCartList = DataProduct.slice(1,5)

  const LoadingArray = new Array(4).fill(null)

  
  return (
    <div className='w-full'>
           <div className='w-full md:h-[400px] h-[250px]'><img src={banner} className='w-full h-full' alt=''/></div>  

        <div className='md:flex grid md:grid-cols-2 grid-cols-1  gap-4  py-3 px-2 md:px-10 overflow-scroll scrollbar-none '>
         
          <div className='md:w-1/2 md:p-4  '>
            <div className='min-w-[300px] max-w-[300px] bg-slate-200 p-2 rounded-2xl shadow shadow-black flex flex-col overflow-scroll scrollbar-none'>
            <div className='w-[280px] min-h-[210px] px-2'><Link to={"login"}><img src={book} alt='' className='h-full w-full'/></Link></div>
            <Link to={"register"} className="flex flex-col text-black mt-1 mb-4 shadow rounded-2xl border-t items-center border-primary font-bold text-2xl"> <span className='flex items-center'><MdOutlineApartment className='text-2xl'/>Register Now</span> <span>For More Apartments!!!</span> </Link>
            <div className='mt-4'><Link to={"login"} className='w-[150px] flex p-2 items-center rounded-full shadow bg-primary'>View Apartments</Link></div>
            </div>
           
          </div>

          <div className='md:w-1/2 md:flex md:flex-wrap md:gap-y-7 gap-6 md:p-4 px-2 grid grid-cols-1 '>
          {
            homeProductCartList[0] ?
            homeProductCartList.map(el =>{
              return(
                <Homecard
                key={el._id}
                id={el._id}
                photos={el.photos}
                address={el.address}
                title={el.title}
                price={el.price}
                
                />
              )
            }) 
            :
            LoadingArray.map((el,index)=>{
              return(
                <Homecard
                key={index}
                loadingArray={"Wait While Loading..."}
                />
              )
            })
         }
          </div>

        </div>
       
    </div>
  )
}

export default IndexPage
