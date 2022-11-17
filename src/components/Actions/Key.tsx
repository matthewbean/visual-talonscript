import React from 'react'

import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from "framer-motion";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import Select from '@mui/material/Select';

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Modifiers } from '../../types/StateTypes';


interface Props { 
    value: String,
    uuid: String,
    active:  Boolean,
    modifiers: Modifiers,
    editModifier: Function,
    editAction: Function,
    deleteAction: Function,
    moveUpCommand:Function,
    moveDownCommand:Function
    }

export default function Key({ moveDownCommand, moveUpCommand, uuid, value, active, editAction, modifiers, editModifier, deleteAction}:Props) {
    

    return (
        <>
        {   active?
            (
            <motion.li layout
            key={"animation"+uuid as React.Key}
            initial={{ opacity:0, height:0 }}
            animate={{ opacity:1, height:'auto' }}
            exit={{ opacity:0, height:0 }}>
            <h2>Press Key:</h2>
            <Grid sx={{alignItems:'center'}} container spacing={1}>
                <Grid xs={6}>
                <FormControlLabel control={<Checkbox name='shift' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>editModifier(uuid, e.target.name)} checked={modifiers.shift}/>}  label="Shift" />
                <FormControlLabel control={<Checkbox name='ctrl' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>editModifier(uuid, e.target.name)} checked={modifiers.ctrl}/>} label="Control" />
                <FormControlLabel control={<Checkbox name='alt' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>editModifier(uuid, e.target.name)} checked={modifiers.alt}/>} label="Option/Alt" />
                <FormControlLabel control={<Checkbox name='super' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>editModifier(uuid, e.target.name)} checked={modifiers.super}/>} label="Command/Windows" />
                </Grid>
                <Grid sx={{alignSelf:'flex-start'}} xs={4}>
                    <InputLabel id="demo-simple-select-label">Key</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={(e)=>editAction(uuid, e.target.value)}
                    >
                    <MenuItem value={'a'}>a</MenuItem>
                    <MenuItem value={'b'}>b</MenuItem>
                    <MenuItem value={'c'}>c</MenuItem>
                    <MenuItem value={'d'}>d</MenuItem>
                    <MenuItem value={'e'}>e</MenuItem>
                    <MenuItem value={'f'}>f</MenuItem>
                    <MenuItem value={'g'}>g</MenuItem>
                    <MenuItem value={'h'}>h</MenuItem>
                    <MenuItem value={'i'}>i</MenuItem>
                    <MenuItem value={'j'}>j</MenuItem>
                    <MenuItem value={'k'}>k</MenuItem>
                    <MenuItem value={'l'}>l</MenuItem>
                    <MenuItem value={'m'}>m</MenuItem>
                    <MenuItem value={'n'}>n</MenuItem>
                    <MenuItem value={'o'}>o</MenuItem>
                    <MenuItem value={'p'}>p</MenuItem>
                    <MenuItem value={'q'}>q</MenuItem>
                    <MenuItem value={'r'}>r</MenuItem>
                    <MenuItem value={'s'}>s</MenuItem>
                    <MenuItem value={'t'}>t</MenuItem>
                    <MenuItem value={'u'}>u</MenuItem>
                    <MenuItem value={'v'}>v</MenuItem>
                    <MenuItem value={'w'}>w</MenuItem>
                    <MenuItem value={'x'}>x</MenuItem>
                    <MenuItem value={'y'}>y</MenuItem>
                    <MenuItem value={'z'}>z</MenuItem>
                    <MenuItem value={'space'}>space</MenuItem>
                    <MenuItem value={'f1'}>f1</MenuItem>
                    <MenuItem value={'f2'}>f2</MenuItem>
                    <MenuItem value={'f3'}>f3</MenuItem>
                    <MenuItem value={'f4'}>f4</MenuItem>
                    <MenuItem value={'f5'}>f5</MenuItem>
                    <MenuItem value={'f6'}>f6</MenuItem>
                    <MenuItem value={'f7'}>f7</MenuItem>
                    <MenuItem value={'f8'}>f8</MenuItem>
                    <MenuItem value={'f9'}>f9</MenuItem>
                    <MenuItem value={'f10'}>f10</MenuItem>
                    <MenuItem value={'f11'}>f11</MenuItem>
                    <MenuItem value={'f12'}>f12</MenuItem>


                    </Select>
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
            </Grid></motion.li>):
            (<Box sx={{m:1, ml:2}}>Press: "{modifiers.shift&&'shift-'}{modifiers.ctrl&&'ctrl-'}{modifiers.alt&&'alt-'}{modifiers.super&&'super-'}{value}"</Box>)      
        }
        </>
    )
}
