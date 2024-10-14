import { useState } from 'react';

//import created component
import SectionTitle from '../../components/sectiontitle/SectionTitle.jsx'


//data :
import categories from '../../data/categories.json'
import listRealisations from '../../data/realisations.json'
import listCompetences from '../../data/competences.json'
import listSoftSkills from '../../data/softskills.json'
import listExperiences from '../../data/experiences.json'


//MUI :
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import HearingIcon from '@mui/icons-material/Hearing';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import LayersIcon from '@mui/icons-material/Layers';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TranslateIcon from '@mui/icons-material/Translate';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';

import Modal from '@mui/material/Modal';

//created components
import ModalRealisation from '../../components/modalrealisation/ModalRealisation.jsx'

//// --- Start of Accordeons config 

const iconesList = [<AutoStoriesIcon />, <LayersIcon />, <Diversity3Icon />, <CropSquareIcon />, <RemoveRedEyeIcon />, <SignalCellularAltIcon />, <HearingIcon />, <TipsAndUpdatesIcon />, <ArrowRightAltIcon />, <TranslateIcon />]

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

//// --- end of accordion config

function Competences() {

    //// modal management 
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //// end of Modal MGMT


    const [expanded, setExpanded] = useState(0);
    const [skillId, setSkillId] = useState(0);
    const [panelOpen, setPanelOpen] = useState(false);
    const [real, setReal] = useState({});

    const handleChange = (panel) => (event, newExpanded) => { //manage the change of accordion
        setExpanded(newExpanded ? panel : false);
        setPanelOpen(false);
    };

    function getReal(id) { // search Realisation matching with the opened Competences (by realisation Id)
        // this function is used to fill infos in every realisations lines matching a competences
        // prop : id is realisation_id listed in "realisation_id" field of Competence JSON object

        //first find the realisation JSON object
        let realisation = listRealisations.find((real) => real.id_realisation === id);
        //then find the categorie of this Realisation
        let categorie = categories.find((cat) => cat.id === realisation.id_categorie);
        // return an object with 2 fields : label of the realisation, label, of the catégorie
        return ({ titre: realisation.titre, categorie: categorie.label })
    }

    function getExp(id) { // return the full Experience JSON Object
        // prop : id . id of the experience json object. id is listed in the "experience_id" field of competence JSON Object
        return listExperiences.find((exp) => exp.id_experience === id);
    }

    function getSkill() { // return SoftSkill JSON object for the "Soft Skills" part, at the bottom of this section
        let skill = listSoftSkills.find((skill) => skill.id === skillId);
        return skill;
    }

    function handleOpenReal(id) { // function called to open modal (focus on realisation)
        // tell the modal which realisation to display
        setReal(listRealisations.filter((real) => real.id_realisation === id)[0]);
        // open the modal
        handleClickOpen();
    }

    return (

        <section className="competences" id="competences">
            <div className="section-container">
                <SectionTitle title={"Compétences"} fontColor={"swift-lime-1"} borderColor={"swift-freeze"} />
                <div className="competences-content">
                    <div className="competences-content-main">
                        <div>
                            {listCompetences.map((comp) => ( // for every compétences listed in JSON file
                                <Accordion expanded={expanded === comp.id} onChange={handleChange(comp.id)} key={comp.id}>
                                    <AccordionSummary >
                                        <div className="competences-content-item-header">
                                            <h3>{comp.titre}</h3>
                                            <Rating value={comp.rating} size="small" readOnly />
                                        </div>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            {comp.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                        <div className="competences-content-item-realisations">
                                            <p className="competences-content-item-realisations-titre"
                                                onClick={_ => setPanelOpen(!panelOpen)}
                                            >Mise en pratique : {panelOpen ? null : <span><EastIcon /> Cliquez pour voir les projets</span>}</p>
                                            {panelOpen ?
                                                comp.realisations_id.map((id) => (
                                                    <div key={id} className="competences-content-item-realisations-ligne" onClick={_ => handleOpenReal(id)}>
                                                        <p><span>{getReal(id).titre}</span> / <span>{getReal(id).categorie}</span> / voir plus...</p>
                                                    </div>
                                                ))
                                                : null}

                                        </div>
                                    </AccordionDetails>
                                </Accordion>

                            ))
                            }

                        </div>
                    </div>

                </div>





            </div>
            {/* //// End of the accordeon zone */}


            {/* //// Soft skills zone :  */}
            <div className="competences-soft" id="softskills">
                <div className="section-container">
                    <div className="competences-soft-top">
                        <h3>Soft Skills</h3>
                        <p>
                            Au delà des compétences techniques directement nécessaires à un développeur web, toutes mes expériences professionnelles passées m'ont permis de développer et renforcer tout un bagage de compétences dites transversales. Ces soft skills correspondent à celles qu'on attend d'un développeur et m'aident à mener à bien mes différents projets.
                        </p>
                        <div className="competences-soft-top-list">
                            {listSoftSkills.map((skill, index) => (
                                <div key={index} className={skill.id === skillId ? "competences-soft-top-skill competences-soft-top-skill-selected" : "competences-soft-top-skill"}
                                    onClick={_ => setSkillId(skill.id === skillId ? 0 : skill.id)}>
                                    <h4>{iconesList[index]}<span>{skill.titre}</span></h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {skillId > 0 ?
                        <div className="competences-soft-bottom">

                            <div className="competences-soft-bottom-titre">
                                <p>{getSkill().titre}</p>
                                <CloseIcon className="competences-soft-close-icon" onClick={_ => setSkillId(0)} />
                            </div>

                            {
                                getSkill().realisations_id.length === 0 && getSkill().experiences_id.length === 0 ?
                                    null
                                    :
                                    <div className="competences-soft-bottom-content">

                                        <ul>
                                            {getSkill().details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>

                                        <p className="competences-soft-bottom-texte">Mise en pratique : </p>
                                        <span className="competences-soft-bottom-barre"></span>

                                        <div className="competences-soft-bottom-exemples">
                                            {getSkill().realisations_id.map((id) => (
                                                <div className="competences-content-item-realisations-ligne" onClick={_ => handleOpenReal(id)}>
                                                    <p><span>{getReal(id).titre}</span> / <span>{getReal(id).categorie}</span> / voir plus...</p>
                                                </div>
                                            ))

                                            }
                                            {getSkill().experiences_id.map((id) => (
                                                <div className="competences-content-item-experience-ligne">
                                                    <p>
                                                        <span>{getExp(id).titre}</span>
                                                        <span>/</span>
                                                        <span>{getExp(id).employeur}</span>
                                                        <span>{getExp(id).employeur.length > 2 ? "/" : ""}</span>
                                                        <span>{getExp(id).type_contrat}</span>
                                                        <span>/</span>
                                                        <span>{getExp(id).start_year}-{getExp(id).end_year === 0 ? 2024 : getExp(id).end_year}</span>
                                                    </p>
                                                </div>
                                            ))

                                            }
                                        </div>
                                    </div>
                            }

                        </div>
                        : null}



                </div>
                <div className="aeration-basse"></div>
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
        </section>
    );
}

export default Competences;