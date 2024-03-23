import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
// import Reveal from 'react-awesome-reveal';

import { keyframes } from "@emotion/react";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const useOutlinedInputStyles = makeStyles(theme => ({
    root: {
        "& $notchedOutline": {
            border: "none"
        },
        "&:hover $notchedOutline": {
            border: "none"
        },
        "&$focused $notchedOutline": {
            border: "none"
        }
    },
    focused: {},
    notchedOutline: {}
}));


const faqData_Company = [
    {
        title: "Where did the platform name USDT MATRIX come from?",
        description: <p>We are pleased to announce the origin of our name. Its true meaning is to develop financial plans. This plan is a resource for investors. It is suitable for middle class people who have difficulty managing their money and for clients who are under a lot of financial stress. This is a new proposal aimed at individuals with money worries before they become debt problems."</p>
    },
    {
        title: "USDT MATRIX platform introduction",
        description: "USDT MATRIX is a modern online platform for trading digital currencies. Network advanced technology with intelligent trading boards worldwide."
    },
    {
        title: "How long has USDT MATRIX been running?",
        description: `USDT MATRIX official website and application was officially created on 12/15/2023 and opened to the global market in September`
    },
    {
        title: "How USDT MATRIX generated income for me?",
        description: "USDT MATRIX will use the fully intelligent trading board to create trading profits for you from OTCQX, OTCQB, pink market, and gray market. Investors get profit on every transaction.Each transaction needs to judge the interest rate according to the investor's funds and the investment market."
    },
    {
        title: "How USDT MATRIX platform makes money?",
        description: `While USDT MATRIX brings fixed profits to all investors, it is also earning some extra profits beyond the fixed profits. This profit is used to operate the platform and maintain an efficient system that keeps the company at the forefront of the trading network.`
    },
    {
        title: "Does USDT MATRIX have legitimacy?",
        description: `Company registration for US MSB license. (Money Services Business) license is a type of financial license regulated and issued by FinCEN (Financial Crimes Enforcement Bureau, a division of the U.S. Department of the Treasury) The US MSB license is mainly regulated for money service related businesses and companies. License scope: including foreign exchange, international remittance, currency transaction transfer, payment, ICO issuance, issuance of traveler's checks and other businesses.`
    },
    {
        title: "How does USDT MATRIX protect my money?",
        description: `2FA verification linking your account with Google Authenticator. When withdrawing funds or making any large changes in funds. You need to verify Google Authenticator to do.`
    },
    {
        title: "Whether there are country and region restrictions on access?",
        description: `Since Fincen and the Colorado Secretary of State supervised under. The platform is only available in countries that allow cryptocurrency trading`
    }
];


export default function FAQs({ data }) {

    const [activeTab, setActiveTab] = useState(0);
    const [openf, setOpenf] = useState(0);

    const handleChange = (e, value) => {
        setActiveTab(value);
    }

    const handleOpen = (value) => {
        setOpenf(openf == value ? 0 : value);
    };

    return (
        <div className="flex flex-col gap-4">
            {
                data.map((item, index) => {
                    return (
                        <Accordion
                            open={openf == index + 1}
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(index + 1)}
                                className={`flex flex-col p-8 rounded-lg w-full ${openf == index + 1 ? "bg-hb-yellow" : "bg-white"}`}
                            >
                                <div className="w-full">
                                    <div className="flex flex-row justify-between text-left text-[18px] font-bold w-full">
                                        <p>{item.title}</p>
                                        {
                                            openf == index + 1 ?
                                                <IoIosArrowUp className="w-4 h-4 self-center"/>
                                                :
                                                <IoIosArrowDown className="w-4 h-4 self-center"/>
                                        }
                                    </div>
                                    {
                                        openf == index + 1 ?
                                        <p className="pt-4 text-[14px] font-normal leading-5">
                                            { item.description }
                                        </p>
                                        :
                                        <></>
                                    }
                                </div>
                            </AccordionHeader>
                            {/* <AccordionBody className="bg-white text-[14px] font-normal">
                                {item.description}
                            </AccordionBody> */}
                        </Accordion>
                    );
                })
            }
        </div>
    );
}