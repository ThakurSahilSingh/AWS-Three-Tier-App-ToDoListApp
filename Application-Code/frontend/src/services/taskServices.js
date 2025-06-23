import axios from "axios";

const apiUrl = "http://acc307c6d9e2347f18076949a8546f86-1889230027.us-east-1.elb.amazonaws.com/api/tasks";


export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(`${apiUrl}/${id}`, task);
}

export function deleteTask(id) {
    return axios.delete(`${apiUrl}/${id}`);
}
