import Women1 from "../../images/Women1.png";
import Quote from "../../images/Quote.svg";
import { STRAPI_URL } from "../../api/Constant";

export default function TestimonyBox({ data }) {
    return (
        <div className="m-auto w-[80vw] lg:w-[70vw] flex flex-col justify-center items-center gap-8">
            <img src={Quote} alt="" />
            <p className="text-slate-700 leading-7 text-center">{data.quote}</p>
            <img
                src={STRAPI_URL + data.picture.data.attributes.url}
                className="rounded-full w-16 h-16"
                alt=""
            />
            <div className="text-center">
                <p className="text-2xl font-bold">{data.name}</p>
                <p>{data.position}</p>
            </div>
        </div>
    );
}
