import styles from "./Form.module.css";
export default function Editbtn({onhandleedit}){
    function handleClick(e){
         e.preventDefault();
        onhandleedit();
    }
    return(<><button onClick={(e)=>handleClick(e)} className={styles.btn}>
             Edit
        </button></>);
}