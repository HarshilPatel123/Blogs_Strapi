"use client"
import React from 'react'
const Category = ({cat}: any) => {
  return (
    <div onClick={()=>{} }className='p-4 rounded-lg cursor-pointer shadow-md'>
    {cat.attributes.Title}
    </div>
  )
}

export default Category
