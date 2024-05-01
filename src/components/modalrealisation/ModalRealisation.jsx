import { useState } from 'react';
import * as React from 'react';

//MUI :
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CameraAltIcon from '@mui/icons-material/CameraAlt';



//data
import categories from '../../data/categories.json'





function ModalRealisation({ real, handleClose }) {
    // props : real is JSON object from data/JsON file
    // props : handleClose is function from parent to trigger modal closing

    const [showPhoto, setShowPhoto] = useState(false); // state : show list of 4 photos or hide them

    function getCategorie(id) { // return label of the categorie, as string
        return categories.find((cat) => cat.id === id).label;
    }


    return (

        <article className="realisations-dialog-content">


            <div className="realisations-dialog-top">
                <div className="realisations-dialog-top-fondu"></div>
                <img src={require("../../images/" + real.url_cover)} />
                <span onClick={handleClose}><CloseIcon /></span>
            </div>
            <div className="realisations-dialog-middle">
                <h4>{real.titre}</h4>
                <h5> - {getCategorie(real.id_categorie)} - </h5>
                <div className="realisations-dialog-middle-infos">

                    <div>
                        <h5>{real.description}</h5>
                        <p className="realisations-dialog-middle-infos-1">{real.infos}</p>
                        <p>{real.infos2}</p>
                    </div>
                    {real.id_categorie < 3 ? // we show defi and solution only for categorie 1 (SPA) and 2 (Projets OpenClassrooms)
                        <div>
                            <p><span>Défi rencontré :</span> {real.defi}</p>
                            <p><span>Solution apportée : </span>{real.solution}</p>
                        </div>
                        : null}

                    <div>
                        {real.lien.length > 2 ? <a href={real.lien} target="_blank" noreferrer ><p>lien : <span>{real.lien.length > 400 ? "Vidéo de présentation" : real.lien}</span></p></a> : null}
                        {real.lien_github.length > 2 ? <a href={real.lien_github} target="_blank" noreferrer><p>lien Github : <span>{real.lien_github}</span></p></a> : null}
                    </div>
                </div>

            </div>
            <div className="realisations-dialog-bottom">
                <Button
                    className="realisations-dialog-bottom-expand"
                    onClick={_ => setShowPhoto(!showPhoto)}
                >
                    <CameraAltIcon /><ArrowDropDownIcon /></Button>

                {showPhoto === true ? // Showing photos only if button is clicked (state as true)
                    <div className="realisations-dialog-bottom-photos">
                        <img src={require("../../images/" + real.url_images[0])} alt="screenshot de code" />
                        <img src={require("../../images/" + real.url_images[1])} alt="screenshot de code" />
                        <img src={require("../../images/" + real.url_images[2])} alt="screenshot de code" />
                        <img src={require("../../images/" + real.url_images[3])} alt="screenshot de code" />
                    </div>
                    : null}

                <Button onClick={handleClose}>OK</Button>
            </div>
        </article>

    );
}

export default ModalRealisation;
