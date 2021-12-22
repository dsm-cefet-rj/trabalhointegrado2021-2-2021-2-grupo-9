import React, { useState } from 'react';
import classNames from 'classnames/bind'

import leftArrow from 'img/icons8-left-64.png'

import styles from './Carousel.module.scss'
const cx = classNames.bind(styles)

const Carousel = ({ srcBooks }) => {
    const [selectedSlide, setSelectedSlide] = useState(1)

    const handleLeftClick = () => setSelectedSlide(prevState => +prevState - 1)
    const handleRightClick = () => setSelectedSlide(prevState => +prevState + 1)

    const numberOfItens = srcBooks.length

    const firstIndex = selectedSlide < 0 
        ? (numberOfItens - Math.abs(selectedSlide % numberOfItens)) 
        : selectedSlide % numberOfItens
    
    const slide = {
        first:  firstIndex,
        second: (firstIndex + 1) % numberOfItens,
        third:  (firstIndex + 2) % numberOfItens,
        fourth: (firstIndex + 3) % numberOfItens,
        fifth:  (firstIndex + 4) % numberOfItens,
    }

    //<img className={styles["img-logo"]} src={leftArrow} />

    return (
        <div className={styles.carousel}>
            <button className={styles["button"]} onClick={handleLeftClick}>
                <img className={styles["button-image"]} src={leftArrow} />
            </button>

            <div className={styles["books-layer"]}>
                <img src={srcBooks[slide.first]} className={styles["image-layer"]} />
                <img src={srcBooks[slide.second]} className={styles["image-layer"]} />
                <img src={srcBooks[slide.third]} className={cx("image-layer", "main-image")} />
                <img src={srcBooks[slide.fourth]} className={styles["image-layer"]} />
                <img src={srcBooks[slide.fifth]} className={styles["image-layer"]} />
            </div>
            
            <button className={styles["button"]} onClick={handleRightClick}>
                <img className={styles["button-image-right"]} src={leftArrow} />
            </button>
        </div>
    );
};

export default Carousel