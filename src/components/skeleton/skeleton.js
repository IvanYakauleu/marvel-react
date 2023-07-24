import './skeleton.scss';


const Skeleton = () => {
    return (
        <div className='skeleton__item'>
            <div className="skeleton__info">Please select a character to see information</div>
            <div className="skeleton__wrapper">
                <div className="pulse skeleton__circle"></div>
                <div className="pulse skeleton__block"></div>
            </div>
            <div className="pulse skeleton__rectangle"></div>
            <div className="pulse skeleton__rectangle"></div>
            <div className="pulse skeleton__rectangle"></div>
        </div>
    )
};

export default Skeleton;