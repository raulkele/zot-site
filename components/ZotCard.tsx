import React from 'react'
import Image from 'next/image'
import ExportedImage from 'next-image-export-optimizer'

const ZotCard = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '3rem', margin: '5rem 0', cursor: 'pointer'}}>
            <ExportedImage src={'images/zot-logo-white.jpg'} height={161} width={337} alt="zot logo" />
            <div style={{margin: '2rem 0', textAlign: 'center'}}>A true production-ready vendor-neutral OCI image registry</div>
        </div>
    )
}

export default ZotCard
