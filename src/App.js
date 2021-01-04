import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Component/Detail/Detail";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import NotFound from "./Component/NotFound/NotFound";

export const SearchContext = createContext();

const App = () => {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div>
			<Router>
				<SearchContext.Provider value={[searchTerm, setSearchTerm]}>
					<Header></Header>

					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>

						<Route path="/posts/:id">
							<Detail></Detail>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
				</SearchContext.Provider>
			</Router>
		</div>
	);
};

export default App;
