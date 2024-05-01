
//import created component
import SectionTitle from '../../components/sectiontitle/SectionTitle.jsx'

//MUI
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Apropos() {



    return (

        <section className="apropos" id="apropos">
            <div className="section-container">
                <SectionTitle title={"à propos"} fontColor={"swift-lime-1"} borderColor={"swift-lime-2"} />


                <div className="apropos-top">
                    <div className="apropos-top-left">
                        <img src={require("../../images/portrait_MV_2.jpg")} title="Photo portrait de Manuel VIVION" alt="portrait de Manuel VIVION, beau gosse!" />
                    </div>
                    <div className="apropos-top-right">
                        <p>J'ai suivi une formation initiale universitaire en informatique (D.U.T.). Pour compléter et rester à jour, J'ai suivi la formation 'développeur web' chez OpenClassrooms. Cette formation en ligne, professionnalisante et diplômante (eq. bac+2) renforce mon profil pour mener à bien des projets de développement modernes. </p>
                        <div className="apropos-top-right-links">
                            <a href="https://www.linkedin.com/in/manuel-vivion-30544b83" target="_blank"><PictureAsPdfIcon /> <span>Mon C.V. en .pdf</span></a>
                            <a href="https://www.linkedin.com/in/manuel-vivion-30544b83" target="_blank"><LinkedInIcon /> <span>Mon compte LinkedIn</span></a>
                            <a href="https://github.com/manuelvivion" target="_blank"><GitHubIcon /> <span>Mon compte Github</span></a>
                        </div>
                    </div>

                </div>
                <div className="apropos-middle">
                    <p>Après avoir une nouvelle fois traversé la France, je me suis installé il y'a plusieurs années à Lacanau. L'océan, le médoc, les fôrets.
                        <br />Avant l'océan, J'ai eu la chance de quadriller les Alpes en long et en large. Basé à Grenoble, pendant de nombreuses années j'ai  travaillé dans l'audiovisuel : prises de vues, montage, réalisation. Nombreux de mes travaux étaient en rapport direct avec les sports de glisse et de pleine nature. <br />Pour équilibrer les heures passées assis devant l'écran, c'est sur 2 roues (moto, vélo) ou sur des planches qui glissent que je vais me défouler.</p>


                </div>
                <div className="apropos-bottom">

                </div>


            </div>




            <div className="aeration-basse"></div>
        </section>


    );
}

export default Apropos;
