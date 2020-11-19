import { observable, decorate, computed } from "mobx";

class GoodMost {
    public goodCount:number = 20;
    public goodNum:number = 26;

    public get TotalNum(){
        return this.goodCount + this.goodNum;
    }
    public set TotalNum(value){
        this.goodCount = (value + this.goodNum) * 2;
    }
}
decorate(GoodMost,{
    goodCount:observable,
    goodNum:observable,
    TotalNum:computed
})

const GoodMostMobx = new GoodMost();
export default GoodMostMobx;