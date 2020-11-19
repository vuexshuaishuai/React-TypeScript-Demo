import { computed, observable } from "mobx";

class MobxGood {
    @observable public count:number = 25;
    @observable public age:number = 26;

    @computed
    public get TotalNum(){
        return this.count + this.age;
    }
    public set TotalNum(totalNum:number){
        this.count = totalNum + this.age;
    }

}

const OneMobx = new MobxGood;
export default OneMobx