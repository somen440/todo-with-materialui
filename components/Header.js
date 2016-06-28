import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FilterLink from '../containers/FilterLink'

const HeaderIcon = () => (
  <IconMenu
    iconButtonElement={<IconButton><MenuIcon color={'white'} /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem>
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
    </MenuItem>
    <MenuItem>
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
    </MenuItem>
    <MenuItem>
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </MenuItem>
  </IconMenu>
);

const Header = () => (
  <AppBar
    title="Todo"
    iconElementLeft={<HeaderIcon />}
  />
)

export default Header
