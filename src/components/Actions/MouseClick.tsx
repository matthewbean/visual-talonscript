import React from 'react'

import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import Select from '@mui/material/Select';
import { motion } from "framer-motion";
import { Key } from 'react';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Legend } from '../../types/StateTypes';



interface Props { 
    value: any,
    uuid: String,
    active:  Boolean,
    editAction: Function,
    deleteAction: Function,
    moveUpCommand:Function,
    moveDownCommand:Function,
    legend:Legend
    }

export default function KeyDown({moveUpCommand, legend,  uuid, value, active, editAction, moveDownCommand, deleteAction }:Props) {

    return (
        <>
        
        {   active?
            (<motion.li layout
                key={"animation"+uuid as Key}
                initial={{ opacity:0, height:0 }}
                animate={{ opacity:1, height:'auto' }}
                exit={{ opacity:0, height:0 }}>
            <h2>Mouse Action:</h2>
            <Grid sx={{alignItems:'center'}} container spacing={1}>
               
                <Grid xs={10}>
                    <InputLabel id="demo-simple-select-label">Mouse Action</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={(e)=>editAction(uuid, e.target.value)}
                    >
                    <MenuItem value={'leftClick'}>Left Click</MenuItem>
                    <MenuItem value={'rightClick'}>Right Click</MenuItem>
                    <MenuItem value={'dragLeftClick'}>Drag Left Click</MenuItem>
                    <MenuItem value={'dragRightClick'}>Drag Right Click</MenuItem>
                    <MenuItem value={'releaseDrag'}>Release Drags</MenuItem>
                    <MenuItem value={'doubleClick'}>Double Left Click</MenuItem>
                    <MenuItem value={'tripleClick'}>Triple Left Click</MenuItem>
                    </Select>
                </Grid>
                <Grid xs={2}>
                    <IconButton sx={{display:'block'}} onClick={()=>moveUpCommand(uuid)} color="primary" aria-label="move up" component="button" >
                        <ChangeHistoryOutlinedIcon />
                    </IconButton>
                    <IconButton sx={{display:'block'}}  onClick= {()=>deleteAction(uuid)}>
                        <DeleteForeverRoundedIcon />
                    </IconButton>
                    <IconButton sx={{display:'block'}} onClick={()=>moveDownCommand(uuid)} color="primary" aria-label="move up" component="button" >
                        <ChangeHistoryOutlinedIcon sx={{transform:'rotate(180deg)'}}/>
                    </IconButton>
                </Grid>
            </Grid>
            </motion.li>):
            (<Box sx={{m:1, ml:2}}>Mouse Action: {legend[value].name}</Box>)      
        }
        </>
    )
}
