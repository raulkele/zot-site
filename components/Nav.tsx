import { useState, useEffect } from 'react';
import Link from 'next/link'
import HamburgerButton from '@/components/HamburgerButton'
import Image from 'next/image';
import styles from '@/styles/Nav.module.scss'
import ExportedImage from 'next-image-export-optimizer';

const Nav = ({ visibleMobileNav, setVisibleMobileNav }) => {
    const [navClasses, setNavClasses] = useState([styles.nav]);

    useEffect(() => {
        if (visibleMobileNav) {
            setNavClasses([styles.nav]);
        } else {
            setNavClasses([styles.nav, styles.shadow]);
        }
    }, [visibleMobileNav]);

    return (
        <nav className={navClasses.join(' ')}>
            <HamburgerButton visibleMobileNav={visibleMobileNav} setVisibleMobileNav={setVisibleMobileNav} />
            <div className={styles.clogo}>
                <Link href='/'><ExportedImage src={'images/zot-logo-color.png'} alt="zot Logo" width={50} height={50} /></Link>
            </div>
            <div className={styles.list}>
                <ul>
                    <li>
                        <Link href='https://zotregistry.io/docs-zot'>Docs</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export const MobileNav = ({ setVisibleMobileNav }) => {
    const onMobileLinkClickHandler = () => setVisibleMobileNav(false);
    return (
        <div className={styles.mobilenav}>
            <div className={styles.stack}>
                <div className={styles.stackitem}>
                    <Link href='https://raulkele.github.io/project-zot-docs/'><a onClick={onMobileLinkClickHandler}>Docs</a></Link>
                </div>
            </div>
        </div>
    );
}

export default Nav
