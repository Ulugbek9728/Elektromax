import React from 'react';
import Carousel from "react-elastic-carousel"
import "./carusel1.scss"


function Carusel1(props) {
    const breakPoints1 = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 4},
        {width: 768, itemsToShow: 5},
        {width: 1200, itemsToShow: 6}
    ];
    return (
        <div className="container-fluid karusel">
            <div className="row">
                <Carousel className="carusel" breakPoints={breakPoints1}>
                    <div className="card border-0">
                        <img src="../img/10.png" alt=""/>
                    </div>
                    <div className="card border-0">
                        <img src="../img/11.png" alt=""/>

                    </div>
                    <div className="card border-0">
                        <img src="../img/12.png" alt=""/>

                    </div>
                    <div className="card border-0">
                        <img src="../img/13.png" alt=""/>

                    </div>
                    <div className="card border-0">
                        <img src="../img/14.png" alt=""/>

                    </div>
                    <div className="card border-0">
                        <img src="../img/10.png" alt=""/>

                    </div>
                    <div className="card border-0">
                        <img src="../img/11.png" alt=""/>

                    </div>
                    <div className="card border-0">
                        <img src="../img/12.png" alt=""/>

                    </div>
                    <div className="card border-0">
                        <img src="../img/13.png" alt=""/>

                    </div>
                    <div className="card border-0">
                        <img src="../img/14.png" alt=""/>

                    </div>

                </Carousel>
               <div className="oposity">
                   <div className="bir">
                       <div className="bizning">
                           <p>Bizning ishlarimiz</p>
                       </div>
                   </div>
                   <div className="ikki"></div>
               </div>
            </div>
        </div>
    );
}

export default Carusel1;