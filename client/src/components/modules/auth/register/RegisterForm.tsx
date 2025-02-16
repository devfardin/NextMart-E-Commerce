'use client'
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const RegisterForm = () => {
    const form = useForm();
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }
    return (
        <div className='max-w-md mx-auto'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Input {...field} placeholder='Enter' value={field.value || ''} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>Register</Button>
                </form>
            </Form>

        </div>
    )
}

export default RegisterForm
