import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux'

const AllProduct = ({heading}) => {
    const DataProduct = useSelector((state)=>state.product.productList)
    const categoryList = [...new Set(DataProduct.map(el=>el.category))]
  console.log(categoryList)

  //filter data display
  const [filterby,setFilterBy] = useState("")
const [dataFilter,setDataFilter] = useState([])

useEffect(()=>{
  setDataFilter(DataProduct)
},[DataProduct])

const handleFilterProduct = (category)=>{
  const filter = DataProduct.filter(el=>el.category.toLowerCase() === category.toLowerCase())
  setDataFilter(()=>{
    return[
      ...filter
    ]
  })
}
  return (
    <div className='my-7'>
    <h2 className='font-bold text-2xl text-slate-950 mb-8'>
      {heading}
    </h2>

    <div className='flex gap-6 justify-center overflow-scroll'>
      {
        categoryList[0] && categoryList.map(el =>{
          return(
            <FilterProduct category={el} onClick={()=>handleFilterProduct(el)}/> 
          )
        })
      }
     
    </div>
    <div className='p-4 gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all grid grid-cols-1 md:grid-cols-2   mt-10 shadow-lg w-full'>
    {
            dataFilter[0] ?
            dataFilter.map(el =>{
              return(
                <CardFeature
                key={el._id}
                id={el._id}
                photos={el.photos}
                title={el.title}
                category={el.category}
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
                loadingArray={"Wait While loading..."}
                />
              )
            })
         }
    </div>
    </div>
  )
}

export default AllProduct