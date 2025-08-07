import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
export default function SelectComponent() {
    return (
        <Select>
            <SelectTrigger className={cn(`w-[95px] h-[44px] border-1 border-[#D9D9D9] rounded-[15px]`)}>
                <SelectValue placeholder="20" />
            </SelectTrigger>
            <SelectContent className={cn(`border-1 border-[#D9D9D9] rounded-[15px] bg-black  text-white`)}>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
            </SelectContent>
        </Select>
    )
}
