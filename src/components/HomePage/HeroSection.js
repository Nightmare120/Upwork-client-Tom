import BackgroundIMG from "../../images/pleased-handsome-man-cheering-while-looking-his-mobile-phone-achieve-goal-app-smartphone-celebrating-standing-white-background.png";
import Keyword from "../Keyword";
import EmailInput from "./EmailInput";
import StatsBox from "./StatsBox";

export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row my-[100px] overflow-x-hidden w-full gap-8">
            <div className="w-full lg:w-[45vw] flex flex-col gap-6">
                <h1 className="text-5xl font-bold ">
                    Refer Your Friends & Earn Up To <Keyword>100$ Year</Keyword>
                </h1>
                <p className="text-slate-700 ">
                    The fastest and simple way to generate growing business
                    solutions with our products
                </p>
                <EmailInput />

                <div className="flex mt-4 gap-4">
                    <StatsBox
                        title={"350+"}
                        detail={"Over 500 business powered with us"}
                    />
                    <StatsBox
                        title={"4.8"}
                        detail={"Rating on google play and app store"}
                    />
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
