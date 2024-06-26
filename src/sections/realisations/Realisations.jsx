import { useState, useEffect } from 'react';


//import created component
import SectionTitle from '../../components/sectiontitle/SectionTitle.jsx'
import CardRealisation from '../../components/cardrealisation/CardRealisation.jsx'

//MUI :
import Button from '@mui/material/Button';


//data :
import categories from '../../data/categories.json'
import listRealisations from '../../data/realisations.json'

function Realisations() { // show the list of Cards "realisation" depending on the filter chosen


    const [idCat, setIdCat] = useState(0); //state for current categorie filter : 0 is "no filter"
    const [listLimit, setListLimit] = useState(3); // we limit the number of shown cards , to keep it "light" (3 is array index -> 4 cards shown)

    useEffect(() => { // every time the filter is changed
        setListLimit(3); // we reset the limit to 3 (3 is the index of the array, so 4 cards are shown)
    }, [idCat]);

    // set a new filtered list of realisation to show
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
                            filteredList.map((real, index) => (
                                index <= listLimit ?

                                    <CardRealisation key={real.id_realisation} real={real} />

                                    : null
                            ))
                        }
                    </div>

                    {
                        listLimit + 1 >= filteredList.length ? null :
                            <div className="realisations-seemore">
                                <p onClick={_ => setListLimit(listLimit + 4)}>Voir plus de réalisations</p>
                            </div>
                    }


                </div>
            </div>
            <div className="aeration-basse"></div>


        </section>
    );
}

export default Realisations;