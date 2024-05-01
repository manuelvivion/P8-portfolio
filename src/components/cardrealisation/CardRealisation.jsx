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

//created components
import ModalRealisation from '../modalrealisation/ModalRealisation.jsx'



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
                <img src={require("../../images/" + real.url_cover)} alt="image de couverture de cette réalisation" />
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
                <>
                    <ModalRealisation real={real} handleClose={handleClose} />
                </>
            </Modal>

        </div>

    );
}

export default CardRealisations;
