import './Items.css';

export const Items = (props) => {
    
    const items = props.items;
    const listItems = items.map((item, idx) => {
        return <li className="itemsListCls" key={"items" + idx}>
              
            <span className="itemsTitleCls">{item.title}</span>
                <span className="itemsQtyCls">{item.qty}</span>
                <span className="itemsCostCls prefix">{item.price}</span>
                <span className="itemsTotalCls prefix">{item.subtotal}</span>
            </li>
    });

    return (
        <div className="Items">
            <div className="itemTitleHeaderCls">
                <span className="itemsTitleCls">Title</span>
                <span className="itemsQtyCls">Qty</span>
                <span className="itemsCostCls">Unit Price</span>
                <span className="itemsTotalCls">SubTotal</span>
            </div>
            <ul className="itemsUlCls">{listItems}</ul>
        </div>
    );
}

export default Items;
