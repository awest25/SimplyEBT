import React from "react";
import Header from "./Header";
import Footer from "./Footer"

function AppWrapper(props) {

    return (
        <div>
            <Header/>
            {props.children}
            <Footer/> 
        </div>
    );
}

export default AppWrapper
