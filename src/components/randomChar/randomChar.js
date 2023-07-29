import { useState, useEffect } from 'react'

import useMarvelService from '../../services/marvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './randomChar.scss';
import mjolnir from '../../resurses/img/mjolnir.png';
import shield from '../../resurses/img/shield.png';

const RandomChar = () => {
    const [char, setChar] = useState({});

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId)
        }
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        getCharacter(id)
            .then(onCharLoaded)
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;

    return (
        <div className="randomchar">
            {errorMessage}
            {spinner}
            {content}

            <div className="randomchar__static">
                <div className="randomchar__static-info">Random character for today!<br />Do you want to get to know him better?</div>
                <div className="randomchar__static-random">Or choose another one</div>
                <div tabIndex={0} className="button button_red button_main" onClick={updateChar}>TRY IT</div>
                <img src={mjolnir} alt="mjolnir" className="randomchar__mjolner" />
                <img src={shield} alt="shield" className="randomchar__shield" />
            </div>
        </div>
    )
}

const View = ({char}) => {
    const {name, thumbnail, description, homepage, wiki} = char;
    
    const img = (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") ? <img src={thumbnail} alt={name} className="randomchar__block-img" style={{objectFit:"contain"}}/> : <img src={thumbnail} alt={name} className="randomchar__block-img" />;

    return (
        <div className="randomchar__block">
            {img}
            <div className="randomchar__block-info">
            <div className="randomchar__name">{name}</div>
                <div className="randomchar__descr">{description}</div>
                <div className="randomchar__btns">
                    <div className="randomchar__btn">
                        <a href={homepage} className="button button_red button_main">HOMEPAGE</a>
                    </div>
                    <div className="randomchar__btn">
                        <a href={wiki} className="button button_grey button_main">WIKI</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;