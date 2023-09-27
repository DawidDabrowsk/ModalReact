import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Page2 from './pages/Page2'

const App = () => {
	return (
		<>
			<Router>
				<header>
					<nav>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/Page2'>Page2</Link>
							</li>
						</ul>
					</nav>
				</header>
				<section>
					<Routes>
						<Route path='/' Component={Home}></Route>
						<Route path='/Page2' Component={Page2}></Route>
					</Routes>
				</section>
			</Router>
		</>
	)
}

export default App
