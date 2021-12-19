import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodo()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = 'rrrrrrr'
        todolistAPI.createTodo(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = '02f4962f-a046-4f7d-9939-bede39ebb7f9'
        todolistAPI.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = '8a7c7fe0-0c99-41be-a601-bd4cfc5f33a4'
        let title = 'ttt'
        todolistAPI.updateTodo(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'c0fd77e9-6e13-4b6e-bc30-1b427b566def'
        todolistAPI.getTask(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState(null)
    useEffect(() => {
        const todolistId = 'c0fd77e9-6e13-4b6e-bc30-1b427b566def'
        const title = 'CSS'
        todolistAPI.createTask(title, todolistId)
            .then((res) => {
                debugger
                // @ts-ignore
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState(null)
    useEffect(() => {
        const todolistId = 'c0fd77e9-6e13-4b6e-bc30-1b427b566def'
        const taskId = 'ac55748c-3569-4e88-b65a-7c218fb356af'
        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState(null)
    useEffect(() => {
        const todolistId = 'c0fd77e9-6e13-4b6e-bc30-1b427b566def'
        const taskId = '00a30fd8-2b4b-4613-a256-0491b43445e1'
        const title = 'HTML'
        todolistAPI.updateTask(todolistId, taskId, title)
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
