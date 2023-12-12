import GalleryImg from "../GalleryImg";
import '../../styles/Gallery.css'
import logements from '../../logements.json';

function Gallery() {
    return (
        <section className="gallery-bg">
            {logements.map((logement) => {
                console.log(logement);
                return <GalleryImg />
            })}
        </section>
    )
}

export default Gallery;