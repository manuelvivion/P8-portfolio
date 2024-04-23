
//MUI :
import Button from '@mui/material/Button';

//data
import categories from '../../data/categories.json'
import tags from '../../data/tags.json'

function CardRealisations({ real }) {

    function getCategorie(id) {
        return categories.find((cat) => cat.id === id).label;
    }

    function getTags(idList) {
        let infos = "";
        idList.forEach((id, index) => {
            infos += index > 0 ? " / " : "";
            infos += tags.find((tag) => tag.id === id).tag;
        })
        return infos;
    }

    return (

        <div className="card-realisation">
            <div className="card-realisation-top">
                <img src={require("../../images/" + real.url_cover)} />
            </div>
            <div className="card-realisation-middle">

                <div className="card-realisation-middle-start">
                    <h3>{real.titre}</h3>
                    <div className="card-realisation-middle-categorie">
                        <p>{getCategorie(real.id_categorie)}</p>
                    </div>
                </div>
                <div className="card-realisation-middle-end">
                    <p className="card-realisation-description">{real.description}</p>
                    <p className="card-realisation-tags">{getTags(real.tags_id)}</p>
                </div>



            </div>
            <div className="card-realisation-bottom">
                <Button variant="contained" fullWidth>Voir plus</Button>
            </div>


        </div>

    );
}

export default CardRealisations;
