import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Carroussel from "../../components/Carroussel";

function Logements() {

    const { logementNum } = useParams();

    return (
        <div>
            <Header />
            <Carroussel />
        </div>
    )
}

export default Logements;