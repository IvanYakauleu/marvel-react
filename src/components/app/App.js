import AppHeader from "../appHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";
import Skeleton from "../skeleton/skeleton";
import CharInfo from "../charInfo/charInfo";
import AppBaner from "../appBaner/appBaner";
import ComicsList from "../comicsList/comicsList";
import SingleChar from "../singleChar/singleChar";
import SingleComics from "../singleComics/singleComics";

import decoration from '../../resurses/img/bg-vision.png'


function App() {
	return (
		<div className="App">
			<AppHeader/>
			<main>
				<RandomChar/>
				<div className="char__content">
					<CharList/>
					<CharInfo/>
				</div>
				<img src={decoration} alt="vision" className="bg-decoration" />
			</main>
		</div>
	);
}

export default App;
