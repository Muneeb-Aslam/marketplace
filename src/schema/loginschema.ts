import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Enter Email" }).email(),
  password: z.string().min(8, { message: "Password must be of 8 characters" }),
});

export default loginSchema;