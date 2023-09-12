import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../components/Range.css";
import "./PrivacyPolicy.css";
import "../components/ToggleButton.css";
import "../index.css";
import "../App.css";
import "./blog/blogPage.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Head from "next/head";
import Script from "next/script";

// import "../globals.css";

// import "../styles/globals.css";
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </Head>

            <Script id="show-banner">
                {`var o_options = {domain: "locom.outseta.com",load: "chat",};`}
            </Script>
            <Script src="https://example.com/script.js" />
            <Script
                src="https://cdn.outseta.com/outseta.min.js"
                data-options="o_options"
            ></Script>
            <div className="App  px-8 pt-4 md:px-[80px] md:pt-9 overflow-x-hidden">
                <DefaultSeo {...SEO} />
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    );
}
