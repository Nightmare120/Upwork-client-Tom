import { useEffect, useState } from "react";
import BackgroundIMG from "../../images/Locom Website Images/Locom Website Images/Locom - 1.webp";
import EmailInput from "./EmailInput";
import StatsBox from "./StatsBox";
import { getHeroSection } from "../../api/HomePageAPI";
import HandleText from "../HandleText";
import Image from "next/image";

// import Dots from "../../images/dots.svg";
// import Rectangle from "../../images/Rectangle.svg";

export default function HeroSection(props) {
    let [Heading, setHeading] = useState(props.Heading);
    let [Description, setDescription] = useState(props.Description);
    let [Botton_button_text, setBottomText] = useState(
        props.Botton_button_text
    );
    let [Stats, setStats] = useState(props.Stats);

    useEffect(() => {
        let fun = async () => {
            let data = await getHeroSection();
            let { Heading, Description, Stats, Botton_button_text } =
                data.data.attributes;
            setHeading(Heading);
            setDescription(Description);
            setStats(Stats);
            setBottomText(Botton_button_text);
        };
        fun();
    }, []);

    return (
        <div className="flex flex-col lg:flex-row my-36 overflow-x-hidden w-full gap-8">
            <div className="w-full lg:w-[45vw] flex flex-col gap-6">
                <h1 className="text-5xl text-[#060C3C] font-bold ">
                    {" "}
                    <HandleText text={Heading} />
                </h1>
                <p className="text-slate-700 ">{Description}</p>
                <EmailInput Botton_button_text={Botton_button_text} />

                <div className="flex mt-4 gap-4">
                    {Stats &&
                        Stats.map((stat, index) => (
                            <StatsBox
                                title={stat.Data}
                                key={index}
                                detail={stat.desc}
                            />
                        ))}
                </div>
            </div>
            <div className=" w-full lg:w-[60vw]">
                {/* <img
                    className="absolute w-[20%] h-[50%] -z-10 -mt-28 right-6 "
                    src={Dots}
                    alt=""
                /> */}
                <Image
                    className="w-full  lg:w-[60vw]"
                    src={BackgroundIMG}
                    alt=""
                />
                {/* <img
                    className="absolute w-[20%] h-[50%] -mt-24 -ml-20 -z-10 "
                    src={Rectangle}
                    alt=""
                /> */}
            </div>
        </div>
    );
}
