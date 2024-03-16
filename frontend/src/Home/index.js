import { useState } from "react";

import bannerImg from "../assets/images/banner.png";

import telIcon from "../assets/icons/socials/telegram.png";
import xIcon from "../assets/icons/socials/twitter.png";
import discordIcon from "../assets/icons/socials/discord.png";
import insIcon from "../assets/icons/socials/instagram.png";

import characImg from "../assets/images/character.png";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import img5 from "../assets/images/image5.png";
import img6 from "../assets/images/image6.png";
import img7 from "../assets/images/image7.png";

import qrcodeImg from "../assets/images/qrcode.png";
import toTheMoonImg from "../assets/images/to-the-moon.png";
import stakeTableImg from "../assets/images/stake_table.png";

import cityImg from "../assets/images/city.png";
import city1Img from "../assets/images/city1.png";
import city2Img from "../assets/images/city2.png";
import city3Img from "../assets/images/city3.png";

import phoneImg from "../assets/images/phone.png";

import appStoreImg from "../assets/images/app_store.svg";
import googlePlayImg from "../assets/images/google_play.svg";

import partnership1Img from "../assets/images/partnership1.png";
import partnership2Img from "../assets/images/partnership2.png";
import partnership3Img from "../assets/images/partnership3.png";
import partnership4Img from "../assets/images/partnership4.png";

import tokenomicsImg from "../assets/images/tokenomics.png";

import checkedIcon from "../assets/icons/check.svg";
import failIcon from "../assets/icons/fail.svg";

import mark1Icon from "../assets/icons/mark1.svg";
import mark2Icon from "../assets/icons/mark2.svg";
import mark3Icon from "../assets/icons/mark3.svg";
import mark4Icon from "../assets/icons/mark4.svg";

import arrowRightIcon from "../assets/icons/arrow-right.svg";

import xImg from "../assets/images/x-image.svg";

import chartImg from "../assets/images/chart.png";

import noMarkIcon from "../assets/icons/no-mark.png";

import config from "../config";
import { toast } from "react-toastify";

const socials = [
    { title: "Telegram", icon: telIcon, content: "Chat in real time with the Eden community", link: config.telegramlink },
    { title: "Twitter", icon: xIcon, content: "Chat in real time with the Eden community", link: config.twitterlink },
    { title: "Discord", icon: discordIcon, content: "Chat in real time with the Eden community", link: config.discordlink },
    { title: "Instagram", icon: insIcon, content: "Chat in real time with the Eden community", link: config.instagramLink },
]

const roadmaps = [
    {
        title: "First steps",
        icon: mark1Icon,
        contents: [
            {
                name: 'Develop the Coin',
                icon: checkedIcon
            },
            {
                name: 'Launch the HBEARZ Website',
                icon: checkedIcon
            },
            {
                name: 'Release the White Paper',
                icon: checkedIcon
            },
            {
                name: 'Create the Social Media Accounts',
                icon: checkedIcon
            },
            {
                name: 'Socials created',
                icon: checkedIcon
            },
            {
                name: 'Conduct a Private Sale (Locked)',
                icon: checkedIcon
            },
            {
                name: '1000 Telegram members',
                icon: checkedIcon
            }
        ]
    },
    {
        title: "Development stages",
        icon: mark2Icon,
        contents: [
            {
                name: '️CoinMarketCap',
                icon: checkedIcon
            },
            {
                name: 'CoinGecko',
                icon: checkedIcon
            },
            {
                name: 'Techrate Audit',
                icon: checkedIcon
            },
            {
                name: 'Certik Audit',
                icon: failIcon
            },
            {
                name: 'Influencer marketing push',
                icon: failIcon
            },
            {
                name: 'Baby Cake Dashboard (earnings tracking)',
                icon: failIcon
            },
            {
                name: '5000 Telegram members',
                icon: checkedIcon
            }
        ]
    },
    {
        title: "Learning to speak",
        icon: mark3Icon,
        contents: [
            {
                name: 'Influencers',
                icon: checkedIcon
            },
            {
                name: 'PooCoin Ads',
                icon: checkedIcon
            },
            {
                name: 'DexTools Trending',
                icon: checkedIcon
            },
            {
                name: 'Website Revamp',
                icon: checkedIcon
            },
            {
                name: 'Community Building',
                icon: checkedIcon
            },
            {
                name: 'Massive Cake pay-outs',
                icon: checkedIcon
            },
            {
                name: '10000 Telegram members',
                icon: checkedIcon
            }
        ]
    },
    {
        title: "Growing up",
        icon: mark4Icon,
        contents: [
            {
                name: 'Baby Cake Swap🤫',
                icon: failIcon
            },
            {
                name: 'Baby Cake merch shop',
                icon: failIcon
            },
            {
                name: 'Baby Cake AR gaming app',
                icon: failIcon
            },
            {
                name: 'Building NFT Platform',
                icon: failIcon
            },
            {
                name: 'Massive influencer partnerships',
                icon: failIcon
            },
            {
                name: '20,000 Telegram members',
                icon: checkedIcon
            }
        ]
    },
]

