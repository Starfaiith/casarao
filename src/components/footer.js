import React from 'react'

const footer = () => {
    return (
    <section id="footer">
        <div className="footer container">
            <div className="brand">
                <h1>Casa de <span>Cultura</span></h1>
                <h2>Vila Guilherme</h2>
                <div className="social-icon">
                    <div className="social-item">
                        <a href="https://google.com"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="facebook" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://google.com"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="instagram" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://google.com"><img src="https://img.icons8.com/bubbles/100/000000/youtube-play.png" alt="youtube" /></a>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}

export default footer;