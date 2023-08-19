import Video_Image from "../../images/Video_Image.png";
import Logo1 from "../../images/Logo1.svg";
import Logo2 from "../../images/Logo2.svg";
import Logo3 from "../../images/Logo3.svg";
import Logo4 from "../../images/Logo4.svg";
import Logo5 from "../../images/Logo5.svg";

export default function VideoSection() {
    return (
        <div className="my-36">
            <div className="relative ">
                <img
                    src={Video_Image}
                    className="z-10 relative rounded-lg h-[60vh] md:h-[90vh] w-[100vw]"
                    alt=""
                />
                <div className="hidden md:block -top-8 -right-6 absolute w-[15vw] h-[20vh] rounded-lg bg-blue-500"></div>
                <div className="hidden md:block -left-6 -bottom-8 absolute w-[15vw] h-[20vh] rounded-lg bg-blue-500"></div>
            </div>

            <div className="mt-24 flex justify-between flex-wrap">
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
            </div>
        </div>
    );
}
