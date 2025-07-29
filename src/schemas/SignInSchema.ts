import z from "zod";

export const SignInSchema = z.object({
      email: z.string().email({ message: "Email manzili noto‘g‘ri" }),
      password: z
            .string()
            .min(6, "Parol kamida 6 ta belgidan iborat bo‘lishi kerak"),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>

export const newPasswordSchema = z.object({
      password: z
            .string()
            .min(6, "Parol kamida 6 ta belgidan iborat bo‘lishi kerak"),
      confirmPassword: z
            .string()
}).refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Parollar mos emas",
});
export type newPasswordSchemaType = z.infer<typeof newPasswordSchema>