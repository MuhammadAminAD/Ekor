import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import userLogo from "@/assets/icons/user.svg";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { userTabs } from "@/constants/index.constanta";
import walletIcon from "@/assets/icons/walletIcons.svg";
import { removeToken } from "@/features/TokenSlice";
import { useNavigate } from "react-router-dom";
const UserInfo = () => {
  const accessToken = useSelector((state: RootState) => state.TokenSlice.token.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger>
        {accessToken && (
          <button className="cursor-pointer">
            <img src={userLogo} alt="" />
          </button>
        )}
      </SheetTrigger>

      <SheetContent
        className={cn(
          `!max-w-[352px] rounded-[15px] border-none bg-white py-[32px] px-[30px] `
        )}
      >
        <div className="flex items-center gap-[20px]">
          <img src={userLogo} alt="" />
          <h2 className="font-medium text-[#1C1C1C] text-[20px] leading-[100%] ">
            Akbaraliyev To'xtaMurod
            <span className="block font-medium text-[14px] text-[grey] mt-[5px] ">
              +998901234567
            </span>
          </h2>
        </div>
        <div className="border-t-[1px] border-b-[1px] border-[#D9D9D9] py-[15px] mb-[15px] ">
          <h4 className="text-[#999999] text-[16px] leading-[100%] mb-[10px] font-medium ">
            Mening hisobim
          </h4>
          <div className="flex justify-between items-center">
            <h3 className="text-[#1C1C1C] text-[18px] font-medium leading-[100%] ">
              15 000 000 <span className="font-[400] ">UZS</span>
            </h3>
            <img src={walletIcon} alt="" />
          </div>
        </div>
        <ul className="flex flex-col gap-[15px] ">
          {userTabs.map(({ title, subTitle }) => {
            const isLogout = title === "Profildan chiqish";
            return (
              <li
                onClick={() => {
                  if (isLogout) {
                    dispatch(removeToken());
                    navigate("/");
                  }
                }}
                className={`font-medium cursor-pointer  text-[18px] leading-[100%] ${
                  title === "Profildan chiqish"
                    ? "text-[#EF2B23] border-t-[1px] border-[#D9D9D9] pt-[15px] "
                    : "text-[#1C1C1C]"
                }
                     ${
                       title === "Mening darslarim"
                         ? "border-b-[1px] border-[#D9D9D9] pb-[15px] "
                         : ""
                     }
                    `}
                key={title}
              >
                {title}
                <span className="text-[#999999] ml-[3px] text-[14px] ">
                  {subTitle}
                </span>
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default UserInfo;
