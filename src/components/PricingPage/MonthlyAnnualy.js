import { useEffect, useState } from "react";
import Button from "../Button";
import ToggleButton from "../ToggleButton";
import OurTeam from "./OurTeam";
import { getPricingSliderSection } from "../../api/PricingAPI";

export default function MonthlyAnnualy() {
    let [Heading, setHeading] = useState("");
    let [base_value, setbase_value] = useState("");
    let [proffesion_owner_price, setproffesion_owner_price] = useState(0);
    let [standard_owner_price, setstandard_owner_price] = useState(0);
    let [discount, setDiscount] = useState(0);
    let [stats, setstats] = useState([]);
    let [memebers, setMembers] = useState("0");
    let [Monthly, setMonthly] = useState(true);

    function calculateMonthlyPrice(type) {
        let ownerPrice = 0;
        if (type === "Professional") {
            ownerPrice = proffesion_owner_price;
        } else {
            ownerPrice = standard_owner_price;
        }
        let totalMembersCost = Number(base_value) * Number(memebers);
        return String(ownerPrice + totalMembersCost);
    }

    function calculateAnnualyPrice(type) {
        let total = Number(calculateMonthlyPrice(type)) * 12;
        return total - getPercentOf(total, discount);
    }

    function getPercentOf(value, percent) {
        return value * (percent / 100);
    }

    useEffect(() => {
        let fun = async () => {
            let data = await getPricingSliderSection();
            let {
                heading,
                base_value,
                stats,
                proffesion_owner_price,
                standard_owner_price,
            } = data.data.attributes;
            setHeading(heading);
            setbase_value(base_value);
            setstats(stats);
            setproffesion_owner_price(
                Number(proffesion_owner_price.split("//")[0])
            );
            setstandard_owner_price(
                Number(standard_owner_price.split("//")[0])
            );
            setDiscount(Number(proffesion_owner_price.split("//")[1]));
        };
        fun();
    }, []);

    return (
        <div className="flex flex-col mb-16 gap-8 md:flex-row p-8 justify-center md:justify-between mt-10 rounded-lg">
            <OurTeam
                memebers={memebers}
                setMembers={setMembers}
                stats={stats}
                heading={Heading}
                base_value={base_value}
            />
            <div className="flex m-auto flex-col w-fit h-fit p-8 rounded-md shadow-md gap-8">
                <div className="flex gap-4 items-center">
                    {" "}
                    <span>Monthly</span>
                    <ToggleButton value={Monthly} setValue={setMonthly} />
                    <span>Annual</span>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4">
                        <span className="text-2xl text-blue-500">
                            <span className="text-[#060C3C] font-bold text-base">
                                {" "}
                                Professional:
                            </span>{" "}
                            $
                            {Monthly
                                ? calculateMonthlyPrice("Professional")
                                : calculateAnnualyPrice("Professional")}{" "}
                            / {Monthly ? "m" : "y"}
                        </span>
                        <span className="text-2xl text-blue-500">
                            <span className="text-[#060C3C] text-base font-bold">
                                {" "}
                                Standard:
                            </span>{" "}
                            $
                            {Monthly
                                ? calculateMonthlyPrice()
                                : calculateAnnualyPrice()}{" "}
                            / {Monthly ? "m" : "y"}
                        </span>
                    </div>
                    <span className="bg-gray-300 h-fit text-base px-4 py-1 rounded-2xl">
                        Save {discount}% off
                    </span>
                </div>
                <div className="w-full lg:w-[60%]">
                    <Button
                        onClick={() => {
                            window.location =
                                "https://8okzn8zrvfp.typeform.com/to/CGtW7ylQ";
                        }}
                    >
                        Start 7-day free trial
                    </Button>
                    <p className="text-sm mt-4 leading-7 underline text-slate-700 ">
                        Try Locom for free for 14 days with no credit card
                        required
                    </p>
                </div>
            </div>
        </div>
    );
}
