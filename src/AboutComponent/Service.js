import React from 'react'

const Service = () => {
  return (
    <section className="service">
    <h3 className="h3 service-title">What I'm doing</h3>

    <ul className="service-list">
        <li className="service-item">
            <div className="service-icon-box">
                <img src="https://i.postimg.cc/4389jZkP/icon-design.png" alt="icon" width="40" />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Web Design</h4>
                <p className="service-item-text">The most modern and high-quality design made at a professional level.</p>
            </div>
        </li>

        <li className="service-item">
            <div className="service-icon-box">
                <img src="https://i.postimg.cc/ZqgqrqzG/icon-dev.png" alt="icon" width="40" />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>
                <p className="service-item-text">High-quality development of sites at the professional level.</p>
            </div>
        </li>

        <li className="service-item">
            <div className="service-icon-box">
                <img src="https://i.postimg.cc/xjLdzYxZ/icon-app.png" alt="icon" width="40" />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Wordpress Websites</h4>
                <p className="service-item-text">User Friendly and mobile responsive websites.</p>
            </div>
        </li>

        <li className="service-item">
            <div className="service-icon-box">
                <img src="https://i.postimg.cc/0NL8zHpx/icon-photo.png" alt="icon" width="40" /> 
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Graphic Design</h4>
                <p className="service-item-text">I make high-quality photos of any category at a professional level.</p>
            </div>
        </li>
    </ul>
</section>
  )
}

export default Service