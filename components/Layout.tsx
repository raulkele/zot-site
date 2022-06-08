import { useState } from 'react';
import Meta from './Meta'
import Nav, { MobileNav } from './Nav'
import Footer from './Footer'
import styles from '@/styles/Layout.module.scss'

const Layout = ({ children }) => {
    const [visibleMobileNav, setVisibleMobileNav] = useState(false);
    const title = children?.type?.name; // name of React component type (i.e. Home, Discover, About etc.)
    return (
        <>
            <Meta title={title} />
            <Nav visibleMobileNav={visibleMobileNav} setVisibleMobileNav={setVisibleMobileNav} />
            <div className={styles.container}>
                <main className={styles.main}>
                    {visibleMobileNav ? <MobileNav setVisibleMobileNav={setVisibleMobileNav} /> : children}
                </main>
            </div>
            {!visibleMobileNav && <Footer />}
        </>
    )
}

export default Layout
