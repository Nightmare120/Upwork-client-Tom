import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePAGE from "./pages/HomePage";

function App() {
    return (
        <>
            <div className="App  px-4 py-4 md:px-[60px] md:py-9 overflow-x-hidden">
                <Navbar />
                <HomePAGE />
            </div>
            <Footer />
        </>
    );
}

export default App;
