import Footer from "./components/Footer";
import ExperienceBox from "./components/HomePage/ExperienceBox";
import HeroSection from "./components/HomePage/HeroSection";
import StepBox from "./components/HomePage/StepBox";
import TestimonialSection from "./components/HomePage/TestimonialSection";
import TrialSection from "./components/HomePage/TrialSection";
import VideoSection from "./components/HomePage/VideoSection";
import WhatYouNeedSection from "./components/HomePage/WhatYouNeedSection";
import Keyword from "./components/Keyword";
import Navbar from "./components/Navbar";
import SectionHeader from "./components/SectionHeader";
import Step1 from "./images/Step1.png";
import Step2 from "./images/Step2.png";
import Step3 from "./images/Step3.png";
import Step4 from "./images/Step4.png";
import Step5 from "./images/Step5.png";
import Step6 from "./images/Step6.png";

function App() {
    return (
        <>
            <div className="App  px-4 py-4 md:px-[60px] md:py-9 overflow-x-hidden">
                <Navbar />
                <HeroSection />
                <VideoSection />
                <SectionHeader
                    keyword={"Promblem"}
                    title={
                        <p>
                            Struggling to unlock the full potential of{" "}
                            <Keyword> word-of-mouth</Keyword> recommendations
                            and online reputation?
                        </p>
                    }
                    paragraph={
                        "Don't let overlooked referrals and a lackluster online reputation hinder your business growth. Discover the solution that drives your sales to unprecedented levels."
                    }
                />
                <SectionHeader
                    keyword={"Solution"}
                    title={
                        <p>
                            Unleash the power of <Keyword>Locom</Keyword> to
                            grow your business
                        </p>
                    }
                    paragraph={
                        <>
                            Effortlessly tap into the potential of word-of-mouth
                            referrals, strengthen your online reputation, and
                            witness your sales reach new heights.
                            <br />
                            <br />
                            Experience the transformative power in your business
                            first hand.
                        </>
                    }
                />
                <ExperienceBox />
                <SectionHeader
                    keyword={"Features"}
                    title={"How it Works?"}
                    paragraph={
                        "It is a long established fact that a reader will be distracted by the readable content."
                    }
                />
                <StepBox
                    image={Step1}
                    stepNo={1}
                    stepTitle={"Referral program"}
                    stepDesc={
                        "Automated referral program to increase word of mouth referrals."
                    }
                />
                <StepBox
                    image={Step2}
                    stepNo={2}
                    stepTitle={"Google review engine"}
                    stepDesc={
                        "Equest reviews from customers with ease through QR code technology."
                    }
                    reverse
                />
                <StepBox
                    image={Step3}
                    stepNo={3}
                    stepTitle={"AI Google reviews"}
                    stepDesc={
                        "We don't respond automatically but we also allow the user check, review and then send the AI automated response.                    "
                    }
                />
                <StepBox
                    image={Step4}
                    stepNo={4}
                    stepTitle={"Track employee performance"}
                    stepDesc={
                        "Monitor your teams performance on the go, real honest feedback from your customers."
                    }
                    reverse
                />
                <StepBox
                    image={Step5}
                    stepNo={5}
                    stepTitle={"Advanced analytics"}
                    stepDesc={
                        "Track business growth, referral program performance & your google business."
                    }
                />
                <StepBox
                    image={Step6}
                    stepNo={6}
                    stepTitle={"Mobile application & QR code"}
                    stepDesc={"all from the convenience of your mobile device."}
                    reverse
                />
                <WhatYouNeedSection />
                <TestimonialSection />
                <TrialSection />
            </div>
            <Footer />
        </>
    );
}

export default App;
