import Keyword from "../Keyword";
import SectionHeader from "../SectionHeader";
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";

import ArrowLeft from "../../images/ArrowLeft.svg";
import ArrowRight from "../../images/ArrowRight.svg";
import "swiper/css";
import TestimonyBox from "./TestimonyBox";
import { getTestimonials } from "../../api/AffilateAPI";

register();
export default function TestimonialSection() {
    const swiperElRef = useRef(null);

    let [testimonials, setTestimonials] = useState(null);
    async function a() {
        let g = await getTestimonials();
        setTestimonials(g.data);
    }
    useEffect(() => {
        a();
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener("progress", (e) => {
            const [swiper, progress] = e.detail;
        });

        swiperElRef.current.addEventListener("slidechange", (e) => {});
    }, []);

    return (
        <>
            <SectionHeader
                keyword={"Testimonial"}
                title={
                    <p>
                        Here's what the customers you refer get with{" "}
                        <Keyword>Locom</Keyword>
                    </p>
                }
            />
            <div className="w-full h-8"></div>
            <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                // navigation="true"
            >
                {testimonials &&
                    testimonials.map((a, index) => (
                        <swiper-slide key={index}>
                            <TestimonyBox data={a.attributes} />
                        </swiper-slide>
                    ))}

                {/* <swiper-slide>
                    <TestimonyBox />
                </swiper-slide>
                <swiper-slide>
                    <TestimonyBox />
                </swiper-slide>
                <swiper-slide>
                    <TestimonyBox />
                </swiper-slide>
                <swiper-slide>
                    <TestimonyBox />
                </swiper-slide> */}
            </swiper-container>
            {/* <NavigatorLeft
                onclick={() => {
                    console.log(swiperElRef);
                }}
            /> */}
            {/* <NavigatorRight /> */}
        </>
    );
}

function NavigatorLeft(onclick) {
    // const swiper = useSwiper();

    return (
        <div
            onClick={() => {
                console.log(onclick());
            }}
        >
            <img src={ArrowLeft} alt="" />;
        </div>
    );
}
function NavigatorRight() {
    // const swiper = useSwiper();

    return <img src={ArrowRight} alt="" />;
}
