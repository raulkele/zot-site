import React from 'react'
import Image from 'next/image'

const SkopeoPromo = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '3rem', margin: '5rem 0', cursor: 'pointer'}}>
            <div style={{margin: '2rem 0', textAlign: 'center'}}>Skopeo</div>
            <Image src={require('@/public/skopeo.svg')} height={500} width={740} alt="Skopeo" />
        </div>
    )
}

export default SkopeoPromo
