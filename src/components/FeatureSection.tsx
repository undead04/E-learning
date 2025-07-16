function FeatureSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className=" mb-4">
            <div className="p-4 bg-white rounded shadow-sm h-100 feature-box">
              <div style={{fontSize: 36}}>👨‍🏫</div>
              <h5 className="mt-3">Học 1-1 với chuyên gia</h5>
              <p className="text-muted">Cá nhân hoá lộ trình, tương tác trực tiếp với giảng viên.</p>
            </div>
          </div>
          <div className=" mb-4">
            <div className="p-4 bg-white rounded shadow-sm h-100 feature-box">
              <div style={{fontSize: 36}}>🤖</div>
              <h5 className="mt-3">Gợi ý AI thông minh</h5>
              <p className="text-muted">Đề xuất khoá học phù hợp dựa trên hành vi và sở thích.</p>
            </div>
          </div>
          <div className=" mb-4">
            <div className="p-4 bg-white rounded shadow-sm h-100 feature-box">
              <div style={{fontSize: 36}}>⏰</div>
              <h5 className="mt-3">Linh hoạt thời gian</h5>
              <p className="text-muted">Chủ động học mọi lúc, mọi nơi, phù hợp lịch cá nhân.</p>
            </div>
          </div>
          <div className=" mb-4">
            <div className="p-4 bg-white rounded shadow-sm h-100 feature-box">
              <div style={{fontSize:36}}>🌏</div>
              <h5 className="mt-3">Cộng đồng học tập</h5>
              <p className="text-muted">Kết nối, chia sẻ kinh nghiệm với hàng ngàn học viên.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeatureSection; 