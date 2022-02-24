const ItemFilter = () => {

    const filterChangeHandler = (e) => {
        console.log(e.target.value);
    }
    
    return (
        <div className="btn-group" data-toggle="buttons">
            
            <form onChange={filterChangeHandler}>
            <label className="btn btn-primary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked/> date created
            </label>   
            <label className="btn btn-primary">
                <input type="radio" name="options" id="option2" autocomplete="off"/> priority
            </label>
            </form>
            
        </div>
    );
};
export default ItemFilter;