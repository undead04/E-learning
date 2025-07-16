import { IReview } from "./mockReview";
import axios from 'axios';


// Giả lập lấy danh sách sản phẩm 
export const getReview = (): Promise<IReview[]> => {
 return axios.get('/api/reviews').then(res=>res.data)
};
