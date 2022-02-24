import Item from './Item';

const Items = (props) => {

    const itemsSorted = props.items.sort((a,b) => {
        if ( a.priority > b.priority) return -1;
    });

    const doneHandler = (id) => {
        props.onDone(id)
    }

    return (
        <div>
            {itemsSorted.map(item =>
                <Item
                    onClick={doneHandler}
                    key={item.id}
                    id={item.id}
                    desc={item.desc}
                    priority={item.priority}
                    date={item.date} />)}

        </div>
    )
}

export default Items;



