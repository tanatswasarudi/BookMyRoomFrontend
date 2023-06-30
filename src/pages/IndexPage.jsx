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
    <div>
       <div>
       <div className='mb-4 flex justify-between cursor-pointer '>
           <img src={banner} className='' alt=''/>
          <Link to={'login'} className="px-8 cursor-pointer"><img src={book} className='' alt=''/></Link>
        </div>
        
            <div className='mt-8 mb-4 grid grid-cols-1 md:grid-cols-2  gap-6 gap-y-8'>
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
