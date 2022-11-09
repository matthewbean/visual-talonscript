import React from 'react'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Unstable_Grid2';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Text from './Actions/Text';
import Key from './Actions/Key';
import KeyDown from './Actions/KeyDown';
import KeyUp from './Actions/KeyUp';
import Delay from './Actions/Delay';
import MoveMouse from './Actions/MoveMouse';
import MouseClick from './Actions/MouseClick';
import { motion, AnimatePresence } from "framer-motion";


interface Action{
    value:any,
    uuid:String,
    modifiers:Object,
    type: String

}
interface InfoObject{
    command:String,
    actions:Array<Action>,
    uuid:String
}

interface Props { 
    info:InfoObject,
    current:Boolean,
    setCurrent:Function,
    editAction:Function, 
    editModifier:Function, 
    editCommand:Function, 
    deleteAction:Function, 
    deleteCommand:Function,
    moveUpCommand:Function,
    moveDownCommand:Function
}

export default function Command({ info, moveDownCommand, moveUpCommand, setCurrent, current, editAction, editCommand, editModifier, deleteAction, deleteCommand }:Props) {

    const { command, actions, uuid }=info;
    return (
        <motion.div
        key={"animation"+uuid as any}
        initial={{ opacity:0, height:0 }}
        animate={{ opacity:1, height:'auto' }}
        exit={{ opacity:0, height:0 }}
        tabIndex={0}
        >        
         <Box
         
      sx={{
        cursor: current?'default':'pointer',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          p: 1,
          mb:2,
          width: '100%',
          minHeight: 128,
        },
      }}
    >
      
      
    <Paper  onClick={()=>(!current&&setCurrent(uuid))} elevation={2}>
    {current?(         
            <Grid sx={{borderBottom:"1px solid #333"}} container spacing={1}>   
            <Grid xs={10}>
                <TextField onChange={(e)=>editCommand(e.target.value)} value={command} id="command" label="Command" variant="outlined" />
            </Grid>
            <Grid xs={2}>
                <IconButton sx={{}} onClick= {()=>deleteCommand(uuid)}>
                    <DeleteForeverRoundedIcon />
                </IconButton>
            </Grid>
            </Grid>
            ):
            <Grid sx={{padding:0}} container spacing={1}>
            <Grid xs={10}>
            <div>Say: "{command}"</div>
            </Grid>
            <Grid sx={{pr:0}} xs={2}>
                <IconButton sx={{}} onClick= {()=>deleteCommand(uuid)}>
                    <EditIcon />
                </IconButton>
            </Grid>
            </Grid>
            }
            <ul style={{padding:0}}>
            <AnimatePresence>
        {actions.map((item)=>{
            switch (item.type) {
                case 'text':
                    return(<Text moveDownCommand={moveDownCommand} moveUpCommand={moveUpCommand} value={item.value} uuid={item.uuid} current={current} editAction={editAction} key={item.uuid as React.Key} deleteAction={deleteAction} />)
                    break;
                case 'key':
                    return(<Key moveDownCommand={moveDownCommand} moveUpCommand={moveUpCommand} value={item.value} uuid={item.uuid} modifiers={item.modifiers} editModifier={editModifier} current={current} editAction={editAction} key={item.uuid as React.Key} deleteAction={deleteAction} />)
                    break;
                case 'keyDown':
                    return(<KeyDown moveDownCommand={moveDownCommand} moveUpCommand={moveUpCommand} value={item.value} uuid={item.uuid}  current={current} editAction={editAction} key={item.uuid as React.Key} deleteAction={deleteAction} />)
                    break;
                case 'keyUp':
                    return(<KeyUp moveDownCommand={moveDownCommand} moveUpCommand={moveUpCommand} value={item.value} uuid={item.uuid}  current={current} editAction={editAction} key={item.uuid as React.Key} deleteAction={deleteAction} />)
                    break;
                case 'delay':
                    return(<Delay moveDownCommand={moveDownCommand} moveUpCommand={moveUpCommand} value={item.value} uuid={item.uuid}  current={current} editAction={editAction} key={item.uuid as React.Key} deleteAction={deleteAction} />)
                    break;
                case 'moveMouse':
                    return(<MoveMouse moveDownCommand={moveDownCommand} moveUpCommand={moveUpCommand} value={item.value} uuid={item.uuid}  current={current} editAction={editAction} key={item.uuid as React.Key} deleteAction={deleteAction} />)
                    break;
                case 'mouseClick':
                    return(<MouseClick legend={item.key} moveDownCommand={moveDownCommand} moveUpCommand={moveUpCommand} value={item.value} uuid={item.uuid}  current={current} editAction={editAction} key={item.uuid as React.Key} deleteAction={deleteAction} />)
                    break;
                default:
                    
                    break;
            }
        })}
        </AnimatePresence>
        </ul>
    </Paper> 

        </Box>
    </motion.div>
    )
}
