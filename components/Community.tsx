import React from 'react'
import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';

const defaultTitle = "Meet our dev community";
const Community = ({background, color, showPicture = false, title=defaultTitle}) => {
    return (
        <div style={{background: background, color: color, fontSize: '3rem', height: '100%', width: '100%', padding: '5rem', cursor: 'pointer', display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            {title}
            {showPicture && <ExportedImage height={400} width={500} src={require("@/public/community.png")} alt="Image" />}
            {!showPicture && (
                <>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </>
            )}
        </div>
    )
}

export default Community
