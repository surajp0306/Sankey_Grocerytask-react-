const View = (props) => {
    const { item } = props;

    return (
        <table class="view-table" >
            <div class="view">
                <div class="view-name">
                    <span>Name :</span>
                    <span>{item.name}</span>
                </div>
                <div class="view-quantity">
                    <span>Quantity :</span>
                    <span>{item.quantity}</span>
                </div>
                <div class="view-image">
                    <span id="imgg">Image :</span>
                    <span><img src={item.image} alt={item.image} width="200px"/></span>
                </div>
            </div>
        </table>    
    );
};

export default View;