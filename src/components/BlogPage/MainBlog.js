import { ButtonSecondary } from "../Button";
import HandleText from "../HandleText";
import Keyword from "../Keyword";
import Link from "next/link";

export default function MainBlog({ content }) {
    console.log(content, "contnet");
    content = content.attributes;

    return (
        <div className="flex flex-col lg:flex-row my-12 mb-28 overflow-x-hidden w-full gap-8">
            <div className=" w-full lg:w-[60vw]">
                <img
                    src={content.thumbnail.data.attributes.url}
                    className=" w-[90%] rounded-lg h-[300px] lg:h-[100%] m-auto"
                />
            </div>
            <div className="w-full lg:w-[40vw] flex flex-col gap-5">
                <p className="text-xl tracking-wider text-[#060C3C] font-bold ">
                    <Keyword>{content.category.toUpperCase()}</Keyword>
                </p>
                <h1 className="text-4xl tracking-wide leading-[1.2em] text-[#060C3C] font-bold ">
                    {" "}
                    <HandleText text={content.title} />
                </h1>
                <p className="text-slate-700 text-lg">{content.description}</p>
                <span>
                    <Link href={`/blog/${content.slug}`}>
                        <ButtonSecondary>Read More</ButtonSecondary>
                    </Link>
                </span>
            </div>
        </div>
    );
}
