import { useState } from 'react';
import './App.css';
import AboutMe from './pages/About';
import Contact from './pages/ContactInfo';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function App() {
    const [currentPage, setCurrentPage] = useState("About Me");

    const renderPage = () => {
        switch(currentPage) {
            case "Portfolio":
            return <Portfolio/>;
            case "Contact":
                return <Contact />;
                case "About Me":
                    return <AboutMe />;
                    case "Resume":
                        return <Resume />;
                        default:
                            return <Portfolio />;
        }
    };
    const switchPage = (page) => setCurrentPage(page);

    return (
        <div className="main">
            <header>
                <h1>{"Mariana Tapia"}</h1>
                <NavBar currentPage={currentPage} handlePageChange={switchPage} />
            </header>
            {renderPage()}
            <Footer/>
        </div>

    );
}

export default App;
