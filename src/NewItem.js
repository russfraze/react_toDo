import ItemForm from './ItemForm';

const NewItem = (props) => {

    const saveItemDataHandler = (prevItemData) => {
        const itemData = {
            ...prevItemData,
            id: props.items.length + 1
        };
        props.onAddItem(itemData);

    }
    
    return (
        <ItemForm  onSaveItemData = { saveItemDataHandler } />
    );
};

export default NewItem;

