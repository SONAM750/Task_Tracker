import styles from "./Form.module.css";
export default function Footer({item}){
  const total = item.length;
  const completed = item.filter((todo) => todo.completed).length;
  const pending = total - completed;
    return(<>
    <div className={styles.status}>
    <h2>Total:{total}</h2>
    <h2>Completed:{completed}</h2>
    <h2>Pending:{pending }</h2>
    </div>
   
    </>);
}