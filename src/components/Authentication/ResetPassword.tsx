import { styles } from "@/styles/index.styles";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import InputLabel from "../ui/InputLabel";
import { useForm } from "react-hook-form";
import { codeSchema, emailSchema, type CodeSchemaType, type EmailSchemaType } from "@/schemas/RegistrationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { setActiveAuthStep, setAuthData, setAuthErrors } from "@/features/AuthenticationSlice";
import type { RootState } from "@/app/store";
import { newPasswordSchema, type newPasswordSchemaType } from "@/schemas/SignInSchema";
import { handleFormSubmit } from "@/utils/onSubmit";
import { useResetPasswordRequestCodeMutation, useResetPasswordSetPasswordMutation, useResetPasswordVerifyCodeMutation } from "@/services/AuthService";
import { useEffect, useState } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router-dom";
import Loader from "../ui/Loader";

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
      const [requestCode, { isLoading }] = useResetPasswordRequestCodeMutation();
      const { errors } = useSelector((state: RootState) => state.AuthenticationSlice);

      async function onSubmit({ email }: EmailSchemaType) {
            if (isLoading) return
            await handleFormSubmit({
                  dispatch,
                  mutation: requestCode({ email }).unwrap(),
                  onSuccess: () => dispatch(setActiveAuthStep(2)),
            });
      }
      return (
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
                                                      uid="register-step1-email"
                                                      field={field}
                                                      error={form.formState.errors.email || errors.email}
                                                />
                                          </FormControl>
                                          <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                          {errors.email && <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" >
                                                {errors.email}
                                          </FormMessage>}
                                    </FormItem>
                              )}
                        />
                        <button
                              type="submit"
                              className={styles.MainButton}
                        >
                              {isLoading ? <div className="w-10 h-10"><Loader /></div> : "Davom etish"}
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
      const dispatch = useDispatch();
      const { data, errors, step, page } = useSelector((state: RootState) => state.AuthenticationSlice);
      const [verifyCode] = useResetPasswordVerifyCodeMutation();
      const [requestCode, { isLoading }] = useResetPasswordRequestCodeMutation();
      const [timer, setTimer] = useState(120); // 2 daqiqa

      useEffect(() => {
            if (timer === 0 || step !== 2 || page !== "reset-password") return;
            const interval = setInterval(() => {
                  setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
      }, [timer, step, page]);

      async function onSubmit({ code }: CodeSchemaType) {
            if (isLoading) return;
            await handleFormSubmit({
                  dispatch,
                  mutation: verifyCode({ code, email: data.email }).unwrap(),
                  onSuccess: () => dispatch(setActiveAuthStep(3)),
            });
      }


      async function handleResend() {
            if (timer > 0) return;
            try {
                  const res = await requestCode({ email: data.email }).unwrap();
                  if (res.ok) {
                        dispatch(setAuthData(res.data));
                        setTimer(120);
                  } else {
                        dispatch(setAuthErrors(res.errors));
                  }
            } catch (error: unknown) {
                  const err = error as FetchBaseQueryError & {
                        data?: { errors?: Record<string, string>; message?: string };
                  };
                  dispatch(setAuthErrors(err?.data?.errors ?? { general: "Resend xatoligi" }));
            }
      }

      const formatTime = (sec: number) => {
            const m = Math.floor(sec / 60).toString().padStart(2, "0");
            const s = (sec % 60).toString().padStart(2, "0");
            return `${m}:${s}`;
      };
      return (
            <div>
                  <p className="text-md text-main-black">{data.email} pochtangizga tasdiqlash kodi yuborildi.</p>
                  <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
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
                                                            error={form.formState.errors.code || errors.code}
                                                      />
                                                </FormControl>
                                                <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                                                {errors.code && <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" >
                                                      {errors.code}
                                                </FormMessage>}
                                          </FormItem>
                                    )}
                              />
                              <div className="flex items-center justify-between mt-2.5 px-6">
                                    <button
                                          type="button"
                                          onClick={handleResend}
                                          disabled={timer > 0}
                                          className={`text-md font-medium underline ${timer > 0 ? "opacity-50 cursor-not-allowed" : "text-blue-600"
                                                }`}
                                    >
                                          Tasdiqlash kodini qayta yuborish
                                    </button>
                                    <p>{formatTime(timer)}</p>
                              </div>
                              <button
                                    type="submit"
                                    className={styles.MainButton}
                              >
                                    {isLoading ? <div className="w-10 h-10"><Loader /></div> : "Davom etish"}
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

      const dispatch = useDispatch()
      const navigate = useNavigate()
      const [newpassword, { isLoading }] = useResetPasswordSetPasswordMutation();
      const { errors, data } = useSelector((state: RootState) => state.AuthenticationSlice);

      async function onSubmit({ password }: newPasswordSchemaType) {
            if (isLoading) return
            await handleFormSubmit({
                  dispatch,
                  mutation: newpassword({ email: data.email, password }).unwrap(),
                  onSuccess: () => navigate("/"),
            });
      }

      return (
            <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
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
                                                      error={form.formState.errors.password || errors.password}
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
                              type="submit"
                              className={styles.MainButton}
                        >
                              {isLoading ? <div className="w-10 h-10"><Loader /></div> : "Davom etish"}
                        </button>
                  </form>
            </Form>
      )
}