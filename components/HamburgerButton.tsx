import { useState, useEffect } from 'react';
import styles from '@/styles/Nav.module.scss'

const HamburgerButton = ({ visibleMobileNav, setVisibleMobileNav }) => {
    const [menuIconClasses, setMenuIconClasses] = useState([styles.hamburgermenuicon]);

    useEffect(() => {
        if (visibleMobileNav) {
            setMenuIconClasses([styles.hamburgermenuicon, styles.isactive]);
        } else {
            setMenuIconClasses([styles.hamburgermenuicon]);
        }
    }, [visibleMobileNav]);

    return (
        <button className={styles.hamburgermenu} onClick={() => setVisibleMobileNav(!visibleMobileNav)}>
            <div className={menuIconClasses.join(' ')}>
                <span className={styles.hamburgermenuline}></span>
                <span className={styles.hamburgermenuline}></span>
                <span className={styles.hamburgermenuline}></span>
            </div>
        </button>
    )
}

export default HamburgerButton
