import GlobeIcon from "@/components/icons/GlobeIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

const LangDropDown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("uz");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "outline-none flex items-center gap-[8px] border-[1px] border-[#006AFF]  lg:py-[12px] lg:px-[20px] py-[9px] px-[16px] rounded-[15px] bg-transparent hover:bg-[#006AFF] lg:text-[20px] text-[14px] font-medium leading-[100%] text-[#006AFF] group hover:text-[#F9F9F9] cursor-pointer transition duration-300 ease-in"
        )}
      >
        <GlobeIcon />
        {selectedLanguage}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn(
          "border-[1px] border-[#006aff] py-[12px] px-[16px] rounded-[15px] bg-white"
        )}
      >
        <ul className="flex flex-col gap-2">
          <li
            className={`py-2 px-4 rounded-[10px] text-center transition duration-200 cursor-pointer ${
              selectedLanguage === "uz"
                ? "bg-[#006AFF] text-white"
                : "bg-[#f0f0f0] text-[#1c1c1c] hover:bg-[#e0e0e0]"
            }`}
            onClick={() => setSelectedLanguage("uz")}
          >
            uz
          </li>
          <li
            className={`py-2 px-4 rounded-[10px] text-center transition duration-200 cursor-pointer ${
              selectedLanguage === "eng"
                ? "bg-[#006AFF] text-white"
                : "bg-[#f0f0f0] text-[#1c1c1c] hover:bg-[#e0e0e0]"
            }`}
            onClick={() => setSelectedLanguage("eng")}
          >
            eng
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangDropDown;
