import { userSchema } from "./userSchema";
import { z } from "zod";

export const userLoginSchema = userSchema.pick({
  email: true,
  password: true,
});

export const userRegisterSchema = userSchema
  .pick({
    email: true,
    password: true,
  })
  .extend({
    terms: z.literal(true),
  });

export type UserLoginSchemaType = z.infer<typeof userLoginSchema>;

export type UserRegisterSchemaType = z.infer<typeof userRegisterSchema>;
