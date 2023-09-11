import { useEffect, useState } from "react";
import AllBlogs from "../../components/BlogPage/AllBlogs";
import Banner from "../../components/BlogPage/Banner";
import MainBlog from "../../components/BlogPage/MainBlog";
import { getAllBlogs, getHeroSection } from "../../api/BlogApi";
import { useSearchParams } from "next/navigation";
import HandleSeo from "../../components/HandleSeo";

export default function BlogPage(props) {
    let [blogs, setBlogs] = useState(null);
    const searchParams = useSearchParams();
    const page = searchParams.get("page");

    useEffect(() => {
        let fun = async () => {
            let data = await getAllBlogs(page ? Number(page) : 1);
            setBlogs(data.data.length === 0 ? null : data);
        };
        fun();
    }, []);

    return (
        <>
            <HandleSeo seo={props.data.seo} />
            <div className=" mt-16 flex flex-col justify-center items-center">
                <p
                    className={`text-slate-700 w-full lg:w-[70%] leading-[1.7em] text-center`}
                >
                    {props.data.sub_heading}
                </p>
                <h1 className="text-3xl  leading-[1.3em] lg:text-6xl font-bold w-full lg:w-[70%] text-[#1C2752] lg:leading-[1.7em] text-center">
                    {props.data.heading}
                </h1>
            </div>
            {blogs && <MainBlog content={blogs.data[0]} />}
            <h1 className="m-auto text-3xl leading-[1.3em] lg:text-4xl font-bold w-full lg:w-[70%] text-[#1C2752] lg:leading-[1.7em] text-center">
                <p>{props.data.heading2}</p>
            </h1>
            {blogs && <AllBlogs data={blogs.data.slice(1, blogs.length)} />}
            <Banner />
        </>
    );
}

// export async function getStaticPaths() {
//     if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//         return {
//             paths: [],
//             fallback: "blocking",
//         };
//     }

//     const res = await getAllBlogs(1);
//     const pages = await res.meta.pagination.pageCount;
//     let paths = [];
//     for (let index = 0; index < pages; index++) {
//         paths.push({
//             params: { pageNo: index + 1 },
//         });
//     }

//     return { paths, fallback: false };
// }

export async function getStaticProps() {
    let data = await getHeroSection();
    // console.log(data);
    return {
        props: {
            data: data.data.attributes,
        },
    };
}
