import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreatePresale from "./pages/CreatePresale";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import { useGlobalContext } from "./providers/GlobalProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    const { darkMode, showNav } = useGlobalContext();

    return (
        <BrowserRouter>
            <div className="flex App">
                {/* <Navbar/> */}
                <div className={`w-full dark:bg-[#171717] bg-[#FCFCFC] ${showNav ? 'xs:fixed' : ''}`}>
                    <Header />
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/presale/create" element={<CreatePresale />} />
                        </Routes>
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    // theme={ darkMode ? "light" : "light" }
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
