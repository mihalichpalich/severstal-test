import React from 'react';
import {Card} from 'antd';

const ProfilePage: React.FC = () => {
	return (
		<Card title="Вася Пупкин">
			<p>Друзей: 118</p>
			<p>Постов: 32</p>
			<p>Лайков: 586</p>
		</Card>
	)
};

export default ProfilePage;