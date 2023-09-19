import { useDispatch } from 'react-redux';
import { AppDispatch } from './yourStoreFile'; // Replace with the path to your store file

export const useAppDispatch = () => useDispatch<AppDispatch>();
