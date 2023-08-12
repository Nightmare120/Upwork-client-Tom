import Button from "../Button";
import Input from "../Input";
import Keyword from "../Keyword";
import { TickBox } from "./StepBox";

export default function TrialSection() {
    return (
        <div
            className={`flex gap-8 mt-16 mb-16 justify-between flex-wrap md:flex-nowrap`}
        >
            <div className="flex w-full md:w-[40vw] flex-col gap-4 justify-start items-start">
                <h3 className="text-4xl font-bold  text-[#1C2752] leading-[1.7em]">
                    You're 15 Mins Away From Your{" "}
                    <Keyword>Actionable Website</Keyword> Audit
                </h3>
                <p className="text-slate-700 ">
                    The fastest and simple way to generate growing business
                    solutions with our products.
                </p>
                <TickBox content={"No credit card required"} />
                <TickBox content={"No automatic billing"} />
                <TickBox content={"No installation needed"} />
            </div>

            <div className="w-full md:w-[30vw] flex flex-col gap-4">
                <p className="text-[#384268] font-bold  ">Website URL</p>
                <Input placeholder={"Example.com"} />
                <p className="text-[#384268] font-bold  ">Email</p>
                <Input placeholder={"Example@gmail.com"} />
                <Button>Start Free Trial</Button>
                <p
                    className="text-center 
underline text-slate-700 "
                >
                    14 day trial - no credit card required
                </p>
            </div>
        </div>
    );
}
