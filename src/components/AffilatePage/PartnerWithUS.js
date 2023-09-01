import Button from "../Button";
import Keyword from "../Keyword";
import SectionHeader from "../SectionHeader";
import { useEffect, useState } from "react";
import { getBEcomeAffilateSection } from "../../api/AffilateAPI";

export default function PartnerWithUsSection(props) {
    let [Heading, setHeading] = useState(props.heading);
    let [buttonText, setButtonText] = useState(props.buttonText);
    let [Paragraph, setParagraph] = useState(props.description);

    useEffect(() => {
        let fun = async () => {
            let data = await getBEcomeAffilateSection();
            let { heading, buttonText, description } = data.data.attributes;
            setHeading(heading);
            setButtonText(buttonText);
            setParagraph(description);
        };
        fun();
    }, []);
    return (
        <>
            <div className="mt-20 lg:mt-32">
                <SectionHeader
                    notShowKeyword
                    title={Heading}
                    shouldNotTakeTopMargin
                    paragraph={Paragraph}
                />
                <div className="flex gap-4  flex-col md:flex-row md:justify-center md:items-center md:gap-8 mt-8">
                    <Button>{buttonText}</Button>
                </div>
            </div>
        </>
    );
}
