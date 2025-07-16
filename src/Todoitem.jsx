import Completebtn from "./Completebtn";
import Delete from "./Delete";
import styles from "./Form.module.css";
import Editbtn from "./Editbtn";
export default function Todoitem({todo, index, onToggle,ondel,onEdit}){
      const textstyle=todo.completed?{ color: "gray",
        textDecoration: "line-through",
        opacity: 0.7,}:{};

    return(<>

       <ol><li className={styles.list} style={textstyle}>
       <strong>{todo.text}</strong>  [ {todo.description} ]  </li></ol>
       <div className={styles.buttonGroup}>
        <Completebtn  onCompleted={()=>onToggle(index)} />
        <Delete onhandledel={()=>ondel(index)}  />
       <Editbtn onhandleedit={()=>onEdit(index)}/>

       </div>
        
     
    </>)
}