import { useEffect, useState } from "react";
import Banner from "../../components/BlogPage/Banner";
import BlogHead from "../../components/BlogPage/BlogHead";
import { useRouter } from "next/router";
import { getBlog } from "../../api/BlogApi";
import ReactMarkdown from "react-markdown";
import LeadMagnet from "../../components/BlogPage/LeadMagnet";

export default function BlogReadingPage() {
    const router = useRouter();

    let [content, setContent] = useState(null);

    useEffect(() => {
        let fun = async () => {
            let data = await getBlog(router.query.blogslug);
            console.log(data.data[0].attributes);
            setContent(data.data[0].attributes);
        };
        fun();
    }, []);

    return (
        <div>
            <div className="w-full flex flex-col gap-12">
                <div className="w-full lg:w-[60%]">
                    {content && <BlogHead content={content} />}
                </div>
                <div className="w-full flex justify-between">
                    <div className="blog-content flex flex-col gap-12  lg:w-[60%]">
                        {content && (
                            <ReactMarkdown>{content.body}</ReactMarkdown>
                        )}
                    </div>
                    {content && <LeadMagnet {...content.lead_magnet} />}
                </div>
            </div>
            <Banner />
        </div>
    );
}
