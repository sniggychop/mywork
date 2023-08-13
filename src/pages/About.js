import React from 'react'
import "./About.css"

export default function About() {
  return (
    <React.Fragment>
        <header>
            <img class="brand"  src="assets/images/Apni Mandi (1).jpg"/>
            <div class="menu-btn"></div>
            <div class="navigation">
                <div class="navigation-items">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact us</a>
                    <a href="#">Sign up</a>
                </div>
                </div>
            
        </header>
    
        <section>
            <div class = "image">
               <img src="assets/images/girl.jpg"/>
            </div>

            <div class = "content">
                <h2>About Us</h2>
                <span>-----</span>
                <p>Apni Mandi Supermarket is a 100% family-owned and operated premier grocery store chain in India. We carry fresh fruits and vegetables, and a wide selection of groceries, specialty groceries, and the largest selections anywhere. We also carry a wide range of household items and cooking appliances. It is your one-stop-shop where you can check all the grocery items off your list. Presentation of products is intuitive, easy to find, and well placed in a manner to shorten your search time and ensure an enjoyable shopping experience.
                    <br>
                    </br>

                Customer happiness is the foundation of everything we do. Our employees are well informed and trained to offer exceptional customer service and a premium shopping experience. Anyone who walks into the store, even if it is for the first time, feels the warmth and experiences the ease of shopping. It is our commitment to bring the freshest produce and best quality products to our customers; we source from best producers and vendors locally and regionally.</p>
                <ul class = "links">
                    <li><a href = "#">buy now</a></li>
                    <div class = "vertical-line"></div>
                    <li><a href = "#">service</a></li>
                    <div class = "vertical-line"></div>
                    <li><a href = "#">contact us</a></li>
                </ul>
                <ul class = "icons">
                    <li>
                        <i class = "fab fa-facebook-f"></i>
                    </li>
                    <li>
                        <i class = "fab fa-twitter"></i>
                    </li>
                    <li>
                        <i class = "fab fa-linkedin"></i>
                    </li>
                    <li>
                        <i class = "fab fa-instagram"></i>
                    </li>
                </ul>
            </div>
        </section><br></br>
        <div class="credit">buy with <span>❤</span> <a href="#">fresh vegetables</a></div>
    

    </React.Fragment>
  )
}
