'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Content = ({close}) => {
    const [email, setEmail] = useState()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const payload = {
        email: email,
    }
    const base_url = "/api/waitlist"

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (!email) {
            setLoading(false)
            setError("Email is required")
            // setTimeout((
            //     setError("")
            // ),3000)
        } else {
            try {
                const response = await axios.post(base_url, payload)
                const result = response.data
                // if(result.statusCode === "00"){
                //     toast.success
                // }
                if (result) {
                    toast.success("Email added to the Waitlist successfully!")
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
                // toast.error("an Error Occured")
                //comment this out when the API ENDPOINT IS PROVIDED
                close();
                toast.success("Email added to the Waitlist successfully!")
            }
        }
    }
    return (
        <div className='flex flex-col px-[3%] gap-5'>
            <div className='flex flex-col gap-3'>
                <p className='text-[20px] text-[#EFEFEF] tiro'>Subscribe to newsletter</p>
                <p className='text-[#EFEFEF] text-opacity-20'>Kindly subscribe to receive update from our team.</p>
            </div>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} className='p-3 rounded-lg bg-white w-full' placeholder='Enter your email' type="email" name="" id="" />
            {
                error && (
                    <p className='text-red-500'>{error}</p>
                )
            }
            <button onClick={handleSubmit} className='w-[112px] h-[40px] rounded-[40px] bg-gradient-to-tr from-[#DE7754] via-[#C93055] to-[#5A0C9B] text-[14px] text-white mb-6'>{loading? "Subscribing...":"Subscribe"}</button>
            {/* <ToastContainer /> */}
        </div>

    )
}

export default Content