import React, { useState } from 'react';
import ModalComponent from './ModalProduct'; // Assuming ModalComponent is in a separate file
import styles from '../styles/ProductCard.module.css'; // Import as a styles object
import { addView, getViews } from '../utils/views';
import { getFavorites, toggleFavorite } from '../utils/favorites';


interface ProductCardProps {
  title: string;
  price: number;
  rating: number;
  longDescription: string;
  description: string;
  imageUrl: string;
  id: number;
  isHot?: boolean;
  onHistorysChange?:()=>void
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  rating,
  longDescription,
  description,
  imageUrl,
  isHot,
  id,
  onHistorysChange
}) => {
  const [show, setShow] = useState(false);
  const [isFavorite, setIsFavorite] = useState(getFavorites().includes(id));
  const handleViewDetail = (): void => {
    setShow(true);
    const views = getViews();
    addView(id, views);
  };
  const handleToggleFavorite = (): void => {
    // Logic to toggle favorite status
    const currentFavorites = getFavorites();
    const newFavorites = toggleFavorite(id, currentFavorites);
    setIsFavorite(newFavorites.includes(id));
  };

  return (
    <>
      <ModalComponent
        show={show}
        
        onHide={() => setShow(false)}
        title={title}
        price={price}
        rating={rating}
        longDescription={longDescription}
        description={description}
        imageUrl={imageUrl}
      />
      <div className={styles.cardContainer}>
        <div
          className={`card shadow-sm h-100 border-0 ${styles.cardShadowHover}`}
        >
          <div className={styles.imageContainer}>
            <img
              src={imageUrl}
              className={`card-img-top ${styles.cardImage}`}
              alt={title}
            />
            {isHot && <span className={styles.hotBadge}>Nổi bật</span>}
            <span
              className={`${styles.favoriteIcon} ${isFavorite ? styles.isFavorite : ''}`}
              title={isFavorite ? 'Bỏ yêu thích' : 'Yêu thích'}
              onClick={e => {
                e.stopPropagation();
                handleToggleFavorite();

              }}
            >
              <i className="fa-solid fa-heart"></i>
            </span>
          </div>
          <div className="card-body d-flex flex-column px-4 py-3">
            <h5 className={`card-title fw-bold mb-2 ${styles.cardTitle}`}>
              {title}
            </h5>
            <div className={`d-flex align-items-center mb-2 ${styles.badgeGroup}`}>
              <span className={`badge ${styles.ratingBadge}`}>
                {rating > 0 ? `⭐ ${rating}/5` : 'Chưa có đánh giá'}
              </span>
              <span className={`badge bg-light text-dark ${styles.priceBadge}`}>
                {price.toLocaleString()}₫
              </span>
            </div>
            <p className={`card-text text-muted mb-3 ${styles.cardDescription}`}>
              {description}
            </p>
            <button onClick={()=>{
              handleViewDetail();
              if (onHistorysChange) {
                onHistorysChange();
              }
            }} className={`btn text-center border-0 ${styles.detailButton}`}>
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;