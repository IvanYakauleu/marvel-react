import './charList.scss'

import { Component } from 'react';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner';
import MarvelService from '../../services/marvelService';


class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }
    
    renderItems(arr) {
        const items = arr.map(item => {
            let imgStyle = {objectFit: 'cover'}
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {objectFit: 'unset'}
            }

            return (
                <li className="charlist__item"
                    key={item.id}
                    onClick={() => this.props.onSelectedChar(item.id)}>
                    <img src={item.thumbnail} alt={item.name} className="charlist__img" style={imgStyle}/>
                    <div className="charlist__name">{item.name}</div>
                </li>
            )
        })

        return (
            <ul className="charlist__items">
                {items}
            </ul>
        )
    }

    render() {
        const {charList, loading, error, offset, charEnded} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? this.renderItems(charList) : null;

        return (
            <div className="charlist">
                <div className="charlist__wrapper">
                    {errorMessage}
                    {spinner}
                    {content}                    
                    <div 
                        className="button button_red button_long"
                        style={{'display': charEnded ? 'none' : 'block'}}
                        onClick={() => this.onRequest(offset)}>
                            LOAD MORE
                        </div>
                </div>
            </div>
        )
    }

};

export default CharList;