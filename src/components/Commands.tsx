import React, { useContext } from 'react'
import AppContext from '../context/appContext';
import { motion, AnimatePresence } from "framer-motion"

import Button from '@mui/material/Button';


import Command from './Command'
export default function Commands() {
    const appContext=useContext(AppContext)
    const { commands, createCommand, moveDownCommand, moveUpCommand, setCurrent, editAction, editModifier, editCommand, deleteAction, deleteCommand}:any = appContext

    return (
        <>
        <h2>Command List:</h2>
        <AnimatePresence>
            {commands.map((item, i)=>(
                <Command moveDownCommand={moveDownCommand} moveUpCommand={moveUpCommand} info={item} setCurrent={setCurrent} key={item.uuid} current={false} editAction={editAction} editModifier={editModifier} editCommand={editCommand} deleteAction={deleteAction} deleteCommand={deleteCommand}/>
            ))}
        </AnimatePresence>
            <Button variant="contained" onClick={createCommand}>New Command</Button>
        </>
    )
}
