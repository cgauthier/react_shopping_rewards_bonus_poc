import React, {useState} from "react";
import './Products.css';
import Filter from './products/Filter';
import TableContainer from './products/TableContainer';
import Summary from './products/Summary';

export const Products = (props) => {
    const [products] = useState(props.products);
    const [invoices, _setInvoices] = useState([...props.products.invoices]);
    const setInvoices = (products, bid) => {
        let invoices = [...products.invoices];
        if(bid !== "all") {
            let monthInterval = {
                "3months": 3,
                "lastmonth": 1
            }
            invoices = invoices.filter(function(invoice) {
                let interval = this;
                let d = new Date(invoice.date);
                let t = new Date();
                let i = t.setMonth(t.getMonth() - interval);
                if(d.getTime() > i) {
                    return invoice;
                }

            }.bind(monthInterval[bid]));
        }
        _setInvoices(invoices);

    }

    const handleFilterClick = function(event, props) {
        let setInvoices = props.props.setInvoices;
        let bid = props.bid;
        let products = props.props.products;
        setInvoices(products, bid);
    }

    return (
        <div className="Products">
            <Filter setInvoices={setInvoices} products={products} handleFilterClick={handleFilterClick} />
            <TableContainer invoices={invoices} />
            <Summary invoices={invoices}/>
        </div>
    );
}

export default Products;
