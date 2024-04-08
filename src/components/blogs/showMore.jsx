import React from 'react'

export default function ShowMore() {
  return (
    <a href={`/blogs`}>
        <div className='bg-blue-500  bg-opacity-10 rounded-xl  hover:bg-opacity-20 transition-all duration-500 ease-in-out'>
        <div className='flex flex-col gap-y-2  justify-center aspect-square  items-center  '>
            <div className='w-14 h-14 bg-opacity-30 flex justify-center items-center bg-blue-500 rounded-full'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#3b82f6" className="w-6 fill-blue-500 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-blue-500 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </div>
            <p className='text-blue-500 font-semibold'>Show More</p>
        </div>
        <span className='h-20 block'></span>
        </div>
    </a>
           
  )
}
