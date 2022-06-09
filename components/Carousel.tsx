import React, { useCallback, useEffect, useState } from 'react'
import styles from '@/styles/Carousel.module.scss'

const Carousel = ({
    items,
    changeTime = 3000,
    showDots,
    automatic
}) => {
    const [slide, setSlide] = useState(0);
    const [change, setChange] = useState(true);
    const changeSlide = useCallback((k = 1) => {
        setSlide(slide => slide + k >= items.length ? 0 : (slide + k < 0 ? items.length - 1 : slide + k));
    }, [items.length])

    useEffect(() => {
        if (!automatic) return;

        const interval = setInterval(() => {
            changeSlide();
        }, changeTime);

        return () => {clearInterval(interval)};
    }, [change,automatic, changeSlide,changeTime]);

    const onNextClick = () => {
        changeSlide();
        setChange(change => !change);
    }

    const onPrevClick = () => {
        changeSlide(-1);
        setChange(change => !change);
    }

    const onDotClick = (index) => {
        setSlide(index);
        setChange(change => !change);
    }

    return (
        <div className={styles.carouselContainer} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', ...styles}}>
            <a className={styles.prev} style={{left: 0, borderRadius: '3px 0 0 3px'}} onClick={onPrevClick}>&#10094;</a>
            <div>
                <div className={[styles.carouselItem, styles.fade].join(' ')}>
                    <div className={styles.carouselImage}>{items[slide].image}</div>
                    <div className={styles.carouselCaption}>{items[slide].caption}</div>
                </div> 
                {
                    showDots && (
                        <div className={styles.dots}>
                            {
                                items.map((_item, index) => <span key={index} className={slide === index ? [styles.active, styles.dot].join(' ') : styles.dot} onClick={() => onDotClick(index)}></span>)
                            }
                        </div>
                    )
                }
            </div>
            <a className={styles.next} onClick={onNextClick}>&#10095;</a>
        </div>
    )
}

export default Carousel
