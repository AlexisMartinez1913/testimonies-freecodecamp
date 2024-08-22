import React  from "react";
import logo from '../images/testimonio-emma.png'

function Testimony() {
    return (
        <div className='container-testimony'>
            <img 
            className='img-testimony'
            src={logo}
            alt="image-emma" />
            <div className="container-text-testimony">
                <p className="name-testimony">Emma Bostian En Suecia</p>
                <p className="charge-testimony">Ingeniera De Software En Spotify</p>
                <p className="text-testimony">Gran Academia, aqui pude aprender JavaScript</p>

            </div>

        </div>

    );
}

export default Testimony;