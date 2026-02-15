import { useState } from "react";

 const Todo=()=>{
    const [todos,settodos]=useState([]);
    const [inputValue,setInputValue]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim()){
            settodos([...todos,inputValue]);
            setInputValue("");
        }
        

    };
    const handleChange=(e)=>{
        setInputValue(e.target.value);
    };

return(<div>
    <h1>ToDo List</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a new task">
        </input>
        <button type="submit">ADD TODO</button> 
    </form>
    <ul>
        {todos.map((todo,index)=>(
            <li key={index}>{todo}
            </li>
        ))}
    </ul>

</div>);
 };
export default Todo;