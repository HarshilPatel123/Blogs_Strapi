import React from 'react'
import Category from './Category'

const Categories = ({categories}: any) => {
  return (
    <div  className='flex gap-8 flex-row mb-12 '>

      {categories?.data?.map((category: any)=> (

      <div key={category.id} className='flex bg-orange-500 text-black-900 gap-8 flex-row rounded-lg mb-12 '>
         <Category cat={category}/>
      </div>

      ))}
    </div>
  )
}

export default Categories
