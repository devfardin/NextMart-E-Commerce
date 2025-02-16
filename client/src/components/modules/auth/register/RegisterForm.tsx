'use client'
import { Button } from '@/components/ui/button';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import registrationSchema from './registerValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { registrationUser } from '@/services/AuthService';
import { toast } from 'sonner';

const handleGoogleLogin = () => {
    console.log("Google login clicked");
};

const handleGithubLogin = () => {
    console.log("Github login clicked");
};

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const form = useForm({
        resolver: zodResolver(registrationSchema),
    });
    const { formState: { isSubmitting } } = form;
    const password = form.watch('password');
    const passwordComfirm = form.watch('passwordConfirm');
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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
                    <p className="mt-2 text-sm text-gray-600">Join us today and start your journey</p>
                    <div className="flex flex-col space-y-4 mt-5">
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                            <FaGoogle className="w-5 h-5 mr-2 text-red-600" />
                            Continue with Google
                        </button>
                        <button
                            type="button"
                            onClick={handleGithubLogin}
                            className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                            <FaGithub className="w-5 h-5 mr-2" />
                            Continue with GitHub
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Form {...form}>
                    <form className="mt- space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'> Name</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} value={field.value || ''}
                                            placeholder='Your name'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base font-semibold ml-1'> Email Address</FormLabel>
                                    <FormControl>
                                        <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                            {...field} placeholder='Email Address' value={field.value || ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='relative'>
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-base font-semibold ml-1'>Password</FormLabel>
                                        <FormControl>
                                            <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                                {...field} placeholder='Password'
                                                value={field.value || ''}
                                                type={showPassword ? 'text' : 'password'}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 transform translate-y-1/2"
                            >
                                {showPassword ? <EyeOffIcon className="h-4 w-4 text-gray-500" /> : <EyeIcon className="h-4 w-4 text-gray-500" />}
                            </button>
                        </div>

                        <div className='relative'>
                            <FormField
                                control={form.control}
                                name="passwordConfirm"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-base font-semibold ml-1'>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input className='py-6 px-5 border border-secondary !rounded-full focus:border focus:border-primary outline-none focus:outline-none !text-base'
                                                {...field} placeholder='Confirm Password'
                                                value={field.value || ''}
                                                type={showConfirmPassword ? 'text' : 'password'}
                                            />
                                        </FormControl>
                                        {
                                            passwordComfirm && password !== passwordComfirm ? <FormMessage> Password does not match </FormMessage> : <FormMessage />
                                        }
                                    </FormItem>
                                )}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 transform translate-y-1/2"
                            >
                                {showConfirmPassword ? <EyeOffIcon className="h-4 w-4 text-gray-500" /> : <EyeIcon className="h-4 w-4 text-gray-500" />}
                            </button>

                        </div>

                        <Button className='text-lg font-medium !py-6 px-7 rounded-full' disabled={
                            (passwordComfirm !== null && password !== passwordComfirm)} type='submit'> { isSubmitting ? 'Registering': 'Register'}</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default RegisterForm
