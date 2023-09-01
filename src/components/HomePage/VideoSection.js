import { STRAPI_URL } from "../../api/Constant";
import { getVideoSection } from "../../api/HomePageAPI";
import Video_Image from "../../images/Video_Image.png";
import { useEffect, useState } from "react";
import HandleText from "../HandleText";
import Image from "next/image";

export default function VideoSection(props) {
    let [video, setVideo] = useState(props.video ? props.video.data : null);
    let [heading, setHeading] = useState(props.heading);
    let [logos, setLogos] = useState(props.logos);

    useEffect(() => {
        let fun = async () => {
            let Data = await getVideoSection();
            console.log(Data);
            let { heading, video, logos } = Data.data.attributes;
            setHeading(heading);
            setVideo(video.data);
            setLogos(logos);
        };

        fun();
    }, []);

    return (
        <div className="my-36">
            <div className="relative hidden">
                {video && <video src={STRAPI_URL + video.attributes.url} />}
                <Image
                    src={Video_Image}
                    style={{ display: video ? "none" : "block" }}
                    className="z-10 relative rounded-lg h-[60vh] md:h-[90vh] w-[100vw]"
                    alt=""
                />
                <div className="hidden md:block -top-8 -right-6 absolute w-[15vw] h-[20vh] rounded-lg bg-blue-500"></div>
                <div className="hidden md:block -left-6 -bottom-8 absolute w-[15vw] h-[20vh] rounded-lg bg-blue-500"></div>
            </div>

            <div className="mt-24 ">
                <h1 className="text-4xl md:text-5xl font-bold mb-16 text-[#1C2752]  leading-[1.3em] md:leading-[1.7em] text-center">
                    {" "}
                    <HandleText text={heading} />{" "}
                </h1>
                <div className="flex justify-between gap-8 flex-wrap">
                    {logos &&
                        logos.data.map((logo, index) => (
                            <img
                                src={STRAPI_URL + logo.attributes.url}
                                key={index}
                                className="w-[40%] md:w-[27%] lg:w-fit"
                                alt=""
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
