import React from 'react';
import "./footer.scss"

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 logo">
                        <img src="../img/logoFooter.svg" alt=""/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-flex phone">
                        <img src="../img/phoneFooter.svg" alt=""/>
                        <a href="tel:+998555009500">+998 55 <strong className="text-white">500 95 00</strong></a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 class">
                        <img src="../img/classFooter.svg" alt=""/>
                        <div className="telegram">
                            <span className="icon icon-telegram"></span>
                        </div>
                        <div className="fecbook">
                            <span className="icon icon-fecbook"></span>
                        </div>
                        <div className="instagram">
                            <span className="icon icon-instagram"></span>
                        </div>
                        <div className="youtube">
                            <span className="icon icon-youtube"></span>
                        </div>
                    </div>
                    <div className="col-lg-3   col-md-6 col-12 developer">
                        <p>Sayt yaratish</p>
                        <img src="../img/develope.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;