import { useState, useEffect } from 'react';
import * as React from 'react';

//MUI :
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';

import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//data
import categories from '../../data/categories.json'
import tags from '../../data/tags.json'



function CardRealisations({ real }) {


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                        <p className={"categorie-couleur-" + real.id_categorie}><NavigateNextIcon />{getCategorie(real.id_categorie)}</p>
                    </div>
                </div>
                <div className="card-realisation-middle-end">
                    <p className="card-realisation-description">{real.description}</p>
                    <p className="card-realisation-tags">{getTags(real.tags_id)}</p>
                </div>



            </div>
            <div className="card-realisation-bottom">
                <Button variant="contained" fullWidth onClick={handleClickOpen}>Voir plus</Button>
            </div>


            <Modal
                className="realisations-dialog"
                open={open}
                onClose={handleClose}
            >
                <article className="realisations-dialog-content">


                    <div className="realisations-dialog-top">
                        <img src={require("../../images/" + real.url_cover)} />
                        <span onClick={handleClose}><CloseIcon /></span>
                    </div>
                    <div className="realisations-dialog-middle">
                        <h4>{real.titre}</h4>
                        <h5> - {getCategorie(real.id_categorie)} - </h5>
                        <div className="realisations-dialog-middle-infos">

                            <div>
                                <h5>{real.description}</h5>
                                <p>{real.infos}</p>
                                <p>{real.infos2}</p>
                                <p>{real.infos3}</p>
                            </div>
                            <div>
                                <a href={real.lien}><p>lien : <span>{real.lien}</span></p></a>
                                <a href={real.lien_github}><p>lien Github : <span>{real.lien_github}</span></p></a>
                            </div>
                        </div>

                    </div>
                    <div className="realisations-dialog-bottom">
                        <div className="realisations-dialog-bottom-photos">
                            <img src={require("../../images/realisations/covers/1.jpg")} alt="screenshot de code" />
                            <img src={require("../../images/realisations/covers/1.jpg")} alt="screenshot de code" />
                            <img src={require("../../images/realisations/covers/1.jpg")} alt="screenshot de code" />
                            <img src={require("../../images/realisations/covers/1.jpg")} alt="screenshot de code" />
                        </div>

                        <Button onClick={handleClose}>OK</Button>
                    </div>
                </article>
            </Modal>

        </div>

    );
}

export default CardRealisations;
