import React, { useContext } from 'react'
import AppContext from '../context/appContext';
import { AnimatePresence } from "framer-motion"

import Button from '@mui/material/Button';

import { Key } from 'react';
import { StateTypes } from '../types/StateTypes';

import Command from './Command'
export default function Commands() {
    const appContext=useContext(AppContext)
    const { commands, createCommand, moveDownCommand, moveUpCommand, setCurrent, editAction, editModifier, editCommand, deleteAction, deleteCommand}:StateTypes = appContext
    return (
        <>
        <h2>Command List:</h2>
        <AnimatePresence>
            {commands.map((item, i)=>(
                <Command moveDownCommand={moveDownCommand} moveUpCommand={moveUpCommand} current={item} setCurrent={setCurrent} key={item.uuid as Key} active={false} editAction={editAction} editModifier={editModifier} editCommand={editCommand} deleteAction={deleteAction} deleteCommand={deleteCommand}/>
            ))}
        </AnimatePresence>
            <Button variant="contained" onClick={()=>createCommand()}>New Command</Button>
        </>
    )
}
