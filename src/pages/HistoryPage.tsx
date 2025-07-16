// File: src/pages/HistoryPage.tsx

import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { IProductType } from '../data/mockProduct';
import { getViews } from '../utils/views';
import PlaceholderProduct from '../components/PlaceholderProduct';
import { getProduct } from '../data/productApi';
import NotFoundProduct from '../components/NotFoundProduct';

function HistoryPage() {
  const [viewedProducts, setViewedProducts] = useState<(IProductType & { timestamp: number })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatDateGroup = (timestamp: number): string => {
    const now = new Date();
    const viewedDate = new Date(timestamp);
    const isToday = now.toDateString() === viewedDate.toDateString();
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = yesterday.toDateString() === viewedDate.toDateString();
    if (isToday) return 'Hôm nay';
    if (isYesterday) return 'Hôm qua';
    return viewedDate.toLocaleDateString('vi-VN');
  };

  const loadViews = async(): Promise<void> => {
    try {
      const views = getViews();
      const mockProducts = await getProduct()
      const viewedList = views
        .map(view => {
          const product = mockProducts.find(p => p.id === view.id);
          if (product) {
            return {
              ...product,
              timestamp: view.timestamp,
            };
          }
          return null;
        })
        .filter(Boolean) as (IProductType & { timestamp: number })[];

      viewedList.sort((a, b) => b.timestamp - a.timestamp);
      setViewedProducts(viewedList);
    } catch (error) {
      console.error('Error loading viewed products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadViews();
  }, []);

  const groupedByDate = viewedProducts.reduce((groups, product) => {
    const dateKey = formatDateGroup(product.timestamp);
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(product);
    return groups;
  }, {} as Record<string, (IProductType & { timestamp: number })[]>);

  return (
    <section className='py-4'>
      <div className="container">
      <h2 className='fw-bold mb-4'>Lịch sử xem sản phẩm</h2>
      {isLoading ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {Array.from({ length: 6 }, (_, index) => (
            <div className="col" key={index}>
              <PlaceholderProduct />
            </div>
          ))}
        </div>
      ) : Object.entries(groupedByDate).length > 0 ? (
        Object.entries(groupedByDate).map(([date, products]) => (
          <div key={date} className="mb-4">
            <h4 className="mb-3">{date}</h4>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {products.map(product => (
                <div className="col" key={product.id}>
                  <ProductCard
                    title={product.name}
                    description={product.description}
                    imageUrl={product.image}
                    price={product.price}
                    longDescription={product.longDescription || ''}
                    rating={product.rating || 0}
                    id={product.id}
                    onHistorysChange={loadViews}
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <NotFoundProduct message='Rất tiếc .Chưa có lịch sử xem sản phẩm nào.'/>
      )}
    </div>
    </section>
  );
}

export default HistoryPage;