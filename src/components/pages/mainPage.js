import { useState } from "react";

import RandomChar from "../randomChar/randomChar";
import FormGetChar from "../form/form";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import decoration from '../../resurses/img/bg-vision.png';



const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

	const onSelectedChar = (id) => {
		setChar(id)
	}

    return (
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onSelectedChar={onSelectedChar} selectedChar={selectedChar}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </div>
        </>
    )
}

export default MainPage;