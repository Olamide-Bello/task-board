import moment from "moment/moment.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faClipboardList, faCircleCheck, faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import gif2 from "../Gifs/2.gif"
import gif3 from "../Gifs/3.gif"
import gif4 from "../Gifs/4.gif"
import gif5 from "../Gifs/5.gif"
import gif6 from "../Gifs/6.gif"
import gif7 from "../Gifs/7.gif"
import gif8 from "../Gifs/8.gif"
import gif9 from "../Gifs/9.gif"
import gif10 from "../Gifs/10.gif"
import { useEffect, useState } from "react";


function Modal({ showModal, setShowModal, tasks, taskId, newTasks }) {
    const gif = [gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10]
    const [reminderDate, setReminderDate] = useState(null)
    const [minDate, setMinDate] = useState(null)

    const quotes = [
        `Nothing will work unless you do!`,
        `How badly you want something dictate how bad you work for it!`,
        `You don't have to see the whole staircase, just take the first step!`,
        `You can't have a million dollar goal with a one dollar ethic!`,
        `You don't get what you want, you get what you work for!`,
        `Just do it!`,
        `Do the good work, with the resources you have!`,
        `Either you run the day or the day runs you!`,
        `If you want an easy job seem mighty hard, just keep putting off doing it!`
    ]
    const randomNum = Math.floor(Math.random() * 9)
    const closeModal = () => {
        setShowModal(!showModal)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setReminderDate(e.currentTarget.value)
    }

    const getReminder = (e) => {
        e.preventDefault()
        const dt = new Date(reminderDate)
        let copy = tasks.map((task) => {
            return +taskId === task.id ? { ...task, reminderDate: reminderDate, reminder: true, pastReminder: dt.getTime() }
                : { ...task }
        })
        newTasks(copy)
    }

    useEffect(() => {
        const newDate = moment().format('YYYY-MM-DDThh:mm')
        setMinDate(newDate)
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date()
            let copy = tasks.find((task) => {
                return +taskId === task.id
            })
            if (moment(copy.reminderDate).calendar() === moment(currentDate).calendar()) {
                alert(`Reminder for task: ${copy.name}`)
                return clearInterval(interval)
            }
        }, 1000)
    }, [taskId, tasks, newTasks])
    return (
        <div className="modal">
            <header><h2>Task Details</h2> <FontAwesomeIcon className='close-modal' onClick={closeModal} icon={faXmark} size='2x' /></header>
            <>
                {tasks.map((task) => {
                    return task.id === +taskId &&
                        <div key={task.id}>
                            <div className='entry'>
                                <div>
                                    <p><FontAwesomeIcon className='close-modal' onClick={closeModal} icon={faClipboardList} size='2x' /><span className='task-lg'>{task.name}</span></p>
                                    <div className="time">
                                        <p><strong>Task entry: {moment(task.entryTime).fromNow()}</strong></p>
                                        {task.strike && <p><strong>Task completed: {moment(task.finalTime).fromNow()} <FontAwesomeIcon className="icon-completed inline-icon" icon={faHandsClapping} size="2x" /></strong></p>}
                                    </div>
                                    {!task.strike && <h3 className='quote'><q><strong><em>{quotes[randomNum]}</em></strong></q></h3>}

                                </div>
                                <div>
                                    {task.strike ?
                                        <div>
                                            <h3>Status:{task.strike === true ? <span>Completed<FontAwesomeIcon className="icon-completed inline-icon" icon={faCircleCheck} size="2x" /></span> : <span> Not yet completed</span>}</h3>
                                            <img className='gif' src={gif[randomNum]} alt="Well done" />
                                        </div>
                                        :
                                        <div>
                                            {task.reminder === false && <input className="date-time-form" type='datetime-local' name="date" onChange={handleClick} min={minDate} />}<br/>
                                            {task.reminder === false && <button className="btn" onClick={getReminder}>Remind me</button>}
                                            {task.reminder ?
                                                <><p className="set-reminder"><strong>Reminder set for <span className="reminder-date">{moment(task.reminderDate).calendar()}</span></strong> </p>
                                                    {task.pastReminder <= (new Date()).getTime() &&
                                                        <p className="past-reminder">It's past set time! <br/>You should be working on the task<br/> by now!</p>}
                                                </> :
                                                <p>Set a reminder for the task</p>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                }
                )}
            </>
        </div>
    )
}
export default Modal