import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from "./ListCom"

const ToDoList =() => {
    const [item, setItem] = useState("Hellooo!"); 
    const [newItem, setNewItem] = useState([]);
    
    const itemEvent = (event) => {
        setItem(event.target.value);
    };
    const listOfItems = () => {
        setNewItem((prevValue) =>{
            return[...prevValue, item];
            
        });
        setItem("  ");
    };

    return(
        <>
        <div className = "main_div">
        <div className = "center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type = "text" value = {item} placeholder = "Add an Item!" onChange = {itemEvent}/>
        <Button className = "newBtn" onClick = {listOfItems}>
        <AddIcon/>

        </Button>
        <br/>
        <ol>
            <li>{item}</li>
            {newItem.map((val, index) => {
               return <ListCom key = {index} text ={val} />;
            })}
        </ol>
        
        </div>

        </div>
        </>

    )
};

export default ToDoList;