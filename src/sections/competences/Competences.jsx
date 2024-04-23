import { useState } from 'react';

//import created component
import SectionTitle from '../../components/sectiontitle/SectionTitle.jsx'


//data :
import categories from '../../data/categories.json'
import listRealisations from '../../data/realisations.json'
import listCompetences from '../../data/competences.json'
import listSoftSkills from '../../data/softskills.json'


//MUI :
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

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

function Competences() {

    const [expanded, setExpanded] = useState(0);
    const [skillId, setSkillId] = useState(0);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    function getReal(id) {
        let realisation = listRealisations.find((real) => real.id_realisation === id);
        let categorie = categories.find((cat) => cat.id === realisation.id_categorie);
        return ({ titre: realisation.titre, categorie: categorie.label })
    }

    function getSkill() {
        let skill = listSoftSkills.find((skill) => skill.id === skillId);

        return skill;
    }

    function handleOpenReal(id) {

    }

    return (

        <section className="competences" id="competences">
            <div className="section-container">
                <SectionTitle title={"Compétences"} fontColor={"swift-lime-1"} borderColor={"swift-freeze"} />
                <div className="competences-content">
                    <div className="competences-content-main">
                        <div>
                            {listCompetences.map((comp) => (
                                <Accordion expanded={expanded === comp.id} onChange={handleChange(comp.id)}>
                                    <AccordionSummary >
                                        <div className="competences-content-item-header">
                                            <h3>{comp.titre}</h3>
                                            <Rating value={comp.rating} size="small" readOnly />
                                        </div>
                                        {/* <Typography>{comp.titre} </Typography> */}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            {comp.details.map((detail) => (
                                                <li>{detail}</li>
                                            ))}
                                        </ul>
                                        <div className="competences-content-item-realisations">
                                            <p className="competences-content-item-realisations-titre">Mise en partique sur ces projets : </p>
                                            {
                                                comp.realisations_id.map((id) => (
                                                    <div className="competences-content-item-realisations-ligne" onClick={_ => handleOpenReal(id)}>
                                                        <p><span>{getReal(id).titre}</span> / <span>{getReal(id).categorie}</span> / voir plus...</p>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </AccordionDetails>
                                </Accordion>

                            ))
                            }

                        </div>
                    </div>

                </div>





            </div>
            <div className="competences-soft">
                <div className="section-container">
                    <div className="competences-soft-top">
                        <h3>Soft Skills</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu  elementum nunc. Sed sit amet nisi dignissim, vulputate sapien ac,  viverra velit. Ut pretium quis orci ac malesuada. Quisque vel metus sit  amet quam lobortis egestas non sit amet est. Sed non lectus nec lectus  lacinia mollis vel non velit. Suspendisse venenatis dui id massa  molestie scelerisque. Nulla
                        </p>
                        <div className="competences-soft-top-list">
                            {listSoftSkills.map((skill) => (
                                <div className={skill.id === skillId ? "competences-soft-top-skill competences-soft-top-skill-selected" : "competences-soft-top-skill"}
                                    onClick={_ => setSkillId(skill.id === skillId ? 0 : skill.id)}>
                                    <h4>{skill.titre}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {skillId > 0 ?
                        <div className="competences-soft-bottom">

                            <div className="competences-soft-bottom-titre">
                                <p>{getSkill().titre}</p>
                            </div>

                            <ul>
                                {getSkill().details.map((detail) => (
                                    <li>{detail}</li>
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
                            </div>

                        </div>
                        : null}



                </div>
                <div className="aeration-basse"></div>
            </div>
        </section>
    );
}

export default Competences;