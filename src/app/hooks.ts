import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {RootState, AppDispatch, AppState} from '../entities/store';

// Типизированные версии стандартных хуков
export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // было до сохранения в localStorage
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;