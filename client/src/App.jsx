import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './Components/General/Header';
import Footer from './Components/General/Footer';
import Loader from './Components/General/Loader';
import ScrollToTop from './Components/General/Forceup';

const Home = React.lazy(() => import('./Pages/Home'));
const Login = React.lazy(() => import('./Pages/Login'));
const Signup = React.lazy(() => import('./Pages/Signup'));
const Learn = React.lazy(() => import('./Pages/Learn'));
const Profile = React.lazy(() => import('./Pages/Profile'));
const Register = React.lazy(() => import('./Components/Modules/Register'));
const Wrapper1 = React.lazy(() => import('./Learn/ModuleOne/Wrapper'));
const Wrapper2 = React.lazy(() => import('./Learn/ModuleTwo/Wrapper'));
const Tools = React.lazy(() => import('./Pages/Tools'));
// const Editor = React.lazy(() => import('./Pages/Editor'));

const App = () => {
	return (
		<HashRouter>
			<div>
				<Toaster />
			</div>
			<ScrollToTop />
			<div className='fixed top-0 left-0 right-0 w-full z-10 bg-primary-900'>
				<Header />
			</div>
			<div className='pt-16 mx-3'>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/login'
							element={<Login />}
						/>
						<Route
							path='/signup'
							element={<Signup />}
						/>
						<Route
							path='/learn'
							element={<Learn />}
						/>
						<Route
							path='/learn/register/:moduleID'
							element={<Register />}
						/>
						<Route
							path='/profile'
							element={<Profile />}
						/>
						<Route
							path='/learn/html-css/:lessonID'
							element={<Wrapper1 />}
						/>
						<Route
							path='/learn/python/:lessonID'
							element={<Wrapper2 />}
						/>
						<Route
							path='/tools'
							element={<Tools />}
						/>
						{/* <Route path='/code-editor' element={<Editor />} /> */}
					</Routes>
				</Suspense>
			</div>
			<div className='mt-72'>
				<Footer />
			</div>
		</HashRouter>
	);
};

export default App;
