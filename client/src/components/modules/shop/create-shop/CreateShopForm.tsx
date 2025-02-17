'use client'
import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import NMImageUploader from '@/components/ui/core/NMImageUploader/Index';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const CreateShopForm = () => {
    const form = useForm();

    const {
        formState: { isSubmitting },
    } = form;


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    };

    return (
        <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-4xl p-5 my-5 bg-white">
            <div className="flex items-center space-x-4 mb-5">
                <Logo />
                <div>
                    <h1 className="text-xl font-semibold">Create Your Shop</h1>
                    <p className="font-extralight text-sm text-gray-600">
                        To create your shop, please fill out the form below.
                    </p>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="shopName"
                            render={({ field }) => (
                                <FormItem className="mb-3">
                                    <FormLabel className='text-base font-semibold ml-1'>Shop Name</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="businessLicenseNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'>Business License Number</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'>Address</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contactNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'>Contact Number</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="website"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'>Website</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="establishedYear"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'>Established Year</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="taxIdentificationNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'>Tax Identification Number</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="socialMediaLinks.facebook"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'>Facebook</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="socialMediaLinks.twitter"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'>Twitter</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="socialMediaLinks.instagram"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'>Instagram</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="mt-4">
                        <div className="col-span-4 md:col-span-3">
                            <FormField
                                control={form.control}
                                name="servicesOffered"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-base font-semibold ml-1'>Services Offered</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="h-36"
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="mt-8">
                            <NMImageUploader/>
                         </div>

                            {/* {imagePreview.length > 0 ? (
            <ImagePreviewer
              setImageFiles={setImageFiles}
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
              className="mt-8"
            />
          ) : (
            <div className="mt-8">
              <NMImageUploader
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                label="Upload Logo"
              />
            </div>
          )} */}
                        </div>

                        <Button type="submit" className="text-lg w-full font-medium !py-6 px-7 rounded-full mt-5">
                            {isSubmitting ? "Creating...." : "Create"}
                        </Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateShopForm
