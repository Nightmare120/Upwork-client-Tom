import { useEffect, useState } from "react";
import BackgroundIMG from "../../images/home-transformed.png";
import EmailInput from "./EmailInput";
import StatsBox from "./StatsBox";
import { getHeroSection } from "../../api/HomePageAPI";
import HandleText from "../HandleText";
import Dots from "../../images/dots.svg";
import Rectangle from "../../images/Rectangle.svg";

export default function HeroSection() {
    let [Heading, setHeading] = useState("");
    let [Description, setDescription] = useState("");
    let [Stats, setStats] = useState([]);

    useEffect(() => {
        let fun = async () => {
            let data = await getHeroSection();
            let { Heading, Description, Stats } = data.data.attributes;
            setHeading(Heading);
            setDescription(Description);
            setStats(Stats);
        };
        fun();
    }, []);

    return (
        <div className="flex flex-col lg:flex-row my-36 overflow-x-hidden w-full gap-8">
            <div className="w-full lg:w-[45vw] flex flex-col gap-6">
                <h1 className="text-5xl font-bold ">
                    {" "}
                    <HandleText text={Heading} />
                </h1>
                <p className="text-slate-700 ">{Description}</p>
                <EmailInput />

                <div className="flex mt-4 gap-4">
                    {Stats.map((stat, index) => (
                        <StatsBox
                            title={stat.Data}
                            key={index}
                            detail={stat.desc}
                        />
                    ))}
                </div>
            </div>
            <div className=" w-full lg:w-[60vw]">
                <img
                    className="absolute w-[20%] h-[50%] -z-10 -mt-28 right-6 "
                    src={Dots}
                    alt=""
                />
                <img
                    className="w-full  lg:w-[60vw]"
                    src={BackgroundIMG}
                    alt=""
                />
                <img
                    className="absolute w-[20%] h-[50%] -mt-24 -ml-20 -z-10 "
                    src={Rectangle}
                    alt=""
                />
            </div>
        </div>
    );
}
