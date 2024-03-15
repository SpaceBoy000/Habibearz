/* global BigInt */
//import main modules
import React, { useEffect, useState } from "react";

import { Input, Tooltip } from "@mui/material";

import { toast } from "react-toastify";
import { FiInfo } from "react-icons/fi";
import { FcInfo } from "react-icons/fc";

import SelectNet from "../components/selectcoin/selectnet"
import SwitchOS from "../components/switchOS/switchOS"
import { Tabs, Tab, TabPanel } from "../components/tabs/tabs";

import { useGlobalContext } from "../providers/GlobalProvider";
import * as Constants from "../constants";
import config from "../config";

import ellipseIcon from "../assets/icons/ellipse.svg";
import darkEllipseIcon from "../assets/icons/ellipse_dark.svg";
import closedEllipseIcon from "../assets/icons/ellipse_closed.svg";

import downIcon from "../assets/icons/small-caret-down.svg";
import upIcon from "../assets/icons/small-caret-up.svg";
import rightIcon from "../assets/icons/arrow-right.svg";
import { FaGalacticSenate } from "react-icons/fa6";


function PresaleInfo({
    tokenName,
    symbol,
    decimal,
    supply,
}) {
    const { darkMode } = useGlobalContext();

    const presaleInfoData = [
        {
            title: 'Token Name',
            value: tokenName
        },
        {
            title: 'Symbol',
            value: symbol
        },
        {
            title: 'Decimal',
            value: decimal
        },
        {
            title: 'Supply',
            value: supply
        },
    ];

    return (
        <div className='create-panel !max-w-[320px] h-fit dark:bg-gradient-to-r from-white to to-white bg-[linear-gradient(127deg,_rgba(6,_11,_40,_0.74)_28.26%,rgba(10,_14,_35,_0.71)_91.2%)]'>
            <div>
                <p className="sub-title dark:text-black">Presale Information</p>
                
            </div>
            <div className="flex flex-col w-full gap-4">
                {
                    presaleInfoData.map((info, index) => {
                        return (
                            <div className="flex flex-row justify-between " key={index}>
                                <p className="title-2 text-white dark:text-black !text-[16px]">{info.title}</p>
                                <p className="title-2 text-white dark:text-black !text-[16px]">{info.value}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

function CreatePresale1({
    tokenAddress,
    setTokenAddress,
    symbol,
    setSymbol,
    decimal,
    setDecimal,
    supply,
    setSupply,
    transferFee,
    setTransferFee,
    tokenIndex,
    tokenLogo,
    setTokenLogo,
    setImageFile,
    setTokenIndex,
    setTokenName,
    pairCoinIndex,
    setPairCoinIndex,
    nextStep,
    previousStep
}) {
    const { darkMode } = useGlobalContext();

    const [activeTab, setActiveTab] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);

    const handleChangeTab = (e, value) => {
        setActiveTab(value);
        setPairCoinIndex(value);
    }

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        console.log("toggleSwitch: ", isEnabled);
    }

    const handleFileRead = (event) => {
        const bufferArray = event.target.result;
        // Now you can use the bufferArray as needed, for example, upload it to a server
        console.log('Buffer array:', bufferArray);
        // setImageFile(bufferArray);
    };

    const handleTokenLogo = (file) => {
        console.log("handleTokenLogo: ", file);
        let reader = new FileReader();
        if (file) {
            console.log("ImageFile: ", file);
            setImageFile(file[0])
            const reader = new FileReader();
            reader.onload = handleFileRead;
            reader.readAsArrayBuffer(file[0]);
        }

        // let buffer = reader.readAsArrayBuffer(file[0]);

        setTokenLogo(Object.assign(file[0], {
            preview: URL.createObjectURL(file[0])
        }))
    }

    const handleTokenIndex = (e) => {
        console.log("handleTokenIndex: ", e);
        setTokenIndex(e.value);
    }

    const handleChangeTokenAddress = async (e) => {
        setTokenAddress(e.target.value);

        try {
            console.log("Token: ", e.target.value);

        } catch (err) {
            console.error("Invalid token address", err);
            toast.error("Invalid token address");

            setTokenName('--');
            setSymbol('--');
            setDecimal(0);
            setSupply(0);

            return;
        }
        setTokenAddress(e.target.value);

    }

    return (
        <div className='create-panel dark:bg-gradient-to-r from-white to to-white bg-[linear-gradient(127deg,_rgba(6,_11,_40,_0.74)_28.26%,rgba(10,_14,_35,_0.71)_91.2%)]'>
            <div>
                <p className="main-title dark:text-black">Presale Creator</p>
                
            </div>
            <div className="w-full">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col gap-2 pl-4 text-left">
                        <p className="text-white title-1 dark:text-black">Provide Token</p>
                        <p className="title-2 text-white dark:text-black !font-normal">Verify your Token & Provide Information</p>
                    </div>

                    <div className="relative flex items-center justify-center pr-6">
                        <img src={darkMode ? darkEllipseIcon : ellipseIcon} width="72px" height="72px" className="absolute !max-w-none" />
                        <span className="title-2 text-white dark:text-black !font-medium">1 of 2</span>
                    </div>
                </div>
                <div className="w-full pt-6 text-left">
                    <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Token Address</span>

                    <input
                        className='text-input bg-[#00000080] dark:bg-regal-white text-white dark:text-black'
                        type="text"
                        placeholder='Enter your token address'
                        value={tokenAddress}
                        onChange={handleChangeTokenAddress}
                    />

                    <div className="flex justify-between mt-4 token-kind">
                        <p className="text-white source-1 dark:text-black">Presale Fee</p>
                        <p className="text-white source-1 dark:text-black">2 SOL + 5% from SOL raised</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 pt-6">
                    <p className="pl-4 text-left text-white title-2 dark:text-black">Currency</p>
                    <Tabs selectedTab={activeTab} onChange={handleChangeTab}>
                        <Tab label="SOL" value={0}></Tab>
                        <Tab label="USDT" value={1}></Tab>
                        <Tab label="USDC" value={2}></Tab>
                    </Tabs>
                    <p className="source-1 text-[#6B6B6F] dark:text-[#6B6B6F] text-left pt-1">Your Presale is available for purchase using {activeTab == 0 ? 'SOL' : activeTab == 1 ? 'USDT' : 'USDC'}</p>
                </div>
                
                <div className="flex flex-row items-center justify-between">
                    <p className="pl-4 text-left text-white title-2 dark:text-black">Enable Affiliate Program</p>
                    <SwitchOS
                        value={isEnabled}
                        onChange={toggleSwitch}
                    />
                </div>

                {
                    isEnabled == true &&
                    <div className="w-full pt-4 text-left">
                        <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Affiliate earnings percentage</span>
                        <input
                            className='text-input bg-[#00000080] dark:bg-regal-white text-white dark:text-black'
                            type="number"
                            placeholder='Enter the earnings percentage (Maximum 5%)'
                        // value={tokenAddress}
                        // onChange={}
                        />
                    </div>
                }
                {/* <TabPanel value={activeTab} selectedIndex={2}>
                    <>Hello</>
                </TabPanel> */}

            </div>
            <div className='w-full'>
                <button
                    role='button'
                    className='w-full btn-create'
                    onClick={nextStep}
                >
                    <p className="text-white title-2">Continue</p>
                    <img src={rightIcon} />
                </button>
            </div>
        </div>
    );
}

function CreatePresale2({
    tokenIndex,
    presaleRate,
    setPresaleRate,
    softCap,
    setSoftCap,
    hardCap,
    setHardCap,
    minBuyAmount,
    setMinBuyAmount,
    maxBuyAmount,
    setMaxBuyAmount,
    liquidityPercent,
    setLiquidityPercent,
    listingRate,
    setListingRate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    lpLockupDays,
    setLpLockupDays,
    handleClickCreatePresale,
    nextStep,
    previousStep
}) {
    const { darkMode } = useGlobalContext();

    return (
        <div className='create-panel dark:bg-gradient-to-r from-white to to-white bg-[linear-gradient(127deg,_rgba(6,_11,_40,_0.74)_28.26%,rgba(10,_14,_35,_0.71)_91.2%)]'>
            <div>
                <p className="main-title dark:text-black">Presale Creator2</p>
                
            </div>
            <div className="w-full">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col gap-2 pl-4 text-left">
                        <p className="text-white title-1 dark:text-black">Addition Information</p>
                        <p className="title-2 text-white dark:text-black !font-normal">Provide presale infomation in detail</p>
                    </div>
                    <div className="relative flex items-center justify-center pr-6">
                        <img src={closedEllipseIcon} width="72px" height="72px" className="absolute !max-w-none" />
                        <span className="title-2 text-white dark:text-black !font-medium xs:w-[35px]">2 of 2</span>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-4 pt-6 text-white">
                    <div className='relative w-full text-left'>
                        <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Presale rate<span className="text-red-600"> *</span></span>
                        <input
                            className='text-input bg-[#00000080] dark:bg-regal-white text-white dark:text-black'
                            type="text"
                            value={presaleRate}
                            onChange={(e) => { setPresaleRate(e.target.value) }}
                        />
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className='relative w-full text-left'>
                            <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Softcap<span className="text-red-600"> *</span></span>
                            <input
                                className='text-input bg-[#00000080] dark:bg-regal-white text-white dark:text-black'
                                type="text"
                                value={softCap}
                                onChange={(e) => { setSoftCap(e.target.value); }}
                            />
                        </div>
                        <div className='relative w-full text-left'>
                            <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Hardcap<span className="text-red-600"> *</span></span>
                            <input
                                className='text-input bg-[#00000080] dark:bg-regal-white text-white dark:text-black'
                                type="text"
                                value={hardCap}
                                onChange={(e) => { setHardCap(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className='relative w-full text-left'>
                            <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Minimum buy<span className="text-red-600"> *</span></span>
                            <input
                                className='text-input bg-[#00000080] dark:bg-regal-white text-white dark:text-black'
                                type="text"
                                value={minBuyAmount}
                                onChange={(e) => { setMinBuyAmount(e.target.value); }}
                            />
                        </div>
                        <div className='relative w-full text-left'>
                            <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Maximum buy<span className="text-red-600"> *</span></span>
                            <input
                                className='text-input bg-[#00000080] dark:bg-regal-white text-white dark:text-black'
                                type="text"
                                value={maxBuyAmount}
                                onChange={(e) => { setMaxBuyAmount(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className='relative w-full text-left'>
                            <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Liquidity(%)<span className="text-red-600"> *</span></span>
                            <input
                                className='text-input bg-[#00000080] dark:bg-regal-white text-white dark:text-black'
                                type="text"
                                value={liquidityPercent}
                                onChange={(e) => { setLiquidityPercent(e.target.value); }}
                            />
                        </div>
                        <div className='relative w-full text-left'>
                            <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Listing rate<span className="text-red-600"> *</span></span>
                            <input
                                className='text-input bg-[#00000080] dark:bg-regal-white text-white dark:text-black'
                                type="text"
                                value={listingRate}
                                onChange={(e) => { setListingRate(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className='relative w-full text-left'>
                            <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Start time(UTC)</span>

                        </div>
                        <div className='relative w-full text-left'>
                            <span className='pb-1 pl-4 text-white title-2 dark:text-black'>End time(UTC)</span>

                        </div>
                    </div>
                    <div className='relative w-full text-left'>
                        <span className='pb-1 pl-4 text-white title-2 dark:text-black'>Liquidity lockup(days)<span className="text-red-600"> *</span></span>
                        <input
                            className='text-input bg-[#00000080] dark:bg-regal-white text-white dark:text-black'
                            type="text"
                            value={lpLockupDays}
                            onChange={(e) => { setLpLockupDays(e.target.value) }}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full gap-4'>
                <button
                    role='button'
                    className='w-full btn-create'
                    onClick={handleClickCreatePresale}
                >
                    <p className="text-white title-2">Create Presale</p>
                </button>
                <button
                    role='button'
                    className='w-full btn-back'
                    onClick={previousStep}
                >
                    <p className="text-white title-2 dark:text-black">Back</p>
                </button>
            </div>
        </div>
    );
}


export default function CreatePresale() {

    const [tokenAddress, setTokenAddress] = useState('');
    const [tokenName, setTokenName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [decimal, setDecimal] = useState(0);
    const [supply, setSupply] = useState(0);
    const [transferFee, setTransferFee] = useState('');
    const [tokenLogo, setTokenLogo] = useState({});
    const [selectedFile, setImageFile] = useState();
    const [tokenIndex, setTokenIndex] = useState(Constants.TOKEN_TYPE.SPL); // 0: SPL, 1: Token2022
    const [pairCoinIndex, setPairCoinIndex] = useState(Constants.COIN_TYPE.SOL);

    const [presaleRate, setPresaleRate] = useState('');
    const [softCap, setSoftCap] = useState('');
    const [hardCap, setHardCap] = useState('');
    const [minBuyAmount, setMinBuyAmount] = useState('');
    const [maxBuyAmount, setMaxBuyAmount] = useState('');
    const [liquidityPercent, setLiquidityPercent] = useState('');
    const [listingRate, setListingRate] = useState('');
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [lpLockupDays, setLpLockupDays] = useState('');

    const [loading, setLoading] = useState(false);


    const handleCreatePresale = async () => {
        // await test();


        if (loading) {
            toast.warning("Processing now. please try again later");
            return;
        }

        // if (tokenIndex != Constants.TOKEN_TYPE.SPL) {
        //     toast.error("Only SPL token is avaiable now");
        //     return;
        // }

        if (tokenAddress == '') {
            toast.info("Please enter your token name.");
            return;
        }
        if (presaleRate == '') {
            toast.info("Please enter your presale rate.");
            return;
        }
        if (softCap == '') {
            toast.info("Please enter your softcap.");
            return;
        }
        if (hardCap == '') {
            toast.info("Please enter your hardcap.");
            return;
        }

        // if (tokenIndex == Constants.TOKEN_TYPE.TOKEN2022 && transferFee == '') {
        //     toast.info("Please enter your token transfer fee.");
        //     return;
        // }

        if (minBuyAmount == '') {
            toast.info("Please enter your token minimum buy amount.");
            return;
        }

        if (maxBuyAmount == '') {
            toast.info("Please enter your token maximum buy amount.");
            return;
        }

        if (liquidityPercent == '') {
            toast.info("Please enter your Liquidity(%).");
            return;
        }

        if (listingRate == '') {
            toast.info("Please enter your token listing rate.");
            return;
        }

        if (startTime == '') {
            toast.info("Please enter your start time.");
            return;
        }

        if (endTime == '') {
            toast.info("Please enter your end time.");
            return;
        }

        if (lpLockupDays == 0) {
            toast.info("Please enter your Liquidity lockup days");
            return;
        }

        setLoading(true);

        // deploying presale contract based on over params.




        setLoading(false);
    };


    return (
        <div className="flex flex-col gap-8 p-8 overflow-hidden xs:p-4 xs:items-center lg:flex-row xl:flex-row 2xl:flex-row">
            <CreatePresale1
                tokenAddress={tokenAddress}
                setTokenAddress={setTokenAddress}
                symbol={symbol}
                setSymbol={setSymbol}
                decimal={decimal}
                setDecimal={setDecimal}
                supply={supply}
                setSupply={setSupply}
                transferFee={transferFee}
                setTransferFee={setTransferFee}
                tokenLogo={tokenLogo}
                setTokenLogo={setTokenLogo}
                setImageFile={setImageFile}
                tokenIndex={tokenIndex}
                setTokenIndex={setTokenIndex}
                setTokenName={setTokenName}
                pairCoinIndex={pairCoinIndex}
                setPairCoinIndex={setPairCoinIndex}
            />
            <CreatePresale2
                tokenIndex={tokenIndex}
                presaleRate={presaleRate}
                setPresaleRate={setPresaleRate}
                softCap={softCap}
                setSoftCap={setSoftCap}
                hardCap={hardCap}
                setHardCap={setHardCap}
                minBuyAmount={minBuyAmount}
                setMinBuyAmount={setMinBuyAmount}
                maxBuyAmount={maxBuyAmount}
                setMaxBuyAmount={setMaxBuyAmount}
                liquidityPercent={liquidityPercent}
                setLiquidityPercent={setLiquidityPercent}
                listingRate={listingRate}
                setListingRate={setListingRate}
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={setEndTime}
                lpLockupDays={lpLockupDays}
                setLpLockupDays={setLpLockupDays}
                handleClickCreatePresale={handleCreatePresale}
            />
            <PresaleInfo
                tokenName={tokenName}
                symbol={symbol}
                decimal={decimal}
                supply={supply}
            />
        </div>
    );
}
