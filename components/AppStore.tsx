import React from 'react'
import Image from 'next/image'
const defaultTitle = 'Solutions';
const defaultText = 'Use our latest services to help determine IT readiness, simplify operations, and reduce risk through expert guidance and centralized support.'

const AppStore = ({background, color, showPicture = false, title=defaultTitle, children = null}) => {
    return (
        <div style={{background: background, color: color, height: '100%', width: '100%', padding: '5rem', cursor: 'pointer', display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{fontSize: '2.5rem'}}>
                    {title}
                </div>
                <div style={{textAlign: 'center', fontSize: '1.2rem', fontWeight: 200, marginTop: '2rem'}}>
                    {children?? defaultText}
                </div>
            </div>
            {showPicture && <Image width={500} height={160} src={require('@/public/solutions.png')} alt="Cisco Solutions" />}
        </div>
    )
}

export default AppStore
