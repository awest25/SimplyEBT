import React from "react";
import Header from "./Header";
import { Box } from "@mui/system";
import Footer from "./Footer";
import "../styles/AppWrapper.css"

function AppWrapper(props) {

    return (
        <div className="appWrapper">
            <Header />
                <Box sx={{ marginX: 30, marginTop:5}} className="contentWrapper">
                    {props.children}
                </Box>
            <Footer className="footer"/> 
        </div>
    );
}

export default AppWrapper