import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must have at least 8 characters"),
});
