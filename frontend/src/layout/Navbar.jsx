import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { RiMenuFoldLine } from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { useGlobalContext } from "../providers/GlobalProvider";
import config from "../config";

import divideImg from "../assets/images/divider.svg";

import homeIcon from "../assets/icons/house_solid.svg";
import lockIcon from "../assets/icons/lock.svg";
import databaseIcon from "../assets/icons/database_solid.svg";
import digitalOceanIcon from "../assets/icons/digitalocean.svg";
import giftIcon from "../assets/icons/gift_solid.svg";
import rocketIcon from "../assets/icons/rocket-lunch.svg";
import downIcon from "../assets/icons/small-caret-down.svg";
import upIcon from "../assets/icons/small-caret-up.svg";

import xIcon from "../assets/icons/X.svg";
import telegramIcon from "../assets/icons/telegram-old.svg";
import discordIcon from "../assets/icons/discord.svg";

import helpIcon from "../assets/icons/help.svg";

import lightIcon from "../assets/icons/light.svg";
import lightActiveIcon from "../assets/icons/light-active.svg";
import darkIcon from "../assets/icons/dark.svg";
import darkActiveIcon from "../assets/icons/dark-active.svg";


const features = [
    {
        title: 'Home',
        icon: homeIcon
    },
    {
        title: 'Launchpad',
        icon: rocketIcon,
        properties: [
            {
                title: "Presale Creator",
                url: "/presale/create"
            },
            {
                title: "Presale List",
                url: "/presale"
            },
        ]
    },
    {
        title: 'Token Manager',
        icon: digitalOceanIcon,
        properties: [
            {
                title: "Solana Token Creator",
                url: "/token/create"
            },
            {
                title: "Revoke Mint Authority",
                url: "/"
            },
            {
                title: "Burn Liquidity",
                url: "/"
            },
        ]
    },
    {
        title: 'Locker',
        icon: lockIcon,
        properties: [
            {
                title: "Create Lock",
                url: "/lock/create"
            },
            {
                title: "Token",
                url: "/lock/token"
            },
            {
                title: "Liquidity",
                url: "/lock/liquidity"
            },
        ]
    },
    {
        title: 'Airdrop Hub',
        icon: giftIcon
    },
    {
        title: 'Staking',
        icon: databaseIcon
    }
]

const socials = [
    { 
        title: 'Twitter',
        icon: xIcon,
        url: config.twitterlink
    },
    { 
        title: 'Telegram', 
        icon: telegramIcon,
        url: config.telegramlink
    },
    { 
        title: 'Discord', 
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
        <div className="xs:w-full xs:min-h-screen xs:z-20 flex">
            <div className={`relative xs:absolute min-h-full xs:z-20 border-r border-[#ffffff1a] dark:border-black nav-bar bg-[linear-gradient(127deg,_rgba(6,_11,_40,_0.74)_28.26%,_rgba(10,_14,_35,_0.71)_91.2%)] dark:bg-gradient-to-t from-white to to-white`}>
                <div className="nav-bar-panel">
                    <div className="nav-bar-panel2 relative">
                        <div className="main-logo bg-[linear-gradient(98deg,_#FFF_70.67%,_rgba(117,_122,_140,_0.00)_108.55%)] dark:bg-[linear-gradient(91deg,_#000_54.04%,_rgba(255,_255,_255,_0.00)_91.87%)]">
                            Shiva Labs
                        </div>
                        <RiMenuFoldLine className="hidden xs:flex absolute text-white dark:text-black w-6 h-6 -right-6 top-0" onClick={() => {showNavFunc(false)}}/>
                        <img src={divideImg} className="-mt-4"/>
                        <div className="control-panel">
                            <span className="title-2 text-white dark:text-black !font-normal pb-2">Product</span>
                            {
                                features.map((item, index) => {
                                    return (
                                        <>
                                            <div className="control-item cursor-pointer" key={index} onClick={() => { handleClickItem(index) }}>
                                                <div className="item-field">
                                                    <img src={item.icon} width="24px" height="24px" />
                                                    <span className="title-2 text-white dark:text-black pl-1">{item.title}</span>
                                                </div>
                                                {/* <img src={isOpen == index ? upIcon : downIcon} width="24px" height="24px" /> */}
                                                {
                                                    item.properties?.length > 0 ? 
                                                    (isOpen == index ? <FaAngleUp className="text-white dark:text-black w-4 h-4"/> : <FaAngleDown className="text-white dark:text-black w-4 h-4"/>)
                                                    : 
                                                    <></>}
                                            </div>
                                            {
                                                isOpen == index && item.properties?.length > 0 ?
                                                    <div className="flex flex-col gap-1">
                                                        {
                                                            item?.properties?.length && item?.properties?.map((child, index2) => {
                                                                return (
                                                                    <Link to={child.url} className={`child-panel cursor-pointer hover:bg-[#4628ff4d] dark:hover:bg-[#4628ff] ${isOpenChild == index2 ? "bg-[#4628ff4d] dark:bg-[#4628FF]" : "bg-transparent"}`} key={index2} onClick={() => { handleClickChildItem(index2) }}>
                                                                        <p className={`title-2 ${isOpenChild == index2 ? "text-white dark:text-white" : "text-white dark:text-black"} dark:hover:text-white !font-normal`}>{ child.title }</p>
                                                                    </Link>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="control-panel">
                            <span className="title-2 text-white dark:text-black !font-normal pb-2">Socials</span>
                            {
                                socials.map((item, index) => {
                                    return (
                                        <a className="control-item" key={index} href={item.url} target="__blank">
                                            <div className="item-field">
                                                <img src={item.icon} width="24px" height="24px" />
                                                <span className="title-2 text-white dark:text-black pl-1">{item.title}</span>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                        <div className="help-panel">
                            <div className="w-8 h-8 bg-white border rounded-xl flex justify-center">
                                <img src={helpIcon} width="24px" height="24px" />
                            </div>
                            <span className="title-2 text-white">Need help?</span>
                            <span className="source-1 text-white">Please check our docs</span>
                            <a href="/doc.pdf" className="btn-doc">
                                <p className="btn-text text-white dark:text-black">DOCUMENTATION</p>
                            </a>

                        </div>
                        <div className="color-mode">
                            <div className="color-mode-panel bg-[#01276A] dark:bg-white cursor-pointer">
                                <img src={ colorMode ? lightActiveIcon : lightIcon } width="24px" height="24px" className={`p-1 rounded-full ${colorMode ? "bg-black dark:bg-[#4628FF]" : ""}`} onClick={() => {switchColorTheme(true)}}/>
                                <img src={ colorMode ? darkIcon : darkActiveIcon } width="24px" height="24px" className={`p-1 rounded-full ${!colorMode ? "bg-black" : ""}`} onClick={() => {switchColorTheme(false)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1" onClick={() => {showNavFunc(false)}}/>
        </div>
    );
}