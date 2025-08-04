import GlobeIcon from "@/components/icons/GlobeIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const LangDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          className={`flex items-center gap-[10px] border-[1px] border-[#006AFF]
        lg:py-[12px] lg:px-[20px] py-[9px] px-[16px] rounded-[15px] bg-[transparent] hover:bg-[#006AFF] lg:text-[20px] font-medium leading-[100%] text-[14px]
        text-[#006AFF] group hover:text-[#F9F9F9] cursor-pointer  duration-300 ease-in`}
        >
          <GlobeIcon />
          uz
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          `border-[1px] border-[#006aff] lg:py-[12px] lg:px-[20px] py-[9px] px-[16px] rounded-[15px]`
        )}
      >
        <ul>
          <li>Uz</li>
          <li>Eng</li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangDropDown;
