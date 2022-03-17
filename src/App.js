import { useEffect, useState } from 'react';
import './App.css';
import Items from './Items';
import NewItem from './NewItem';
import DoneItems from './DoneItems';
import Loader from './Loader';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';



function App() {

  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    try {
      const data = await axios
        .get("/api/todos/")
        .then(res => {
          console.log(res.data)
          setItems(res.data)
        });
        setLoading(true);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])


  //add an item to the list  
  const onAddItemHandler = (itemData) => {
    console.log(itemData)
    axios
    .post("http://localhost:8000/api/todos/", itemData)
    .then((res) => getTodos());
  };

  //move item to completed list
  const onDoneHandler = (id) => {
    console.log(id)

    const index = items.findIndex(item => {
      return item.id === parseInt(id)
    })

    items[index].completed = true

    const set = items[index]

    // why can't I use the relative path here? 
    axios
        .put(`http://localhost:8000/api/todos/${id}/`, set)
        .then((res) => getTodos());

      }
      
      const filterList = items.filter((item) => {
        return item.completed === false
      })
      const filterDone = items.filter((item) => {
        return item.completed !== false
      })

  return (
    <div className="App">
      <header className="App-header">

        {loading ? (NewItem,Items,DoneItems) : (<Loader />) }


        <NewItem onAddItem={onAddItemHandler} items={items} />
        <Items onDone={onDoneHandler} onDelete={setItems} update={getTodos} items={filterList} />
        <DoneItems update={getTodos} dones={filterDone} />


      </header>
    </div>
  );
}

export default App;
