import DoneItem from './DoneItem';

const DoneItems = (props) => {
    return (
        <div>
            {props.dones.length === 0 ? <p>There are no completed items</p> : props.dones.map(done => <DoneItem desc={done.title} key={done.id} />)}
        </div>
    )
}

export default DoneItems;