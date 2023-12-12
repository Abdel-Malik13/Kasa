import '../../styles/Logement.css';
import Footer from '../Footer';

function Logement() {
    return (
        <div>
            <div className="logement">
                <div className='logement-information'>
                    <div className='title'>
                        <h2>Cozy loft on the Canal Saint-Martin</h2>
                        <p>Paris, Île-de-France</p>
                    </div>
                    <div className='user-informations'>
                        <p>Alexandre <span className='name'>Dumas</span></p>
                        <img src='' alt='' />
                    </div>
                </div>
                <div className='logement-stats'>

                </div>
                <div className='logement-description'>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Logement;