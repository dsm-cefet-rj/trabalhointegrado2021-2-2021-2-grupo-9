import React, { useState } from "react";
import classNames from 'classnames/bind'

import styles from './Slider.module.scss'
const cx = classNames.bind(styles)

const Slider = ({ children }) => {
    const [showRight, setShowRight] = useState(false)

    const CondHolder = cx("slider-content-holder", { "moveRight": showRight}, { "moveLeft": !showRight})
    const CondActiveLeftButton = cx("slider-control-button", { "active": showRight})
    const CondActiveRightButton = cx("slider-control-button", { "active": !showRight})

    return (
        <div  className={styles["slider"]}>
            <div className={styles["slider-content"]}>
                <div className={CondHolder} >
                    {children}
                </div>
            </div>

            <div className={styles["slider-control"]}>
                <button className={CondActiveLeftButton} onClick={() => setShowRight(true)} />
                <button className={CondActiveRightButton} onClick={() => setShowRight(false)} />
            </div>
        </div> 
     );
}

export default Slider ;