import Link from "next/link";
import Button, { ButtonWhite } from "../Button";
import HandleText from "../HandleText";
import { TickBox } from "../HomePage/StepBox";
import Input from "../Input";
import Image from "next/image";
import Logo from "../../images/Locom_Logo.svg";

let data = [
    "Loyalty and promotion tips ",
    "Industry insights from leading brands",
    "Case studies and best practises",
];

export default function Banner() {
    return (
        <div className="bg-[#007BFF] bg-opacity-10  flex flex-col lg:flex-row justify-between mt-16  rounded-lg w-full ">
            <div className=" m-5 p-5 rounded-lg">
                <div className=" flex w-full md:w-[40vw] flex-col gap-4 justify-start items-start">
                    <h3 className="text-4xl font-bold  text-[#1C2752] leading-[1.7em]">
                        <HandleText text={"Monthly loyalty newsletter"} />
                    </h3>
                    <p className="text-slate-700 ">
                        {
                            "Join thousands of marketers and developers getting the latest loyalty & promotion insights from Locom.AI. Every month, you’ll receive:"
                        }{" "}
                    </p>

                    {data &&
                        data.map((e, index) => (
                            <TickBox key={index} content={e} />
                        ))}
                </div>
            </div>
            <div className="w-full m-5 p-5 justify-center  md:w-[30vw] flex flex-col gap-4">
                <div className="flex justify-center items-center">
                    <Link href={"/"}>
                        <Image src={Logo} alt="" />
                    </Link>
                </div>
                <p className="text-[#384268] font-bold  ">Email</p>
                <Input placeholder={"Your business email"} />
                <Button>Subscribe</Button>
            </div>
        </div>
    );
}
