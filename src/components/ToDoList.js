import React from "react";

function ToDoList({ list, removeList, makeInActive }) {
  console.log(list);
  list.sort((a,b)=>a.priority-b.priority)
  return (
    <div className="w-full ">
      {list.map((item, index) => {
        if (item) {
          let checked = !item.isActive ? true : false;
          let priority = (item.priority==1)?'red':((item.priority==2)?'yellow':'blue');
          let priorityName = (item.priority==1)?'High':((item.priority==2)?'Medium':'Low');
          return (
            <div
              className={` todo-container w-full  md:w-96 h-22 my-3 rounded border shadow-${priority} border-${priority}-900 p-2 overflow-auto mx-auto relative`}
              key={index}
            >
              <div className="flex mb-1">
                <span className={`inline-block self-center text-${priority}-600 text-xl font-bold`}>
                  {index + 1}
                </span>
                <span className={`inline-block text-2xl text-${priority}-600 ml-3`}>
                  {!item.isActive ? <del>{item.title}</del> : item.title}
                </span>
                <div className="absolute self-center   top-2 right-2">
                  <span className="flex h-3 w-3 ">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${priority}-400 opacity-75`}></span>
                    <span className={`relative  inline-flex rounded-full h-3 w-3 bg-${priority}-500`}></span>
                  </span>
                </div>
              </div>
              <div className="flex px-2 justify-between">
                <input
                  type="checkbox"
                  checked={checked}
                  className="self-center cursor-pointer form-checkbox h-5 w-5 text-green-600"
                  value={item.id}
                  onChange={makeInActive}
                />
                <button onClick={() => removeList(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 font-black text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        } else {
        }
      })}
    </div>
  );
}

export default React.memo(ToDoList);
