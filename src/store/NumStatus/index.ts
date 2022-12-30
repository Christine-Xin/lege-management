const store={
    state:{
        num:20
    },
    actions:{
        add(newState:{num:number},action:{type:string,val:number}){
            newState.num++
        },
        add2(newState:{num:number},action:{type:string,val:number}){
            newState.num+=action.val
        }
    },
//    actionNames:{
//     add:"add",
//     add2:"add2",
//    }
    actionNames:{}
}
// actionsnames有多少个键值对，取决于actions有多少个方法
let actionsnames={}
for(let key in store.actions){
    actionsnames[key]=key
}
store.actionNames=actionsnames;
export default store;