
//MUI :



function SectionTitle({ title, fontColor, borderColor }) { // For every section (compétences, experiences...)
    //prop : title : the text of the title
    // font color : one of the colors in scss-config.scss
    // border color : one of the colors in scss-config.scss
    // colors are added to className (already set in style.scss SCSS file)

    return (

        <div className="section-title">
            <h2 className={"section-title-text-" + fontColor}>{title}</h2>
            <span className={"section-title-border-" + borderColor}></span>
        </div>
    );
}

export default SectionTitle;