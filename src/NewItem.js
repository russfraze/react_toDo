import ItemForm from './ItemForm';

const NewItem = (props) => {

    const saveItemDataHandler = (prevItemData) => {
        const itemData = {
            ...prevItemData,
            id: Math.random().toString()
        };
        props.onAddItem(itemData);
    }

    return (
        <ItemForm  onSaveItemData = { saveItemDataHandler } />
    );
};

export default NewItem;

