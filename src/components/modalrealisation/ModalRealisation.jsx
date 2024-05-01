import { useState, useEffect } from 'react';
import * as React from 'react';

//MUI :
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//data
import categories from '../../data/categories.json'
import tags from '../../data/tags.json'





function ModalRealisation({ real, handleClose }) {

    const [showPhoto, setShowPhoto] = useState(false);
    //const [imageFocusUrl, setImageFocusUrl] = useState("");

    function getCategorie(id) {
        return categories.find((cat) => cat.id === id).label;
    }

    /* function zoomPhoto(url) {
        setImageFocusUrl(url);
        //setImageFocusUrl("../../images/" + real.url_cover);
        setShowPhoto(true);
    } */

    function getTags(idList) {
        let infos = "";
        idList.forEach((id, index) => {
            infos += index > 0 ? " / " : "";
            infos += tags.find((tag) => tag.id === id).tag;
        })
        return infos;
    }

    return (

        <article className="realisations-dialog-content">
            {
                /* showPhoto === true ?
                    <div className="realisations-dialog-content-focusimage" onClick={_ => setShowPhoto(false)}>
                        <img src={require("../../images/" + imageFocusUrl)} alt="photo en détail" />
                    </div>
                    : null */
            }

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
                    {real.id_categorie < 3 ?
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
                    //fullWidth
                    onClick={_ => setShowPhoto(!showPhoto)}
                >
                    <CameraAltIcon /><ArrowDropDownIcon /></Button>

                {showPhoto === true ?
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
