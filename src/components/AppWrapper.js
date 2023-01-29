import React from "react";
import Header from "./Header";
import { Box } from "@mui/system";
import Footer from "./Footer";
import "../styles/AppWrapper.css";
import background from "../styles/Sh11.jpg";

function AppWrapper(props) {

    return (
        <div className="appWrapper" style={{ backgroundImage: `url(${background})`, backgroundSize:"contain" }}>
            <Header />
                <Box sx={{ marginX: 30, marginTop:5}} className="contentWrapper">
                    {props.children}
                </Box>
            <Footer className="footer"/> 
        </div>
    );
}

export default AppWrapper