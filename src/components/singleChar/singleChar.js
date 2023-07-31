import './singleChar.scss';

import { useState, useEffect, lazy } from 'react';
import { useParams } from 'react-router-dom';
import useMarvelService from '../../services/marvelService';
import Spinner from '../spinner/spinner';



const Page404 = lazy(() => import('../pages/404'))


const SingleChar = () => {
    const [char, setChar] = useState({})
    const { error, loading, getCharacter, clearError } = useMarvelService();

    const {charId} = useParams();

    useEffect(() => {
        clearError();

        getCharacter(charId)
            .then(res => setChar(res))
    }, [charId])

    const errorMessage = error ? <Page404 /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;
    
    return (
        <>
            {errorMessage}
            {spinner}
            {content}            
        </>
    )

}

const View = (props) => {
    const {thumbnail, name, description} = props.char;


    return (
        <div className="singleChar">
            <img src={thumbnail} alt={name} className="singleChar__img" />
            <div className="singleChar__wrapper">
                <div className="singleChar__name">{name}</div>
                <div className="singleChar__descr">{description}</div>
            </div>
        </div>
    )
}


export default SingleChar;