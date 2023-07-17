import './charInfo.scss'

import loki from '../../resurses/img/loki.png'

const CharInfo = () => {
    return (
        <div className="charinfo">
            <div className="charinfo__wrapper">
                <img src={loki} alt="loki" className="charinfo__img" />
                <div>
                    <div className="charinfo__name">Loki</div>
                    <div className="button button_red button_main">HOMEPAGE</div>
                    <div className="button button_grey button_main">WIKI</div>
                </div>
            </div>

            <div className="charinfo__descr">In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</div>

            <div className="charinfo__text">Comics:</div>
            <ul className="charinfo__list">
                <li className="charinfo__list-item">All-Winners Squad: Band of Heroes (2011) #3</li>
                <li className="charinfo__list-item">Alpha Flight (1983) #50</li>
                <li className="charinfo__list-item">Amazing Spider-Man (1999) #503</li>
                <li className="charinfo__list-item">Amazing Spider-Man (1999) #504</li>
                <li className="charinfo__list-item">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
                <li className="charinfo__list-item">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
                <li className="charinfo__list-item">Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
                <li className="charinfo__list-item">Vengeance (2011) #4</li>
                <li className="charinfo__list-item">Avengers (1963) #1</li>
                <li className="charinfo__list-item">Avengers (1996) #1</li>
            </ul>
        </div>
    )
};


export default CharInfo;