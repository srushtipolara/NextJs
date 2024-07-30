"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const TaskList = () => {
    const navigate = useRouter();
    const [list, setList] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [updateList, setUpdateList] = useState();

    const navigateTaskList = () => {
        navigate.push("/tasklist-add")
    }

    const handleDeleteTask = (id) => {
        const deleteList = list.filter((d) => d.id !== id);
        setList(deleteList)
        localStorage.setItem("taskList", JSON.stringify(deleteList))
    }

    const handleEditTask = (list) => {
        setIsEdit(true);
        setUpdateList(list)
    }

    const handleTaskValue = (event) => {
        const { name, value } = event.target;
        setUpdateList({ ...updateList, [name]: value })
    }

    const updateTaskList = () => {
        const updateLists = list.map((item) => item.id === updateList.id ? updateList : item);
        setList(updateLists)
        localStorage.setItem("taskList", JSON.stringify(updateLists))
        onClose()
    }

    const onClose = () => {
        setIsEdit(false);
        setUpdateList(null)
    }
    useEffect(() => {
        const getStorage = localStorage.getItem("taskList")
        const storage = getStorage ? JSON.parse(getStorage) : []
        setList(storage)
    }, [])

    return (
        <React.Fragment>
            <div className='my-[1rem] font-bold text-2xl justify-center flex'>TaskList</div>
            <button type='button' className='float-right hover:bg-white bg-blue-600 hover:text-blue-600 text-white border border-blue-600 p-2 m-2' onClick={navigateTaskList}>Add TaskList</button>
            <table className='table w-full'>
                <thead className='table-header-group my-2 h-[2.7rem] border border-slate-400'>
                    <tr className='table-row'>
                        <th className='table-cell text-left'>Title</th>
                        <th className='table-cell text-left'>Description</th>
                        <th className='table-cell text-left'>Status</th>
                        <th className='table-cell text-left' colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody className='table-row-group'>
                    {
                        (list || [])?.map((task) => (
                            <tr className='table-row' key={task.id}>
                                <td className='table-cell'>{task.title}</td>
                                <td className='table-cell'>{task.description}</td>
                                <td className='table-cell'>{task.status}</td>
                                <td className='table-cell w-[7rem]'>
                                    <button type='button' className='w-[5rem] h-[2rem] m-1 bg-green-600 hover:bg-white text-white hover:text-green-600 border border-2 border-green-600' onClick={() => handleEditTask(task)}>Edit</button>
                                </td>
                                <td className='table-cell w-[7rem]'>
                                    <button type='button' className='w-[5rem] h-[2rem] m-1 bg-red-600 hover:bg-white text-white hover:text-red-600 border border-2 border-red-600' onClick={() => handleDeleteTask(task.id)}>Delete</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>

            {
                isEdit &&
                <div tabIndex="-1" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal" onClick={onClose}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                <div className='grid w-[50%] flex justify-center mx-auto mt-[2rem]'>
                                    <form>
                                        <div className='flex items-center mb-4'>
                                            <label htmlFor='title' className='w-1/4'>Title:</label>
                                            <input type='text' className='w-[20rem] h-[2rem] border border-slot focus:outline-none focus-visible:slot border-1 ms-2 pl-2' name="title" placeholder='Title'
                                                value={updateList.title} onChange={handleTaskValue} />
                                        </div>

                                        <div className='flex items-center mb-4'>
                                            <label htmlFor='description' className='w-1/4'>Description:</label>
                                            <textarea type='text' row={3} className='w-[20rem] border border-slot focus:outline-none focus-visible:slot border-1 ms-2 pl-2' name="description" placeholder='Description'
                                                value={updateList.description} onChange={handleTaskValue} />
                                        </div>

                                        <div className='flex items-center mb-4'>
                                            <label htmlFor='status' className='w-1/4'>Status:</label>
                                            <select className='w-[20rem] h-[2rem] border border-slot focus:outline-none focus-visible:slot border-1 ms-2 pl-2' name="status" placeholder='status'
                                                value={updateList.status} onChange={handleTaskValue} >
                                                <option value="Pending">Pending</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Complete">Complete</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <button type="button" className="text-white bg-blue-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={updateTaskList}>Update</button>
                                <button type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200" onClick={onClose}>No, cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default TaskList