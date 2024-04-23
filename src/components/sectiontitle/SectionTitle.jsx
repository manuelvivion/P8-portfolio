
//MUI :



function SectionTitle({ title, fontColor, borderColor }) {


    return (

        <div className="section-title">
            <h2 className={"section-title-text-" + fontColor}>{title}</h2>
            <span className={"section-title-border-" + borderColor}></span>
        </div>
    );
}

export default SectionTitle;