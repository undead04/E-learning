import { IProductType } from "../data/mockProduct";

// Hàm tìm kiếm chính
export const searchProduct = (key: string, products: IProductType[]) => {
  const keywords = extractKeywords(key);
  const keySet = toKeywordSet(keywords);
  const result = [];

  for (const product of products) {
    const productWords = extractKeywords(product.name);
    const productSet = toKeywordSet(productWords);
    const count = countDuplication(keySet, productSet);

    // Nếu số từ trùng lớn hơn một ngưỡng (ví dụ >= 50% từ khóa), thì thêm vào kết quả
    if(count >= 1){
      result.push({...product,count});
    }
  }

  return result
  .sort((a, b) => b.count - a.count)
};

// Tách từ không dấu từ chuỗi
export function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // bỏ dấu
    .replace(/đ/g, "d").replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9 ]/g, "") // bỏ ký tự đặc biệt
    .trim()
    .toLowerCase();
}

// Tách chuỗi thành mảng từ khóa sạch
const extractKeywords = (str: string): string[] => {
  return removeVietnameseTones(str).split(" ").filter(Boolean);
};

// Chuyển mảng từ thành Set để so khớp không trùng lặp
const toKeywordSet = (words: string[]): Set<string> => {
  return new Set(words);
};

// Đếm số phần tử chung giữa 2 Set
const countDuplication = (a: Set<string>, b: Set<string>): number => {
  let count = 0;
  for (const word of Array.from(a)) {
    if (b.has(word)) count++;
  }
  return count;
};
