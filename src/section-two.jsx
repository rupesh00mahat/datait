import React from 'react'
import './style.css'
import InfoArea from './info-area'

function SectionTwo() {
  return (
    <div id='details-area'>
       <InfoArea
       point={1}
       heading={'Actionable insights'}
       description={'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'}
       />
       <InfoArea
       point={2}
       heading={'Data-driven decisions'}
       description={'Make data-driven decisions with our product data analytics. Our AI-generated reports help your unlock insight hidden in your product data.'}
       />
       <InfoArea
       point={3}
       heading={'Always affordable'}
       description={'Always affordable pricing that scales with your business. Get top-quality product data-analytics services without hidden costs or unexpected fees.'}
       />
    </div>
  )
}

export default SectionTwo