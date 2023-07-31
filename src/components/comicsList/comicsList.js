import './comicsList.scss'

import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/marvelService';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner';


const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [offset, setOffset] = useState(210);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setOffset(offset => offset + 9);
        setComicsEnded(ended);
    }

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <CSSTransition timeout={600} key={i} classNames={'comics__item'}>
                    <li className="comics__item">
                        <Link to={`/comics/${item.id}`}>
                                <img src={item.thumbnail} alt="ultimate war" className="comics__img" />
                                <div className="comics__descr">{item.name}</div>
                                <div className="comics__price">{item.price ? item.price + '$' : 'not available'}</div>
                        </Link>
                    </li>
                </CSSTransition>
            )
        })

        return (
            <TransitionGroup className='comics__wrapper'>
                {items}
            </TransitionGroup>
        )
    }

    const items = renderItems(comicsList)

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}                  
            <div 
                className="button button_red button_long"
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                    LOAD MORE
            </div>
        </div>
    )
}

export default ComicsList;