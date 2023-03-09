import { useEffect, useState } from "react";
import FooterComponent from "./components/Footer.js";
import Header from "./components/Header.js";
import InputField from "./components/InputField.js";
import Submit from "./components/Submit.js";




function App() {
  const [tasks, setTasks] = useState(
    () => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  }
  );
  const [currentTask, setCurrentTask] = useState("")
  const handleChange = (e)=> {
    setCurrentTask(e.currentTarget.value)
  }
  const addTask= (currentTask) => {
    const initialTime= new Date()
    let copy = [...tasks]
    copy= [...copy, {
      id : tasks.length + 1, 
      name: currentTask, 
      strike: false, 
      entryTime: initialTime, 
      finalTime: null, 
      reminderDate: null, 
      reminder: false,
      pastReminder: null
    }]
    setTasks(copy)
    setCurrentTask("")
  }
  const submitTask= (e)=> {
    e.preventDefault()
    addTask(currentTask)
    setCurrentTask("")
    localStorage.clear()
  }
  const changeStrike= (id)=>{
    let copy = tasks.map((task) => {

      return +id === task.id?{ ...task, strike: !task.strike, finalTime: new Date() }
        : { ...task }
    })
    setTasks(copy)
  }
  const deleteTask= (id)=> {
    let copy = tasks.filter((task) => {
      return task.id !== +id 
    })
    setTasks(copy)
  }
  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks])
  

  
  return (
    <div className="app">
      
      <Header/>
      <div className="body">
      <InputField name="name" onChange={handleChange} value= {currentTask} placeholder= "Enter your task here..."></InputField><br/><br/>
      <button className="btn" onClick={submitTask}> Add</button>
      <Submit tasks= {tasks} toClick= {changeStrike} toDelete= {deleteTask} newTasks= {setTasks} />
      </div>
      <FooterComponent/>
    </div>
    
  );
}

export default App;
