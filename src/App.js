import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<NavBar />
					<Routes>
						<Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general" />} />
						<Route exact path="/business" element={<News key="business" pageSize={5} country="in" category="business" />} />
						<Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />} />
						<Route exact path="/general" element={<News key="general" pageSize={5} country="in" category="general" />} />
						<Route exact path="/health" element={<News key="health" pageSize={5} country="in" category="health" />} />
						<Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science" />} />
						<Route exact key="sports" path="/sports" element={<News pageSize={5} country="in" category="sports" />} />
						<Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology" />} />
					</Routes>
				</Router>
			</div>
		);
	}
}

// API KEY
// 8e332278873f4c6284c548a95e14289c


// key="business"
// key="entertainment"
// key="general"
// key="health"
// key="science"
// key="sports"
// key="technology"