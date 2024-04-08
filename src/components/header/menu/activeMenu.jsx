import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function ActiveMenu({activeTabWidth,setActiveTabWidth,navPosition,setNavPosition}) {

  const [showActive, setShowActive] = useState(false);
  const location = useLocation();
  const locationPath = location.pathname.split('/');

  useEffect(()=>{
    let locationString;
    let navElement;

    if(locationPath){
      locationString=locationPath[1]
    }
    if (locationString) {
      navElement = document.getElementById(locationString);
    }else{ 
      navElement = document.getElementById('home');
    }
    if (navElement) {
      setActiveTabWidth(navElement.offsetWidth)
      setNavPosition(navElement.offsetLeft);
    }
    setInterval(
      setShowActive(true)
    ),500
    return(
      clearInterval()
    )
  },[])
  return (
    <div
        className={`' bg-blue-500 absolute   border-2 rounded-2xl h-9 px-3 -z-10 transition-all duration-500 ease-in-out -left-6 py-2 -top-1 ${showActive?'':'hidden'}`}
        style={{ transform: `translateX(${navPosition}px)`, width:`${activeTabWidth?activeTabWidth+50:'4'}px` }}
    ></div>
  )
}
