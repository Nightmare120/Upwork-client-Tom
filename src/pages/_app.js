import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../components/Range.css";
import "./PrivacyPolicy.css";
import "../components/ToggleButton.css";
import "../index.css";
import "../App.css";

// import "../globals.css";

// import "../styles/globals.css";
export default function MyApp({ Component, pageProps }) {
    return (
        <div className="App  px-8 pt-4 md:px-[80px] md:pt-9 overflow-x-hidden">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}