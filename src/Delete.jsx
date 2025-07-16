import styles from "./Form.module.css";
export default function Delete({onhandledel}){
    function handleClick(e){
         e.preventDefault();
         onhandledel();
    }
    return(<><button onClick={(e)=>handleClick(e)} className={styles.btn}>
              Delete
        </button></>);
}