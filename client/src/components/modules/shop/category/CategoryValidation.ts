import { z } from "zod";

export const categoryValidation = z.object({
    name: z.string({required_error: 'Category name is required'}),
    description: z.string({required_error: 'Description is required'}),
})