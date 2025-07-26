
import { useTranslation } from "react-i18next";
import { menuList } from "./navbar.config";
import { Link } from "react-router-dom";

export default function MenuBar() {
    const {t} = useTranslation()
    return (
        <div className="">
            <ul className="flex gap-[16px]">
                {
                    menuList.map(({id, linkName, slug}) => {
                        return (
                            <li key={id}>
                                <Link to={`/${slug}`} className="font-[600] text-[14px] text-[#203686] leading-[20px]">{t(`menubar.${linkName}`)}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}