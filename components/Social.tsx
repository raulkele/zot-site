import Link from 'next/link'
import Image from 'next/image'
import ExportedImage from 'next-image-export-optimizer'

const Social = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='https://twitter.com/Cisco/'>
                        <a><ExportedImage src={'/twitter.svg'} alt="Twitter Logo" width={40} height={20} /></a>
                    </Link>
                </li>
                <li>
                    <Link href='https://www.facebook.com/Cisco/'>
                        <a><ExportedImage src={'/facebook.svg'} alt="Facebook Logo" width={40} height={20} /></a>
                    </Link>
                </li>
                <li>
                    <Link href='https://www.instagram.com/cisco/'>
                        <a><ExportedImage src={'/instagram.svg'} alt="Instagram Logo" width={40} height={20} /></a>
                    </Link>
                </li>
                <li>
                    <Link href='https://www.linkedin.com/company/cisco'>
                        <a><ExportedImage src={'/linkedin.svg'} alt="LinkedIn Logo" width={40} height={20} /></a>
                    </Link>
                </li>
                <li>
                    <Link href='https://www.youtube.com/user/cisco'>
                        <a><ExportedImage src={'/youtube.svg'} alt="YouTube Logo" width={40} height={20} /></a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Social
