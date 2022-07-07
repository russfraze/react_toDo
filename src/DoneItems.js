import DoneItem from './DoneItem';
import axios from 'axios';

const DoneItems = (props) => {

    const deleteHandler = (id) => {
        axios
        .delete(`http://localhost:8000/api/todos/${id}/`)
        .then((res) => props.update());
    } 

    return (
        <div>
            {props.dones.length === 0 ? 
            <p>There are no completed items</p> : 
            props.dones.map(done => 
            <DoneItem 
            onDel={deleteHandler}
            desc={done.description} 
            id={done.id}
            key={done.id} 
            />)}
        </div>
    )
}

export default DoneItems;