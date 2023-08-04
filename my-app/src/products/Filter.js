import './Filter.css';
import Button from './Button';

export const Filter = (props) => {
    return (
        <div className="Filter">
            <label>Filter: </label> 
            <Button props={props} label={"Show All"} bid={"all"} /> 
            <Button props={props} label={"Show Last 3 Months"} bid={"3months"} /> 
            <Button props={props} label={"Show Last Month"} bid={"lastmonth"} />
        </div>
    );
}

export default Filter;
