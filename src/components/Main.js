import React, {useState} from "react";
import AboutMe from '../components/pages/About';
import ContactInfo from '../components/pages/ContactInfo';
import Portfolio from '../components/pages/Portfolio';
import Resume from '../components/pages/Resume';
import Navigation from "./Navigation";


export default function Main() {
    const [currentPage, setCurrentPage] = useState("About Me");

    const renderPage = () => {
        switch(currentPage) {
         case "About Me":
        return <AboutMe/>;
            case "Portfolio":
                return <Portfolio />;
                 case "Contact":
                    return <ContactInfo />;
                     case "Resume":
                        return <Resume />;
                         default:
                        return <Portfolio />;
        }
    };
   const switchPage = (page) => setCurrentPage(page);

    return (
        <div className="main">
           <Navigation currentPage={currentPage} handlePageChange={switchPage} />
                {renderPage()}
          
        </div>

    );
}


