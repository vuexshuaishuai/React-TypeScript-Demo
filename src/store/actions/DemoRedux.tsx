export default {
    changeName(name:string){
        return {type:"ChangeName",data:name};
    },
    CountIncrease(){
        return {type:"CountIncrease"}
    },
    CountReduce(){
        return { type:"CountReduce" };
    }
}