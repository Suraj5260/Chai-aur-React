import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, toggleTodo, editTodo } from "../features/todo/todoSlice"

function Todos() {
    const todos = useSelector(state => state.todos)
    // const tasks = useSelector(state => state.todos.text)
    const dispatch = useDispatch()
    const neoTask = document.getElementById("theInput")
    // const neoMarker = document.getElementById("theMarker")

    // const toggleCompleted = () => {
    //     toggleTodo(todos, todo)
    // }


    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div>
                            {/* complete */}
                            <input
                                className='cursor-pointe '
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch(toggleTodo(todo))}
                            />
                            {/* task */}
                            <input
                                type='text'
                                className='text-white px-4 bg-transparent'
                                value={todo.text}
                                readOnly={!todo.editable}
                                onChange={(e) => {
                                    setNewTask(e.target.value)
                                }}
                            />
                        </div>
                        <div>
                            {/* Update */}
                            <button
                                onClick={() => {

                                    if (todo.completed) return;

                                    if (todo.editable) {

                                        dispatch(updateTodo({ ...todo, text: neoTask.value }))
                                        dispatch(editTodo(todo))
                                        neoTask.value = ""
                                    } else {
                                        dispatch(editTodo(todo))
                                        // neoTask.value = " "
                                    }
                                }}
                                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mx-4"
                            >
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 30 30"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-6">
                                    <path d="M22.82813,3c-0.51175,0 -1.02356,0.19544 -1.41406,0.58594l-2.41406,2.41406l5,5l2.41406,-2.41406c0.781,-0.781 0.781,-2.04713 0,-2.82812l-2.17187,-2.17187c-0.3905,-0.3905 -0.90231,-0.58594 -1.41406,-0.58594zM17,8l-11.74023,11.74023c0,0 0.91777,-0.08223 1.25977,0.25977c0.342,0.342 0.06047,2.58 0.48047,3c0.42,0.42 2.64389,0.12436 2.96289,0.44336c0.319,0.319 0.29688,1.29688 0.29688,1.29688l11.74023,-11.74023zM4,23l-0.94336,2.67188c-0.03709,0.10544 -0.05623,0.21635 -0.05664,0.32813c0,0.55228 0.44772,1 1,1c0.11177,-0.00041 0.22268,-0.01956 0.32813,-0.05664c0.00326,-0.00128 0.00652,-0.00259 0.00977,-0.00391l0.02539,-0.00781c0.00196,-0.0013 0.00391,-0.0026 0.00586,-0.00391l2.63086,-0.92773l-1.5,-1.5z"></path>
                                </svg> */}
                                {todo.editable ? "☝️" : "✏️"}
                            </button>


                            {/* Remove */}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg> */}
                                {"✖️"}
                            </button>
                        </div>
                    </li >
                ))
                }
            </ul >
        </>

    )
}

export default Todos