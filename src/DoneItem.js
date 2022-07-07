import styles from './DoneItem.module.css'
import { XCircleFill } from 'react-bootstrap-icons';

const DoneItem = (props) => {

    const delHandler = (e) => {
        props.onDel(e.target.id)
        
    }
    
    return(
        <div className={styles.doneItem}>
            <p className={styles.lineThrough}>{props.desc}</p>
            <XCircleFill className={styles.doneButton} color="#1b8ef29c" size={30} id={props.id} onClick={delHandler}/>
        </div>
    )
}

export default DoneItem; 