import Logo from "../images/Locom_Logo.svg";
import Keyword from "./Keyword";

export default function Footer() {
    return (
        <div className="bg-[#F9F9F9]  px-4 py-4 md:px-[60px] md:py-9 overflow-x-hidden">
            <div className="flex gap-16 flex-wrap">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <FooterLinkContainer
                    heading={"Products"}
                    links={[
                        "Reviews",
                        "Payments",
                        "Webchat",
                        "Channels",
                        "Contacts",
                        "Pricing",
                        "Inbox",
                        "Text campaign",
                    ]}
                />
                <FooterLinkContainer
                    heading={"Resources"}
                    links={[
                        "Blog",
                        "Google Reviews",
                        "Online Reviews",
                        "Business Text Messaging",
                        "Contact Sales",
                    ]}
                />
                <FooterLinkContainer
                    heading={"Partners"}
                    links={[
                        "Become a Partner",
                        "Hire an Expert",
                        "Integration",
                        "Marketplace",
                        "Developer Portal",
                    ]}
                />
                <FooterLinkContainer
                    heading={"Company"}
                    links={[
                        "About Us",
                        "Contact Us",
                        "Careers",
                        "Press",
                        "Partners",
                        "Legal",
                    ]}
                />
                <div>
                    <FooterLinkContainer
                        heading={"US Headquaters"}
                        links={[
                            "1650 W Digital",
                            "UT Lehi 84043",
                            "Contact sales: 801.438.4425 ",
                        ]}
                    />
                    <div className="w-full h-5"></div>
                    <FooterLinkContainer
                        heading={"Australia"}
                        links={[
                            "Level 3, 376-390 Collins St",
                            "VIC Melbourne 3000",
                        ]}
                    />
                </div>
            </div>
            <div className="flex justify-between mt-16 border-t pt-4">
                <p className="text-slate-700 ">
                    ©2022 <Keyword>Locom</Keyword>. All right reserved
                </p>
                <p className="text-slate-700 ">
                    Sitemap | Terms & Conditions | Privacy | Vulnerability
                    Policy | Do Not Sell or Share My Personal Information
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
