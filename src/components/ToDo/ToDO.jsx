import React, { useState } from "react";
import {
  CalendarCheck2,
  BookMarked,
  CirclePlus,
  Trash2,
  CircleChevronUp,
  CircleArrowDown,
} from "lucide-react";

const ToDO = () => {
  const [tasks, setTasks] = useState([
    "task 1",
    "task 2",
    "task 3",
    "task 4",
    "task 5",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveUp(index) {}

  function moveDown(index) {}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="h-28 sm:h-32 md:h-36 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center px-4">
            <div className="header flex flex-row gap-6">
              <h1 className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl">
                To-Do Application
              </h1>
              <CalendarCheck2 size={48} color="white" />
            </div>
          </div>
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col space-y-4">
              <div className="pb-2">
                <div className="des-head flex flex-row gap-4">
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                    Features
                  </h3>
                  <div>
                    <BookMarked size={28} color="black" />
                  </div>
                </div>

                <ul className="space-y-2">
                  <li className="text-gray-600 text-sm sm:text-base flex items-center">
                    <span className="mr-2"></span> Add Tasks
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base flex items-center">
                    <span className="mr-2"></span> Delete Tasks
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base flex items-center">
                    <span className="mr-2"></span> Edit Tasks
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base flex items-center">
                    <span className="mr-2"></span> Move Tasks Up and Down
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="text"
                  value={newTask}
                  onChange={handleInputChange}
                  placeholder="Add Tasks"
                  className="text-gray-600 text-sm sm:text-base flex-1 border-0 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 p-3 sm:p-4 transition-all"
                />

                <button
                  onClick={addTask}
                  className="flex flex-row justify-center items-center gap-4 bg-purple-500 text-white px-6 sm:px-8 py-3 sm:py-2 rounded-lg shadow-lg shadow-purple-500/50 hover:bg-purple-600 hover:shadow-xl transition-all font-medium text-sm sm:text-base whitespace-nowrap"
                >
                  <div className="text text-lg">Add</div>
                  <div className="icon">
                    <CirclePlus size={28} color="white" />
                  </div>
                </button>
              </div>
              <div className="task-block">
                <ol>
                  {tasks.map((task, index) => (
                    <>
                      <li key={index}>
                        <span>{task}</span>
                      </li>
                      <button>del</button>
                    </>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDO;
