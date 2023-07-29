import Spinner from '../spinner/spinner'
import {Page404} from '../pages';
import { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import useMarvelService from '../../services/marvelService';

import './singleComics.scss'

const SingleComics = () => {
    const [comic, setComic] = useState({});

    const { error, loading, getComic, clearError } = useMarvelService();

    const {comicId} = useParams();

    useEffect(() => {
        clearError();
        getComic(comicId)
            .then(res => setComic(res))
    }, [comicId])
    
    const errorMessage = error ? <Page404/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;
    
    return (
        <>
            {errorMessage}
            {spinner}
            {content}            
        </>
    )
}

const View = (props) => {
    const {thumbnail, name, description, page, language, price} = props.comic;

    return (
        <div className='singleComics'>
            <img src={thumbnail} alt={name} className="singleComics__img" />
            <div className="singleComics__wrapper">
                <div className="singleComics__name">{name}</div>
                <div className="singleComics__descr">{description ? description : 'There is no description for this comic'}</div>
                <div className="singleComics__pages">{page === 1 ? page + ' page' : page + ' pages'}</div>
                <div className="singleComics__language">{language ? 'Language: ' + language : 'language: information not found'}</div>
                <div className="singleComics__price">{price ? `price: ` + price + '$' : 'not available'}</div>
            </div>
            <Link to={'/comics'} className="singleComics__back">Back to all</Link>
        </div>
    )
}


export default SingleComics;