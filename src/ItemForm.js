import { useState } from "react";
import styles from './ItemForm.module.css'

const ItemForm = (props) => {

    const [description, setDescription] = useState('');


    const textChangeHandler = (e) => {
        setDescription(e.target.value);
    };


    const formSubmitHandler = (e) => {
        e.preventDefault()
        const itemData = {
            description: description,
            completed: false,
        }
        props.onSaveItemData(itemData);

        //two way bind the form
        setDescription('')
    };

    return (
        <div>
            <form className={styles.formDiv} onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label>To Do</label>
                    <textarea value={description} className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={textChangeHandler}></textarea>
                </div>

                <div className={styles.btnDiv}>
                    <button type="submit" className="btn btn-light">create</button>
                </div>
            </form>
        </div>
    )
}

export default ItemForm;