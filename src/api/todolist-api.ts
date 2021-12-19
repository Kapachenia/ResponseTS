import React from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'api-key': '716f1b8b-bc85-4d85-b00e-40338217278b'
    }
})

export const todolistAPI = {
    getTodo() {
        return instance.get<Array<getTodoType>>('todo-lists')
    },
    createTodo(title: string) {
        return instance.post<CommonType<{ item: getTodoType }>>('todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonType>(`todo-lists/${todolistId}`)
    },
    updateTodo(todolistId: string, title: string) {
        return instance.put<CommonType>(`todo-lists/${todolistId}`, {title})
    },
    getTask(todolistId: string) {
        return instance.get<getTasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(title: string, todolistId: string) {
        return instance.post<createTaskType>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<deleteTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    }
}

type getTodoType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

type CommonType<T = {}> = {
    resultCode: number
    messages: Array<string>,
    fieldsErrors: Array<string>,
    data: T
}

type TaskType = {
    addedDate: string
    deadline: null | string
    description: null | string
    id: string
    order: number
    priority: number
    startDate: null | string
    status: number
    title: string
    todoListId: string
    // completed: boolean
}

type getTasksResponseType = {
    error: null | string
    totalCount: number
    items: Array<TaskType>
}

type createTaskType = {
    // data: TaskType
    // fieldsErrors: any
    // messages: any
    resultCode: number
    messages: any
    data: {}
}

type deleteTaskType = {
    data: {}
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}