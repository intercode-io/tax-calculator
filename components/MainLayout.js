import React from 'react';
import CustomHeader from "./CustomHeader";
import {Layout} from "antd";

const {Content} = Layout;

const MainLayout = ({children}) => {
    return (
        <Layout style={{minHeight: "100vh"}}>
            <CustomHeader/>
            <Content>
                <main>{children}</main>
            </Content>
        </Layout>
    );
};

export default MainLayout;