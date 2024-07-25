import {useState,useEffect} from 'react';
import Delete from './Delete.js'
import Update from './Update.js'
import './Create.css';
export default function Create(){
    const[task,setTask]=useState([])
    useEffect(()=>{
        fetch("https://meenakshi0512.github.io/project-data/db.json")
        .then(response=>response.json())
        .then(value=> setTask(value.task))})
    let taskList=task.map((ele)=>{
        let taskID=`id${ele.id}`
    return(
        <div className={`work shadow ${taskID}`} key={ele.id}>
        <Update id={ele.id}/>
        <label htmlFor={ele.id} className="label">{ele.work}</label>
        <Delete id={ele.id}/>
    </div>
    )})
    return(
        <>
        <div className="main-body">
            {taskList}
        </div>
        </>
    )
}