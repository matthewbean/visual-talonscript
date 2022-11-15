import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

import PrintModal from './PrintModal';



export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <PrintModal />
          <Link sx={{position:"fixed", top:"16px", right:"2rem"}} rel="noopener" target={"_blank"} href="https://github.com/matthewbean/visual-talonscript"><GitHubIcon></GitHubIcon></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
