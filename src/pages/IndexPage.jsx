import React from 'react'
import {  useSelector } from "react-redux";
import Homecard from '../Components/Homecard';
import banner from '../Assets/banner3.jpg'
import book from '../Assets/book.gif'
import { Link } from 'react-router-dom';


const IndexPage = () => {
const DataProduct = useSelector((state)=>state.product.productList)
  console.log(DataProduct)
  const homeProductCartList = DataProduct.slice(3,7)
  const LoadingArray = new Array(4).fill(null)

  
  return (
    <div className='w-full'>
           <div className='w-full h-[300px]'><img src={banner} className='w-full h-full' alt=''/></div>  

        <div className='md:flex grid grid-cols-2 gap-4  py-3 overflow-scroll scrollbar-none '>
         
          <div className='w-1/2 p-4'>
            <div className='shadow w-23 h-20'><Link to={"login"}><img src={book} alt='' className='h-full w-full'/></Link></div>
            <p className="text-black my-4 shadow rounded-2xl border-t border-primary font-bold text-2xl">Register to see more cheap Apartments!!! </p>
            <div className='mt-4'><Link to={"login"} className='w-[150px] flex p-2 items-center rounded-full shadow bg-primary'>View Apartments</Link></div>
          </div>

          <div className='w-1/2 flex flex-wrap gap-y-7 gap-6 p-4 justify-center'>
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
