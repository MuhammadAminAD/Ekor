import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const PostsSkeleton = () => {
  return (
    <div>
      <Skeleton
        className={cn(`h-[236px] w-full rounded-[18px] bg-[#e3e3e3]`)}
      />
      <Skeleton
        className={cn(`h-[24px] w-[50%] rounded-[18px] bg-[#e3e3e3] mt-[20px]`)}
      />
      <Skeleton
        className={cn(`h-[24px] w-[40%] rounded-[18px] bg-[#e3e3e3] mt-[20px]`)}
      />
    </div>
  );
};

export default PostsSkeleton;
