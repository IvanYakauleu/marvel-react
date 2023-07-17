import './skeleton.scss';


const Skeleton = () => {
    return (
        <div className="skeleton">
            <div className="skeleton__info">Please select a character to see information</div>
            <div className="skeleton__wrapper">
                <div className="skeleton__circle"></div>
                <div className="skeleton__block"></div>
            </div>
            <div className="skeleton__rectangle"></div>
            <div className="skeleton__rectangle"></div>
            <div className="skeleton__rectangle"></div>
        </div>
    )
};

export default Skeleton;