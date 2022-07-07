import styles from './Item.module.css';
import { XCircleFill } from 'react-bootstrap-icons';
import { CheckSquareFill } from 'react-bootstrap-icons';

const Item = (props) => {

    const clickHandler = (e) => {
        props.onClick(e.target.id)

    }

    const delHandler = (e) => {
        props.onDel(e.target.id)
    }

    return (
        <div className={styles.Item}>
            <h3>{props.desc}</h3>
            <div className='btnGroup'>
                <CheckSquareFill color='#1A2E40' size={30} id={props.id} onClick={clickHandler}/>
                <XCircleFill color="#1A2E40" size={30} id={props.id} onClick={delHandler} />
            </div>
        </div>

    )
}

export default Item; 