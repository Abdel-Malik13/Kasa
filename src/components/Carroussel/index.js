import '../../styles/Carroussel.css';
import img from '../../assets/Background.png';
import Logement from '../Logement';

function Carroussel() {
    return (
        <div>
            <div className="carroussel">
                <img src={img} alt="" />
            </div>
            <Logement />
        </div>
    )
}

export default Carroussel;