import React from "react";

function Input({ task, setTask, addTask, priority, setPriority }) {
  return (
    <div className="flex flex-col md:block w-full text-center">
      <input
        type="text"
        placeholder="Write Your Note *"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className=" ring-2 outline-none ring-green-600 focus:outline-none w-3/4 m-auto md:w-72  p-1 shadow-lg rounded-lg"
      />

      <button
        className="bg-green-500 hover:shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 p-2 px-8 mt-4 mb-4 md:ml-8 text-white w-2/5 mr-auto ml-auto md:w-auto font-semibold rounded-md"
        onClick={addTask}
      >
        Add
      </button>
      <div className="bg-grey p-3 flex flex-col justify-center items-center md:flex-row ">
      	<h4 className=" font-semibold priority">Priority</h4>
        <div className="flex my-4 mx-1">
          <input
            type="radio"
            value="high"
            name="priority"
            className="cursor-pointer self-center"
            checked={priority === 1}
            onChange={(e) => setPriority(1)}
          />
  	        <button onClick={()=>setPriority(1)} type="button" className="rounded-full px-4 mr-2 bg-red-600 text-white p-2 rounded  leading-none flex items-center focus:outline-none ml-1">
  	      		High
  	    	</button>
        </div>
        <div className="flex my-4 mx-1">
        <input
          type="radio"
          value="medium"
          name="priority"
          className="cursor-pointer self-center"
          checked={priority === 2}
          onChange={(e) => setPriority(2)}
        />
        <button onClick={()=>setPriority(2)} type="button" className="rounded-full px-4 mr-2 bg-yellow-600 text-white p-2 rounded  leading-none flex items-center focus:outline-none ml-1">
      		Medium
    	</button>
    </div>
    <div className="flex my-4 mx-1">
        <input
          type="radio"
          value="low"
          name="priority"
          className="cursor-pointer self-center"
          checked={priority === 3}
          onChange={(e) => setPriority(3)}
        />
        <button
        	onClick={()=>setPriority(3)}
          type="button"
          className="rounded-full px-4 mr-2 bg-blue-600 text-white p-2 rounded  leading-none flex items-center focus:outline-none ml-1"
        >
          Low
        </button>
      </div>
      </div>
    </div>
  );
}

export default Input;
