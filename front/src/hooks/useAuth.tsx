import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';

export const useAuth = () => {
	return useContext(AuthContext);
};
