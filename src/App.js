import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function App() {
  let [text, setText] = useState("");
  let [list, setList] = useState([]);
  let[isEdit , setIsEdit] = useState(false)
  let [ind, setInd] = useState()
  let add = () => {

    setList([...list, { text, checked: false }])
    setText("")
  };
  let deleteItem = (i) => {
    list.splice(i, 1)
    setList([...list])
  };
  let editItem = (e, i) => {
    setText(e)
    setInd(i)
    setIsEdit(true)
  };
  let deleteAll = () => {
    setList([]);
  };
  let checkItem = (e) => {
    e.checked = true
    setList([...list])
  }
  let save=()=>{
    list[ind].text = text
    setList([...list])
    setText("")
    setIsEdit(false)
  }
  return (
    <div className='parent'>
      <div className='main'>
        <div className='heading'>Todo App</div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <input value={text} placeholder='Write any text...' className='input' onChange={(e) => {
            setText(e.target.value);
          }}></input>
          {isEdit?<span onClick={save} className='add'>Save</span>:<span onClick={add} className='add'>Add</span>}
        </div>
        <div>
          {list.map((e, i) => {
            return <p key={i} className={e.checked ? "list selected" : "list"} >{e.text}
              <span>
                <CheckBoxIcon sx={{ marginLeft: "10px" }} onClick={() => checkItem(e)} />
                <EditIcon sx={{ marginLeft: "10px" }} onClick={() => editItem(e.text, i)} />
                <DeleteIcon sx={{ marginLeft: "10px" }} onClick={() => deleteItem(i)} />
              </span>
            </p>
          })}
        </div>
        <div style={{ textAlign: "center" }}>
          <Button sx={{ margin: "20px" }} color="error" variant="contained" onClick={deleteAll}>Delete All</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
