import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { RiMenuFoldLine } from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { useGlobalContext } from "../providers/GlobalProvider";
import config from "../config";

import telIcon from "../assets/icons/socials/telegram.png";
import xIcon from "../assets/icons/socials/twitter.png";
import discordIcon from "../assets/icons/socials/discord.png";


const socials = [
    { 
        title: 'Home',
        icon: xIcon,
        url: config.twitterlink
    },
    { 
        title: 'Stake', 
        icon: telIcon,
        url: config.telegramlink
    },
    { 
        title: 'Data', 
        icon: discordIcon,
        url: config.discordlink
    },
]

export default function Navbar() {

    const { darkMode, toggleColorMode, showNav, showNavFunc } = useGlobalContext();
    
    const [colorMode, setColorMode] = useState(false); // false: dark mode, true: light mode
    const [isOpen, setIsOpen] = useState(-1);
    const [isOpenChild, setIsOpenChild] = useState(-1);

    const handleClickItem = (index) => {
        if (index == isOpen) {
            setIsOpen(-1);
        } else {
            setIsOpen(index);
            setIsOpenChild(-1);
        }
    }
    
    const handleClickChildItem = (index) => {
        if (index == isOpenChild) {
            setIsOpenChild(-1);
        } else {
            setIsOpenChild(index);
        }
    }

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
        <div className="flex xs:w-full xs:min-h-screen xs:z-20">
            <div className={`relative xs:absolute min-h-full xs:z-20 border-r border-[#ffffff1a] dark:border-black nav-bar bg-white dark:bg-[#303030]`}>
                <div className="nav-bar-panel">
                    <div className="relative nav-bar-panel2">
                        <div className="main-logo bg-[#303030] dark:bg-white">
                            Habibearz
                        </div>
                        <RiMenuFoldLine className="absolute top-0 hidden w-6 h-6 xs:flex text-black dark:text-white -right-6" onClick={() => {showNavFunc(false)}}/>
                        <div className="control-panel">
                            {/* <span className="title-2 text-white dark:text-black !font-normal pb-2">Socials</span> */}
                            {
                                socials.map((item, index) => {
                                    return (
                                        <a className="control-item" key={index} href={item.url} target="__blank">
                                            <div className="item-field">
                                                {/* <img src={item.icon} width="24px" height="24px" /> */}
                                                <span className="pl-1 title-2 text-black dark:text-white">{item.title}</span>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
{/*            
                        <div className="color-mode">
                            <div className="color-mode-panel bg-[#01276A] dark:bg-white cursor-pointer">
                                <img src={ colorMode ? lightActiveIcon : lightIcon } width="24px" height="24px" className={`p-1 rounded-full ${colorMode ? "bg-black dark:bg-[#4628FF]" : ""}`} onClick={() => {switchColorTheme(true)}}/>
                                <img src={ colorMode ? darkIcon : darkActiveIcon } width="24px" height="24px" className={`p-1 rounded-full ${!colorMode ? "bg-black" : ""}`} onClick={() => {switchColorTheme(false)}}/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="flex-1" onClick={() => {showNavFunc(false)}}/>
        </div>
    );
}