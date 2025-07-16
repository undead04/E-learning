import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from '../styles/ModalProduct.module.css';

type ModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  imageUrl: string;
  price: number;
  longDescription: string;
  rating: number;
  description: string;
};

function ModalProduct({
  show,
  onHide,
  title,
  imageUrl,
  price,
  longDescription,
  rating,
  description,
}: ModalProps) {
  const formattedImageUrl = imageUrl.startsWith('http') ? imageUrl : `/${imageUrl}`;

  return (
    <Modal
      size='xl'
      show={show}
      centered
      onHide={onHide}
      animation={true}
      contentClassName="border-0 shadow-lg"
    >
      <Modal.Header closeButton className="border-0 pb-0" />
      
      <Modal.Body className="py-4 px-4">
        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-3 mb-lg-0">
            <img
              src={formattedImageUrl}
              alt={title}
              className={styles.productImage}
            />
          </div>

          <div className="col-lg-7">
            <h4 className={`fw-bold mb-2 ${styles.productTitle}`}>{title}</h4>
            
            <div className="mb-2">
              <span className={`badge ${styles.ratingBadge}`}>
                {rating > 0 ? `⭐ ${rating}/5` : 'Chưa có đánh giá'}
              </span>
              <span className={`badge bg-light text-dark ${styles.priceBadge}`}>
                {price.toLocaleString()}₫
              </span>
            </div>

            <p className={`text-muted mb-3 ${styles.descriptionText}`}>
              {description}
            </p>

            {longDescription && (
              <div className={`mb-3 ${styles.longDescriptionContainer}`}>
                <h6 className={`fw-bold mb-2 ${styles.longDescriptionTitle}`}>
                  Chi tiết khoá học
                </h6>
                <div
                  className={styles.longDescriptionContent}
                  dangerouslySetInnerHTML={{ __html: longDescription }}
                />
              </div>
            )}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-0 justify-content-center">
        <Button
          variant="secondary"
          className={`border-0 px-4 py-2 ${styles.closeButton}`}
          onClick={onHide}
        >
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalProduct;
