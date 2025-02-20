'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ImagePreviewer from "../create-shop/ImagePreviewer";
import NMImageUploader from "@/components/ui/core/NMImageUploader/Index";
import { createCategory } from "@/services/Category";
import { createBrand } from "@/services/Brand";
import { brandValidation } from './brandValidation';

const CreateBrandModal = () => {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);
    const form = useForm(
        { resolver: zodResolver(brandValidation),}
    );
    const { formState: { isSubmitting } } = form;
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const formData = new FormData();
            formData.append('data', JSON.stringify(data));
            formData.append('logo', imageFiles[0] as File);
            const res = await createBrand(formData);
            if (res.success) {
                toast.success(res.message);
            } else {
                toast.error(res.message)
            }
        }
        catch (error: any) {
            console.log(error);
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded text-lg font-normal">
                    Create Brand
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                        Create a New Brand
                    </DialogTitle>
                </DialogHeader>
                <div className="w-full space-y-8">
                    <Form {...form}>
                        <form className="mt- space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-base font-semibold ml-1'>Brand Name</FormLabel>
                                        <FormControl>
                                            <Input className='py-6 px-5 border border-primary !rounded-sm focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                                {...field} value={field.value || ''}
                                                placeholder='Brand name'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                { imagePreview.length > 0 ? (
                                    <ImagePreviewer
                                        setImageFiles={setImageFiles}
                                        imagePreview={imagePreview}
                                        setImagePreview={setImagePreview}
                                        className="mt-5"
                                    />
                                ) : (
                                    <div className="mt-5">
                                        <NMImageUploader setImagePreview={setImagePreview} label='Category Image' setImageFiles={setImageFiles} />
                                    </div>
                                )}
                            <Button className='text-lg w-full font-medium !py-6 px-7 rounded-sm' disabled={isSubmitting} type='submit'> {isSubmitting ? 'Creating' : 'Create Category'}
                            </Button>
                        </form>
                    </Form>
                    <div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CreateBrandModal
