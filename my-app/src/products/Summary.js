import './Summary.css';

export const Summary = (props) => {

    const getTotals = (props) => {
        let invoices = [...props.invoices];
        let x, l = invoices.length;
        let totalSales = 0;
        let totalPoints = 0;
        let invoice;
        for(x = 0; x < l; x++) {
            invoice = invoices[x];
            totalSales = totalSales + invoice.total;
            if(invoice.points) {
                totalPoints = totalPoints + invoice.points;
            }
        }
        return {
            sales: totalSales,
            points: totalPoints
        };
    }

    const totals = getTotals(props);

    return (
        <div className="Summary">
            Total Invoices: <span className="prefix">{totals.sales}</span><br/>
            Total Points: {totals.points}
        </div>
    );
}

export default Summary;
