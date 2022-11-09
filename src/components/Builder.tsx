import React, { useContext } from 'react'
import AppContext from '../context/appContext';

import Command from './Command'
 

export default function Builder(props) {
    const appContext=useContext(AppContext)
    const { current, moveDownCommand, setCurrent, editAction, moveUpCommand, editModifier, editCommand, deleteAction, deleteCommand }:any = appContext
    return (
        <>
        <h2>Current Command:</h2>
        {current&&<Command moveDownCommand={moveDownCommand} info={current} moveUpCommand={moveUpCommand} editCommand={editCommand} setCurrent={setCurrent} editAction={editAction} editModifier={editModifier} current={true} deleteAction={deleteAction} deleteCommand={deleteCommand} />}
        </>
    )
}
