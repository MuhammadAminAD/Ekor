import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import InputLabel from "../ui/InputLabel";
import { useForm } from "react-hook-form";
import { codeSchema, emailSchema, RegistrationSchema, type CodeSchemaType, type EmailSchemaType, type RegistrationSchemaType } from "@/schemas/RegistrationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { setActiveAuthStep } from "@/features/AuthenticationSlice";
import { styles } from "@/styles/index.styles";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";


export default function RegistrationForms() {
      const { step } = useSelector((state: RootState) => state.AuthenticationSlice)
      return (
            <div>
                  {step === 1 && Step1()}
                  {step === 2 && Step2()}
                  {step === 3 && Step3()}
            </div>
      )
}


function Step1() {
      const form = useForm<EmailSchemaType>({
            resolver: zodResolver(emailSchema),
            defaultValues: {
                  email: ""
            },
      });
      const dispatch = useDispatch()
      return (
            <Form {...form}>
                  <form onSubmit={form.handleSubmit(
                        (values) => console.log("✅ OK:", values),
                        (errors) => console.log("❌ Errors:", errors)
                  )}>
                        <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                          <FormControl>
                                                <InputLabel
                                                      placeholder="Elektron pochtangiz"
                                                      uid="register-step1-email"
                                                      field={field}
                                                      error={form.formState.errors.email}
                                                />
                                          </FormControl>
                                          <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                    </FormItem>
                              )}
                        />
                        <button
                              onClick={() => { dispatch(setActiveAuthStep(2)) }}
                              type="submit"
                              className={styles.MainButton}
                        >
                              Davom etish
                        </button>
                  </form>
            </Form>
      )
}

function Step2() {
      const form = useForm<CodeSchemaType>({
            resolver: zodResolver(codeSchema),
            defaultValues: {
                  code: ""
            },
      });
      const dispatch = useDispatch()
      return (
            <div>
                  <p className="text-md text-main-black">+99 897 ***-**-99 raqamiga tasdiqlash kodi yuborildi.</p>
                  <Form {...form}>
                        <form onSubmit={form.handleSubmit(
                              (values) => console.log("✅ OK:", values),
                              (errors) => console.log("❌ Errors:", errors)
                        )}>
                              <FormField
                                    control={form.control}
                                    name="code"
                                    render={({ field }) => (
                                          <FormItem className="flex flex-col">
                                                <FormControl>
                                                      <InputLabel
                                                            placeholder="Tasdiqlash kodini kiriting"
                                                            uid="register-step2-code"
                                                            field={field}
                                                            error={form.formState.errors.code}
                                                      />
                                                </FormControl>
                                                <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                          </FormItem>
                                    )}
                              />
                              <div className="flex items-center justify-between mt-2.5 px-6">
                                    <p className="text-md font-medium underline">Tasdiqlash kodini qayta yuborish</p>
                                    <p>01:14</p>
                              </div>
                              <button
                                    onClick={() => { dispatch(setActiveAuthStep(3)) }}
                                    type="submit"
                                    className={styles.MainButton}
                              >
                                    Davom etish
                              </button>

                        </form>
                  </Form>
            </div>
      )
}



function Step3() {
      const dispatch = useDispatch();

      const form = useForm<RegistrationSchemaType>({
            resolver: zodResolver(RegistrationSchema),
            defaultValues: {
                  lastName: "",
                  firstName: "",
                  password: "",
                  confirmPassword: "",
                  gender: "male",
            },
      });

      return (
            <div className="space-y-6">
                  <Form {...form}>
                        <form
                              onSubmit={form.handleSubmit(
                                    (data) => console.log("✅ OK:", data),
                                    (error) => console.log("❌ Errors:", error)
                              )}
                              className="space-y-6"
                        >
                              {/* Familiya / Ism */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <FormField
                                          control={form.control}
                                          name="lastName"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <InputLabel placeholder="Familiyangiz" uid="auth-registr3-lastname" field={field} />
                                                      <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                                </FormItem>
                                          )}
                                    />
                                    <FormField
                                          control={form.control}
                                          name="firstName"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <FormItem>
                                                            <InputLabel placeholder="Ismingiz" uid="auth-registr3-name" field={field} />
                                                            <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                                      </FormItem>
                                                </FormItem>
                                          )}
                                    />
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <FormField
                                          control={form.control}
                                          name="password"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <InputLabel placeholder="Parol" uid="auth-registr3-pass" field={field} />
                                                      <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                                </FormItem>
                                          )}
                                    />
                                    <FormField
                                          control={form.control}
                                          name="confirmPassword"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <InputLabel placeholder="Parolni tasdiqlash" uid="auth-registr3-confpass" field={field} />
                                                      <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                                </FormItem>
                                          )}
                                    />
                              </div>

                              {/* Jins */}
                              <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                          <FormItem>
                                                <FormLabel>Jinsingiz</FormLabel>
                                                <FormControl>
                                                      <div className="flex gap-4">
                                                            <button
                                                                  type="button"
                                                                  className={`flex-1 border-2 rounded-[16px] py-6 ${field.value === "male" ? "border-blue-500" : "border-gray-300"
                                                                        }`}
                                                                  onClick={() => field.onChange("male")}
                                                            >
                                                                  Erkak
                                                            </button>
                                                            <button
                                                                  type="button"
                                                                  className={`flex-1 border-2 rounded-[16px] py-6 ${field.value === "female" ? "border-blue-500" : "border-gray-300"
                                                                        }`}
                                                                  onClick={() => field.onChange("female")}
                                                            >
                                                                  Ayol
                                                            </button>
                                                      </div>
                                                </FormControl>
                                                <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                          </FormItem>
                                    )}
                              />

                              {/* Check va button */}
                              <div className="flex items-start gap-2">
                                    <input type="checkbox" required className="mt-1" />
                                    <p className="text-sm">
                                          <span className="text-blue-600 underline">Foydalanish shartlari</span> bilan tanishdim
                                    </p>
                              </div>

                              <button
                                    onClick={() => { dispatch(setActiveAuthStep(3)) }}
                                    type="submit"
                                    className={styles.MainButton}
                              >
                                    Davom etish
                              </button>
                        </form>
                  </Form>
            </div>
      );
}