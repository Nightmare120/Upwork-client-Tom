import StepBox from "./StepBox";
import Step1 from "../../images/Locom Website Images/Locom Website Images/Locom - Website 9.webp";
import Step2 from "../../images/Locom Website Images/Locom Website Images/Locom - Website 4.webp";
import Step3 from "../../images/Locom Website Images/Locom Website Images/Locom - Website 7.webp";
import Step4 from "../../images/Locom Website Images/Locom Website Images/Locom - Website 12.webp";
import Step5 from "../../images/Locom Website Images/Locom Website Images/Locom - Website 5.webp";
import Step6 from "../../images/Locom Website Images/Locom Website Images/Locom - Website 6.webp";

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
        <div className="flex flex-col gap-36 mt-24">
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
        </div>
    );
}
