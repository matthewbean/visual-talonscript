
export interface Action{
    value:any,
    uuid:String,
    modifiers:Modifiers,
    type: String,
    legend?: Legend
}
export interface Current{
    command:String,
    actions:Array<Action>,
    uuid:String
}
interface LegendItem{
    name: String,
    print: String
}
export interface Modifiers{
    shift: boolean | undefined,
    ctrl: boolean | undefined,
    alt: boolean | undefined,
    super: boolean | undefined
}
export interface Legend {
    leftClick:LegendItem
    rightClick:LegendItem
    dragLeftClick:LegendItem
    dragRightClick:LegendItem
    releaseDrag:LegendItem
    doubleClick:LegendItem
    tripleClick:LegendItem
}
export interface StateTypes { 
    commands:Array<Current>
    current:Current,
    setCurrent:Function,
    editAction:Function, 
    editModifier:Function, 
    editCommand:Function, 
    deleteAction:Function, 
    deleteCommand:Function,
    moveUpCommand:Function,
    moveDownCommand:Function,
    createCommand:Function,
    createAction:Function,
    printCommands:Function,
    copyCommands:Function
}