import { setActiveAuthPage } from "@/features/AuthenticationSlice";
import { styles } from "@/styles/index.styles";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import InputLabel from "../ui/InputLabel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, type SignInSchemaType } from '@/schemas/SignInSchema';
import GoogleIcon from "../icons/GoogleIcon";
import { useLoginMutation } from "@/services/AuthService";
import { RootState } from "@/app/store";
import { useNavigate } from "react-router-dom";
import { handleFormSubmit } from "@/utils/onSubmit";
import { setToken } from "@/features/TokenSlice";
import Loader from "../ui/Loader";

export default function SignIn() {
      function AuthGoogle() {
            window.location.href = `${import.meta.env.VITE_API_URL}/api/v1/auth/google`
      }


      const form = useForm<SignInSchemaType>({
            resolver: zodResolver(SignInSchema),
            defaultValues: {
                  email: "",
                  password: ""
            },
      });
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const [login, { isLoading }] = useLoginMutation()
      const { errors } = useSelector((state: RootState) => state.AuthenticationSlice)

      async function onSubmit(values: SignInSchemaType) {
            const { email, password } = values;
            await handleFormSubmit({
                  dispatch,
                  mutation: login({
                        email,
                        password
                  }).unwrap(),
                  onSuccess: (data: { token: { accessToken: string } }) => {
                        dispatch(setToken(data.token));
                        navigate("/");
                  },
            });
      }

      return (
            <div>
                  <h1 className={`${styles.text32_500} text-center mb-16`}>Profilga kirish</h1>

                  <div>

                        <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <FormField
                                          control={form.control}
                                          name="email"
                                          render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                      <FormControl>
                                                            <InputLabel
                                                                  placeholder="Elektron pochtangiz"
                                                                  uid="signin-email"
                                                                  field={field}
                                                                  error={form.formState.errors.email || errors?.email}
                                                            />
                                                      </FormControl>
                                                      <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                                      {errors.email && <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" >
                                                            {errors.email}
                                                      </FormMessage>}
                                                </FormItem>
                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="password"
                                          render={({ field }) => (
                                                <FormItem className="flex flex-col mt-7.5">
                                                      <FormControl>
                                                            <InputLabel
                                                                  placeholder="Parolingizni kiriting"
                                                                  uid="signin-password"
                                                                  field={field}
                                                                  error={form.formState.errors.password || errors?.password}
                                                                  type="password"
                                                            />
                                                      </FormControl>
                                                      <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                                      {errors.password && <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" >
                                                            {errors.password}
                                                      </FormMessage>}
                                                </FormItem>
                                          )}
                                    />

                                    <div className="mt-6">
                                          <button className="underline text-md text-main-black" onClick={() => dispatch(setActiveAuthPage('reset-password'))}>
                                                Parolingizni unutdingizmi?
                                          </button>
                                    </div>
                                    <button
                                          type="submit"
                                          className={`${styles.MainButton} mt-8`}
                                    >
                                          {isLoading ? <div className="w-10 h-10"><Loader /></div> : "Davom etish"}
                                    </button>
                              </form>
                        </Form>

                        <div className="w-full flex items-center my-12.5">
                              <span className="w-full h-[1px] border-2 border-[#D9D9D9]" />
                              <span className="px-2.5 text-[#999999] text-md font-medium">yoki</span>
                              <span className="w-full h-[1px] border-2 border-[#D9D9D9]" />
                        </div>

                        <div className="grid grid-cols-1">
                              <button onClick={() => AuthGoogle()}
                                    className="flex items-center gap-5 py-6 w-full border-1  border-disabled justify-center rounded-2xl active:scale-90 duration-100">
                                    <GoogleIcon />Google orqali tizimga kiring
                              </button>
                        </div>

                        <div className="w-full flex items-center mt-12.5">
                              <span className="w-full h-[1px] border-2 border-[#D9D9D9]" />
                              <span className="px-2.5 text-[#999999] text-md font-medium">yoki</span>
                              <span className="w-full h-[1px] border-2 border-[#D9D9D9]" />
                        </div>

                        <h2 className="w-full mt-12.5 text-center text-[#1C1C1C]">
                              Akkauntingiz yo’qmi? Unda
                              <button
                                    onClick={() => { dispatch(setActiveAuthPage("registration")) }}
                                    className="text-main-blue underline text-md font-medium cursor-pointer mx-1">
                                    Ro’yxatdan o’ting
                              </button>
                        </h2>
                  </div>
            </div>
      )
}
