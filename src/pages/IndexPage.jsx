import React from 'react'
import {  useSelector } from "react-redux";
import CardFeature from '../Components/CardFeature';
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
       <div className='w-full'>
       <div className='mb-4 grid md:grid-cols-2 grid-cols-1 gap-2 cursor-pointer w-full '>
           <div><img src={banner} className='' alt=''/></div>
           <div><Link to={'login'} className=" cursor-pointer"><img src={book} className='' alt=''/></Link></div>  
        </div>
        
            <div className='flex md:grid md:grid-cols-2 gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all'>
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
    </div>
  )
}

export default IndexPage
