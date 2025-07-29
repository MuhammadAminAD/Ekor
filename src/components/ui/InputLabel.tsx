import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import type { ControllerRenderProps, FieldError, FieldValues, Path } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react"; // 👁 lucide-react ikonalar

type InputLabelProps<T extends FieldValues, K extends Path<T> = Path<T>> = {
      placeholder: string;
      uid: string;
      field: ControllerRenderProps<T, K>;
      error?: FieldError | string | undefined;
      type?: "text" | "password" | "email";
};

export default function InputLabel<T extends FieldValues, K extends Path<T> = Path<T>>({
      placeholder,
      uid,
      field,
      error,
      type = "text",
}: InputLabelProps<T, K>) {
      const [active, setActive] = useState(false);
      const [showPassword, setShowPassword] = useState(false);

      const isPassword = type === "password";

      return (
            <div>
                  <div className="relative mt-3">
                        <Label
                              htmlFor={uid}
                              className={cn(
                                    `${active || field.value
                                          ? "-top-1/6 px-1 bg-white text-md font-light"
                                          : "top-1/2 -translate-y-1/2 text-[20px] font-medium text-[#1C1C1C]"
                                    } absolute left-[25px] duration-375`
                              )}
                        >
                              {placeholder}
                        </Label>

                        <Input
                              id={uid}
                              type={isPassword && showPassword ? "text" : type}
                              className={`w-full rounded-[15px] h-[70px] p-[23px_25px] pr-14 !ring-0 border-2 outline-0 ${error ? "!border-[#EF2B23]" : "border-[#D9D9D9]"
                                    }`}
                              {...field}
                              value={field.value as string}
                              onFocus={() => setActive(true)}
                              onBlur={() => {
                                    setActive(false);
                                    field.onBlur();
                              }}
                        />

                        {/* 👁 Eye Icon */}
                        {isPassword && (
                              <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                              >
                                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                              </button>
                        )}
                  </div>
            </div>
      );
}
