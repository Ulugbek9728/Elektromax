import React from 'react';
import "./MijozlarBizXaqimizda.scss"

function MijozlarBizXaqimizda(props) {
    return (
        <div className="MijozlarBizXaqimizda">
            <div className="container">
                <div className="row">
                    <p className="title">Mijozlar biz haqimizda</p>
                    <div className="col-md-4 col-sm-6 mijozCol">
                        <div className="video icon icon-video">
                            <iframe src="https://www.youtube.com/embed/FulrjdAkpkM"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                        <div className="Name">Azamat Rasulov</div>
                        <div className="Job">“Lux Shop”</div>
                    </div>
                    <div className="col-md-4 col-sm-6 mijozCol">
                        <div className="video icon icon-video">
                            <iframe src="https://www.youtube.com/embed/U5tjF453v7w"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                        <div className="Name">Shavkat Zoirov</div>
                        <div className="Job">“Kids Shop”</div>
                    </div>
                    <div className="col-md-4 col-sm-6 mijozCol offset-sm-3">
                        <div className="video icon icon-video">
                            <iframe  src="https://www.youtube.com/embed/FRr5GyHASPs"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                        <div className="Name">Shaxlo Valiyeva</div>
                        <div className="Job">“Big Bear Cafe”</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MijozlarBizXaqimizda;