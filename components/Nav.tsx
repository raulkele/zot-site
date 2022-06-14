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
                <Link href='/'><ExportedImage src={'images/zot-logo.jpg'} alt="Zot Logo" width={64} height={60} /></Link>
            </div>
            <div className={styles.list}>
                <ul>
                    <li>
                        <Link href='/'>Product</Link>
                    </li>
                    <li>
                        <Link href='/discover'>Design</Link>
                    </li>
                    <li>
                        <Link href='https://raulkele.github.io/project-zot-docs/'>Docs</Link>
                    </li>
                    <li>
                        <Link href='/develop'>Community</Link>
                    </li>
                    <li>
                        <Link href='/develop'>Blog</Link>
                    </li>
                    <li>
                        <Link href='/'><ExportedImage src={'images/user-profile.png'} alt="User profile icon" width={30} height={30} /></Link>
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
                    <Link href='/'><a onClick={onMobileLinkClickHandler}>Product</a></Link>
                </div>
                <div className={styles.stackitem}>
                    <Link href='/discover'><a onClick={onMobileLinkClickHandler}>Design</a></Link>
                </div>
                <div className={styles.stackitem}>
                    {/* TODO: ADD DOC LINK */}
                    <Link href='#'><a onClick={onMobileLinkClickHandler}>Docs</a></Link>
                </div>
                <div className={styles.stackitem}>
                    <Link href='/develop'><a onClick={onMobileLinkClickHandler}>Community</a></Link>
                </div>
                <div className={styles.stackitem}>
                    <Link href='/docs'><a onClick={onMobileLinkClickHandler}>Blog</a></Link>
                </div>
            </div>
        </div>
    );
}

export default Nav
