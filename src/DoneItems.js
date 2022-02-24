import DoneItem from './DoneItem';

const DoneItems = (props) => {
    return (
        <div>
            {props.dones.length === 0 ? <p>They aint none</p> : props.dones.map(done => <DoneItem desc={done.desc} />) }
        </div>
    )
}

export default DoneItems;