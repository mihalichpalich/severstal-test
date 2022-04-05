import {action} from 'easy-peasy';

import {AuthModel} from './types';

const isLoggedIn = localStorage.getItem('testAppLoggedIn') === 'true';

const authStore: AuthModel = {
	isAuth: isLoggedIn,

	setAuth: action((state) => {
		localStorage.setItem('testAppLoggedIn', 'true');
		state.isAuth = true;
	}),
};

export default authStore;