import React from 'react'
import Image from 'next/image'
import ExportedImage from 'next-image-export-optimizer'

const SkopeoPromo = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '3rem', margin: '5rem 0', cursor: 'pointer'}}>
            <div style={{margin: '2rem 0', textAlign: 'center'}}>Skopeo</div>
            <ExportedImage src={'/images/skopeo.svg'} height={500} width={740} alt="Skopeo" />
        </div>
    )
}

export default SkopeoPromo
