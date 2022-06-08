import Link from 'next/link'
import styles from '@/styles/Layout.module.scss'

const Legal = () => {
    return (
        <div className={styles.legal}>
            <ul>
                <li>
                    <Link href='/'>Terms &amp; conditions</Link>
                </li>
                <li>
                    <Link href='/discover'>Privacy statement</Link>
                </li>
                <li>
                    <Link href='/docs'>Cookies</Link>
                </li>
                <li>
                    <Link href='/docs'>Trademarks</Link>
                </li>
            </ul>
        </div>
    )
}

export default Legal
