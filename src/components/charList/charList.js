import './charList.scss'

import { useState, useEffect } from 'react';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner';
import useMarvelService from '../../services/marvelService';


const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [offset, setOffset] = useState(210);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [charEnded, setCharEnded] = useState(false);
    

    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }


    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setOffset(offset => offset + 9);
        setCharEnded(ended);
    }
    
    function renderItems(arr) {
        const items = arr.map(item => {
            let imgStyle = {objectFit: 'cover'}
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {objectFit: 'unset'}
            }

            let clazz = "charlist__item";
            if (item.id === props.selectedChar) {
                clazz += " activ"
            }

            return (
                <li className={clazz}
                    tabIndex={0}
                    key={item.id}
                    onClick={() => props.onSelectedChar(item.id)}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onSelectedChar(item.id)
                        }
                    }}>
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

    const items = renderItems(charList)

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className="charlist">
            <div className="charlist__wrapper">
                {errorMessage}
                {spinner}
                {items}                  
                <div 
                    className="button button_red button_long"
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => onRequest(offset)}>
                        LOAD MORE
                    </div>
            </div>
        </div>
    )
};

export default CharList;