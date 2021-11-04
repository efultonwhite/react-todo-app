import React from 'react'

function Task(props) {
    console.log(props);
    return (
        <div>
            <ul>
                <li>{props.items}</li>
            </ul>
        </div>
    )
}

export default Task
