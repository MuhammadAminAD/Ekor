import LogoIcon from "@/components/icons/LogoIcon";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Props = {
title: string;
styleClass: string;
LogoColor: string;
}

export default function Logo({title, styleClass, LogoColor}: Props) {
    const {t} = useTranslation()
    return (
        <Link to={'/'} aria-label="Ссылка для возврата на главную страницу сайта" title="На главную страницу" className="flex no-wrap" >
            <LogoIcon LogoColor={LogoColor}/>
            <p className={`${styleClass} font-[500] text-[12px] text-[#70798E] leading-[14px] ml-[10px]`}>{t(title)}</p>
        </Link>
    )
}