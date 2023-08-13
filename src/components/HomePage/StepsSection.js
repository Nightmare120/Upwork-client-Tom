import StepBox from "./StepBox";
import Step1 from "../../images/Step1.png";
import Step2 from "../../images/Step2.png";
import Step3 from "../../images/Step3.png";
import Step4 from "../../images/Step4.png";
import Step5 from "../../images/Step5.png";
import Step6 from "../../images/Step6.png";
import { useEffect, useState } from "react";
import { getSteps } from "../../api/HomePageAPI";

const IMAGES = [Step1, Step2, Step3, Step4, Step5, Step6];

export default function StepsSection() {
    let [steps, setSteps] = useState([]);
    useEffect(() => {
        let fun = async () => {
            let Data = await getSteps();
            setSteps(Data.data);
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
