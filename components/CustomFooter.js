import React from 'react';
import {Layout} from "antd";

const {Footer} = Layout;

const CustomFooter = () => {
    return (
        <Footer style={{margin: "2%", textAlign: "center", color: "gray"}}>
            <p>@Intercode</p>
        </Footer>
    );
};

export default CustomFooter;