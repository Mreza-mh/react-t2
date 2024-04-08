import React, { useEffect, useState } from 'react'
import { Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogsItem from './blogsItem'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import BlogsItemLoading from './blogsItemLoading';
import ShowMore from './showMore';
import useData from '../../hooks/useData';
import Flinks from '../Fetchlink/Flinks';


export default function LatestBlogs() {

    const {data , isLoading , error} = useData(Flinks()[0].blogs)
    const [shownErrors, setShownErrors] = useState([]);


    useEffect(() => {
        if (error) {  
            if (!shownErrors.includes(error)) {  // for same error
                setShownErrors([...shownErrors, error]); 
                notifyError(error);
            }
        }
    }, [error, shownErrors]);


return (
    <div className=''>
        <div className='flex justify-between items-center'>
            <h2 className=' text-left font-extrabold text-3xl mb-10'>LatestBlogs</h2>
            <a href={`/blogs`}className='text-blue-500 cursor-pointer'>See All</a>
        </div>
        <div className='relative'>
        <Swiper
        style={{
            '--swiper-navigation-sides-offset':'-50px'
        }} 
        modules={[Navigation]} lazy={'true'} spaceBetween={50} navigation slidesPerView={4}>

                    {!isLoading ? (
                        <>
                            {data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 10).map((item, index) => (
                                <SwiperSlide key={index} className=''>
                                    <BlogsItem blog={item} index={index} />
                                </SwiperSlide>
                            ))}
                            <SwiperSlide className='' >
                                <ShowMore />
                            </SwiperSlide>
                        </>
                    ) : (
                        <SwiperSlide className='' >
                            <BlogsItemLoading />
                        </SwiperSlide>
                    )}
            
        </Swiper>
        </div>
    </div>
)
}
