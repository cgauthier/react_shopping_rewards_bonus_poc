import './Title.css';

export const Title = (props) => {
    const title = props.appConfig.title;

    return (
        <div className="Title">
            {title}
        </div>
    );
}

export default Title;
