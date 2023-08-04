import './Header.css';

export const Header = (props) => {
    const name = props.user.name;

    return (
        <div className="Header">
            User: {name}
        </div>
    );
}

export default Header;
