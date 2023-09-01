import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import FAQBox from "./FAQBox";
import { getAffilateFAQs, getFAQSection, getFAQs } from "../../api/AffilateAPI";
import HandleText from "../HandleText";

export default function FAQSection(props) {
    let [Heading, setHeading] = useState(props.heading);
    let [keyword, setKeyword] = useState(props.keyword);
    let [Paragraph, setParagraph] = useState(props.description);

    useEffect(() => {
        let fun = async () => {
            let data = await getFAQSection();
            let { heading, keyword, description } = data.data.attributes;
            setHeading(heading);
            setKeyword(keyword);
            setParagraph(description);
        };
        fun();
    }, []);

    return (
        <>
            <SectionHeader
                keyword={keyword}
                title={<HandleText text={Heading} />}
                paragraph={Paragraph}
            />

            <div className="flex gap-4 gap-y-8 flex-wrap justify-center py-16">
                <AllFaq affilate={props.affilate} />
            </div>
        </>
    );
}

function AllFaq({ affilate }) {
    let [faqs, setFaqs] = useState(null);
    async function a() {
        let g = null;
        if (affilate) {
            g = await getAffilateFAQs();
        } else {
            g = await getFAQs();
        }
        setFaqs(g.data);
    }
    useEffect(() => {
        a();
    }, []);
    return (
        <>
            {faqs &&
                faqs.map((a, index) => (
                    <FAQBox
                        answer={a.attributes.answer}
                        question={a.attributes.question}
                        key={index}
                    />
                ))}
        </>
    );
}
