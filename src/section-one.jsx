import React from 'react'
import './style.css'

function SectionOne() {
  return (
    <div id='main-area'>
        <nav className='main-area-nav'>
            <h2>
                <strong>Data</strong>it
            </h2>
            <button>
                Apply for access
            </button>
        </nav>
        <div className='main-area-heading'>
        <h1>Data tailored to your needs.</h1>
        <button>Learn More</button>
        </div>
    </div>
  )
}

export default SectionOne