import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import type { ControllerRenderProps, FieldError, FieldValues, Path } from "react-hook-form";

type InputLabelProps<T extends FieldValues, K extends Path<T> = Path<T>> = {
      placeholder: string;
      uid: string;
      field: ControllerRenderProps<T, K>;
      error?: FieldError;
};

export default function InputLabel<T extends FieldValues, K extends Path<T> = Path<T>>({
      placeholder,
      uid,
      field,
      error,
}: InputLabelProps<T, K>) {
      const [active, setActive] = useState(false);

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
                              className={`w-full rounded-[15px] h-[70px] p-[23px_25px] !ring-0 border-2 outline-0 ${error ? "!border-[#EF2B23]" : "border-[#D9D9D9]"
                                    }`}
                              {...field}
                              value={field.value as string}
                              onFocus={() => setActive(true)}
                              onBlur={() => {
                                    setActive(false);
                                    field.onBlur();
                              }}
                        />
                  </div>
            </div>
      );
}
