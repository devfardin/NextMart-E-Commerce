import { z } from "zod";
const registrationSchema = z.object({
    name: z.string({ required_error: 'Name is required' }).min(2, 'First name must be between 2 and 50 characters').max(50, 'First name must be between 2 and 50 characters'),
    email: z.string({ required_error: 'Email is required' }).email('Invalid email address'),
    password: z.string({ required_error: 'Password Confirmation is required' }).min(8, 'Password must be a least 8 characters'),
    passwordConfirm: z.string({ required_error: 'password is required' }).min(8)
});
export default registrationSchema;