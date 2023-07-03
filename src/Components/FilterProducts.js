import React from 'react'
import {MdBedroomParent} from 'react-icons/md'

const FilterProduct = ({category,onClick}) => {
  return (
    <div onClick={onClick} className=''>
        <div className='text-7xl p-5 bg-primary rounded-full cursor-pointer hover:to-red-300'>
             <MdBedroomParent className=''/>
           </div>
           <p className='text-center font-medium my-1 capitalize'>{category}</p>
            
    </div>
  )
}

export default FilterProduct