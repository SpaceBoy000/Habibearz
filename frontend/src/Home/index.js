import bannerImg from "../assets/images/banner.png";

import telIcon from "../assets/icons/socials/telegram.png";
import xIcon from "../assets/icons/socials/twitter.png";
import discordIcon from "../assets/icons/socials/discord.png";
import insIcon from "../assets/icons/socials/instagram.png";

import characImg from "../assets/images/character.png";
import img1 from "../assets/images/image1.png";

import qrcodeImg from "../assets/images/qrcode.png";
import toTheMoonImg from "../assets/images/to-the-moon.png";
import stakeTableImg from "../assets/images/stake_table.png";

const socials = [
    { title: "Telegram", icon: telIcon, content: "Chat in real time with the Eden community", link: "" },
    { title: "Twitter", icon: xIcon, content: "Chat in real time with the Eden community", link: "" },
    { title: "Discord", icon: discordIcon, content: "Chat in real time with the Eden community", link: "" },
    { title: "Instagram", icon: insIcon, content: "Chat in real time with the Eden community", link: "" },
]

export default function Home() {

    return (
        <div className="p-8">
            <div id="banner" className="flex">
                <div className='flex flex-col gap-4 text-left w-1/2'>
                    <div className="flex gap-2 items-center">
                        <p className="text-[#F6CE0E] uppercase text-[16px] font-bold">welcome to HabibearZ</p>
                        <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    </div>
                    <p className="text-[56px] font-bold leading-[64px]">Meet HBEARZ, Not All bears are bad! Some Have Hearts.</p>
                    <p className="text-[16px] font-normal">
                        A Hyper Deflationary DeFi Meme coin which gives you access to the Habibears Metaverse.
                        <br />
                        <br />
                        Come along the journey and be part of this self-sustaining ecosystem that drives its value to a sustainable model.
                    </p>
                    <div className="bg-[#F6CE0E] dark:bg-transparent dark:border dark:border-[#F6CE0E] h-12 px-[15px] flex items-center rounded w-fit">
                        <p className="font-[Poppins] text-[14px] font-bold text-black dark:text-[#F6CE0E]">Download Whitepaper</p>
                    </div>
                </div>
                <div>
                    <img src={bannerImg} />
                </div>
            </div>
            <div id="social" className="flex flex-row text-left">
                <div className="flex">
                    <p className="text-[24px] font-bold">Join our<br />community</p>
                    <img src={characImg} width="132px" height="104px !important" />
                </div>
                <div className="flex flex-row gap-4">
                    {
                        socials.map((item, index) => {
                            return (
                                <div className="flex flex-col items-center justify-center w-[132px] h-[132px] p-4 border border-[#494949] rounded-lg" key={index}>
                                    <img src={item.icon} width="60px" />
                                    <p className="text-[16px] font-bold">{item.title}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div id="body" className="pt-8">
                <div className="flex gap-2 items-center py-4">
                    <p className="text-[#F6CE0E] uppercase text-[16px] font-bold">How HBEARZ DeFi 2.0 Works</p>
                    <div className="bg-[#F6CE0E] w-7 h-1" />
                </div>
                <div className="text-left w-1/2 flex flex-col gap-4">
                    <p className="text-[36px] font-bold">Receive sustainable rewards inside our DeFi platform as we build the Habibi Metaverse</p>
                    <p className="text-[18px] font-normal">
                        In a evolution of DeFi and Metaverse platforms HBEARZ has the opportunity to participate in not only token rewards, but the rewards of the metaverses revenue
                    </p>
                </div>
                <div className="flex gap-8 pt-16">
                    <div className="w-full flex flex-row gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">1</div>
                        <div className="text-left flex flex-col gap-1">
                            <p className="text-[24px] font-bold text-[#969696]">Enter the Habibiverz Ecosystem</p>
                            <p className="text-[30px] font-bold">Buy HBEARZ Token</p>
                            <p className="text-[18px] font-normal">Purchase the HBEARZ token from a launchpad sale or from a DEX. The CRYPTO coin can only be acquired through staking HBEARZ</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img1} />
                    </div>
                </div>
                <div className="flex flex-row-reverse gap-8 pt-16">
                    <div className="w-full flex flex-row gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">2</div>
                        <div className="text-left flex flex-col gap-1">
                            <p className="text-[24px] font-bold text-[#969696]">Recieve Tokens Rewards</p>
                            <p className="text-[30px] font-bold">Stake the HBEARZ Token</p>
                            <p className="text-[18px] font-normal">Stake the HBEARZ token and recieve HBEARZ and the Habibiverz (CRYPTO) Token as a reward</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img1} />
                    </div>
                </div>
                <div className="flex gap-8 pt-16">
                    <div className="w-full flex flex-row gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">3</div>
                        <div className="text-left flex flex-col gap-1">
                            <p className="text-[24px] font-bold text-[#969696]">Earn Revenue</p>
                            <p className="text-[30px] font-bold">HODL for 25% of HABIBIVERZ Profits</p>
                            <p className="text-[18px] font-normal">Each quarter profits from the Habibiverz Metaverse, including HBEARZCoin, Habibiverz NFTs and Elders of the Realms will be deposited into  CRYPTO holders wallets</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img1} />
                    </div>
                </div>
                <div className="flex flex-row-reverse gap-8 pt-16">
                    <div className="w-full flex flex-row gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">4</div>
                        <div className="text-left flex flex-col gap-1">
                            <p className="text-[24px] font-bold text-[#969696]">Compound Interest</p>
                            <p className="text-[30px] font-bold">Exchange LP Tokens for More Tokens</p>
                            <p className="text-[18px] font-normal">Swap your HBEARZ and CRYPTO LP tokens for discounted tokens, then compound your staking or bonds to recieve more </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img1} />
                    </div>
                </div>
                <div className="flex gap-8 pt-16">
                    <div className="w-full flex flex-row gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">5</div>
                        <div className="text-left flex flex-col gap-1">
                            <p className="text-[24px] font-bold text-[#969696]">Treasury Growth</p>
                            <p className="text-[30px] font-bold">Increased HBEARZ & CRYPTO Value</p>
                            <p className="text-[18px] font-normal">The inflow of LP tokens are used to back HBEARZ and CRYPTO tokens, stabilise the price of the tokens and regulate the APY. </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img1} />
                    </div>
                </div>
                <div className="flex flex-row-reverse gap-8 pt-16">
                    <div className="w-full flex flex-row gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">6</div>
                        <div className="text-left flex flex-col gap-1">
                            <p className="text-[24px] font-bold text-[#969696]">Farm for ETH</p>
                            <p className="text-[30px] font-bold">Farm the HBEARZ & CRYPTO Pair</p>
                            <p className="text-[18px] font-normal">Deposit the HBEARZ and Habibiverz Tokens on the Paradis DEX to recieve upto a 5% monthly reward in Etheruem (ETH)</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img1} />
                    </div>
                </div>
                <div className="flex gap-8 pt-16">
                    <div className="w-full flex flex-row gap-4">
                        <div className="bg-[#FED201] text-[36px] font-bold rounded-full !w-16 !h-16 px-6 flex items-center">7</div>
                        <div className="text-left flex flex-col gap-1">
                            <p className="text-[24px] font-bold text-[#969696]">HODL and Profit from the Ecosystem</p>
                            <p className="text-[30px] font-bold">Stable Token, Revenue and Rewards</p>
                            <p className="text-[18px] font-normal">LP fees, two treasury backed tokens and the Habibiverz Metaverse provides the foundation for stable value, long term vision and a communal reward system</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={img1} />
                    </div>
                </div>
            </div>
            <div id="platform" className="bg-[#1C2635] p-8">
                <div className="flex">
                    <div className="w-full">
                        <div className="flex gap-2 items-center py-4 justify-left">
                            <p className="text-[#F6CE0E] uppercase text-[16px] font-bold">HBEARZ defi 2.0 platform</p>
                            <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-left text-[36px] font-bold text-white dark:text-black">Hyper-deflationary tokenomics to balance the HBEARZ DeFi Ecosystem</p>
                            <p className="text-left text-[18px] font-normal text-white dark:text-black pb-4 pt-4">
                                BBB is HBEARZ Coin’s inbuilt functionality that allows it to have aggressively deflationary tokenomics to halve and burn tokens from the Burn (BBB) address.
                            </p>
                            <p className="text-left text-[18px] font-normal text-white dark:text-black max-w-[1052px]">
                                Quarterly burning will be implemented until half of the total supply of tokens are removed from existence within four years.
                            </p>
                        </div>
                        <div className="flex flex-row justify-left gap-8 pt-8">
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
                    <div className="w-full flex justify-center">
                        <img src={toTheMoonImg} className="w-full h-auto" />
                    </div>
                </div>
                <div className="flex flex-col items-center pt-8">
                    <p className="text-[36px] font-bold leading-[64px] text-white">HBEARZ DeFi 2.0 Platform</p>
                    <p className="text-[18px] font-normal text-white text-left w-4/5">
                        BBB is HBEARZ Coin’s inbuilt functionality that allows it to have aggressively deflationary tokenomics to halve and burn tokens from the Burn (BBB) address.
                        <br/><br/>
                        Quarterly burning will be implemented until half of the total supply of tokens are removed from existence within four years.Quarterly burning will be implemented until half of the total supply of tokens are removed from existence within four years.
                        <br/><br/>
                        Quarterly burning will be implemented until half of the total supply of tokens are removed from existence within four years.
                    </p>
                </div>
                <div className="flex justify-center pt-8">
                    <div className="bg-[#0B0B0B] border-2 rounded-3xl w-fit p-8">
                        <img src={stakeTableImg}/>
                    </div>
                </div>
            </div>
            <div id="donation" className="relative flex py-16">
                <div className='flex flex-col gap-4 text-left w-full'>
                    <div className="flex gap-2 items-center">
                        <p className="text-[#F6CE0E] uppercase text-[16px] font-bold">Donatioin</p>
                        <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    </div>
                    <p className="text-[36px] font-bold leading-[64px]">Feel like donating?</p>
                    <p className="text-[18px] font-normal">
                        As a community token HBEARZ depends on its generous members to support its heroic adventures of bringing hope and help to the hopeless and helpless.
                        <br /><br />
                        Feel free to donate to the official ERC 20 donation wallet
                        <br /><br />
                        0xe9Eb4559e8a39B635A42A221A135a79C340CBb8F
                        <br /><br />
                        <span className="font-bold">Accepted</span>: Any ERC20 token
                        <br />
                        <span className="font-bold">Preferred</span>: $ETH, $USDC, $HBEARZ
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <img src={qrcodeImg} />
                </div>
                <img src={characImg} width="243px" className="absolute bottom-4 left-[calc(50%-120px)]" />
            </div>
            <div id="community" className="bg-[#1C2635] p-8">
                <div className="flex gap-2 items-center py-4 justify-center">
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                    <p className="text-[#F6CE0E] uppercase text-[16px] font-bold">Community</p>
                    <div className="bg-[#F6CE0E] w-7 h-[2px]" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                    <p className="text-[36px] font-bold text-white dark:text-black">Join Our Community</p>
                    <p className="text-[20px] font-bold text-white dark:text-black pb-4">100,000+ Twitter Followers ● 100,000+ Telegram Members</p>
                    <p className="text-[18px] font-normal text-white dark:text-black max-w-[1052px]">Extremely active community that loves our mission. Our telegram channel is filled with community members 24/7 that would love to help you. Do not trust random messages of people claiming to be “support” or ever give out your wallet info to anyone.</p>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-8 pt-8">
                    {
                        socials.map((item, index) => {
                            return (
                                <div className="flex bg-white p-8 items-center gap-2 w-[370px] rounded-lg">
                                    <img src={item.icon} width="50px" height="50px" className="!w-12 !h-12" />
                                    <div className="text-left">
                                        <p className="text-[18px] font-bold">{item.title}</p>
                                        <p className="text-[14px] font-normal">{item.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}