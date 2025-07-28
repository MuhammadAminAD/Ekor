import { styles } from "@/styles/index.styles"
import bars from "@/assets/icons/menu.svg";

const Navbar = () => {
  return (
    <div className="w-full bg-[#F9F9F9] py-[25px]">
       <button className="w-[24px] ml-[38px] h-[24px] !bg-[transparent] cursor-pointer">
        <img src={bars} alt="" />
      </button>
     <div className={`${styles.Container}`}>

     </div>

    </div>
  )
}

export default Navbar