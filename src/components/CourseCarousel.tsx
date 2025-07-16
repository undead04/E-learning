import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import { chunkArray } from '../utils/chunkArray';
import ProductCard from './ProductCard';
import { IProductType } from '../data/mockProduct';
import PlaceholderProduct from './PlaceholderProduct';
import { getProduct } from '../data/productApi';
import { error } from 'console';
function CourseCarousel() {

  const [itemsPerSlide, setItemsPerSlide] = useState(3); // default: desktop
  const [products, setProducts] = useState<IProductType[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
  const handleResize = () => {
    setItemsPerSlide(
      window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3
    );
  };

  const fetchProducts =  () => {
      getProduct().then(res=>{
        setProducts(res)
      }).catch(err=>{
        console.error(err)
      }).finally(()=>{
        setIsLoadingProducts(false)
      })
  };

  handleResize(); // Run on first render
  window.addEventListener('resize', handleResize);
  fetchProducts(); // Gọi API

  return () => window.removeEventListener('resize', handleResize); // Cleanup
}, []);

  // Chia mảng sản phẩm thành các nhóm nhỏ theo itemsPerSlide
  const groupedCourses = chunkArray(products, itemsPerSlide);
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="mb-4 text-center fw-bold">Khoá học nổi bật</h3>
        <Carousel indicators={false} interval={5000}>
          {
           isLoadingProducts ? (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {Array.from({ length: itemsPerSlide }, (_, index) => (
                <div className="col mb-3" key={index}>
                  <PlaceholderProduct />
                </div>
              ))}
          </div>
           ):(
             groupedCourses.map((group, idx) => (
              <Carousel.Item key={idx}>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {group.map(course => (
                  <ProductCard title={course.name}
                  description={course.description}
                  imageUrl={course.image}
                  price={course.price}
                  longDescription={course.longDescription || ''}
                  rating={course.rating || 0}
                  isHot={true}
                  id={course.id}
                  />
                ))}
              </div>
            </Carousel.Item>
            ))
           )
          }
        </Carousel>
      </div>
    </section>
  );
}
export default CourseCarousel; 