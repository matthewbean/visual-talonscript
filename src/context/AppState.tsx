import React, { useReducer } from 'react';
import AppContext from './appContext';
import appReducer from './AppReducer';
import { v4 as uuidv4 } from 'uuid';

import{
    CREATE_COMMAND,
    SET_CURRENT,
    CREATE_ACTION,
    EDIT_ACTION,
    EDIT_MODIFIER,
    EDIT_COMMAND,
    DELETE_ACTION,
    DELETE_COMMAND,
    MOVE_UP,
    MOVE_DOWN,
    NEW_COMMAND
} from './types'
import { Legend, Modifiers } from '../types/StateTypes';

//classes

class Command {
    command:String
    actions:Array<any>
    value:String
    uuid:String
    
    constructor(command=''){
        this.command=command;
        this.actions=[]
        this.uuid=uuidv4();
    }
    addAction(action){
        this.actions.push(action)
    }
    removeAction(id){
        this.actions=this.actions.filter((item)=>item.uuid!==id)
    }

}

class Text{
    type:String
    value:String
    uuid:String
    constructor(text=''){
        this.type='text'
        this.value=text;
        this.uuid=uuidv4();
    }

}
class MoveMouse{
    type:String
    value:{
        x:Number,
        y:Number
    }
    uuid:String
    constructor(x=0,y=0){
        this.type='moveMouse'
        this.value={
            x:x,
            y:y
        };
        this.uuid=uuidv4();
    }
}

class MouseClick{
     type:String
    value:String
    uuid:String
    legend:Legend
    constructor(value='leftClick'){
        this.type='mouseClick'
        this.value=value;
        this.uuid=uuidv4();

        this.legend={
            leftClick:{
                name:'Left Click',
                print: `${tab}mouse_click(0)<br>`
            },
            rightClick:{
                name:'Right Click',
                print: `${tab}mouse_click(1)<br>`
            },
            dragLeftClick:{
                name:'Drag Left Click',
                print: `${tab}user.mouse_drag(0)<br>`
            },
            dragRightClick:{
                name:'Drag Right Click',
                print: `${tab}user.mouse_drag(1)<br>`
            },
            releaseDrag:{
                name:'Release Drag',
                print: `${tab}user.mouse_drag_end()<br>`
            },
            doubleClick:{
                name:'Double Click',
                print: `${tab}mouse_click(0)<br>${tab}mouse_click(0)<br>`
            },
            tripleClick:{
                name:'Triple Click',
                print: `${tab}mouse_click(0)<br>${tab}mouse_click(0)<br>${tab}mouse_click(0)<br>`
            }
        }
    }
   

}

class Key{
    modifiers:Modifiers
     type:String
    value:String
    uuid:String
    constructor(key='a'){
        
        this.modifiers={
            shift: false,
            ctrl: false,
            alt: false,
            super: false
        }
        this.type='key'
        this.value=key;
        this.uuid=uuidv4();
    }

}
class KeyDown{
    type:String
    value:String
    uuid:String

    constructor(key='a'){
        this.type='keyDown'
        this.value=key;
        this.uuid=uuidv4();
    }

}

class KeyUp{
     type:String
    value:String
    uuid:String
    constructor(key='a'){
        this.type='keyUp'
        this.value=key;
        this.uuid=uuidv4();
    }
 
}
class Delay{
     type:String
    value:Number
    uuid:String
    constructor(value=0){
        this.type='delay'
        this.value=0;
        this.uuid=uuidv4();
    }

}

let tab = "&nbsp;&nbsp;&nbsp;&nbsp;"



