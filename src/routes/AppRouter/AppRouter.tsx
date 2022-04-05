import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Layout} from 'antd'

import {useStoreState} from '../../store/hooks/useTypedStore';

import MainPage from '../../pages/MainPage/MainPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import LoginPage from '../../pages/LoginPage/LoginPage';

const AppRouter: React.FC = () => {
	const {isAuth} = useStoreState((state) => state.auth);

	return (
		<Layout.Content>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/news" element={<NewsPage/>}/>
				<Route path="/profile" element={isAuth ? <ProfilePage/> : <Navigate to="/login"/>}/>
				<Route path="/login" element={<LoginPage/>}/>
			</Routes>
		</Layout.Content>
	)
};

export default AppRouter;