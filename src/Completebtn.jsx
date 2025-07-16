
import { useState } from "react";
import styles from "./Form.module.css";
export default function Completebtn({onCompleted}){
    function handleclk(e){
      e.preventDefault();
      onCompleted();
    }
   
    return(<>
     <button onClick={(e)=>{handleclk(e)}} className={styles.btn}>
            Mark as Completed
        </button>
    </>)
}