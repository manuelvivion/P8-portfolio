
//MUI :



function Intro() {


    return (

        <section className="intro">
            <div className="intro-top">
                <h1><span className="intro-top-txt1">Bonjour! Je suis</span>Manuel VIVION<br /><span className="intro-top-txt2">Développeur web fullstack</span></h1>
                <span className="intro-top-underline"></span>
            </div>
            <div className="intro-middle">
                <img src={require("../../images/portrait_MV_2.jpg")} title="Photo portrait de Manuel VIVION" alt="portrait de Manuel VIVION, beau gosse!" />

            </div>
            <div className="intro-bottom">
                <img src={require("../../images/logos/w3_html5-icon.png")} alt="logo html5" title="html5" />
                <img src={require("../../images/logos/w3_css-icon.png")} alt="logo css3" title="css3" />
                <img src={require("../../images/logos/js.png")} alt="javascript Logo" title="Javascript" />
                <img src={require("../../images/logos/reactjs-icon.png")} alt="React Logo" title="React" />
                <img src={require("../../images/logos/jsIconGreen.png")} alt="NodeJs Logo" title="Node.Js" />
                <img src={require("../../images/logos/js_redux-icon.png")} alt="Redux Logo" title="Redux" />
                <img src={require("../../images/logos/mysql-official.png")} alt="MySql Logo" title="MySql" />
            </div>
        </section>
    );
}

export default Intro;