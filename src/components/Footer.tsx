function Footer() {
  return (
    <footer className="py-4" style={{background:'#180931', color:'#fff'}}>
      <div className="container text-center">
        <div className="mb-2">
          <strong>E-Learning Platform</strong> &copy; {new Date().getFullYear()} | Liên hệ: info@elearning.vn
        </div>
        <div>
          <a href="#" className="text-white me-3">Facebook</a>
          <a href="#" className="text-white me-3">YouTube</a>
          <a href="#" className="text-white">Zalo</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer; 