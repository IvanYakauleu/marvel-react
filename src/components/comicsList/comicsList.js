import './comicsList.scss'


import uw from '../../resurses/img/UW.png';
import xmen from '../../resurses/img/x-men.png';


const ComicsList = () => {
    return (
        <div className="comics__list">
            <ul className="comics__wrapper">
                <li className="comtcs__item">
                    <img src={uw} alt="ultimate war" className="comics__img" />
                    <div className="comics__descr">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comics__price">9.99$</div>
                </li>
                <li className="comtcs__item">
                    <img src={xmen} alt="X-Men" className="comics__img" />
                    <div className="comics__descr">X-Men: Days of Future Past</div>
                    <div className="comics__price">NOT AVAILABLE</div>
                </li>
                <li className="comtcs__item">
                    <img src={uw} alt="ultimate war" className="comics__img" />
                    <div className="comics__descr">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comics__price">9.99$</div>
                </li>
                <li className="comtcs__item">
                    <img src={xmen} alt="X-Men" className="comics__img" />
                    <div className="comics__descr">X-Men: Days of Future Past</div>
                    <div className="comics__price">NOT AVAILABLE</div>
                </li>
                <li className="comtcs__item">
                    <img src={uw} alt="ultimate war" className="comics__img" />
                    <div className="comics__descr">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comics__price">9.99$</div>
                </li>
                <li className="comtcs__item">
                    <img src={xmen} alt="X-Men" className="comics__img" />
                    <div className="comics__descr">X-Men: Days of Future Past</div>
                    <div className="comics__price">NOT AVAILABLE</div>
                </li>
                <li className="comtcs__item">
                    <img src={uw} alt="ultimate war" className="comics__img" />
                    <div className="comics__descr">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comics__price">9.99$</div>
                </li>
                <li className="comtcs__item">
                    <img src={xmen} alt="X-Men" className="comics__img" />
                    <div className="comics__descr">X-Men: Days of Future Past</div>
                    <div className="comics__price">NOT AVAILABLE</div>
                </li>
            </ul>
            <div className="button button_red button_long">LOAD MORE</div>
        </div>
    )
}

export default ComicsList;