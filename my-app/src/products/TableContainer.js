import './TableContainer.css';
import ListItem from './ListItem';

export const TableContainer = (props) => {
    const invoices = props.invoices;

    const listItems = invoices.map((invoice, idx) => {
        return <ListItem key={idx} invoice={invoice} />
    });

    return (
        <div className="TableContainer">
            <ul className="listItemsUlCls">{listItems}</ul>
        </div>
    );
}

export default TableContainer;
