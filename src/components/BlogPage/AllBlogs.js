import Link from "next/link";
import Button from "../Button";
import Keyword from "../Keyword";

export default function AllBlogs({ data }) {
    return (
        <div>
            <div className="mt-16 flex  justify-center gap-10 flex-wrap ">
                {data &&
                    data.map((a, index) => (
                        <BlogBox key={index} data={a.attributes} />
                    ))}
            </div>
        </div>
    );
}

function BlogBox({ data }) {
    return (
        <div className="zoom transition-all  border hover:border-blue-500 shadow-md overflow-hidden rounded-lg  flex  flex-col lg:w-[30%]">
            <img
                src={data.thumbnail.data.attributes.url}
                className={`  w-full h-[200px]`}
            />

            <div className="py-6 flex flex-col gap-4 px-6">
                <p className="text-xl tracking-wider text-[#060C3C] font-bold ">
                    <Keyword>{data.category.toUpperCase()}</Keyword>
                </p>
                <div className="tracking-wide text-xl w-full  text-[#060C3C] font-bold ">
                    {data.title}
                </div>
                <div className="tracking-wide text-lg text-slate-700 pb-3 border-b">
                    {data.description}
                </div>
                <div className="mt-auto">
                    <Link href={`/blog/${data.slug}`}>
                        <Button>Read More</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
