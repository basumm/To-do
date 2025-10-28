import { useState } from "react";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function toggleComplete(index) {
    setTasks((t) =>
      t.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index > 0) {
      setTasks((t) => {
        const newTasks = [...t];
        [newTasks[index], newTasks[index - 1]] = [
          newTasks[index - 1],
          newTasks[index],
        ];
        return newTasks;
      });
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      setTasks((t) => {
        const newTasks = [...t];
        [newTasks[index], newTasks[index + 1]] = [
          newTasks[index + 1],
          newTasks[index],
        ];
        return newTasks;
      });
    }
  }

  return (
    <div className="main min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <section className="header">
        <div className="h-24 sm:h-28 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 flex justify-center items-center gap-2 sm:gap-4 shadow-lg px-4">
          <h1 className="text-white font-bold tracking-wide text-xl sm:text-2xl md:text-4xl">
            Task Manager
          </h1>
          <span className="text-white text-3xl sm:text-4xl md:text-5xl">✓</span>
        </div>
      </section>
      <section className="content min-h-screen max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="content-header flex flex-row items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="text-xl sm:text-2xl">🎯</span>
          <h4 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-bold">
            Features
          </h4>
        </div>
        <div className="description mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-xl shadow-md">
          <ul className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
            <li className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-lg">
                ✏️
              </span>
              <span className="font-medium">Add new tasks</span>
            </li>
            <li className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">
                ✓
              </span>
              <span className="font-medium">Mark tasks as complete</span>
            </li>
            <li className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
              <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-lg">
                ✕
              </span>
              <span className="font-medium">Delete completed tasks</span>
            </li>
            <li className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
              <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-lg">
                ↕
              </span>
              <span className="font-medium">Reorder tasks by priority</span>
            </li>
          </ul>
        </div>
        <div className="main-app pt-2 sm:pt-4">
          <div className="btns-block bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6 sm:mb-8 border-2 border-blue-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl sm:text-2xl">✏️</span>
              <h3 className="text-base sm:text-lg font-semibold text-gray-700">
                Add New Task
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  📝
                </span>
                <input
                  type="text"
                  value={newTask}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === "Enter" && addTask()}
                  placeholder="What needs to be done?"
                  className="text-gray-700 text-sm sm:text-base w-full pl-10 pr-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-blue-300"
                />
              </div>
              <button
                onClick={addTask}
                className="flex flex-row justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-cyan-700 active:scale-95 transition-all font-semibold text-sm sm:text-base whitespace-nowrap"
              >
                <span className="text-lg sm:text-xl">+</span>
                <span>Add</span>
              </button>
            </div>
          </div>
          <div className="task-block">
            <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-lg sm:text-xl">📋</span>
                <span>Your Tasks ({tasks.length})</span>
              </h3>
              <div className="text-xs sm:text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
                {tasks.filter((t) => t.completed).length} / {tasks.length}{" "}
                completed
              </div>
            </div>
            <ol className="space-y-2 sm:space-y-3">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all ${
                    task.completed ? "bg-green-100 bg-opacity-50" : "bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <span className="flex-shrink-0 w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-md">
                      {index + 1}
                    </span>

                    <label className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(index)}
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-blue-400 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      />
                      <span
                        className={`text-gray-800 text-sm sm:text-base md:text-lg break-words ${
                          task.completed ? "line-through text-gray-500" : ""
                        }`}
                      >
                        {task.text}
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 ml-9 sm:ml-0">
                    {task.completed && (
                      <span className="text-lg sm:text-xl text-green-600 mr-1">
                        ✓
                      </span>
                    )}

                    <button
                      onClick={() => moveUp(index)}
                      disabled={index === 0}
                      className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg transition-all ${
                        index === 0
                          ? "bg-gray-100 cursor-not-allowed opacity-40"
                          : "bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-95 shadow-md hover:shadow-lg"
                      }`}
                      title="Move Up"
                    >
                      <svg
                        className={`w-5 h-5 ${
                          index === 0 ? "text-gray-400" : "text-white"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => moveDown(index)}
                      disabled={index === tasks.length - 1}
                      className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg transition-all ${
                        index === tasks.length - 1
                          ? "bg-gray-100 cursor-not-allowed opacity-40"
                          : "bg-gradient-to-b from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 active:scale-95 shadow-md hover:shadow-lg"
                      }`}
                      title="Move Down"
                    >
                      <svg
                        className={`w-5 h-5 ${
                          index === tasks.length - 1
                            ? "text-gray-400"
                            : "text-white"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:scale-95 rounded-lg shadow-md hover:shadow-lg transition-all"
                      title="Delete Task"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ol>
            {tasks.length === 0 && (
              <div className="text-center text-gray-400 py-12 sm:py-16 bg-white rounded-lg sm:rounded-xl shadow-md">
                <span className="text-4xl sm:text-5xl md:text-6xl mb-4 block">
                  📭
                </span>
                <p className="text-lg sm:text-xl font-medium">No tasks yet!</p>
                <p className="text-xs sm:text-sm mt-2 px-4">
                  Add your first task above to get started
                </p>
              </div>
            )}
            {tasks.length > 0 && tasks.every((t) => t.completed) && (
              <div className="mt-4 sm:mt-6 text-center text-teal-700 font-semibold text-sm sm:text-base md:text-lg bg-teal-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-teal-300">
                <span className="text-2xl sm:text-3xl mr-1 sm:mr-2">🎉</span>
                All tasks completed! Great job!
                <span className="text-2xl sm:text-3xl ml-1 sm:ml-2">🎉</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
