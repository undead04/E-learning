import { IProductType } from "../data/mockProduct";

export const searchProduct = (key:string,products:IProductType[]) => {
    let result = []
    const cleanKey = removeVietnameseTones(key).split(' ').filter(Boolean)
    const keySet = counter(cleanKey)
    for(const product of products) {
        const productSet = counter(removeVietnameseTones(product.name).split(' ').filter(Boolean))
        const count = countDuplication(keySet,productSet)
        console.log(keySet,productSet)
        if(count >= Math.round(cleanKey.length)) {
            result.push({...product,count})
        }
    }
    return result.sort((a,b)=>b.count - a.count)
}
const counter = (strs:string[]) =>{
    const map = new Set<string>()
    for(let str of strs){
        if(map.has(str)) continue
        map.add(str)
    }
    return map
}

const countDuplication = (a: Set<string>, b: Set<string>): number => {
  let count = 0;
  for (const value of Array.from(a)) {
    if (b.has(value)) count++;
  }
  return count;
};


export function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD')                         // Tách ký tự và dấu
    .replace(/[\u0300-\u036f]/g, '')          // Xoá dấu
    .replace(/đ/g, 'd')                       // đ → d
    .replace(/Đ/g, 'D')                       // Đ → D
    .replace(/[^a-zA-Z0-9 ]/g, '')            // Xoá ký tự đặc biệt
    .trim()
    .toLowerCase()

}