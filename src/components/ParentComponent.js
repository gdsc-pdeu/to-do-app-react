import React, { useState, useCallback, useEffect } from "react";
import Input from "./Input";
import ToDoList from "./ToDoList";

export const TaskContext = React.createContext();
let id = 1;
function ParentComponent() {
  const [task, setTask] = useState("");

  const [list, setList] = useState([]);

  const [priority, setPriority] = useState(2);

  const [render,setRender] = useState(1)

  useEffect(() => {
    if (localStorage.getItem("list")) {

      if (JSON.stringify(list) == "[]" && render == 1) {
        setList(JSON.parse(localStorage.getItem("list")));
        id = JSON.parse(localStorage.getItem("list")).length + 1;
      } else if (JSON.stringify(list) != localStorage.getItem("list")) {
        localStorage.setItem("list", JSON.stringify(list));
      }
    } else if (JSON.stringify(list) != localStorage.getItem("list")) {
      localStorage.setItem("list", JSON.stringify(list));
    }
    
    setRender(2)
  }, [list]);


  const addTask = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: id,
        title: task,
        priority: priority,
        isActive: true,
      },
    ]);
    setTask("");

    id = id + 1;
  };

  const removeList = useCallback(
    (id) => {
      let tempList = list.filter((val, index) => {
        return val.id !== id;
      });
      //console.log(tempList);
      setList(tempList);
    },
    [list]
  );

  const makeInActive = useCallback(
    (e) => {
      let tempList = list.map((item, key) => {
        if (item.id == e.target.value) {
          item.isActive = !item.isActive;
        }
        return item;
      });

      setList(tempList);
    },
    [list]
  );
  return (
    <React.Fragment>
      {/* <TaskContext.Provider value={{task,setTask}}> */}
      <h1
        className="text-3x1 md:text-5xl mb-8 mt-8 font-bold heading text-green-500"
        style={{ fontFamily: "Quando",  letterSpacing:"4px"}}
      >
        To Do App
      </h1>
      <Input
        task={task}
        setTask={setTask}
        addTask={addTask}
        priority={priority}
        setPriority={setPriority}
      />
      <ToDoList
        list={list}
        removeList={removeList}
        makeInActive={makeInActive}
      />
      {/* </TaskContext.Provider> */}
    </React.Fragment>
  );
}

export default ParentComponent;
