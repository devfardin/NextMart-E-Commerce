import React, { useState } from 'react'
import { Input } from '../../input'
import { FiUpload, FiCheck, FiX } from "react-icons/fi";
import Image from 'next/image';
type TImageUploaderProps = {
    label: string,
    className?: string,
    setImageFiles: React.Dispatch<React.SetStateAction<[] | File[]>>,
    setImagePreview: React.Dispatch<React.SetStateAction<[] | string[]>>,
}
const NMImageUploader = ({setImageFiles, setImagePreview, label, className}: TImageUploaderProps) => {
    const handleImageChage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        setImageFiles((prev) => [...prev, file])
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview((pre) => [...pre, reader.result as string]);
            }
            reader.readAsDataURL(file);
        }
        event.target.value = '';
    };


    return (
        <div className="flex flex-col gap-3">
            <label className='text-base font-semibold ml-1'>{label}</label>
            <Input onChange={handleImageChage} type='file' multiple accept='image/*' className='hidden' id='image-uploader' />
            <label className="!w-full h-36 md:size-36 items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition flex flex-col gap-3 " htmlFor="image-uploader">
                <FiUpload size={40}> </FiUpload>
                <h1 className='text-base text-gray-500'> Drag and drop an image here, or click to select a file </h1>
            </label>
            {/* <div>
                {
                    imagePreview.map((previeiwLink, index) => <Image key={index} src={previeiwLink} alt='Preview Image' width={500} height={500} />)
                }
            </div> */}
        </div>
    )
}

export default NMImageUploader
