import { string, z } from "zod";

export const brandValidation = z.object({
    name: z.string({required_error: 'Brand Name is required'})
})