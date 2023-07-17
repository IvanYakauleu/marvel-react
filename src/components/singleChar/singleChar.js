import loki from '../../resurses/img/loki.png'

import './singleChar.scss';

const SingleChar = () => {
    return (
        <div className="singleChar">
            <img src={loki} alt="loki" className="singleChar__img" />
            <div className="singleChar__wrapper">
                <div className="singleChar__name">LOKI</div>
                <div className="singleChar__descr">In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</div>
            </div>
        </div>
    )
}


export default SingleChar;