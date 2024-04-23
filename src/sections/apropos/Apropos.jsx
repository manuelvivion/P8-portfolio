
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu  elementum nunc. Sed sit amet nisi dignissim, vulputate sapien ac,  viverra velit. Ut pretium quis orci ac malesuada. Quisque vel metus sit  amet quam lobortis egestas non sit amet est. Sed non lectus nec lectus  lacinia mollis vel non velit. Suspendisse venenatis dui id massa  molestie scelerisque</p>
                        <div className="apropos-top-right-links">
                            <a href="" target="_blank"><PictureAsPdfIcon /> <span>Mon C.V. en .pdf</span></a>
                            <a href="https://www.linkedin.com/in/manuel-vivion-30544b83" target="_blank"><LinkedInIcon /> <span>Mon compte LinkedIn</span></a>
                            <a href="https://github.com/manuelvivion" target="_blank"><GitHubIcon /> <span>Mon compte Github</span></a>
                        </div>
                    </div>

                </div>
                <div className="apropos-middle">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu  elementum nunc. Sed sit amet nisi dignissim, vulputate sapien ac,  viverra velit. Ut pretium quis orci ac malesuada. Quisque vel metus sit  amet quam lobortis egestas non sit amet est. Sed non lectus nec lectus  lacinia mollis vel non velit. Suspendisse venenatis dui id massa  molestie scelerisque</p>


                </div>
                <div className="apropos-bottom">

                </div>


            </div>




            <div className="aeration-basse"></div>
        </section>


    );
}

export default Apropos;
