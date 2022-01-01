import React from 'react';
import "./Mutaxasislarimiz.scss"

function Mutaxasislarimiz(props) {
    return (
            <div className="container Mutaxasislar">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="title">Mutaxassislarimiz...</div>
                        <div className="d-flex boxNav justify-content-between">
                            <div className="left">
                                <img src="../img/icon.svg" alt=""/>
                                <div className="text">
                                    Ehtiyojlaringizdan kelib chiqib mahsulotlarni tanlab berishadi
                                </div>
                            </div>
                            <div className="righte">
                                <img src="../img/icon(1).svg" alt=""/>
                                <div className="text">
                                    Foydalanish bo'yicha ko'rsatmalar bilan to'liq tanishtirib chiqishadi
                                </div>
                            </div>
                        </div>
                        <button data-bs-toggle="modal" data-bs-target="#myModal" type="button"
                            className="Button btn">
                            <img src="../img/Vector(1).svg" alt=""/>
                            Ekspert bilan bepul bog’lanish
                        </button>

                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <button type="button" className="btn-close Close" data-bs-dismiss="modal">

                                </button>
                                <div className="modal-content modalBox">
                                        <div className="modalTitle">
                                            Ekspert bilan bog’lanish
                                        </div>
                                    <form action="#">
                                        <label className="Malumot" htmlFor="first name">Ismingizni kiriting</label><br/>
                                        <input className="form-control Input" type="text" id="first name" placeholder="name"/>
                                        <label className="Malumot" htmlFor="phone">Telefon raqamingiz</label><br/>
                                        <input className="form-control Input" placeholder="+998" type="tel" id="phone"/>
                                    </form>
                                    <button className="Button1">Jonatish
                                        <img src="../img/strelka.svg" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 ">
                        <img className="elektrik" src="../img/Group5.png" alt=""/>
                    </div>
                </div>
            </div>
    );
}

export default Mutaxasislarimiz;