import React, {CSSProperties} from 'react'

const ImgHolder = ({src}: {src: string}) => {
    const imgStyles: CSSProperties={
        maxWidth: "90%"
    }
 return <img src={src} alt="generated-img-for-slider" style={imgStyles}/>
}

export default ImgHolder;