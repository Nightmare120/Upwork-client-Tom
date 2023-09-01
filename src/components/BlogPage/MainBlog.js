import { ButtonSecondary } from "../Button";
import HandleText from "../HandleText";
import Keyword from "../Keyword";

export default function MainBlog() {
    return (
        <div className="flex flex-col lg:flex-row my-12 mb-28 overflow-x-hidden w-full gap-8">
            <div className=" w-full lg:w-[60vw]">
                <div className="bg-purple-600 w-[90%] rounded-lg h-[300px] lg:h-[100%] m-auto"></div>
            </div>
            <div className="w-full lg:w-[40vw] flex flex-col gap-5">
                <p className="text-xl tracking-wider text-[#060C3C] font-bold ">
                    <Keyword>Marketing</Keyword>
                </p>
                <h1 className="text-4xl tracking-wide leading-[1.2em] text-[#060C3C] font-bold ">
                    {" "}
                    <HandleText
                        text={
                            "Hahah h//main// is a odit ipsum assumenda repellendus esse sunt necessitatibus animi d "
                        }
                    />
                </h1>
                <p className="text-slate-700 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid a odit ipsum assumenda repellendus esse sunt,
                    necessitatibus animi doloremque autem rem soluta odio
                    voluptates tenetur quam ducimus ipsam eos atque?
                </p>
                <span>
                    <ButtonSecondary>Read More</ButtonSecondary>
                </span>
            </div>
        </div>
    );
}
