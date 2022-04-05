import React from 'react';
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';

import './styles.scss';

const AppHeader: React.FC = () => {
	return (
		<Layout.Header>
			<Menu theme="dark" mode="horizontal">
				<Menu.Item key={1}>
					<Link to="/" className="app-header__link">На главную</Link>
				</Menu.Item>
				<Menu.Item key={2}>
					<Link to="/news" className="app-header__link">Новости</Link>
				</Menu.Item>
				<Menu.Item key={3}>
					<Link to="/profile" className="app-header__link">Профиль</Link>
				</Menu.Item>
			</Menu>
		</Layout.Header>
	)
};

export default AppHeader;