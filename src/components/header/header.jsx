import React from 'react'
import Menu from './menu/menu'

export default function Header() {
  return (
    <div>
        <div className='absolute left-10 top-5'>
          <h1 className='text-4xl font-black text-blue-500'>Blogs.</h1>
          <p className='text-blue-500 text-sm'>Your Source for Informed Perspectives</p>
        </div>
        <Menu />
    </div>
  )
}
