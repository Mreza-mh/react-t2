import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuItem(props) {
    const menuItemName = props.menuItemName
    const menuItemId = props.menuItemId
    const setActiveTabWidth = props.setActiveTabWidth
    const setNavPosition = props.setNavPosition



    const handleSetActiveTab = (tabId) => {
        const navElement = document.getElementById(tabId);
        setActiveTabWidth(navElement.offsetWidth)
        if (navElement) {
          setNavPosition(navElement.offsetLeft);
        }
      };

  return (<>
 
    {menuItemId&&menuItemName&&<NavLink
      id={menuItemId}
        to={`/${menuItemId==='home'?'':menuItemId}`}
        className={ ({ isActive, isPending }) =>
        isPending ? "" : isActive ? "text-white transition-all duration-500 ease-in-out" : ""
        }
        onClick={()=>handleSetActiveTab(menuItemId)}
      >
        {menuItemName}
    </NavLink>}
    </>
  )
}
