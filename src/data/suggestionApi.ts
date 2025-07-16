import axios from "axios";
import { IProductType } from "./mockProduct";

// Hàm gọi API
export const getSuggestions = (userId: string): Promise<IProductType[]> => {
  return axios.get(`/suggestion/${userId}`).then((res) => res.data);
};
