import styles from "./Form.module.css";
import Msg from "./Msg.jsx";
import { useState,useEffect } from "react";
import Todoitem from "./Todoitem";
import Header from "./Header";
import Footer from "./Footer";
export default function Form() {
const [item, addItem] = useState(() => {
  const saved = localStorage.getItem("todoData");
  return saved 
    ? JSON.parse(saved)
    : { text: "", description: "", todo: [] };
});

 
  useEffect(() => {
  localStorage.setItem("todoData", JSON.stringify(item));
}, [item]);



  const [editIndex, setEditIndex] = useState(null);

   function handlesubmit(e) {
    e.preventDefault();

    if (item.text === "") {
      alert("Enter a todo");
      return;
    }

    const newTodo = {
      text: item.text,
      description: item.description,
      completed: false,
    };

    if (editIndex !== null) {
      // Update existing todo
      const updated = [...item.todo];
      updated[editIndex] = { ...updated[editIndex], ...newTodo };
      addItem({ ...item, todo: updated, text: "", description: "" });
      setEditIndex(null); // Exit edit mode
    } else {
      // Add new todo
      if (item.todo.some((t) => t.text === item.text)) {
        alert("Todo must be unique");
        return;
      }
      addItem
      ({ ...item, todo: [...item.todo, newTodo], text: "", description: "" });
    }
  }
    function toggleComplete(index) {
    const updatedTodos = [...item.todo];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    addItem({ ...item, todo: updatedTodos });
      console.log(item.todo);
  }
  function handledel(index){
        const uptodo=[...item.todo];
       const updated = uptodo.filter((_, i) => i !== index);
         addItem({ ...item, todo:updated});
  }
    function handleEdit(index) {
    const currentTodo = item.todo[index];
    addItem({ ...item, text: currentTodo.text, description: currentTodo.description });
    setEditIndex(index);
  }
  return (
    <>
    
        <Header />
   
    
      <form className={styles.container}>
        <Footer item={item.todo} />
        <div className={styles.container}>
          <div>
            <input
              onChange={(e)=>addItem({...item,text:e.target.value})}
              type="text"
              value={item.text}
              placeholder="Enter todo"
            />
          </div>
          <div>
          <textarea
            placeholder="Enter detailed description"
            onChange={(e) => addItem({...item,description:e.target.value})}
            value={item.description}
          />
          <br></br>
        </div>
        </div>
         <div>
            <button className={`${styles.addbtn}`}
              onClick={(e) => {
                handlesubmit(e);
              }}
            >
              Add
            </button>
          </div>
        
        <div>
          {item.todo.length==null?<Msg />:  <ol>
       { item.todo.map((item,i)=>
         <Todoitem key={i} todo={item} index={i} 
         onToggle={toggleComplete} ondel={handledel} onEdit={handleEdit} />
       )}
        </ol>}
        
       
        </div>
      </form>

    </>
  );
}
