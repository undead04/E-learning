// utils/favorites.ts

import { LOCAL_STORAGE_KEYS } from "./localStorageKeys";

const FAVORITES_KEY = LOCAL_STORAGE_KEYS.FAVORITES;

export const getFavorites = (): number[] => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

export const toggleFavorite = (id: number,currentFavorite:number[]): number[] => {
  const newFavorites = currentFavorite.includes(id)
    ? currentFavorite.filter(fid => fid !== id)
    : [...currentFavorite, id];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  return newFavorites;
};

