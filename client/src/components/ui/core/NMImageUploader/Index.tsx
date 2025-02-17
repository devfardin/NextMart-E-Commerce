import React, { useState } from 'react'
import { Input } from '../../input'
import { FiUpload, FiCheck, FiX } from "react-icons/fi";
const NMImageUploader = () => {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);
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
    }

    return (
        <div clas="flex flex-col gap-4">
            <label className='text-base font-semibold ml-1'> File Upload </label>
            <Input onChange={handleImageChage} type='file' multiple accept='image/*' className='hidden' id='image-uploader' />

            <label className="!w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition flex flex-col gap-3 " htmlFor="image-uploader">
            <FiUpload size={40}> </FiUpload>
            <h1 class='text-base text-gray-500'> Drag and drop an image here, or click to select a file </h1>
            </label>
        </div>
    )
}

export default NMImageUploader
