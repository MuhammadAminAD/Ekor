import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function InputLabel({
      placeholder,
      uid,
      field,
}: {
      placeholder: string;
      uid: string;
      field: any;
}) {
      const [active, setActive] = useState(false);

      return (
            <div>
                  <div className="relative mt-3">
                        <Label
                              htmlFor={uid}
                              className={cn(
                                    `${active || field.value
                                          ? "-top-1/4 px-1 bg-white text-md font-light"
                                          : "top-1/2 -translate-y-1/2 text-[20px] font-medium text-[#1C1C1C]"
                                    } absolute left-[25px] duration-375`
                              )}
                        >
                              {placeholder}
                        </Label>

                        <Input
                              id={uid}
                              className="w-100 p-[23px_25px] !ring-0 border-2 border-[#D9D9D9]"
                              {...field}
                              onFocus={() => setActive(true)}
                              onBlur={(e) => {
                                    setActive(false);
                                    field.onBlur(e); 
                              }}
                        />
                  </div>
            </div>
      );
}
