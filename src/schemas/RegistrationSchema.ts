import { z } from "zod";

export const emailSchema = z.object({
      email: z.string().email({ message: "Email manzili noto‘g‘ri" }),
});
export type EmailSchemaType = z.infer<typeof emailSchema>;

export const codeSchema = z.object({
      code: z.string().length(6, "Kod 6 raqamdan iborat bo‘lishi kerak"),
});

// type
export type CodeSchemaType = z.infer<typeof codeSchema>;


export const RegistrationSchema = z
      .object({
            lastName: z
                  .string()
                  .refine((val) => val.trim() !== "", {
                        message: "Familiyangizni to‘ldiring",
                  }),

            firstName: z
                  .string()
                  .refine((val) => val.trim() !== "", {
                        message: "Ismingizni to‘ldiring",
                  }),

            password: z
                  .string()
                  .min(6, "Parol kamida 6 ta belgidan iborat bo‘lishi kerak"),

            confirmPassword: z
                  .string()
                  .min(6, "Parolni tasdiqlash kamida 6 ta belgidan iborat bo‘lishi kerak"),

            gender: z.enum(["male", "female"]),
      })
      .refine((data) => data.password === data.confirmPassword, {
            path: ["confirmPassword"],
            message: "Parollar mos emas",
      });



export type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;