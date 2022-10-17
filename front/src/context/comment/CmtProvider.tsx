import { useReducer } from 'react';
import { ICmtState } from '../../interface';
import { CmtContext } from '../comment/CmtContext';
import { cmtReducer } from './cmtReducer';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: ICmtState = {
	commentByPost: [],
	loading: false,
	errorMessage: null,
};

export const CmtProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(cmtReducer, INITIAL_STATE);

	const login = async () => {};

	return (
		<CmtContext.Provider value={{ state, login }}>
			{children}
		</CmtContext.Provider>
	);
};
