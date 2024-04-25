
//MUI :
import Button from '@mui/material/Button';

//data
import categories from '../../data/categories.json'
import tags from '../../data/tags.json'

function CardExperience({ exp }) {

    let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]

    function getDebut() {
        return mois[exp.start_month - 1] + ` ${exp.start_year}`;
    }

    function getFin() {

        let moi = exp.end_month === 0 ? "Aujourd'hui" : mois[exp.end_month - 1];
        let an = exp.end_month === 0 ? "" : ` ${exp.end_year}`;
        return moi + an;
    }

    return (

        <div className="card-experience">
            <div className="card-experience-top">
                <img src={require('../../images/experiences/' + exp.url_cover)} alt="visuel expérience" />
                <div className="card-experience-top-frise">
                    <p className="card-experience-date-start">{getDebut()}</p>
                    <span></span>
                    <p className="card-experience-date-end">{getFin()}</p>
                </div>
            </div>
            <div className="card-experience-middle">
                <h3>{exp.titre}</h3>
                <div className="card-experience-middle-contrat">
                    <p className="card-experience-middle-contrat-employeur">{exp.employeur}</p>
                    {exp.employeur.length > 3 ? "-" : null}
                    <p className="card-experience-middle-contrat-type">{exp.type_contrat}</p>
                </div>
                <div className="card-experience-middle-location">
                    <p className="card-experience-middle-location-ville">{exp.location_ville}</p>
                    <p> - </p>
                    <p className="card-experience-middle-location-pays">{exp.location_pays}</p>
                </div>


            </div>
            <div className="card-experience-bottom">
                <div className="card-experience-bottom-infos">
                    <p>{exp.description}</p>
                    <p>{exp.infos}</p>
                </div>
            </div>


        </div>

    );
}

export default CardExperience;
