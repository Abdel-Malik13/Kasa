import '../../styles/GalleryImg.css';
import { useParams } from 'react-router-dom';

function GalleryImg() {
    const { logementNum } = useParams();

    return (
        <a href={`logements/32`}>
            <div className="gallery-img">
                <h2>Titre de la location</h2>
            </div>
        </a>
    )
}

export default GalleryImg;