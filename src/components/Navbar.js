import Button from "./Button";
import Logo from "../images/Locom_Logo.svg";
import { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import { UilMultiply } from "@iconscout/react-unicons";

export default function Navbar() {
    let [open, setOpen] = useState(window.screen.width > 768);

    return (
        <div className="flex justify-between items-center">
            <img src={Logo} alt="" />
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
                <Links>Pricing</Links>
                <Links>Resource Center</Links>
                <Links>About</Links>
                <Links>Contact Us</Links>
                {/* <a href="https://locom.outseta.com/auth?widgetMode=register#o-anonymous"> */}
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
                {/* </a> */}
            </div>
        </div>
    );
}

function Links({ children }) {
    return (
        <span className="text-slate-700 cursor-pointer transition-all hover:text-black">
            {children}
        </span>
    );
}
