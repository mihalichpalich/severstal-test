import {createTypedHooks} from 'easy-peasy';

import {RootModel} from '../models/root/types';

export const {useStoreActions, useStoreState} = createTypedHooks<RootModel>();

