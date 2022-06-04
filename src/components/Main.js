import React, {useState} from "react";
import AboutMe from './pages/About';
import ContactInfo from './pages/ContactInfo';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function Main() {
    const [currentPage, setCurrentPage] = useState("About Me");

    const renderPage = () => {
        switch(currentPage) {
         case "Portfolio":
        return <Portfolio/>;
            case "Contact":
                return <ContactInfo />;
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
                <header currentPage={currentPage} handlePageChange={switchPage} />
                
            </header>
            {renderPage()}
          
        </div>

    );
}

export default Main;
