import Social from './Social'
import Legal from './Legal'
import styles from '@/styles/Layout.module.scss'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Social />
            <Image src={require('@/public/cisco.svg')} alt="Cisco Logo" width={80} height={30} />
            <Legal />
        </footer>
    )
}

export default Footer
