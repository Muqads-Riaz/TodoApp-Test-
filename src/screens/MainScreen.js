import React from 'react'
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

export default function MainScreen() {
    let [text, setText] = useState("");
    let [list, setList] = useState([]);
  
    let add = () => {
      setList([...list, { text, checked: false }])
      setText("")
    };
    let deleteItem = (i) => {
      list.splice(i, 1)
      setList([...list])
    };
    
      let editItem = (e,i) =>{
        let newValue = prompt("Edit the text", e);
        list[i].text = newValue;
        setList([...list])
        };
    let deleteAll = () => {
      setList([]);
    };
    let checkItem = (e) => {
      e.checked = !e.checked
      setList([...list])
    }
  return (
    <div className='parent'>
    <div className='main'>
      <div className='heading'>Todo App</div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Input value={text} placeholder='Write any text...' className='input' onChange={(e) => {
          setText(e.target.value);
        }}/>
        <span onClick={add} className='add'>Add</span>
      </div>
      <div>
        {list.map((e, i) => {
          return <p key={i} className={e.checked ? "list selected" : "list"} >{e.text}
            <span>
              <CheckBoxIcon sx={{ marginLeft: "10px" }} onClick={() => checkItem(e)} />
              <EditIcon sx={{ marginLeft: "10px" }}  onClick={e.checked ? null : () => editItem(e.text, i)} />
              <DeleteIcon sx={{ marginLeft: "10px" }} onClick={e.checked ? null : () => deleteItem(i)} />
            </span>
          </p>
        })}
      </div>
      <div style={{ textAlign: "center" }}>
        <MyButton sx={{ margin: "20px" }} color="error" variant="contained" onClick={deleteAll} label="Delete All"/>
      </div>
    </div>
  </div>
  )
}
