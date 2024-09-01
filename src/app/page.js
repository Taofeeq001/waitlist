'use client'
import Image from "next/image";
import { useState } from "react";
import GeneralModal from "./GeneralModal";
import Content from "./Content";

export default function Home() {
  const [openModal, setOpenModal]= useState(false)

  const handleOpenModal = ()=>{
    setOpenModal(true)
  }

  const closeModal = ()=>{
    setOpenModal(false)
  }
  function handleCloseModal(e) {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  }
  return (
    <div className="bg-black w-full h-[100vh] flex justify-center">
      <div className="lg:w-[90%] w-[95%] bg-black relative overflow-hidden container">
        <Image className="w-full absolute z-[1] top-0" src={"/Ellipse.svg"} alt="" width={500} height={400} />
        <div className="flex mt-5 flex-row justify-between items-center ">
          <Image src={"/logo.svg"} className="w-[127.62px] h-[40px]" alt={""} height={50} width={50} />
          <button className="bg-gradient-to-tr z-[5000] cursor-pointer from-[#DE7754] tiro text-[14px] font-semibold text-[#EFEFEF] via-[#C93055] to-[#5A0C9B] lg:w-[168px] lg:h-[40px] lg:p-0 p-2 rounded-[40px]">
            Contact support
          </button>
        </div>
        <div className="flex flex-col lg:gap-0 gap-8 items-center justify-center lg:mt-[10%] mt-[30%]">
          <div className="bg-gradient-to-tr from-[#DE77541A] tiro text-[14px] font-semibold text-[#EFEFEF] via-[#C93055] to-[#5A0C9B] p-[.8px] w-[168px] h-[40px] rounded-[40px]">
            <div className="bg-black w-full rounded-[40px] flex items-center justify-center  h-full">
              <p className="text-[16px]  font-semibold tiro bg-gradient-to-r from-[#C93055] via-[#DE7754] to-[#5A0C9B] bg-clip-text text-transparent">Welcome to the</p>
            </div>
          </div>
          <div className="lg:text-[90px] md:text-[40px] text-[40px] text-white flex lg:flex-row flex-row gap-2 items-center lg:gap-3">
            <p className="audiowide">FUTURE OF</p> <p className="tiro">MSMEs</p>
            </div>
          <p className="tiro text-[16px] opacity-80 text-center text-white">Sorry. This page is under development. We will let you know once we’re live.</p>
          <div  className="bg-gradient-to-tr  mt-[4%] z-[5000] cursor-pointer from-[#DE77541A] tiro text-[14px] font-semibold text-[#EFEFEF] via-[#C93055] to-[#5A0C9B] p-[1px] w-[168px] h-[40px] rounded-[40px]">
            <div onClick={handleOpenModal} className="bg-black cursor-pointer w-full rounded-[40px] flex items-center justify-center  h-full">
              <p className="text-[18px] tiro bg-gradient-to-r from-[#C93055] via-[#DE7754] to-[#5A0C9B] bg-clip-text text-transparent font-bold">Join our waitlist</p>
            </div>
          </div>
        </div>
      </div>
      {
        openModal && (
          <GeneralModal
          handleClose={handleCloseModal}
          close={closeModal}
          content={<Content/>}
          />
        )
      }
    </div>
  );
}
