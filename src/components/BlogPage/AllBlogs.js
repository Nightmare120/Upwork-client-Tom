import Link from "next/link";
import Button from "../Button";
import Keyword from "../Keyword";

const DATA = [
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, odit!",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur recusandae, fugiat aspernatur at ratione similique dicta atque ",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, odit!",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur recusandae, fugiat aspernatur at ratione similique dicta atque ",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, odit!",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur recusandae, fugiat aspernatur at ratione similique dicta atque ",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, odit!",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur recusandae, fugiat aspernatur at ratione similique dicta atque ",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, odit!",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur recusandae, fugiat aspernatur at ratione similique dicta atque ",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, odit!",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur recusandae, fugiat aspernatur at ratione similique dicta atque ",
    },
];

export default function AllBlogs() {
    return (
        <div>
            <div className="mt-16 flex justify-center gap-10 flex-wrap ">
                {DATA &&
                    DATA.map((a, index) => <BlogBox key={index} data={a} />)}
                {/* <TestimonialBox />
                <TestimonialBox /> */}
            </div>
        </div>
    );
}

const BgColor = [
    "bg-red-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-emerald-500",
];

function BlogBox({ data }) {
    function getBg() {
        let randomElement = BgColor[Math.floor(Math.random() * BgColor.length)];

        return `${randomElement}`;
    }
    return (
        <div className="border shadow-md overflow-hidden rounded-lg  flex h-fit flex-col lg:w-[30%]">
            <div className={`${getBg()}  w-full h-[200px]`}></div>

            <div className="py-6 flex flex-col gap-4 px-6">
                <p className="text-xl tracking-wider text-[#060C3C] font-bold ">
                    <Keyword>Marketing</Keyword>
                </p>
                <div className="tracking-wide text-xl w-full  text-[#060C3C] font-bold ">
                    {data.title}
                </div>
                <div className="tracking-wide text-lg text-slate-700 pb-3 border-b">
                    {data.desc}
                </div>
                <div className="mt-auto">
                    <Link href={"/blog/kjhakhfk"}>
                        <Button>Read More</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
