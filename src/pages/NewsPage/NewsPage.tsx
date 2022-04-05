import React from 'react';
import {Card} from 'antd';

import news from './news.json';
import './styles.scss';

const NewsPage: React.FC = () => {
	return (
		<div className="news">
			{
				news.map((item) => (
					<Card key={item.id} title={item.title}>
						<p>{item.text}</p>
					</Card>
				))
			}
		</div>
	)
}

export default NewsPage;