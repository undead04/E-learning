import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchComponent from "../components/Search";
import ProductCard from "../components/ProductCard";
import { IProductType } from "../data/mockProduct";
import SuggestionButton from "../components/SuggestionButton";
import PlaceholderProduct from "../components/PlaceholderProduct";
import NotFoundProduct from "../components/NotFoundProduct";
import { getProduct } from "../data/productApi";
import { removeVietnameseTones, searchProduct } from "../utils/searchProduct";

function ProductPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";
  const priceFilter = parseInt(queryParams.get("price") || "-1");

  const [products, setProducts] = useState<IProductType[]>([]);
  const [filter, setFilter] = useState({ search: searchQuery, price: priceFilter });
 
  const [isLoading, setIsLoading] = useState(true);

  // Load product theo query url
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      let result = await getProduct();

      const search = queryParams.get("search") || "";
      const price = parseInt(queryParams.get("price") || "-1");

      if (search) {
        result = result.filter(re=>removeVietnameseTones(re.name).includes(removeVietnameseTones(search)))
      }

      if (price !== -1) {
        result = result.filter(p => {
          if (price === 0) return p.price < 500000;
          if (price === 1) return p.price >= 500000 && p.price <= 1000000;
          if (price === 2) return p.price > 1000000;
        });
      }
      result.sort((a, b) => a.price - b.price); // Sort by price for consistency
      setProducts(result);
      setIsLoading(false);
    };

    loadProducts();
  }, [location.search]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filter.search) params.set("search", filter.search);
    if (filter.price !== -1) params.set("price", filter.price.toString());
    navigate(`?${params.toString()}`);
  };

  return (
    <section className="py-4">
      <div className="container">
      {/* Bộ lọc & tìm kiếm */}
      <div className="row mb-4 g-3 align-items-end justify-content-between">
        <div className="col-12 col-md-6">
          <div className="input-group shadow-sm rounded-4">
            <SearchComponent
              placeholder="Tìm kiếm sản phẩm..."
              ariaLabel="Search products"
              id="search"
              value={filter.search}
              onChange={(e) => setFilter({ ...filter, search: e.target.value })}
            />
          </div>
        </div>
        <div className="col-6 col-md-2">
          <select
            className="form-select rounded-4 shadow-sm"
            value={filter.price}
            onChange={(e) => setFilter({ ...filter, price: parseInt(e.target.value) })}
            style={{ minHeight: 44, fontWeight: 500 }}
          >
            <option value={-1}>Tất cả giá</option>
            <option value={0}>Dưới 500K</option>
            <option value={1}>500K - 1 triệu</option>
            <option value={2}>Trên 1 triệu</option>
          </select>
        </div>
        <div className="col-6 col-md-2">
          <button
            className="btn btn-gradient w-100 rounded-4 shadow-sm"
            style={{
              background: 'linear-gradient(90deg, #584af8 0%, #b983ff 100%)',
              color: '#fff',
              fontWeight: 600,
              border: 'none',
              minHeight: 44
            }}
            onClick={handleSearch}
          >
            <i className="bi bi-funnel-fill me-2"></i>Lọc
          </button>
        </div>
        <div className="col-12 col-md-2 ">
          <SuggestionButton
            userId="user1"
          />
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <h2 className="mb-3 fw-bold">Danh sách sản phẩm</h2>
      <p className="text-muted mb-4">
        Hiển thị {products.length} sản phẩm phù hợp với tìm kiếm của bạn.
      </p>
      {
        isLoading ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {Array.from({ length: 6 }, (_, index) => (
              <div className="col mb-3" key={index}>
                <PlaceholderProduct />
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {products.map((product) => (
              <div className="col mb-3" key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.name}
                  description={product.description}
                  imageUrl={product.image}
                  price={product.price}
                  longDescription={product.longDescription || ''}
                  rating={product.rating || 0}
                />
              </div>
            ))}
          </div>
        ) : (
          <NotFoundProduct message="Không có sản phẩm nào phù hợp với tìm kiếm của bạn." />
        )
      }

      {/* Nút tải thêm giả lập */}
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-secondary">Tải thêm</button>
      </div>

    </div>
    </section>
  );
}

export default ProductPage;
