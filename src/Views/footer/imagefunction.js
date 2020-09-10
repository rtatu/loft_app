import custom from "../../static/icon/safety/custom.svg";
import oil from "../../static/icon/safety/oil.svg";
import engine from "../../static/icon/safety/engine.svg";


export const getImageForGroup = (name)=> {
  if(name.toLowerCase().indexOf('oil')>-1){
    return oil
  }else if(name.toLowerCase().indexOf('engine')>-1){
    return engine
  }else{
    return custom
  }
}

