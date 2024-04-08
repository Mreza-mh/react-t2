import React, { useState } from 'react'
import MenuItem from './menuItem';
import ActiveMenu from './activeMenu';

export default function Menu() {
  const [navPosition, setNavPosition] = useState();
  const [activeTabWidth, setActiveTabWidth] = useState(); 
 


  return (
    <div className='relative border-b-2'>

    <div className='flex relative max-w-[400px] gap-x-10 mx-auto justify-center my-10'>
      <ActiveMenu navPosition={navPosition} setNavPosition={setNavPosition} activeTabWidth={activeTabWidth} setActiveTabWidth={setActiveTabWidth}  />
      <MenuItem menuItemName='Home' menuItemId='home' setNavPosition={setNavPosition} setActiveTabWidth={setActiveTabWidth} />
      <MenuItem menuItemName='Blogs' menuItemId='blogs' setNavPosition={setNavPosition} setActiveTabWidth={setActiveTabWidth} />
      <MenuItem menuItemName='About Us' menuItemId='aboutUs' setNavPosition={setNavPosition} setActiveTabWidth={setActiveTabWidth} />
    </div>
    </div>
  )
}
