import StepBox from "./StepBox";
import Step1 from "../../images/Step1-transformed.png";
import Step2 from "../../images/Step2-transformed.png";
import Step3 from "../../images/Step3.png";
import Step4 from "../../images/Step4-transformed.png";
import Step5 from "../../images/Step5-transformed.png";
import Step6 from "../../images/Step6-transformed.png";
// import Step1 from "../../images/Step1.svg";
// import Step2 from "../../images/Step2.svg";
// import Step3 from "../../images/Step3.png";
// import Step4 from "../../images/Step4.svg";
// import Step5 from "../../images/Step5.svg";
// import Step6 from "../../images/Step6.svg";
import { useEffect, useState } from "react";
import { getSteps } from "../../api/HomePageAPI";

const IMAGES = [Step1, Step2, Step3, Step4, Step5, Step6];

export default function StepsSection() {
    let [steps, setSteps] = useState([]);
    useEffect(() => {
        let fun = async () => {
            let Data = await getSteps();
            setSteps(Data.data);
            console.log(Data.data);
        };

        fun();
    }, []);
    return (
        <>
            {steps &&
                steps.map((step, index) => (
                    <StepBox
                        key={index}
                        image={IMAGES[index]}
                        stepNo={step.attributes.Number}
                        stepTitle={step.attributes.Name}
                        stepDesc={step.attributes.Description}
                        steps={step.attributes.Steps}
                        reverse={index % 2 !== 0}
                    />
                ))}
        </>
    );
}
