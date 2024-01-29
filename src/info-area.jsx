import React from 'react'

function InfoArea(props) {
    const {point, heading, description} = props;
  return (
    <div className="info-area">
    <p className='info-area-point'>{point}</p>
    <h3 className='info-area-heading'>
        {heading}
    </h3>
    <p className='info-area-description'>
       {description}
    </p>
</div>
  )
}

export default InfoArea