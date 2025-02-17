'use client'
import { Button } from '@/components/ui/button';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { loginUser } from '@/services/AuthService';
import { toast } from 'sonner';
import Link from 'next/link';
import loginValidationSchema from './LoginValidation';

const handleGoogleLogin = () => {
    console.log("Google login clicked");
};

const handleGithubLogin = () => {
    console.log("Github login clicked");
};

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm({
        resolver: zodResolver(loginValidationSchema),
    });
    const { formState: { isSubmitting } } = form;
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const res = await loginUser(data);
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
                    <h2 className="mt-4 text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h2>
                </div>
                <Form {...form}>
                    <form className="mt- space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
                        <Button className='text-lg w-full font-medium !py-6 px-7 rounded-full' type='submit'> {isSubmitting ? 'Loging.... ' : 'Login'}
                        </Button>
                    </form>
                </Form>
                <div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <FaGoogle className="mr-2" /> Google
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </button>
                    </div>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Do not have an account?
                    <Link href='/register' className="font-medium text-blue-600 hover:text-blue-500">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginForm
