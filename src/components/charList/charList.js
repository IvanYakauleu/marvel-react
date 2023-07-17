import './charList.scss'

import abyss from '../../resurses/img/ABYSS.jpg'

const CharList = () => {
    return (
        <div className="charlist">
            <div className="charlist__wrapper">
                <ul className="charlist__items">
                    <li className="charlist__item">
                        <img src={abyss} alt="ABYSS" className="charlist__img" />
                        <div className="charlist__name">ABYSS</div>
                    </li>
                    <li className="charlist__item activ">
                        <img src={abyss} alt="LOKI" className="charlist__img" />
                        <div className="charlist__name">LOKI</div>
                    </li>
                    <li className="charlist__item">
                        <img src={abyss} alt="Adam Warlock" className="charlist__img" />
                        <div className="charlist__name">Adam Warlock</div>
                    </li>
                    <li className="charlist__item">
                        <img src={abyss} alt="Boom Boom" className="charlist__img" />
                        <div className="charlist__name">Boom Boom</div>
                    </li>
                    <li className="charlist__item">
                        <img src={abyss} alt="Calypso" className="charlist__img" />
                        <div className="charlist__name">Calypso</div>
                    </li>
                    <li className="charlist__item">
                        <img src={abyss} alt="Colleen Wing" className="charlist__img" />
                        <div className="charlist__name">Colleen Wing</div>
                    </li>
                    <li className="charlist__item">
                        <img src={abyss} alt="Daimon Hellstrom" className="charlist__img" />
                        <div className="charlist__name">Daimon Hellstrom</div>
                    </li>
                    <li className="charlist__item">
                        <img src={abyss} alt="Damage Control" className="charlist__img" />
                        <div className="charlist__name">Damage Control</div>
                    </li>
                    <li className="charlist__item">
                        <img src={abyss} alt="HULK" className="charlist__img" />
                        <div className="charlist__name">HULK</div>
                    </li>
                </ul>
                <div className="button button_red button_long">LOAD MORE</div>
            </div>
        </div>
    )
};

export default CharList;