
const DoneItem = (props) => {
    return(
        <div>
            <p>{props.desc}</p>
            <p>{props.date}</p>
            <p>{props.priority}</p>
        </div>
    )
}

export default DoneItem; 