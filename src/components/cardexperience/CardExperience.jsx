
//MUI :
import Button from '@mui/material/Button';

//data
import categories from '../../data/categories.json'
import tags from '../../data/tags.json'

function CardExperience({ exp }) {

    /*  function getCategorie(id) {
         return categories.find((cat) => cat.id === id).label;
     }
 
     function getTags(idList) {
         let infos = "";
         idList.forEach((id, index) => {
             infos += index > 0 ? " / " : "";
             infos += tags.find((tag) => tag.id === id).tag;
         })
         return infos;
     } */

    return (

        <div className="card-experience">
            <div className="card-experience-top">
                {exp.titre}
            </div>
            <div className="card-experience-middle">


            </div>
            <div className="card-experience-bottom">

            </div>


        </div>

    );
}

export default CardExperience;
