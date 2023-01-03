import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import NavBarIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <AppBar color="transparent" sx={{ boxShadow: 'none' }} position="static">
          <Toolbar>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <NavBarIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Shortube
            </Typography>

            <Button
              color="inherit"
              startIcon={<GitHubIcon />}
              href="https://github.com/MefhigosetH/keepshort">
                Ver código
            </Button>
          </Toolbar>
        </AppBar>
    );
  }
}
