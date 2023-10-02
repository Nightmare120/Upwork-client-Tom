import Button, { ButtonSecondary, ButtonWhite } from "./Button";
import Logo from "../images/Locom_Logo.svg";
import { useEffect, useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import { UilMultiply } from "@iconscout/react-unicons";
import Profile from "../images/profile (1).svg";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    let [open, setOpen] = useState(false);

    // useEffect(() => {
    //     setOpen(window.screen.width > 768);
    // });

    return (
        <div className="flex  justify-between items-center">
            <Link href={"/"}>
                <Image src={Logo} alt="" />
            </Link>
            <span className="lg:hidden">
                <Button onClick={() => setOpen(true)}>
                    <UilBars />
                </Button>
            </span>
            <div
                className={` bg-white gap-4 top-0 left-0 ${
                    open
                        ? "visible w-full h-[100vh] bg-black bg-opacity-30  box-border p-0"
                        : "invisible w-full h-0"
                } absolute  lg:visible  flex-col transition-all justify-center lg:justify-normal  lg:flex-row lg:static lg:w-max lg:h-max md:gap-14 items-center`}
            >
                <span className="absolute top-5 right-5 lg:hidden">
                    <Button onClick={() => setOpen(false)}>
                        <UilMultiply />
                    </Button>
                </span>
                <div className="flex h-[40vh] bg-white lg:visible  flex-col  justify-center lg:justify-normal  lg:flex-row lg:static lg:w-max lg:h-max md:gap-5 lg:gap-14 items-center">
                    <Links href={"/pricing"}>Pricing</Links>
                    <Links href={"/partners"}>Partner Program</Links>
                    {/* <Links href={"/blog"}>Blogs</Links> */}
                </div>

                <div className="hidden gap-2">
                    <ButtonSecondary
                        onClick={() => {
                            let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=800,left=500,top=500`;

                            window.open(
                                " https://locom.outseta.com/auth?widgetMode=login#o-anonymous                            ",
                                "test",
                                params
                            );
                        }}
                    >
                        Login
                    </ButtonSecondary>
                    <Button
                        onClick={() => {
                            let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=800,left=500,top=500`;

                            window.open(
                                "https://locom.outseta.com/auth?widgetMode=register#o-anonymous",
                                "test",
                                params
                            );
                        }}
                    >
                        Sign Up
                    </Button>
                    <div
                        className="flex justify-center items-center border-l-2 pl-4 cursor-pointer"
                        onClick={() => {
                            let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=800,left=500,top=500`;

                            window.open(
                                "https://locom.outseta.com/profile?#o-authenticatedanonymous",
                                "test",
                                params
                            );
                        }}
                    >
                        <Image className="w-8 h-8" src={Profile} alt="" />
                    </div>
                </div>
                {/* </a> */}
            </div>
        </div>
    );
}

function Links({ children, href }) {
    return (
        <Link href={href}>
            <span className="text-slate-700 cursor-pointer transition-all hover:text-black">
                {children}
            </span>
        </Link>
    );
}
