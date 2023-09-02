import Banner from "../../components/BlogPage/Banner";
import Paragraph, {
    BlockQuote,
    Heading,
} from "../../components/BlogPage/BlogElement";
import BlogHead from "../../components/BlogPage/BlogHead";

export default function BlogReadingPage() {
    return (
        <div>
            <div className="w-full lg:w-[60%] flex flex-col gap-12">
                <BlogHead />
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, aspernatur dolores asperiores nostrum sequi quod
                    deserunt quis veniam pariatur ad sint voluptatum ducimus
                    obcaecati facere consectetur consequatur eaque nihil?
                    Consequatur, corporis cumque aut esse totam culpa.
                </Paragraph>
                <Heading>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus, qui. Rem esse ducimus alias repellendus nemo
                    sit culpa aliquid neque.
                </Heading>
                <BlockQuote>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    odio sapiente deserunt consectetur totam quos quam ex!
                    Officia quaerat, perferendis mollitia voluptate,
                    necessitatibus voluptas vero fugiat, qui eaque incidunt
                    eveniet.
                </BlockQuote>
                <Paragraph italic>
                    The contents of the following blog should be taken as
                    guidance only. To ensure full compliance with the law, we
                    highly recommend working with your internal or external
                    legal counsel - particularly when dealing with complex use
                    cases or multi-market entities.{" "}
                </Paragraph>
            </div>
            <Banner />
        </div>
    );
}
