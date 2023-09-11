import { useEffect, useState } from "react";
import Banner from "../../components/BlogPage/Banner";
import BlogHead from "../../components/BlogPage/BlogHead";
import { useRouter } from "next/router";
import { getBlog, getEveryBlogs } from "../../api/BlogApi";
import ReactMarkdown from "react-markdown";
import LeadMagnet from "../../components/BlogPage/LeadMagnet";
import HandleSeo from "../../components/HandleSeo";

export default function BlogReadingPage(props) {
    const router = useRouter();

    let [content, setContent] = useState(props.content);

    useEffect(() => {
        let fun = async () => {
            let data = await getBlog(router.query.blogslug);
            setContent(data.data[0].attributes);
        };
        fun();
    }, []);

    return (
        <div>
            <HandleSeo seo={content.seo} />
            <div className="w-full flex flex-col gap-12">
                <div className="w-full lg:w-[60%]">
                    {content && <BlogHead content={content} />}
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between">
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

export async function getStaticPaths() {
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            paths: [],
            fallback: "blocking",
        };
    }

    const res = await getEveryBlogs();
    const posts = await res.data;
    const paths = posts.map((post) => ({
        params: { id: post.id, blogslug: post.attributes.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps(props) {
    let slug = props.params.blogslug;
    let data = await getBlog(slug);
    return {
        props: {
            content: data.data[0].attributes,
        },
    };
}
