// utils/views.ts

import { LOCAL_STORAGE_KEYS } from "./localStorageKeys";
const VIEWS_KEY = LOCAL_STORAGE_KEYS.VIEWS;
interface View {
  id: number;
  timestamp: number;
}

export const getViews = (): View[] => {
  const data = localStorage.getItem(VIEWS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addView = (id: number, currentViews: View[]): View[] => {
  let views = currentViews.filter(vid => vid.id !== id);
  views.unshift({ id, timestamp: Date.now() });
  if (views.length > 100) views = views.slice(0, 100);
  localStorage.setItem(VIEWS_KEY, JSON.stringify(views));
  return views;
};
