// import Thumbnail from "../../images/Video_Image.png";
import ArrowBottomRight from "../../images/Arrow_bottom_right.svg";
import ArrowBottomLeft from "../../images/Arrow_bottom_left.svg";
import { STRAPI_URL } from "../../api/Constant";

export default function VideoBox({ number, data }) {
    function isReverse() {
        if (number % 2 === 0) {
            return false;
        }
        return true;
    }

    function haveToShowBottomArrow() {
        if (number === 0) {
            return false;
        }
        return true;
    }

    return (
        <div
            className={`flex ${
                isReverse() ? "flex-row-reverse" : ""
            } gap-32  items-start`}
        >
            <div className="flex flex-col gap-4 w-[90vw] lg:w-[35vw] mt-16">
                <h3 className="text-black text-2xl font-bold">{data.title}</h3>
                <p className="text-slate-700 ">{data.description}</p>
                <img
                    src={STRAPI_URL + data.thumbnail.data.attributes.url}
                    className=" w-[90vw] h-[50vh] lg:w-[35vw] lg:h-[35vh]"
                    style={{
                        display: data.video.data ? "none" : "block",
                    }}
                    alt=""
                />
                {data.video.data && (
                    <video
                        src={STRAPI_URL + data.video.data.attributes.url}
                        className="w-[90vw] h-[50vh] lg:w-[35vw] lg:h-[35vh]"
                    ></video>
                )}
            </div>
            <img
                className={`hidden mt-16 mx-16 ${
                    haveToShowBottomArrow() ? "lg:block" : "lg:hidden"
                }`}
                src={isReverse() ? ArrowBottomRight : ArrowBottomLeft}
                alt=""
            />
        </div>
    );
}
