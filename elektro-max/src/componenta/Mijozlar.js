import React from 'react';
import "./Mijozlar.scss"

function Mijozlar(props) {
    return (
        <div className="Mijozlar">
            <div className="title text-center">Mijozlar bizni tanlashning 6ta sababi</div>
            <div className="container">
                <div className="row">
                    <div className="coll-4 col-md-4 col-6 position-relative">
                        <img className="backImg" src="../img/mijoz1.png" alt=""/>
                        <div className="imgBlur">
                            <img src="../img/clipboard.png" alt=""/>
                        </div>
                        <div className="titleCArd text-center">TEXNIK NAZORAT</div>
                        <div className="textCArd text-center"> Har bitta tovar brak <br/> emasligiga tekshiriladi</div>
                    </div>
                    <div className="coll-4 col-md-4 col-6 position-relative">
                        <img className="backImg" src="../img/mijoz1.png" alt=""/>
                        <div className="imgBlur">
                            <img src="../img/wallet.png" alt=""/>
                        </div>
                        <div className="titleCArd text-center">QULAY TO'LOV TURI</div>
                        <div className="textCArd text-center">
                            To'lovni amalga oshirish uchun o'zingizga qulay bo'lgan uslubdan foydalanishingiz mumkin
                        </div>
                    </div>
                    <div className="coll-4 col-md-4 col-6 position-relative">
                        <img className="backImg" src="../img/mijoz1.png" alt=""/>
                        <div className="imgBlur">
                            <img src="../img/truck.png" alt=""/>
                        </div>
                        <div className="titleCArd text-center">3 KUNDA BEPUL YETKAZISH</div>
                        <div className="textCArd text-center">
                            Toshkent shahri bo'ylab <br/>
                            bepul yetkazib beramiz
                        </div>
                    </div>
                    <div className="coll-4 col-md-4 col-6 position-relative">
                        <img className="backImg" src="../img/mijoz1.png" alt=""/>
                        <div className="imgBlur">
                            <img src="../img/tag.png" alt=""/>
                        </div>
                        <div className="titleCArd text-center">ENG ARZON NARXLARDA</div>
                        <div className="textCArd text-center">
                            Tog’ridan tog’ri ishlab chiqaruvchilardan ulgurji narxlarda
                        </div>
                    </div>
                    <div className="coll-4 col-md-4 col-6 position-relative">
                        <img className="backImg" src="../img/mijoz1.png" alt=""/>
                        <div className="imgBlur">
                            <img src="../img/bags.png" alt=""/>
                        </div>
                        <div className="titleCArd text-center">KENG ASSORTIMENT</div>
                        <div className="textCArd text-center">
                            Katalogimizdagi 750dan ortiq bo'lgan mahsulot turlaridan o'zingizga
                            mos bo'lganini tanlab
                            olishingiz mumkin
                        </div>
                    </div>
                    <div className="coll-4 col-md-4 col-6 position-relative">
                        <img className="backImg" src="../img/mijoz1.png" alt=""/>
                        <div className="imgBlur">
                            <img src="../img/toolbox.png" alt=""/>
                        </div>
                        <div className="titleCArd text-center">15 YILLIK TAJRIBA</div>
                        <div className="textCArd text-center">
                            15 yilik tajribaga <br/>
                            ega elektriklar</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mijozlar;