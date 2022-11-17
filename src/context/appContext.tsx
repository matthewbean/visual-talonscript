import { createContext } from 'react';
import { StateTypes } from '../types/StateTypes'

const AppContext = createContext<StateTypes>({} as StateTypes);

export default AppContext;