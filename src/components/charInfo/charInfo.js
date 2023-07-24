import './charInfo.scss'
import { Component } from 'react';
import MarvelService from '../../services/marvelService';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner';
import Skeleton from '../skeleton/skeleton';


class CharInfo extends Component{
    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
         if (this.props.charId !== prevProps.charId) {
            this.updateChar();
         }
    }

    updateChar = (id) => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const {char, loading, error} = this.state

        const skeleton = char || loading || error ? null : <Skeleton/>
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return (
            <div className="charinfo">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
};

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    let imgStyle = {objectFit: 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {objectFit: 'contain'}
    }
    return (
        <div className='charinfo__item'>
            <div className="charinfo__wrapper">
                <img src={thumbnail} alt={name} className="charinfo__img" style={imgStyle}/>
                <div className='charinfo__btns'>
                    <div className="charinfo__name">{name}</div>
                    <a href={homepage} className="button button_red button_main">HOMEPAGE</a>
                    <a href={wiki} className="button button_grey button_main">WIKI</a>
                </div>
            </div>

            <div className="charinfo__descr">{description}</div>

            <div className="charinfo__text">Comics:</div>
            <ul className="charinfo__list">
                {comics.length > 0 ? null : 'There is no comics with this character'}

                {
                    comics.map((item, i) => {
                        if (i > 9) return;
                        return (
                            <li className="charinfo__list-item" key={i}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default CharInfo;