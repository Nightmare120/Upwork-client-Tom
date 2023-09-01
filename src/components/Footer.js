import Logo from "../images/Locom_Logo.svg";
import Button from "./Button";
import Apple from "../images/Apple.svg";
import Play from "../images/playstore.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import HandleText from "./HandleText";
import { getFooter } from "../api/HomePageAPI";
import Image from "next/image";

export default function Footer() {
    let [copyright, setCopyright] = useState("");
    let [address, setAddress] = useState("");

    useEffect(() => {
        let fun = async () => {
            let Data = await getFooter();
            let { copyright, address } = Data.data.attributes;
            setCopyright(copyright);
            setAddress(address);
        };

        fun();
    }, []);
    return (
        <div className="bg-[#F9F9F9] relative  -left-[2rem] md:-left-[80px] w-[100vw]   px-4 py-4 md:px-[60px] md:py-9 overflow-x-hidden">
            <div className=" gap-16 flex-wrap hidden">
                <div className="flex flex-col gap-8">
                    <Image src={Logo} alt="" />
                    <Button>
                        <div className="flex gap-2 items-center">
                            <Image src={Apple} alt="" />
                            <div className="text-left">
                                Download on the <br /> Apple Store
                            </div>
                        </div>
                    </Button>
                    <Button>
                        <div className="flex gap-2 items-center">
                            <Image src={Play} alt="" />
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
            <div className="flex justify-between gap-4 flex-wrap  border-t pt-4">
                <p className="text-slate-700 ">
                    <HandleText text={copyright} />
                </p>
                <p className="text-slate-700 flex gap-2">
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    |<Link href={"/privacy-policy"}>Privacy</Link>
                </p>
                <p>
                    <HandleText text={address} />
                </p>
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
