import styles from '../styles/HeroSection.module.css';
function HeroSection() {
  return (
    <section
      className={`${styles.hero_section} text-white py-5`}
    >
      <div className={`container position-relative z-2`}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1
              className={`${styles.text_gradient} display-4 fw-bold`}
            >
              Nâng tầm tri thức với các khoá học trực tuyến
            </h1>
            <p
              className={`${styles.text_gradient} lead`}
            >
              Học cùng chuyên gia, trải nghiệm AI gợi ý thông minh, chọn khoá học phù hợp nhất cho bạn.
            </p>
            <a
              href="/product"
              className={`btn btn-lg mt-3 border-0  ${styles.gradient_btn}`}
            >
              Khám phá khoá học
            </a>
          </div>
          <div className="col-md-6 text-center position-relative">
            <img
              src="../banner.png"
              alt="E-learning"
              className={`img-fluid ${styles.img_banner}`}
            />
          </div>
        </div>
      </div>
      {/* Optional: subtle background image overlay for effect */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '55%',
          background: 'linear-gradient(90deg, rgba(88,74,248,0.0) 0%, rgba(185,131,255,0.18) 100%)',
          zIndex: 1,
        }}
      />
    </section>
  );
}
export default HeroSection; 