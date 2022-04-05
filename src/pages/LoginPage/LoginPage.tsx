import React, {useState} from 'react';
import {Form, Input, Button, Typography} from 'antd';
import {useNavigate} from 'react-router-dom';

import './styles.scss';
import {FormValues} from './types';
import {useStoreActions} from '../../store/hooks/useTypedStore';

const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const {setAuth} = useStoreActions((actions) => actions.auth);
	const [submitError, setSubmitError] = useState(false);

	const onFinish = (values: FormValues) => {
		if (values.username !== 'Admin' && values.password !== '12345') {
			setSubmitError(true);
		} else {
			setSubmitError(false);
			setAuth();
			navigate('/profile');
		}
	};

	return (
		<div className="login-page">
			<Form
				name="basic"
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item
					label="Логин"
					name="username"
					rules={[
						{
							required: true,
							message: 'Не введен логин!',
						},
					]}
				>
					<Input/>
				</Form.Item>
				<Form.Item
					label="Пароль"
					name="password"
					rules={[
						{
							required: true,
							message: 'Не введен пароль!',
						},
					]}
				>
					<Input.Password />
				</Form.Item>
				{
					submitError
						? (
							<Form.Item wrapperCol={{offset: 2}}>
								<Typography.Text type="danger">Имя пользователя или пароль введены не верно</Typography.Text>
							</Form.Item>
						)
						: <></>
				}
				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit" className="login-page__button">
						Войти
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
};

export default LoginPage;