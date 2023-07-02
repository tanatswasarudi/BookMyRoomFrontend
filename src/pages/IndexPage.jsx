import React from 'react'
import {  useSelector } from "react-redux";
import Homecard from '../Components/Homecard';
import banner from '../Assets/banner3.jpg'
import book from '../Assets/book.gif'
import { Link } from 'react-router-dom';


const IndexPage = () => {
const DataProduct = useSelector((state)=>state.product.productList)
  console.log(DataProduct)
  const homeProductCartList = DataProduct.slice(1,7)
  const LoadingArray = new Array(10).fill(null)

  
  return (
    <div className='w-full'>
       <div className='mb-4 cursor-pointer w-full '>
           <div><img src={banner} className='' alt=''/></div>  
        </div>
        <div className='md:flex gap-4 py-3 overflow-scroll scrollbar-none '>
          <div className='w-1/2'>
            <div className='shadow w-23 h-20'><Link to={"login"}><img src={book} alt='' className='h-full w-full'/></Link></div>
          </div>
          <div className='w-1/2 flex flex-wrap gap-y-7 gap-6 p-4 mt-8 justify-center'>
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
                loadingArray={"loading..."}
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
