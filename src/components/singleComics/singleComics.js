import xmen from '../../resurses/img/x-men.png';

import './singleComics.scss'

const SingleComics = () => {
    return (
        <div className="singleComics">
            <img src={xmen} alt="x-men" className="singleComics__img" />
            <div className="singleComics__wrapper">
                <div className="singleComics__name">X-Men: Days of Future Past</div>
                <div className="singleComics__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</div>
                <div className="singleComics__pages">144 pages</div>
                <div className="singleComics__language">Language: en-us</div>
                <div className="singleComics__price">9.99$</div>
            </div>
            <a href="#" className="singleComics__back">Back to all</a>
        </div>
    )
}


export default SingleComics;