import {RootModel} from './types';
import authStore from '../auth/auth';

const rootStore: RootModel = {
	auth: authStore
};

export default rootStore;