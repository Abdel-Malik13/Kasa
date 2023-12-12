import bg from '../../assets/IMG.png';
import '../../styles/SectionBg.css';

function SectionBg() {
    return (
        <div className="section-bg">
            <img src={bg} className='section-img'/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default SectionBg;