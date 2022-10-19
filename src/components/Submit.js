import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Modal from './Modal';

function Submit({ tasks, toClick, toDelete, newTasks }) {
    const [showModal, setShowModal] = useState(false)
    const [taskId, setTaskId] = useState("")
    
    const handleClick = (e) => {
        e.preventDefault()
        toClick(e.currentTarget.id)
    }
    const toggleModal = (e) => {
        e.preventDefault()
        setShowModal(!showModal)
        setTaskId(e.currentTarget.id)
    }
    const deleteTask = (e) => {
        e.preventDefault()
        toDelete(e.currentTarget.id)
    }
    return (<>
        <div>
            {tasks.map((each) => {
                return each.name && <div key={each.name + each.id} className="todo">
                    <li id={each.id} className={each.strike === true ? "strike" : ""} onClick={handleClick}>
                        {each.name}
                    </li>
                    <div>
                        {each.reminder && each.strike === false && <FontAwesomeIcon icon={faClock} />}
                        <FontAwesomeIcon className={each.strike === true ? "icon-completed" : "icon-incomplete"} icon={faCircleCheck} size="2x" />
                        <button id={each.id} className="btn" onClick={toggleModal}>View</button>
                        <button id={each.id} className="btn" onClick={deleteTask}>Delete</button>
                    </div>
                </div>
            }
            )}
            {showModal && <Modal tasks={tasks} taskId={taskId} showModal={showModal} setShowModal={setShowModal} newTasks={newTasks} />}
        </div>
    </>
    )
}
export default Submit