import { z } from "zod";

const registerSchema = z.object({
  name:z.string().min(1,{message:"Enter Name"}),
  email: z.string().min(1, { message: "Enter Email" }).email(),
  password: z.string().min(8, { message: "Password must be of 8 characters" }),
  timestamp:z.string().optional(),
});

export default registerSchema;