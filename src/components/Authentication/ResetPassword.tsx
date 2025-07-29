import { styles } from "@/styles/index.styles";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import InputLabel from "../ui/InputLabel";
import { useForm } from "react-hook-form";
import { codeSchema, emailSchema, type CodeSchemaType, type EmailSchemaType } from "@/schemas/RegistrationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { setActiveAuthStep } from "@/features/AuthenticationSlice";
import type { RootState } from "@/app/store";
import { newPasswordSchema, type newPasswordSchemaType } from "@/schemas/SignInSchema";

export default function ResetPassword() {
      const { step } = useSelector((state: RootState) => state.AuthenticationSlice)

      return (
            <div className="w-full">
                  <h1 className={`${styles.text32_500} mb-16`}>
                        {step === 1 ? "Parolni tiklash" :
                              step === 2 ? "Tasdiqlash kodi" : "Yangi parolni kiriting"}
                  </h1>

                  <div className="overflow-x-hidden h-min">
                        <div className={`flex flex-col justify-center duration-500`}>
                              <div className={`min-w-full overflow-hidden duration-700 ${step === 1 ? "max-h-300" : "max-h-0"} `}>
                                    {Step1()}
                              </div>
                              <div className={`min-w-full overflow-hidden duration-700 ${step === 2 ? "max-h-300" : "max-h-0"} `}>
                                    {Step2()}
                              </div>
                              <div className={`min-w-full overflow-hidden duration-700 ${step === 3 ? "max-h-300" : "max-h-0"} `}>
                                    {Step3()}
                              </div>
                        </div>
                  </div>

            </div>
      );
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
      const form = useForm<newPasswordSchemaType>({
            resolver: zodResolver(newPasswordSchema),
            defaultValues: {
                  password: "",
                  confirmPassword: ""
            },
      });
      // const dispatch = useDispatch()
      return (
            <Form {...form}>
                  <form onSubmit={form.handleSubmit(
                        (values) => console.log("✅ OK:", values),
                        (errors) => console.log("❌ Errors:", errors)
                  )}>
                        <FormField
                              control={form.control}
                              name="password"
                              render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                          <FormControl>
                                                <InputLabel
                                                      placeholder="Yangi parolni kiriting"
                                                      uid="resetpassword-1"
                                                      field={field}
                                                      error={form.formState.errors.password}
                                                      type="password"
                                                />
                                          </FormControl>
                                          <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                    </FormItem>
                              )}
                        />

                        <FormField
                              control={form.control}
                              name="confirmPassword"
                              render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                          <FormControl>
                                                <InputLabel
                                                      placeholder="Parolni tasdiqlash"
                                                      uid="resetPassword-confirmPass"
                                                      field={field}
                                                      error={form.formState.errors.confirmPassword}
                                                      type="password"
                                                />
                                          </FormControl>
                                          <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                    </FormItem>
                              )}
                        />
                        <button
                              // onClick={() => { dispatch(setActiveAuthStep(2)) }}
                              type="submit"
                              className={styles.MainButton}
                        >
                              Davom etish
                        </button>
                  </form>
            </Form>
      )
}