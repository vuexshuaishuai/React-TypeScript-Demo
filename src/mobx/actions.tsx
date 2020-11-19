import { action, observable, runInAction, flow } from "mobx";
import { func } from "prop-types";


class Actions{
    public DemoStore = observable({
        LangName:"Beautiful",
        LangHigh:175,
    })
    public latter(){
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("5s过去了，你个咸鱼！");
                resolve()
            },5000)
        })
    }
    @action
    public ChangeData = () => {
        this.DemoStore.LangName = "So Augly";
        this.DemoStore.LangHigh = 186;
    }

    @action.bound 
    public ChangeName = () => {
        this.DemoStore.LangName = "Happy Birthday !"
    }
    public ChangeTime = flow(function* (){
        // yield this.latter();
    })
}
const myActions = new Actions();
export default myActions;