const AppState = props=>{

    
    
    const initialState = {
        commands: [ 

         ],
         current: null
    };
    const [state, dispatch] = useReducer(appReducer, initialState);

//create command
const createCommand=()=>{
    let command=new Command()
    state.current && dispatch({ type:CREATE_COMMAND, payload:state.current })
    dispatch({ type:NEW_COMMAND, payload:command })
}
//edit command
const editCommand=(text)=>{
    dispatch({ type:EDIT_COMMAND, payload:text })
}
//set current
const setCurrent=(id)=>{
    state.current && dispatch({ type:CREATE_COMMAND, payload:state.current })
    dispatch({type: SET_CURRENT, payload: id})
}
//add action
const createAction=(type)=>{
    switch (type) {
        case 'text':
            dispatch({type: CREATE_ACTION, payload: new Text()})
            break;
        case 'key':
            dispatch({type: CREATE_ACTION, payload: new Key()})
            break;
        case 'keyDown':
            dispatch({type: CREATE_ACTION, payload: new KeyDown()})
            break;
        case 'keyUp':
            dispatch({type: CREATE_ACTION, payload: new KeyUp()})
            break;
        case 'delay':
            dispatch({type: CREATE_ACTION, payload: new Delay()})
            break;
        case 'moveMouse':
            dispatch({type: CREATE_ACTION, payload: new MoveMouse()})
            break;
        case 'mouseClick':
            dispatch({type: CREATE_ACTION, payload: new MouseClick()})
            break;

    
        default:
            break;
    }
}

//edit actionh
const editAction=(uuid, change)=>{
    dispatch({type: EDIT_ACTION, payload:{uuid:uuid, change:change}})
}
//edit modifier
const editModifier=(uuid, modifier)=>{
    dispatch({type: EDIT_MODIFIER, payload:{uuid:uuid, modifier:modifier}})
}
//delete action
const deleteAction=(uuid)=>{
    dispatch({ type: DELETE_ACTION,  payload:uuid})
}
//delete command
const deleteCommand=(uuid)=>{
    dispatch({ type: DELETE_COMMAND,  payload:uuid})
}
//move command
const moveUpCommand=(uuid)=>{
    let index=state.current.actions.map(object => object.uuid).indexOf(uuid);
    var array=[...state.current.actions]
    if (index!==0){
        let element = array[index-1]
        array[index-1]=array[index]        
        array[index]=element

    }
    dispatch({ type:MOVE_UP, payload:array })
}
const moveDownCommand=(uuid)=>{
    let index=state.current.actions.map(object => object.uuid).indexOf(uuid);
    var array=[...state.current.actions]
    if (index<array.length-1){
        let element = array[index+1]
        array[index+1]=array[index]        
        array[index]=element

    }
    dispatch({ type:MOVE_DOWN, payload:array })
}
//print commands
const printCommands=()=>{
    let string=''
    state.commands.forEach((item)=>{

        if(item.command !=="" && item.actions.length!==0){
            string+=`${item.command}:<br>`
            item.actions.forEach((action)=>{
                switch (action.type) {
                    case 'text':
                        string+= `${tab}"${action.value}"<br>`
                        break;
                    case 'key':
                        let modifiers=''
                        for (const property in action.modifiers) {
                            if(action.modifiers[property])modifiers+=`${property}-`
                        }
                        string+= `${tab}key(${modifiers}${action.value})<br>`
                        break;
                    case 'keyDown':
                        string+=`${tab}key(${action.value}:down)<br>`
                        break;
                    case 'keyUp':
                        string+=`${tab}key(${action.value}:up)<br>`
                        break;
                    case 'delay':
                        string+=`${tab}sleep(${action.value}ms)<br>`
                        break;
                    case 'moveMouse':
                        string+=`${tab}mouse_move(${action.value.x}, ${action.value.y})<br>`
                        break;
                    case 'mouseClick':
                        string+=`${action.legend[action.value].print}`
                        break;
                
                    default:
                        break;
                }
            })
            
        }
    })
    if (state.current && state.current.command !=="" && state.current.actions.length!==0){
        string+=`${state.current.command}:<br>`
        state.current.actions.forEach((item)=>{
        switch (item.type) {
            case 'text':
                string+= `${tab}"${item.value}"<br>`
                break;
            case 'key':
                let modifiers=''
                for (const property in item.modifiers) {
                    if(item.modifiers[property])modifiers+=`${property}-`
                }
                string+= `${tab}key(${modifiers}${item.value})<br>`
                break;
            case 'keyDown':
                string+=`${tab}key(${item.value}:down)<br>`
                break;
            case 'keyUp':
                string+=`${tab}key(${item.value}:up)<br>`
                break;
            case 'delay':
                string+=`${tab}sleep(${item.value}ms)<br>`
                break;
            case 'moveMouse':
                string+=`${tab}mouse_move(${item.value.x}, ${item.value.y})<br>`
                break;
            case 'mouseClick':
                string+=`${item.legend[item.value].print}`
                break;
        
            default:
                break;
        }
    })
}

    return string
}
const copyCommands=()=>{
    navigator.clipboard.writeText(printCommands().replace(/<br>/g,'\n').replace(/&nbsp;&nbsp;&nbsp;&nbsp;/g, '    '))

}

//set app
    return (
        <AppContext.Provider 
            value = {{
                commands:state.commands,
                current:state.current,
                createCommand,
                setCurrent,
                createAction,
                editAction,
                editModifier,
                editCommand,
                deleteAction,
                deleteCommand,
                printCommands,
                moveUpCommand,
                moveDownCommand,
                copyCommands
            }}   
            >
            
            {props.children}
        </AppContext.Provider>
    )

};

export default AppState;