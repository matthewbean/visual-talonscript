import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import PrintIcon from '@mui/icons-material/Print';

import AppContext from '../context/appContext'

import { StateTypes } from '../types/StateTypes';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #222',
  boxShadow: 24,
  p: 4,
};

export default function PrintModal() {
    const appContext=useContext(AppContext)
    const { printCommands, copyCommands }:StateTypes = appContext
 
  const [open, setOpen] = useState(false);
  const [print, setPrint] = useState('');
  const handleClose = () => setOpen(false);

  const handleOpen = ()=>{
    setPrint(printCommands())
    
    setOpen(true)
  }


  return (
    <div>
      <Button variant="outlined" startIcon={<PrintIcon />} onClick={handleOpen}>Create Document</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
        <Box sx={style} >
        <Button sx={{ mb:2, position:"absolute", left: 32}} onClick={()=>handleClose()} variant="outlined">
                Close
        </Button>
        <Button sx={{ mb:2, position:"absolute", right: 32}} onClick={()=>copyCommands()} variant="contained">
                Copy Text
            </Button>
        <div style={{marginTop:"50px"}} dangerouslySetInnerHTML={{__html:print}}>
          </div>
        
        </Box>
        </>
      </Modal>
    </div>
  );
}
