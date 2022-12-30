import handleNum from "./NumStatus"
const defaultState={
    ...handleNum.state
}
let reducer = (state = defaultState, action:{type:string,val:number})=>{
    let newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case handleNum.add:
            handleNum.actions.add(newState,action)
            break;
        case handleNum.add2:
            handleNum.actions.add2(newState,action)
            break;
    }

    return newState
}

export default reducer;