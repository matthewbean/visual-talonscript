import React, { useContext } from 'react'
import AppContext from '../context/appContext';

import Command from './Command'
import {StateTypes} from '../types/StateTypes'

export default function Builder(props) {
    const appContext=useContext(AppContext)
    const { current, setCurrent, editAction, editModifier, moveUpCommand, editCommand, deleteAction, moveDownCommand, deleteCommand }: StateTypes = appContext
    return (
        <>
        <h2>Current Command:</h2>
        {current&&<Command moveDownCommand={moveDownCommand} current={current} moveUpCommand={moveUpCommand} editCommand={editCommand} setCurrent={setCurrent} editAction={editAction} editModifier={editModifier} active={true} deleteAction={deleteAction} deleteCommand={deleteCommand} />}
        </>
    )
}
