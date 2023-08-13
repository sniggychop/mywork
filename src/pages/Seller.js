import React from 'react'
import "./Seller.css"

export default function Seller() {
  return (
    <React.Fragment>
         <div class="container">
        <div class="main">
            <header>
                <img class="brand" src="assets/images/Apni Mandi (1).jpg"/>
                <div class="menu-btn"></div>
                <div class="navigation">
                    <div class="navigation-items">
                        <a href="/sellerdash/">Home</a>
                        <a href="/">About</a>
                        <a href="/enquiry.html">Contact us</a>
                        <a href="/login.html">Logout</a>
                    </div>
                </div>

            </header>

            <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">4</div>
                        <div class="cardName">Active Orders</div>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">8</div>
                        <div class="cardName">Total Products</div>
                    </div>
                </div>


                <div class="card">
                    <div>
                        <div class="numbers">^5.2%</div>
                        <div class="cardName">Market Data</div>
                    </div>


                </div>
            </div>

            <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2> Product</h2>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Stock</td>
                                <td>Price</td>

                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Potaos</td>
                                <td>30kg</td>
                                <td> ₹30/kg</td>
                            </tr>

                            <tr>
                                <td>Onion</td>
                                <td>40kg</td>
                                <td> ₹20/kg</td>
                            </tr>

                            <tr>
                                <td>Cabbage</td>
                                <td>22kg</td>
                                <td> ₹44/kg</td>
                            </tr>

                            <tr>
                                <td>Mango</td>
                                <td>12kg</td>
                                <td> ₹120/kg</td>
                            </tr>

                            <tr>
                                <td>Banana</td>
                                <td>33kg</td>
                                <td>₹30/kg</td>
                            </tr>

                            <tr>
                                <td>Pumpkin</td>
                                <td>10kg</td>
                                <td>₹150/kg</td>
                            </tr>

                            <tr>
                                <td>Carrot</td>
                                <td>22kg</td>
                                <td>₹25/kg</td>
                            </tr>

                            <tr>
                                <td>Spinach</td>
                                <td>5kg</td>
                                <td>₹40/kg</td>
                            </tr>
                        </tbody>
                    </table>




                </div>

                <div class="details">
                    <div class="recentOrders">
                        <div class="cardHeader">
                            <h2> Orders</h2>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Products</td>
                                    <td> Quantity </td>
                                    <td>payment</td>

                                </tr>
                            </thead>

                            <tbody>


                                <tr>
                                    <td>Shyam Singh</td>
                                    <td>Onion</td>
                                    <td>2kg</td>
                                    <td>Due</td>
                                </tr>
                                <tr>
                                    <td>Varsha Mittal</td>
                                    <td>Mango</td>
                                    <td>3kg</td>
                                    <td>cod</td>
                                </tr>
                                <tr>
                                    <td>Raj Rawat</td>
                                    <td>Cabbage , Onion</td>
                                    <td>1kg , 2kg</td>
                                    <td>Paid</td>
                                </tr>


                                <tr>
                                    <td>Amit Kumar</td>
                                    <td>Pumpkin</td>
                                    <td>3kg</td>
                                    <td>cod</td>
                                </tr>
                            </tbody>
                        </table>




                    </div>
                </div>
            </div>
            <footer class="foot">
                <div class="row primary">
                    <div class="column about">
                        <h3>Connect</h3>
                        <p>
                            <a
                                href="https://www.google.com/maps/place/Clement+Town,+Dehradun,+Uttarakhand+248002/@30.2681914,77.9905414,14z/data=!3m1!4b1!4m6!3m5!1s0x39092befa7608ead:0xe723fed2168f7a8d!8m2!3d30.2685607!4d78.0071039!16zL20vMGYxOXB2?entry=ttu">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
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
        </div>





    </div>

    </React.Fragment>
  )
}
