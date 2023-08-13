import SectionHeader from "../SectionHeader";
import Quote from "../../images/Quote.svg";
import Keyword from "../Keyword";
import { getTestimonialSection } from "../../api/HomePageAPI";
import { useEffect, useState } from "react";
import { STRAPI_URL } from "../../api/Constant";

export default function TestimonialSection() {
    let [testimonials, setTestimonials] = useState(null);
    async function a() {
        let g = await getTestimonialSection();
        setTestimonials(g.data);
    }
    useEffect(() => {
        a();
    }, []);
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
                {testimonials &&
                    testimonials.map((a, index) => (
                        <TestimonialBox key={index} data={a.attributes} />
                    ))}
                {/* <TestimonialBox />
                <TestimonialBox /> */}
            </div>
        </div>
    );
}

function TestimonialBox({ data }) {
    return (
        <div className="border p-9 flex flex-col gap-8 rounded-md lg:w-1/3 m-auto">
            <div className="flex gap-3">
                <img
                    src={STRAPI_URL + data.Picture.data.attributes.url}
                    className="rounded-full w-14 h-14"
                    alt=""
                />
                <div>
                    <p>{data.Name}</p>
                    <p className="text-slate-700 ">{data.Position}</p>
                </div>
            </div>
            <div>
                <img src={Quote} className="m-auto" alt="" />
            </div>
            <p className="leading-8 text-xl text-center pb-3 border-b">
                {data.Quote}
            </p>
            <div className="leading-8 text-center text-slate-700 pb-3 border-b">
                <p className="text-4xl font-bold">
                    <Keyword>{data.StatsData}</Keyword>
                </p>
                <p>{data.StatsDesc}</p>
            </div>
            <div>
                <p className="text-center">Product Used:</p>
                <div className="flex gap-4 flex-wrap justify-center mt-4">
                    {data &&
                        data.Products.map((p, index) => (
                            <ProductBox key={index} text={p} />
                        ))}
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
