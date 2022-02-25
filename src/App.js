import { useEffect, useState } from 'react';
import './App.css';
import Items from './Items';
import NewItem from './NewItem';
import ItemFilter from './ItemFilter'
import DoneItems from './DoneItems'

const DUMMY_ITEMS = [

  {
    id: 'e1',
    desc: 'Clean the garage',
    priority: 1,
    date: 'Jan 15 2022',
  },

  {
    id: 'e2',
    desc: 'Shop for groceries',
    priority: 2,
    date: 'Jan 20 2022',
  },

  {
    id: 'e3',
    desc: 'Trap the squirrels',
    priority: 2,
    date: 'Jan 23 2022',
  }

];


function App() {

  const [items, setItems] = useState(DUMMY_ITEMS)
  const [checkedItems, setCheckedItems] = useState([])

  //add an item to the list  
  const onAddItemHandler = (itemData) => {
    setItems(prevItems => {
      return [itemData, ...prevItems]
    });
  };

  //move item to completed list
  const onDoneHandler = (id) => {
    console.log(id)


    const filterDone = items.filter(
      function (targ) {
        return targ.id === id
      });

      setCheckedItems((prevItems) => {
        return [filterDone[0], ...prevItems]
      });

      
      const filterList = items.filter(
        function (targ) {
          return targ.id !== id
        }
      )

      setItems(filterList)
      
    }

    console.log(checkedItems)
    // console.log(items)

  return (
    <div className="App">
      <header className="App-header">

        <NewItem onAddItem={onAddItemHandler} />
        <Items onDone={onDoneHandler} onDelete={setItems} items={items} />
        <DoneItems dones={checkedItems}/>
        <ItemFilter />


      </header>
    </div>
  );
}

export default App;
