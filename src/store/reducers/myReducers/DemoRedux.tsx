
const DemoReduxState = {
    name:"Tom",
    count:0,
}
const DemoFunction = function (state = DemoReduxState,action:any){
    switch (action.type){
        case "ChangeName":
            return {...state, name:action.data};
        case "CountIncrease":
            return {...state, count:state.count + 1};
        case "CountReduce":
            return { ...state, count:state.count - 1};
        default:
            return state;    

    }
}
export default DemoFunction;