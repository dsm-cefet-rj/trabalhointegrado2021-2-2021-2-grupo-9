import React from "react";

import { Footer, Header, SideBar } from "./components";

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
    return ( 
        <>
            <Header />
            <main className={styles.layout}> { children } </main>
            <Footer />
        </>
     );
}

export default Layout;