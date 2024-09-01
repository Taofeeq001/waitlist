"use client";
import Image from "next/image";
import React from "react";
import { TbX } from "react-icons/tb";

const GeneralModal = ({ close, handleClose, content, height }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-[8000] modal-overlay w-full overflow-y-scroll backdrop-blur`}
        >
            <div
                onClick={handleClose}
                className={`modal bg-black  bg-opacity-40 fixed inset-0 flex items-center justify-center`}
            >
                <div
                    className={`modal-content bg-[var(--primary-color)] ${height}  lg:w-[40%] w-full rounded-3xl overflow-y-auto transform transition-transform duration-300 ease-in-out bounce`}
                >
                    <div className="flex justify-between  border-white bg-gradient-to-r from-[#C93055] via-[#DE7754] to-[#5A0C9B] p-6 items-center">
                        {/* <h2 className="text-[var(--text-color)] capitalize text-[20px]">{heading}</h2> */}
                        <Image src="/logo.svg" className="w-[127.62px] h-[40px]" alt={""} height={50} width={50} />
                        <span
                            onClick={close}
                            className="text-xl cursor-pointer w-[50px] h-[50px] rounded-full items-center justify-center bg-[#EFEFEF] bg-opacity-10 flex text-white text-opacity-15"
                        >
                            <TbX />
                        </span>
                    </div>

                    <div className="border-b border-[var(--border-color)]"></div>
                    <div className="py-6 px-3 bg-[#1E1F20]  text-[var(--faded-text)] overflow-y-auto">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralModal;
