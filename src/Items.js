import axios from 'axios';
import Item from './Item';

const Items = (props) => {


    const doneHandler = (id) => {
        props.onDone(id)
    }

    const deleteHandler = (id) => {
        console.log(id)

        axios
        .delete(`http://localhost:8000/api/todos/${id}/`)
        .then((res) => props.update());
    }   


    return (
        <div>
            {props.items.map(item =>
                <Item
                    onClick={doneHandler}
                    onDel={deleteHandler}
                    key={item.id}
                    id={item.id}
                    desc={item.description}
                     />)}

        </div>
    )
}

export default Items;



