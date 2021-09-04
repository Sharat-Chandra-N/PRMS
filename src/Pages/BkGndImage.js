import React from 'react'
import './BkGndImage.css'
import Typed from 'react-typed'

function BkGndImage() {
    return (
        <div className="header-wrapper">
            <div className="info-section">
                <h2>Main Heading with HR Content</h2>
                <Typed 
                    className="typed-text"
                    strings={["First 1", "Second 2", "Third 3", "Forth 4"]}
                    loop ={true}
                    typeSpeed={40}
                    backSpeed={60}
                />
            </div>
        </div>
    )
}

export default BkGndImage
