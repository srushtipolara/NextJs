"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'

const TasklistAdd = () => {

    const navigate = useRouter()
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: ''
    })
    const [errors, setErrors] = useState({
        title: '',
        description: '',
        status: ''
    })
    const [list, setList] = useState([])
    const [isPending, startTransition] = useTransition()

    const handleTaskValue = (event) => {
        const { name, value } = event.target;
        setTask({ ...task, [name]: value })
    }

    const handleValidation = (value) => {
        let validation = {
            title: '',
            description: '',
            status: ''
        };
        if (value.title.trim() === '') {
            validation.title = "Please Enter Title Name";
        } else if (value.description.trim() === '') {
            validation.description = "Please Enter Description Name";
        } else if (value.status.trim() === '') {
            validation.status = "Please Enter Status Name";
        }
        return validation;
    }

    const addTaskList = (taskValue) => {
        const error = handleValidation(taskValue)
        if (error.title === '' && error.description === '' && error.status === '') {
            const newTask = { id: Math.floor(Math.random() * (20 - 10) + 10), title: task.title, description: task.description, status: task.status };
            const data = [...list, newTask]
            localStorage.setItem("taskList", JSON.stringify(data))
            setList(data)
            setErrors(null)
        } else {
            return error
        }
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        startTransition(() => {
            const error = addTaskList(task);
            if (error) {
                setErrors(error)
                return;
            }
            navigate.push('/taskList')
        })

    }

    useEffect(() => {
        const getStorage = localStorage.getItem("taskList")
        const storage = getStorage ? JSON.parse(getStorage) : []
        setList(storage)
    }, [null]);

    return (
        <React.Fragment>
            <div className='container mx-auto'>
                <h1 className='flex justify-center font-bold my-2'> Add taskList</h1>
                <div className='grid w-[50%] flex justify-center mx-auto mt-[2rem]'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex items-center mb-4'>
                            <label htmlFor='title' className='w-1/4'>Title:</label>
                            <input type='text' className='w-[20rem] h-[2rem] border border-slot focus:outline-none focus-visible:slot border-1 ms-2 pl-2' name="title" placeholder='Title'
                                value={task.title} onChange={handleTaskValue} />
                        </div>
                        {errors.title && <p className='text-red-500'>{errors.title}</p>}

                        <div className='flex items-center mb-4'>
                            <label htmlFor='description' className='w-1/4'>Description:</label>
                            <textarea type='text' row={3} className='w-[20rem] border border-slot focus:outline-none focus-visible:slot border-1 ms-2 pl-2' name="description" placeholder='Description'
                                value={task.description} onChange={handleTaskValue} />
                        </div>
                        {errors.description && <p className='text-red-500'>{errors.description}</p>}

                        <div className='flex items-center mb-4'>
                            <label htmlFor='status' className='w-1/4'>Status:</label>
                            <select className='w-[20rem] h-[2rem] border border-slot focus:outline-none focus-visible:slot border-1 ms-2 pl-2' name="status" placeholder='status'
                                value={task.status} onChange={handleTaskValue} >
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Complete</option>
                            </select>
                        </div>
                        {errors.status && <p className='text-red-500'>{errors.status}</p>}

                        <button type='submit' className='w-[10rem] float-right p-2 my-2 bg-blue-600 hover:bg-white text-white hover:text-blue-600 border border-blue-600' disabled={isPending}>Submit</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TasklistAdd