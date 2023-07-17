import './randomChar.scss'
import thor from '../../resurses/img/Thumbnail.png'
import mjolnir from '../../resurses/img/mjolnir.png'
import shield from '../../resurses/img/shield.png'

const RandomChar = () => {
    return (
        <div className="randomchar">
            <div className="randomchar__block">
                <img src={thor} alt="thor" className="randomchar__block-img" />
                <div className="randomchar__block-info">
                    <div className="randomchar__name">THOR</div>
                    <div className="randomchar__descr">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</div>
                    <div className="randomchar__btns">
                        <div className="randomchar__btn">
                            <a href="#" className="button button_red button_main">HOMEPAGE</a>
                        </div>
                        <div className="randomchar__btn">
                            <a href="#" className="button button_grey button_main">WIKI</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="randomchar__static">
                <div className="randomchar__static-info">Random character for today!<br />Do you want to get to know him better?</div>
                <div className="randomchar__static-random">Or choose another one</div>
                <div className="button button_red button_main">TRY IT</div>
                <img src={mjolnir} alt="mjolnir" className="randomchar__mjolner" />
                <img src={shield} alt="shield" className="randomchar__shield" />
            </div>
        </div>
    )
}

export default RandomChar;