let footer = () => {
    return `<footer id="M-footer">
    <div class="M-head">
        <button class="M-btn">Website feedback? Let us know <i class="fa-solid fa-caret-right"></i></button>
    </div>
    <div class="M-section">
        <div class="M-first">
            <a href="#" class="M-common">
                <img src="https://www.sephora.com/img/ufe/icons/find-store.svg" alt="store" class="M-store-img" />
                <span>
                    <span class="M-span1">Find a Store</span>
                    <br>
                    <span class="M-span2">Choose Your Store</span>
                </span>
            </a>
            <div class="M-common">
                <button class="M-btn2">
                    <div class="M-icon">
                        <span class="M-span3"><i class="fa-solid fa-comment-slash"></i></span>
                    </div>
                    <span>
                        <span class="M-span4">Live Beauty Help</span>
                        <br>
                        <span>Chat is Unavailable</span>
                    </span>
                </button>
            </div>
            <a href="#" class="M-link">
                <img src="https://www.sephora.com/img/ufe/icons/app.svg" alt="error" class="M-link-img">
                <span>
                    <strong class="link-target">Get the App</strong>
                    <br>
                    Text "APP" to 36681
                </span>
            </a>
            <a href="#" class="M-common">
                <img src="https://www.sephora.com/img/ufe/icons/sms-ko.svg" alt="error" class="M-common-img">
                <span>
                    <strong class="link-target">Get Sephora Text Alerts</strong>
                    <br>
                    Sign up Now
                </span>
            </a>
            <a href="#" class="M-link2">
                <img src="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg" alt="error" class="M-link2-img">
                <span>
                    <strong class="link-target">Sephora Credit Card Program</strong>
                    <br>
                    Want 25% off your Sephora purchase<sup>1</sup>? <span class="M-span5">DETAILS</span>
                </span>
            </a>
        </div>
        <div class="M-second greater-than">
            <hr class="M-hr">
        </div>
        <div class="M-third">
            <div class="M-common2">
                <div class="less-than">
                    <hr class="M-hr">
                </div>
                <div class="less-than">
                    <button class="M-btn3" id="M-btn3" aria-expanded="false">
                        <h2 class="M-h2">About Sephora</h2>
                        <span><i class="fa-solid fa-plus" aria-hidden="true" id="icon" onclick="expand()"></i></span>
                    </button>
                </div>
                <div class="greater-than">
                    <h2 class="M-h2">About Sephora</h2>
                </div>
                <ul class="M-ul1" id="M-ul">
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">About Sephora</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Newsroom</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Careers</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Sephora Social Impact</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Supply Chain Transparency</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Affiliates</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Sephora Events</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Gift Cards</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Sephora Global Sites</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Diversity and Inclusion</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Checkout on Instagram</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Sephora Accelerate</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Report a Vulnerability</a>
                    </li>
                </ul>
            </div>
            <div class="M-common2">
                <div class="less-than">
                    <hr class="M-hr">
                </div>
                <div class="less-than">
                    <button class="M-btn3" id="M-btn3-1" aria-expanded="false">
                        <h2 class="M-h2">My Sephora</h2>
                        <span><i class="fa-solid fa-plus" aria-hidden="true" id="icon1" onclick="expand2()"></i></span>
                    </button>
                </div>
                <div class="greater-than">
                    <h2 class="M-h2">My Sephora</h2>
                </div>
                <ul class="M-ul1" id="M-ul1">
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Beauty Insider</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Sephora Credit Card</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Community Profile</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Order Status</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Purchase History</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Account Settings</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Beauty Advisor Recommendations</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Beauty Offers</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Quizzes & Buying Guides</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Rewards Bazaar</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Loves</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Book a Reservation</a>
                    </li>
                </ul>
            </div>
            <div class="M-common2">
                <div class="less-than">
                    <hr class="M-hr">
                </div>
                <div class="less-than">
                    <button class="M-btn3" id="M-btn3-2" aria-expanded="false">
                        <h2 class="M-h2">Help</h2>
                        <span><i class="fa-solid fa-plus" aria-hidden="true" id="icon2" onclick="expand3()"></i></span>
                    </button>
                </div>
                <div class="greater-than">
                    <h2 class="M-h2">Help</h2>
                </div>
                <ul class="M-ul1" id="M-ul2">
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Customer Service</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Returns & Exchanges</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Delivery and Pickup Options</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Shipping</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Billing</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">International Shipments</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Beauty Services FAQ</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Sephora at Kohl's</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Sephora Inside JCPenney</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Store Locations</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Online Ordering</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Klarna & Afterpay</a>
                    </li>
                    <li class="M-li1">
                        <a href="#" class="M-li1-link M-mq-link">Accessibility</a>
                    </li>
                </ul>
            </div>
            <div class="less-than">
                <hr class="M-hr">
            </div>
            <div class="M-common2">
                <h2 class="M-c-h2">Region & Language</h2>
                <div>
                    <button class="M-R-btn M-MQR-btn">
                        <img src="https://www.sephora.com/img/ufe/flags/us.svg" alt="error" class="M-R-img">
                        <span>United States - English</span>
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button class="M-R-btn M-MQR-btn">
                        <img src="https://www.sephora.com/img/ufe/flags/ca.svg" alt="error" class="M-R-img">
                        <span>Canada - English</span>
                    </button>
                    <button class="M-R-btn M-MQR-btn">
                        <img src="https://www.sephora.com/img/ufe/flags/ca.svg" alt="error" class="M-R-img">
                        <span>Canada - Français</span>
                    </button>
                </div>
            </div>
            <div class="less-than">
                <hr class="M-hr">
            </div>
            <div class="M-Details">
                <p class="M-D-p">
                    We Belong to
                    <br>
                    Something Beautiful
                </p>
                <div>
                    <label for="emailSignUpInput" class="M-label">Sign up for Sephora Emails</label>
                    <form action="" class="M-form" id="M-form">
                        <div class="M-input">
                            <div>
                                <div class="M-input1">
                                    <div class="M-input2">
                                        <input type="email" placeholder="Enter your email address" class="M-input3" id="emailSignUpInput" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="M-btn4" onclick="sub()">Sign Up</button>
                    </form>
                    <p class="M-greet" id="M-greet">Thanks for signing up for Sephora emails!</p>
                </div>
            </div>
        </div>
        <div class="greater-than">
            <hr class="M-hr">
        </div>
        <div class="M-fourth">
            <div class="M-social">
                <a href="https://www.instagram.com/sephora">
                    <img src="https://www.sephora.com/img/ufe/icons/instagram-ko.svg" alt="instagram" class="M-social-img">
                </a>
                <a href="https://www.facebook.com/sephora">
                    <img src="https://www.sephora.com/img/ufe/icons/facebook-ko.svg" alt="facebook" class="M-social-img">
                </a>
                <a href="https://twitter.com/sephora">
                    <img src="https://www.sephora.com/img/ufe/icons/twitter-ko.svg" alt="twitter" class="M-social-img">
                </a>
                <a href="https://www.youtube.com/sephora">
                    <img src="https://www.sephora.com/img/ufe/icons/youtube-ko.svg" alt="youtube" class="M-social-img">
                </a>
                <a href="https://www.pinterest.com/sephora">
                    <img src="https://www.sephora.com/img/ufe/icons/pinterest-ko.svg" alt="pinterest" class="M-social-img">
                </a>
                <a href="https://www.snapchat.com/add/sephora">
                    <img src="https://www.sephora.com/img/ufe/icons/snapchat-ko.svg" alt="snapchat" class="M-social-img">
                </a>
                <a href="https://www.tiktok.com/@sephora">
                    <img src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg" alt="tiktok" class="M-social-img">
                </a>
            </div>
            <div class="less-than">
                <hr class="M-hr">
                <h2 class="M-S-h2">Download the Sephora App</h2>
                <div class="M-S-div">
                    <a href="https://itunes.apple.com/us/app/sephora-makeup-beauty-more/id393328150" target="_blank">
                        <img src="https://www.sephora.com/img/ufe/badge-app-store.svg" alt="app store">
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.sephora" target="_blank">
                        <img src="https://www.sephora.com/img/ufe/badge-google-play.svg" alt="google play">
                    </a>
                </div>
                <hr class="M-hr">
            </div>
            <div class="M-legal">
                <p class="M-legal1">© 2022 Sephora USA, Inc. All rights reserved.</p>
                <p class="M-legal2">
                    <a href="#" class="M-policy">Privacy Policy</a>
                    <a href="#" class="M-policy">Terms of Use</a>
                    <a href="#" class="M-policy">Accessibility</a>
                    <a href="#" class="M-policy">Sitemap</a>
                    <button class="M-policy-btn">CA - Do Not Sell My Personal Information</button>
                </p>
                <p class="M-legal3">1-877-737-4672    TTY: 1-888-866-9845</p>
            </div>
        </div>
    </div>
</footer>`;
}

export default footer;