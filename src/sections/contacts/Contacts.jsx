
//import created component
import SectionTitle from '../../components/sectiontitle/SectionTitle.jsx'

//MUI


function Contacts() {

    // ItemScop, ItemType, ItemProp : Schema.org Rich Snippets
    return (

        <section className="contacts" id="contacts" itemScope itemType="https://schema.org/Person">
            <div className="section-container">
                <SectionTitle title={"Contacts"} fontColor={"swift-lime-1"} borderColor={"swift-freeze"} />


                <div className="contacts-top">

                    <div className="contacts-top-left">
                        <p itemProp="name">Manuel VIVION</p>
                        <a href="tel:0685553706"><p itemProp="telephone">+33 (0)6 85 55 37 06</p></a>
                        <a href="mailto:manuel.vivion@gmail.com"><p itemProp="email">manuel.vivion@gmail.com</p></a>
                    </div>
                    <div className="contacts-top-right">
                        <p itemProp="streetAddress">18, allée de la vergue, le huga</p>
                        <p><span itemProp="postalCode">33680</span>, <span itemProp="addressLocality">Lacanau</span></p>
                        <p itemProp="addressCountry">France</p>

                    </div>

                </div>



            </div>




            <div className="aeration-basse"></div>
        </section>


    );
}

export default Contacts;
