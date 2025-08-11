import { styles } from "@/styles/index.styles";
import StatisticsBtn from "../GeneralTabs/StatisticsBtn";
import { StudentsAgeChart } from "./StudentsAgeChart";
import StudentsMap from "./StudentsMap";
import { StudentsGenderChart } from "./StudentsGenderChart";
import { StudentsDeviceChart } from "./StudentDeviceChart";
import { StudentsInterestsChart } from "./StudentsInterestsChart";
import referalLinkIcons from "@/assets/icons/linkIcons.svg"
export default function StudentsTabs() {
  return (
    <div >
      <div className="flex items-center justify-between my-[38px] ">
        <h3 className="font-black text-[28px] text-[Umumiy statistika] leading-[100%] ">
          Studentlar bo’yicha statistika
        </h3>
        <StatisticsBtn />
      </div>
      <StudentsMap />
      <div className="flex mt-[50px] flex-wrap gap-y-[50px]">
        <div className="w-full grid grid-cols-3 justify-between gap-[30px]">
          <div>
            <h3 className={`${styles.studentsTitle} mb-[30px]`}>O’quvchilar yoshi</h3>
            <StudentsAgeChart />
          </div>
          <div>
            <h3 className={`${styles.studentsTitle} mb-[30px]`}>O’quvchilar jinsi</h3>
            <StudentsGenderChart />
          </div>
          <div>
            <h3 className={`${styles.studentsTitle} mb-[30px]`}>Talaba qurilmalari grafigi</h3>
            <StudentsDeviceChart />
          </div>
        </div>
        <div className="flex justify-between gap-[30px] w-full">
          <div className="w-[70%]">
            <StudentsInterestsChart />
          </div>
          <div className="w-[385px] border-1 border-[#D9D9D9] rounded-[15px] py-[30px] px-[30px]">
            <h3 className={`${styles.studentsTitle}`}>Referrall link</h3>
            <button className="w-full bg-[#F6F6F6] rounded-[15px] py-[25px] px-[25px] flex items-center gap-[20px] my-[30px] text-[24px] font-semibold leading-[100%] text-main-blue">
              <div className={`${styles.FlexCenter} w-[50px] h-[50px] rounded-[50%] bg-[#BFDAFF]`}>
                <img src={referalLinkIcons} alt="referalLinkIcons" />
              </div>
              15 500 ta
            </button>
            <p className="font-normal text-[16px] text-[#999999] leading-[150%] ">Men yuborgan referal havoli orqali o’tgan foydalanuvchilar soni</p>
          </div>
        </div>
      </div>
    </div>
  )
}
