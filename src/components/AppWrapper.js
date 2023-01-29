import React from "react";
import Header from "./Header";
import { Box } from "@mui/system";
import Footer from "./Footer";
import Shopping from "../styles/Shopping2.png";

function AppWrapper(props) {

    return (
        <div>
            <Header />
                <Box sx={{ marginX: 30, marginTop:5}}>
                    {props.children}
                </Box>
            <Footer/> 
        </div>
    );
}

export default AppWrapper