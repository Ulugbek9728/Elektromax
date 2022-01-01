import React from 'react';
import Navbar from "./Navbar";
import Main from "./componenta/Main";
import Maxsulotlarimiz from "./componenta/Maxsulotlarimiz";
import Mijozlar from "./componenta/Mijozlar";
import Mutaxasislarimiz from "./componenta/Mutaxasislarimiz";
import OrnatishTamirlash from "./componenta/OrnatishTamirlash";
import Aloqa from "./componenta/aloqa";
import Savolar from "./componenta/savolar";
import Footer from "./componenta/footer";
import MijozlarBizXaqimizda from "./componenta/MijozlarBizXaqimizda";
import Carusel1 from "./componenta/carusel1";
import HamkorCarusel from "./componenta/HamkorCarusel";

function App(props) {
    return (
        <div>
            <Navbar/>
            <Main/>
            <Maxsulotlarimiz/>
            <Mijozlar/>
            <Mutaxasislarimiz/>
            <OrnatishTamirlash/>
            <Carusel1/>
            <MijozlarBizXaqimizda/>
            <HamkorCarusel/>
            <Aloqa/>
            <Savolar/>
            <Footer/>
        </div>
    );
}

export default App;