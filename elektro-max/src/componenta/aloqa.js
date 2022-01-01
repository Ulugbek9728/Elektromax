import React from 'react';
import { YMaps, Map,Placemark } from 'react-yandex-maps';
import "./aloqa.scss"



function Aloqa(props) {
    const style = {
        width: "300px",
    height: "300px"
};
    return (
        <div className="container-fluid aloqa">
            <div className="row">
                <div className="col-md-6 col-12 aloqaCol ">
                    <YMaps>
                        <div >
                            <Map className="carta"
                                defaultState={{
                                    center: [41.355428, 69.243402],
                                    zoom: 14,
                                }}
                            >
                                <Placemark geometry={[41.355428, 69.243402]} />
                            </Map>
                        </div>
                    </YMaps>
                </div>

                <div className="col-md-6 col-12 aloqaCol righte">
                    <div>
                        <div className="d-flex align-items-center boxNav">
                            <img src="../img/geoPositsiya.svg" alt=""/>
                            <p>Manzil</p>
                        </div>
                        <p>125 j dokon  1-154</p>
                    </div>
                    <div>
                        <div className="d-flex align-items-center boxNav">
                            <img src="../img/phone1.svg" alt=""/>
                            <p>Telefon:</p>
                        </div>
                        <p>+998 55 <strong>500 95 00</strong> </p>
                    </div>
                    <div>
                        <div className="d-flex align-items-center boxNav">
                            <img src="../img/sms.svg" alt=""/>
                            <p>Mail</p>
                        </div>
                        <p>info@elektromaxinvest.uz</p>
                    </div>
                    <div>
                        <div className="d-flex align-items-center boxNav">
                            <img src="../img/class.svg" alt=""/>
                            <p>Ijtimoiy tarmoqlar:</p>
                        </div>
                        <div className="d-flex tarmoq">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aloqa;