
//MUI :
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';

function Header() {


    return (

        <nav className="top-nav">
            <a href="#realisations">Réalisations</a>
            <a href="#competences">Compétences</a>
            <a href="#apropos">à propos</a>
            <a href="#contacts" className="sans-barre">Contacts</a>
            <MenuIcon className="top-nav-burger" />
        </nav>
    );
}

export default Header;