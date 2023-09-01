import StatsBox from "../HomePage/StatsBox";
import BottomRight from "../../images/ArrowTopRight.svg";
import person from "../../images/peoples.png";
import Range from "../RangeInput";
import Image from "next/image";

export default function OurTeam({
    stats,
    base_value,
    heading,
    memebers,
    setMembers,
}) {
    // let [value, setValue] = useState("0");
    return (
        <div className="w-full lg:w-[40vw]">
            <p className="my-8">{heading}</p>
            <p className="w-1/2 text-3xl mb-4 font-bold text-blue-500">
                {memebers} members
            </p>
            <Range
                setValue={setMembers}
                min={"0"}
                max={"1000"}
                value={memebers}
            />
            <Image src={person} className="my-8 w-1/3" alt="" />
            <div className="flex mt-4 gap-4">
                {stats.map((stat, index) => (
                    <StatsBox
                        title={stat.Data}
                        key={index}
                        detail={stat.desc}
                    />
                ))}
            </div>
            <div className="hidden lg:flex ml-auto w-fit  items-start mt-14 justify-center gap-4">
                <p className={`italic text-lg text-slate-700`}>
                    {"Configure your products"}
                </p>
                <Image
                    src={BottomRight}
                    style={{ transform: "scaleY(-1)" }}
                    className={"ml-auto mt-6"}
                    alt=""
                />
            </div>
        </div>
    );
}
