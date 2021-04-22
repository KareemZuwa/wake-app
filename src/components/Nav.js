import React from 'react';
import './Nav.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="menu">
      <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        
      </MenuIcon>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
            style: {
              background: `linear-gradient(to bottom right, #FCB64E, white)`,
              width: `375px`,
              display: `flex`,
              height: `812px`
            }
          }}
      >
        <MenuItem onClick={handleClose}>
            <Link 
            to='#'
            className="link"
            >
              Mina larm
          </Link>
        </MenuItem>
        
        
        <MenuItem onClick={handleClose}>
            <Link 
            to='./SettingsPage.js'
            className="link"
            >
                Inställningar
            </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}