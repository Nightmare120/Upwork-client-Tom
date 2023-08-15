import Button from "../components/Button";
import Keyword from "../components/Keyword";
import SectionHeader from "../components/SectionHeader";

export default function CaseStudyPAGE() {
    return (
        <>
            <SectionHeader
                keyword={"Read Stories"}
                title={
                    <p>
                        See how <Keyword>Locom</Keyword> is helping companies
                        save <Keyword>thousands on their SaaS</Keyword> spend.
                    </p>
                }
                paragraph={
                    "It is a long established fact that a reader will be distracted by the readable content, It is a long established fact that a reader."
                }
            />
            <Button>Start free trial</Button>
        </>
    );
}
