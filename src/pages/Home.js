import React from 'react'

export default function Home() {
  return (
    <>
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

    <section class="home">
        <video class="video-slide" src="assets/images/3.mp4" autoPlay muted loop></video>
        <div class="content">
            <h1>Fresh.<span>Vegetables</span></h1>
            <p>It is important to look for freshness in all vegetables we consume. Check the characteristic signs of freshness such as bright, lively color in the vegetable and look to see if the vegetable is crisp and free of soft spots. Vegetables are at their peak during their harvest season, this is also when vegetables are the most affordable to purchase.</p>
            <a href="#">SIGN IN</a>
        </div>
       

    </section>



   <section class="features" id="features">
    <h1 class="heading">our <span>features</span> </h1>
    <div class="box-container">
        <div class="box">
            <img class="img1" src="img1.jpg"  alt=""/>
            <h3>fresh & organic</h3>
            <p>Organic food has health benefits as well as environmental benefits. Organic farming uses only natural fertilizers such as compost or manure, which helps to increase the nutritional value of the food and also improves the soil contents. </p>
            <a href="#" class="btn">read more</a>
        </div>
        <div class="box">
            <img class="img2"  src="assets/images/img2.png"  alt=""/>
            <h3>free delivery</h3>
            <p>Free and fast shipping !!! no need to pay additional shipping charges...we offer free over order of Rs 300.
              experience fresh organic products at your doorstep extra delivery charges excluded on order of Rs 300 and more....
            </p>
            <a href="#" class="btn">read more</a>
        </div>
        <div class="box">
            <img class="img3" src="assets/images/img3.jpg"  alt=""/>
            <h3>easy payments</h3>
            <p>For customer convenience we make payment easy.customer can pay through any mode of payment. we accept UPI (Gpay,PhonePay,paytm) , cash & card..</p>
            <a href="#" class="btn">read more</a>
        </div>
    </div>
   </section>



   <section class="products" id="products">
    <h1 class="heading">our <span>products</span></h1>
    <div class="swiper product-slider">
        <div class="swiper-wrapper">
            <div class="box">
                <img class="mango" src="assets/images/mango.jpeg"  alt=""/>
                <h3>fresh mango</h3>
                <div class="price">Rs. 50/kg</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#" class="btn">Add to cart</a>
            </div>

            <div class="box">
                <img class="onion"  src="assets/images/onion.jpg"  alt=""/>
                <h3>fresh onion</h3>
                <div class="price">Rs. 30/kg</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#" class="btn">Add to cart</a>
            </div>
            <div class="box">
                <img class="apple"  src="assets/images/apple.jpeg"  alt=""/>
                <h3>fresh apple</h3>
                <div class="price">Rs. 90/kg</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#" class="btn">Add to cart</a>
            </div>
            <div class="box">
                <img class="cabbage" src="assets/images/cabbage.jpg"  alt=""/>
                <h3>fresh cabbage</h3>
                <div class="price">Rs. 40/kg</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#" class="btn">Add to cart</a>
            </div>
            
            <div class="box">
                <img class="carrot" src="assets/images/carrot.jpg"  alt=""/>
                <h3>fresh carrot</h3>
                <div class="price">Rs. 30/kg</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#" class="btn">Add to cart</a>
            
            </div>
            </div>
        </div>

   </section>


















    <footer class="foot">
        <div class="row primary">
            <div class="column about">
              <h3>Connect</h3>
              <p>
               <a href="https://www.google.com/maps/place/Clement+Town,+Dehradun,+Uttarakhand+248002/@30.2681914,77.9905414,14z/data=!3m1!4b1!4m6!3m5!1s0x39092befa7608ead:0xe723fed2168f7a8d!8m2!3d30.2685607!4d78.0071039!16zL20vMGYxOXB2?entry=ttu"> <i class="fa fa-map-marker" aria-hidden="true"></i>
                Clement Town, DEHRADUN</a>
              </p>
              <div class="social">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          
            <div class="column link">
              <h3>Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
          
            <div class="column subscribe">
              <h3>Newsletter</h3>
              <div>
                <input type="email" placeholder="Your email id here" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
    </footer>
    <footer>
        <div class="row copyright">
            <div class="footer-menu">
          
            <a href="">Home</a>
            <a href="">F.A.Q</a>
            <a href="">Cookies Policy</a>
            <a href="">Terms Of Service</a>
            <a href="">Support</a>
          
            </div>
             <p>Copyright &copy; 2023</p>
          </div>
          
    </footer>


    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>


    </React.Fragment>
    </>   
  )
}

