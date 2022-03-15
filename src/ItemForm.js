import { useState } from "react";

const ItemForm = (props) => {

    const [description, setDescription]= useState('');
    

    const textChangeHandler = (e) => {
        setDescription(e.target.value);
    };


    const formSubmitHandler = (e) => {
        e.preventDefault()
        const itemData = {
            title: description,
            completed: false, 
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

            <button type="submit" className="btn btn-light">create</button>
        </form>
    )
}

export default ItemForm;