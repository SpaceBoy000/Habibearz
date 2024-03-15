import { useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuLine } from "react-icons/ri";

import { useGlobalContext } from '../providers/GlobalProvider';

import lightIcon from "../assets/icons/light.svg";
import lightActiveIcon from "../assets/icons/light-active.svg";
import darkIcon from "../assets/icons/dark.svg";
import darkActiveIcon from "../assets/icons/dark-active.svg";

export default function Header() {

    const { darkMode, toggleColorMode, showNav, showNavFunc } = useGlobalContext();
    
    const [colorMode, setColorMode] = useState(false); // false: dark mode, true: light mode

    const switchColorTheme = (_dark) => {
        toggleColorMode(_dark);
        setColorMode(_dark);
        console.log("switchColorTheme: ", _dark);

        if (_dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    return (
        <div className='header dark:bg-[#171717] bg-[#FCFCFC] flex justify-end xs:justify-between  items-center'>
            <RiMenuLine className={`hidden xs:flex text-white dark:text-black w-6 h-6`} onClick={() => { showNavFunc(true) }} />
            <div className="color-mode">
                <div className="color-mode-panel bg-[#01276A] dark:bg-white cursor-pointer">
                    <img src={colorMode ? lightActiveIcon : lightIcon} width="24px" height="24px" className={`p-1 rounded-full ${colorMode ? "bg-black dark:bg-[#4628FF]" : ""}`} onClick={() => { switchColorTheme(true) }} />
                    <img src={colorMode ? darkIcon : darkActiveIcon} width="24px" height="24px" className={`p-1 rounded-full ${!colorMode ? "bg-black" : ""}`} onClick={() => { switchColorTheme(false) }} />
                </div>
            </div>
            <p>Connect Wallet</p>
        </div>
    )
}