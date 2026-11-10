import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '..';

export const setGlobalState: () => AppDispatch = useDispatch;
export const getGlobalState: TypedUseSelectorHook<RootState> = useSelector;
