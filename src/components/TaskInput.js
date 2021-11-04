import React, { useState } from 'react'
import { addDoc, serverTimestamp, collection } from "firebase/firestore"
import db from "../utils/firebase"

function TaskInput() {

    const [input, setInput] = useState("")

    const handleForm = async(e) => {
        e.preventDefault();

        await addDoc(collection(db, "tasks"), {
            date: serverTimestamp(),
            task: input
        })

        setInput("");
    }
    return (
        <form onSubmit = {handleForm} className="taskInput">
            <input 
            type="text"
            placeholder="Create new todo..."
            value = {input}
            // counter = 0
            onChange = {(e) => {setInput(e.target.value)}}
            />
        </form>
    )
}

export default TaskInput
