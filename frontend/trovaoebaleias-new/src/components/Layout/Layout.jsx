import React, { useState } from "react"
import classNames from 'classnames/bind'

import { LoginProvider } from 'context'
import { Footer, Header } from "./components"

import styles from './Layout.module.scss'

const cx = classNames.bind(styles)

const Layout = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const conditionalInsideContainer = cx("inside-container", { "open": sidebar})

    return ( 
        <LoginProvider>
            <Header sidebar={sidebar} setSidebar={setSidebar} />
            <main className={conditionalInsideContainer} > { children } </main>
            <Footer />
        </LoginProvider>
     );
}

export default Layout;