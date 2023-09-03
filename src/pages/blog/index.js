import { useEffect, useState } from "react";
import AllBlogs from "../../components/BlogPage/AllBlogs";
import Banner from "../../components/BlogPage/Banner";
import MainBlog from "../../components/BlogPage/MainBlog";
import { getAllBlogs } from "../../api/BlogApi";
import { useSearchParams } from "next/navigation";

export default function BlogPage() {
    let [blogs, setBlogs] = useState(null);
    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    console.log("page: ", page);

    useEffect(() => {
        let fun = async () => {
            let data = await getAllBlogs(page ? Number(page) : 1);
            console.log(page ? Number(page) : 1);
            console.log(data);
            setBlogs(data.data.length === 0 ? null : data);
        };
        fun();
    }, []);

    return (
        <>
            <div className=" mt-16 flex flex-col justify-center items-center">
                <p
                    className={`text-slate-700 w-full lg:w-[70%] leading-[1.7em] text-center`}
                >
                    Most Recent
                </p>
                <h1 className="text-3xl  leading-[1.3em] lg:text-6xl font-bold w-full lg:w-[70%] text-[#1C2752] lg:leading-[1.7em] text-center">
                    Latest News
                </h1>
            </div>
            {blogs && <MainBlog content={blogs.data[0]} />}
            <h1 className="m-auto text-3xl leading-[1.3em] lg:text-4xl font-bold w-full lg:w-[70%] text-[#1C2752] lg:leading-[1.7em] text-center">
                <p>Read more from the world of Locom.ai</p>
            </h1>
            {blogs && <AllBlogs data={blogs.data.slice(1, blogs.length)} />}
            <Banner />
        </>
    );
}
