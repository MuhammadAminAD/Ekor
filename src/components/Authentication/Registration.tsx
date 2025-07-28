import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import InputLabel from "../ui/InputLabel";
import { emailSchema, type EmailSchemaType } from "@/schemas/RegistrationSchema";
import { zodResolver } from "@hookform/resolvers/zod";


export default function Registration() {
      const form = useForm<EmailSchemaType>({
            resolver: zodResolver(emailSchema),
            defaultValues: {
                  email: ""
            },
      });
      return (
            <div>
                  <h1>Ro’yxatdan o’tish</h1>
                  <Form {...form}>
                        <form onSubmit={form.handleSubmit((values) => console.log(values))}>
                              <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                          <FormItem className="flex flex-col">
                                                <FormControl>
                                                      <InputLabel placeholder="Elektron pochtangiz" uid="register-step1-email" field={field} />
                                                </FormControl>

                                                <FormMessage className="text-[12px] mt-[10px] block text-[#f10134] leading-[130%] font-medium " />
                                          </FormItem>
                                    )}
                              />
                              <Button type="submit">Davom etish</Button>
                        </form>
                  </Form>
            </div>
      )
}
