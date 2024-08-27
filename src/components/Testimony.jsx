
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
                alt={`image-${props.image}`}  />
            <div className="container-text-testimony">
                <p className="name-testimony"> <strong>{props.name}</strong> En {props.country}</p>
                <p className="charge-testimony"> <strong>{props.charge}</strong> En {props.company}</p>
                <p className="text-testimony">"{props.testimony}"</p>

            </div>

        </div>

    );
}

export default Testimony;