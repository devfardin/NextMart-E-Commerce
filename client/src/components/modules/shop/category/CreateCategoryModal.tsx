'use client'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { registrationUser } from '@/services/AuthService';
import { toast } from 'sonner';
import Link from 'next/link';
import {
    Dialog,
    DialogContent,
    DialogFooter,
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

const CreateCategoryModal = () => {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);
    const form = useForm(
        // { resolver: zodResolver(registrationSchema),}
    );
    const { formState: { isSubmitting } } = form;
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const res = await registrationUser(data);
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
                    Create Cagetory
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                        Create a New Category
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
                                        <FormLabel className='text-base font-semibold ml-1'>Category Name</FormLabel>
                                        <FormControl>
                                            <Input className='py-6 px-5 border border-primary !rounded-sm focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                                {...field} value={field.value || ''}
                                                placeholder='Your name'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="mt-4">
                                <div className="col-span-4 md:col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='text-base font-semibold ml-1'>Category Description</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder='Enter categories description'
                                                        className="h-36 rounded-sm border-primary placeholder:text-base placeholder:text-gray-400 p-3"
                                                        {...field}
                                                        value={field.value || ""}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {imagePreview.length > 0 ? (
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
                            </div>

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

export default CreateCategoryModal
