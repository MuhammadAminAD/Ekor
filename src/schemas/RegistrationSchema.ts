import { z } from "zod";

export const emailSchema = z.object({
      email: z.string().email({ message: "Email manzili noto‘g‘ri" }),
});
export type EmailSchemaType = z.infer<typeof emailSchema>;
