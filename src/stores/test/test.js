// import { observable } from 'mobx';
import { types } from "mobx-state-tree";

const Base = types
  .model({
    count: 0
  })
  .actions((self) => {
    function bigger () {
      self.count = 10
    }

    function addCount (){
      self.count+=1
    }

    return {bigger, addCount}
  })
  // .computed((self) => {

  // })

export default Base;
