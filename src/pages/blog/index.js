import AllBlogs from "../../components/BlogPage/AllBlogs";
import Banner from "../../components/BlogPage/Banner";
import MainBlog from "../../components/BlogPage/MainBlog";
// import { ButtonSecondary } from "../../components/Button";
// import HandleText from "../../components/HandleText";
// import Keyword from "../../components/Keyword";
// import SectionHeader from "../../components/SectionHeader";

export default function BlogPage() {
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
            <MainBlog />
            <h1 className="m-auto text-3xl leading-[1.3em] lg:text-4xl font-bold w-full lg:w-[70%] text-[#1C2752] lg:leading-[1.7em] text-center">
                <p>Read more from the world of Locom.ai</p>
            </h1>
            <AllBlogs />
            <Banner />
        </>
    );
}
