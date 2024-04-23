import { useState } from 'react';

//import created component
import SectionTitle from '../../components/sectiontitle/SectionTitle.jsx'
import CardExperience from '../../components/cardexperience/CardExperience.jsx'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//MUI :

//data :
import categories from '../../data/categories.json'
import listRealisations from '../../data/realisations.json'
import listExperiences from '../../data/experiences.json'

function Experiences() {



    return (

        <section className="experiences" id="experiences">
            <div className="section-container">
                <SectionTitle title={"Expériences"} fontColor={"swift-coal-2"} borderColor={"swift-turquoise"} />
                <div className="experiences-top">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu  elementum nunc. Sed sit amet nisi dignissim, vulputate sapien ac,  viverra velit. Ut pretium quis orci ac malesuada. Quisque vel metus sit  amet quam lobortis egestas non sit amet est. Sed non lectus nec lectus  lacinia mollis vel non velit. Suspendisse venenatis dui id massa  molestie scelerisque. Nulla
                    </p>
                </div>
            </div>
            <div className="experiences-content">
                <div className="experiences-content-caroussel">
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={true}
                        //partialVisible
                        className=""
                        containerClass="card-experience-container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass="card-experience-wrapper"
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
                            <CardExperience exp={exp} />

                        ))}

                    </Carousel>


                </div>

            </div>

            <div className="experiences-ref">
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
                    <li>Travail avec Athlètes professionnels, dont certains multiples champions du monde ou médailles d’or aux X games.</li>
                    <li>lauréat du prix “Short Film” au festival International du film de moto de New York</li>
                </ul>

                <div className="aeration-basse"></div>
            </div>


        </section>
    );
}

export default Experiences;