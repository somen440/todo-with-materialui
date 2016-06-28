import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const HeaderIcon = () => (
  <IconMenu
    iconButtonElement={<IconButton><MenuIcon color={'white'} /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem primaryText="All" />
    <MenuItem primaryText="Active" />
    <MenuItem primaryText="Completed" />
  </IconMenu>
);

export default HeaderIcon
