'use server'
import { cookies } from "next/headers"
export const createProduct = async (payload: FormData) => {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
            method: 'POST',
            headers: {
                Authorization:((await cookies()).get('accessToken')!.value)
            },
            body: payload,
        });
        return res.json();
    }
    catch (error: any) {
        return Error(error)
    }
}