import './RowSummary.css';

export const RowSummary = (props) => {

    const invoice = props.invoice;
    const total = invoice.total;
    const points = invoice.points;

    return (
        <div className="RowSummary">
            <div>Invoice Total: <span className="rowSummaryCls prefix">{total}</span></div>
            {points ? <div>Points: <span className="rowSummaryCls">{points}</span></div> : ""}
        </div>
    );
}

export default RowSummary;
