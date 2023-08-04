import './Button.css';

export const Button = (props) => {
    const label = props.label;
    const handleFilterClick = props.props.handleFilterClick;

    return (
        <div className="Button" onClick={(event) => handleFilterClick(event, props)}>
            <button className="buttonCls">{label}</button>
        </div>
    );
}

export default Button;
