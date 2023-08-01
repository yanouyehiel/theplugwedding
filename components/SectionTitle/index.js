import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="wpo-section-title">
            <h4 style={{color:'#b99256'}}>{props.subTitle}</h4>
            <h2 style={{fontFamily:'Montserrat'}}>{props.MainTitle}</h2>
        </div>
    )
}

export default SectionTitle;