import SectionHeader from "../SectionHeader";
import slider from "../../images/affilatepage-slider.svg";

export default function ReferralsSection() {
    return (
        <div>
            <SectionHeader
                keyword={"Refferals"}
                title={"Win a Holiday!"}
                paragraph={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem ipsam molestiae distinctio repudiandae veritatis ipsum soluta accusamus delectus earum?"
                }
            />
            <div className="w-full lg:w-1/2 m-auto text-center flex justify-centerr flex-col gap-8 -mt-24">
                <p className="text-3xl font-bold text-blue-500">5 Refferals</p>
                <img src={slider} className="w-1/2 m-auto" alt="" />
                <p className=" ">Your Monthly Earnings</p>
                <p className="text-3xl font-bold text-blue-500">$160</p>
                <p className="text-slate-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    culpa tempora repudiandae officiis sed eum optio qui
                    asperiores quidem neque.
                </p>
            </div>
        </div>
    );
}
