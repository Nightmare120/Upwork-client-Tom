import { NextSeo } from "next-seo";

export default function HandleSeo({ seo }) {
    function HanldeAdditonalTags() {
        let additonalTags = [];
        if (seo.metaImage) {
            additonalTags.push({
                property: "og:image",
                content: "Jane Doe",
            });
        }
        if (seo.metaViewport) {
            additonalTags.push({
                name: "viewport",
                content: seo.metaViewport,
            });
        }
        if (seo.keywords) {
            additonalTags.push({
                name: "keywords",
                content: seo.keywords,
            });
        }
        return additonalTags;
    }
    return (
        <>
            {seo && (
                <NextSeo
                    title={seo.metaTitle ? seo.metaTitle : undefined}
                    description={
                        seo.metaDescription ? seo.metaDescription : undefined
                    }
                    canonical={seo.canonicalURL ? seo.canonicalURL : undefined}
                    robotsProps={seo.metaRobots ? seo.metaRobots : undefined}
                    additionalMetaTags={HanldeAdditonalTags()}
                />
            )}
        </>
    );
}
