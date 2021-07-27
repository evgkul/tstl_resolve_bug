import { hello } from "utils";

let a = {
  require:function(a:string){
    if(a!="test"){
      throw "Invalid input!"
    } else {
      console.log("Valid input")
    }
  }
}
a.require("test")

export function helloworld(){
  hello("World")
}