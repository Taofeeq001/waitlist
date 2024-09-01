import React from 'react'

const Content = () => {
    return (
        <div className='flex flex-col px-[3%] gap-5'>
            <div className='flex flex-col gap-3'>
                <p className='text-[20px] text-[#EFEFEF] tiro'>Subscribe to newsletter</p>
                <p className='text-[#EFEFEF] text-opacity-20'>Kindly subscribe to receive update from our team.</p>
            </div>
            <input className='p-3 rounded-lg bg-[#EFEFEF1A] w-full' placeholder='Enter your email' type="email" name="" id="" />
            <button className='w-[112px] h-[40px] rounded-[40px] bg-gradient-to-tr from-[#DE7754] via-[#C93055] to-[#5A0C9B] text-[14px] text-white mb-6'>Subscribe</button>
        </div>
    )
}

export default Content