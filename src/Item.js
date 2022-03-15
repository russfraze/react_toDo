import styles from './Item.module.css';

const Item = (props) => {

    const clickHandler = (e) => {
        props.onClick(e.target.id)
        
    }

    const delHandler = (e) => {
        props.onDel(e.target.id)
    }
    
    return(
        <div className={styles.Item}>
        <h3>{props.desc}</h3>
        <button id={props.id} onClick={clickHandler} type="button" className="btn btn-primary btn-sm">completed</button>
        <button id={props.id} onClick={delHandler}type="button" className="btn btn-secondary btn-sm">delete</button>
        </div>
        
    )
}

export default Item; 