import { useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuLine } from "react-icons/ri";

import { useGlobalContext } from '../providers/GlobalProvider';

import moonIcon from "../assets/icons/moon.svg";
import sunIcon from "../assets/icons/sun.svg";
import mainLogo from "../assets/icons/main-logo.png";

export default function Header() {

    const { darkMode, toggleColorMode, showNav, showNavFunc } = useGlobalContext();
    console.log("darkMode: ", darkMode);
    const [colorMode, setColorMode] = useState(false); // false: dark mode, true: light mode

    const switchColorTheme = (_dark) => {
        toggleColorMode(_dark);
        // setColorMode(_dark);
        // console.log("switchColorTheme: ", _dark);

        if (_dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    return (
        <div className='dark:bg-[#171717] bg-[#FCFCFC] flex justify-between xs:justify-between items-center xs:px-4 px-8 py-4'>
            <div className="flex flex-row items-center gap-2">
                <img src={mainLogo} width="48px" className="rounded-full" />
                <p className="font-dm text-[30px] font-bold text-black dark:text-white">Habibearz</p>
            </div>
            <div className="xs:hidden flex flex-row gap-8">
                <div className="font-dm text-[14px] font-bold text-black dark:text-white">Home</div>
                <div className="font-dm text-[14px] font-bold text-black dark:text-white">DeFi</div>
                <div className="font-dm text-[14px] font-bold text-black dark:text-white">Data</div>
            </div>
            <div className="flex flex-row items-center xs:gap-2 gap-12">
                <div className={`flex justify-center w-12 h-12 rounded-full items-center ${darkMode ? "bg-[#232323] border border-[#EDECEC]" : "bg-white"}`}>
                    <img src={darkMode ? sunIcon : moonIcon} width="24px" height="24px" onClick={() => { switchColorTheme(!darkMode) }} />
                </div>
                <div className="xs:hidden flex bg-[#F6CE0E] dark:bg-transparent dark:border dark:border-[#F6CE0E] h-12 px-[20px] items-center rounded">
                    <p className="font-[Poppins] text-[14px ] font-black text-black dark:text-[#F6CE0E]">BUY HBEARZ</p>
                </div>
                <RiMenuLine className={`hidden xs:flex text-black dark:text-white w-6 h-6`} onClick={() => { showNavFunc(true) }} />

            </div>
        </div>
    )
}