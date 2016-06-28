import React from 'react'
import AppBar from 'material-ui/AppBar'
import HeaderIcon from './HeaderIcon'

const Header = () => (
  <AppBar
    title="Todo"
    iconElementLeft={<HeaderIcon />}
  />
)

export default Header
