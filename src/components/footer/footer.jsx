import React from 'react'
import useData from '../../hooks/useData'
import Flinks from '../Fetchlink/Flinks'

export default function Footer() {

    const {data , isLoading , error} = useData(Flinks()[0].blogs)

return (
    <div className='bg-blue-500 text-white w-full'>
        <div className='bg-blue-500 justify-between  p-20 flex'>
            <div>
                <p className='font-bold text-xl mb-5' >About Us</p>
            </div>
            <div>
                <p className='font-bold text-xl mb-5' >Contact Us</p>
                <p>Call us at <a href='tel:+9822222222'>+9822222222</a></p>
            </div>
            <div>
                <p className='font-bold text-xl mb-5'>Latest Blogs</p>
                <div className='flex-col flex gap-y-1 text-sm'>
                    {data&&(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,5).map((item,index)=>(
                        <p key={index} className='text-neutral-300 hover:text-white cursor-pointer'>{item.title}</p>
                    )))}
                </div>
            </div>
        </div>
        <div className='text-center py-5 border-t-[1px] border-neutral-200'>
            <p>&copy; {new Date().getFullYear()} Blogs. All rights reserved.</p>
        </div>
    </div>
)
}
