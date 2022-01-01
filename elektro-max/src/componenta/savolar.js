import React, {useState} from 'react';
import "./savolar.scss"

function Savolar(props) {
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(true);
    const [isActive3, setIsActive3] = useState(true);
    return (
        <div className="container savolar ">
            <div className="row">
                <p className="title text-center">Kop beriladigan savollar</p>

                <div id="accordion">

                    <div className="card border-0 border-bottom">
                        <div onDoubleClick={() => setIsActive(prevState => !prevState)} onClick={() => setIsActive(prevState => !prevState)}
                             className="collapsed top btn d-flex justify-content-between" data-bs-toggle="collapse"
                             href="#collapseOne">
                            <div className="Title">“Vklyuchatel” turlarining bir biridan farqni nimada?</div>
                            <div className="Activ">{isActive ? <img src="../img/plyus.png" alt=""/> :
                                <img src="../img/minus.png" alt=""/>}</div>
                        </div>

                        <div id="collapseOne" className="collapse text show" data-bs-parent="#accordion">
                            <p className="text">
                                Batafsil ma’lumotlarni +998 55 500 95 00 nomerimizga qongiroq qilish orqali bilib
                                olishingiz mumkin
                            </p>
                        </div>
                    </div>

                    <div className="card border-0 border-bottom">
                        <div onDoubleClick={() => setIsActive(prevState => !prevState)} onClick={() => setIsActive1(prevState => !prevState)}
                             className="collapsed top btn d-flex justify-content-between" data-bs-toggle="collapse"
                             href="#collapseTwo">
                            <div className="Title">Qanday qilib sizlardan tovar xarid qilish mukin?</div>
                            <div className="Activ">{isActive1 ? <img src="../img/plyus.png" alt=""/> :
                                <img src="../img/minus.png" alt=""/>}</div>
                        </div>
                        <div id="collapseTwo" className="collapse text" data-bs-parent="#accordion">
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti eaque
                                laborum obcaecati, quia recusandae repellendus. Alias doloremque earum voluptates.
                            </p>
                        </div>
                    </div>

                    <div className="card border-0 border-bottom">
                        <div onDoubleClick={() => setIsActive(prevState => !prevState)} onClick={() => setIsActive2(prevState => !prevState)}
                             className="collapsed top btn d-flex justify-content-between" data-bs-toggle="collapse"
                             href="#collapseThree">
                            <div className="Title">Elektrikni uygacha chaqirish necha pul turadi?</div>
                            <div className="Activ">{isActive2 ? <img src="../img/plyus.png" alt=""/> :
                                <img src="../img/minus.png" alt=""/>}</div>
                        </div>
                        <div id="collapseThree" className="collapse text" data-bs-parent="#accordion">
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque et facere
                                inventore natus nostrum quia reiciendis. Inventore, maxime nemo odit quas sed vel
                                voluptatem!
                            </p>
                        </div>
                    </div>

                    <div className="card border-0 border-bottom">
                        <div onDoubleClick={() => setIsActive(prevState => !prevState)} onClick={() => setIsActive3(prevState => !prevState)}
                             className="collapsed top btn d-flex justify-content-between" data-bs-toggle="collapse"
                             href="#collapseFour">
                            <div className="Title">Elektrikni uygacha chaqirish necha pul turadi?</div>
                            <div className="Activ">{isActive3 ? <img src="../img/plyus.png" alt=""/> :
                                <img src="../img/minus.png" alt=""/>}</div>
                        </div>
                        <div id="collapseFour" className="collapse text" data-bs-parent="#accordion">
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque et facere
                                inventore natus nostrum quia reiciendis. Inventore, maxime nemo odit quas sed vel
                                voluptatem!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Savolar;