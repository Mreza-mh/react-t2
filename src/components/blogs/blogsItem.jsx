import React from 'react'

export default function BlogsItem({blog,index}) {
  return (
    <div key={index} className=' group relative transition-all overflow-hidden duration-500 ease-in-out bg-neutral-100 rounded-xl cursor-pointer'>
        <div className=' opacity-0 absolute p-5 h-full  bg-black bg-opacity-70  overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100'>
            <div className=' h-full overflow-hidden'>
                <p className='text-white text-justify text-sm line-clamp-[15]'>{blog.desc}</p>
            </div>
        </div>
        <div className='m-5'>
            <div className='aspect-square rounded-xl overflow-hidden'>
                <img className='aspect-square object-cover ' src={blog.image} loading='lazy' alt={blog.title} />
            </div>
            <p className='font-bold truncate text-left mt-4'>{blog.title}</p>
            <div className='mt-4 flex text-sm text-neutral-500 justify-between'>
                <p>{new Date(blog.createdAt).toLocaleDateString('en-Us',{ month: 'long', day: '2-digit' })}</p>
                <p>{new Date(blog.createdAt).toLocaleTimeString('en-Us',{ hour12: false, hour: '2-digit', minute: '2-digit'})}</p>
            </div>
        </div>
        
    </div>
  )
}
