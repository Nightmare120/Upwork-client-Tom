import Logo from "../images/Locom_Logo.svg";
import Button from "./Button";
import Keyword from "./Keyword";
import Apple from "../images/Apple.svg";
import Play from "../images/playstore.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-[#F9F9F9] relative  -left-[2rem] md:-left-[80px] w-[100vw]   px-4 py-4 md:px-[60px] md:py-9 overflow-x-hidden">
            <div className=" gap-16 flex-wrap hidden">
                <div className="flex flex-col gap-8">
                    <img src={Logo} alt="" />
                    <Button>
                        <div className="flex gap-2 items-center">
                            <img src={Apple} alt="" />
                            <div className="text-left">
                                Download on the <br /> Apple Store
                            </div>
                        </div>
                    </Button>
                    <Button>
                        <div className="flex gap-2 items-center">
                            <img src={Play} alt="" />
                            <div className="text-left">
                                Get it on <br /> Google Play
                            </div>
                        </div>
                    </Button>
                </div>

                <div>
                    <FooterLinkContainer
                        heading={"US Headquaters"}
                        links={[
                            "1650 W Digital",
                            "UT Lehi 84043",
                            "Contact sales: 801.438.4425 ",
                        ]}
                    />
                </div>
            </div>
            <div className="flex justify-between gap-4 flex-wrap mt-16 border-t pt-4">
                <p className="text-slate-700 ">
                    ©2022 <Keyword>Locom</Keyword>. All right reserved
                </p>
                <p className="text-slate-700 flex gap-2">
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>|
                    <Link to={"/privacy-policy"}>Privacy</Link>
                </p>
                <p>1650 W Digital UT Lehi 84043 | 801 438 4425 </p>
            </div>
        </div>
    );
}

function FooterLinkContainer({ heading, links }) {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-xl">{heading}</p>
            {links.map((link, index) => (
                <div
                    key={index}
                    className="text-slate-700 cursor-pointer transition-all hover:text-black"
                >
                    {link}
                </div>
            ))}
        </div>
    );
}
