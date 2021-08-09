import React, { useState } from "react";
import "../components/Navbar.css"
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState( false );
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <h2>
                        <span>N</span>ational
                        <span>A</span>gri
                        <span>A</span>cademy
                    </h2>
                </div>

                {/* 2nd ------------------------------------------------------------- menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">about</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">contact</NavLink>
                        </li>
                    </ul>
                </div>

                {/* 3rd-------------------------------------------------------- social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a
                                href="https://www.facebook.com/ritesh9592"
                                target="blank">
                                <FaFacebookSquare className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/_rit_s_/"
                                target="blank">
                                <FaInstagramSquare className="instagram" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank">
                                <FaYoutubeSquare className="youtube" />
                            </a>
                        </li>
                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons( !showMediaIcons )}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>

            {/* hero section --------------------------------------------------------------------------- */}
            {/* <section className="hero-section">
        <p>Welcome ! </p>
        <h1>Hapy Learning</h1>
      </section> */}
        </>
    );
};

export default Navbar;