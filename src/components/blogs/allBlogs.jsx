import React, { useState, useEffect } from 'react';
import BlogsItem from './blogsItem';
import BlogsItemLoading from './blogsItemLoading';
import useData from '../../hooks/useData';
import Flinks from '../Fetchlink/Flinks'; 
import { notifyError, notifyTest } from '../Notif/notify';

export default function AllBlogs() {
    const [shownErrors, setShownErrors] = useState([]);
    const { data, isLoading, error } = useData(Flinks()[0].blogs);
    // const { data, isLoading, error } = useData(Flinks()[1].blogs2);  // for eroor 

    
    useEffect(() => {
        if (error) {  
            if (!shownErrors.includes(error)) {  // for same error
                setShownErrors([...shownErrors, error]); 
                notifyError(error);
            }
        }
    }, [error, shownErrors]);


    
    return (
        <>
            {isLoading && <BlogsItemLoading />}
            {!isLoading && (
                <div className=''>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-left font-extrabold text-3xl mb-10'>Blogs :</h2>
                        <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-10' onClick={notifyTest}> Test Notify </button>
                    </div>
                    <div className='grid grid-cols-4 gap-x-12 gap-y-20'>
                        {data && data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((item, index) => (
                            <BlogsItem blog={item} index={index} key={index} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
