import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import InputLabel from "../ui/InputLabel";
import { useForm } from "react-hook-form";
import {
  codeSchema,
  emailSchema,
  RegistrationSchema,
  type CodeSchemaType,
  type EmailSchemaType,
  type RegistrationSchemaType,
} from "@/schemas/RegistrationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  setActiveAuthStep,
  setAuthData,
  setAuthErrors,
} from "@/features/AuthenticationSlice";
import { styles } from "@/styles/index.styles";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import {
  useRegisterCreateUserMutation,
  useRegisterRequestCodeMutation,
  useRegisterVerifyCodeMutation,
} from "@/services/AuthService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { setToken } from "@/features/TokenSlice";
import { handleFormSubmit } from "@/utils/onSubmit";
import Loader from "../ui/Loader";

export default function RegistrationForms() {
  const { step } = useSelector((state: RootState) => state.AuthenticationSlice);

  return (
    <div className="overflow-x-hidden h-min">
      <div className="flex flex-col justify-center duration-500">
        <div
          className={`min-w-full overflow-hidden duration-700 ${
            step === 1 ? "max-h-300" : "max-h-0"
          }`}
        >
          {<Step1 />}
        </div>
        <div
          className={`min-w-full overflow-hidden duration-700 ${
            step === 2 ? "max-h-300" : "max-h-0"
          }`}
        >
          {<Step2 />}
        </div>
        <div
          className={`min-w-full overflow-hidden duration-700 ${
            step === 3 ? "max-h-300" : "max-h-0"
          }`}
        >
          {<Step3 />}
        </div>
      </div>
    </div>
  );
}

function Step1() {
  const form = useForm<EmailSchemaType>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });
  const dispatch = useDispatch();
  const [requestCode, { isLoading }] = useRegisterRequestCodeMutation();
  const { errors } = useSelector(
    (state: RootState) => state.AuthenticationSlice
  );

  async function onSubmit({ email }: EmailSchemaType) {
    if (isLoading) return;
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
                  error={form.formState.errors.email || errors?.email}
                />
              </FormControl>
              <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
              {errors?.email && (
                <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light">
                  {errors.email}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <button type="submit" className={styles.MainButton}>
          {isLoading ? (
            <div className="w-10 h-10">
              <Loader />
            </div>
          ) : (
            "Davom etish"
          )}
        </button>
      </form>
    </Form>
  );
}

function Step2() {
  const form = useForm<CodeSchemaType>({
    resolver: zodResolver(codeSchema),
    defaultValues: { code: "" },
  });

  const dispatch = useDispatch();
  const { data, errors, step, page } = useSelector(
    (state: RootState) => state.AuthenticationSlice
  );
  const [verifyCode] = useRegisterVerifyCodeMutation();
  const [requestCode, { isLoading }] = useRegisterRequestCodeMutation();
  const [timer, setTimer] = useState(120); // 2 daqiqa

  useEffect(() => {
    if (timer === 0 || step !== 2 || page !== "registration") return;
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
      dispatch(
        setAuthErrors(err?.data?.errors ?? { general: "Resend xatoligi" })
      );
    }
  }

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div>
      <p className="text-md text-main-black">
        {data.email} pochtangizga tasdiqlash kodi yuborildi.
      </p>
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
                    error={form.formState.errors.code || errors?.code}
                  />
                </FormControl>
                <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light" />
                {errors?.code && (
                  <FormMessage className="text-[14px] mt-[10px] block text-[#EF2B23] font-light">
                    {errors.code}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between mt-2.5 px-6">
            <button
              type="button"
              onClick={handleResend}
              disabled={timer > 0}
              className={`text-md font-medium underline ${
                timer > 0 ? "opacity-50 cursor-not-allowed" : "text-blue-600"
              }`}
            >
              Tasdiqlash kodini qayta yuborish
            </button>
            <p className="text-sm text-gray-500">{formatTime(timer)}</p>
          </div>
          <button type="submit" className={styles.MainButton}>
            {isLoading ? (
              <div className="w-10 h-10">
                <Loader />
              </div>
            ) : (
              "Davom etish"
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}

function Step3() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm<RegistrationSchemaType>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      password: "",
      confirmPassword: "",
      gender: "Male",
    },
  });
  const { data } = useSelector((state: RootState) => state.AuthenticationSlice);
  const [createUser, { isLoading }] = useRegisterCreateUserMutation();

  async function onSubmit(values: RegistrationSchemaType) {
    if (isLoading) return;
    const { firstName, lastName, password, gender } = values;
    await handleFormSubmit({
      dispatch,
      mutation: createUser({
        email: data.email,
        firstName,
        lastName,
        password,
        gender,
      }).unwrap(),
      onSuccess: (data: { token: { accessToken: string } }) => {
        dispatch(setToken(data.token));
        navigate("/");
      },
    });
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <InputLabel
                    placeholder="Familiyangiz"
                    uid="lastname"
                    field={field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <InputLabel
                    placeholder="Ismingiz"
                    uid="firstname"
                    field={field}
                  />
                  <FormMessage />
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
                  <InputLabel
                    placeholder="Parol"
                    uid="password"
                    field={field}
                    type="password"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <InputLabel
                    placeholder="Parolni tasdiqlash"
                    uid="confpass"
                    field={field}
                    type="password"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
                      className={`flex-1 border-2 rounded-[16px] py-6 ${
                        field.value === "Male"
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                      onClick={() => field.onChange("Male")}
                    >
                      Erkak
                    </button>
                    <button
                      type="button"
                      className={`flex-1 border-2 rounded-[16px] py-6 ${
                        field.value === "Female"
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                      onClick={() => field.onChange("Female")}
                    >
                      Ayol
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-start gap-2">
            <input type="checkbox" required className="mt-1" />
            <p className="text-sm">
              <span className="text-blue-600 underline">
                Foydalanish shartlari
              </span>{" "}
              bilan tanishdim
            </p>
          </div>

          <button type="submit" className={styles.MainButton}>
            {isLoading ? (
              <div className="w-10 h-10">
                <Loader />
              </div>
            ) : (
              "Davom etish"
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}
