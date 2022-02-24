import { useState } from "react";

const ItemForm = (props) => {

    const [description, setDescription]= useState('');
    const [priority, setPriority] = useState('');
    

    const textChangeHandler = (e) => {
        setDescription(e.target.value);
    };

    const priorityChangeHandler = (e) => {
        setPriority(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const itemData = {
            desc: description,
            priority: priority,
            date: Date(), 
        }
        //is here where I call onSaveItemData to pass the data from here to NewItem? (and then app)
        props.onSaveItemData(itemData);

        //here I can call the setFunctions again to two way bind the forms
    }; 

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-group">
                <label>To Do</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={textChangeHandler}></textarea>
            </div>

            <select className="form-select" aria-label="Default select example" onChange={priorityChangeHandler}>
                <option defaultValue>select priority level</option>
                <option value="1">low</option>
                <option value="2">medium</option>
                <option value="3">high</option>
            </select>

            <button type="submit" className="btn btn-light">create</button>
        </form>
    )
}

export default ItemForm;