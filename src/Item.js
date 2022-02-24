

const Item = (props) => {

    const clickHandler = (e) => {
        props.onClick(e.target.id)
    }
    
    return(
        <div className="container-fluid">
        <h3>{props.desc}</h3>
        <h3>priority:{props.priority}</h3>
        <h3>{props.date}</h3>
        <button id={props.id} onClick={clickHandler} type="button" className="btn btn-primary btn-sm">completed</button>
        <button type="button" className="btn btn-secondary btn-sm">delete</button>
        </div>
        
    )
}

export default Item; 