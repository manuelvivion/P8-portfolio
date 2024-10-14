import { useState } from 'react';

//MUI :
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {

    //// Popover MGMT
    //// popover is opend from burger button
    //// popover show stack of links for every part of the portfolio
    //// burger button is the only one displayed in nav bar for mobile screens

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    /// end of Popover MGMT

    return (

        <nav className="top-nav">
            <div className="top-nav-left">
                <a href="https://github.com/manuelvivion" target="_blank"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/manuelvivion/" target="_blank"><LinkedInIcon /></a>
            </div>

            <div className="top-nav-right">

                <a href="#realisations">Réalisations</a>
                <a href="#competences">Compétences</a>
                <a href="#apropos">à propos</a>
                <a href="#contacts" className="sans-barre">Contacts</a>
                <MenuIcon className="top-nav-burger" onClick={handleClick} />

                <Popover
                    className="top-nav-root-popover"
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >

                    <div className="top-nav-menu-popover" onClick={handleClose}>
                        <a href="#intro">Bonjour!</a>
                        <a href="#realisations">réalisations</a>
                        <a href="#competences">compétences</a>
                        <a href="#softskills">Soft Skills</a>
                        <a href="#experiences">expériences</a>
                        <a href="#references">références</a>
                        <a href="#diplomes">diplômes</a>
                        <a href="#apropos">à propos</a>
                        <a href="#contacts">contacts</a>
                    </div>
                </Popover>
            </div>
        </nav>
    );
}

export default Header;