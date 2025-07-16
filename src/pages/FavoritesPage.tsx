import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { IProductType } from '../data/mockProduct';
import PlaceholderProduct from '../components/PlaceholderProduct';
import NotFoundProduct from '../components/NotFoundProduct';
import { getProduct } from '../data/productApi';

const getFavoritesFromStorage = (): number[] => {
  const data = localStorage.getItem('favorites');
  return data ? JSON.parse(data) : [];
};

function FavoritesPage() {
  const [favorites, setFavorites] = useState<IProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadFavorites = async():Promise<void> => {
    try {
      const favoriteIds = getFavoritesFromStorage();
      const mockProducts =  await getProduct()
      const favoriteProducts = mockProducts.filter(product => favoriteIds.includes(product.id));
      setFavorites(favoriteProducts);
    }catch (error) {
      console.error('Error loading favorites:', error);
    }
    finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <section className='py-4'>
      <div className="container">
      <h2 className='pb-4 fw-bold'>Sản phẩm yêu thích</h2>
      {
        isLoading ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {Array.from({ length: 6 }, (_, index) => (
              <div className="col" key={index}>
                <PlaceholderProduct />
              </div>
            ))}
          </div>
        ):favorites.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {favorites.map((product) => (
              <div className="col" key={product.id}>
                <ProductCard
                  title={product.name}
                  description={product.description}
                  imageUrl={product.image}
                  price={product.price}
                  longDescription={product.longDescription || ''}
                  rating={product.rating || 0}
                  id={product.id}
                 
                />
              </div>
            ))}
          </div>
        ) : (
          <NotFoundProduct message="Rất tiếc, Bạn chưa có bất kỳ sản phẩm yêu thích nào." />
        )
      }
    </div>
    </section>
  );
}

export default FavoritesPage; 