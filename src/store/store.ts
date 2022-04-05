import {createStore} from 'easy-peasy';

import rootStore from './models/root/root';

const AppStore = createStore(rootStore);

export default AppStore;