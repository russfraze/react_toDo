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
      // console.log(items)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])


  //add an item to the list  
  const onAddItemHandler = (itemData) => {
    setItems(prevItems => {
      return [itemData, ...prevItems]
    });
  };

  //move item to completed list
  const onDoneHandler = (id) => {

    const index = items.findIndex(item => {
      return item.id === parseInt(id)
    })

    items[index].completed = true

    // setItems(items)
    console.log('items', items)

    const filterList = items.filter((item) => {
      return item.completed === false
    })
    const filterDone = items.filter((item) => {
      return item.completed !== false
    })

    console.log(filterDone)

    setItems(filterList)

    setCheckedItems( (prevState) => {
      return[...prevState, filterDone[0] ]
    })

    console.log('checked', checkedItems)
  }


  return (
    <div className="App">
      <header className="App-header">

        {/* {loading ? (NewItem,Items,DoneItems) : (<Loader />) } */}


        <NewItem onAddItem={onAddItemHandler} items={items} />
        <Items onDone={onDoneHandler} onDelete={setItems} items={items} />
        <DoneItems dones={checkedItems} />


      </header>
    </div>
  );
}

export default App;
