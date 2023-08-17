import { useEffect, useState } from "react";
import VideoBox from "./VideoBox";
import { getVideos } from "../../api/CaseStudyAPI";

export default function VideoSection() {
    let [data, setData] = useState(null);

    useEffect(() => {
        let fun = async () => {
            let data = await getVideos();
            setData(data.data);
        };
        fun();
    }, []);

    return (
        <div className="mt-8">
            {data &&
                data.map((video, index) => (
                    <VideoBox
                        number={index}
                        key={index}
                        data={video.attributes}
                    />
                ))}
            {/* <VideoBox number={1} /> */}
            {/* <VideoBox number={2} /> */}
            {/* <VideoBox number={3} /> */}
            {/* <VideoBox number={4} /> */}
        </div>
    );
}
