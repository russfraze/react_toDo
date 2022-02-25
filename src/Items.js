import Item from './Item';

const Items = (props) => {

    const itemsSorted = props.items.sort((a,b) => {
        if ( a.priority > b.priority) return -1;
    });

    const doneHandler = (id) => {
        props.onDone(id)
    }

    const deleteHandler = (id) => {
        console.log(id)

        const filterDeleted = props.items.filter(
            function (targ) {
                return targ.id !== id
              }
        )

        props.onDelete(filterDeleted)

    }

    return (
        <div>
            {itemsSorted.map(item =>
                <Item
                    onClick={doneHandler}
                    onDel={deleteHandler}
                    key={item.id}
                    id={item.id}
                    desc={item.desc}
                    priority={item.priority}
                    date={item.date} />)}

        </div>
    )
}

export default Items;



