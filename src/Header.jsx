import styles from "./Form.module.css";
export default function Header(){
    return(<>
    <div className={styles.headingcontainer}>
         <h1 className={styles.heading}>Daily Task Manager</h1>
    </div>
   
    </>);
}