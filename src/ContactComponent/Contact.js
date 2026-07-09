import React from 'react'

const Contact = () => {
  return (


           

    <article className="contact " data-page="contact">
    <header>
        <h2 className="h2 article-title">Contact</h2>
    </header>

    {/* <section className="mapbox" data-mapbox>
        <figure>
           <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.734805076885!2d73.77329007413122!3d24.598346855698257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e7c1aaaaaaab%3A0x141b0c7d18c64eff!2sMusk%20Owl%20LLP%20%7C%20Social%20Media%2C%20Web%20Development%2C%20SEO%20%26%20Digital%20Marketing%20Company%20in%20Udaipur!5e0!3m2!1sen!2sin!4v1734168818642!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </figure>
    </section> */}

    <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form>
            <div className="input-wrapper">
                <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
                <input type="email" name="email" className="form-input" placeholder="Email Address" required data-form-input />
            </div>
            <div className="input-wrapper">
                <input type="text" name="mobile_no" className="form-input" placeholder="Mobile no" required data-form-input />
                <input type="text" name="address" className="form-input" placeholder=" Address" required data-form-input />
            </div>


            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input=""></textarea>

            <button className="form-btn" type="submit" disabled data-form-btn>
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
            </button>
        </form>
    </section>
</article>  )
}

export default Contact