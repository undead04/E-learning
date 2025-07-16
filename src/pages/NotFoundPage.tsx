import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="mb-3">Không tìm thấy trang</h2>
      <p className="text-muted mb-4">Trang bạn tìm kiếm không tồn tại hoặc đã bị xoá.</p>
      <Link to="/" className="btn btn-primary btn-lg">Quay về trang chủ</Link>
    </div>
  );
}

export default NotFoundPage; 