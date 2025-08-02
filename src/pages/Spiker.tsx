import GeneralTabs from "@/components/spiker/GeneralTabs/GeneralTabs";
import { styles } from "@/styles/index.styles";

export default function Spiker() {
    return (
        <div className="w-full">
            <div className={`${styles.Container}`}>
               <div className="flex items-start gap-[40px] mt-[24px] border-b-2 border-[#1111110F]">
                <button className={`${styles.spikerBtn}`}>Umumiy</button>
                <button className={`${styles.spikerBtn}`}>Studentlar</button>
                <button className={`${styles.spikerBtn}`}>Kurslar</button>
                <button className={`${styles.spikerBtn}`}>Moliya</button>
                <button className={`${styles.spikerBtn}`}>Izohlar</button>
               </div>
               <GeneralTabs/>
            </div>
        </div>
    )
}
