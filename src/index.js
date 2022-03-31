// Library
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Redux store
import { store, persistedStore } from './store';

// Components
import Home from './pages/Home';
import AboutApp from './pages/About/AboutApp';
import AboutAuthor from './pages/About/AboutAuthor';
import PageNotFound from './pages/PageNotFound';

// Styles
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistedStore}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about/about-app' element={<AboutApp />} />
						<Route path='/about/about-author' element={<AboutAuthor />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
