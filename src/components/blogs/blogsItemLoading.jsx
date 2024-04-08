import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { CirclesWithBar } from 'react-loader-spinner'


export default function BlogsItemLoading() {
return (
    <div className='relative bg-neutral-100 rounded-xl cursor-pointer'>
        
        <div className='p-5'>
            <div className='block h-1'></div>
            <div className='aspect-square rounded-xl overflow-hidden'>
                <Skeleton width='100%' height='100%' variant="rounded" />
            </div>
            <Skeleton sx={{ fontSize: '2rem' }} />
            <div className='pt-2 flex text-sm text-neutral-500 justify-between'>
                <Skeleton width={30}  />
                <Skeleton width={30}  />
            </div>
        </div>
        <div className='absolute  flex top-1 left-0 right-0 bottom-48 text-bold text-2xl justify-center items-center '>
            loading ... 
        </div>
        <div className="absolute  flex top-0 left-0 right-0 bottom-0 justify-center items-center ">
            <CirclesWithBar
            height="130"
            width="130"
            color="#4fa94d"
            outerCircleColor= "#3b82f6 "
            innerCircleColor="#298985"
            barColor="#000000"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
        
    </div>
)
}
