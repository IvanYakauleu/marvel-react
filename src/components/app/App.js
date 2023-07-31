import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { lazy, Suspense } from "react";

import AppHeader from "../appHeader/appHeader";
import Spinner from "../spinner/spinner";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/mainPage'));
const SingleComicsPage = lazy(() => import('../pages/singleComicsPage'));
const ComicsPage = lazy(() => import('../pages/comicsPage'));
const SingleCharPage = lazy(() => import('../pages/singleCharPage'));


const App = () => {

	return (
		<Router>
			<div className="App">
				<AppHeader/>
				<main>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path="/" element={<MainPage/>}/>
							<Route path="/comics" element={<ComicsPage/>}/>
							<Route path="/comics/:comicId" element={<SingleComicsPage/>}/>
							<Route path="/characters/:charId" element={<SingleCharPage/>}/>
							<Route path="*" element={<Page404/>}/>
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	);
}

export default App;
