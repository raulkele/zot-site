import Social from './Social'
import Legal from './Legal'
import styles from '@/styles/Layout.module.scss'
import Image from 'next/image'
import ExportedImage from 'next-image-export-optimizer'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Social />
            <Legal />
        </footer>
    )
}

export default Footer
