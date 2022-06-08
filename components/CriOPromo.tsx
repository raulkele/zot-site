import React from 'react'
import Image from 'next/image'

const CriOPromo = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '3rem', margin: '5rem 0', cursor: 'pointer'}}>
            <div style={{margin: '2rem 0', textAlign: 'center'}}>Cri-O</div>
            <Image src={require('@/public/crio-logo.svg')} height={500} width={740} alt="Cri-O" />
        </div>
    )
}

export default CriOPromo
