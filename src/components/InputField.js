import React from "react"


function InputField({type, name, value, placeholder, onChange}){
    
    
    
    return(
        <>
            <input id="todo-input" type= {type} name= {name} value= {value}  placeholder={placeholder} onChange={onChange} maxLength= "60" />
            
        </>
    )
}
export default InputField