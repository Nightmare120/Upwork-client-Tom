import SectionHeader from "../SectionHeader";
import Women1 from "../../images/Women1.png";
import Quote from "../../images/Quote.svg";
import Keyword from "../Keyword";

export default function TestimonialSection() {
    return (
        <div>
            <SectionHeader
                keyword={"Testimonials"}
                title={"This is why Customers Loves Locom"}
                paragraph={
                    "We know what works, what doesn't and we have helped many local businesses before."
                }
            />
            <div className="mt-16 flex justify-between gap-9 flex-wrap lg:flex-nowrap">
                <TestimonialBox />
                <TestimonialBox />
                <TestimonialBox />
            </div>
        </div>
    );
}

function TestimonialBox() {
    return (
        <div className="border p-9 flex flex-col gap-8 rounded-md">
            <div className="flex gap-3">
                <img src={Women1} className="rounded-full w-14 h-14" alt="" />
                <div>
                    <p>Chris Pustelak</p>
                    <p className="text-slate-700 ">
                        VP of Operations, Gurley leep Automotive Group
                    </p>
                </div>
            </div>
            <div>
                <img src={Quote} className="m-auto" alt="" />
            </div>
            <p className="leading-8 text-xl text-center pb-3 border-b">
                In 2022 alone, we have surpassed the past 3 years ( in leads,
                Customers & net profit )
            </p>
            <div className="leading-8 text-center text-slate-700 pb-3 border-b">
                <p className="text-4xl font-bold">
                    <Keyword>39%</Keyword>
                </p>
                <p>Average net profit increase</p>
            </div>
            <div>
                <p className="text-center">Product Used:</p>
                <div className="flex gap-4 flex-wrap justify-center mt-4">
                    <ProductBox text={"Payments"} />
                    <ProductBox text={"Inbox"} />
                    <ProductBox text={"Reviews"} />
                    <ProductBox text={"Webchat"} />
                </div>
            </div>
        </div>
    );
}

function ProductBox({ text }) {
    return (
        <div className="px-4 py-2 rounded-3xl bg-[#4563FF] text-white">
            {text}
        </div>
    );
}
