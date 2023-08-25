import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AffilatePAGE from "./pages/AffilatePage";
import PricingPAGE from "./pages/Pricing";
import CaseStudyPAGE from "./pages/CaseStudyPage";
import HomePAGE from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/TermsCondition";

function App() {
    return (
        <>
            <div className="App  px-8 pt-4 md:px-[80px] md:pt-9 overflow-x-hidden">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<HomePAGE />}></Route>
                        <Route
                            exact
                            path="/pricing"
                            element={<PricingPAGE />}
                        ></Route>
                        <Route
                            exact
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        ></Route>
                        <Route
                            exact
                            path="/terms-and-conditions"
                            element={<Terms />}
                        ></Route>
                        <Route
                            exact
                            path="/casestudy"
                            element={<CaseStudyPAGE />}
                        ></Route>
                        <Route
                            exact
                            path="/partners"
                            element={<AffilatePAGE />}
                        ></Route>
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </>
    );
}

export default App;
