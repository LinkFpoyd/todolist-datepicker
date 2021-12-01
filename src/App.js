import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import './App.css';


function App() {

  const [selectedDate, handleDateChange] = useState(new Date());
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);
  

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  const changeDate = (event) => {
    handleDateChange(event);
    setTodo({...todo, date: event.getDate().toString() + '.' + (event.getMonth() +1).toString() + '.' + event.getFullYear().toString()});
  }



  return (
    <div className="App">

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={changeDate} />
      </MuiPickersUtilsProvider>

      <TextField label="Description" type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <Button variant="contained" color="primary" onClick={addTodo}>Add</Button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}

export default App;
