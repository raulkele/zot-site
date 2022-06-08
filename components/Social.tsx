import Link from 'next/link'
import Image from 'next/image'

const Social = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='https://twitter.com/Cisco/'>
                        <a><Image src={require('@/public/twitter.svg')} alt="Twitter Logo" width={40} height={20} /></a>
                    </Link>
                </li>
                <li>
                    <Link href='https://www.facebook.com/Cisco/'>
                        <a><Image src={require('@/public/facebook.svg')} alt="Facebook Logo" width={40} height={20} /></a>
                    </Link>
                </li>
                <li>
                    <Link href='https://www.instagram.com/cisco/'>
                        <a><Image src={require('@/public/instagram.svg')} alt="Instagram Logo" width={40} height={20} /></a>
                    </Link>
                </li>
                <li>
                    <Link href='https://www.linkedin.com/company/cisco'>
                        <a><Image src={require('@/public/linkedin.svg')} alt="LinkedIn Logo" width={40} height={20} /></a>
                    </Link>
                </li>
                <li>
                    <Link href='https://www.youtube.com/user/cisco'>
                        <a><Image src={require('@/public/youtube.svg')} alt="YouTube Logo" width={40} height={20} /></a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Social
