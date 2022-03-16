import Item from './Item';

const Items = (props) => {


    const doneHandler = (id) => {
        props.onDone(id)
    }

    const deleteHandler = (id) => {
        console.log(id)

        const filterDeleted = props.items.filter(
            function (targ) {
                return targ.id !== parseInt(id)
              }
        )
    
        props.onDelete(filterDeleted)
        console.log(filterDeleted)
    }   

    return (
        <div>
            {props.items.map(item =>
                <Item
                    onClick={doneHandler}
                    onDel={deleteHandler}
                    key={item.id}
                    id={item.id}
                    desc={item.description}
                     />)}

        </div>
    )
}

export default Items;



