import React, { useContext } from 'react'
import AppContext from '../context/appContext';

import Button from '@mui/material/Button';
import AbcSharpIcon from '@mui/icons-material/AbcSharp';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MouseIcon from '@mui/icons-material/Mouse';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';
import KeyboardHideRoundedIcon from '@mui/icons-material/KeyboardHideRounded';
import KeyboardHideOutlinedIcon from '@mui/icons-material/KeyboardHideOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import { motion, AnimatePresence } from "framer-motion";


export default function Deck(props) {
    const appContext = useContext(AppContext);
    const { createAction, current }:any = appContext

    return (
        <>
        <h2>Add an Action:</h2>
            <AnimatePresence>
            {current&&
        <motion.div 
        key={"buttons" as any}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{opacity:0}}>
        <Button sx={{width: '100%', mb:2}} onClick={()=>createAction('text')} variant="contained" endIcon={<AbcSharpIcon />}>
            Type Text
        </Button>
            <Button sx={{width: '100%', mb:2}} onClick={()=>createAction('key')} variant="contained" endIcon={<KeyboardIcon />}>
                Press a Key
            </Button>
            <Button sx={{width: '100%', mb:2}} onClick={()=>createAction('keyDown')} variant="contained" endIcon={<KeyboardHideRoundedIcon />}>
                Hold Down a Key
            </Button>
            <Button sx={{width: '100%', mb:2}} onClick={()=>createAction('keyUp')} variant="contained" endIcon={<KeyboardHideOutlinedIcon />}>
                Release a Key
            </Button>
            <Button sx={{width: '100%', mb:2}} onClick={()=>createAction('moveMouse')} variant="contained" endIcon={<MouseOutlinedIcon />}>
                Move Mouse
            </Button>
            <Button sx={{width: '100%', mb:2}} onClick={()=>createAction('mouseClick')} variant="contained" endIcon={<MouseIcon />}>
                Mouse Actions
            </Button>
            <Button sx={{width: '100%', mb:2}} onClick={()=>createAction('delay')} variant="contained" endIcon={<TimerSharpIcon />}>
                Wait a Duration
            </Button>
        </motion.div>}
        </AnimatePresence>
        </>
    )
}
