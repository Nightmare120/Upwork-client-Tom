import { LinkButton } from "../Button";
import Keyword from "../Keyword";
// import Women1 from "../../images/Women1.png";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "../../images/arrow-left.svg";
import Clock from "../../images/clock.svg";
import Instagram from "../../images/instagram.svg";
import Linkdin from "../../images/linkedin.svg";
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";

const Social_Media_Icon = {
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkdin,
};

export default function BlogHead({ content }) {
    return (
        <div className=" mt-16 flex flex-col gap-5 items-start">
            <Link href={"/blog"}>
                <LinkButton>
                    {" "}
                    <Image
                        src={ArrowLeft}
                        height={"32"}
                        width={"32"}
                        alt=""
                    />{" "}
                    Back To Home
                </LinkButton>
            </Link>
            <p className="text-lg tracking-wider text-[#060C3C]  ">
                <Keyword>{content.category.toUpperCase()}</Keyword>{" "}
                <span className="text-slate-700 ml-5">
                    {content.createdAt.split("T")[0]}
                </span>
            </p>
            <h1 className="text-3xl tracking-wider leading-[1.3em] lg:text-5xl  font-bold w-full  text-[#1C2752] lg:leading-[1.4em]">
                {content.title}
            </h1>
            <div className="flex justify-between w-full items-center">
                <div className="flex my-3 gap-5 items-center">
                    <img
                        src={content.author_image.data.attributes.url}
                        alt=""
                    />
                    <div>
                        <p className="text-lg text-[#060C3C]">
                            {content.author}{" "}
                        </p>
                        <p className="text-slate-700 ">
                            {content.author_position}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    {content.social_media_links &&
                        content.social_media_links.map((e, index) => (
                            <a href={e.link} key={index}>
                                <Image
                                    height={36}
                                    width={36}
                                    src={Social_Media_Icon[e.type]}
                                />
                            </a>
                        ))}
                </div>
            </div>

            <div className="flex gap-4">
                <Image src={Clock} /> {content.time_to_read} time to read
            </div>

            <img
                src={content.thumbnail.data.attributes.url}
                className="w-full mt-6 rounded-lg h-[400px]"
            />
        </div>
    );
}
