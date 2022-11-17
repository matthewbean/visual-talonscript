import React from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import { motion } from "framer-motion";


interface Props { 
    value: String,
    uuid: String,
    active:  Boolean,
    editAction: Function,
    deleteAction: Function,
    moveUpCommand:Function,
    moveDownCommand:Function
    }


export default function Text({moveUpCommand, value, moveDownCommand, uuid, active, editAction, deleteAction }:Props) {
    

    return (
        <>
        {active?(
            <motion.li layout
            key={"animation"+uuid}
            initial={{ opacity:0, height:0 }}
            animate={{ opacity:1, height:'auto' }}
            exit={{ opacity:0, height:0 }}>
            <h2>Delay (in ms):</h2>
            <Grid sx={{alignItems:'center'}} container spacing={1}>
               
               <Grid xs={10}>
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]' }} type="number" value={value} onChange={(e)=>editAction(uuid, e.target.value)} id={`delay-${uuid}`} label="Delay in ms" variant="outlined" />
            </Grid>
            <Grid xs={2}>
            <IconButton sx={{display:'block'}} onClick={()=>moveUpCommand(uuid)} color="primary" aria-label="move up" component="button" >
                    <ChangeHistoryOutlinedIcon />
                </IconButton>
                <IconButton sx={{display:'block'}} onClick= {()=>deleteAction(uuid)}>
                    <DeleteForeverRoundedIcon />
                </IconButton>
                <IconButton sx={{display:'block'}} onClick={()=>moveDownCommand(uuid)} color="primary" aria-label="move up" component="button" >
                    <ChangeHistoryOutlinedIcon sx={{transform:'rotate(180deg)'}}/>
                </IconButton>
            </Grid>
        </Grid>
        </motion.li>): 
        (<Box sx={{m:1, ml:2}}>Delay: {value}ms</Box>) }
        </>
    )
}
