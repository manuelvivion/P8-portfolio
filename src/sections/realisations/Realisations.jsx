import { useState } from 'react';

//import created component
import SectionTitle from '../../components/sectiontitle/SectionTitle.jsx'
import CardRealisation from '../../components/cardrealisation/CardRealisation.jsx'

//MUI :

//data :
import categories from '../../data/categories.json'
import listRealisations from '../../data/realisations.json'

function Realisations() {

    const [idCat, setIdCat] = useState(0);

    let filteredList = idCat > 0 ? listRealisations.filter((real) => real.id_categorie === idCat) : listRealisations;
    return (

        <section className="realisations" id="realisations">
            <div className="section-container">
                <SectionTitle title={"Réalisations"} fontColor={"swift-coal-2"} borderColor={"swift-turquoise"} />
                <div className="realisations-content">
                    <div className="realisations-selector">
                        {categories.map((cat) =>
                            <div
                                key={cat.id}
                                className={cat.id === idCat ? "realisations-selector-categorie-selected" : "realisations-selector-categorie"}
                                onClick={_ => setIdCat(cat.id)}
                            >
                                <p>{cat.label}</p>
                            </div>
                        )}
                    </div>

                    <div className="realisations-list">
                        {
                            filteredList.map((real) => (
                                <CardRealisation key={real.id_realisation} real={real} />
                            ))
                        }
                    </div>

                </div>
            </div>
            <div className="aeration-basse"></div>
        </section>
    );
}

export default Realisations;