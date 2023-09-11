import Link from "next/link";
import Button from "../Button";

export default function LeadMagnet({
    image,
    title,
    actionText,
    actionRedirect,
}) {
    return (
        <div className=" lg:w-[25%] h-fit sticky justify-center items-center p-5 rounded-lg bg-blue-500 bg-opacity-10 flex flex-col  gap-5">
            <img src={image} alt="" />
            <h1 className="leading-7 text-lg"> {title}</h1>
            {/* <Link href={actionRedirect}> */}
            <a href={actionRedirect}>
                <Button>{actionText}</Button>
            </a>
            {/* </Link> */}
        </div>
    );
}
