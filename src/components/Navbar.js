import Button, { ButtonSecondary, ButtonWhite } from "./Button";
import Logo from "../images/Locom_Logo.svg";
import { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import { UilMultiply } from "@iconscout/react-unicons";
import Profile from "../images/profile (1).svg";
import { Link } from "react-router-dom";

export default function Navbar() {
    let [open, setOpen] = useState(window.screen.width > 768);

    return (
        <div className="flex justify-between items-center">
            <Link to={"/"}>
                <img src={Logo} alt="" />
            </Link>
            <span className="lg:hidden">
                <Button onClick={() => setOpen(true)}>
                    <UilBars />
                </Button>
            </span>
            <div
                className={` bg-white gap-4 top-0 left-0 ${
                    open
                        ? "visible w-[100%] h-[100vh] box-border p-0"
                        : "invisible w-0 h-0"
                } absolute flex lg:visible  flex-col transition-all justify-center lg:justify-normal  lg:flex-row lg:static lg:w-max lg:h-max md:gap-14 items-center`}
            >
                <span className="absolute top-5 right-5 lg:hidden">
                    <Button onClick={() => setOpen(false)}>
                        <UilMultiply />
                    </Button>
                </span>
                <Links to={"/pricing"}>Pricing</Links>
                <Links to={"/partners"}>Partner Program</Links>

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
                        <img className="w-8 h-8" src={Profile} alt="" />
                    </div>
                </div>
                {/* </a> */}
            </div>
        </div>
    );
}

function Links({ children, to }) {
    return (
        <Link to={to}>
            <span className="text-slate-700 cursor-pointer transition-all hover:text-black">
                {children}
            </span>
        </Link>
    );
}
