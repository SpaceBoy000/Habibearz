import { useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuLine } from "react-icons/ri";

import { useGlobalContext } from '../providers/GlobalProvider';

import flagUSIcon from "../assets/icons/flag_us.svg";
import mainLogo from "../assets/icons/main-logo.png";

export default function Footer() {

    const { darkMode, toggleColorMode, showNav, showNavFunc } = useGlobalContext();
    console.log("darkMode: ", darkMode);
    const [colorMode, setColorMode] = useState(false); // false: dark mode, true: light mode

    return (
        <div className="pt-8 px-16">
            <div className="bg-[#979797] h-[1px]"/>
            <div className='dark:bg-[#171717] bg-[#FCFCFC] flex xs:flex-col flex-row justify-between xs:justify-between items-center pb-8 pt-8'>
                <div className="flex flex-row items-center gap-2">
                    <img src={mainLogo} width="36px" className="rounded-full" />
                    <p className="font-dm text-[24px] font-bold text-black dark:text-white">HBEARZ</p>
                </div>
                <div className="flex flex-row gap-8">
                    <div className="font-dm text-[14px] font-bold text-[#6E6E6E] dark:text-white">@2021 Paradis Smart Chain</div>
                    <div className="font-dm text-[14px] font-bold text-[#6E6E6E] dark:text-white">Privacy Policy</div>
                    <div className="font-dm text-[14px] font-bold text-[#6E6E6E] dark:text-white">Terms of Service</div>
                </div>
                <div className="flex flex-row gap-1">
                    <img src={flagUSIcon} />
                    <p className="font-[Poppins] text-[14px] font-bold text-black dark:text-[#F6CE0E]">English</p>
                </div>
            </div>
        </div>
    )
}