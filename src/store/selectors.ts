import { RootState } from './store';

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAdmin = (state: RootState) => state.auth.user?.role === 'admin';
