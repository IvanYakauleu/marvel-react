import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=204e8daa4fa4e2b5a23c1784ae822151';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter)
    }

    const getCharacter = async (id) => {
       const res = await request(`${_apiBase}characters/${id}?&${_apiKey}`);
       return _transformCharacter(res.data.results[0]);
    }

    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`)
        return _transformComics(res.data.results[0])
    }

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`)
        return res.data.results.map(_transformComics)
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            name: comics.title,
            description: comics.description,
            page: comics.pageCount,
            language: comics.textObjects[0]?.language,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            price: comics.prices[0].price
        }
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? char.description : "There is no description for this character",
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic, getCharacterByName}
}


export default useMarvelService;


// fetch('https://gateway.marvel.com:443/v1/public/characters?name=HULK&apikey=204e8daa4fa4e2b5a23c1784ae822151')
//     .then(res => res.json())
//     .then(res => console.log(res.data.results))

