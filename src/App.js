import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AffilatePAGE from "./pages/AffilatePage";
import PricingPAGE from "./pages/Pricing";
import CaseStudyPAGE from "./pages/CaseStudyPage";
import HomePAGE from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <div className="App  px-8 py-4 md:px-[80px] md:py-9 overflow-x-hidden">
                <Navbar />
                <Router>
                    <Routes>
                        <Route exact path="/" element={<HomePAGE />}></Route>
                        <Route
                            exact
                            path="/price"
                            element={<PricingPAGE />}
                        ></Route>
                        <Route
                            exact
                            path="/casestudy"
                            element={<CaseStudyPAGE />}
                        ></Route>
                        <Route
                            exact
                            path="/affilate"
                            element={<AffilatePAGE />}
                        ></Route>
                    </Routes>
                </Router>
            </div>
            <Footer />
        </>
    );
}

export default App;
