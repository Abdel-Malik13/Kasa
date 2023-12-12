import '../../styles/Error.css';
import img from '../../assets/404.png';

function Error() {
    return (
        <div>
            <img className='error' src={img} alt='' />
            <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
        </div>
    )
}

export default Error;