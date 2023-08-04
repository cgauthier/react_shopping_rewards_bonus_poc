import './ListItem.css';
import Items from './Items';
import RowSummary from './RowSummary';

export const ListItem = (props) => {
    
    const invoice = props.invoice;

    return (
        <div className="ListItem">
            <li className="listItemCls">
                <div className="listItemHeaderCls">
                    Invoice Date: {invoice.date} - Invoice Number: {invoice.invoiceNo}
                </div>
                <Items items={invoice.items} />
                <RowSummary invoice={invoice} />
            </li>
        </div>
    );
}

export default ListItem;
