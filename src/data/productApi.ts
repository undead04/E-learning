import axios from 'axios';
import { IProductType } from '../data/mockProduct';



// Hàm gọi API thật sự (giống như gọi thật từ server)
export const getProduct = (): Promise<IProductType[]> => {
  return axios.get('/api/products').then(res => res.data);
};
