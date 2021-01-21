import { Fragment } from "react";

const TaskInput = () => (
    <Fragment>
        <input placeholder="task id here" type="text" name="name"/>
        <button>Add New Task</button>
    </Fragment>
)

export default TaskInput;