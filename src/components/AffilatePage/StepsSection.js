import { useEffect, useState } from "react";
import { STRAPI_URL } from "../../api/Constant";
import StepBox from "./StepBox";
import { getStepsSection } from "../../api/AffilateAPI";

export default function StepsSection(props) {
    let [steps, setSteps] = useState(props.data);
    useEffect(() => {
        let fun = async () => {
            let Data = await getStepsSection();
            console.log("data: ", Data);
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
                        image={step.attributes.Picture.data.attributes.url}
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
