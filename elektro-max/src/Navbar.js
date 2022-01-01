import React from 'react';
import "./navbar.scss"

function Navbar(props) {
    return (
        <div className="container Navbar">
            <div className="row">
                <div className="boxNavbar">
                    <div className="Left d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <img src="img/logo.svg" alt=""/>
                        </div>
                        <div className="navLeft">
                            Elektrotovarlar importi bilan shug’illanuvchi kompaniya
                        </div>
                    </div>
                    <div className="Righte d-flex justify-content-between align-items-center">
                        <a href="#" className="navCenter">
                            <img src="img/telegram.svg" alt=""/>
                            <p>Savollaringizga Telegram
                                orqali javob oling</p>
                        </a>
                        <div className="navRighte">
                            <img src="img/phone.svg" alt=""/>
                            <a href="tel:+998555009500" className="d-flex">
                                <p className="bir">+998 55</p>
                                <p className="ikki">500-9-500</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;