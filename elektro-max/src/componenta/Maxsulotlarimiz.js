import React from 'react';
import "./Maxsulotlarimiz.scss"

function Maxsulotlarimiz(props) {
    return (
        <div className="container-fluid maxsulot">
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="box1">
                            <div className="title text-center">Mahsulotlarimiz</div>
                            <div className="text text-center">750 ortiq assortimentlar</div>
                        </div>
                        <div className="col-4 mt-3 maxsulotlar">
                            <img src="../img/1.jpg" alt=""/>
                        </div>
                        <div className="col-4 mt-3 maxsulotlar">
                            <img src="../img/2.jpg" alt=""/>
                        </div>
                        <div className="col-4 mt-3 maxsulotlar">
                            <img src="../img/3.jpg" alt=""/>
                        </div>
                        <div className="col-4 mt-3 maxsulotlar">
                            <img src="../img/4.jpg" alt=""/>
                        </div>
                        <div className="col-4 mt-3 maxsulotlar">
                            <img src="../img/5.jpg" alt=""/>
                        </div>
                        <div className="col-4 mt-3 maxsulotlar">
                            <img src="../img/6.jpg" alt=""/>
                        </div>
                        <div className="col-4 mt-3 maxsulotlar">
                            <img src="../img/7.jpg" alt=""/>
                        </div>
                        <div className="col-4 mt-3 maxsulotlar">
                            <img src="../img/8.png" alt=""/>
                        </div>
                        <div className="col-4 mt-3 maxsulotlar">
                            <img src="../img/9.jpg" alt=""/>
                        </div>
                        <button className="Button">
                            <img src="../img/varoq.svg" alt=""/>
                            Prays yuklab olish
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Maxsulotlarimiz;