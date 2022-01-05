import React from "react";
import spin from '../../assets/img/spin.svg';
const Preloader = (props) => {
    return (
        <div>
            <img src={spin} alt="preloader"/>
        </div>
    )
}

export default Preloader;
