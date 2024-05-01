import { useState } from 'react';

//import created component
import SectionTitle from '../../components/sectiontitle/SectionTitle.jsx'
import CardExperience from '../../components/cardexperience/CardExperience.jsx'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//MUI :

//data :
import listExperiences from '../../data/experiences.json'

function Experiences() {



    return (

        <section className="experiences" id="experiences">
            <div className="section-container">
                <SectionTitle title={"Expériences"} fontColor={"swift-coal-2"} borderColor={"swift-turquoise"} />
                <div className="experiences-top">
                    <p>
                        Mon parcours professionnel a déjà été riche et varié. J'ai eu la chance d'évoluer à différents postes, d'exercer différents métiers, dans différents types d'entreprises situées dans diverses régions françaises. Cette richesse d'expérience est un atout sur lequel je peux m'appuyer pour les projets futurs.
                    </p>
                </div>
            </div>
            <div className="experiences-content">
                <div className="experiences-content-caroussel">
                    <Carousel // CAroussel is component from external librairy
                        // https://www.npmjs.com/package/react-multi-carousel
                        // exemples : https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={window.innerWidth > 800}

                        className=""
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 1,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 10
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1,
                                partialVisibilityGutter: 10
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={true}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {listExperiences.map((exp) => (
                            <CardExperience exp={exp} key={exp.id_experience} />

                        ))}

                    </Carousel>


                </div>

            </div>

            <div className="experiences-ref" id="references">
                <h3>Clients</h3>
                <div className="experiences-ref-logos">
                    <img src={require('../../images/logos/clients/groupama.png')} alt="logo client groupama" />
                    <img src={require('../../images/logos/clients/vans.png')} alt="logo client vans" />
                    <img src={require('../../images/logos/clients/riotinto.png')} alt="logo client Rio Tinto" />
                    <img src={require('../../images/logos/clients/rossignol.png')} alt="logo client Rossignol" />
                    <img src={require('../../images/logos/clients/ripcurl.png')} alt="logo client Rip Curl" />
                </div>
                <h3>Références</h3>
                <ul>
                    <li>Travail avec athlètes professionnels, certains <a href="https://www.lequipe.fr/Snowboard-freeride/Actualites/Victor-de-le-rue-ce-troisieme-sacre-est-vraiment-special/1454728" target="_blank">multiples champions du monde</a> ou <a href="https://fr.wikipedia.org/wiki/Bob_Burnquist" target="_blank">médaillés d’or aux X games.</a></li>
                    <li>lauréat en 2017 du prix “Short Film” au <a href="http://motorcyclefilmfestival.com/life-of-brian/" target="_blank">Festival International du Film de Moto de New York</a></li>
                </ul>

                <div className="aeration-basse"></div>
            </div>


        </section>
    );
}

export default Experiences;