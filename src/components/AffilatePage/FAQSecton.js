import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import FAQBox from "./FAQBox";
import { getFAQSection, getFAQs } from "../../api/AffilateAPI";
import HandleText from "../HandleText";

export default function FAQSection() {
    let [Heading, setHeading] = useState("");
    let [keyword, setKeyword] = useState("");
    let [Paragraph, setParagraph] = useState("");

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
                <AllFaq />
            </div>
        </>
    );
}

function AllFaq() {
    let [faqs, setFaqs] = useState(null);
    async function a() {
        let g = await getFAQs();
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
