import Keyword from "../Keyword";

export default function WhatYouNeedSection() {
    return (
        <div className="flex flex-col gap-8 justify-center items-center mt-28">
            <h1 className="text-4xl font-bold w-[70vw] md:w-[40vw] text-[#1C2752] leading-[1.7em] text-center">
                Everything <Keyword>local businesses</Keyword> need to grow
            </h1>
            <p className="text-slate-700 w-[70vw] md:w-[30vw] leading-[1.7em] text-center">
                We know what works, what doesn't and we have helped many local
                businesses before.
            </p>
            <div className="rounded-md bg-[#F5F5F5] flex p-16 gap-16 flex-wrap md:flex-nowrap">
                <StatBox
                    title={"#1 Rank"}
                    para={
                        "Drive more customers to your business with a #1 Google ranking."
                    }
                />
                <StatBox
                    title={"98% Open Rate"}
                    para={
                        "Take advantage of the only channel with a 98% open rate. Text campaigns that get immediate results."
                    }
                />
                <StatBox
                    title={"10x Reviews"}
                    para={
                        "Local businesses that partner with us see over double the monthly review volume in less than 30 days."
                    }
                />
            </div>
        </div>
    );
}

function StatBox({ title, para }) {
    return (
        <div className="flex flex-col gap-4 text-center w-full md:w-2/6">
            <h3 className="font-bold text-4xl text-center text-blue-500">
                {title}
            </h3>
            <p className="text-slate-700 text-center">{para}</p>
        </div>
    );
}
