import { LinkButton } from "../Button";
import Keyword from "../Keyword";
import Women1 from "../../images/Women1.png";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "../../images/arrow-left.svg";

export default function BlogHead() {
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
                <Keyword>Marketing</Keyword>{" "}
                <span className="text-slate-700 ml-5">2 Sep 2023</span>
            </p>
            <h1 className="text-3xl tracking-wider leading-[1.3em] lg:text-5xl  font-bold w-full  text-[#1C2752] lg:leading-[1.4em]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
                architecto!
            </h1>
            <div className="flex my-3 gap-5 items-center">
                <Image src={Women1} alt="" />
                <div>
                    <p className="text-lg text-[#060C3C]">James Cameron </p>
                    <p className="text-slate-700 ">Movie Director</p>
                </div>
            </div>

            <div className="w-full mt-6 rounded-lg bg-emerald-500 h-[400px]"></div>
        </div>
    );
}
