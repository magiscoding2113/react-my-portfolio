import React from "react";
import Navigation from "./Navigation";

function Header({ currentPage, handlePageChange}) {
    return (
        <div className="container">
            <div className="row">
                <h1 className="column">Header</h1>
                <Navigation currentPage={currentPage}
                handlePageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default Header;