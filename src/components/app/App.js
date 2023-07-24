import { Component } from "react";

import AppHeader from "../appHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import AppBaner from "../appBaner/appBaner";
import ComicsList from "../comicsList/comicsList";
import SingleChar from "../singleChar/singleChar";
import SingleComics from "../singleComics/singleComics";

import decoration from '../../resurses/img/bg-vision.png'


class App extends Component {
	state = {
		selectedChar: null
	}

	onSelectedChar = (id) => {
		this.setState({
			selectedChar: id
		})
	}

	render() {
		return (
			<div className="App">
				<AppHeader/>
				<main>
					<ErrorBoundary>
						<RandomChar/>
					</ErrorBoundary>
					<div className="char__content">
						<ErrorBoundary>
							<CharList onSelectedChar={this.onSelectedChar}/>
						</ErrorBoundary>
						<ErrorBoundary>
							<CharInfo charId={this.state.selectedChar}/>
						</ErrorBoundary>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
