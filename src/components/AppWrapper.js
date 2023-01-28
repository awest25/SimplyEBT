import React from "react";
import Header from "./Header";

function AppWrapper(props) {

    return (
        <div>
            <Header/>
            {props.children}
            {/* <Footer/> */}
        </div>

    )
}

export default AppWrapper
