import { useEffect, useState } from "react";
import BackgroundIMG from "../../images/home.svg";
import EmailInput from "./EmailInput";
import StatsBox from "./StatsBox";
import { getHeroSection } from "../../api/HomePageAPI";
import HandleText from "../HandleText";

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
        <div className="flex flex-col lg:flex-row my-[100px] overflow-x-hidden w-full gap-8">
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
            <div className="w-full lg:w-[60vw]">
                <img
                    className="w-full lg:w-[60vw]"
                    src={BackgroundIMG}
                    alt=""
                />
            </div>
        </div>
    );
}
