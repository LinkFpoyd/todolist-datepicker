import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import './App.css';
import Tabs from '@mui/material/Tabs'; 
import Tab  from '@mui/material/Tab';


function App() {

  const [selectedDate, handleDateChange] = useState(new Date());
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('one');
  

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

  const handleChange = (event, value) => {
    setValue(value);
  };


  return (
    <div className="App">

      <Tabs value={value} onChange={handleChange}>
        <Tab value="one" label="Home" />
        <Tab value="two" label="To Do List" />
      </ Tabs>
        {value === 'one' &&  <div>Welcome to the homepage</div>}
        {value === 'two' &&  <div>
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
          </div>}


    </div>
  );
}

export default App;
