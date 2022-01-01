import React from 'react';
import Carousel from "react-elastic-carousel"
import "./hamkorKarusel.scss"

function HamkorCarusel(props) {
    const breakPoints = [
        {width: 1, itemsToShow: 2},
        {width: 500, itemsToShow: 3},
        {width: 768, itemsToShow: 4},
        {width: 1200, itemsToShow: 4}
    ];
    return (
        <div className="container hamkorlar">
            <div className="row">
                <div className="title text-center">Bizning hamkor va ishlab chiqaruvchilarimiz</div>
            <Carousel className="carusel" breakPoints={breakPoints}>
                <div className="card border-0">
                    <img src="../img/logo(1).png" alt=""/>
                </div>
                <div className="card border-0">
                    <img src="../img/logo(2).png" alt=""/>

                </div>
                <div className="card border-0">
                    <img src="../img/logo(3).png" alt=""/>

                </div>
                <div className="card border-0">
                    <img src="../img/logo(4).png" alt=""/>

                </div>
                <div className="card border-0">
                    <img src="../img/logo(5).png" alt=""/>

                </div>
                <div className="card border-0">
                    <img src="../img/logo(6).png" alt=""/>

                </div>
                <div className="card border-0">
                    <img src="../img/logo(7).png" alt=""/>

                </div>
                <div className="card border-0">
                    <img src="../img/logo(8).png" alt=""/>

                </div>
            </Carousel>
            </div>
        </div>
    );
}

export default HamkorCarusel;