import { styles } from "@/styles/index.style";
import Logo from "../Logo";
import MenuBar from "./MenuBar";

export default function NavbarTop() {
    return (
        <div className="w-full py-[24px]">
            <div className={`${styles.Container} flex justify-between`}>
            <Logo title='subLogo' styleClass='max-w-[148px]' LogoColor='203686'/>
            <MenuBar/>
            
            </div>    
         </div>
    )
}