//import the only one global CSS file
import './styles/style.css';

//import created component
import Header from './sections/header/Header.jsx'
import Intro from './sections/intro/Intro.jsx'
import Realisations from './sections/realisations/Realisations.jsx'
import Competences from './sections/competences/Competences.jsx'
import Experiences from './sections/experiences/Experiences.jsx'
import Diplomes from './sections/diplomes/Diplomes.jsx'
import Apropos from './sections/apropos/Apropos.jsx'
import Contacts from './sections/contacts/Contacts.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>  
        <Intro/>
        <Realisations/>
        <Competences/>
        <Experiences/>
        <Diplomes/>
        <Apropos/>
      </main>
      <footer>
        <Contacts/>
      </footer>
    </div>
  );
}

export default App;
