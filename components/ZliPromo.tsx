import React from 'react'
import Image from 'next/image'

const ZliPromo = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '3rem', margin: '5rem 0', cursor: 'pointer'}}>
            <div style={{margin: '2rem 0', textAlign: 'center'}}>Fully featured CLI</div>
            <Image src={require('@/public/zli-bash.png')} height={500} width={800} alt="Zli Bash" />
        </div>
    )
}

export default ZliPromo
