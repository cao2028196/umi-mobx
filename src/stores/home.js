import { types } from "mobx-state-tree";

const Todo = types
  .model({
    name: "jack",
    done: false
  })
  .actions(self => {
    function setTitle(newTitle) {
      self.name = newTitle;
    }
    function setTitle2(newTitle) {
      self.name = newTitle+2;
    }

    return {
      setTitle,
      setTitle2
    };
  });

export default Todo;
