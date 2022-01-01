import React, {Component} from 'react';
import "./main.scss"

class Main extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid maine">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 Left">
                                    <div className="title">
                                        Xitoy elektr tovarlarini ulgurji narxlarda <br/> xarid qiling
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="img/kafolat.svg" alt=""/>
                                            <div className="text">1 yil kafolat</div>
                                        </div>
                                        <div className="col-md-4">
                                            <img src="img/konsultant.svg" alt=""/>
                                            <div className="text">Foydalanishda bepul konsultatsiya</div>
                                        </div>
                                        <div className="col-md-4">
                                            <img src="img/eltuv.svg" alt=""/>
                                            <div className="text">1 kunda tezkor yetkazib berish</div>
                                            <div className="textComit">(Toshkent shahri bo’ylab BEPUL)</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-6 Righte">
                                    <img src="img/shit.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;