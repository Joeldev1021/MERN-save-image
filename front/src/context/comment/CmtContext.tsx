import { createContext } from 'react';
import { ICmtState } from '../../interface';

export type CmtContextProps = {
	state: ICmtState;
	login: () => void;
};

export const CmtContext = createContext<CmtContextProps>({} as CmtContextProps);
