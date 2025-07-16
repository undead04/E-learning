import React, { useState } from 'react';
import { IProductType } from '../data/mockProduct';
import { Modal } from 'react-bootstrap';
import PlaceholderProduct from './PlaceholderProduct';
import ProductCard from './ProductCard';
import NotFoundProduct from './NotFoundProduct';
import { toast } from 'react-toastify';
import { getSuggestions } from '../data/suggestionApi';

interface SuggestionButtonProps {
  userId: string;
}

const SuggestionButton: React.FC<SuggestionButtonProps> = ({ userId }) => {
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [suggestedProducts, setSuggestedProducts] = useState<IProductType[]>([]);
  const [showSuggestionModal, setShowSuggestionModal] = useState<boolean>(false);
  const handleSuggest = () => {
      getSuggestions('user1')
          .then((res)=>setSuggestedProducts(res))
          .catch((err)=>{
            toast.error("Không thể lấy gợi ý lúc này")
            handleCloseModal() 
            console.log(err)
          })
          .finally(()=>{
            setIsLoading(false)
          })
  };
  const handleCloseModal = () =>{
    setShowSuggestionModal(false)
    setIsLoading(true)
  }
  return (
    <>
      <Modal show={showSuggestionModal} size="xl" fullscreen onHide={() => handleCloseModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Gợi ý sản phẩm phù hợp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  {isLoading ? (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {Array.from({ length: 6 }, (_, index) => (
        <div className="col mb-3" key={index}>
          <PlaceholderProduct />
        </div>
      ))}
    </div>
  ) : suggestedProducts.length > 0 ? (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {suggestedProducts.map((product) => (
        <div className="mb-3" key={product.id}>
          <ProductCard
            id={product.id}
            title={product.name}
            description={product.description}
            imageUrl={product.image}
            price={product.price}
            longDescription={product.longDescription || ""}
            rating={product.rating || 0}
          />
        </div>
      ))}
    </div>
  ) : (
   <NotFoundProduct message='Rất tiếc, không tìm thấy sản phẩm nào phù hợp'/>
  )}
</Modal.Body>

      </Modal>
      <div>
      <button className="btn btn-info text-white fw-bold" onClick={()=>{
        handleSuggest();
        setShowSuggestionModal(true);
      }}>
          Gợi ý sản phẩm phù hợp
        </button>
    </div>
    </>
    
  );
};

export default SuggestionButton; 