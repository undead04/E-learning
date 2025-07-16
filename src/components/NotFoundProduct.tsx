// File: src/components/NotFoundProduct.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const NotFoundProduct: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div className="text-center align-content-center py-5 text-muted" style={{ minHeight: '400px' }}>
      <FontAwesomeIcon icon={faBoxOpen} size="2xl" />
      <h5 className="fw-bold py-1">Không tìm thấy sản phẩm</h5>
      <p>{message || 'Rất tiếc, chúng tôi không thể tìm thấy bất kỳ sản phẩm nào phù hợp.'}</p>
    </div>
  );
};

export default NotFoundProduct;
