// src/mocks/apiMock.ts
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockProducts } from './mockProduct';
import { mockReviews } from './mockReview';
import { getViews } from '../utils/views';
import { getFavorites } from '../utils/favorites';

const mock = new MockAdapter(axios, { delayResponse: 500 });

mock.onGet('/api/products').reply(200, mockProducts);
mock.onGet('/api/reviews').reply(200, mockReviews);
// Tạo endpoint mock: /suggestion/:userId
mock.onGet(/\/suggestion\/.+/).reply((config) => {
  if (Math.random() < 0.2) {
    return [500, { message: "API error" }];
  }

  // Giả lập lấy userId từ URL
  const userIdMatch = config.url?.match(/\/suggestion\/(\.+)/);
  const userId = userIdMatch ? userIdMatch[1] : "0";

  const viewedProductIds = getViews().map((view) => view.id);
  const favorites = getFavorites();

  const map = new Map<number, number>();
  [...viewedProductIds, ...favorites].forEach((id) => {
    map.set(id, (map.get(id) || 0) + 1);
  });

  const suggestions = mockProducts
    .filter((product) => map.has(product.id))
    .sort((a, b) => (map.get(b.id) || 0) - (map.get(a.id) || 0))
    .slice(0, 6);

  return [200, suggestions];
});
export default mock;
