
const DemoReduxState = {
    name:"Tom"
}
const DemoFunction = function (state = DemoReduxState,action:any){
    switch (action.type){
        case "ChangeName":
            return {...state, name:action.data}
        default:
            return state;    

    }
}
export default DemoFunction;