const tokenomics = [
    { title: "Marketing", amount: "5%" },
    { title: "Public Sale", amount: "10%" },
    { title: "Liquidity Pools", amount: "10%" },
    { title: "Burn Allotment", amount: "25%" },
    { title: "Staking Allotment", amount: "50%" }
]

export default function Home() {

    const [activeTab, setActiveTab] = useState(1);

    const handleChangeTab = (value) => {
        setActiveTab(value);
    }

    const handleClickCopy = (value) => {
        navigator.clipboard.writeText(value);
        toast.success('Successfully copied!');
    }

    return (
        <div className="">
            <div id="banner" className="flex lg:flex-row flex-col xs:p-4 px-16 pt-8">
                <div className='flex flex-col gap-4 text-center justify-center lg:text-left w-full lg:w-1/2'>
                    <div className="flex gap-2 items-center xs:self-center">
                        <div className="bg-[#F6CE0E] w-7 lg:w-0 h-[2px]" />
                        <p className="text-[#F6CE0E] uppercase xs:text-[12px] text-[16px] font-bold justify-center lg:justify-start">welcome to HabibearZ</p>
                        <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    </div>
                    <p className="text-[56px] xs:text-[36px] font-bold xs:leading-[45px] leading-[64px] text-black dark:text-white">Meet HBEARZ, Not All bears are bad! Some Have Hearts.</p>
                    <p className="text-[16px] font-normal text-black dark:text-white">
                        A Hyper Deflationary DeFi Meme coin which gives you access to the Habibears Metaverse.
                        <br />
                        <br />
                        Come along the journey and be part of this self-sustaining ecosystem that drives its value to a sustainable model.
                    </p>
                    <div className="bg-[#F6CE0E] dark:bg-transparent dark:border dark:border-[#F6CE0E] h-12 px-[15px] flex items-center rounded w-fit self-center lg:self-start cursor-pointer hover:-translate-y-1">
                        <p className="font-[Poppins] text-[14px] font-bold text-black dark:text-[#F6CE0E]">Download Whitepaper</p>
                    </div>
                </div>
                <div className="max-w-full lg:max-w-[50%] flex justify-center">
                    <img src={bannerImg} />
                </div>
            </div>
            <div id="social" className="flex xs:flex-col flex-row text-left xs:p-4 p-16 gap-4">
                <div className="xs:hidden flex flex-col relative items-start bg-[#FFFBE7] rounded-lg p-4">
                    <p className="text-[24px] font-bold text-black pr-[132px]">Join our<br />community</p>
                    <p className="text-[#F6CE0E] text-[14px] font-bold flex">Join now<img src={arrowRightIcon}/></p>
                    <img src={characImg} width="132px" className="absolute right-0 bottom-0" />
                </div>
                <div className="flex flex-wrap flex-row gap-4 justify-center">
                    {
                        socials.map((item, index) => {
                            return (
                                <a href={item.link} target="_blank" alt={item.title} className="cursor-pointer hover:-translate-y-2 flex flex-col items-center justify-center w-[132px] h-[132px] p-4 border border-[#494949] rounded-lg" key={index}>
                                    <img src={item.icon} width="60px" />
                                    <p className="text-[16px] font-bold text-black dark:text-white">{item.title}</p>
                                </a>
                            );
                        })
                    }
                </div>
            </div>
            <div id="body" className="pt-8 xs:px-4 p-16">
                <div className="flex gap-2 items-center justify-center lg:justify-start py-4">
                    <div className="bg-[#F6CE0E] w-7 lg:w-0 h-[2px]" />
                    <p className="text-[#F6CE0E] uppercase xs:text-[12px] text-[16px] font-bold">How HBEARZ DeFi 2.0 Works</p>
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                </div>
                <div className="text-center lg:text-left w-full lg:w-1/2  flex flex-col gap-4">
                    <p className="xs:text-[24px] text-[36px] font-bold text-black dark:text-white">Receive sustainable rewards inside our DeFi platform as we build the Habibi Metaverse</p>
                    <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white">In a evolution of DeFi and Metaverse platforms HBEARZ has the opportunity to participate in not only token rewards, but the rewards of the metaverses revenue</p>
                </div>
                <div className="flex xs:flex-col flex-row gap-8 pt-16">
                    <div className="w-full flex xs:flex-col flex-row items-center gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">1</div>
                        <div className="xs:text-center text-left flex flex-col gap-1">
                            <p className="text-[18px] font-bold text-[#969696] dark:text-[#FED201]">Enter the Habibiverz Ecosystem</p>
                            <p className="xs:text-[24px] text-[30px] font-bold text-black dark:text-white">Buy HBEARZ Token</p>
                            <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white">Purchase the HBEARZ token from a launchpad sale or from a DEX. The CRYPTO coin can only be acquired through staking HBEARZ</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img1} />
                    </div>
                </div>
                <div className="flex xs:flex-col flex-row-reverse gap-8 pt-16">
                    <div className="w-full flex  xs:flex-col flex-row items-center gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">2</div>
                        <div className="xs:text-center text-left flex flex-col gap-1">
                            <p className="text-[18px] font-bold text-[#969696] dark:text-[#FED201]">Recieve Tokens Rewards</p>
                            <p className="xs:text-[24px] text-[30px] font-bold text-black dark:text-white">Stake the HBEARZ Token</p>
                            <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white">Stake the HBEARZ token and recieve HBEARZ and the Habibiverz (CRYPTO) Token as a reward</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img2} />
                    </div>
                </div>
                <div className="flex xs:flex-col flex-row gap-8 pt-16">
                    <div className="w-full flex  xs:flex-col flex-row items-center gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">3</div>
                        <div className="xs:text-center text-left flex flex-col gap-1">
                            <p className="text-[18px] font-bold text-[#969696] dark:text-[#FED201]">Earn Revenue</p>
                            <p className="xs:text-[24px] text-[30px] font-bold text-black dark:text-white">HODL for 25% of HABIBIVERZ Profits</p>
                            <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white">Each quarter profits from the Habibiverz Metaverse, including HBEARZCoin, Habibiverz NFTs and Elders of the Realms will be deposited into  CRYPTO holders wallets</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img3} />
                    </div>
                </div>
                <div className="flex xs:flex-col flex-row-reverse gap-8 pt-16">
                    <div className="w-full flex  xs:flex-col flex-row items-center gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">4</div>
                        <div className="xs:text-center text-left flex flex-col gap-1">
                            <p className="text-[18px] font-bold text-[#969696] dark:text-[#FED201]">Compound Interest</p>
                            <p className="xs:text-[24px] text-[30px] font-bold text-black dark:text-white">Exchange LP Tokens for More Tokens</p>
                            <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white">Swap your HBEARZ and CRYPTO LP tokens for discounted tokens, then compound your staking or bonds to recieve more </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img4} />
                    </div>
                </div>
                <div className="flex xs:flex-col flex-row gap-8 pt-16">
                    <div className="w-full flex  xs:flex-col flex-row items-center gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">5</div>
                        <div className="xs:text-center text-left flex flex-col gap-1">
                            <p className="text-[18px] font-bold text-[#969696] dark:text-[#FED201]">Treasury Growth</p>
                            <p className="xs:text-[24px] text-[30px] font-bold text-black dark:text-white">Increased HBEARZ & CRYPTO Value</p>
                            <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white">The inflow of LP tokens are used to back HBEARZ and CRYPTO tokens, stabilise the price of the tokens and regulate the APY. </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img5} />
                    </div>
                </div>
                <div className="flex xs:flex-col flex-row-reverse gap-8 pt-16">
                    <div className="w-full flex  xs:flex-col flex-row items-center gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">6</div>
                        <div className="xs:text-center text-left flex flex-col gap-1">
                            <p className="text-[18px] font-bold text-[#969696] dark:text-[#FED201]">Farm for ETH</p>
                            <p className="xs:text-[24px] text-[30px] font-bold text-black dark:text-white">Farm the HBEARZ & CRYPTO Pair</p>
                            <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white">Deposit the HBEARZ and Habibiverz Tokens on the Paradis DEX to recieve upto a 5% monthly reward in Etheruem (ETH)</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img6} />
                    </div>
                </div>
                <div className="flex xs:flex-col flex-row gap-8 pt-16">
                    <div className="w-full flex  xs:flex-col flex-row items-center gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">7</div>
                        <div className="xs:text-center text-left flex flex-col gap-1">
                            <p className="text-[18px] font-bold text-[#969696] dark:text-[#FED201]">HODL and Profit from the Ecosystem</p>
                            <p className="xs:text-[24px] text-[30px] font-bold text-black dark:text-white">Stable Token, Revenue and Rewards</p>
                            <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white">LP fees, two treasury backed tokens and the Habibiverz Metaverse provides the foundation for stable value, long term vision and a communal reward system</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img7} />
                    </div>
                </div>
            </div>
            <div id="platform" className="bg-[#1C2635] xs:p-8 p-16">
                <div className="flex xs:flex-col flex-row gap-8">
                    <div className="w-full">
                        <div className="flex gap-2 items-center py-4 xs:justify-center justify-left">
                            <div className="bg-[#F6CE0E] xs:w-7 w-0 h-[2px]" />
                            <p className="text-[#F6CE0E] uppercase xs:text-[12px] text-[16px] font-bold">HBEARZ defi 2.0 platform</p>
                            <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                        </div>
                        <div className="flex flex-col">
                            <p className="xs:text-center text-left xs:text-[24px] text-[36px] font-bold text-white">Hyper-deflationary tokenomics to balance the HBEARZ DeFi Ecosystem</p>
                            <p className="xs:text-center text-left xs:text-[12px] text-[18px] font-normal text-white pb-4 pt-4">
                                BBB is HBEARZ Coin’s inbuilt functionality that allows it to have aggressively deflationary tokenomics to halve and burn tokens from the Burn (BBB) address.
                            </p>
                            <p className="xs:text-center text-left xs:text-[12px] text-[18px] font-normal text-white max-w-[1052px]">
                                Quarterly burning will be implemented until half of the total supply of tokens are removed from existence within four years.
                            </p>
                        </div>
                        <div className="flex xs:flex-col flex-row justify-left gap-8 pt-8">
                            <div className="text-left bg-white rounded-lg p-8 w-full">
                                <p className="text-[18px] font-bold pb-2">Freedom to Withdraw your stake at any time</p>
                                <p className="text-[14px] font-normal">Although our staking platform has vesting periods for APY maturity, you can withdraw your stake or rewards in HBEARZ or CRYPTO at any time, at your convenience. But make sure to come back!</p>
                            </div>
                            <div className="text-left bg-white rounded-lg p-8 w-full">
                                <p className="text-[18px] font-bold pb-2">Recieve the Revenue & Governance Coin</p>
                                <p className="text-[14px] font-normal">Stake HBEARZ and receive handsome rates on Habibiverz (CRYPTO). Our governance token allows you to Vote on the direction of the project, contribute to the Habibiverz adventures and have first access future NFT projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div>
                            <img src={toTheMoonImg} className="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center pt-8">
                    <p className="xs:text-[24px] text-[36px] font-bold leading-[64px] text-white">HBEARZ DeFi 2.0 Platform</p>
                    <p className="text-[18px] font-normal text-white xs:text-center text-left xs:w-full w-4/5">
                        BBB is HBEARZ Coin’s inbuilt functionality that allows it to have aggressively deflationary tokenomics to halve and burn tokens from the Burn (BBB) address.
                        <br /><br />
                        Quarterly burning will be implemented until half of the total supply of tokens are removed from existence within four years.Quarterly burning will be implemented until half of the total supply of tokens are removed from existence within four years.
                        <br /><br />
                        Quarterly burning will be implemented until half of the total supply of tokens are removed from existence within four years.
                    </p>
                </div>
                <div className="flex justify-center pt-8">
                    <div className="bg-[#0B0B0B] border-2 rounded-3xl w-fit p-8">
                        <img src={stakeTableImg} />
                    </div>
                </div>
            </div>
            <div id="welcome" className="xs:p-8 p-16">
                <div className="flex gap-2 items-center py-4 justify-center">
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    <p className="text-[#F6CE0E] uppercase xs:text-[12px] text-[16px] font-bold">Welcome to Habibiverz</p>
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                    <p className="xs:text-[24px] text-[36px] font-bold text-black dark:text-white">Enter the World of Habibiverz</p>
                    <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white max-w-[1052px]">the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
                </div>
                <div className="flex justify-center py-16">
                    <img src={cityImg} />
                </div>
                <div className="flex xs:flex-col flex-row justify-between gap-8">
                    <div className="relative max-w-[380px]">
                        <img src={city1Img} />
                        <p className="absolute bottom-[-20px] left-[calc(50%-100px)] text-[20px] font-bold py-2 px-8 bg-white dark:bg-[#303030] rounded-xl text-black dark:text-white">Buy the NFTs</p>
                    </div>
                    <div className="relative max-w-[380px]">
                        <img src={city2Img} />
                        <p className="absolute bottom-[-20px] left-[calc(50%-125px)] text-[20px] font-bold py-2 px-8 bg-white dark:bg-[#303030] rounded-xl text-black dark:text-white">Meet the Characters</p>
                    </div>
                    <div className="relative max-w-[380px]">
                        <img src={city3Img} />
                        <p className="absolute bottom-[-20px] left-[calc(50%-140px)] text-[20px] font-bold py-2 px-8 bg-white dark:bg-[#303030] rounded-xl text-black dark:text-white">Pre-order the Comics</p>
                    </div>
                </div>

                <div className="py-8 flex justify-center">
                    <p className="font-[Poppins] bg-[#11B0C8] w-fit py-2 xs:px-4 px-16 rounded-3xl text-white">Explore Crytoloria’s Metaverse</p>
                </div>

                <div className="relative flex xs:flex-col gap-8 flex-row pt-16">
                    <div className="w-full flex justify-center">
                        <img src={phoneImg} />
                    </div>
                    <div className='flex flex-col gap-4 xs:text-center text-left w-full'>
                        <div className="flex gap-2 items-center xs:justify-center justify-start">
                            <div className="bg-[#F6CE0E] xs:w-7 w-0 h-[2px]" />
                            <p className="text-[#F6CE0E] uppercase text-[16px] font-bold">Game</p>
                            <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                        </div>
                        <p className="xs:text-[24px] text-[36px] font-bold text-black dark:text-white xs:leading-[42px] leading-[64px]">Play our game like Vortex</p>
                        <p className="xs:text-[12px] text-[18px] font-normal text-black dark:text-white">
                            Take a Journey with HBEARZ and other characters from the Habibiverz Metaverse as they travel through dangerous terrain into safer worlds
                            <br /><br />
                            With 50,000 HBEARZ coins up for grab each day. Play the game and earn points which can be converted into real crypto, directly to your wallet.
                            <br /><br />
                            Beat the Vortex and win crypto! On both iOS and Android platforms
                        </p>
                        <div className="flex items-center xs:justify-center justify-start flex-wrap gap-8 xs:pt-4 pt-16">
                            <p className="text-[18px] font-bold text-black dark:text-white">Available on:</p>
                            <div className="flex gap-4 justify-center">
                                <img src={googlePlayImg} className="cursor-pointer hover:-translate-y-1"/>
                                <img src={appStoreImg} className="cursor-pointer hover:-translate-y-1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="partnership" className="xs:p-8 p-16 pt-0">
                <div className="flex gap-2 items-center py-4 justify-center">
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    <p className="text-[#F6CE0E] uppercase text-[16px] font-bold">Charity Donations</p>
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-4">
                    <p className="xs:text-[24px] text-[36px] font-bold text-black dark:text-white">A Partnership with the Million Gardens Movement, for every $10 of Coins bought, a percentage helps to plant a tree</p>
                    <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white max-w-[1052px]">We want to help rejuvenate the earth’s trees before we jet off into the Metaverse and explore the worlds of Habibiverz. Help us contribute to making this world a safer place, before we save other planets!</p>
                </div>
                <div className="flex xs:flex-col flex-row xs:items-center justify-between w-full gap-8 py-8">
                    <img src={partnership1Img} width="320px" />
                    <img src={partnership2Img} width="320px" />
                    <img src={partnership3Img} width="320px" />
                </div>
                <div className="flex justify-center">
                    <img src={partnership4Img} />
                </div>
            </div>
            <div id="tokenomics" className="bg-[#1C2635] xs:p-8 p-16">
                <div className="flex gap-2 items-center py-4 justify-center">
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    <p className="text-[#F6CE0E] uppercase text-[16px] font-bold">Tokenomics</p>
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                    <p className="xs:text-[24px] text-[36px] font-bold text-white max-w-[780px] leading-normal">Some people shoot for the moon, but HBEARZ just wants her own Universe</p>
                    <p className="xs:text-[14px] text-[18px] font-normal text-white max-w-[1052px]">Our Comprehensive Meme Coin, DeFi Platform and Metaverse products have provided a sustainable tokenomic plan for short term growth and long term sustainability. Read 3 main ways we do this</p>
                </div>
                <div className="flex xs:flex-col flex-row xs:gap-4 gap-16 pt-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col text-left bg-white p-8 gap-2 rounded-lg w-full">
                            <p className="text-[18px] font-bold">HODL, Stake and Rewards</p>
                            <p className="text-[14px] font-normal">HBEARZ is designed for community ownership and its the only meme coin that allows user ownership via staking to hodl to partake in ever increasing rewards schemes. The longer you hold the more rewards you earn.</p>
                        </div>
                        <div className="flex flex-col text-left bg-white p-8 gap-2 rounded-lg w-full">
                            <p className="text-[18px] font-bold">Sustainable price Stabilisation</p>
                            <p className="text-[14px] font-normal">HBEARZ is designed for community ownership and its the only meme coin that allows user ownership via staking to hodl to partake in ever increasing rewards schemes. The longer you hold the more rewards you earn.</p>
                        </div>
                        <div className="flex flex-col text-left bg-white p-8 gap-2 rounded-lg w-full">
                            <p className="text-[18px] font-bold">NFT and Metaverse Gaming Ecosystem</p>
                            <p className="text-[14px] font-normal">HBEARZ is designed for community ownership and its the only meme coin that allows user ownership via staking to hodl to partake in ever increasing rewards schemes. The longer you hold the more rewards you earn.</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center">
                        <img src={tokenomicsImg} />
                    </div>
                </div>
            </div>
            <div className="xs:p-8 p-16">
                <div id="how-to-buy">
                    <div className="flex gap-2 items-center py-4 justify-center">
                        <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                        <p className="text-[#F6CE0E] uppercase text-[16px] font-bold">How to buy</p>
                        <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center gap-4">
                        <p className="xs:text-[24px] text-[36px] font-bold text-black dark:text-white max-w-[1052px] leading-10">Want to buy HBEARZ Coin!</p>
                        <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white max-w-[1052px]">the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
                    </div>
                    <div className="py-8">
                        <div className="flex justify-between xs:gap-4 gap-8">
                            <p className={`"text-center cursor-pointer text-[18px] font-bold w-full ${activeTab == 1 ? "border-b-2 border-[#F6CE0E] text-[#F6CE0E]" : "text-[#A4A0B8]"}`} onClick={() => { handleChangeTab(1) }}>Step 1</p>
                            <p className={`"text-center cursor-pointer text-[18px] font-bold w-full ${activeTab == 2 ? "border-b-2 border-[#F6CE0E] text-[#F6CE0E]" : "text-[#A4A0B8]"}`} onClick={() => { handleChangeTab(2) }}>Step 2</p>
                            <p className={`"text-center cursor-pointer text-[18px] font-bold w-full ${activeTab == 3 ? "border-b-2 border-[#F6CE0E] text-[#F6CE0E]" : "text-[#A4A0B8]"}`} onClick={() => { handleChangeTab(3) }}>Step 3</p>
                            <p className={`"text-center cursor-pointer text-[18px] font-bold w-full ${activeTab == 4 ? "border-b-2 border-[#F6CE0E] text-[#F6CE0E]" : "text-[#A4A0B8]"}`} onClick={() => { handleChangeTab(4) }}>Step 4</p>
                        </div>
                        {
                            activeTab == 1 &&
                            <div className="flex py-8 items-start gap-2 rounded-lg">
                                <img src={noMarkIcon} width="50px" height="50px" className="!w-12 !h-12" />

                                <div className="text-left">
                                    <p className="text-[18px] font-bold text-black dark:text-white">Create a MetaMask Wallet</p>
                                    <p className="text-[14px] font-normal text-black dark:text-white">EdenSwap token is available on the Ethereum blockchain. MetaMask is a third party ERC20 (Ethereum) browser wallet, and the very best at that! On Google Chrome, visit metamask.io to download the extension and set up a wallet. On mobile? Get MetaMask's app for iPhone or Android.</p>
                                </div>
                            </div>
                        }
                        {
                            activeTab == 2 &&
                            <div className="flex p-8 items-start gap-2 rounded-lg h-16">

                            </div>
                        }
                        {
                            activeTab == 3 &&
                            <div className="flex p-8 items-start gap-2 rounded-lg h-16">

                            </div>
                        }
                        {
                            activeTab == 4 &&
                            <div className="flex p-8 items-start gap-2 rounded-lg h-16">

                            </div>
                        }
                    </div>
                </div>
                <div id="token-allocation">
                    <div className="flex gap-2 items-center py-4 justify-center">
                        <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                        <p className="text-[#F6CE0E] uppercase xs:text-[12px] text-[16px] font-bold">HBEARZ TOKEN ALLOCATION</p>
                        <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center gap-4">
                        <p className="xs:text-[24px] text-[36px] font-bold text-black dark:text-white max-w-[1052px] leading-10">Our DeFi Platform and Tokenomics strategy provide the foundation for a Strong and Lively Ecosystem</p>
                        <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white max-w-[1052px]">We have developed Tokenomics as a launchpad to the Habibiverz Ecosystem, providing safety through burning, growth through DeFi and Ownership with access to the upcoming products in the Habibiverz Metaverse.</p>
                    </div>
                    <div className="flex xs:flex-col flex-row pt-8">
                        <div className="xs:w-full w-3/5">
                            <div className="flex xs:flex-col flex-row gap-8 justify-end">
                                <p className="text-[22px] font-bold bg-[#FFFBE7] rounded-lg py-4 px-8">ETH Total Supply<br /> 1,000,000,000,000</p>
                                <p className="text-[22px] font-bold bg-[#FFFBE7] rounded-lg py-4 px-8">Burn Allocation<br /> 250,000,000,000</p>
                            </div>
                            <div className="flex max-w-[650px] xs:flex-col flex-wrap">
                                {
                                    tokenomics.map((item, index) => {
                                        return (
                                            <div className="flex xs:p-4 p-8 gap-4 xs:w-full w-[300px]">
                                                <p className="text-[16px] font-bold text-black dark:text-white">{item.amount}</p>
                                                <p className="text-[16px] font-bold text-black dark:text-white">{item.title}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="xs:w-full w-2/5">
                            <img src={chartImg} />
                        </div>
                    </div>
                </div>
                <div id="social-media" className="flex xs:flex-col flex-row gap-8 xs:p-0 p-8">
                    <div className="w-full text-left">
                        <div className="flex gap-2 items-center">
                            <p className="text-[#F6CE0E] uppercase xs:text-[12px] text-[16px] font-bold">SOCIAL MEDIA REACH</p>
                            <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                        </div>
                        <p className="xs:text-[24px] text-[36px] font-bold text-black dark:text-white py-8">Our 6 Month Goal</p>
                        <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white">
                            We want HBEARZ to be a viral movement that adds value to people.
                            <br /><br />
                            Whether you want to follow HBEARZ's adventure throughout Habibiverz, want to help shape the story or just make money from our Ecosystem - it's up to you!
                        </p>
                    </div>
                    <div className="w-full bg-[#55ACEE] flex flex-col justify-between gap-8 rounded-lg xs:p-8 p-16">
                        <img src={xImg} className="w-[60px]"/>
                        <p className="xs:text-[44px] text-[48px] text-left font-bold text-white dark:text-black">50,000+</p>
                        <p className="text-[24px] text-left font-bold text-white dark:text-black">Follow us on Twitter #HBEARZOnlyFans</p>
                    </div>
                    <div className="w-full flex flex-col gap-8">
                        <div className="bg-[#F6CE0E] p-8 rounded-lg">
                            <p className="xs:text-[44px] text-[48px] text-left font-bold text-white dark:text-black">100,000+</p>
                            <p className="text-[24px] text-left font-bold text-white dark:text-black">Proud HBEARZ Holders</p>
                        </div>
                        <div className="bg-[#8EAD5A] p-8 rounded-lg">
                            <p className="xs:text-[44px] text-[48px] text-left font-bold text-white dark:text-black">500,000 +</p>
                            <p className="text-[24px] text-left font-bold text-white dark:text-black">People reached through Social Influencers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="roadmap" className="bg-[#1C2635] xs:p-8 p-16">
                <div className="flex gap-2 items-center py-4 justify-center">
                    <p className="text-white text-[36px] font-bold">Roadmap</p>
                </div>

                <div className="flex xs:flex-col flex-row gap-8 pt-8">
                    {
                        roadmaps.map((item, index) => {
                            return (
                                <div className="w-full">
                                    <div>
                                        <img src={item.icon} width="48px" height="48px" />
                                        <p className="text-left text-white text-[20px] font-bold py-4">{item.title}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {
                                            item.contents.map((child, index2) => {
                                                return (
                                                    <div className="flex bg-white rounded-lg p-2 gap-2">
                                                        <img src={child.icon} width="24px" height="24px" />
                                                        <p className="text-[16px] font-bold text-left">{child.name}</p>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <p className="text-[18px] text-white dark:text-black font-bold pt-16">More to be announced 🐶</p>
            </div>
            <div id="donation" className="relative flex xs:flex-col flex-row xs:p-8 p-16">
                <div className='flex flex-col gap-4 xs:text-center text-left w-full'>
                    <div className="flex gap-2 items-center xs:justify-center justify-start">
                        <div className="bg-[#F6CE0E] xs:w-7 w-0 h-[2px]" />
                        <p className="text-[#F6CE0E] uppercase text-[16px] font-bold">Donatioin</p>
                        <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    </div>
                    <p className="xs:text-[24px] text-[36px] font-bold text-black dark:text-white leading-[64px]">Feel like donating?</p>
                    <p className="xs:text-[14px] text-[18px] font-normal text-black dark:text-white">
                        As a community token HBEARZ depends on its generous members to support its heroic adventures of bringing hope and help to the hopeless and helpless.
                        <br /><br />
                        Feel free to donate to the official ERC 20 donation wallet
                        <br /><br />
                        <span className="break-words cursor-pointer hover:text-[#F6CE0E]" onClick={() => handleClickCopy(config.donateAdr)}>{ config.donateAdr }</span>
                        <br /><br />
                        <span className="font-bold">Accepted</span>: Any ERC20 token
                        <br />
                        <span className="font-bold">Preferred</span>: $ETH, $USDC, $HBEARZ
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <img src={qrcodeImg} />
                </div>
                <img src={characImg} width="243px" className="xs:relative absolute bottom-4 left-[calc(50%-120px)]" />
            </div>
            <div id="community" className="bg-[#1C2635] xs:p-8 p-16">
                <div className="flex gap-2 items-center py-4 justify-center">
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    <p className="text-[#F6CE0E] uppercase xs:text-[12px] text-[16px] font-bold">Community</p>
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                    <p className="xs:text-[24px] text-[36px] font-bold text-white ">Join Our Community</p>
                    <p className="xs:text-[14px] text-[20px] font-bold text-white  pb-4">100,000+ Twitter Followers ● 100,000+ Telegram Members</p>
                    <p className="xs:text-[12px] text-[18px] font-normal text-white  max-w-[1052px]">Extremely active community that loves our mission. Our telegram channel is filled with community members 24/7 that would love to help you. Do not trust random messages of people claiming to be “support” or ever give out your wallet info to anyone.</p>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-8 pt-8">
                    {
                        socials.map((item, index) => {
                            return (
                                <a href={item.link} target="_blank" className="flex bg-white p-8 items-center gap-2 w-[370px] rounded-lg cursor-pointer hover:-translate-y-2">
                                    <img src={item.icon} width="50px" height="50px" className="!w-12 !h-12" />
                                    <div className="text-left">
                                        <p className="text-[18px] font-bold">{item.title}</p>
                                        <p className="text-[14px] font-normal">{item.content}</p>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}