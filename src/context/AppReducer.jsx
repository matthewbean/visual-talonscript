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

// eslint-disable-next-line
export default (state, action) =>{
    switch(action.type){
        case CREATE_COMMAND:
            return {...state,
                    commands: [...state.commands, action.payload]}
        case NEW_COMMAND:
            return {...state,
                    current: action.payload}
        case SET_CURRENT:
            return{...state,
                    current: state.commands.filter((item)=>item.uuid === action.payload)[0],
                    commands: state.commands.filter(item=>item.uuid!==action.payload)}
        case EDIT_COMMAND:
            return{...state,
                    current: {...state.current,
                                command:action.payload}}
        case CREATE_ACTION:
            return{...state,
                    current: {...state.current,
                                actions: [...state.current.actions, action.payload]}}
        case EDIT_ACTION:
            return{...state,
                    current: {...state.current,
                                actions: state.current.actions.map((item)=>(
                                    item.uuid === action.payload.uuid?{...item, value:action.payload.change}:item
                                ))}}
        case EDIT_MODIFIER:
            return{...state,
                current: {...state.current,
                            actions: state.current.actions.map((item)=>(
                                item.uuid === action.payload.uuid?{...item, modifiers:{...item.modifiers, [action.payload.modifier]:!item.modifiers[action.payload.modifier]}}:item
                            ))}}
        case DELETE_ACTION:
            return{...state,
                current:{...state.current, 
                            actions: state.current.actions.filter((item)=>item.uuid!==action.payload)}}
        case DELETE_COMMAND:
            return{...state,
                current:null}
        case MOVE_UP:
            return {...state,
                current: {...state.current,
                            actions:action.payload}}
        case MOVE_DOWN:
            return {...state,
                current: {...state.current,
                            actions:action.payload}}
        default:
            return state
    }
}