
const DoneItem = (props) => {

    const delHandler = (e) => {
        props.onDel(e.target.id)
        
    }
    
    return(
        <div>
            <p>{props.desc}</p>
            <button id={props.id} onClick={delHandler}type="button" className="btn btn-secondary btn-sm">delete</button>
            
        </div>
    )
}

export default DoneItem; 