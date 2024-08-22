import React from "react";
import '../style-sheets/Testimony.css';
import emma from '../images/testimonio-emma.png';
import sarah from '../images/testimonio-sarah.png';
import shawn from '../images/testimonio-shawn.png';




function Testimony(props) {

    const images = {
        emma: emma,
        sarah: sarah,
        shawn: shawn
    };

    return (

        <div className="container-testimony">
            <img
                className="img-testimony"
                src={images[props.image]}
                alt="image-emma" />
            <div className="container-text-testimony">
                <p className="name-testimony">{props.name} En {props.country}</p>
                <p className="charge-testimony">{props.charge} En {props.company}</p>
                <p className="text-testimony">"{props.testimony}"</p>

            </div>

        </div>

    );
}

export default Testimony;