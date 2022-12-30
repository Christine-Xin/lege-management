export default{
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
    add:"add",
    add2:"add2",
}