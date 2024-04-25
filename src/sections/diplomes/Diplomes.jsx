
//import created component
import SectionTitle from '../../components/sectiontitle/SectionTitle.jsx'

//MUI
import SchoolIcon from '@mui/icons-material/School';

function Diplomes() {



    return (

        <section className="diplomes" id="diplomes">
            <div className="section-container">
                <SectionTitle title={"Diplômes"} fontColor={"swift-coal-2"} borderColor={"swift-grass"} />


                <div className="diplomes-top">
                    <div className="diplomes-top-diplome">
                        <figure><SchoolIcon className="diplomes-top-icone" /></figure>
                        <h3>D.U.T.</h3>
                        <h4>Informatique</h4>
                        <h5>Analyste Programmeur</h5>
                        <p>I.U.T. de Nantes</p>

                    </div>

                    <div className="diplomes-top-diplome">
                        <figure><SchoolIcon className="diplomes-top-icone" /></figure>
                        <h3>RNCP 5</h3>
                        <h4>Développeur web</h4>
                        <h5>BAC +2</h5>
                        <p>OpenClassrooms</p>

                    </div>

                    <div className="diplomes-top-diplome">
                        <figure><SchoolIcon className="diplomes-top-icone" /></figure>
                        <h3>Bachelor</h3>
                        <h4>VFX</h4>
                        <h5>Infographiste Effets Spéciaux</h5>
                        <p>Institut E-Tribart</p>

                    </div>

                </div>
                <div className="diplomes-middle">


                </div>
                <div className="diplomes-bottom">

                </div>


            </div>




            <div className="aeration-basse"></div>
        </section>


    );
}

export default Diplomes;
