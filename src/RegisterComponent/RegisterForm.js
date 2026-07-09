import React from 'react'
import './Register.css';
const RegisterForm = () => {
    const handleclick=()=>{
console.log('helllo');
    }
  return (
   <article  className="contact " data-page="contact"> 
 
      <header>
        <h2 className="h2 article-title">Register  </h2>
        </header>
        <section className="about-text">
            <p>Register Now and Become a Part of Our Family. Where we teach you Wordpress, Website Design and other programming. </p>
            
        </section>
        <div className="card register">
        <form action="#" className="form" data-form>
            <div className="form-wrapper">
                <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
                <input type="email" name="email" className="form-input" placeholder="Email Address" required data-form-input />
            
                <input type="text" name="mobile_no" className="form-input" placeholder="Mobile no" required data-form-input />
                <input type="passowrd " name="address" className="form-input" placeholder=" passowrd" required data-form-input />
                <input type="passowrd " name="address" className="form-input" placeholder=" Confirm passowrd" required data-form-input />
            </div>


         

            <button className="form-btn" type="submit"  onClick={handleclick}> 
                <ion-icon name="paper-plane"></ion-icon>
                <span>Register Now</span>
            </button>
        </form>
        </div>
       
   </article>
  )
}

export default RegisterForm