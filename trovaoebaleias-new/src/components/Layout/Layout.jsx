import React from "react";

import { Footer, Header } from "./components";

import './Layout.module.scss'

const Layout = ({ children }) => {

    const MainContent = () =>  <main> { children } </main>

    return ( 
        <>
            <Header />
            {MainContent()}
            <Footer />
        </>
     );
}

export default Layout;